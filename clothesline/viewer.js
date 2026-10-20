// viewer.js
// 封装 Open File Viewer（@open-file-viewer/core，经 esm.sh 以 ESM 形式从 CDN 加载），
// 为“文件晾晒墙”提供统一的在线预览能力：
//   PDF / Office(docx/xlsx/pptx) / 图片 / 音视频 / 压缩包 / 文本 ……
//
// 注意：该库提供的是 createViewer() 函数式 API（以及 React/Vue/Svelte 组件），
// 并非 <allfile-preview> 自定义元素，因此这里用“动态 import + createViewer”接入。
// 动态 import 的好处：CDN 不可用时整个模块加载失败会被 catch，晾晒墙主功能不受影响。

// 引擎本地托管（vendor/ofv-core.bundle.mjs）：零外部请求，任何浏览器/网络都能打开预览
const CORE_URL = './vendor/ofv-core.bundle.mjs';
// pdfjs worker：本地托管（与 core 的 pdfjs-dist 5.7.284 同版本，零外部请求）
const PDF_WORKER = './pdf.worker.min.mjs';
// CID 字体（中文 PDF 常见）的 cmap / 标准字体：同样本地托管，避免首页渲染成空白
const CMAP_URL = './cmaps/';
const STD_FONT_URL = './standard_fonts/';

let corePromise = null;
function loadCore() {
  if (!corePromise) corePromise = import(/* @vite-ignore */ CORE_URL);
  return corePromise;
}

/**
 * dataURL → Blob。
 * 本地添加的文件以 dataURL 形态存在（localStorage 持久化），
 * 而 fetch() 不支持 data: 协议，viewer 又需要 Blob/File 才能解析，故在此转换。
 */
function dataUrlToBlob(dataUrl) {
  const comma = dataUrl.indexOf(',');
  const head = dataUrl.slice(0, comma);
  const body = dataUrl.slice(comma + 1);
  const mime = (head.match(/:(.*?);/) || [, 'application/octet-stream'])[1];
  const isBase64 = head.includes(';base64');
  let bytes;
  if (isBase64) {
    const bin = atob(body);
    bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  } else {
    bytes = new Uint8Array(encodeURIComponent(body).length);
    // decodeURIComponent 逐字符太慢，直接按 UTF-8 码元构造
    const enc = new TextEncoder().encode(decodeURIComponent(body));
    bytes = enc;
  }
  return new Blob([bytes], { type: mime });
}

let currentViewer = null;

/**
 * 在 container 中挂载预览。
 * @param {HTMLElement} container 预览容器
 * @param {{name:string, type:string, url:string}} file 文件
 * @returns {Promise<object>} viewer 实例
 */
export async function mountViewer(container, file) {
  const {
    createViewer,
    imagePlugin,
    videoPlugin,
    audioPlugin,
    textPlugin,
    pdfPlugin,
    officePlugin,
    archivePlugin,
    fallbackPlugin,
  } = await loadCore();

  const isData = typeof file.url === 'string' && file.url.startsWith('data:');
  const source = isData ? dataUrlToBlob(file.url) : file.url;

  const plugins = [
    imagePlugin(),
    videoPlugin(),
    audioPlugin(),
    textPlugin(),
    pdfPlugin({ workerSrc: PDF_WORKER, cMapUrl: CMAP_URL, standardFontDataUrl: STD_FONT_URL }),
    officePlugin(),
    archivePlugin(),
    fallbackPlugin(),
  ];

  currentViewer = createViewer({
    container,
    file: source,
    fileName: file.name,
    width: '100%',
    height: '100%',
    fit: 'contain',
    toolbar: true,
    theme: 'light',
    plugins,
  });
  return currentViewer;
}

/** 卸载当前预览实例，释放资源 */
export function destroyViewer() {
  try {
    if (currentViewer && typeof currentViewer.destroy === 'function') {
      currentViewer.destroy();
    }
  } catch (_) { /* 忽略卸载错误 */ }
  currentViewer = null;
}
