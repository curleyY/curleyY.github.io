/* =========================================================
 * countdown.js — 倒数日贴纸卡
 *   · 由“加入文件 → 倒数日”创建（adddialog.js 调用 window.Countdown.create）
 *   · 卡片样式复刻参考图：白底圆角贴纸 + 标题 + 超大数字
 *   · 支持自由挪动：鼠标按下即拖 / 触屏长按浮起后拖（Pointer Events 统一处理）
 *   · 位置与数据持久化 localStorage，刷新不丢；每分钟自动刷新剩余天数
 *   · 拖到右下角碎纸机 = 粉碎删除；卡片右上角 × 也可删除
 * ======================================================= */
(function () {
  const STORE_KEY = 'clothesline.countdowns';
  const LONG_PRESS = 450; // 触屏长按判定
  const MOVE_TOL = 10;    // 长按触发前允许的抖动

  let list = load();

  function load() {
    try {
      const arr = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }
  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
    } catch (_) {
      /* 配额满则忽略 */
    }
  }

  // 目标日期距今天的天数（按自然日计算，已过显示 0）
  function daysLeft(dateStr) {
    const t = new Date(dateStr + 'T00:00:00');
    if (isNaN(t.getTime())) return 0;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round((t - now) / 86400000));
  }

  function create(item) {
    const entry = {
      id: 'cd_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: String(item.title || '倒数日').slice(0, 10),
      date: item.date,
      // 默认位置：屏幕中部偏右，多个创建时错开摆放（视口百分比，随窗口自适应）
      x: 40 + ((list.length * 8) % 20),
      y: 26 + ((list.length * 10) % 22),
      scale: 1, // 缩放比例：滚轮 / 双指捏合调整，范围 0.5 ~ 2.5
    };
    list.push(entry);
    save();
    render(entry, true);
    return entry;
  }

  function remove(id) {
    const el = document.querySelector(`.cd-card[data-id="${id}"]`);
    const done = () => {
      list = list.filter((c) => c.id !== id);
      save();
    };
    if (el) {
      el.classList.add('is-vanishing');
      setTimeout(() => el.remove(), 280);
    }
    done();
  }

  function render(item, isNew) {
    const el = document.createElement('div');
    el.className = 'cd-card';
    el.dataset.id = item.id;
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', `倒数日：${item.title}`);
    el.innerHTML = `
      <span class="cd-card__body">
        <span class="cd-card__title">${escapeHtml(item.title)}</span>
        <span class="cd-card__num">${daysLeft(item.date)}</span>
      </span>
      <button class="cd-card__del" type="button" aria-label="删除倒数日">×</button>
    `;
    applyPos(el, item);
    el.style.setProperty('--cd-scale', item.scale || 1);
    document.body.appendChild(el);
    if (isNew) {
      // 新建时 pop 入场（末帧回到当前缩放比例，避免与 CSS transform 跳变）
      const s = item.scale || 1;
      el.animate(
        [
          { transform: `scale(${s * 0.4}) rotate(-8deg)`, opacity: 0 },
          { transform: `scale(${s * 1.06}) rotate(0deg)`, opacity: 1, offset: 0.7 },
          { transform: `scale(${s}) rotate(0deg)`, opacity: 1 },
        ],
        { duration: 420, easing: 'cubic-bezier(.34,1.56,.64,1)' }
      );
    }

    // × 删除（阻止冒泡，避免触发拖动）
    el.querySelector('.cd-card__del').addEventListener('pointerdown', (e) => e.stopPropagation());
    el.querySelector('.cd-card__del').addEventListener('click', (e) => {
      e.stopPropagation();
      remove(item.id);
    });

    makeDraggable(el, item);
    return el;
  }

  function applyPos(el, item) {
    const w = el.offsetWidth || 150;
    const h = el.offsetHeight || 120;
    const x = clamp((item.x / 100) * window.innerWidth, 6, Math.max(6, window.innerWidth - w - 6));
    const y = clamp((item.y / 100) * window.innerHeight, 6, Math.max(6, window.innerHeight - h - 6));
    el.style.left = (x / window.innerWidth) * 100 + '%';
    el.style.top = (y / window.innerHeight) * 100 + '%';
  }

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  /* ---------- 自由挪动（鼠标即拖 / 触屏长按浮起）+ 放大缩小（双指捏合 / 滚轮） ---------- */
  function makeDraggable(el, item) {
    const clampScale = (s) => Math.min(Math.max(s, 0.5), 2.5);
    const applyScale = (s) => el.style.setProperty('--cd-scale', s);
    let startX = 0;
    let startY = 0;
    let offX = 0;
    let offY = 0;
    let timer = null;
    let active = false;
    let moved = false;
    // 多指针跟踪：双指进入捏合缩放
    const pointers = new Map();
    let pinching = false;
    let pinchStartDist = 0;
    let pinchStartScale = 1;

    const shredder = () => document.getElementById('shredder');
    const hitShredder = (x, y, w, h) => {
      const s = shredder();
      if (!s) return false;
      const r = s.getBoundingClientRect();
      const pad = 14;
      return x + w > r.left - pad && x < r.right + pad && y + h > r.top - pad && y < r.bottom + pad;
    };
    const setHover = (on) => {
      const s = shredder();
      if (s) s.classList.toggle('is-dragover', on);
    };

    el.addEventListener('pointerdown', (e) => {
      if (e.button && e.button !== 0) return;
      e.preventDefault(); // 阻止原生文本选择/拖拽，否则移动即触发 pointercancel
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        // 第二根手指落下：取消长按/拖拽，进入双指捏合缩放
        clearTimeout(timer);
        active = false;
        el.classList.remove('is-dragging');
        setHover(false);
        pinching = true;
        el.classList.add('is-pinching');
        const [a, b] = [...pointers.values()];
        pinchStartDist = Math.hypot(a.x - b.x, a.y - b.y);
        pinchStartScale = item.scale || 1;
        return;
      }
      if (pointers.size > 2) return;
      el.style.zIndex = 60; // 按下即置顶：重叠时优先操作这张
      startX = e.clientX;
      startY = e.clientY;
      const r = el.getBoundingClientRect();
      offX = e.clientX - r.left;
      offY = e.clientY - r.top;
      moved = false;
      if (e.pointerType === 'touch') {
        // 触屏：长按后才进入拖动，避免与页面滚动冲突
        timer = setTimeout(() => {
          active = true;
          el.classList.add('is-dragging');
          if (navigator.vibrate) navigator.vibrate(15);
        }, LONG_PRESS);
      } else {
        active = true;
        el.classList.add('is-dragging');
      }
      try {
        el.setPointerCapture(e.pointerId);
      } catch (_) {
        /* 忽略 */
      }
    });

    el.addEventListener('pointermove', (e) => {
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinching) {
        if (pointers.size < 2) return;
        e.preventDefault();
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchStartDist > 0) {
          const s = clampScale(pinchStartScale * (d / pinchStartDist));
          item.scale = s;
          applyScale(s);
        }
        return;
      }
      if (!active) {
        // 长按未触发就移动：取消（视为页面滚动）
        if (Math.hypot(e.clientX - startX, e.clientY - startY) > MOVE_TOL) {
          clearTimeout(timer);
        }
        return;
      }
      e.preventDefault();
      moved = true;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const x = clamp(e.clientX - offX, 4, Math.max(4, window.innerWidth - w - 4));
      const y = clamp(e.clientY - offY, 4, Math.max(4, window.innerHeight - h - 4));
      el.style.left = (x / window.innerWidth) * 100 + '%';
      el.style.top = (y / window.innerHeight) * 100 + '%';
      setHover(hitShredder(x, y, w, h));
    });

    // 滚轮缩放（桌面）：以卡片中心为基准，步进 8%
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      const s = clampScale((item.scale || 1) * (e.deltaY < 0 ? 1.08 : 1 / 1.08));
      item.scale = s;
      applyScale(s);
      clearTimeout(el._scaleSaveT);
      el._scaleSaveT = setTimeout(save, 400);
    }, { passive: false });

    const finish = (e) => {
      pointers.delete(e.pointerId);
      if (pinching && pointers.size < 2) {
        // 捏合结束：保存缩放比例
        pinching = false;
        el.classList.remove('is-pinching');
        save();
      }
      clearTimeout(timer);
      if (!active) return;
      active = false;
      el.classList.remove('is-dragging');
      setHover(false);
      if (!moved) return; // 未移动 = 点击，不处理
      const r = el.getBoundingClientRect();
      if (hitShredder(r.left, r.top, r.width, r.height)) {
        // 拖到碎纸机：粉碎删除
        if (window.Shredder && window.Shredder.shred) window.Shredder.shred(item.title);
        remove(item.id);
        return;
      }
      // 保存新位置（视口百分比，随窗口自适应）
      item.x = parseFloat(el.style.left);
      item.y = parseFloat(el.style.top);
      save();
    };
    el.addEventListener('pointerup', finish);
    el.addEventListener('pointercancel', (e) => {
      pointers.delete(e.pointerId);
      if (pinching && pointers.size < 2) {
        pinching = false;
        el.classList.remove('is-pinching');
        save();
      }
      clearTimeout(timer);
      active = false;
      el.classList.remove('is-dragging');
      setHover(false);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }

  // 启动：渲染已保存的倒数日 + 每分钟刷新天数（跨过 0 点自动更新）
  function boot() {
    list.forEach((item) => render(item, false));
    setInterval(() => {
      document.querySelectorAll('.cd-card').forEach((el) => {
        const item = list.find((c) => c.id === el.dataset.id);
        if (!item) return;
        const num = el.querySelector('.cd-card__num');
        const d = String(daysLeft(item.date));
        if (num && num.textContent !== d) {
          num.textContent = d;
          num.animate(
            [{ transform: 'scale(1.25)' }, { transform: 'scale(1)' }],
            { duration: 350, easing: 'ease-out' }
          );
        }
      });
    }, 60000);
  }

  window.Countdown = { create, remove, list: () => list, boot };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
