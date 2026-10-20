// clothesline.js
// 文件晾晒墙组件（原生实现，零依赖）。
// 预览引擎（pdf.js / JSZip / Open File Viewer）全部本地托管于 vendor/，
// 封装见 viewer.js；引擎不可用时自动降级为 iframe / 下载卡片兜底。

/* =========================================================
 * 1) 初始挂绳内容（网站书签）
 *    type: 'link' = 网站链接；icon: 网站自己的图标（favicon），
 *    全部本地托管于 vendor/site-icons/（外链图标有跨域/ORB 加载失败风险），
 *    加载失败会自动回退为统一的蓝色链条图标
 * ======================================================= */
const files = [
  {
    name: 'Plottie · 科研图表库',
    type: 'link',
    url: 'https://plottie.art/',
    icon: './vendor/site-icons/plottie.ico', // 原 favicon.svg 是套娃 SVG，img 加载会被 ORB 拦截，故用 ICO
  },
  {
    name: 'Apache ECharts',
    type: 'link',
    url: 'https://echarts.apache.org/zh/index.html',
    icon: './vendor/site-icons/echarts.png',
  },
  {
    name: 'PubScholar 公益学术平台',
    type: 'link',
    url: 'https://pubscholar.cn/',
    icon: './vendor/site-icons/pubscholar.svg',
  },
];

/* =========================================================
 * 2) 类型 → 标签 / 配色 / 线性图标
 *    图标为 24×24 stroke 风格 SVG（与极简白夹同风格，替代拟真 emoji）；
 *    color 用于图标与淡色底块，ink 为同色系加深色（保证白底上的文字对比度）。
 * ======================================================= */
const ICON = {
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  fileText:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  table:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
  presentation:
    '<path d="M2 4h20v11H2z"/><path d="M8 21h8"/><path d="M12 15v6"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  video:
    '<rect x="2" y="5" width="14" height="14" rx="2"/><path d="M22 8l-6 4 6 4V8z"/>',
  music:
    '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  archive:
    '<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>',
  link:
    '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  folder:
    '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
};

// 按文件类型分色：Word 蓝 / PDF 红 / Excel 绿 / PPT 橙 / 图片 黄 …
const TYPE_META = {
  pdf:   { label: 'PDF',  color: '#E5484D', ink: '#C93A3F', icon: ICON.file },
  image: { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  jpg:   { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  jpeg:  { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  png:   { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  gif:   { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  webp:  { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  svg:   { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  bmp:   { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  heic:  { label: '图片', color: '#FFC53D', ink: '#9E6A00', icon: ICON.image },
  doc:   { label: '文档', color: '#3E63DD', ink: '#2F53C4', icon: ICON.fileText },
  docx:  { label: '文档', color: '#3E63DD', ink: '#2F53C4', icon: ICON.fileText },
  xls:   { label: '表格', color: '#30A46C', ink: '#1F8A55', icon: ICON.table },
  xlsx:  { label: '表格', color: '#30A46C', ink: '#1F8A55', icon: ICON.table },
  ppt:   { label: '演示', color: '#F76B15', ink: '#D55A0C', icon: ICON.presentation },
  pptx:  { label: '演示', color: '#F76B15', ink: '#D55A0C', icon: ICON.presentation },
  video: { label: '视频', color: '#8E4EC6', ink: '#7A3FB0', icon: ICON.video },
  mp4:   { label: '视频', color: '#8E4EC6', ink: '#7A3FB0', icon: ICON.video },
  webm:  { label: '视频', color: '#8E4EC6', ink: '#7A3FB0', icon: ICON.video },
  mov:   { label: '视频', color: '#8E4EC6', ink: '#7A3FB0', icon: ICON.video },
  audio: { label: '音频', color: '#D6409F', ink: '#B83089', icon: ICON.music },
  mp3:   { label: '音频', color: '#D6409F', ink: '#B83089', icon: ICON.music },
  ogg:   { label: '音频', color: '#D6409F', ink: '#B83089', icon: ICON.music },
  wav:   { label: '音频', color: '#D6409F', ink: '#B83089', icon: ICON.music },
  flac:  { label: '音频', color: '#D6409F', ink: '#B83089', icon: ICON.music },
  txt:   { label: '文本', color: '#0091B2', ink: '#00748C', icon: ICON.fileText },
  md:    { label: '文本', color: '#0091B2', ink: '#00748C', icon: ICON.fileText },
  json:  { label: '文本', color: '#0091B2', ink: '#00748C', icon: ICON.fileText },
  csv:   { label: '文本', color: '#0091B2', ink: '#00748C', icon: ICON.fileText },
  zip:   { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  tgz:   { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  gz:    { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  tar:   { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  rar:   { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  '7z':  { label: '压缩包', color: '#66707A', ink: '#4E585F', icon: ICON.archive },
  link:  { label: '链接', color: '#0091FF', ink: '#0072CC', icon: ICON.link },
};

const FALLBACK_META = {
  label: '文件',
  color: '#66707A',
  ink: '#4E585F',
  icon: ICON.folder,
};

const hexToRgba = (hex, a) => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

// 缓存 soft 底色（color 的 14% 透明度），供图标底块使用
function decorate(meta) {
  if (meta && meta.color && !meta.soft) meta.soft = hexToRgba(meta.color, 0.14);
  return meta;
}

const metaOf = (type) => decorate(TYPE_META[type?.toLowerCase()] || { ...FALLBACK_META });

// 卡片 / 下载卡片共用的图标 SVG 外壳
const iconSvg = (meta) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${meta.icon}</svg>`;

// 浏览器可原生内嵌渲染的类型；其余（xlsx/docx/pptx/zip…）走“下载/打开”卡片
const INLINE_TYPES = new Set([
  'pdf', 'image', 'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg',
  'video', 'mp4', 'webm', 'audio', 'mp3', 'ogg', 'wav', 'txt', 'link',
]);

/* =========================================================
 * 3) 挂载组件
 * ======================================================= */
const SAG = 36; // 必须与 styles.css 中 --sag 一致（绳子最大下垂像素，图一风格近乎笔直）

// 卡片缩略的懒加载观察器（提前声明：mountClothesline 在文件中部就会用到，避免 TDZ）
let thumbObserver = null;

function mountClothesline(root, fileList) {
  root.innerHTML = '';

  const track = document.createElement('div');
  track.className = 'rope-track';

  // 下垂绳子 SVG
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'rope-svg');
  svg.setAttribute('preserveAspectRatio', 'none');
  const path = document.createElementNS(svgNS, 'path');
  svg.appendChild(path);
  track.appendChild(svg);

  // 单张卡片的创建逻辑（初始渲染与“网页内添加”复用同一函数）
  function buildItem(file, i) {
    const meta = metaOf(file.type);

    const item = document.createElement('div');
    item.className = 'clip-item';
    item.dataset.i = i;

    const hang = document.createElement('div');
    hang.className = 'clip-item__hang';
    // 让每张卡片摆动节奏不同，更自然
    hang.style.animationDelay = `${(i % 5) * -0.9}s`;
    hang.style.animationDuration = `${4 + (i % 4) * 0.6}s`;

    const pin = document.createElementNS(svgNS, 'svg');
    pin.setAttribute('class', 'pin');
    pin.setAttribute('viewBox', '0 0 24 48');
    pin.setAttribute('aria-hidden', 'true');
    pin.innerHTML =
      '<rect x="4" y="2" width="12" height="4.5" rx="2" fill="url(#pinWhite)"/>' +
      '<rect x="5" y="4" width="4.5" height="40" rx="2.25" fill="url(#pinWhite)"/>' +
      '<rect x="10.5" y="4" width="4.5" height="40" rx="2.25" fill="url(#pinWhite)"/>' +
      '<rect x="2.5" y="13" width="15" height="4" rx="2" fill="url(#pinMetal)"/>' +
      '<line x1="10" y1="7" x2="10" y2="43" stroke="#d3d9df" stroke-width="0.7"/>';

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.setAttribute('aria-label', `预览文件：${file.name}`);
    // 允许拖到右下角碎纸机碎掉
    card.draggable = true;
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(i));
      item.style.opacity = '0.5';
    });
    card.addEventListener('dragend', () => { item.style.opacity = ''; });

    /* —— 移动端长按拖拽：长按卡片浮起（一根绳子牵着），拖到右下角碎纸机松手即粉碎，
       绳子断；未拖到则松手回弹，绳子跟着收回去 ——
       （桌面鼠标仍走上面的 HTML5 drag & drop，两条通路互不干扰） */
    let lpTimer = null;
    let lpStart = null;
    let lpClone = null;
    let lpRope = null;      // 牵引绳 SVG 覆盖层
    let lpAnchor = null;    // 绳子锚点：卡片挂在绳子上的位置（夹子处）
    let lpActive = false;
    let lpRaf = 0;
    const LP_DELAY = 450; // 长按判定时长
    const LP_TOL = 10;    // 长按触发前允许的手指抖动（超出则视为横向滚动画布）

    const lpShredderHit = (x, y) => {
      const s = document.getElementById('shredder');
      if (!s) return false;
      const r = s.getBoundingClientRect();
      const pad = 14; // 命中容差：拖到机器边缘也算
      return x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad;
    };
    const lpSetHover = (on) => {
      const s = document.getElementById('shredder');
      if (s) s.classList.toggle('is-dragover', on);
    };
    const lpRemoveRope = () => {
      if (lpRaf) { cancelAnimationFrame(lpRaf); lpRaf = 0; }
      if (lpRope) { lpRope.remove(); lpRope = null; }
    };
    // 绳子路径：锚点 → 目标点，带一点自然下垂
    const lpRopeD = (cx, cy) => {
      if (!lpAnchor) return '';
      const mx = (lpAnchor.x + cx) / 2;
      const sag = Math.min(40, Math.hypot(cx - lpAnchor.x, cy - lpAnchor.y) * 0.15);
      return `M ${lpAnchor.x} ${lpAnchor.y} Q ${mx} ${(lpAnchor.y + cy) / 2 + sag} ${cx} ${cy}`;
    };
    const lpCleanup = () => {
      clearTimeout(lpTimer); lpTimer = null;
      lpStart = null; lpActive = false;
      lpSetHover(false);
      lpRemoveRope();
      if (lpClone) { lpClone.remove(); lpClone = null; }
      card.classList.remove('is-lifting');
    };

    card.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1 || lpActive) return;
      const t = e.touches[0];
      lpStart = { x: t.clientX, y: t.clientY };
      lpTimer = setTimeout(() => {
        lpTimer = null;
        if (!lpStart) return;
        lpActive = true;
        if (navigator.vibrate) navigator.vibrate(15); // 轻微震动：告知“已拿起”
        card.classList.add('is-lifting');
        // 绳子锚点：卡片挂在绳子上的位置（夹子顶部）
        const ir = item.getBoundingClientRect();
        lpAnchor = { x: ir.left + ir.width / 2, y: ir.top + 10 };
        // 牵引绳覆盖层
        const ropeSvg = document.createElementNS(svgNS, 'svg');
        ropeSvg.setAttribute('class', 'lp-rope');
        const ropePath = document.createElementNS(svgNS, 'path');
        ropeSvg.appendChild(ropePath);
        document.body.appendChild(ropeSvg);
        lpRope = ropeSvg;
        ropePath.setAttribute('d', lpRopeD(lpStart.x, lpStart.y));
        // 生成跟随手指的克隆卡；canvas 克隆会丢内容，缩略区改用类型图标占位
        const rect = card.getBoundingClientRect();
        const clone = card.cloneNode(true);
        clone.classList.remove('is-lifting');
        clone.classList.add('lp-clone', 'is-dragging');
        clone.style.width = rect.width + 'px';
        clone.style.height = rect.height + 'px';
        clone.style.left = (lpStart.x - rect.width / 2) + 'px';
        clone.style.top = (lpStart.y - rect.height / 2) + 'px';
        const thumb = clone.querySelector('.card__thumb');
        if (thumb) {
          thumb.classList.add('card__thumb--ghost');
          thumb.style.color = meta.color;
          thumb.style.background = meta.soft;
          thumb.innerHTML = iconSvg(meta);
        }
        document.body.appendChild(clone);
        lpClone = clone;
      }, LP_DELAY);
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!lpStart) return;
      const t = e.touches[0];
      if (!lpActive) {
        // 长按未触发就移动：判定为滚动画布，取消长按（不影响正常横滑浏览）
        if (Math.hypot(t.clientX - lpStart.x, t.clientY - lpStart.y) > LP_TOL) {
          clearTimeout(lpTimer); lpTimer = null; lpStart = null;
        }
        return;
      }
      e.preventDefault(); // 阻止绳子横向滚动，移动全部交给拖拽
      if (lpClone) {
        const w = parseFloat(lpClone.style.width) || 200;
        const h = parseFloat(lpClone.style.height) || 200;
        lpClone.style.left = (t.clientX - w / 2) + 'px';
        lpClone.style.top = (t.clientY - h / 2) + 'px';
      }
      if (lpRope) lpRope.querySelector('path').setAttribute('d', lpRopeD(t.clientX, t.clientY));
      lpSetHover(lpShredderHit(t.clientX, t.clientY));
    }, { passive: false });

    // 粉碎：绳子从中间断开，两截各自掉落消失
    const lpBreakRope = () => {
      if (!lpRope) return;
      const svg = lpRope;
      const path = svg.querySelector('path');
      const d = path ? path.getAttribute('d') || '' : '';
      const m = d.match(/^M ([\d.\-]+) ([\d.\-]+) Q ([\d.\-]+) ([\d.\-]+) ([\d.\-]+) ([\d.\-]+)$/);
      if (!m) { lpRemoveRope(); return; }
      const [ax, ay, qx, qy, cx, cy] = m.slice(1).map(Number);
      const midX = 0.25 * ax + 0.5 * qx + 0.25 * cx; // 二次贝塞尔 t=0.5
      const midY = 0.25 * ay + 0.5 * qy + 0.25 * cy;
      const segA = document.createElementNS(svgNS, 'path');
      segA.setAttribute('d', `M ${ax} ${ay} Q ${qx} ${qy} ${midX} ${midY}`);
      const segB = document.createElementNS(svgNS, 'path');
      segB.setAttribute('d', `M ${midX} ${midY} Q ${qx} ${qy} ${cx} ${cy}`);
      path.remove();
      svg.append(segA, segB);
      lpRope = null; // 交给出厂动画管理
      [segA, segB].forEach((seg, k) => {
        seg.animate(
          [
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: `translateY(${16 + k * 12}px)`, opacity: 0 },
          ],
          { duration: 450, easing: 'cubic-bezier(.3,.7,.4,1)' }
        ).onfinish = () => seg.remove();
      });
      setTimeout(() => svg.remove(), 600);
    };

    const lpFinish = (x, y) => {
      if (!lpActive) { lpCleanup(); return; }
      const hit = lpShredderHit(x, y);
      const clone = lpClone;
      card._lpNoClick = Date.now(); // 屏蔽 touchend 合成 click，避免误触预览
      lpActive = false;
      lpSetHover(false);
      card.classList.remove('is-lifting');
      if (hit) {
        // 拖到碎纸机：克隆消失、绳子断开、卡片粉碎删除（碎纸机同步播放粉碎动画）
        if (clone) clone.remove();
        lpClone = null;
        lpBreakRope();
        const name = window.Clothesline && window.Clothesline.shredRemove
          ? window.Clothesline.shredRemove(i)
          : null;
        if (window.Shredder && window.Shredder.shred) window.Shredder.shred(name || file.name);
      } else {
        // 未拖到：克隆平滑弹回原位，绳子跟随收缩后消失
        if (clone) {
          const rect = card.getBoundingClientRect();
          clone.classList.remove('is-dragging');
          clone.classList.add('is-returning');
          clone.style.left = rect.left + 'px';
          clone.style.top = rect.top + 'px';
          const t0 = performance.now();
          const tick = () => {
            if (!lpRope) return;
            const cr = clone.getBoundingClientRect();
            lpRope.querySelector('path').setAttribute(
              'd',
              lpRopeD(cr.left + cr.width / 2, cr.top + cr.height / 2)
            );
            if (performance.now() - t0 < 340) lpRaf = requestAnimationFrame(tick);
          };
          lpRaf = requestAnimationFrame(tick);
          setTimeout(() => { clone.remove(); lpRemoveRope(); }, 340);
        } else {
          lpRemoveRope();
        }
        lpClone = null;
      }
      lpTimer = null; lpStart = null;
    };
    card.addEventListener('touchend', (e) => {
      const t = e.changedTouches[0];
      if (lpActive) lpFinish(t.clientX, t.clientY);
      else { clearTimeout(lpTimer); lpTimer = null; lpStart = null; }
    });
    card.addEventListener('touchcancel', lpCleanup);
    card.innerHTML = `
      <span class="card__icon" style="background:${meta.soft};color:${meta.color}">
        ${iconSvg(meta)}
      </span>
      <span class="card__name">${escapeHtml(file.name)}</span>
      <div class="card__thumb" aria-hidden="true"></div>
      <span class="card__type" style="color:${meta.ink}">${escapeHtml(meta.label)}</span>
    `;
    // 卡片内容缩略：进入视口才按需生成（见文件末尾 lazyThumb）
    lazyThumb(card.querySelector('.card__thumb'), file);
    card.addEventListener('click', () => {
      // 长按拖拽刚结束：忽略浏览器合成的 click，避免误触预览
      if (card._lpNoClick && Date.now() - card._lpNoClick < 600) return;
      // 网站链接（type=link）：书签心智——直接新标签页打开，
      // 不走 iframe 预览（多数网站有 X-Frame-Options，内嵌只会得到空白页）
      if (String(file.type || '').toLowerCase() === 'link' && /^https?:\/\//i.test(file.url || '')) {
        window.open(file.url, '_blank', 'noopener');
        return;
      }
      // 点击后：卡片先被夹子向上“提拉”，再弹出预览（尊重减少动画偏好）
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        void openPreview(file, card);
        return;
      }
      hang.classList.add('is-pulled');
      setTimeout(() => {
        hang.classList.remove('is-pulled');
        void openPreview(file, card);
      }, 280);
    });

    hang.appendChild(pin);
    hang.appendChild(card);
    item.appendChild(hang);
    return item;
  }

  // 初始渲染
  fileList.forEach((file, i) => {
    track.appendChild(buildItem(file, i));
  });

  // 供“网页内添加文件”调用：追加一张卡片并重算布局
  root.__addCard = (file) => {
    const i = files.length; // 新索引
    files.push(file);       // 同步数据源，保证碎纸时索引一致
    const item = buildItem(file, i);
    track.appendChild(item);
    root.__relayout();
    // 新卡可能在横向视口外（绳子很长时）：平滑滚动到可见区，让用户立刻看到刚上传的文件
    requestAnimationFrame(() => {
      item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    return i;
  };

  root.appendChild(track);

  // 根据布局计算绳子曲线 + 每张卡片的下垂错位
  layout();
  const ro = new ResizeObserver(() => layout());
  ro.observe(root);

  function layout() {
    const W = track.scrollWidth;
    const H = SAG + 24;
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    // 二次贝塞尔：两端在 y=10，控制点在 y=10+2*SAG → 中点下垂 SAG
    path.setAttribute('d', `M0,10 Q${W / 2},${10 + 2 * SAG} ${W},10`);

    const items = [...track.querySelectorAll('.clip-item')];
    items.forEach((it) => {
      const cx = it.offsetLeft + it.offsetWidth / 2; // 卡片中心 x
      const t = cx / W; // 0..1
      const oy = 4 * SAG * t * (1 - t); // 中点最大 = SAG
      it.style.transform = `translateY(${oy}px)`;
    });
  }

  // 供外部（如碎纸机删除卡片后）触发重新布局：绳子曲线 + 卡片下垂错位都要跟着重算
  root.__relayout = () => requestAnimationFrame(layout);
}

/* =========================================================
 * 4) 预览弹层（含焦点管理 / Esc 关闭 / 还原焦点）
 * ======================================================= */
const modal = document.getElementById('preview-modal');
const modalBody = document.getElementById('preview-body');
const modalTitle = document.getElementById('modal-title');
let lastFocused = null;

/**
 * 下载文件：优先 fetch→blob 强制按原始文件名保存；
 * 跨域受限或网络失败时，回退为浏览器原生下载（当前窗口触发，不产生空白标签页）。
 */
async function downloadFile(file, btn) {
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = '正在获取文件…';
  try {
    const res = await fetch(file.url, { mode: 'cors' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    btn.textContent = '已开始下载 ✓';
  } catch (err) {
    // CORS / 网络受限：交给浏览器直接处理（octet-stream 等类型会在当前窗口触发原生下载）
    btn.textContent = '交给浏览器处理…';
    location.href = encodeURI(file.url);
  } finally {
    btn.disabled = false;
    setTimeout(() => { btn.textContent = original; }, 2500);
  }
}

/* =========================================================
 * 4) 预览弹层：Open File Viewer（createViewer）+ 兜底降级
 * ======================================================= */
let previewSeq = 0;      // 预览序号：切换/关闭时丢弃过期的异步结果
let viewerModule = null; // viewer.js 模块缓存（false = 加载失败，走兜底）

// 动态加载 viewer.js（内部再按需从 CDN 拉取 @open-file-viewer/core）：
// 这样 CDN 不可用时只会走兜底分支，不会让整个晾晒墙挂掉。
function getViewerModule() {
  if (viewerModule === null) {
    viewerModule = import('./viewer.js?v=23').then(
      (m) => m,
      () => false
    );
  }
  return viewerModule;
}

// 引擎加载/挂载超时兜底：个别超大文件可能让引擎长时间无响应，
// 超时后卸载并降级为 iframe / 下载卡片，避免弹层永远停在“正在加载”。
const MOUNT_TIMEOUT = 25000;
function withTimeout(promise, ms, label) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label}超时`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

function showPreviewLoading(text) {
  const el = document.createElement('div');
  el.className = 'preview-loading';
  el.innerHTML =
    '<span class="preview-loading__spinner" aria-hidden="true"></span>' +
    `<span>${escapeHtml(text)}</span>`;
  modalBody.appendChild(el);
}
const removePreviewLoading = () =>
  modalBody.querySelector('.preview-loading')?.remove();

async function openPreview(file, triggerEl) {
  const seq = ++previewSeq;
  lastFocused = triggerEl || document.activeElement;
  modalTitle.textContent = file.name;
  modalBody.innerHTML = '';
  showPreviewLoading('正在加载预览引擎…');

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn?.focus();

  modal._onKey = (e) => {
    if (e.key === 'Escape') closePreview();
    if (e.key === 'Tab') trapFocus(e);
  };
  document.addEventListener('keydown', modal._onKey);

  const mod = await withTimeout(getViewerModule(), 15000, '引擎加载');
  if (seq !== previewSeq) return; // 加载期间已关闭/切换，丢弃结果

  if (mod) {
    try {
      await withTimeout(mod.mountViewer(modalBody, file), MOUNT_TIMEOUT, '预览挂载');
      if (seq !== previewSeq) {
        // 加载期间已关闭/切换：立刻卸载，避免残留
        mod.destroyViewer();
        return;
      }
      removePreviewLoading();
      // 引擎挂载成功后再看护一段时间：pdf.js 解析/渲染不了的文件（如 JP2 压缩扫描件）
      // 会在弹层里显示 "This page could not be rendered…" 之类的错误页，
      // 检测到就卸载引擎，改用浏览器原生查看器 / 下载卡片兜底。
      watchEngineErrors(file, seq);
      return;
    } catch (err) {
      // 引擎挂载失败/超时（CDN 异常 / 文件跨域受限 / 超大文件无响应）：降级到内置兜底
      console.error('[clothesline] 预览引擎挂载失败，降级兜底：', err);
      try {
        mod.destroyViewer();
      } catch (_) {
        /* 引擎未就绪则忽略 */
      }
    }
  }

  removePreviewLoading();
  if (seq !== previewSeq) return;
  modalBody.innerHTML = ''; // 清掉引擎可能已写入的残留内容
  renderFallback(file);
}

// 引擎内部错误看护
const ENGINE_ERROR_RE = /could not be rendered|could not load|preview failed/i;
function watchEngineErrors(file, seq) {
  const started = Date.now();
  const timer = setInterval(() => {
    const body = document.getElementById('preview-body');
    if (modal.hidden || !body || seq !== previewSeq || Date.now() - started > 20000) {
      clearInterval(timer);
      return;
    }
    if (ENGINE_ERROR_RE.test(body.textContent || '')) {
      clearInterval(timer);
      // 卸载引擎实例，避免它继续往容器里写内容
      if (viewerModule && typeof viewerModule.then === 'function') {
        viewerModule.then((m) => m && m.destroyViewer()).catch(() => {});
      }
      modalBody.innerHTML = '';
      void renderFallback(file);
    }
  }, 800);
}

/* 兜底预览：引擎不可用时，浏览器能内嵌的类型用 iframe，其余给下载卡片。
   注意：用户添加的本地文件是 dataURL 形态，Chrome 禁止在 iframe 里导航 data: URL，
   必须先转成 blob: URL——顺便也让浏览器原生 PDF 查看器（与 pdf.js 互补的另一套引擎）
   有机会渲染 pdf.js 搞不定的文件。 */
let fallbackObjectUrl = null;

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

async function toInlineSrc(file) {
  if (typeof file.url === 'string' && file.url.startsWith('data:')) {
    const url = URL.createObjectURL(dataUrlToBlob(file.url));
    fallbackObjectUrl = url;
    return url;
  }
  return file.url; // http(s) / blob: 直接可用（iframe 不受跨域限制）
}

async function renderFallback(file) {
  const canInline = INLINE_TYPES.has(String(file.type || '').toLowerCase());
  if (canInline) {
    try {
      const src = await toInlineSrc(file);
      const iframe = document.createElement('iframe');
      iframe.className = 'preview-fallback';
      iframe.src = src;
      iframe.title = file.name;
      modalBody.appendChild(iframe);
      return;
    } catch (_) {
      // 转换失败：落到下载卡片
    }
  }
  const meta = metaOf(file.type);
  const wrap = document.createElement('div');
  wrap.className = 'preview-download';
  const icon = document.createElement('div');
  icon.className = 'preview-download__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.style.color = meta.color;
  icon.innerHTML = iconSvg(meta);
  const tip = document.createElement('p');
  tip.innerHTML = `「${escapeHtml(file.name)}」暂不支持在线预览<br>可下载后使用对应软件打开`;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'preview-download__btn';
  btn.textContent = '下载 / 打开文件';
  btn.addEventListener('click', () => downloadFile(file, btn));
  wrap.append(icon, tip, btn);
  modalBody.appendChild(wrap);
}

function closePreview() {
  previewSeq++;
  if (viewerModule && typeof viewerModule.then === 'function') {
    viewerModule.then((m) => m && m.destroyViewer()).catch(() => {});
  }
  modal.hidden = true;
  document.body.style.overflow = '';
  modalBody.innerHTML = ''; // 卸载预览内容，停止其资源占用
  if (fallbackObjectUrl) {
    // 回收兜底 iframe 用的 blob URL，避免内存泄漏
    URL.revokeObjectURL(fallbackObjectUrl);
    fallbackObjectUrl = null;
  }
  if (modal._onKey) document.removeEventListener('keydown', modal._onKey);
  lastFocused?.focus();
}

// 焦点陷阱：仅在弹层内循环
function trapFocus(e) {
  const focusables = modal.querySelectorAll(
    'button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const list = [...focusables].filter((el) => !el.disabled && el.offsetParent !== null);
  if (!list.length) return;
  const first = list[0];
  const last = list[list.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// 绑定关闭交互
modal.querySelectorAll('[data-close]').forEach((el) =>
  el.addEventListener('click', closePreview)
);

/* =========================================================
 * 5) 工具 & 启动
 * ======================================================= */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

const root = document.getElementById('clothesline');
if (root) mountClothesline(root, files);

/* 供碎纸机调用：按索引移除卡片 / 移除第一张（返回文件名用于碎纸动画） */
function shredRemove(idx) {
  const el = document.querySelector(`.clip-item[data-i="${idx}"]`);
  if (!el) return null;
  const i = Number(idx);
  const name = files[i] ? files[i].name : '文件';
  el.style.transition = 'transform .3s ease, opacity .3s ease';
  el.style.opacity = '0';
  el.style.transform = 'scale(.7)';
  setTimeout(() => {
    el.remove();
    // 关键：卡片删掉后，后面的卡片会向前补位，必须重算绳子曲线与每张卡的下垂错位，否则夹子对不上绳子
    if (root.__relayout) root.__relayout();
  }, 300);
  return name;
}
function shredFirst() {
  const el = document.querySelector('.clip-item');
  if (!el) return null;
  return shredRemove(el.dataset.i);
}
window.Clothesline = { shredRemove, shredFirst, addFile: (file) => {
  const root = document.getElementById('clothesline');
  return root && root.__addCard ? root.__addCard(file) : null;
} };

// 同时导出，方便在其它模块中复用 / 传入自定义数据
export { mountClothesline };

/* =========================================================
 * 6) 卡片内容缩略（懒加载）
 *    卡片滚入视口时才生成缩略，避免一次性渲染大量文件造成卡顿；
 *    任何失败都由 thumb.js 内部回退为“无预览区的图标卡片”。
 * ======================================================= */
async function renderThumbInto(box, file) {
  try {
    const mod = await import('./thumb.js?v=23');
    await mod.renderThumb(box, file);
  } catch (_) {
    box.remove(); // 引擎加载失败：安静回退
  }
}

function lazyThumb(box, file) {
  if (!box) return;
  if (typeof IntersectionObserver === 'undefined') {
    void renderThumbInto(box, file);
    return;
  }
  if (!thumbObserver) {
    thumbObserver = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          thumbObserver.unobserve(en.target);
          const f = en.target.__file;
          if (f) void renderThumbInto(en.target, f);
        }
      },
      { root: null, rootMargin: '300px 0px' }
    );
  }
  box.__file = file;
  thumbObserver.observe(box);
}
