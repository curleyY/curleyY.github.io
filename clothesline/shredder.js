/* =========================================================
 * shredder.js — 右下角碎纸机（BlueY 风格，扁平 SVG，零依赖）
 * 造型（图二配色）：爱马仕橙渐变圆角机身 + 顶部长进纸缝（卡布里蓝）
 *       + 亮蓝 "BlueY" 品牌字 + 橙色 LED 计数器（每碎一张 +1）
 *       + 白粉小指示灯（橙色机身上以白粉为工作色）。
 * 碎纸：白纸滑入顶缝 → 彩色纸条从机身底部洒出。
 * 对外暴露 window.Shredder.shred(name) 供拖拽/点击触发。
 * ======================================================= */
(function () {
  const container = document.getElementById('shredder');
  if (!container) return;

  container.innerHTML = `
    <div class="shredder__stage">
      <svg class="shredder__svg" viewBox="0 0 230 86" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="shredBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffa23a" />
            <stop offset="0.12" stop-color="#ff8a00" />
            <stop offset="0.75" stop-color="#f5820a" />
            <stop offset="1" stop-color="#ed7a06" />
          </linearGradient>
          <linearGradient id="shredSlot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#013e6b" />
            <stop offset="1" stop-color="#015697" />
          </linearGradient>
        </defs>

        <!-- 爱马仕橙机身 -->
        <rect x="4" y="6" width="222" height="62" rx="10" fill="url(#shredBody)" />

        <!-- 顶部长进纸缝（半透高光条与其重合，如玻璃盖在投信口上） -->
        <rect x="30" y="18" width="170" height="13" rx="4" fill="url(#shredSlot)" />
        <rect x="36" y="20.5" width="158" height="3.5" rx="1.75" fill="#012a4a" opacity="0.9" />
        <rect x="30" y="18" width="170" height="13" rx="4" fill="rgba(255,255,255,0.25)" />

        <!-- 品牌字（BlueY，亮蓝） -->
        <text class="shredder__brand" x="32" y="56">BlueY</text>

        <!-- 橙色 LED 计数器（显板略下移、略缩小） -->
        <rect x="136" y="34" width="46" height="26" rx="5" fill="#013e6b" stroke="rgba(1,86,151,0.35)" stroke-width="1" />
        <text class="shredder__count" id="shredCount" x="159" y="52">00</text>

        <!-- 白粉小指示灯（已缩小） -->
        <circle class="shredder__ledHalo" cx="203" cy="45" r="5.5" fill="#fff2df" opacity="0.28" />
        <circle class="shredder__led" cx="203" cy="45" r="3.5" fill="#fff2df" />
      </svg>

      <!-- 动画层：喂入的纸 + 碎出的纸条 + 文件名气泡（JS 动态生成） -->
      <div class="shredder__fx"></div>
    </div>
    <span class="shredder__hint">把文件拖到这里碎掉</span>
  `;

  const fx = container.querySelector('.shredder__fx');
  const led = container.querySelector('.shredder__led');
  const halo = container.querySelector('.shredder__ledHalo');
  const countEl = container.querySelector('#shredCount');

  /* —— 纸条配色（图二：爱马仕橙 / 白粉 / 卡布里蓝 + 两个中间色）—— */
  const STRIP_COLORS = ['#ff8a00', '#fff2df', '#015697', '#ffb259', '#0273b8'];

  /* 几何常量（相对 fx 容器高度百分比，与 SVG 对齐：进纸缝 ~22%，机身底 ~79%） */
  const SLOT_Y = 20;
  const EXIT_Y = 80;   // 纸条出现位置（机身底部出口）
  const END_Y = 99;    // 纸条消失位置

  let count = 0;
  let shredding = 0;

  function shred(name) {
    shredding++;
    container.classList.add('is-working');

    // 指示灯进入工作状态
    led.classList.add('is-on');
    halo.classList.add('is-on');

    // 计数器 +1（两位数，橙色闪烁）
    count++;
    countEl.textContent = String(Math.min(count, 99)).padStart(2, '0');
    countEl.classList.remove('is-flash');
    void countEl.getBBox; // 触发重排以便重放动画
    countEl.classList.add('is-flash');

    // ① 文件名气泡
    const bubble = document.createElement('span');
    bubble.className = 'shredder__name';
    bubble.textContent = name || '文件';
    fx.appendChild(bubble);
    setTimeout(() => bubble.remove(), 1400);

    // ② 一张白纸从上方滑入进纸缝
    const sheet = document.createElement('span');
    sheet.className = 'shredder__sheet';
    fx.appendChild(sheet);
    const feed = sheet.animate(
      [
        { transform: 'translate(-50%, -46px) rotate(-2deg)', opacity: 0 },
        { transform: 'translate(-50%, -18px) rotate(0deg)', opacity: 1, offset: 0.4 },
        { transform: 'translate(-50%, 4px) rotate(1deg)', opacity: 1, offset: 0.85 },
        { transform: 'translate(-50%, 10px) scale(1, 0.12)', opacity: 0 },
      ],
      { duration: 650, easing: 'cubic-bezier(.45,.05,.55,.95)' }
    );
    feed.onfinish = () => {
      sheet.remove();
      spawnStrips();
    };
  }

  function spawnStrips() {
    const stageH = fx.clientHeight || 86;
    const startY = (EXIT_Y / 100) * stageH;
    const fallPx = ((END_Y - EXIT_Y) / 100) * stageH;
    const n = 14;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'shredder__strip';
      s.style.background = STRIP_COLORS[(Math.random() * STRIP_COLORS.length) | 0];
      s.style.left = 24 + Math.random() * 52 + '%';
      s.style.top = startY + 'px';
      s.style.width = 4 + Math.random() * 4 + 'px';
      fx.appendChild(s);

      const drift = (Math.random() - 0.5) * 16; // 下落时左右漂移
      const spin = (Math.random() - 0.5) * 240;
      const anim = s.animate(
        [
          { transform: 'translate(-50%,0) rotate(0deg)', opacity: 0 },
          { transform: 'translate(-50%,4px) rotate(0deg)', opacity: 1, offset: 0.12 },
          {
            transform: `translate(calc(-50% + ${drift}px), ${fallPx}px) rotate(${spin}deg)`,
            opacity: 1,
            offset: 0.8,
          },
          { transform: `translate(calc(-50% + ${drift * 1.4}px), ${fallPx + 6}px) rotate(${spin}deg)`, opacity: 0 },
        ],
        { duration: 800 + Math.random() * 500, easing: 'cubic-bezier(.5,0,.8,.6)', delay: i * 45 }
      );
      anim.onfinish = () => s.remove();
    }

    // 动画收尾：恢复指示灯
    setTimeout(() => {
      if (--shredding <= 0) {
        shredding = 0;
        container.classList.remove('is-working');
        led.classList.remove('is-on');
        halo.classList.remove('is-on');
      }
    }, 1800);
  }

  window.Shredder = { shred };

  // —— 拖放接管 ——
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    container.classList.add('is-dragover');
  });
  container.addEventListener('dragleave', () => container.classList.remove('is-dragover'));
  container.addEventListener('drop', (e) => {
    e.preventDefault();
    container.classList.remove('is-dragover');
    const idx = e.dataTransfer.getData('text/plain');
    const name = window.Clothesline && window.Clothesline.shredRemove
      ? window.Clothesline.shredRemove(idx)
      : null;
    shred(name || '文件');
  });

  // 点击碎纸机：碎掉第一张卡片做演示
  container.addEventListener('click', () => {
    const name = window.Clothesline && window.Clothesline.shredFirst
      ? window.Clothesline.shredFirst()
      : null;
    shred(name || '文件');
  });
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      container.click();
    }
  });
})();
