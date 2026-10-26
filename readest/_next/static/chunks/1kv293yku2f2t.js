(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,352050,e=>{var t=e.i(18585),i=e.i(315480),n=e.i(653184),s=e.i(29755),o=e.i(409383);e.s(["default",0,()=>((0,s.f)(),(0,t.jsx)(i.Suspense,{fallback:(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:(0,t.jsx)(o.f,{loading:!0})}),children:(0,t.jsx)("div",{className:"bg-base-100 px-12 py-4",children:(0,t.jsx)(n.n,{})})}))])},409383,e=>{var t=e.i(18585),i=e.i(7284),n=e.i(604111);let s=`
/* Uiverse csemszepp/ugly-crab-22 融合球（等比缩小版） */
.spinner-goo-stage {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: var(--color-base-200, #f4f4f5);
  filter: blur(7px) contrast(16);
}
.spinner-goo-blob {
  position: absolute;
  top: 50%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.spinner-goo-blob--l {
  left: 20%;
  background: #1f2937;
  animation: spinner-osc-l 2.5s ease infinite;
}
.spinner-goo-blob--r {
  left: 80%;
  background: #3b82f6;
  animation: spinner-osc-r 2.5s ease infinite;
}
/* 暗色主题：反色（白 + 青），与原版一致 */
[data-theme$='-dark'] .spinner-goo-stage {
  background: var(--color-base-200, #18181b);
}
[data-theme$='-dark'] .spinner-goo-blob--l {
  background: #ffffff;
}
[data-theme$='-dark'] .spinner-goo-blob--r {
  background: #22d3ee;
}
@keyframes spinner-osc-l {
  0% { left: 20%; }
  50% { left: 50%; }
  100% { left: 20%; }
}
@keyframes spinner-osc-r {
  0% { left: 80%; }
  50% { left: 50%; }
  100% { left: 80%; }
}
@media (prefers-reduced-motion: reduce) {
  .spinner-goo-blob--l,
  .spinner-goo-blob--r {
    animation: none;
  }
}
`;e.s(["f",0,e=>{let{loading:o,className:r}=e,l=(0,n.f)();return o?(0,t.jsxs)("div",{className:(0,i.U)("absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center",r),role:"status",children:[(0,t.jsxs)("div",{className:"spinner-goo-stage",children:[(0,t.jsx)("span",{className:"spinner-goo-blob spinner-goo-blob--l"}),(0,t.jsx)("span",{className:"spinner-goo-blob spinner-goo-blob--r"})]}),(0,t.jsx)("span",{className:"sr-only",children:l("Loading...")}),(0,t.jsx)("style",{children:s})]}):null}])},29755,e=>{var t=e.i(315480),i=e.i(96508),n=e.i(981441),s=e.i(424439),o=e.i(965477),r=e.i(415810),l=e.i(341537),a=e.i(322295),d=e.i(62725),c=e.i(984069);e.s(["f",0,function(){let{systemUIVisible:e=!0,appThemeColor:g="base-100",themeScope:u="library"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{appService:b}=(0,i.useEnv)(),{settings:p}=(0,s.f)(),f=p?.globalViewSettings?.isEink,m=p?.globalViewSettings?.isColorEink,h=f&&!m,y=p?.globalViewSettings?.highlightOpacity??.4,{themeColor:v,isDarkMode:x,showSystemUI:E,dismissSystemUI:k,updateAppTheme:S,setStatusBarHeight:w,systemUIAlwaysHidden:j,isIPhoneDuo:A,setSystemUIAlwaysHidden:P,setThemeScope:I}=(0,n.M)(),{onUpdateInsets:M}=(0,o.f)();(0,t.useEffect)(()=>{I(u)},[u,I]),(0,t.useEffect)(()=>{S(g),b?.isAndroidApp&&((0,l.getStatusBarHeight)().then(e=>{e.height&&e.height>0&&w(e.height/window.devicePixelRatio)}),N(!0))},[b?.isAndroidApp]);let N=(0,t.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!b?.isMobileApp)return;let i=n.M.getState(),s=i.isIPhoneDuo?i.systemUIAlwaysHidden:j,o=!!(e&&!s);o?E():k(),(0,l.setSystemUIVisibility)({visible:o,darkMode:x}).then(()=>{(t||n.M.getState().isIPhoneDuo)&&M()})},[b,x,e]);return(0,t.useEffect)(()=>{b?.isMobileApp&&N()},[N]),(0,t.useEffect)(()=>{if(!b?.isMobileApp)return;N();let e=()=>{"visible"===document.visibilityState&&N()},t=()=>{let e=(0,c.Z)(screen.orientation?.type,window.innerHeight);e!==n.M.getState().systemUIAlwaysHidden&&(P(e),N())},i=()=>{if(b?.isIOSApp&&"ios"===(0,d.r)()){if(A)return void t();P(screen.orientation?.type.includes("landscape")),N()}},s=()=>{A&&b?.isIOSApp&&"ios"===(0,d.r)()&&t()};return s(),document.addEventListener("visibilitychange",e),screen.orientation?.addEventListener("change",i),window.addEventListener("resize",s),()=>{document.removeEventListener("visibilitychange",e),screen.orientation?.removeEventListener("change",i),window.removeEventListener("resize",s)}},[N,A]),(0,t.useEffect)(()=>{let e=p.globalReadSettings?.customThemes??[];e.forEach(e=>{(0,r.e)(e)}),localStorage.setItem("customThemes",JSON.stringify(e))},[p.globalReadSettings?.customThemes]),(0,t.useEffect)(()=>{let e=x?"dark":"light";document.documentElement.setAttribute("data-theme",`${v}-${e}`),document.documentElement.style.setProperty("color-scheme",e),document.documentElement.style.setProperty("--scroll-bg-opacity",h?"1.0":"0.5"),document.documentElement.style.setProperty("--overlayer-highlight-opacity",h?"1.0":String(y)),document.documentElement.style.setProperty("--overlayer-highlight-blend-mode",(0,a.H)({isDarkMode:x,isBwEink:!!h})),document.documentElement.style.setProperty("--bg-texture-blend-mode",x?"lighten":"multiply")},[v,x,h,y]),{onUpdateInsets:M}}])}])})();

//# sourceMappingURL=2ho2il0opmb_b.js.map