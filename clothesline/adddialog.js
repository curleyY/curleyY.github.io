/* =========================================================
 * adddialog.js — 网页内自助添加文件并预览
 *   · 支持“本地文件”（浏览器内存读取，无需服务器）与“网络链接”
 *   · 添加后调用 window.Clothesline.addFile()，立即出现在绳子上并可预览
 *   · 用户添加的内容持久化到 localStorage（刷新不丢；本地文件小于 4MB 才存，避免撑爆配额）
 * ======================================================= */
(function () {
  const STORE_KEY = 'clothesline.userFiles';
  const MAX_PERSIST = 4 * 1024 * 1024; // 4MB：超过则仅当前会话可用，不写入 localStorage

  const modal = document.getElementById('add-modal');
  const tabs = modal.querySelectorAll('.add-tab');
  const panes = modal.querySelectorAll('.add-pane');
  const drop = document.getElementById('add-drop');
  const fileInput = document.getElementById('add-file-input');
  const fileNameEl = document.getElementById('add-file-name');
  const urlInput = document.getElementById('add-url-input');
  const nameInput = document.getElementById('add-name-input');
  const typeInput = document.getElementById('add-type-input');
  const cdTitle = document.getElementById('cd-title-input');
  const cdDate = document.getElementById('cd-date-input');
  const confirmBtn = document.getElementById('add-confirm');
  const errEl = document.getElementById('add-err');

  let mode = 'upload';
  let pickedFile = null; // 本地选中的 File
  let lastFocused = null;

  /* ---------- 类型识别 ---------- */
  function extOf(name) {
    const m = String(name || '').toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1] : '';
  }
  function typeFromName(name, hint) {
    if (hint) return hint.toLowerCase();
    const ext = extOf(name);
    const map = {
      pdf: 'pdf', jpg: 'image', jpeg: 'image', png: 'image', gif: 'image', webp: 'image', svg: 'image',
      doc: 'docx', docx: 'docx', xls: 'xlsx', xlsx: 'xlsx', ppt: 'pptx', pptx: 'pptx',
      mp4: 'video', webm: 'video', mov: 'video', mp3: 'audio', wav: 'audio', ogg: 'audio',
      zip: 'zip', rar: 'zip', '7z': 'zip', txt: 'txt',
      html: 'link', htm: 'link', shtml: 'link', php: 'link', aspx: 'link', jsp: 'link',
    };
    // 未知扩展名（含无扩展名的网址，如 https://example.com/）→ 网站链接，
    // 点击新标签页打开，而不是误当 PDF 渲染失败
    return map[ext] || 'link';
  }

  /* ---------- 持久化 ---------- */
  function loadUserFiles() {
    try {
      const arr = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch { return []; }
  }
  function saveUserFiles(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch (_) { /* 配额满则忽略 */ }
  }
  let userFiles = loadUserFiles();

  // 页面加载时，把历史添加的文件还回晾晒墙
  window.addEventListener('DOMContentLoaded', () => {
    userFiles.forEach((f) => {
      if (window.Clothesline) window.Clothesline.addFile(f);
    });
  });

  /* ---------- 弹层开关 ---------- */
  function openModal(tab) {
    lastFocused = document.activeElement;
    if (tab) setMode(tab);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    resetForm();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') closeModal();
  }

  function resetForm() {
    pickedFile = null;
    fileInput.value = '';
    fileNameEl.textContent = '';
    urlInput.value = '';
    nameInput.value = '';
    typeInput.value = '';
    cdTitle.value = '';
    cdDate.value = '';
    errEl.hidden = true;
    setMode('upload');
  }

  /* ---------- 选项卡切换 ---------- */
  function setMode(m) {
    mode = m;
    tabs.forEach((t) => t.classList.toggle('is-active', t.dataset.tab === m));
    panes.forEach((p) => { p.hidden = m !== p.dataset.pane; });
  }
  tabs.forEach((t) => t.addEventListener('click', () => setMode(t.dataset.tab)));

  /* ---------- 本地文件选择 ---------- */
  drop.addEventListener('click', () => fileInput.click());
  drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('is-over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('is-over'));
  drop.addEventListener('drop', (e) => {
    e.preventDefault();
    drop.classList.remove('is-over');
    if (e.dataTransfer.files[0]) setPickedFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) setPickedFile(fileInput.files[0]);
  });
  function setPickedFile(f) {
    pickedFile = f;
    fileNameEl.textContent = `${f.name}（${formatSize(f.size)}）`;
  }
  function formatSize(n) {
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
    return (n / 1024 / 1024).toFixed(1) + ' MB';
  }

  /* ---------- 确认添加 ---------- */
  confirmBtn.addEventListener('click', () => {
    errEl.hidden = true;
    if (mode === 'upload') {
      if (!pickedFile) return showErr('请先选择一个文件');
      addLocalFile(pickedFile);
    } else if (mode === 'countdown') {
      // 倒数日：标题 + 目标日期 → 生成可挪动的贴纸卡
      const date = cdDate.value;
      if (!date) return showErr('请选择目标日期');
      const title = cdTitle.value.trim() || '倒数日';
      if (window.Countdown) window.Countdown.create({ title, date });
      closeModal();
    } else {
      const url = urlInput.value.trim();
      if (!url) return showErr('请填写文件链接');
      const name = nameInput.value.trim() || fileNameFromUrl(url);
      const type = typeFromName(name, typeInput.value);
      const file = { name, type, url };
      window.Clothesline.addFile(file);
      userFiles.push(file);
      saveUserFiles(userFiles);
      closeModal();
    }
  });

  function addLocalFile(f) {
    const name = f.name;
    const type = typeFromName(name);
    if (f.size <= MAX_PERSIST) {
      // 小文件：转 dataURL 持久化，刷新后仍在
      const reader = new FileReader();
      reader.onload = () => {
        const file = { name, type, url: reader.result };
        window.Clothesline.addFile(file);
        userFiles.push(file);
        saveUserFiles(userFiles);
        closeModal();
      };
      reader.onerror = () => showErr('读取文件失败，请重试');
      reader.readAsDataURL(f);
    } else {
      // 大文件：仅在当前会话内预览（objectURL）
      const file = { name, type, url: URL.createObjectURL(f) };
      window.Clothesline.addFile(file);
      closeModal();
    }
  }

  function fileNameFromUrl(url) {
    try {
      const p = new URL(url).pathname.split('/').pop();
      return decodeURIComponent(p) || url;
    } catch { return url; }
  }
  function showErr(msg) { errEl.textContent = msg; errEl.hidden = false; }

  /* ---------- 左下角堆叠卡：展开 / 收起 ---------- */
  const addStack = document.getElementById('add-stack');
  if (addStack) {
    const stackHead = addStack.querySelector('.add-stack__card--head');
    const stackOpts = addStack.querySelectorAll('.add-stack__card--opt');
    const setStack = (open) => {
      addStack.classList.toggle('is-open', open);
      if (stackHead) stackHead.setAttribute('aria-expanded', String(open));
    };
    // head 点击：切换展开/收起
    stackHead && stackHead.addEventListener('click', () =>
      setStack(!addStack.classList.contains('is-open'))
    );
    // 选项卡点击：直接打开对应 tab 的添加弹层并收起堆叠卡
    stackOpts.forEach((b) =>
      b.addEventListener('click', () => {
        openModal(b.dataset.addTab);
        setStack(false);
      })
    );
    // 点击堆叠卡区域外部：收起
    document.addEventListener('click', (e) => {
      if (!addStack.contains(e.target)) setStack(false);
    });

    // 堆叠卡下移：底部与碎纸机机身边缘底部保持同一水平线（响应式，随窗口缩放重算）
    const alignToShredder = () => {
      const shredEl = document.getElementById('shredder');
      const stage = shredEl && shredEl.querySelector('.shredder__stage');
      if (!stage) return;
      const bottom = window.innerHeight - stage.getBoundingClientRect().bottom;
      if (bottom >= 0) {
        addStack.style.bottom = bottom + 'px';
        addStack.style.top = 'auto';
      }
    };
    alignToShredder();
    window.addEventListener('resize', alignToShredder);
    // 字体/图片加载可能引起布局变化，稍后再次校正
    window.addEventListener('load', () => requestAnimationFrame(alignToShredder));
  }

  /* ---------- 关闭交互 ---------- */
  modal.querySelectorAll('[data-add-close]').forEach((el) =>
    el.addEventListener('click', closeModal)
  );
  // 所有带 data-add-file 的按钮（右下角按钮 / 其他入口）都打开添加弹层
  document.querySelectorAll('[data-add-file]').forEach((el) =>
    el.addEventListener('click', () => openModal())
  );

  // 暴露给调试 / 测试
  window.AddDialog = { openModal, getUserFiles: () => userFiles };
})();
