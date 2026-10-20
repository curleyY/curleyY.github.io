(function(){
  'use strict';

  // 屏蔽反馈页面：客户端路由跳回词典列表
  // （不能用 location.replace：目录形式路径会被宿主 SPA 兜底成 AFFiNE 页面）
  if (location.pathname.indexOf('/typewords/feedback') === 0) {
    var __n = 0;
    var __t = setInterval(function() {
      __n++;
      if (location.pathname.indexOf('/typewords/dict-list') === 0 || __n > 60) {
        clearInterval(__t);
        return;
      }
      try {
        history.replaceState(null, '', '/typewords/dict-list');
        window.dispatchEvent(new PopStateEvent('popstate'));
      } catch (e) {}
    }, 300);
    return;
  }

  function hideFeedback() {
    var all = document.querySelectorAll('a, button, div, li, span, p, h1, h2, h3, h4');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.dataset.twHideFeedback) continue;
      if (el.textContent.trim() === '反馈') {
        var target = el.closest('a, button, li, div') || el;
        target.style.display = 'none';
        target.dataset.twHideFeedback = '1';
      }
    }
  }

  function patchSettings() {
    if (location.pathname.indexOf('/typewords/setting') !== 0) return;
    // 隐藏设置页右上角原图标/按钮（固定区域 + 小尺寸）
    var selectors = 'a, button, [role="button"], svg';
    var all = document.querySelectorAll(selectors);
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.dataset.twHideIcon) continue;
      var rect = el.getBoundingClientRect();
      var w = window.innerWidth;
      if (rect.top < 90 && rect.right > w * 0.82 && rect.width < 80 && rect.height < 80) {
        var target = el;
        if (el.tagName.toLowerCase() === 'svg') target = el.closest('a, button, div') || el;
        target.style.display = 'none';
        target.dataset.twHideIcon = '1';
      }
    }
    // 隐藏深浅色/主题切换按钮（月亮/太阳 SVG）
    hideThemeToggle();
    // 注入返回按钮
    if (!document.getElementById('tw-back-btn')) {
      var btn = document.createElement('button');
      btn.id = 'tw-back-btn';
      btn.innerHTML = '&#8592;';
      btn.title = '返回';
      btn.style.cssText = 'position:fixed;top:16px;right:16px;z-index:10000;width:40px;height:40px;border-radius:50%;background:#6366f1;color:#fff;border:none;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.2);';
      btn.onclick = function() { history.back(); };
      document.body.appendChild(btn);
    }
  }

  /**
   * 隐藏 typewords 自带的深浅色主题切换按钮。
   * 通过识别月亮/太阳 SVG 路径定位其所在按钮并隐藏。
   */
  function hideThemeToggle() {
    var svgs = document.querySelectorAll('svg');
    var moonMarks = ['M8.003 1a7 7', 'weather-moon', 'fluent-weather-moon'];
    var sunMarks = ['M8 13a.5.5', 'weather-sunny', 'fluent-weather-sunny'];
    for (var i = 0; i < svgs.length; i++) {
      var svg = svgs[i];
      if (svg.dataset.twHideTheme) continue;
      var html = svg.outerHTML;
      var isTheme = false;
      for (var j = 0; j < moonMarks.length; j++) {
        if (html.indexOf(moonMarks[j]) !== -1) { isTheme = true; break; }
      }
      if (!isTheme) {
        for (var j = 0; j < sunMarks.length; j++) {
          if (html.indexOf(sunMarks[j]) !== -1) { isTheme = true; break; }
        }
      }
      if (isTheme) {
        var target = svg.closest('a, button, [role="button"]') || svg;
        target.style.display = 'none';
        target.dataset.twHideTheme = '1';
        svg.dataset.twHideTheme = '1';
      }
    }
  }

  /**
   * 删除桌面侧边栏 Type Words logo 旁的图钉/跳转按钮。（已停用：
   * 用户要求恢复图钉，保留 typewords 原生「固定侧边栏」能力。）
   */

  /**
   * 侧边栏不要自动收缩：桥接就绪后把 sideExpand 固定为 true（仅一次，
   * 之后用户手动点图钉收起/展开不干扰）。
   */
  var __sideExpandPatched = false;
  function patchSideExpand() {
    if (__sideExpandPatched) return;
    var s = getSettingStore();
    if (!s) return;
    try {
      if (s.$state.sideExpand !== true) {
        s.$patch({ sideExpand: true });
        if (__twBC) {
          try { __twBC.postMessage({ type: 'tw-setting', key: 'sideExpand', value: true }); } catch (e) {}
        }
      }
      __sideExpandPatched = true;
    } catch (e) {}
  }

  /**
   * 点击「Type Words」logo 不产生任何行为（不跳转落地页/首页）。
   * logo 既可能在侧边栏（.aside），也可能在页头（header），而且 Vue/Nuxt 可能
   * 在运行时动态插入它并绑定客户端路由，因此按品牌文字全文档定位后：
   *   1) 禁用命中元素及其相关父级的指针事件、手型光标与选中；
   *   2) 给命中元素打标记 data-tw-no-logo；
   *   3) 在 document 的捕获阶段拦截 click / touchstart / pointerdown，
   *      只要事件路径上有 data-tw-no-logo 就 preventDefault + stopPropagation，
   *      彻底阻止 SPA 客户端路由跳转。
   */
  function disableLogoClick() {
    var BRAND = /^type\s*words?$/i;
    function isBrand(s) {
      return BRAND.test((s || '').replace(/\s+/g, ' ').trim());
    }

    // 注入一条兜底样式，确保被打标记的 logo 及其子元素不响应指针事件。
    if (!document.getElementById('tw-no-logo-style')) {
      var st = document.createElement('style');
      st.id = 'tw-no-logo-style';
      st.textContent =
        '[data-tw-no-logo], [data-tw-no-logo] * { pointer-events: none !important; cursor: default !important; user-select: none !important; -webkit-user-select: none !important; }';
      var h = document.head || document.documentElement;
      if (h) h.appendChild(st);
    }

    // 找出文本完全匹配品牌的元素（优先最深的元素；如果父级文本也恰好全是品牌，则连父级一起禁用）。
    function findLogos() {
      var all = document.querySelectorAll('body, body *');
      var out = [];
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.dataset.twNoLogo) continue;
        if (isBrand(el.textContent)) out.push(el);
      }
      return out;
    }
    function markLogo(el) {
      if (!el || el.dataset.twNoLogo) return;
      el.dataset.twNoLogo = '1';
      el.style.pointerEvents = 'none';
      el.style.cursor = 'default';
      el.style.userSelect = 'none';
      el.setAttribute('aria-disabled', 'true');
      if (el.tagName.toLowerCase() === 'a') el.removeAttribute('href');
      // 若父级文本也仅是品牌，说明品牌被拆在多个子元素里，父级才是真正的可点击区。
      var p = el.parentElement;
      if (p && !p.dataset.twNoLogo && isBrand(p.textContent)) markLogo(p);
    }

    var logos = findLogos();
    for (var i = 0; i < logos.length; i++) markLogo(logos[i]);

    // 捕获阶段兜底：点击品牌元素（或其中任意子元素）时直接拦截。
    if (!disableLogoClick._bound) {
      disableLogoClick._bound = true;
      function stopIfLogo(e) {
        var el = e.target;
        var depth = 0;
        while (el && depth < 8) {
          if (el.dataset && el.dataset.twNoLogo) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          el = el.parentElement;
          depth++;
        }
      }
      document.addEventListener('click', stopIfLogo, true);
      document.addEventListener('touchstart', stopIfLogo, true);
      document.addEventListener('pointerdown', stopIfLogo, true);
    }
  }

  /**
   * 优化词典详情页「单词列表」的布局：
   * 1) 桌面下单词列表区原本固定 width:44%（约 406px），右侧大面积留白，
   *    这里放开为占满内容区宽度；
   * 2) 卡片内信息层次更分明：单词加粗、音标浅色、词性与释义对齐；
   * 3) 卡片本身更紧凑。
   */
  function injectListLayout() {
    if (document.getElementById('tw-layout-tweak')) return;
    var st = document.createElement('style');
    st.id = 'tw-layout-tweak';
    st.textContent = [
      '@media (min-width: 769px) {',
      '  .dict-detail-card .content-area > .word-list-section {',
      '    width: 100% !important;',
      '    max-width: 100% !important;',
      '    margin-left: 0 !important;',
      '  }',
      '}',
      '.common-list-item { padding: 10px 14px !important; }',
      '.common-list-item .word { font-weight: 600 !important; }',
      '/* 单词卡片切成四部分：解释 → 音标 → 单词 → 序号（逐行对齐，序号最右）*/',
      '.common-list-item .left { display:flex !important; align-items:center !important; flex:1 1 auto !important; min-width:0 !important; }',
      '.common-list-item .title-wrapper {',
      '  display:grid !important;',
      '  grid-template-columns: minmax(0,1fr) 132px 150px 44px !important;',
      '  align-items:center !important;',
      '  column-gap:1rem !important;',
      '  flex:1 1 auto !important;',
      '  width:100% !important;',
      '  min-width:0 !important;',
      '}',
      '.common-list-item .item-title { display:contents !important; }',
      '/* 解释：TranslationList 根节点（item-title 的兄弟节点，无 class），占第一列，强制单行截断 */',
      '.common-list-item .title-wrapper > div:not(.item-title) {',
      '  grid-column:1 !important;',
      '  grid-row:1 !important;',
      '  min-width:0 !important;',
      '  max-height:1.6em !important;',
      '  overflow:hidden !important;',
      '  display:flex !important;',
      '  flex-wrap:nowrap !important;',
      '  align-items:center !important;',
      '}',
      '.common-list-item .title-wrapper > div:not(.item-title) * {',
      '  white-space:nowrap !important;',
      '  overflow:hidden !important;',
      '  text-overflow:ellipsis !important;',
      '  flex-wrap:nowrap !important;',
      '}',
      '/* 音标（加方括号）占第二列 */',
      '.common-list-item .item-title > span.phonetic.text-gray {',
      '  grid-column:2 !important;',
      '  grid-row:1 !important;',
      '  margin:0 !important;',
      '  white-space:nowrap !important;',
      '  overflow:hidden !important;',
      '  text-overflow:ellipsis !important;',
      '  justify-self:start !important;',
      '}',
      '.common-list-item .item-title > span.phonetic.text-gray::before { content:"[" !important; }',
      '.common-list-item .item-title > span.phonetic.text-gray::after { content:"]" !important; }',
      '/* 单词占第三列 */',
      '.common-list-item .item-title > span.word {',
      '  grid-column:3 !important;',
      '  grid-row:1 !important;',
      '  margin:0 !important;',
      '  white-space:nowrap !important;',
      '  overflow:hidden !important;',
      '  text-overflow:ellipsis !important;',
      '  justify-self:start !important;',
      '}',
      '/* 序号占最右列 */',
      '.common-list-item .item-title > span.text-gray-500 {',
      '  grid-column:4 !important;',
      '  grid-row:1 !important;',
      '  margin:0 !important;',
      '  white-space:nowrap !important;',
      '  justify-self:end !important;',
      '  text-align:right !important;',
      '}',
      '/* 隐藏发音按钮，避免占用列 */',
      '.common-list-item .item-title > .volume { display:none !important; }',
      '/* 词典详情页：隐藏列表数量，操作按钮移到列表右侧垂直排列 */',
      '.dict-detail-card .word-list-section { position:relative !important; padding-right:48px !important; }',
      '.dict-detail-card .base-table { position:static !important; }',
      '.dict-detail-card .base-table > div:first-child .flex.justify-between.items-center > div:first-child { display:none !important; }',
      '.dict-detail-card .base-table > div:first-child .flex.justify-between.items-center > .flex.gap-2.relative {',
      '  position:absolute !important; right:8px !important; top:8px !important;',
      '  flex-direction:column !important; gap:12px !important; width:40px !important;',
      '  align-items:center !important; z-index:10 !important;',
      '}',
      '.dict-detail-card .base-table > div:first-child .flex.justify-between.items-center > .flex.gap-2.relative > * { margin:0 !important; }',
      '/* 默写模式：隐藏音标与单词列，原地插入行内手写区 */',
      '.tw-dictate-active .common-list-item { cursor:default !important; position:relative !important; }',
      '.tw-dictate-active .common-list-item .item-title { position:relative !important; }',
      '.tw-dictate-active .common-list-item .item-title > span.word {',
      '  visibility:hidden !important;',
      '}',
      '.tw-dictate-active .common-list-item .item-title > span.phonetic.text-gray {',
      '  display:none !important;',
      '}',
      '.tw-dictate-active .common-list-item.tw-dictate-revealed .item-title > span.word,',
      '.tw-dictate-active .common-list-item.tw-dictate-revealed .item-title > span.phonetic.text-gray {',
      '  display:inline !important; visibility:visible !important;',
      '}',
      '.tw-dictate-active .common-list-item.tw-dictate-revealed .tw-htr-inline { display:none !important; }',
      '.tw-dictate-active .common-list-item:hover { background:rgba(99,102,241,.04) !important; }',
      '.common-list-item .item-title > .tw-htr-inline { position:absolute !important; margin:0 !important; padding:0 !important; z-index:4 !important; overflow:visible !important; }',
      '.tw-htr-inline .tw-htr-pad { position:absolute !important; left:0 !important; top:0 !important; width:100% !important; height:100% !important; background:transparent !important; overflow:hidden !important; touch-action:none !important; }',
      '.tw-htr-inline .tw-htr-pad canvas { position:absolute !important; inset:0 !important; width:100% !important; height:100% !important; display:block !important; cursor:crosshair !important; }',
      '.tw-htr-inline .tw-htr-result { position:absolute !important; left:100% !important; top:50% !important; transform:translateY(-50%) !important; margin-left:6px !important; background:rgba(255,255,255,.95) !important; border-radius:8px !important; padding:1px 6px !important; font-size:12px !important; color:#333 !important; white-space:nowrap !important; z-index:7 !important; display:none !important; box-shadow:0 1px 3px rgba(0,0,0,.06) !important; }',
      '.tw-htr-inline.show-res .tw-htr-result { display:block !important; }',
      '.tw-htr-inline .tw-htr-result .ok { color:#16a34a !important; font-weight:600 !important; margin-left:4px !important; }',
      '.tw-htr-inline .tw-htr-result .bad { color:#d83931 !important; font-weight:600 !important; margin-left:4px !important; }',
      '/* 默写按钮 */',
      '#tw-dictate-btn { display:flex !important; align-items:center !important; justify-content:center !important; width:32px !important; height:32px !important; border-radius:8px !important; border:1px solid #d1d5db !important; background:#fff !important; color:#4b5563 !important; cursor:pointer !important; font-size:13px !important; font-weight:700 !important; user-select:none !important; }',
      '#tw-dictate-btn.tw-active { background:#6366f1 !important; color:#fff !important; border-color:#6366f1 !important; }'
    ].join('\n');
    var h = document.head || document.documentElement;
    if (h) h.appendChild(st);
  }

  /**
   * 词典详情页「默写模式」：在右侧操作按钮区新增开关；开启后隐藏音标与单词列，
   * 只显示释义与序号；点击行临时显示隐藏内容，再次点击隐藏。状态保存在 sessionStorage。
   */
  function injectDictateMode() {
    var actions = document.querySelector('.dict-detail-card .base-table > div:first-child .flex.justify-between.items-center > .flex.gap-2.relative');
    if (!actions || document.getElementById('tw-dictate-btn')) return;

    var btn = document.createElement('div');
    btn.id = 'tw-dictate-btn';
    btn.className = 'icon-wrapper';
    btn.title = '默写模式';
    btn.innerHTML = '<span style="pointer-events:none;font-size:13px;font-weight:700;color:inherit;">默</span>';
    btn.style.cssText = 'display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;border:1px solid #d1d5db;background:#fff;cursor:pointer;';
    btn.onclick = function(e) {
      e.stopPropagation();
      var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
      if (!section) return;
      var active = section.classList.toggle('tw-dictate-active');
      btn.classList.toggle('tw-active', active);
      try { sessionStorage.setItem('__tw_dictate_active', active ? '1' : '0'); } catch(_) {}
      if (active) { twHtrUpdateRows(); }
      else { twHtrRemoveAll(); section.querySelectorAll('.common-list-item').forEach(function(r){ r.classList.remove('tw-dictate-revealed'); }); }
    };
    actions.insertBefore(btn, actions.firstChild);

    try {
      if (sessionStorage.getItem('__tw_dictate_active') === '1') {
        var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
        if (section) { section.classList.add('tw-dictate-active'); btn.classList.add('tw-active'); twHtrUpdateRows(); }
      }
    } catch(_) {}

    bindDictateRows();
  }

  /* ---------- 默写手写识别：行内嵌入原单词位置 ---------- */
  var __twHtrBrush = 5, __twHtrDPR = window.devicePixelRatio || 1, __twHtrBackendCached = '';
  var __twHtrStates = new WeakMap(); // row -> {canvas, ctx, strokes, current, drawing, ink, target}

  function twHtrBackend() {
    try { __twHtrBackendCached = localStorage.getItem('__tw_htr_backend') || ''; } catch (e) {}
    return __twHtrBackendCached;
  }
  function twHtrTargetWord(row) {
    var el = row.querySelector('.item-title > span.word');
    return el ? (el.textContent || '').trim() : '';
  }

  function twHtrUpdateRows() {
    var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
    if (!section || !section.classList.contains('tw-dictate-active')) return;
    var rows = section.querySelectorAll('.common-list-item');
    rows.forEach(function(row) {
      if (row.querySelector('.tw-htr-inline')) return;
      twHtrCreateInline(row);
    });
  }
  function twHtrRemoveAll() {
    var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
    if (!section) return;
    section.querySelectorAll('.tw-htr-inline').forEach(function(el) { el.remove(); });
  }

  function twHtrCreateInline(row) {
    var target = twHtrTargetWord(row);
    var inline = document.createElement('div');
    inline.className = 'tw-htr-inline';
    inline.innerHTML = [
      '<div class="tw-htr-pad">',
        '<canvas></canvas>',
      '</div>',
      '<span class="tw-htr-result"></span>'
    ].join('');
    var title = row.querySelector('.item-title');
    if (title) title.appendChild(inline);
    else { var wrapper = row.querySelector('.title-wrapper'); if (wrapper) wrapper.appendChild(inline); else row.appendChild(inline); }

    var canvas = inline.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var state = { canvas: canvas, ctx: ctx, strokes: [], current: null, drawing: false, ink: false, target: target, inline: inline, timer: null };
    __twHtrStates.set(row, state);

    function resize() {
      var w = canvas.clientWidth || 120;
      var h = canvas.clientHeight || 30;
      canvas.width = Math.round(w * __twHtrDPR);
      canvas.height = Math.round(h * __twHtrDPR);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(__twHtrDPR, __twHtrDPR);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.strokeStyle = '#1f1f1f'; ctx.lineWidth = __twHtrBrush;
    }
    state.resize = resize;
    twHtrPosition(row);
    requestAnimationFrame(function(){ twHtrPosition(row); });

    canvas.addEventListener('dblclick', function(e) { e.stopPropagation(); twHtrClear(row); });
    canvas.addEventListener('pointerdown', function(e) { twHtrStart(e, row); });
    canvas.addEventListener('pointermove', function(e) { twHtrMove(e, row); });
    canvas.addEventListener('pointerup', function(e) { twHtrEnd(e, row); });
    canvas.addEventListener('pointerleave', function(e) { twHtrEnd(e, row); });
    canvas.addEventListener('pointercancel', function(e) { twHtrEnd(e, row); });
  }

  function twHtrState(row) { return __twHtrStates.get(row) || null; }
  function twHtrPosition(row) {
    var s = __twHtrStates.get(row); if (!s) return;
    var word = row.querySelector('.item-title > span.word');
    var inline = s.inline, pad = inline.querySelector('.tw-htr-pad'), canvas = s.canvas;
    if (!word || !pad) return;
    var wr = word.getBoundingClientRect(), rr = row.getBoundingClientRect();
    var left = wr.left - rr.left + (row.clientLeft || 0);
    var top = wr.top - rr.top + (row.clientTop || 0);
    var w = Math.max(wr.width, 120), h = Math.max(wr.height, 28);
    inline.style.left = left + 'px';
    inline.style.top = top + 'px';
    inline.style.width = w + 'px';
    inline.style.height = h + 'px';
    pad.style.width = w + 'px';
    pad.style.height = h + 'px';
    if (s.resize) s.resize();
  }
  function twHtrRepositionAll() {
    var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
    if (!section) return;
    section.querySelectorAll('.common-list-item').forEach(function(r){ if (r.querySelector('.tw-htr-inline')) twHtrPosition(r); });
  }
  function twHtrPos(e, state) {
    var r = state.canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function twHtrStart(e, row) {
    var s = twHtrState(row); if (!s) return;
    if (s.timer) { clearTimeout(s.timer); s.timer = null; }
    s.drawing = true; s.current = [];
    var p = twHtrPos(e, s); s.current.push(p);
    s.ctx.beginPath(); s.ctx.moveTo(p.x, p.y); s.ctx.lineTo(p.x + 0.01, p.y); s.ctx.stroke();
    s.ink = true;
    s.inline.querySelector('.tw-htr-pad').classList.add('has-ink');
    s.inline.querySelector('.tw-htr-pad').classList.remove('show-res');
    var res = s.inline.querySelector('.tw-htr-result');
    if (res) { res.textContent = ''; s.inline.classList.remove('show-res'); }
    e.preventDefault();
  }
  function twHtrMove(e, row) {
    var s = twHtrState(row); if (!s || !s.drawing) return;
    var p = twHtrPos(e, s); s.current.push(p);
    s.ctx.lineTo(p.x, p.y); s.ctx.stroke();
    e.preventDefault();
  }
  function twHtrEnd(e, row) {
    var s = twHtrState(row); if (!s || !s.drawing) return;
    s.drawing = false;
    if (s.current && s.current.length) { s.strokes.push(s.current); s.current = null; }
    if (s.timer) clearTimeout(s.timer);
    s.timer = setTimeout(function() { twHtrRecognize(row); }, 900);
  }
  function twHtrClear(row) {
    var s = twHtrState(row); if (!s) return;
    s.strokes = []; s.current = null; s.ink = false;
    if (s.timer) { clearTimeout(s.timer); s.timer = null; }
    var c = s.canvas, w = c.width, h = c.height;
    s.ctx.setTransform(1, 0, 0, 1, 0, 0);
    s.ctx.fillStyle = '#ffffff'; s.ctx.fillRect(0, 0, w, h);
    s.ctx.scale(__twHtrDPR, __twHtrDPR);
    s.ctx.lineCap = 'round'; s.ctx.lineJoin = 'round';
    s.ctx.strokeStyle = '#1f1f1f'; s.ctx.lineWidth = __twHtrBrush;
    s.inline.querySelector('.tw-htr-pad').classList.remove('has-ink');
    s.inline.querySelector('.tw-htr-pad').classList.remove('show-res');
    var res = s.inline.querySelector('.tw-htr-result');
    if (res) { res.textContent = ''; s.inline.classList.remove('show-res'); }
  }
  function twHtrUndo(row) {
    var s = twHtrState(row); if (!s) return;
    s.strokes.pop();
    if (s.current) { s.current = null; }
    if (s.timer) { clearTimeout(s.timer); s.timer = null; }
    if (!s.strokes.length) {
      twHtrClear(row);
      return;
    }
    twHtrRedraw(row);
    s.inline.querySelector('.tw-htr-pad').classList.add('has-ink');
  }
  function twHtrRedraw(row) {
    var s = twHtrState(row); if (!s) return;
    var c = s.canvas, w = c.width, h = c.height;
    s.ctx.setTransform(1, 0, 0, 1, 0, 0);
    s.ctx.fillStyle = '#ffffff'; s.ctx.fillRect(0, 0, w, h);
    s.ctx.scale(__twHtrDPR, __twHtrDPR);
    s.ctx.lineCap = 'round'; s.ctx.lineJoin = 'round';
    s.ctx.strokeStyle = '#1f1f1f'; s.ctx.lineWidth = __twHtrBrush;
    s.strokes.forEach(function(stroke) {
      if (!stroke.length) return;
      s.ctx.beginPath();
      s.ctx.moveTo(stroke[0].x, stroke[0].y);
      for (var i = 1; i < stroke.length; i++) s.ctx.lineTo(stroke[i].x, stroke[i].y);
      s.ctx.stroke();
    });
  }
  function twHtrExport(row) {
    var s = twHtrState(row); if (!s) return null;
    var c = s.canvas, w = c.width, h = c.height;
    var data = s.ctx.getImageData(0, 0, w, h).data;
    var minX = w, minY = h, maxX = -1, maxY = -1;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        var i = (y * w + x) * 4;
        if (data[i] < 128) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < 0) return null;
    var pad = 16 * __twHtrDPR;
    minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad);
    maxX = Math.min(w - 1, maxX + pad); maxY = Math.min(h - 1, maxY + pad);
    var cw = maxX - minX + 1, ch = maxY - minY + 1;
    var out = document.createElement('canvas'); out.width = cw; out.height = ch;
    var octx = out.getContext('2d');
    octx.fillStyle = '#ffffff'; octx.fillRect(0, 0, cw, ch);
    octx.drawImage(c, minX, minY, cw, ch, 0, 0, cw, ch);
    return out.toDataURL('image/png');
  }
  function twHtrPronounce(row) {
    var s = twHtrState(row); if (!s) return;
    var word = s.target || '';
    if (!word) return;
    var audio = row.querySelector('audio');
    if (audio && audio.src) { audio.play(); return; }
    if ('speechSynthesis' in window) {
      var u = new SpeechSynthesisUtterance(word); u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    }
  }
  function twHtrRecognize(row) {
    var s = twHtrState(row); if (!s) return;
    var resEl = s.inline.querySelector('.tw-htr-result');
    function showRes(html) { if (resEl) { resEl.innerHTML = html; s.inline.classList.add('show-res'); } }
    if (!s.ink) { showRes('<span style="color:#d83931">请先书写</span>'); return; }
    var img = twHtrExport(row);
    if (!img) { showRes('<span style="color:#d83931">未检测到笔迹</span>'); return; }
    var be = twHtrBackend();
    var url = (be || '') + '/api/recognize';
    showRes('<span style="color:#646a73">识别中...</span>');
    fetch(url, {
      method: 'POST', mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: img })
    })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) {
        if (d.error || d.empty) { showRes('<span style="color:#d83931">' + (d.error || '画布为空') + '</span>'); return; }
        var text = (d.text || '').trim();
        var target = (s.target || '').toLowerCase();
        var mark = '';
        if (target) {
          mark = text.toLowerCase() === target
            ? '<span class="ok">✓</span>'
            : '<span class="bad">✗ ' + s.target + '</span>';
        }
        showRes('<span class="rt">' + (text || '(空)') + '</span>' + mark);
      })
      .catch(function (e) {
        showRes('<span style="color:#d83931">' + e.message + (be ? '' : ' (未配置后端)') + '</span>');
      });
  }

  function bindDictateRows() {
    if (window.__twDictateRowsBound) return;
    window.__twDictateRowsBound = true;

    var rzT = null;
    window.addEventListener('resize', function() {
      if (rzT) clearTimeout(rzT);
      rzT = setTimeout(twHtrRepositionAll, 150);
    });

    // 监听列表变化，自动为新加载的行注入手写区
    var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
    if (section && window.MutationObserver) {
      var mo = new MutationObserver(function(muts) {
        var active = section.classList.contains('tw-dictate-active');
        if (!active) return;
        var needs = false;
        muts.forEach(function(m) {
          for (var i = 0; i < m.addedNodes.length; i++) {
            var n = m.addedNodes[i];
            if (n.nodeType === 1 && (n.classList.contains('common-list-item') || n.querySelector && n.querySelector('.common-list-item'))) { needs = true; }
          }
        });
        if (needs) twHtrUpdateRows();
      });
      mo.observe(section, { childList: true, subtree: true });
    }

    // 点击行空白处切换「看答案」
    document.addEventListener('click', function(e) {
      var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
      if (!section || !section.classList.contains('tw-dictate-active')) return;
      var actions = document.querySelector('.dict-detail-card .base-table > div:first-child .flex.justify-between.items-center > .flex.gap-2.relative');
      if (actions && actions.contains(e.target)) return;
      if (e.target.closest('.tw-htr-inline')) return;
      var row = e.target.closest ? e.target.closest('.common-list-item') : null;
      if (row) row.classList.toggle('tw-dictate-revealed');
    });

    // 窗口缩放后重设 canvas 尺寸
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        var section = document.querySelector('.dict-detail-card .word-list-section') || document.querySelector('.dict-detail-card');
        if (!section) return;
        section.querySelectorAll('.common-list-item').forEach(function(row) {
          var s = __twHtrStates.get(row);
          if (s && s.resize) s.resize();
        });
      }, 200);
    });
  }

  /**
   * 词典卡片「真实书本」化：书皮渐变 + 书脊凹槽 + 底部书页 + 竖排书名，
   * 五种淡彩书皮按序轮换，hover 轻微抬起。
   */
  function injectBookStyle() {
    // books-css-v9：卡片容器作为「书」的外壳，封面由 bookshelf 的 cover.js 真实绘制
    //   （3D 书架里同一套 Canvas2D 代码：编号 / 书名 / 封面几何图案 / 词数全部真实渲染）
    // 这里只负责：竖版书比例、圆角、书脊受光与背光、书页投影、hover 微转抬起。
    // 作用域 .page .book：覆盖词典列表页与背单词主页（我的词典 / 推荐区）的卡片
    if (document.getElementById('tw-book-style')) return;
    var st = document.createElement('style');
    st.id = 'tw-book-style';
    st.textContent = [
      '.page .book {',
      '  position: relative !important;',
      '  overflow: hidden !important;',
      '  aspect-ratio: 1000 / 1400 !important;',
      '  padding: 0 !important;',
      '  border-radius: 4px 10px 10px 4px !important;',
      '  background-color: transparent !important;',
      '  background-image: none !important;',
      '  transform: perspective(760px) rotateY(-2deg) !important;',
      '  transition: transform .22s ease, box-shadow .22s ease !important;',
      '  box-shadow: 0 2px 10px rgba(60,70,80,.22),',
      '    inset 6px 0 0 -3px rgba(0,0,0,.20),',
      '    inset 9px 0 0 -4px rgba(255,255,255,.26) !important;',
      '}',
      '.page .book:hover {',
      '  transform: perspective(760px) rotateY(-6deg) translateY(-4px) !important;',
      '  box-shadow: 0 14px 26px rgba(60,70,80,.30),',
      '    inset 6px 0 0 -3px rgba(0,0,0,.20),',
      '    inset 9px 0 0 -4px rgba(255,255,255,.26) !important;',
      '}',
      '/* 真实书封面画布：铺满卡片 */',
      '.page .book > canvas.tw-cover {',
      '  position: absolute !important; left: 0; top: 0;',
      '  width: 100%; height: 100%;',
      '  object-fit: cover; display: block; z-index: 0; pointer-events: none;',
      '}',
      '/* 封面已包含书名与词数，隐藏原生文字避免重复 */',
      '.page .book.tw-real-cover > *:not(canvas.tw-cover) {',
      '  visibility: hidden !important;',
      '}'
    ].join('\n');
    var h = document.head || document.documentElement;
    if (h) h.appendChild(st);
  }

  /** 加载 /bookshelf/cover.js（封面绘制代码，无 Three.js，约 9KB） */
  var __twCoverCbs = [];
  function loadCoverKit(cb) {
    if (window.TWBookCover) { try { cb(); } catch (e) {} return; }
    __twCoverCbs.push(cb);
    if (document.getElementById('tw-cover-kit')) return;
    var s = document.createElement('script');
    s.id = 'tw-cover-kit';
    s.src = '/bookshelf/cover.js';
    s.onload = function () {
      var f;
      while (__twCoverCbs.length) { f = __twCoverCbs.shift(); try { f(); } catch (e) {} }
    };
    (document.head || document.documentElement).appendChild(s);
  }
  var __twCoverSlotMap = {};
  var __twCoverSlotSeq = 0;
  /** 用 bookshelf 的真实封面代码，给每张卡片画一张书封面 */
  function paintRealBookCovers() {
    loadCoverKit(function () {
      var api = window.TWBookCover;
      if (!api) return;
      var books = document.querySelectorAll('.page .book');
      for (var i = 0; i < books.length; i++) {
        var el = books[i];
        if (el.dataset.twCover === '1') continue;
        var t = el.querySelector('.text-base');
        var title = t ? t.textContent.trim() : '';
        if (!title) continue;
        var cEl = el.querySelector('.absolute.bottom-4.right-3');
        var count = cEl ? cEl.textContent.trim() : '';
        if (__twCoverSlotMap[title] == null) __twCoverSlotMap[title] = __twCoverSlotSeq++;
        try {
          var cv = api.paint({ index: __twCoverSlotMap[title], title: title, count: count });
          cv.className = 'tw-cover';
          el.appendChild(cv);
          el.classList.add('tw-real-cover');
          el.dataset.twCover = '1';
        } catch (e) {}
      }
    });
  }

  /**
   * 测试页（/typewords/words-test）全屏改造：仿「看答案」卡片式布局——
   * 全屏粉蓝渐变背景、隐藏侧栏与标题行、单词居中、选项变成居中的半透明卡片、
   * 左右两侧「快捷选项」装饰、底部按钮居中。
   */
  function injectTestStyle() {
    if (document.getElementById('tw-test-style')) return;
    var st = document.createElement('style');
    st.id = 'tw-test-style';
    st.textContent = [
      '/* ── 测试页全屏布局 ── */',
      'html body.tw-test-mode {',
      '  background: linear-gradient(160deg, #e8eff7 0%, #f2f5fa 32%, #e6ecf4 70%, #dde5ef 100%) !important;',
      '  background-attachment: fixed !important;',
      '  min-height: 100vh !important;',
      '  height: 100% !important;',
      '  overflow: hidden !important;',
      '}',
      'html.tw-test-mode-root {',
      '  background: linear-gradient(160deg, #e8eff7 0%, #f2f5fa 32%, #e6ecf4 70%, #dde5ef 100%) !important;',
      '  background-attachment: fixed !important;',
      '}',
      'body.tw-test-mode .layout, body.tw-test-mode #__nuxt > div, body.tw-test-mode #__nuxt { background: transparent !important; }',
      'body.tw-test-mode .aside { display: none !important; }',
      'body.tw-test-mode .layout { padding-left: 0 !important; margin-left: 0 !important; }',
      'body.tw-test-mode .page {',
      '  width: 100% !important; max-width: 920px !important;',
      '  margin: 0 auto !important; padding: 14px 18px !important;',
      '  background: transparent !important; border: none !important; box-shadow: none !important;',
      '  box-sizing: border-box !important;',
      '}',
      'body.tw-test-mode .card {',
      '  background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important;',
      '  min-height: 0 !important;',
      '}',
      '/* 隐藏标题行 / 进度 / 分割线 */',
      'body.tw-test-mode .page-title, body.tw-test-mode .card > .line { display: none !important; }',
      'body.tw-test-mode .card > div:first-child { display: none !important; }',
      '/* 单词行居中放大 */',
      'body.tw-test-mode .card .text-4xl { justify-content: center !important; margin: 2px 0 10px !important; font-size: 30px !important; line-height: 1.2 !important; }',
      '/* 选项区居中 */',
      'body.tw-test-mode .card .flex.flex-col.gap-4 { align-items: center !important; gap: 10px !important; }',
      '/* 选项卡片化 */',
      'body.tw-test-mode .card .option {',
      '  width: 100% !important; max-width: 640px !important; box-sizing: border-box !important;',
      '  background: rgba(255,255,255,.42) !important;',
      '  border: none !important; border-radius: 14px !important;',
      '  padding: 10px 16px !important;',
      '  box-shadow: 0 2px 12px rgba(96,84,96,.10) !important;',
      '  backdrop-filter: blur(4px);',
      '  overflow: hidden !important;',
      '}',
      'body.tw-test-mode .card .option, body.tw-test-mode .card .option * { font-size: 16px !important; line-height: 1.35 !important; }',
      'body.tw-test-mode .card .option:hover { background: rgba(255,255,255,.62) !important; }',
      '/* 隐藏选项里的 A/B/C/D 字母与音标行（恢复之前测试页样式） */',
      'body.tw-test-mode .card .option > span > span.italic,',
      'body.tw-test-mode .card .option > span > span.mx-2 { display: none !important; }',
      '/* 底部操作按钮居中 */',
      'body.tw-test-mode .tw-test-actions { justify-content: center !important; margin-top: 32px !important; }',
      '/* 左右「快捷选项」装饰：可点击，对应四个选项 */',
      '.tw-test-decor { position: fixed; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: center; gap: 18px; z-index: 1; padding: 0 !important; border-radius: 0 !important; background: transparent !important; box-shadow: none !important; }',
      '.tw-test-decor .dot { width: 56px; height: 92px; border-radius: 28px; background: rgba(255,255,255,.55); box-shadow: inset 0 2px 6px rgba(255,255,255,.7), 0 2px 6px rgba(80,70,80,.08); display: flex; align-items: center; justify-content: center; cursor: pointer; color: rgba(90,88,96,.55); font-size: 20px; font-family: Georgia, serif; font-style: italic; transition: background .18s ease, transform .18s ease; }',
      '.tw-test-decor .dot:hover { background: rgba(255,255,255,.82); transform: scale(1.05); }',
      '.tw-test-decor .dot:active { transform: scale(.96); }',
      '.tw-test-decor .lbl { position: absolute; top: -28px; left: 50%; transform: translateX(-50%); white-space: nowrap; padding: 4px 11px; border-radius: 12px; background: transparent !important; color: rgba(90,88,96,.62); font-size: 12px; letter-spacing: 2px; }',
      '.tw-test-decor.left { left: 3.5vw; }',
      '.tw-test-decor.right { right: 3.5vw; }',
      '@media (max-width: 1100px) { .tw-test-decor { display: none; } }',
      '/* 测试页左上角退出按钮 */',
      '.tw-test-exit { position: fixed; top: 16px; left: 16px; z-index: 10001; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,.55); color: rgba(90,88,96,.85); border: none; cursor: pointer; font-size: 22px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(0,0,0,.12); backdrop-filter: blur(4px); transition: background .18s, transform .18s; }',
      '.tw-test-exit:hover { background: rgba(255,255,255,.82); transform: scale(1.05); }',
      '/* 自渲染测试同样压缩到一屏 */',
      '#tw-selftest { width:100% !important; max-width:640px !important; margin:0 auto !important; gap:10px !important; }',
      '#tw-selftest > div:first-child > div:first-child { font-size:30px !important; line-height:1.2 !important; }',
      '#tw-selftest .option { min-height:56px !important; padding:10px 16px !important; }',
      '#tw-selftest .option, #tw-selftest .option * { font-size:16px !important; line-height:1.35 !important; }'
    ].join('\n');
    var h = document.head || document.documentElement;
    if (h) h.appendChild(st);
  }

  /** 测试页模式同步：加/去 body.tw-test-mode，按钮容器居中，注入左右装饰 */
  function syncTestMode() {
    var isTest = /\/typewords\/words-test/.test(location.pathname);
    if (!isTest) {
      document.body.classList.remove('tw-test-mode');
      document.documentElement.classList.remove('tw-test-mode-root');
      var dl = document.getElementById('tw-test-decor-left');
      if (dl) dl.remove();
      var dr = document.getElementById('tw-test-decor-right');
      if (dr) dr.remove();
      var eb = document.getElementById('tw-test-exit-btn');
      if (eb) eb.remove();
      return;
    }
    if (!document.body.classList.contains('tw-test-mode')) document.body.classList.add('tw-test-mode');
    if (!document.documentElement.classList.contains('tw-test-mode-root')) document.documentElement.classList.add('tw-test-mode-root');
    // 「继续测试 / 结束」按钮容器加类，便于 CSS 居中
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      var t = btns[i].textContent.trim();
      if (t.indexOf('继续测试') === 0 && btns[i].offsetParent) {
        var holder = btns[i].parentElement;
        if (holder && !holder.classList.contains('tw-test-actions')) holder.classList.add('tw-test-actions');
        break;
      }
    }
    // 左右装饰（圆点可点击 = 选择对应选项 A/B/C/D）
    if (!document.getElementById('tw-test-decor-left')) {
      var mk = function (side) {
        var d = document.createElement('div');
        d.id = 'tw-test-decor-' + side;
        d.className = 'tw-test-decor ' + side;
        var letters = ['A', 'B', 'C', 'D'];
        var html = '';
        for (var k = 0; k < 4; k++) html += '<div class="dot" data-idx="' + k + '" title="快捷键 ' + (k + 1) + '"><span>' + letters[k] + '</span></div>';
        html += '<div class="lbl">快捷选项</div>';
        d.innerHTML = html;
        d.addEventListener('click', function (e) {
          var t = e.target;
          var dot = t && t.closest ? t.closest('.dot') : null;
          if (!dot) return;
          var idx = parseInt(dot.getAttribute('data-idx'), 10);
          var opts = document.querySelectorAll('.page .option');
          if (opts[idx]) {
            opts[idx].click();
          } else if (window.__twTestFallback && typeof window.__twTestFallback.choose === 'function') {
            window.__twTestFallback.choose(idx);
          }
        });
        (document.body || document.documentElement).appendChild(d);
      };
      mk('left');
      mk('right');
    }
    // 左上角退出按钮
    if (!document.getElementById('tw-test-exit-btn')) {
      var exitBtn = document.createElement('button');
      exitBtn.id = 'tw-test-exit-btn';
      exitBtn.className = 'tw-test-exit';
      exitBtn.title = '退出测试';
      exitBtn.innerHTML = '&#8592;';
      exitBtn.onclick = function () {
        if (history.length > 1) { history.back(); }
        else { location.href = '/typewords/words'; }
      };
      (document.body || document.documentElement).appendChild(exitBtn);
    }
    fitTestToViewport();
    alignSideDecor();
  }

  /** 左右装饰：贴合选项区两侧，并让 A/B/C/D 与对应选项卡同高对齐 */
  function alignSideDecor() {
    var decors = document.querySelectorAll('.tw-test-decor');
    if (!decors.length) return;
    var firstOpt = document.querySelector('.page .option');
    var main = firstOpt ? firstOpt.parentElement : (document.getElementById('tw-selftest') || document.querySelector('.page .card') || document.querySelector('.page'));
    if (!main) return;
    var r = main.getBoundingClientRect();
    var vh = window.innerHeight || 0;
    var vw = window.innerWidth || 0;
    var top = r.top;
    var height = r.height;
    if (vh && height > vh - 32) { height = vh - 32; top = 16; }
    var opts = document.querySelectorAll('.page .option');
    var edge = 24;
    var leftPos = edge;
    var rightPos = edge;
    for (var i = 0; i < decors.length; i++) {
      var d = decors[i];
      d.style.top = top + 'px';
      d.style.transform = 'none';
      d.style.height = height + 'px';
      d.style.width = '56px';
      d.style.padding = '0';
      d.style.justifyContent = 'flex-start';
      if (d.classList.contains('left')) { d.style.left = leftPos + 'px'; d.style.right = 'auto'; }
      else { d.style.right = rightPos + 'px'; d.style.left = 'auto'; }
      var dots = d.querySelectorAll('.dot');
      for (var j = 0; j < dots.length; j++) {
        var dot = dots[j];
        dot.style.position = 'absolute';
        dot.style.left = '50%';
        dot.style.marginLeft = '-28px';
        dot.style.transform = '';
        dot.style.width = '56px';
        if (opts[j]) {
          var or = opts[j].getBoundingClientRect();
          dot.style.top = (or.top - top) + 'px';
          dot.style.height = or.height + 'px';
        } else {
          dot.style.top = (j * (height / 4)) + 'px';
          dot.style.height = '92px';
        }
      }
    }
  }

  /** 原渲染测试页选项优化：内容按词表顺序（释义→音标→单词）、选项等高 */
  function enhanceOriginalTest() {
    if (!/\/typewords\/words-test/.test(location.pathname)) return;
    if (document.getElementById('tw-selftest')) return; // 自渲染兜底不处理
    var opts = document.querySelectorAll('.page .option');
    if (!opts.length) return;
    for (var i = 0; i < opts.length; i++) {
      var el = opts[i];
      el.style.width = '100%';
      el.style.boxSizing = 'border-box';
    }
    // 选项等高
    for (var k = 0; k < opts.length; k++) opts[k].style.height = 'auto';
    var maxH = 0;
    for (var m = 0; m < opts.length; m++) {
      var h = opts[m].getBoundingClientRect().height;
      if (h > maxH) maxH = h;
    }
    for (var n = 0; n < opts.length; n++) opts[n].style.height = maxH + 'px';
    fitTestToViewport();
    alignSideDecor();
  }

  /** 测试页整体缩放到一屏内，避免出现滚动条 */
  function fitTestToViewport() {
    if (!/\/typewords\/words-test/.test(location.pathname)) return;
    var page = document.querySelector('.page');
    if (!page) return;
    page.style.transform = 'none';
    page.style.transformOrigin = 'top center';
    var vh = window.innerHeight || 0;
    if (!vh) return;
    var h = page.scrollHeight || page.offsetHeight || 0;
    if (h > vh - 8) {
      var scale = Math.max(0.55, (vh - 16) / h);
      page.style.transform = 'scale(' + scale + ')';
    }
  }

  if (!window.__twTestResizeBound) {
    window.__twTestResizeBound = true;
    window.addEventListener('resize', function () {
      fitTestToViewport();
      alignSideDecor();
      if (window.__twSelfTestResize) window.__twSelfTestResize();
      enhanceOriginalTest();
    });
  }

  /**
   * 测试页题目兜底（修复「其它词书点测试没题目」）：
   * 组件 Ne() 仅在 bookList[id].words 已加载、或该词书恰为当前 editDict 时才会取词；
   * 其它词书进入测试页时 words 为空，会直接 warning 退出。这里在检测到无选项时，
   * 按 id 拉取该词书词条注入 store，再通过「退回词典列表→再进入测试」强制组件
   * 重新挂载，从而正常渲染题目（复用应用自身的测试/计分逻辑）。
   */
  var __twTestTried = {};
  var __twTestReloadCount = {};
  function getPiniaStore() {
    try {
      var el = document.querySelector('#__nuxt');
      var app = el && el.__vue_app__;
      var gp = app && app.config && app.config.globalProperties;
      if (gp && gp.$pinia) return gp.$pinia;
      if (app && app.$pinia) return app.$pinia;
    } catch (e) {}
    return null;
  }
  function getWordStore() {
    var pinia = getPiniaStore();
    if (!pinia || !pinia.state || !pinia.state.value) return null;
    var st = pinia.state.value;
    for (var k in st) {
      if (!st.hasOwnProperty(k)) continue;
      if (st[k] && st[k].word && Array.isArray(st[k].word.bookList)) return st[k];
    }
    return null;
  }
  function appBase() {
    // 应用可能部署在根目录或 /typewords 子目录，根据当前路径推导资源基址
    var m = location.pathname.match(/^(.*?)\/words-test\//);
    if (m) return m[1];
    m = location.pathname.match(/^(.*?)\/dicts?\//);
    if (m) return m[1];
    return '';
  }
  function getRouter() {
    try {
      var el = document.querySelector('#__nuxt');
      var app = el && el.__vue_app__;
      if (app) return app.config.globalProperties.$router || app.$router || null;
    } catch (e) {}
    return null;
  }
  function logTw(msg) {
    try { console.log('[tw-patch] ' + msg); } catch (e) {}
  }
  // 把词书注入到 Pinia store：找到就更新，找不到就 push；并确保 studyIndex 指向它。
  function ensureBookInStore(dict, words) {
    var pinia = getPiniaStore();
    if (!pinia || !pinia.state || !pinia.state.value) { logTw('ensureBook: no pinia'); return false; }
    var st = pinia.state.value, found = false, targetIdx = -1;
    for (var k in st) {
      if (!st.hasOwnProperty(k)) continue;
      var s = st[k];
      if (s && s.word && Array.isArray(s.word.bookList)) {
        var bl = s.word.bookList;
        for (var i = 0; i < bl.length; i++) {
          if (String(bl[i].id) === String(dict.id)) {
            bl[i].words = words;
            bl[i].length = words.length;
            bl[i].name = dict.name || bl[i].name;
            bl[i].url = dict.url || bl[i].url;
            bl[i].language = dict.language || bl[i].language || 'en';
            targetIdx = i;
            found = true;
          }
        }
        if (!found) {
          // 系统中不存在该书：clone dict，注入 words 并 push 到列表
          var newBook = {};
          for (var key in dict) { if (dict.hasOwnProperty(key)) newBook[key] = dict[key]; }
          newBook.words = words;
          newBook.length = words.length;
          newBook.type = 'word';
          newBook.custom = false;
          newBook.system = false;
          bl.push(newBook);
          targetIdx = bl.length - 1;
          found = true;
          logTw('ensureBook: pushed new book id=' + dict.id + ' name=' + newBook.name);
        }
        if (targetIdx >= 0 && typeof s.word.studyIndex === 'number') {
          s.word.studyIndex = targetIdx;
          logTw('ensureBook: studyIndex set to ' + targetIdx);
        }
      }
      if (s && s.editDict && s.editDict.id != null && String(s.editDict.id) === String(dict.id)) {
        s.editDict.words = words;
        s.editDict.length = words.length;
      }
    }
    return found;
  }
  function getCurrentStudyBookId() {
    var pinia = getPiniaStore();
    if (!pinia || !pinia.state || !pinia.state.value) return null;
    var st = pinia.state.value;
    for (var k in st) {
      if (!st.hasOwnProperty(k)) continue;
      var s = st[k];
      if (s && s.word && typeof s.word.studyIndex === 'number' && Array.isArray(s.word.bookList)) {
        var book = s.word.bookList[s.word.studyIndex];
        if (book && book.id != null) return String(book.id);
      }
      if (s && s.editDict && s.editDict.id != null) return String(s.editDict.id);
      if (s && s.sdict && s.sdict.id != null) return String(s.sdict.id);
    }
    return null;
  }
  // 预加载失败后通过 sessionStorage 暂存，reload/跳转后恢复，避免状态丢失。
  function savePreloadToSession(dict, words) {
    try {
      var key = '__tw_test_preload_' + dict.id;
      sessionStorage.setItem(key, JSON.stringify({ dict: dict, words: words, ts: Date.now() }));
      sessionStorage.setItem('__tw_test_active_id', String(dict.id));
      return true;
    } catch (e) { logTw('saveSession failed: ' + e.message); return false; }
  }
  function loadPreloadFromSession() {
    var activeId = null;
    try { activeId = sessionStorage.getItem('__tw_test_active_id'); } catch (e) {}
    if (!activeId) return null;
    var key = '__tw_test_preload_' + activeId;
    var raw = null;
    try { raw = sessionStorage.getItem(key); } catch (e) {}
    if (!raw) return null;
    try {
      var data = JSON.parse(raw);
      sessionStorage.removeItem(key);
      sessionStorage.removeItem('__tw_test_active_id');
      return data;
    } catch (e) { return null; }
  }
  function restorePreloadedWords() {
    var data = loadPreloadFromSession();
    if (!data || !data.dict || !data.words) return;
    logTw('restorePreloadedWords id=' + data.dict.id + ' words=' + data.words.length);
    ensureBookInStore(data.dict, data.words);
  }
  function testPagePath(id) {
    return appBase() + '/words-test/' + id;
  }
  function navigateToTestPage(id) {
    var path = testPagePath(id);
    logTw('navigate to ' + path);
    var router = getRouter();
    if (router && router.push) {
      router.push(path).catch(function () { location.href = path; });
    } else {
      location.href = path;
    }
  }
  function reloadTestPage(id) {
    var path = testPagePath(id);
    var href = location.protocol + '//' + location.host + path + '?_tw_reload=' + Date.now() + location.hash;
    logTw('reload href=' + href);
    location.href = href;
  }
  // 公共预加载：获取某 id 词书的 words，注入 store，并写入 sessionStorage 备份。
  function preloadTestWords(id, callback) {
    logTw('preloadTestWords id=' + id);
    if (window.__twTestPreloading === id) return;
    window.__twTestPreloading = id;
    var listUrl = new URL('../list/word.json', location.href).href;
    fetch(listUrl).then(function (r) { return r && r.ok ? r.json() : null; }).then(function (list) {
      if (!Array.isArray(list)) { logTw('word.json not array'); return; }
      var dict = null;
      for (var i = 0; i < list.length; i++) { if (String(list[i].id) === String(id)) { dict = list[i]; break; } }
      if (!dict || !dict.url) { logTw('dict not found or no url id=' + id); return; }
      var url = new URL('../dicts/' + (dict.language || 'en') + '/word/' + dict.url, location.href).href;
      logTw('fetch dict url=' + url);
      return fetch(url).then(function (r) { return r && r.ok ? r.json() : null; }).then(function (words) {
        if (!words || !words.length) { logTw('dict words empty'); return; }
        logTw('got words=' + words.length);
        ensureBookInStore(dict, words);
        savePreloadToSession(dict, words);
        if (callback) callback();
      });
    }).catch(function (e) { logTw('preload error ' + (e && e.message)); if (callback) callback(); })
      .finally(function () { window.__twTestPreloading = null; });
  }
  function startTestWordLoad(id) {
    preloadTestWords(id, function () { reloadTestPage(id); });
  }
  /**
   * 测试页兜底渲染（修复「其它词书点测试没题目」）：
   * 原组件 Ne() 仅在 bookList[id].words 已加载、或该词书恰为当前 editDict 时取词，
   * 其它词书进入测试页时 words 为空会直接 warning 退出、页面空白。
   * 这里不依赖 Pinia 内部状态，而是直接按 id 拉取该词书词条，自己渲染题目，
   * 复用现有的 tw-test-mode 渐变背景与左右「快捷选项」装饰（装饰圆点 click 会命中 .page .option）。
   */
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function getCn(w) {
    if (!w) return '';
    var t = w.trans;
    if (Array.isArray(t) && t.length) {
      for (var i = 0; i < t.length; i++) { if (t[i] && t[i].cn) return t[i].cn; }
      return '';
    }
    if (typeof t === 'string') return t;
    return '';
  }
  function shuffleArr(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  // 兼容不同部署基址：优先用相对路径（../ 自动回退到 /typewords 上层），失败时回退到 /typewords/ 绝对路径
  function candidateUrls(rel) {
    var out = [];
    try { out.push(new URL(rel, location.href).href); } catch (e) {}
    var clean = rel.replace(/^(\.\.\/)+/, '');
    out.push('/typewords/' + clean);
    return out;
  }
  function fetchTestJson(rel) {
    var urls = candidateUrls(rel);
    function tryNext(i) {
      if (i >= urls.length) return Promise.reject(new Error('all candidates failed: ' + rel));
      return fetch(urls[i]).then(function (r) {
        if (!r || !r.ok) return Promise.reject();
        return r.json();
      }).catch(function () { return tryNext(i + 1); });
    }
    return tryNext(0);
  }
  function buildQuestions(words, n) {
    var pool = words.filter(function (w) { return w && w.word && getCn(w); });
    shuffleArr(pool);
    var used = {}, qs = [];
    for (var i = 0; i < pool.length && qs.length < n; i++) {
      var w = pool[i];
      var correct = getCn(w);
      if (used[correct]) continue;
      var d = [];
      for (var j = 0; j < pool.length && d.length < 3; j++) {
        if (j === i) continue;
        var c = getCn(pool[j]);
        if (c && c !== correct && !used[c] && d.indexOf(c) < 0) d.push(c);
      }
      if (d.length < 3) continue;
      used[correct] = 1;
      for (var k = 0; k < d.length; k++) used[d[k]] = 1;
      var opts = shuffleArr([correct].concat(d));
      qs.push({ word: w.word, phonetic: w.phonetic0 || w.phonetic1 || '', cn: correct, options: opts, idx: opts.indexOf(correct) });
    }
    return qs;
  }
  function renderSelfTest(id, words) {
    var qs = buildQuestions(words, 30);
    if (!qs.length) { logTw('buildQuestions empty for id=' + id); return false; }
    var page = document.querySelector('.page');
    if (!page) { logTw('no .page element'); return false; }
    var old = document.getElementById('tw-selftest'); if (old) old.remove();
    var s = { idx: 0, correct: 0, wrong: 0, qs: qs, finished: false };
    window.__twSelfTestState = s;
    window.__twSelfTestActive = true;
    var wrap = document.createElement('div');
    wrap.id = 'tw-selftest';
    wrap.style.cssText = 'width:100%;max-width:680px;margin:18px auto 0;display:flex;flex-direction:column;gap:10px;';
    page.appendChild(wrap);
    // 隐藏原始空卡片（可能含“没有单词可测试”提示），只展示自渲染题目
    var cards = page.querySelectorAll('.card');
    for (var ci = 0; ci < cards.length; ci++) { if (!cards[ci].contains(wrap)) cards[ci].style.display = 'none'; }
    var letters = ['A', 'B', 'C', 'D'];
    function optionHtml(letter, text, i) {
      return '<div class="option" data-idx="' + i + '" style="display:flex;align-items:center;gap:14px;width:100%;box-sizing:border-box;min-height:56px;background:rgba(255,255,255,.42);border:none;border-radius:14px;padding:10px 16px;box-shadow:0 2px 12px rgba(96,84,96,.10);backdrop-filter:blur(4px);cursor:pointer;transition:background .18s,transform .12s;">'
        + '<span style="font-style:italic;font-family:Georgia,serif;color:rgba(90,88,96,.6);min-width:22px;font-size:18px;">' + letter + '</span>'
        + '<span style="font-size:16px;color:#3a3640;line-height:1.35;">' + escapeHtml(text) + '</span>'
        + '</div>';
    }
    // 统一四个选项框高度：先让内容自然撑开，取最高者，再全部设为同高
    function equalizeOptions() {
      var els = wrap.querySelectorAll('.option');
      if (!els.length) return;
      for (var i = 0; i < els.length; i++) {
        els[i].style.height = 'auto';
        els[i].style.alignItems = 'flex-start';
        els[i].style.paddingTop = '16px';
      }
      var maxH = 0;
      for (var j = 0; j < els.length; j++) {
        var h = els[j].getBoundingClientRect().height;
        if (h > maxH) maxH = h;
      }
      for (var k = 0; k < els.length; k++) els[k].style.height = maxH + 'px';
    }
    if (window.__twSelfTestResize) window.removeEventListener('resize', window.__twSelfTestResize);
    window.__twSelfTestResize = equalizeOptions;
    window.addEventListener('resize', window.__twSelfTestResize);
    function render() {
      var q = qs[s.idx];
      var optsHtml = '';
      for (var i = 0; i < q.options.length; i++) optsHtml += optionHtml(letters[i], q.options[i], i);
      wrap.innerHTML =
        '<div style="text-align:center;">'
        + '<div style="font-size:30px;font-weight:600;color:#2f2b35;letter-spacing:.5px;line-height:1.2;">' + escapeHtml(q.word) + '</div>'
        + (q.phonetic ? '<div style="margin-top:6px;color:#7a7480;font-size:15px;">/' + escapeHtml(q.phonetic) + '/</div>' : '')
        + '</div>'
        + '<div style="display:flex;flex-direction:column;gap:10px;align-items:center;">' + optsHtml + '</div>'
        + '<div id="tw-fb" style="text-align:center;min-height:24px;font-size:16px;margin-top:4px;"></div>'
        + '<div style="display:flex;justify-content:center;align-items:center;gap:18px;margin-top:8px;">'
        + '<span id="tw-prog" style="color:#7a7480;font-size:15px;">' + (s.idx + 1) + ' / ' + qs.length + '</span>'
        + '<button id="tw-next" style="display:none;padding:10px 26px;border:none;border-radius:24px;background:#8a7fd0;color:#fff;font-size:16px;cursor:pointer;">下一题</button>'
        + '</div>';
      bindOpts();
      var nb = wrap.querySelector('#tw-next'); if (nb) nb.addEventListener('click', next);
      requestAnimationFrame(function () { equalizeOptions(); fitTestToViewport(); alignSideDecor(); });
    }
    function bindOpts() {
      var els = wrap.querySelectorAll('.option');
      for (var k = 0; k < els.length; k++) {
        (function (el) { el.addEventListener('click', function () { choose(parseInt(el.getAttribute('data-idx'), 10)); }); })(els[k]);
      }
    }
    function choose(i) {
      if (s.finished) return;
      var q = qs[s.idx];
      var els = wrap.querySelectorAll('.option');
      var fb = wrap.querySelector('#tw-fb');
      for (var k = 0; k < els.length; k++) els[k].style.pointerEvents = 'none';
      if (i === q.idx) {
        s.correct++;
        if (els[i]) els[i].style.background = 'rgba(120,200,140,.55)';
        if (fb) fb.innerHTML = '<span style="color:#2e8b57;font-weight:600;">✓ 正确</span>';
      } else {
        s.wrong++;
        if (els[i]) els[i].style.background = 'rgba(220,120,120,.5)';
        if (els[q.idx]) els[q.idx].style.background = 'rgba(120,200,140,.55)';
        if (fb) fb.innerHTML = '<span style="color:#c0392b;">✗</span>';
      }
      var nb = wrap.querySelector('#tw-next'); if (nb) nb.style.display = 'inline-block';
    }
    function next() {
      s.idx++;
      if (s.idx >= qs.length) { finish(); return; }
      render();
    }
    function finish() {
      s.finished = true;
      wrap.innerHTML = '<div style="text-align:center;padding:30px 0;">'
        + '<div style="font-size:30px;color:#2f2b35;font-weight:600;">测试完成</div>'
        + '<div style="margin-top:14px;color:#7a7480;font-size:18px;">正确 ' + s.correct + ' / ' + qs.length + '　错误 ' + s.wrong + '</div>'
        + '<button id="tw-again" style="margin-top:24px;padding:10px 26px;border:none;border-radius:24px;background:#8a7fd0;color:#fff;font-size:16px;cursor:pointer;">再来一组</button>'
        + '</div>';
      var ag = wrap.querySelector('#tw-again');
      if (ag) ag.addEventListener('click', function () { s.idx = 0; s.correct = 0; s.wrong = 0; s.finished = false; render(); });
    }
    window.__twTestFallback = { choose: function (i) { choose(i); } };
    render();
    return true;
  }
  function patchTestWordsIfEmpty() {
    var m = location.pathname.match(/\/words-test\/(\d+)/);
    if (!m) { window.__twSelfTestActive = false; return; }
    var id = m[1];
    if (document.querySelectorAll('.page .option').length > 0) { window.__twSelfTestActive = false; return; }
    if (window.__twSelfTestActive && document.getElementById('tw-selftest')) return;
    if (window.__twTestLoading === id) return;
    if (!window.__twTestFail) window.__twTestFail = {};
    if ((window.__twTestFail[id] || 0) >= 3) return;
    window.__twTestLoading = id;
    setTimeout(function () {
      window.__twTestLoading = null;
      if (!/\/words-test\//.test(location.pathname)) return;
      if (document.querySelectorAll('.page .option').length > 0) { window.__twSelfTestActive = false; return; }
      if (window.__twSelfTestActive && document.getElementById('tw-selftest')) return;
      fetchTestJson('../list/word.json').then(function (list) {
        if (!Array.isArray(list)) throw new Error('list not array');
        var dict = null;
        for (var i = 0; i < list.length; i++) { if (String(list[i].id) === String(id)) { dict = list[i]; break; } }
        if (!dict || !dict.url) throw new Error('dict not found id=' + id);
        return fetchTestJson('../dicts/' + (dict.language || 'en') + '/word/' + dict.url).then(function (words) {
          if (!words || !words.length) throw new Error('words empty');
          logTw('render self test id=' + id + ' words=' + words.length);
          var ok = renderSelfTest(id, words);
          if (!ok) { window.__twTestFail[id] = (window.__twTestFail[id] || 0) + 1; logTw('renderSelfTest returned false'); }
        });
      }).catch(function (e) {
        window.__twTestFail[id] = (window.__twTestFail[id] || 0) + 1;
        logTw('self test load failed: ' + (e && e.message ? e.message : e));
      });
    }, 700);
  }

  /**
   * 实体书视图：iframe 加载 Bookshelf-Sticker 3D 书架（/bookshelf/ 静态站）。
   * 视觉、交互、动画与原版一摸一样，仅书名由推荐区词书经 URL query 注入。
   */
  function findRecCard() {
    var titles = document.querySelectorAll('.title');
    for (var i = 0; i < titles.length; i++) {
      if (titles[i].textContent.trim() === '推荐') {
        return titles[i].closest('.card');
      }
    }
    return null;
  }
  /** 收集推荐区词书名 + 词数（最多 10 本，对应书架 10 个书位） */
  function collectBookNames() {
    var card = findRecCard();
    if (!card) return [];
    var books = card.querySelectorAll('.book');
    var names = [];
    for (var i = 0; i < books.length && i < 10; i++) {
      var t = books[i].querySelector('.text-base');
      var name = t ? t.textContent.trim() : '';
      if (name) {
        var count = null;
        var m = books[i].textContent.match(/(\d[\d,，]*)\s*词/);
        if (m) count = parseInt(m[1].replace(/[,,]/g, ''), 10);
        if (!count && __twWordCounts) count = __twWordCounts[name] || null;
        names.push({ name: name, count: count });
      }
    }
    return names;
  }
  /** 词书名 → 词数 映射（来自 /typewords/list/word.json，运行时加载） */
  var __twWordCounts = null;
  try {
    fetch('/typewords/list/word.json').then(function (r) { return r.ok ? r.json() : null; }).then(function (list) {
      if (!Array.isArray(list)) return;
      var map = {};
      list.forEach(function (d) { if (d && d.name && d.length) map[d.name] = d.length; });
      __twWordCounts = map;
    }).catch(function () {});
  } catch (e) {}
  function buildBookshelfUrl() {
    return '/bookshelf/index.html?chrome=0&title=' + encodeURIComponent('我的词书') +
      '&books=' + encodeURIComponent(JSON.stringify(collectBookNames()));
  }
  /** 退出书架回到卡片视图（容器内嵌时切换按钮仍可见，这里是兜底出口） */
  function exitBookshelf() {
    setBookView('card');
    applyBookView();
    var toggle = document.getElementById('tw-rec-view-toggle');
    if (toggle) updateToggleUI(toggle);
    try { if (__twViewBC) __twViewBC.postMessage({ mode: 'card' }); } catch (e) {}
  }

  /** 根据书名在当前 typewords 页面中找到对应词书卡片并触发点击，进入词典详情页 */
  function openDictByTitle(title) {
    if (!title) return;
    var books = document.querySelectorAll('.book');
    var matched = null;
    for (var i = 0; i < books.length; i++) {
      var t = books[i].querySelector('.text-base');
      if (t && t.textContent.trim() === title) {
        matched = books[i];
        break;
      }
    }

    function isClickable(el) {
      if (!el) return false;
      var tag = el.tagName.toLowerCase();
      return tag === 'a' || tag === 'button' || el.getAttribute('role') === 'button' || el.onclick || el.dataset.clickable;
    }
    function findClickable(el) {
      if (!el) return null;
      if (isClickable(el)) return el;
      var inner = el.querySelector('a, button, [role="button"]');
      if (inner) return inner;
      var p = el.parentElement;
      for (var k = 0; k < 4 && p; k++) {
        if (isClickable(p)) return p;
        p = p.parentElement;
      }
      return el;
    }
    function fireClick(el) {
      if (!el) return;
      try { el.click(); } catch (e) {}
      var evt = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
      el.dispatchEvent(evt);
      // 部分框架监听 mousedown / mouseup / pointerdown，补发一套兜底事件
      el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
      el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
      el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true, view: window }));
    }

    if (matched) {
      fireClick(findClickable(matched));
      // 兜底：若 600ms 后仍停留在非词典页面，则直接跳到词典列表
      setTimeout(function() {
        var path = location.pathname;
        if (path.indexOf('/typewords/dict-list') !== 0 && path.indexOf('/typewords/words') !== 0) {
          location.href = '/typewords/dict-list';
        }
      }, 600);
      return;
    }
    // 当前页没有对应卡片时回到词典列表页
    if (location.pathname.indexOf('/typewords/dict-list') !== 0) {
      location.href = '/typewords/dict-list';
    }
  }
  /** 预加载书架 HTML，缩短用户点击「实体书」后的白屏等待 */
  var __twBookPreloaded = false;
  function tryPreloadBookshelf() {
    if (__twBookPreloaded) return;
    var names = collectBookNames();
    if (!names.length) return;
    __twBookPreloaded = true;
    var url = buildBookshelfUrl();
    var link = document.getElementById('tw-bookshelf-preload');
    if (!link) {
      link = document.createElement('link');
      link.id = 'tw-bookshelf-preload';
      link.rel = 'preload';
      link.as = 'document';
      link.href = url;
      var h = document.head || document.documentElement;
      if (h) h.appendChild(link);
    } else {
      link.href = url;
    }
  }

  /** src 比较：浏览器可能把 attribute 规范化为绝对 URL，归一化后再比 */
  function sameBookshelfSrc(attr, rel) {
    if (!attr) return false;
    try {
      var u = new URL(attr, window.location.href);
      return (u.pathname + u.search) === rel;
    } catch (e) {
      return attr === rel;
    }
  }
  /** 创建（懒）书架 iframe 容器；refresh=true 时强制重载 src。
   *  frame 为 absolute 定位，由 applyBookView 挂进推荐 card 容器内部 */
  function ensureBookshelfFrame(refresh) {
    var frame = document.getElementById('tw-bookshelf-frame');
    if (!frame) {
      frame = document.createElement('div');
      frame.id = 'tw-bookshelf-frame';
      // 背景透明，让外层推荐卡背景统一，不形成底部白条
      frame.style.cssText = 'position:absolute;inset:0;z-index:5;background:transparent;display:none;';
      var tip = document.createElement('div');
      tip.id = 'tw-bookshelf-tip';
      tip.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#68746c;font-size:14px;background:rgba(255,255,255,0.7);z-index:1;';
      tip.textContent = '正在打开书架…';
      var iframe = document.createElement('iframe');
      iframe.id = 'tw-bookshelf-iframe';
      iframe.setAttribute('title', '词书书架');
      iframe.style.cssText = 'width:100%;height:100%;border:none;background:transparent;';
      iframe.setAttribute('allowTransparency', 'true');
      var loadTimer = null;
      iframe.addEventListener('load', function () {
        if (loadTimer) { clearTimeout(loadTimer); loadTimer = null; }
        var t2 = document.getElementById('tw-bookshelf-tip');
        if (t2) t2.style.display = 'none';
      });
      frame.appendChild(tip);
      frame.appendChild(iframe);
      document.body.appendChild(frame);
      // 兜底：8 秒还没加载完（资源缺失/网络异常），自动回退卡片视图，防白屏死锁
      frame.__twArmGuard = function () {
        if (loadTimer) clearTimeout(loadTimer);
        loadTimer = setTimeout(function () {
          var t3 = document.getElementById('tw-bookshelf-tip');
          if (t3 && t3.style.display !== 'none') exitBookshelf();
        }, 8000);
      };
    }
    var ifr = document.getElementById('tw-bookshelf-iframe');
    var url = buildBookshelfUrl();
    if (ifr && (refresh || !sameBookshelfSrc(ifr.getAttribute('src'), url))) {
      ifr.setAttribute('src', url);
      var tip2 = document.getElementById('tw-bookshelf-tip');
      if (tip2) tip2.style.display = 'flex';
      if (frame.__twArmGuard) frame.__twArmGuard();
    }
    return frame;
  }
  /** 初始化早于推荐区渲染时书名为空：轮询等词书出现，就绪后强制刷新一次 src */
  var __twBookWaitTimer = null;
  function waitBooksThenRefresh() {
    if (__twBookWaitTimer) return;
    var tries = 0;
    __twBookWaitTimer = setInterval(function () {
      tries++;
      var ready = collectBookNames().length > 0;
      if (ready || tries >= 25) {
        clearInterval(__twBookWaitTimer);
        __twBookWaitTimer = null;
        if (ready && getBookView() === 'real') ensureBookshelfFrame(true);
      }
    }, 400);
  }

/**
   * 词典列表分类改造：隐藏原「中国考试：」前缀，保留「全部/四级/六级」，
   * 追加「考研」选项；点击「考研」时隐藏所有词典卡片并显示占位提示。
   */
  var __categoryClickBound = false;
  function patchCategoryTags() {
    var cats = document.querySelectorAll('.dict-list-page .category');
    for (var i = 0; i < cats.length; i++) {
      cats[i].style.display = 'none';
      cats[i].dataset.twHidden = '1';
      cats[i].textContent = '';
    }

    var tagsContainer = document.querySelector('.dict-list-page .tags');
    if (!tagsContainer) return;

    if (!document.getElementById('tw-category-style')) {
      var st = document.createElement('style');
      st.id = 'tw-category-style';
      st.textContent =
        '.dict-list-page .tags{display:inline-flex !important;align-items:center !important;gap:10px !important;vertical-align:middle !important;}' +
        '.dict-list-page .tags .tag{display:inline-flex !important;align-items:center !important;justify-content:center !important;height:32px !important;line-height:1 !important;margin:0 !important;padding:0 !important;vertical-align:middle !important;box-sizing:border-box !important;}' +
        '.dict-list-page .tags .tag.active{padding:0 14px !important;background:#6b7280 !important;color:#fff !important;border-radius:999px !important;}';
      var h = document.head || document.documentElement;
      if (h) h.appendChild(st);
    }

    var kaoyanTag = tagsContainer.querySelector('[data-tw-kaoyan]');
    if (!kaoyanTag) {
      kaoyanTag = document.createElement('div');
      kaoyanTag.className = 'tag';
      kaoyanTag.textContent = '考研';
      kaoyanTag.dataset.twKaoyan = '1';
      tagsContainer.appendChild(kaoyanTag);
    }

    var bookList = null;
    var firstBook = document.querySelector('.dict-list-page .book');
    if (firstBook) {
      bookList = firstBook.parentElement;
    }
    if (!bookList) {
      bookList = document.querySelector('.dict-list-page');
    }

    var emptyEl = document.querySelector('.tw-kaoyan-empty');
    if (!emptyEl && bookList) {
      emptyEl = document.createElement('div');
      emptyEl.className = 'tw-kaoyan-empty';
      emptyEl.textContent = '考研词库筹备中，敬请期待';
      emptyEl.style.cssText = 'display:none;width:100%;text-align:center;padding:60px 20px;color:#888;font-size:15px;';
      bookList.appendChild(emptyEl);
    }

    // 如果当前处于「考研」态，持续保持隐藏卡片 + 显示占位
    if (kaoyanTag.classList.contains('active')) {
      var books = document.querySelectorAll('.dict-list-page .book');
      for (var j = 0; j < books.length; j++) books[j].style.display = 'none';
      if (emptyEl) emptyEl.style.display = 'block';
    } else if (emptyEl) {
      emptyEl.style.display = 'none';
    }

    if (__categoryClickBound) return;
    __categoryClickBound = true;

    document.addEventListener('click', function(e) {
      var target = e.target;
      if (!target || !target.classList || !target.classList.contains('tag')) return;
      var tagsContainer2 = target.closest('.tags');
      if (!tagsContainer2) return;

      if (target.dataset.twKaoyan !== '1') {
        // 切换到非考研分类：清理占位，让原生 Vue 接管卡片显隐
        var empty = document.querySelector('.tw-kaoyan-empty');
        if (empty) empty.style.display = 'none';
        var books = document.querySelectorAll('.dict-list-page .book');
        for (var j = 0; j < books.length; j++) books[j].style.display = '';
        return;
      }

      // 点击「考研」：阻止原生过滤，手动切换 active 并清空卡片
      e.stopPropagation();
      e.preventDefault();
      var allTags = tagsContainer2.querySelectorAll('.tag');
      for (var k = 0; k < allTags.length; k++) allTags[k].classList.remove('active');
      target.classList.add('active');
      var books = document.querySelectorAll('.dict-list-page .book');
      for (var k = 0; k < books.length; k++) books[k].style.display = 'none';
      var empty = document.querySelector('.tw-kaoyan-empty');
      if (empty) empty.style.display = 'block';
    }, true);
  }

  /**
   * 删除移动端顶部导航里的「主页」标签。
   */
  function hideMobileHome() {
    var all = document.querySelectorAll('.mobile-top-nav .nav-item');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.dataset.twHideHome) continue;
      if (el.textContent.trim() === '主页') {
        el.style.display = 'none';
        el.dataset.twHideHome = '1';
      }
    }
  }

  // ===== 设置桥接：供 AFFiNE 侧边栏「设置」面板原生读写 typewords 设置 =====
  // 说明：typewords 是独立 Vue 应用，宿主（AFFiNE）无法直接渲染其组件，
  // 因此在其内部暴露一个轻量桥接：读取 / 修改 Pinia 的 setting store，
  // 并用 BroadcastChannel 把变更广播给同源的其它 typewords iframe 实例
  // （例如背单词主界面），实现多实例设置同步。
  function findPinia() {
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var app = els[i].__vue_app__;
      if (app && app.config && app.config.globalProperties && app.config.globalProperties.$pinia) {
        return app.config.globalProperties.$pinia;
      }
    }
    return null;
  }
  function getSettingStore() {
    var pinia = findPinia();
    if (!pinia) return null;
    try {
      return pinia._s.get('setting') || null;
    } catch (e) {
      return null;
    }
  }
  var __twBC = null;
  try {
    __twBC = new BroadcastChannel('tw-settings-sync');
    __twBC.onmessage = function(ev) {
      var d = ev.data;
      if (!d || d.type !== 'tw-setting') return;
      var store = getSettingStore();
      if (!store) return;
      try {
        var patch = {};
        patch[d.key] = d.value;
        store.$patch(patch);
      } catch (e) {}
    };
  } catch (e) {}
  window.__TW_BRIDGE__ = {
    ready: function() {
      return !!getSettingStore();
    },
    getSettings: function() {
      var s = getSettingStore();
      if (!s) return null;
      try {
        return JSON.parse(JSON.stringify(s.$state));
      } catch (e) {
        return null;
      }
    },
    setSetting: function(key, value) {
      var s = getSettingStore();
      if (!s) return false;
      try {
        var patch = {};
        patch[key] = value;
        s.$patch(patch);
        if (__twBC) {
          try { __twBC.postMessage({ type: 'tw-setting', key: key, value: value }); } catch (e) {}
        }
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  /**
   * 卡片配色：从 localStorage('tw-card-colors') 读取用户四色，
   * 未设置则回退默认色卡四色。文字色按背景亮度自动计算。
   * 颜色改动由设置面板经 BroadcastChannel('tw-card-colors') 广播，即时重渲。
   */
  var TW_CARD_DEFAULT = ['#b6c2cf', '#97979c', '#dbddda', '#fdf9ee'];
  function pickCardText(bg) {
    var c = (bg || '').replace('#', '');
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    if (c.length !== 6) return '#ffffff';
    var r = parseInt(c.slice(0, 2), 16);
    var g = parseInt(c.slice(2, 4), 16);
    var b = parseInt(c.slice(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return '#ffffff';
    var L = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return L > 0.62 ? '#2b2f33' : '#ffffff';
  }
  function migrateCardColors() {
    try {
      var old = localStorage.getItem('tw-card-colors');
      var v2 = localStorage.getItem('tw-card-colors-v2');
      if (old && !v2) {
        var arr = JSON.parse(old);
        if (Array.isArray(arr) && arr.length >= 4) {
          var map = {};
          for (var i = 0; i < arr.length; i++) map['' + i] = arr[i];
          localStorage.setItem('tw-card-colors-v2', JSON.stringify(map));
        }
      }
    } catch (e) {}
  }
  function getCardColorMap() {
    migrateCardColors();
    var map = {};
    try { map = JSON.parse(localStorage.getItem('tw-card-colors-v2')) || {}; } catch (e) {}
    if (typeof map !== 'object' || map === null) map = {};
    return migrateNumericKeys(map);
  }
  // 旧版 v2 用页内序号（"0".."4"）做键，只对词典列表页有意义。
  // 一次性迁移为按书名做键（顺序与 word.json 一致），保证主页推荐区与词典列表颜色同步。
  var TW_LEGACY_DICT_ORDER = ['CET-4', '六级考纲词汇（精简版）', '四级考纲词汇（精简版）', '六级新大纲词汇表', '六级词汇闪过乱序版'];
  function migrateNumericKeys(map) {
    try {
      if (localStorage.getItem('tw-card-colors-v2-mig')) return map;
      var changed = false;
      for (var k in map) {
        if (/^\d+$/.test(k)) {
          var t = TW_LEGACY_DICT_ORDER[+k];
          if (t && map['t:' + t] === undefined) map['t:' + t] = map[k];
          delete map[k];
          changed = true;
        }
      }
      if (changed) {
        localStorage.setItem('tw-card-colors-v2', JSON.stringify(map));
        localStorage.setItem('tw-card-colors-v2-mig', '1');
      }
    } catch (e) {}
    return map;
  }
  function setCardColorMap(map) {
    try { localStorage.setItem('tw-card-colors-v2', JSON.stringify(map)); } catch (e) {}
  }
  /**
   * 扫描当前页所有词书卡片（词典列表页 + 背单词主页我的词典/推荐区）。
   * 颜色键：有书名用 't:书名'（跨页面同步同一本书），无书名（如「+」卡）用位置键 'p:序号'。
   */
  function scanBooks() {
    var books = document.querySelectorAll('.book');
    var list = [];
    for (var i = 0; i < books.length; i++) {
      var b = books[i];
      b.setAttribute('data-tw-book-id', '' + i);
      var titleEl = b.querySelector('.text-base');
      var title = titleEl ? titleEl.textContent.trim() : '';
      var key = title ? ('t:' + title) : ('p:' + i);
      if (!title) title = '卡片' + (i + 1);
      list.push({ el: b, id: '' + i, key: key, title: title });
    }
    return list;
  }
  function applyCardColors() {
    var map = getCardColorMap();
    var books = scanBooks();
    if (!books.length) {
      var st = document.getElementById('tw-card-colors-style');
      if (st) st.textContent = '';
      return;
    }
    var css = '';
    for (var i = 0; i < books.length; i++) {
      var b = books[i];
      var bg = map[b.key];
      if (!bg) bg = TW_CARD_DEFAULT[i % TW_CARD_DEFAULT.length];
      var t = pickCardText(bg);
      css += '.page .book[data-tw-book-id="' + b.id + '"]{--tw-cover:' +
        bg + ' !important;--tw-title:' + t + ' !important;}';
    }
    var st = document.getElementById('tw-card-colors-style');
    if (!st) {
      st = document.createElement('style');
      st.id = 'tw-card-colors-style';
      (document.head || document.documentElement).appendChild(st);
    }
    st.textContent = css;
  }
  try {
    var __twColorBC = new BroadcastChannel('tw-card-colors');
    __twColorBC.onmessage = function () { applyCardColors(); };
  } catch (e) {}

  // —— 主题同步：左侧边栏黑暗模式按钮控制 typewords 主题 ——
  function getHostTheme() {
    try {
      if (window.parent && window.parent !== window) {
        return window.parent.document.documentElement.getAttribute('data-theme') || 'light';
      }
      return document.documentElement.getAttribute('data-theme') || 'light';
    } catch (e) {
      return 'light';
    }
  }
  function applyHostTheme(mode) {
    if (!mode || (mode !== 'dark' && mode !== 'light')) return;
    if (!window.__TW_BRIDGE__ || !window.__TW_BRIDGE__.ready()) {
      if (!window.__twThemeTimer) {
        window.__twThemeTimerTries = 0;
        window.__twThemeTimer = setInterval(function () {
          window.__twThemeTimerTries += 1;
          if (window.__TW_BRIDGE__ && window.__TW_BRIDGE__.ready()) {
            clearInterval(window.__twThemeTimer);
            window.__twThemeTimer = null;
            applyHostTheme(getHostTheme());
          } else if (window.__twThemeTimerTries > 150) {
            clearInterval(window.__twThemeTimer);
            window.__twThemeTimer = null;
          }
        }, 200);
      }
      return;
    }
    try {
      var s = window.__TW_BRIDGE__.getSettings();
      if (s && s.theme === mode) return;
      window.__TW_BRIDGE__.setSetting('theme', mode);
    } catch (e) {}
  }
  function syncHostTheme() {
    applyHostTheme(getHostTheme());
    try {
      var target = (window.parent && window.parent !== window) ? window.parent.document.documentElement : document.documentElement;
      var obs = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'data-theme') {
            applyHostTheme(getHostTheme());
            break;
          }
        }
      });
      obs.observe(target, { attributes: true, attributeFilter: ['data-theme'] });
    } catch (e) {}
  }

  // —— 推荐区视图切换：卡片 / 实体书 ——
  function getBookView() {
    try { return localStorage.getItem('tw-book-view') || 'card'; } catch (e) { return 'card'; }
  }
  function setBookView(mode) {
    try {
      localStorage.setItem('tw-book-view', mode);
    } catch (e) {}
  }
  /** real 模式：隐藏推荐容器内除标题行与书架 frame 之外的子节点；
   *  同时把推荐卡背景/阴影去掉，让书架透明融入页面背景 */
  function hideRecCardContent(recCard, frame) {
    var kids = recCard.children;
    for (var i = 0; i < kids.length; i++) {
      var el = kids[i];
      if (el === frame) continue;
      if (el.querySelector && el.querySelector('.title')) {
        // 标题行（含切换按钮与「更多」）保留可见，并浮到书架 frame 之上
        if (el.dataset.twPos == null) el.dataset.twPos = el.style.position || '';
        el.style.position = 'relative';
        el.style.zIndex = '6';
        el.style.background = 'inherit';
        // real 模式下隐藏标题行右侧「更多」链接
        var cands = el.querySelectorAll('a,span,div,button');
        for (var j = 0; j < cands.length; j++) {
          var c = cands[j];
          if (!c.textContent || c.textContent.trim() !== '更多') continue;
          // 只取最内层匹配（后代中不再有「更多」）
          var hasInner = false;
          for (var k = 0; k < cands.length; k++) {
            if (k !== j && cands[k].textContent && cands[k].textContent.trim() === '更多' && c.contains(cands[k])) { hasInner = true; break; }
          }
          if (hasInner) continue;
          if (c.dataset.twMoreDisplay == null) c.dataset.twMoreDisplay = c.style.display || '';
          c.style.display = 'none';
          break;
        }
        continue;
      }
      if (el.dataset.twDisplay == null) el.dataset.twDisplay = el.style.display || '';
      el.style.display = 'none';
    }
    if (recCard.dataset.twBg == null) recCard.dataset.twBg = recCard.style.background || '';
    if (recCard.dataset.twBgColor == null) recCard.dataset.twBgColor = recCard.style.backgroundColor || '';
    if (recCard.dataset.twBoxShadow == null) recCard.dataset.twBoxShadow = recCard.style.boxShadow || '';
    recCard.style.background = 'transparent';
    recCard.style.backgroundColor = 'transparent';
    recCard.style.boxShadow = 'none';
  }
  /** card 模式：恢复被隐藏的推荐容器子节点与背景 */
  function showRecCardContent(recCard) {
    var kids = recCard.children;
    for (var i = 0; i < kids.length; i++) {
      var el = kids[i];
      if (el.dataset.twDisplay != null) {
        el.style.display = el.dataset.twDisplay;
        delete el.dataset.twDisplay;
      }
      if (el.dataset.twPos != null) {
        el.style.position = el.dataset.twPos;
        el.style.zIndex = '';
        delete el.dataset.twPos;
      }
      // 恢复 real 模式被隐藏的「更多」链接（在标题行内部）
      if (el.querySelector) {
        var m2 = el.querySelectorAll('[data-tw-more-display]');
        for (var j = 0; j < m2.length; j++) {
          m2[j].style.display = m2[j].dataset.twMoreDisplay;
          delete m2[j].dataset.twMoreDisplay;
        }
      }
    }
    if (recCard.dataset.twBg != null) {
      recCard.style.background = recCard.dataset.twBg;
      delete recCard.dataset.twBg;
    } else {
      recCard.style.background = '';
    }
    if (recCard.dataset.twBgColor != null) {
      recCard.style.backgroundColor = recCard.dataset.twBgColor;
      delete recCard.dataset.twBgColor;
    } else {
      recCard.style.backgroundColor = '';
    }
    if (recCard.dataset.twBoxShadow != null) {
      recCard.style.boxShadow = recCard.dataset.twBoxShadow;
      delete recCard.dataset.twBoxShadow;
    } else {
      recCard.style.boxShadow = '';
    }
  }
  function applyBookView() {
    var mode = getBookView();
    var titles = document.querySelectorAll('.title');
    var recCard = null;
    for (var i = 0; i < titles.length; i++) {
      if (titles[i].textContent.trim() === '推荐') {
        recCard = titles[i].closest('.card');
        if (recCard) recCard.setAttribute('data-tw-view', mode);
        break;
      }
    }
    // 实体书 = 推荐容器内部的 3D 书架（Bookshelf-Sticker）；卡片 = 推荐区原样
    var frame = document.getElementById('tw-bookshelf-frame');
    if (mode === 'real') {
      frame = ensureBookshelfFrame(false);
      if (frame && recCard) {
        // 挂进推荐容器内部（不是全屏跳转），撑高容器给书架留空间
        if (frame.parentNode !== recCard) recCard.appendChild(frame);
        if (!recCard.style.position) recCard.style.position = 'relative';
        // 嵌入书架框：高度适中，书整体上移并隐藏底部目录，避免推荐卡底部白条
        recCard.style.minHeight = 'min(720px, 78vh)';
        recCard.style.overflow = 'hidden';
        frame.style.display = 'block';
        hideRecCardContent(recCard, frame);
      }
      // 初始化时机早于推荐区渲染时书名为空：等词书出现后刷新一次 src
      if (!collectBookNames().length) waitBooksThenRefresh();
    } else {
      if (frame) frame.style.display = 'none';
      if (recCard) {
        recCard.style.minHeight = '';
        recCard.style.overflow = '';
        showRecCardContent(recCard);
      }
    }
  }
  function updateToggleUI(toggle) {
    var mode = getBookView();
    var btns = toggle.querySelectorAll('button[data-mode]');
    for (var i = 0; i < btns.length; i++) {
      var active = btns[i].getAttribute('data-mode') === mode;
      btns[i].style.cssText = active
        ? 'padding:4px 10px;border:none;border-radius:6px;background:#2b2f33;color:#fff;cursor:pointer;font-size:12px;'
        : 'padding:4px 10px;border:none;border-radius:6px;background:transparent;color:#666;cursor:pointer;font-size:12px;';
    }
  }
  function injectViewToggle() {
    var titles = document.querySelectorAll('.title');
    var recTitle = null;
    for (var i = 0; i < titles.length; i++) {
      if (titles[i].textContent.trim() === '推荐') { recTitle = titles[i]; break; }
    }
    if (!recTitle) return;
    var row = recTitle.closest('.flex.justify-between');
    if (!row) return;
    var toggle = document.getElementById('tw-rec-view-toggle');
    if (!toggle) {
      toggle = document.createElement('div');
      toggle.id = 'tw-rec-view-toggle';
      // margin-left: 与「推荐」标题的间距；margin-right:auto: 把「更多」推到最右侧
      toggle.style.cssText = 'display:inline-flex;align-items:center;gap:2px;background:#f0f0f2;border-radius:8px;padding:2px;margin-left:8px;margin-right:auto;vertical-align:middle;';
      toggle.innerHTML = '<button data-mode="card" type="button">卡片</button><button data-mode="real" type="button">实体书</button>';
      recTitle.parentNode.insertBefore(toggle, recTitle.nextSibling);
      // 若标题被包在内部容器里，给该容器加 auto margin 才能推开右侧内容
      if (recTitle.parentNode !== row) {
        recTitle.parentNode.style.marginRight = 'auto';
      }
      toggle.addEventListener('click', function (e) {
        var t = e.target;
        if (!t || !t.getAttribute) return;
        var mode = t.getAttribute('data-mode');
        if (!mode || (mode !== 'card' && mode !== 'real')) return;
        setBookView(mode);
        applyBookView();
        updateToggleUI(toggle);
        try { if (__twViewBC) __twViewBC.postMessage({ mode: mode }); } catch (e) {}
      });
    }
    updateToggleUI(toggle);
    applyBookView();
  }
  try {
    var __twViewBC = new BroadcastChannel('tw-book-view');
    __twViewBC.onmessage = function (ev) {
      var d = ev.data;
      if (d && (d.mode === 'card' || d.mode === 'real')) {
        setBookView(d.mode);
        applyBookView();
        var toggle = document.getElementById('tw-rec-view-toggle');
        if (toggle) updateToggleUI(toggle);
      }
    };
  } catch (e) {}

  // 宿主（AFFiNE）每次激活「背单词」时通知回到卡片（单词）界面：
  // 书架（实体书）不持久化，只能在本次会话中手动切换进入
  window.addEventListener('message', function (ev) {
    var d = ev.data;
    if (d && d.type === 'tw-force-view' && (d.mode === 'card' || d.mode === 'real')) {
      setBookView(d.mode);
      applyBookView();
      var tg = document.getElementById('tw-rec-view-toggle');
      if (tg) updateToggleUI(tg);
      try { if (__twViewBC) __twViewBC.postMessage({ mode: d.mode }); } catch (e) {}
    }
    if (d && d.type === 'tw-open-dict' && d.title) {
      openDictByTitle(d.title);
    }
  });

  // —— 卡片配色：可自定义，存 localStorage('tw-card-colors') + 经 BroadcastChannel 广播给同源页面 ——
  var TW_CARD_PRESETS = [
    { name: '色卡四色', colors: ['#b6c2cf', '#97979c', '#dbddda', '#fdf9ee'] },
    { name: '暖调', colors: ['#ffd6c0', '#ffb3a7', '#ffd8a8', '#fff0d9'] },
    { name: '冷调', colors: ['#cfe3e8', '#bcd4e6', '#d4e4dd', '#e6eef5'] },
    { name: '莫兰迪', colors: ['#d8cfc4', '#c9c2bd', '#cdd2c8', '#e3ddd5'] },
    { name: '爱马仕橙', colors: ['#FF8A00', '#FFF2DF', '#015697', '#FF8A00'] },
  ];
  function renderColorPanel(panel) {
    var map = getCardColorMap();
    var books = scanBooks();
    var html = '<div style="font-weight:600;margin-bottom:10px;font-size:14px">卡片配色</div>';
    html += '<div style="color:#888;margin-bottom:6px">预设</div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">';
    for (var i = 0; i < TW_CARD_PRESETS.length; i++) {
      html += '<button data-preset="' + i + '" style="padding:5px 10px;border:1px solid #e3e3e8;border-radius:8px;background:#f7f7f9;cursor:pointer;font-size:12px">' + TW_CARD_PRESETS[i].name + '</button>';
    }
    html += '</div>';
    if (books.length) {
      html += '<div style="color:#888;margin-bottom:6px">单张修改（点击取色）</div>';
      html += '<div style="max-height:240px;overflow-y:auto;margin-bottom:12px">';
      for (var j = 0; j < books.length; j++) {
        var b = books[j];
        var bg = map[b.key] || TW_CARD_DEFAULT[j % TW_CARD_DEFAULT.length];
        html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid #f0f0f2">';
        html += '<span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12px;color:#333">' + b.title + '</span>';
        html += '<input type="color" data-bid="' + b.key + '" value="' + bg + '" style="width:28px;height:28px;border:none;background:none;cursor:pointer;padding:0;flex-shrink:0">';
        html += '</div>';
      }
      html += '</div>';
    } else {
      html += '<div style="color:#999;margin-bottom:12px;font-size:12px">当前页无可修改的卡片</div>';
    }
    html += '<button data-reset style="width:100%;padding:8px;border:none;border-radius:8px;background:#f0f0f2;cursor:pointer;font-size:13px">恢复默认</button>';
    panel.innerHTML = html;
  }
  function injectCardColorUI() {
    if (document.getElementById('tw-card-color-fab')) return;
    var fab = document.createElement('div');
    fab.id = 'tw-card-color-fab';
    fab.innerHTML = '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:conic-gradient(#b6c2cf 0 25%,#97979c 0 50%,#dbddda 0 75%,#fdf9ee 0);margin-right:6px;vertical-align:middle"></span>配色';
    fab.style.cssText = 'position:fixed;z-index:2147483640;right:16px;bottom:90px;padding:9px 14px;border-radius:22px;background:#2b2f33;color:#fff;font-size:13px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.25);user-select:none;font-family:system-ui,-apple-system,sans-serif';
    var panel = document.createElement('div');
    panel.id = 'tw-card-color-panel';
    panel.style.cssText = 'position:fixed;z-index:2147483640;right:16px;bottom:140px;width:260px;background:#fff;color:#222;border:1px solid #e3e3e8;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.18);padding:14px;display:none;font-family:system-ui,-apple-system,sans-serif;font-size:13px';
    document.body.appendChild(fab);
    document.body.appendChild(panel);
    fab.addEventListener('click', function () {
      if (panel.style.display === 'none') {
        renderColorPanel(panel);
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
    panel.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.getAttribute) {
        var p = t.getAttribute('data-preset');
        if (p != null) {
          var preset = TW_CARD_PRESETS[+p];
          // 合并而非覆盖：只改当前页扫到的卡片，保留其它页面/卡片的自定义色
          var map = getCardColorMap();
          var books = scanBooks();
          for (var k = 0; k < books.length; k++) {
            map[books[k].key] = preset.colors[k % preset.colors.length];
          }
          setCardColorMap(map);
          applyCardColors();
          try { if (__twColorBC) __twColorBC.postMessage({}); } catch (e) {}
          renderColorPanel(panel);
        } else if (t.getAttribute('data-reset') != null) {
          setCardColorMap({});
          applyCardColors();
          try { if (__twColorBC) __twColorBC.postMessage({}); } catch (e) {}
          renderColorPanel(panel);
        }
      }
    });
    panel.addEventListener('input', function (e) {
      var t = e.target;
      if (t && t.getAttribute) {
        var bid = t.getAttribute('data-bid');
        if (bid != null) {
          var map = getCardColorMap();
          map[bid] = t.value;
          setCardColorMap(map);
          applyCardColors();
          try { if (__twColorBC) __twColorBC.postMessage({}); } catch (e) {}
        }
      }
    });
  }

  /** 隐藏练习页顶部的「例句默认使用浏览器内置 TTS 发音…」提示横幅 */
  function hideTtsHint() {
    var all = document.querySelectorAll('div, p, span');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var t = (el.textContent || '').trim();
      if (t.length === 0 || t.length > 150) continue;
      if (t.indexOf('TTS') < 0 || t.indexOf('例句') < 0) continue;
      // 向上找带圆角边框/背景色的横幅容器，整个隐藏
      var node = el, banner = null;
      for (var up = 0; up < 6 && node && node !== document.body; up++) {
        var cs;
        try { cs = getComputedStyle(node); } catch (e) { break; }
        var hasBorder = cs.borderStyle !== 'none' && cs.borderTopWidth !== '0px';
        var hasBg = cs.backgroundColor !== 'rgba(0, 0, 0, 0)';
        if (cs.borderRadius !== '0px' && (hasBorder || hasBg)) { banner = node; break; }
        node = node.parentElement;
      }
      var target = banner || el.parentElement || el;
      if (target && target !== document.body && !target.dataset.twHiddenTts) {
        target.style.display = 'none';
        target.dataset.twHiddenTts = '1';
        return;
      }
    }
  }

  var __twEntryViewReset = false;
  function run() {
    hideFeedback();
    patchSettings();
    hideMobileHome();
    hideThemeToggle();
    disableLogoClick();
    injectListLayout();
    injectDictateMode();
    injectBookStyle();
    // 用 bookshelf 的真实封面代码给每张卡片画封面（首次会加载 /bookshelf/cover.js）
    paintRealBookCovers();
    // 入口策略：每次进入背单词都从单词（卡片）界面开始；书架（实体书）
    // 不持久化，只能在本次会话中手动切换进入。只重置一次，
    // 避免 MutationObserver 重复触发 run() 时把用户手动切的书架弹回去。
    if (!__twEntryViewReset) {
      __twEntryViewReset = true;
      if (getBookView() === 'real') setBookView('card');
    }
    applyBookView();
    injectViewToggle();
    applyCardColors();
    removeColorUI();
    hideStudyCardButtons();
    hideTtsHint();
    injectTestStyle();
    syncTestMode();
    enhanceOriginalTest();
    patchTestWordsIfEmpty();
    syncHostTheme();
    patchCategoryTags();
    patchSideExpand();
    // 推荐区词书就绪后预加载书架，让「实体书」切换更快
    tryPreloadBookshelf();
  }

  /** 删除卡片配色悬浮按钮与面板（功能已下线） */
  function removeColorUI() {
    var fab = document.getElementById('tw-card-color-fab');
    if (fab) fab.remove();
    var panel = document.getElementById('tw-card-color-panel');
    if (panel) panel.remove();
  }

  /** 隐藏「当前正在学习的词典」卡片上的「更改」/ 蓝圈链接 / 文A翻译 三个按钮 */
  function hideStudyCardButtons() {
    // 1) 文本「更改」按钮
    var els = document.querySelectorAll('button, a, [role="button"]');
    var changeBtn = null;
    for (var i = 0; i < els.length; i++) {
      if (els[i].dataset.twHiddenBtn) continue;
      if (els[i].textContent.trim() === '更改' && els[i].offsetParent) {
        els[i].style.display = 'none';
        els[i].dataset.twHiddenBtn = '1';
        changeBtn = els[i];
        break;
      }
    }
    // 2) 同一卡片内的图标按钮（文A 翻译 / 蓝圈链接等）
    var scope = changeBtn;
    if (scope) {
      var p = scope.parentElement;
      for (var up = 0; up < 6 && p; up++) {
        if (p.querySelector && (p.textContent.indexOf('开始学习') >= 0 || p.textContent.indexOf('继续学习') >= 0 || p.textContent.indexOf('今日任务') >= 0)) break;
        p = p.parentElement;
      }
      if (p) scope = p;
    }
    var uses = document.querySelectorAll('svg use, svg');
    for (var j = 0; j < uses.length; j++) {
      var u = uses[j];
      var href = u.getAttribute && (u.getAttribute('href') || u.getAttribute('xlink:href') || u.getAttribute('data-icon') || '');
      if (!href || !/translate|language|link/i.test(href)) continue;
      var btn = u.closest ? u.closest('button, a, [role="button"]') : null;
      if (!btn) btn = u.parentElement;
      if (btn && !btn.dataset.twHiddenBtn && (!scope || scope.contains(btn))) {
        btn.style.display = 'none';
        btn.dataset.twHiddenBtn = '1';
      }
    }
  }

  run();
  var obs = new MutationObserver(run);
  if (document.body) {
    obs.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      obs.observe(document.body, { childList: true, subtree: true });
    });
  }
})();