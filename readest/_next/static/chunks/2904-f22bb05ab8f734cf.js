"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2904],{13738:(e,t,o)=>{o.d(t,{BH:()=>h,FE:()=>p,NN:()=>a,QG:()=>r,gs:()=>l,nK:()=>i});let i="scroll-wrapper",a="scroll-wrapper-fit",n=8068==o.j?`.${i}`:null,r="link-hit-area",l=10,s="data-readest-scroll-wrapper-touch-scroll",d=e=>e.scrollWidth-e.clientWidth>4,c=e=>e.scrollHeight-e.clientHeight>4,g=e=>{if(!e||!("closest"in e))return null;let t=e.closest(n);for(;t;){if(!t.classList.contains(a)&&(d(t)||c(t)))return t;t=t.parentElement?.closest(n)??null}return null},p=e=>{let t=e.documentElement;if("true"===t.getAttribute(s))return;t.setAttribute(s,"true");let o=0,i=0,a=null,n=()=>{a=null},r={capture:!0,passive:!1};e.addEventListener("touchstart",e=>{if(!(a=g(e.target)))return;let t=e.changedTouches[0];t&&(o=t.screenX,i=t.screenY)},r),e.addEventListener("touchmove",e=>{var t;if(!a||!a.contains(e.target))return;let n=e.changedTouches[0];if(!n)return;let r=n.screenX-o,l=n.screenY-i;t=a,(Math.abs(r)>Math.abs(l)?Math.abs(r)>=8&&d(t):Math.abs(l)>=8&&c(t))&&e.stopImmediatePropagation()},r),e.addEventListener("touchend",n,r),e.addEventListener("touchcancel",n,r),e.addEventListener("wheel",e=>{let t=g(e.target);t&&(Math.abs(e.deltaX)>Math.abs(e.deltaY)?d(t):c(t))&&e.stopImmediatePropagation()},{capture:!0,passive:!0})},h=e=>{let t=e.defaultView,o=o=>{let a=o.parentElement;if(!a||a.classList.contains(i))return;let n=e.createElement("div");n.className=i,n.setAttribute("cfi-skip",""),a.insertBefore(n,o),n.appendChild(o),u(o,n,t),y(n,t)};e.querySelectorAll("table:not([data-foliate-chunk])").forEach(o),e.querySelectorAll("math").forEach(e=>{((e,t)=>{if("block"===e.getAttribute("display"))return!0;let o=e;for(;;){let e=o.parentElement;if(!e)return!1;for(let t of e.childNodes)if(t!==o&&(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()))return!1;if(!t?.getComputedStyle(e).display.startsWith("inline"))return!0;o=e}})(e,t)&&o(e)})},m=8068==o.j?["Top","Right","Bottom","Left"]:null,u=(e,t,o)=>{if(!o)return;let i=e.style;if(!i)return;let a=o.getComputedStyle(e);for(let e of m){let o=`margin${e}`,n=a[o];0>parseFloat(n)&&(t.style[o]=n,i[o]="0px")}},f=e=>{let t=e.scrollWidth-e.clientWidth;e.classList.toggle(a,t<=4||b(e,t))},b=(e,t)=>{if(t>l+4||!e.ownerDocument.documentElement.classList.contains(r))return!1;let o=e.querySelector(":scope > table");if(!o||o.offsetWidth-e.clientWidth>4)return!1;let i=e.ownerDocument.defaultView?.getComputedStyle(e).direction==="rtl",a=e.getBoundingClientRect().left+e.clientLeft,n=a+e.clientWidth;return[...o.querySelectorAll("a")].some(e=>{let o=e.getBoundingClientRect();return(i?a-o.left:o.right-n)+l>=t-4})},y=(e,t)=>{if(!t?.ResizeObserver)return;let o=new t.ResizeObserver(()=>{e.clientWidth<=0||(f(e),o.disconnect(),w(e,t))});o.observe(e)},w=(e,t)=>{let o=e.ownerDocument.fonts;if(o?.status==="loading"){let i=Date.now()+1e4,a=t.setInterval(()=>{"loading"===o.status&&Date.now()<i||(t.clearInterval(a),f(e))},100)}for(let t of Array.from(e.querySelectorAll("img")))t.complete||t.addEventListener("load",()=>f(e),{once:!0})}},26215:(e,t,o)=>{o.d(t,{SS:()=>h,Xy:()=>r,ty:()=>m});var i=o(47325);let a="readest-dialogue",n="readest-dialogue-block",r=e=>!!e.dialogueHighlight||!!e.dialogueHighlightCustomTextColor,l=/“[^“”]+?[”"]|„[^„“]+?[“"]|"[^"\n]+?"|«[^«»]+?[»]|「[^「」]+?[」]|『[^『』]+?[』]|‘(?:[^‘’\n]|’(?=\p{L})|\p{L}’(?=[\s\p{Pd}])){0,300}?(?![‘’“”„«»「」『』"'])\p{P}’(?!\p{L})|‘(?:[^‘’]|’(?=\p{L})){1,300}?’(?!\p{L})/gu,s=/“[^“”\n]*(?:“[^“”\n]*”[^“”\n]*)+”|„[^„“\n]*(?:„[^„“\n]*“[^„“\n]*)+“|«[^«»\n]*(?:«[^«»\n]*»[^«»\n]*)+»/gu,d=/^[—–―－][\s\u3000]/,c=e=>{let t=e.parentElement;return!!(!t||t.closest(`.${a}`))||!!t.closest("pre, code, kbd, samp, script, style, textarea, rt, rp")},g=(e,t,o,i)=>{if(o>=i)return;i<t.length&&t.splitText(i);let n=o>0?t.splitText(o):t,r=e.createElement("span");r.className=a,r.setAttribute("cfi-skip",""),n.parentNode?.replaceChild(r,n),r.appendChild(n)},p="p, li, blockquote, dd, dt",h=(e,t)=>{if(e.querySelectorAll(`.${a}`).forEach(e=>{let t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}}),e.querySelectorAll(`.${n}`).forEach(e=>{e.classList.remove(n)}),(e.body??e.documentElement)?.normalize(),!r(t)||!e.body&&!e.documentElement)return;let{entries:o,text:i}=(e=>{let t=e.defaultView?.NodeFilter.SHOW_TEXT??4,o=e.createTreeWalker(e.body??e.documentElement,t),i=[],a="",n=null,r=o.nextNode();for(;r;){if(!c(r)){let e=r.textContent??"";if(e){let t=r.parentElement.closest("p, div, li, blockquote, dd, dt, h1, h2, h3, h4, h5, h6, td, th, caption, figcaption, section, article, aside, body");n&&t!==n&&(a+="\n"),n=t,i.push({node:r,start:a.length,end:a.length+e.length}),a+=e}}r=o.nextNode()}return{entries:i,text:a}})(e);if(0!==o.length){let t,a;((e,t,o)=>{let i=t.length-1;for(let a=o.length-1;a>=0;a--){let n=o[a];for(;i>=0&&t[i].start>=n.end;)i--;for(let o=i;o>=0&&t[o].end>n.start;o--){let i=t[o];i.node.isConnected&&g(e,i.node,Math.max(n.start,i.start)-i.start,Math.min(n.end,i.end)-i.start)}}})(e,o,(e=>{let t=[];for(let o of[l,s]){let i;for(o.lastIndex=0;i=o.exec(e);){if(i[0].length>2048){o.lastIndex=i.index+1;continue}t.push({start:i.index,end:i.index+i[0].length})}}t.sort((e,t)=>e.start-t.start||t.end-e.end);let o=[],i=-1;for(let e of t)e.start>=i&&(o.push(e),i=e.end);return o})(i)),a=new Set(t=[...e.querySelectorAll(p)].filter(e=>d.test((e.textContent??"").trimStart()))),t.forEach(e=>{[...e.querySelectorAll(p)].some(e=>a.has(e))||e.classList.add(n)})}},m=function(e,t,o){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=(a??[]).flatMap(e=>"subitems"in e?e.subitems:[e]).flatMap(e=>e.cfis??[e.cfi]);for(let{doc:a,index:r}of e.renderer.getContents())h(a,t),o.filter(e=>"annotation"===e.type&&e.style&&!e.deletedAt&&(0,i.bw)(e.cfi)===r).forEach(t=>e.addAnnotation(t)),n.filter(e=>(0,i.bw)(e)===r).forEach(t=>e.addAnnotation({value:"foliate-search:"+t}))}},52904:(e,t,o)=>{o.d(t,{$f:()=>S,AU:()=>P,D1:()=>$,Hx:()=>T,J3:()=>z,Jp:()=>N,Si:()=>q,Xy:()=>D,Yc:()=>m,Yz:()=>B,Zb:()=>I,a0:()=>b,bs:()=>L,e$:()=>u,h6:()=>v,hx:()=>h,jO:()=>j,nT:()=>R,nt:()=>_,rj:()=>C,uM:()=>H,xD:()=>M,xg:()=>y});var i=o(25675),a=o(43110),n=o(30654),r=o(39558),l=o(26215);if(8068==o.j)var s=o(56411);var d=o(94991),c=o(35187);if(8068==o.j)var g=o(13738);let p=(e,t,o,a)=>{let n=["Georgia","Times New Roman"],r=[e,...a!==e?[a]:[],...i.H0.filter(t=>t!==e&&t!==a&&!n.includes(t)),...i.az.filter(t=>t!==e&&t!==a),...n.filter(e=>i.H0.includes(e)&&!n.includes(a)),...i.o6],l=[t,...a!==t?[a]:[],...i.Z4.filter(e=>e!==t&&e!==a),...i.Yk.filter(e=>e!==t&&e!==a),...i.o6],s=[o,...i.nh.filter(e=>e!==o)],d=e=>e.map(e=>`"${e}"`).join(", ");return{serif:`${d(r)}, serif`,sansSerif:`${d(l)}, sans-serif`,monospace:`${d(s)}, monospace`}},h=e=>{let t=p(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return"serif"===e.defaultFont.toLowerCase()?t.serif:t.sansSerif},m=e=>{let t=p(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return{serif:t.serif,sans:t.sansSerif}},u=e=>{let t=["ios","android"].includes((0,c.Ox)()),o=(e.zoomLevel||100)/100;return e.defaultFontSize*(t?1.25:1)*o},f=()=>`
    ::selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
    ::-moz-selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
  `,b="link-touch-hold",y="text-selected",w=["zh","ja","ko"],k=w.map(e=>`:lang(${e})`).join(", "),$=()=>`
  .duokan-footnote-content,
  .duokan-footnote-item {
    display: block !important;
  }

  body {
    padding: 1em !important;
    overflow-wrap: break-word;
  }

  a:any-link {
    text-decoration: none;
    padding: unset;
    margin: unset;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  p, li, blockquote, dd {
    margin: unset !important;
    text-indent: unset !important;
  }

  div {
    margin: unset !important;
    padding: unset !important;
  }

  dt {
    font-weight: bold;
    line-height: 1.6;
  }

  .epubtype-footnote,
  aside[epub|type~="endnote"],
  aside[epub|type~="footnote"],
  aside[epub|type~="note"],
  aside[epub|type~="rearnote"] {
    display: block;
  }
`,v=(e,t,o)=>`
    a:empty {
      background-color: transparent;
      mix-blend-mode: multiply;
    }
    a img {
      mix-blend-mode: multiply;
    }
    div[data-dict-kind="mdict"] .entry_name {
      font-size: 1.2em;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    div[data-dict-kind="mdict"] .juan_drop {
      ${o?`background-color: color-mix(in srgb, ${e} 80%, #000);`:""}
    }
  `,x=e=>{let t=e.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/);if(!t)return null;let[o,i,a]=[Number(t[1]),Number(t[2]),Number(t[3])];return{r:o,g:i,b:a,a:void 0===t[4]?1:Number(t[4]),brightness:.299*o+.587*i+.114*a}},z=e=>{let t=e=>{let t=e.getRootNode();return e.parentElement??(t instanceof ShadowRoot?t.host:null)},o=!1;for(let i=t(e);i;i=t(i)){let e=x(getComputedStyle(i).backgroundColor);if(e&&e.a>.5){o=e.brightness>=128;break}}let i=new Map,a=[];for(let t of[e,...e.querySelectorAll("*")]){let n=getComputedStyle(t),r=x(n.backgroundColor),l=t===e?o:!!i.get(t.parentElement),s=r&&r.a>.5?r.brightness>=128:l;i.set(t,s);let d=x(n.color);if(!d||s||d.brightness>=128)continue;let c=Math.round(255-2*d.brightness),[g,p,h]=[d.r,d.g,d.b].map(e=>Math.min(255,e+c));a.push([t,`rgba(${g}, ${p}, ${h}, ${d.a})`])}for(let[e,t]of a)e.style.setProperty("color",t,"important")},E=e=>`
  .translation-source {
  }
  .translation-target {
  }
  /* The original is wrapped rather than erased so its CFIs stay resolvable;
     cfi-skip keeps the wrapper invisible to CFI indexing. */
  .translation-source-hidden {
    display: none !important;
  }
  .translation-target.hidden {
    display: none !important;
  }
  .translation-target-block {
    display: block !important;
    ${e.showTranslateSource?"margin: 0.5em 0 !important;":""}
    ${(e=>{let{translationFont:t,translationFontStyle:o,translationFontSize:i,translationColor:a}=e;return[t&&`font-family: var(--${t}) !important;`,o?.includes("italic")&&"font-style: italic !important;",o?.includes("bold")&&"font-weight: bold !important;",i&&1!==i&&`font-size: ${i}em !important;`,a&&`color: ${a} !important;`].filter(Boolean).join("\n    ")})(e)}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,C=()=>{let e="auto",t="default",o=!1,i=!1,a=[];t=localStorage.getItem("themeColor")||"default",e=localStorage.getItem("themeMode")||"auto",o="true"===localStorage.getItem("systemIsDarkMode"),i=(0,s.XJ)(localStorage.getItem("ambientIsDarkMode"),o),a=JSON.parse(localStorage.getItem("customThemes")||"[]");let r="dark"===e||"auto"===e&&o||"ambient"===e&&i,l=n.Zj.find(e=>e.name===t);if(!l){let e=a.find(e=>e.name===t);e&&(l={name:e.name,label:e.label,colors:{light:(0,n.PF)(e.colors.light),dark:(0,n.n1)(e.colors.dark)}})}l||(l=n.Zj[0]);let d=r?l.colors.dark:l.colors.light;return{bg:d["base-100"],fg:d["base-content"],primary:d.primary,palette:d,isDarkMode:r}},S=function(e,t){var o,i,a,n,r,s,c,h,m,$;let v,x,z,S,L,N,T,j,F,I,D,q,_,R,H,P,B,M,O,W,X,G,J,Y=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t||(t=C());let K=(v=e.marginTopPx,x=e.marginRightPx,z=e.marginBottomPx,S=e.marginLeftPx,L=e.writingMode,N=e.vertical,`
  html {
    --margin-top: ${v}px;
    --margin-right: ${x}px;
    --margin-bottom: ${z}px;
    --margin-left: ${S}px;
  }
  html, body {
    ${"auto"===L?"":`writing-mode: ${L} !important;`}
    max-height: unset;
    -webkit-touch-callout: none;
    -webkit-user-select: text;
  }
  body {
    overflow: unset;
    zoom: 1;
    padding: unset;
    margin: unset;
  }
  /* -webkit-touch-callout on html/body does not reach descendant images in
     Android WebView, and the native image callout collides with the reader's
     touch handlers and can freeze the app */
  img {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
  }
  /* Chromium snaps a long press onto any link in reach of the finger, and a
     link long press starts no selection (#6242); set while a touch is held */
  html.${b} a[href] {
    pointer-events: none !important;
  }
  svg:where(:not([width])), img:where(:not([width])) {
    width: auto;
  }
  svg:where(:not([height])), img:where(:not([height])) {
    height: auto;
  }
  figure > div:has(img) {
    height: auto !important;
  }
  /* enlarge the clickable area of links, in documents opted in by applyLinkHitArea */
  html.${g.QG} a {
    position: relative !important;
  }
  html.${g.QG} a::before {
    content: '';
    position: absolute;
    inset: -${g.gs}px;
  }
  /* the enlarged area swallows the text around a link, so a selection dragged
     next to a footnote marker snaps away (#6566); set while text is selected */
  html.${y} a::before {
    pointer-events: none;
  }

  .${g.nK} {
    display: block;
    overflow: auto;
    max-width: 100%;
    touch-action: pan-x pan-y;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }
  .${g.NN} {
    overflow: visible;
  }
  .${g.nK} > table {
    display: table !important;
    max-width: 100%;
  }
  /* A scroll container is monolithic in CSS fragmentation, so a scrolling
     wrapper can't break across columns: taller than the page, it overflows the
     column and every row past the first page is clipped and unreachable
     (#6129). Clamp the wrapper — not the table, whose max-height Chromium and
     WebKit treat as a minimum — to one page so it scrolls vertically in place.
     A fit wrapper is overflow:visible and its rows paginate normally. */
  body.paginated-mode .${g.nK}:not(.${g.NN}) {
    max-height: calc(var(--available-height) * 1px);
  }
  pre, code {
    white-space: pre-wrap !important;
    scrollbar-width: none;
  }
  math {
    overflow: auto;
    scrollbar-width: none;
    max-height: calc(var(--available-height) * 1px);
  }
  table, math {
    max-width: calc(var(--available-width) * 1px);
  }

  .epubtype-footnote,
  aside[epub|type~="endnote"],
  aside[epub|type~="footnote"],
  aside[epub|type~="note"],
  aside[epub|type~="rearnote"] {
    display: none;
  }

  /* Now begins really dirty hacks to fix some badly designed epubs */
  .duokan-footnote-content,
  .duokan-footnote-item {
    display: none;
  }

  .duokan-image-gallery-cell {
    height: calc(var(--available-height) * 1px);
  }

  .duokan-image-gallery-cell img {
    height: 90%;
  }

  div:has(> img, > svg) {
    max-width: 100% !important;
  }

  body.paginated-mode td:has(img), body.paginated-mode td :has(img) {
    max-height: calc(var(--available-height) * 0.8 * 1px);
  }

  body.paginated-mode img {
    max-width: 100%;
    max-height: calc(var(--available-height) * 1px);
    object-fit: contain;
  }

  body.paginated-mode svg {
    max-width: 100%;
    max-height: calc(var(--available-height) * 1px);
  }

  body.scroll-mode img {
    max-width: 100%;
    object-fit: contain;
  }

  figure.code {
    overflow: unset !important;
  }

  /* some epubs set insane inline-block for p */
  p {
    display: block;
  }

  /* inline images without dimension */
  .ie6 img {
    width: unset;
    height: unset;
  }
  sup img {
    height: 1em;
  }
  img.has-text-siblings {
    ${N?"width: 1em;":"height: 1em;"}
  }
  /* Baseline is only Readest's default: applyImageStyle adds this class when the
     book leaves vertical-align at its initial value, so an author-set value
     (e.g. a CJK glyph-substitution image nudged with vertical-align: -0.15em)
     keeps winning. See #4866. */
  img.has-text-siblings-baseline {
    vertical-align: baseline;
  }
  :is(div) > img.has-text-siblings[style*="object-fit"] {
    display: block;
    height: auto;
    vertical-align: unset;
  }
  .duokan-footnote img:not([class]) {
    width: 0.8em;
    height: 0.8em;
  }
  div:has(img.singlepage) {
    position: relative;
    width: auto;
    height: auto;
  }
  /* some mobi */
  p[width][height] > img:only-child { 
    width: unset !important;
    height: unset !important;
  }

  /* page break */
  body.paginated-mode div[style*="page-break-after: always"],
  body.paginated-mode div[style*="page-break-after:always"],
  body.paginated-mode p[style*="page-break-after: always"],
  body.paginated-mode p[style*="page-break-after:always"] {
    margin-bottom: calc(var(--available-height) * 1px);
  }

  .br {
    display: flow-root;
  }

  .h5_mainbody {
    overflow: unset !important;
  }
`),V=e.useBookLayout?"":(T=e.overrideLayout,j=e.paragraphMargin,F=e.lineHeight,I=e.wordSpacing,D=e.letterSpacing,q=e.textIndent,_=e.fullJustification,R=e.hyphenation,H=e.vertical,`
  html {
    --default-text-align: ${_?"justify":"start"};
    hanging-punctuation: allow-end last;
    orphans: 2;
    widows: 2;
  }
  html, body {
    text-align: var(--default-text-align);
  }
  /* Authored text-wrap: pretty (e.g. Standard Ebooks' core.css) makes engines
     that justify with it (Safari 26+, recent Chromium) overshoot inter-word
     gaps and blocks the Word Spacing setting (#5582). Only the style longhand
     is reset so an authored nowrap mode survives, and only on justified text
     containers so balanced headings keep their rag. */
  ${_?"html, body, p, li, blockquote, dd { text-wrap-style: auto !important; }":""}
  [align="left"] { text-align: left; }
  [align="right"] { text-align: right; }
  [align="center"] { text-align: center; }
  [align="justify"] { text-align: justify; }
  /* Some badly designed EPUBs put their line-height on body; drop it so the
     Line Spacing setting below, not an inherited value, spaces the text. It
     lives in this chunk so Use Book Layout lets the book's body value
     inherit (#6088). */
  body {
    line-height: unset;
  }
  :is(hgroup, header) p {
      text-align: unset;
      hyphens: unset;
  }
  /* The div clause treats a div as paragraph-like only when every descendant is
     inline formatting (INLINE_FORMATTING_TAGS). Anything injected into a book
     paragraph at runtime — the translation target, its preserved markup, the
     a11y skip link — must use a tag from that list, or the enclosing div drops
     this whole rule and reverts to the book's default line spacing, indent and
     hyphenation. */
  p, blockquote, dd, div:not(:has(*:not(${d.Yu}))) {
    line-height: ${F} ${T?"!important":""};
    word-spacing: ${I}px ${T?"!important":""};
    letter-spacing: ${D}px ${T?"!important":""};
    text-indent: ${q}em ${T?"!important":""};
    -webkit-hyphens: ${R?"auto":"manual"} ${T?"!important":""};
    hyphens: ${R?"auto":"manual"} ${T?"!important":""};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  li {
    line-height: ${F} ${T?"!important":""};
    -webkit-hyphens: ${R?"auto":"manual"} ${T?"!important":""};
    hyphens: ${R?"auto":"manual"} ${T?"!important":""};
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${T?"!important":""};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${_&&T?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${T?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!_&&T?"text-align: initial !important;":""};
  }
  /* An image that starts a paragraph must not take the indent: sized to the
     column, it would overhang by the indent and paint a strip on the next page
     (#6198). applyImageStyle marks such paragraphs; selectors can't see text,
     so :only-child also matched a footnote icon inside text. */
  p.leading-image {
    text-indent: initial !important;
  }
  blockquote[align="center"], div[align="center"],
  p[align="center"], dd[align="center"],
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center,
  li p, ol p, ul p, td p {
    text-indent: initial !important;
  }
  /* Some converted books use an inline-only <blockquote> for every paragraph
     (#6656); under override it is spaced like a <p>, while a quote wrapping
     block content keeps its indent. */
  p${T?`, blockquote:not(:has(*:not(${d.Yu})))`:""} {
    ${H?`margin-left: ${j}em ${T?"!important":""};`:""}
    ${H?`margin-right: ${j}em ${T?"!important":""};`:""}
    ${H?`margin-top: unset ${T?"!important":""};`:""}
    ${H?`margin-bottom: unset ${T?"!important":""};`:""}
    ${!H?`margin-top: ${j}em ${T?"!important":""};`:""}
    ${!H?`margin-bottom: ${j}em ${T?"!important":""};`:""}
    ${!H?`margin-left: unset ${T?"!important":""};`:""}
    ${!H?`margin-right: unset ${T?"!important":""};`:""}
  }
  div {
    ${H&&T?`margin-left: ${j}em !important;`:""}
    ${H&&T?`margin-right: ${j}em !important;`:""}
    ${!H&&T?`margin-top: ${j}em !important;`:""}
    ${!H&&T?`margin-bottom: ${j}em !important;`:""}
  }
  p > font:only-child { 
    display: flow-root; 
  }

  ${k} {
    widows: 1;
    orphans: 1;
  }

  /* workaround for some badly designed epubs */
  div.left *, p.left * { text-align: left; }
  div.right *, p.right * { text-align: right; }
  div.center *, p.center * { text-align: center; }
  div.justify *, p.justify * { text-align: justify; }

  img.pi {
    ${H?"transform: rotate(90deg);":""}
    ${H?"transform-origin: center;":""}
    ${H?"height: 2em;":""}
    ${H?`width: ${F}em;`:""}
    ${H?"vertical-align: unset;":""}
  }

  .nonindent, .noindent {
    text-indent: unset !important;
  }
`),U=(o=e.serifFont,i=e.sansSerifFont,a=e.monospaceFont,n=e.defaultFont,r=e.defaultCJKFont,s=u(e),c=e.minimumFontSize,h=e.fontWeight,m=e.overrideFont,P=p(o,i,a,r),B="serif"===n.toLowerCase()?"--serif":"--sans-serif",M=`
    p, li, div, pre, dd {
      font-size: max(1rem, var(--min-font-size, 8px)) !important;
    }
  `,`
    html {
      --serif: ${P.serif};
      --sans-serif: ${P.sansSerif};
      --monospace: ${P.monospace};
      --font-size: ${s}px;
      --min-font-size: ${c}px;
      --font-weight: ${h};
    }
    html, body {
      font-size: ${s}px !important;
      font-weight: ${h};
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    /* Zero specificity (:where) so ANY ebook font-family declaration — even
       one on the html element itself, at equal (0,0,1) specificity — wins the
       cascade regardless of injection order. Books like Pandoc-generated
       EPUBs declare their font on the html element; a plain html rule here
       ties on specificity and wins only by being appended later, silently
       overriding the book's embedded font with the app's default font
       (mobile especially, whose default font is sans-serif). */
    :where(html) {
      font-family: var(${B}) ${m?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${m?`font-family: var(${B}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${c}px;
    }
    font[size="2"] {
      font-size: ${1.5*c}px;
    }
    font[size="3"] {
      font-size: ${s}px;
    }
    font[size="4"] {
      font-size: ${1.2*s}px;
    }
    font[size="5"] {
      font-size: ${1.5*s}px;
    }
    font[size="6"] {
      font-size: ${2*s}px;
    }
    font[size="7"] {
      font-size: ${3*s}px;
    }
    /* hardcoded inline font size */
    [style*="font-size: 16px"], [style*="font-size:16px"] {
      font-size: 1rem !important;
    }
    /* The revert pass below deliberately excludes pre/code/kbd, so this is the
       only rule that applies the app's code font and it has to swap sides with
       the toggle. Off: zero specificity, so a book's own code font wins. On:
       above the book, and !important is not enough on its own because
       specificity still breaks ties between important author declarations. */
    ${m?"html body :is(pre, code, kbd)":":where(pre, code, kbd)"} {
      font-family: var(--monospace) ${m?"!important":""};
      font-variant-ligatures: none;
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${m?"font-family: revert !important;":""}
    }
    ${m?M:""}
  `),Z=A(Y),Q=((e,t,o,i,a)=>{let{bg:n,fg:r,primary:l,isDarkMode:s}=o,d=i&&"none"!==i?"transparent":n;return`
    html {
      --bg-texture-id: ${i};
      --theme-bg-color: ${n};
      --theme-fg-color: ${r};
      --theme-primary-color: ${l};
      --override-color: ${e};
      color-scheme: ${s?"dark":"light"};
    }
    html, body {
      color: ${r};
    }
    ${a?f():s?`
    ::selection {
      background: color-mix(in srgb, ${l} 40%, transparent);
    }
  `:""}
    html[has-background], body[has-background] {
      --background-set: var(--theme-bg-color);
    }
    html {
      background-color: var(--theme-bg-color, transparent);
      background: var(--background-set, none);
    }
    body {
      ${a?`background-color: ${n} !important;`:""}
    }
    section, aside, blockquote, article, nav, header, footer, main, figure,
    div, p, font, h1, h2, h3, h4, h5, h6, li, span {
      ${e?`background-color: ${d} !important;`:""}
      ${e?`color: ${r} !important;`:""}
      ${e?`border-color: ${r} !important;`:""}
    }
    pre, span { /* inline code blocks */
      ${e?`background-color: ${d} !important;`:""}
    }
    a:any-link {
      ${e?`color: ${l} !important;`:s?"color: lightblue;":""}
    }
    /* left off hovered links, so a book's own a:hover style applies (#6859) */
    a:any-link:where(:not(:hover)) {
      text-decoration: ${a?"underline":"none"};
    }
    body.pbg {
      ${s?`background-color: ${n} !important;`:""}
    }
    /* When inverting in dark mode, invert(100%) must stay the effective filter
       (a later filter declaration would discard it), and multiply must not
       apply: multiply with a dark page background erases the image (#5250). */
    img {
      ${s&&t?"filter: invert(100%);":""}
      ${s&&!t&&e?"filter: grayscale(100%) contrast(1.2) brightness(1.2);":""}
      ${e&&!(s&&t)?"mix-blend-mode: multiply;":""}
    }
    svg, img {
      ${e?"background-color: transparent !important;":""};
    }
    /* horizontal rule #1649 */
    *:has(> hr.background-img):not(body) {
      background-color: ${n};
    }
    hr.background-img {
      mix-blend-mode: multiply;
    }
    p[width][height] > img:only-child {
      mix-blend-mode: multiply;
    }
    /* inline images */
    *:has(> img.has-text-siblings):not(body) {
      ${e?`background-color: ${n};`:""}
    }
    p img.has-text-siblings, span img.has-text-siblings, sup img.has-text-siblings {
      mix-blend-mode: ${s?"screen":"multiply"};
    }
    table:has(> colgroup) {
      table-layout: fixed;
    }
    /* break-word, never anywhere: overflow-wrap:anywhere (and its legacy alias
       word-break:break-word) count mid-word break opportunities in min-content
       sizing, which drops every cell's minimum to a single character. Auto table
       layout then hands the whole width to the widest column and shreds a short
       label column into a stack of letters (#5681). break-word leaves intrinsic
       sizes alone and still breaks a long token that overflows its cell; a table
       too wide for its column scrolls in its wrapper instead (#4029, #4391). */
    td, th {
      overflow-wrap: break-word;
    }
    /* code */
    body.theme-dark code {
      ${s?`color: ${r}cc;`:""}
      ${s?`background: color-mix(in srgb, ${n} 90%, #000);`:""}
      ${s?`background-color: color-mix(in srgb, ${n} 90%, #000);`:""}
    }
    blockquote {
      ${s?`background: color-mix(in srgb, ${n} 80%, #000);`:""}
    }
    /* Only tint table descendants when the user has opted into color override.
       By default, leave them transparent so a plain table (and the invisible
       spacer cells some books use for vertical layout) keeps the page
       background instead of a different shade. Illegible light/zebra table
       backgrounds are handled separately by the dark-mode light-background
       rewriters (getDarkModeLightBackgroundOverrides / transformStylesheet).
       See #4419 (and #2377, which this gate originally fixed). */
    blockquote, table * {
      ${s&&e?`background: color-mix(in srgb, ${n} 80%, #000);`:""}
      ${s&&e?`background-color: color-mix(in srgb, ${n} 80%, #000);`:""}
    }
    /* override inline hardcoded text color */
    font[color="#000000"], font[color="#000"], font[color="black"],
    font[color="rgb(0,0,0)"], font[color="rgb(0, 0, 0)"],
    *[style*="color: rgb(0,0,0)"], *[style*="color: rgb(0, 0, 0)"],
    *[style*="color: #000"], *[style*="color: #000000"], *[style*="color: black"],
    *[style*="color:rgb(0,0,0)"], *[style*="color:rgb(0, 0, 0)"],
    *[style*="color:#000"], *[style*="color:#000000"], *[style*="color:black"] {
      color: ${r} !important;
    }
    ${s&&!e?`
    /* Callout boxes often use inline white/light backgrounds while html/body set dark fg. */
    *[style*="background-color: #fff"], *[style*="background-color:#fff"],
    *[style*="background-color: #ffffff"], *[style*="background-color:#ffffff"],
    *[style*="background-color: white"], *[style*="background-color:white"],
    *[style*="background: #fff"], *[style*="background:#fff"],
    *[style*="background: #ffffff"], *[style*="background:#ffffff"],
    *[style*="background: white"], *[style*="background:white"],
    *[style*="background-color: rgb(255"], *[style*="background-color:rgb(255"],
    *[style*="background: rgb(255"], *[style*="background:rgb(255"] {
      background-color: ${n} !important;
    }
    /* Force transparent, not the theme bg: the dark page fill already comes from
       the paginator container / reader grid cell, while an opaque body paints over
       the host background texture (#4446) — and foliate captures docBackground once
       per section load, so the body must stay transparent regardless of texture
       state. Book-forced light page backgrounds still get neutralized (#4392) since
       the theme-dark fill shows through. */
    body.theme-dark {
      background-color: transparent !important;
    }
`:""}
    /* for the Gutenberg eBooks */
    #pg-header * {
      color: inherit !important;
    }
    .x-ebookmaker, .x-ebookmaker-cover, .x-ebookmaker-coverpage {
      background-color: unset !important;
    }
    /* for the Feedbooks eBooks */
    .chapterHeader, .chapterHeader * {
      border-color: unset;
      background-color: ${n} !important;
    }
    .calibre {
      color: unset;
      background-color: unset;
    }
  `})(e.overrideColor,e.invertImgColorInDark,t,e.backgroundTextureId,e.isEink),ee=E(e),et=`
  /* Warichu (割注/夹注) — double-line inline annotation */
  .warichu-pending {
    display: inline;
    font-size: 0.5em;
    line-height: 1.1;
  }
  .warichu-chunk {
    display: inline-block;
    line-height: 1.1;
    font-size: 0.5em;
    text-indent: 0;
    vertical-align: middle !important;
    width: 1lh !important;
    text-align: center !important;
  }
  .warichu-chunk .warichu-line {
    display: inline;
  }
  .warichu-open,
  .warichu-close {
    display: inline;
    font-size: 0.5em;
    vertical-align: middle;
    line-height: 1.1;
  }
`,eo=(O=e.wordLensGlossFontSize||.5,W=e.wordLensGlossColor||"",`
  rt {
    user-select: none;
    -webkit-user-select: none;
  }
  rp {
    display: none !important;
  }
  ruby.wl-gloss {
    cursor: help;
  }
  ruby.wl-gloss > rt {
    font-size: ${O}em;
    line-height: 1.1;
    ${W?`color: ${W};
    opacity: 1;`:"opacity: 0.7;"}
    font-weight: normal;
    text-align: center;
  }
`),ei=`
  :where(${w.map(e=>`html:lang(${e})`).join(", ")}) {
    widows: 1;
    orphans: 1;
  }
`,ea=(0,l.Xy)(e)?($=t,X=e.dialogueHighlight?e.dialogueHighlightCustomColor&&e.dialogueHighlightColor?e.dialogueHighlightColor:$.primary:null,G=e=>X?`
    background-color: color-mix(in srgb, ${X} ${e}%, transparent) !important;`:"",J=e.dialogueHighlightCustomTextColor&&e.dialogueHighlightTextColor?`
    color: ${e.dialogueHighlightTextColor} !important;`:"",`
  /* Dialogue lines tinted with the custom color or, by default, the theme's
     primary color. !important so the tint survives "Override Book Color",
     which repaints spans/paragraphs with the theme background at the same
     importance level but lower specificity. */
  .readest-dialogue {${G(22)}${J}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  .readest-dialogue-block {${G(12)}${J}
    border-radius: 0.3em;
  }${e.dialogueHighlightItalic?`
  /* Italic runs marked like quoted dialogue; nested marks drop their own
     tint so overlapping translucent backgrounds don't stack. */
  :is(i, em) {${G(22)}${J}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  :is(i, em) :is(i, em, .readest-dialogue), .readest-dialogue :is(i, em) {
    background-color: transparent !important;
  }`:""}
`):"",en=e.userStylesheet;return`@namespace epub "http://www.idpf.org/2007/ops";
${Z}
${K}
${V}
${ei}
${U}
${Q}
${ea}
${ee}
${et}
${eo}
${en}`},A=e=>e.filter(e=>!!e.blobUrl).map(e=>{try{return(0,r.pD)(e)}catch{return""}}).join("\n"),L=e=>{let t="translation-style",o=document.getElementById(t);o&&o.remove();let i=document.createElement("style");i.id=t,i.textContent=E(e),document.head.appendChild(i)},N=function(e,t,o,i){let a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(a)return e;let n=["ios","android"].includes((0,c.Ox)())?1.25:1,r=!e.includes("{"),l=/([^{]+)({[^}]+})/g;e=e.replace(l,(e,t,o)=>{let i=/text-align\s*:\s*center\s*[;$]/.test(o),a=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(o);return i&&a?t+(o=o.replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2")):e});let s=i?"overflow-y: clip !important;":"overflow-x: clip !important;";e=e.replace(l,(e,t,o)=>{if(/white-space\s*:\s*nowrap\s*[;$]/.test(o)){if(!/overflow\s*:/.test(o)){let e=/(?:^|[;{\s])(?:max-)?height\s*:|line-clamp\s*:/.test(o);o=o.replace(/}$/,` ${e?"overflow: clip !important;":s} }`)}return t+o}return e}),r?/page-break-after\s*:\s*always\s*[;]?/.test(e)&&!/margin-bottom\s*:/.test(e)&&(e=e.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):e=e.replace(l,(e,t,o)=>/page-break-after\s*:\s*always\s*[;$]/.test(o)?(/margin-bottom\s*:/.test(o)||(o=o.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),t+o):e);let d=[];e=(e=(e=(e=e.replace(l,(e,t,o)=>{if(i)return t+o;let a=[],n=!1;for(let e of["top","bottom","left","right"]){let t=RegExp(`duokan-bleed\\s*:\\s*[^;]*${e}[^;]*;`),i=RegExp(`margin-${e}\\s*:`);t.test(o)&&!i.test(o)&&(n=!0,a.push(e),o=o.replace(/}$/,` margin-${e}: calc(-1 * var(--page-margin-${e})) !important; }`))}return n&&(/position\s*:/.test(o)||(o=o.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(o)||(o=o.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(o)||(o=o.replace(/}$/," display: flow-root !important; }")),a.includes("left")&&a.includes("right")&&(o=o.replace(/}$/," width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," min-width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," max-width: calc(var(--full-width) * 1px) !important; }")),a.includes("top")&&a.includes("bottom")&&(o=o.replace(/}$/," height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," min-height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," max-height: calc(var(--full-height) * 1px) !important; }"))),t+o})).replace(/url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/gi,e=>(d.push(e),`READEST_URL_${d.length-1}_PLACEHOLDER`))).replace(/((?:^|[{;\s])background(?:-attachment)?\s*:)([^;{}]*)/gi,(e,t,o)=>{if(!/\bfixed\b/i.test(o))return e;let i=[];return t+o.replace(/[\w-]*\([^)]*\)/g,e=>(i.push(e),`READEST_FN_${i.length-1}_PLACEHOLDER`)).replace(/\bfixed\b/gi,"scroll").replace(/READEST_FN_(\d+)_PLACEHOLDER/g,(e,t)=>i[+t])})).replace(/READEST_URL_(\d+)_PLACEHOLDER/g,(e,t)=>d[+t]),i||(e=e.replace(l,(e,t,o)=>{if(![...o.matchAll(/(?:^|[^-a-z])background(?:-color|-image)?\s*:\s*([^;!}]+)/gi)].map(e=>e[1].trim()).some(e=>!/^(?:none|transparent)$/i.test(e)&&!/^(?:rgba|hsla)\([^)]*[,\s]0(?:\.0+)?\s*\)$/i.test(e)))return e;let i="",a="";for(let e of o.matchAll(/(?:^|[^-a-z])margin(-left|-right)?\s*:\s*([^;!}]+)/gi)){let t=e[1],o=e[2].trim();if("-left"===t)i=o;else if("-right"===t)a=o;else{if(o.includes("("))continue;let e=o.split(/\s+/);if(e.length<1||e.length>4)continue;let[t,n=t,,r=n]=e;a=n,i=r}}let n=(i.startsWith("-")?" margin-left: 0 !important;":"")+(a.startsWith("-")?" margin-right: 0 !important;":"");return n?t+o.replace(/}$/,`${n} }`):e})),e=(e=e.replace(l,(e,t,o)=>{if(/\bbody\b/i.test(t)){let e=/font-family\s*:\s*serif\s*(?:;|\}|$)/.test(o),t=/font-family\s*:\s*sans-serif\s*(?:;|\}|$)/.test(o);e&&(o=o.replace(/font-family\s*:\s*serif\s*(;|\}|$)/gi,"font-family: unset$1")),t&&(o=o.replace(/font-family\s*:\s*sans-serif\s*(;|\}|$)/gi,"font-family: unset$1"))}return t+o})).replace(l,(e,o,i)=>{let a=/(?:^|[^a-z-])width\s*:\s*(\d+(?:\.\d+)?)px/.exec(i);return(a?parseFloat(a[1]??"0"):0)>t&&!/max-width\s*:/.test(i)?o+(i=i.replace(/}$/," width: 100%; max-width: calc(var(--available-width) * 1px); box-sizing: border-box; }")):e});let g=t>o,p="(min-width: 0px)",h="(min-width: 999999px)",m=[];e=(e=(e=(e=e.replace(/"[^"\n]*"|'[^'\n]*'/g,e=>(m.push(e),`READEST_STR_${m.length-1}_PLACEHOLDER`))).replace(/@media[^{]*/gi,e=>e.replace(/\(\s*orientation\s*:\s*(landscape|portrait)\s*\)/gi,(e,t)=>"landscape"===t.toLowerCase()===g?p:h).replace(/\(\s*(min|max)-(width|height)\s*:\s*([^)]+?)\s*\)/gi,(e,i,a,n)=>{let r=/^(\d*\.?\d+)(?:px)?$/.exec(n);if(!r)return e;let l="width"===a.toLowerCase()?t:o,s=parseFloat(r[1]);return("min"===i.toLowerCase()?l>=s:l<=s)?p:h}))).replace(/READEST_STR_(\d+)_PLACEHOLDER/g,(e,t)=>m[+t])).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(e,t)=>{let o=parseFloat(t)/n/16;return`font-size: ${o}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(e,t)=>{let o=parseFloat(t)/n/12;return`font-size: ${o}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return`font-size: max(${t}${o}, var(--min-font-size, 8px))`}).replace(/backdrop-filter\s*:\s*brightness\(100%\)\s*[;]?/gi,"").replace(/(\d*\.?\d+)vw/gi,(e,o)=>parseFloat(o)*t/100+"px").replace(/(\d*\.?\d+)vh/gi,(e,t)=>parseFloat(t)*o/100+"px").replace(/([\s;])-webkit-user-select\s*:\s*none/gi,"$1-webkit-user-select: unset").replace(/([\s;])-moz-user-select\s*:\s*none/gi,"$1-moz-user-select: unset").replace(/([\s;])-ms-user-select\s*:\s*none/gi,"$1-ms-user-select: unset").replace(/([\s;])-o-user-select\s*:\s*none/gi,"$1-o-user-select: unset").replace(/([\s;])user-select\s*:\s*none/gi,"$1user-select: unset").replace(/(font-family\s*:\s*)([^;{}]*)/gi,(e,t,o)=>{let i=/\s*!\s*important\s*$/i.exec(o);return t+(i?o.slice(0,i.index):o).split(",").map(e=>{let t=/^(serif|sans-serif|monospace)$/i.exec(e.trim());if(!t)return e;let o=t[1].toLowerCase();return e.replace(t[1],`var(--${o}, ${o})`)}).join(",")+(i?i[0]:"")}).replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#(?:000f?|000000(?:ff)?)(?![0-9a-f])/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)");let{isDarkMode:u,bg:f}=C();return u&&(e=e.replace(l,(e,t,o)=>{let i=o.replace(/background(-color)?\s*:\s*([^;!}]+)(\s*!important)?(?=\s*[;!}])/gi,(e,t,o,i)=>(e=>{let t=e.trim().toLowerCase();if("white"===t)return!0;let o=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(o){let e=o[1],t=3===e.length?e.split("").map(e=>e+e).join(""):e;return(.299*parseInt(t.slice(0,2),16)+.587*parseInt(t.slice(2,4),16)+.114*parseInt(t.slice(4,6),16))/255>.85}let i=t.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return i?.[1]!=null&&null!=i[2]&&null!=i[3]&&(.299*parseInt(i[1],10)+.587*parseInt(i[2],10)+.114*parseInt(i[3],10))/255>.85})(o.trim().split(/\s+/)[0]??"")?`background-color: ${f}${i??""}`:e);return i===o?e:t+i})),e},T=(e,t)=>{e.body.classList.remove("theme-light","theme-dark"),e.body.classList.add(t?"theme-dark":"theme-light")},j=(e,t)=>{e.body.classList.remove("scroll-mode","paginated-mode"),e.body.classList.add(t?"scroll-mode":"paginated-mode")},F=/^([A-Za-z_][\w.-]*):([A-Za-z_][\w.-]*)$/,I=e=>{let t=(e,t)=>{for(let o=e;o;o=o.parentElement){let e=o.getAttribute(`xmlns:${t}`);if(e)return e}return null};for(let o of e.querySelectorAll("*"))for(let{name:e,value:i}of Array.from(o.attributes)){let[,a,n]=F.exec(e)??[];if(!a)continue;let r="xml"===a?"http://www.w3.org/XML/1998/namespace":t(o,a)??("epub"===a?"http://www.idpf.org/2007/ops":null);r&&!o.hasAttributeNS(r,n)&&o.setAttributeNS(r,e,i)}},D=(e,t)=>{e.documentElement.setAttribute("data-eink",t?"true":"false")},q=(e,t)=>{let o="scrollbar-hide-style",i=e.getElementById(o);t?(i||((i=e.createElement("style")).id=o,e.head.appendChild(i)),i.textContent="foliate-view::part(container) { scrollbar-width: none; }"):i&&(i.textContent="foliate-view::part(container) { scrollbar-width: thin; }")},_=e=>{let t=e.defaultView??window,o=Array.from(e.querySelectorAll("img")).map(o=>{let i=o.getAttribute("width"),a=i&&(i.endsWith("%")||i.endsWith("vw"))?parseFloat(i):0/0,n=o.getAttribute("height"),r=n&&(n.endsWith("%")||n.endsWith("vh"))?parseFloat(n):0/0,l="none"===o.getAttribute("zy-enlarge-src"),s=o.closest("p"),d=null;if(s){let t=e.createRange();t.setStart(s,0),t.setEndBefore(o),t.toString().trim()||(d=s)}let c=!1,g=!1,p=o.parentNode;if(p&&p.nodeType===Node.ELEMENT_NODE){let e=Array.from(p.childNodes),i=e.some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),a=e.every(e=>e.nodeType!==Node.ELEMENT_NODE||"BR"!==e.tagName);if(c=i&&a){let e=t.getComputedStyle(o).verticalAlign;g=""===e||"baseline"===e}}return{img:o,percentWidth:a,percentHeight:r,inlineWithText:c,keepBaseline:g,noEnlarge:l,leadingImageParagraph:d}}),i=e.documentElement?.style,a=i?parseFloat(i.getPropertyValue("--available-height")):0/0,n=!isNaN(a)&&a>0?a:t?.innerHeight??window.innerHeight,r=i?parseFloat(i.getPropertyValue("--available-width")):0/0,l=!isNaN(r)&&r>0?r:t?.innerWidth??window.innerWidth;for(let{img:e,percentWidth:t,percentHeight:i,inlineWithText:a,keepBaseline:r,noEnlarge:s,leadingImageParagraph:d}of o)d?.classList.add("leading-image"),isNaN(t)||(e.style.width=`${t/100*l}px`,e.removeAttribute("width")),isNaN(i)||(e.style.height=`${i/100*n}px`,e.removeAttribute("height")),isNaN(t)||isNaN(i)||(e.style.objectFit="contain"),a&&(e.classList.add("has-text-siblings"),r&&e.classList.add("has-text-siblings-baseline")),s&&e.style.setProperty("pointer-events","none");e.querySelectorAll("hr").forEach(e=>{let t=window.getComputedStyle(e);t.backgroundImage&&"none"!==t.backgroundImage&&e.classList.add("background-img")})},R=e=>{e.links.length<=1e3&&e.documentElement.classList.add(g.QG)},H=e=>{let t=e.defaultView??window,o=e.querySelectorAll(":is(div, p, blockquote, dd):not([data-foliate-chunk])"),i=Array(o.length);for(let e=0;e<o.length;e++){let a=t.getComputedStyle(o[e]).textAlign;"center"===a?i[e]="aligned-center":"left"===a?i[e]="aligned-left":"right"===a?i[e]="aligned-right":"justify"===a?i[e]="aligned-justify":i[e]=null}for(let e=0;e<o.length;e++){let t=i[e];t&&o[e].classList.add(t)}},P=e=>{let{isDarkMode:t,isBwEink:o,isFixedLayout:i=!1,invertImgColorInDark:a=!1,applyThemeToPDF:n=!1,format:r}=e;return o?"difference":t&&(!i||a||"PDF"===r&&n)?"screen":"multiply"},B=(e,t)=>e.applyThemeToPDF?{background:t.bg,foreground:t.fg,keepImages:!(t.isDarkMode&&e.invertImgColorInDark)}:void 0,M=(e,t,o,i)=>{o||(o=C());let{bg:n,fg:r,primary:l,isDarkMode:s}=o,d=!i||a.hz.has(i),c=t.isEink,g=t.overrideColor,p=t.invertImgColorInDark,h=t.contrast??100,m=[],u="PDF"===i&&t.applyThemeToPDF;s&&p&&!u&&m.push("invert(100%) hue-rotate(180deg)"),100!==h&&m.push(`contrast(${h}%)`);let b=m.length?`filter: ${m.join(" ")};`:"",y="fixed-layout-styles",w=e.getElementById(y);w&&w.remove(),(w=e.createElement("style")).id=y,w.textContent=`
    html {
      --theme-bg-color: ${n};
      --theme-fg-color: ${r};
      --theme-primary-color: ${l};
      color-scheme: ${d&&s?"dark":"light"};
      /* Chrome for Android's text autosizing rescales line metrics and shifts
         absolutely positioned per-letter text in fixed-layout books (#5641). */
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    }
    body {
      position: relative;
      ${d?"background-color: var(--theme-bg-color);":""}
    }
    ${c?f():""}
    #canvas {
      display: inline-block;
      width: fit-content;
      height: fit-content;
      background-color: var(--theme-bg-color);
    }
    img, canvas {
      ${b}
      ${g&&!u?`mix-blend-mode: ${s?"#000000"===n?"luminosity":"overlay":"multiply"};`:""}
    }
    img.singlePage {
      position: relative;
    }
    /* An unsized <image> draws at its natural size, which is the page size,
       but a percentage-height svg in an auto-height block is only 150px tall
       and would clip it to a strip (#6530). */
    svg:not([viewBox]):has(> image:not([width])) {
      overflow: visible;
    }
  `,e.head.appendChild(w)}},56411:(e,t,o)=>{function i(e,t){return null===t?e<35:e<20||!(e>50)&&t}function a(e,t,o){return"dark"===e||"light"!==e&&("ambient"===e?o:t)}o.d(t,{XJ:()=>s,hi:()=>d,iz:()=>l,yf:()=>i,zm:()=>a});let n=8068==o.j?["auto","light","dark"]:null,r=8068==o.j?["auto","light","dark","ambient"]:null;function l(e,t){let o=t?r:n,i=o.indexOf("ambient"!==e||t?e:"auto"),a=i<0?0:(i+1)%o.length;return o[a]??"auto"}function s(e,t){return"true"===e||"false"!==e&&t}function d(e){return"auto"===e||"light"===e||"dark"===e||"ambient"===e}},94991:(e,t,o)=>{o.d(t,{PD:()=>r,Yu:()=>a});let i=["a","b","em","i","strong","u","span","font","sup","sub","small","mark"],a=i.join(", "),n=new Set(i),r=e=>n.has(e.toLowerCase())}}]);
//# sourceMappingURL=2904-f22bb05ab8f734cf.js.map