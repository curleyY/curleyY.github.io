// thumb.js
// 卡片内容缩略预览：让晾晒墙的每张卡片直接“看见”文件内容。
//  图片 → <img> 真缩略；视频 → <video> 首帧；
//  PDF  → pdf.js 渲染第一页到 canvas（worker 本地化）；
//  网站链接(link) → 网站自己的图标（favicon），失败回退链接图标卡；
//  Office(docx/xlsx/pptx) → jszip 解包 XML，提取正文前几行做文字摘要；
//  音频 → CSS 音波装饰；其余类型不渲染（保留图标卡片）。
// 任何一步失败都会移除预览区， gracefully 回退为原图标卡片。

// 引擎全部本地托管（vendor/）：零外部请求，任何浏览器/网络下都能出预览
const PDFJS_URL = './vendor/pdf.min.mjs';
const JSZIP_URL = './vendor/jszip.min.mjs';
const WORKER_URL = './pdf.worker.min.mjs'; // 与 viewer.js 同一份本地 worker
// CID 字体（中文 PDF 常见）渲染/取字都需要 cmap，缺失时首页会渲染成空白画布——必须同源托管
const CMAP_URL = './cmaps/';
const STD_FONT_URL = './standard_fonts/';

/* ---------- 工具 ---------- */

// dataURL → Blob（localStorage 持久化的本地文件是 dataURL 形态，fetch 不支持 data: 协议）
function dataUrlToBlob(dataUrl) {
  const comma = dataUrl.indexOf(',');
  const head = dataUrl.slice(0, comma);
  const body = dataUrl.slice(comma + 1);
  const mime = (head.match(/:(.*?);/) || [, 'application/octet-stream'])[1];
  const bin = atob(body);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

async function getArrayBuffer(file) {
  if (typeof file.url === 'string' && file.url.startsWith('data:')) {
    return await dataUrlToBlob(file.url).arrayBuffer();
  }
  const res = await fetch(file.url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.arrayBuffer();
}

const IMAGE_TYPES = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'avif', 'heic']);
const VIDEO_TYPES = new Set(['mp4', 'webm', 'mov', 'm4v']);

/* ---------- 各类型渲染 ---------- */

function renderImage(box, file) {
  const img = document.createElement('img');
  img.src = file.url;
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onerror = () => box.remove();
  box.appendChild(img);
}

function renderVideo(box, file) {
  // #t=0.1 让浏览器加载第 0.1 秒的画面作为静态首帧（preload=metadata 不发起完整下载）
  const video = document.createElement('video');
  video.src = `${file.url}#t=0.1`;
  video.preload = 'metadata';
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('aria-hidden', 'true');
  video.onerror = () => box.remove();
  box.appendChild(video);
}

function renderAudio(box) {
  // 静态音波装饰（纯 CSS 柱条）
  const wave = document.createElement('span');
  wave.className = 'card__wave';
  wave.setAttribute('aria-hidden', 'true');
  wave.innerHTML = Array.from({ length: 9 }, (_, i) =>
    `<i style="height:${[38, 62, 88, 54, 100, 66, 82, 46, 70][i]}%"></i>`
  ).join('');
  box.appendChild(wave);
}

/* ---------- 网站链接：显示网站自己的图标（favicon） ---------- */
//  优先用数据自带 icon；没有则试探网站根目录的 /favicon.ico；
//  加载失败（404 / 返回 HTML / 超时）→ 移除预览区，回退统一的链接图标卡。
function renderLink(box, file) {
  let iconUrl = file.icon || null;
  if (!iconUrl) {
    try {
      iconUrl = new URL('/favicon.ico', file.url).href;
    } catch {
      iconUrl = null;
    }
  }
  if (!iconUrl) {
    box.remove();
    return;
  }
  const img = document.createElement('img');
  img.className = 'card__thumb-img card__thumb-img--icon';
  img.src = iconUrl;
  img.alt = '';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.onload = () => {
    // favicon 加载成功：隐藏左上角默认链条图标，让品牌图标成为唯一视觉焦点
    const card = box.closest('.card');
    if (card) card.classList.add('has-site-icon');
  };
  img.onerror = () => box.remove(); // 回退链接图标卡（默认链条图标保持显示）
  box.appendChild(img);
}

/* ---------- PDF 缩略：分层渲染，保证任何 PDF 都有可见内容 ---------- */
//  第 1 层：pdf.js 把首页渲染到 canvas（只渲染首页，不翻页）
//  第 2 层：渲染失败 / 首页空白 / 超时 → 提取首页文字摘要
//  第 3 层：文字也拿不到（加密 / 解析失败）→ 一行状态字（页数 / 已加密）
// 大文件、扫描长图、加密 PDF 都不会再把卡片永久留在空白状态。

const PDF_TIMEOUT = { import: 30000, read: 20000, parse: 20000, page: 10000, render: 20000, text: 8000 };

// 给可能长时间挂起的 Promise 加超时（超大文件在手机上可能解码 OOM 卡死）
function withTimeout(promise, ms, label) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label}超时`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// 渲染中的轻量提示：被 canvas / 文字摘要 / 状态行替换前，用户看得到“正在处理”
function thumbHint(box, text) {
  const hint = document.createElement('span');
  hint.className = 'card__thumb-hint';
  hint.textContent = text;
  box.appendChild(hint);
  return hint;
}

// 抽样判断画布是否“空白页”（全白/全透明）：封面页或解码失败时，看起来和没有预览一样。
// 阈值取得极保守（<0.1% 墨水），只拦真正全白的页面，避免误杀文字稀疏的正文页。
function canvasIsBlank(canvas) {
  try {
    const { data } = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    let samples = 0;
    let ink = 0;
    for (let i = 0; i < data.length; i += 4 * 101) {
      samples++;
      if (data[i + 3] > 16 && (data[i] < 230 || data[i + 1] < 230 || data[i + 2] < 230)) ink++;
    }
    return samples > 0 && ink / samples < 0.001;
  } catch (_) {
    return false; // 取不到像素就不纠结，照常展示
  }
}

// 不启动 pdf.js，直接从原始字节粗数页数（/Type /Page，排除 /Pages）
function pdfPageCount(bytes) {
  try {
    const bin = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    const head = bin.subarray(0, Math.min(bin.length, 6 * 1024 * 1024));
    const m = new TextDecoder('latin1').decode(head).match(/\/Type\s*\/Page(?![s\w])/g);
    return m ? m.length : 0;
  } catch (_) {
    return 0;
  }
}

// 最后一层：一行状态文字（页数 / 加密提示），保证卡片不空白
function pdfStatusLine(box, bytes, err) {
  const encrypted =
    !!err && (err.name === 'PasswordException' || /password/i.test(String(err.message || '')));
  const n = bytes ? pdfPageCount(bytes) : 0;
  const label = encrypted ? 'PDF · 已加密' : n > 1 ? `PDF · ${n} 页` : n === 1 ? 'PDF · 单页文档' : 'PDF 文档';
  const line = document.createElement('div');
  line.className = 'card__thumb-text card__thumb-text--center';
  const span = document.createElement('span');
  span.textContent = label;
  line.appendChild(span);
  box.appendChild(line);
}

async function renderPdf(box, file) {
  // 目标只有一个：把第一页渲染出来。渲染不出来（超时/加密/兼容性）才退到文字兜底，
  // 保证卡片任何情况下都不空白。
  const hint = thumbHint(box, '首页渲染中…');
  let pdf = null;
  let buf = null;
  try {
    const pdfjs = await withTimeout(import(/* @vite-ignore */ PDFJS_URL), PDF_TIMEOUT.import, '引擎加载');
    pdfjs.GlobalWorkerOptions.workerSrc = WORKER_URL;
    buf = await withTimeout(getArrayBuffer(file), PDF_TIMEOUT.read, '文件读取');
    pdf = await withTimeout(
      pdfjs
        .getDocument({
          // slice(0) 拷贝：getDocument 会把缓冲区转移给 worker，原 buf 还要留给页数兜底
          data: new Uint8Array(buf.slice(0)),
          cMapUrl: CMAP_URL,
          standardFontDataUrl: STD_FONT_URL,
        })
        .promise,
      PDF_TIMEOUT.parse,
      'PDF 解析'
    );
    const page = await withTimeout(pdf.getPage(1), PDF_TIMEOUT.page, '首页读取');
    const v1 = page.getViewport({ scale: 1 });
    const w = 320; // 2x 于卡片宽度，保证缩放/高清屏下清晰
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = Math.round((w * v1.height) / v1.width);
    await withTimeout(
      page.render({
        canvasContext: canvas.getContext('2d'),
        viewport: page.getViewport({ scale: w / v1.width }),
      }).promise,
      PDF_TIMEOUT.render,
      '首页渲染'
    );
    if (canvasIsBlank(canvas)) throw new Error('首页为空白页');
    hint.remove();
    box.appendChild(canvas);
  } catch (err) {
    // 首页没渲染出来：能拿到文档就试试提取首页文字，再不行给一行状态字
    let lines = [];
    if (pdf) {
      try {
        const page = await withTimeout(pdf.getPage(1), PDF_TIMEOUT.page, '首页读取');
        const tc = await withTimeout(page.getTextContent(), PDF_TIMEOUT.text, '文字提取');
        lines = tc.items
          .map((it) => String(it.str || '').trim())
          .filter(Boolean)
          .slice(0, 4)
          .map((t) => (t.length > 40 ? t.slice(0, 40) + '…' : t));
      } catch (_) {
        /* 文字也拿不到：走状态行 */
      }
    }
    hint.remove();
    if (lines.length) renderSummary(box, lines);
    else pdfStatusLine(box, buf, err);
  } finally {
    try {
      if (pdf) pdf.destroy();
    } catch (_) {
      /* 已销毁则忽略 */
    }
  }
}

/* Office：解包 zip 提取文字，渲染摘要 */
function xmlDoc(text) {
  return new DOMParser().parseFromString(text, 'application/xml');
}
const textsOf = (root, tag) =>
  [...root.getElementsByTagName(tag)].map((n) => n.textContent.trim()).filter(Boolean);

function renderSummary(box, lines) {
  const wrap = document.createElement('div');
  wrap.className = 'card__thumb-text';
  lines.forEach((t) => {
    const line = document.createElement('span');
    line.textContent = t;
    wrap.appendChild(line);
  });
  box.appendChild(wrap);
}

async function renderOffice(box, file, type) {
  const JSZip = (await import(/* @vite-ignore */ JSZIP_URL)).default;
  const buf = await getArrayBuffer(file);
  const zip = await JSZip.loadAsync(buf);

  if (type === 'docx') {
    const xml = xmlDoc(await zip.file('word/document.xml').async('text'));
    const paras = [...xml.getElementsByTagName('w:p')]
      .map((p) => textsOf(p, 'w:t').join(' ').trim())
      .filter(Boolean);
    if (!paras.length) throw new Error('empty docx');
    renderSummary(box, paras.slice(0, 4).map((t) => (t.length > 40 ? t.slice(0, 40) + '…' : t)));
    return;
  }

  if (type === 'xlsx') {
    const names = zip.file(/xl\/worksheets\/sheet\d+\.xml$/);
    const first = names[0];
    let rows = 0;
    if (first) {
      const sheet = xmlDoc(await first.async('text'));
      rows = sheet.getElementsByTagName('row').length;
    }
    const shared = zip.file('xl/sharedStrings.xml');
    const values = shared ? textsOf(xmlDoc(await shared.async('text')), 't') : [];
    if (!rows && !values.length) throw new Error('empty xlsx');
    const head = values.slice(0, 4).map((t) => (t.length > 12 ? t.slice(0, 12) + '…' : t));
    renderSummary(box, [
      `${rows ? rows + ' 行数据' : '数据表'}`,
      ...head,
    ]);
    return;
  }

  if (type === 'pptx') {
    const slides = zip.file(/ppt\/slides\/slide\d+\.xml$/).sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true })
    );
    const lines = [];
    for (const s of slides.slice(0, 2)) {
      const xml = xmlDoc(await s.async('text'));
      const t = textsOf(xml, 'a:t').join(' ').trim();
      if (t) lines.push(t.length > 40 ? t.slice(0, 40) + '…' : t);
    }
    if (!lines.length) throw new Error('empty pptx');
    renderSummary(box, lines);
  }
}

/* ---------- 入口 ---------- */

export async function renderThumb(box, file) {
  const type = String(file.type || '').toLowerCase();
  try {
    if (type === 'image' || IMAGE_TYPES.has(type)) {
      renderImage(box, file);
    } else if (type === 'pdf') {
      await renderPdf(box, file);
    } else if (type === 'video' || VIDEO_TYPES.has(type)) {
      renderVideo(box, file);
    } else if (type === 'audio' || ['mp3', 'ogg', 'wav', 'flac', 'm4a'].includes(type)) {
      renderAudio(box);
    } else if (type === 'link') {
      renderLink(box, file);
    } else if (['docx', 'xlsx', 'pptx'].includes(type)) {
      await renderOffice(box, file, type);
    } else {
      box.remove(); // 压缩包等：不渲染缩略，保留图标卡片
      return;
    }
    box.dataset.thumbDone = '1';
  } catch (err) {
    // 预览失败（跨域受限 / 解析失败）：移除预览区，回退为图标卡片
    console.warn('[thumb] 缩略渲染失败，回退图标卡片：', file.name, err);
    box.remove();
  }
}
