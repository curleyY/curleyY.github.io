(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))u(y);new MutationObserver(y=>{for(const O of y)if(O.type==="childList")for(const X of O.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&u(X)}).observe(document,{childList:!0,subtree:!0});function d(y){const O={};return y.integrity&&(O.integrity=y.integrity),y.referrerPolicy&&(O.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?O.credentials="include":y.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function u(y){if(y.ep)return;y.ep=!0;const O=d(y);fetch(y.href,O)}})();var ms={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function Xh(){if(sp)return Oi;sp=1;var c=Symbol.for("react.transitional.element"),g=Symbol.for("react.fragment");function d(u,y,O){var X=null;if(O!==void 0&&(X=""+O),y.key!==void 0&&(X=""+y.key),"key"in y){O={};for(var L in y)L!=="key"&&(O[L]=y[L])}else O=y;return y=O.ref,{$$typeof:c,type:u,key:X,ref:y!==void 0?y:null,props:O}}return Oi.Fragment=g,Oi.jsx=d,Oi.jsxs=d,Oi}var up;function Vh(){return up||(up=1,ms.exports=Xh()),ms.exports}var r=Vh(),xs={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function Qh(){if(dp)return Ae;dp=1;var c=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),X=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),W=Symbol.iterator;function ue(p){return p===null||typeof p!="object"?null:(p=W&&p[W]||p["@@iterator"],typeof p=="function"?p:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,de={};function se(p,C,K){this.props=p,this.context=C,this.refs=de,this.updater=K||re}se.prototype.isReactComponent={},se.prototype.setState=function(p,C){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,C,"setState")},se.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function ne(){}ne.prototype=se.prototype;function be(p,C,K){this.props=p,this.context=C,this.refs=de,this.updater=K||re}var Se=be.prototype=new ne;Se.constructor=be,ee(Se,se.prototype),Se.isPureReactComponent=!0;var ke=Array.isArray;function ge(){}var me={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function te(p,C,K){var J=K.ref;return{$$typeof:c,type:p,key:C,ref:J!==void 0?J:null,props:K}}function oe(p,C){return te(p.type,C,p.props)}function ie(p){return typeof p=="object"&&p!==null&&p.$$typeof===c}function N(p){var C={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(K){return C[K]})}var ae=/\/+/g;function ve(p,C){return typeof p=="object"&&p!==null&&p.key!=null?N(""+p.key):C.toString(36)}function De(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(ge,ge):(p.status="pending",p.then(function(C){p.status==="pending"&&(p.status="fulfilled",p.value=C)},function(C){p.status==="pending"&&(p.status="rejected",p.reason=C)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function m(p,C,K,J,pe){var $=typeof p;($==="undefined"||$==="boolean")&&(p=null);var Ce=!1;if(p===null)Ce=!0;else switch($){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(p.$$typeof){case c:case g:Ce=!0;break;case V:return Ce=p._init,m(Ce(p._payload),C,K,J,pe)}}if(Ce)return pe=pe(p),Ce=J===""?"."+ve(p,0):J,ke(pe)?(K="",Ce!=null&&(K=Ce.replace(ae,"$&/")+"/"),m(pe,C,K,"",function(rt){return rt})):pe!=null&&(ie(pe)&&(pe=oe(pe,K+(pe.key==null||p&&p.key===pe.key?"":(""+pe.key).replace(ae,"$&/")+"/")+Ce)),C.push(pe)),1;Ce=0;var $e=J===""?".":J+":";if(ke(p))for(var Me=0;Me<p.length;Me++)J=p[Me],$=$e+ve(J,Me),Ce+=m(J,C,K,$,pe);else if(Me=ue(p),typeof Me=="function")for(p=Me.call(p),Me=0;!(J=p.next()).done;)J=J.value,$=$e+ve(J,Me++),Ce+=m(J,C,K,$,pe);else if($==="object"){if(typeof p.then=="function")return m(De(p),C,K,J,pe);throw C=String(p),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function w(p,C,K){if(p==null)return p;var J=[],pe=0;return m(p,J,"","",function($){return C.call(K,$,pe++)}),J}function _(p){if(p._status===-1){var C=p._result;C=C(),C.then(function(K){(p._status===0||p._status===-1)&&(p._status=1,p._result=K)},function(K){(p._status===0||p._status===-1)&&(p._status=2,p._result=K)}),p._status===-1&&(p._status=0,p._result=C)}if(p._status===1)return p._result.default;throw p._result}var G=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},Z={map:w,forEach:function(p,C,K){w(p,function(){C.apply(this,arguments)},K)},count:function(p){var C=0;return w(p,function(){C++}),C},toArray:function(p){return w(p,function(C){return C})||[]},only:function(p){if(!ie(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return Ae.Activity=B,Ae.Children=Z,Ae.Component=se,Ae.Fragment=d,Ae.Profiler=y,Ae.PureComponent=be,Ae.StrictMode=u,Ae.Suspense=z,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(p){return me.H.useMemoCache(p)}},Ae.cache=function(p){return function(){return p.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(p,C,K){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var J=ee({},p.props),pe=p.key;if(C!=null)for($ in C.key!==void 0&&(pe=""+C.key),C)!_e.call(C,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&C.ref===void 0||(J[$]=C[$]);var $=arguments.length-2;if($===1)J.children=K;else if(1<$){for(var Ce=Array($),$e=0;$e<$;$e++)Ce[$e]=arguments[$e+2];J.children=Ce}return te(p.type,pe,J)},Ae.createContext=function(p){return p={$$typeof:X,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:O,_context:p},p},Ae.createElement=function(p,C,K){var J,pe={},$=null;if(C!=null)for(J in C.key!==void 0&&($=""+C.key),C)_e.call(C,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(pe[J]=C[J]);var Ce=arguments.length-2;if(Ce===1)pe.children=K;else if(1<Ce){for(var $e=Array(Ce),Me=0;Me<Ce;Me++)$e[Me]=arguments[Me+2];pe.children=$e}if(p&&p.defaultProps)for(J in Ce=p.defaultProps,Ce)pe[J]===void 0&&(pe[J]=Ce[J]);return te(p,$,pe)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(p){return{$$typeof:L,render:p}},Ae.isValidElement=ie,Ae.lazy=function(p){return{$$typeof:V,_payload:{_status:-1,_result:p},_init:_}},Ae.memo=function(p,C){return{$$typeof:S,type:p,compare:C===void 0?null:C}},Ae.startTransition=function(p){var C=me.T,K={};me.T=K;try{var J=p(),pe=me.S;pe!==null&&pe(K,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ge,G)}catch($){G($)}finally{C!==null&&K.types!==null&&(C.types=K.types),me.T=C}},Ae.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},Ae.use=function(p){return me.H.use(p)},Ae.useActionState=function(p,C,K){return me.H.useActionState(p,C,K)},Ae.useCallback=function(p,C){return me.H.useCallback(p,C)},Ae.useContext=function(p){return me.H.useContext(p)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(p,C){return me.H.useDeferredValue(p,C)},Ae.useEffect=function(p,C){return me.H.useEffect(p,C)},Ae.useEffectEvent=function(p){return me.H.useEffectEvent(p)},Ae.useId=function(){return me.H.useId()},Ae.useImperativeHandle=function(p,C,K){return me.H.useImperativeHandle(p,C,K)},Ae.useInsertionEffect=function(p,C){return me.H.useInsertionEffect(p,C)},Ae.useLayoutEffect=function(p,C){return me.H.useLayoutEffect(p,C)},Ae.useMemo=function(p,C){return me.H.useMemo(p,C)},Ae.useOptimistic=function(p,C){return me.H.useOptimistic(p,C)},Ae.useReducer=function(p,C,K){return me.H.useReducer(p,C,K)},Ae.useRef=function(p){return me.H.useRef(p)},Ae.useState=function(p){return me.H.useState(p)},Ae.useSyncExternalStore=function(p,C,K){return me.H.useSyncExternalStore(p,C,K)},Ae.useTransition=function(){return me.H.useTransition()},Ae.version="19.2.1",Ae}var fp;function Ns(){return fp||(fp=1,xs.exports=Qh()),xs.exports}var b=Ns(),Zh=(c,g,d,u,y,O,X,L)=>{let z=document.documentElement,S=["light","dark"];function V(ue){(Array.isArray(c)?c:[c]).forEach(re=>{let ee=re==="class",de=ee&&O?y.map(se=>O[se]||se):y;ee?(z.classList.remove(...de),z.classList.add(O&&O[ue]?O[ue]:ue)):z.setAttribute(re,ue)}),B(ue)}function B(ue){L&&S.includes(ue)&&(z.style.colorScheme=ue)}function W(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)V(u);else try{let ue=localStorage.getItem(g)||d,re=X&&ue==="system"?W():ue;V(re)}catch{}},pp=["light","dark"],Dp="(prefers-color-scheme: dark)",Kh=typeof window>"u",Lp=b.createContext(void 0),Jh=c=>b.useContext(Lp)?b.createElement(b.Fragment,null,c.children):b.createElement(Fh,{...c}),$h=["light","dark"],Fh=({forcedTheme:c,disableTransitionOnChange:g=!1,enableSystem:d=!0,enableColorScheme:u=!0,storageKey:y="theme",themes:O=$h,defaultTheme:X=d?"system":"light",attribute:L="data-theme",value:z,children:S,nonce:V,scriptProps:B})=>{let[W,ue]=b.useState(()=>Ih(y,X)),[re,ee]=b.useState(()=>W==="system"?ys():W),de=z?Object.values(z):O,se=b.useCallback(ke=>{let ge=ke;if(!ge)return;ke==="system"&&d&&(ge=ys());let me=z?z[ge]:ge,_e=g?Ph(V):null,te=document.documentElement,oe=ie=>{ie==="class"?(te.classList.remove(...de),me&&te.classList.add(me)):ie.startsWith("data-")&&(me?te.setAttribute(ie,me):te.removeAttribute(ie))};if(Array.isArray(L)?L.forEach(oe):oe(L),u){let ie=pp.includes(X)?X:null,N=pp.includes(ge)?ge:ie;te.style.colorScheme=N}_e==null||_e()},[V]),ne=b.useCallback(ke=>{let ge=typeof ke=="function"?ke(W):ke;ue(ge);try{localStorage.setItem(y,ge)}catch{}},[W]),be=b.useCallback(ke=>{let ge=ys(ke);ee(ge),W==="system"&&d&&!c&&se("system")},[W,c]);b.useEffect(()=>{let ke=window.matchMedia(Dp);return ke.addListener(be),be(ke),()=>ke.removeListener(be)},[be]),b.useEffect(()=>{let ke=ge=>{ge.key===y&&(ge.newValue?ue(ge.newValue):ne(X))};return window.addEventListener("storage",ke),()=>window.removeEventListener("storage",ke)},[ne]),b.useEffect(()=>{se(c??W)},[c,W]);let Se=b.useMemo(()=>({theme:W,setTheme:ne,forcedTheme:c,resolvedTheme:W==="system"?re:W,themes:d?[...O,"system"]:O,systemTheme:d?re:void 0}),[W,ne,c,re,d,O]);return b.createElement(Lp.Provider,{value:Se},b.createElement(Wh,{forcedTheme:c,storageKey:y,attribute:L,enableSystem:d,enableColorScheme:u,defaultTheme:X,value:z,themes:O,nonce:V,scriptProps:B}),S)},Wh=b.memo(({forcedTheme:c,storageKey:g,attribute:d,enableSystem:u,enableColorScheme:y,defaultTheme:O,value:X,themes:L,nonce:z,scriptProps:S})=>{let V=JSON.stringify([d,g,O,c,L,X,u,y]).slice(1,-1);return b.createElement("script",{...S,suppressHydrationWarning:!0,nonce:typeof window>"u"?z:"",dangerouslySetInnerHTML:{__html:`(${Zh.toString()})(${V})`}})}),Ih=(c,g)=>{if(Kh)return;let d;try{d=localStorage.getItem(c)||void 0}catch{}return d||g},Ph=c=>{let g=document.createElement("style");return c&&g.setAttribute("nonce",c),g.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(g),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(g)},1)}},ys=c=>(c||(c=window.matchMedia(Dp)),c.matches?"dark":"light"),bs={exports:{}},qi={},vs={exports:{}},ws={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function e2(){return hp||(hp=1,(function(c){function g(m,w){var _=m.length;m.push(w);e:for(;0<_;){var G=_-1>>>1,Z=m[G];if(0<y(Z,w))m[G]=w,m[_]=Z,_=G;else break e}}function d(m){return m.length===0?null:m[0]}function u(m){if(m.length===0)return null;var w=m[0],_=m.pop();if(_!==w){m[0]=_;e:for(var G=0,Z=m.length,p=Z>>>1;G<p;){var C=2*(G+1)-1,K=m[C],J=C+1,pe=m[J];if(0>y(K,_))J<Z&&0>y(pe,K)?(m[G]=pe,m[J]=_,G=J):(m[G]=K,m[C]=_,G=C);else if(J<Z&&0>y(pe,_))m[G]=pe,m[J]=_,G=J;else break e}}return w}function y(m,w){var _=m.sortIndex-w.sortIndex;return _!==0?_:m.id-w.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;c.unstable_now=function(){return O.now()}}else{var X=Date,L=X.now();c.unstable_now=function(){return X.now()-L}}var z=[],S=[],V=1,B=null,W=3,ue=!1,re=!1,ee=!1,de=!1,se=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,be=typeof setImmediate<"u"?setImmediate:null;function Se(m){for(var w=d(S);w!==null;){if(w.callback===null)u(S);else if(w.startTime<=m)u(S),w.sortIndex=w.expirationTime,g(z,w);else break;w=d(S)}}function ke(m){if(ee=!1,Se(m),!re)if(d(z)!==null)re=!0,ge||(ge=!0,N());else{var w=d(S);w!==null&&De(ke,w.startTime-m)}}var ge=!1,me=-1,_e=5,te=-1;function oe(){return de?!0:!(c.unstable_now()-te<_e)}function ie(){if(de=!1,ge){var m=c.unstable_now();te=m;var w=!0;try{e:{re=!1,ee&&(ee=!1,ne(me),me=-1),ue=!0;var _=W;try{t:{for(Se(m),B=d(z);B!==null&&!(B.expirationTime>m&&oe());){var G=B.callback;if(typeof G=="function"){B.callback=null,W=B.priorityLevel;var Z=G(B.expirationTime<=m);if(m=c.unstable_now(),typeof Z=="function"){B.callback=Z,Se(m),w=!0;break t}B===d(z)&&u(z),Se(m)}else u(z);B=d(z)}if(B!==null)w=!0;else{var p=d(S);p!==null&&De(ke,p.startTime-m),w=!1}}break e}finally{B=null,W=_,ue=!1}w=void 0}}finally{w?N():ge=!1}}}var N;if(typeof be=="function")N=function(){be(ie)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ve=ae.port2;ae.port1.onmessage=ie,N=function(){ve.postMessage(null)}}else N=function(){se(ie,0)};function De(m,w){me=se(function(){m(c.unstable_now())},w)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(m){m.callback=null},c.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<m?Math.floor(1e3/m):5},c.unstable_getCurrentPriorityLevel=function(){return W},c.unstable_next=function(m){switch(W){case 1:case 2:case 3:var w=3;break;default:w=W}var _=W;W=w;try{return m()}finally{W=_}},c.unstable_requestPaint=function(){de=!0},c.unstable_runWithPriority=function(m,w){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var _=W;W=m;try{return w()}finally{W=_}},c.unstable_scheduleCallback=function(m,w,_){var G=c.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,m){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,m={id:V++,callback:w,priorityLevel:m,startTime:_,expirationTime:Z,sortIndex:-1},_>G?(m.sortIndex=_,g(S,m),d(z)===null&&m===d(S)&&(ee?(ne(me),me=-1):ee=!0,De(ke,_-G))):(m.sortIndex=Z,g(z,m),re||ue||(re=!0,ge||(ge=!0,N()))),m},c.unstable_shouldYield=oe,c.unstable_wrapCallback=function(m){var w=W;return function(){var _=W;W=w;try{return m.apply(this,arguments)}finally{W=_}}}})(ws)),ws}var gp;function t2(){return gp||(gp=1,vs.exports=e2()),vs.exports}var Ss={exports:{}},Nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function n2(){if(mp)return Nt;mp=1;var c=Ns();function g(z){var S="https://react.dev/errors/"+z;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var V=2;V<arguments.length;V++)S+="&args[]="+encodeURIComponent(arguments[V])}return"Minified React error #"+z+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(g(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},y=Symbol.for("react.portal");function O(z,S,V){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:B==null?null:""+B,children:z,containerInfo:S,implementation:V}}var X=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(z,S){if(z==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Nt.createPortal=function(z,S){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(g(299));return O(z,S,null,V)},Nt.flushSync=function(z){var S=X.T,V=u.p;try{if(X.T=null,u.p=2,z)return z()}finally{X.T=S,u.p=V,u.d.f()}},Nt.preconnect=function(z,S){typeof z=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,u.d.C(z,S))},Nt.prefetchDNS=function(z){typeof z=="string"&&u.d.D(z)},Nt.preinit=function(z,S){if(typeof z=="string"&&S&&typeof S.as=="string"){var V=S.as,B=L(V,S.crossOrigin),W=typeof S.integrity=="string"?S.integrity:void 0,ue=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;V==="style"?u.d.S(z,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:B,integrity:W,fetchPriority:ue}):V==="script"&&u.d.X(z,{crossOrigin:B,integrity:W,fetchPriority:ue,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Nt.preinitModule=function(z,S){if(typeof z=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var V=L(S.as,S.crossOrigin);u.d.M(z,{crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&u.d.M(z)},Nt.preload=function(z,S){if(typeof z=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var V=S.as,B=L(V,S.crossOrigin);u.d.L(z,V,{crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Nt.preloadModule=function(z,S){if(typeof z=="string")if(S){var V=L(S.as,S.crossOrigin);u.d.m(z,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else u.d.m(z)},Nt.requestFormReset=function(z){u.d.r(z)},Nt.unstable_batchedUpdates=function(z,S){return z(S)},Nt.useFormState=function(z,S,V){return X.H.useFormState(z,S,V)},Nt.useFormStatus=function(){return X.H.useHostTransitionStatus()},Nt.version="19.2.1",Nt}var xp;function Rp(){if(xp)return Ss.exports;xp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(g){console.error(g)}}return c(),Ss.exports=n2(),Ss.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function a2(){if(yp)return qi;yp=1;var c=t2(),g=Ns(),d=Rp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(O(e)!==e)throw Error(u(188))}function S(e){var t=e.alternate;if(!t){if(t=O(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return z(l),e;if(i===a)return z(l),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,a=i;break}if(s===a){o=!0,a=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,a=l;break}if(s===a){o=!0,a=i,n=l;break}s=s.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,W=Symbol.for("react.element"),ue=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),be=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),ie=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=ie&&e[ie]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case se:return"Profiler";case de:return"StrictMode";case ke:return"Suspense";case ge:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case re:return"Portal";case be:return e.displayName||"Context";case ne:return(e._context.displayName||"Context")+".Consumer";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var De=Array.isArray,m=g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},G=[],Z=-1;function p(e){return{current:e}}function C(e){0>Z||(e.current=G[Z],G[Z]=null,Z--)}function K(e,t){Z++,G[Z]=e.current,e.current=t}var J=p(null),pe=p(null),$=p(null),Ce=p(null);function $e(e,t){switch(K($,t),K(pe,e),K(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tf(t),e=Df(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(J),K(J,e)}function Me(){C(J),C(pe),C($)}function rt(e){e.memoizedState!==null&&K(Ce,e);var t=J.current,n=Df(t,e.type);t!==n&&(K(pe,e),K(J,n))}function wt(e){pe.current===e&&(C(J),C(pe)),Ce.current===e&&(C(Ce),Ti._currentValue=_)}var at,tn;function zt(e){if(at===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);at=t&&t[1]||"",tn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+tn}var Kn=!1;function Zt(e,t){if(!e||Kn)return"";Kn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(T){var E=T}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(T){E=T}e.call(Y.prototype)}}else{try{throw Error()}catch(T){E=T}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var f=o.split(`
`),j=s.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===j.length)for(a=f.length-1,l=j.length-1;1<=a&&0<=l&&f[a]!==j[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==j[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==j[l]){var H=`
`+f[a].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=a&&0<=l);break}}}finally{Kn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zt(n):""}function Wa(e,t){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==t&&t!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Zt(e.type,!1);case 11:return Zt(e.type.render,!1);case 1:return Zt(e.type,!0);case 31:return zt("Activity");default:return""}}function Ia(e){try{var t="",n=null;do t+=Wa(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ol=Object.prototype.hasOwnProperty,ql=c.unstable_scheduleCallback,Pa=c.unstable_cancelCallback,Yi=c.unstable_shouldYield,Ca=c.unstable_requestPaint,Mt=c.unstable_now,ho=c.unstable_getCurrentPriorityLevel,Lt=c.unstable_ImmediatePriority,_n=c.unstable_UserBlockingPriority,Tt=c.unstable_NormalPriority,Aa=c.unstable_LowPriority,el=c.unstable_IdlePriority,bn=c.log,Hl=c.unstable_setDisableYieldValue,Jn=null,St=null;function Rt(e){if(typeof bn=="function"&&Hl(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Jn,e)}catch{}}var bt=Math.clz32?Math.clz32:go,Gi=Math.log,Ul=Math.LN2;function go(e){return e>>>=0,e===0?32:31-(Gi(e)/Ul|0)|0}var vn=256,$n=262144,Ea=4194304;function Ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=Ot(a):(o&=s,o!==0?l=Ot(o):n||(n=s&~e,n!==0&&(l=Ot(n))))):(s=a&~i,s!==0?l=Ot(s):o!==0?l=Ot(o):n||(n=a&~e,n!==0&&(l=Ot(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Wn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bl(){var e=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),e}function za(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function In(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,f=e.expirationTimes,j=e.hiddenUpdates;for(n=o&~n;0<n;){var H=31-bt(n),Y=1<<H;s[H]=0,f[H]=-1;var E=j[H];if(E!==null)for(j[H]=null,H=0;H<E.length;H++){var T=E[H];T!==null&&(T.lane&=-536870913)}n&=~Y}a!==0&&Vi(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Vi(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-bt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function nn(e,t){var n=t&-t;return n=(n&42)!==0?1:nl(n),(n&(e.suspendedLanes|t))!==0?0:n}function nl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xl(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:np(e.type))}function Qi(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var wn=Math.random().toString(36).slice(2),ut="__reactFiber$"+wn,_t="__reactProps$"+wn,Pn="__reactContainer$"+wn,Vl="__reactEvents$"+wn,Zi="__reactListeners$"+wn,mo="__reactHandles$"+wn,Ki="__reactResources$"+wn,an="__reactMarker$"+wn;function Ql(e){delete e[ut],delete e[_t],delete e[Vl],delete e[Zi],delete e[mo]}function Sn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bf(e);e!==null;){if(n=e[ut])return n;e=Bf(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[ut]||e[Pn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function ta(e){var t=e[Ki];return t||(t=e[Ki]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[an]=!0}var Ji=new Set,Zl={};function kn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(Zl[e]=t,e=0;e<t.length;e++)Ji.add(t[e])}var $i=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fi={},Wi={};function xo(e){return Ol.call(Wi,e)?!0:Ol.call(Fi,e)?!1:$i.test(e)?Wi[e]=!0:(Fi[e]=!0,!1)}function al(e,t,n){if(xo(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function jn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ii(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ll(e){if(!e._valueTracker){var t=Kl(e)?"checked":"value";e._valueTracker=Ii(e,t,""+e[t])}}function Jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Kl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pi=/[\n"\\]/g;function kt(e){return e.replace(Pi,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $l(e,t,n,a,l,i,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Kt(e,o,qt(t)):n!=null?Kt(e,o,qt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+qt(s):e.removeAttribute("name")}function Fl(e,t,n,a,l,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ll(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ll(e)}function Kt(e,t,n){t==="number"&&il(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function er(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function tr(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(De(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ll(e)}function h(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var M=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function F(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||M.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function P(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&F(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&F(e,i,t[i])}function Q(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var le=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function R(e){return A.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function D(){}var q=null;function I(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fe=null,Le=null;function Re(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if($l(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[_t]||null;if(!l)throw Error(u(90));$l(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Jl(a)}break e;case"textarea":er(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}}}var tt=!1;function Oe(e,t,n){if(tt)return e(t,n);tt=!0;try{var a=e(t);return a}finally{if(tt=!1,(fe!==null||Le!==null)&&(Ur(),fe&&(t=fe,e=Le,Le=fe=null,Re(t),e)))for(t=0;t<e.length;t++)Re(e[t])}}function Te(e,t){var n=e.stateNode;if(n===null)return null;var a=n[_t]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),je=!1;if(qe)try{var Ee={};Object.defineProperty(Ee,"passive",{get:function(){je=!0}}),window.addEventListener("test",Ee,Ee),window.removeEventListener("test",Ee,Ee)}catch{je=!1}var Xe=null,ye=null,Ve=null;function rn(){if(Ve)return Ve;var e,t=ye,n=t.length,a,l="value"in Xe?Xe.value:Xe.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Ve=l.slice(e,1<a?1-a:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ut(){return!0}function Ds(){return!1}function Bt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ut:Ds,this.isPropagationStopped=Ds,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ut)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ut)},persist:function(){},isPersistent:Ut}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=Bt(Na),Wl=B({},Na,{view:0,detail:0}),Yp=Bt(Wl),yo,bo,Il,ar=B({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(yo=e.screenX-Il.screenX,bo=e.screenY-Il.screenY):bo=yo=0,Il=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),Ls=Bt(ar),Gp=B({},ar,{dataTransfer:0}),Xp=Bt(Gp),Vp=B({},Wl,{relatedTarget:0}),vo=Bt(Vp),Qp=B({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Zp=Bt(Qp),Kp=B({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=Bt(Kp),$p=B({},Na,{data:0}),Rs=Bt($p),Fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function wo(){return Pp}var e0=B({},Wl,{key:function(e){if(e.key){var t=Fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ht(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Ht(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ht(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=Bt(e0),n0=B({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Os=Bt(n0),a0=B({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),l0=Bt(a0),i0=B({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=Bt(i0),o0=B({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=Bt(o0),s0=B({},Na,{newState:0,oldState:0}),u0=Bt(s0),d0=[9,13,27,32],So=qe&&"CompositionEvent"in window,Pl=null;qe&&"documentMode"in document&&(Pl=document.documentMode);var f0=qe&&"TextEvent"in window&&!Pl,qs=qe&&(!So||Pl&&8<Pl&&11>=Pl),Hs=" ",Us=!1;function Bs(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function p0(e,t){switch(e){case"compositionend":return Ys(t);case"keypress":return t.which!==32?null:(Us=!0,Hs);case"textInput":return e=t.data,e===Hs&&Us?null:e;default:return null}}function h0(e,t){if(rl)return e==="compositionend"||!So&&Bs(e,t)?(e=rn(),Ve=ye=Xe=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qs&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function Xs(e,t,n,a){fe?Le?Le.push(a):Le=[a]:fe=a,t=Zr(t,"onChange"),0<t.length&&(n=new nr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ei=null,ti=null;function m0(e){Af(e,0)}function lr(e){var t=_a(e);if(Jl(t))return e}function Vs(e,t){if(e==="change")return t}var Qs=!1;if(qe){var ko;if(qe){var jo="oninput"in document;if(!jo){var Zs=document.createElement("div");Zs.setAttribute("oninput","return;"),jo=typeof Zs.oninput=="function"}ko=jo}else ko=!1;Qs=ko&&(!document.documentMode||9<document.documentMode)}function Ks(){ei&&(ei.detachEvent("onpropertychange",Js),ti=ei=null)}function Js(e){if(e.propertyName==="value"&&lr(ti)){var t=[];Xs(t,ti,e,I(e)),Oe(m0,t)}}function x0(e,t,n){e==="focusin"?(Ks(),ei=t,ti=n,ei.attachEvent("onpropertychange",Js)):e==="focusout"&&Ks()}function y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(ti)}function b0(e,t){if(e==="click")return lr(t)}function v0(e,t){if(e==="input"||e==="change")return lr(t)}function w0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:w0;function ni(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Ol.call(t,l)||!Jt(e[l],t[l]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=$s(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$s(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=il(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=il(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var S0=qe&&"documentMode"in document&&11>=document.documentMode,ol=null,Ao=null,ai=null,Eo=!1;function Ps(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||ol==null||ol!==il(a)||(a=ol,"selectionStart"in a&&Co(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ai&&ni(ai,a)||(ai=a,a=Zr(Ao,"onSelect"),0<a.length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ol)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cl={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},zo={},eu={};qe&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function Ta(e){if(zo[e])return zo[e];if(!cl[e])return e;var t=cl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return zo[e]=t[n];return e}var tu=Ta("animationend"),nu=Ta("animationiteration"),au=Ta("animationstart"),k0=Ta("transitionrun"),j0=Ta("transitionstart"),C0=Ta("transitioncancel"),lu=Ta("transitionend"),iu=new Map,_o="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_o.push("scrollEnd");function gn(e,t){iu.set(e,t),kn(t,[e])}var ir=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},on=[],sl=0,No=0;function rr(){for(var e=sl,t=No=sl=0;t<e;){var n=on[t];on[t++]=null;var a=on[t];on[t++]=null;var l=on[t];on[t++]=null;var i=on[t];if(on[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&ru(n,l,i)}}function or(e,t,n,a){on[sl++]=e,on[sl++]=t,on[sl++]=n,on[sl++]=a,No|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Mo(e,t,n,a){return or(e,t,n,a),cr(e)}function Da(e,t){return or(e,null,null,t),cr(e)}function ru(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-bt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function cr(e){if(50<Ci)throw Ci=0,Bc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ul={};function A0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,a){return new A0(e,t,n,a)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ou(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function sr(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")To(e)&&(o=1);else if(typeof e=="string")o=Mh(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=$t(31,n,t,l),e.elementType=te,e.lanes=i,e;case ee:return La(n.children,l,i,t);case de:o=8,l|=24;break;case se:return e=$t(12,n,t,l|2),e.elementType=se,e.lanes=i,e;case ke:return e=$t(13,n,t,l),e.elementType=ke,e.lanes=i,e;case ge:return e=$t(19,n,t,l),e.elementType=ge,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:o=10;break e;case ne:o=9;break e;case Se:o=11;break e;case me:o=14;break e;case _e:o=16,a=null;break e}o=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=$t(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function La(e,t,n,a){return e=$t(7,e,a,t),e.lanes=n,e}function Do(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function cu(e){var t=$t(18,null,null,0);return t.stateNode=e,t}function Lo(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var su=new WeakMap;function cn(e,t){if(typeof e=="object"&&e!==null){var n=su.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ia(t)},su.set(e,t),t)}return{value:e,source:t,stack:Ia(t)}}var dl=[],fl=0,ur=null,li=0,sn=[],un=0,na=null,Cn=1,An="";function Dn(e,t){dl[fl++]=li,dl[fl++]=ur,ur=e,li=t}function uu(e,t,n){sn[un++]=Cn,sn[un++]=An,sn[un++]=na,na=e;var a=Cn;e=An;var l=32-bt(a)-1;a&=~(1<<l),n+=1;var i=32-bt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Cn=1<<32-bt(t)+l|n<<l|a,An=i+e}else Cn=1<<i|n<<l|a,An=e}function Ro(e){e.return!==null&&(Dn(e,1),uu(e,1,0))}function Oo(e){for(;e===ur;)ur=dl[--fl],dl[fl]=null,li=dl[--fl],dl[fl]=null;for(;e===na;)na=sn[--un],sn[un]=null,An=sn[--un],sn[un]=null,Cn=sn[--un],sn[un]=null}function du(e,t){sn[un++]=Cn,sn[un++]=An,sn[un++]=na,Cn=t.id,An=t.overflow,na=e}var jt=null,lt=null,Ge=!1,aa=null,dn=!1,qo=Error(u(519));function la(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ii(cn(t,e)),qo}function fu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[_t]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Ei.length;n++)Ue(Ei[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Fl(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),tr(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Nf(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=D),t=!0):t=!1,t||la(e,!0)}function pu(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:jt=jt.return}}function pl(e){if(e!==jt)return!1;if(!Ge)return pu(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ts(e.type,e.memoizedProps)),n=!n),n&&lt&&la(e),pu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));lt=Uf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));lt=Uf(e)}else t===27?(t=lt,ya(e.type)?(e=rs,rs=null,lt=e):lt=t):lt=jt?pn(e.stateNode.nextSibling):null;return!0}function Ra(){lt=jt=null,Ge=!1}function Ho(){var e=aa;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),aa=null),e}function ii(e){aa===null?aa=[e]:aa.push(e)}var Uo=p(null),Oa=null,Ln=null;function ia(e,t,n){K(Uo,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=Uo.current,C(Uo)}function Bo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Yo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var f=0;f<t.length;f++)if(s.context===t[f]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Bo(i.return,n,e),a||(o=null);break e}i=s.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(u(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Bo(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function hl(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var s=l.type;Jt(l.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(l===Ce.current){if(o=l.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ti):e=[Ti])}l=l.return}e!==null&&Yo(t,e,n,a),t.flags|=262144}function dr(e){for(e=e.firstContext;e!==null;){if(!Jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Oa=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return hu(Oa,e)}function fr(e,t){return Oa===null&&qa(e),hu(e,t)}function hu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ln===null){if(e===null)throw Error(u(308));Ln=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ln=Ln.next=t;return n}var E0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},z0=c.unstable_scheduleCallback,_0=c.unstable_NormalPriority,ht={$$typeof:be,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Go(){return{controller:new E0,data:new Map,refCount:0}}function ri(e){e.refCount--,e.refCount===0&&z0(_0,function(){e.controller.abort()})}var oi=null,Xo=0,gl=0,ml=null;function N0(e,t){if(oi===null){var n=oi=[];Xo=0,gl=Zc(),ml={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Xo++,t.then(gu,gu),t}function gu(){if(--Xo===0&&oi!==null){ml!==null&&(ml.status="fulfilled");var e=oi;oi=null,gl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function M0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var mu=m.S;m.S=function(e,t){Pd=Mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&N0(e,t),mu!==null&&mu(e,t)};var Ha=p(null);function Vo(){var e=Ha.current;return e!==null?e:nt.pooledCache}function pr(e,t){t===null?K(Ha,Ha.current):K(Ha,t.pool)}function xu(){var e=Vo();return e===null?null:{parent:ht._currentValue,pool:e}}var xl=Error(u(460)),Qo=Error(u(474)),hr=Error(u(542)),gr={then:function(){}};function yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(D,D),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wu(e),e;default:if(typeof t.status=="string")t.then(D,D);else{if(e=nt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wu(e),e}throw Ba=t,xl}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ba=n,xl):n}}var Ba=null;function vu(){if(Ba===null)throw Error(u(459));var e=Ba;return Ba=null,e}function wu(e){if(e===xl||e===hr)throw Error(u(483))}var yl=null,ci=0;function mr(e){var t=ci;return ci+=1,yl===null&&(yl=[]),bu(yl,e,t)}function si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xr(e,t){throw t.$$typeof===W?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Su(e){function t(v,x){if(e){var k=v.deletions;k===null?(v.deletions=[x],v.flags|=16):k.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function a(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function l(v,x){return v=Tn(v,x),v.index=0,v.sibling=null,v}function i(v,x,k){return v.index=k,e?(k=v.alternate,k!==null?(k=k.index,k<x?(v.flags|=67108866,x):k):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function s(v,x,k,U){return x===null||x.tag!==6?(x=Do(k,v.mode,U),x.return=v,x):(x=l(x,k),x.return=v,x)}function f(v,x,k,U){var xe=k.type;return xe===ee?H(v,x,k.props.children,U,k.key):x!==null&&(x.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===_e&&Ua(xe)===x.type)?(x=l(x,k.props),si(x,k),x.return=v,x):(x=sr(k.type,k.key,k.props,null,v.mode,U),si(x,k),x.return=v,x)}function j(v,x,k,U){return x===null||x.tag!==4||x.stateNode.containerInfo!==k.containerInfo||x.stateNode.implementation!==k.implementation?(x=Lo(k,v.mode,U),x.return=v,x):(x=l(x,k.children||[]),x.return=v,x)}function H(v,x,k,U,xe){return x===null||x.tag!==7?(x=La(k,v.mode,U,xe),x.return=v,x):(x=l(x,k),x.return=v,x)}function Y(v,x,k){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Do(""+x,v.mode,k),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return k=sr(x.type,x.key,x.props,null,v.mode,k),si(k,x),k.return=v,k;case re:return x=Lo(x,v.mode,k),x.return=v,x;case _e:return x=Ua(x),Y(v,x,k)}if(De(x)||N(x))return x=La(x,v.mode,k,null),x.return=v,x;if(typeof x.then=="function")return Y(v,mr(x),k);if(x.$$typeof===be)return Y(v,fr(v,x),k);xr(v,x)}return null}function E(v,x,k,U){var xe=x!==null?x.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return xe!==null?null:s(v,x,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ue:return k.key===xe?f(v,x,k,U):null;case re:return k.key===xe?j(v,x,k,U):null;case _e:return k=Ua(k),E(v,x,k,U)}if(De(k)||N(k))return xe!==null?null:H(v,x,k,U,null);if(typeof k.then=="function")return E(v,x,mr(k),U);if(k.$$typeof===be)return E(v,x,fr(v,k),U);xr(v,k)}return null}function T(v,x,k,U,xe){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return v=v.get(k)||null,s(x,v,""+U,xe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ue:return v=v.get(U.key===null?k:U.key)||null,f(x,v,U,xe);case re:return v=v.get(U.key===null?k:U.key)||null,j(x,v,U,xe);case _e:return U=Ua(U),T(v,x,k,U,xe)}if(De(U)||N(U))return v=v.get(k)||null,H(x,v,U,xe,null);if(typeof U.then=="function")return T(v,x,k,mr(U),xe);if(U.$$typeof===be)return T(v,x,k,fr(x,U),xe);xr(x,U)}return null}function ce(v,x,k,U){for(var xe=null,Qe=null,he=x,Ne=x=0,Ye=null;he!==null&&Ne<k.length;Ne++){he.index>Ne?(Ye=he,he=null):Ye=he.sibling;var Ze=E(v,he,k[Ne],U);if(Ze===null){he===null&&(he=Ye);break}e&&he&&Ze.alternate===null&&t(v,he),x=i(Ze,x,Ne),Qe===null?xe=Ze:Qe.sibling=Ze,Qe=Ze,he=Ye}if(Ne===k.length)return n(v,he),Ge&&Dn(v,Ne),xe;if(he===null){for(;Ne<k.length;Ne++)he=Y(v,k[Ne],U),he!==null&&(x=i(he,x,Ne),Qe===null?xe=he:Qe.sibling=he,Qe=he);return Ge&&Dn(v,Ne),xe}for(he=a(he);Ne<k.length;Ne++)Ye=T(he,v,Ne,k[Ne],U),Ye!==null&&(e&&Ye.alternate!==null&&he.delete(Ye.key===null?Ne:Ye.key),x=i(Ye,x,Ne),Qe===null?xe=Ye:Qe.sibling=Ye,Qe=Ye);return e&&he.forEach(function(ka){return t(v,ka)}),Ge&&Dn(v,Ne),xe}function we(v,x,k,U){if(k==null)throw Error(u(151));for(var xe=null,Qe=null,he=x,Ne=x=0,Ye=null,Ze=k.next();he!==null&&!Ze.done;Ne++,Ze=k.next()){he.index>Ne?(Ye=he,he=null):Ye=he.sibling;var ka=E(v,he,Ze.value,U);if(ka===null){he===null&&(he=Ye);break}e&&he&&ka.alternate===null&&t(v,he),x=i(ka,x,Ne),Qe===null?xe=ka:Qe.sibling=ka,Qe=ka,he=Ye}if(Ze.done)return n(v,he),Ge&&Dn(v,Ne),xe;if(he===null){for(;!Ze.done;Ne++,Ze=k.next())Ze=Y(v,Ze.value,U),Ze!==null&&(x=i(Ze,x,Ne),Qe===null?xe=Ze:Qe.sibling=Ze,Qe=Ze);return Ge&&Dn(v,Ne),xe}for(he=a(he);!Ze.done;Ne++,Ze=k.next())Ze=T(he,v,Ne,Ze.value,U),Ze!==null&&(e&&Ze.alternate!==null&&he.delete(Ze.key===null?Ne:Ze.key),x=i(Ze,x,Ne),Qe===null?xe=Ze:Qe.sibling=Ze,Qe=Ze);return e&&he.forEach(function(Gh){return t(v,Gh)}),Ge&&Dn(v,Ne),xe}function et(v,x,k,U){if(typeof k=="object"&&k!==null&&k.type===ee&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ue:e:{for(var xe=k.key;x!==null;){if(x.key===xe){if(xe=k.type,xe===ee){if(x.tag===7){n(v,x.sibling),U=l(x,k.props.children),U.return=v,v=U;break e}}else if(x.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===_e&&Ua(xe)===x.type){n(v,x.sibling),U=l(x,k.props),si(U,k),U.return=v,v=U;break e}n(v,x);break}else t(v,x);x=x.sibling}k.type===ee?(U=La(k.props.children,v.mode,U,k.key),U.return=v,v=U):(U=sr(k.type,k.key,k.props,null,v.mode,U),si(U,k),U.return=v,v=U)}return o(v);case re:e:{for(xe=k.key;x!==null;){if(x.key===xe)if(x.tag===4&&x.stateNode.containerInfo===k.containerInfo&&x.stateNode.implementation===k.implementation){n(v,x.sibling),U=l(x,k.children||[]),U.return=v,v=U;break e}else{n(v,x);break}else t(v,x);x=x.sibling}U=Lo(k,v.mode,U),U.return=v,v=U}return o(v);case _e:return k=Ua(k),et(v,x,k,U)}if(De(k))return ce(v,x,k,U);if(N(k)){if(xe=N(k),typeof xe!="function")throw Error(u(150));return k=xe.call(k),we(v,x,k,U)}if(typeof k.then=="function")return et(v,x,mr(k),U);if(k.$$typeof===be)return et(v,x,fr(v,k),U);xr(v,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,x!==null&&x.tag===6?(n(v,x.sibling),U=l(x,k),U.return=v,v=U):(n(v,x),U=Do(k,v.mode,U),U.return=v,v=U),o(v)):n(v,x)}return function(v,x,k,U){try{ci=0;var xe=et(v,x,k,U);return yl=null,xe}catch(he){if(he===xl||he===hr)throw he;var Qe=$t(29,he,null,v.mode);return Qe.lanes=U,Qe.return=v,Qe}finally{}}}var Ya=Su(!0),ku=Su(!1),ra=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Je&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=cr(e),ru(e,null,n),t}return or(e,a,t,n),cr(e)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,tl(e,n)}}function Jo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $o=!1;function di(){if($o){var e=ml;if(e!==null)throw e}}function fi(e,t,n,a){$o=!1;var l=e.updateQueue;ra=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var f=s,j=f.next;f.next=null,o===null?i=j:o.next=j,o=f;var H=e.alternate;H!==null&&(H=H.updateQueue,s=H.lastBaseUpdate,s!==o&&(s===null?H.firstBaseUpdate=j:s.next=j,H.lastBaseUpdate=f))}if(i!==null){var Y=l.baseState;o=0,H=j=f=null,s=i;do{var E=s.lane&-536870913,T=E!==s.lane;if(T?(Be&E)===E:(a&E)===E){E!==0&&E===gl&&($o=!0),H!==null&&(H=H.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var ce=e,we=s;E=t;var et=n;switch(we.tag){case 1:if(ce=we.payload,typeof ce=="function"){Y=ce.call(et,Y,E);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=we.payload,E=typeof ce=="function"?ce.call(et,Y,E):ce,E==null)break e;Y=B({},Y,E);break e;case 2:ra=!0}}E=s.callback,E!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[E]:T.push(E))}else T={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},H===null?(j=H=T,f=Y):H=H.next=T,o|=E;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;T=s,s=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);H===null&&(f=Y),l.baseState=f,l.firstBaseUpdate=j,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),pa|=o,e.lanes=o,e.memoizedState=Y}}function ju(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Cu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ju(n[e],t)}var bl=p(null),yr=p(0);function Au(e,t){e=Vn,K(yr,e),K(bl,t),Vn=e|t.baseLanes}function Fo(){K(yr,Vn),K(bl,bl.current)}function Wo(){Vn=yr.current,C(bl),C(yr)}var Ft=p(null),fn=null;function sa(e){var t=e.alternate;K(dt,dt.current&1),K(Ft,e),fn===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(fn=e)}function Io(e){K(dt,dt.current),K(Ft,e),fn===null&&(fn=e)}function Eu(e){e.tag===22?(K(dt,dt.current),K(Ft,e),fn===null&&(fn=e)):ua()}function ua(){K(dt,dt.current),K(Ft,Ft.current)}function Wt(e){C(Ft),fn===e&&(fn=null),C(dt)}var dt=p(0);function br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ls(n)||is(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,ze=null,Ie=null,gt=null,vr=!1,vl=!1,Ga=!1,wr=0,pi=0,wl=null,T0=0;function ct(){throw Error(u(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function ec(e,t,n,a,l,i){return On=i,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,m.H=e===null||e.memoizedState===null?ud:gc,Ga=!1,i=n(a,l),Ga=!1,vl&&(i=_u(t,n,a,l)),zu(e),i}function zu(e){m.H=mi;var t=Ie!==null&&Ie.next!==null;if(On=0,gt=Ie=ze=null,vr=!1,pi=0,wl=null,t)throw Error(u(300));e===null||mt||(e=e.dependencies,e!==null&&dr(e)&&(mt=!0))}function _u(e,t,n,a){ze=e;var l=0;do{if(vl&&(wl=null),pi=0,vl=!1,25<=l)throw Error(u(301));if(l+=1,gt=Ie=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}m.H=dd,i=t(n,a)}while(vl);return i}function D0(){var e=m.H,t=e.useState()[0];return t=typeof t.then=="function"?hi(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ze.flags|=1024),t}function tc(){var e=wr!==0;return wr=0,e}function nc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ac(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}On=0,gt=Ie=ze=null,vl=!1,pi=wr=0,wl=null}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?ze.memoizedState=gt=e:gt=gt.next=e,gt}function ft(){if(Ie===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=gt===null?ze.memoizedState:gt.next;if(t!==null)gt=t,Ie=e;else{if(e===null)throw ze.alternate===null?Error(u(467)):Error(u(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},gt===null?ze.memoizedState=gt=e:gt=gt.next=e}return gt}function Sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hi(e){var t=pi;return pi+=1,wl===null&&(wl=[]),e=bu(wl,e,t),t=ze,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,m.H=t===null||t.memoizedState===null?ud:gc),e}function kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hi(e);if(e.$$typeof===be)return Ct(e)}throw Error(u(438,String(e)))}function lc(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ze.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Sr(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=oe;return t.index++,n}function qn(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=ft();return ic(t,Ie,e)}function ic(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=o=null,f=null,j=t,H=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(Be&Y)===Y:(On&Y)===Y){var E=j.revertLane;if(E===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===gl&&(H=!0);else if((On&E)===E){j=j.next,E===gl&&(H=!0);continue}else Y={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(s=f=Y,o=i):f=f.next=Y,ze.lanes|=E,pa|=E;Y=j.action,Ga&&n(i,Y),i=j.hasEagerState?j.eagerState:n(i,Y)}else E={lane:Y,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},f===null?(s=f=E,o=i):f=f.next=E,ze.lanes|=Y,pa|=Y;j=j.next}while(j!==null&&j!==t);if(f===null?o=i:f.next=s,!Jt(i,e.memoizedState)&&(mt=!0,H&&(n=ml,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=f,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function rc(e){var t=ft(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Jt(i,t.memoizedState)||(mt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Nu(e,t,n){var a=ze,l=ft(),i=Ge;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var o=!Jt((Ie||l).memoizedState,n);if(o&&(l.memoizedState=n,mt=!0),l=l.queue,sc(Du.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,Sl(9,{destroy:void 0},Tu.bind(null,a,l,n,t),null),nt===null)throw Error(u(349));i||(On&127)!==0||Mu(a,t,n)}return n}function Mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=Sr(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tu(e,t,n,a){t.value=n,t.getSnapshot=a,Lu(t)&&Ru(e)}function Du(e,t,n){return n(function(){Lu(t)&&Ru(e)})}function Lu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function Ru(e){var t=Da(e,2);t!==null&&Qt(t,e,2)}function oc(e){var t=Dt();if(typeof e=="function"){var n=e;if(e=n(),Ga){Rt(!0);try{n()}finally{Rt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t}function Ou(e,t,n,a){return e.baseState=n,ic(e,Ie,typeof a=="function"?a:qn)}function L0(e,t,n,a,l){if(Er(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};m.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,qu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function qu(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=m.T,o={};m.T=o;try{var s=n(l,a),f=m.S;f!==null&&f(o,s),Hu(e,t,s)}catch(j){cc(e,t,j)}finally{i!==null&&o.types!==null&&(i.types=o.types),m.T=i}}else try{i=n(l,a),Hu(e,t,i)}catch(j){cc(e,t,j)}}function Hu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Uu(e,t,a)},function(a){return cc(e,t,a)}):Uu(e,t,n)}function Uu(e,t,n){t.status="fulfilled",t.value=n,Bu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qu(e,n)))}function cc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Bu(t),t=t.next;while(t!==a)}e.action=null}function Bu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yu(e,t){return t}function Gu(e,t){if(Ge){var n=nt.formState;if(n!==null){e:{var a=ze;if(Ge){if(lt){t:{for(var l=lt,i=dn;l.nodeType!==8;){if(!i){l=null;break t}if(l=pn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){lt=pn(l.nextSibling),a=l.data==="F!";break e}}la(a)}a=!1}a&&(t=n[0])}}return n=Dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yu,lastRenderedState:t},n.queue=a,n=od.bind(null,ze,a),a.dispatch=n,a=oc(!1),i=hc.bind(null,ze,!1,a.queue),a=Dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=L0.bind(null,ze,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Xu(e){var t=ft();return Vu(t,Ie,e)}function Vu(e,t,n){if(t=ic(e,t,Yu)[0],e=jr(qn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=hi(t)}catch(o){throw o===xl?hr:o}else a=t;t=ft();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,Sl(9,{destroy:void 0},R0.bind(null,l,n),null)),[a,i,e]}function R0(e,t){e.action=t}function Qu(e){var t=ft(),n=Ie;if(n!==null)return Vu(t,n,e);ft(),t=t.memoizedState,n=ft();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Sl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ze.updateQueue,t===null&&(t=Sr(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Zu(){return ft().memoizedState}function Cr(e,t,n,a){var l=Dt();ze.flags|=e,l.memoizedState=Sl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ar(e,t,n,a){var l=ft();a=a===void 0?null:a;var i=l.memoizedState.inst;Ie!==null&&a!==null&&Po(a,Ie.memoizedState.deps)?l.memoizedState=Sl(t,i,n,a):(ze.flags|=e,l.memoizedState=Sl(1|t,i,n,a))}function Ku(e,t){Cr(8390656,8,e,t)}function sc(e,t){Ar(2048,8,e,t)}function O0(e){ze.flags|=4;var t=ze.updateQueue;if(t===null)t=Sr(),ze.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ju(e){var t=ft().memoizedState;return O0({ref:t,nextImpl:e}),function(){if((Je&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function $u(e,t){return Ar(4,2,e,t)}function Fu(e,t){return Ar(4,4,e,t)}function Wu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Iu(e,t,n){n=n!=null?n.concat([e]):null,Ar(4,4,Wu.bind(null,t,e),n)}function uc(){}function Pu(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Po(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Po(t,a[1]))return a[0];if(a=e(),Ga){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a}function dc(e,t,n){return n===void 0||(On&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=tf(),ze.lanes|=e,pa|=e,n)}function td(e,t,n,a){return Jt(n,t)?n:bl.current!==null?(e=dc(e,n,a),Jt(e,t)||(mt=!0),e):(On&42)===0||(On&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=n):(e=tf(),ze.lanes|=e,pa|=e,t)}function nd(e,t,n,a,l){var i=w.p;w.p=i!==0&&8>i?i:8;var o=m.T,s={};m.T=s,hc(e,!1,t,n);try{var f=l(),j=m.S;if(j!==null&&j(s,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var H=M0(f,a);gi(e,t,H,en(e))}else gi(e,t,a,en(e))}catch(Y){gi(e,t,{then:function(){},status:"rejected",reason:Y},en())}finally{w.p=i,o!==null&&s.types!==null&&(o.types=s.types),m.T=o}}function q0(){}function fc(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=ad(e).queue;nd(e,l,t,_,n===null?q0:function(){return ld(e),n(a)})}function ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:_},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ld(e){var t=ad(e);t.next===null&&(t=e.alternate.memoizedState),gi(e,t.next.queue,{},en())}function pc(){return Ct(Ti)}function id(){return ft().memoizedState}function rd(){return ft().memoizedState}function H0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=oa(n);var a=ca(t,e,n);a!==null&&(Qt(a,t,n),ui(a,t,n)),t={cache:Go()},e.payload=t;return}t=t.return}}function U0(e,t,n){var a=en();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Er(e)?cd(t,n):(n=Mo(e,t,n,a),n!==null&&(Qt(n,e,a),sd(n,t,a)))}function od(e,t,n){var a=en();gi(e,t,n,a)}function gi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Er(e))cd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Jt(s,o))return or(e,t,l,0),nt===null&&rr(),!1}catch{}finally{}if(n=Mo(e,t,l,a),n!==null)return Qt(n,e,a),sd(n,t,a),!0}return!1}function hc(e,t,n,a){if(a={lane:2,revertLane:Zc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Er(e)){if(t)throw Error(u(479))}else t=Mo(e,n,a,2),t!==null&&Qt(t,e,2)}function Er(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function cd(e,t){vl=vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,tl(e,n)}}var mi={readContext:Ct,use:kr,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};mi.useEffectEvent=ct;var ud={readContext:Ct,use:kr,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Ku,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cr(4194308,4,Wu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){Cr(4,2,e,t)},useMemo:function(e,t){var n=Dt();t=t===void 0?null:t;var a=e();if(Ga){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Dt();if(n!==void 0){var l=n(t);if(Ga){Rt(!0);try{n(t)}finally{Rt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=U0.bind(null,ze,e),[a.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:function(e){e=oc(e);var t=e.queue,n=od.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:uc,useDeferredValue:function(e,t){var n=Dt();return dc(n,e,t)},useTransition:function(){var e=oc(!1);return e=nd.bind(null,ze,e.queue,!0,!1),Dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ze,l=Dt();if(Ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),nt===null)throw Error(u(349));(Be&127)!==0||Mu(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ku(Du.bind(null,a,i,e),[e]),a.flags|=2048,Sl(9,{destroy:void 0},Tu.bind(null,a,i,n,t),null),n},useId:function(){var e=Dt(),t=nt.identifierPrefix;if(Ge){var n=An,a=Cn;n=(a&~(1<<32-bt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=T0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:pc,useFormState:Gu,useActionState:Gu,useOptimistic:function(e){var t=Dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hc.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:lc,useCacheRefresh:function(){return Dt().memoizedState=H0.bind(null,ze)},useEffectEvent:function(e){var t=Dt(),n={impl:e};return t.memoizedState=n,function(){if((Je&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Ct,use:kr,useCallback:Pu,useContext:Ct,useEffect:sc,useImperativeHandle:Iu,useInsertionEffect:$u,useLayoutEffect:Fu,useMemo:ed,useReducer:jr,useRef:Zu,useState:function(){return jr(qn)},useDebugValue:uc,useDeferredValue:function(e,t){var n=ft();return td(n,Ie.memoizedState,e,t)},useTransition:function(){var e=jr(qn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:hi(e),t]},useSyncExternalStore:Nu,useId:id,useHostTransitionStatus:pc,useFormState:Xu,useActionState:Xu,useOptimistic:function(e,t){var n=ft();return Ou(n,Ie,e,t)},useMemoCache:lc,useCacheRefresh:rd};gc.useEffectEvent=Ju;var dd={readContext:Ct,use:kr,useCallback:Pu,useContext:Ct,useEffect:sc,useImperativeHandle:Iu,useInsertionEffect:$u,useLayoutEffect:Fu,useMemo:ed,useReducer:rc,useRef:Zu,useState:function(){return rc(qn)},useDebugValue:uc,useDeferredValue:function(e,t){var n=ft();return Ie===null?dc(n,e,t):td(n,Ie.memoizedState,e,t)},useTransition:function(){var e=rc(qn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:hi(e),t]},useSyncExternalStore:Nu,useId:id,useHostTransitionStatus:pc,useFormState:Qu,useActionState:Qu,useOptimistic:function(e,t){var n=ft();return Ie!==null?Ou(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lc,useCacheRefresh:rd};dd.useEffectEvent=Ju;function mc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=en(),l=oa(a);l.payload=t,n!=null&&(l.callback=n),t=ca(e,l,a),t!==null&&(Qt(t,e,a),ui(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=en(),l=oa(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ca(e,l,a),t!==null&&(Qt(t,e,a),ui(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),a=oa(n);a.tag=2,t!=null&&(a.callback=t),t=ca(e,a,n),t!==null&&(Qt(t,e,n),ui(t,e,n))}};function fd(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!ni(n,a)||!ni(l,i):!0}function pd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=B({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function hd(e){ir(e)}function gd(e){console.error(e)}function md(e){ir(e)}function zr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function xd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function yc(e,t,n){return n=oa(n),n.tag=3,n.payload={element:null},n.callback=function(){zr(e,t)},n}function yd(e){return e=oa(e),e.tag=3,e}function bd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){xd(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){xd(t,n,a),typeof l!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function B0(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&hl(t,n,l,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return fn===null?Br():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===gr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Xc(e,a,l)),!1;case 22:return n.flags|=65536,a===gr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Xc(e,a,l)),!1}throw Error(u(435,n.tag))}return Xc(e,a,l),Br(),!1}if(Ge)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==qo&&(e=Error(u(422),{cause:a}),ii(cn(e,n)))):(a!==qo&&(t=Error(u(423),{cause:a}),ii(cn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=cn(a,n),l=yc(e.stateNode,a,l),Jo(e,l),st!==4&&(st=2)),!1;var i=Error(u(520),{cause:a});if(i=cn(i,n),ji===null?ji=[i]:ji.push(i),st!==4&&(st=2),t===null)return!0;a=cn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=yc(n.stateNode,a,e),Jo(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=yd(l),bd(l,e,n,a),Jo(n,l),!1}n=n.return}while(n!==null);return!1}var bc=Error(u(461)),mt=!1;function At(e,t,n,a){t.child=e===null?ku(t,null,n,a):Ya(t,e.child,n,a)}function vd(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return qa(t),a=ec(e,t,n,o,i,l),s=tc(),e!==null&&!mt?(nc(e,t,l),Hn(e,t,l)):(Ge&&s&&Ro(t),t.flags|=1,At(e,t,a,l),t.child)}function wd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Sd(e,t,i,a,l)):(e=sr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ec(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(o,a)&&e.ref===t.ref)return Hn(e,t,l)}return t.flags|=1,e=Tn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(ni(i,a)&&e.ref===t.ref)if(mt=!1,t.pendingProps=a=i,Ec(e,l))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,Hn(e,t,l)}return vc(e,t,n,a,l)}function kd(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return jd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pr(t,i!==null?i.cachePool:null),i!==null?Au(t,i):Fo(),Eu(t);else return a=t.lanes=536870912,jd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(pr(t,i.cachePool),Au(t,i),ua(),t.memoizedState=null):(e!==null&&pr(t,null),Fo(),ua());return At(e,t,l,n),t.child}function xi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jd(e,t,n,a,l){var i=Vo();return i=i===null?null:{parent:ht._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&pr(t,null),Fo(),Eu(t),e!==null&&hl(e,t,a,!0),t.childLanes=l,null}function _r(e,t){return t=Mr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Cd(e,t,n){return Ya(t,e.child,null,n),e=_r(t,t.pendingProps),e.flags|=2,Wt(t),t.memoizedState=null,e}function Y0(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ge){if(a.mode==="hidden")return e=_r(t,a),t.lanes=536870912,xi(null,e);if(Io(t),(e=lt)?(e=Hf(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=cu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return _r(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Io(t),l)if(t.flags&256)t.flags&=-257,t=Cd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(mt||hl(e,t,n,!1),l=(n&e.childLanes)!==0,mt||l){if(a=nt,a!==null&&(o=nn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Da(e,o),Qt(a,e,o),bc;Br(),t=Cd(e,t,n)}else e=i.treeContext,lt=pn(o.nextSibling),jt=t,Ge=!0,aa=null,dn=!1,e!==null&&du(t,e),t=_r(t,a),t.flags|=4096;return t}return e=Tn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Nr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,a,l){return qa(t),n=ec(e,t,n,a,void 0,l),a=tc(),e!==null&&!mt?(nc(e,t,l),Hn(e,t,l)):(Ge&&a&&Ro(t),t.flags|=1,At(e,t,n,l),t.child)}function Ad(e,t,n,a,l,i){return qa(t),t.updateQueue=null,n=_u(t,a,n,l),zu(e),a=tc(),e!==null&&!mt?(nc(e,t,i),Hn(e,t,i)):(Ge&&a&&Ro(t),t.flags|=1,At(e,t,n,i),t.child)}function Ed(e,t,n,a,l){if(qa(t),t.stateNode===null){var i=ul,o=n.contextType;typeof o=="object"&&o!==null&&(i=Ct(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Zo(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Ct(o):ul,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(mc(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&xc.enqueueReplaceState(i,i.state,null),fi(t,a,i,l),di(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,f=Xa(n,s);i.props=f;var j=i.context,H=n.contextType;o=ul,typeof H=="object"&&H!==null&&(o=Ct(H));var Y=n.getDerivedStateFromProps;H=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||j!==o)&&pd(t,i,a,o),ra=!1;var E=t.memoizedState;i.state=E,fi(t,a,i,l),di(),j=t.memoizedState,s||E!==j||ra?(typeof Y=="function"&&(mc(t,n,Y,a),j=t.memoizedState),(f=ra||fd(t,n,f,a,E,j,o))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=j),i.props=a,i.state=j,i.context=o,a=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Ko(e,t),o=t.memoizedProps,H=Xa(n,o),i.props=H,Y=t.pendingProps,E=i.context,j=n.contextType,f=ul,typeof j=="object"&&j!==null&&(f=Ct(j)),s=n.getDerivedStateFromProps,(j=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==Y||E!==f)&&pd(t,i,a,f),ra=!1,E=t.memoizedState,i.state=E,fi(t,a,i,l),di();var T=t.memoizedState;o!==Y||E!==T||ra||e!==null&&e.dependencies!==null&&dr(e.dependencies)?(typeof s=="function"&&(mc(t,n,s,a),T=t.memoizedState),(H=ra||fd(t,n,H,a,E,T,f)||e!==null&&e.dependencies!==null&&dr(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=T),i.props=a,i.state=T,i.context=f,a=H):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Nr(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ya(t,e.child,null,l),t.child=Ya(t,null,n,l)):At(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Hn(e,t,l),e}function zd(e,t,n,a){return Ra(),t.flags|=256,At(e,t,n,a),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:xu()}}function kc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function _d(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?sa(t):ua(),(e=lt)?(e=Hf(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=cu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw la(t);return is(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,l?(ua(),l=t.mode,s=Mr({mode:"hidden",children:s},l),a=La(a,l,n,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=Sc(n),a.childLanes=kc(e,o,n),t.memoizedState=wc,xi(null,a)):(sa(t),jc(t,s))}var f=e.memoizedState;if(f!==null&&(s=f.dehydrated,s!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=a.fallback,l=t.mode,a=Mr({mode:"visible",children:a.children},l),s=La(s,l,n,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Ya(t,e.child,null,n),a=t.child,a.memoizedState=Sc(n),a.childLanes=kc(e,o,n),t.memoizedState=wc,t=xi(null,a));else if(sa(t),is(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var j=o.dgst;o=j,a=Error(u(419)),a.stack="",a.digest=o,ii({value:a,source:null,stack:null}),t=Cc(e,t,n)}else if(mt||hl(e,t,n,!1),o=(n&e.childLanes)!==0,mt||o){if(o=nt,o!==null&&(a=nn(o,n),a!==0&&a!==f.retryLane))throw f.retryLane=a,Da(e,a),Qt(o,e,a),bc;ls(s)||Br(),t=Cc(e,t,n)}else ls(s)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,lt=pn(s.nextSibling),jt=t,Ge=!0,aa=null,dn=!1,e!==null&&du(t,e),t=jc(t,a.children),t.flags|=4096);return t}return l?(ua(),s=a.fallback,l=t.mode,f=e.child,j=f.sibling,a=Tn(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,j!==null?s=Tn(j,s):(s=La(s,l,n,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,xi(null,a),a=t.child,s=e.child.memoizedState,s===null?s=Sc(n):(l=s.cachePool,l!==null?(f=ht._currentValue,l=l.parent!==f?{parent:f,pool:f}:l):l=xu(),s={baseLanes:s.baseLanes|n,cachePool:l}),a.memoizedState=s,a.childLanes=kc(e,o,n),t.memoizedState=wc,xi(e.child,a)):(sa(t),n=e.child,e=n.sibling,n=Tn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function jc(e,t){return t=Mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mr(e,t){return e=$t(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Ya(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Bo(e.return,t,n)}function Ac(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Md(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=dt.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,K(dt,o),At(e,t,a,n),a=Ge?li:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,n,t);else if(e.tag===19)Nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&br(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ac(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&br(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ac(t,!0,n,null,i,a);break;case"together":Ac(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dr(e)))}function G0(e,t,n){switch(t.tag){case 3:$e(t,t.stateNode.containerInfo),ia(t,ht,e.memoizedState.cache),Ra();break;case 27:case 5:rt(t);break;case 4:$e(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(sa(t),t.flags|=128,null):(n&t.child.childLanes)!==0?_d(e,t,n):(sa(t),e=Hn(e,t,n),e!==null?e.sibling:null);sa(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(hl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Md(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(dt,dt.current),a)break;return null;case 22:return t.lanes=0,kd(e,t,n,t.pendingProps);case 24:ia(t,ht,e.memoizedState.cache)}return Hn(e,t,n)}function Td(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Ec(e,n)&&(t.flags&128)===0)return mt=!1,G0(e,t,n);mt=(e.flags&131072)!==0}else mt=!1,Ge&&(t.flags&1048576)!==0&&uu(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")To(e)?(a=Xa(e,a),t.tag=1,t=Ed(null,t,e,a,n)):(t.tag=0,t=vc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===Se){t.tag=11,t=vd(null,t,e,a,n);break e}else if(l===me){t.tag=14,t=wd(null,t,e,a,n);break e}}throw t=ve(e)||e,Error(u(306,t,""))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Xa(a,t.pendingProps),Ed(e,t,a,l,n);case 3:e:{if($e(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Ko(e,t),fi(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ia(t,ht,a),a!==i.cache&&Yo(t,[ht],n,!0),di(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zd(e,t,a,n);break e}else if(a!==l){l=cn(Error(u(424)),t),ii(l),t=zd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=pn(e.firstChild),jt=t,Ge=!0,aa=null,dn=!0,n=ku(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ra(),a===l){t=Hn(e,t,n);break e}At(e,t,a,n)}t=t.child}return t;case 26:return Nr(e,t),e===null?(n=Vf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,a=Kr($.current).createElement(n),a[ut]=t,a[_t]=e,Et(a,n,e),pt(a),t.stateNode=a):t.memoizedState=Vf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rt(t),e===null&&Ge&&(a=t.stateNode=Yf(t.type,t.pendingProps,$.current),jt=t,dn=!0,l=lt,ya(t.type)?(rs=l,lt=pn(a.firstChild)):lt=l),At(e,t,t.pendingProps.children,n),Nr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((l=a=lt)&&(a=yh(a,t.type,t.pendingProps,dn),a!==null?(t.stateNode=a,jt=t,lt=pn(a.firstChild),dn=!1,l=!0):l=!1),l||la(t)),rt(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ts(l,i)?a=null:o!==null&&ts(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ec(e,t,D0,null,null,n),Ti._currentValue=l),Nr(e,t),At(e,t,a,n),t.child;case 6:return e===null&&Ge&&((e=n=lt)&&(n=bh(n,t.pendingProps,dn),n!==null?(t.stateNode=n,jt=t,lt=null,e=!0):e=!1),e||la(t)),null;case 13:return _d(e,t,n);case 4:return $e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ya(t,null,a,n):At(e,t,a,n),t.child;case 11:return vd(e,t,t.type,t.pendingProps,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ia(t,t.type,a.value),At(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,qa(t),l=Ct(l),a=a(l),t.flags|=1,At(e,t,a,n),t.child;case 14:return wd(e,t,t.type,t.pendingProps,n);case 15:return Sd(e,t,t.type,t.pendingProps,n);case 19:return Md(e,t,n);case 31:return Y0(e,t,n);case 22:return kd(e,t,n,t.pendingProps);case 24:return qa(t),a=Ct(ht),e===null?(l=Vo(),l===null&&(l=nt,i=Go(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Zo(t),ia(t,ht,l)):((e.lanes&n)!==0&&(Ko(e,t),fi(t,null,null,n),di()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ia(t,ht,a)):(a=i.cache,ia(t,ht,a),a!==l.cache&&Yo(t,[ht],n,!0))),At(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Un(e){e.flags|=4}function zc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Ba=gr,Qo}else e.flags&=-16777217}function Dd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(rf())e.flags|=8192;else throw Ba=gr,Qo}function Tr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bl():536870912,e.lanes|=t,Al|=t)}function yi(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function X0(e,t,n){var a=t.pendingProps;switch(Oo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return it(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(ht),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pl(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ho())),it(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Un(t),i!==null?(it(t),Dd(t,i)):(it(t),zc(t,l,null,a,n))):i?i!==e.memoizedState?(Un(t),it(t),Dd(t,i)):(it(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Un(t),it(t),zc(t,l,e,a,n)),null;case 27:if(wt(t),n=$.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return it(t),null}e=J.current,pl(t)?fu(t):(e=Yf(l,a,n),t.stateNode=e,Un(t))}return it(t),null;case 5:if(wt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return it(t),null}if(i=J.current,pl(t))fu(t);else{var o=Kr($.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[ut]=t,i[_t]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Et(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Un(t)}}return it(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=$.current,pl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=jt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Nf(e.nodeValue,n)),e||la(t,!0)}else e=Kr(e).createTextNode(a),e[ut]=t,t.stateNode=e}return it(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=pl(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ut]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),e=!1}else n=Ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wt(t),t):(Wt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return it(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=pl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[ut]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),l=!1}else l=Ho(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Wt(t),t):(Wt(t),null)}return Wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tr(t,t.updateQueue),it(t),null);case 4:return Me(),e===null&&Fc(t.stateNode.containerInfo),it(t),null;case 10:return Rn(t.type),it(t),null;case 19:if(C(dt),a=t.memoizedState,a===null)return it(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)yi(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=br(e),i!==null){for(t.flags|=128,yi(a,!1),e=i.updateQueue,t.updateQueue=e,Tr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ou(n,e),n=n.sibling;return K(dt,dt.current&1|2),Ge&&Dn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Mt()>qr&&(t.flags|=128,l=!0,yi(a,!1),t.lanes=4194304)}else{if(!l)if(e=br(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Tr(t,e),yi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ge)return it(t),null}else 2*Mt()-a.renderingStartTime>qr&&n!==536870912&&(t.flags|=128,l=!0,yi(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Mt(),e.sibling=null,n=dt.current,K(dt,l?n&1|2:n&1),Ge&&Dn(t,a.treeForkCount),e):(it(t),null);case 22:case 23:return Wt(t),Wo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),n=t.updateQueue,n!==null&&Tr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&C(Ha),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(ht),it(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function V0(e,t){switch(Oo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(ht),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wt(t),null;case 31:if(t.memoizedState!==null){if(Wt(t),t.alternate===null)throw Error(u(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(dt),null;case 4:return Me(),null;case 10:return Rn(t.type),null;case 22:case 23:return Wt(t),Wo(),e!==null&&C(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(ht),null;case 25:return null;default:return null}}function Ld(e,t){switch(Oo(t),t.tag){case 3:Rn(ht),Me();break;case 26:case 27:case 5:wt(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&Wt(t);break;case 13:Wt(t);break;case 19:C(dt);break;case 10:Rn(t.type);break;case 22:case 23:Wt(t),Wo(),e!==null&&C(Ha);break;case 24:Rn(ht)}}function bi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(s){We(t,t.return,s)}}function da(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,l=t;var f=n,j=s;try{j()}catch(H){We(l,f,H)}}}a=a.next}while(a!==i)}}catch(H){We(t,t.return,H)}}function Rd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cu(t,n)}catch(a){We(e,e.return,a)}}}function Od(e,t,n){n.props=Xa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){We(e,t,a)}}function vi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){We(e,t,l)}}function En(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){We(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){We(e,t,l)}else n.current=null}function qd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){We(e,e.return,l)}}function _c(e,t,n){try{var a=e.stateNode;fh(a,e.type,n,t),a[_t]=t}catch(l){We(e,e.return,l)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=D));else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}function Dr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Dr(e,t,n),e=e.sibling;e!==null;)Dr(e,t,n),e=e.sibling}function Ud(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Et(t,a,n),t[ut]=e,t[_t]=n}catch(i){We(e,e.return,i)}}var Bn=!1,xt=!1,Tc=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,vt=null;function Q0(e,t){if(e=e.containerInfo,Pc=eo,e=Is(e),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,f=-1,j=0,H=0,Y=e,E=null;t:for(;;){for(var T;Y!==n||l!==0&&Y.nodeType!==3||(s=o+l),Y!==i||a!==0&&Y.nodeType!==3||(f=o+a),Y.nodeType===3&&(o+=Y.nodeValue.length),(T=Y.firstChild)!==null;)E=Y,Y=T;for(;;){if(Y===e)break t;if(E===n&&++j===l&&(s=o),E===i&&++H===a&&(f=o),(T=Y.nextSibling)!==null)break;Y=E,E=Y.parentNode}Y=T}n=s===-1||f===-1?null:{start:s,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(es={focusedElem:e,selectionRange:n},eo=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ce=Xa(n.type,l);e=a.getSnapshotBeforeUpdate(ce,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(we){We(n,n.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)as(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":as(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Yd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Gn(e,n),a&4&&bi(5,n);break;case 1:if(Gn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){We(n,n.return,o)}else{var l=Xa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){We(n,n.return,o)}}a&64&&Rd(n),a&512&&vi(n,n.return);break;case 3:if(Gn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cu(e,t)}catch(o){We(n,n.return,o)}}break;case 27:t===null&&a&4&&Ud(n);case 26:case 5:Gn(e,n),t===null&&a&4&&qd(n),a&512&&vi(n,n.return);break;case 12:Gn(e,n);break;case 31:Gn(e,n),a&4&&Vd(e,n);break;case 13:Gn(e,n),a&4&&Qd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=eh.bind(null,n),vh(e,n))));break;case 22:if(a=n.memoizedState!==null||Bn,!a){t=t!==null&&t.memoizedState!==null||xt,l=Bn;var i=xt;Bn=a,(xt=t)&&!i?Xn(e,n,(n.subtreeFlags&8772)!==0):Gn(e,n),Bn=l,xt=i}break;case 30:break;default:Gn(e,n)}}function Gd(e){var t=e.alternate;t!==null&&(e.alternate=null,Gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ql(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ot=null,Yt=!1;function Yn(e,t,n){for(n=n.child;n!==null;)Xd(e,t,n),n=n.sibling}function Xd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Jn,n)}catch{}switch(n.tag){case 26:xt||En(n,t),Yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||En(n,t);var a=ot,l=Yt;ya(n.type)&&(ot=n.stateNode,Yt=!1),Yn(e,t,n),_i(n.stateNode),ot=a,Yt=l;break;case 5:xt||En(n,t);case 6:if(a=ot,l=Yt,ot=null,Yn(e,t,n),ot=a,Yt=l,ot!==null)if(Yt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(n.stateNode)}catch(i){We(n,t,i)}else try{ot.removeChild(n.stateNode)}catch(i){We(n,t,i)}break;case 18:ot!==null&&(Yt?(e=ot,Of(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ll(e)):Of(ot,n.stateNode));break;case 4:a=ot,l=Yt,ot=n.stateNode.containerInfo,Yt=!0,Yn(e,t,n),ot=a,Yt=l;break;case 0:case 11:case 14:case 15:da(2,n,t),xt||da(4,n,t),Yn(e,t,n);break;case 1:xt||(En(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Od(n,t,a)),Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:xt=(a=xt)||n.memoizedState!==null,Yn(e,t,n),xt=a;break;default:Yn(e,t,n)}}function Vd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(n){We(t,t.return,n)}}}function Qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(n){We(t,t.return,n)}}function Z0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bd),t;default:throw Error(u(435,e.tag))}}function Lr(e,t){var n=Z0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=th.bind(null,e,a);a.then(l,l)}})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){ot=s.stateNode,Yt=!1;break e}break;case 5:ot=s.stateNode,Yt=!1;break e;case 3:case 4:ot=s.stateNode.containerInfo,Yt=!0;break e}s=s.return}if(ot===null)throw Error(u(160));Xd(i,o,l),ot=null,Yt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Zd(t,e),t=t.sibling}var mn=null;function Zd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),a&4&&(da(3,e,e.return),bi(3,e),da(5,e,e.return));break;case 1:Gt(t,e),Xt(e),a&512&&(xt||n===null||En(n,n.return)),a&64&&Bn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=mn;if(Gt(t,e),Xt(e),a&512&&(xt||n===null||En(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[an]||i[ut]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Et(i,a,n),i[ut]=e,pt(i),a=i;break e;case"link":var o=Kf("link","href",l).get(a+(n.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break t}}i=l.createElement(a),Et(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Kf("meta","content",l).get(a+(n.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(s,1);break t}}i=l.createElement(a),Et(i,a,n),l.head.appendChild(i);break;default:throw Error(u(468,a))}i[ut]=e,pt(i),a=i}e.stateNode=a}else Jf(l,e.type,e.stateNode);else e.stateNode=Zf(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Jf(l,e.type,e.stateNode):Zf(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&_c(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Xt(e),a&512&&(xt||n===null||En(n,n.return)),n!==null&&a&4&&_c(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),a&512&&(xt||n===null||En(n,n.return)),e.flags&32){l=e.stateNode;try{h(l,"")}catch(ce){We(e,e.return,ce)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,_c(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Tc=!0);break;case 6:if(Gt(t,e),Xt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ce){We(e,e.return,ce)}}break;case 3:if(Fr=null,l=mn,mn=Jr(t.containerInfo),Gt(t,e),mn=l,Xt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(ce){We(e,e.return,ce)}Tc&&(Tc=!1,Kd(e));break;case 4:a=mn,mn=Jr(e.stateNode.containerInfo),Gt(t,e),Xt(e),mn=a;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lr(e,a)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Or=Mt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lr(e,a)));break;case 22:l=e.memoizedState!==null;var f=n!==null&&n.memoizedState!==null,j=Bn,H=xt;if(Bn=j||l,xt=H||f,Gt(t,e),xt=H,Bn=j,Xt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||f||Bn||xt||Va(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){f=n=t;try{if(i=f.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=f.stateNode;var Y=f.memoizedProps.style,E=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(ce){We(f,f.return,ce)}}}else if(t.tag===6){if(n===null){f=t;try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(ce){We(f,f.return,ce)}}}else if(t.tag===18){if(n===null){f=t;try{var T=f.stateNode;l?qf(T,!0):qf(f.stateNode,!1)}catch(ce){We(f,f.return,ce)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Lr(e,n))));break;case 19:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lr(e,a)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Hd(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,i=Nc(e);Dr(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(h(o,""),n.flags&=-33);var s=Nc(e);Dr(e,s,o);break;case 3:case 4:var f=n.stateNode.containerInfo,j=Nc(e);Mc(e,j,f);break;default:throw Error(u(161))}}catch(H){We(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Yd(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Va(t);break;case 1:En(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Od(t,t.return,n),Va(t);break;case 27:_i(t.stateNode);case 26:case 5:En(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function Xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Xn(l,i,n),bi(4,i);break;case 1:if(Xn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(j){We(a,a.return,j)}if(a=i,l=a.updateQueue,l!==null){var s=a.stateNode;try{var f=l.shared.hiddenCallbacks;if(f!==null)for(l.shared.hiddenCallbacks=null,l=0;l<f.length;l++)ju(f[l],s)}catch(j){We(a,a.return,j)}}n&&o&64&&Rd(i),vi(i,i.return);break;case 27:Ud(i);case 26:case 5:Xn(l,i,n),n&&a===null&&o&4&&qd(i),vi(i,i.return);break;case 12:Xn(l,i,n);break;case 31:Xn(l,i,n),n&&o&4&&Vd(l,i);break;case 13:Xn(l,i,n),n&&o&4&&Qd(l,i);break;case 22:i.memoizedState===null&&Xn(l,i,n),vi(i,i.return);break;case 30:break;default:Xn(l,i,n)}t=t.sibling}}function Dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ri(n))}function Lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e))}function xn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(e,t,n,a),t=t.sibling}function Jd(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,a),l&2048&&bi(9,t);break;case 1:xn(e,t,n,a);break;case 3:xn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ri(e)));break;case 12:if(l&2048){xn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){We(t,t.return,f)}}else xn(e,t,n,a);break;case 31:xn(e,t,n,a);break;case 13:xn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?xn(e,t,n,a):wi(e,t):i._visibility&2?xn(e,t,n,a):(i._visibility|=2,kl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Dc(o,t);break;case 24:xn(e,t,n,a),l&2048&&Lc(t.alternate,t);break;default:xn(e,t,n,a)}}function kl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,s=n,f=a,j=o.flags;switch(o.tag){case 0:case 11:case 15:kl(i,o,s,f,l),bi(8,o);break;case 23:break;case 22:var H=o.stateNode;o.memoizedState!==null?H._visibility&2?kl(i,o,s,f,l):wi(i,o):(H._visibility|=2,kl(i,o,s,f,l)),l&&j&2048&&Dc(o.alternate,o);break;case 24:kl(i,o,s,f,l),l&&j&2048&&Lc(o.alternate,o);break;default:kl(i,o,s,f,l)}t=t.sibling}}function wi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:wi(n,a),l&2048&&Dc(a.alternate,a);break;case 24:wi(n,a),l&2048&&Lc(a.alternate,a);break;default:wi(n,a)}t=t.sibling}}var Si=8192;function jl(e,t,n){if(e.subtreeFlags&Si)for(e=e.child;e!==null;)$d(e,t,n),e=e.sibling}function $d(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Si&&e.memoizedState!==null&&Th(n,mn,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var a=mn;mn=Jr(e.stateNode.containerInfo),jl(e,t,n),mn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Si,Si=16777216,jl(e,t,n),Si=a):jl(e,t,n));break;default:jl(e,t,n)}}function Fd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Id(a,e)}Fd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wd(e),e=e.sibling}function Wd(e){switch(e.tag){case 0:case 11:case 15:ki(e),e.flags&2048&&da(9,e,e.return);break;case 3:ki(e);break;case 12:ki(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rr(e)):ki(e);break;default:ki(e)}}function Rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,Id(a,e)}Fd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Rr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rr(t));break;default:Rr(t)}e=e.sibling}}function Id(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ri(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var l=a.sibling,i=a.return;if(Gd(a),a===n){vt=null;break e}if(l!==null){l.return=i,vt=l;break e}vt=i}}}var K0={getCacheForType:function(e){var t=Ct(ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ct(ht).controller.signal}},J0=typeof WeakMap=="function"?WeakMap:Map,Je=0,nt=null,He=null,Be=0,Fe=0,It=null,fa=!1,Cl=!1,Rc=!1,Vn=0,st=0,pa=0,Qa=0,Oc=0,Pt=0,Al=0,ji=null,Vt=null,qc=!1,Or=0,Pd=0,qr=1/0,Hr=null,ha=null,yt=0,ga=null,El=null,Qn=0,Hc=0,Uc=null,ef=null,Ci=0,Bc=null;function en(){return(Je&2)!==0&&Be!==0?Be&-Be:m.T!==null?Zc():Xl()}function tf(){if(Pt===0)if((Be&536870912)===0||Ge){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),Pt=e}else Pt=536870912;return e=Ft.current,e!==null&&(e.flags|=32),Pt}function Qt(e,t,n){(e===nt&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(zl(e,0),ma(e,Be,Pt,!1)),In(e,n),((Je&2)===0||e!==nt)&&(e===nt&&((Je&2)===0&&(Qa|=n),st===4&&ma(e,Be,Pt,!1)),zn(e))}function nf(e,t,n){if((Je&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wn(e,t),l=a?W0(e,t):Gc(e,t,!0),i=a;do{if(l===0){Cl&&!a&&ma(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!$0(n)){l=Gc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;l=ji;var f=s.current.memoizedState.isDehydrated;if(f&&(zl(s,o).flags|=256),o=Gc(s,o,!1),o!==2){if(Rc&&!f){s.errorRecoveryDisabledLanes|=i,Qa|=i,l=4;break e}i=Vt,Vt=l,i!==null&&(Vt===null?Vt=i:Vt.push.apply(Vt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){zl(e,0),ma(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ma(a,t,Pt,!fa);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Or+300-Mt(),10<l)){if(ma(a,t,Pt,!fa),Fn(a,0,!0)!==0)break e;Qn=t,a.timeoutHandle=Lf(af.bind(null,a,n,Vt,Hr,qc,t,Pt,Qa,Al,fa,i,"Throttled",-0,0),l);break e}af(a,n,Vt,Hr,qc,t,Pt,Qa,Al,fa,i,null,-0,0)}}break}while(!0);zn(e)}function af(e,t,n,a,l,i,o,s,f,j,H,Y,E,T){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:D},$d(t,i,Y);var ce=(i&62914560)===i?Or-Mt():(i&4194048)===i?Pd-Mt():0;if(ce=Dh(Y,ce),ce!==null){Qn=i,e.cancelPendingCommit=ce(ff.bind(null,e,t,i,n,a,l,o,s,f,H,Y,null,E,T)),ma(e,i,o,!j);return}}ff(e,t,i,n,a,l,o,s,f)}function $0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Jt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,n,a){t&=~Oc,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-bt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Vi(e,n,t)}function Ur(){return(Je&6)===0?(Ai(0),!1):!0}function Yc(){if(He!==null){if(Fe===0)var e=He.return;else e=He,Ln=Oa=null,ac(e),yl=null,ci=0,e=He;for(;e!==null;)Ld(e.alternate,e),e=e.return;He=null}}function zl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,gh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qn=0,Yc(),nt=e,He=n=Tn(e.current,null),Be=t,Fe=0,It=null,fa=!1,Cl=Wn(e,t),Rc=!1,Al=Pt=Oc=Qa=pa=st=0,Vt=ji=null,qc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-bt(a),i=1<<l;t|=e[l],a&=~i}return Vn=t,rr(),n}function lf(e,t){ze=null,m.H=mi,t===xl||t===hr?(t=vu(),Fe=3):t===Qo?(t=vu(),Fe=4):Fe=t===bc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,He===null&&(st=1,zr(e,cn(t,e.current)))}function rf(){var e=Ft.current;return e===null?!0:(Be&4194048)===Be?fn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===fn:!1}function of(){var e=m.H;return m.H=mi,e===null?mi:e}function cf(){var e=m.A;return m.A=K0,e}function Br(){st=4,fa||(Be&4194048)!==Be&&Ft.current!==null||(Cl=!0),(pa&134217727)===0&&(Qa&134217727)===0||nt===null||ma(nt,Be,Pt,!1)}function Gc(e,t,n){var a=Je;Je|=2;var l=of(),i=cf();(nt!==e||Be!==t)&&(Hr=null,zl(e,t)),t=!1;var o=st;e:do try{if(Fe!==0&&He!==null){var s=He,f=It;switch(Fe){case 8:Yc(),o=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var j=Fe;if(Fe=0,It=null,_l(e,s,f,j),n&&Cl){o=0;break e}break;default:j=Fe,Fe=0,It=null,_l(e,s,f,j)}}F0(),o=st;break}catch(H){lf(e,H)}while(!0);return t&&e.shellSuspendCounter++,Ln=Oa=null,Je=a,m.H=l,m.A=i,He===null&&(nt=null,Be=0,rr()),o}function F0(){for(;He!==null;)sf(He)}function W0(e,t){var n=Je;Je|=2;var a=of(),l=cf();nt!==e||Be!==t?(Hr=null,qr=Mt()+500,zl(e,t)):Cl=Wn(e,t);e:do try{if(Fe!==0&&He!==null){t=He;var i=It;t:switch(Fe){case 1:Fe=0,It=null,_l(e,t,i,1);break;case 2:case 9:if(yu(i)){Fe=0,It=null,uf(t);break}t=function(){Fe!==2&&Fe!==9||nt!==e||(Fe=7),zn(e)},i.then(t,t);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:yu(i)?(Fe=0,It=null,uf(t)):(Fe=0,It=null,_l(e,t,i,7));break;case 5:var o=null;switch(He.tag){case 26:o=He.memoizedState;case 5:case 27:var s=He;if(o?$f(o):s.stateNode.complete){Fe=0,It=null;var f=s.sibling;if(f!==null)He=f;else{var j=s.return;j!==null?(He=j,Yr(j)):He=null}break t}}Fe=0,It=null,_l(e,t,i,5);break;case 6:Fe=0,It=null,_l(e,t,i,6);break;case 8:Yc(),st=6;break e;default:throw Error(u(462))}}I0();break}catch(H){lf(e,H)}while(!0);return Ln=Oa=null,m.H=a,m.A=l,Je=n,He!==null?0:(nt=null,Be=0,rr(),st)}function I0(){for(;He!==null&&!Yi();)sf(He)}function sf(e){var t=Td(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?Yr(e):He=t}function uf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ad(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Ad(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:ac(t);default:Ld(n,t),t=He=ou(t,Vn),t=Td(n,t,Vn)}e.memoizedProps=e.pendingProps,t===null?Yr(e):He=t}function _l(e,t,n,a){Ln=Oa=null,ac(t),yl=null,ci=0;var l=t.return;try{if(B0(e,l,t,n,Be)){st=1,zr(e,cn(n,e.current)),He=null;return}}catch(i){if(l!==null)throw He=l,i;st=1,zr(e,cn(n,e.current)),He=null;return}t.flags&32768?(Ge||a===1?e=!0:Cl||(Be&536870912)!==0?e=!1:(fa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),df(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){df(t,fa);return}e=t.return;var n=X0(t.alternate,t,Vn);if(n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);st===0&&(st=5)}function df(e,t){do{var n=V0(e.alternate,e);if(n!==null){n.flags&=32767,He=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){He=e;return}He=e=n}while(e!==null);st=6,He=null}function ff(e,t,n,a,l,i,o,s,f){e.cancelPendingCommit=null;do Gr();while(yt!==0);if((Je&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=No,Yl(e,n,i,o,s,f),e===nt&&(He=nt=null,Be=0),El=t,ga=e,Qn=n,Hc=i,Uc=l,ef=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nh(Tt,function(){return xf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=m.T,m.T=null,l=w.p,w.p=2,o=Je,Je|=4;try{Q0(e,t,n)}finally{Je=o,w.p=l,m.T=a}}yt=1,pf(),hf(),gf()}}function pf(){if(yt===1){yt=0;var e=ga,t=El,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=m.T,m.T=null;var a=w.p;w.p=2;var l=Je;Je|=4;try{Zd(t,e);var i=es,o=Is(e.containerInfo),s=i.focusedElem,f=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ws(s.ownerDocument.documentElement,s)){if(f!==null&&Co(s)){var j=f.start,H=f.end;if(H===void 0&&(H=j),"selectionStart"in s)s.selectionStart=j,s.selectionEnd=Math.min(H,s.value.length);else{var Y=s.ownerDocument||document,E=Y&&Y.defaultView||window;if(E.getSelection){var T=E.getSelection(),ce=s.textContent.length,we=Math.min(f.start,ce),et=f.end===void 0?we:Math.min(f.end,ce);!T.extend&&we>et&&(o=et,et=we,we=o);var v=Fs(s,we),x=Fs(s,et);if(v&&x&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==x.node||T.focusOffset!==x.offset)){var k=Y.createRange();k.setStart(v.node,v.offset),T.removeAllRanges(),we>et?(T.addRange(k),T.extend(x.node,x.offset)):(k.setEnd(x.node,x.offset),T.addRange(k))}}}}for(Y=[],T=s;T=T.parentNode;)T.nodeType===1&&Y.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<Y.length;s++){var U=Y[s];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}eo=!!Pc,es=Pc=null}finally{Je=l,w.p=a,m.T=n}}e.current=t,yt=2}}function hf(){if(yt===2){yt=0;var e=ga,t=El,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=m.T,m.T=null;var a=w.p;w.p=2;var l=Je;Je|=4;try{Yd(e,t.alternate,t)}finally{Je=l,w.p=a,m.T=n}}yt=3}}function gf(){if(yt===4||yt===3){yt=0,Ca();var e=ga,t=El,n=Qn,a=ef;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,El=ga=null,mf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ha=null),Gl(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Jn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=m.T,l=w.p,w.p=2,m.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var s=a[o];i(s.value,{componentStack:s.stack})}}finally{m.T=t,w.p=l}}(Qn&3)!==0&&Gr(),zn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Bc?Ci++:(Ci=0,Bc=e):Ci=0,Ai(0)}}function mf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ri(t)))}function Gr(){return pf(),hf(),gf(),xf()}function xf(){if(yt!==5)return!1;var e=ga,t=Hc;Hc=0;var n=Gl(Qn),a=m.T,l=w.p;try{w.p=32>n?32:n,m.T=null,n=Uc,Uc=null;var i=ga,o=Qn;if(yt=0,El=ga=null,Qn=0,(Je&6)!==0)throw Error(u(331));var s=Je;if(Je|=4,Wd(i.current),Jd(i,i.current,o,n),Je=s,Ai(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Jn,i)}catch{}return!0}finally{w.p=l,m.T=a,mf(e,t)}}function yf(e,t,n){t=cn(n,t),t=yc(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(In(e,2),zn(e))}function We(e,t,n){if(e.tag===3)yf(e,e,n);else for(;t!==null;){if(t.tag===3){yf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ha===null||!ha.has(a))){e=cn(n,e),n=yd(2),a=ca(t,n,2),a!==null&&(bd(n,a,t,e),In(a,2),zn(a));break}}t=t.return}}function Xc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new J0;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Rc=!0,l.add(n),e=P0.bind(null,e,t,n),t.then(e,e))}function P0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,nt===e&&(Be&n)===n&&(st===4||st===3&&(Be&62914560)===Be&&300>Mt()-Or?(Je&2)===0&&zl(e,0):Oc|=n,Al===Be&&(Al=0)),zn(e)}function bf(e,t){t===0&&(t=Bl()),e=Da(e,t),e!==null&&(In(e,t),zn(e))}function eh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bf(e,n)}function th(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),bf(e,n)}function nh(e,t){return ql(e,t)}var Xr=null,Nl=null,Vc=!1,Vr=!1,Qc=!1,xa=0;function zn(e){e!==Nl&&e.next===null&&(Nl===null?Xr=Nl=e:Nl=Nl.next=e),Vr=!0,Vc||(Vc=!0,lh())}function Ai(e,t){if(!Qc&&Vr){Qc=!0;do for(var n=!1,a=Xr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=l&~(o&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,kf(a,i))}else i=Be,i=Fn(a,a===nt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Wn(a,i)||(n=!0,kf(a,i));a=a.next}while(n);Qc=!1}}function ah(){vf()}function vf(){Vr=Vc=!1;var e=0;xa!==0&&hh()&&(e=xa);for(var t=Mt(),n=null,a=Xr;a!==null;){var l=a.next,i=wf(a,t);i===0?(a.next=null,n===null?Xr=l:n.next=l,l===null&&(Nl=n)):(n=a,(e!==0||(i&3)!==0)&&(Vr=!0)),a=l}yt!==0&&yt!==5||Ai(e),xa!==0&&(xa=0)}function wf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-bt(i),s=1<<o,f=l[o];f===-1?((s&n)===0||(s&a)!==0)&&(l[o]=Xi(s,t)):f<=t&&(e.expiredLanes|=s),i&=~s}if(t=nt,n=Be,n=Fn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Pa(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Pa(a),Gl(n)){case 2:case 8:n=_n;break;case 32:n=Tt;break;case 268435456:n=el;break;default:n=Tt}return a=Sf.bind(null,e),n=ql(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Pa(a),e.callbackPriority=2,e.callbackNode=null,2}function Sf(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gr()&&e.callbackNode!==n)return null;var a=Be;return a=Fn(e,e===nt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(nf(e,a,t),wf(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?Sf.bind(null,e):null)}function kf(e,t){if(Gr())return null;nf(e,t,!0)}function lh(){mh(function(){(Je&6)!==0?ql(Lt,ah):vf()})}function Zc(){if(xa===0){var e=gl;e===0&&(e=vn,vn<<=1,(vn&261888)===0&&(vn=256)),xa=e}return xa}function jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:R(""+e)}function Cf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function ih(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=jf((l[_t]||null).action),o=a.submitter;o&&(t=(t=o[_t]||null)?jf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var s=new nr("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var f=o?Cf(l,o):new FormData(l);fc(n,{pending:!0,data:f,method:l.method,action:i},null,f)}}else typeof i=="function"&&(s.preventDefault(),f=o?Cf(l,o):new FormData(l),fc(n,{pending:!0,data:f,method:l.method,action:i},i,f))},currentTarget:l}]})}}for(var Kc=0;Kc<_o.length;Kc++){var Jc=_o[Kc],rh=Jc.toLowerCase(),oh=Jc[0].toUpperCase()+Jc.slice(1);gn(rh,"on"+oh)}gn(tu,"onAnimationEnd"),gn(nu,"onAnimationIteration"),gn(au,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(k0,"onTransitionRun"),gn(j0,"onTransitionStart"),gn(C0,"onTransitionCancel"),gn(lu,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function Af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var s=a[o],f=s.instance,j=s.currentTarget;if(s=s.listener,f!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=j;try{i(l)}catch(H){ir(H)}l.currentTarget=null,i=f}else for(o=0;o<a.length;o++){if(s=a[o],f=s.instance,j=s.currentTarget,s=s.listener,f!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=j;try{i(l)}catch(H){ir(H)}l.currentTarget=null,i=f}}}}function Ue(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var a=e+"__bubble";n.has(a)||(Ef(t,e,2,!1),n.add(a))}function $c(e,t,n){var a=0;t&&(a|=4),Ef(n,e,a,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function Fc(e){if(!e[Qr]){e[Qr]=!0,Ji.forEach(function(n){n!=="selectionchange"&&(ch.has(n)||$c(n,!1,e),$c(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,$c("selectionchange",!1,t))}}function Ef(e,t,n,a){switch(np(t)){case 2:var l=Oh;break;case 8:l=qh;break;default:l=ds}n=l.bind(null,t,n,e),l=void 0,!je||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Wc(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===l)break;if(o===4)for(o=a.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;s!==null;){if(o=Sn(s),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){a=i=o;continue e}s=s.parentNode}}a=a.return}Oe(function(){var j=i,H=I(n),Y=[];e:{var E=iu.get(e);if(E!==void 0){var T=nr,ce=e;switch(e){case"keypress":if(Ht(n)===0)break e;case"keydown":case"keyup":T=t0;break;case"focusin":ce="focus",T=vo;break;case"focusout":ce="blur",T=vo;break;case"beforeblur":case"afterblur":T=vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=l0;break;case tu:case nu:case au:T=Zp;break;case lu:T=r0;break;case"scroll":case"scrollend":T=Yp;break;case"wheel":T=c0;break;case"copy":case"cut":case"paste":T=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Os;break;case"toggle":case"beforetoggle":T=u0}var we=(t&4)!==0,et=!we&&(e==="scroll"||e==="scrollend"),v=we?E!==null?E+"Capture":null:E;we=[];for(var x=j,k;x!==null;){var U=x;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||v===null||(U=Te(x,v),U!=null&&we.push(zi(x,U,k))),et)break;x=x.return}0<we.length&&(E=new T(E,ce,null,n,H),Y.push({event:E,listeners:we}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",E&&n!==q&&(ce=n.relatedTarget||n.fromElement)&&(Sn(ce)||ce[Pn]))break e;if((T||E)&&(E=H.window===H?H:(E=H.ownerDocument)?E.defaultView||E.parentWindow:window,T?(ce=n.relatedTarget||n.toElement,T=j,ce=ce?Sn(ce):null,ce!==null&&(et=O(ce),we=ce.tag,ce!==et||we!==5&&we!==27&&we!==6)&&(ce=null)):(T=null,ce=j),T!==ce)){if(we=Ls,U="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(we=Os,U="onPointerLeave",v="onPointerEnter",x="pointer"),et=T==null?E:_a(T),k=ce==null?E:_a(ce),E=new we(U,x+"leave",T,n,H),E.target=et,E.relatedTarget=k,U=null,Sn(H)===j&&(we=new we(v,x+"enter",ce,n,H),we.target=k,we.relatedTarget=et,U=we),et=U,T&&ce)t:{for(we=sh,v=T,x=ce,k=0,U=v;U;U=we(U))k++;U=0;for(var xe=x;xe;xe=we(xe))U++;for(;0<k-U;)v=we(v),k--;for(;0<U-k;)x=we(x),U--;for(;k--;){if(v===x||x!==null&&v===x.alternate){we=v;break t}v=we(v),x=we(x)}we=null}else we=null;T!==null&&zf(Y,E,T,we,!1),ce!==null&&et!==null&&zf(Y,et,ce,we,!0)}}e:{if(E=j?_a(j):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var Qe=Vs;else if(Gs(E))if(Qs)Qe=v0;else{Qe=y0;var he=x0}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?j&&Q(j.elementType)&&(Qe=Vs):Qe=b0;if(Qe&&(Qe=Qe(e,j))){Xs(Y,Qe,n,H);break e}he&&he(e,E,j),e==="focusout"&&j&&E.type==="number"&&j.memoizedProps.value!=null&&Kt(E,"number",E.value)}switch(he=j?_a(j):window,e){case"focusin":(Gs(he)||he.contentEditable==="true")&&(ol=he,Ao=j,ai=null);break;case"focusout":ai=Ao=ol=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Ps(Y,n,H);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":Ps(Y,n,H)}var Ne;if(So)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else rl?Bs(e,n)&&(Ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ye="onCompositionStart");Ye&&(qs&&n.locale!=="ko"&&(rl||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&rl&&(Ne=rn()):(Xe=H,ye="value"in Xe?Xe.value:Xe.textContent,rl=!0)),he=Zr(j,Ye),0<he.length&&(Ye=new Rs(Ye,e,null,n,H),Y.push({event:Ye,listeners:he}),Ne?Ye.data=Ne:(Ne=Ys(n),Ne!==null&&(Ye.data=Ne)))),(Ne=f0?p0(e,n):h0(e,n))&&(Ye=Zr(j,"onBeforeInput"),0<Ye.length&&(he=new Rs("onBeforeInput","beforeinput",null,n,H),Y.push({event:he,listeners:Ye}),he.data=Ne)),ih(Y,e,j,n,H)}Af(Y,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Te(e,n),l!=null&&a.unshift(zi(e,l,i)),l=Te(e,t),l!=null&&a.push(zi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zf(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var s=n,f=s.alternate,j=s.stateNode;if(s=s.tag,f!==null&&f===a)break;s!==5&&s!==26&&s!==27||j===null||(f=j,l?(j=Te(n,i),j!=null&&o.unshift(zi(n,j,f))):l||(j=Te(n,i),j!=null&&o.push(zi(n,j,f)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var uh=/\r\n?/g,dh=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(dh,"")}function Nf(e,t){return t=_f(t),_f(e)===t}function Pe(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||h(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&h(e,""+a);break;case"className":jn(e,"class",a);break;case"tabIndex":jn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(e,n,a);break;case"style":P(e,a,i);break;case"data":if(t!=="object"){jn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=R(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",l.name,l,null),Pe(e,t,"formEncType",l.formEncType,l,null),Pe(e,t,"formMethod",l.formMethod,l,null),Pe(e,t,"formTarget",l.formTarget,l,null)):(Pe(e,t,"encType",l.encType,l,null),Pe(e,t,"method",l.method,l,null),Pe(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=R(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=D);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=R(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),al(e,"popover",a);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":al(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=le.get(n)||n,al(e,n,a))}}function Ic(e,t,n,a,l,i){switch(n){case"style":P(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?h(e,a):(typeof a=="number"||typeof a=="bigint")&&h(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=D);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[_t]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):al(e,n,a)}}}function Et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,i,o,n,null)}}l&&Pe(e,t,"srcSet",n.srcSet,n,null),a&&Pe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var s=i=o=l=null,f=null,j=null;for(a in n)if(n.hasOwnProperty(a)){var H=n[a];if(H!=null)switch(a){case"name":l=H;break;case"type":o=H;break;case"checked":f=H;break;case"defaultChecked":j=H;break;case"value":i=H;break;case"defaultValue":s=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(u(137,t));break;default:Pe(e,t,a,H,n,null)}}Fl(e,i,s,f,j,o,l,!1);return;case"select":Ue("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:Pe(e,t,l,s,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Mn(e,!!a,t,!1):n!=null&&Mn(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:Pe(e,t,o,s,n,null)}tr(e,a,l,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(a=n[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Pe(e,t,f,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Ei.length;a++)Ue(Ei[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Pe(e,t,j,a,n,null)}return;default:if(Q(t)){for(H in n)n.hasOwnProperty(H)&&(a=n[H],a!==void 0&&Ic(e,t,H,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&Pe(e,t,s,a,n,null))}function fh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,s=null,f=null,j=null,H=null;for(T in n){var Y=n[T];if(n.hasOwnProperty(T)&&Y!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":f=Y;default:a.hasOwnProperty(T)||Pe(e,t,T,null,a,Y)}}for(var E in a){var T=a[E];if(Y=n[E],a.hasOwnProperty(E)&&(T!=null||Y!=null))switch(E){case"type":i=T;break;case"name":l=T;break;case"checked":j=T;break;case"defaultChecked":H=T;break;case"value":o=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:T!==Y&&Pe(e,t,E,T,a,Y)}}$l(e,o,s,f,j,H,i,l);return;case"select":T=o=s=E=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":T=f;default:a.hasOwnProperty(i)||Pe(e,t,i,null,a,f)}for(l in a)if(i=a[l],f=n[l],a.hasOwnProperty(l)&&(i!=null||f!=null))switch(l){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==f&&Pe(e,t,l,i,a,f)}t=s,n=o,a=T,E!=null?Mn(e,!!n,E,!1):!!a!=!!n&&(t!=null?Mn(e,!!n,t,!0):Mn(e,!!n,n?[]:"",!1));return;case"textarea":T=E=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Pe(e,t,s,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":E=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&Pe(e,t,o,l,a,i)}er(e,E,T);return;case"option":for(var ce in n)if(E=n[ce],n.hasOwnProperty(ce)&&E!=null&&!a.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Pe(e,t,ce,null,a,E)}for(f in a)if(E=a[f],T=n[f],a.hasOwnProperty(f)&&E!==T&&(E!=null||T!=null))switch(f){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Pe(e,t,f,E,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in n)E=n[we],n.hasOwnProperty(we)&&E!=null&&!a.hasOwnProperty(we)&&Pe(e,t,we,null,a,E);for(j in a)if(E=a[j],T=n[j],a.hasOwnProperty(j)&&E!==T&&(E!=null||T!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:Pe(e,t,j,E,a,T)}return;default:if(Q(t)){for(var et in n)E=n[et],n.hasOwnProperty(et)&&E!==void 0&&!a.hasOwnProperty(et)&&Ic(e,t,et,void 0,a,E);for(H in a)E=a[H],T=n[H],!a.hasOwnProperty(H)||E===T||E===void 0&&T===void 0||Ic(e,t,H,E,a,T);return}}for(var v in n)E=n[v],n.hasOwnProperty(v)&&E!=null&&!a.hasOwnProperty(v)&&Pe(e,t,v,null,a,E);for(Y in a)E=a[Y],T=n[Y],!a.hasOwnProperty(Y)||E===T||E==null&&T==null||Pe(e,t,Y,E,a,T)}function Mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ph(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,s=l.duration;if(i&&s&&Mf(o)){for(o=0,s=l.responseEnd,a+=1;a<n.length;a++){var f=n[a],j=f.startTime;if(j>s)break;var H=f.transferSize,Y=f.initiatorType;H&&Mf(Y)&&(f=f.responseEnd,o+=H*(f<s?1:(s-j)/(f-j)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pc=null,es=null;function Kr(e){return e.nodeType===9?e:e.ownerDocument}function Tf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Df(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=null;function hh(){var e=window.event;return e&&e.type==="popstate"?e===ns?!1:(ns=e,!0):(ns=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,gh=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,mh=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(e){return Rf.resolve(null).then(e).catch(xh)}:Lf;function xh(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Of(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Ll(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")_i(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_i(n);for(var i=n.firstChild;i;){var o=i.nextSibling,s=i.nodeName;i[an]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&_i(e.ownerDocument.body);n=l}while(n);Ll(t)}function qf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function as(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":as(n),Ql(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yh(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[an])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pn(e.nextSibling),e===null)break}return null}function bh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pn(e.nextSibling),e===null))return null;return e}function Hf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pn(e.nextSibling),e===null))return null;return e}function ls(e){return e.data==="$?"||e.data==="$~"}function is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rs=null;function Uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Yf(e,t,n){switch(t=Kr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function _i(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ql(e)}var hn=new Map,Gf=new Set;function Jr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zn=w.d;w.d={f:wh,r:Sh,D:kh,C:jh,L:Ch,m:Ah,X:zh,S:Eh,M:_h};function wh(){var e=Zn.f(),t=Ur();return e||t}function Sh(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?ld(t):Zn.r(e)}var Ml=typeof document>"u"?null:document;function Xf(e,t,n){var a=Ml;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Gf.has(l)||(Gf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Et(t,"link",e),pt(t),a.head.appendChild(t)))}}function kh(e){Zn.D(e),Xf("dns-prefetch",e,null)}function jh(e,t){Zn.C(e,t),Xf("preconnect",e,t)}function Ch(e,t,n){Zn.L(e,t,n);var a=Ml;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var i=l;switch(t){case"style":i=Tl(e);break;case"script":i=Dl(e)}hn.has(i)||(e=B({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ni(i))||t==="script"&&a.querySelector(Mi(i))||(t=a.createElement("link"),Et(t,"link",e),pt(t),a.head.appendChild(t)))}}function Ah(e,t){Zn.m(e,t);var n=Ml;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dl(e)}if(!hn.has(i)&&(e=B({rel:"modulepreload",href:e},t),hn.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Mi(i)))return}a=n.createElement("link"),Et(a,"link",e),pt(a),n.head.appendChild(a)}}}function Eh(e,t,n){Zn.S(e,t,n);var a=Ml;if(a&&e){var l=ta(a).hoistableStyles,i=Tl(e);t=t||"default";var o=l.get(i);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(Ni(i)))s.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(i))&&os(e,n);var f=o=a.createElement("link");pt(f),Et(f,"link",e),f._p=new Promise(function(j,H){f.onload=j,f.onerror=H}),f.addEventListener("load",function(){s.loading|=1}),f.addEventListener("error",function(){s.loading|=2}),s.loading|=4,$r(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:s},l.set(i,o)}}}function zh(e,t){Zn.X(e,t);var n=Ml;if(n&&e){var a=ta(n).hoistableScripts,l=Dl(e),i=a.get(l);i||(i=n.querySelector(Mi(l)),i||(e=B({src:e,async:!0},t),(t=hn.get(l))&&cs(e,t),i=n.createElement("script"),pt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function _h(e,t){Zn.M(e,t);var n=Ml;if(n&&e){var a=ta(n).hoistableScripts,l=Dl(e),i=a.get(l);i||(i=n.querySelector(Mi(l)),i||(e=B({src:e,async:!0,type:"module"},t),(t=hn.get(l))&&cs(e,t),i=n.createElement("script"),pt(i),Et(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Vf(e,t,n,a){var l=(l=$.current)?Jr(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Tl(n.href),n=ta(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Tl(n.href);var i=ta(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Ni(e)))&&!i._p&&(o.instance=i,o.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),i||Nh(l,e,n,o.state))),t&&a===null)throw Error(u(528,""));return o}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(n),n=ta(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Tl(e){return'href="'+kt(e)+'"'}function Ni(e){return'link[rel="stylesheet"]['+e+"]"}function Qf(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Nh(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Et(t,"link",n),pt(t),e.head.appendChild(t))}function Dl(e){return'[src="'+kt(e)+'"]'}function Mi(e){return"script[async]"+e}function Zf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,pt(a),a;var l=B({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pt(a),Et(a,"style",l),$r(a,n.precedence,e),t.instance=a;case"stylesheet":l=Tl(n.href);var i=e.querySelector(Ni(l));if(i)return t.state.loading|=4,t.instance=i,pt(i),i;a=Qf(n),(l=hn.get(l))&&os(a,l),i=(e.ownerDocument||e).createElement("link"),pt(i);var o=i;return o._p=new Promise(function(s,f){o.onload=s,o.onerror=f}),Et(i,"link",a),t.state.loading|=4,$r(i,n.precedence,e),t.instance=i;case"script":return i=Dl(n.src),(l=e.querySelector(Mi(i)))?(t.instance=l,pt(l),l):(a=n,(l=hn.get(i))&&(a=B({},n),cs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),pt(l),Et(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$r(a,n.precedence,e));return t.instance}function $r(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fr=null;function Kf(e,t,n){if(Fr===null){var a=new Map,l=Fr=new Map;l.set(n,a)}else l=Fr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[an]||i[ut]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var s=a.get(o);s?s.push(i):a.set(o,[i])}}return a}function Jf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Mh(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Th(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Tl(a.href),i=t.querySelector(Ni(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,pt(i);return}i=t.ownerDocument||t,a=Qf(a),(l=hn.get(l))&&os(a,l),i=i.createElement("link"),pt(i);var o=i;o._p=new Promise(function(s,f){o.onload=s,o.onerror=f}),Et(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Wr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ss=0;function Dh(e,t){return e.stylesheets&&e.count===0&&Pr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ss===0&&(ss=62500*ph());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ss?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ir=null;function Pr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ir=new Map,t.forEach(Lh,e),Ir=null,Wr.call(e))}function Lh(e,t){if(!(t.state.loading&4)){var n=Ir.get(e);if(n)var a=n.get(null);else{n=new Map,Ir.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=Wr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ti={$$typeof:be,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Rh(e,t,n,a,l,i,o,s,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=za(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=za(0),this.hiddenUpdates=za(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Ff(e,t,n,a,l,i,o,s,f,j,H,Y){return e=new Rh(e,t,n,o,f,j,H,Y,s),t=1,i===!0&&(t|=24),i=$t(3,null,null,t),e.current=i,i.stateNode=e,t=Go(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Zo(i),e}function Wf(e){return e?(e=ul,e):ul}function If(e,t,n,a,l,i){l=Wf(l),a.context===null?a.context=l:a.pendingContext=l,a=oa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=ca(e,a,t),n!==null&&(Qt(n,e,t),ui(n,e,t))}function Pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function us(e,t){Pf(e,t),(e=e.alternate)&&Pf(e,t)}function ep(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Qt(t,e,67108864),us(e,67108864)}}function tp(e){if(e.tag===13||e.tag===31){var t=en();t=nl(t);var n=Da(e,t);n!==null&&Qt(n,e,t),us(e,t)}}var eo=!0;function Oh(e,t,n,a){var l=m.T;m.T=null;var i=w.p;try{w.p=2,ds(e,t,n,a)}finally{w.p=i,m.T=l}}function qh(e,t,n,a){var l=m.T;m.T=null;var i=w.p;try{w.p=8,ds(e,t,n,a)}finally{w.p=i,m.T=l}}function ds(e,t,n,a){if(eo){var l=fs(a);if(l===null)Wc(e,t,a,to,n),ap(e,a);else if(Uh(l,e,t,n,a))a.stopPropagation();else if(ap(e,a),t&4&&-1<Hh.indexOf(e)){for(;l!==null;){var i=ea(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var f=1<<31-bt(o);s.entanglements[1]|=f,o&=~f}zn(i),(Je&6)===0&&(qr=Mt()+500,Ai(0))}}break;case 31:case 13:s=Da(i,2),s!==null&&Qt(s,i,2),Ur(),us(i,2)}if(i=fs(a),i===null&&Wc(e,t,a,to,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Wc(e,t,a,null,n)}}function fs(e){return e=I(e),ps(e)}var to=null;function ps(e){if(to=null,e=Sn(e),e!==null){var t=O(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=X(t),e!==null)return e;e=null}else if(n===31){if(e=L(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return to=e,null}function np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ho()){case Lt:return 2;case _n:return 8;case Tt:case Aa:return 32;case el:return 268435456;default:return 32}default:return 32}}var hs=!1,ba=null,va=null,wa=null,Di=new Map,Li=new Map,Sa=[],Hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ap(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Ri(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ea(t),t!==null&&ep(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Uh(e,t,n,a,l){switch(t){case"focusin":return ba=Ri(ba,e,t,n,a,l),!0;case"dragenter":return va=Ri(va,e,t,n,a,l),!0;case"mouseover":return wa=Ri(wa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Di.set(i,Ri(Di.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Li.set(i,Ri(Li.get(i)||null,e,t,n,a,l)),!0}return!1}function lp(e){var t=Sn(e.target);if(t!==null){var n=O(t);if(n!==null){if(t=n.tag,t===13){if(t=X(n),t!==null){e.blockedOn=t,Qi(e.priority,function(){tp(n)});return}}else if(t===31){if(t=L(n),t!==null){e.blockedOn=t,Qi(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);q=a,n.target.dispatchEvent(a),q=null}else return t=ea(n),t!==null&&ep(t),e.blockedOn=n,!1;t.shift()}return!0}function ip(e,t,n){no(e)&&n.delete(t)}function Bh(){hs=!1,ba!==null&&no(ba)&&(ba=null),va!==null&&no(va)&&(va=null),wa!==null&&no(wa)&&(wa=null),Di.forEach(ip),Li.forEach(ip)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,hs||(hs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Bh)))}var lo=null;function rp(e){lo!==e&&(lo=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){lo===e&&(lo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(ps(a||n)===null)continue;break}var i=ea(n);i!==null&&(e.splice(t,3),t-=3,fc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ll(e){function t(f){return ao(f,e)}ba!==null&&ao(ba,e),va!==null&&ao(va,e),wa!==null&&ao(wa,e),Di.forEach(t),Li.forEach(t);for(var n=0;n<Sa.length;n++){var a=Sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sa.length&&(n=Sa[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&Sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[_t]||null;if(typeof i=="function")o||rp(n);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[_t]||null)s=o.formAction;else if(ps(l)!==null)continue}else s=o.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),rp(n)}}}function op(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function gs(e){this._internalRoot=e}io.prototype.render=gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=en();If(n,a,e,t,null,null)},io.prototype.unmount=gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;If(e.current,2,null,e,null,null),Ur(),t[Pn]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sa.length&&t!==0&&t<Sa[n].priority;n++);Sa.splice(n,0,e),n===0&&lp(e)}};var cp=g.version;if(cp!=="19.2.1")throw Error(u(527,cp,"19.2.1"));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=S(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Jn=ro.inject(Yh),St=ro}catch{}}return qi.createRoot=function(e,t){if(!y(e))throw Error(u(299));var n=!1,a="",l=hd,i=gd,o=md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ff(e,1,!1,null,null,n,a,null,l,i,o,op),e[Pn]=t.current,Fc(e),new gs(t)},qi.hydrateRoot=function(e,t,n){if(!y(e))throw Error(u(299));var a=!1,l="",i=hd,o=gd,s=md,f=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),t=Ff(e,1,!0,t,n??null,a,l,f,i,o,s,op),t.context=Wf(null),n=t.current,a=en(),a=nl(a),l=oa(a),l.callback=null,ca(n,l,a),n=a,t.current.lanes=n,In(t,n),zn(t),e[Pn]=t.current,Fc(e),new io(t)},qi.version="19.2.1",qi}var bp;function l2(){if(bp)return bs.exports;bp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(g){console.error(g)}}return c(),bs.exports=a2(),bs.exports}var i2=l2();const vp=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),r2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),o2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.101c.119-1.486.259-3.245 1.303-4.595C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06",clipRule:"evenodd"})}),c2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",d:"M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"})}),s2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",d:"M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"})}),wp=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.42c0 .417.226.651.621.651h1.187c1.28 0 2.036-.791 2.036-2.145 0-1.353-.753-2.082-2.036-2.082H7.357c-.395 0-.62.234-.62.65zm1.632-.336h-.39V11.26h.39c.595 0 .946.384.946 1.095 0 .78-.325 1.158-.946 1.158m2.698.41c0 .416.226.65.621.65.396 0 .622-.234.622-.65v-.92h1.113c.316 0 .51-.17.51-.466s-.2-.466-.51-.466h-1.113v-.808h1.239c.328 0 .548-.179.548-.495 0-.317-.214-.495-.548-.495h-1.86c-.396 0-.622.234-.622.65z",clipRule:"evenodd"})}),Sp=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-4 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M11 14.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),u2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 0 1-1.54 0v-5.351H5.19v5.351a.77.77 0 1 1-1.54 0V5.673a.77.77 0 0 1 .77-.77",clipRule:"evenodd"})}),d2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061",clipRule:"evenodd"})}),ks=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25",clipRule:"evenodd"})}),f2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z",clipRule:"evenodd"})}),p2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z",clipRule:"evenodd"})});var Rl=Rp();const h2=["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net"];function Ui(c){const g=c.match(/^https?:\/\/([\w.-]*\.)?jsdelivr\.net(\/gh\/.*)$/i);if(!g)return[c];const d=g[2];return h2.map(u=>u+d)}const yn=c=>{const g=Math.floor(c/60),d=Math.floor(c%60);return`${g}:${String(d).padStart(2,"0")}`},g2=({meta:c,title:g="听力音频"})=>{const d=b.useRef(null),u=b.useMemo(()=>{const N=Ui(c.src??""),ae=(c.srcs??[]).flatMap(ve=>Ui(ve));return[...N,...ae.filter(ve=>!N.includes(ve))]},[c.src,c.srcs]),[y,O]=b.useState(0),X=b.useMemo(()=>{const N=u[y]??u[0]??"";return N.startsWith("/")||/^https?:/.test(N)?N:`${window.location.origin}${N.replace(/^\.?\//,"/")}`},[u,y]),L=()=>{O(N=>N<u.length-1?N+1:N)},[z,S]=b.useState(0),[V,B]=b.useState(!1),[W,ue]=b.useState(1),re=c.parts,ee=c.questionTimes??{},de=c.segments??[],se=!!(re!=null&&re.length),ne=b.useMemo(()=>se?c.duration||0:de.length?de[de.length-1].end:0,[se,c.duration,de]);b.useEffect(()=>{const N=d.current;if(!N)return;const ae=()=>S(N.currentTime),ve=()=>B(!1);return N.addEventListener("timeupdate",ae),N.addEventListener("ended",ve),()=>{N.removeEventListener("timeupdate",ae),N.removeEventListener("ended",ve)}},[]);const be=b.useCallback(()=>{const N=d.current;N&&(N.paused?(N.play(),B(!0)):(N.pause(),B(!1)))},[]),Se=b.useCallback(N=>{const ae=d.current;ae&&(ae.currentTime=Math.max(0,Math.min(N,ae.duration||N)),S(ae.currentTime))},[]),ke=b.useCallback(N=>ne>0?Math.min(100,Math.max(0,N/ne*100)):0,[ne]),ge=b.useRef(null),me=b.useCallback(N=>{const ae=ge.current;if(!ae||ne<=0)return;const ve=ae.getBoundingClientRect(),De=Math.min(1,Math.max(0,(N.clientX-ve.left)/ve.width));Se(De*ne)},[Se,ne]),_e=b.useCallback(()=>{const N=Array.from(document.querySelectorAll(".exam-content-root h2")).find(ae=>/Part II|Listening/i.test(ae.textContent||""));N==null||N.scrollIntoView({behavior:"smooth",block:"start"})},[]);b.useEffect(()=>{if(!se)return;const N=ae=>{const ve=ae.detail??{},De=typeof ve.time=="number"?ve.time:ve.no!=null?ee[ve.no]:void 0;if(De==null)return;_e(),Se(De);const m=d.current;m&&(m.play(),B(!0))};return window.addEventListener("cet:lp2-jump",N),()=>window.removeEventListener("cet:lp2-jump",N)},[se,ee,Se,_e]);const[te,oe]=b.useState(0);b.useEffect(()=>{const N=ge.current;if(!N)return;const ae=()=>oe(N.clientWidth);ae();const ve=new ResizeObserver(ae);return ve.observe(N),()=>ve.disconnect()},[se]);const ie=N=>{var ae;return((ae=c.labels)==null?void 0:ae[N])??`第 ${N+1} 段`};if(!c.src)return null;if(se&&re){const N=ke(z),ae=Object.entries(ee).map(([_,G])=>({no:_,x:Number(G)/(ne||1)*te}));ae.sort((_,G)=>_.x-G.x);const ve=1;let De=-1/0;const m=ae.map(_=>{const G=_.no.length*4+2,Z=Math.max(0,De+ve-(_.x-G/2));return De=_.x+Z+G/2,{no:_.no,cx:_.x+Z}}),w=(()=>{const _=(re??[]).map((C,K)=>{const J=K+1<re.length?re[K+1].start:ne,pe=C.start/(ne||1)*100,$=J/(ne||1)*100;return{label:C.label,start:C.start,mid:(pe+$)/2}}),G=C=>Math.max(24,C.length*5.4+8)/(te||1)*100,Z=1.2;let p=-1/0;return _.map(C=>{const K=G(C.label),J=Math.max(K/2,C.mid+Math.max(0,p+Z-(C.mid-K/2)));return p=J+K/2,{...C,mid:Math.min(J,100-K/2)}})})();return r.jsxs("div",{className:"lp2",children:[r.jsx("audio",{ref:d,src:X,preload:"metadata",onError:L}),r.jsx("button",{type:"button",className:"lp2-play",onClick:be,"aria-label":V?"暂停":"播放",children:V?"❚❚":"▶"}),r.jsxs("div",{className:"lp2-times",children:[r.jsx("span",{className:"lp2-cur",children:yn(z)}),r.jsx("span",{className:"lp2-total",children:yn(ne)})]}),r.jsxs("div",{className:"lp2-mid",children:[r.jsxs("div",{className:"lp2-labels",children:[re[0]&&re[0].start>3&&r.jsx("button",{type:"button",className:"lp2-part-label is-intro",style:{left:`${ke(re[0].start)/2}%`},onClick:()=>Se(0),title:`念题目 ${yn(0)} - ${yn(re[0].start)}`,children:"念题"}),w.map(_=>r.jsx("button",{type:"button",className:"lp2-part-label",style:{left:`${_.mid}%`},onClick:()=>Se(_.start),title:`${_.label} ${yn(_.start)}`,children:_.label},_.label))]}),r.jsxs("div",{className:"lp2-track",ref:ge,onClick:me,role:"slider","aria-label":"播放进度","aria-valuemin":0,"aria-valuemax":ne,"aria-valuenow":Math.round(z),children:[re[0]&&re[0].start>3&&r.jsx("span",{className:"lp2-segblock is-intro",style:{left:"2px",width:`calc(${ke(re[0].start)}% - 4px)`}},"seg-intro"),re.map((_,G)=>{const Z=G+1<re.length?re[G+1].start:ne;if(Z<=_.start)return null;const p=ke(_.start),C=ke(Z)-ke(_.start);return r.jsx("span",{className:"lp2-segblock",style:{left:`calc(${p}% + 2px)`,width:`calc(${C}% - 4px)`}},`seg-${_.label}`)}),r.jsx("div",{className:"lp2-glow",style:{width:`${N}%`}}),m.map(_=>r.jsx("span",{className:"lp2-mark",style:{left:`${_.cx}px`}},`mark-${_.no}`)),r.jsx("div",{className:"lp2-cursor",style:{left:`${N}%`}}),m.map(_=>r.jsx("button",{type:"button",className:"lp2-q",style:{left:`${_.cx}px`},onClick:G=>{G.stopPropagation(),Se(ee[_.no])},title:`第 ${_.no} 题 ${yn(ee[_.no])}`,children:_.no},`q-${_.no}`))]})]}),r.jsx("select",{className:"lp2-rate",value:W,onChange:_=>{const G=Number(_.target.value);ue(G),d.current&&(d.current.playbackRate=G)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(_=>r.jsxs("option",{value:_,children:[_,"x"]},_))}),r.jsx("button",{type:"button",className:"lp2-trans",onClick:_e,children:"听力原文"})]})}return r.jsxs("div",{className:"lp-wrap",children:[r.jsx("audio",{ref:d,src:X,preload:"metadata",onError:L}),r.jsxs("div",{className:"lp-head",children:[r.jsx("button",{type:"button",className:"lp-play",onClick:be,"aria-label":V?"暂停":"播放",children:V?"❚❚":"▶"}),r.jsx("span",{className:"lp-title",children:g}),r.jsxs("span",{className:"lp-time",children:[yn(z)," / ",yn(ne)]}),r.jsx("select",{className:"lp-rate",value:W,onChange:N=>{const ae=Number(N.target.value);ue(ae),d.current&&(d.current.playbackRate=ae)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(N=>r.jsxs("option",{value:N,children:[N,"x"]},N))})]}),r.jsx("div",{className:"lp-segs",children:de.map((N,ae)=>{const ve=z>=N.end,De=z>=N.start&&z<N.end;return r.jsxs("button",{type:"button",className:`lp-seg${ve?" is-done":""}${De?" is-active":""}`,style:{flexGrow:Math.max(.5,N.dur)},onClick:()=>Se(N.start),title:`${ie(ae)} ${yn(N.start)} - ${yn(N.end)}`,"aria-label":`跳转到${ie(ae)}`,children:[r.jsx("span",{className:"lp-seg-bar"}),r.jsx("span",{className:"lp-seg-name",children:ie(ae)}),r.jsx("span",{className:"lp-seg-time",children:yn(N.start)})]},`${N.start}-${ae}`)})}),r.jsx("input",{className:"lp-scrub",type:"range",min:0,max:ne||1,step:.1,value:Math.min(z,ne||0),onChange:N=>Se(Number(N.target.value)),"aria-label":"播放进度"})]})};function m2(c){if(typeof DOMParser>"u")return c;const g=new DOMParser().parseFromString(c,"text/html");return g.querySelectorAll("script, style, iframe, object, embed, link, meta, base").forEach(d=>d.remove()),g.querySelectorAll("*").forEach(d=>{Array.from(d.attributes).forEach(u=>{const y=u.name.toLowerCase(),O=u.value.trim().toLowerCase();y.startsWith("on")&&d.removeAttribute(u.name),(y==="href"||y==="src")&&O.startsWith("javascript:")&&d.removeAttribute(u.name)})}),g.body.innerHTML}const kp="background-color: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;",x2="background-color: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1.5rem 0;",y2="background: repeating-linear-gradient(to bottom, transparent, transparent 33px, #d0d7de 33px, #d0d7de 34px); padding: 1rem 1.25rem; border: 1px solid #d0d7de; border-radius: 8px; margin: 1rem 0 1.5rem;",b2=(c,g)=>`<div class="question"><p><strong>${c}.</strong> ${g}</p></div>`,v2=c=>`<div class="question"><p><strong>${c}.</strong></p><div class="options">`+["A","B","C","D"].map(g=>`<div class="option"><strong>${g})</strong> （待补入选项）</div>`).join("")+"</div></div>",Za=(c,g)=>Array.from({length:g-c+1},(d,u)=>v2(c+u)).join(""),Ka=(c,g,d)=>`<p><strong>Questions ${c} to ${g} are based on the ${d} you have just heard.</strong></p>`,jp=c=>`<div style="${y2}">`+Array.from({length:c},()=>"<p>&nbsp;</p>").join("")+"</div>",js={"cet6-2025-12-1":"Living in an increasingly competitive world, college students should better prepare themselves to confront various challenges.","cet6-2025-12-2":"While striving for the Chinese Dream, young people enjoy more opportunities to realize their self-worth.","cet6-2025-12-3":"It is believed that teachers can exert a profound influence on their students' academic pursuit and personal development.","cet6-2025-06-1":"As social media is used more and more extensively, there is a growing awareness of the importance of using it properly and responsibly.","cet6-2025-06-2":"As requirements for job applications are getting increasingly higher, college students ought to be better prepared for their future career.","cet6-2025-06-3":"With the increasing application of AI technology, there is a growing concern that it may negatively impact human creativity."},w2=c=>{if(!c)return;if(js[c])return js[c];const g=c.match(/^(cet\d)-(\d{4})-(\d{2})-set(\d)$/);return g?js[`${g[1]}-${g[2]}-${g[3]}-${g[4]}`]:void 0},S2=(c,g=["150","200"])=>{const d="&emsp;&emsp;",u=z=>`<em>${z}</em>`,[y,O]=g,X=c?`For this part, you are allowed 30 minutes to write an essay that begins with the sentence &ldquo;<strong>${c}</strong>&rdquo; You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least <u>${y}</u> words but no more than <u>${O}</u> words.`:`For this part, you are allowed 30 minutes to write an essay. You should write at least <u>${y}</u> words but no more than <u>${O}</u> words.`,L=c?`${d}<u><strong>You should copy the sentence given in quotes at the beginning of your essay.</strong></u>`:"";return'<p class="pd-write-dir"><strong>Directions:</strong>'+u(X)+(L?`<br>
${u(L)}`:"")+"</p>"},Ja={convA:"In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convB:"In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convC:"In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",banked:"In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on <strong>Answer Sheet 2</strong> with a single line through the centre. You may not use any of the words in the bank more than once.",matching:"In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on <strong>Answer Sheet 2</strong>.",careful:"There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A, B, C and D. You should decide on the best choice and mark the corresponding letter on <strong>Answer Sheet 2</strong> with a single line through the centre.",translation:"For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on <strong>Answer Sheet 2</strong>."},$a=c=>`<p class="pd-dir"><strong>Directions:</strong><em>${c}</em></p>`,k2=c=>{const d=Math.floor(10/c),u=10%c,y=[];let O=26;for(let X=0;X<c;X++){const L=d+(X<u?1:0);y.push([O,O+L-1]),O+=L}return y},j2=(c,g,d)=>{const u=Array.from({length:g-c+1},(y,O)=>`<span class="blank" data-blank="${c+O}">${c+O}</span>`);return`<p class="pd-passage">Paragraph ${d} — to be imported, with `+u.join(" , ")+" in the passage.</p>"},Cp="ABCDEFGHIJKLMNOPQRSTUVWXYZ",C2=c=>Array.from({length:Math.min(Math.max(c,1),Cp.length)},(g,d)=>`<p><strong>${Cp[d]}.</strong> （待导入段落文本）</p>`).join(""),Hi=(c,g)=>`<div class="question"><p><strong>${c}.</strong> ${g}</p><div class="options">`+["A","B","C","D"].map(d=>`<div class="option"><strong>${d})</strong> （待补入选项）</div>`).join("")+"</div></div>",A2=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],E2=c=>A2[c]??`No.${c+1}`,z2=c=>{const g=Math.min(Math.max(c||2,1),10),d=[];for(let u=0;u<g;u++){const y=46+u*5,O=y+4;d.push(`<p><strong>Passage ${E2(u)}</strong></p>`,`<p><strong>Questions ${y} to ${O} are based on the following passage.</strong></p>`,'<p class="pd-passage">（文章待导入）</p>',Hi(String(y),"What is the main idea of the passage?"),Hi(String(y+1),"According to Paragraph 1, what can be inferred?"),Hi(String(y+2),"What does the author think of the practice?"),Hi(String(y+3),"Why does the writer mention the case mentioned?"),Hi(String(O),"What would the author most probably suggest?"))}return d.join("")},_2=c=>{const g=c.writing||"（待补入写作主题）",d=c.translation||"（待补入翻译段落）",u=c.readingFocus??[],y=c.matchParas??8,O=c.bankedGroups??2,X=c.carefulPassages??2;return["<h2>Part I Writing (30 minutes)</h2>",S2(w2(c.paperId),c.type==="四级"?["120","180"]:["150","200"]),`<div style="${kp}"><h3 style="margin-top:0;">写作提示：</h3><ul style="padding-left:20px;"><li>主题：${g}</li>`+(u.length?u.slice(0,3).map(L=>`<li>${L}</li>`).join(""):"<li>立意与结构</li><li>论据与例证</li><li>语言与衔接</li>")+"</ul></div>",jp(10),"<h2>Part II Listening Comprehension (25 minutes)</h2>",'<h3 class="pd-sec">Section A - Conversations</h3>',$a(Ja.convA),Ka(1,4,"conversation"),Za(1,4),Ka(5,8,"conversation"),Za(5,8),'<h3 class="pd-sec">Section B - Passages</h3>',$a(Ja.convB),Ka(9,11,"passage"),Za(9,11),Ka(12,15,"passage"),Za(12,15),'<h3 class="pd-sec">Section C - Lectures</h3>',$a(Ja.convC),Ka(16,18,"recording"),Za(16,18),Ka(19,21,"recording"),Za(19,21),Ka(22,25,"recording"),Za(22,25),"<h2>Part III Reading Comprehension (40 minutes)</h2>",'<h3 class="pd-break-sec">Section A - Banked Cloze</h3>',$a(Ja.banked),k2(O).map(([L,z],S)=>j2(L,z,S+1)).join(""),`<div style="${kp}"><h3 style="margin-top:0;">词库 Word Bank</h3><ul class="pd-wordbank">`+"ABCDEFGHIJKLMNO".split("").map(L=>`<li>${L}. ______</li>`).join("")+"</ul></div>",'<h3 class="pd-break-sec">Section B - Matching</h3>',$a(Ja.matching),C2(y),"<p><strong>Statement list:</strong></p>",...Array.from({length:10},(L,z)=>b2(String(36+z),"Which paragraph does the statement below refer to?")),'<h3 class="pd-break-sec">Section C - Careful Reading</h3>',$a(Ja.careful),...z2(X),"<h2>Part IV Translation (30 minutes)</h2>",$a(Ja.translation),`<div style="${x2}"><p style="line-height:1.8;"><strong>翻译原文（主题：${d}）：</strong></p><p style="line-height:1.8;">（原文待补入）</p></div>`,"<p><strong>译文作答区：</strong></p>",jp(12)].join("")},Op=`<svg
    width="36"
    height="60"
    viewBox="0 0 36 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_5310_64454)">
      <path
        d="M8 38.8965L12.2828 37.4689V106.538H8V38.8965Z"
        fill="currentColor"
      />
      <path
        d="M8 38.8965L12.2828 37.4689V106.538H8V38.8965Z"
        fill="white"
        fill-opacity="0.1"
      />
      <path
        d="M12.2832 36.993H17.5177V106.538H12.2832V36.993Z"
        fill="currentColor"
      />
      <path
        d="M17.5176 36.993H22.7521V106.538H17.5176V36.993Z"
        fill="currentColor"
      />
      <path
        d="M17.5176 36.993H22.7521V106.538H17.5176V36.993Z"
        fill="black"
        fill-opacity="0.1"
      />
      <path
        d="M22.752 30.9448L27.0347 38.8965V106.538H22.752V30.9448Z"
        fill="currentColor"
      />
      <path
        d="M22.752 30.9448L27.0347 38.8965V106.538H22.752V30.9448Z"
        fill="black"
        fill-opacity="0.2"
      />
      <path
        d="M16.5909 2.88078C16.8233 1.90625 18.2099 1.90623 18.4423 2.88075L19.896 8.97414L22.2755 18.9483L27.0345 38.8965L23.9871 38.0231C23.1982 37.7969 22.3511 37.9039 21.6431 38.3189L18.023 40.4414C17.7107 40.6245 17.3238 40.6245 17.0115 40.4414L13.0218 38.1023C12.5499 37.8256 11.9851 37.7543 11.4592 37.905L8 38.8965L12.7583 18.9483L15.1374 8.97414L16.5909 2.88078Z"
        fill="#F1F1F1"
      />
      <path
        d="M16.5909 2.88078C16.8233 1.90625 18.2099 1.90623 18.4423 2.88075L19.896 8.97414L22.2755 18.9483L27.0345 38.8965L23.9871 38.0231C23.1982 37.7969 22.3511 37.9039 21.6431 38.3189L18.023 40.4414C17.7107 40.6245 17.3238 40.6245 17.0115 40.4414L13.0218 38.1023C12.5499 37.8256 11.9851 37.7543 11.4592 37.905L8 38.8965L12.7583 18.9483L15.1374 8.97414L16.5909 2.88078Z"
        fill="url(#paint0_linear_5310_64454)"
        fill-opacity="0.1"
      />
      <g filter="url(#filter1_b_5310_64454)">
        <path
          d="M16.7391 2.26209C16.9345 1.44293 18.1 1.44293 18.2954 2.26209L20.3725 10.969H14.6621L16.7391 2.26209Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_5310_64454"
        x="0"
        y="-5"
        width="35.0352"
        height="124"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5310_64454"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5310_64454"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_5310_64454"
        x="12.7587"
        y="-0.255743"
        width="9.51686"
        height="13.1282"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.951724" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_5310_64454"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_5310_64454"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5310_64454"
        x1="22.1949"
        y1="19.2552"
        x2="11.0983"
        y2="21.5941"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="0.3125" stop-opacity="0" />
        <stop offset="1" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,qp=`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="63"
    viewBox="0 0 29 63"
    fill="none"
  >
    <g filter="url(#filter0_d_4665_35356)">
      <g filter="url(#filter1_i_4665_35356)">
        <path
          d="M11.4922 5.7205C11.4922 5.2902 11.7675 4.90814 12.1756 4.77193L16.1689 3.43934C16.8165 3.22323 17.4855 3.70522 17.4855 4.38792V12H11.4922V5.7205Z"
          fill="currentColor"
        />
      </g>
      <rect x="4.5" y="32.5" width="20" height="75.5" fill="#F3F3F3" />
      <rect
        x="4.5"
        y="32.5"
        width="20"
        height="75.5"
        fill="url(#paint0_linear_4665_35356)"
        fill-opacity="0.1"
      />
      <path
        d="M9.24747 11.5H19.7525V13.3774C19.7525 19.0605 20.9635 24.6784 23.3049 29.8568L24.5 32.5H4.5L5.69508 29.8568C8.03645 24.6784 9.24747 19.0605 9.24747 13.3774V11.5Z"
        fill="#FAFAFA"
      />
      <path
        d="M9.24747 11.5H19.7525V13.3774C19.7525 19.0605 20.9635 24.6784 23.3049 29.8568L24.5 32.5H4.5L5.69508 29.8568C8.03645 24.6784 9.24747 19.0605 9.24747 13.3774V11.5Z"
        fill="url(#paint1_linear_4665_35356)"
        fill-opacity="0.1"
      />
      <rect x="4.5" y="37" width="20" height="8" fill="currentColor" />
      <rect
        x="4.5"
        y="37"
        width="20"
        height="8"
        fill="url(#paint2_linear_4665_35356)"
        fill-opacity="0.2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_4665_35356"
        x="0.5"
        y="0"
        width="28"
        height="116"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4665_35356"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4665_35356"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_i_4665_35356"
        x="11.4922"
        y="3.38721"
        width="5.99414"
        height="8.61279"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_4665_35356"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4665_35356"
        x1="4.5"
        y1="69.1558"
        x2="24.5"
        y2="69.1558"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity="0" />
        <stop offset="0.53" stop-opacity="0" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4665_35356"
        x1="8.38889"
        y1="23.5"
        x2="20.6608"
        y2="21.5398"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.112839" stop-opacity="0" />
        <stop offset="0.634555" stop-opacity="0" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_4665_35356"
        x1="4.5"
        y1="41"
        x2="24.5"
        y2="41"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-opacity="0" />
        <stop offset="0.835" stop-opacity="0.99" />
        <stop offset="1" stop-opacity="0.77" />
      </linearGradient>
    </defs>
  </svg>`,N2=`<svg
  width="44"
  height="49"
  viewBox="0 0 44 49"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="edgeless-eraser-icon"
>
  <g filter="url(#filter0_d_5310_64451)">
    <rect x="6" y="2" width="32" height="59" rx="5.75" fill="#F1F1F1" />
    <rect x="6.5" y="2.5" width="31" height="58" rx="5.25" stroke="#E3E2E4" />
  </g>
  <g filter="url(#filter1_f_5310_64451)">
    <rect
      x="36.2002"
      y="4.44995"
      width="18.4"
      height="3.45"
      rx="1.725"
      transform="rotate(90 36.2002 4.44995)"
      fill="white"
      fill-opacity="0.78"
    />
  </g>
  <g filter="url(#filter2_f_5310_64451)">
    <path
      d="M4 60H40V22C40 18.6863 37.3137 16 34 16H10C6.68629 16 4 18.6863 4 22V60Z"
      fill="#343434"
      fill-opacity="0.22"
    />
  </g>
  <path
    d="M16.5 16.5H11H9.37046C8.79521 16.5 8.29403 16.8921 8.15566 17.4505L8.14174 17.5067C7.93847 18.3269 7.27583 18.9534 6.44553 19.1105C5.89708 19.2142 5.5 19.6934 5.5 20.2516V21.75V27.5V39V61.5H16.5V16.5Z"
    fill="#173654"
  />
  <path
    d="M16.5 16.5H11H9.37046C8.79521 16.5 8.29403 16.8921 8.15566 17.4505L8.14174 17.5067C7.93847 18.3269 7.27583 18.9534 6.44553 19.1105C5.89708 19.2142 5.5 19.6934 5.5 20.2516V21.75V27.5V39V61.5H16.5V16.5Z"
    fill="url(#paint0_linear_5310_64451)"
    fill-opacity="0.2"
  />
  <path
    d="M16.5 16.5H11H9.37046C8.79521 16.5 8.29403 16.8921 8.15566 17.4505L8.14174 17.5067C7.93847 18.3269 7.27583 18.9534 6.44553 19.1105C5.89708 19.2142 5.5 19.6934 5.5 20.2516V21.75V27.5V39V61.5H16.5V16.5Z"
    stroke="#E7E7E7"
  />
  <path
    d="M27.5 16.5H33H34.6295C35.2048 16.5 35.706 16.8921 35.8443 17.4505L35.8583 17.5067C36.0615 18.3269 36.7242 18.9534 37.5545 19.1105C38.1029 19.2142 38.5 19.6934 38.5 20.2516V21.75V27.5V39V61.5H27.5V16.5Z"
    fill="#1E96EB"
  />
  <path
    d="M27.5 16.5H33H34.6295C35.2048 16.5 35.706 16.8921 35.8443 17.4505L35.8583 17.5067C36.0615 18.3269 36.7242 18.9534 37.5545 19.1105C38.1029 19.2142 38.5 19.6934 38.5 20.2516V21.75V27.5V39V61.5H27.5V16.5Z"
    fill="url(#paint1_linear_5310_64451)"
    fill-opacity="0.2"
  />
  <path
    d="M27.5 16.5H33H34.6295C35.2048 16.5 35.706 16.8921 35.8443 17.4505L35.8583 17.5067C36.0615 18.3269 36.7242 18.9534 37.5545 19.1105C38.1029 19.2142 38.5 19.6934 38.5 20.2516V21.75V27.5V39V61.5H27.5V16.5Z"
    stroke="#E7E7E7"
  />
  <rect
    x="-0.5"
    y="0.5"
    width="11"
    height="45"
    transform="matrix(-1 0 0 1 27 16)"
    fill="#EFFAFF"
  />
  <rect
    x="-0.5"
    y="0.5"
    width="11"
    height="45"
    transform="matrix(-1 0 0 1 27 16)"
    fill="url(#paint2_linear_5310_64451)"
    fill-opacity="0.2"
  />
  <rect
    x="-0.5"
    y="0.5"
    width="11"
    height="45"
    transform="matrix(-1 0 0 1 27 16)"
    stroke="#E7E7E7"
  />
  <defs>
    <filter
      id="filter0_d_5310_64451"
      x="2"
      y="2"
      width="40"
      height="67"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.258824 0 0 0 0 0.254902 0 0 0 0 0.286275 0 0 0 0.18 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_5310_64451"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_5310_64451"
        result="shape"
      />
    </filter>
    <filter
      id="filter1_f_5310_64451"
      x="30.45"
      y="2.14995"
      width="8.0502"
      height="23"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="1.15"
        result="effect1_foregroundBlur_5310_64451"
      />
    </filter>
    <filter
      id="filter2_f_5310_64451"
      x="0"
      y="12"
      width="44"
      height="52"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="2"
        result="effect1_foregroundBlur_5310_64451"
      />
    </filter>
    <linearGradient
      id="paint0_linear_5310_64451"
      x1="11"
      y1="16"
      x2="11"
      y2="62"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-opacity="0" />
      <stop offset="1" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_5310_64451"
      x1="33"
      y1="16"
      x2="33"
      y2="62"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="white" />
      <stop offset="1" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_5310_64451"
      x1="6"
      y1="0"
      x2="6"
      y2="46"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FFF8F8" stop-opacity="0" />
      <stop offset="1" />
    </linearGradient>
  </defs>
</svg>`,Bi=({svg:c,cls:g,color:d})=>r.jsx("span",{className:g,"aria-hidden":"true",style:d?{color:d}:void 0,dangerouslySetInnerHTML:{__html:c}}),Ke=1e3,zs=14,Ms=[{key:"Red",value:"#fb7081"},{key:"Orange",value:"#ff8c38"},{key:"Yellow",value:"#fcd34d"},{key:"Green",value:"#3cbc36"},{key:"Blue",value:"#84cfff"},{key:"Purple",value:"#6e52df"},{key:"Magenta",value:"#e96cab"},{key:"Grey",value:"#929292"},{key:"Black",value:"#000000"},{key:"White",value:"#ffffff"}],Hp=[2,4,6,8,10,12],M2=[10,14,18,22,26,30],fo=(c,g)=>{const d=c.replace("#",""),u=d.length===3?d.split("").map(O=>O+O).join(""):d,y=parseInt(u,16);return`rgba(${y>>16&255}, ${y>>8&255}, ${y&255}, ${g})`},Fa={pencil:{color:"#1e96eb",lineWidth:4},marker:{color:"#1e96eb",lineWidth:22},highlight:{color:"#fcd34d",lineWidth:0}},po={color:"#929292",lineWidth:4,lineStyle:"curve"},oo={strokes:[],notes:[],grid:!1,penProps:Fa,shapeProps:po,eraserSize:zs},co=()=>Math.random().toString(36).slice(2,9),T2={pencil:2.2,marker:7,curve:2.6};function D2(c){const{pts:g}=c;if(!g.length)return"";if(c.tool==="curve"&&g.length>=2){const[d,u]=[g[0],g[g.length-1]],y=c.lineStyle??"curve";if(y==="straight")return`M ${d.x} ${d.y} L ${u.x} ${u.y}`;if(y==="orthogonal"){const W=(d.x+u.x)/2;return`M ${d.x} ${d.y} L ${W} ${d.y} L ${W} ${u.y} L ${u.x} ${u.y}`}const O=(d.x+u.x)/2,X=(d.y+u.y)/2,L=u.x-d.x,z=u.y-d.y,S=Math.hypot(L,z)||1,V=O-z/S*S*.18,B=X+L/S*S*.18;return`M ${d.x} ${d.y} Q ${V} ${B} ${u.x} ${u.y}`}return"M "+g.map(d=>`${d.x.toFixed(1)} ${d.y.toFixed(1)}`).join(" L ")}const Ap=c=>c==="pencil"||c==="marker"||c==="curve"||c==="highlight"||c==="underline",L2=({ann:c,tool:g,penProps:d,shapeProps:u,onAddStroke:y,onAppendPoint:O,onSnap:X,onEraseIds:L,onEraseLocal:z,eraserSize:S,onAddNote:V,onUpdateNote:B})=>{const W=b.useRef(!1),ue=b.useRef(null),[re,ee]=b.useState(null),de=b.useRef(15),[se,ne]=b.useState(null),[be,Se]=b.useState(null),ke=b.useRef(null),ge=b.useRef(null),me=b.useRef(null),_e=b.useCallback(w=>{ke.current=w,Se(w)},[]),te=b.useCallback(w=>{ne({x:w.clientX,y:w.clientY})},[]),oe=b.useCallback((w,_)=>{const G=w.getBoundingClientRect(),Z=G.left+_.x/Ke*G.width,p=G.top+_.y/Ke*G.height,C=G.left+(_.x+_.w)/Ke*G.width,K=G.top+(_.y+_.h)/Ke*G.height,J=Math.min(Z,C),pe=Math.max(Z,C),$=Math.min(p,K),Ce=Math.max(p,K),$e=[];for(const at of c.strokes)at.pts.some(tn=>{const zt=G.left+tn.x/Ke*G.width,Kn=G.top+tn.y/Ke*G.height;return zt>=J&&zt<=pe&&Kn>=$&&Kn<=Ce})&&$e.push(at.id);const Me=[],rt=120/Ke*G.width,wt=30/Ke*G.height;for(const at of c.notes){const tn=G.left+at.x/Ke*G.width,zt=G.top+at.y/Ke*G.height;tn+rt>=J&&tn<=pe&&zt+wt>=$&&zt<=Ce&&Me.push(at.id)}return{strokeIds:$e,noteIds:Me}},[c]),ie=b.useCallback((w,_,G)=>{const Z=w.getBoundingClientRect(),p=Z.left+_.x/Ke*Z.width,C=Z.top+_.y/Ke*Z.height,K=[];let J=!1;for(const $e of c.strokes){let Me=[],rt=!1;const wt=()=>{Me.length>=2&&K.push({...$e,id:co(),pts:Me}),Me=[]};for(const at of $e.pts){const tn=Z.left+at.x/Ke*Z.width,zt=Z.top+at.y/Ke*Z.height;Math.hypot(tn-p,zt-C)<=G?(rt=!0,wt()):Me.push(at)}wt(),rt&&(J=!0)}const pe=[],$=120/Ke*Z.width,Ce=30/Ke*Z.height;for(const $e of c.notes){const Me=Z.left+$e.x/Ke*Z.width,rt=Z.top+$e.y/Ke*Z.height,wt=Math.max(Me,Math.min(p,Me+$)),at=Math.max(rt,Math.min(C,rt+Ce));Math.hypot(p-wt,C-at)<=G&&pe.push($e.id)}return pe.length&&(J=!0),{strokes:K,noteIds:pe,changed:J}},[c]),N=b.useCallback(w=>{const G=w.currentTarget.getBoundingClientRect();return{x:(w.clientX-G.left)/Math.max(1,G.width)*Ke,y:(w.clientY-G.top)/Math.max(1,G.height)*Ke}},[]),ae=w=>{if(w.button!==0&&w.pointerType==="mouse")return;const _=N(w);if(g==="eraser"){W.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}te(w);const Z=ie(w.currentTarget,_,S);Z.changed&&z(Z.strokes,Z.noteIds);return}if(g==="box"){W.current=!0,ge.current=_,_e({x:_.x,y:_.y,w:0,h:0}),te(w);try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}return}if(g==="text"||g==="h1"||g==="link"){const Z=g==="text"?"text":g==="h1"?"h1":"link";let p,C=Z==="h1"?"批注标题":Z==="text"?"批注内容":"链接文字";if(Z==="link"){const K=window.prompt("请输入链接地址","https://");if(!K)return;p=K,C=p}V({id:co(),kind:Z,x:_.x,y:_.y,text:C,href:p});return}if(!Ap(g))return;W.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}if(g==="curve"){const Z=u;y({id:co(),tool:"curve",pts:[_],color:Z.color,width:Z.lineWidth,lineStyle:Z.lineStyle});return}if(g==="highlight"||g==="underline"){const Z=w.currentTarget.closest(".pd-sheet");de.current=Z&&parseFloat(getComputedStyle(Z).fontSize)||15,ue.current={tool:g,norm:[_],client:[{x:w.clientX,y:w.clientY}]},ee({tool:g,norm:[_]}),W.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}return}const G=d[g];y({id:co(),tool:g,pts:[_],color:g==="marker"?fo(G.color,.3):g==="highlight"?fo(G.color,.38):G.color,width:G.lineWidth})},ve=w=>{if(g==="eraser"){if(te(w),!W.current)return;const G=N(w),Z=ie(w.currentTarget,G,S);Z.changed&&z(Z.strokes,Z.noteIds);return}if(g==="box"){if(te(w),!W.current||!ge.current)return;const G=N(w),Z=ge.current;_e({x:Math.min(Z.x,G.x),y:Math.min(Z.y,G.y),w:Math.abs(G.x-Z.x),h:Math.abs(G.y-Z.y)});return}if(!W.current)return;const _=N(w);if(ue.current){ue.current.norm.push(_),ue.current.client.push({x:w.clientX,y:w.clientY}),ee({tool:ue.current.tool,norm:ue.current.norm.slice()});return}O(_)},De=()=>{if(W.current){if(W.current=!1,g==="box"&&ge.current&&ke.current){const w=ke.current,_=me.current;if(_&&(w.w>4||w.h>4)){const{strokeIds:G,noteIds:Z}=oe(_,w);(G.length||Z.length)&&L(G,Z)}ge.current=null,_e(null);return}if(ue.current){const w=ue.current;ue.current=null,ee(null),w.client.length>=2&&X(w.tool,w.client)}}},m=Ap(g)||g==="eraser"||g==="box"||g==="text"||g==="h1"||g==="link";return r.jsxs(r.Fragment,{children:[c.grid&&r.jsx("div",{className:"pd-grid-bg","aria-hidden":"true"}),r.jsxs("svg",{ref:me,className:"pd-anno-svg",viewBox:`0 0 ${Ke} ${Ke}`,preserveAspectRatio:"none",style:{pointerEvents:m?"auto":"none"},onPointerDown:ae,onPointerMove:ve,onPointerUp:De,onPointerLeave:w=>{g==="eraser"&&ne(null),De()},onPointerCancel:De,children:[c.strokes.map(w=>{if(w.tool==="highlight"){const _=w.pts.map(C=>C.x),G=w.pts.map(C=>C.y),Z=Math.min(..._),p=Math.min(...G);return r.jsx("rect",{x:Z,y:p,width:Math.max(..._)-Z,height:Math.max(...G)-p,rx:"0.5",fill:w.color,style:{pointerEvents:"none"}},w.id)}if(w.tool==="underline"){const _=w.pts.map(Z=>Z.x),G=Math.max(...w.pts.map(Z=>Z.y));return r.jsx("line",{x1:Math.min(..._),y1:G,x2:Math.max(..._),y2:G,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",style:{stroke:w.color,pointerEvents:"none"}},w.id)}return r.jsx("path",{d:D2(w),fill:"none",strokeWidth:w.width??T2[w.tool],strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{stroke:w.color,pointerEvents:"none"}},w.id)}),re&&(()=>{const w=re.tool==="highlight",_=d.highlight.color,G=w?fo(_,.38):_,Z=w?de.current*1.05:2,p="M "+re.norm.map(C=>`${C.x.toFixed(1)} ${C.y.toFixed(1)}`).join(" L ");return r.jsx("path",{d:p,fill:"none",stroke:G,strokeWidth:Z,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}},"__temp__")})(),be&&(be.w>0||be.h>0)&&r.jsx("rect",{x:be.x,y:be.y,width:be.w,height:be.h,fill:"rgba(47,107,255,.10)",stroke:"var(--affine-primary-color)",strokeWidth:1.5,strokeDasharray:"6 4",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}})]}),g==="eraser"&&se&&r.jsx("div",{className:"pd-erase-cursor",style:{left:se.x,top:se.y,width:S*2,height:S*2}}),c.notes.map(w=>r.jsx(R2,{note:w,onChange:_=>B(w.id,_)},w.id))]})},R2=({note:c,onChange:g})=>{const d=b.useRef(null);b.useEffect(()=>{d.current&&document.activeElement!==d.current&&(d.current.textContent=c.text)},[c.text]);const u=c.kind==="h1"?"pd-note pd-note-h1":c.kind==="link"?"pd-note pd-note-link":"pd-note";return r.jsx("div",{className:u,style:{left:`${c.x/Ke*100}%`,top:`${c.y/Ke*100}%`,transform:"translate(-6px, -8px) rotate(-1.5deg)"},contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,ref:d,onBlur:()=>{var y;g({text:((y=d.current)==null?void 0:y.textContent)??""})},onKeyDown:y=>{y.stopPropagation(),y.key==="Escape"&&y.target.blur()},onPointerDown:y=>{y.stopPropagation()}})},Ts=({widths:c,value:g,onPick:d})=>{const u=c.length,y=Math.max(1,c.filter(z=>z<=g).length),O=100/u,X={left:`${O/2}%`,right:`${O/2}%`},L={left:`${O/2}%`,width:`${(y-1)*O}%`};return r.jsxs("div",{className:"pd-pm-widths",role:"slider","aria-valuenow":g,children:[r.jsx("span",{className:"pd-pm-line",style:X,"aria-hidden":"true"}),r.jsx("span",{className:"pd-pm-line-fill",style:L,"aria-hidden":"true"}),c.map((z,S)=>{const V=4+S*2;return r.jsx("button",{type:"button",className:`pd-pm-cell${z<=g?" sel":""}`,onClick:()=>d(z),"aria-label":`线宽 ${z}`,children:r.jsx("span",{className:"pd-pm-dot",style:{width:V,height:V}})},z)})]})},O2=({pen:c,penProps:g,onPen:d,onSetting:u})=>{const y=c==="pencil"?Hp:M2,O=g[c];return r.jsxs("div",{className:"pd-pen-menu",onPointerDown:X=>X.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-pm-pen${c==="pencil"?" is-on":""}`,onClick:()=>d("pencil"),title:"画笔","aria-label":"画笔","aria-pressed":c==="pencil",children:r.jsx(Bi,{svg:Op,cls:"pd-tb-illus",color:c==="pencil"?g.pencil.color:"var(--affine-primary-color)"})}),r.jsx("button",{type:"button",className:`pd-pm-pen${c==="marker"?" is-on":""}`,onClick:()=>d("marker"),title:"荧光笔","aria-label":"荧光笔","aria-pressed":c==="marker",children:r.jsx(Bi,{svg:qp,cls:"pd-tb-illus",color:c==="marker"?g.marker.color:"var(--affine-primary-color)"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Ts,{widths:y,value:O.lineWidth,onPick:X=>u(c,{lineWidth:X})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Ms.map(X=>r.jsx("button",{type:"button",className:`pd-pm-cdot${O.color.toLowerCase()===X.value.toLowerCase()?" sel":""}`,style:{background:X.value,...X.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>u(c,{color:X.value}),"aria-label":X.key,title:X.key},X.key))})]})},q2=[{key:"curve",title:"曲线",Icon:o2},{key:"orthogonal",title:"直角",Icon:c2},{key:"straight",title:"直线",Icon:s2}],H2=({shapeProps:c,onSetting:g})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[q2.map(({key:d,title:u,Icon:y})=>r.jsx("button",{type:"button",className:`pd-pm-shape${c.lineStyle===d?" is-on":""}`,onClick:()=>g({lineStyle:d}),title:u,"aria-label":u,"aria-pressed":c.lineStyle===d,children:r.jsx(y,{})},d)),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Ts,{widths:Hp,value:c.lineWidth,onPick:d=>g({lineWidth:d})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Ms.map(d=>r.jsx("button",{type:"button",className:`pd-pm-cdot${c.color.toLowerCase()===d.value.toLowerCase()?" sel":""}`,style:{background:d.value,...d.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>g({color:d.value}),"aria-label":d.key,title:d.key},d.key))})]}),U2=()=>r.jsxs("span",{className:"pd-tb-note-stack","aria-hidden":"true",children:[r.jsx("span",{className:"pd-ns-paper pd-ns-p1",children:r.jsx(d2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p2",children:r.jsx(u2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p3",children:r.jsx(p2,{})})]}),ja=({icon:c,active:g,onClick:d,title:u})=>r.jsx("button",{type:"button",className:`pd-tb-btn${g?" is-active":""}`,onClick:d,title:u,"aria-label":u,"aria-pressed":g,children:c}),B2=({mode:c})=>{const g={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round"};return c==="word"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("text",{x:"12",y:"16.5",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"currentColor",stroke:"none",fontFamily:"serif",children:"A"}),r.jsx("path",{d:"M5 20.5h14",...g})]}):c==="sentence"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("path",{d:"M4 8h16M4 13h9",...g}),r.jsx("circle",{cx:"16.2",cy:"13",r:"1.4",fill:"currentColor"})]}):c==="paragraph"?r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:r.jsx("path",{d:"M4 6.5h16M4 11.5h16M4 16.5h9",...g})}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"2",...g}),r.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5",...g})]})},Y2=[{key:"word",title:"单词翻译"},{key:"sentence",title:"句子翻译"},{key:"paragraph",title:"整段翻译"},{key:"full",title:"全文翻译"}],G2=({mode:c,onMode:g})=>r.jsx("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:Y2.map(d=>r.jsxs("button",{type:"button",className:`pd-trans-btn${c===d.key?" is-on":""}`,onClick:()=>g(d.key),title:d.title,"aria-label":d.title,"aria-pressed":c===d.key,children:[r.jsx(B2,{mode:d.key}),r.jsx("span",{children:d.title})]},d.key))}),_s=({mode:c,color:g})=>c==="highlight"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:g},fill:"none","aria-hidden":"true",children:[r.jsx("rect",{x:"4.2",y:"4.6",width:"12.5",height:"7.2",rx:"2",transform:"rotate(-9 10.5 8)",fill:"currentColor"}),r.jsx("path",{d:"M4 17.2h16M4 20.4h10",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:g},fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M7 3.5v7.5a5 5 0 0 0 10 0V3.5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),r.jsx("path",{d:"M4.5 20.5h15",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),X2=({mode:c,color:g,onMode:d,onColor:u})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:y=>y.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-hl-btn${c==="highlight"?" is-on":""}`,onClick:()=>d("highlight"),title:"高亮","aria-label":"高亮","aria-pressed":c==="highlight",children:r.jsx(_s,{mode:"highlight",color:c==="highlight"?g:"currentColor"})}),r.jsx("button",{type:"button",className:`pd-hl-btn${c==="underline"?" is-on":""}`,onClick:()=>d("underline"),title:"下划线","aria-label":"下划线","aria-pressed":c==="underline",children:r.jsx(_s,{mode:"underline",color:c==="underline"?g:"currentColor"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx("div",{className:"pd-pm-colors",children:Ms.filter(y=>y.key!=="White"&&y.key!=="Black").map(y=>r.jsx("button",{type:"button",className:`pd-pm-cdot${g.toLowerCase()===y.value.toLowerCase()?" sel":""}`,style:{background:y.value},onClick:()=>u(y.value),"aria-label":y.key,title:y.key},y.key))})]}),V2=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 7L4 12l5 5"}),r.jsx("path",{d:"M4 12h11a5 5 0 0 1 0 10h-1"})]}),Q2=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12V5.2a1.4 1.4 0 0 1 2.8 0V11"}),r.jsx("path",{d:"M10.8 10.6V4.4a1.4 1.4 0 0 1 2.8 0v6.2"}),r.jsx("path",{d:"M13.6 10.8V5.6a1.4 1.4 0 0 1 2.8 0V12"}),r.jsx("path",{d:"M16.4 11.2a1.4 1.4 0 0 1 2.8.3v2.9A7.2 7.2 0 0 1 12 21.4c-2.6 0-4.3-.9-5.6-3L4.5 15c-.7-1.1-.4-2.3.6-2.9.9-.5 2-.3 2.6.5l.9 1.2"})]}),Z2=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"4",y:"4.5",width:"16",height:"15",rx:"2",strokeDasharray:"3.2 2.6"}),r.jsx("path",{d:"M9.5 9.5l5 5M14.5 9.5l-5 5"})]}),K2=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2.5",y:"4.5",width:"8.5",height:"15",rx:"1.2"}),r.jsx("rect",{x:"13",y:"4.5",width:"8.5",height:"15",rx:"1.2"})]}),J2=({paper:c})=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3.5h8.5L19 8v12.5H6z"}),r.jsx("path",{d:"M14 3.5V8h5"}),r.jsx("path",{d:"M9 12h7M9 15h7M9 18h4.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"5",cy:"7",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"12",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"17",r:"1.1"}),r.jsx("path",{d:"M9 7h10M9 12h10M9 17h10"})]})}),$2=({tool:c,onTool:g,penProps:d,onPenSetting:u,shapeProps:y,onShapeSetting:O,zoom:X,onZoom:L,onUndo:z,canUndo:S,eraserSize:V,onEraserSize:B,spread:W,onToggleSpread:ue,examMode:re,onToggleExamMode:ee})=>{const[de]=b.useState(!1),[se,ne]=b.useState(!1),[be,Se]=b.useState(!1),[ke,ge]=b.useState(!1),[me,_e]=b.useState(!1),[te,oe]=b.useState(()=>localStorage.getItem("cet:hl:mode")==="underline"?"underline":"highlight"),[ie,N]=b.useState(!1),[ae,ve]=b.useState(!1),[De,m]=b.useState(()=>{const $=localStorage.getItem("cet:trans:mode");return $==="sentence"||$==="paragraph"||$==="full"?$:"word"}),[w,_]=b.useState(!1),G=$=>{g($),ge($==="pencil"||$==="marker"),_e($==="curve"),Se($==="eraser"),$!=="highlight"&&$!=="underline"&&N(!1),$!=="select"&&_(!1)},Z=$=>{m($);try{localStorage.setItem("cet:trans:mode",$)}catch{}},p=()=>{c==="highlight"||c==="underline"?N($=>!$):(g(te),N(!0))},C=$=>{oe($);try{localStorage.setItem("cet:hl:mode",$)}catch{}g($)},K=$=>{c===$?ge(Ce=>!Ce):G($)},J=()=>{c==="curve"?_e($=>!$):G("curve")},pe=()=>{c==="eraser"?Se($=>!$):(g("eraser"),Se(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pd-float-bar","data-collapsed":de?"true":"false","data-hidden":se?"true":"false",children:[ke&&!de&&(c==="pencil"||c==="marker")&&r.jsx(O2,{pen:c==="pencil"?"pencil":"marker",penProps:d,onPen:$=>g($),onSetting:u}),me&&!de&&c==="curve"&&r.jsx(H2,{shapeProps:y,onSetting:O}),w&&!de&&c==="select"&&r.jsx(G2,{mode:De,onMode:Z}),ie&&!de&&(c==="highlight"||c==="underline")&&r.jsx(X2,{mode:te,color:d.highlight.color,onMode:C,onColor:$=>u("highlight",{color:$})}),ae&&!de&&r.jsxs("div",{className:"pd-zoom-menu",onPointerDown:$=>$.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>L(X-.1),title:"缩小",children:"−"}),r.jsxs("span",{className:"pd-zoom-val",children:[Math.round(X*100),"%"]}),r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>L(X+.1),title:"放大",children:"＋"}),r.jsx("button",{type:"button",className:"pd-zoom-btn pd-zoom-reset",onClick:()=>L(1),title:"重置为 100%",children:"重置"}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(W?" is-on":""),onClick:ue,title:W?"切换为单页浏览":"双页浏览：左右并排显示试卷","aria-pressed":W,children:[r.jsx(K2,{}),r.jsx("span",{children:"双页"})]}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(re==="paper"?" is-on":""),onClick:ee,title:re==="paper"?"当前为模拟真实试卷预览（A4 连续密排、纯净只读），点击切换回按题预览":"当前为按题预览（每种题型一张纸、纸高随内容、可作答），点击切换为模拟真实试卷","aria-pressed":re==="paper",children:[r.jsx(J2,{paper:re==="paper"}),r.jsx("span",{children:re==="paper"?"试卷":"按题"})]})]}),be&&!de&&c==="eraser"&&r.jsxs("div",{className:"pd-pen-menu pd-erase-menu",onPointerDown:$=>$.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-erase-delbtn",onClick:()=>{Se(!1),g("box")},title:"框选删除：拖拽矩形批量清除笔迹与批注","aria-label":"框选删除",children:r.jsx(Z2,{})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx(Ts,{widths:[8,14,22,32],value:V,onPick:B})]}),r.jsx(ja,{icon:r.jsx(V2,{}),active:!1,onClick:z,title:"回缩上一笔 (Ctrl+Z)"}),r.jsxs("div",{className:"pd-tb-group",children:[r.jsx(ja,{icon:r.jsx(Q2,{}),active:ae,onClick:()=>ve($=>!$),title:"缩放试卷（双指捏合 / Ctrl+滚轮）"}),r.jsx(ja,{icon:r.jsx(_s,{mode:te,color:d.highlight.color}),active:c==="highlight"||c==="underline",onClick:p,title:"高亮 / 下划线"}),r.jsx(ja,{icon:r.jsx(f2,{}),active:c==="curve",onClick:J,title:"形状 / 连接线 (C)"})]}),!de&&r.jsxs("div",{className:"pd-tb-group pd-tb-senior",children:[r.jsx(ja,{icon:r.jsx(U2,{}),active:c==="text",onClick:()=>G("text"),title:"批注便签 (T)"}),r.jsx(ja,{icon:r.jsx(Bi,{svg:Op,cls:"pd-tb-illus",color:c==="pencil"?d.pencil.color:"var(--affine-primary-color)"}),active:c==="pencil",onClick:()=>K("pencil"),title:"铅笔 (P)"}),r.jsx(ja,{icon:r.jsx(Bi,{svg:qp,cls:"pd-tb-illus",color:c==="marker"?d.marker.color:"var(--affine-primary-color)"}),active:c==="marker",onClick:()=>K("marker"),title:"马克笔 (M)"}),r.jsx(ja,{icon:r.jsx(Bi,{svg:N2,cls:"pd-tb-illus pd-tb-illus-erase"}),active:c==="eraser",onClick:pe,title:"橡皮擦 (E)：点击调整擦除大小与删除"})]}),!de&&r.jsx("button",{type:"button",className:"pd-tb-arrow pd-tb-arrow-next",onClick:()=>ne(!0),title:"隐藏工具栏","aria-label":"隐藏工具栏",children:r.jsx(vp,{})})]}),se&&r.jsx("button",{type:"button",className:"pd-bar-show",onClick:()=>ne(!1),title:"显示工具栏","aria-label":"显示工具栏",children:r.jsx(vp,{})})]})},F2=c=>{const g=`cet:anno:${c}`,[d,u]=b.useState(oo),[y,O]=b.useState("select"),X=b.useRef(!1);b.useEffect(()=>{var te,oe,ie;try{const N=localStorage.getItem(g);if(N){const ae=JSON.parse(N),ve=(te=ae.penProps)==null?void 0:te.marker;u({strokes:ae.strokes??[],notes:ae.notes??[],grid:ae.grid??!1,penProps:{highlight:{...Fa.highlight,...((oe=ae.penProps)==null?void 0:oe.highlight)??{}},pencil:{...Fa.pencil,...((ie=ae.penProps)==null?void 0:ie.pencil)??{}},marker:{...Fa.marker,...ve??{},...(ve==null?void 0:ve.color)==="#fb7081"?{color:Fa.marker.color}:{}}},shapeProps:{...po,...ae.shapeProps??{}},eraserSize:ae.eraserSize??zs})}else u(oo)}catch{u(oo)}X.current=!0},[g]),b.useEffect(()=>{if(!X.current)return;const te=setTimeout(()=>{try{localStorage.setItem(g,JSON.stringify(d))}catch{}},400);return()=>clearTimeout(te)},[d,g]);const L=b.useRef(null),z=b.useCallback(te=>{L.current=te.id,u(oe=>({...oe,strokes:[...oe.strokes,te]}))},[]),S=b.useCallback(te=>{const oe=L.current;!oe||!te||u(ie=>({...ie,strokes:ie.strokes.map(N=>N.id===oe?{...N,pts:[...N.pts,te]}:N)}))},[]),V=b.useCallback(te=>{u(oe=>({...oe,notes:[te]}))},[]),B=b.useCallback((te,oe)=>{u(ie=>({...ie,notes:ie.notes.map(N=>N.id===te?{...N,...oe}:N)}))},[]),W=b.useCallback((te,oe)=>{u(ie=>{const N=new Set(te),ae=new Set(oe);return{...ie,strokes:N.size?ie.strokes.filter(ve=>!N.has(ve.id)):ie.strokes,notes:ae.size?ie.notes.filter(ve=>!ae.has(ve.id)):ie.notes}})},[]),ue=b.useCallback((te,oe)=>{u(ie=>{const N=new Set(oe);return{...ie,strokes:te,notes:N.size?ie.notes.filter(ae=>!N.has(ae.id)):ie.notes}})},[]),re=b.useCallback(te=>{u(oe=>({...oe,strokes:oe.strokes.map(ie=>({...ie,pts:ie.pts.map(te)})),notes:oe.notes.map(ie=>{const N=te({x:ie.x,y:ie.y});return{...ie,x:N.x,y:N.y}})}))},[]),ee=b.useRef(d);ee.current=d;const de=b.useCallback(te=>{const oe=[],ie=N=>{const ae=te(N);oe.push({...ae,orig:N})};return ee.current.strokes.forEach(N=>N.pts.forEach(ie)),ee.current.notes.forEach(N=>ie({x:N.x,y:N.y})),oe},[]),se=b.useCallback((te,oe)=>{if(!te.length)return;const ie={el:null,dx:0,dy:0,orig:{x:0,y:0}};u(N=>{let ae=0;const ve=()=>te[ae++]??ie;return{...N,strokes:N.strokes.map(De=>({...De,pts:De.pts.map(()=>oe(ve()))})),notes:N.notes.map(De=>{const m=oe(ve());return{...De,x:m.x,y:m.y}})}})},[]),ne=b.useCallback(te=>{u(oe=>({...oe,eraserSize:Math.max(4,Math.min(60,Math.round(te)))}))},[]),be=b.useCallback(te=>{u(oe=>({...oe,grid:te}))},[]),Se=b.useCallback((te,oe)=>{u(ie=>{const N=ie.penProps??Fa;return{...ie,penProps:{...N,[te]:{...N[te],...oe}}}})},[]),ke=b.useCallback(te=>{u(oe=>({...oe,shapeProps:{...oe.shapeProps??po,...te}}))},[]),ge=b.useCallback(()=>{u(te=>te.notes.length?{...te,notes:te.notes.slice(0,-1)}:te.strokes.length?{...te,strokes:te.strokes.slice(0,-1)}:te)},[]),me=b.useCallback(()=>u(oo),[]),_e=b.useMemo(()=>({v:"select",g:"select",c:"curve",k:"link",p:"pencil",t:"text",h:"h1",m:"marker",e:"eraser"}),[]);return b.useEffect(()=>{const te=oe=>{const ie=oe.target;if(ie&&(ie.isContentEditable||/input|textarea/i.test(ie.tagName)))return;if((oe.ctrlKey||oe.metaKey)&&oe.key.toLowerCase()==="z"){oe.preventDefault(),ge();return}if(oe.ctrlKey||oe.metaKey||oe.altKey)return;const N=_e[oe.key.toLowerCase()];if(N){if(N==="select"&&oe.key.toLowerCase()==="g"){u(ae=>({...ae,grid:!ae.grid}));return}O(N)}};return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[_e,ge]),{ann:d,tool:y,setTool:O,addStroke:z,appendPoint:S,addNote:V,updateNote:B,eraseIds:W,eraseLocal:ue,mapAnnotations:re,captureAnchors:de,applyAnchors:se,eraserSize:d.eraserSize??zs,setEraserSize:ne,setGrid:be,setPenSetting:Se,setShapeSetting:ke,undo:ge,clear:me,penProps:d.penProps??Fa,shapeProps:d.shapeProps??po,canUndo:d.strokes.length>0||d.notes.length>0}},Ep=c=>{let d=(c.closest(".qblock")||c).previousElementSibling;for(;d;){const u=(d.textContent||"").trim();if(/^Questions\s+\d+/i.test(u))return u;d=d.previousElementSibling}return""},W2=(c,g)=>{var u;document.querySelectorAll(".pd-horn-tip").forEach(y=>y.remove());const d=document.createElement("span");d.className="pd-horn-tip",d.textContent=g,(u=c.parentElement)==null||u.appendChild(d),window.setTimeout(()=>d.remove(),1600)},so=c=>{const g=Array.from(c.querySelectorAll("h2, h3, .question, .blank, .pd-blank")).sort((X,L)=>X.compareDocumentPosition(L)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);let d="";const u={},y=[],O=[];for(const X of g){if(X.tagName==="H2"||X.tagName==="H3"){const L=(X.textContent||"").trim();/Banked|选词/i.test(L)?d="banked":/Matching|长篇/i.test(L)?d="matching":/Part II|Listening|听力|Conversations|Passages|Lectures/i.test(L)?d="listening":/Careful|Reading Comprehension|阅读理解/i.test(L)?d="careful":/Translation|翻译/i.test(L)?d="translation":/Writing|写作/i.test(L)&&(d="writing");continue}if(X.classList.contains("question")){if(d!=="listening"&&d!=="matching"&&d!=="careful")continue;u[d]=(u[d]||0)+1;const L=d==="listening"?25:10;if(u[d]>L)continue;const S=(d==="listening"?1:d==="matching"?36:46)+u[d]-1,V=X.querySelector(".option")?"choice":"match";y.push({el:X,no:S,zone:d,kind:V});continue}if(d==="banked"){const L=Number(X.getAttribute("data-blank")||0)||26+O.length;O.push(L)}}return{list:y,blankNos:O}},Cs=(c,g,d)=>{const u=[];for(Array.from(c.querySelectorAll(":scope > .pd-page")).forEach(ee=>{const de=ee.querySelector(":scope > .pd-page-body");if(de)for(;de.firstChild;)u.push(de.removeChild(de.firstChild));ee.remove()});c.firstChild;)u.push(c.removeChild(c.firstChild));let y=u.find(ee=>ee instanceof HTMLElement&&ee.classList.contains("pd-head"));if(!y){y=document.createElement("header"),y.className="pd-head";const ee=document.createElement("div");ee.className="pd-head-name",ee.textContent=g,y.appendChild(ee)}const O=[y,...u.filter(ee=>ee!==y)],X=ee=>{const de=document.createElement("div");return de.className="pd-page-foot",de.innerHTML=`<span>${ee}</span>`,de};let L=null;const z=()=>{const ee=document.createElement("div");return ee.className="pd-page",L=document.createElement("div"),L.className="pd-page-body",ee.appendChild(L),c.appendChild(ee),ee},S=[];let V=z();S.push(V);const B=ee=>{L.appendChild(ee)},W="h2.pd-part, h3.pd-break-sec",ue=ee=>ee instanceof HTMLElement&&(ee.matches(W)||!!ee.querySelector(W));if(d==="question"){const ee=()=>Array.from(L.children).every(se=>se.matches(W));let de=!1;for(const se of O)ue(se)&&(de&&!(ee()&&L.children.length>0)&&(V=z(),S.push(V)),de=!0),B(se)}else{const ee=se=>{const ne=[];for(;se.firstChild;){const be=se.firstChild;se.removeChild(be),ne.push(be)}return ne};let de=0;for(;O.length&&de++<2e4;){const se=O.shift();if(B(se),!(se instanceof HTMLElement)||L.scrollHeight<=L.clientHeight+4)continue;if(Array.from(se.children).length>1&&!/^(TABLE|UL|OL|PRE|BLOCKQUOTE)$/.test(se.tagName)&&!se.classList.contains("question")&&!se.classList.contains("word-bank")&&!se.classList.contains("options")&&!se.classList.contains("pd-head")){const Se=ee(se);se.remove(),O.unshift(...Se);continue}V=z(),S.push(V),B(se)}}const re=S.filter(ee=>{var de;return(((de=ee.querySelector(".pd-page-body"))==null?void 0:de.childNodes.length)??0)>0});S.forEach(ee=>{re.includes(ee)||ee.remove()}),re.forEach((ee,de)=>ee.appendChild(X(de+1)))},I2=(c,g)=>{var B;const d=document,u=(B=d.caretRangeFromPoint)==null?void 0:B.call(d,c,g),y=u==null?void 0:u.startContainer,O=(y==null?void 0:y.textContent)||"",X=(u==null?void 0:u.startOffset)??0,L=W=>/[A-Za-z'-]/.test(W);let z=X;for(;z>0&&z<=O.length&&L(O[z-1]);)z--;let S=X;for(;S<O.length&&L(O[S]);)S++;const V={text:O.slice(z,S),range:null};if(y&&y.nodeType===3&&S>z){const W=document.createRange();W.setStart(y,z),W.setEnd(y,S),V.range=W}return V},P2=(c,g)=>{var V;const d=document,u=(V=d.caretRangeFromPoint)==null?void 0:V.call(d,c,g),y=u==null?void 0:u.startContainer,O=(y==null?void 0:y.textContent)||"",X=(u==null?void 0:u.startOffset)??0;let L=X;for(;L>0&&!/[.!?]\s["')\]]/.test(O.slice(Math.max(0,L-2),L));)L--;let z=X;for(;z<O.length&&!/[.!?]/.test(O[z]);)z++;for(z=Math.min(O.length,z+1);L<z&&/\s/.test(O[L]);)L++;for(;z>L&&/\s/.test(O[z-1]);)z--;const S={text:O.slice(L,z).trim(),range:null};if(y&&y.nodeType===3&&z>L){const B=document.createRange();B.setStart(y,L),B.setEnd(y,z),S.range=B}return S},uo=(c,g)=>{const d=c.querySelector(".pd-qnum");if(!d)return;const u=d.parentElement;if(!u)return;let y=u.querySelector(".pd-ans-letter");g?(y||(y=document.createElement("span"),y.className="pd-ans-letter",u.insertBefore(y,d)),y.textContent=g):y&&y.remove()},zp=new Map,_p=async c=>{var X;const g=c.toLowerCase(),d=zp.get(g);if(d)return d;const y=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(c)}&langpair=en|zh-CN`)).json(),O=String(((X=y==null?void 0:y.responseData)==null?void 0:X.translatedText)||"");return O&&!/MYMEMORY WARNING/i.test(O)&&zp.set(g,O),O||"翻译服务暂不可用"},eg=async c=>{if(c.length<=450)return _p(c);const g=[];let d="";for(const y of c.split(new RegExp("(?<=[.!?。！？]\\s)")))(d+y).length>420&&d?(g.push(d),d=y):d+=y;d&&g.push(d);const u=[];for(const y of g.slice(0,40))try{u.push(await _p(y))}catch{u.push("")}return u.join(" ")},Np=({x:c,y:g,children:d})=>{const u=b.useRef(null);return b.useLayoutEffect(()=>{const y=u.current;if(!y)return;const O=()=>{const ue=y.offsetHeight,re=y.offsetWidth/2+8,ee=Math.min(Math.max(c,re),window.innerWidth-re);y.style.left=`${ee}px`,y.style.top=`${g}px`,g-ue-14>=8?(y.style.transform="translate(-50%, calc(-100% - 14px))",y.style.maxHeight=`${window.innerHeight-40}px`):(y.style.transform="translate(-50%, 14px)",y.style.maxHeight=`${Math.max(240,window.innerHeight-g-30)}px`)},X=performance.now();let L=0,z=0,S="",V=!1;const B=()=>{V||(V=!0,y.dataset.ready="true")},W=()=>{O();const ue=`${y.offsetHeight}|${y.offsetWidth}|${y.style.transform}`;z=ue===S?z+1:0,S=ue,!V&&(z>=2||performance.now()-X>800)&&B(),z<10&&performance.now()-X<3e3&&(L=requestAnimationFrame(W))};return W(),()=>cancelAnimationFrame(L)},[c,g]),r.jsx("div",{ref:u,className:"pd-picker",children:d})},Mp=c=>c?Array.from(c.querySelectorAll(".word-bank li, .word-bank span, ul li")).map(g=>{var d,u,y;return((u=(d=g.parentElement)==null?void 0:d.textContent)==null?void 0:u.trim())||((y=g.textContent)==null?void 0:y.trim())||""}).filter(g=>/^[A-O][\.、]/.test(g)).flatMap(g=>g.match(/[A-O][\.、]\s*[a-z]+/g)||[]).filter((g,d,u)=>u.indexOf(g)===d):[],tg=[{name:"听力",start:1,count:25},{name:"选词填空",start:26,count:10},{name:"长篇阅读",start:36,count:10},{name:"阅读理解",start:46,count:10},{name:"翻译（汉译英）",start:56,count:1},{name:"写作",start:57,count:1}];function ng(c,g){if(c.pdf&&typeof c.pdf=="string")return c.pdf;const d=c.id||"";if(g==="cet4"){const u=d.match(/^cet4-(20\d{2})-(\d{2})-set(\d)$/i);if(u)return`./assets/papers/cet4/${u[1]}-${u[2]}-S${u[3]}.pdf`}else{const u=d.match(/^cet6-(20\d{2})-(\d{1,2})-set(\d)$/i);if(u)return`./assets/cet6-pdf/CET-6 ${u[1]}.${u[2].padStart(2,"0")} 第${u[3]}套.pdf`}return null}const ag=({paper:c,type:g,onBack:d})=>{const[u,y]=b.useState(null),[O,X]=b.useState(!0),[L,z]=b.useState(null),[S,V]=b.useState(!0);b.useEffect(()=>{let h=!1;y(null),X(!0),z(null),V(!0);const M="./",F=String(c.id).replace(/[^\w.-]/g,"_");return fetch(`${M}contents/${F}.json`).then(P=>P.ok?P.json():null).then(P=>{h||(y(P??null),X(!1))}).catch(()=>{h||(y(null),X(!1))}),fetch(`${M}listening/${F}.json`).then(P=>P.ok?P.json():null).then(P=>{h||(z(P??null),V(!1))}).catch(()=>{h||(z(null),V(!1))}),()=>{h=!0}},[c.id]);const B=b.useMemo(()=>{var P,Q;if(u)return u;if(O)return null;const h=c.keyPoints,M=c.year??new Date().getFullYear(),F=Number(c.month??"06");return{title:c.title,date:`${M}年${F}月`,type:g==="cet4"?"四级真题":"六级真题",html:_2({title:c.title,type:g==="cet4"?"四级":"六级",writing:(P=h==null?void 0:h.writing)==null?void 0:P[0],translation:(Q=h==null?void 0:h.translation)==null?void 0:Q[0],readingFocus:h==null?void 0:h.reading,paperId:c.id})}},[u,O,c,g]),[W,ue]=b.useState(0),[re,ee]=b.useState(!1),[de,se]=b.useState(null),ne=b.useRef(null),be=b.useRef(void 0),[Se,ke]=b.useState(()=>{try{return localStorage.getItem("cet:exam-mode")==="paper"?"paper":"question"}catch{return"question"}}),ge=b.useRef(Se);ge.current=Se;const me=b.useCallback(()=>{ke(h=>{const M=h==="paper"?"question":"paper";try{localStorage.setItem("cet:exam-mode",M)}catch{}return M})},[]),_e=b.useRef(null),[te,oe]=b.useState(()=>{const h=parseFloat(localStorage.getItem("cet:zoom")||"1");return Number.isFinite(h)?Math.min(3,Math.max(.5,h)):1}),ie=b.useRef(te),N=b.useCallback(h=>{const M=Math.min(3,Math.max(.5,Math.round(h*100)/100));ie.current=M,oe(M);try{localStorage.setItem("cet:zoom",String(M))}catch{}},[]),[ae,ve]=b.useState(!1),De=b.useCallback(()=>{const h=_e.current;if(!h)return null;const M=h.getBoundingClientRect();return!M.width||!M.height?null:Array.from(h.querySelectorAll(".exam-content-root > .pd-page")).map(F=>{const P=F.getBoundingClientRect();return{x:(P.left-M.left)/M.width,y:(P.top-M.top)/M.height,w:P.width/M.width,h:P.height/M.height}})},[]),m=b.useRef(null),w=b.useCallback(h=>{m.current=De(),ve(h);try{localStorage.setItem("cet:spread",h?"1":"0")}catch{}},[De]),_=b.useCallback(()=>w(!ae),[w,ae]);b.useEffect(()=>{const h=new Map;let M=null;const F=()=>{const[D,q]=[...h.values()];return Math.hypot(D.x-q.x,D.y-q.y)||1},P=D=>{const q=_e.current;return!!q&&D.target instanceof Node&&q.contains(D.target)},Q=D=>{D.pointerType==="mouse"||!P(D)||(h.set(D.pointerId,{x:D.clientX,y:D.clientY}),h.size===2&&(M={startDist:F(),startZoom:ie.current}))},le=D=>{!h.has(D.pointerId)||!M||(h.set(D.pointerId,{x:D.clientX,y:D.clientY}),h.size===2&&N(M.startZoom*(F()/M.startDist)))},A=D=>{h.delete(D.pointerId),h.size<2&&(M=null)},R=D=>{!D.ctrlKey||!P(D)||(D.preventDefault(),N(ie.current*Math.exp(-D.deltaY*.002)))};return window.addEventListener("pointerdown",Q,!0),window.addEventListener("pointermove",le,{capture:!0}),window.addEventListener("pointerup",A,!0),window.addEventListener("pointercancel",A,!0),window.addEventListener("wheel",R,{passive:!1,capture:!0}),()=>{window.removeEventListener("pointerdown",Q,!0),window.removeEventListener("pointermove",le,!0),window.removeEventListener("pointerup",A,!0),window.removeEventListener("pointercancel",A,!0),window.removeEventListener("wheel",R,!0)}},[N]);const G=ng(c,g),Z=c.pdfAnswer||null,p=c.audio||null,[C,K]=b.useState([]),[J,pe]=b.useState(!1),[$,Ce]=b.useState("answer"),[$e,Me]=b.useState(0),[rt,wt]=b.useState(null),[at,tn]=b.useState({}),[zt,Kn]=b.useState({}),[Zt,Wa]=b.useState({key:!1,mine:!1,cmp:!1}),[Ia,Ol]=b.useState({}),[ql,Pa]=b.useState(!0),[Yi,Ca]=b.useState(!1),[Mt,ho]=b.useState({}),[Lt,_n]=b.useState(null),[Tt,Aa]=b.useState(null),[el,bn]=b.useState(null),Hl=h=>{const M=[];for(const F of Array.from(h.getClientRects()))F.width<1||F.height<1||M.push({x:F.left,y:F.top,w:F.width,h:F.height});return M};b.useEffect(()=>{if(!Tt||Tt.result!==null)return;let h=!0;return eg(Tt.text).then(M=>{h&&Aa(F=>F&&F.text===Tt.text?{...F,result:M}:F)}).catch(()=>{h&&Aa(M=>M&&{...M,result:"翻译服务暂不可用"})}),()=>{h=!1}},[Tt]);const Jn=J?"panel":"popup",St=b.useRef("popup");b.useEffect(()=>{St.current=Jn},[Jn]);const[Rt,bt]=b.useState(null),[Gi,Ul]=b.useState(""),[go,vn]=b.useState(!1),[$n,Ea]=b.useState("up"),[Ot,Fn]=b.useState(!1),[Wn,Xi]=b.useState("up"),[Bl,za]=b.useState(0),[In,Yl]=b.useState(!0),[Vi,tl]=b.useState(!1),[nn,nl]=b.useState(null),Gl=130;b.useEffect(()=>{if(!Ot)return;const h=window.setInterval(()=>za(M=>M+1),1e3);return()=>window.clearInterval(h)},[Ot]);const Xl=h=>{const M=Math.floor(h/60),F=h%60;return`${String(M).padStart(2,"0")}:${String(F).padStart(2,"0")}`},Qi=Vi?"--:--":Xl(Wn==="up"?Bl:Math.max(0,Gl*60-Bl)),wn=()=>{Ot?Yl(h=>!h):vn(!0)},ut=b.useRef(null),_t=h=>{ut.current={px:h.clientX,py:h.clientY,ox:(nn==null?void 0:nn.x)??0,oy:(nn==null?void 0:nn.y)??0},h.currentTarget.setPointerCapture(h.pointerId)},Pn=h=>{const M=ut.current;M&&nl({x:M.ox+h.clientX-M.px,y:M.oy+h.clientY-M.py})},Vl=()=>{ut.current=null},Zi=h=>{try{Ul(localStorage.getItem(h.storeKey)||"")}catch{Ul("")}bt(h)},mo=()=>{if(Rt){try{localStorage.setItem(Rt.storeKey,Gi)}catch{}bt(null)}},{ann:Ki,tool:an,setTool:Ql,addStroke:Sn,appendPoint:ea,addNote:_a,updateNote:ta,eraseIds:pt,eraseLocal:Ji,mapAnnotations:Zl,captureAnchors:kn,applyAnchors:Nn,eraserSize:$i,setEraserSize:Fi,undo:Wi,setPenSetting:xo,setShapeSetting:al,penProps:jn,shapeProps:ln,canUndo:qt}=F2(c.id);b.useLayoutEffect(()=>{const h=m.current;m.current=null;const M=De();if(!(h!=null&&h.length)||!(M!=null&&M.length)||h.length!==M.length)return;const F=(P,Q,le)=>{let A=-1;for(let q=0;q<P.length;q++){const I=P[q];if(Q>=I.x&&Q<=I.x+I.w&&le>=I.y&&le<=I.y+I.h){A=q;break}}if(A>=0)return A;let R=0,D=1/0;return P.forEach((q,I)=>{const fe=q.x+q.w/2,Le=q.y+q.h/2,Re=(fe-Q)**2+(Le-le)**2;Re<D&&(D=Re,R=I)}),R};Zl(P=>{const Q=P.x/Ke,le=P.y/Ke,A=F(h,Q,le),R=h[A],D=M[A],q=R.w?(Q-R.x)/R.w:0,I=R.h?(le-R.y)/R.h:0;return{x:(D.x+q*D.w)*Ke,y:(D.y+I*D.h)*Ke}})},[ae,De,Zl]);const Kl=b.useRef(Se),Ii=b.useRef(c.id);b.useLayoutEffect(()=>{var D;const h=Kl.current!==Se,M=Ii.current!==c.id;if(Kl.current=Se,Ii.current=c.id,!h||M)return;const F=ne.current;if(!F||!B)return;const P=(D=_e.current)==null?void 0:D.querySelector(".pd-anno-svg");if(!P){Cs(F,B.title,Se);return}const Q=q=>{const I=P.getBoundingClientRect();return{x:I.left+q.x/Ke*I.width,y:I.top+q.y/Ke*I.height}},le=(q,I)=>{const fe=P.getBoundingClientRect();return{x:(q-fe.left)/fe.width*Ke,y:(I-fe.top)/fe.height*Ke}},A=".pd-page, .pd-page-body, .pd-page-foot, .pd-anno-svg, .pd-grid-bg",R=kn(q=>{const I=Q(q);let fe=null;for(const Re of document.elementsFromPoint(I.x,I.y))if(Re!==P&&!(Re instanceof Element&&Re.matches(A))&&F.contains(Re)){fe=Re;break}if(!fe){let Re=null,tt=1/0;F.querySelectorAll("p, h2, h3, .option, .question, .blank, li, strong").forEach(Oe=>{const Te=Oe.getBoundingClientRect(),qe=Math.max(Te.left-I.x,0,I.x-Te.right),je=Math.max(Te.top-I.y,0,I.y-Te.bottom),Ee=qe*qe+je*je;Ee<tt&&(tt=Ee,Re=Oe)}),fe=Re}if(!fe)return{el:null,dx:0,dy:0};const Le=fe.getBoundingClientRect();return{el:fe,dx:I.x-Le.left,dy:I.y-Le.top}});Cs(F,B.title,Se),Nn(R,q=>{if(!q.el||!q.el.isConnected)return q.orig;const I=q.el.getBoundingClientRect();return le(I.left+q.dx,I.top+q.dy)})},[Se,u,kn,Nn]),b.useEffect(()=>{an!=="select"&&bn(null)},[an]);const ll=b.useRef("select");b.useEffect(()=>{ll.current=an},[an]);const Jl=b.useRef(jn);b.useEffect(()=>{Jl.current=jn},[jn]);const il=b.useCallback((h,M)=>{var Xe;const F=ne.current;if(!F||M.length<2)return;const P=(F.closest(".pd-sheet")||F).querySelector(".pd-anno-svg");if(!P)return;const Q=P.getBoundingClientRect(),le=Q.width||1,A=Q.height||1;let R=1/0,D=-1/0,q=1/0,I=-1/0;for(const ye of M)ye.x<R&&(R=ye.x),ye.x>D&&(D=ye.x),ye.y<q&&(q=ye.y),ye.y>I&&(I=ye.y);const fe=Jl.current.highlight.color,Le=h==="highlight"?fo(fe,.38):fe,Re=[],tt=document.createTreeWalker(F,NodeFilter.SHOW_TEXT);let Oe=tt.nextNode();for(;Oe;){if((Oe.textContent||"").trim()){let Ve=Oe.parentElement;for(;Ve&&Ve!==F&&!Ve.classList.contains("pd-page");)Ve=Ve.parentElement;if(Ve){const rn=parseFloat(getComputedStyle(Oe.parentElement).fontSize)||15,Ht=document.createRange();Ht.selectNodeContents(Oe);for(const Ut of Array.from(Ht.getClientRects()))Ut.width<1||Ut.height<1||Re.push({left:Ut.left,right:Ut.right,top:Ut.top,bottom:Ut.bottom,fs:rn});(Xe=Ht.detach)==null||Xe.call(Ht)}}Oe=tt.nextNode()}const Te=8,qe=[];for(const ye of Re){if(ye.bottom<q||ye.top>I)continue;const Ve=Math.max(ye.left,R),rn=Math.min(ye.right,D);rn-Ve<Te||qe.push({x0:Ve,x1:rn,top:ye.top,bottom:ye.bottom,fs:ye.fs})}if(!qe.length)return;qe.sort((ye,Ve)=>ye.top-Ve.top||ye.x0-Ve.x0);const je=[];for(const ye of qe){const Ve=je[je.length-1];Ve&&Math.abs(Ve.top-ye.top)<=3&&Math.abs(Ve.bottom-ye.bottom)<=3?(Ve.x0=Math.min(Ve.x0,ye.x0),Ve.x1=Math.max(Ve.x1,ye.x1),Ve.fs=Math.max(Ve.fs,ye.fs)):je.push({...ye})}const Ee=je.map((ye,Ve)=>{let rn,Ht;if(h==="highlight"){const Ut=Math.min(ye.bottom-ye.top,ye.fs*1.05);rn=ye.top+(ye.bottom-ye.top-Ut)/2+ye.fs*.08,Ht=rn+Ut}else rn=Ht=ye.bottom-ye.fs*.12;return{id:`snap-${Date.now()}-${Ve}-${Math.random().toString(36).slice(2,7)}`,tool:h,pts:[{x:(ye.x0-Q.left)/le*1e3,y:(rn-Q.top)/A*1e3},{x:(ye.x1-Q.left)/le*1e3,y:(Ht-Q.top)/A*1e3}],color:Le,width:0}});for(const ye of Ee)Sn(ye)},[Sn]),Pi=b.useRef(()=>{}),kt=b.useCallback((h,M)=>{const F=Array.from(h.querySelectorAll(".option")),P=F.indexOf(M);if(P<0)return;F.forEach(A=>A.classList.remove("selected")),M.classList.add("selected");const Q=String.fromCharCode(65+P);h.setAttribute("data-ans",Q),uo(h,Q);const le=ne.current;if(le){const A={};le.querySelectorAll(".question").forEach((R,D)=>{const q=R.querySelector(".option.selected");q&&(A[D]=Array.from(R.querySelectorAll(".option")).indexOf(q))});try{localStorage.setItem(`cet:answer:${c.id}`,JSON.stringify(A))}catch{}}Pi.current()},[c.id]),$l=b.useRef(kt);$l.current=kt,b.useEffect(()=>{ee(!1),se(null),ue(0)},[c.id]),b.useEffect(()=>{let h=0;const M=()=>{h=0;const P=ne.current;if(!P)return;const Q=Array.from(P.querySelectorAll("h2")),le=Q.find(I=>/Part II|Listening/i.test(I.textContent||""));if(!le){Pa(!0);return}const A=Q.find(I=>/Part III|Reading Comprehension/i.test(I.textContent||"")),R=le.getBoundingClientRect(),D=A?A.getBoundingClientRect():R,q=window.innerHeight;Pa(R.top<q-40&&D.bottom>40)},F=()=>{h||(h=requestAnimationFrame(M))};return window.addEventListener("scroll",F,!0),window.addEventListener("resize",F),M(),()=>{window.removeEventListener("scroll",F,!0),window.removeEventListener("resize",F),h&&cancelAnimationFrame(h)}},[u]),b.useEffect(()=>{const h=ne.current;if(!h||!B)return;h.innerHTML=m2(B.html);{const A={};h.querySelectorAll(".question[data-answer]").forEach(R=>{var I;const D=(((I=R.querySelector("strong"))==null?void 0:I.textContent)||"").match(/\d+/),q=R.getAttribute("data-answer");D&&q&&(A[Number(D[0])]=q)}),h.querySelectorAll(".blank[data-answer]").forEach(R=>{const D=Number(R.getAttribute("data-blank")),q=R.getAttribute("data-answer");D&&q&&(A[D]=q)}),Ol(A)}h.querySelectorAll("div").forEach(A=>{const R=A.getAttribute("style")||"";if(R.includes("linear-gradient")||R.includes("backdrop-filter"))if(A.querySelector("h2")){const D=A.cloneNode(!0);D.querySelectorAll("h2").forEach(I=>I.remove());const q=(D.textContent||"").replace(/•/g,"·").trim();if(q){const I=document.createElement("p");I.className="pd-structure",I.textContent=q,A.replaceWith(I)}else A.remove()}else A.remove()}),h.querySelectorAll("h2, h3, h4").forEach(A=>{const R=A.textContent||"",D=R.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").trim();if(D!==R){const q=A.querySelector("strong");q&&q.childNodes.length===1?q.textContent=D:A.textContent=D}A.removeAttribute("style")}),h.querySelectorAll("p, li, ul, span, section").forEach(A=>{A.removeAttribute("style")}),h.querySelectorAll("i.fas, i.far, i.fab").forEach(A=>A.remove()),h.querySelectorAll(".question").forEach(A=>{var D,q;if((D=A.parentElement)!=null&&D.classList.contains("qblock"))return;const R=document.createElement("div");R.className="qblock",(q=A.parentElement)==null||q.insertBefore(R,A),R.appendChild(A)}),h.querySelectorAll("p").forEach(A=>{const R=A.querySelector("strong");R&&/^Directions[:：]?\s*$/.test((R.textContent||"").trim())&&A.classList.add("pd-dir")});const M=A=>/writing/i.test(A)?[{label:"我的作文",kind:"essay"}]:/listening/i.test(A)?[{label:"播放听力",kind:"listen"}]:/translation/i.test(A)?[{label:"我的翻译",kind:"translation"},{label:"翻译范文",kind:"fanwen"}]:[];h.querySelectorAll("h2").forEach(A=>{const D=(A.textContent||"").trim().match(/^(Part\s+[IVX0-9]+)\s+(.+?)\s*\(([^)]+)\)\s*$/i);if(!D)return;const[,q,I,fe]=D;A.classList.add("pd-part");const Le=M(I.trim());A.innerHTML=`<span class="pd-part-no">${q}</span>`+(Le.length?`<span class="pd-part-badges">${Le.map(Re=>`<button type="button" class="pd-badge" data-kind="${Re.kind}">${Re.label}</button>`).join("")}</span>`:"")+`<span class="pd-part-name">${I.trim()}</span><span class="pd-part-time">(${fe})</span>`});{let A="";h.querySelectorAll("h2, h3").forEach(R=>{const D=(R.textContent||"").trim();if(R.tagName==="H2"){A=D;return}/^\s*Section\s+[A-Z]/i.test(D)&&(R.classList.add("pd-sec"),/reading\s+comprehension/i.test(A)&&R.classList.add("pd-break-sec"))})}h.querySelectorAll("h2").forEach(A=>{if(!/Writing/i.test(A.textContent||""))return;let R=A.nextElementSibling;for(;R&&R.tagName!=="H2";){const D=R.nextElementSibling;if(R.tagName==="DIV"&&/写作提示/.test(R.textContent||""))R.remove();else if(R.tagName==="P"&&/Directions/i.test(R.textContent||"")){const q=R;let I=q.innerHTML.replace(/[“"][^”"]*[”"]/g,Le=>`<strong>${Le}</strong>`).replace(/\b(150|200)\b(?=\s*words)/g,"<u>$1</u>");const fe=new RegExp("(?:^|(?<=[.!?]\\s))([^<>]+?[.!?])\\s*$").exec(I);if(fe&&fe[1].trim().length>10){const Le=fe[1],Re=fe.index+fe[0].indexOf(Le);I=I.slice(0,Re);const tt=document.createElement("p");tt.className="pd-indent",tt.innerHTML=Le,q.after(tt)}q.innerHTML=I}R=D}}),h.querySelectorAll("h3").forEach(A=>{/词库|Word Bank/i.test(A.textContent||"")&&A.closest("div")&&A.remove()}),h.querySelectorAll("p").forEach(A=>{const R=A.querySelector("strong");if(!R||A.children.length!==1)return;const D=(A.textContent||"").trim();D===(R.textContent||"").trim()&&(!D||D.length>80||/^Passage\s+(One|Two)$/i.test(D)||/^Questions\b/i.test(D)||/^\d+\.$/.test(D)||/[：:]$/.test(D)||A.classList.add("pd-article-title"))}),h.querySelectorAll(".question").forEach(A=>{const R=A.querySelector("p, h3");if(!R)return;const D=R.querySelector("strong"),q=((D==null?void 0:D.textContent)||"").match(/^\s*(\d{1,2})\s*[\.、]?\s*$/);D&&q&&(D.classList.add("pd-qnum"),D.textContent=q[1])}),h.querySelectorAll(".options").forEach(A=>{Array.from(A.querySelectorAll(".option")).reduce((q,I)=>Math.max(q,(I.textContent||"").length),0)>42&&A.classList.add("single")}),Cs(h,(u==null?void 0:u.title)??c.title,ge.current);const F=localStorage.getItem(`cet:answer:${c.id}`);if(F)try{const A=JSON.parse(F);Object.entries(A).forEach(([R,D])=>{const q=h.querySelectorAll(".question")[Number(R)];if(!q)return;const I=q.querySelectorAll(".option");if(I[D]){I[D].classList.add("selected");const fe=String.fromCharCode(65+Number(D));q.setAttribute("data-ans",fe),uo(q,fe)}})}catch{}const P=localStorage.getItem(`cet:blank:${c.id}`);if(P)try{const A=JSON.parse(P);Object.entries(A).forEach(([R,D])=>{const q=h.querySelector(`.blank[data-blank="${R}"]`);q&&(q.textContent=`${R} ${D}`,q.classList.add("filled"))})}catch{}const Q=()=>Kt(),le=A=>{var fe,Le,Re,tt,Oe;const R=A.target;if(ll.current==="select"&&!R.closest("button, a, .option, .pd-qnum, .blank, .pd-blank, .pd-note, .pd-card, .pd-float-bar, .pd-timer-bar")){const Te=(((fe=window.getSelection())==null?void 0:fe.toString())||"").trim(),qe=localStorage.getItem("cet:trans:mode")||"word";let je="";if(Te.length>1){je=Te;const Ee=window.getSelection(),Xe=Ee&&Ee.rangeCount?Ee.getRangeAt(0):null,ye=Xe?Hl(Xe):[];bn(ye.length?{kind:"sentence",rects:ye}:null)}else if(qe==="word"){const Ee=I2(A.clientX,A.clientY);je=Ee.text;const Xe=Ee.range?Hl(Ee.range):[];bn(Xe.length?{kind:"word",rects:Xe}:null)}else if(qe==="sentence"){const Ee=P2(A.clientX,A.clientY);je=Ee.text;const Xe=Ee.range?Hl(Ee.range):[];bn(Xe.length?{kind:"sentence",rects:Xe}:null)}else qe==="paragraph"?(je=((Re=(Le=R.closest("p"))==null?void 0:Le.textContent)==null?void 0:Re.trim())||"",bn(null)):(je=((tt=h.innerText)==null?void 0:tt.trim())||"",bn(null));je&&je.length<=12e3?Aa({text:je,x:A.clientX,y:A.clientY,result:null}):(Aa(null),bn(null))}if(R.closest(".pd-badge")){const Te=R.closest(".pd-badge").dataset.kind;Te==="essay"?Zi({kind:"essay",title:"我的作文",placeholder:"开始写作...",storeKey:`cet:essay:${c.id}`}):Te==="translation"?Zi({kind:"translation",title:"我的翻译",placeholder:"开始翻译...",storeKey:`cet:translation:${c.id}`}):window.alert("该功能即将上线");return}const D=R.closest(".pd-qnum");if(D){if(ge.current==="paper")return;const Te=D.closest(".question"),qe=Array.from(h.querySelectorAll(".question")),je=Te?qe.indexOf(Te):-1;if(je>=0)if(St.current==="panel"){_n(null);const{list:Ee}=so(h),Xe=Ee.find(ye=>ye.el===Te);Me(Xe?Ee.indexOf(Xe):je),Ce("question"),pe(!0)}else{const Ee=D.getBoundingClientRect();wt({kind:"question",qi:je,x:Ee.left+Ee.width/2,y:Ee.bottom})}return}const q=R.closest(".blank, .pd-blank");if(q){if(ge.current==="paper")return;const Te=q.getBoundingClientRect(),qe=q.closest(".question"),je=Number(q.getAttribute("data-blank"))||Number(((Oe=qe==null?void 0:qe.querySelector(".pd-qnum"))==null?void 0:Oe.textContent)||0);St.current==="panel"?(_n(je),Ce("question"),pe(!0)):wt({kind:"blank",blankNo:je,x:Te.left+Te.width/2,y:Te.bottom});return}R.closest(".option")};return h.addEventListener("click",le),Q(),()=>{h.removeEventListener("click",le),be.current&&clearTimeout(be.current)}},[u]);const Fl=b.useRef(!1);b.useEffect(()=>{if(!B||Fl.current||(Fl.current=!0,localStorage.getItem("cet:spread")!=="1"))return;const h=requestAnimationFrame(()=>w(!0));return()=>cancelAnimationFrame(h)},[u,w]),b.useEffect(()=>{const h=ne.current;if(!h||!B)return;const M=(L==null?void 0:L.questionTimes)??{},F=[],P=Array.from(h.querySelectorAll("p, strong, h3, h4, div")).filter(le=>/Questions\s+\d+\s+to\s+\d+[^<]*you have just heard/i.test(le.textContent||"")),Q=P.filter(le=>!P.some(A=>A!==le&&le.contains(A)));return Q.forEach(le=>{const A=(le.textContent||"").match(/Questions\s+(\d+)\s+to\s+\d+/i);if(!A)return;const R=Number(A[1]),D=M[R],q=document.createElement("button");q.type="button",q.className="pd-horn",q.dataset.no=String(R),q.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/></svg>',D!=null?(q.title=`播放第 ${R} 题开始的听力`,q.addEventListener("click",I=>{I.stopPropagation(),I.preventDefault(),window.dispatchEvent(new CustomEvent("cet:lp2-jump",{detail:{no:R,time:D}}))})):(q.title=`第 ${R} 题听力（音频待导入）`,q.addEventListener("click",I=>{I.stopPropagation(),I.preventDefault(),W2(q,"音频待导入")})),le.classList.add("has-horn"),le.prepend(q),F.push(q)}),()=>{F.forEach(le=>le.remove()),Q.forEach(le=>le.classList.remove("has-horn"))}},[L,u]);const Kt=b.useCallback(()=>{const h=ne.current;if(!h)return;const{list:M,blankNos:F}=so(h),P={};let Q={},le={};try{Q=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}")}catch{}try{le=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}")}catch{}M.forEach(({el:R,no:D,kind:q})=>{if(q==="choice"){const I=R.querySelector(".option.selected");if(I){const fe=Array.from(R.querySelectorAll(".option")).indexOf(I);P[D]=String.fromCharCode(65+fe)}}else{const I=Q[String(D)];I&&(P[D]=I)}}),F.forEach(R=>{const D=le[String(R)];D&&(P[R]=D)});const A=tg.map(R=>{const D=[];for(let q=R.start;q<R.start+R.count;q++)P[q]&&D.push(q);return{name:R.name,start:R.start,count:R.count,done:D}});tn(P),ue(A.reduce((R,D)=>R+D.done.length,0)),K(A)},[c.id]);b.useEffect(()=>{Pi.current=Kt},[Kt]);const Mn=()=>{ee(!0);let h=0,M=0;const F={},P=ne.current;if(P){let Q={},le={};try{Q=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}")}catch{}try{le=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}")}catch{}P.querySelectorAll(".question").forEach(A=>{var tt;const R=A.getAttribute("data-answer"),D=A.querySelector(".option.selected");if(A.classList.remove("is-right","is-wrong"),!R)return;M+=1;const q=(((tt=A.querySelector("strong"))==null?void 0:tt.textContent)||"").match(/\d+/),I=q?Number(q[0]):0;let fe=D?String.fromCharCode(65+Array.from(A.querySelectorAll(".option")).indexOf(D)):"";!fe&&I&&Q[String(I)]&&(fe=Q[String(I)]),fe&&(F[I]=fe),fe&&fe===R?(h+=1,A.classList.add("is-right")):A.classList.add("is-wrong");const Le=Array.from(A.querySelectorAll(".option"));Le.forEach(Oe=>Oe.classList.remove("answer-key"));const Re=Le.find(Oe=>{var Te;return(((Te=Oe.querySelector("strong"))==null?void 0:Te.textContent)||"").trim().replace(/[).]/g,"")===R});Re==null||Re.classList.add("answer-key")}),P.querySelectorAll(".blank[data-answer]").forEach(A=>{const R=A.getAttribute("data-answer"),D=A.getAttribute("data-blank");if(A.classList.remove("is-right","is-wrong"),!R||!D)return;M+=1;const q=le[D]||"";q&&(F[Number(D)]=q),q&&q===R?(h+=1,A.classList.add("is-right")):A.classList.add("is-wrong")})}se({right:h,judged:M});try{const Q=JSON.parse(localStorage.getItem("cet:history")||"[]");Q.unshift({id:c.id,title:c.title,ts:Date.now(),right:h,judged:M,snap:F}),localStorage.setItem("cet:history",JSON.stringify(Q.slice(0,20)))}catch{}},er=()=>{if(!window.confirm("确定清空本卷全部作答记录？"))return;["cet:answer:","cet:blank:","cet:match:"].forEach(M=>{try{localStorage.removeItem(M+c.id)}catch{}});const h=ne.current;h&&(h.querySelectorAll(".option.selected").forEach(M=>M.classList.remove("selected")),h.querySelectorAll(".question").forEach(M=>M.classList.remove("is-right","is-wrong")),h.querySelectorAll(".option.answer-key").forEach(M=>M.classList.remove("answer-key")),h.querySelectorAll(".question").forEach(M=>{uo(M,null),M.removeAttribute("data-ans"),M.removeAttribute("data-picked")}),h.querySelectorAll(".blank[data-blank]").forEach(M=>{M.textContent=M.getAttribute("data-blank")||"",M.classList.remove("filled","is-right","is-wrong")})),Kn({}),Wa({key:!1,mine:!1,cmp:!1}),Ca(!1),ee(!1),Kt()},tr=h=>{const M=ne.current;if(!M)return;M.querySelectorAll(".option.selected").forEach(Q=>Q.classList.remove("selected")),M.querySelectorAll(".question").forEach(Q=>Q.classList.remove("is-right","is-wrong")),M.querySelectorAll(".option.answer-key").forEach(Q=>Q.classList.remove("answer-key")),M.querySelectorAll(".question").forEach(Q=>{uo(Q,null),Q.removeAttribute("data-ans"),Q.removeAttribute("data-picked")}),M.querySelectorAll(".blank[data-blank]").forEach(Q=>{Q.classList.remove("filled","is-right","is-wrong"),Q.textContent=Q.getAttribute("data-blank")||""}),M.querySelectorAll(".question").forEach(Q=>{var D,q;const le=(((D=Q.querySelector("strong"))==null?void 0:D.textContent)||"").match(/\d+/),A=le?Number(le[0]):0,R=h[A];if(R){const I=Q.querySelectorAll(".option"),fe=R.charCodeAt(0)-65;(q=I[fe])==null||q.classList.add("selected")}});const F={},P={};M.querySelectorAll(".blank[data-blank]").forEach(Q=>{const le=Q.getAttribute("data-blank")||"",A=h[Number(le)];A&&(Q.textContent=`${le} ${A}`,Q.classList.add("filled"),F[le]=A)}),Object.entries(h).forEach(([Q,le])=>{const A=Number(Q);A>=36&&A<=45&&(P[Q]=le)});try{const Q={};M.querySelectorAll(".question").forEach((le,A)=>{const R=le.querySelector(".option.selected");R&&(Q[String(A)]=Array.from(le.querySelectorAll(".option")).indexOf(R))}),localStorage.setItem(`cet:answer:${c.id}`,JSON.stringify(Q)),localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(F)),localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(P))}catch{}Kt(),Mn(),Ca(!1)};return(u==null?void 0:u.title)??c.title,r.jsxs("div",{className:`pd-root${Se==="paper"?" is-paper-mode":""}`,"data-card":J?"open":"closed",children:[r.jsxs("div",{className:"pd-toolbar",children:[r.jsxs("div",{className:"pd-left",children:[r.jsx("button",{className:"pd-back",onClick:d,title:"返回真题列表","aria-label":"返回真题列表",children:r.jsx(r2,{width:16,height:16})}),r.jsx("button",{type:"button",className:"pd-alarm",onClick:wn,title:Ot?In?"收起计时":"显示计时":"计时","aria-label":"计时",children:"⏱"}),r.jsx("div",{className:`pd-listening${ql?"":" is-hidden"}`,children:S?r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频加载中",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频加载中…"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]}):L?r.jsx(g2,{meta:L,title:`听力音频 · ${c.title}`}):r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频待导入",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频待导入"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]})})]}),r.jsxs("div",{className:"pd-corner",children:[G&&r.jsx(As,{onClick:()=>{const[h]=Ui(G);window.open(h,"_blank","noopener")},icon:r.jsx(wp,{width:15,height:15}),label:"试卷PDF"}),Z&&r.jsx(As,{onClick:()=>{const[h]=Ui(Z);window.open(h,"_blank","noopener")},icon:r.jsx(wp,{width:15,height:15}),label:"答案PDF"}),p&&r.jsx(As,{onClick:()=>{const[h]=Ui(p);window.open(h,"_blank","noopener")},icon:r.jsx("span",{style:{fontSize:15,lineHeight:1},children:"🎧"}),label:"听力音频"})]})]}),O?r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"正在载入试卷…"})}):B?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:lg}),r.jsxs("div",{className:`pd-sheet${ae?" is-spread":""}`,ref:_e,style:{zoom:te},children:[r.jsx(L2,{ann:Ki,tool:an,penProps:jn,shapeProps:ln,onAddStroke:Sn,onAppendPoint:ea,onSnap:il,onEraseIds:pt,onEraseLocal:Ji,eraserSize:$i,onAddNote:_a,onUpdateNote:ta}),r.jsx("div",{className:"exam-content-root",ref:ne})]})]}):r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"暂无该试卷的内容数据"})}),C.length>0&&r.jsxs("div",{className:"pd-card","data-collapsed":J?"false":"true",children:[r.jsxs("div",{className:"pd-card-side",children:[r.jsxs("button",{type:"button",className:"pd-card-progress",title:$==="question"?"切换到答题卡":"切换到题目",onClick:()=>Ce(h=>h==="question"?"answer":"question"),children:[W,"/",C.reduce((h,M)=>h+M.count,0)]}),r.jsx("button",{type:"button",className:"pd-card-toggle",onClick:()=>pe(h=>!h),title:J?"收起答题卡":"展开答题卡","aria-label":J?"收起答题卡":"展开答题卡",children:J?"›":"‹"}),$==="answer"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`pd-card-tool${Zt.key?" on":""}`,title:"显示正确答案（点击一键全部显示/隐藏）","aria-label":"显示正确答案",onClick:()=>{const h=!Zt.key;Wa(M=>({...M,key:h}))},children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13",children:[r.jsx("path",{d:"M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",fill:"currentColor"}),!Zt.key&&r.jsx("line",{x1:"4",y1:"20",x2:"20",y2:"4",stroke:"currentColor",strokeWidth:"2"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Zt.mine?" on":""}`,title:"题号后显示我的作答","aria-label":"显示我的作答",onClick:()=>Wa(h=>({...h,mine:!h.mine})),children:"我"}),r.jsx("button",{type:"button",className:`pd-card-tool${Zt.cmp?" on":""}`,title:"交卷自测（判分）：对绿框 / 错红框","aria-label":"交卷自测",onClick:()=>{const h=!Zt.cmp;Wa(M=>({...M,cmp:h})),h&&Mn()},children:"交"}),r.jsx("button",{type:"button",className:"pd-card-tool",title:"清空本卷作答记录（重新作答）","aria-label":"删除作答记录",onClick:er,children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13","aria-hidden":"true",children:[r.jsx("path",{d:"M4 7h16M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2.5 0v11.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V7",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Yi?" on":""}`,title:"查看作答记录与对错情况","aria-label":"作答记录",onClick:()=>Ca(h=>!h),children:"录"})]})]}),r.jsxs("div",{className:"pd-card-panel",children:[$==="question"&&r.jsx("div",{className:"pd-card-question",children:Lt!==null?(()=>{const h=ne.current,M=h==null?void 0:h.querySelector(`.blank[data-blank="${Lt}"], .pd-blank`),F=Mp(h),P=at[Lt];return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["选项 ",Lt]})}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(Q,le)=>String.fromCharCode(65+le)).map(Q=>r.jsx("button",{type:"button",className:`pd-picker-circle${P===Q?" on":""}`,onClick:()=>{M&&(M.textContent=`${Lt} ${Q}`,M.classList.add("filled"));try{const le=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}");le[Lt]=Q,localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(le))}catch{}Kt()},children:Q},Q))}),F.length>0&&r.jsx("ul",{className:"pd-picker-words",children:F.map(Q=>r.jsx("li",{children:Q},Q))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt<=26,onClick:()=>_n(Lt-1),"aria-label":"上一空",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(Q,le)=>r.jsx("span",{className:26+le===Lt?"on":""},le))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt>=35,onClick:()=>_n(Lt+1),"aria-label":"下一空",children:"›"})]})]})})():(()=>{var fe,Le,Re,tt;const h=ne.current,{list:M}=so(h||document.createElement("div")),F=M[$e];if(!F)return null;const{el:P,no:Q,kind:le}=F;if(le==="match"){const Oe=((Le=(fe=P.querySelector("p"))==null?void 0:fe.textContent)==null?void 0:Le.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",Te=at[Q],qe=[];{let je=(P.closest(".qblock")||P).previousElementSibling,Ee=null;for(;je;){if(je.tagName==="H3"){Ee=je;break}if(je.tagName==="H2")break;je=je.previousElementSibling}let Xe=(Ee==null?void 0:Ee.nextElementSibling)??null;for(;Xe&&Xe.tagName!=="H2";){if(Xe.tagName==="P"){const ye=Xe.querySelector("strong"),Ve=/^([A-P])\.$/.exec(((ye==null?void 0:ye.textContent)||"").trim());Ve&&qe.push({letter:Ve[1],text:(Xe.textContent||"").replace(/^[A-N]\./,"").trim().slice(0,64),el:Xe})}Xe=Xe.nextElementSibling}}return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",Q," 题"]})}),qe.length>0&&r.jsx("ul",{className:"pd-match-paras",children:qe.map(je=>r.jsxs("li",{onClick:()=>je.el.scrollIntoView({behavior:"smooth",block:"center"}),children:[r.jsx("b",{children:je.letter}),r.jsxs("span",{children:[je.text,"…"]})]},je.letter))}),Oe&&r.jsx("p",{className:"pd-picker-stem",children:Oe}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:16},(je,Ee)=>String.fromCharCode(65+Ee)).map(je=>r.jsx("button",{type:"button",className:`pd-picker-circle${Te===je?" on":""}`,onClick:()=>{try{const Ee=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}");Ee[Q]=je,localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(Ee))}catch{}Kt()},children:je},je))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Q<=36,onClick:()=>Me($e-1),"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(je,Ee)=>r.jsx("span",{className:36+Ee===Q?"on":""},Ee))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Q>=45,onClick:()=>Me($e+1),"aria-label":"下一题",children:"›"})]})]})}const A=Ep(P),R=((tt=(Re=P.querySelector("p"))==null?void 0:Re.textContent)==null?void 0:tt.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",D=Array.from(P.querySelectorAll(".option")),q=M.filter(Oe=>Ep(Oe.el)===A).map(Oe=>Oe.no),I=q.indexOf(Q);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",Q," 题"]})}),R&&r.jsx("p",{className:"pd-picker-stem",children:R}),r.jsx("div",{className:"pd-picker-opts",children:D.map((Oe,Te)=>{const qe=String.fromCharCode(65+Te),je=Oe.classList.contains("selected");return r.jsxs("button",{type:"button",className:`pd-picker-opt${je?" on":""}`,onClick:()=>{kt(P,Oe)},children:[r.jsx("span",{className:"pd-picker-letter",children:qe}),r.jsx("span",{className:"pd-picker-text",children:(Oe.textContent||"").replace(/^[A-D]\)\s*/,"").trim()})]},Te)})}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:I<=0,onClick:()=>{const Oe=q[I-1],Te=M.find(qe=>qe.no===Oe);Te&&Me(M.indexOf(Te))},"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:q.map(Oe=>r.jsx("span",{className:Oe===Q?"on":""},Oe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:I>=q.length-1,onClick:()=>{const Oe=q[I+1],Te=M.find(qe=>qe.no===Oe);Te&&Me(M.indexOf(Te))},"aria-label":"下一题",children:"›"})]})]})})()}),$==="answer"&&r.jsx("div",{className:"pd-card-acc",children:C.map((h,M)=>{const F=h.name==="听力"?` · ${h.count} 题`:h.name==="选词填空"||h.name==="长篇阅读"?` · ${h.start}-${h.start+h.count-1}`:"",P=!!Mt[h.name];return r.jsxs("div",{className:"pd-card-sec",children:[r.jsxs("button",{type:"button",className:"pd-card-secrow","aria-expanded":P,onClick:()=>ho(Q=>({...Q,[h.name]:!Q[h.name]})),children:[r.jsx("b",{children:M+1}),r.jsxs("span",{className:"pd-card-secname",children:[h.name,F&&r.jsx("em",{children:F})]}),r.jsxs("span",{className:"pd-card-secnum",children:[h.done.length,"/",h.count]}),r.jsx("svg",{className:`pd-card-caret${P?" open":""}`,viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:r.jsx("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),P&&r.jsx("div",{className:"pd-card-grid",children:Array.from({length:h.count}).map((Q,le)=>{const A=h.start+le,R=h.done.includes(A),D=()=>{const fe=ne.current;if(!fe)return;const Le=(A>=26&&A<=35?fe.querySelector(`.blank[data-blank="${A}"]`):null)||[...fe.querySelectorAll(".question")].find(Re=>{var tt;return((tt=Re.querySelector(".pd-qnum"))==null?void 0:tt.textContent)===String(A)});Le==null||Le.scrollIntoView({behavior:"smooth",block:"center"})},q=()=>{const fe=ne.current;if(fe){if(A>=26&&A<=35)_n(A),Me(0);else{_n(null);const{list:Le}=so(fe),Re=Le.find(tt=>tt.no===A);Re&&Me(Le.indexOf(Re))}Ce("question"),pe(!0)}},I=Zt.cmp?at[A]&&at[A]===Ia[A]?" cmp-right":" cmp-wrong":"";return r.jsxs("div",{role:"button",tabIndex:0,className:`pd-card-cell${R?" done":""}${I}`,title:`第 ${A} 题${R?"（已答）":""}`,onClick:D,onKeyDown:fe=>{fe.key==="Enter"&&D()},children:[r.jsx("button",{type:"button",className:"pd-cell-parse",title:"查看题目 / 解析",onClick:fe=>{fe.stopPropagation(),q()},children:"解析"}),Zt.key&&Ia[A]&&r.jsx("span",{className:"pd-cell-key",children:Ia[A]}),Zt.mine&&at[A]&&r.jsx("span",{className:"pd-cell-mine",children:at[A]}),r.jsx("span",{className:"pd-cell-no",children:A})]},le)})})]},`${h.name}-${M}`)})})]})]}),Yi&&(()=>{let h=[];try{h=JSON.parse(localStorage.getItem("cet:history")||"[]")}catch{}const M=h.filter(F=>F.id===c.id);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-history-mask",onClick:()=>Ca(!1)}),r.jsxs("div",{className:"pd-history-dialog",children:[r.jsxs("header",{className:"pd-history-head",children:[r.jsxs("b",{children:["作答记录 · ",c.title]}),r.jsx("button",{type:"button",className:"pd-history-close",onClick:()=>Ca(!1),"aria-label":"关闭",children:"✕"})]}),M.length===0?r.jsx("div",{className:"pd-history-empty",children:"暂无记录 · 完成作答后点「比」或「提交自测」即会保存"}):r.jsx("ul",{className:"pd-history-list",children:M.map((F,P)=>{const Q=F.right!==void 0&&F.judged&&F.right/F.judged>=.6;return r.jsxs("li",{className:F.snap?"clickable":"",title:F.snap?"点击查看该次批改后的试卷":"该记录未含作答明细",onClick:()=>F.snap&&tr(F.snap),children:[r.jsx("span",{className:"pd-history-time",children:new Date(F.ts).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("span",{className:`pd-history-score${Q?" good":" bad"}`,children:F.right!==void 0&&F.judged?`正确 ${F.right}/${F.judged}`:"已记录"})]},P)})})]})]})})(),rt&&Rl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>wt(null)}),r.jsx(Np,{x:rt.x,y:rt.y,children:rt.kind==="question"?(()=>{var le,A;const h=(le=ne.current)==null?void 0:le.querySelectorAll(".question")[rt.qi],M=h?Array.from(h.querySelectorAll(".option")):[],F=h?Number(((A=h.querySelector(".pd-qnum"))==null?void 0:A.textContent)||0):0,P=Array.from({length:M.length||16},(R,D)=>String.fromCharCode(65+D)),Q=M.length>0?String.fromCharCode(65+M.findIndex(R=>R.classList.contains("selected"))):at[F];return r.jsx("div",{className:"pd-picker-circles",children:P.map((R,D)=>r.jsx("button",{type:"button",className:`pd-picker-circle${Q===R?" on":""}`,onClick:()=>{if(M.length>0)kt(h,M[D]);else{try{const q=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}");q[F]=R,localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(q))}catch{}Kt()}wt(null)},children:R},R))})})():r.jsxs("div",{className:"pd-picker-body",children:[r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(h,M)=>String.fromCharCode(65+M)).map(h=>r.jsx("button",{type:"button",className:`pd-picker-circle${at[rt.blankNo]===h?" on":""}`,onClick:()=>{var P;const M=ne.current,F=(M==null?void 0:M.querySelector(`.blank[data-blank="${rt.blankNo}"]`))||((P=[...(M==null?void 0:M.querySelectorAll(".question"))||[]].find(Q=>{var le;return((le=Q.querySelector(".pd-qnum"))==null?void 0:le.textContent)===String(rt.blankNo)}))==null?void 0:P.querySelector(".blank, .pd-blank"));F&&(F.textContent=`${rt.blankNo} ${h}`,F.classList.add("filled"));try{const Q=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}");Q[rt.blankNo]=h,localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(Q))}catch{}Kt(),wt(null)},children:h},h))}),r.jsx("ul",{className:"pd-picker-words",children:Mp(ne.current).map(h=>r.jsx("li",{children:h},h))})]})})]}),document.body),el&&Rl.createPortal(r.jsx(r.Fragment,{children:el.rects.map((h,M)=>r.jsx("span",{className:`pd-hl-${el.kind}`,style:{position:"fixed",left:h.x,top:h.y,width:h.w,height:h.h}},M))}),document.body),Tt&&Rl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>{Aa(null),bn(null)}}),r.jsx(Np,{x:Tt.x,y:Tt.y,children:r.jsxs("div",{className:"pd-trans",children:[r.jsx("div",{className:"pd-trans-src",children:Tt.text}),r.jsx("div",{className:"pd-trans-res",children:Tt.result??"翻译中…"})]})})]}),document.body),go&&Rl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>vn(!1)}),r.jsxs("div",{className:"pd-timer-dialog",children:[r.jsx("button",{type:"button",className:"pd-timer-dialog-close",onClick:()=>vn(!1),"aria-label":"关闭",children:"×"}),r.jsxs("div",{className:"pd-timer-dialog-head",children:[r.jsx("span",{className:"pd-timer-dialog-icon",children:"⏱"}),r.jsxs("div",{children:[r.jsx("h3",{children:"计时"}),r.jsx("p",{children:"开始后将在正文上方显示时间"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-modes",children:[r.jsxs("button",{type:"button",className:$n==="up"?"on":"",onClick:()=>Ea("up"),children:[r.jsx("b",{children:"正计时"}),r.jsx("span",{children:"累计用时"})]}),r.jsxs("button",{type:"button",className:$n==="down"?"on":"",onClick:()=>Ea("down"),children:[r.jsx("b",{children:"倒计时"}),r.jsx("span",{children:"限时完成"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-actions",children:[r.jsx("button",{type:"button",className:"pd-timer-cancel",onClick:()=>vn(!1),children:"取消"}),r.jsx("button",{type:"button",className:"pd-timer-start",onClick:()=>{Xi($n),za(0),tl(!1),Yl(!0),Fn(!0),vn(!1)},children:"开始"})]})]})]}),document.body),Ot&&In&&Rl.createPortal(r.jsxs("div",{className:"pd-timer-bar",style:nn?{transform:`translate(-50%, 0) translate(${nn.x}px, ${nn.y}px)`}:void 0,children:[r.jsx("span",{className:"pd-timer-label",children:Wn==="up"?"用时":"剩余"}),r.jsx("b",{className:"pd-timer-time",children:Qi}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Fn(h=>!h),children:Ot?"⏸ 暂停":"▶ 继续"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Xi(h=>h==="up"?"down":"up"),children:"↻ 换模式"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>tl(h=>!h),children:"👁 遮住"}),r.jsx("button",{type:"button",className:"pd-tb-chip red",onClick:()=>{Fn(!1),za(0),tl(!1),Yl(!0),nl(null)},children:"■ 结束"}),r.jsx("span",{className:"pd-timer-drag",onPointerDown:_t,onPointerMove:Pn,onPointerUp:Vl,title:"拖动"})]}),document.body),Rt&&Rl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-drawer-mask",onClick:()=>bt(null)}),r.jsxs("aside",{className:"pd-drawer",children:[r.jsxs("header",{className:"pd-drawer-head",children:[r.jsx("h3",{children:Rt.title}),r.jsx("button",{type:"button",className:"pd-drawer-close",onClick:()=>bt(null),"aria-label":"关闭",children:"×"})]}),r.jsx("textarea",{className:"pd-drawer-text",placeholder:Rt.placeholder,value:Gi,onChange:h=>Ul(h.target.value)}),r.jsx("button",{type:"button",className:"pd-drawer-save",onClick:mo,children:"保存"})]})]}),document.body),r.jsx($2,{tool:an,onTool:Ql,penProps:jn,onPenSetting:xo,shapeProps:ln,onShapeSetting:al,zoom:te,onZoom:N,onUndo:Wi,canUndo:qt,eraserSize:$i,onEraserSize:Fi,spread:ae,onToggleSpread:_,examMode:Se,onToggleExamMode:me})]})},As=({href:c,onClick:g,icon:d,label:u})=>{const y={display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 13px",borderRadius:"8px",border:"1px solid var(--affine-border-color)",background:"var(--affine-background-primary-color)",color:"var(--affine-text-primary-color)",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"none"};return c?r.jsxs("a",{href:c,target:"_blank",rel:"noreferrer",style:y,children:[d,u]}):r.jsxs("button",{onClick:g,style:y,children:[d,u]})},lg=`
/* ---------- 页面骨架 ---------- */
.pd-root {
  --pd-serif: "Times New Roman", "Songti SC", "SimSun", "Noto Serif CJK SC", serif;
  padding: 0 16px 60px;   /* 顶部不留白：顶栏行从加载起就贴顶，滚动时位置绝对不变 */
  background: var(--affine-background-secondary-color, #f2f3f5);
  min-height: 100%;
}
/* ---------- 模拟真实试卷预览（paper 模式）：还原纯净试卷 ----------
   隐藏答题卡 / Part 功能徽章 / 已选答案字母，并还原判分描框，
   只保留试卷正文与批注层（手绘 / 便签仍可用） */
.pd-root.is-paper-mode .pd-card,
.pd-root.is-paper-mode .pd-part-badges,
.pd-root.is-paper-mode .pd-ans-letter {
  display: none;
}
/* 判分标记（is-right / is-wrong）与正确答案描框：还原为普通题号 */
.pd-root.is-paper-mode .exam-content-root .question.is-right .pd-qnum,
.pd-root.is-paper-mode .exam-content-root .question.is-wrong .pd-qnum {
  background: none;
  border-color: var(--affine-border-color, #e3e3e3);
  color: inherit;
}
/* 已选选项 / 正确答案选项：还原为普通选项（答案仍在，切回按题预览即恢复） */
.pd-root.is-paper-mode .exam-content-root .option.selected,
.pd-root.is-paper-mode .exam-content-root .question.is-right .option.selected,
.pd-root.is-paper-mode .exam-content-root .question .option.answer-key,
.pd-root.is-paper-mode .exam-content-root .question.is-wrong .option.selected:not(.answer-key) {
  background: none;
  border-color: var(--affine-border-color, #e3e3e3);
  box-shadow: none;
}
.pd-root.is-paper-mode .exam-content-root .option.selected strong,
.pd-root.is-paper-mode .exam-content-root .question .option.answer-key strong,
.pd-root.is-paper-mode .exam-content-root .question.is-wrong .option.selected:not(.answer-key) strong {
  color: inherit;
}
/* 答题卡隐藏后取消其右侧占位（恢复基础 16px 内边距） */
.pd-root.is-paper-mode[data-card='open'] { padding-right: 16px; }
/* paper 模式答题卡整体隐藏，顶栏本来就是全宽，无需加宽补偿 */
.pd-root.is-paper-mode[data-card='open'] .pd-toolbar {
  width: 100%;
}
.pd-toolbar {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: nowrap;   /* 侧边栏出现挤压宽度时顶栏保持一行，不压缩换行 */
}
.pd-back {
  /* 圆形返回按钮（仅图标） */
  width: 32px; height: 32px;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--affine-hover-color, rgba(0, 0, 0, 0.04));
  border: none;
  color: var(--affine-text-secondary-color);
  cursor: pointer;
  padding: 0;
  transition: background .15s ease, color .15s ease;
}
.pd-back:hover { color: var(--affine-primary-color); background: var(--affine-hover-color, rgba(0, 0, 0, 0.08)); }
.pd-corner { display: flex; gap: 12px; align-items: center; }

/* ---------- A4 纸张（固定 210mm × 297mm，按页高贪心分页） ---------- */
.pd-sheet {
  /* A4 纸尺寸：定义在 sheet 上，页面与双页栅格列宽共同继承 */
  --pd-a4-w: 210mm;
  --pd-a4-h: 297mm;
  max-width: 900px;
  margin: 0 auto;
  background: transparent;
  color: #000000;
  padding: 24px 16px 90px;
  font-family: var(--pd-serif);
  font-size: 15px;
  line-height: 1.75;
  box-sizing: border-box;
  position: relative;   /* 批注层定位基准 */
  overflow: visible;
  /* 保留单指滚动，禁用浏览器双指缩放，让捏合手势交给自定义缩放处理 */
  touch-action: pan-x pan-y;
}
/* 缩放弹窗（手形按钮弹出） */
.pd-zoom-menu {
  position: absolute;
  bottom: 100%;
  left: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 10px 10px 0 0;
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-bottom: none;
  box-shadow: var(--affine-shadow-2);
  white-space: nowrap;
  z-index: 30;
}
.pd-zoom-btn {
  border: none;
  background: transparent;
  color: var(--affine-text-primary-color);
  font-size: 15px;
  font-weight: 700;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pd-zoom-btn:hover { background: var(--affine-hover-color); }
.pd-zoom-val {
  min-width: 46px;
  text-align: center;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--affine-text-primary-color);
}
.pd-zoom-reset { width: auto; padding: 0 8px; font-size: 12px; font-weight: 600; }
/* 双页浏览按钮：图标 + 文字，开启时高亮 */
.pd-zoom-spread {
  width: auto;
  gap: 5px;
  padding: 0 9px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
}
.pd-zoom-spread svg { width: 17px; height: 17px; display: block; }
.pd-zoom-spread.is-on {
  color: var(--affine-primary-color);
  background: rgba(47, 107, 255, .1);
}
/* 双页浏览：整卷加宽到两页 A4 并排；列宽严格等于 A4 页宽，
   两页等高（297mm）且等宽（210mm），文字布满整页 */
.pd-sheet.is-spread {
  max-width: none;
  width: max-content;
  min-width: 100%;
}
.pd-sheet.is-spread .exam-content-root {
  display: grid;
  grid-template-columns: repeat(2, var(--pd-a4-w, 210mm));
  align-items: start;
  column-gap: 28px;
  row-gap: 28px;
}
.pd-sheet.is-spread .pd-page {
  margin: 0;   /* 栅格内由gap 控制间距，页面左上角对齐 */
}
/* 每一页：严格 A4（210mm × 297mm）+ 页脚（绝对定位于页底）。
   按题预览（.pd-root 非 is-paper-mode）在下方覆盖为纸高随内容生长 */
.pd-page {
  position: relative;
  z-index: 2;
  width: var(--pd-a4-w, 210mm);
  height: var(--pd-a4-h, 297mm);
  background: #ffffff;
  color: #000000;
  padding: 44px 52px 56px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, .13);
  border-radius: 2px;
  margin: 0 auto 26px;   /* 单页居中；双页由栅格控制间距 */
  overflow: hidden;      /* 页面恒为 A4，超出部分裁掉 */
  box-sizing: border-box;
}
/* 按题预览：不是 A4 纸——纸高随内容生长（题目多长纸就多长），
   每个 Part 一张纸，页脚跟在内容下方 */
.pd-root:not(.is-paper-mode) .pd-page {
  height: auto;
  overflow: visible;
}
.pd-root:not(.is-paper-mode) .pd-page-body {
  height: auto;
}
/* 页面正文容器：占满 content 区（页高 - 内边距），供分页算法精确测量 */
.pd-page-body {
  height: 100%;
}
.pd-page-foot {
  position: absolute;
  left: 52px;
  right: 52px;
  bottom: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #9a9a9a;
  font-family: system-ui, -apple-system, sans-serif;
}
/* 按题预览：页高自适应，页脚改为跟随正文末尾（静态定位，
   不用 absolute 压到内容上） */
.pd-root:not(.is-paper-mode) .pd-page-foot {
  position: static;
  margin-top: 18px;
}
.pd-loading {
  text-align: center;
  padding: 80px 0;
  color: #666;
  font-family: inherit;
}

/* ---------- 页眉 ---------- */
.pd-head { text-align: center; margin: 14px 0 22px; }
.pd-head-name {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.4;
}
.pd-head-sub {
  margin-top: 6px;
  font-size: 14px;
  font-style: italic;
  color: #333;
}
.pd-head-rule {
  margin: 14px auto 8px;
  width: 100%;
  border-top: 2px solid #000;
}
.pd-head-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12.5px;
  color: #222;
  border-bottom: 1px solid #000;
  padding-bottom: 8px;
}

/* ---------- 自测进度 ---------- */
.pd-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
  padding: 10px 14px;
  border: 1px dashed #bbb;
  background: #fafafa;
  font-family: system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 13px;
  color: #333;
}
.pd-submit {
  border: none;
  border-radius: 6px;
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background: #1a1a1a;
}
.pd-submit:disabled { background: #bbb; cursor: not-allowed; }
.pd-submitted { color: #147a3d; font-weight: 600; }

/* ---------- 提交后判对错 ---------- */
.exam-content-root .question.is-right .pd-qnum {
  background: #e6f6ec;
  border-color: #2f9e5f;
  color: #147a3d;
}
.exam-content-root .question.is-wrong .pd-qnum {
  background: #fdecec;
  border-color: #d94b4b;
  color: #b02525;
}
/* 正确答案选项：绿底 + 绿边 */
.exam-content-root .question.is-right .option.selected,
.exam-content-root .question .option.answer-key {
  background: #e9f7ef;
  border-color: #2f9e5f;
}
.exam-content-root .question .option.answer-key {
  box-shadow: inset 0 0 0 1px #2f9e5f;
}
.exam-content-root .question .option.answer-key strong {
  color: #147a3d;
}
/* 选错的选项：红字红边 */
.exam-content-root .question.is-wrong .option.selected:not(.answer-key) {
  background: #fdecec;
  border-color: #d94b4b;
}
.exam-content-root .question.is-wrong .option.selected:not(.answer-key) strong {
  color: #b02525;
}

/* ---------- 批注覆盖层 ---------- */
.pd-sheet > .pd-head,
.pd-sheet > .pd-progress,
.pd-sheet > .exam-content-root {
  position: relative;
  z-index: 2;
}
.pd-grid-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image:
    linear-gradient(to right, rgba(47,107,255,.10) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(47,107,255,.10) 1px, transparent 1px);
  background-size: 28px 28px;
}
.pd-anno-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  touch-action: none;
}
/* 橡皮擦光标：屏幕像素圆，跟随指针，按橡皮尺寸缩放 */
.pd-erase-cursor {
  position: fixed;   /* 视口坐标定位，圆心精确对齐手指，不受 sheet 偏移影响 */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1.5px solid var(--affine-primary-color);
  background: rgba(47, 107, 255, .12);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .6), 0 1px 4px rgba(0, 0, 0, .18);
  pointer-events: none;
  z-index: 9999;
}
/* 橡皮擦尺寸弹窗（从工具栏上方滑出，复刻 edgeless pen-menu 风格） */
/* 橡皮擦二级弹窗：复用 .pd-pen-menu 横向布局，此处只补删除按钮样式 */
.pd-erase-menu { padding-right: 8px; }
/* 框选删除：纯图标方形按钮（与工具栏按钮一致的视觉） */
.pd-erase-delbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--affine-icon-color);
  cursor: pointer;
  transition: background-color .15s ease;
}
.pd-erase-delbtn svg { width: 20px; height: 20px; display: block; }
.pd-erase-delbtn:hover { background: var(--affine-hover-color); }
/* 选中圆右侧不再延伸灰色轨道线：橡皮尺寸滑点只保留到选中点为止的填充线 */
.pd-erase-menu .pd-pm-line { display: none; }
/* 查词高亮：浅灰底 + 底部波浪线；句翻译高亮：整句浅灰底 */
.pd-hl-word {
  z-index: 900;
  pointer-events: none;
  border-radius: 2px;
  background: rgba(0, 0, 0, .1);
}
.pd-hl-word::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 3px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='3' viewBox='0 0 6 3'%3E%3Cpath d='M0 2 Q1.5 0 3 2 T6 2' fill='none' stroke='%23888' stroke-width='.9'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: bottom;
}
.pd-hl-sentence {
  z-index: 900;
  pointer-events: none;
  border-radius: 2px;
  background: rgba(0, 0, 0, .1);
}
/* 文本/标题/链接批注：带半透明胶带的黄色便签（颜色沿用原黄色系） */
.pd-note {
  position: absolute;
  z-index: 5;
  min-width: 96px;
  max-width: 60%;
  padding: 10px 10px 7px;
  border-radius: 2px;
  background: linear-gradient(180deg, #fff8b8, #f7e97e);
  border: 1px solid #e6c84f;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .16);
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: #333;
  outline: none;
  cursor: text;
}
/* 便签顶部的半透明胶带 */
.pd-note::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  width: 58px;
  height: 16px;
  transform: translateX(-50%) rotate(-2deg);
  background: rgba(255, 255, 255, .5);
  border: 1px solid rgba(0, 0, 0, .06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  pointer-events: none;
}
.pd-note:focus { box-shadow: 0 3px 8px rgba(0,0,0,.16), 0 0 0 2px rgba(47,107,255,.35); }
.pd-note-h1 {
  background: rgba(47,107,255,.10);
  border-color: rgba(47,107,255,.45);
  font-weight: 700;
  font-size: 16px;
}
.pd-note-link {
  background: rgba(47,107,255,.12);
  border-color: rgba(47,107,255,.5);
  color: #1a4fd6;
  text-decoration: underline;
}

/* ---------- 浮动批注底栏（复刻 AFFiNE 笔记原生悬浮栏） ---------- */
.pd-float-bar {
  position: fixed;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  /* 复刻 AFFiNE edgeless 工具栏：进入时从底部滑入（0.23s ease） */
  transition: transform .23s ease, opacity .23s ease;
  animation: pd-bar-in .23s ease backwards;
  z-index: 900;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 18px;
  border-radius: 14px;
  background: var(--affine-background-overlay-panel-color);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--affine-border-color);
  box-shadow: var(--affine-shadow-2);
}
/* AFFiNE edgeless 工具栏进入动画：从底部 100px 平滑滑入并淡入（edgeless-toolbar.ts 源码 scaleY/translateY 行为） */
@keyframes pd-bar-in {
  from { transform: translateX(-50%) translateY(100px); opacity: 0; }
  to   { transform: translateX(-50%) translateY(0); opacity: 1; }
}
/* 下箭头隐藏：整条工具栏滑出屏幕底部；鼠标移回屏幕底部边缘（.pd-bar-wake）唤回 */
.pd-float-bar[data-hidden='true'] {
  transform: translateX(-50%) translateY(160px);
  opacity: 0;
  pointer-events: none;
}
/* 工具栏隐藏后右下角的显示按钮（点击唤回底栏） */
.pd-bar-show {
  position: fixed;
  right: 16px;
  bottom: 22px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--affine-border-color);
  border-radius: 12px;
  background: var(--affine-background-overlay-panel-color);
  box-shadow: var(--affine-shadow-2);
  color: var(--affine-icon-color);
  cursor: pointer;
  z-index: 900;
  animation: pd-bar-in .23s ease backwards;
}
.pd-bar-show svg { width: 22px; height: 22px; transform: rotate(180deg); }
.pd-bar-show:hover { background: var(--affine-hover-color); }

/* ---------- 右侧答题卡（AFFiNE 界面配色；默认收起；打开时不遮挡试卷） ---------- */
/* 打开时给主内容让位（试卷整体左移，不重叠）
   注意：顶栏（.pd-toolbar）要保持全宽——否则侧边栏一展开就把听力胶囊压扁
   （实测 1114px → 442px，时间被挤没、段落标签重叠）。
   做法：顶栏宽度按「内容盒 + 让位量」显式加回来，内部布局完全不变。
   注：pd-root 常态左右各留16px 内边距，data-card=open 只把右侧换成 344px，
   所以只需补回 344-16=328px（补 344 会多出 16px）。 */
.pd-root { transition: padding-right .23s ease; }
.pd-root[data-card='open'] { padding-right: 344px; }
.pd-root[data-card='open'] .pd-toolbar {
  width: calc(100% + 328px);
  transition: width .23s ease;
}

.pd-card {
  position: fixed;
  top: 86px;
  right: 16px;
  z-index: 880;
  display: flex;
  align-items: flex-start;
  gap: 6px;
}
.pd-card-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.pd-card-progress {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: var(--affine-shadow-2);
  font-family: system-ui, -apple-system, sans-serif;
}
.pd-card-progress:hover { background: var(--affine-hover-color); }
.pd-card-toggle {
  width: 26px;
  height: 42px;
  border: 1px solid var(--affine-border-color);
  border-radius: 8px;
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-secondary-color);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--affine-shadow-2);
}
.pd-card-toggle:hover { background: var(--affine-hover-color); }
.pd-card-panel {
  width: 300px;
  max-height: calc(100vh - 130px);
  overflow: auto;
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-radius: 14px;
  padding: 14px 14px 14px;
  box-shadow: var(--affine-shadow-2);
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
}
.pd-card[data-collapsed='true'] .pd-card-panel { display: none; }
.pd-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.pd-card-title { font-size: 16px; font-weight: 800; color: var(--affine-text-primary-color); }
.pd-card-total { font-size: 12.5px; color: var(--affine-text-secondary-color); }
/* 模式切换（答题卡 / 题目） */
.pd-card-modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 3px;
  margin-bottom: 10px;
  border-radius: 9px;
  background: var(--affine-hover-color);
}
.pd-card-modes button {
  height: 30px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--affine-text-secondary-color);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .15s ease, color .15s ease;
}
.pd-card-modes button.on {
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}
/* 模式一：答题卡分区列表（行距对齐参考图） */
.pd-card-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.pd-card-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 12px;
  border-radius: 10px;
  font-size: 15px;
  color: var(--affine-text-primary-color);
  transition: background-color .15s ease;
}
.pd-card-list li:hover { background: var(--affine-hover-color); }
.pd-card-list li b {
  color: var(--affine-text-secondary-color);
  font-weight: 700;
  font-size: 13.5px;
  min-width: 12px;
}
.pd-card-secname { flex: 1; font-weight: 700; }
.pd-card-secname em { font-style: normal; font-weight: 600; color: var(--affine-text-secondary-color); }
.pd-card-secnum { color: var(--affine-text-secondary-color); font-size: 13.5px; }
/* 模式二：题目（题号格） */
.pd-card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 7px;
  padding: 2px 4px 8px;
}
.pd-card-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  padding: 5px 3px 7px;
  border-radius: 10px;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  cursor: pointer;
  transition: background-color .15s ease, border-color .15s ease;
}
.pd-card-cell:hover { background: var(--affine-hover-color); }
.pd-card-cell.done {
  border-color: var(--affine-primary-color);
  background: var(--affine-hover-color);
}
/* 比对开关：对=绿框 / 错=红框 */
.pd-card-cell.cmp-right {
  border-color: #16a34a !important;
  box-shadow: 0 0 0 1.5px rgba(22, 163, 74, 0.55);
}
.pd-card-cell.cmp-wrong {
  border-color: #dc2626 !important;
  box-shadow: 0 0 0 1.5px rgba(220, 38, 38, 0.55);
}
.pd-cell-key {
  font-size: 15px;
  font-weight: 800;
  color: #16a34a;               /* 正确答案：绿色 */
  line-height: 1;
}
.pd-cell-mine {
  font-size: 11px;
  font-weight: 700;
  color: var(--affine-text-secondary-color);
  line-height: 1;
}
.pd-tb-group { display: flex; align-items: center; gap: 2px; }
.pd-tb-tools { gap: 0; }
.pd-tb-div {
  width: 1px;
  height: 30px;
  margin: 0 7px;
  background: var(--affine-border-color);
}
.pd-tb-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--affine-icon-color);
  cursor: pointer;
  transition: background-color .15s ease, color .15s ease, transform .12s ease;
}
.pd-tb-btn svg { width: 28px; height: 28px; display: block; }
/* 画笔 / 马克笔 / 橡皮：AFFiNE 真实插画图标，保留原始宽高比（不被 20px 规则压扁） */
/* 画笔 / 马克笔 / 橡皮：AFFiNE 真实插画图标，保留原始宽高比。
   复刻 AFFiNE edgeless「下沉-弹起」交互（pen-tool-button.ts /
   eraser-tool-button.ts 原版）：图标默认下沉、底部伸到按钮底边之下
   被裁掉（只露上半截），hover / 选中后向上弹起、底部与按钮底边对齐。 */
.pd-tb-illus { display: flex; align-items: flex-end; justify-content: center; line-height: 0; }
/* 仅对含插画图标的按钮裁剪下沉超出底边的部分（不影响其他按钮） */
.pd-tb-btn:has(.pd-tb-illus) {
  overflow: hidden;
  align-items: flex-end;
}
.pd-tb-btn .pd-tb-illus svg {
  width: auto;
  height: 38px;
  display: block;
}
.pd-tb-btn .pd-tb-illus svg {
  transition: transform 300ms ease-in-out;
  transform: translateY(13px);
}
.pd-tb-btn:hover .pd-tb-illus svg,
.pd-tb-btn.is-active .pd-tb-illus svg { transform: translateY(0); }
.pd-tb-btn:hover { background: var(--affine-hover-color); }
.pd-tb-btn:active { transform: scale(.93); }
.pd-tb-btn.is-active {
  background: var(--affine-hover-color);
  color: var(--affine-primary-color);
  /* 切换工具时图标弹入反馈（复刻 AFFiNE 工具按钮 active 态的弹动体感） */
  animation: pd-tool-pop .18s ease;
}
@keyframes pd-tool-pop {
  0% { transform: scale(.7); }
  60% { transform: scale(1.12); }
  100% { transform: scale(1); }
}
.pd-tb-btn:focus-visible {
  outline: 2px solid var(--affine-primary-color);
  outline-offset: 2px;
}
/* ---------- 笔设置弹窗（复刻 edgeless pen-menu / edgeless-slide-menu） ---------- */
.pd-pen-menu {
  position: absolute;
  /* 紧贴工具栏顶部（零间距），底部两角不圆角，与工具栏顶边贴合 */
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 3px 10px 0;
  border-radius: 12px 12px 0 0;
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-bottom: none;
  box-shadow: var(--affine-shadow-2);
  white-space: nowrap;
  transform-origin: bottom center;
  animation: pd-menu-in .23s ease backwards;
  z-index: 5;
}
/* 复刻原版弹层从工具栏上方滑入（0.23s，与工具栏一致） */
@keyframes pd-menu-in {
  from { transform: translateX(-50%) translateY(8px); opacity: 0; }
  to   { transform: translateX(-50%) translateY(0); opacity: 1; }
}
/* 左侧笔 / 荧光笔切换：与工具栏按钮同样的「下沉-弹起」逻辑——
   未选中下沉、底部伸到框底之下被裁掉；选中 / hover 后上升、
   底部与弹窗底边对齐（完整显示） */
.pd-pm-pens {
  display: flex;
  align-items: stretch;
  align-self: stretch;
  padding: 0 2px;
}
.pd-pm-pen {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 30px;
  min-height: 40px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
}
.pd-pm-pen .pd-tb-illus svg {
  height: 40px;
}
.pd-pm-pen .pd-tb-illus svg {
  transition: transform 300ms ease-in-out;
  transform: translateY(8px);
}
.pd-pm-pen.is-on .pd-tb-illus svg,
.pd-pm-pen:hover .pd-tb-illus svg { transform: translateY(0); }
.pd-pm-pens .pd-tb-div { margin: 0 6px; align-self: center; }

/* 线型切换按钮（曲线 / 直角 / 直线，ConnectorC / E / L 真实图标） */
.pd-pm-shape {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 28px;
  border: none;
  padding: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--affine-icon-color);
  cursor: pointer;
  transition: color .15s ease, background-color .15s ease;
}
.pd-pm-shape svg { width: 20px; height: 20px; display: block; }
.pd-pm-shape:hover { background: var(--affine-hover-color); }
.pd-pm-shape.is-on { color: var(--affine-primary-color); }

/* 线宽点面板：等宽单元格保证点等距，填充线精确结束在选中点圆心 */
.pd-pm-widths {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 108px;
  height: 20px;
  margin: 0 4px;
}
.pd-pm-line,
.pd-pm-line-fill {
  position: absolute;
  top: 50%;
  height: 1px;
  transform: translateY(-50%);
  background: var(--affine-border-color);
}
.pd-pm-line-fill {
  background: var(--affine-icon-color);
  z-index: 1;
}
/* 等宽单元格：点在其中居中，圆心落在等分位置 */
.pd-pm-cell {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
}
.pd-pm-dot {
  display: block;
  border-radius: 50%;
  background: var(--affine-border-color);
  transition: background-color .15s ease;
}
.pd-pm-cell.sel .pd-pm-dot { background: var(--affine-icon-color); }

/* 色板：StrokeColorShortPalettes 十色圆点（edgeless-color-panel） */
.pd-pm-colors { display: flex; align-items: center; gap: 5px; }
.pd-pm-cdot {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform .15s ease;
}
.pd-pm-cdot:hover { transform: scale(1.12); }
.pd-pm-cdot.sel {
  outline: 2px solid var(--affine-primary-color);
  outline-offset: 1.5px;
}

/* 「批注便签」按钮图标：蓝色圆角方块内三张条纹纸歪叠（Link/H1/T 图标），hover 弹性散开 */
.pd-tb-note-stack {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 32px;
  border-radius: 10px;
  background: var(--affine-primary-color);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .18);
}
.pd-ns-paper {
  position: absolute;
  width: 15px;
  height: 19px;
  border-radius: 2.5px;
  background-color: #fff;
  /* 灰色条纹模拟文字行（下半部，上半留给图标） */
  background-image: repeating-linear-gradient(
    180deg,
    #d4d4d2 0 2px,
    transparent 2px 5px
  );
  background-size: 64% 34%;
  background-position: 50% 72%;
  background-repeat: no-repeat;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .18);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: var(--affine-icon-color);
  transform-origin: 50% 100%;
  transition: transform .25s cubic-bezier(.34, 1.56, .64, 1);
}
.pd-ns-paper svg { width: 10px; height: 10px; margin-top: 2px; }
.pd-ns-p1 { left: 3px; top: 7px; transform: rotate(-14deg); }
.pd-ns-p2 { left: 10.5px; top: 4px; transform: rotate(0deg); z-index: 1; }
.pd-ns-p3 { left: 18px; top: 7px; transform: rotate(14deg); }
.pd-tb-btn:hover .pd-ns-p1 { transform: rotate(-23deg) translate(-3px, 1px); }
.pd-tb-btn:hover .pd-ns-p2 { transform: rotate(0deg) translateY(-3px); }
.pd-tb-btn:hover .pd-ns-p3 { transform: rotate(23deg) translate(3px, 1px); }
/* 左右导航箭头（edgeless 工具栏的收起 / 展开箭头） */
.pd-tb-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--affine-icon-color);
  cursor: pointer;
  transition: background-color .15s ease;
}
.pd-tb-arrow svg { width: 22px; height: 22px; display: block; }
.pd-tb-arrow:hover { background: var(--affine-hover-color); }
.pd-tb-arrow:focus-visible {
  outline: 2px solid var(--affine-primary-color);
  outline-offset: 2px;
}
.pd-tb-senior { gap: 2px; }
/* 收起：整条工具栏向下滑出（复刻 AFFiNE edgeless-toggle-control 的 translateY(100px) 行为），hover 时滑回 */
.pd-float-bar[data-collapsed='true'] {
  transform: translateX(-50%) translateY(100px);
  padding-top: 100px;
  transition: transform .23s ease, padding-top .23s ease;
}
.pd-float-bar[data-collapsed='true']:hover {
  transform: translateX(-50%) translateY(0);
  padding-top: 8px;
}
.pd-float-bar[data-collapsed='true'] .pd-tb-senior,
.pd-float-bar[data-collapsed='true'] .pd-tb-arrow-next { display: none; }
.pd-float-bar[data-collapsed='true'] .pd-tb-arrow-prev svg { transform: rotate(180deg); }

@media (max-width: 720px) {
  .pd-float-bar { bottom: 14px; padding: 6px 8px; gap: 2px; }
  .pd-tb-btn { width: 32px; height: 32px; }
  .pd-tb-div { margin: 0 3px; }
  /* 弹窗紧凑化，避免小屏横向溢出 */
  .pd-pen-menu { padding: 3px 8px 3px 4px; max-width: calc(100vw - 24px); overflow-x: auto; }
  .pd-pm-widths { min-width: 96px; }
  .pd-pm-colors { gap: 4px; }
  .pd-pm-cdot { width: 16px; height: 16px; }
}

/* ---------- 听力播放器（与返回按钮同一行，横向铺满剩余空间） ---------- */
.pd-left {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;   /* 允许内部胶囊收缩，不撑破工具栏 */
}
.pd-listening {
  flex: 1;
  min-width: 0;
  container-type: inline-size;   /* 建立容器查询：胶囊变窄时收起次要元素 */
  transition: opacity .25s ease, transform .25s ease;
}
/* 胶囊空间不足（如答题卡展开）时优先保进度条可读 */
/* 注意：基础 .lp2-* 规则在下方定义且会设置 display/font-size，
   故这里用 .pd-listening 前缀把特异性提到 (0,2,0)，确保在窄容器时稳赢基础规则 */
/* 胶囊空间不足（如答题卡展开）时优先保进度条可读。
   注意：阈值压到 420px 以下、且「听力原文」按钮不再收起——
   之前 max-width:600px 就收起时间与原文按钮，答题卡一展开播放器就被
   压得只剩「0:00」和几个段名，看起来像顶栏往左缩了。 */
@container (max-width: 420px) {
  .pd-listening .lp2-part-label { font-size: 8px; padding: 0 2px; }
}
/* 滚出听力部分时整颗胶囊淡出（保留占位，顶栏不跳动） */
.pd-listening.is-hidden {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
}
.lp-wrap { display: flex; flex-direction: column; gap: 9px; }
.lp-head { display: flex; align-items: center; gap: 10px; }
.lp-play {
  width: 34px; height: 34px;
  flex: 0 0 auto;
  border: none; border-radius: 50%;
  background: var(--affine-primary-color, #1e96eb);
  color: #fff; font-size: 13px;
  cursor: pointer;
  transition: transform .15s ease;
}
.lp-play:hover { transform: scale(1.06); }
.lp-title {
  flex: 1;
  min-width: 0;
  font-size: 13px; font-weight: 600;
  color: var(--affine-text-primary-color);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.lp-time {
  flex: 0 0 auto;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--affine-text-secondary-color);
}
.lp-rate {
  flex: 0 0 auto;
  height: 26px;
  border: 1px solid var(--affine-border-color);
  border-radius: 6px;
  background: var(--affine-background-primary-color);
  color: var(--affine-text-primary-color);
  font-size: 12px;
}
/* ===== 听力播放器：玻璃拟态胶囊 · 蓝色主题 ===== */
.lp2 {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 18px;
  border-radius: 60px;            /* 胶囊形状 */
  /* 深色玻璃：夜空蓝磨砂 */
  background: rgba(4, 26, 82, 0.6);   /* 宝蓝深色玻璃 */
  box-shadow: 0 8px 32px 0 rgba(0, 20, 60, 0.5);
  backdrop-filter: blur(12px) saturate(1.3);
  -webkit-backdrop-filter: blur(12px) saturate(1.3);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
}
.lp2-play {
  width: 30px; height: 30px;
  flex: 0 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 10px;            /* 圆角方块，呼应 .music */
  background: linear-gradient(135deg, #ffcc00, #f2b705);   /* 明姜黄播放按钮 */
  box-shadow: 0 2px 10px rgba(255, 204, 0, 0.4);
  color: #003399; font-size: 11px;   /* 宝蓝图标 */
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: transform .15s ease, background .2s ease, box-shadow .2s ease;
}
.lp2-play:hover {
  transform: scale(1.06);
  background: linear-gradient(135deg, #ffd84d, #ffcc00);
  box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
}
.lp2-times {
  flex: 0 0 auto;
  /* 横排「0:00 / 26:07」：竖排会把胶囊高度顶高、显得向内缩 */
  display: flex; flex-direction: row;
  align-items: baseline; gap: 3px;
  font-size: 10px; line-height: 1.3;
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
}
.lp2-cur { color: #fff; font-weight: 600; }
.lp2-total::before { content: '/'; margin-right: 3px; opacity: 0.55; }
.lp2-mid {
  flex: 1;
  min-width: 0;
  display: flex; flex-direction: column;
  gap: 0;
  padding-top: 8px;     /* 给上方段落标签留空间 */
  padding-bottom: 10px; /* 给下方题号留空间 */
}
.lp2-labels { position: relative; height: 12px; }
.lp2-part-label {
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  border: none; background: transparent;
  padding: 0 3px;
  font-size: 9.5px; font-weight: 600;
  color: #ffcc00;                 /* 上方段落标签：明姜黄 */
  border-radius: 60px;
  cursor: pointer;
  transition: color .15s ease, background .15s ease;
}
.lp2-part-label:hover {
  color: #ffd84d;
  background: rgba(255, 204, 0, 0.15);
}
/* 参考站样式：分段灰色块 + 题号竖条刻度 + 大圆点游标 */
.lp2-track {
  position: relative;
  height: 5px;                    /* 变窄 */
  border-radius: 2.5px;
  background: transparent;        /* 无整条底：仅分段块 */
  cursor: pointer;
}
.lp2-segblock {
  position: absolute;
  top: 0; bottom: 0;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 0.30);   /* 深色玻璃上的灰色分段块 */
  pointer-events: none;
}
/* 开头念题目 / Directions 段：浅色斜纹，区别于正式内容段 */
.lp2-segblock.is-intro {
  opacity: 0.55;
  background: repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 5px, rgba(255,255,255,0.10) 5px 9px);
}
.lp2-part-label.is-intro { color: rgba(255, 255, 255, 0.7); }
.lp2-mark {
  position: absolute;
  top: -2px; bottom: -2px;
  width: 3px;
  transform: translateX(-50%);
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.60);   /* 题号位置竖条刻度（比块突出） */
  pointer-events: none;
}
/* 追光光带：走过部分由透明渐入姜黄，游标处白亮 */
.lp2-glow {
  position: absolute;
  left: 0;
  top: -3px; bottom: -3px;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 204, 0, 0) 0%,
    rgba(255, 204, 0, 0.45) 55%,
    rgba(255, 232, 150, 0.9) 94%,
    rgba(255, 255, 255, 0.98) 100%
  );
  box-shadow: 0 0 14px rgba(255, 204, 0, 0.35);
  filter: blur(0.4px);
  pointer-events: none;
  z-index: 1;
}
.lp2-cursor {
  position: absolute;
  top: 50%;
  width: 12px; height: 12px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffcc00;             /* 明姜黄大圆点游标 */
  box-shadow:
    0 0 0 2px rgba(255, 255, 255, 0.9),
    0 0 14px rgba(255, 204, 0, 0.85),   /* 追光亮头光晕 */
    0 2px 8px rgba(0, 20, 60, 0.5);
  pointer-events: none;
  z-index: 2;
}
.lp2-q {
  position: absolute;
  top: 7px;                        /* 题号回到进度条下方 */
  transform: translateX(-50%);     /* 以 cx 为中心，与上方刻度严格对齐 */
  border: none; background: transparent;
  padding: 0;
  font-size: 7px; line-height: 1.1;
  color: rgba(255, 255, 255, 0.60);   /* 浅灰题号 */
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: color .15s ease, font-weight .15s ease;
  white-space: nowrap;
}
.lp2-q:hover { color: #ffcc00; font-weight: 700; }
.lp2-rate {
  flex: 0 0 auto;
  width: 28px;                    /* 变窄为圆形 */
  height: 28px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;             /* 圆形 */
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 10px;
  text-align: center;
  text-align-last: center;        /* 选中项居中显示（1x） */
  appearance: none;
  -webkit-appearance: none;       /* 去掉原生下拉箭头，保持圆形外观 */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  transition: background .2s ease;
}
.lp2-rate:hover { background: rgba(255, 255, 255, 0.22); }
.lp2-rate option { color: #111; }
.lp2-trans {
  flex: 0 0 auto;
  height: 24px;
  padding: 0 12px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 60px;            /* 胶囊按钮，呼应 .nav-bar */
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 11px;
  cursor: pointer;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background .2s ease;
}
.lp2-trans:hover { background: rgba(255, 255, 255, 0.22); }

/* ===== 浅色模式配色：白玻璃胶囊（强化磨砂质感）+ 蓝色点缀 ===== */
html[data-theme="light"] .lp2 {
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(0, 51, 153, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px) saturate(1.5);
  -webkit-backdrop-filter: blur(14px) saturate(1.5);
  color: #1e293b;
}
html[data-theme="light"] .lp2-play {
  background: linear-gradient(135deg, #003399, #0047b8);   /* 宝蓝播放按钮 */
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  box-shadow: 0 4px 14px rgba(0, 51, 153, 0.35);
}
html[data-theme="light"] .lp2-play:hover {
  background: linear-gradient(135deg, #1a5cd6, #003399);
  box-shadow: 0 6px 18px rgba(0, 51, 153, 0.45);
}
html[data-theme="light"] .lp2-times { color: rgba(30, 41, 59, 0.85); text-shadow: none; font-size: 10px; line-height: 1.3; }
html[data-theme="light"] .lp2-cur { color: #0f172a; }
html[data-theme="light"] .lp2-part-label { color: #003399; }
html[data-theme="light"] .lp2-part-label:hover { color: #0047b8; background: rgba(0, 51, 153, 0.1); }
html[data-theme="light"] .lp2-track { background: transparent; }
html[data-theme="light"] .lp2-segblock { background: rgba(0, 51, 153, 0.22); }
html[data-theme="light"] .lp2-mark { background: rgba(0, 51, 153, 0.45); }
html[data-theme="light"] .lp2-glow {
  background: linear-gradient(
    90deg,
    rgba(255, 187, 0, 0) 0%,
    rgba(255, 187, 0, 0.4) 55%,
    rgba(255, 213, 79, 0.9) 94%,
    rgba(255, 255, 255, 0.95) 100%
  );
  box-shadow: 0 0 12px rgba(255, 187, 0, 0.4);
}
html[data-theme="light"] .lp2-cursor {
  background: #ffcc00;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.95), 0 2px 6px rgba(0, 51, 153, 0.35);
}
html[data-theme="light"] .lp2-q { color: rgba(30, 41, 59, 0.6); }
html[data-theme="light"] .lp2-q:hover { color: #003399; }
html[data-theme="light"] .lp2-rate {
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: rgba(15, 23, 42, 0.04);
  color: #1e293b;
}
html[data-theme="light"] .lp2-rate:hover { background: rgba(15, 23, 42, 0.08); }
html[data-theme="light"] .lp2-rate option { color: #111; }
html[data-theme="light"] .lp2-trans {
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: rgba(15, 23, 42, 0.05);
  color: #1e293b;
}
html[data-theme="light"] .lp2-trans:hover { background: rgba(15, 23, 42, 0.09); }
/* 分段进度条：每段宽度按时长比例，段名下标显示起始时间 */
.lp-segs { display: flex; gap: 3px; align-items: flex-end; }
.lp-seg {
  position: relative;
  display: flex; flex-direction: column; gap: 3px;
  min-width: 26px;
  padding: 0;
  border: none; background: none;
  cursor: pointer;
  text-align: left;
}
.lp-seg-bar {
  height: 7px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--affine-text-primary-color) 16%, transparent);
  transition: background-color .2s ease;
}
.lp-seg.is-done .lp-seg-bar {
  background: color-mix(in srgb, var(--affine-primary-color) 55%, transparent);
}
.lp-seg.is-active .lp-seg-bar { background: var(--affine-primary-color, #1e96eb); }
.lp-seg:hover .lp-seg-bar { background: color-mix(in srgb, var(--affine-primary-color) 75%, transparent); }
.lp-seg-name {
  font-size: 10px; line-height: 1.2;
  color: var(--affine-text-secondary-color);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  max-width: 76px;
}
.lp-seg-time {
  font-size: 9px;
  font-variant-numeric: tabular-nums;
  color: var(--affine-text-secondary-color);
  opacity: .7;
}
.lp-scrub { width: 100%; accent-color: var(--affine-primary-color, #1e96eb); }

@media (max-width: 720px) {
  .lp-seg-name { max-width: 40px; font-size: 9px; }
}

/* ---------- 正文：原版试卷排版 ---------- */
.exam-content-root h1 {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 18px;
}
.exam-content-root h2 {
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0 10px;
  letter-spacing: .3px;
}
/* Part / Section 级 Directions 段（模板以 2025年6月第二套为准）：
   「Directions:」顶格加粗、正文斜体、Answer Sheet N 加粗 */
.exam-content-root .pd-dir {
  margin: 4px 0 12px;
  line-height: 1.85;
  text-align: left;
}
.exam-content-root .pd-dir > strong:first-child {
  font-weight: 700;
}
.exam-content-root .pd-dir em {
  font-style: italic;
  font-weight: 400;
}
.exam-content-root .pd-dir em > strong {
  font-style: italic;
  font-weight: 700;
}
/* 阅读理解文章段落：句首空两字符（导入真题时文章段落统一加 pd-passage 类） */
.exam-content-root .pd-passage {
  text-indent: 2em;
  line-height: 1.85;
}
/* 作文 Directions 段（统一样板）：
   「Directions:」顶格加粗；其后正文为斜体；引号内开头句加粗；
   150/200 加下划线；「You should copy…」句首空两字符、加粗并加下划线 */
.exam-content-root .pd-write-dir {
  margin: 6px 0 14px;
  line-height: 1.9;
  text-align: left;
}
.exam-content-root .pd-write-dir > strong:first-child {
  font-weight: 700;
}
.exam-content-root .pd-write-dir em {
  font-style: italic;
  font-weight: 400;
}
.exam-content-root .pd-write-dir em > strong {
  font-style: italic;
  font-weight: 700;
}
.exam-content-root .pd-write-dir u {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}
/* Part 标题三段式：Part I | 名称 | (时长)，可带功能徽章 */
.exam-content-root h2.pd-part {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  font-size: 15px;
  margin: 8px 0 16px;
}
.exam-content-root .pd-part-no,
.exam-content-root .pd-part-time { font-weight: 700; white-space: nowrap; }
.exam-content-root .pd-part-name {
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 16.5px;
}
.pd-part-badges { display: inline-flex; gap: 6px; }
.pd-badge {
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  background: #e8f0fe;
  color: #2f6bff;
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
}
.pd-badge:hover { filter: brightness(.96); }
/* 圈号题号 */
.exam-content-root .pd-qnum {
  display: inline-flex;
  min-width: 20px;
  height: 20px;
  padding: 0 2px;
  box-sizing: border-box;
  border: 1.3px solid #222;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 11.5px;
  font-weight: 600;
  margin-right: 6px;
  vertical-align: -4px;
}
/* Directions 行斜体 */
.exam-content-root .pd-dir { font-style: italic; }
/* 选项过长时退化为单列 */
.exam-content-root .options.single { grid-template-columns: 1fr; }
/* 隐藏 AFFiNE 右下角 AI 浮球（试卷界面不需要） */
[class*="islandContainer"][class*="toolStyle"] { display: none !important; }
/* 用户数据中的选词空格（.pd-blank）与内置 .blank 同样式 */
.exam-content-root .pd-blank {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px; padding: 0 10px;
  height: 22px;
  margin: 0 2px;
  padding: 0 5px;
  border-bottom: 1.5px solid #333;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 1;
  cursor: pointer;
  vertical-align: middle;
  color: var(--affine-primary-color);
  transition: background-color .15s ease;
}
.exam-content-root .pd-blank:hover { background: var(--affine-hover-color); }
.exam-content-root .pd-blank.filled { color: var(--affine-primary-color); }
/* 选择题选中样式：题干行首徽章 + 题号蓝圈（不用整行大蓝条） */
.exam-content-root .option.selected {
  background: var(--affine-hover-color);
  color: var(--affine-text-primary-color);
}
.exam-content-root .option.selected strong { color: var(--affine-primary-color); }
.exam-content-root .question[data-ans] .pd-qnum {
  background: color-mix(in srgb, var(--affine-primary-color) 28%, transparent);
  border-color: var(--affine-primary-color);
  color: var(--affine-primary-color);
}
/* 所选选项字母：显示在题号圈外（独立字母，非方块、不在圈内） */
.exam-content-root .pd-ans-letter {
  margin-right: 7px;
  color: var(--affine-primary-color);
  font-weight: 700;
  font-size: 15px;
  font-family: system-ui, -apple-system, sans-serif;
  vertical-align: middle;
}
.exam-content-root .pd-qnum {
  vertical-align: middle;
}
/* 作答模式圆钮（T=弹窗 / C=侧边栏），位于收起按钮下方 */
/* 答题卡工具按钮（答案/作答/交卷）：开启时高亮 */
.pd-card-tool {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-secondary-color);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--affine-shadow-2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color .15s ease, color .15s ease;
}
.pd-card-tool:hover { background: var(--affine-hover-color); }
.pd-card-tool.on {
  background: var(--affine-primary-color);
  border-color: var(--affine-primary-color);
  color: #fff;
}
/* 作答记录弹窗 */
.pd-history-mask {
  position: fixed;
  inset: 0;
  z-index: 940;
  background: rgba(0, 0, 0, 0.25);
}
.pd-history-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 941;
  width: 400px;
  max-width: calc(100vw - 32px);
  max-height: 70vh;
  overflow: auto;
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-radius: 14px;
  padding: 16px;
  box-shadow: var(--affine-shadow-2);
  font-family: system-ui, -apple-system, 'PingFang SC', sans-serif;
}
.pd-history-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 15px;
}
.pd-history-close {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--affine-text-secondary-color);
  font-size: 13px;
  cursor: pointer;
}
.pd-history-close:hover { background: var(--affine-hover-color); }
.pd-history-empty {
  padding: 24px 0;
  text-align: center;
  font-size: 13px;
  color: var(--affine-text-secondary-color);
}
.pd-history-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.pd-history-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  font-size: 13px;
}
.pd-history-list li:hover { background: var(--affine-hover-color); }
.pd-history-list li.clickable { cursor: pointer; }
.pd-history-time { color: var(--affine-text-secondary-color); }
.pd-history-score { font-weight: 800; }
.pd-history-score.good { color: #16a34a; }
.pd-history-score.bad { color: #dc2626; }
/* 格子：解析按钮 / 眼睛 / 题号（图一布局） */
.pd-cell-parse {
  height: 19px;
  white-space: nowrap;
  padding: 0 9px;
  border-radius: 999px;
  border: 1px solid var(--affine-primary-color);
  background: transparent;
  color: var(--affine-primary-color);
  font-size: 10.5px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color .15s ease, color .15s ease;
}
.pd-cell-parse:hover { background: var(--affine-primary-color); color: #fff; }
.pd-cell-no { font-size: 14px; font-weight: 700; }
.pd-cell-ans {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 800;
  color: var(--affine-primary-color);
  line-height: 1;
}
.pd-card-cell:has(.pd-cell-ans) { border-color: var(--affine-primary-color); }
.pd-cell-eye {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--affine-text-secondary-color);
  opacity: .6;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  transition: opacity .15s ease, color .15s ease;
}
.pd-card-cell:hover .pd-cell-eye { opacity: 1; }
.pd-cell-eye.open { color: var(--affine-primary-color); opacity: 1; }
/* 分区手风琴：默认收起，下箭头展开 */
.pd-card-secrow {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: 13.5px;
  color: var(--affine-text-primary-color);
  text-align: left;
  font-family: system-ui, -apple-system, sans-serif;
}
.pd-card-secrow:hover { background: var(--affine-hover-color); }
.pd-card-secrow b { color: var(--affine-text-secondary-color); font-weight: 700; }
.pd-card-secname { flex: 1; font-weight: 600; }
.pd-card-secname em { font-style: normal; font-weight: 400; color: var(--affine-text-secondary-color); }
.pd-card-secnum { color: var(--affine-text-secondary-color); font-size: 12.5px; }
.pd-card-caret {
  flex-shrink: 0;
  color: var(--affine-text-secondary-color);
  transition: transform .2s ease;
}
.pd-card-caret.open { transform: rotate(180deg); }
/* 高亮 / 下划线弹窗按钮 */
.pd-hl-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--affine-text-primary-color);
  cursor: pointer;
}
.pd-hl-btn:hover { background: var(--affine-hover-color); }
.pd-hl-btn.is-on { background: var(--affine-hover-color); }
/* 翻译模式菜单（单词 / 句子 / 整段 / 全文） */
.pd-trans-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 68px;
  height: 58px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--affine-text-primary-color);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  font-family: system-ui, -apple-system, sans-serif;
}
.pd-trans-btn:hover { background: var(--affine-hover-color); }
.pd-trans-btn.is-on {
  background: var(--affine-hover-color);
  color: var(--affine-primary-color);
}
/* 文章段落：首行缩进两字符（Directions / 引导行 / 选项等除外）。
   分页后内容包在 .pd-page-body 内，故选择器以它为直接父级，
   使所有正文段落（仔细阅读 / 十五选十等）无需逐个加类即可缩进。 */
.exam-content-root .pd-page-body > p:not(:has(> strong:first-child)):not(:has(> em:first-child)) {
  text-indent: 2em;
}
/* 作文板块：末句缩进 */
.exam-content-root .pd-indent { text-indent: 2em; margin-top: 8px; }
/* 段落匹配侧栏：文章段落列表 */
.pd-match-paras {
  list-style: none;
  margin: 0 0 10px;
  padding: 8px 10px;
  border: 1px solid var(--affine-border-color);
  border-radius: 10px;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pd-match-paras li {
  display: flex;
  gap: 8px;
  align-items: baseline;
  font-size: 12.5px;
  color: var(--affine-text-secondary-color);
  cursor: pointer;
  border-radius: 6px;
  padding: 3px 4px;
}
.pd-match-paras li:hover { background: var(--affine-hover-color); color: var(--affine-text-primary-color); }
.pd-match-paras li b { color: var(--affine-primary-color); font-weight: 700; flex-shrink: 0; }
/* 翻译浮层 */
.pd-trans {
  max-width: 320px;
  max-height: 60vh;
  overflow-y: auto;
  font-family: system-ui, -apple-system, sans-serif;
}
.pd-trans-src {
  font-size: 13px;
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 6px;
  word-break: break-word;
}
.pd-trans-res {
  font-size: 15px;
  font-weight: 600;
  color: var(--affine-text-primary-color);
  word-break: break-word;
}
/* 字母圈（段落匹配 / 十五选十） */
.pd-picker-circles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 6px;
}
.pd-picker-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  font-size: 12.5px;
  font-weight: 700;
  font-family: var(--pd-serif);
  cursor: pointer;
  transition: border-color .15s ease, color .15s ease, background-color .15s ease;
}
.pd-picker-circle:hover { border-color: var(--affine-primary-color); color: var(--affine-primary-color); }
.pd-picker-circle.on {
  border-color: var(--affine-primary-color);
  color: var(--affine-primary-color);
  background: var(--affine-hover-color);
}
/* 十五选十：空格上下文句 + 15 词列表 */
.pd-picker-ctx { line-height: 2; }
.pd-picker-ctx .blank,
.pd-picker-ctx .pd-blank {
  border-bottom-color: var(--affine-primary-color);
}
.pd-picker-ctx .blank.cur,
.pd-picker-ctx .pd-blank.cur {
  color: #e8a23f;
  border-bottom-color: #e8a23f;
  font-size: 15px;
}
.pd-picker-words {
  list-style: none;
  min-width: 236px;
  margin: 0 0 4px;
  padding: 8px 14px;
  border: 1px solid var(--affine-border-color);
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 24px;
  font-size: 12px;
  line-height: 1.4;
  color: var(--affine-text-primary-color);
  font-family: var(--pd-serif);
}
/* 面板顶部模式切换（题目 / 答题卡） */
.pd-card-modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 3px;
  margin-bottom: 10px;
  border-radius: 9px;
  background: var(--affine-hover-color);
}
.pd-card-modes button {
  height: 30px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--affine-text-secondary-color);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .15s ease, color .15s ease;
}
.pd-card-modes button.on {
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}
/* 十五选十：文中空格（可点击）与词库表 */
.exam-content-root .blank {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px; padding: 0 10px;
  height: 22px;
  margin: 0 2px;
  padding: 0 5px;
  border-bottom: 1.5px solid #333;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 1;
  cursor: pointer;
  vertical-align: middle;
  color: var(--affine-primary-color);
  transition: background-color .15s ease;
}
.exam-content-root .blank:hover { background: var(--affine-hover-color); }
.exam-content-root .blank.filled { color: var(--affine-primary-color); }
.exam-content-root .word-bank {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px 18px;
  border: 1px solid #333;
  padding: 12px 18px;
  margin: 14px auto 6px;
  max-width: 480px;
  font-size: 14px;
  background: #fff;
}
.exam-content-root .word-bank span b { font-weight: 700; margin-right: 4px; }
/* 选项字母选择浮层（点题号 / 空格弹出） */
.pd-picker-mask { position: fixed; inset: 0; z-index: 940; }
.pd-picker {
  position: fixed;
  z-index: 941;
  width: max-content;
  min-width: 0;
  max-width: 400px;
  overflow-y: auto;
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-radius: 10px;
  box-shadow: var(--affine-shadow-2);
  padding: 8px;
  /* 不用 pd-menu-in 动画：其 transform 会覆盖 JS 设置的锚点上/下定位，
     动画期间把弹窗按在锚点下方、结束后又跳回上方（两段式跳动）。
     改为：定位修正期间透明，位置稳定后（data-ready）淡入，一步到位。 */
  opacity: 0;
  transition: opacity .14s ease;
}
.pd-picker[data-ready='true'] { opacity: 1; }
.pd-picker-q {
  position: fixed;
  width: 390px;
  max-height: calc(100vh - 120px);
  overflow: auto;
  padding: 14px;
  transform: none;
}
.pd-picker-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}
.pd-picker-guide {
  font-size: 14.5px;
  font-weight: 800;
  color: var(--affine-text-primary-color);
  line-height: 1.45;
  font-family: var(--pd-serif);
}
.pd-picker-qno {
  font-weight: 600;
  color: var(--affine-text-secondary-color);
  margin-left: 6px;
  font-size: 13px;
  font-family: system-ui, -apple-system, sans-serif;
  white-space: nowrap;
}
.pd-picker-close {
  border: none;
  background: transparent;
  font-size: 20px;
  line-height: 1;
  color: var(--affine-text-secondary-color);
  cursor: pointer;
}
.pd-picker-opts { display: flex; flex-direction: column; gap: 10px; }
.pd-picker-opt {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-secondary-color, #fafafa);
  color: var(--affine-text-primary-color);
  font-family: var(--pd-serif);
  font-size: 15px;
  text-align: left;
  cursor: pointer;
  transition: border-color .15s ease, background-color .15s ease;
}
.pd-picker-opt:hover { border-color: var(--affine-primary-color); }
.pd-picker-opt.on {
  border-color: var(--affine-primary-color);
  background: var(--affine-hover-color);
}
.pd-picker-letter {
  flex: 0 0 auto;
  width: 26px;
  height: 26px;
  border: 1.5px solid currentColor;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-family: var(--pd-serif);
}
.pd-picker-opt.on .pd-picker-letter {
  border-color: var(--affine-primary-color);
  color: var(--affine-primary-color);
}
.pd-picker-text { flex: 1; }
/* 浮窗内真实题干 */
.pd-picker-stem {
  margin: 0 0 10px;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--affine-text-primary-color);
  font-family: var(--pd-serif);
}
/* 顶部操作条固定（无底板矩形，透明融入页面） */
.pd-toolbar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: transparent;
}
.pd-alarm {
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  font-size: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.pd-alarm:hover { background: var(--affine-hover-color); }
/* 计时设置弹窗（图二）：紧贴顶部操作条、跟随计时按钮（左上） */
.pd-timer-dialog {
  position: fixed;
  top: 56px;
  left: 14px;
  right: auto;
  z-index: 951;
  width: 420px;
  max-width: calc(100vw - 32px);
  background: var(--affine-background-overlay-panel-color);
  border: 1px solid var(--affine-border-color);
  border-radius: 16px;
  box-shadow: var(--affine-shadow-2);
  padding: 18px;
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
  animation: pd-drawer-in .23s ease backwards;
}
.pd-timer-dialog-close {
  position: absolute;
  top: 12px;
  right: 14px;
  border: none;
  background: transparent;
  font-size: 20px;
  color: var(--affine-text-secondary-color);
  cursor: pointer;
}
.pd-timer-dialog-head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.pd-timer-dialog-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: var(--affine-primary-color);
  color: #fff;
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.pd-timer-dialog-head h3 { margin: 0; font-size: 20px; font-weight: 800; color: var(--affine-text-primary-color); }
.pd-timer-dialog-head p { margin: 4px 0 0; font-size: 13px; color: var(--affine-text-secondary-color); }
.pd-timer-dialog-modes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
}
.pd-timer-dialog-modes button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 10px;
  border-radius: 14px;
  border: 1.5px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color);
  color: var(--affine-text-primary-color);
  cursor: pointer;
  transition: border-color .15s ease;
}
.pd-timer-dialog-modes button b { font-size: 16px; font-weight: 800; }
.pd-timer-dialog-modes button span { font-size: 12.5px; color: var(--affine-text-secondary-color); }
.pd-timer-dialog-modes button.on { border-color: var(--affine-primary-color); }
.pd-timer-dialog-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.pd-timer-cancel {
  height: 46px;
  border: none;
  border-radius: 999px;
  background: var(--affine-hover-color);
  color: var(--affine-text-primary-color);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.pd-timer-start {
  height: 46px;
  border: none;
  border-radius: 999px;
  background: var(--affine-primary-color);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.pd-timer-start:hover { filter: brightness(1.05); }
/* 计时浮窗（图三，可拖动） */
.pd-timer-bar {
  position: fixed;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 930;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--affine-primary-color);
  background: var(--affine-background-overlay-panel-color);
  box-shadow: var(--affine-shadow-2);
  font-family: system-ui, -apple-system, sans-serif;
}
.pd-timer-label { font-size: 13px; color: var(--affine-text-secondary-color); }
.pd-timer-time { font-size: 22px; font-weight: 800; color: var(--affine-text-primary-color); min-width: 76px; text-align: center; }
.pd-tb-chip {
  height: 30px;
  padding: 0 12px;
  border: none;
  border-radius: 999px;
  background: var(--affine-primary-color);
  color: #fff;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.pd-tb-chip:hover { filter: brightness(1.06); }
.pd-tb-chip.red { background: #e8593f; }
.pd-timer-drag {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  cursor: grab;
  touch-action: none;
}
.pd-timer-bar > button { position: relative; z-index: 1; }
.pd-picker-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.pd-picker-nav {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 20px;
  color: var(--affine-text-primary-color);
  cursor: pointer;
}
.pd-picker-nav:disabled { opacity: .3; cursor: default; }
.pd-picker-dots { display: flex; gap: 8px; }
.pd-picker-dots span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1.5px solid var(--affine-border-color);
}
.pd-picker-dots span.on { border-color: var(--affine-primary-color); }
/* 我的作文 / 我的翻译 抽屉 */
.pd-drawer-mask { position: fixed; inset: 0; z-index: 950; background: rgba(0,0,0,.25); }
.pd-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 92vw);
  z-index: 951;
  display: flex;
  flex-direction: column;
  background: var(--affine-background-overlay-panel-color);
  border-left: 1px solid var(--affine-border-color);
  box-shadow: -8px 0 24px rgba(0, 0, 0, .12);
  padding: 16px 18px;
  animation: pd-drawer-in .23s ease backwards;
}
@keyframes pd-drawer-in {
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.pd-drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.pd-drawer-head h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--affine-text-primary-color);
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
}
.pd-drawer-close {
  border: none;
  background: transparent;
  font-size: 22px;
  line-height: 1;
  color: var(--affine-text-secondary-color);
  cursor: pointer;
}
.pd-drawer-text {
  flex: 1;
  resize: none;
  border: 1px solid var(--affine-primary-color);
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
  line-height: 1.6;
  font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
  color: var(--affine-text-primary-color);
  background: var(--affine-background-primary-color, #fff);
  outline: none;
}
.pd-drawer-text::placeholder { color: var(--affine-text-secondary-color); }
.pd-drawer-save {
  margin-top: 12px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background: var(--affine-primary-color);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.pd-drawer-save:hover { filter: brightness(1.05); }
.exam-content-root h3 {
  font-size: 15px;
  font-weight: 700;
  margin: 22px 0 8px;
}
.exam-content-root p {
  margin: 8px 0;
  text-align: justify;
  color: #000;
}
.exam-content-root section {
  margin: 0 0 10px;
}
.exam-content-root strong { font-weight: 700; }
/* Directions 等提示段落 */
.exam-content-root p > strong:first-child { font-style: normal; }
.exam-content-root em,
.exam-content-root i { font-style: italic; }
/* 文章标题（如 The Benefits of Solitude）居中；Passage One/Two 标签不居中 */
.exam-content-root .pd-article-title { text-align: center; }

/* 答案解析区（原版：Part IV 之后居中标题 + 细线分隔） */
.exam-content-root .answer-section {
  margin-top: 36px;
  padding-top: 18px;
  border-top: 1px solid #000;
}
.exam-content-root .answer-section h3 {
  text-align: center;
  margin: 0 0 14px;
  font-size: 16px;
}
.exam-content-root .answer-section p { text-align: left; }

.exam-content-root .pd-structure {
  text-align: center;
  font-size: 13.5px;
  color: #333;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 8px 0;
  margin: 12px 0 !important;
}
/* 灰色提示块（写作提示/考试说明）改为原版细框提示 */
.exam-content-root div[style*="background-color"] {
  background: #fff !important;
  border: 1px solid #999 !important;
  border-radius: 0 !important;
  padding: 10px 14px !important;
  margin: 12px 0 !important;
  font-size: 13.5px;
}
.exam-content-root div[style*="background-color"] h3 {
  margin: 0 0 6px;
  font-size: 14px;
  text-align: left;
}
.exam-content-root ul { margin: 4px 0; padding-left: 22px; }
/* 词库三栏排布（A-E / F-J / K-O） */
.exam-content-root ul.pd-wordbank {
  list-style: none;
  padding-left: 0;
  columns: 3;
  column-gap: 24px;
  font-size: 13.5px;
}
.exam-content-root ul.pd-wordbank li { break-inside: avoid; }
/* 选词填空的下划线 */
.exam-content-root .pd-blank {
  display: inline-block;
  width: 180px;
  border-bottom: 1px solid #000;
  height: 1em;
  vertical-align: bottom;
}
.exam-content-root li { margin: 2px 0; }

/* 题目 */
.exam-content-root .qblock { margin: 0 0 14px; }
.exam-content-root .question {
  margin: 0 0 4px;
  padding: 0;
  border: none;
  background: transparent;
}
/* 听力说明段左侧喇叭：固定在段落左侧空白区，点击跳进度条并播放 */
.exam-content-root .has-horn { position: relative; }
.exam-content-root p.has-horn,
.exam-content-root div.has-horn {
  position: relative;
}
.exam-content-root .pd-horn {
  position: absolute;
  left: -30px;
  top: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--affine-primary-color);
  color: var(--affine-primary-color);
  background: #fff;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity .12s ease, background-color .12s ease, color .12s ease;
}
.exam-content-root .pd-horn:hover {
  opacity: 1;
  background: var(--affine-primary-color);
  color: #fff;
}
/* 喇叭旁的瞬时提示（音频未导入） */
.exam-content-root .pd-horn-tip {
  position: absolute;
  left: -30px;
  top: 26px;
  z-index: 5;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--affine-text-primary-color, #121212);
  color: var(--affine-background-primary-color, #fff);
  font-size: 11px;
  line-height: 1.6;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}
/* 无音频数据时的占位胶囊：沿用 lp2 胶囊外形，内容置灰示意待导入 */
.lp2-empty {
  gap: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  cursor: default;
  opacity: 0.9;
}
.lp2-empty-icon { font-size: 14px; flex: 0 0 auto; }
.lp2-empty-text { white-space: nowrap; flex: 0 0 auto; }
/* 虚线进度轨：占位状态下保持胶囊视觉平衡（导入音频后由真实进度条取代）。
   用 currentColor 适配明暗主题（浅色模式下胶囊为白底深字） */
.lp2-empty-track {
  flex: 1;
  min-width: 60px;
  height: 6px;
  border-radius: 3px;
  opacity: 0.35;
  background: repeating-linear-gradient(
    90deg,
    currentColor 0 6px,
    transparent 6px 12px
  );
}
.exam-content-root .question > p {
  margin: 0 0 6px;
  font-weight: 500;
}
/* 选项：原版 A/B/C/D 两列排布 */
.exam-content-root .options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  row-gap: 2px;
  margin: 0 0 0 18px;
  width: calc(100% - 18px);
}
.exam-content-root .option {
  padding: 2px 4px;
  border: none;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.6;
  color: #000;
  min-width: 0;
  overflow-wrap: break-word;
  transition: background-color .12s ease;
}
.exam-content-root .option:hover { background: #f0f0f0; }
.exam-content-root .option.selected {
  background: var(--affine-hover-color);
  color: var(--affine-text-primary-color);
  font-weight: 600;
  box-shadow: inset 3px 0 0 var(--affine-primary-color);
}
.exam-content-root .option.selected strong { color: var(--affine-primary-color); }

/* ---------- 打印 ---------- */
@media print {
  .pd-toolbar, .pd-progress, .pd-float-bar, .pd-card, .pd-pen-menu { display: none !important; }
  .pd-root { background: #fff; padding: 0; }
  .pd-sheet { box-shadow: none; max-width: none; padding: 0; overflow: visible; }
  .pd-note { border: 1px solid #999; background: none; }
}
@media (max-width: 640px) {
  .pd-sheet { padding: 24px 18px 40px; font-size: 14px; }
  .pd-head-name { font-size: 20px; }
  .exam-content-root .options { grid-template-columns: 1fr; }
}
`,ig=JSON.parse('[{"id":"cet4-2026-06-set1","title":"2026年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-150词/分钟，短篇新闻占比升至30%，涵盖科技突破、环境治理等话题"],"reading":["科技与生活","校园场景分析","社会现象探讨","个人成长"],"writing":["大学生参与科研项目（需回应必要性与实用性两个维度）"],"translation":["餐桌礼仪"],"readingDifficulty":["中","难","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set2","title":"2026年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["学术化场景增加，长对话信息密度提升，信号词定位（but/however后答案概率达72%）"],"reading":["教育创新","智能设备应用","文化传承","职场发展"],"writing":["校园机器人应用（需提出具体观点或可操作建议）"],"translation":["尊师文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set3","title":"2026年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["校园与生活类场景为主，口音多元化（英音、澳音占比约15%）"],"reading":["青年品德","线上学习","环境保护","人际关系"],"writing":["提升校园生活便利性（需提出具体建议）"],"translation":["送礼习俗"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2025-12-set1","title":"2025年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["整体难度适中，话题贴近学习与生活，涉及社会、经济、文化等多层面"],"reading":["生物节律与服药时间","延迟退休原因分析","自行车道建设观念冲突","选择过多的决策困扰"],"writing":["建议信——学生会如何丰富学生生活"],"translation":["民营经济"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_1","hasListening":true},{"id":"cet4-2025-12-set2","title":"2025年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["短篇新闻涉及德国超市巧克力兔子版权纠纷，长对话偏校园与日常场景"],"reading":["用户体验设计师成长","英国学校校服政策争议","学术性文本分析","职场发展"],"writing":["如何充分利用校内资源促进学业发展"],"translation":["绿色经济"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_2","hasListening":true},{"id":"cet4-2025-12-set3","title":"2025年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["考查因果关系推断与观点态度理解能力，注重实际场景关键信息抓取"],"reading":["社会热点","文化现象","教育话题","健康生活"],"writing":["为学生会如何丰富学生生活提建议"],"translation":["城市漫步"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_3","hasListening":true},{"id":"cet4-2025-06-set1","title":"2025年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set1","year":2025,"month":"06","keyPoints":{"listening":["语速适中，对话为校园和日常热点场景，长对话需集中注意力抓关键信息"],"reading":["选词填空考基础词汇运用","仔细阅读贴近社会热点","长篇阅读信息匹配"],"writing":["大学图书馆是否应该向公众开放"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_1","hasListening":true},{"id":"cet4-2025-06-set2","title":"2025年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set2","year":2025,"month":"06","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["社会热点话题","文化现象分析","教育公平","科技与生活"],"writing":["创新创业课程相关"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_2","hasListening":true},{"id":"cet4-2025-06-set3","title":"2025年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set3","year":2025,"month":"06","keyPoints":{"listening":["整体难度适中，比平时模拟题更贴近真实考试节奏，没有偏题怪题"],"reading":["选词填空考基础词汇","仔细阅读主题贴近社会热点","长篇阅读信息匹配"],"writing":["创新创业课程相关"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_3","hasListening":true},{"id":"cet4-2024-12-set1","title":"2024年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set1","year":2024,"month":"12","keyPoints":{"listening":["整体难度适中，但听力是本次考试最难的部分，语速偏快、信息密度高"],"reading":["社交媒体对人际交往的影响","社会热点话题分析","科技与生活","职场发展"],"writing":["社交媒体对人际交往的影响"],"translation":["医患关系处理"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_1","hasListening":true},{"id":"cet4-2024-12-set2","title":"2024年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set2","year":2024,"month":"12","keyPoints":{"listening":["语速平稳、发音清晰，但部分长对话和讲座信息密度较高"],"reading":["远程工作对效率和生活质量的影响","全球气候变化对农业的影响","电子书与纸质书阅读体验差异"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_2","hasListening":true},{"id":"cet4-2024-12-set3","title":"2024年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set3","year":2024,"month":"12","keyPoints":{"listening":["语速快，发音与英美音差异大，话题偏专业"],"reading":["社会热点话题","健康生活方式","教育公平","文化多样性"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_3","hasListening":true},{"id":"cet4-2024-06-set1","title":"2024年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set1","year":2024,"month":"06","keyPoints":{"listening":["语速比往年快一丢丢，长对话容易走神漏细节"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["智能设备对学习的影响"],"translation":["贴福字"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_1","hasListening":true},{"id":"cet4-2024-06-set2","title":"2024年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set2","year":2024,"month":"06","keyPoints":{"listening":["语速平稳，没有怪口音，基础稳点能拿不少分"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["大学图书馆是否应该向公众开放"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_2","hasListening":true},{"id":"cet4-2024-06-set3","title":"2024年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set3","year":2024,"month":"06","keyPoints":{"listening":["整体中等偏上，不是最难但坑点真不少"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["智能设备对学习的影响"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_3","hasListening":true},{"id":"cet4-2023-12-set1","title":"2023年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set1","year":2023,"month":"12","keyPoints":{"listening":["短篇新闻和长对话相对简单，听力篇章难度有所增加"],"reading":["词汇理解与长篇阅读较容易，仔细阅读难度较大"],"writing":["写作要求与往年变化不大，认真审题即可"],"translation":["改革开放以来饮食变化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-12-set2","title":"2023年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set2","year":2023,"month":"12","keyPoints":{"listening":["听力语速和长对话复杂度已接近当前考试标准"],"reading":["选词填空出现个别生词","长篇阅读信息匹配","仔细阅读细节题为主"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-12-set3","title":"2023年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set3","year":2023,"month":"12","keyPoints":{"listening":["听力部分如果不仔细听材料，很多细节之处容易忽略"],"reading":["仔细阅读难度较大，需要较强的逻辑推断能力"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set1","title":"2023年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["长对话略难，同义替换较多，不仔细听容易忽略细节"],"reading":["仔细阅读中规中矩，定位好关键句关键词正确率较高"],"writing":["作文和翻译内容相对抽象，很多词汇难写，难度较大"],"translation":["揠苗助长"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set2","title":"2023年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["听力发音清晰、语速适中"],"reading":["阅读话题不偏，翻译是传统文化类，背过素材很好上手"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["亡羊补牢"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-06-set3","title":"2023年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set3","year":2023,"month":"06","keyPoints":{"listening":["听力整体来说较简单，正确选项与原文高度匹配，体现视听一致原则"],"reading":["阅读话题不偏，仔细阅读中规中矩"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["守株待兔"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2022-12-set1","title":"2022年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["听力对我来说很难，错了挺多"],"reading":["选词填空考高中考纲词汇","仔细阅读感觉还行","翻译冬至那篇挺简单"],"writing":["培养社交能力的必要性"],"translation":["冬至"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_1","hasListening":true},{"id":"cet4-2022-12-set2","title":"2022年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set2","year":2022,"month":"12","keyPoints":{"listening":["听力开头两个全错，后十个听力错4个"],"reading":["选词填空考parenthood","仔细阅读涉及鱼和消除贫困，都读懂了但选项选不出来"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_2","hasListening":true},{"id":"cet4-2022-12-set3","title":"2022年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set3","year":2022,"month":"12","keyPoints":{"listening":["听力部分16-25题较难"],"reading":["选词填空都是高中考纲词汇，没有不认识的词"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_3","hasListening":true},{"id":"cet4-2022-06-set1","title":"2022年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set1","year":2022,"month":"06","keyPoints":{"listening":["听力选项同义替换多，长度普遍较长，预读起来没那么顺畅"],"reading":["段落匹配到处是显眼的TD，做起来挺轻松","仔细阅读第一篇挺简单，第二篇common sense有点绕"],"writing":["作文很好写，背的模版刚好契合"],"translation":["赵州桥"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_1","hasListening":true},{"id":"cet4-2022-06-set2","title":"2022年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set2","year":2022,"month":"06","keyPoints":{"listening":["全国共考两套听力，本套听力与前两套内容一样，只是选项顺序不同"],"reading":["阅读整体感觉还行，仔细阅读定位准确即可"],"writing":["作文较好写"],"translation":["亡羊补牢"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_2","hasListening":true},{"id":"cet4-2022-06-set3","title":"2022年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set3","year":2022,"month":"06","keyPoints":{"listening":["听力比起去年12月的要难一点"],"reading":["阅读话题常规，仔细阅读需要仔细定位"],"writing":["作文较好写"],"translation":["揠苗助长"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_3","hasListening":true},{"id":"cet4-2021-12-set1","title":"2021年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["听力题目中规中矩，和之前差不多"],"reading":["阅读还算正常，仔细阅读定位准确即可"],"writing":["作文report较难，不记得怎么写"],"translation":["都江堰"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2021-12-set2","title":"2021年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set2","year":2021,"month":"12","keyPoints":{"listening":["听力部分中规中矩"],"reading":["阅读部分选词填空考词汇辨析与语法，仔细阅读涉及人工智能在医疗中的应用"],"writing":["作文report较难"],"translation":["坎儿井"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-12-set3","title":"2021年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set3","year":2021,"month":"12","keyPoints":{"listening":["听力部分与第二套一致"],"reading":["阅读整体难度适中"],"writing":["作文report较难"],"translation":["大运河"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set1","title":"2021年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set1","year":2021,"month":"06","keyPoints":{"listening":["听力好难，到后面基本上是乱写"],"reading":["第二套的长篇阅读和第三套的仔细阅读，太难了，和平时的四级考试难度不在一个等级"],"writing":["科技是否会让人变懒"],"translation":["铁观音"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set2","title":"2021年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set2","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["匹配阅读真的难，文章内容根本读不懂，全是比较晦涩难懂的内容"],"writing":["科技是否会让人变懒"],"translation":["龙井"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set3","title":"2021年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set3","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["仔细阅读真的有些读不懂，一个是boring，一个是肥胖"],"writing":["科技是否会让人变懒"],"translation":["普洱"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set1","title":"2020年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["听力考试难度适中，较之前考题无明显变化"],"reading":["选词填空是难点，段落匹配和传统阅读得分点与以往并无差异，主要考察名词定位和句式关键信息处理"],"writing":["Changes in the Way of Education"],"translation":["春节中鱼的象征意义"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set2","title":"2020年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["新闻听力选项内容较长，词汇难度提升，主要考察细节匹配"],"reading":["选词填空讲“该如何把控赞美的度”，快速阅读关于“贫穷的样子”，仔细阅读是比较日常的社科类话题"],"writing":["Changes in the Way of Transportation"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set3","title":"2020年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set3","year":2020,"month":"12","keyPoints":{"listening":["长对话部分选项内容相对容易，短文听力部分较长对话稍有难度"],"reading":["仔细阅读试题考查类型为细节理解，题干关键词定位明显"],"writing":["Changes in the Way of Communication"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set1","title":"2020年9月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["新闻部分语速适中，专业词汇较少；长对话第一篇语速较快，连读较多"],"reading":["选词填空难度不大，词性辨别及单词难度较低","长篇阅读难点在实验过程的段落区分"],"writing":["在线图书馆/在线词典/PPT的使用"],"translation":["白酒/国宴等传统文化词汇"],"readingDifficulty":["难","中","中","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set2","title":"2020年9月 四级真题 (第二、三套合并卷)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["听力部分整体较往年相比难度适中，语速适中，考题均为细节题"],"reading":["仔细阅读主要考查综合阅读能力，题目以细节题为主，重在对比原文与选项是否同义"],"writing":["分析利弊型作文，网络相关话题"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-07-set1","title":"2020年7月 四级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["难度基本与去年12月持平，个别几道题较难，做题技巧围绕视听一致原则"],"reading":["选词填空为科普类文章，考查大纲词汇及名、动、形、副四类词汇语法结构"],"writing":["分析翻译应用程序流行的原因（原因解释类作文）"],"translation":["火锅"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set1","title":"2019年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set1","year":2019,"month":"12","keyPoints":{"listening":["新闻部分较往年容易，长对话正常难度，篇章较难，考题多为细节题"],"reading":["阅读整体难度适中，多为应用文和议论文，选词填空出现个别生词，考生易在此处丢分"],"writing":["推荐信（应用文写作）"],"translation":["父母重视教育"],"readingDifficulty":["中","易","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2019-12-set2","title":"2019年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set2","year":2019,"month":"12","keyPoints":{"listening":["长对话听音难点主要集中在语音，连读较多，英美音互换较难"],"reading":["阅读整体难度适中，仔细阅读部分题在常见设题点设题，较容易定位"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set3","title":"2019年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set3","year":2019,"month":"12","keyPoints":{"listening":["短文篇幅较长，语言难度较其他两部分来说相对难一些"],"reading":["阅读整体难度适中，选词填空出现个别生词"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","易","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set1","title":"2019年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set1","year":2019,"month":"06","keyPoints":{"listening":["整体来说较简单，新闻、长对话、篇章考的都是在课堂上讲过的简单生活类主题"],"reading":["阅读理解总体难度比2018年12月简单，高频词汇反复出现","考点中规中矩","阅读材料接地气容易理解"],"writing":["新闻报道（社会热点类话题）"],"translation":["灯笼"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set2","title":"2019年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set2","year":2019,"month":"06","keyPoints":{"listening":["听力考试整体来说较简单，好多文章的正确选项都跟原文高度匹配"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set3","title":"2019年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set3","year":2019,"month":"06","keyPoints":{"listening":["听力难度适中"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set1","title":"2018年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set1","year":2018,"month":"12","keyPoints":{"listening":["题型稳定，长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察学生在材料中的定位及对重点语句的理解能力"],"writing":["毕业后将面临的就业挑战"],"translation":["手机阅读"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set2","title":"2018年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set2","year":2018,"month":"12","keyPoints":{"listening":["长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，题材为学生的日常兴趣与关注的话题"],"writing":["留学面临的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-12-set3","title":"2018年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set3","year":2018,"month":"12","keyPoints":{"listening":["听力部分题型稳定，话题较为传统"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察定位及重点语句理解能力"],"writing":["大城市生活的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-06-set1","title":"2018年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set1","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单，新闻部分没有涉及政治经济类话题，考的是社会民生类新闻"],"reading":["试卷整体难度有所下降，阅读与听力较以往考试也更容易理解"],"writing":["口语能力的重要性及如何培养"],"translation":["飞机"],"readingDifficulty":["易","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set2","title":"2018年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set2","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["选材源于英美主流媒体报刊，题材集中在社科领域"],"writing":["写作能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set3","title":"2018年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set3","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["试卷整体难度有所下降，阅读更容易理解"],"writing":["阅读能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}}]'),rg=JSON.parse('[{"id":"cet6-2026-06-set1","title":"2026年6月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-160词/分钟，学术场景占比激增至68%，多模态（语音+图表）融合考查"],"reading":["科技与生活","社会现象分析","科技伦理","人文关怀"],"writing":["热爱自然（Love Nature）"],"translation":["无人机"],"difficulty":"中等","readingDifficulty":["中","难","难","难"],"readingLevel":"难"}},{"id":"cet6-2026-06-set2","title":"2026年6月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["讲座听力开头30秒是考点密集区，主旨题答案几乎都出现在前30秒内"],"reading":["文化传承","教育与发展","经济与社会","个人成长"],"writing":["深入了解中华传统文化有助于促进文化交流"],"translation":["电子商务与乡村振兴"],"difficulty":"中等","readingDifficulty":["中","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2026-06-set3","title":"2026年6月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["转折词but、however后面覆盖约40%的细节题和推理题"],"reading":["心理健康","科技对社会的影响","环境与责任","批判性思维"],"writing":["科技与人文"],"translation":["科技医疗（远程医疗）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-12-set1","title":"2025年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["持续关注学术场景和逻辑信号词"],"reading":["社会价值观","老年人对社会贡献","教育方法","科技与人类"],"writing":["在竞争日益激烈的世界中，大学生应更好准备以应对各种挑战"],"translation":["尊老（中华民族传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_1/test.pdf"},{"id":"cet6-2025-12-set2","title":"2025年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["逻辑推断和细节抓取并重"],"reading":["网络经济与传统经济","科技发展与政策","自我价值实现","大学生活适应"],"writing":["通过“中国梦”实现自我价值"],"translation":["中华民族崇尚的自强自立精神"],"difficulty":"中等","readingDifficulty":["中","中","难","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_2/test.pdf"},{"id":"cet6-2025-12-set3","title":"2025年12月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["学术场景与日常对话交替出现"],"reading":["传统美德与消费","深度阅读与AI","人类创造力","志愿服务与社会责任"],"writing":["教师对学生学术追求和个人发展的影响"],"translation":["节俭（frugality，传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_3/test.pdf"},{"id":"cet6-2025-06-set1","title":"2025年6月 六级真题 (第一套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set1","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第1套.pdf","keyPoints":{"listening":["听力语速提升，学术场景占比增加，讲座逻辑严密"],"reading":["社会心理（身份构建）","独处的好处","追随激情的潜在问题","工作与生活平衡"],"writing":["过度依赖AI对创造力的危害"],"translation":["天宫空间站"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-06-set2","title":"2025年6月 六级真题 (第二套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set2","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第2套.pdf","keyPoints":{"listening":["学术场景为主，重视逻辑信号词"],"reading":["社会心理","图书馆的重要性","社区文化","信息获取与知识传播"],"writing":["社交媒体的使用（正确且负责任地使用）"],"translation":["南水北调工程"],"difficulty":"较难","readingDifficulty":["难","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2025-06-set3","title":"2025年6月 六级真题 (第三套)","desc":"高阶词汇突破","url":"exam-detail.html?id=cet6-2025-06-set3","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第3套.pdf","keyPoints":{"listening":["语速偏快，细节题需结合笔记技巧"],"reading":["环境意识","肉类消费与气候变化","可持续生活","公共健康"],"writing":["职业准备"],"translation":["粤港澳大湾区"],"difficulty":"较难","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set1","title":"2024年12月 六级真题 (第一套)","desc":"年度压轴真题","url":"exam-detail.html?id=cet6-2024-12-set1","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_1/test.pdf","keyPoints":{"listening":["长对话围绕绩效评估、商业项目展开；短文考儿童好奇心"],"reading":["全球贫困问题","密码记忆研究","恐怖片为何受欢迎","社会心理与科技"],"writing":["人工智能对职场的影响"],"translation":["北斗卫星导航系统"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set2","title":"2024年12月 六级真题 (第二套)","desc":"学术英语精讲","url":"exam-detail.html?id=cet6-2024-12-set2","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_2/test.pdf","keyPoints":{"listening":["讲座考物质追求、可持续时尚；学术场景比重增加"],"reading":["全球贫困问题","数字隐私与密码记忆","恐怖片流行原因","人类行为与心理"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["人工智能技术在中国各行业的应用及发展前景"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set3","title":"2024年12月 六级真题 (第三套)","desc":"写作论证技巧","url":"exam-detail.html?id=cet6-2024-12-set3","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_3/test.pdf","keyPoints":{"listening":["长对话涉及商业项目；讲座偏社会学话题"],"reading":["社会经济学","左脑与右脑差异","认知科学","教育应用"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["京剧脸谱艺术"],"difficulty":"较难","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2024-06-set1","title":"2024年6月 六级真题 (第一套)","desc":"真实真题（含听力音频）","url":"exam-detail.html?id=cet6-2024-06-set1","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_1/test.pdf","keyPoints":{"listening":["听力语速偏快，连读弱读较多，短对话聚焦职场、学术场景"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["数字素养技能（Digital Literacy Skills）"],"translation":["中国传统婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2024_06_1","hasListening":true},{"id":"cet6-2024-06-set2","title":"2024年6月 六级真题 (第二套)","desc":"复杂句式解析","url":"exam-detail.html?id=cet6-2024-06-set2","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_2/test.pdf","keyPoints":{"listening":["长对话主题为“学术会议筹备”，讲座细节推断"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["社会实践和理论学习同等重要（Social Practice and Academic Learning）"],"translation":["竹子"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-06-set3","title":"2024年6月 六级真题 (第三套)","desc":"听力长对话攻略","url":"exam-detail.html?id=cet6-2024-06-set3","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_3/test.pdf","keyPoints":{"listening":["语速快，弱读连读多；注意转折词后的答案区间"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["坚持独立思考 / 自主学习"],"translation":["中国婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2023-12-set1","title":"2023年12月 六级真题 (第一套)","desc":"深入剖析长难句","url":"exam-detail.html?id=cet6-2023-12-set1","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_1/test.pdf","keyPoints":{"listening":["短篇新闻涉及量子计算、乡村教育振兴；讲座关注专业术语理解（如“量子霸权”）"],"reading":["AI时代创造力价值","数字经济对传统行业的冲击与机遇","环境保护与经济发展","社会文化"],"writing":["环境保护与经济发展（分析矛盾并提出解决方案）"],"translation":["中国人口结构变化与老龄化社会"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_1","hasListening":true},{"id":"cet6-2023-12-set2","title":"2023年12月 六级真题 (第二套)","desc":"科技文献阅读","url":"exam-detail.html?id=cet6-2023-12-set2","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_2/test.pdf","keyPoints":{"listening":["短篇新闻涉及全球生物多样性保护会议；长对话职场场景"],"reading":["AI时代创造力价值","多元文化社会的价值冲突与融合","基础知识获取的重要性","跨文化沟通"],"writing":["The importance of acquiring the basic knowledge"],"translation":["中国城镇化进程"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_2","hasListening":true},{"id":"cet6-2023-12-set3","title":"2023年12月 六级真题 (第三套)","desc":"翻译精准表达","url":"exam-detail.html?id=cet6-2023-12-set3","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_3/test.pdf","keyPoints":{"listening":["讲座学术逻辑性强，注意信号词和逻辑词"],"reading":["社会现象","逻辑推理与信息匹配","老年人社会贡献","职场与生活"],"writing":["老年人凭借宝贵技能和经验继续为社会做贡献（给定开头句）"],"translation":["中国养老服务体系建设"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_3","hasListening":true},{"id":"cet6-2023-06-set1","title":"2023年6月 六级真题 (第一套)","desc":"议论文写作范式","url":"exam-detail.html?id=cet6-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["注意力管理","专注力对学习工作的重要性","AI时代思考能力","多角度分析"],"writing":["AI时代思考能力","多角度分析"],"translation":["贴春联"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_1","hasListening":true},{"id":"cet6-2023-06-set2","title":"2023年6月 六级真题 (第二套)","desc":"学术词汇积累","url":"exam-detail.html?id=cet6-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["AI创造力争议","人工智能能否替代人类创作","科技伦理","社会影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["印章"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_2","hasListening":true},{"id":"cet6-2023-06-set3","title":"2023年6月 六级真题 (第三套)","desc":"听力讲座笔记法","url":"exam-detail.html?id=cet6-2023-06-set3","year":2023,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_3/test.pdf","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["多元文化","文化价值冲突与融合","文化认同","全球化影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["中央电视台总部大楼"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_3","hasListening":true},{"id":"cet6-2022-12-set1","title":"2022年12月 六级真题 (第一套)","desc":"后疫情时代话题","url":"exam-detail.html?id=cet6-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["三篇新闻聚焦后疫情时代社会议题"],"reading":["韧性城市建设","数字鸿沟对社会公平的影响","学生贷款与教育公平","社会政策分析"],"writing":["培养团队精神"],"translation":["春节（习俗","文化内涵和现代意义）"],"difficulty":"中等","readingDifficulty":["中","难","中","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_1","hasListening":true},{"id":"cet6-2022-12-set2","title":"2022年12月 六级真题 (第二套)","desc":"经济全球化主题","url":"exam-detail.html?id=cet6-2022-12-set2","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_2/test.pdf","keyPoints":{"listening":["长对话细节题占比高，注意逻辑关系"],"reading":["社会心理","数字鸿沟与信息公平","教育公平","社会阶层与流动"],"writing":["培养批判性思维（逻辑推理","避免草率判断）"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_2","hasListening":true},{"id":"cet6-2022-12-set3","title":"2022年12月 六级真题 (第三套)","desc":"文化多样性","url":"exam-detail.html?id=cet6-2022-12-set3","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_3/test.pdf","keyPoints":{"listening":["学术讲座偏多，逻辑结构清晰"],"reading":["文化现象","古典音乐受众演变","文化传承与创新","艺术与商业"],"writing":["信息时代的学习"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_3","hasListening":true},{"id":"cet6-2022-06-set1","title":"2022年6月 六级真题 (第一套)","desc":"气候变化议题","url":"exam-detail.html?id=cet6-2022-06-set1","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第1套.pdf","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["环保生活","长难句与观点梳理","环境政策","绿色生活方式"],"writing":["Live an Environmentally Friendly Lifestyle"],"translation":["剪纸"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2022-06-set2","title":"2022年6月 六级真题 (第二套)","desc":"人工智能伦理","url":"exam-detail.html?id=cet6-2022-06-set2","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第2套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","信息匹配与细节定位","社会文化","生态保护"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["皮影戏"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2022-06-set3","title":"2022年6月 六级真题 (第三套)","desc":"可持续发展","url":"exam-detail.html?id=cet6-2022-06-set3","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第3套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","科普推理","社会热点问题","文化现象"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["昆曲"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2021-12-set1","title":"2021年12月 六级真题 (第一套)","desc":"数字经济时代","url":"exam-detail.html?id=cet6-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["场景多样，细节题占比高"],"reading":["睡眠与健康","社会现象分析","有效沟通","人际关系"],"writing":["有效沟通能力的重要性"],"translation":["井冈山（中国革命摇篮）"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_1","hasListening":true},{"id":"cet6-2021-12-set2","title":"2021年12月 六级真题 (第二套)","desc":"社会公平正义","url":"exam-detail.html?id=cet6-2021-12-set2","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_2/test.pdf","keyPoints":{"listening":["讲座学术性强，需要笔记辅助"],"reading":["经济影响","自动化对经济的破坏性","科技与就业","社会变迁"],"writing":["Say Thank You to Parents（向父母道谢）"],"translation":["延安（中国革命圣地）"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_2","hasListening":true},{"id":"cet6-2021-12-set3","title":"2021年12月 六级真题 (第三套)","desc":"科技创新驱动","url":"exam-detail.html?id=cet6-2021-12-set3","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_3/test.pdf","keyPoints":{"listening":["长对话偏职场与生活场景"],"reading":["社会心理","社交媒体与数字阅读","数字时代生活","阅读习惯"],"writing":["虚假信息"],"translation":["中国共产党第一次全国代表大会会址"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_3","hasListening":true},{"id":"cet6-2021-06-set1","title":"2021年6月 六级真题 (第一套)","desc":"疫情下的教育变革","url":"exam-detail.html?id=cet6-2021-06-set1","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_1/test.pdf","keyPoints":{"listening":["长对话8%、听力篇章7%、讲座20%，注意转折、因果、最高级等关键词"],"reading":["创造力","画画与创造力教育","AI与就业","职业发展"],"writing":["社交媒体是否拉近了人际距离"],"translation":["海南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_1","hasListening":true},{"id":"cet6-2021-06-set2","title":"2021年6月 六级真题 (第二套)","desc":"远程办公趋势","url":"exam-detail.html?id=cet6-2021-06-set2","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_2/test.pdf","keyPoints":{"listening":["注意七种关键词（转折、因果、最高级、事实罗列等）"],"reading":["技术影响","汽车改变生活","文化遗产（巴黎圣母院大火）","科技与社会"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["云南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_2","hasListening":true},{"id":"cet6-2021-06-set3","title":"2021年6月 六级真题 (第三套)","desc":"医疗卫生体系","url":"exam-detail.html?id=cet6-2021-06-set3","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_3/test.pdf","keyPoints":{"listening":["长对话、篇章、讲座题型分布均衡"],"reading":["教育观念","学校创造力教育","教育公平","个人成长"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["青海"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_3","hasListening":true},{"id":"cet6-2020-12-set1","title":"2020年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop the ability to meet challenges"]}},{"id":"cet6-2020-12-set2","title":"2020年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop ef fective communication skills"]}},{"id":"cet6-2020-12-set3","title":"2020年12月 六级真题 (第三套)","desc":"国际合作发展","url":"exam-detail.html?id=cet6-2020-12-set3","year":2020,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/answer.pdf","keyPoints":{"listening":["注意事实罗列词汇、情态动词"],"reading":["艺术欣赏","艺术欣赏困境","创造力","挑战自我"],"writing":["Why students should take challenges"],"translation":["大兴机场"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2020-09-set1","title":"2020年9月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;Beauty of the soul is the essential beauty.&rdquo;"]}},{"id":"cet6-2020-09-set2","title":"2020年9月 六级真题 (第二、三套合并卷)","desc":"第二、三套合并卷，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["全国共考1套听力，与第一套一致"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["在线经济崛起"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["第二、三套作文真题整理中"]}},{"id":"cet6-2020-07-set1","title":"2020年7月 六级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;The best preparation for tomorrow is doing your best today."]}},{"id":"cet6-2019-12-set1","title":"2019年12月 六级真题 (第一套)","desc":"5G时代来临","url":"exam-detail.html?id=cet6-2019-12-set1","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/listening.mp3","keyPoints":{"listening":["讲座听力为重点，需关注学术逻辑"],"reading":["家庭责任","责任感","牡丹花文化","传统美德"],"writing":["家庭责任感"],"translation":["牡丹花"],"difficulty":"适中","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2019-12-set2","title":"2019年12月 六级真题 (第二套)","desc":"区块链技术","url":"exam-detail.html?id=cet6-2019-12-set2","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/listening.mp3","keyPoints":{"listening":["讲座学术逻辑，注意信号词"],"reading":["社会责任","责任感","荷花文化","社会价值观"],"writing":["社会责任感"],"translation":["荷花"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-12-set3","title":"2019年12月 六级真题 (第三套)","desc":"大数据应用","url":"exam-detail.html?id=cet6-2019-12-set3","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["团体责任","责任感","梅花文化","传统文化"],"writing":["团体责任感"],"translation":["梅花"],"difficulty":"适中","readingDifficulty":["中","易","易","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set1","title":"2019年6月 六级真题 (第一套)","desc":"文化自信建设","url":"exam-detail.html?id=cet6-2019-06-set1","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/listening.mp3","keyPoints":{"listening":["长对话、Passage、Lecture三种题型"],"reading":["AI影响","AI对人类文明的影响","AI与霍金警告","团队精神与沟通"],"writing":["团队精神和沟通在工作中的重要性"],"translation":["汉语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set2","title":"2019年6月 六级真题 (第二套)","desc":"生态文明理念","url":"exam-detail.html?id=cet6-2019-06-set2","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/listening.mp3","keyPoints":{"listening":["注意信号词和逻辑词"],"reading":["创业","老年人市场","学习动机","教育与工作"],"writing":["学习动机和学习方法的重要性"],"translation":["成语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set3","title":"2019年6月 六级真题 (第三套)","desc":"创新型国家","url":"exam-detail.html?id=cet6-2019-06-set3","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["职业转型","重新工作感受与AI发展","人际交往","互相尊重"],"writing":["人际交往中相互理解和尊重的重要性"],"translation":["方言"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set1","title":"2018年12月 六级真题 (第一套)","desc":"改革开放40年","url":"exam-detail.html?id=cet6-2018-12-set1","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第1套.pdf","keyPoints":{"listening":["需关注关键句而非追求整篇听懂"],"reading":["农业机器人","机器人在农业中的应用","科普沟通","留学挑战"],"writing":["The challenges of studying abroad"],"translation":["图书馆"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set2","title":"2018年12月 六级真题 (第二套)","desc":"移动支付革命","url":"exam-detail.html?id=cet6-2018-12-set2","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第2套.pdf","keyPoints":{"listening":["同上"],"reading":["儿童注意力发展","智能手机与心理学","毕业挑战","职场适应"],"writing":["The challenges of starting a career after graduation"],"translation":["博物馆"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2018-12-set3","title":"2018年12月 六级真题 (第三套)","desc":"高铁走向世界","url":"exam-detail.html?id=cet6-2018-12-set3","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第3套.pdf","keyPoints":{"listening":["同上"],"reading":["教育方法","高等数学争论","护理机器人","大城市生活","社会适应"],"writing":["The challenges of living in big cities"],"translation":["体育馆"],"difficulty":"适中","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2018-06-set1","title":"2018年6月 六级真题 (第一套)","desc":"智能制造升级","url":"exam-detail.html?id=cet6-2018-06-set1","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第1套.pdf","keyPoints":{"listening":["长对话为热身过渡（7%），重点在讲座讲话（第23-25题）"],"reading":["非名校选择","社会文化","高铁网络与社会发展"],"writing":["建立企业与消费者之间的信任"],"translation":["高铁"],"difficulty":"适中","readingDifficulty":["易","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set2","title":"2018年6月 六级真题 (第二套)","desc":"电子商务发展","url":"exam-detail.html?id=cet6-2018-06-set2","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第2套.pdf","keyPoints":{"listening":["讲座听力涉及大写专有名词和数字（如1984）；第23题偏主旨概括题"],"reading":["专有名词","词汇辨析","社会现象","生活质量"],"writing":["建立师生之间的信任"],"translation":["私家车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set3","title":"2018年6月 六级真题 (第三套)","desc":"共享单车现象","url":"exam-detail.html?id=cet6-2018-06-set3","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第3套.pdf","keyPoints":{"listening":["听力素材与第二套一致，仅选项顺序不同"],"reading":["社会文化","人际关系","社会发展"],"writing":["建立老板和员工之间的信任"],"translation":["共享单车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}}]'),Up={cet4:ig,cet6:rg},og=Up,cg={blue:{"--pf-accent":"#60a5fa","--pf-back":"#0056b3","--pf-front":"rgba(0, 123, 255, 0.65)","--pf-hint":"#60a5fa"},yellow:{"--pf-accent":"#FFCC00","--pf-back":"#F0B400","--pf-front":"rgba(255, 204, 0, 0.72)","--pf-hint":"#FFCC00"}};function sg(c,g){return(og[c]??[]).filter(d=>Number(d.year)===g).length}const Es=({label:c,text:g,testId:d,type:u,onEnter:y,accent:O="blue"})=>{const[X,L]=b.useState(!1),[z,S]=b.useState(""),V=b.useMemo(()=>{if(!u)return null;const B=z.trim().match(/^(20\d{2})\s*年?$/);if(!B)return null;const W=Number(B[1]),ue=sg(u,W);return{year:W,count:ue}},[z,u]);return r.jsxs("div",{className:"pf-item","data-type":u??"kaoyan",style:cg[O],children:[r.jsxs("div",{className:`folder-card${X?" open":""}`,"data-testid":d,onClick:()=>L(B=>!B),children:[r.jsxs("div",{className:"hint-wrapper",children:[r.jsx("span",{className:"hint-text",children:"Click to open"}),r.jsx("svg",{className:"hint-arrow",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22",stroke:"var(--pf-hint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r.jsxs("div",{className:"folder-container",children:[r.jsx("svg",{className:"folder-back",viewBox:"0 0 50 40",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z",fill:"var(--pf-back)"})}),u&&r.jsxs("div",{className:"folder-search",onClick:B=>B.stopPropagation(),children:[r.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",inputMode:"numeric",placeholder:"年份 如 2025",className:"search-input",value:z,"aria-label":`在 ${c} 中按年份搜索`,onChange:B=>{S(B.target.value.replace(/[^\d年]/g,"").slice(0,5))},onKeyDown:B=>{B.key==="Enter"&&(V!=null&&V.count)&&(B.preventDefault(),y(u??"kaoyan",V.year))}})]}),V&&r.jsx("div",{className:`year-hint${V.count?"":" is-empty"}`,"data-testid":`${d}-year-hint`,onClick:B=>{B.stopPropagation(),V.count&&y(u??"kaoyan",V.year)},children:V.count?r.jsxs(r.Fragment,{children:[r.jsxs("b",{children:[V.year," 年"]})," · ",V.count," 套 · 回车打开"]}):r.jsxs(r.Fragment,{children:[V.year," 年暂无试卷"]})}),r.jsxs("div",{className:"file file-5",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.jsx("polyline",{points:"21 15 16 10 5 21"})]}),r.jsx("div",{className:"file-text",children:g}),r.jsx("div",{className:"file-tag",children:"PDF • 4.2 MB"})]}),r.jsxs("div",{className:"file file-4",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),r.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),r.jsx("div",{className:"file-text",children:g}),r.jsx("div",{className:"file-tag",children:"PDF • 128 MB"})]}),r.jsxs("div",{className:"file file-3",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),r.jsx("div",{className:"file-text",children:g}),r.jsx("div",{className:"file-tag",children:"PDF • 12 KB"})]}),r.jsxs("div",{className:"file file-2","data-testid":`${d}-enter`,onClick:B=>{B.stopPropagation(),y(u??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.jsx("polyline",{points:"10 9 9 9 8 9"})]}),r.jsx("div",{className:"file-text",children:g}),r.jsx("div",{className:"file-tag",children:"PDF • 1.1 MB"})]}),r.jsxs("div",{className:"file file-1","data-testid":`${d}-enter-top`,onClick:B=>{B.stopPropagation(),y(u??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),r.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),r.jsx("div",{className:"file-text",children:g}),r.jsx("div",{className:"file-tag",children:"PDF • 8.4 MB"})]}),r.jsxs("div",{className:"folder-front-wrapper",children:[r.jsx("svg",{className:"folder-front",viewBox:"0 0 50 34",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z",fill:"var(--pf-front)"})}),r.jsx("div",{className:"folder-label"}),r.jsxs("div",{className:"counter",children:[r.jsx("div",{className:"status-dot"}),r.jsx("span",{className:"counter-label",children:"FILES"}),r.jsx("span",{className:"counter-number","data-testid":`${d}-count`,children:V?V.count||"0":u?"All":"NEW"})]})]})]})]}),r.jsx("div",{className:"pf-caption",children:c})]})},ug=({onEnter:c})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:dg}),r.jsxs("div",{className:"pe-train-head",children:[r.jsx("h2",{className:"pe-train-title",children:"题目训练"}),r.jsxs("div",{className:"pe-train-tabs",children:[r.jsx("button",{type:"button",className:"pe-train-tab is-on",children:"真题训练"}),r.jsx("button",{type:"button",className:"pe-train-tab",onClick:()=>window.alert("导入题目功能即将上线"),children:"导入题目"})]})]}),r.jsxs("div",{className:"pf-stage",children:[r.jsx(Es,{label:"CET-4 英语四级",text:"CET-4",testId:"paper-entry-cet4",type:"cet4",onEnter:c}),r.jsx(Es,{label:"CET-6 英语六级",text:"CET-6",testId:"paper-entry-cet6",type:"cet6",onEnter:c}),r.jsx(Es,{label:"考研英语",text:"KAOYAN",testId:"paper-entry-kaoyan",accent:"yellow",onEnter:c})]})]}),dg=`
/* 题目训练标题区（文件夹上方） */
.pe-train-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 0 0;
}
.pe-train-title {
  margin: 0;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: .18em;
  color: var(--affine-text-primary-color);
  font-family: 'STXingkai', 'KaiTi', 'STKaiti', 'SimSun', 'PingFang SC', 'Microsoft YaHei', serif;
  -webkit-font-smoothing: antialiased;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.pe-train-tabs {
  display: flex;
  gap: 14px;
}
.pe-train-tab {
  height: 52px;
  padding: 0 34px;
  border-radius: 999px;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color, #fff);
  color: var(--affine-text-primary-color);
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease;
}
.pe-train-tab:hover {
  transform: translateY(-1px);
  box-shadow: var(--affine-shadow-1, 0 4px 12px rgba(0, 0, 0, .08));
}
.pe-train-tab.is-on {
  background: var(--affine-primary-color);
  color: #fff;
  border-color: var(--affine-primary-color);
}

.pf-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  flex-wrap: nowrap;
  gap: 120px;
}

.pf-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 90px 70px 40px;
}

.pf-caption {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--affine-text-secondary-color, #8b8b8b);
}

.folder-card {
  width: 170px;
  height: 130px;
  perspective: 1200px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 1200px) {
  .pf-stage {
    gap: 48px;
  }
  .pf-item {
    padding: 70px 40px 30px;
  }
}

@media (max-width: 900px) {
  .pf-stage {
    gap: 12px;
  }
  .pf-item {
    padding: 50px 14px 20px;
  }
  .folder-card {
    transform: scale(0.82);
    margin: 0 -15px;
  }
}

@media (max-width: 760px) {
  .pf-stage {
    gap: 4px;
  }
  .pf-item {
    padding: 40px 6px 16px;
  }
  .folder-card {
    transform: scale(0.68);
    margin: 0 -27px;
  }
}

@media (max-width: 580px) {
  .pf-stage {
    flex-wrap: wrap;
    gap: 24px;
    row-gap: 24px;
  }
  .pf-item {
    padding: 30px 20px 20px;
  }
  .folder-card {
    transform: scale(1);
    margin: 0;
  }
}

/* hint text */
.hint-wrapper {
  position: absolute;
  top: -40px;
  right: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 100;
  animation: pf-floatHint 2.5s ease-in-out infinite;
}

.hint-text {
  font-family: "Inter", -apple-system, sans-serif;
  color: var(--pf-hint);
  font-size: 10px;
  font-weight: 900;
  text-decoration: underline;
  letter-spacing: 0.5px;
  white-space: nowrap;
  position: relative;
  right: -25px;
  top: 10px;
  transform: rotate(45deg);
}
.hint-arrow {
  height: 35px;
  width: 35px;
}

@keyframes pf-floatHint {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.folder-card.open .hint-wrapper {
  opacity: 0;
  transform: translateY(-10px);
}

/* folder card logics are here */
.folder-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  backface-visibility: hidden;
  will-change: transform;
}

.folder-card.open .folder-container {
  transform: rotateX(10deg) rotateY(-5deg);
}

.folder-back {
  position: absolute;
  bottom: 0;
  width: 100%;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
}

.folder-front-wrapper {
  position: absolute;
  bottom: -7px;
  width: 100%;
  z-index: 90;
  transform-origin: bottom;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 12px;
  /* 原组件未声明，浏览器按 flat 处理：counter 等子元素会被压进翻折平面，
     这里保持与原版一致的写法，靠 counter 自身 z-index 保证可见 */
}

.folder-label {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

/* this counts files  */
.counter {
  position: absolute;
  top: -95px;
  right: -75px;
  background-color: #a18cd1;
  padding: 4px 8px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transform: scale(0) translateY(20px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 100;
  pointer-events: auto;
}

.folder-card.open .folder-container .counter {
  transform: scale(1) translateY(0);
  opacity: 1;
  transition-delay: 0.2s;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #34d399;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 10px #34d399;
}

.status-dot::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #34d399;
  border-radius: 50%;
  animation: pf-pulse 2s infinite;
}

@keyframes pf-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}

.counter-label {
  font-family: "Inter", sans-serif;
  font-size: 8px;
  font-weight: 800;
  color: black;
  text-transform: capitalize;
}

.counter-number {
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 900;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.counter:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--pf-hint);
  transform: scale(1.1) translateY(-5px) !important;
  cursor: help;
}

.counter:hover .counter-number {
  color: var(--pf-hint);
  transition: color 0.3s ease;
}

/* files with <hidden secrects /> */
.file {
  position: absolute;
  bottom: 5px;
  left: 10%;
  width: 80%;
  height: 85px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 0;
}

.file-1 { background: #ff5f6d; z-index: 25; transition-delay: 0.15s; }
.file-2 { background: #ffc371; z-index: 24; transition-delay: 0.1s; }
.file-3 { background: #4facfe; z-index: 23; transition-delay: 0.05s; }
.file-4 { background: #00f2fe; z-index: 22; transition-delay: 0.02s; }
.file-5 { background: #a18cd1; z-index: 21; transition-delay: 0s; }

.shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: skewX(-20deg);
  transition: none;
}

.folder-card.open .folder-container .shine {
  left: 150%;
  transition: left 0.8s ease-in-out;
  transition-delay: 0.3s;
}

.file-text {
  font-family: "Inter", sans-serif;
  font-size: 9px;
  color: white;
  padding: 12px;
  font-weight: 800;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease 0.4s;
}

.folder-card.open .folder-container .file-text {
  opacity: 1;
  transform: translateY(0);
}

/* active state (click on card folder) */
.folder-card.open .folder-container .folder-front-wrapper {
  transform: rotateX(-50deg);
}

.folder-card.open .folder-container .file-1 {
  transform: translateY(-70px) rotate(-10deg) translateX(-15px) translateZ(20px);
}
.folder-card.open .folder-container .file-2 {
  transform: translateY(-55px) rotate(8deg) translateX(18px) translateZ(10px);
}
.folder-card.open .folder-container .file-3 {
  transform: translateY(-40px) rotate(-15deg) translateX(-8px);
}
.folder-card.open .folder-container .file-4 {
  transform: translateY(-25px) rotate(12deg) translateX(12px);
}
.folder-card.open .folder-container .file-5 {
  transform: translateY(-10px) rotate(-5deg);
}

/*  Hover Interaction */
.folder-card.open .folder-container .file:hover {
  cursor: pointer;
  filter: brightness(1.1);
}

.folder-card.open .folder-container .file-1:hover {
  transform: translateY(-80px) rotate(-10deg) translateX(-15px) translateZ(20px);
}
.folder-card.open .folder-container .file-2:hover {
  transform: translateY(-65px) rotate(8deg) translateX(18px) translateZ(10px);
}
.folder-card.open .folder-container .file-3:hover {
  transform: translateY(-50px) rotate(-15deg) translateX(-8px);
}
.folder-card.open .folder-container .file-4:hover {
  transform: translateY(-35px) rotate(12deg) translateX(12px);
}
.folder-card.open .folder-container .file-5:hover {
  transform: translateY(-20px) rotate(-5deg);
}

/* extras styles for files  */
.file-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s ease;
}

.file-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: rgba(255, 255, 255, 0.9);
  font-family: "Inter", -apple-system, sans-serif;
  font-size: 7px;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
}

/* when folder is OPEN and you HOVER a file */
.folder-card.open .folder-container .file:hover .file-icon {
  color: rgba(255, 255, 255, 0.9);
}
.folder-card.open .folder-container .file-tag {
  opacity: 1;
}

/* search bar */
.folder-search {
  position: absolute;
  top: -40px;
  left: 10%;
  width: 30px;
  height: 25px;
  background-color: var(--pf-accent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.search-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.search-input {
  background: transparent;
  border: none;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 9px;
  margin-left: 8px;
  outline: none;
  transition: width 0.4s ease;
}
.search-input::placeholder {
  color: #ffffff;
}

.folder-card.open .folder-container .folder-search {
  opacity: 1;
  top: -80px;
  width: 80%;
}

.folder-card.open .folder-container .folder-search:focus-within {
  width: 90%;
  background-color: var(--pf-back);
}

.folder-card.open .folder-container .folder-search:focus-within .search-input {
  width: 100%;
}

/* 年份命中提示（输入 2025 后浮出）
   水平居中在文件夹正上方，避开右上角的 FILES 徽章；
   不用 translateX 居中，动画里只动opacity，避免 transform 被覆盖 */
.year-hint {
  position: absolute;
  top: -120px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: max-content;
  text-align: center;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.92);
  color: #fff;
  font-family: "Inter", -apple-system, sans-serif;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
  z-index: 120;
  cursor: pointer;
  animation: pf-yearIn .18s ease;
}
.year-hint b { color: var(--pf-hint); }
.year-hint.is-empty {
  background: rgba(120, 120, 130, 0.9);
  cursor: default;
}
@keyframes pf-yearIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`,fg=Up,pg=({activeType:c,initialYear:g="",onTypeChange:d,onOpenPaper:u,onBackToEntry:y})=>{const[O,X]=b.useState(""),[L,z]=b.useState(g),[S,V]=b.useState(""),[B,W]=b.useState(""),[ue,re]=b.useState([]),[ee,de]=b.useState(null),[se,ne]=b.useState(!1),[be,Se]=b.useState(!1),ke=b.useRef(null),ge=b.useRef(null),me=b.useRef(!1),_e=b.useRef([]);b.useEffect(()=>{const m=w=>{const _=w.target;if(!(_ instanceof HTMLElement)||!ke.current||!(_===ke.current||_.contains(ke.current)))return;const G=_.scrollTop>120;ne(J=>J!==G?G:J),_.scrollTop>4&&(me.current=!0);const Z=_.getBoundingClientRect(),p=Z.top+Z.height/2;let C=null,K=Number.POSITIVE_INFINITY;for(let J=1;J<_e.current.length;J++){const pe=_e.current[J];if(!pe)continue;const $=pe.getBoundingClientRect();if($.top<=p&&$.bottom>=p){const Ce=Math.abs(($.top+$.bottom)/2-p);Ce<K&&(K=Ce,C=J)}}C!==null?(ge.current=C,de(C)):ge.current!==null&&(de(J=>J===ge.current?null:J),ge.current=null)};return document.addEventListener("scroll",m,!0),()=>document.removeEventListener("scroll",m,!0)},[]),b.useEffect(()=>{const m=window.setTimeout(()=>{me.current||(ge.current=0,de(0))},5e3);return()=>window.clearTimeout(m)},[c]),b.useEffect(()=>{try{re(JSON.parse(localStorage.getItem("cet:history")||"[]"))}catch{re([])}},[]);const te=fg[c]??[],oe=gg(te.map(m=>String(m.year??"")).filter(Boolean)),ie=["12","07","06"],N=te.filter(m=>{var K,J;const w=O.trim().toLowerCase(),_=((K=/^(20\d{2})\s*年?$/.exec(w))==null?void 0:K[1])??"",G=!w||!!_&&String(m.year)===_||m.title.toLowerCase().includes(w)||(m.desc||"").toLowerCase().includes(w),Z=!L||String(m.year)===L,p=!S||m.month===S,C=!B||((J=m.keyPoints)==null?void 0:J.readingLevel)===B;return G&&Z&&p&&C}),ae=[];for(let m=0;m<N.length;m+=3)ae.push(N.slice(m,m+3));_e.current.length=ae.length;const ve=m=>ue.filter(w=>w&&w.id===m).length,De=m=>{ge.current=null,de(m)};return r.jsxs("div",{ref:ke,className:`pl-root${se?" scrolled":""}`,children:[r.jsx("style",{children:mg}),r.jsxs("div",{className:"pl-float",children:[r.jsxs("div",{className:"pl-float-bar",children:[r.jsxs("div",{className:"pl-float-left",children:[r.jsx("button",{className:"pl-fab",onClick:y,"aria-label":"返回",title:"返回",children:r.jsx(Tp,{})}),r.jsx("button",{className:`pl-fab${be?" on":""}`,onClick:()=>Se(m=>!m),"aria-label":"搜索",title:"搜索",children:r.jsx(ks,{width:17,height:17})})]}),r.jsxs("div",{className:"pl-float-right",children:[r.jsxs("div",{className:"pl-fab-filters",children:[r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:L||"年"}),r.jsxs("select",{value:L,onChange:m=>z(m.target.value),"aria-label":"年份",children:[r.jsx("option",{value:"",children:"全部年份"}),oe.map(m=>r.jsxs("option",{value:m,children:[m," 年"]},m))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:S?`${Number(S)}月`:"月"}),r.jsxs("select",{value:S,onChange:m=>V(m.target.value),"aria-label":"月份",children:[r.jsx("option",{value:"",children:"全部月份"}),ie.map(m=>r.jsxs("option",{value:m,children:[Number(m)," 月"]},m))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:B||"难度"}),r.jsxs("select",{value:B,onChange:m=>W(m.target.value),"aria-label":"难度",children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]})]})]}),r.jsx("div",{className:"pl-fab-switch",children:["cet4","cet6"].map(m=>r.jsx("button",{onClick:()=>{d(m),X(""),z(""),V(""),W(""),Se(!1)},className:`pl-fab pl-num${c===m?" on":""}`,children:m==="cet4"?"4":"6"},m))})]})]}),se&&be&&r.jsxs("div",{className:"pl-search-pop",children:[r.jsx(ks,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{autoFocus:!0,value:O,onChange:m=>X(m.target.value),placeholder:"搜索真题标题 / 年份 如 2025"}),r.jsxs("button",{className:"pl-pop-reset",onClick:()=>{X(""),z(""),V(""),W("")},children:[r.jsx(Sp,{width:14,height:14,color:"var(--affine-text-secondary-color)"}),"重置"]})]})]}),r.jsxs("div",{className:"pl-inner",children:[r.jsxs("div",{className:"pl-head",children:[r.jsxs("div",{className:"pl-head-left",children:[r.jsx("button",{className:"pl-back-inline",onClick:y,"aria-label":"返回",title:"返回",children:r.jsx(Tp,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"pl-h2",children:"真题试卷库"}),r.jsx("p",{className:"pl-sub",children:"收录历年 CET-4 / CET-6 真题，支持在线阅读与自测"})]})]}),r.jsx("div",{className:"pl-switch",children:["cet4","cet6"].map(m=>r.jsx("button",{onClick:()=>{d(m),X(""),z(""),V(""),W("")},className:`pl-switch-btn${c===m?" on":""}`,children:m==="cet4"?"英语四级 (CET-4)":"英语六级 (CET-6)"},m))})]}),r.jsxs("div",{className:"pl-filter",children:[r.jsxs("div",{className:"pl-search",children:[r.jsx(ks,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{value:O,onChange:m=>X(m.target.value),placeholder:"搜索真题标题 / 年份 如 2025"})]}),r.jsxs("select",{value:L,onChange:m=>z(m.target.value),children:[r.jsx("option",{value:"",children:"全部年份"}),oe.map(m=>r.jsxs("option",{value:m,children:[m," 年"]},m))]}),r.jsxs("select",{value:S,onChange:m=>V(m.target.value),children:[r.jsx("option",{value:"",children:"全部月份"}),ie.map(m=>r.jsxs("option",{value:m,children:[Number(m)," 月"]},m))]}),r.jsxs("select",{value:B,onChange:m=>W(m.target.value),children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]}),r.jsxs("button",{className:"pl-reset",onClick:()=>{X(""),z(""),V(""),W("")},children:[r.jsx(Sp,{width:15,height:15,color:"var(--affine-text-secondary-color)"}),"重置"]}),r.jsxs("span",{className:"pl-count",children:["共 ",N.length," 套"]})]}),N.length===0?r.jsx("div",{className:"pl-empty",children:"没有符合条件的试卷"}):ae.map((m,w)=>{const _=ee===w;return r.jsx("div",{className:"lion-container",ref:G=>{_e.current[w]=G},children:m.map((G,Z)=>r.jsx(hg,{paper:G,type:c,r:[-15,5,25][Z%3],submitted:ve(G.id),expanded:_,onOpen:()=>u(G),onActivate:()=>De(w)},G.id))},w)})]})]})},hg=({paper:c,type:g,r:d,submitted:u,expanded:y,onOpen:O,onActivate:X})=>{const L=c.keyPoints,[z,S]=b.useState(!1),V=()=>{y?S(ne=>!ne):X()},B=[{label:"听力重点",items:L==null?void 0:L.listening},{label:"阅读重点",items:L==null?void 0:L.reading},{label:"写作重点",items:L==null?void 0:L.writing},{label:"翻译主题",items:L==null?void 0:L.translation}],W=(L==null?void 0:L.readingDifficulty)??[],ue=W.length?W.map((ne,be)=>`P${be+1} ${ne}`).join(" · "):"",re=/^(.*?)\s*([（(]\s*第[^）)]*[）)])\s*$/.exec(c.title.trim()),ee=re?re[1].trim():c.title,de=re?re[2]:"",se=["glass","pl-glass",y?"expanded":"",z?"flipped":""].filter(Boolean).join(" ");return r.jsxs("div",{className:se,"data-text":`${c.year}年`,style:{"--r":d},children:[r.jsxs("div",{className:"pl-face pl-face-front",children:[r.jsxs("div",{className:"pl-title",children:[r.jsx("span",{className:"pl-title-main",children:ee}),de&&r.jsx("span",{className:"pl-title-sub",children:de})]}),r.jsxs("div",{className:"pl-meta",children:[r.jsx("span",{children:"已提交次数"}),r.jsxs("b",{children:[u," 次"]})]})]}),r.jsxs("div",{className:"pl-face pl-face-back",children:[r.jsx("div",{className:"pl-back-head",children:"考试重难点"}),ue&&r.jsxs("div",{className:"pl-back-sec",children:[r.jsxs("div",{className:"pl-back-label",children:["阅读难度",(L==null?void 0:L.readingLevel)&&r.jsxs("span",{className:`rd-level lv-${L.readingLevel}`,children:["最难 ",L.readingLevel]})]}),r.jsx("div",{className:"pl-rd",children:W.map((ne,be)=>r.jsxs("span",{className:`rd-item lv-${ne}`,children:["第",["一","二","三","四"][be],"篇 ",ne]},be))})]}),B.map(ne=>r.jsxs("div",{className:"pl-back-sec",children:[r.jsx("div",{className:"pl-back-label",children:ne.label}),r.jsx("div",{className:"pl-back-text",children:ne.items&&ne.items.length>0?ne.items.join(" · "):"—"})]},ne.label)),r.jsx("div",{className:"pl-back-tip",children:"再次点击翻回"})]}),r.jsx("div",{className:"pl-hit",onClick:V}),r.jsxs("div",{className:"pl-actions",onClick:ne=>ne.stopPropagation(),children:[r.jsx("button",{className:"pl-btn-write",onClick:O,children:"write"}),r.jsx("button",{type:"button",className:"pl-btn-download",onClick:()=>window.alert("该真题 PDF 源文件暂未上传，可在线查看试卷内容"),children:"download"})]})]})};function gg(c){return[...new Set(c)].sort((g,d)=>d.localeCompare(g))}const Tp=()=>r.jsx("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5.5 8 12l6.5 6.5"})}),mg=`
.pl-root {
  flex: 1;
  height: 100%;
  /* 关键：不能设 overflow: auto —— 那样 sticky 会以 pl-root 自身为参照容器，
     而它被内容撑开后自己从不滚动，导致顶栏 sticky 永远不粘、跟着内容一起滚走。
     交给外层真正的滚动容器（PaperView 那层 overflow:auto）滚动。 */
  overflow: visible;
  background: var(--affine-background-primary-color, #1b1b1f);
  color: var(--affine-text-primary-color, #fff);
}

.pl-inner {
  max-width: 1100px;
  margin: 0 auto;
  /* 顶部工具条默认隐藏，不再预留 66px；它滑入时是覆盖式浮层 */
  padding: 24px 24px 64px;
}

/* ===== 顶部固定圆形工具条：不随内容滚动；滚动后追加高斯模糊 ===== */
.pl-float {
  position: sticky;
  top: 0;
  z-index: 80;
  height: 0;
  overflow: visible;
}
.pl-float-bar {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px 18px;
  background: transparent;
  /* 默认整条隐藏：未滚动时页面下方已有标题区 + 完整筛选行，
     顶部不显示任何按钮；初始位置在顶部下方并缩小，营造「从下面的按钮变形而来」 */
  opacity: 0;
  transform: translateY(26px) scale(0.92);
  transform-origin: top center;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.38s cubic-bezier(0.34, 1.4, 0.64, 1),
    transform 0.38s cubic-bezier(0.34, 1.4, 0.64, 1);
}
/* 上滑超过阈值：工具条「变形」弹入并固定在顶部；
   背景为上浓下透的渐变毛玻璃，无底部分隔线 */
.pl-root.scrolled .pl-float-bar {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--affine-background-primary-color, #fff) 88%, transparent) 0%,
    color-mix(in srgb, var(--affine-background-primary-color, #fff) 62%, transparent) 62%,
    color-mix(in srgb, var(--affine-background-primary-color, #fff) 0%, transparent) 100%
  );
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
}
.pl-float-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.pl-float-right {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.pl-fab {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.12));
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 8%, transparent);
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.7));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  flex: none;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.pl-fab:hover {
  color: var(--affine-text-primary-color, #fff);
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 14%, transparent);
}
.pl-fab.on {
  background: var(--affine-primary-color, #1e96eb);
  border-color: transparent;
  color: #fff;
}
/* 圆形筛选片：年 / 月 / 难度（原生 select 透明覆盖，保留下拉交互） */
.pl-fab-filters {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pl-chip-wrap {
  position: relative;
  display: inline-flex;
}
.pl-chip {
  width: auto;
  min-width: 42px;
  padding: 0 13px;
  border-radius: 21px;
  font-size: 13px;
  white-space: nowrap;
}
.pl-chip-wrap select {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: none;
}
/* 4 / 6 圆形切换 */
.pl-fab-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;
}
.pl-num {
  font-size: 16px;
}
/* 浮条下的悬浮搜索框（同 blur 背景） */
.pl-search-pop {
  position: absolute;
  left: 0;
  right: 0;
  top: 62px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 20px;
  padding: 8px 12px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--affine-background-primary-color, #1b1b1f) 62%, transparent);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.1));
}
.pl-search-pop input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: var(--affine-text-primary-color, #fff);
  min-width: 0;
}
.pl-search-pop input::placeholder { color: var(--affine-text-secondary-color, rgba(255,255,255,0.4)); }
.pl-pop-reset {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.12));
  background: transparent;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.7));
  border-radius: 999px;
  height: 30px;
  padding: 0 12px;
  font-size: 12px;
  cursor: pointer;
  flex: none;
}

.pl-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin: 10px 0 18px;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
/* 滚动后标题、副标题与原筛选行淡出（由顶部固定圆形工具条接管） */
.pl-root.scrolled .pl-head,
.pl-root.scrolled .pl-filter {
  opacity: 0;
  transform: translateY(-6px);
  pointer-events: none;
}
.pl-h2 { margin: 0; font-size: 22px; font-weight: 700; color: var(--affine-text-primary-color, #fff); }
.pl-sub { margin: 4px 0 0; font-size: 13px; color: var(--affine-text-secondary-color, rgba(255,255,255,0.45)); }

/* 标题区左侧的返回按钮（未滚动时顶部工具条隐藏，返回入口在这里） */
.pl-head-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.pl-back-inline {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.12));
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 8%, transparent);
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.7));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex: none;
  transition: color 0.2s ease, background 0.2s ease;
}
.pl-back-inline:hover {
  color: var(--affine-text-primary-color, #fff);
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 14%, transparent);
}

.pl-switch {
  display: inline-flex;
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 8%, transparent);
  border-radius: 10px;
  padding: 4px;
}
.pl-switch-btn {
  border: none;
  background: transparent;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.55));
  font-weight: 700;
  font-size: 14px;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
}
.pl-switch-btn.on {
  background: var(--affine-primary-color, #1e96eb);
  color: #fff;
}

.pl-filter {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}
.pl-search {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--affine-background-overlay-panel-color, rgba(255, 255, 255, 0.06));
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  padding: 0 10px;
  height: 38px;
  flex: 1 1 240px;
  min-width: 200px;
}
.pl-search input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  color: var(--affine-text-primary-color, #fff);
}
.pl-search input::placeholder { color: var(--affine-text-secondary-color, rgba(255,255,255,0.4)); }

.pl-filter select {
  height: 38px;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  background: var(--affine-background-overlay-panel-color, #2a2a2a);
  padding: 0 10px;
  font-size: 14px;
  color: var(--affine-text-primary-color, #fff);
  outline: none;
}
.pl-filter select option { background: var(--affine-background-overlay-panel-color, #2a2a2a); color: var(--affine-text-primary-color, #fff); }

.pl-reset {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  background: var(--affine-background-overlay-panel-color, #2a2a2a);
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.7));
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;
}
.pl-count {
  font-size: 13px;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.45));
  margin-left: auto;
}

.pl-empty {
  text-align: center;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.4));
  padding: 60px 0;
}

/* ===== 以下为 uiverse ugly-lion-23 原组件样式，逐行照抄 + 主题化 =====
   原组件 hover 触发展开：.lion-container:hover .glass { transform: rotate(0deg); margin: 0 10px; }
   这里改为点击 .expanded，并按需求「先展开、延迟 0.3s 再变色」拆开 transition */
.lion-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
}

.lion-container .glass {
  position: relative;
  width: 260px;
  height: 210px;
  background: color-mix(in srgb, var(--affine-text-primary-color, #fff) 6%, transparent);
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 0.45s ease 0.3s, border-color 0.45s ease 0.3s,
    box-shadow 0.4s ease;
  border-radius: 10px;
  /* 原组件为 margin: 0 -45px；此处因卡片承载长标题，略放宽重叠避免文字被遮 */
  margin: 0 -28px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
}

.lion-container .glass.expanded {
  transform: rotate(0deg);
  margin: 0 10px;
  z-index: 30;
  border-color: color-mix(in srgb, var(--affine-primary-color, #1e96eb) 85%, transparent);
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.34), 0 4px 10px rgba(0, 0, 0, 0.18);
}
/* ===== 照抄结束 ===== */

/* 卡片正反面（翻转显示重难点）；按钮在两面之外，故容器不裁切 */
.pl-glass { overflow: visible; }

.pl-face {
  position: absolute;
  inset: 0;
  transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s ease;
}

.pl-face-front {
  transform: rotateY(0deg);
  opacity: 1;
  overflow: hidden;
  border-radius: inherit;
}

.pl-face-back {
  transform: rotateY(-90deg);
  opacity: 0;
  padding: 10px 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  overflow: hidden;
}

.pl-glass.flipped .pl-face-front {
  transform: rotateY(90deg);
  opacity: 0;
  pointer-events: none;
}

.pl-glass.flipped .pl-face-back {
  transform: rotateY(0deg);
  opacity: 1;
}

/* 整卡点击热区（盖在两面之上，正面时位于按钮之下） */
.pl-hit {
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
}
.pl-glass.flipped .pl-hit { z-index: 6; }

/* 正面内容：主标题 + 套次（另起一行） */
.pl-title {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  color: var(--affine-text-primary-color, #fff);
}
.pl-title-main {
  display: block;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.35;
  max-height: 2.7em;
  overflow: hidden;
}
.pl-title-sub {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.55));
}

.pl-meta {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.45));
}
.pl-meta b {
  color: var(--affine-text-primary-color, #fff);
  font-size: 13px;
  font-weight: 800;
}

/* 操作按钮：置于卡片内部底部（原在外挂，现入框内） */
.pl-actions {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 8;
  transition: opacity 0.3s ease;
}

/* 翻到重难点面后隐藏按钮 */
.pl-glass.flipped .pl-actions {
  opacity: 0;
  pointer-events: none;
}

.pl-btn-write {
  flex: 1.15;
  height: 30px;
  border: none;
  border-radius: 16px;
  background: var(--affine-primary-color, #1e96eb);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.pl-btn-write:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
}

.pl-btn-download {
  flex: 1;
  height: 30px;
  border-radius: 16px;
  border: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.55));
  background: transparent;
  color: var(--affine-text-primary-color, #fff);
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
}
.pl-btn-download:hover {
  background: var(--affine-hover-color, rgba(255, 255, 255, 0.14));
  transform: translateY(-2px);
}
.pl-btn-download.is-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* 背面（重难点）内容 */
.pl-back-head {
  font-size: 12px;
  font-weight: 800;
  color: var(--affine-text-primary-color, #fff);
  letter-spacing: 0.04em;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--affine-border-color, rgba(255, 255, 255, 0.18));
}

.pl-back-sec {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

/* 标签：与「最难 X」徽标同行 */
.pl-back-label {
  font-size: 10px;
  font-weight: 800;
  color: var(--affine-primary-color, #1e96eb);
  display: flex;
  align-items: center;
  gap: 6px;
}

.pl-back-text {
  font-size: 9px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--affine-text-primary-color, rgba(255, 255, 255, 0.9));
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 阅读难度：四篇分档色块（易绿 / 中黄 / 难红） */
.rd-level {
  font-size: 9px;
  font-weight: 800;
  padding: 0 6px;
  border-radius: 999px;
  color: #fff;
  line-height: 1.6;
}
.rd-level.lv-易 { background: #22c55e; }
.rd-level.lv-中 { background: #eab308; }
.rd-level.lv-难 { background: #ef4444; }

.pl-rd {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2px;
}

.rd-item {
  font-size: 9px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 999px;
  color: #fff;
  white-space: nowrap;
}
.rd-item.lv-易 { background: rgba(34, 197, 94, 0.9); }
.rd-item.lv-中 { background: rgba(234, 179, 8, 0.9); }
.rd-item.lv-难 { background: rgba(239, 68, 68, 0.9); }

.pl-back-tip {
  margin-top: auto;
  font-size: 9px;
  color: var(--affine-text-secondary-color, rgba(255, 255, 255, 0.5));
  text-align: center;
}
`,xg=[{key:"yi",tip:"英语（一）",second:"学术学位 · 历年真题",bg:"#0E61AC",fg:"#ffffff"},{key:"er",tip:"英语（二）",second:"专业学位 · 历年真题",bg:"#FAF2E0",fg:"#0E61AC"}],yg=({onPick:c,onBack:g})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:bg}),r.jsxs("div",{className:"ky-head",children:[r.jsx("button",{type:"button",className:"ky-back",onClick:g,children:"← 返回真题训练"}),r.jsx("h2",{className:"ky-title",children:"考研英语"}),r.jsx("p",{className:"ky-sub",children:"选择报考类型进入题库"})]}),r.jsx("div",{className:"ky-stage",children:r.jsx("div",{className:"cards","data-testid":"kaoyan-cards",children:xg.map(d=>r.jsxs("div",{className:"card","data-testid":`kaoyan-card-${d.key}`,style:{"--ky-bg":d.bg,"--ky-fg":d.fg},onClick:()=>c(d.key),children:[r.jsx("p",{className:"tip",children:d.tip}),r.jsx("p",{className:"second-text",children:d.second}),r.jsx("p",{className:"paper-foot",children:"硕士研究生入学考试"})]},d.key))})})]}),bg=`
/* 标题区 */
.ky-head {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 0 0;
}
.ky-title {
  margin: 0;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: .08em;
  color: var(--affine-text-primary-color);
}
.ky-sub {
  margin: 0;
  font-size: 15px;
  color: var(--affine-text-secondary-color, #8b8b8b);
}
.ky-back {
  position: absolute;
  left: 30px;
  top: 34px;
  height: 36px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid var(--affine-border-color);
  background: var(--affine-background-overlay-panel-color, #fff);
  color: var(--affine-text-primary-color);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform .15s ease;
}
.ky-back:hover {
  transform: translateX(-2px);
}

.ky-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 80px;
}

/* ---- 以下照抄 uiverse fluffy-bullfrog-72（类名/过渡/交互保留），
       卡片改为 A4 竖版纸张样式：1:√2 比例 + 纸张投影 ---- */
.cards {
  display: flex;
  flex-direction: row;
  gap: 60px;
}

.cards .card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  /* A4 纵向比例 210:297 ≈ 300:424 */
  height: 424px;
  width: 300px;
  border-radius: 6px;
  color: var(--ky-fg);
  background-color: var(--ky-bg);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.12),
    0 30px 60px rgba(0, 0, 0, 0.14);
  cursor: pointer;
  transition: 400ms;
}

/* 纸张上缘的装订感：顶部留白 + 细分隔线在内容上方由 tip 的 margin 体现 */

.cards .card p.tip {
  margin: -40px 0 0;
  font-size: 2.1em;
  font-weight: 800;
  letter-spacing: .06em;
}

.cards .card p.second-text {
  margin: 16px 0 0;
  font-size: .95em;
  opacity: .8;
}

/* 纸张底部的小字，像试卷页脚 */
.cards .card p.paper-foot {
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  margin: 0;
  font-size: 11px;
  letter-spacing: .18em;
  opacity: .45;
}

.cards .card:hover {
  transform: scale(1.2, 1.2);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
`,vg=()=>{const[c,g]=b.useState("cet4"),[d,u]=b.useState(!1),[y,O]=b.useState(null),[X,L]=b.useState(""),[z,S]=b.useState(!1);return r.jsx("div",{"data-testid":"paper-view",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",position:"relative",background:"var(--affine-background-secondary-color)",overflow:"auto"},children:r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:z?r.jsx(yg,{onPick:V=>{const B=V==="yi"?"英语（一）":"英语（二）";window.alert(`考研英语${B}题库即将上线`)},onBack:()=>S(!1)}):d?y?r.jsx(ag,{paper:y,type:c,onBack:()=>O(null)}):r.jsx(pg,{activeType:c,initialYear:X,onTypeChange:V=>{g(V),L("")},onOpenPaper:O,onBackToEntry:()=>{O(null),u(!1)}}):r.jsx(ug,{onEnter:(V,B)=>{if(V==="kaoyan"){S(!0);return}g(V),L(B?String(B):""),u(!0)}})})})},Bp=document.getElementById("root");if(!Bp)throw new Error("#root missing");document.documentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0";document.body.style.fontFamily="var(--affine-font-family)";i2.createRoot(Bp).render(r.jsx(b.StrictMode,{children:r.jsx(Jh,{attribute:"data-theme",defaultTheme:"light",enableSystem:!1,children:r.jsx(vg,{})})}));
