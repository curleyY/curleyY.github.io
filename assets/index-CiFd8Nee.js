(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const z of p)if(z.type==="childList")for(const L of z.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&s(L)}).observe(document,{childList:!0,subtree:!0});function d(p){const z={};return p.integrity&&(z.integrity=p.integrity),p.referrerPolicy&&(z.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?z.credentials="include":p.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function s(p){if(p.ep)return;p.ep=!0;const z=d(p);fetch(p.href,z)}})();var ws={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function y2(){if(mp)return Bi;mp=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(s,p,z){var L=null;if(z!==void 0&&(L=""+z),p.key!==void 0&&(L=""+p.key),"key"in p){z={};for(var M in p)M!=="key"&&(z[M]=p[M])}else z=p;return p=z.ref,{$$typeof:c,type:s,key:L,ref:p!==void 0?p:null,props:z}}return Bi.Fragment=f,Bi.jsx=d,Bi.jsxs=d,Bi}var xp;function b2(){return xp||(xp=1,ws.exports=y2()),ws.exports}var r=b2(),Ss={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function v2(){if(yp)return Ne;yp=1;var c=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),K=Symbol.iterator;function re(h){return h===null||typeof h!="object"?null:(h=K&&h[K]||h["@@iterator"],typeof h=="function"?h:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,ce={};function se(h,C,$){this.props=h,this.context=C,this.refs=ce,this.updater=$||ee}se.prototype.isReactComponent={},se.prototype.setState=function(h,C){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,C,"setState")},se.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function te(){}te.prototype=se.prototype;function ye(h,C,$){this.props=h,this.context=C,this.refs=ce,this.updater=$||ee}var we=ye.prototype=new te;we.constructor=ye,F(we,se.prototype),we.isPureReactComponent=!0;var Se=Array.isArray;function pe(){}var xe={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function ne(h,C,$){var J=$.ref;return{$$typeof:c,type:h,key:C,ref:J!==void 0?J:null,props:$}}function ue(h,C){return ne(h.type,C,h.props)}function oe(h){return typeof h=="object"&&h!==null&&h.$$typeof===c}function T(h){var C={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function($){return C[$]})}var le=/\/+/g;function de(h,C){return typeof h=="object"&&h!==null&&h.key!=null?T(""+h.key):C.toString(36)}function ke(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(pe,pe):(h.status="pending",h.then(function(C){h.status==="pending"&&(h.status="fulfilled",h.value=C)},function(C){h.status==="pending"&&(h.status="rejected",h.reason=C)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function g(h,C,$,J,he){var W=typeof h;(W==="undefined"||W==="boolean")&&(h=null);var Ce=!1;if(h===null)Ce=!0;else switch(W){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(h.$$typeof){case c:case f:Ce=!0;break;case U:return Ce=h._init,g(Ce(h._payload),C,$,J,he)}}if(Ce)return he=he(h),Ce=J===""?"."+de(h,0):J,Se(he)?($="",Ce!=null&&($=Ce.replace(le,"$&/")+"/"),g(he,C,$,"",function(rt){return rt})):he!=null&&(oe(he)&&(he=ue(he,$+(he.key==null||h&&h.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+Ce)),C.push(he)),1;Ce=0;var Je=J===""?".":J+":";if(Se(h))for(var Te=0;Te<h.length;Te++)J=h[Te],W=Je+de(J,Te),Ce+=g(J,C,$,W,he);else if(Te=re(h),typeof Te=="function")for(h=Te.call(h),Te=0;!(J=h.next()).done;)J=J.value,W=Je+de(J,Te++),Ce+=g(J,C,$,W,he);else if(W==="object"){if(typeof h.then=="function")return g(ke(h),C,$,J,he);throw C=String(h),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function v(h,C,$){if(h==null)return h;var J=[],he=0;return g(h,J,"","",function(W){return C.call($,W,he++)}),J}function _(h){if(h._status===-1){var C=h._result;C=C(),C.then(function($){(h._status===0||h._status===-1)&&(h._status=1,h._result=$)},function($){(h._status===0||h._status===-1)&&(h._status=2,h._result=$)}),h._status===-1&&(h._status=0,h._result=C)}if(h._status===1)return h._result.default;throw h._result}var G=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},Z={map:v,forEach:function(h,C,$){v(h,function(){C.apply(this,arguments)},$)},count:function(h){var C=0;return v(h,function(){C++}),C},toArray:function(h){return v(h,function(C){return C})||[]},only:function(h){if(!oe(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return Ne.Activity=O,Ne.Children=Z,Ne.Component=se,Ne.Fragment=d,Ne.Profiler=p,Ne.PureComponent=ye,Ne.StrictMode=s,Ne.Suspense=k,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xe,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(h){return xe.H.useMemoCache(h)}},Ne.cache=function(h){return function(){return h.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(h,C,$){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var J=F({},h.props),he=h.key;if(C!=null)for(W in C.key!==void 0&&(he=""+C.key),C)!ze.call(C,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&C.ref===void 0||(J[W]=C[W]);var W=arguments.length-2;if(W===1)J.children=$;else if(1<W){for(var Ce=Array(W),Je=0;Je<W;Je++)Ce[Je]=arguments[Je+2];J.children=Ce}return ne(h.type,he,J)},Ne.createContext=function(h){return h={$$typeof:L,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:z,_context:h},h},Ne.createElement=function(h,C,$){var J,he={},W=null;if(C!=null)for(J in C.key!==void 0&&(W=""+C.key),C)ze.call(C,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(he[J]=C[J]);var Ce=arguments.length-2;if(Ce===1)he.children=$;else if(1<Ce){for(var Je=Array(Ce),Te=0;Te<Ce;Te++)Je[Te]=arguments[Te+2];he.children=Je}if(h&&h.defaultProps)for(J in Ce=h.defaultProps,Ce)he[J]===void 0&&(he[J]=Ce[J]);return ne(h,W,he)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(h){return{$$typeof:M,render:h}},Ne.isValidElement=oe,Ne.lazy=function(h){return{$$typeof:U,_payload:{_status:-1,_result:h},_init:_}},Ne.memo=function(h,C){return{$$typeof:w,type:h,compare:C===void 0?null:C}},Ne.startTransition=function(h){var C=xe.T,$={};xe.T=$;try{var J=h(),he=xe.S;he!==null&&he($,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(pe,G)}catch(W){G(W)}finally{C!==null&&$.types!==null&&(C.types=$.types),xe.T=C}},Ne.unstable_useCacheRefresh=function(){return xe.H.useCacheRefresh()},Ne.use=function(h){return xe.H.use(h)},Ne.useActionState=function(h,C,$){return xe.H.useActionState(h,C,$)},Ne.useCallback=function(h,C){return xe.H.useCallback(h,C)},Ne.useContext=function(h){return xe.H.useContext(h)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(h,C){return xe.H.useDeferredValue(h,C)},Ne.useEffect=function(h,C){return xe.H.useEffect(h,C)},Ne.useEffectEvent=function(h){return xe.H.useEffectEvent(h)},Ne.useId=function(){return xe.H.useId()},Ne.useImperativeHandle=function(h,C,$){return xe.H.useImperativeHandle(h,C,$)},Ne.useInsertionEffect=function(h,C){return xe.H.useInsertionEffect(h,C)},Ne.useLayoutEffect=function(h,C){return xe.H.useLayoutEffect(h,C)},Ne.useMemo=function(h,C){return xe.H.useMemo(h,C)},Ne.useOptimistic=function(h,C){return xe.H.useOptimistic(h,C)},Ne.useReducer=function(h,C,$){return xe.H.useReducer(h,C,$)},Ne.useRef=function(h){return xe.H.useRef(h)},Ne.useState=function(h){return xe.H.useState(h)},Ne.useSyncExternalStore=function(h,C,$){return xe.H.useSyncExternalStore(h,C,$)},Ne.useTransition=function(){return xe.H.useTransition()},Ne.version="19.2.1",Ne}var bp;function qs(){return bp||(bp=1,Ss.exports=v2()),Ss.exports}var y=qs(),w2=(c,f,d,s,p,z,L,M)=>{let k=document.documentElement,w=["light","dark"];function U(re){(Array.isArray(c)?c:[c]).forEach(ee=>{let F=ee==="class",ce=F&&z?p.map(se=>z[se]||se):p;F?(k.classList.remove(...ce),k.classList.add(z&&z[re]?z[re]:re)):k.setAttribute(ee,re)}),O(re)}function O(re){M&&w.includes(re)&&(k.style.colorScheme=re)}function K(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)U(s);else try{let re=localStorage.getItem(f)||d,ee=L&&re==="system"?K():re;U(ee)}catch{}},vp=["light","dark"],$p="(prefers-color-scheme: dark)",S2=typeof window>"u",Kp=y.createContext(void 0),k2=c=>y.useContext(Kp)?y.createElement(y.Fragment,null,c.children):y.createElement(C2,{...c}),j2=["light","dark"],C2=({forcedTheme:c,disableTransitionOnChange:f=!1,enableSystem:d=!0,enableColorScheme:s=!0,storageKey:p="theme",themes:z=j2,defaultTheme:L=d?"system":"light",attribute:M="data-theme",value:k,children:w,nonce:U,scriptProps:O})=>{let[K,re]=y.useState(()=>z2(p,L)),[ee,F]=y.useState(()=>K==="system"?ks():K),ce=k?Object.values(k):z,se=y.useCallback(Se=>{let pe=Se;if(!pe)return;Se==="system"&&d&&(pe=ks());let xe=k?k[pe]:pe,ze=f?N2(U):null,ne=document.documentElement,ue=oe=>{oe==="class"?(ne.classList.remove(...ce),xe&&ne.classList.add(xe)):oe.startsWith("data-")&&(xe?ne.setAttribute(oe,xe):ne.removeAttribute(oe))};if(Array.isArray(M)?M.forEach(ue):ue(M),s){let oe=vp.includes(L)?L:null,T=vp.includes(pe)?pe:oe;ne.style.colorScheme=T}ze==null||ze()},[U]),te=y.useCallback(Se=>{let pe=typeof Se=="function"?Se(K):Se;re(pe);try{localStorage.setItem(p,pe)}catch{}},[K]),ye=y.useCallback(Se=>{let pe=ks(Se);F(pe),K==="system"&&d&&!c&&se("system")},[K,c]);y.useEffect(()=>{let Se=window.matchMedia($p);return Se.addListener(ye),ye(Se),()=>Se.removeListener(ye)},[ye]),y.useEffect(()=>{let Se=pe=>{pe.key===p&&(pe.newValue?re(pe.newValue):te(L))};return window.addEventListener("storage",Se),()=>window.removeEventListener("storage",Se)},[te]),y.useEffect(()=>{se(c??K)},[c,K]);let we=y.useMemo(()=>({theme:K,setTheme:te,forcedTheme:c,resolvedTheme:K==="system"?ee:K,themes:d?[...z,"system"]:z,systemTheme:d?ee:void 0}),[K,te,c,ee,d,z]);return y.createElement(Kp.Provider,{value:we},y.createElement(A2,{forcedTheme:c,storageKey:p,attribute:M,enableSystem:d,enableColorScheme:s,defaultTheme:L,value:k,themes:z,nonce:U,scriptProps:O}),w)},A2=y.memo(({forcedTheme:c,storageKey:f,attribute:d,enableSystem:s,enableColorScheme:p,defaultTheme:z,value:L,themes:M,nonce:k,scriptProps:w})=>{let U=JSON.stringify([d,f,z,c,M,L,s,p]).slice(1,-1);return y.createElement("script",{...w,suppressHydrationWarning:!0,nonce:typeof window>"u"?k:"",dangerouslySetInnerHTML:{__html:`(${w2.toString()})(${U})`}})}),z2=(c,f)=>{if(S2)return;let d;try{d=localStorage.getItem(c)||void 0}catch{}return d||f},N2=c=>{let f=document.createElement("style");return c&&f.setAttribute("nonce",c),f.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(f),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(f)},1)}},ks=c=>(c||(c=window.matchMedia($p)),c.matches?"dark":"light"),js={exports:{}},Yi={},Cs={exports:{}},As={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function E2(){return wp||(wp=1,(function(c){function f(g,v){var _=g.length;g.push(v);e:for(;0<_;){var G=_-1>>>1,Z=g[G];if(0<p(Z,v))g[G]=v,g[_]=Z,_=G;else break e}}function d(g){return g.length===0?null:g[0]}function s(g){if(g.length===0)return null;var v=g[0],_=g.pop();if(_!==v){g[0]=_;e:for(var G=0,Z=g.length,h=Z>>>1;G<h;){var C=2*(G+1)-1,$=g[C],J=C+1,he=g[J];if(0>p($,_))J<Z&&0>p(he,$)?(g[G]=he,g[J]=_,G=J):(g[G]=$,g[C]=_,G=C);else if(J<Z&&0>p(he,_))g[G]=he,g[J]=_,G=J;else break e}}return v}function p(g,v){var _=g.sortIndex-v.sortIndex;return _!==0?_:g.id-v.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;c.unstable_now=function(){return z.now()}}else{var L=Date,M=L.now();c.unstable_now=function(){return L.now()-M}}var k=[],w=[],U=1,O=null,K=3,re=!1,ee=!1,F=!1,ce=!1,se=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function we(g){for(var v=d(w);v!==null;){if(v.callback===null)s(w);else if(v.startTime<=g)s(w),v.sortIndex=v.expirationTime,f(k,v);else break;v=d(w)}}function Se(g){if(F=!1,we(g),!ee)if(d(k)!==null)ee=!0,pe||(pe=!0,T());else{var v=d(w);v!==null&&ke(Se,v.startTime-g)}}var pe=!1,xe=-1,ze=5,ne=-1;function ue(){return ce?!0:!(c.unstable_now()-ne<ze)}function oe(){if(ce=!1,pe){var g=c.unstable_now();ne=g;var v=!0;try{e:{ee=!1,F&&(F=!1,te(xe),xe=-1),re=!0;var _=K;try{t:{for(we(g),O=d(k);O!==null&&!(O.expirationTime>g&&ue());){var G=O.callback;if(typeof G=="function"){O.callback=null,K=O.priorityLevel;var Z=G(O.expirationTime<=g);if(g=c.unstable_now(),typeof Z=="function"){O.callback=Z,we(g),v=!0;break t}O===d(k)&&s(k),we(g)}else s(k);O=d(k)}if(O!==null)v=!0;else{var h=d(w);h!==null&&ke(Se,h.startTime-g),v=!1}}break e}finally{O=null,K=_,re=!1}v=void 0}}finally{v?T():pe=!1}}}var T;if(typeof ye=="function")T=function(){ye(oe)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=oe,T=function(){de.postMessage(null)}}else T=function(){se(oe,0)};function ke(g,v){xe=se(function(){g(c.unstable_now())},v)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(g){g.callback=null},c.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<g?Math.floor(1e3/g):5},c.unstable_getCurrentPriorityLevel=function(){return K},c.unstable_next=function(g){switch(K){case 1:case 2:case 3:var v=3;break;default:v=K}var _=K;K=v;try{return g()}finally{K=_}},c.unstable_requestPaint=function(){ce=!0},c.unstable_runWithPriority=function(g,v){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var _=K;K=g;try{return v()}finally{K=_}},c.unstable_scheduleCallback=function(g,v,_){var G=c.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?G+_:G):_=G,g){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,g={id:U++,callback:v,priorityLevel:g,startTime:_,expirationTime:Z,sortIndex:-1},_>G?(g.sortIndex=_,f(w,g),d(k)===null&&g===d(w)&&(F?(te(xe),xe=-1):F=!0,ke(Se,_-G))):(g.sortIndex=Z,f(k,g),ee||re||(ee=!0,pe||(pe=!0,T()))),g},c.unstable_shouldYield=ue,c.unstable_wrapCallback=function(g){var v=K;return function(){var _=K;K=v;try{return g.apply(this,arguments)}finally{K=_}}}})(As)),As}var Sp;function _2(){return Sp||(Sp=1,Cs.exports=E2()),Cs.exports}var zs={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function M2(){if(kp)return _t;kp=1;var c=qs();function f(k){var w="https://react.dev/errors/"+k;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)w+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+k+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function z(k,w,U){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:O==null?null:""+O,children:k,containerInfo:w,implementation:U}}var L=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(k,w){if(k==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,_t.createPortal=function(k,w){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(f(299));return z(k,w,null,U)},_t.flushSync=function(k){var w=L.T,U=s.p;try{if(L.T=null,s.p=2,k)return k()}finally{L.T=w,s.p=U,s.d.f()}},_t.preconnect=function(k,w){typeof k=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,s.d.C(k,w))},_t.prefetchDNS=function(k){typeof k=="string"&&s.d.D(k)},_t.preinit=function(k,w){if(typeof k=="string"&&w&&typeof w.as=="string"){var U=w.as,O=M(U,w.crossOrigin),K=typeof w.integrity=="string"?w.integrity:void 0,re=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;U==="style"?s.d.S(k,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:O,integrity:K,fetchPriority:re}):U==="script"&&s.d.X(k,{crossOrigin:O,integrity:K,fetchPriority:re,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},_t.preinitModule=function(k,w){if(typeof k=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var U=M(w.as,w.crossOrigin);s.d.M(k,{crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&s.d.M(k)},_t.preload=function(k,w){if(typeof k=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var U=w.as,O=M(U,w.crossOrigin);s.d.L(k,U,{crossOrigin:O,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},_t.preloadModule=function(k,w){if(typeof k=="string")if(w){var U=M(w.as,w.crossOrigin);s.d.m(k,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else s.d.m(k)},_t.requestFormReset=function(k){s.d.r(k)},_t.unstable_batchedUpdates=function(k,w){return k(w)},_t.useFormState=function(k,w,U){return L.H.useFormState(k,w,U)},_t.useFormStatus=function(){return L.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var jp;function Jp(){if(jp)return zs.exports;jp=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),zs.exports=M2(),zs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function T2(){if(Cp)return Yi;Cp=1;var c=_2(),f=qs(),d=Jp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function L(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(z(e)!==e)throw Error(s(188))}function w(e){var t=e.alternate;if(!t){if(t=z(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return k(l),e;if(i===a)return k(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function U(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,K=Symbol.for("react.element"),re=Symbol.for("react.transitional.element"),ee=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function de(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case se:return"Profiler";case ce:return"StrictMode";case Se:return"Suspense";case pe:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ee:return"Portal";case ye:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xe:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}var ke=Array.isArray,g=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,v=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},G=[],Z=-1;function h(e){return{current:e}}function C(e){0>Z||(e.current=G[Z],G[Z]=null,Z--)}function $(e,t){Z++,G[Z]=e.current,e.current=t}var J=h(null),he=h(null),W=h(null),Ce=h(null);function Je(e,t){switch($(W,t),$(he,e),$(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=Bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(J),$(J,e)}function Te(){C(J),C(he),C(W)}function rt(e){e.memoizedState!==null&&$(Ce,e);var t=J.current,n=Bf(t,e.type);t!==n&&($(he,e),$(J,n))}function wt(e){he.current===e&&(C(J),C(he)),Ce.current===e&&(C(Ce),Oi._currentValue=_)}var at,tn;function Nt(e){if(at===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);at=t&&t[1]||"",tn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+tn}var Kn=!1;function Zt(e,t){if(!e||Kn)return"";Kn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(R){var E=R}Reflect.construct(e,[],V)}else{try{V.call()}catch(R){E=R}e.call(V.prototype)}}else{try{throw Error()}catch(R){E=R}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(R){if(R&&E&&typeof R.stack=="string")return[R.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var m=o.split(`
`),A=u.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===A.length)for(a=m.length-1,l=A.length-1;1<=a&&0<=l&&m[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==A[l]){var Y=`
`+m[a].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=a&&0<=l);break}}}finally{Kn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Nt(n):""}function el(e,t){switch(e.tag){case 26:case 27:case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return e.child!==t&&t!==null?Nt("Suspense Fallback"):Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return Zt(e.type,!1);case 11:return Zt(e.type.render,!1);case 1:return Zt(e.type,!0);case 31:return Nt("Activity");default:return""}}function tl(e){try{var t="",n=null;do t+=el(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Bl=Object.prototype.hasOwnProperty,Yl=c.unstable_scheduleCallback,nl=c.unstable_cancelCallback,Qi=c.unstable_shouldYield,za=c.unstable_requestPaint,Mt=c.unstable_now,bo=c.unstable_getCurrentPriorityLevel,Lt=c.unstable_ImmediatePriority,_n=c.unstable_UserBlockingPriority,Tt=c.unstable_NormalPriority,Na=c.unstable_LowPriority,al=c.unstable_IdlePriority,vn=c.log,Gl=c.unstable_setDisableYieldValue,Jn=null,St=null;function Rt(e){if(typeof vn=="function"&&Gl(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Jn,e)}catch{}}var bt=Math.clz32?Math.clz32:vo,Zi=Math.log,Xl=Math.LN2;function vo(e){return e>>>=0,e===0?32:31-(Zi(e)/Xl|0)|0}var wn=256,Wn=262144,Ea=4194304;function Ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=Ot(a):(o&=u,o!==0?l=Ot(o):n||(n=u&~e,n!==0&&(l=Ot(n))))):(u=a&~i,u!==0?l=Ot(u):o!==0?l=Ot(o):n||(n=a&~e,n!==0&&(l=Ot(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function In(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $i(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var e=Ea;return Ea<<=1,(Ea&62914560)===0&&(Ea=4194304),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ql(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,m=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var Y=31-bt(n),V=1<<Y;u[Y]=0,m[Y]=-1;var E=A[Y];if(E!==null)for(A[Y]=null,Y=0;Y<E.length;Y++){var R=E[Y];R!==null&&(R.lane&=-536870913)}n&=~V}a!==0&&Ki(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Ki(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-bt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function nn(e,t){var n=t&-t;return n=(n&42)!==0?1:il(n),(n&(e.suspendedLanes|t))!==0?0:n}function il(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $l(){var e=v.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function Ji(e,t){var n=v.p;try{return v.p=e,t()}finally{v.p=n}}var Sn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Sn,Et="__reactProps$"+Sn,ea="__reactContainer$"+Sn,Kl="__reactEvents$"+Sn,Wi="__reactListeners$"+Sn,wo="__reactHandles$"+Sn,Fi="__reactResources$"+Sn,an="__reactMarker$"+Sn;function Jl(e){delete e[ut],delete e[Et],delete e[Kl],delete e[Wi],delete e[wo]}function kn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ea]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[ut])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function ta(e){if(e=e[ut]||e[ea]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ma(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function na(e){var t=e[Fi];return t||(t=e[Fi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[an]=!0}var Ii=new Set,Wl={};function jn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(Wl[e]=t,e=0;e<t.length;e++)Ii.add(t[e])}var Pi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),er={},tr={};function So(e){return Bl.call(tr,e)?!0:Bl.call(er,e)?!1:Pi.test(e)?tr[e]=!0:(er[e]=!0,!1)}function rl(e,t,n){if(So(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Cn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nr(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ol(e){if(!e._valueTracker){var t=Fl(e)?"checked":"value";e._valueTracker=nr(e,t,""+e[t])}}function Il(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Fl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ar=/[\n"\\]/g;function kt(e){return e.replace(ar,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pl(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$t(e,o,qt(t)):n!=null?$t(e,o,qt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+qt(u):e.removeAttribute("name")}function ei(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ol(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ol(e)}function $t(e,t,n){t==="number"&&cl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Tn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function lr(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function ir(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(ke(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ol(e)}function x(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var D=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function I(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||D.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ae(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&I(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&I(e,i,t[i])}function Q(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ie=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),N=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function H(e){return N.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function q(){}var B=null;function P(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ge=null,Le=null;function Re(e){var t=ta(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Et]||null;if(!l)throw Error(s(90));Pl(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Il(a)}break e;case"textarea":lr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}}}var tt=!1;function Oe(e,t,n){if(tt)return e(t,n);tt=!0;try{var a=e(t);return a}finally{if(tt=!1,(ge!==null||Le!==null)&&(Xr(),ge&&(t=ge,e=Le,Le=ge=null,Re(t),e)))for(t=0;t<e.length;t++)Re(e[t])}}function De(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Et]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ae=!1;if(qe)try{var Ee={};Object.defineProperty(Ee,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",Ee,Ee),window.removeEventListener("test",Ee,Ee)}catch{Ae=!1}var Xe=null,ve=null,Ve=null;function rn(){if(Ve)return Ve;var e,t=ve,n=t.length,a,l="value"in Xe?Xe.value:Xe.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Ve=l.slice(e,1<a?1-a:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ut(){return!0}function Bs(){return!1}function Bt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ut:Bs,this.isPropagationStopped=Bs,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ut)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ut)},persist:function(){},isPersistent:Ut}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rr=Bt(Ta),ti=O({},Ta,{view:0,detail:0}),m0=Bt(ti),ko,jo,ni,or=O({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ko=e.screenX-ni.screenX,jo=e.screenY-ni.screenY):jo=ko=0,ni=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),Ys=Bt(or),x0=O({},or,{dataTransfer:0}),y0=Bt(x0),b0=O({},ti,{relatedTarget:0}),Co=Bt(b0),v0=O({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=Bt(v0),S0=O({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=Bt(S0),j0=O({},Ta,{data:0}),Gs=Bt(j0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z0[e])?!!t[e]:!1}function Ao(){return N0}var E0=O({},ti,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ht(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?Ht(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ht(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=Bt(E0),M0=O({},or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xs=Bt(M0),T0=O({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),D0=Bt(T0),L0=O({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=Bt(L0),O0=O({},or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Bt(O0),H0=O({},Ta,{newState:0,oldState:0}),U0=Bt(H0),B0=[9,13,27,32],zo=qe&&"CompositionEvent"in window,ai=null;qe&&"documentMode"in document&&(ai=document.documentMode);var Y0=qe&&"TextEvent"in window&&!ai,Vs=qe&&(!zo||ai&&8<ai&&11>=ai),Qs=" ",Zs=!1;function $s(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function G0(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(Zs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Zs?null:e;default:return null}}function X0(e,t){if(sl)return e==="compositionend"||!zo&&$s(e,t)?(e=rn(),Ve=ve=Xe=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vs&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function Ws(e,t,n,a){ge?Le?Le.push(a):Le=[a]:ge=a,t=Wr(t,"onChange"),0<t.length&&(n=new rr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var li=null,ii=null;function Q0(e){Df(e,0)}function cr(e){var t=Ma(e);if(Il(t))return e}function Fs(e,t){if(e==="change")return t}var Is=!1;if(qe){var No;if(qe){var Eo="oninput"in document;if(!Eo){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),Eo=typeof Ps.oninput=="function"}No=Eo}else No=!1;Is=No&&(!document.documentMode||9<document.documentMode)}function eu(){li&&(li.detachEvent("onpropertychange",tu),ii=li=null)}function tu(e){if(e.propertyName==="value"&&cr(ii)){var t=[];Ws(t,ii,e,P(e)),Oe(Q0,t)}}function Z0(e,t,n){e==="focusin"?(eu(),li=t,ii=n,li.attachEvent("onpropertychange",tu)):e==="focusout"&&eu()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cr(ii)}function K0(e,t){if(e==="click")return cr(t)}function J0(e,t){if(e==="input"||e==="change")return cr(t)}function W0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:W0;function ri(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Bl.call(t,l)||!Kt(e[l],t[l]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=nu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=cl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cl(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var F0=qe&&"documentMode"in document&&11>=document.documentMode,ul=null,Mo=null,oi=null,To=!1;function ru(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||ul==null||ul!==cl(a)||(a=ul,"selectionStart"in a&&_o(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),oi&&ri(oi,a)||(oi=a,a=Wr(Mo,"onSelect"),0<a.length&&(t=new rr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ul)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dl={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Do={},ou={};qe&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete dl.animationend.animation,delete dl.animationiteration.animation,delete dl.animationstart.animation),"TransitionEvent"in window||delete dl.transitionend.transition);function La(e){if(Do[e])return Do[e];if(!dl[e])return e;var t=dl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Do[e]=t[n];return e}var cu=La("animationend"),su=La("animationiteration"),uu=La("animationstart"),I0=La("transitionrun"),P0=La("transitionstart"),eh=La("transitioncancel"),du=La("transitionend"),fu=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function gn(e,t){fu.set(e,t),jn(t,[e])}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},on=[],fl=0,Ro=0;function ur(){for(var e=fl,t=Ro=fl=0;t<e;){var n=on[t];on[t++]=null;var a=on[t];on[t++]=null;var l=on[t];on[t++]=null;var i=on[t];if(on[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&pu(n,l,i)}}function dr(e,t,n,a){on[fl++]=e,on[fl++]=t,on[fl++]=n,on[fl++]=a,Ro|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Oo(e,t,n,a){return dr(e,t,n,a),fr(e)}function Ra(e,t){return dr(e,null,null,t),fr(e)}function pu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-bt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function fr(e){if(50<Ei)throw Ei=0,Qc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pl={};function th(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,a){return new th(e,t,n,a)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dn(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pr(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")qo(e)&&(o=1);else if(typeof e=="string")o=r2(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Jt(31,n,t,l),e.elementType=ne,e.lanes=i,e;case F:return Oa(n.children,l,i,t);case ce:o=8,l|=24;break;case se:return e=Jt(12,n,t,l|2),e.elementType=se,e.lanes=i,e;case Se:return e=Jt(13,n,t,l),e.elementType=Se,e.lanes=i,e;case pe:return e=Jt(19,n,t,l),e.elementType=pe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:o=10;break e;case te:o=9;break e;case we:o=11;break e;case xe:o=14;break e;case ze:o=16,a=null;break e}o=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Jt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Oa(e,t,n,a){return e=Jt(7,e,a,t),e.lanes=n,e}function Ho(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function gu(e){var t=Jt(18,null,null,0);return t.stateNode=e,t}function Uo(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mu=new WeakMap;function cn(e,t){if(typeof e=="object"&&e!==null){var n=mu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:tl(t)},mu.set(e,t),t)}return{value:e,source:t,stack:tl(t)}}var hl=[],gl=0,hr=null,ci=0,sn=[],un=0,aa=null,An=1,zn="";function Ln(e,t){hl[gl++]=ci,hl[gl++]=hr,hr=e,ci=t}function xu(e,t,n){sn[un++]=An,sn[un++]=zn,sn[un++]=aa,aa=e;var a=An;e=zn;var l=32-bt(a)-1;a&=~(1<<l),n+=1;var i=32-bt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,An=1<<32-bt(t)+l|n<<l|a,zn=i+e}else An=1<<i|n<<l|a,zn=e}function Bo(e){e.return!==null&&(Ln(e,1),xu(e,1,0))}function Yo(e){for(;e===hr;)hr=hl[--gl],hl[gl]=null,ci=hl[--gl],hl[gl]=null;for(;e===aa;)aa=sn[--un],sn[un]=null,zn=sn[--un],sn[un]=null,An=sn[--un],sn[un]=null}function yu(e,t){sn[un++]=An,sn[un++]=zn,sn[un++]=aa,An=t.id,zn=t.overflow,aa=e}var jt=null,lt=null,Ge=!1,la=null,dn=!1,Go=Error(s(519));function ia(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw si(cn(t,e)),Go}function bu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[Et]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Mi.length;n++)Ue(Mi[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),ei(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),ir(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||qf(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=q),t=!0):t=!1,t||ia(e,!0)}function vu(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:jt=jt.return}}function ml(e){if(e!==jt)return!1;if(!Ge)return vu(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rs(e.type,e.memoizedProps)),n=!n),n&&lt&&ia(e),vu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));lt=Zf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));lt=Zf(e)}else t===27?(t=lt,ba(e.type)?(e=ds,ds=null,lt=e):lt=t):lt=jt?pn(e.stateNode.nextSibling):null;return!0}function qa(){lt=jt=null,Ge=!1}function Xo(){var e=la;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),la=null),e}function si(e){la===null?la=[e]:la.push(e)}var Vo=h(null),Ha=null,Rn=null;function ra(e,t,n){$(Vo,t._currentValue),t._currentValue=n}function On(e){e._currentValue=Vo.current,C(Vo)}function Qo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Zo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var m=0;m<t.length;m++)if(u.context===t[m]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qo(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(s(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Qo(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function xl(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var u=l.type;Kt(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===Ce.current){if(o=l.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Oi):e=[Oi])}l=l.return}e!==null&&Zo(t,e,n,a),t.flags|=262144}function gr(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Ha=e,Rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return wu(Ha,e)}function mr(e,t){return Ha===null&&Ua(e),wu(e,t)}function wu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rn===null){if(e===null)throw Error(s(308));Rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rn=Rn.next=t;return n}var nh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ah=c.unstable_scheduleCallback,lh=c.unstable_NormalPriority,ht={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $o(){return{controller:new nh,data:new Map,refCount:0}}function ui(e){e.refCount--,e.refCount===0&&ah(lh,function(){e.controller.abort()})}var di=null,Ko=0,yl=0,bl=null;function ih(e,t){if(di===null){var n=di=[];Ko=0,yl=Fc(),bl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ko++,t.then(Su,Su),t}function Su(){if(--Ko===0&&di!==null){bl!==null&&(bl.status="fulfilled");var e=di;di=null,yl=0,bl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var ku=g.S;g.S=function(e,t){of=Mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ih(e,t),ku!==null&&ku(e,t)};var Ba=h(null);function Jo(){var e=Ba.current;return e!==null?e:nt.pooledCache}function xr(e,t){t===null?$(Ba,Ba.current):$(Ba,t.pool)}function ju(){var e=Jo();return e===null?null:{parent:ht._currentValue,pool:e}}var vl=Error(s(460)),Wo=Error(s(474)),yr=Error(s(542)),br={then:function(){}};function Cu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Au(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(q,q),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e;default:if(typeof t.status=="string")t.then(q,q);else{if(e=nt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e}throw Ga=t,vl}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ga=n,vl):n}}var Ga=null;function zu(){if(Ga===null)throw Error(s(459));var e=Ga;return Ga=null,e}function Nu(e){if(e===vl||e===yr)throw Error(s(483))}var wl=null,fi=0;function vr(e){var t=fi;return fi+=1,wl===null&&(wl=[]),Au(wl,e,t)}function pi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wr(e,t){throw t.$$typeof===K?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eu(e){function t(S,b){if(e){var j=S.deletions;j===null?(S.deletions=[b],S.flags|=16):j.push(b)}}function n(S,b){if(!e)return null;for(;b!==null;)t(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function l(S,b){return S=Dn(S,b),S.index=0,S.sibling=null,S}function i(S,b,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<b?(S.flags|=67108866,b):j):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function u(S,b,j,X){return b===null||b.tag!==6?(b=Ho(j,S.mode,X),b.return=S,b):(b=l(b,j),b.return=S,b)}function m(S,b,j,X){var be=j.type;return be===F?Y(S,b,j.props.children,X,j.key):b!==null&&(b.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ze&&Ya(be)===b.type)?(b=l(b,j.props),pi(b,j),b.return=S,b):(b=pr(j.type,j.key,j.props,null,S.mode,X),pi(b,j),b.return=S,b)}function A(S,b,j,X){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=Uo(j,S.mode,X),b.return=S,b):(b=l(b,j.children||[]),b.return=S,b)}function Y(S,b,j,X,be){return b===null||b.tag!==7?(b=Oa(j,S.mode,X,be),b.return=S,b):(b=l(b,j),b.return=S,b)}function V(S,b,j){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Ho(""+b,S.mode,j),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case re:return j=pr(b.type,b.key,b.props,null,S.mode,j),pi(j,b),j.return=S,j;case ee:return b=Uo(b,S.mode,j),b.return=S,b;case ze:return b=Ya(b),V(S,b,j)}if(ke(b)||T(b))return b=Oa(b,S.mode,j,null),b.return=S,b;if(typeof b.then=="function")return V(S,vr(b),j);if(b.$$typeof===ye)return V(S,mr(S,b),j);wr(S,b)}return null}function E(S,b,j,X){var be=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return be!==null?null:u(S,b,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case re:return j.key===be?m(S,b,j,X):null;case ee:return j.key===be?A(S,b,j,X):null;case ze:return j=Ya(j),E(S,b,j,X)}if(ke(j)||T(j))return be!==null?null:Y(S,b,j,X,null);if(typeof j.then=="function")return E(S,b,vr(j),X);if(j.$$typeof===ye)return E(S,b,mr(S,j),X);wr(S,j)}return null}function R(S,b,j,X,be){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return S=S.get(j)||null,u(b,S,""+X,be);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case re:return S=S.get(X.key===null?j:X.key)||null,m(b,S,X,be);case ee:return S=S.get(X.key===null?j:X.key)||null,A(b,S,X,be);case ze:return X=Ya(X),R(S,b,j,X,be)}if(ke(X)||T(X))return S=S.get(j)||null,Y(b,S,X,be,null);if(typeof X.then=="function")return R(S,b,j,vr(X),be);if(X.$$typeof===ye)return R(S,b,j,mr(b,X),be);wr(b,X)}return null}function fe(S,b,j,X){for(var be=null,Qe=null,me=b,Me=b=0,Ye=null;me!==null&&Me<j.length;Me++){me.index>Me?(Ye=me,me=null):Ye=me.sibling;var Ze=E(S,me,j[Me],X);if(Ze===null){me===null&&(me=Ye);break}e&&me&&Ze.alternate===null&&t(S,me),b=i(Ze,b,Me),Qe===null?be=Ze:Qe.sibling=Ze,Qe=Ze,me=Ye}if(Me===j.length)return n(S,me),Ge&&Ln(S,Me),be;if(me===null){for(;Me<j.length;Me++)me=V(S,j[Me],X),me!==null&&(b=i(me,b,Me),Qe===null?be=me:Qe.sibling=me,Qe=me);return Ge&&Ln(S,Me),be}for(me=a(me);Me<j.length;Me++)Ye=R(me,S,Me,j[Me],X),Ye!==null&&(e&&Ye.alternate!==null&&me.delete(Ye.key===null?Me:Ye.key),b=i(Ye,b,Me),Qe===null?be=Ye:Qe.sibling=Ye,Qe=Ye);return e&&me.forEach(function(ja){return t(S,ja)}),Ge&&Ln(S,Me),be}function je(S,b,j,X){if(j==null)throw Error(s(151));for(var be=null,Qe=null,me=b,Me=b=0,Ye=null,Ze=j.next();me!==null&&!Ze.done;Me++,Ze=j.next()){me.index>Me?(Ye=me,me=null):Ye=me.sibling;var ja=E(S,me,Ze.value,X);if(ja===null){me===null&&(me=Ye);break}e&&me&&ja.alternate===null&&t(S,me),b=i(ja,b,Me),Qe===null?be=ja:Qe.sibling=ja,Qe=ja,me=Ye}if(Ze.done)return n(S,me),Ge&&Ln(S,Me),be;if(me===null){for(;!Ze.done;Me++,Ze=j.next())Ze=V(S,Ze.value,X),Ze!==null&&(b=i(Ze,b,Me),Qe===null?be=Ze:Qe.sibling=Ze,Qe=Ze);return Ge&&Ln(S,Me),be}for(me=a(me);!Ze.done;Me++,Ze=j.next())Ze=R(me,S,Me,Ze.value,X),Ze!==null&&(e&&Ze.alternate!==null&&me.delete(Ze.key===null?Me:Ze.key),b=i(Ze,b,Me),Qe===null?be=Ze:Qe.sibling=Ze,Qe=Ze);return e&&me.forEach(function(x2){return t(S,x2)}),Ge&&Ln(S,Me),be}function et(S,b,j,X){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case re:e:{for(var be=j.key;b!==null;){if(b.key===be){if(be=j.type,be===F){if(b.tag===7){n(S,b.sibling),X=l(b,j.props.children),X.return=S,S=X;break e}}else if(b.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===ze&&Ya(be)===b.type){n(S,b.sibling),X=l(b,j.props),pi(X,j),X.return=S,S=X;break e}n(S,b);break}else t(S,b);b=b.sibling}j.type===F?(X=Oa(j.props.children,S.mode,X,j.key),X.return=S,S=X):(X=pr(j.type,j.key,j.props,null,S.mode,X),pi(X,j),X.return=S,S=X)}return o(S);case ee:e:{for(be=j.key;b!==null;){if(b.key===be)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){n(S,b.sibling),X=l(b,j.children||[]),X.return=S,S=X;break e}else{n(S,b);break}else t(S,b);b=b.sibling}X=Uo(j,S.mode,X),X.return=S,S=X}return o(S);case ze:return j=Ya(j),et(S,b,j,X)}if(ke(j))return fe(S,b,j,X);if(T(j)){if(be=T(j),typeof be!="function")throw Error(s(150));return j=be.call(j),je(S,b,j,X)}if(typeof j.then=="function")return et(S,b,vr(j),X);if(j.$$typeof===ye)return et(S,b,mr(S,j),X);wr(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,b!==null&&b.tag===6?(n(S,b.sibling),X=l(b,j),X.return=S,S=X):(n(S,b),X=Ho(j,S.mode,X),X.return=S,S=X),o(S)):n(S,b)}return function(S,b,j,X){try{fi=0;var be=et(S,b,j,X);return wl=null,be}catch(me){if(me===vl||me===yr)throw me;var Qe=Jt(29,me,null,S.mode);return Qe.lanes=X,Qe.return=S,Qe}finally{}}}var Xa=Eu(!0),_u=Eu(!1),oa=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ke&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=fr(e),pu(e,null,n),t}return dr(e,a,t,n),fr(e)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ll(e,n)}}function Po(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ec=!1;function gi(){if(ec){var e=bl;if(e!==null)throw e}}function mi(e,t,n,a){ec=!1;var l=e.updateQueue;oa=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var m=u,A=m.next;m.next=null,o===null?i=A:o.next=A,o=m;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,u=Y.lastBaseUpdate,u!==o&&(u===null?Y.firstBaseUpdate=A:u.next=A,Y.lastBaseUpdate=m))}if(i!==null){var V=l.baseState;o=0,Y=A=m=null,u=i;do{var E=u.lane&-536870913,R=E!==u.lane;if(R?(Be&E)===E:(a&E)===E){E!==0&&E===yl&&(ec=!0),Y!==null&&(Y=Y.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var fe=e,je=u;E=t;var et=n;switch(je.tag){case 1:if(fe=je.payload,typeof fe=="function"){V=fe.call(et,V,E);break e}V=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=je.payload,E=typeof fe=="function"?fe.call(et,V,E):fe,E==null)break e;V=O({},V,E);break e;case 2:oa=!0}}E=u.callback,E!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[E]:R.push(E))}else R={lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},Y===null?(A=Y=R,m=V):Y=Y.next=R,o|=E;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;R=u,u=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);Y===null&&(m=V),l.baseState=m,l.firstBaseUpdate=A,l.lastBaseUpdate=Y,i===null&&(l.shared.lanes=0),ha|=o,e.lanes=o,e.memoizedState=V}}function Mu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Tu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mu(n[e],t)}var Sl=h(null),Sr=h(0);function Du(e,t){e=Qn,$(Sr,e),$(Sl,t),Qn=e|t.baseLanes}function tc(){$(Sr,Qn),$(Sl,Sl.current)}function nc(){Qn=Sr.current,C(Sl),C(Sr)}var Wt=h(null),fn=null;function ua(e){var t=e.alternate;$(dt,dt.current&1),$(Wt,e),fn===null&&(t===null||Sl.current!==null||t.memoizedState!==null)&&(fn=e)}function ac(e){$(dt,dt.current),$(Wt,e),fn===null&&(fn=e)}function Lu(e){e.tag===22?($(dt,dt.current),$(Wt,e),fn===null&&(fn=e)):da()}function da(){$(dt,dt.current),$(Wt,Wt.current)}function Ft(e){C(Wt),fn===e&&(fn=null),C(dt)}var dt=h(0);function kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ss(n)||us(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qn=0,_e=null,Ie=null,gt=null,jr=!1,kl=!1,Va=!1,Cr=0,xi=0,jl=null,oh=0;function ct(){throw Error(s(321))}function lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function ic(e,t,n,a,l,i){return qn=i,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?xd:vc,Va=!1,i=n(a,l),Va=!1,kl&&(i=Ou(t,n,a,l)),Ru(e),i}function Ru(e){g.H=vi;var t=Ie!==null&&Ie.next!==null;if(qn=0,gt=Ie=_e=null,jr=!1,xi=0,jl=null,t)throw Error(s(300));e===null||mt||(e=e.dependencies,e!==null&&gr(e)&&(mt=!0))}function Ou(e,t,n,a){_e=e;var l=0;do{if(kl&&(jl=null),xi=0,kl=!1,25<=l)throw Error(s(301));if(l+=1,gt=Ie=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=yd,i=t(n,a)}while(kl);return i}function ch(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?yi(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),t}function rc(){var e=Cr!==0;return Cr=0,e}function oc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cc(e){if(jr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}jr=!1}qn=0,gt=Ie=_e=null,kl=!1,xi=Cr=0,jl=null}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?_e.memoizedState=gt=e:gt=gt.next=e,gt}function ft(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=gt===null?_e.memoizedState:gt.next;if(t!==null)gt=t,Ie=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},gt===null?_e.memoizedState=gt=e:gt=gt.next=e}return gt}function Ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yi(e){var t=xi;return xi+=1,jl===null&&(jl=[]),e=Au(jl,e,t),t=_e,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?xd:vc),e}function zr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yi(e);if(e.$$typeof===ye)return Ct(e)}throw Error(s(438,String(e)))}function sc(e){var t=null,n=_e.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=_e.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ar(),_e.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ue;return t.index++,n}function Hn(e,t){return typeof t=="function"?t(e):t}function Nr(e){var t=ft();return uc(t,Ie,e)}function uc(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,m=null,A=t,Y=!1;do{var V=A.lane&-536870913;if(V!==A.lane?(Be&V)===V:(qn&V)===V){var E=A.revertLane;if(E===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),V===yl&&(Y=!0);else if((qn&E)===E){A=A.next,E===yl&&(Y=!0);continue}else V={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},m===null?(u=m=V,o=i):m=m.next=V,_e.lanes|=E,ha|=E;V=A.action,Va&&n(i,V),i=A.hasEagerState?A.eagerState:n(i,V)}else E={lane:V,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},m===null?(u=m=E,o=i):m=m.next=E,_e.lanes|=V,ha|=V;A=A.next}while(A!==null&&A!==t);if(m===null?o=i:m.next=u,!Kt(i,e.memoizedState)&&(mt=!0,Y&&(n=bl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=m,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function dc(e){var t=ft(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Kt(i,t.memoizedState)||(mt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function qu(e,t,n){var a=_e,l=ft(),i=Ge;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Kt((Ie||l).memoizedState,n);if(o&&(l.memoizedState=n,mt=!0),l=l.queue,hc(Bu.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,Cl(9,{destroy:void 0},Uu.bind(null,a,l,n,t),null),nt===null)throw Error(s(349));i||(qn&127)!==0||Hu(a,t,n)}return n}function Hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t=Ar(),_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uu(e,t,n,a){t.value=n,t.getSnapshot=a,Yu(t)&&Gu(e)}function Bu(e,t,n){return n(function(){Yu(t)&&Gu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Gu(e){var t=Ra(e,2);t!==null&&Qt(t,e,2)}function fc(e){var t=Dt();if(typeof e=="function"){var n=e;if(e=n(),Va){Rt(!0);try{n()}finally{Rt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t}function Xu(e,t,n,a){return e.baseState=n,uc(e,Ie,typeof a=="function"?a:Hn)}function sh(e,t,n,a,l){if(Mr(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};g.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Vu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Vu(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=g.T,o={};g.T=o;try{var u=n(l,a),m=g.S;m!==null&&m(o,u),Qu(e,t,u)}catch(A){pc(e,t,A)}finally{i!==null&&o.types!==null&&(i.types=o.types),g.T=i}}else try{i=n(l,a),Qu(e,t,i)}catch(A){pc(e,t,A)}}function Qu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Zu(e,t,a)},function(a){return pc(e,t,a)}):Zu(e,t,n)}function Zu(e,t,n){t.status="fulfilled",t.value=n,$u(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vu(e,n)))}function pc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,$u(t),t=t.next;while(t!==a)}e.action=null}function $u(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ku(e,t){return t}function Ju(e,t){if(Ge){var n=nt.formState;if(n!==null){e:{var a=_e;if(Ge){if(lt){t:{for(var l=lt,i=dn;l.nodeType!==8;){if(!i){l=null;break t}if(l=pn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){lt=pn(l.nextSibling),a=l.data==="F!";break e}}ia(a)}a=!1}a&&(t=n[0])}}return n=Dt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ku,lastRenderedState:t},n.queue=a,n=hd.bind(null,_e,a),a.dispatch=n,a=fc(!1),i=bc.bind(null,_e,!1,a.queue),a=Dt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=sh.bind(null,_e,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Wu(e){var t=ft();return Fu(t,Ie,e)}function Fu(e,t,n){if(t=uc(e,t,Ku)[0],e=Nr(Hn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=yi(t)}catch(o){throw o===vl?yr:o}else a=t;t=ft();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(_e.flags|=2048,Cl(9,{destroy:void 0},uh.bind(null,l,n),null)),[a,i,e]}function uh(e,t){e.action=t}function Iu(e){var t=ft(),n=Ie;if(n!==null)return Fu(t,n,e);ft(),t=t.memoizedState,n=ft();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Cl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=_e.updateQueue,t===null&&(t=Ar(),_e.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Pu(){return ft().memoizedState}function Er(e,t,n,a){var l=Dt();_e.flags|=e,l.memoizedState=Cl(1|t,{destroy:void 0},n,a===void 0?null:a)}function _r(e,t,n,a){var l=ft();a=a===void 0?null:a;var i=l.memoizedState.inst;Ie!==null&&a!==null&&lc(a,Ie.memoizedState.deps)?l.memoizedState=Cl(t,i,n,a):(_e.flags|=e,l.memoizedState=Cl(1|t,i,n,a))}function ed(e,t){Er(8390656,8,e,t)}function hc(e,t){_r(2048,8,e,t)}function dh(e){_e.flags|=4;var t=_e.updateQueue;if(t===null)t=Ar(),_e.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function td(e){var t=ft().memoizedState;return dh({ref:t,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return _r(4,2,e,t)}function ad(e,t){return _r(4,4,e,t)}function ld(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,n){n=n!=null?n.concat([e]):null,_r(4,4,ld.bind(null,t,e),n)}function gc(){}function rd(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&lc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function od(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&lc(t,a[1]))return a[0];if(a=e(),Va){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a}function mc(e,t,n){return n===void 0||(qn&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sf(),_e.lanes|=e,ha|=e,n)}function cd(e,t,n,a){return Kt(n,t)?n:Sl.current!==null?(e=mc(e,n,a),Kt(e,t)||(mt=!0),e):(qn&42)===0||(qn&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=n):(e=sf(),_e.lanes|=e,ha|=e,t)}function sd(e,t,n,a,l){var i=v.p;v.p=i!==0&&8>i?i:8;var o=g.T,u={};g.T=u,bc(e,!1,t,n);try{var m=l(),A=g.S;if(A!==null&&A(u,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var Y=rh(m,a);bi(e,t,Y,en(e))}else bi(e,t,a,en(e))}catch(V){bi(e,t,{then:function(){},status:"rejected",reason:V},en())}finally{v.p=i,o!==null&&u.types!==null&&(o.types=u.types),g.T=o}}function fh(){}function xc(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=ud(e).queue;sd(e,l,t,_,n===null?fh:function(){return dd(e),n(a)})}function ud(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:_},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dd(e){var t=ud(e);t.next===null&&(t=e.alternate.memoizedState),bi(e,t.next.queue,{},en())}function yc(){return Ct(Oi)}function fd(){return ft().memoizedState}function pd(){return ft().memoizedState}function ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=ca(n);var a=sa(t,e,n);a!==null&&(Qt(a,t,n),hi(a,t,n)),t={cache:$o()},e.payload=t;return}t=t.return}}function hh(e,t,n){var a=en();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mr(e)?gd(t,n):(n=Oo(e,t,n,a),n!==null&&(Qt(n,e,a),md(n,t,a)))}function hd(e,t,n){var a=en();bi(e,t,n,a)}function bi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mr(e))gd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Kt(u,o))return dr(e,t,l,0),nt===null&&ur(),!1}catch{}finally{}if(n=Oo(e,t,l,a),n!==null)return Qt(n,e,a),md(n,t,a),!0}return!1}function bc(e,t,n,a){if(a={lane:2,revertLane:Fc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mr(e)){if(t)throw Error(s(479))}else t=Oo(e,n,a,2),t!==null&&Qt(t,e,2)}function Mr(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function gd(e,t){kl=jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ll(e,n)}}var vi={readContext:Ct,use:zr,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};vi.useEffectEvent=ct;var xd={readContext:Ct,use:zr,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:ed,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Er(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){Er(4,2,e,t)},useMemo:function(e,t){var n=Dt();t=t===void 0?null:t;var a=e();if(Va){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Dt();if(n!==void 0){var l=n(t);if(Va){Rt(!0);try{n(t)}finally{Rt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=hh.bind(null,_e,e),[a.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:function(e){e=fc(e);var t=e.queue,n=hd.bind(null,_e,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gc,useDeferredValue:function(e,t){var n=Dt();return mc(n,e,t)},useTransition:function(){var e=fc(!1);return e=sd.bind(null,_e,e.queue,!0,!1),Dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=_e,l=Dt();if(Ge){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),nt===null)throw Error(s(349));(Be&127)!==0||Hu(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ed(Bu.bind(null,a,i,e),[e]),a.flags|=2048,Cl(9,{destroy:void 0},Uu.bind(null,a,i,n,t),null),n},useId:function(){var e=Dt(),t=nt.identifierPrefix;if(Ge){var n=zn,a=An;n=(a&~(1<<32-bt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=oh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:Ju,useActionState:Ju,useOptimistic:function(e){var t=Dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bc.bind(null,_e,!0,n),n.dispatch=t,[e,t]},useMemoCache:sc,useCacheRefresh:function(){return Dt().memoizedState=ph.bind(null,_e)},useEffectEvent:function(e){var t=Dt(),n={impl:e};return t.memoizedState=n,function(){if((Ke&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:Ct,use:zr,useCallback:rd,useContext:Ct,useEffect:hc,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:od,useReducer:Nr,useRef:Pu,useState:function(){return Nr(Hn)},useDebugValue:gc,useDeferredValue:function(e,t){var n=ft();return cd(n,Ie.memoizedState,e,t)},useTransition:function(){var e=Nr(Hn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:qu,useId:fd,useHostTransitionStatus:yc,useFormState:Wu,useActionState:Wu,useOptimistic:function(e,t){var n=ft();return Xu(n,Ie,e,t)},useMemoCache:sc,useCacheRefresh:pd};vc.useEffectEvent=td;var yd={readContext:Ct,use:zr,useCallback:rd,useContext:Ct,useEffect:hc,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:od,useReducer:dc,useRef:Pu,useState:function(){return dc(Hn)},useDebugValue:gc,useDeferredValue:function(e,t){var n=ft();return Ie===null?mc(n,e,t):cd(n,Ie.memoizedState,e,t)},useTransition:function(){var e=dc(Hn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:yi(e),t]},useSyncExternalStore:qu,useId:fd,useHostTransitionStatus:yc,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,t){var n=ft();return Ie!==null?Xu(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:sc,useCacheRefresh:pd};yd.useEffectEvent=td;function wc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=en(),l=ca(a);l.payload=t,n!=null&&(l.callback=n),t=sa(e,l,a),t!==null&&(Qt(t,e,a),hi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=en(),l=ca(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=sa(e,l,a),t!==null&&(Qt(t,e,a),hi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),a=ca(n);a.tag=2,t!=null&&(a.callback=t),t=sa(e,a,n),t!==null&&(Qt(t,e,n),hi(t,e,n))}};function bd(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!ri(n,a)||!ri(l,i):!0}function vd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function wd(e){sr(e)}function Sd(e){console.error(e)}function kd(e){sr(e)}function Tr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function jd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function kc(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){Tr(e,t)},n}function Cd(e){return e=ca(e),e.tag=3,e}function Ad(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){jd(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){jd(t,n,a),typeof l!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function gh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&xl(t,n,l,!0),n=Wt.current,n!==null){switch(n.tag){case 31:case 13:return fn===null?Vr():n.alternate===null&&st===0&&(st=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===br?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Kc(e,a,l)),!1;case 22:return n.flags|=65536,a===br?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Kc(e,a,l)),!1}throw Error(s(435,n.tag))}return Kc(e,a,l),Vr(),!1}if(Ge)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Go&&(e=Error(s(422),{cause:a}),si(cn(e,n)))):(a!==Go&&(t=Error(s(423),{cause:a}),si(cn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=cn(a,n),l=kc(e.stateNode,a,l),Po(e,l),st!==4&&(st=2)),!1;var i=Error(s(520),{cause:a});if(i=cn(i,n),Ni===null?Ni=[i]:Ni.push(i),st!==4&&(st=2),t===null)return!0;a=cn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=kc(n.stateNode,a,e),Po(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ga===null||!ga.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Cd(l),Ad(l,e,n,a),Po(n,l),!1}n=n.return}while(n!==null);return!1}var jc=Error(s(461)),mt=!1;function At(e,t,n,a){t.child=e===null?_u(t,null,n,a):Xa(t,e.child,n,a)}function zd(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return Ua(t),a=ic(e,t,n,o,i,l),u=rc(),e!==null&&!mt?(oc(e,t,l),Un(e,t,l)):(Ge&&u&&Bo(t),t.flags|=1,At(e,t,a,l),t.child)}function Nd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!qo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ed(e,t,i,a,l)):(e=pr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Tc(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(o,a)&&e.ref===t.ref)return Un(e,t,l)}return t.flags|=1,e=Dn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ed(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(ri(i,a)&&e.ref===t.ref)if(mt=!1,t.pendingProps=a=i,Tc(e,l))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,Un(e,t,l)}return Cc(e,t,n,a,l)}function _d(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Md(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xr(t,i!==null?i.cachePool:null),i!==null?Du(t,i):tc(),Lu(t);else return a=t.lanes=536870912,Md(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(xr(t,i.cachePool),Du(t,i),da(),t.memoizedState=null):(e!==null&&xr(t,null),tc(),da());return At(e,t,l,n),t.child}function wi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Md(e,t,n,a,l){var i=Jo();return i=i===null?null:{parent:ht._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&xr(t,null),tc(),Lu(t),e!==null&&xl(e,t,a,!0),t.childLanes=l,null}function Dr(e,t){return t=Rr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Td(e,t,n){return Xa(t,e.child,null,n),e=Dr(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function mh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ge){if(a.mode==="hidden")return e=Dr(t,a),t.lanes=536870912,wi(null,e);if(ac(t),(e=lt)?(e=Qf(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:An,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=gu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return Dr(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ac(t),l)if(t.flags&256)t.flags&=-257,t=Td(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(mt||xl(e,t,n,!1),l=(n&e.childLanes)!==0,mt||l){if(a=nt,a!==null&&(o=nn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ra(e,o),Qt(a,e,o),jc;Vr(),t=Td(e,t,n)}else e=i.treeContext,lt=pn(o.nextSibling),jt=t,Ge=!0,la=null,dn=!1,e!==null&&yu(t,e),t=Dr(t,a),t.flags|=4096;return t}return e=Dn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,a,l){return Ua(t),n=ic(e,t,n,a,void 0,l),a=rc(),e!==null&&!mt?(oc(e,t,l),Un(e,t,l)):(Ge&&a&&Bo(t),t.flags|=1,At(e,t,n,l),t.child)}function Dd(e,t,n,a,l,i){return Ua(t),t.updateQueue=null,n=Ou(t,a,n,l),Ru(e),a=rc(),e!==null&&!mt?(oc(e,t,i),Un(e,t,i)):(Ge&&a&&Bo(t),t.flags|=1,At(e,t,n,i),t.child)}function Ld(e,t,n,a,l){if(Ua(t),t.stateNode===null){var i=pl,o=n.contextType;typeof o=="object"&&o!==null&&(i=Ct(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Sc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Fo(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Ct(o):pl,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(wc(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Sc.enqueueReplaceState(i,i.state,null),mi(t,a,i,l),gi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,m=Qa(n,u);i.props=m;var A=i.context,Y=n.contextType;o=pl,typeof Y=="object"&&Y!==null&&(o=Ct(Y));var V=n.getDerivedStateFromProps;Y=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,Y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||A!==o)&&vd(t,i,a,o),oa=!1;var E=t.memoizedState;i.state=E,mi(t,a,i,l),gi(),A=t.memoizedState,u||E!==A||oa?(typeof V=="function"&&(wc(t,n,V,a),A=t.memoizedState),(m=oa||bd(t,n,m,a,E,A,o))?(Y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=o,a=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Io(e,t),o=t.memoizedProps,Y=Qa(n,o),i.props=Y,V=t.pendingProps,E=i.context,A=n.contextType,m=pl,typeof A=="object"&&A!==null&&(m=Ct(A)),u=n.getDerivedStateFromProps,(A=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==V||E!==m)&&vd(t,i,a,m),oa=!1,E=t.memoizedState,i.state=E,mi(t,a,i,l),gi();var R=t.memoizedState;o!==V||E!==R||oa||e!==null&&e.dependencies!==null&&gr(e.dependencies)?(typeof u=="function"&&(wc(t,n,u,a),R=t.memoizedState),(Y=oa||bd(t,n,Y,a,E,R,m)||e!==null&&e.dependencies!==null&&gr(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,R,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,R,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),i.props=a,i.state=R,i.context=m,a=Y):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Lr(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Xa(t,e.child,null,l),t.child=Xa(t,null,n,l)):At(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Un(e,t,l),e}function Rd(e,t,n,a){return qa(),t.flags|=256,At(e,t,n,a),t.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zc(e){return{baseLanes:e,cachePool:ju()}}function Nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function Od(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?ua(t):da(),(e=lt)?(e=Qf(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:An,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},n=gu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw ia(t);return us(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(da(),l=t.mode,u=Rr({mode:"hidden",children:u},l),a=Oa(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=zc(n),a.childLanes=Nc(e,o,n),t.memoizedState=Ac,wi(null,a)):(ua(t),Ec(t,u))}var m=e.memoizedState;if(m!==null&&(u=m.dehydrated,u!==null)){if(i)t.flags&256?(ua(t),t.flags&=-257,t=_c(e,t,n)):t.memoizedState!==null?(da(),t.child=e.child,t.flags|=128,t=null):(da(),u=a.fallback,l=t.mode,a=Rr({mode:"visible",children:a.children},l),u=Oa(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,Xa(t,e.child,null,n),a=t.child,a.memoizedState=zc(n),a.childLanes=Nc(e,o,n),t.memoizedState=Ac,t=wi(null,a));else if(ua(t),us(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var A=o.dgst;o=A,a=Error(s(419)),a.stack="",a.digest=o,si({value:a,source:null,stack:null}),t=_c(e,t,n)}else if(mt||xl(e,t,n,!1),o=(n&e.childLanes)!==0,mt||o){if(o=nt,o!==null&&(a=nn(o,n),a!==0&&a!==m.retryLane))throw m.retryLane=a,Ra(e,a),Qt(o,e,a),jc;ss(u)||Vr(),t=_c(e,t,n)}else ss(u)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,lt=pn(u.nextSibling),jt=t,Ge=!0,la=null,dn=!1,e!==null&&yu(t,e),t=Ec(t,a.children),t.flags|=4096);return t}return l?(da(),u=a.fallback,l=t.mode,m=e.child,A=m.sibling,a=Dn(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&65011712,A!==null?u=Dn(A,u):(u=Oa(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,wi(null,a),a=t.child,u=e.child.memoizedState,u===null?u=zc(n):(l=u.cachePool,l!==null?(m=ht._currentValue,l=l.parent!==m?{parent:m,pool:m}:l):l=ju(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=Nc(e,o,n),t.memoizedState=Ac,wi(e.child,a)):(ua(t),n=e.child,e=n.sibling,n=Dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Rr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Rr(e,t){return e=Jt(22,e,null,t),e.lanes=0,e}function _c(e,t,n){return Xa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qo(e.return,t,n)}function Mc(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Hd(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=dt.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,$(dt,o),At(e,t,a,n),a=Ge?ci:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qd(e,n,t);else if(e.tag===19)qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Mc(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Mc(t,!0,n,null,i,a);break;case"together":Mc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(xl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gr(e)))}function xh(e,t,n){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),ra(t,ht,e.memoizedState.cache),qa();break;case 27:case 5:rt(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ac(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ua(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Od(e,t,n):(ua(t),e=Un(e,t,n),e!==null?e.sibling:null);ua(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(xl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Hd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(dt,dt.current),a)break;return null;case 22:return t.lanes=0,_d(e,t,n,t.pendingProps);case 24:ra(t,ht,e.memoizedState.cache)}return Un(e,t,n)}function Ud(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!Tc(e,n)&&(t.flags&128)===0)return mt=!1,xh(e,t,n);mt=(e.flags&131072)!==0}else mt=!1,Ge&&(t.flags&1048576)!==0&&xu(t,ci,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")qo(e)?(a=Qa(e,a),t.tag=1,t=Ld(null,t,e,a,n)):(t.tag=0,t=Cc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===we){t.tag=11,t=zd(null,t,e,a,n);break e}else if(l===xe){t.tag=14,t=Nd(null,t,e,a,n);break e}}throw t=de(e)||e,Error(s(306,t,""))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Qa(a,t.pendingProps),Ld(e,t,a,l,n);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Io(e,t),mi(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ra(t,ht,a),a!==i.cache&&Zo(t,[ht],n,!0),gi(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Rd(e,t,a,n);break e}else if(a!==l){l=cn(Error(s(424)),t),si(l),t=Rd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=pn(e.firstChild),jt=t,Ge=!0,la=null,dn=!0,n=_u(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qa(),a===l){t=Un(e,t,n);break e}At(e,t,a,n)}t=t.child}return t;case 26:return Lr(e,t),e===null?(n=Ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,a=Fr(W.current).createElement(n),a[ut]=t,a[Et]=e,zt(a,n,e),pt(a),t.stateNode=a):t.memoizedState=Ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rt(t),e===null&&Ge&&(a=t.stateNode=Kf(t.type,t.pendingProps,W.current),jt=t,dn=!0,l=lt,ba(t.type)?(ds=l,lt=pn(a.firstChild)):lt=l),At(e,t,t.pendingProps.children,n),Lr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((l=a=lt)&&(a=$h(a,t.type,t.pendingProps,dn),a!==null?(t.stateNode=a,jt=t,lt=pn(a.firstChild),dn=!1,l=!0):l=!1),l||ia(t)),rt(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,rs(l,i)?a=null:o!==null&&rs(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ic(e,t,ch,null,null,n),Oi._currentValue=l),Lr(e,t),At(e,t,a,n),t.child;case 6:return e===null&&Ge&&((e=n=lt)&&(n=Kh(n,t.pendingProps,dn),n!==null?(t.stateNode=n,jt=t,lt=null,e=!0):e=!1),e||ia(t)),null;case 13:return Od(e,t,n);case 4:return Je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Xa(t,null,a,n):At(e,t,a,n),t.child;case 11:return zd(e,t,t.type,t.pendingProps,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ra(t,t.type,a.value),At(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ua(t),l=Ct(l),a=a(l),t.flags|=1,At(e,t,a,n),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,n);case 15:return Ed(e,t,t.type,t.pendingProps,n);case 19:return Hd(e,t,n);case 31:return mh(e,t,n);case 22:return _d(e,t,n,t.pendingProps);case 24:return Ua(t),a=Ct(ht),e===null?(l=Jo(),l===null&&(l=nt,i=$o(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Fo(t),ra(t,ht,l)):((e.lanes&n)!==0&&(Io(e,t),mi(t,null,null,n),gi()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ra(t,ht,a)):(a=i.cache,ra(t,ht,a),a!==l.cache&&Zo(t,[ht],n,!0))),At(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Bn(e){e.flags|=4}function Dc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(pf())e.flags|=8192;else throw Ga=br,Wo}else e.flags&=-16777217}function Bd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!np(t))if(pf())e.flags|=8192;else throw Ga=br,Wo}function Or(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vl():536870912,e.lanes|=t,El|=t)}function Si(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function yh(e,t,n){var a=t.pendingProps;switch(Yo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return it(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),On(ht),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xo())),it(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Bn(t),i!==null?(it(t),Bd(t,i)):(it(t),Dc(t,l,null,a,n))):i?i!==e.memoizedState?(Bn(t),it(t),Bd(t,i)):(it(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Bn(t),it(t),Dc(t,l,e,a,n)),null;case 27:if(wt(t),n=W.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return it(t),null}e=J.current,ml(t)?bu(t):(e=Kf(l,a,n),t.stateNode=e,Bn(t))}return it(t),null;case 5:if(wt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return it(t),null}if(i=J.current,ml(t))bu(t);else{var o=Fr(W.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[ut]=t,i[Et]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(zt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Bn(t)}}return it(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=W.current,ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=jt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||qf(e.nodeValue,n)),e||ia(t,!0)}else e=Fr(e).createTextNode(a),e[ut]=t,t.stateNode=e}return it(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=ml(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ut]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),e=!1}else n=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(s(558))}return it(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[ut]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),l=!1}else l=Xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Or(t,t.updateQueue),it(t),null);case 4:return Te(),e===null&&ts(t.stateNode.containerInfo),it(t),null;case 10:return On(t.type),it(t),null;case 19:if(C(dt),a=t.memoizedState,a===null)return it(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Si(a,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=kr(e),i!==null){for(t.flags|=128,Si(a,!1),e=i.updateQueue,t.updateQueue=e,Or(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hu(n,e),n=n.sibling;return $(dt,dt.current&1|2),Ge&&Ln(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Mt()>Yr&&(t.flags|=128,l=!0,Si(a,!1),t.lanes=4194304)}else{if(!l)if(e=kr(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Or(t,e),Si(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ge)return it(t),null}else 2*Mt()-a.renderingStartTime>Yr&&n!==536870912&&(t.flags|=128,l=!0,Si(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Mt(),e.sibling=null,n=dt.current,$(dt,l?n&1|2:n&1),Ge&&Ln(t,a.treeForkCount),e):(it(t),null);case 22:case 23:return Ft(t),nc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),n=t.updateQueue,n!==null&&Or(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&C(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),On(ht),it(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function bh(e,t){switch(Yo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(ht),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wt(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(s(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(dt),null;case 4:return Te(),null;case 10:return On(t.type),null;case 22:case 23:return Ft(t),nc(),e!==null&&C(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return On(ht),null;case 25:return null;default:return null}}function Yd(e,t){switch(Yo(t),t.tag){case 3:On(ht),Te();break;case 26:case 27:case 5:wt(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:C(dt);break;case 10:On(t.type);break;case 22:case 23:Ft(t),nc(),e!==null&&C(Ba);break;case 24:On(ht)}}function ki(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Fe(t,t.return,u)}}function fa(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var m=n,A=u;try{A()}catch(Y){Fe(l,m,Y)}}}a=a.next}while(a!==i)}}catch(Y){Fe(t,t.return,Y)}}function Gd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Tu(t,n)}catch(a){Fe(e,e.return,a)}}}function Xd(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Fe(e,t,a)}}function ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Fe(e,t,l)}}function Nn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Fe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Fe(e,t,l)}else n.current=null}function Vd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Fe(e,e.return,l)}}function Lc(e,t,n){try{var a=e.stateNode;Yh(a,e.type,n,t),a[Et]=t}catch(l){Fe(e,e.return,l)}}function Qd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=q));else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}function qr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qr(e,t,n),e=e.sibling;e!==null;)qr(e,t,n),e=e.sibling}function Zd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);zt(t,a,n),t[ut]=e,t[Et]=n}catch(i){Fe(e,e.return,i)}}var Yn=!1,xt=!1,qc=!1,$d=typeof WeakSet=="function"?WeakSet:Set,vt=null;function vh(e,t){if(e=e.containerInfo,ls=lo,e=iu(e),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,m=-1,A=0,Y=0,V=e,E=null;t:for(;;){for(var R;V!==n||l!==0&&V.nodeType!==3||(u=o+l),V!==i||a!==0&&V.nodeType!==3||(m=o+a),V.nodeType===3&&(o+=V.nodeValue.length),(R=V.firstChild)!==null;)E=V,V=R;for(;;){if(V===e)break t;if(E===n&&++A===l&&(u=o),E===i&&++Y===a&&(m=o),(R=V.nextSibling)!==null)break;V=E,E=V.parentNode}V=R}n=u===-1||m===-1?null:{start:u,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},lo=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var fe=Qa(n.type,l);e=a.getSnapshotBeforeUpdate(fe,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(je){Fe(n,n.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function Kd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n),a&4&&ki(5,n);break;case 1:if(Xn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Fe(n,n.return,o)}else{var l=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Fe(n,n.return,o)}}a&64&&Gd(n),a&512&&ji(n,n.return);break;case 3:if(Xn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Tu(e,t)}catch(o){Fe(n,n.return,o)}}break;case 27:t===null&&a&4&&Zd(n);case 26:case 5:Xn(e,n),t===null&&a&4&&Vd(n),a&512&&ji(n,n.return);break;case 12:Xn(e,n);break;case 31:Xn(e,n),a&4&&Fd(e,n);break;case 13:Xn(e,n),a&4&&Id(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Eh.bind(null,n),Jh(e,n))));break;case 22:if(a=n.memoizedState!==null||Yn,!a){t=t!==null&&t.memoizedState!==null||xt,l=Yn;var i=xt;Yn=a,(xt=t)&&!i?Vn(e,n,(n.subtreeFlags&8772)!==0):Xn(e,n),Yn=l,xt=i}break;case 30:break;default:Xn(e,n)}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ot=null,Yt=!1;function Gn(e,t,n){for(n=n.child;n!==null;)Wd(e,t,n),n=n.sibling}function Wd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Jn,n)}catch{}switch(n.tag){case 26:xt||Nn(n,t),Gn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||Nn(n,t);var a=ot,l=Yt;ba(n.type)&&(ot=n.stateNode,Yt=!1),Gn(e,t,n),Di(n.stateNode),ot=a,Yt=l;break;case 5:xt||Nn(n,t);case 6:if(a=ot,l=Yt,ot=null,Gn(e,t,n),ot=a,Yt=l,ot!==null)if(Yt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(n.stateNode)}catch(i){Fe(n,t,i)}else try{ot.removeChild(n.stateNode)}catch(i){Fe(n,t,i)}break;case 18:ot!==null&&(Yt?(e=ot,Xf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ql(e)):Xf(ot,n.stateNode));break;case 4:a=ot,l=Yt,ot=n.stateNode.containerInfo,Yt=!0,Gn(e,t,n),ot=a,Yt=l;break;case 0:case 11:case 14:case 15:fa(2,n,t),xt||fa(4,n,t),Gn(e,t,n);break;case 1:xt||(Nn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Xd(n,t,a)),Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:xt=(a=xt)||n.memoizedState!==null,Gn(e,t,n),xt=a;break;default:Gn(e,t,n)}}function Fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ql(e)}catch(n){Fe(t,t.return,n)}}}function Id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ql(e)}catch(n){Fe(t,t.return,n)}}function wh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $d),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $d),t;default:throw Error(s(435,e.tag))}}function Hr(e,t){var n=wh(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=_h.bind(null,e,a);a.then(l,l)}})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ba(u.type)){ot=u.stateNode,Yt=!1;break e}break;case 5:ot=u.stateNode,Yt=!1;break e;case 3:case 4:ot=u.stateNode.containerInfo,Yt=!0;break e}u=u.return}if(ot===null)throw Error(s(160));Wd(i,o,l),ot=null,Yt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}var mn=null;function Pd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),a&4&&(fa(3,e,e.return),ki(3,e),fa(5,e,e.return));break;case 1:Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),a&64&&Yn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=mn;if(Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[an]||i[ut]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),zt(i,a,n),i[ut]=e,pt(i),a=i;break e;case"link":var o=ep("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),zt(i,a,n),l.head.appendChild(i);break;case"meta":if(o=ep("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),zt(i,a,n),l.head.appendChild(i);break;default:throw Error(s(468,a))}i[ut]=e,pt(i),a=i}e.stateNode=a}else tp(l,e.type,e.stateNode);else e.stateNode=Pf(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?tp(l,e.type,e.stateNode):Pf(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),n!==null&&a&4&&Lc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),e.flags&32){l=e.stateNode;try{x(l,"")}catch(fe){Fe(e,e.return,fe)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Lc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(qc=!0);break;case 6:if(Gt(t,e),Xt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(fe){Fe(e,e.return,fe)}}break;case 3:if(eo=null,l=mn,mn=Ir(t.containerInfo),Gt(t,e),mn=l,Xt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ql(t.containerInfo)}catch(fe){Fe(e,e.return,fe)}qc&&(qc=!1,ef(e));break;case 4:a=mn,mn=Ir(e.stateNode.containerInfo),Gt(t,e),Xt(e),mn=a;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Br=Mt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 22:l=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,A=Yn,Y=xt;if(Yn=A||l,xt=Y||m,Gt(t,e),xt=Y,Yn=A,Xt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||m||Yn||xt||Za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(i=m.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=m.stateNode;var V=m.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null;u.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(fe){Fe(m,m.return,fe)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(fe){Fe(m,m.return,fe)}}}else if(t.tag===18){if(n===null){m=t;try{var R=m.stateNode;l?Vf(R,!0):Vf(m.stateNode,!1)}catch(fe){Fe(m,m.return,fe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Hr(e,n))));break;case 19:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hr(e,a)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Qd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=Rc(e);qr(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(x(o,""),n.flags&=-33);var u=Rc(e);qr(e,u,o);break;case 3:case 4:var m=n.stateNode.containerInfo,A=Rc(e);Oc(e,A,m);break;default:throw Error(s(161))}}catch(Y){Fe(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kd(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),Za(t);break;case 1:Nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Xd(t,t.return,n),Za(t);break;case 27:Di(t.stateNode);case 26:case 5:Nn(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function Vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Vn(l,i,n),ki(4,i);break;case 1:if(Vn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Fe(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)Mu(m[l],u)}catch(A){Fe(a,a.return,A)}}n&&o&64&&Gd(i),ji(i,i.return);break;case 27:Zd(i);case 26:case 5:Vn(l,i,n),n&&a===null&&o&4&&Vd(i),ji(i,i.return);break;case 12:Vn(l,i,n);break;case 31:Vn(l,i,n),n&&o&4&&Fd(l,i);break;case 13:Vn(l,i,n),n&&o&4&&Id(l,i);break;case 22:i.memoizedState===null&&Vn(l,i,n),ji(i,i.return);break;case 30:break;default:Vn(l,i,n)}t=t.sibling}}function Hc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ui(n))}function Uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e))}function xn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tf(e,t,n,a),t=t.sibling}function tf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,a),l&2048&&ki(9,t);break;case 1:xn(e,t,n,a);break;case 3:xn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ui(e)));break;case 12:if(l&2048){xn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Fe(t,t.return,m)}}else xn(e,t,n,a);break;case 31:xn(e,t,n,a);break;case 13:xn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?xn(e,t,n,a):Ci(e,t):i._visibility&2?xn(e,t,n,a):(i._visibility|=2,Al(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Hc(o,t);break;case 24:xn(e,t,n,a),l&2048&&Uc(t.alternate,t);break;default:xn(e,t,n,a)}}function Al(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,m=a,A=o.flags;switch(o.tag){case 0:case 11:case 15:Al(i,o,u,m,l),ki(8,o);break;case 23:break;case 22:var Y=o.stateNode;o.memoizedState!==null?Y._visibility&2?Al(i,o,u,m,l):Ci(i,o):(Y._visibility|=2,Al(i,o,u,m,l)),l&&A&2048&&Hc(o.alternate,o);break;case 24:Al(i,o,u,m,l),l&&A&2048&&Uc(o.alternate,o);break;default:Al(i,o,u,m,l)}t=t.sibling}}function Ci(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Ci(n,a),l&2048&&Hc(a.alternate,a);break;case 24:Ci(n,a),l&2048&&Uc(a.alternate,a);break;default:Ci(n,a)}t=t.sibling}}var Ai=8192;function zl(e,t,n){if(e.subtreeFlags&Ai)for(e=e.child;e!==null;)nf(e,t,n),e=e.sibling}function nf(e,t,n){switch(e.tag){case 26:zl(e,t,n),e.flags&Ai&&e.memoizedState!==null&&o2(n,mn,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,n);break;case 3:case 4:var a=mn;mn=Ir(e.stateNode.containerInfo),zl(e,t,n),mn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ai,Ai=16777216,zl(e,t,n),Ai=a):zl(e,t,n));break;default:zl(e,t,n)}}function af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,rf(a,e)}af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lf(e),e=e.sibling}function lf(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&fa(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ur(e)):zi(e);break;default:zi(e)}}function Ur(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,rf(a,e)}af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fa(8,t,t.return),Ur(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ur(t));break;default:Ur(t)}e=e.sibling}}function rf(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:fa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ui(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var l=a.sibling,i=a.return;if(Jd(a),a===n){vt=null;break e}if(l!==null){l.return=i,vt=l;break e}vt=i}}}var Sh={getCacheForType:function(e){var t=Ct(ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ct(ht).controller.signal}},kh=typeof WeakMap=="function"?WeakMap:Map,Ke=0,nt=null,He=null,Be=0,We=0,It=null,pa=!1,Nl=!1,Bc=!1,Qn=0,st=0,ha=0,$a=0,Yc=0,Pt=0,El=0,Ni=null,Vt=null,Gc=!1,Br=0,of=0,Yr=1/0,Gr=null,ga=null,yt=0,ma=null,_l=null,Zn=0,Xc=0,Vc=null,cf=null,Ei=0,Qc=null;function en(){return(Ke&2)!==0&&Be!==0?Be&-Be:g.T!==null?Fc():$l()}function sf(){if(Pt===0)if((Be&536870912)===0||Ge){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),Pt=e}else Pt=536870912;return e=Wt.current,e!==null&&(e.flags|=32),Pt}function Qt(e,t,n){(e===nt&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Ml(e,0),xa(e,Be,Pt,!1)),Pn(e,n),((Ke&2)===0||e!==nt)&&(e===nt&&((Ke&2)===0&&($a|=n),st===4&&xa(e,Be,Pt,!1)),En(e))}function uf(e,t,n){if((Ke&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||In(e,t),l=a?Ah(e,t):$c(e,t,!0),i=a;do{if(l===0){Nl&&!a&&xa(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!jh(n)){l=$c(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Ni;var m=u.current.memoizedState.isDehydrated;if(m&&(Ml(u,o).flags|=256),o=$c(u,o,!1),o!==2){if(Bc&&!m){u.errorRecoveryDisabledLanes|=i,$a|=i,l=4;break e}i=Vt,Vt=l,i!==null&&(Vt===null?Vt=i:Vt.push.apply(Vt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ml(e,0),xa(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:xa(a,t,Pt,!pa);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Br+300-Mt(),10<l)){if(xa(a,t,Pt,!pa),Fn(a,0,!0)!==0)break e;Zn=t,a.timeoutHandle=Yf(df.bind(null,a,n,Vt,Gr,Gc,t,Pt,$a,El,pa,i,"Throttled",-0,0),l);break e}df(a,n,Vt,Gr,Gc,t,Pt,$a,El,pa,i,null,-0,0)}}break}while(!0);En(e)}function df(e,t,n,a,l,i,o,u,m,A,Y,V,E,R){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:q},nf(t,i,V);var fe=(i&62914560)===i?Br-Mt():(i&4194048)===i?of-Mt():0;if(fe=c2(V,fe),fe!==null){Zn=i,e.cancelPendingCommit=fe(bf.bind(null,e,t,i,n,a,l,o,u,m,Y,V,null,E,R)),xa(e,i,o,!A);return}}bf(e,t,i,n,a,l,o,u,m)}function jh(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Kt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xa(e,t,n,a){t&=~Yc,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-bt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Ki(e,n,t)}function Xr(){return(Ke&6)===0?(_i(0),!1):!0}function Zc(){if(He!==null){if(We===0)var e=He.return;else e=He,Rn=Ha=null,cc(e),wl=null,fi=0,e=He;for(;e!==null;)Yd(e.alternate,e),e=e.return;He=null}}function Ml(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Vh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Zn=0,Zc(),nt=e,He=n=Dn(e.current,null),Be=t,We=0,It=null,pa=!1,Nl=In(e,t),Bc=!1,El=Pt=Yc=$a=ha=st=0,Vt=Ni=null,Gc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-bt(a),i=1<<l;t|=e[l],a&=~i}return Qn=t,ur(),n}function ff(e,t){_e=null,g.H=vi,t===vl||t===yr?(t=zu(),We=3):t===Wo?(t=zu(),We=4):We=t===jc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,He===null&&(st=1,Tr(e,cn(t,e.current)))}function pf(){var e=Wt.current;return e===null?!0:(Be&4194048)===Be?fn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===fn:!1}function hf(){var e=g.H;return g.H=vi,e===null?vi:e}function gf(){var e=g.A;return g.A=Sh,e}function Vr(){st=4,pa||(Be&4194048)!==Be&&Wt.current!==null||(Nl=!0),(ha&134217727)===0&&($a&134217727)===0||nt===null||xa(nt,Be,Pt,!1)}function $c(e,t,n){var a=Ke;Ke|=2;var l=hf(),i=gf();(nt!==e||Be!==t)&&(Gr=null,Ml(e,t)),t=!1;var o=st;e:do try{if(We!==0&&He!==null){var u=He,m=It;switch(We){case 8:Zc(),o=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var A=We;if(We=0,It=null,Tl(e,u,m,A),n&&Nl){o=0;break e}break;default:A=We,We=0,It=null,Tl(e,u,m,A)}}Ch(),o=st;break}catch(Y){ff(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Rn=Ha=null,Ke=a,g.H=l,g.A=i,He===null&&(nt=null,Be=0,ur()),o}function Ch(){for(;He!==null;)mf(He)}function Ah(e,t){var n=Ke;Ke|=2;var a=hf(),l=gf();nt!==e||Be!==t?(Gr=null,Yr=Mt()+500,Ml(e,t)):Nl=In(e,t);e:do try{if(We!==0&&He!==null){t=He;var i=It;t:switch(We){case 1:We=0,It=null,Tl(e,t,i,1);break;case 2:case 9:if(Cu(i)){We=0,It=null,xf(t);break}t=function(){We!==2&&We!==9||nt!==e||(We=7),En(e)},i.then(t,t);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Cu(i)?(We=0,It=null,xf(t)):(We=0,It=null,Tl(e,t,i,7));break;case 5:var o=null;switch(He.tag){case 26:o=He.memoizedState;case 5:case 27:var u=He;if(o?np(o):u.stateNode.complete){We=0,It=null;var m=u.sibling;if(m!==null)He=m;else{var A=u.return;A!==null?(He=A,Qr(A)):He=null}break t}}We=0,It=null,Tl(e,t,i,5);break;case 6:We=0,It=null,Tl(e,t,i,6);break;case 8:Zc(),st=6;break e;default:throw Error(s(462))}}zh();break}catch(Y){ff(e,Y)}while(!0);return Rn=Ha=null,g.H=a,g.A=l,Ke=n,He!==null?0:(nt=null,Be=0,ur(),st)}function zh(){for(;He!==null&&!Qi();)mf(He)}function mf(e){var t=Ud(e.alternate,e,Qn);e.memoizedProps=e.pendingProps,t===null?Qr(e):He=t}function xf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dd(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Dd(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:cc(t);default:Yd(n,t),t=He=hu(t,Qn),t=Ud(n,t,Qn)}e.memoizedProps=e.pendingProps,t===null?Qr(e):He=t}function Tl(e,t,n,a){Rn=Ha=null,cc(t),wl=null,fi=0;var l=t.return;try{if(gh(e,l,t,n,Be)){st=1,Tr(e,cn(n,e.current)),He=null;return}}catch(i){if(l!==null)throw He=l,i;st=1,Tr(e,cn(n,e.current)),He=null;return}t.flags&32768?(Ge||a===1?e=!0:Nl||(Be&536870912)!==0?e=!1:(pa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),yf(t,e)):Qr(t)}function Qr(e){var t=e;do{if((t.flags&32768)!==0){yf(t,pa);return}e=t.return;var n=yh(t.alternate,t,Qn);if(n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);st===0&&(st=5)}function yf(e,t){do{var n=bh(e.alternate,e);if(n!==null){n.flags&=32767,He=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){He=e;return}He=e=n}while(e!==null);st=6,He=null}function bf(e,t,n,a,l,i,o,u,m){e.cancelPendingCommit=null;do Zr();while(yt!==0);if((Ke&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Ro,Ql(e,n,i,o,u,m),e===nt&&(He=nt=null,Be=0),_l=t,ma=e,Zn=n,Xc=i,Vc=l,cf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mh(Tt,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null,l=v.p,v.p=2,o=Ke,Ke|=4;try{vh(e,t,n)}finally{Ke=o,v.p=l,g.T=a}}yt=1,vf(),wf(),Sf()}}function vf(){if(yt===1){yt=0;var e=ma,t=_l,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=g.T,g.T=null;var a=v.p;v.p=2;var l=Ke;Ke|=4;try{Pd(t,e);var i=is,o=iu(e.containerInfo),u=i.focusedElem,m=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&lu(u.ownerDocument.documentElement,u)){if(m!==null&&_o(u)){var A=m.start,Y=m.end;if(Y===void 0&&(Y=A),"selectionStart"in u)u.selectionStart=A,u.selectionEnd=Math.min(Y,u.value.length);else{var V=u.ownerDocument||document,E=V&&V.defaultView||window;if(E.getSelection){var R=E.getSelection(),fe=u.textContent.length,je=Math.min(m.start,fe),et=m.end===void 0?je:Math.min(m.end,fe);!R.extend&&je>et&&(o=et,et=je,je=o);var S=au(u,je),b=au(u,et);if(S&&b&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var j=V.createRange();j.setStart(S.node,S.offset),R.removeAllRanges(),je>et?(R.addRange(j),R.extend(b.node,b.offset)):(j.setEnd(b.node,b.offset),R.addRange(j))}}}}for(V=[],R=u;R=R.parentNode;)R.nodeType===1&&V.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<V.length;u++){var X=V[u];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}lo=!!ls,is=ls=null}finally{Ke=l,v.p=a,g.T=n}}e.current=t,yt=2}}function wf(){if(yt===2){yt=0;var e=ma,t=_l,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=g.T,g.T=null;var a=v.p;v.p=2;var l=Ke;Ke|=4;try{Kd(e,t.alternate,t)}finally{Ke=l,v.p=a,g.T=n}}yt=3}}function Sf(){if(yt===4||yt===3){yt=0,za();var e=ma,t=_l,n=Zn,a=cf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,_l=ma=null,kf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ga=null),Zl(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Jn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=g.T,l=v.p,v.p=2,g.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{g.T=t,v.p=l}}(Zn&3)!==0&&Zr(),En(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Qc?Ei++:(Ei=0,Qc=e):Ei=0,_i(0)}}function kf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ui(t)))}function Zr(){return vf(),wf(),Sf(),jf()}function jf(){if(yt!==5)return!1;var e=ma,t=Xc;Xc=0;var n=Zl(Zn),a=g.T,l=v.p;try{v.p=32>n?32:n,g.T=null,n=Vc,Vc=null;var i=ma,o=Zn;if(yt=0,_l=ma=null,Zn=0,(Ke&6)!==0)throw Error(s(331));var u=Ke;if(Ke|=4,lf(i.current),tf(i,i.current,o,n),Ke=u,_i(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Jn,i)}catch{}return!0}finally{v.p=l,g.T=a,kf(e,t)}}function Cf(e,t,n){t=cn(n,t),t=kc(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(Pn(e,2),En(e))}function Fe(e,t,n){if(e.tag===3)Cf(e,e,n);else for(;t!==null;){if(t.tag===3){Cf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ga===null||!ga.has(a))){e=cn(n,e),n=Cd(2),a=sa(t,n,2),a!==null&&(Ad(n,a,t,e),Pn(a,2),En(a));break}}t=t.return}}function Kc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new kh;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Bc=!0,l.add(n),e=Nh.bind(null,e,t,n),t.then(e,e))}function Nh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,nt===e&&(Be&n)===n&&(st===4||st===3&&(Be&62914560)===Be&&300>Mt()-Br?(Ke&2)===0&&Ml(e,0):Yc|=n,El===Be&&(El=0)),En(e)}function Af(e,t){t===0&&(t=Vl()),e=Ra(e,t),e!==null&&(Pn(e,t),En(e))}function Eh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function _h(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Af(e,n)}function Mh(e,t){return Yl(e,t)}var $r=null,Dl=null,Jc=!1,Kr=!1,Wc=!1,ya=0;function En(e){e!==Dl&&e.next===null&&(Dl===null?$r=Dl=e:Dl=Dl.next=e),Kr=!0,Jc||(Jc=!0,Dh())}function _i(e,t){if(!Wc&&Kr){Wc=!0;do for(var n=!1,a=$r;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,_f(a,i))}else i=Be,i=Fn(a,a===nt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||In(a,i)||(n=!0,_f(a,i));a=a.next}while(n);Wc=!1}}function Th(){zf()}function zf(){Kr=Jc=!1;var e=0;ya!==0&&Xh()&&(e=ya);for(var t=Mt(),n=null,a=$r;a!==null;){var l=a.next,i=Nf(a,t);i===0?(a.next=null,n===null?$r=l:n.next=l,l===null&&(Dl=n)):(n=a,(e!==0||(i&3)!==0)&&(Kr=!0)),a=l}yt!==0&&yt!==5||_i(e),ya!==0&&(ya=0)}function Nf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-bt(i),u=1<<o,m=l[o];m===-1?((u&n)===0||(u&a)!==0)&&(l[o]=$i(u,t)):m<=t&&(e.expiredLanes|=u),i&=~u}if(t=nt,n=Be,n=Fn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(We===2||We===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&nl(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||In(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&nl(a),Zl(n)){case 2:case 8:n=_n;break;case 32:n=Tt;break;case 268435456:n=al;break;default:n=Tt}return a=Ef.bind(null,e),n=Yl(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&nl(a),e.callbackPriority=2,e.callbackNode=null,2}function Ef(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var a=Be;return a=Fn(e,e===nt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(uf(e,a,t),Nf(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?Ef.bind(null,e):null)}function _f(e,t){if(Zr())return null;uf(e,t,!0)}function Dh(){Qh(function(){(Ke&6)!==0?Yl(Lt,Th):zf()})}function Fc(){if(ya===0){var e=yl;e===0&&(e=wn,wn<<=1,(wn&261888)===0&&(wn=256)),ya=e}return ya}function Mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:H(""+e)}function Tf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Lh(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Mf((l[Et]||null).action),o=a.submitter;o&&(t=(t=o[Et]||null)?Mf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new rr("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ya!==0){var m=o?Tf(l,o):new FormData(l);xc(n,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(u.preventDefault(),m=o?Tf(l,o):new FormData(l),xc(n,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var Ic=0;Ic<Lo.length;Ic++){var Pc=Lo[Ic],Rh=Pc.toLowerCase(),Oh=Pc[0].toUpperCase()+Pc.slice(1);gn(Rh,"on"+Oh)}gn(cu,"onAnimationEnd"),gn(su,"onAnimationIteration"),gn(uu,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(I0,"onTransitionRun"),gn(P0,"onTransitionStart"),gn(eh,"onTransitionCancel"),gn(du,"onTransitionEnd"),Mn("onMouseEnter",["mouseout","mouseover"]),Mn("onMouseLeave",["mouseout","mouseover"]),Mn("onPointerEnter",["pointerout","pointerover"]),Mn("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Df(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],m=u.instance,A=u.currentTarget;if(u=u.listener,m!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(Y){sr(Y)}l.currentTarget=null,i=m}else for(o=0;o<a.length;o++){if(u=a[o],m=u.instance,A=u.currentTarget,u=u.listener,m!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=A;try{i(l)}catch(Y){sr(Y)}l.currentTarget=null,i=m}}}}function Ue(e,t){var n=t[Kl];n===void 0&&(n=t[Kl]=new Set);var a=e+"__bubble";n.has(a)||(Lf(t,e,2,!1),n.add(a))}function es(e,t,n){var a=0;t&&(a|=4),Lf(n,e,a,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Jr]){e[Jr]=!0,Ii.forEach(function(n){n!=="selectionchange"&&(qh.has(n)||es(n,!1,e),es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,es("selectionchange",!1,t))}}function Lf(e,t,n,a){switch(sp(t)){case 2:var l=d2;break;case 8:l=f2;break;default:l=ms}n=l.bind(null,t,n,e),l=void 0,!Ae||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ns(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=kn(u),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){a=i=o;continue e}u=u.parentNode}}a=a.return}Oe(function(){var A=i,Y=P(n),V=[];e:{var E=fu.get(e);if(E!==void 0){var R=rr,fe=e;switch(e){case"keypress":if(Ht(n)===0)break e;case"keydown":case"keyup":R=_0;break;case"focusin":fe="focus",R=Co;break;case"focusout":fe="blur",R=Co;break;case"beforeblur":case"afterblur":R=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=D0;break;case cu:case su:case uu:R=w0;break;case du:R=R0;break;case"scroll":case"scrollend":R=m0;break;case"wheel":R=q0;break;case"copy":case"cut":case"paste":R=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Xs;break;case"toggle":case"beforetoggle":R=U0}var je=(t&4)!==0,et=!je&&(e==="scroll"||e==="scrollend"),S=je?E!==null?E+"Capture":null:E;je=[];for(var b=A,j;b!==null;){var X=b;if(j=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||j===null||S===null||(X=De(b,S),X!=null&&je.push(Ti(b,X,j))),et)break;b=b.return}0<je.length&&(E=new R(E,fe,null,n,Y),V.push({event:E,listeners:je}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",E&&n!==B&&(fe=n.relatedTarget||n.fromElement)&&(kn(fe)||fe[ea]))break e;if((R||E)&&(E=Y.window===Y?Y:(E=Y.ownerDocument)?E.defaultView||E.parentWindow:window,R?(fe=n.relatedTarget||n.toElement,R=A,fe=fe?kn(fe):null,fe!==null&&(et=z(fe),je=fe.tag,fe!==et||je!==5&&je!==27&&je!==6)&&(fe=null)):(R=null,fe=A),R!==fe)){if(je=Ys,X="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(je=Xs,X="onPointerLeave",S="onPointerEnter",b="pointer"),et=R==null?E:Ma(R),j=fe==null?E:Ma(fe),E=new je(X,b+"leave",R,n,Y),E.target=et,E.relatedTarget=j,X=null,kn(Y)===A&&(je=new je(S,b+"enter",fe,n,Y),je.target=j,je.relatedTarget=et,X=je),et=X,R&&fe)t:{for(je=Hh,S=R,b=fe,j=0,X=S;X;X=je(X))j++;X=0;for(var be=b;be;be=je(be))X++;for(;0<j-X;)S=je(S),j--;for(;0<X-j;)b=je(b),X--;for(;j--;){if(S===b||b!==null&&S===b.alternate){je=S;break t}S=je(S),b=je(b)}je=null}else je=null;R!==null&&Rf(V,E,R,je,!1),fe!==null&&et!==null&&Rf(V,et,fe,je,!0)}}e:{if(E=A?Ma(A):window,R=E.nodeName&&E.nodeName.toLowerCase(),R==="select"||R==="input"&&E.type==="file")var Qe=Fs;else if(Js(E))if(Is)Qe=J0;else{Qe=$0;var me=Z0}else R=E.nodeName,!R||R.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&Q(A.elementType)&&(Qe=Fs):Qe=K0;if(Qe&&(Qe=Qe(e,A))){Ws(V,Qe,n,Y);break e}me&&me(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&$t(E,"number",E.value)}switch(me=A?Ma(A):window,e){case"focusin":(Js(me)||me.contentEditable==="true")&&(ul=me,Mo=A,oi=null);break;case"focusout":oi=Mo=ul=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,ru(V,n,Y);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":ru(V,n,Y)}var Me;if(zo)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else sl?$s(e,n)&&(Ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ye="onCompositionStart");Ye&&(Vs&&n.locale!=="ko"&&(sl||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&sl&&(Me=rn()):(Xe=Y,ve="value"in Xe?Xe.value:Xe.textContent,sl=!0)),me=Wr(A,Ye),0<me.length&&(Ye=new Gs(Ye,e,null,n,Y),V.push({event:Ye,listeners:me}),Me?Ye.data=Me:(Me=Ks(n),Me!==null&&(Ye.data=Me)))),(Me=Y0?G0(e,n):X0(e,n))&&(Ye=Wr(A,"onBeforeInput"),0<Ye.length&&(me=new Gs("onBeforeInput","beforeinput",null,n,Y),V.push({event:me,listeners:Ye}),me.data=Me)),Lh(V,e,A,n,Y)}Df(V,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=De(e,n),l!=null&&a.unshift(Ti(e,l,i)),l=De(e,t),l!=null&&a.push(Ti(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rf(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,m=u.alternate,A=u.stateNode;if(u=u.tag,m!==null&&m===a)break;u!==5&&u!==26&&u!==27||A===null||(m=A,l?(A=De(n,i),A!=null&&o.unshift(Ti(n,A,m))):l||(A=De(n,i),A!=null&&o.push(Ti(n,A,m)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Of(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Bh,"")}function qf(e,t){return t=Of(t),Of(e)===t}function Pe(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||x(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&x(e,""+a);break;case"className":Cn(e,"class",a);break;case"tabIndex":Cn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(e,n,a);break;case"style":ae(e,a,i);break;case"data":if(t!=="object"){Cn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=H(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",l.name,l,null),Pe(e,t,"formEncType",l.formEncType,l,null),Pe(e,t,"formMethod",l.formMethod,l,null),Pe(e,t,"formTarget",l.formTarget,l,null)):(Pe(e,t,"encType",l.encType,l,null),Pe(e,t,"method",l.method,l,null),Pe(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=H(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=q);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=H(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),rl(e,"popover",a);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":rl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ie.get(n)||n,rl(e,n,a))}}function as(e,t,n,a,l,i){switch(n){case"style":ae(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?x(e,a):(typeof a=="number"||typeof a=="bigint")&&x(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=q);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Et]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):rl(e,n,a)}}}function zt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pe(e,t,i,o,n,null)}}l&&Pe(e,t,"srcSet",n.srcSet,n,null),a&&Pe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var u=i=o=l=null,m=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var Y=n[a];if(Y!=null)switch(a){case"name":l=Y;break;case"type":o=Y;break;case"checked":m=Y;break;case"defaultChecked":A=Y;break;case"value":i=Y;break;case"defaultValue":u=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:Pe(e,t,a,Y,n,null)}}ei(e,i,u,m,A,o,l,!1);return;case"select":Ue("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Pe(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Tn(e,!!a,t,!1):n!=null&&Tn(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:Pe(e,t,o,u,n,null)}ir(e,a,l,i);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(a=n[m],a!=null))switch(m){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Pe(e,t,m,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Mi.length;a++)Ue(Mi[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Pe(e,t,A,a,n,null)}return;default:if(Q(t)){for(Y in n)n.hasOwnProperty(Y)&&(a=n[Y],a!==void 0&&as(e,t,Y,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Pe(e,t,u,a,n,null))}function Yh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,m=null,A=null,Y=null;for(R in n){var V=n[R];if(n.hasOwnProperty(R)&&V!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":m=V;default:a.hasOwnProperty(R)||Pe(e,t,R,null,a,V)}}for(var E in a){var R=a[E];if(V=n[E],a.hasOwnProperty(E)&&(R!=null||V!=null))switch(E){case"type":i=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":Y=R;break;case"value":o=R;break;case"defaultValue":u=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:R!==V&&Pe(e,t,E,R,a,V)}}Pl(e,o,u,m,A,Y,i,l);return;case"select":R=o=u=E=null;for(i in n)if(m=n[i],n.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":R=m;default:a.hasOwnProperty(i)||Pe(e,t,i,null,a,m)}for(l in a)if(i=a[l],m=n[l],a.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":E=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==m&&Pe(e,t,l,i,a,m)}t=u,n=o,a=R,E!=null?Tn(e,!!n,E,!1):!!a!=!!n&&(t!=null?Tn(e,!!n,t,!0):Tn(e,!!n,n?[]:"",!1));return;case"textarea":R=E=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Pe(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":E=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Pe(e,t,o,l,a,i)}lr(e,E,R);return;case"option":for(var fe in n)if(E=n[fe],n.hasOwnProperty(fe)&&E!=null&&!a.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Pe(e,t,fe,null,a,E)}for(m in a)if(E=a[m],R=n[m],a.hasOwnProperty(m)&&E!==R&&(E!=null||R!=null))switch(m){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Pe(e,t,m,E,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)E=n[je],n.hasOwnProperty(je)&&E!=null&&!a.hasOwnProperty(je)&&Pe(e,t,je,null,a,E);for(A in a)if(E=a[A],R=n[A],a.hasOwnProperty(A)&&E!==R&&(E!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:Pe(e,t,A,E,a,R)}return;default:if(Q(t)){for(var et in n)E=n[et],n.hasOwnProperty(et)&&E!==void 0&&!a.hasOwnProperty(et)&&as(e,t,et,void 0,a,E);for(Y in a)E=a[Y],R=n[Y],!a.hasOwnProperty(Y)||E===R||E===void 0&&R===void 0||as(e,t,Y,E,a,R);return}}for(var S in n)E=n[S],n.hasOwnProperty(S)&&E!=null&&!a.hasOwnProperty(S)&&Pe(e,t,S,null,a,E);for(V in a)E=a[V],R=n[V],!a.hasOwnProperty(V)||E===R||E==null&&R==null||Pe(e,t,V,E,a,R)}function Hf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&Hf(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var m=n[a],A=m.startTime;if(A>u)break;var Y=m.transferSize,V=m.initiatorType;Y&&Hf(V)&&(m=m.responseEnd,o+=Y*(m<u?1:(u-A)/(m-A)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ls=null,is=null;function Fr(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=null;function Xh(){var e=window.event;return e&&e.type==="popstate"?e===os?!1:(os=e,!0):(os=null,!1)}var Yf=typeof setTimeout=="function"?setTimeout:void 0,Vh=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(Zh)}:Yf;function Zh(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Xf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ql(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Di(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Di(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[an]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Di(e.ownerDocument.body);n=l}while(n);ql(t)}function Vf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function cs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cs(n),Jl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $h(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[an])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pn(e.nextSibling),e===null)break}return null}function Kh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pn(e.nextSibling),e===null))return null;return e}function Qf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pn(e.nextSibling),e===null))return null;return e}function ss(e){return e.data==="$?"||e.data==="$~"}function us(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ds=null;function Zf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kf(e,t,n){switch(t=Fr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jl(e)}var hn=new Map,Jf=new Set;function Ir(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=v.d;v.d={f:Wh,r:Fh,D:Ih,C:Ph,L:e2,m:t2,X:a2,S:n2,M:l2};function Wh(){var e=$n.f(),t=Xr();return e||t}function Fh(e){var t=ta(e);t!==null&&t.tag===5&&t.type==="form"?dd(t):$n.r(e)}var Ll=typeof document>"u"?null:document;function Wf(e,t,n){var a=Ll;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Jf.has(l)||(Jf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),zt(t,"link",e),pt(t),a.head.appendChild(t)))}}function Ih(e){$n.D(e),Wf("dns-prefetch",e,null)}function Ph(e,t){$n.C(e,t),Wf("preconnect",e,t)}function e2(e,t,n){$n.L(e,t,n);var a=Ll;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var i=l;switch(t){case"style":i=Rl(e);break;case"script":i=Ol(e)}hn.has(i)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Li(i))||t==="script"&&a.querySelector(Ri(i))||(t=a.createElement("link"),zt(t,"link",e),pt(t),a.head.appendChild(t)))}}function t2(e,t){$n.m(e,t);var n=Ll;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ol(e)}if(!hn.has(i)&&(e=O({rel:"modulepreload",href:e},t),hn.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ri(i)))return}a=n.createElement("link"),zt(a,"link",e),pt(a),n.head.appendChild(a)}}}function n2(e,t,n){$n.S(e,t,n);var a=Ll;if(a&&e){var l=na(a).hoistableStyles,i=Rl(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(Li(i)))u.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(i))&&fs(e,n);var m=o=a.createElement("link");pt(m),zt(m,"link",e),m._p=new Promise(function(A,Y){m.onload=A,m.onerror=Y}),m.addEventListener("load",function(){u.loading|=1}),m.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Pr(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function a2(e,t){$n.X(e,t);var n=Ll;if(n&&e){var a=na(n).hoistableScripts,l=Ol(e),i=a.get(l);i||(i=n.querySelector(Ri(l)),i||(e=O({src:e,async:!0},t),(t=hn.get(l))&&ps(e,t),i=n.createElement("script"),pt(i),zt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function l2(e,t){$n.M(e,t);var n=Ll;if(n&&e){var a=na(n).hoistableScripts,l=Ol(e),i=a.get(l);i||(i=n.querySelector(Ri(l)),i||(e=O({src:e,async:!0,type:"module"},t),(t=hn.get(l))&&ps(e,t),i=n.createElement("script"),pt(i),zt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ff(e,t,n,a){var l=(l=W.current)?Ir(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Rl(n.href),n=na(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Rl(n.href);var i=na(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Li(e)))&&!i._p&&(o.instance=i,o.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),i||i2(l,e,n,o.state))),t&&a===null)throw Error(s(528,""));return o}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(n),n=na(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rl(e){return'href="'+kt(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function If(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function i2(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),zt(t,"link",n),pt(t),e.head.appendChild(t))}function Ol(e){return'[src="'+kt(e)+'"]'}function Ri(e){return"script[async]"+e}function Pf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,pt(a),a;var l=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pt(a),zt(a,"style",l),Pr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Rl(n.href);var i=e.querySelector(Li(l));if(i)return t.state.loading|=4,t.instance=i,pt(i),i;a=If(n),(l=hn.get(l))&&fs(a,l),i=(e.ownerDocument||e).createElement("link"),pt(i);var o=i;return o._p=new Promise(function(u,m){o.onload=u,o.onerror=m}),zt(i,"link",a),t.state.loading|=4,Pr(i,n.precedence,e),t.instance=i;case"script":return i=Ol(n.src),(l=e.querySelector(Ri(i)))?(t.instance=l,pt(l),l):(a=n,(l=hn.get(i))&&(a=O({},n),ps(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),pt(l),zt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Pr(a,n.precedence,e));return t.instance}function Pr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eo=null;function ep(e,t,n){if(eo===null){var a=new Map,l=eo=new Map;l.set(n,a)}else l=eo,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[an]||i[ut]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function tp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function r2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function o2(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Rl(a.href),i=t.querySelector(Li(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=to.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,pt(i);return}i=t.ownerDocument||t,a=If(a),(l=hn.get(l))&&fs(a,l),i=i.createElement("link"),pt(i);var o=i;o._p=new Promise(function(u,m){o.onload=u,o.onerror=m}),zt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=to.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hs=0;function c2(e,t){return e.stylesheets&&e.count===0&&ao(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&hs===0&&(hs=62500*Gh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ao(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>hs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function to(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ao(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var no=null;function ao(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,no=new Map,t.forEach(s2,e),no=null,to.call(e))}function s2(e,t){if(!(t.state.loading&4)){var n=no.get(e);if(n)var a=n.get(null);else{n=new Map,no.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=to.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Oi={$$typeof:ye,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function u2(e,t,n,a,l,i,o,u,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.hiddenUpdates=_a(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function ap(e,t,n,a,l,i,o,u,m,A,Y,V){return e=new u2(e,t,n,o,m,A,Y,V,u),t=1,i===!0&&(t|=24),i=Jt(3,null,null,t),e.current=i,i.stateNode=e,t=$o(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Fo(i),e}function lp(e){return e?(e=pl,e):pl}function ip(e,t,n,a,l,i){l=lp(l),a.context===null?a.context=l:a.pendingContext=l,a=ca(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=sa(e,a,t),n!==null&&(Qt(n,e,t),hi(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gs(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&Qt(t,e,67108864),gs(e,67108864)}}function cp(e){if(e.tag===13||e.tag===31){var t=en();t=il(t);var n=Ra(e,t);n!==null&&Qt(n,e,t),gs(e,t)}}var lo=!0;function d2(e,t,n,a){var l=g.T;g.T=null;var i=v.p;try{v.p=2,ms(e,t,n,a)}finally{v.p=i,g.T=l}}function f2(e,t,n,a){var l=g.T;g.T=null;var i=v.p;try{v.p=8,ms(e,t,n,a)}finally{v.p=i,g.T=l}}function ms(e,t,n,a){if(lo){var l=xs(a);if(l===null)ns(e,t,a,io,n),up(e,a);else if(h2(l,e,t,n,a))a.stopPropagation();else if(up(e,a),t&4&&-1<p2.indexOf(e)){for(;l!==null;){var i=ta(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var m=1<<31-bt(o);u.entanglements[1]|=m,o&=~m}En(i),(Ke&6)===0&&(Yr=Mt()+500,_i(0))}}break;case 31:case 13:u=Ra(i,2),u!==null&&Qt(u,i,2),Xr(),gs(i,2)}if(i=xs(a),i===null&&ns(e,t,a,io,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else ns(e,t,a,null,n)}}function xs(e){return e=P(e),ys(e)}var io=null;function ys(e){if(io=null,e=kn(e),e!==null){var t=z(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=L(t),e!==null)return e;e=null}else if(n===31){if(e=M(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return io=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bo()){case Lt:return 2;case _n:return 8;case Tt:case Na:return 32;case al:return 268435456;default:return 32}default:return 32}}var bs=!1,va=null,wa=null,Sa=null,qi=new Map,Hi=new Map,ka=[],p2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function Ui(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ta(t),t!==null&&op(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function h2(e,t,n,a,l){switch(t){case"focusin":return va=Ui(va,e,t,n,a,l),!0;case"dragenter":return wa=Ui(wa,e,t,n,a,l),!0;case"mouseover":return Sa=Ui(Sa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return qi.set(i,Ui(qi.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Hi.set(i,Ui(Hi.get(i)||null,e,t,n,a,l)),!0}return!1}function dp(e){var t=kn(e.target);if(t!==null){var n=z(t);if(n!==null){if(t=n.tag,t===13){if(t=L(n),t!==null){e.blockedOn=t,Ji(e.priority,function(){cp(n)});return}}else if(t===31){if(t=M(n),t!==null){e.blockedOn=t,Ji(e.priority,function(){cp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);B=a,n.target.dispatchEvent(a),B=null}else return t=ta(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function fp(e,t,n){ro(e)&&n.delete(t)}function g2(){bs=!1,va!==null&&ro(va)&&(va=null),wa!==null&&ro(wa)&&(wa=null),Sa!==null&&ro(Sa)&&(Sa=null),qi.forEach(fp),Hi.forEach(fp)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,g2)))}var co=null;function pp(e){co!==e&&(co=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){co===e&&(co=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(ys(a||n)===null)continue;break}var i=ta(n);i!==null&&(e.splice(t,3),t-=3,xc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ql(e){function t(m){return oo(m,e)}va!==null&&oo(va,e),wa!==null&&oo(wa,e),Sa!==null&&oo(Sa,e),qi.forEach(t),Hi.forEach(t);for(var n=0;n<ka.length;n++){var a=ka[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ka.length&&(n=ka[0],n.blockedOn===null);)dp(n),n.blockedOn===null&&ka.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Et]||null;if(typeof i=="function")o||pp(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Et]||null)u=o.formAction;else if(ys(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),pp(n)}}}function hp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function vs(e){this._internalRoot=e}so.prototype.render=vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=en();ip(n,a,e,t,null,null)},so.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Xr(),t[ea]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=$l();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ka.length&&t!==0&&t<ka[n].priority;n++);ka.splice(n,0,e),n===0&&dp(e)}};var gp=f.version;if(gp!=="19.2.1")throw Error(s(527,gp,"19.2.1"));v.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=w(t),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var m2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Jn=uo.inject(m2),St=uo}catch{}}return Yi.createRoot=function(e,t){if(!p(e))throw Error(s(299));var n=!1,a="",l=wd,i=Sd,o=kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ap(e,1,!1,null,null,n,a,null,l,i,o,hp),e[ea]=t.current,ts(e),new vs(t)},Yi.hydrateRoot=function(e,t,n){if(!p(e))throw Error(s(299));var a=!1,l="",i=wd,o=Sd,u=kd,m=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),t=ap(e,1,!0,t,n??null,a,l,m,i,o,u,hp),t.context=lp(null),n=t.current,a=en(),a=il(a),l=ca(a),l.callback=null,sa(n,l,a),n=a,t.current.lanes=n,Pn(t,n),En(t),e[ea]=t.current,ts(e),new so(t)},Yi.version="19.2.1",Yi}var Ap;function D2(){if(Ap)return js.exports;Ap=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(f){console.error(f)}}return c(),js.exports=T2(),js.exports}var L2=D2();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=c=>c==null?void 0:c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function O2(c,f,d=[]){if(f==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:R2(c),size:24,node:f,...d.length>0?{aliases:d}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=c=>{let f="",d=!1;for(const s of c){if(s==="-"||s==="_"||s<=" "){d=f.length>0;continue}f.length===0?f+=s.toLowerCase():f+=d?s.toUpperCase():s,d=!1}return f};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=c=>{const f=q2(c);return f.charAt(0).toUpperCase()+f.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=(...c)=>c.filter((f,d,s)=>!!f&&f.trim()!==""&&s.indexOf(f)===d).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ns(c){return c!=null}function U2(c,f={}){var K,re;const d=f.attributeNames??{},s=ee=>d[ee]??ee,p=c.size??c.width??Ka.width,z=c.size??c.height??Ka.height,L=((K=c.aliases)==null?void 0:K.filter(ee=>typeof ee=="string"&&ee.trim()!=="").map(ee=>`lucide-${ee}`))??[],M=[...c.name?[`lucide-${c.name}`]:[],...L],k=((re=f.className)==null?void 0:re.split(" ").filter(Boolean))??[],w=f.includeDefaultClasses===!1?Ls(...k):Ls("lucide",...M,...k),U=f.absoluteStrokeWidth?Number(f.strokeWidth??Ka["stroke-width"])*Number(c.size??c.width??Ka.width)/Number(f.size??f.width??Ka.width):f.strokeWidth??Ka["stroke-width"];return["svg",{...Object.entries(Ka).reduce((ee,[F,ce])=>(ee[s(F)]=ce,ee),{}),..."color"in f&&f.color&&{[s("stroke")]:f.color},..."size"in f&&Ns(f.size)&&{[s("width")]:f.size,[s("height")]:f.size},..."width"in f&&Ns(f.width)&&{[s("width")]:f.width},..."height"in f&&Ns(f.height)&&{[s("height")]:f.height},[s("stroke-width")]:U,...w&&{[s("class")]:w},[s("viewBox")]:`0 0 ${p} ${z}`,...f.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in f&&f.attributes},c.node.map(ee=>{const[F,ce,se]=ee,te=f.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...ce}:ce;return se?[F,te,se]:[F,te]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function B2(c,f={}){return U2(c,{...f,attributeNames:{...f.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=c=>{for(const f in c)if(f.startsWith("aria-")||f==="role"||f==="title")return!0;return!1},G2=y.createContext({}),X2=()=>y.useContext(G2),V2=y.forwardRef(({color:c,size:f,width:d,height:s,strokeWidth:p,absoluteStrokeWidth:z,nonScalingStroke:L,className:M="",children:k,iconNode:w=[],icon:U={node:w,aliases:[],size:24},...O},K)=>{const{size:re=24,strokeWidth:ee=2,absoluteStrokeWidth:F=!1,nonScalingStroke:ce=!1,color:se="currentColor",className:te=""}=X2()??{},ye=!!k||Y2(O),[we,Se,pe=[]]=B2(U,{color:c??se,width:d??f??re,height:s??f??re,strokeWidth:p??ee,absoluteStrokeWidth:z??F,nonScalingStroke:L??ce,className:Ls(te,M),hasA11yProp:ye,attributes:O});return y.createElement(we,{ref:K,...Se},[...pe.map(([xe,ze])=>y.createElement(xe,ze)),...Array.isArray(k)?k:[k]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function bn(c,f=[],d=[]){const s=typeof c=="string"?O2(c,f,d):c,p=y.forwardRef(({className:z,...L},M)=>y.createElement(V2,{ref:M,icon:s,className:z,...L}));return s.name&&(p.displayName=H2(s.name)),p}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp={name:"book-a",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]};Wp.node;const Fp=bn(Wp);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};Ip.node;const Q2=bn(Ip);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp={name:"book-open-text",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M16 13h2",key:"weia3s"}],["path",{d:"M16 9h2",key:"1n7gjm"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}],["path",{d:"M6 13h2",key:"1cckiz"}],["path",{d:"M6 9h2",key:"1k7j9f"}]]};Pp.node;const Z2=bn(Pp);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"cat",size:24,node:[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]};e0.node;const $2=bn(e0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};t0.node;const K2=bn(t0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};n0.node;const J2=bn(n0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"notebook",size:24,node:[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]};a0.node;const l0=bn(a0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"panel-left-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],aliases:["sidebar-close"]};i0.node;const W2=bn(i0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"panel-left-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],aliases:["sidebar-open"]};r0.node;const F2=bn(r0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};o0.node;const c0=bn(o0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};s0.node;const I2=bn(s0),zp=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),P2=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),e1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.101c.119-1.486.259-3.245 1.303-4.595C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06",clipRule:"evenodd"})}),t1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",d:"M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"})}),n1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",d:"M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"})}),Np=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.42c0 .417.226.651.621.651h1.187c1.28 0 2.036-.791 2.036-2.145 0-1.353-.753-2.082-2.036-2.082H7.357c-.395 0-.62.234-.62.65zm1.632-.336h-.39V11.26h.39c.595 0 .946.384.946 1.095 0 .78-.325 1.158-.946 1.158m2.698.41c0 .416.226.65.621.65.396 0 .622-.234.622-.65v-.92h1.113c.316 0 .51-.17.51-.466s-.2-.466-.51-.466h-1.113v-.808h1.239c.328 0 .548-.179.548-.495 0-.317-.214-.495-.548-.495h-1.86c-.396 0-.622.234-.622.65z",clipRule:"evenodd"})}),Ep=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-4 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M11 14.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),a1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 0 1-1.54 0v-5.351H5.19v5.351a.77.77 0 1 1-1.54 0V5.673a.77.77 0 0 1 .77-.77",clipRule:"evenodd"})}),l1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061",clipRule:"evenodd"})}),Es=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25",clipRule:"evenodd"})}),i1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z",clipRule:"evenodd"})}),r1=c=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...c,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z",clipRule:"evenodd"})});var Hl=Jp();const o1=["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net"];function Xi(c){const f=c.match(/^https?:\/\/([\w.-]*\.)?jsdelivr\.net(\/gh\/.*)$/i);if(!f)return[c];const d=f[2];return o1.map(s=>s+d)}const yn=c=>{const f=Math.floor(c/60),d=Math.floor(c%60);return`${f}:${String(d).padStart(2,"0")}`},c1=({meta:c,title:f="听力音频"})=>{const d=y.useRef(null),s=y.useMemo(()=>{const T=Xi(c.src??""),le=(c.srcs??[]).flatMap(de=>Xi(de));return[...T,...le.filter(de=>!T.includes(de))]},[c.src,c.srcs]),[p,z]=y.useState(0),L=y.useMemo(()=>{const T=s[p]??s[0]??"";return T.startsWith("/")||/^https?:/.test(T)?T:`${window.location.origin}${T.replace(/^\.?\//,"/")}`},[s,p]),M=()=>{z(T=>T<s.length-1?T+1:T)},[k,w]=y.useState(0),[U,O]=y.useState(!1),[K,re]=y.useState(1),ee=c.parts,F=c.questionTimes??{},ce=c.segments??[],se=!!(ee!=null&&ee.length),te=y.useMemo(()=>se?c.duration||0:ce.length?ce[ce.length-1].end:0,[se,c.duration,ce]);y.useEffect(()=>{const T=d.current;if(!T)return;const le=()=>w(T.currentTime),de=()=>O(!1);return T.addEventListener("timeupdate",le),T.addEventListener("ended",de),()=>{T.removeEventListener("timeupdate",le),T.removeEventListener("ended",de)}},[]);const ye=y.useCallback(()=>{const T=d.current;T&&(T.paused?(T.play(),O(!0)):(T.pause(),O(!1)))},[]),we=y.useCallback(T=>{const le=d.current;le&&(le.currentTime=Math.max(0,Math.min(T,le.duration||T)),w(le.currentTime))},[]),Se=y.useCallback(T=>te>0?Math.min(100,Math.max(0,T/te*100)):0,[te]),pe=y.useRef(null),xe=y.useCallback(T=>{const le=pe.current;if(!le||te<=0)return;const de=le.getBoundingClientRect(),ke=Math.min(1,Math.max(0,(T.clientX-de.left)/de.width));we(ke*te)},[we,te]),ze=y.useCallback(()=>{const T=Array.from(document.querySelectorAll(".exam-content-root h2")).find(le=>/Part II|Listening/i.test(le.textContent||""));T==null||T.scrollIntoView({behavior:"smooth",block:"start"})},[]);y.useEffect(()=>{if(!se)return;const T=le=>{const de=le.detail??{},ke=typeof de.time=="number"?de.time:de.no!=null?F[de.no]:void 0;if(ke==null)return;ze(),we(ke);const g=d.current;g&&(g.play(),O(!0))};return window.addEventListener("cet:lp2-jump",T),()=>window.removeEventListener("cet:lp2-jump",T)},[se,F,we,ze]);const[ne,ue]=y.useState(0);y.useEffect(()=>{const T=pe.current;if(!T)return;const le=()=>ue(T.clientWidth);le();const de=new ResizeObserver(le);return de.observe(T),()=>de.disconnect()},[se]);const oe=T=>{var le;return((le=c.labels)==null?void 0:le[T])??`第 ${T+1} 段`};if(!c.src)return null;if(se&&ee){const T=Se(k),le=Object.entries(F).map(([_,G])=>({no:_,x:Number(G)/(te||1)*ne}));le.sort((_,G)=>_.x-G.x);const de=1;let ke=-1/0;const g=le.map(_=>{const G=_.no.length*4+2,Z=Math.max(0,ke+de-(_.x-G/2));return ke=_.x+Z+G/2,{no:_.no,cx:_.x+Z}}),v=(()=>{const _=(ee??[]).map((C,$)=>{const J=$+1<ee.length?ee[$+1].start:te,he=C.start/(te||1)*100,W=J/(te||1)*100;return{label:C.label,start:C.start,mid:(he+W)/2}}),G=C=>Math.max(24,C.length*5.4+8)/(ne||1)*100,Z=1.2;let h=-1/0;return _.map(C=>{const $=G(C.label),J=Math.max($/2,C.mid+Math.max(0,h+Z-(C.mid-$/2)));return h=J+$/2,{...C,mid:Math.min(J,100-$/2)}})})();return r.jsxs("div",{className:"lp2",children:[r.jsx("audio",{ref:d,src:L,preload:"metadata",onError:M}),r.jsx("button",{type:"button",className:"lp2-play",onClick:ye,"aria-label":U?"暂停":"播放",children:U?"❚❚":"▶"}),r.jsxs("div",{className:"lp2-times",children:[r.jsx("span",{className:"lp2-cur",children:yn(k)}),r.jsx("span",{className:"lp2-total",children:yn(te)})]}),r.jsxs("div",{className:"lp2-mid",children:[r.jsxs("div",{className:"lp2-labels",children:[ee[0]&&ee[0].start>3&&r.jsx("button",{type:"button",className:"lp2-part-label is-intro",style:{left:`${Se(ee[0].start)/2}%`},onClick:()=>we(0),title:`念题目 ${yn(0)} - ${yn(ee[0].start)}`,children:"念题"}),v.map(_=>r.jsx("button",{type:"button",className:"lp2-part-label",style:{left:`${_.mid}%`},onClick:()=>we(_.start),title:`${_.label} ${yn(_.start)}`,children:_.label},_.label))]}),r.jsxs("div",{className:"lp2-track",ref:pe,onClick:xe,role:"slider","aria-label":"播放进度","aria-valuemin":0,"aria-valuemax":te,"aria-valuenow":Math.round(k),children:[ee[0]&&ee[0].start>3&&r.jsx("span",{className:"lp2-segblock is-intro",style:{left:"2px",width:`calc(${Se(ee[0].start)}% - 4px)`}},"seg-intro"),ee.map((_,G)=>{const Z=G+1<ee.length?ee[G+1].start:te;if(Z<=_.start)return null;const h=Se(_.start),C=Se(Z)-Se(_.start);return r.jsx("span",{className:"lp2-segblock",style:{left:`calc(${h}% + 2px)`,width:`calc(${C}% - 4px)`}},`seg-${_.label}`)}),r.jsx("div",{className:"lp2-glow",style:{width:`${T}%`}}),g.map(_=>r.jsx("span",{className:"lp2-mark",style:{left:`${_.cx}px`}},`mark-${_.no}`)),r.jsx("div",{className:"lp2-cursor",style:{left:`${T}%`}}),g.map(_=>r.jsx("button",{type:"button",className:"lp2-q",style:{left:`${_.cx}px`},onClick:G=>{G.stopPropagation(),we(F[_.no])},title:`第 ${_.no} 题 ${yn(F[_.no])}`,children:_.no},`q-${_.no}`))]})]}),r.jsx("select",{className:"lp2-rate",value:K,onChange:_=>{const G=Number(_.target.value);re(G),d.current&&(d.current.playbackRate=G)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(_=>r.jsxs("option",{value:_,children:[_,"x"]},_))}),r.jsx("button",{type:"button",className:"lp2-trans",onClick:ze,children:"听力原文"})]})}return r.jsxs("div",{className:"lp-wrap",children:[r.jsx("audio",{ref:d,src:L,preload:"metadata",onError:M}),r.jsxs("div",{className:"lp-head",children:[r.jsx("button",{type:"button",className:"lp-play",onClick:ye,"aria-label":U?"暂停":"播放",children:U?"❚❚":"▶"}),r.jsx("span",{className:"lp-title",children:f}),r.jsxs("span",{className:"lp-time",children:[yn(k)," / ",yn(te)]}),r.jsx("select",{className:"lp-rate",value:K,onChange:T=>{const le=Number(T.target.value);re(le),d.current&&(d.current.playbackRate=le)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(T=>r.jsxs("option",{value:T,children:[T,"x"]},T))})]}),r.jsx("div",{className:"lp-segs",children:ce.map((T,le)=>{const de=k>=T.end,ke=k>=T.start&&k<T.end;return r.jsxs("button",{type:"button",className:`lp-seg${de?" is-done":""}${ke?" is-active":""}`,style:{flexGrow:Math.max(.5,T.dur)},onClick:()=>we(T.start),title:`${oe(le)} ${yn(T.start)} - ${yn(T.end)}`,"aria-label":`跳转到${oe(le)}`,children:[r.jsx("span",{className:"lp-seg-bar"}),r.jsx("span",{className:"lp-seg-name",children:oe(le)}),r.jsx("span",{className:"lp-seg-time",children:yn(T.start)})]},`${T.start}-${le}`)})}),r.jsx("input",{className:"lp-scrub",type:"range",min:0,max:te||1,step:.1,value:Math.min(k,te||0),onChange:T=>we(Number(T.target.value)),"aria-label":"播放进度"})]})};function s1(c){if(typeof DOMParser>"u")return c;const f=new DOMParser().parseFromString(c,"text/html");return f.querySelectorAll("script, style, iframe, object, embed, link, meta, base").forEach(d=>d.remove()),f.querySelectorAll("*").forEach(d=>{Array.from(d.attributes).forEach(s=>{const p=s.name.toLowerCase(),z=s.value.trim().toLowerCase();p.startsWith("on")&&d.removeAttribute(s.name),(p==="href"||p==="src")&&z.startsWith("javascript:")&&d.removeAttribute(s.name)})}),f.body.innerHTML}const _p="background-color: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;",u1="background-color: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1.5rem 0;",d1="background: repeating-linear-gradient(to bottom, transparent, transparent 33px, #d0d7de 33px, #d0d7de 34px); padding: 1rem 1.25rem; border: 1px solid #d0d7de; border-radius: 8px; margin: 1rem 0 1.5rem;",f1=(c,f)=>`<div class="question"><p><strong>${c}.</strong> ${f}</p></div>`,p1=c=>`<div class="question"><p><strong>${c}.</strong></p><div class="options">`+["A","B","C","D"].map(f=>`<div class="option"><strong>${f})</strong> （待补入选项）</div>`).join("")+"</div></div>",Ja=(c,f)=>Array.from({length:f-c+1},(d,s)=>p1(c+s)).join(""),Wa=(c,f,d)=>`<p><strong>Questions ${c} to ${f} are based on the ${d} you have just heard.</strong></p>`,Mp=c=>`<div style="${d1}">`+Array.from({length:c},()=>"<p>&nbsp;</p>").join("")+"</div>",_s={"cet6-2025-12-1":"Living in an increasingly competitive world, college students should better prepare themselves to confront various challenges.","cet6-2025-12-2":"While striving for the Chinese Dream, young people enjoy more opportunities to realize their self-worth.","cet6-2025-12-3":"It is believed that teachers can exert a profound influence on their students' academic pursuit and personal development.","cet6-2025-06-1":"As social media is used more and more extensively, there is a growing awareness of the importance of using it properly and responsibly.","cet6-2025-06-2":"As requirements for job applications are getting increasingly higher, college students ought to be better prepared for their future career.","cet6-2025-06-3":"With the increasing application of AI technology, there is a growing concern that it may negatively impact human creativity."},h1=c=>{if(!c)return;if(_s[c])return _s[c];const f=c.match(/^(cet\d)-(\d{4})-(\d{2})-set(\d)$/);return f?_s[`${f[1]}-${f[2]}-${f[3]}-${f[4]}`]:void 0},g1=(c,f=["150","200"])=>{const d="&emsp;&emsp;",s=k=>`<em>${k}</em>`,[p,z]=f,L=c?`For this part, you are allowed 30 minutes to write an essay that begins with the sentence &ldquo;<strong>${c}</strong>&rdquo; You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least <u>${p}</u> words but no more than <u>${z}</u> words.`:`For this part, you are allowed 30 minutes to write an essay. You should write at least <u>${p}</u> words but no more than <u>${z}</u> words.`,M=c?`${d}<u><strong>You should copy the sentence given in quotes at the beginning of your essay.</strong></u>`:"";return'<p class="pd-write-dir"><strong>Directions:</strong>'+s(L)+(M?`<br>
${s(M)}`:"")+"</p>"},Fa={convA:"In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convB:"In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convC:"In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",banked:"In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on <strong>Answer Sheet 2</strong> with a single line through the centre. You may not use any of the words in the bank more than once.",matching:"In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on <strong>Answer Sheet 2</strong>.",careful:"There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A, B, C and D. You should decide on the best choice and mark the corresponding letter on <strong>Answer Sheet 2</strong> with a single line through the centre.",translation:"For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on <strong>Answer Sheet 2</strong>."},Ia=c=>`<p class="pd-dir"><strong>Directions:</strong><em>${c}</em></p>`,m1=c=>{const d=Math.floor(10/c),s=10%c,p=[];let z=26;for(let L=0;L<c;L++){const M=d+(L<s?1:0);p.push([z,z+M-1]),z+=M}return p},x1=(c,f,d)=>{const s=Array.from({length:f-c+1},(p,z)=>`<span class="blank" data-blank="${c+z}">${c+z}</span>`);return`<p class="pd-passage">Paragraph ${d} — to be imported, with `+s.join(" , ")+" in the passage.</p>"},Tp="ABCDEFGHIJKLMNOPQRSTUVWXYZ",y1=c=>Array.from({length:Math.min(Math.max(c,1),Tp.length)},(f,d)=>`<p><strong>${Tp[d]}.</strong> （待导入段落文本）</p>`).join(""),Gi=(c,f)=>`<div class="question"><p><strong>${c}.</strong> ${f}</p><div class="options">`+["A","B","C","D"].map(d=>`<div class="option"><strong>${d})</strong> （待补入选项）</div>`).join("")+"</div></div>",b1=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],v1=c=>b1[c]??`No.${c+1}`,w1=c=>{const f=Math.min(Math.max(c||2,1),10),d=[];for(let s=0;s<f;s++){const p=46+s*5,z=p+4;d.push(`<p><strong>Passage ${v1(s)}</strong></p>`,`<p><strong>Questions ${p} to ${z} are based on the following passage.</strong></p>`,'<p class="pd-passage">（文章待导入）</p>',Gi(String(p),"What is the main idea of the passage?"),Gi(String(p+1),"According to Paragraph 1, what can be inferred?"),Gi(String(p+2),"What does the author think of the practice?"),Gi(String(p+3),"Why does the writer mention the case mentioned?"),Gi(String(z),"What would the author most probably suggest?"))}return d.join("")},S1=c=>{const f=c.writing||"（待补入写作主题）",d=c.translation||"（待补入翻译段落）",s=c.readingFocus??[],p=c.matchParas??8,z=c.bankedGroups??2,L=c.carefulPassages??2;return["<h2>Part I Writing (30 minutes)</h2>",g1(h1(c.paperId),c.type==="四级"?["120","180"]:["150","200"]),`<div style="${_p}"><h3 style="margin-top:0;">写作提示：</h3><ul style="padding-left:20px;"><li>主题：${f}</li>`+(s.length?s.slice(0,3).map(M=>`<li>${M}</li>`).join(""):"<li>立意与结构</li><li>论据与例证</li><li>语言与衔接</li>")+"</ul></div>",Mp(10),"<h2>Part II Listening Comprehension (25 minutes)</h2>",'<h3 class="pd-sec">Section A - Conversations</h3>',Ia(Fa.convA),Wa(1,4,"conversation"),Ja(1,4),Wa(5,8,"conversation"),Ja(5,8),'<h3 class="pd-sec">Section B - Passages</h3>',Ia(Fa.convB),Wa(9,11,"passage"),Ja(9,11),Wa(12,15,"passage"),Ja(12,15),'<h3 class="pd-sec">Section C - Lectures</h3>',Ia(Fa.convC),Wa(16,18,"recording"),Ja(16,18),Wa(19,21,"recording"),Ja(19,21),Wa(22,25,"recording"),Ja(22,25),"<h2>Part III Reading Comprehension (40 minutes)</h2>",'<h3 class="pd-break-sec">Section A - Banked Cloze</h3>',Ia(Fa.banked),m1(z).map(([M,k],w)=>x1(M,k,w+1)).join(""),`<div style="${_p}"><h3 style="margin-top:0;">词库 Word Bank</h3><ul class="pd-wordbank">`+"ABCDEFGHIJKLMNO".split("").map(M=>`<li>${M}. ______</li>`).join("")+"</ul></div>",'<h3 class="pd-break-sec">Section B - Matching</h3>',Ia(Fa.matching),y1(p),"<p><strong>Statement list:</strong></p>",...Array.from({length:10},(M,k)=>f1(String(36+k),"Which paragraph does the statement below refer to?")),'<h3 class="pd-break-sec">Section C - Careful Reading</h3>',Ia(Fa.careful),...w1(L),"<h2>Part IV Translation (30 minutes)</h2>",Ia(Fa.translation),`<div style="${u1}"><p style="line-height:1.8;"><strong>翻译原文（主题：${d}）：</strong></p><p style="line-height:1.8;">（原文待补入）</p></div>`,"<p><strong>译文作答区：</strong></p>",Mp(12)].join("")},u0=`<svg
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
  </svg>`,d0=`<svg
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
  </svg>`,k1=`<svg
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
</svg>`,Vi=({svg:c,cls:f,color:d})=>r.jsx("span",{className:f,"aria-hidden":"true",style:d?{color:d}:void 0,dangerouslySetInnerHTML:{__html:c}}),$e=1e3,Rs=14,Hs=[{key:"Red",value:"#fb7081"},{key:"Orange",value:"#ff8c38"},{key:"Yellow",value:"#fcd34d"},{key:"Green",value:"#3cbc36"},{key:"Blue",value:"#84cfff"},{key:"Purple",value:"#6e52df"},{key:"Magenta",value:"#e96cab"},{key:"Grey",value:"#929292"},{key:"Black",value:"#000000"},{key:"White",value:"#ffffff"}],f0=[2,4,6,8,10,12],j1=[10,14,18,22,26,30],xo=(c,f)=>{const d=c.replace("#",""),s=d.length===3?d.split("").map(z=>z+z).join(""):d,p=parseInt(s,16);return`rgba(${p>>16&255}, ${p>>8&255}, ${p&255}, ${f})`},Pa={pencil:{color:"#1e96eb",lineWidth:4},marker:{color:"#1e96eb",lineWidth:22},highlight:{color:"#fcd34d",lineWidth:0}},yo={color:"#929292",lineWidth:4,lineStyle:"curve"},fo={strokes:[],notes:[],grid:!1,penProps:Pa,shapeProps:yo,eraserSize:Rs},po=()=>Math.random().toString(36).slice(2,9),C1={pencil:2.2,marker:7,curve:2.6};function A1(c){const{pts:f}=c;if(!f.length)return"";if(c.tool==="curve"&&f.length>=2){const[d,s]=[f[0],f[f.length-1]],p=c.lineStyle??"curve";if(p==="straight")return`M ${d.x} ${d.y} L ${s.x} ${s.y}`;if(p==="orthogonal"){const K=(d.x+s.x)/2;return`M ${d.x} ${d.y} L ${K} ${d.y} L ${K} ${s.y} L ${s.x} ${s.y}`}const z=(d.x+s.x)/2,L=(d.y+s.y)/2,M=s.x-d.x,k=s.y-d.y,w=Math.hypot(M,k)||1,U=z-k/w*w*.18,O=L+M/w*w*.18;return`M ${d.x} ${d.y} Q ${U} ${O} ${s.x} ${s.y}`}return"M "+f.map(d=>`${d.x.toFixed(1)} ${d.y.toFixed(1)}`).join(" L ")}const Dp=c=>c==="pencil"||c==="marker"||c==="curve"||c==="highlight"||c==="underline",z1=({ann:c,tool:f,penProps:d,shapeProps:s,onAddStroke:p,onAppendPoint:z,onSnap:L,onEraseIds:M,onEraseLocal:k,eraserSize:w,onAddNote:U,onUpdateNote:O})=>{const K=y.useRef(!1),re=y.useRef(null),[ee,F]=y.useState(null),ce=y.useRef(15),[se,te]=y.useState(null),[ye,we]=y.useState(null),Se=y.useRef(null),pe=y.useRef(null),xe=y.useRef(null),ze=y.useCallback(v=>{Se.current=v,we(v)},[]),ne=y.useCallback(v=>{te({x:v.clientX,y:v.clientY})},[]),ue=y.useCallback((v,_)=>{const G=v.getBoundingClientRect(),Z=G.left+_.x/$e*G.width,h=G.top+_.y/$e*G.height,C=G.left+(_.x+_.w)/$e*G.width,$=G.top+(_.y+_.h)/$e*G.height,J=Math.min(Z,C),he=Math.max(Z,C),W=Math.min(h,$),Ce=Math.max(h,$),Je=[];for(const at of c.strokes)at.pts.some(tn=>{const Nt=G.left+tn.x/$e*G.width,Kn=G.top+tn.y/$e*G.height;return Nt>=J&&Nt<=he&&Kn>=W&&Kn<=Ce})&&Je.push(at.id);const Te=[],rt=120/$e*G.width,wt=30/$e*G.height;for(const at of c.notes){const tn=G.left+at.x/$e*G.width,Nt=G.top+at.y/$e*G.height;tn+rt>=J&&tn<=he&&Nt+wt>=W&&Nt<=Ce&&Te.push(at.id)}return{strokeIds:Je,noteIds:Te}},[c]),oe=y.useCallback((v,_,G)=>{const Z=v.getBoundingClientRect(),h=Z.left+_.x/$e*Z.width,C=Z.top+_.y/$e*Z.height,$=[];let J=!1;for(const Je of c.strokes){let Te=[],rt=!1;const wt=()=>{Te.length>=2&&$.push({...Je,id:po(),pts:Te}),Te=[]};for(const at of Je.pts){const tn=Z.left+at.x/$e*Z.width,Nt=Z.top+at.y/$e*Z.height;Math.hypot(tn-h,Nt-C)<=G?(rt=!0,wt()):Te.push(at)}wt(),rt&&(J=!0)}const he=[],W=120/$e*Z.width,Ce=30/$e*Z.height;for(const Je of c.notes){const Te=Z.left+Je.x/$e*Z.width,rt=Z.top+Je.y/$e*Z.height,wt=Math.max(Te,Math.min(h,Te+W)),at=Math.max(rt,Math.min(C,rt+Ce));Math.hypot(h-wt,C-at)<=G&&he.push(Je.id)}return he.length&&(J=!0),{strokes:$,noteIds:he,changed:J}},[c]),T=y.useCallback(v=>{const G=v.currentTarget.getBoundingClientRect();return{x:(v.clientX-G.left)/Math.max(1,G.width)*$e,y:(v.clientY-G.top)/Math.max(1,G.height)*$e}},[]),le=v=>{if(v.button!==0&&v.pointerType==="mouse")return;const _=T(v);if(f==="eraser"){K.current=!0;try{v.currentTarget.setPointerCapture(v.pointerId)}catch{}ne(v);const Z=oe(v.currentTarget,_,w);Z.changed&&k(Z.strokes,Z.noteIds);return}if(f==="box"){K.current=!0,pe.current=_,ze({x:_.x,y:_.y,w:0,h:0}),ne(v);try{v.currentTarget.setPointerCapture(v.pointerId)}catch{}return}if(f==="text"||f==="h1"||f==="link"){const Z=f==="text"?"text":f==="h1"?"h1":"link";let h,C=Z==="h1"?"批注标题":Z==="text"?"批注内容":"链接文字";if(Z==="link"){const $=window.prompt("请输入链接地址","https://");if(!$)return;h=$,C=h}U({id:po(),kind:Z,x:_.x,y:_.y,text:C,href:h});return}if(!Dp(f))return;K.current=!0;try{v.currentTarget.setPointerCapture(v.pointerId)}catch{}if(f==="curve"){const Z=s;p({id:po(),tool:"curve",pts:[_],color:Z.color,width:Z.lineWidth,lineStyle:Z.lineStyle});return}if(f==="highlight"||f==="underline"){const Z=v.currentTarget.closest(".pd-sheet");ce.current=Z&&parseFloat(getComputedStyle(Z).fontSize)||15,re.current={tool:f,norm:[_],client:[{x:v.clientX,y:v.clientY}]},F({tool:f,norm:[_]}),K.current=!0;try{v.currentTarget.setPointerCapture(v.pointerId)}catch{}return}const G=d[f];p({id:po(),tool:f,pts:[_],color:f==="marker"?xo(G.color,.3):f==="highlight"?xo(G.color,.38):G.color,width:G.lineWidth})},de=v=>{if(f==="eraser"){if(ne(v),!K.current)return;const G=T(v),Z=oe(v.currentTarget,G,w);Z.changed&&k(Z.strokes,Z.noteIds);return}if(f==="box"){if(ne(v),!K.current||!pe.current)return;const G=T(v),Z=pe.current;ze({x:Math.min(Z.x,G.x),y:Math.min(Z.y,G.y),w:Math.abs(G.x-Z.x),h:Math.abs(G.y-Z.y)});return}if(!K.current)return;const _=T(v);if(re.current){re.current.norm.push(_),re.current.client.push({x:v.clientX,y:v.clientY}),F({tool:re.current.tool,norm:re.current.norm.slice()});return}z(_)},ke=()=>{if(K.current){if(K.current=!1,f==="box"&&pe.current&&Se.current){const v=Se.current,_=xe.current;if(_&&(v.w>4||v.h>4)){const{strokeIds:G,noteIds:Z}=ue(_,v);(G.length||Z.length)&&M(G,Z)}pe.current=null,ze(null);return}if(re.current){const v=re.current;re.current=null,F(null),v.client.length>=2&&L(v.tool,v.client)}}},g=Dp(f)||f==="eraser"||f==="box"||f==="text"||f==="h1"||f==="link";return r.jsxs(r.Fragment,{children:[c.grid&&r.jsx("div",{className:"pd-grid-bg","aria-hidden":"true"}),r.jsxs("svg",{ref:xe,className:"pd-anno-svg",viewBox:`0 0 ${$e} ${$e}`,preserveAspectRatio:"none",style:{pointerEvents:g?"auto":"none"},onPointerDown:le,onPointerMove:de,onPointerUp:ke,onPointerLeave:v=>{f==="eraser"&&te(null),ke()},onPointerCancel:ke,children:[c.strokes.map(v=>{if(v.tool==="highlight"){const _=v.pts.map(C=>C.x),G=v.pts.map(C=>C.y),Z=Math.min(..._),h=Math.min(...G);return r.jsx("rect",{x:Z,y:h,width:Math.max(..._)-Z,height:Math.max(...G)-h,rx:"0.5",fill:v.color,style:{pointerEvents:"none"}},v.id)}if(v.tool==="underline"){const _=v.pts.map(Z=>Z.x),G=Math.max(...v.pts.map(Z=>Z.y));return r.jsx("line",{x1:Math.min(..._),y1:G,x2:Math.max(..._),y2:G,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",style:{stroke:v.color,pointerEvents:"none"}},v.id)}return r.jsx("path",{d:A1(v),fill:"none",strokeWidth:v.width??C1[v.tool],strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{stroke:v.color,pointerEvents:"none"}},v.id)}),ee&&(()=>{const v=ee.tool==="highlight",_=d.highlight.color,G=v?xo(_,.38):_,Z=v?ce.current*1.05:2,h="M "+ee.norm.map(C=>`${C.x.toFixed(1)} ${C.y.toFixed(1)}`).join(" L ");return r.jsx("path",{d:h,fill:"none",stroke:G,strokeWidth:Z,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}},"__temp__")})(),ye&&(ye.w>0||ye.h>0)&&r.jsx("rect",{x:ye.x,y:ye.y,width:ye.w,height:ye.h,fill:"rgba(47,107,255,.10)",stroke:"var(--affine-primary-color)",strokeWidth:1.5,strokeDasharray:"6 4",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}})]}),f==="eraser"&&se&&r.jsx("div",{className:"pd-erase-cursor",style:{left:se.x,top:se.y,width:w*2,height:w*2}}),c.notes.map(v=>r.jsx(N1,{note:v,onChange:_=>O(v.id,_)},v.id))]})},N1=({note:c,onChange:f})=>{const d=y.useRef(null);y.useEffect(()=>{d.current&&document.activeElement!==d.current&&(d.current.textContent=c.text)},[c.text]);const s=c.kind==="h1"?"pd-note pd-note-h1":c.kind==="link"?"pd-note pd-note-link":"pd-note";return r.jsx("div",{className:s,style:{left:`${c.x/$e*100}%`,top:`${c.y/$e*100}%`,transform:"translate(-6px, -8px) rotate(-1.5deg)"},contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,ref:d,onBlur:()=>{var p;f({text:((p=d.current)==null?void 0:p.textContent)??""})},onKeyDown:p=>{p.stopPropagation(),p.key==="Escape"&&p.target.blur()},onPointerDown:p=>{p.stopPropagation()}})},Us=({widths:c,value:f,onPick:d})=>{const s=c.length,p=Math.max(1,c.filter(k=>k<=f).length),z=100/s,L={left:`${z/2}%`,right:`${z/2}%`},M={left:`${z/2}%`,width:`${(p-1)*z}%`};return r.jsxs("div",{className:"pd-pm-widths",role:"slider","aria-valuenow":f,children:[r.jsx("span",{className:"pd-pm-line",style:L,"aria-hidden":"true"}),r.jsx("span",{className:"pd-pm-line-fill",style:M,"aria-hidden":"true"}),c.map((k,w)=>{const U=4+w*2;return r.jsx("button",{type:"button",className:`pd-pm-cell${k<=f?" sel":""}`,onClick:()=>d(k),"aria-label":`线宽 ${k}`,children:r.jsx("span",{className:"pd-pm-dot",style:{width:U,height:U}})},k)})]})},E1=({pen:c,penProps:f,onPen:d,onSetting:s})=>{const p=c==="pencil"?f0:j1,z=f[c];return r.jsxs("div",{className:"pd-pen-menu",onPointerDown:L=>L.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-pm-pen${c==="pencil"?" is-on":""}`,onClick:()=>d("pencil"),title:"画笔","aria-label":"画笔","aria-pressed":c==="pencil",children:r.jsx(Vi,{svg:u0,cls:"pd-tb-illus",color:c==="pencil"?f.pencil.color:"var(--affine-primary-color)"})}),r.jsx("button",{type:"button",className:`pd-pm-pen${c==="marker"?" is-on":""}`,onClick:()=>d("marker"),title:"荧光笔","aria-label":"荧光笔","aria-pressed":c==="marker",children:r.jsx(Vi,{svg:d0,cls:"pd-tb-illus",color:c==="marker"?f.marker.color:"var(--affine-primary-color)"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Us,{widths:p,value:z.lineWidth,onPick:L=>s(c,{lineWidth:L})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Hs.map(L=>r.jsx("button",{type:"button",className:`pd-pm-cdot${z.color.toLowerCase()===L.value.toLowerCase()?" sel":""}`,style:{background:L.value,...L.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>s(c,{color:L.value}),"aria-label":L.key,title:L.key},L.key))})]})},_1=[{key:"curve",title:"曲线",Icon:e1},{key:"orthogonal",title:"直角",Icon:t1},{key:"straight",title:"直线",Icon:n1}],M1=({shapeProps:c,onSetting:f})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[_1.map(({key:d,title:s,Icon:p})=>r.jsx("button",{type:"button",className:`pd-pm-shape${c.lineStyle===d?" is-on":""}`,onClick:()=>f({lineStyle:d}),title:s,"aria-label":s,"aria-pressed":c.lineStyle===d,children:r.jsx(p,{})},d)),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Us,{widths:f0,value:c.lineWidth,onPick:d=>f({lineWidth:d})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Hs.map(d=>r.jsx("button",{type:"button",className:`pd-pm-cdot${c.color.toLowerCase()===d.value.toLowerCase()?" sel":""}`,style:{background:d.value,...d.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>f({color:d.value}),"aria-label":d.key,title:d.key},d.key))})]}),T1=()=>r.jsxs("span",{className:"pd-tb-note-stack","aria-hidden":"true",children:[r.jsx("span",{className:"pd-ns-paper pd-ns-p1",children:r.jsx(l1,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p2",children:r.jsx(a1,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p3",children:r.jsx(r1,{})})]}),Ca=({icon:c,active:f,onClick:d,title:s})=>r.jsx("button",{type:"button",className:`pd-tb-btn${f?" is-active":""}`,onClick:d,title:s,"aria-label":s,"aria-pressed":f,children:c}),D1=({mode:c})=>{const f={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round"};return c==="word"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("text",{x:"12",y:"16.5",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"currentColor",stroke:"none",fontFamily:"serif",children:"A"}),r.jsx("path",{d:"M5 20.5h14",...f})]}):c==="sentence"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("path",{d:"M4 8h16M4 13h9",...f}),r.jsx("circle",{cx:"16.2",cy:"13",r:"1.4",fill:"currentColor"})]}):c==="paragraph"?r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:r.jsx("path",{d:"M4 6.5h16M4 11.5h16M4 16.5h9",...f})}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"2",...f}),r.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5",...f})]})},L1=[{key:"word",title:"单词翻译"},{key:"sentence",title:"句子翻译"},{key:"paragraph",title:"整段翻译"},{key:"full",title:"全文翻译"}],R1=({mode:c,onMode:f})=>r.jsx("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:L1.map(d=>r.jsxs("button",{type:"button",className:`pd-trans-btn${c===d.key?" is-on":""}`,onClick:()=>f(d.key),title:d.title,"aria-label":d.title,"aria-pressed":c===d.key,children:[r.jsx(D1,{mode:d.key}),r.jsx("span",{children:d.title})]},d.key))}),Os=({mode:c,color:f})=>c==="highlight"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("rect",{x:"4.2",y:"4.6",width:"12.5",height:"7.2",rx:"2",transform:"rotate(-9 10.5 8)",fill:"currentColor"}),r.jsx("path",{d:"M4 17.2h16M4 20.4h10",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M7 3.5v7.5a5 5 0 0 0 10 0V3.5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),r.jsx("path",{d:"M4.5 20.5h15",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),O1=({mode:c,color:f,onMode:d,onColor:s})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-hl-btn${c==="highlight"?" is-on":""}`,onClick:()=>d("highlight"),title:"高亮","aria-label":"高亮","aria-pressed":c==="highlight",children:r.jsx(Os,{mode:"highlight",color:c==="highlight"?f:"currentColor"})}),r.jsx("button",{type:"button",className:`pd-hl-btn${c==="underline"?" is-on":""}`,onClick:()=>d("underline"),title:"下划线","aria-label":"下划线","aria-pressed":c==="underline",children:r.jsx(Os,{mode:"underline",color:c==="underline"?f:"currentColor"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx("div",{className:"pd-pm-colors",children:Hs.filter(p=>p.key!=="White"&&p.key!=="Black").map(p=>r.jsx("button",{type:"button",className:`pd-pm-cdot${f.toLowerCase()===p.value.toLowerCase()?" sel":""}`,style:{background:p.value},onClick:()=>s(p.value),"aria-label":p.key,title:p.key},p.key))})]}),q1=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 7L4 12l5 5"}),r.jsx("path",{d:"M4 12h11a5 5 0 0 1 0 10h-1"})]}),H1=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12V5.2a1.4 1.4 0 0 1 2.8 0V11"}),r.jsx("path",{d:"M10.8 10.6V4.4a1.4 1.4 0 0 1 2.8 0v6.2"}),r.jsx("path",{d:"M13.6 10.8V5.6a1.4 1.4 0 0 1 2.8 0V12"}),r.jsx("path",{d:"M16.4 11.2a1.4 1.4 0 0 1 2.8.3v2.9A7.2 7.2 0 0 1 12 21.4c-2.6 0-4.3-.9-5.6-3L4.5 15c-.7-1.1-.4-2.3.6-2.9.9-.5 2-.3 2.6.5l.9 1.2"})]}),U1=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"4",y:"4.5",width:"16",height:"15",rx:"2",strokeDasharray:"3.2 2.6"}),r.jsx("path",{d:"M9.5 9.5l5 5M14.5 9.5l-5 5"})]}),B1=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2.5",y:"4.5",width:"8.5",height:"15",rx:"1.2"}),r.jsx("rect",{x:"13",y:"4.5",width:"8.5",height:"15",rx:"1.2"})]}),Y1=({paper:c})=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:c?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3.5h8.5L19 8v12.5H6z"}),r.jsx("path",{d:"M14 3.5V8h5"}),r.jsx("path",{d:"M9 12h7M9 15h7M9 18h4.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"5",cy:"7",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"12",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"17",r:"1.1"}),r.jsx("path",{d:"M9 7h10M9 12h10M9 17h10"})]})}),G1=({tool:c,onTool:f,penProps:d,onPenSetting:s,shapeProps:p,onShapeSetting:z,zoom:L,onZoom:M,onUndo:k,canUndo:w,eraserSize:U,onEraserSize:O,spread:K,onToggleSpread:re,examMode:ee,onToggleExamMode:F})=>{const[ce]=y.useState(!1),[se,te]=y.useState(!1),[ye,we]=y.useState(!1),[Se,pe]=y.useState(!1),[xe,ze]=y.useState(!1),[ne,ue]=y.useState(()=>localStorage.getItem("cet:hl:mode")==="underline"?"underline":"highlight"),[oe,T]=y.useState(!1),[le,de]=y.useState(!1),[ke,g]=y.useState(()=>{const W=localStorage.getItem("cet:trans:mode");return W==="sentence"||W==="paragraph"||W==="full"?W:"word"}),[v,_]=y.useState(!1),G=W=>{f(W),pe(W==="pencil"||W==="marker"),ze(W==="curve"),we(W==="eraser"),W!=="highlight"&&W!=="underline"&&T(!1),W!=="select"&&_(!1)},Z=W=>{g(W);try{localStorage.setItem("cet:trans:mode",W)}catch{}},h=()=>{c==="highlight"||c==="underline"?T(W=>!W):(f(ne),T(!0))},C=W=>{ue(W);try{localStorage.setItem("cet:hl:mode",W)}catch{}f(W)},$=W=>{c===W?pe(Ce=>!Ce):G(W)},J=()=>{c==="curve"?ze(W=>!W):G("curve")},he=()=>{c==="eraser"?we(W=>!W):(f("eraser"),we(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pd-float-bar","data-collapsed":ce?"true":"false","data-hidden":se?"true":"false",children:[Se&&!ce&&(c==="pencil"||c==="marker")&&r.jsx(E1,{pen:c==="pencil"?"pencil":"marker",penProps:d,onPen:W=>f(W),onSetting:s}),xe&&!ce&&c==="curve"&&r.jsx(M1,{shapeProps:p,onSetting:z}),v&&!ce&&c==="select"&&r.jsx(R1,{mode:ke,onMode:Z}),oe&&!ce&&(c==="highlight"||c==="underline")&&r.jsx(O1,{mode:ne,color:d.highlight.color,onMode:C,onColor:W=>s("highlight",{color:W})}),le&&!ce&&r.jsxs("div",{className:"pd-zoom-menu",onPointerDown:W=>W.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>M(L-.1),title:"缩小",children:"−"}),r.jsxs("span",{className:"pd-zoom-val",children:[Math.round(L*100),"%"]}),r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>M(L+.1),title:"放大",children:"＋"}),r.jsx("button",{type:"button",className:"pd-zoom-btn pd-zoom-reset",onClick:()=>M(1),title:"重置为 100%",children:"重置"}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(K?" is-on":""),onClick:re,title:K?"切换为单页浏览":"双页浏览：左右并排显示试卷","aria-pressed":K,children:[r.jsx(B1,{}),r.jsx("span",{children:"双页"})]}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(ee==="paper"?" is-on":""),onClick:F,title:ee==="paper"?"当前为模拟真实试卷预览（A4 连续密排、纯净只读），点击切换回按题预览":"当前为按题预览（每种题型一张纸、纸高随内容、可作答），点击切换为模拟真实试卷","aria-pressed":ee==="paper",children:[r.jsx(Y1,{paper:ee==="paper"}),r.jsx("span",{children:ee==="paper"?"试卷":"按题"})]})]}),ye&&!ce&&c==="eraser"&&r.jsxs("div",{className:"pd-pen-menu pd-erase-menu",onPointerDown:W=>W.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-erase-delbtn",onClick:()=>{we(!1),f("box")},title:"框选删除：拖拽矩形批量清除笔迹与批注","aria-label":"框选删除",children:r.jsx(U1,{})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx(Us,{widths:[8,14,22,32],value:U,onPick:O})]}),r.jsx(Ca,{icon:r.jsx(q1,{}),active:!1,onClick:k,title:"回缩上一笔 (Ctrl+Z)"}),r.jsxs("div",{className:"pd-tb-group",children:[r.jsx(Ca,{icon:r.jsx(H1,{}),active:le,onClick:()=>de(W=>!W),title:"缩放试卷（双指捏合 / Ctrl+滚轮）"}),r.jsx(Ca,{icon:r.jsx(Os,{mode:ne,color:d.highlight.color}),active:c==="highlight"||c==="underline",onClick:h,title:"高亮 / 下划线"}),r.jsx(Ca,{icon:r.jsx(i1,{}),active:c==="curve",onClick:J,title:"形状 / 连接线 (C)"})]}),!ce&&r.jsxs("div",{className:"pd-tb-group pd-tb-senior",children:[r.jsx(Ca,{icon:r.jsx(T1,{}),active:c==="text",onClick:()=>G("text"),title:"批注便签 (T)"}),r.jsx(Ca,{icon:r.jsx(Vi,{svg:u0,cls:"pd-tb-illus",color:c==="pencil"?d.pencil.color:"var(--affine-primary-color)"}),active:c==="pencil",onClick:()=>$("pencil"),title:"铅笔 (P)"}),r.jsx(Ca,{icon:r.jsx(Vi,{svg:d0,cls:"pd-tb-illus",color:c==="marker"?d.marker.color:"var(--affine-primary-color)"}),active:c==="marker",onClick:()=>$("marker"),title:"马克笔 (M)"}),r.jsx(Ca,{icon:r.jsx(Vi,{svg:k1,cls:"pd-tb-illus pd-tb-illus-erase"}),active:c==="eraser",onClick:he,title:"橡皮擦 (E)：点击调整擦除大小与删除"})]}),!ce&&r.jsx("button",{type:"button",className:"pd-tb-arrow pd-tb-arrow-next",onClick:()=>te(!0),title:"隐藏工具栏","aria-label":"隐藏工具栏",children:r.jsx(zp,{})})]}),se&&r.jsx("button",{type:"button",className:"pd-bar-show",onClick:()=>te(!1),title:"显示工具栏","aria-label":"显示工具栏",children:r.jsx(zp,{})})]})},X1=c=>{const f=`cet:anno:${c}`,[d,s]=y.useState(fo),[p,z]=y.useState("select"),L=y.useRef(!1);y.useEffect(()=>{var ne,ue,oe;try{const T=localStorage.getItem(f);if(T){const le=JSON.parse(T),de=(ne=le.penProps)==null?void 0:ne.marker;s({strokes:le.strokes??[],notes:le.notes??[],grid:le.grid??!1,penProps:{highlight:{...Pa.highlight,...((ue=le.penProps)==null?void 0:ue.highlight)??{}},pencil:{...Pa.pencil,...((oe=le.penProps)==null?void 0:oe.pencil)??{}},marker:{...Pa.marker,...de??{},...(de==null?void 0:de.color)==="#fb7081"?{color:Pa.marker.color}:{}}},shapeProps:{...yo,...le.shapeProps??{}},eraserSize:le.eraserSize??Rs})}else s(fo)}catch{s(fo)}L.current=!0},[f]),y.useEffect(()=>{if(!L.current)return;const ne=setTimeout(()=>{try{localStorage.setItem(f,JSON.stringify(d))}catch{}},400);return()=>clearTimeout(ne)},[d,f]);const M=y.useRef(null),k=y.useCallback(ne=>{M.current=ne.id,s(ue=>({...ue,strokes:[...ue.strokes,ne]}))},[]),w=y.useCallback(ne=>{const ue=M.current;!ue||!ne||s(oe=>({...oe,strokes:oe.strokes.map(T=>T.id===ue?{...T,pts:[...T.pts,ne]}:T)}))},[]),U=y.useCallback(ne=>{s(ue=>({...ue,notes:[ne]}))},[]),O=y.useCallback((ne,ue)=>{s(oe=>({...oe,notes:oe.notes.map(T=>T.id===ne?{...T,...ue}:T)}))},[]),K=y.useCallback((ne,ue)=>{s(oe=>{const T=new Set(ne),le=new Set(ue);return{...oe,strokes:T.size?oe.strokes.filter(de=>!T.has(de.id)):oe.strokes,notes:le.size?oe.notes.filter(de=>!le.has(de.id)):oe.notes}})},[]),re=y.useCallback((ne,ue)=>{s(oe=>{const T=new Set(ue);return{...oe,strokes:ne,notes:T.size?oe.notes.filter(le=>!T.has(le.id)):oe.notes}})},[]),ee=y.useCallback(ne=>{s(ue=>({...ue,strokes:ue.strokes.map(oe=>({...oe,pts:oe.pts.map(ne)})),notes:ue.notes.map(oe=>{const T=ne({x:oe.x,y:oe.y});return{...oe,x:T.x,y:T.y}})}))},[]),F=y.useRef(d);F.current=d;const ce=y.useCallback(ne=>{const ue=[],oe=T=>{const le=ne(T);ue.push({...le,orig:T})};return F.current.strokes.forEach(T=>T.pts.forEach(oe)),F.current.notes.forEach(T=>oe({x:T.x,y:T.y})),ue},[]),se=y.useCallback((ne,ue)=>{if(!ne.length)return;const oe={el:null,dx:0,dy:0,orig:{x:0,y:0}};s(T=>{let le=0;const de=()=>ne[le++]??oe;return{...T,strokes:T.strokes.map(ke=>({...ke,pts:ke.pts.map(()=>ue(de()))})),notes:T.notes.map(ke=>{const g=ue(de());return{...ke,x:g.x,y:g.y}})}})},[]),te=y.useCallback(ne=>{s(ue=>({...ue,eraserSize:Math.max(4,Math.min(60,Math.round(ne)))}))},[]),ye=y.useCallback(ne=>{s(ue=>({...ue,grid:ne}))},[]),we=y.useCallback((ne,ue)=>{s(oe=>{const T=oe.penProps??Pa;return{...oe,penProps:{...T,[ne]:{...T[ne],...ue}}}})},[]),Se=y.useCallback(ne=>{s(ue=>({...ue,shapeProps:{...ue.shapeProps??yo,...ne}}))},[]),pe=y.useCallback(()=>{s(ne=>ne.notes.length?{...ne,notes:ne.notes.slice(0,-1)}:ne.strokes.length?{...ne,strokes:ne.strokes.slice(0,-1)}:ne)},[]),xe=y.useCallback(()=>s(fo),[]),ze=y.useMemo(()=>({v:"select",g:"select",c:"curve",k:"link",p:"pencil",t:"text",h:"h1",m:"marker",e:"eraser"}),[]);return y.useEffect(()=>{const ne=ue=>{const oe=ue.target;if(oe&&(oe.isContentEditable||/input|textarea/i.test(oe.tagName)))return;if((ue.ctrlKey||ue.metaKey)&&ue.key.toLowerCase()==="z"){ue.preventDefault(),pe();return}if(ue.ctrlKey||ue.metaKey||ue.altKey)return;const T=ze[ue.key.toLowerCase()];if(T){if(T==="select"&&ue.key.toLowerCase()==="g"){s(le=>({...le,grid:!le.grid}));return}z(T)}};return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[ze,pe]),{ann:d,tool:p,setTool:z,addStroke:k,appendPoint:w,addNote:U,updateNote:O,eraseIds:K,eraseLocal:re,mapAnnotations:ee,captureAnchors:ce,applyAnchors:se,eraserSize:d.eraserSize??Rs,setEraserSize:te,setGrid:ye,setPenSetting:we,setShapeSetting:Se,undo:pe,clear:xe,penProps:d.penProps??Pa,shapeProps:d.shapeProps??yo,canUndo:d.strokes.length>0||d.notes.length>0}},Lp=c=>{let d=(c.closest(".qblock")||c).previousElementSibling;for(;d;){const s=(d.textContent||"").trim();if(/^Questions\s+\d+/i.test(s))return s;d=d.previousElementSibling}return""},V1=(c,f)=>{var s;document.querySelectorAll(".pd-horn-tip").forEach(p=>p.remove());const d=document.createElement("span");d.className="pd-horn-tip",d.textContent=f,(s=c.parentElement)==null||s.appendChild(d),window.setTimeout(()=>d.remove(),1600)},ho=c=>{const f=Array.from(c.querySelectorAll("h2, h3, .question, .blank, .pd-blank")).sort((L,M)=>L.compareDocumentPosition(M)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);let d="";const s={},p=[],z=[];for(const L of f){if(L.tagName==="H2"||L.tagName==="H3"){const M=(L.textContent||"").trim();/Banked|选词/i.test(M)?d="banked":/Matching|长篇/i.test(M)?d="matching":/Part II|Listening|听力|Conversations|Passages|Lectures/i.test(M)?d="listening":/Careful|Reading Comprehension|阅读理解/i.test(M)?d="careful":/Translation|翻译/i.test(M)?d="translation":/Writing|写作/i.test(M)&&(d="writing");continue}if(L.classList.contains("question")){if(d!=="listening"&&d!=="matching"&&d!=="careful")continue;s[d]=(s[d]||0)+1;const M=d==="listening"?25:10;if(s[d]>M)continue;const w=(d==="listening"?1:d==="matching"?36:46)+s[d]-1,U=L.querySelector(".option")?"choice":"match";p.push({el:L,no:w,zone:d,kind:U});continue}if(d==="banked"){const M=Number(L.getAttribute("data-blank")||0)||26+z.length;z.push(M)}}return{list:p,blankNos:z}},Ms=(c,f,d)=>{const s=[];for(Array.from(c.querySelectorAll(":scope > .pd-page")).forEach(F=>{const ce=F.querySelector(":scope > .pd-page-body");if(ce)for(;ce.firstChild;)s.push(ce.removeChild(ce.firstChild));F.remove()});c.firstChild;)s.push(c.removeChild(c.firstChild));let p=s.find(F=>F instanceof HTMLElement&&F.classList.contains("pd-head"));if(!p){p=document.createElement("header"),p.className="pd-head";const F=document.createElement("div");F.className="pd-head-name",F.textContent=f,p.appendChild(F)}const z=[p,...s.filter(F=>F!==p)],L=F=>{const ce=document.createElement("div");return ce.className="pd-page-foot",ce.innerHTML=`<span>${F}</span>`,ce};let M=null;const k=()=>{const F=document.createElement("div");return F.className="pd-page",M=document.createElement("div"),M.className="pd-page-body",F.appendChild(M),c.appendChild(F),F},w=[];let U=k();w.push(U);const O=F=>{M.appendChild(F)},K="h2.pd-part, h3.pd-break-sec",re=F=>F instanceof HTMLElement&&(F.matches(K)||!!F.querySelector(K));if(d==="question"){const F=()=>Array.from(M.children).every(se=>se.matches(K));let ce=!1;for(const se of z)re(se)&&(ce&&!(F()&&M.children.length>0)&&(U=k(),w.push(U)),ce=!0),O(se)}else{const F=se=>{const te=[];for(;se.firstChild;){const ye=se.firstChild;se.removeChild(ye),te.push(ye)}return te};let ce=0;for(;z.length&&ce++<2e4;){const se=z.shift();if(O(se),!(se instanceof HTMLElement)||M.scrollHeight<=M.clientHeight+4)continue;if(Array.from(se.children).length>1&&!/^(TABLE|UL|OL|PRE|BLOCKQUOTE)$/.test(se.tagName)&&!se.classList.contains("question")&&!se.classList.contains("word-bank")&&!se.classList.contains("options")&&!se.classList.contains("pd-head")){const we=F(se);se.remove(),z.unshift(...we);continue}U=k(),w.push(U),O(se)}}const ee=w.filter(F=>{var ce;return(((ce=F.querySelector(".pd-page-body"))==null?void 0:ce.childNodes.length)??0)>0});w.forEach(F=>{ee.includes(F)||F.remove()}),ee.forEach((F,ce)=>F.appendChild(L(ce+1)))},Q1=(c,f)=>{var O;const d=document,s=(O=d.caretRangeFromPoint)==null?void 0:O.call(d,c,f),p=s==null?void 0:s.startContainer,z=(p==null?void 0:p.textContent)||"",L=(s==null?void 0:s.startOffset)??0,M=K=>/[A-Za-z'-]/.test(K);let k=L;for(;k>0&&k<=z.length&&M(z[k-1]);)k--;let w=L;for(;w<z.length&&M(z[w]);)w++;const U={text:z.slice(k,w),range:null};if(p&&p.nodeType===3&&w>k){const K=document.createRange();K.setStart(p,k),K.setEnd(p,w),U.range=K}return U},Z1=(c,f)=>{var U;const d=document,s=(U=d.caretRangeFromPoint)==null?void 0:U.call(d,c,f),p=s==null?void 0:s.startContainer,z=(p==null?void 0:p.textContent)||"",L=(s==null?void 0:s.startOffset)??0;let M=L;for(;M>0&&!/[.!?]\s["')\]]/.test(z.slice(Math.max(0,M-2),M));)M--;let k=L;for(;k<z.length&&!/[.!?]/.test(z[k]);)k++;for(k=Math.min(z.length,k+1);M<k&&/\s/.test(z[M]);)M++;for(;k>M&&/\s/.test(z[k-1]);)k--;const w={text:z.slice(M,k).trim(),range:null};if(p&&p.nodeType===3&&k>M){const O=document.createRange();O.setStart(p,M),O.setEnd(p,k),w.range=O}return w},go=(c,f)=>{const d=c.querySelector(".pd-qnum");if(!d)return;const s=d.parentElement;if(!s)return;let p=s.querySelector(".pd-ans-letter");f?(p||(p=document.createElement("span"),p.className="pd-ans-letter",s.insertBefore(p,d)),p.textContent=f):p&&p.remove()},Rp=new Map,Op=async c=>{var L;const f=c.toLowerCase(),d=Rp.get(f);if(d)return d;const p=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(c)}&langpair=en|zh-CN`)).json(),z=String(((L=p==null?void 0:p.responseData)==null?void 0:L.translatedText)||"");return z&&!/MYMEMORY WARNING/i.test(z)&&Rp.set(f,z),z||"翻译服务暂不可用"},$1=async c=>{if(c.length<=450)return Op(c);const f=[];let d="";for(const p of c.split(new RegExp("(?<=[.!?。！？]\\s)")))(d+p).length>420&&d?(f.push(d),d=p):d+=p;d&&f.push(d);const s=[];for(const p of f.slice(0,40))try{s.push(await Op(p))}catch{s.push("")}return s.join(" ")},qp=({x:c,y:f,children:d})=>{const s=y.useRef(null);return y.useLayoutEffect(()=>{const p=s.current;if(!p)return;const z=()=>{const re=p.offsetHeight,ee=p.offsetWidth/2+8,F=Math.min(Math.max(c,ee),window.innerWidth-ee);p.style.left=`${F}px`,p.style.top=`${f}px`,f-re-14>=8?(p.style.transform="translate(-50%, calc(-100% - 14px))",p.style.maxHeight=`${window.innerHeight-40}px`):(p.style.transform="translate(-50%, 14px)",p.style.maxHeight=`${Math.max(240,window.innerHeight-f-30)}px`)},L=performance.now();let M=0,k=0,w="",U=!1;const O=()=>{U||(U=!0,p.dataset.ready="true")},K=()=>{z();const re=`${p.offsetHeight}|${p.offsetWidth}|${p.style.transform}`;k=re===w?k+1:0,w=re,!U&&(k>=2||performance.now()-L>800)&&O(),k<10&&performance.now()-L<3e3&&(M=requestAnimationFrame(K))};return K(),()=>cancelAnimationFrame(M)},[c,f]),r.jsx("div",{ref:s,className:"pd-picker",children:d})},Hp=c=>c?Array.from(c.querySelectorAll(".word-bank li, .word-bank span, ul li")).map(f=>{var d,s,p;return((s=(d=f.parentElement)==null?void 0:d.textContent)==null?void 0:s.trim())||((p=f.textContent)==null?void 0:p.trim())||""}).filter(f=>/^[A-O][\.、]/.test(f)).flatMap(f=>f.match(/[A-O][\.、]\s*[a-z]+/g)||[]).filter((f,d,s)=>s.indexOf(f)===d):[],K1=[{name:"听力",start:1,count:25},{name:"选词填空",start:26,count:10},{name:"长篇阅读",start:36,count:10},{name:"阅读理解",start:46,count:10},{name:"翻译（汉译英）",start:56,count:1},{name:"写作",start:57,count:1}];function J1(c,f){if(c.pdf&&typeof c.pdf=="string")return c.pdf;const d=c.id||"";if(f==="cet4"){const s=d.match(/^cet4-(20\d{2})-(\d{2})-set(\d)$/i);if(s)return`./assets/papers/cet4/${s[1]}-${s[2]}-S${s[3]}.pdf`}else{const s=d.match(/^cet6-(20\d{2})-(\d{1,2})-set(\d)$/i);if(s)return`./assets/cet6-pdf/CET-6 ${s[1]}.${s[2].padStart(2,"0")} 第${s[3]}套.pdf`}return null}const W1=({paper:c,type:f,onBack:d})=>{const[s,p]=y.useState(null),[z,L]=y.useState(!0),[M,k]=y.useState(null),[w,U]=y.useState(!0);y.useEffect(()=>{let x=!1;p(null),L(!0),k(null),U(!0);const D="./",I=String(c.id).replace(/[^\w.-]/g,"_");return fetch(`${D}contents/${I}.json`).then(ae=>ae.ok?ae.json():null).then(ae=>{x||(p(ae??null),L(!1))}).catch(()=>{x||(p(null),L(!1))}),fetch(`${D}listening/${I}.json`).then(ae=>ae.ok?ae.json():null).then(ae=>{x||(k(ae??null),U(!1))}).catch(()=>{x||(k(null),U(!1))}),()=>{x=!0}},[c.id]);const O=y.useMemo(()=>{var ae,Q;if(s)return s;if(z)return null;const x=c.keyPoints,D=c.year??new Date().getFullYear(),I=Number(c.month??"06");return{title:c.title,date:`${D}年${I}月`,type:f==="cet4"?"四级真题":"六级真题",html:S1({title:c.title,type:f==="cet4"?"四级":"六级",writing:(ae=x==null?void 0:x.writing)==null?void 0:ae[0],translation:(Q=x==null?void 0:x.translation)==null?void 0:Q[0],readingFocus:x==null?void 0:x.reading,paperId:c.id})}},[s,z,c,f]),[K,re]=y.useState(0),[ee,F]=y.useState(!1),[ce,se]=y.useState(null),te=y.useRef(null),ye=y.useRef(void 0),[we,Se]=y.useState(()=>{try{return localStorage.getItem("cet:exam-mode")==="paper"?"paper":"question"}catch{return"question"}}),pe=y.useRef(we);pe.current=we;const xe=y.useCallback(()=>{Se(x=>{const D=x==="paper"?"question":"paper";try{localStorage.setItem("cet:exam-mode",D)}catch{}return D})},[]),ze=y.useRef(null),[ne,ue]=y.useState(()=>{const x=parseFloat(localStorage.getItem("cet:zoom")||"1");return Number.isFinite(x)?Math.min(3,Math.max(.5,x)):1}),oe=y.useRef(ne),T=y.useCallback(x=>{const D=Math.min(3,Math.max(.5,Math.round(x*100)/100));oe.current=D,ue(D);try{localStorage.setItem("cet:zoom",String(D))}catch{}},[]),[le,de]=y.useState(!1),ke=y.useCallback(()=>{const x=ze.current;if(!x)return null;const D=x.getBoundingClientRect();return!D.width||!D.height?null:Array.from(x.querySelectorAll(".exam-content-root > .pd-page")).map(I=>{const ae=I.getBoundingClientRect();return{x:(ae.left-D.left)/D.width,y:(ae.top-D.top)/D.height,w:ae.width/D.width,h:ae.height/D.height}})},[]),g=y.useRef(null),v=y.useCallback(x=>{g.current=ke(),de(x);try{localStorage.setItem("cet:spread",x?"1":"0")}catch{}},[ke]),_=y.useCallback(()=>v(!le),[v,le]);y.useEffect(()=>{const x=new Map;let D=null;const I=()=>{const[q,B]=[...x.values()];return Math.hypot(q.x-B.x,q.y-B.y)||1},ae=q=>{const B=ze.current;return!!B&&q.target instanceof Node&&B.contains(q.target)},Q=q=>{q.pointerType==="mouse"||!ae(q)||(x.set(q.pointerId,{x:q.clientX,y:q.clientY}),x.size===2&&(D={startDist:I(),startZoom:oe.current}))},ie=q=>{!x.has(q.pointerId)||!D||(x.set(q.pointerId,{x:q.clientX,y:q.clientY}),x.size===2&&T(D.startZoom*(I()/D.startDist)))},N=q=>{x.delete(q.pointerId),x.size<2&&(D=null)},H=q=>{!q.ctrlKey||!ae(q)||(q.preventDefault(),T(oe.current*Math.exp(-q.deltaY*.002)))};return window.addEventListener("pointerdown",Q,!0),window.addEventListener("pointermove",ie,{capture:!0}),window.addEventListener("pointerup",N,!0),window.addEventListener("pointercancel",N,!0),window.addEventListener("wheel",H,{passive:!1,capture:!0}),()=>{window.removeEventListener("pointerdown",Q,!0),window.removeEventListener("pointermove",ie,!0),window.removeEventListener("pointerup",N,!0),window.removeEventListener("pointercancel",N,!0),window.removeEventListener("wheel",H,!0)}},[T]);const G=J1(c,f),Z=c.pdfAnswer||null,h=c.audio||null,[C,$]=y.useState([]),[J,he]=y.useState(!1),[W,Ce]=y.useState("answer"),[Je,Te]=y.useState(0),[rt,wt]=y.useState(null),[at,tn]=y.useState({}),[Nt,Kn]=y.useState({}),[Zt,el]=y.useState({key:!1,mine:!1,cmp:!1}),[tl,Bl]=y.useState({}),[Yl,nl]=y.useState(!0),[Qi,za]=y.useState(!1),[Mt,bo]=y.useState({}),[Lt,_n]=y.useState(null),[Tt,Na]=y.useState(null),[al,vn]=y.useState(null),Gl=x=>{const D=[];for(const I of Array.from(x.getClientRects()))I.width<1||I.height<1||D.push({x:I.left,y:I.top,w:I.width,h:I.height});return D};y.useEffect(()=>{if(!Tt||Tt.result!==null)return;let x=!0;return $1(Tt.text).then(D=>{x&&Na(I=>I&&I.text===Tt.text?{...I,result:D}:I)}).catch(()=>{x&&Na(D=>D&&{...D,result:"翻译服务暂不可用"})}),()=>{x=!1}},[Tt]);const Jn=J?"panel":"popup",St=y.useRef("popup");y.useEffect(()=>{St.current=Jn},[Jn]);const[Rt,bt]=y.useState(null),[Zi,Xl]=y.useState(""),[vo,wn]=y.useState(!1),[Wn,Ea]=y.useState("up"),[Ot,Fn]=y.useState(!1),[In,$i]=y.useState("up"),[Vl,_a]=y.useState(0),[Pn,Ql]=y.useState(!0),[Ki,ll]=y.useState(!1),[nn,il]=y.useState(null),Zl=130;y.useEffect(()=>{if(!Ot)return;const x=window.setInterval(()=>_a(D=>D+1),1e3);return()=>window.clearInterval(x)},[Ot]);const $l=x=>{const D=Math.floor(x/60),I=x%60;return`${String(D).padStart(2,"0")}:${String(I).padStart(2,"0")}`},Ji=Ki?"--:--":$l(In==="up"?Vl:Math.max(0,Zl*60-Vl)),Sn=()=>{Ot?Ql(x=>!x):wn(!0)},ut=y.useRef(null),Et=x=>{ut.current={px:x.clientX,py:x.clientY,ox:(nn==null?void 0:nn.x)??0,oy:(nn==null?void 0:nn.y)??0},x.currentTarget.setPointerCapture(x.pointerId)},ea=x=>{const D=ut.current;D&&il({x:D.ox+x.clientX-D.px,y:D.oy+x.clientY-D.py})},Kl=()=>{ut.current=null},Wi=x=>{try{Xl(localStorage.getItem(x.storeKey)||"")}catch{Xl("")}bt(x)},wo=()=>{if(Rt){try{localStorage.setItem(Rt.storeKey,Zi)}catch{}bt(null)}},{ann:Fi,tool:an,setTool:Jl,addStroke:kn,appendPoint:ta,addNote:Ma,updateNote:na,eraseIds:pt,eraseLocal:Ii,mapAnnotations:Wl,captureAnchors:jn,applyAnchors:Mn,eraserSize:Pi,setEraserSize:er,undo:tr,setPenSetting:So,setShapeSetting:rl,penProps:Cn,shapeProps:ln,canUndo:qt}=X1(c.id);y.useLayoutEffect(()=>{const x=g.current;g.current=null;const D=ke();if(!(x!=null&&x.length)||!(D!=null&&D.length)||x.length!==D.length)return;const I=(ae,Q,ie)=>{let N=-1;for(let B=0;B<ae.length;B++){const P=ae[B];if(Q>=P.x&&Q<=P.x+P.w&&ie>=P.y&&ie<=P.y+P.h){N=B;break}}if(N>=0)return N;let H=0,q=1/0;return ae.forEach((B,P)=>{const ge=B.x+B.w/2,Le=B.y+B.h/2,Re=(ge-Q)**2+(Le-ie)**2;Re<q&&(q=Re,H=P)}),H};Wl(ae=>{const Q=ae.x/$e,ie=ae.y/$e,N=I(x,Q,ie),H=x[N],q=D[N],B=H.w?(Q-H.x)/H.w:0,P=H.h?(ie-H.y)/H.h:0;return{x:(q.x+B*q.w)*$e,y:(q.y+P*q.h)*$e}})},[le,ke,Wl]);const Fl=y.useRef(we),nr=y.useRef(c.id);y.useLayoutEffect(()=>{var q;const x=Fl.current!==we,D=nr.current!==c.id;if(Fl.current=we,nr.current=c.id,!x||D)return;const I=te.current;if(!I||!O)return;const ae=(q=ze.current)==null?void 0:q.querySelector(".pd-anno-svg");if(!ae){Ms(I,O.title,we);return}const Q=B=>{const P=ae.getBoundingClientRect();return{x:P.left+B.x/$e*P.width,y:P.top+B.y/$e*P.height}},ie=(B,P)=>{const ge=ae.getBoundingClientRect();return{x:(B-ge.left)/ge.width*$e,y:(P-ge.top)/ge.height*$e}},N=".pd-page, .pd-page-body, .pd-page-foot, .pd-anno-svg, .pd-grid-bg",H=jn(B=>{const P=Q(B);let ge=null;for(const Re of document.elementsFromPoint(P.x,P.y))if(Re!==ae&&!(Re instanceof Element&&Re.matches(N))&&I.contains(Re)){ge=Re;break}if(!ge){let Re=null,tt=1/0;I.querySelectorAll("p, h2, h3, .option, .question, .blank, li, strong").forEach(Oe=>{const De=Oe.getBoundingClientRect(),qe=Math.max(De.left-P.x,0,P.x-De.right),Ae=Math.max(De.top-P.y,0,P.y-De.bottom),Ee=qe*qe+Ae*Ae;Ee<tt&&(tt=Ee,Re=Oe)}),ge=Re}if(!ge)return{el:null,dx:0,dy:0};const Le=ge.getBoundingClientRect();return{el:ge,dx:P.x-Le.left,dy:P.y-Le.top}});Ms(I,O.title,we),Mn(H,B=>{if(!B.el||!B.el.isConnected)return B.orig;const P=B.el.getBoundingClientRect();return ie(P.left+B.dx,P.top+B.dy)})},[we,s,jn,Mn]),y.useEffect(()=>{an!=="select"&&vn(null)},[an]);const ol=y.useRef("select");y.useEffect(()=>{ol.current=an},[an]);const Il=y.useRef(Cn);y.useEffect(()=>{Il.current=Cn},[Cn]);const cl=y.useCallback((x,D)=>{var Xe;const I=te.current;if(!I||D.length<2)return;const ae=(I.closest(".pd-sheet")||I).querySelector(".pd-anno-svg");if(!ae)return;const Q=ae.getBoundingClientRect(),ie=Q.width||1,N=Q.height||1;let H=1/0,q=-1/0,B=1/0,P=-1/0;for(const ve of D)ve.x<H&&(H=ve.x),ve.x>q&&(q=ve.x),ve.y<B&&(B=ve.y),ve.y>P&&(P=ve.y);const ge=Il.current.highlight.color,Le=x==="highlight"?xo(ge,.38):ge,Re=[],tt=document.createTreeWalker(I,NodeFilter.SHOW_TEXT);let Oe=tt.nextNode();for(;Oe;){if((Oe.textContent||"").trim()){let Ve=Oe.parentElement;for(;Ve&&Ve!==I&&!Ve.classList.contains("pd-page");)Ve=Ve.parentElement;if(Ve){const rn=parseFloat(getComputedStyle(Oe.parentElement).fontSize)||15,Ht=document.createRange();Ht.selectNodeContents(Oe);for(const Ut of Array.from(Ht.getClientRects()))Ut.width<1||Ut.height<1||Re.push({left:Ut.left,right:Ut.right,top:Ut.top,bottom:Ut.bottom,fs:rn});(Xe=Ht.detach)==null||Xe.call(Ht)}}Oe=tt.nextNode()}const De=8,qe=[];for(const ve of Re){if(ve.bottom<B||ve.top>P)continue;const Ve=Math.max(ve.left,H),rn=Math.min(ve.right,q);rn-Ve<De||qe.push({x0:Ve,x1:rn,top:ve.top,bottom:ve.bottom,fs:ve.fs})}if(!qe.length)return;qe.sort((ve,Ve)=>ve.top-Ve.top||ve.x0-Ve.x0);const Ae=[];for(const ve of qe){const Ve=Ae[Ae.length-1];Ve&&Math.abs(Ve.top-ve.top)<=3&&Math.abs(Ve.bottom-ve.bottom)<=3?(Ve.x0=Math.min(Ve.x0,ve.x0),Ve.x1=Math.max(Ve.x1,ve.x1),Ve.fs=Math.max(Ve.fs,ve.fs)):Ae.push({...ve})}const Ee=Ae.map((ve,Ve)=>{let rn,Ht;if(x==="highlight"){const Ut=Math.min(ve.bottom-ve.top,ve.fs*1.05);rn=ve.top+(ve.bottom-ve.top-Ut)/2+ve.fs*.08,Ht=rn+Ut}else rn=Ht=ve.bottom-ve.fs*.12;return{id:`snap-${Date.now()}-${Ve}-${Math.random().toString(36).slice(2,7)}`,tool:x,pts:[{x:(ve.x0-Q.left)/ie*1e3,y:(rn-Q.top)/N*1e3},{x:(ve.x1-Q.left)/ie*1e3,y:(Ht-Q.top)/N*1e3}],color:Le,width:0}});for(const ve of Ee)kn(ve)},[kn]),ar=y.useRef(()=>{}),kt=y.useCallback((x,D)=>{const I=Array.from(x.querySelectorAll(".option")),ae=I.indexOf(D);if(ae<0)return;I.forEach(N=>N.classList.remove("selected")),D.classList.add("selected");const Q=String.fromCharCode(65+ae);x.setAttribute("data-ans",Q),go(x,Q);const ie=te.current;if(ie){const N={};ie.querySelectorAll(".question").forEach((H,q)=>{const B=H.querySelector(".option.selected");B&&(N[q]=Array.from(H.querySelectorAll(".option")).indexOf(B))});try{localStorage.setItem(`cet:answer:${c.id}`,JSON.stringify(N))}catch{}}ar.current()},[c.id]),Pl=y.useRef(kt);Pl.current=kt,y.useEffect(()=>{F(!1),se(null),re(0)},[c.id]),y.useEffect(()=>{let x=0;const D=()=>{x=0;const ae=te.current;if(!ae)return;const Q=Array.from(ae.querySelectorAll("h2")),ie=Q.find(P=>/Part II|Listening/i.test(P.textContent||""));if(!ie){nl(!0);return}const N=Q.find(P=>/Part III|Reading Comprehension/i.test(P.textContent||"")),H=ie.getBoundingClientRect(),q=N?N.getBoundingClientRect():H,B=window.innerHeight;nl(H.top<B-40&&q.bottom>40)},I=()=>{x||(x=requestAnimationFrame(D))};return window.addEventListener("scroll",I,!0),window.addEventListener("resize",I),D(),()=>{window.removeEventListener("scroll",I,!0),window.removeEventListener("resize",I),x&&cancelAnimationFrame(x)}},[s]),y.useEffect(()=>{const x=te.current;if(!x||!O)return;x.innerHTML=s1(O.html);{const N={};x.querySelectorAll(".question[data-answer]").forEach(H=>{var P;const q=(((P=H.querySelector("strong"))==null?void 0:P.textContent)||"").match(/\d+/),B=H.getAttribute("data-answer");q&&B&&(N[Number(q[0])]=B)}),x.querySelectorAll(".blank[data-answer]").forEach(H=>{const q=Number(H.getAttribute("data-blank")),B=H.getAttribute("data-answer");q&&B&&(N[q]=B)}),Bl(N)}x.querySelectorAll("div").forEach(N=>{const H=N.getAttribute("style")||"";if(H.includes("linear-gradient")||H.includes("backdrop-filter"))if(N.querySelector("h2")){const q=N.cloneNode(!0);q.querySelectorAll("h2").forEach(P=>P.remove());const B=(q.textContent||"").replace(/•/g,"·").trim();if(B){const P=document.createElement("p");P.className="pd-structure",P.textContent=B,N.replaceWith(P)}else N.remove()}else N.remove()}),x.querySelectorAll("h2, h3, h4").forEach(N=>{const H=N.textContent||"",q=H.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").trim();if(q!==H){const B=N.querySelector("strong");B&&B.childNodes.length===1?B.textContent=q:N.textContent=q}N.removeAttribute("style")}),x.querySelectorAll("p, li, ul, span, section").forEach(N=>{N.removeAttribute("style")}),x.querySelectorAll("i.fas, i.far, i.fab").forEach(N=>N.remove()),x.querySelectorAll(".question").forEach(N=>{var q,B;if((q=N.parentElement)!=null&&q.classList.contains("qblock"))return;const H=document.createElement("div");H.className="qblock",(B=N.parentElement)==null||B.insertBefore(H,N),H.appendChild(N)}),x.querySelectorAll("p").forEach(N=>{const H=N.querySelector("strong");H&&/^Directions[:：]?\s*$/.test((H.textContent||"").trim())&&N.classList.add("pd-dir")});const D=N=>/writing/i.test(N)?[{label:"我的作文",kind:"essay"}]:/listening/i.test(N)?[{label:"播放听力",kind:"listen"}]:/translation/i.test(N)?[{label:"我的翻译",kind:"translation"},{label:"翻译范文",kind:"fanwen"}]:[];x.querySelectorAll("h2").forEach(N=>{const q=(N.textContent||"").trim().match(/^(Part\s+[IVX0-9]+)\s+(.+?)\s*\(([^)]+)\)\s*$/i);if(!q)return;const[,B,P,ge]=q;N.classList.add("pd-part");const Le=D(P.trim());N.innerHTML=`<span class="pd-part-no">${B}</span>`+(Le.length?`<span class="pd-part-badges">${Le.map(Re=>`<button type="button" class="pd-badge" data-kind="${Re.kind}">${Re.label}</button>`).join("")}</span>`:"")+`<span class="pd-part-name">${P.trim()}</span><span class="pd-part-time">(${ge})</span>`});{let N="";x.querySelectorAll("h2, h3").forEach(H=>{const q=(H.textContent||"").trim();if(H.tagName==="H2"){N=q;return}/^\s*Section\s+[A-Z]/i.test(q)&&(H.classList.add("pd-sec"),/reading\s+comprehension/i.test(N)&&H.classList.add("pd-break-sec"))})}x.querySelectorAll("h2").forEach(N=>{if(!/Writing/i.test(N.textContent||""))return;let H=N.nextElementSibling;for(;H&&H.tagName!=="H2";){const q=H.nextElementSibling;if(H.tagName==="DIV"&&/写作提示/.test(H.textContent||""))H.remove();else if(H.tagName==="P"&&/Directions/i.test(H.textContent||"")){const B=H;let P=B.innerHTML.replace(/[“"][^”"]*[”"]/g,Le=>`<strong>${Le}</strong>`).replace(/\b(150|200)\b(?=\s*words)/g,"<u>$1</u>");const ge=new RegExp("(?:^|(?<=[.!?]\\s))([^<>]+?[.!?])\\s*$").exec(P);if(ge&&ge[1].trim().length>10){const Le=ge[1],Re=ge.index+ge[0].indexOf(Le);P=P.slice(0,Re);const tt=document.createElement("p");tt.className="pd-indent",tt.innerHTML=Le,B.after(tt)}B.innerHTML=P}H=q}}),x.querySelectorAll("h3").forEach(N=>{/词库|Word Bank/i.test(N.textContent||"")&&N.closest("div")&&N.remove()}),x.querySelectorAll("p").forEach(N=>{const H=N.querySelector("strong");if(!H||N.children.length!==1)return;const q=(N.textContent||"").trim();q===(H.textContent||"").trim()&&(!q||q.length>80||/^Passage\s+(One|Two)$/i.test(q)||/^Questions\b/i.test(q)||/^\d+\.$/.test(q)||/[：:]$/.test(q)||N.classList.add("pd-article-title"))}),x.querySelectorAll(".question").forEach(N=>{const H=N.querySelector("p, h3");if(!H)return;const q=H.querySelector("strong"),B=((q==null?void 0:q.textContent)||"").match(/^\s*(\d{1,2})\s*[\.、]?\s*$/);q&&B&&(q.classList.add("pd-qnum"),q.textContent=B[1])}),x.querySelectorAll(".options").forEach(N=>{Array.from(N.querySelectorAll(".option")).reduce((B,P)=>Math.max(B,(P.textContent||"").length),0)>42&&N.classList.add("single")}),Ms(x,(s==null?void 0:s.title)??c.title,pe.current);const I=localStorage.getItem(`cet:answer:${c.id}`);if(I)try{const N=JSON.parse(I);Object.entries(N).forEach(([H,q])=>{const B=x.querySelectorAll(".question")[Number(H)];if(!B)return;const P=B.querySelectorAll(".option");if(P[q]){P[q].classList.add("selected");const ge=String.fromCharCode(65+Number(q));B.setAttribute("data-ans",ge),go(B,ge)}})}catch{}const ae=localStorage.getItem(`cet:blank:${c.id}`);if(ae)try{const N=JSON.parse(ae);Object.entries(N).forEach(([H,q])=>{const B=x.querySelector(`.blank[data-blank="${H}"]`);B&&(B.textContent=`${H} ${q}`,B.classList.add("filled"))})}catch{}const Q=()=>$t(),ie=N=>{var ge,Le,Re,tt,Oe;const H=N.target;if(ol.current==="select"&&!H.closest("button, a, .option, .pd-qnum, .blank, .pd-blank, .pd-note, .pd-card, .pd-float-bar, .pd-timer-bar")){const De=(((ge=window.getSelection())==null?void 0:ge.toString())||"").trim(),qe=localStorage.getItem("cet:trans:mode")||"word";let Ae="";if(De.length>1){Ae=De;const Ee=window.getSelection(),Xe=Ee&&Ee.rangeCount?Ee.getRangeAt(0):null,ve=Xe?Gl(Xe):[];vn(ve.length?{kind:"sentence",rects:ve}:null)}else if(qe==="word"){const Ee=Q1(N.clientX,N.clientY);Ae=Ee.text;const Xe=Ee.range?Gl(Ee.range):[];vn(Xe.length?{kind:"word",rects:Xe}:null)}else if(qe==="sentence"){const Ee=Z1(N.clientX,N.clientY);Ae=Ee.text;const Xe=Ee.range?Gl(Ee.range):[];vn(Xe.length?{kind:"sentence",rects:Xe}:null)}else qe==="paragraph"?(Ae=((Re=(Le=H.closest("p"))==null?void 0:Le.textContent)==null?void 0:Re.trim())||"",vn(null)):(Ae=((tt=x.innerText)==null?void 0:tt.trim())||"",vn(null));Ae&&Ae.length<=12e3?Na({text:Ae,x:N.clientX,y:N.clientY,result:null}):(Na(null),vn(null))}if(H.closest(".pd-badge")){const De=H.closest(".pd-badge").dataset.kind;De==="essay"?Wi({kind:"essay",title:"我的作文",placeholder:"开始写作...",storeKey:`cet:essay:${c.id}`}):De==="translation"?Wi({kind:"translation",title:"我的翻译",placeholder:"开始翻译...",storeKey:`cet:translation:${c.id}`}):window.alert("该功能即将上线");return}const q=H.closest(".pd-qnum");if(q){if(pe.current==="paper")return;const De=q.closest(".question"),qe=Array.from(x.querySelectorAll(".question")),Ae=De?qe.indexOf(De):-1;if(Ae>=0)if(St.current==="panel"){_n(null);const{list:Ee}=ho(x),Xe=Ee.find(ve=>ve.el===De);Te(Xe?Ee.indexOf(Xe):Ae),Ce("question"),he(!0)}else{const Ee=q.getBoundingClientRect();wt({kind:"question",qi:Ae,x:Ee.left+Ee.width/2,y:Ee.bottom})}return}const B=H.closest(".blank, .pd-blank");if(B){if(pe.current==="paper")return;const De=B.getBoundingClientRect(),qe=B.closest(".question"),Ae=Number(B.getAttribute("data-blank"))||Number(((Oe=qe==null?void 0:qe.querySelector(".pd-qnum"))==null?void 0:Oe.textContent)||0);St.current==="panel"?(_n(Ae),Ce("question"),he(!0)):wt({kind:"blank",blankNo:Ae,x:De.left+De.width/2,y:De.bottom});return}H.closest(".option")};return x.addEventListener("click",ie),Q(),()=>{x.removeEventListener("click",ie),ye.current&&clearTimeout(ye.current)}},[s,O]);const ei=y.useRef(!1);y.useEffect(()=>{if(!O||ei.current||(ei.current=!0,localStorage.getItem("cet:spread")!=="1"))return;const x=requestAnimationFrame(()=>v(!0));return()=>cancelAnimationFrame(x)},[s,v]),y.useEffect(()=>{const x=te.current;if(!x||!O)return;const D=(M==null?void 0:M.questionTimes)??{},I=[],ae=Array.from(x.querySelectorAll("p, strong, h3, h4, div")).filter(ie=>/Questions\s+\d+\s+to\s+\d+[^<]*you have just heard/i.test(ie.textContent||"")),Q=ae.filter(ie=>!ae.some(N=>N!==ie&&ie.contains(N)));return Q.forEach(ie=>{const N=(ie.textContent||"").match(/Questions\s+(\d+)\s+to\s+\d+/i);if(!N)return;const H=Number(N[1]),q=D[H],B=document.createElement("button");B.type="button",B.className="pd-horn",B.dataset.no=String(H),B.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/></svg>',q!=null?(B.title=`播放第 ${H} 题开始的听力`,B.addEventListener("click",P=>{P.stopPropagation(),P.preventDefault(),window.dispatchEvent(new CustomEvent("cet:lp2-jump",{detail:{no:H,time:q}}))})):(B.title=`第 ${H} 题听力（音频待导入）`,B.addEventListener("click",P=>{P.stopPropagation(),P.preventDefault(),V1(B,"音频待导入")})),ie.classList.add("has-horn"),ie.prepend(B),I.push(B)}),()=>{I.forEach(ie=>ie.remove()),Q.forEach(ie=>ie.classList.remove("has-horn"))}},[M,s]);const $t=y.useCallback(()=>{const x=te.current;if(!x)return;const{list:D,blankNos:I}=ho(x),ae={};let Q={},ie={};try{Q=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}")}catch{}try{ie=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}")}catch{}D.forEach(({el:H,no:q,kind:B})=>{if(B==="choice"){const P=H.querySelector(".option.selected");if(P){const ge=Array.from(H.querySelectorAll(".option")).indexOf(P);ae[q]=String.fromCharCode(65+ge)}}else{const P=Q[String(q)];P&&(ae[q]=P)}}),I.forEach(H=>{const q=ie[String(H)];q&&(ae[H]=q)});const N=K1.map(H=>{const q=[];for(let B=H.start;B<H.start+H.count;B++)ae[B]&&q.push(B);return{name:H.name,start:H.start,count:H.count,done:q}});tn(ae),re(N.reduce((H,q)=>H+q.done.length,0)),$(N)},[c.id]);y.useEffect(()=>{ar.current=$t},[$t]);const Tn=()=>{F(!0);let x=0,D=0;const I={},ae=te.current;if(ae){let Q={},ie={};try{Q=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}")}catch{}try{ie=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}")}catch{}ae.querySelectorAll(".question").forEach(N=>{var tt;const H=N.getAttribute("data-answer"),q=N.querySelector(".option.selected");if(N.classList.remove("is-right","is-wrong"),!H)return;D+=1;const B=(((tt=N.querySelector("strong"))==null?void 0:tt.textContent)||"").match(/\d+/),P=B?Number(B[0]):0;let ge=q?String.fromCharCode(65+Array.from(N.querySelectorAll(".option")).indexOf(q)):"";!ge&&P&&Q[String(P)]&&(ge=Q[String(P)]),ge&&(I[P]=ge),ge&&ge===H?(x+=1,N.classList.add("is-right")):N.classList.add("is-wrong");const Le=Array.from(N.querySelectorAll(".option"));Le.forEach(Oe=>Oe.classList.remove("answer-key"));const Re=Le.find(Oe=>{var De;return(((De=Oe.querySelector("strong"))==null?void 0:De.textContent)||"").trim().replace(/[).]/g,"")===H});Re==null||Re.classList.add("answer-key")}),ae.querySelectorAll(".blank[data-answer]").forEach(N=>{const H=N.getAttribute("data-answer"),q=N.getAttribute("data-blank");if(N.classList.remove("is-right","is-wrong"),!H||!q)return;D+=1;const B=ie[q]||"";B&&(I[Number(q)]=B),B&&B===H?(x+=1,N.classList.add("is-right")):N.classList.add("is-wrong")})}se({right:x,judged:D});try{const Q=JSON.parse(localStorage.getItem("cet:history")||"[]");Q.unshift({id:c.id,title:c.title,ts:Date.now(),right:x,judged:D,snap:I}),localStorage.setItem("cet:history",JSON.stringify(Q.slice(0,20)))}catch{}},lr=()=>{if(!window.confirm("确定清空本卷全部作答记录？"))return;["cet:answer:","cet:blank:","cet:match:"].forEach(D=>{try{localStorage.removeItem(D+c.id)}catch{}});const x=te.current;x&&(x.querySelectorAll(".option.selected").forEach(D=>D.classList.remove("selected")),x.querySelectorAll(".question").forEach(D=>D.classList.remove("is-right","is-wrong")),x.querySelectorAll(".option.answer-key").forEach(D=>D.classList.remove("answer-key")),x.querySelectorAll(".question").forEach(D=>{go(D,null),D.removeAttribute("data-ans"),D.removeAttribute("data-picked")}),x.querySelectorAll(".blank[data-blank]").forEach(D=>{D.textContent=D.getAttribute("data-blank")||"",D.classList.remove("filled","is-right","is-wrong")})),Kn({}),el({key:!1,mine:!1,cmp:!1}),za(!1),F(!1),$t()},ir=x=>{const D=te.current;if(!D)return;D.querySelectorAll(".option.selected").forEach(Q=>Q.classList.remove("selected")),D.querySelectorAll(".question").forEach(Q=>Q.classList.remove("is-right","is-wrong")),D.querySelectorAll(".option.answer-key").forEach(Q=>Q.classList.remove("answer-key")),D.querySelectorAll(".question").forEach(Q=>{go(Q,null),Q.removeAttribute("data-ans"),Q.removeAttribute("data-picked")}),D.querySelectorAll(".blank[data-blank]").forEach(Q=>{Q.classList.remove("filled","is-right","is-wrong"),Q.textContent=Q.getAttribute("data-blank")||""}),D.querySelectorAll(".question").forEach(Q=>{var q,B;const ie=(((q=Q.querySelector("strong"))==null?void 0:q.textContent)||"").match(/\d+/),N=ie?Number(ie[0]):0,H=x[N];if(H){const P=Q.querySelectorAll(".option"),ge=H.charCodeAt(0)-65;(B=P[ge])==null||B.classList.add("selected")}});const I={},ae={};D.querySelectorAll(".blank[data-blank]").forEach(Q=>{const ie=Q.getAttribute("data-blank")||"",N=x[Number(ie)];N&&(Q.textContent=`${ie} ${N}`,Q.classList.add("filled"),I[ie]=N)}),Object.entries(x).forEach(([Q,ie])=>{const N=Number(Q);N>=36&&N<=45&&(ae[Q]=ie)});try{const Q={};D.querySelectorAll(".question").forEach((ie,N)=>{const H=ie.querySelector(".option.selected");H&&(Q[String(N)]=Array.from(ie.querySelectorAll(".option")).indexOf(H))}),localStorage.setItem(`cet:answer:${c.id}`,JSON.stringify(Q)),localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(I)),localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(ae))}catch{}$t(),Tn(),za(!1)};return(s==null?void 0:s.title)??c.title,r.jsxs("div",{className:`pd-root${we==="paper"?" is-paper-mode":""}`,"data-card":J?"open":"closed",children:[r.jsxs("div",{className:"pd-toolbar",children:[r.jsxs("div",{className:"pd-left",children:[r.jsx("button",{className:"pd-back",onClick:d,title:"返回真题列表","aria-label":"返回真题列表",children:r.jsx(P2,{width:16,height:16})}),r.jsx("button",{type:"button",className:"pd-alarm",onClick:Sn,title:Ot?Pn?"收起计时":"显示计时":"计时","aria-label":"计时",children:"⏱"}),r.jsx("div",{className:`pd-listening${Yl?"":" is-hidden"}`,children:w?r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频加载中",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频加载中…"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]}):M?r.jsx(c1,{meta:M,title:`听力音频 · ${c.title}`}):r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频待导入",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频待导入"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]})})]}),r.jsxs("div",{className:"pd-corner",children:[G&&r.jsx(Ts,{onClick:()=>{const[x]=Xi(G);window.open(x,"_blank","noopener")},icon:r.jsx(Np,{width:15,height:15}),label:"试卷PDF"}),Z&&r.jsx(Ts,{onClick:()=>{const[x]=Xi(Z);window.open(x,"_blank","noopener")},icon:r.jsx(Np,{width:15,height:15}),label:"答案PDF"}),h&&r.jsx(Ts,{onClick:()=>{const[x]=Xi(h);window.open(x,"_blank","noopener")},icon:r.jsx("span",{style:{fontSize:15,lineHeight:1},children:"🎧"}),label:"听力音频"})]})]}),z?r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"正在载入试卷…"})}):O?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:F1}),r.jsxs("div",{className:`pd-sheet${le?" is-spread":""}`,ref:ze,style:{zoom:ne},children:[r.jsx(z1,{ann:Fi,tool:an,penProps:Cn,shapeProps:ln,onAddStroke:kn,onAppendPoint:ta,onSnap:cl,onEraseIds:pt,onEraseLocal:Ii,eraserSize:Pi,onAddNote:Ma,onUpdateNote:na}),r.jsx("div",{className:"exam-content-root",ref:te})]})]}):r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"暂无该试卷的内容数据"})}),C.length>0&&r.jsxs("div",{className:"pd-card","data-collapsed":J?"false":"true",children:[r.jsxs("div",{className:"pd-card-side",children:[r.jsxs("button",{type:"button",className:"pd-card-progress",title:W==="question"?"切换到答题卡":"切换到题目",onClick:()=>Ce(x=>x==="question"?"answer":"question"),children:[K,"/",C.reduce((x,D)=>x+D.count,0)]}),r.jsx("button",{type:"button",className:"pd-card-toggle",onClick:()=>he(x=>!x),title:J?"收起答题卡":"展开答题卡","aria-label":J?"收起答题卡":"展开答题卡",children:J?"›":"‹"}),W==="answer"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`pd-card-tool${Zt.key?" on":""}`,title:"显示正确答案（点击一键全部显示/隐藏）","aria-label":"显示正确答案",onClick:()=>{const x=!Zt.key;el(D=>({...D,key:x}))},children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13",children:[r.jsx("path",{d:"M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",fill:"currentColor"}),!Zt.key&&r.jsx("line",{x1:"4",y1:"20",x2:"20",y2:"4",stroke:"currentColor",strokeWidth:"2"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Zt.mine?" on":""}`,title:"题号后显示我的作答","aria-label":"显示我的作答",onClick:()=>el(x=>({...x,mine:!x.mine})),children:"我"}),r.jsx("button",{type:"button",className:`pd-card-tool${Zt.cmp?" on":""}`,title:"交卷自测（判分）：对绿框 / 错红框","aria-label":"交卷自测",onClick:()=>{const x=!Zt.cmp;el(D=>({...D,cmp:x})),x&&Tn()},children:"交"}),r.jsx("button",{type:"button",className:"pd-card-tool",title:"清空本卷作答记录（重新作答）","aria-label":"删除作答记录",onClick:lr,children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13","aria-hidden":"true",children:[r.jsx("path",{d:"M4 7h16M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2.5 0v11.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V7",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Qi?" on":""}`,title:"查看作答记录与对错情况","aria-label":"作答记录",onClick:()=>za(x=>!x),children:"录"})]})]}),r.jsxs("div",{className:"pd-card-panel",children:[W==="question"&&r.jsx("div",{className:"pd-card-question",children:Lt!==null?(()=>{const x=te.current,D=x==null?void 0:x.querySelector(`.blank[data-blank="${Lt}"], .pd-blank`),I=Hp(x),ae=at[Lt];return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["选项 ",Lt]})}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(Q,ie)=>String.fromCharCode(65+ie)).map(Q=>r.jsx("button",{type:"button",className:`pd-picker-circle${ae===Q?" on":""}`,onClick:()=>{D&&(D.textContent=`${Lt} ${Q}`,D.classList.add("filled"));try{const ie=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}");ie[Lt]=Q,localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(ie))}catch{}$t()},children:Q},Q))}),I.length>0&&r.jsx("ul",{className:"pd-picker-words",children:I.map(Q=>r.jsx("li",{children:Q},Q))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt<=26,onClick:()=>_n(Lt-1),"aria-label":"上一空",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(Q,ie)=>r.jsx("span",{className:26+ie===Lt?"on":""},ie))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt>=35,onClick:()=>_n(Lt+1),"aria-label":"下一空",children:"›"})]})]})})():(()=>{var ge,Le,Re,tt;const x=te.current,{list:D}=ho(x||document.createElement("div")),I=D[Je];if(!I)return null;const{el:ae,no:Q,kind:ie}=I;if(ie==="match"){const Oe=((Le=(ge=ae.querySelector("p"))==null?void 0:ge.textContent)==null?void 0:Le.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",De=at[Q],qe=[];{let Ae=(ae.closest(".qblock")||ae).previousElementSibling,Ee=null;for(;Ae;){if(Ae.tagName==="H3"){Ee=Ae;break}if(Ae.tagName==="H2")break;Ae=Ae.previousElementSibling}let Xe=(Ee==null?void 0:Ee.nextElementSibling)??null;for(;Xe&&Xe.tagName!=="H2";){if(Xe.tagName==="P"){const ve=Xe.querySelector("strong"),Ve=/^([A-P])\.$/.exec(((ve==null?void 0:ve.textContent)||"").trim());Ve&&qe.push({letter:Ve[1],text:(Xe.textContent||"").replace(/^[A-N]\./,"").trim().slice(0,64),el:Xe})}Xe=Xe.nextElementSibling}}return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",Q," 题"]})}),qe.length>0&&r.jsx("ul",{className:"pd-match-paras",children:qe.map(Ae=>r.jsxs("li",{onClick:()=>Ae.el.scrollIntoView({behavior:"smooth",block:"center"}),children:[r.jsx("b",{children:Ae.letter}),r.jsxs("span",{children:[Ae.text,"…"]})]},Ae.letter))}),Oe&&r.jsx("p",{className:"pd-picker-stem",children:Oe}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:16},(Ae,Ee)=>String.fromCharCode(65+Ee)).map(Ae=>r.jsx("button",{type:"button",className:`pd-picker-circle${De===Ae?" on":""}`,onClick:()=>{try{const Ee=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}");Ee[Q]=Ae,localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(Ee))}catch{}$t()},children:Ae},Ae))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Q<=36,onClick:()=>Te(Je-1),"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(Ae,Ee)=>r.jsx("span",{className:36+Ee===Q?"on":""},Ee))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Q>=45,onClick:()=>Te(Je+1),"aria-label":"下一题",children:"›"})]})]})}const N=Lp(ae),H=((tt=(Re=ae.querySelector("p"))==null?void 0:Re.textContent)==null?void 0:tt.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",q=Array.from(ae.querySelectorAll(".option")),B=D.filter(Oe=>Lp(Oe.el)===N).map(Oe=>Oe.no),P=B.indexOf(Q);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",Q," 题"]})}),H&&r.jsx("p",{className:"pd-picker-stem",children:H}),r.jsx("div",{className:"pd-picker-opts",children:q.map((Oe,De)=>{const qe=String.fromCharCode(65+De),Ae=Oe.classList.contains("selected");return r.jsxs("button",{type:"button",className:`pd-picker-opt${Ae?" on":""}`,onClick:()=>{kt(ae,Oe)},children:[r.jsx("span",{className:"pd-picker-letter",children:qe}),r.jsx("span",{className:"pd-picker-text",children:(Oe.textContent||"").replace(/^[A-D]\)\s*/,"").trim()})]},De)})}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:P<=0,onClick:()=>{const Oe=B[P-1],De=D.find(qe=>qe.no===Oe);De&&Te(D.indexOf(De))},"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:B.map(Oe=>r.jsx("span",{className:Oe===Q?"on":""},Oe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:P>=B.length-1,onClick:()=>{const Oe=B[P+1],De=D.find(qe=>qe.no===Oe);De&&Te(D.indexOf(De))},"aria-label":"下一题",children:"›"})]})]})})()}),W==="answer"&&r.jsx("div",{className:"pd-card-acc",children:C.map((x,D)=>{const I=x.name==="听力"?` · ${x.count} 题`:x.name==="选词填空"||x.name==="长篇阅读"?` · ${x.start}-${x.start+x.count-1}`:"",ae=!!Mt[x.name];return r.jsxs("div",{className:"pd-card-sec",children:[r.jsxs("button",{type:"button",className:"pd-card-secrow","aria-expanded":ae,onClick:()=>bo(Q=>({...Q,[x.name]:!Q[x.name]})),children:[r.jsx("b",{children:D+1}),r.jsxs("span",{className:"pd-card-secname",children:[x.name,I&&r.jsx("em",{children:I})]}),r.jsxs("span",{className:"pd-card-secnum",children:[x.done.length,"/",x.count]}),r.jsx("svg",{className:`pd-card-caret${ae?" open":""}`,viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:r.jsx("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),ae&&r.jsx("div",{className:"pd-card-grid",children:Array.from({length:x.count}).map((Q,ie)=>{const N=x.start+ie,H=x.done.includes(N),q=()=>{const ge=te.current;if(!ge)return;const Le=(N>=26&&N<=35?ge.querySelector(`.blank[data-blank="${N}"]`):null)||[...ge.querySelectorAll(".question")].find(Re=>{var tt;return((tt=Re.querySelector(".pd-qnum"))==null?void 0:tt.textContent)===String(N)});Le==null||Le.scrollIntoView({behavior:"smooth",block:"center"})},B=()=>{const ge=te.current;if(ge){if(N>=26&&N<=35)_n(N),Te(0);else{_n(null);const{list:Le}=ho(ge),Re=Le.find(tt=>tt.no===N);Re&&Te(Le.indexOf(Re))}Ce("question"),he(!0)}},P=Zt.cmp?at[N]&&at[N]===tl[N]?" cmp-right":" cmp-wrong":"";return r.jsxs("div",{role:"button",tabIndex:0,className:`pd-card-cell${H?" done":""}${P}`,title:`第 ${N} 题${H?"（已答）":""}`,onClick:q,onKeyDown:ge=>{ge.key==="Enter"&&q()},children:[r.jsx("button",{type:"button",className:"pd-cell-parse",title:"查看题目 / 解析",onClick:ge=>{ge.stopPropagation(),B()},children:"解析"}),Zt.key&&tl[N]&&r.jsx("span",{className:"pd-cell-key",children:tl[N]}),Zt.mine&&at[N]&&r.jsx("span",{className:"pd-cell-mine",children:at[N]}),r.jsx("span",{className:"pd-cell-no",children:N})]},ie)})})]},`${x.name}-${D}`)})})]})]}),Qi&&(()=>{let x=[];try{x=JSON.parse(localStorage.getItem("cet:history")||"[]")}catch{}const D=x.filter(I=>I.id===c.id);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-history-mask",onClick:()=>za(!1)}),r.jsxs("div",{className:"pd-history-dialog",children:[r.jsxs("header",{className:"pd-history-head",children:[r.jsxs("b",{children:["作答记录 · ",c.title]}),r.jsx("button",{type:"button",className:"pd-history-close",onClick:()=>za(!1),"aria-label":"关闭",children:"✕"})]}),D.length===0?r.jsx("div",{className:"pd-history-empty",children:"暂无记录 · 完成作答后点「比」或「提交自测」即会保存"}):r.jsx("ul",{className:"pd-history-list",children:D.map((I,ae)=>{const Q=I.right!==void 0&&I.judged&&I.right/I.judged>=.6;return r.jsxs("li",{className:I.snap?"clickable":"",title:I.snap?"点击查看该次批改后的试卷":"该记录未含作答明细",onClick:()=>I.snap&&ir(I.snap),children:[r.jsx("span",{className:"pd-history-time",children:new Date(I.ts).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("span",{className:`pd-history-score${Q?" good":" bad"}`,children:I.right!==void 0&&I.judged?`正确 ${I.right}/${I.judged}`:"已记录"})]},ae)})})]})]})})(),rt&&Hl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>wt(null)}),r.jsx(qp,{x:rt.x,y:rt.y,children:rt.kind==="question"?(()=>{var ie,N;const x=(ie=te.current)==null?void 0:ie.querySelectorAll(".question")[rt.qi],D=x?Array.from(x.querySelectorAll(".option")):[],I=x?Number(((N=x.querySelector(".pd-qnum"))==null?void 0:N.textContent)||0):0,ae=Array.from({length:D.length||16},(H,q)=>String.fromCharCode(65+q)),Q=D.length>0?String.fromCharCode(65+D.findIndex(H=>H.classList.contains("selected"))):at[I];return r.jsx("div",{className:"pd-picker-circles",children:ae.map((H,q)=>r.jsx("button",{type:"button",className:`pd-picker-circle${Q===H?" on":""}`,onClick:()=>{if(D.length>0)kt(x,D[q]);else{try{const B=JSON.parse(localStorage.getItem(`cet:match:${c.id}`)||"{}");B[I]=H,localStorage.setItem(`cet:match:${c.id}`,JSON.stringify(B))}catch{}$t()}wt(null)},children:H},H))})})():r.jsxs("div",{className:"pd-picker-body",children:[r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(x,D)=>String.fromCharCode(65+D)).map(x=>r.jsx("button",{type:"button",className:`pd-picker-circle${at[rt.blankNo]===x?" on":""}`,onClick:()=>{var ae;const D=te.current,I=(D==null?void 0:D.querySelector(`.blank[data-blank="${rt.blankNo}"]`))||((ae=[...(D==null?void 0:D.querySelectorAll(".question"))||[]].find(Q=>{var ie;return((ie=Q.querySelector(".pd-qnum"))==null?void 0:ie.textContent)===String(rt.blankNo)}))==null?void 0:ae.querySelector(".blank, .pd-blank"));I&&(I.textContent=`${rt.blankNo} ${x}`,I.classList.add("filled"));try{const Q=JSON.parse(localStorage.getItem(`cet:blank:${c.id}`)||"{}");Q[rt.blankNo]=x,localStorage.setItem(`cet:blank:${c.id}`,JSON.stringify(Q))}catch{}$t(),wt(null)},children:x},x))}),r.jsx("ul",{className:"pd-picker-words",children:Hp(te.current).map(x=>r.jsx("li",{children:x},x))})]})})]}),document.body),al&&Hl.createPortal(r.jsx(r.Fragment,{children:al.rects.map((x,D)=>r.jsx("span",{className:`pd-hl-${al.kind}`,style:{position:"fixed",left:x.x,top:x.y,width:x.w,height:x.h}},D))}),document.body),Tt&&Hl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>{Na(null),vn(null)}}),r.jsx(qp,{x:Tt.x,y:Tt.y,children:r.jsxs("div",{className:"pd-trans",children:[r.jsx("div",{className:"pd-trans-src",children:Tt.text}),r.jsx("div",{className:"pd-trans-res",children:Tt.result??"翻译中…"})]})})]}),document.body),vo&&Hl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>wn(!1)}),r.jsxs("div",{className:"pd-timer-dialog",children:[r.jsx("button",{type:"button",className:"pd-timer-dialog-close",onClick:()=>wn(!1),"aria-label":"关闭",children:"×"}),r.jsxs("div",{className:"pd-timer-dialog-head",children:[r.jsx("span",{className:"pd-timer-dialog-icon",children:"⏱"}),r.jsxs("div",{children:[r.jsx("h3",{children:"计时"}),r.jsx("p",{children:"开始后将在正文上方显示时间"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-modes",children:[r.jsxs("button",{type:"button",className:Wn==="up"?"on":"",onClick:()=>Ea("up"),children:[r.jsx("b",{children:"正计时"}),r.jsx("span",{children:"累计用时"})]}),r.jsxs("button",{type:"button",className:Wn==="down"?"on":"",onClick:()=>Ea("down"),children:[r.jsx("b",{children:"倒计时"}),r.jsx("span",{children:"限时完成"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-actions",children:[r.jsx("button",{type:"button",className:"pd-timer-cancel",onClick:()=>wn(!1),children:"取消"}),r.jsx("button",{type:"button",className:"pd-timer-start",onClick:()=>{$i(Wn),_a(0),ll(!1),Ql(!0),Fn(!0),wn(!1)},children:"开始"})]})]})]}),document.body),Ot&&Pn&&Hl.createPortal(r.jsxs("div",{className:"pd-timer-bar",style:nn?{transform:`translate(-50%, 0) translate(${nn.x}px, ${nn.y}px)`}:void 0,children:[r.jsx("span",{className:"pd-timer-label",children:In==="up"?"用时":"剩余"}),r.jsx("b",{className:"pd-timer-time",children:Ji}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Fn(x=>!x),children:Ot?"⏸ 暂停":"▶ 继续"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>$i(x=>x==="up"?"down":"up"),children:"↻ 换模式"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>ll(x=>!x),children:"👁 遮住"}),r.jsx("button",{type:"button",className:"pd-tb-chip red",onClick:()=>{Fn(!1),_a(0),ll(!1),Ql(!0),il(null)},children:"■ 结束"}),r.jsx("span",{className:"pd-timer-drag",onPointerDown:Et,onPointerMove:ea,onPointerUp:Kl,title:"拖动"})]}),document.body),Rt&&Hl.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-drawer-mask",onClick:()=>bt(null)}),r.jsxs("aside",{className:"pd-drawer",children:[r.jsxs("header",{className:"pd-drawer-head",children:[r.jsx("h3",{children:Rt.title}),r.jsx("button",{type:"button",className:"pd-drawer-close",onClick:()=>bt(null),"aria-label":"关闭",children:"×"})]}),r.jsx("textarea",{className:"pd-drawer-text",placeholder:Rt.placeholder,value:Zi,onChange:x=>Xl(x.target.value)}),r.jsx("button",{type:"button",className:"pd-drawer-save",onClick:wo,children:"保存"})]})]}),document.body),r.jsx(G1,{tool:an,onTool:Jl,penProps:Cn,onPenSetting:So,shapeProps:ln,onShapeSetting:rl,zoom:ne,onZoom:T,onUndo:tr,canUndo:qt,eraserSize:Pi,onEraserSize:er,spread:le,onToggleSpread:_,examMode:we,onToggleExamMode:xe})]})},Ts=({href:c,onClick:f,icon:d,label:s})=>{const p={display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 13px",borderRadius:"8px",border:"1px solid var(--affine-border-color)",background:"var(--affine-background-primary-color)",color:"var(--affine-text-primary-color)",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"none"};return c?r.jsxs("a",{href:c,target:"_blank",rel:"noreferrer",style:p,children:[d,s]}):r.jsxs("button",{onClick:f,style:p,children:[d,s]})},F1=`
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
`,I1=JSON.parse('[{"id":"cet4-2026-06-set1","title":"2026年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-150词/分钟，短篇新闻占比升至30%，涵盖科技突破、环境治理等话题"],"reading":["科技与生活","校园场景分析","社会现象探讨","个人成长"],"writing":["大学生参与科研项目（需回应必要性与实用性两个维度）"],"translation":["餐桌礼仪"],"readingDifficulty":["中","难","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set2","title":"2026年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["学术化场景增加，长对话信息密度提升，信号词定位（but/however后答案概率达72%）"],"reading":["教育创新","智能设备应用","文化传承","职场发展"],"writing":["校园机器人应用（需提出具体观点或可操作建议）"],"translation":["尊师文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set3","title":"2026年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["校园与生活类场景为主，口音多元化（英音、澳音占比约15%）"],"reading":["青年品德","线上学习","环境保护","人际关系"],"writing":["提升校园生活便利性（需提出具体建议）"],"translation":["送礼习俗"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2025-12-set1","title":"2025年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["整体难度适中，话题贴近学习与生活，涉及社会、经济、文化等多层面"],"reading":["生物节律与服药时间","延迟退休原因分析","自行车道建设观念冲突","选择过多的决策困扰"],"writing":["建议信——学生会如何丰富学生生活"],"translation":["民营经济"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_1","hasListening":true},{"id":"cet4-2025-12-set2","title":"2025年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["短篇新闻涉及德国超市巧克力兔子版权纠纷，长对话偏校园与日常场景"],"reading":["用户体验设计师成长","英国学校校服政策争议","学术性文本分析","职场发展"],"writing":["如何充分利用校内资源促进学业发展"],"translation":["绿色经济"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_2","hasListening":true},{"id":"cet4-2025-12-set3","title":"2025年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["考查因果关系推断与观点态度理解能力，注重实际场景关键信息抓取"],"reading":["社会热点","文化现象","教育话题","健康生活"],"writing":["为学生会如何丰富学生生活提建议"],"translation":["城市漫步"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_3","hasListening":true},{"id":"cet4-2025-06-set1","title":"2025年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set1","year":2025,"month":"06","keyPoints":{"listening":["语速适中，对话为校园和日常热点场景，长对话需集中注意力抓关键信息"],"reading":["选词填空考基础词汇运用","仔细阅读贴近社会热点","长篇阅读信息匹配"],"writing":["大学图书馆是否应该向公众开放"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_1","hasListening":true},{"id":"cet4-2025-06-set2","title":"2025年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set2","year":2025,"month":"06","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["社会热点话题","文化现象分析","教育公平","科技与生活"],"writing":["创新创业课程相关"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_2","hasListening":true},{"id":"cet4-2025-06-set3","title":"2025年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set3","year":2025,"month":"06","keyPoints":{"listening":["整体难度适中，比平时模拟题更贴近真实考试节奏，没有偏题怪题"],"reading":["选词填空考基础词汇","仔细阅读主题贴近社会热点","长篇阅读信息匹配"],"writing":["创新创业课程相关"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_3","hasListening":true},{"id":"cet4-2024-12-set1","title":"2024年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set1","year":2024,"month":"12","keyPoints":{"listening":["整体难度适中，但听力是本次考试最难的部分，语速偏快、信息密度高"],"reading":["社交媒体对人际交往的影响","社会热点话题分析","科技与生活","职场发展"],"writing":["社交媒体对人际交往的影响"],"translation":["医患关系处理"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_1","hasListening":true},{"id":"cet4-2024-12-set2","title":"2024年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set2","year":2024,"month":"12","keyPoints":{"listening":["语速平稳、发音清晰，但部分长对话和讲座信息密度较高"],"reading":["远程工作对效率和生活质量的影响","全球气候变化对农业的影响","电子书与纸质书阅读体验差异"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_2","hasListening":true},{"id":"cet4-2024-12-set3","title":"2024年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set3","year":2024,"month":"12","keyPoints":{"listening":["语速快，发音与英美音差异大，话题偏专业"],"reading":["社会热点话题","健康生活方式","教育公平","文化多样性"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_3","hasListening":true},{"id":"cet4-2024-06-set1","title":"2024年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set1","year":2024,"month":"06","keyPoints":{"listening":["语速比往年快一丢丢，长对话容易走神漏细节"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["智能设备对学习的影响"],"translation":["贴福字"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_1","hasListening":true},{"id":"cet4-2024-06-set2","title":"2024年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set2","year":2024,"month":"06","keyPoints":{"listening":["语速平稳，没有怪口音，基础稳点能拿不少分"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["大学图书馆是否应该向公众开放"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_2","hasListening":true},{"id":"cet4-2024-06-set3","title":"2024年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set3","year":2024,"month":"06","keyPoints":{"listening":["整体中等偏上，不是最难但坑点真不少"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["智能设备对学习的影响"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_3","hasListening":true},{"id":"cet4-2023-12-set1","title":"2023年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set1","year":2023,"month":"12","keyPoints":{"listening":["短篇新闻和长对话相对简单，听力篇章难度有所增加"],"reading":["词汇理解与长篇阅读较容易，仔细阅读难度较大"],"writing":["写作要求与往年变化不大，认真审题即可"],"translation":["改革开放以来饮食变化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-12-set2","title":"2023年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set2","year":2023,"month":"12","keyPoints":{"listening":["听力语速和长对话复杂度已接近当前考试标准"],"reading":["选词填空出现个别生词","长篇阅读信息匹配","仔细阅读细节题为主"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-12-set3","title":"2023年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set3","year":2023,"month":"12","keyPoints":{"listening":["听力部分如果不仔细听材料，很多细节之处容易忽略"],"reading":["仔细阅读难度较大，需要较强的逻辑推断能力"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set1","title":"2023年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["长对话略难，同义替换较多，不仔细听容易忽略细节"],"reading":["仔细阅读中规中矩，定位好关键句关键词正确率较高"],"writing":["作文和翻译内容相对抽象，很多词汇难写，难度较大"],"translation":["揠苗助长"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set2","title":"2023年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["听力发音清晰、语速适中"],"reading":["阅读话题不偏，翻译是传统文化类，背过素材很好上手"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["亡羊补牢"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-06-set3","title":"2023年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set3","year":2023,"month":"06","keyPoints":{"listening":["听力整体来说较简单，正确选项与原文高度匹配，体现视听一致原则"],"reading":["阅读话题不偏，仔细阅读中规中矩"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["守株待兔"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2022-12-set1","title":"2022年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["听力对我来说很难，错了挺多"],"reading":["选词填空考高中考纲词汇","仔细阅读感觉还行","翻译冬至那篇挺简单"],"writing":["培养社交能力的必要性"],"translation":["冬至"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_1","hasListening":true},{"id":"cet4-2022-12-set2","title":"2022年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set2","year":2022,"month":"12","keyPoints":{"listening":["听力开头两个全错，后十个听力错4个"],"reading":["选词填空考parenthood","仔细阅读涉及鱼和消除贫困，都读懂了但选项选不出来"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_2","hasListening":true},{"id":"cet4-2022-12-set3","title":"2022年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set3","year":2022,"month":"12","keyPoints":{"listening":["听力部分16-25题较难"],"reading":["选词填空都是高中考纲词汇，没有不认识的词"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_3","hasListening":true},{"id":"cet4-2022-06-set1","title":"2022年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set1","year":2022,"month":"06","keyPoints":{"listening":["听力选项同义替换多，长度普遍较长，预读起来没那么顺畅"],"reading":["段落匹配到处是显眼的TD，做起来挺轻松","仔细阅读第一篇挺简单，第二篇common sense有点绕"],"writing":["作文很好写，背的模版刚好契合"],"translation":["赵州桥"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_1","hasListening":true},{"id":"cet4-2022-06-set2","title":"2022年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set2","year":2022,"month":"06","keyPoints":{"listening":["全国共考两套听力，本套听力与前两套内容一样，只是选项顺序不同"],"reading":["阅读整体感觉还行，仔细阅读定位准确即可"],"writing":["作文较好写"],"translation":["亡羊补牢"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_2","hasListening":true},{"id":"cet4-2022-06-set3","title":"2022年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set3","year":2022,"month":"06","keyPoints":{"listening":["听力比起去年12月的要难一点"],"reading":["阅读话题常规，仔细阅读需要仔细定位"],"writing":["作文较好写"],"translation":["揠苗助长"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_3","hasListening":true},{"id":"cet4-2021-12-set1","title":"2021年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["听力题目中规中矩，和之前差不多"],"reading":["阅读还算正常，仔细阅读定位准确即可"],"writing":["作文report较难，不记得怎么写"],"translation":["都江堰"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2021-12-set2","title":"2021年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set2","year":2021,"month":"12","keyPoints":{"listening":["听力部分中规中矩"],"reading":["阅读部分选词填空考词汇辨析与语法，仔细阅读涉及人工智能在医疗中的应用"],"writing":["作文report较难"],"translation":["坎儿井"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-12-set3","title":"2021年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set3","year":2021,"month":"12","keyPoints":{"listening":["听力部分与第二套一致"],"reading":["阅读整体难度适中"],"writing":["作文report较难"],"translation":["大运河"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set1","title":"2021年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set1","year":2021,"month":"06","keyPoints":{"listening":["听力好难，到后面基本上是乱写"],"reading":["第二套的长篇阅读和第三套的仔细阅读，太难了，和平时的四级考试难度不在一个等级"],"writing":["科技是否会让人变懒"],"translation":["铁观音"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set2","title":"2021年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set2","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["匹配阅读真的难，文章内容根本读不懂，全是比较晦涩难懂的内容"],"writing":["科技是否会让人变懒"],"translation":["龙井"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set3","title":"2021年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set3","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["仔细阅读真的有些读不懂，一个是boring，一个是肥胖"],"writing":["科技是否会让人变懒"],"translation":["普洱"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set1","title":"2020年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["听力考试难度适中，较之前考题无明显变化"],"reading":["选词填空是难点，段落匹配和传统阅读得分点与以往并无差异，主要考察名词定位和句式关键信息处理"],"writing":["Changes in the Way of Education"],"translation":["春节中鱼的象征意义"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set2","title":"2020年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["新闻听力选项内容较长，词汇难度提升，主要考察细节匹配"],"reading":["选词填空讲“该如何把控赞美的度”，快速阅读关于“贫穷的样子”，仔细阅读是比较日常的社科类话题"],"writing":["Changes in the Way of Transportation"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set3","title":"2020年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set3","year":2020,"month":"12","keyPoints":{"listening":["长对话部分选项内容相对容易，短文听力部分较长对话稍有难度"],"reading":["仔细阅读试题考查类型为细节理解，题干关键词定位明显"],"writing":["Changes in the Way of Communication"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set1","title":"2020年9月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["新闻部分语速适中，专业词汇较少；长对话第一篇语速较快，连读较多"],"reading":["选词填空难度不大，词性辨别及单词难度较低","长篇阅读难点在实验过程的段落区分"],"writing":["在线图书馆/在线词典/PPT的使用"],"translation":["白酒/国宴等传统文化词汇"],"readingDifficulty":["难","中","中","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set2","title":"2020年9月 四级真题 (第二、三套合并卷)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["听力部分整体较往年相比难度适中，语速适中，考题均为细节题"],"reading":["仔细阅读主要考查综合阅读能力，题目以细节题为主，重在对比原文与选项是否同义"],"writing":["分析利弊型作文，网络相关话题"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-07-set1","title":"2020年7月 四级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["难度基本与去年12月持平，个别几道题较难，做题技巧围绕视听一致原则"],"reading":["选词填空为科普类文章，考查大纲词汇及名、动、形、副四类词汇语法结构"],"writing":["分析翻译应用程序流行的原因（原因解释类作文）"],"translation":["火锅"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set1","title":"2019年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set1","year":2019,"month":"12","keyPoints":{"listening":["新闻部分较往年容易，长对话正常难度，篇章较难，考题多为细节题"],"reading":["阅读整体难度适中，多为应用文和议论文，选词填空出现个别生词，考生易在此处丢分"],"writing":["推荐信（应用文写作）"],"translation":["父母重视教育"],"readingDifficulty":["中","易","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2019-12-set2","title":"2019年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set2","year":2019,"month":"12","keyPoints":{"listening":["长对话听音难点主要集中在语音，连读较多，英美音互换较难"],"reading":["阅读整体难度适中，仔细阅读部分题在常见设题点设题，较容易定位"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set3","title":"2019年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set3","year":2019,"month":"12","keyPoints":{"listening":["短文篇幅较长，语言难度较其他两部分来说相对难一些"],"reading":["阅读整体难度适中，选词填空出现个别生词"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","易","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set1","title":"2019年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set1","year":2019,"month":"06","keyPoints":{"listening":["整体来说较简单，新闻、长对话、篇章考的都是在课堂上讲过的简单生活类主题"],"reading":["阅读理解总体难度比2018年12月简单，高频词汇反复出现","考点中规中矩","阅读材料接地气容易理解"],"writing":["新闻报道（社会热点类话题）"],"translation":["灯笼"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set2","title":"2019年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set2","year":2019,"month":"06","keyPoints":{"listening":["听力考试整体来说较简单，好多文章的正确选项都跟原文高度匹配"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set3","title":"2019年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set3","year":2019,"month":"06","keyPoints":{"listening":["听力难度适中"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set1","title":"2018年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set1","year":2018,"month":"12","keyPoints":{"listening":["题型稳定，长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察学生在材料中的定位及对重点语句的理解能力"],"writing":["毕业后将面临的就业挑战"],"translation":["手机阅读"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set2","title":"2018年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set2","year":2018,"month":"12","keyPoints":{"listening":["长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，题材为学生的日常兴趣与关注的话题"],"writing":["留学面临的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-12-set3","title":"2018年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set3","year":2018,"month":"12","keyPoints":{"listening":["听力部分题型稳定，话题较为传统"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察定位及重点语句理解能力"],"writing":["大城市生活的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-06-set1","title":"2018年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set1","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单，新闻部分没有涉及政治经济类话题，考的是社会民生类新闻"],"reading":["试卷整体难度有所下降，阅读与听力较以往考试也更容易理解"],"writing":["口语能力的重要性及如何培养"],"translation":["飞机"],"readingDifficulty":["易","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set2","title":"2018年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set2","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["选材源于英美主流媒体报刊，题材集中在社科领域"],"writing":["写作能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set3","title":"2018年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set3","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["试卷整体难度有所下降，阅读更容易理解"],"writing":["阅读能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}}]'),P1=JSON.parse('[{"id":"cet6-2026-06-set1","title":"2026年6月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-160词/分钟，学术场景占比激增至68%，多模态（语音+图表）融合考查"],"reading":["科技与生活","社会现象分析","科技伦理","人文关怀"],"writing":["热爱自然（Love Nature）"],"translation":["无人机"],"difficulty":"中等","readingDifficulty":["中","难","难","难"],"readingLevel":"难"}},{"id":"cet6-2026-06-set2","title":"2026年6月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["讲座听力开头30秒是考点密集区，主旨题答案几乎都出现在前30秒内"],"reading":["文化传承","教育与发展","经济与社会","个人成长"],"writing":["深入了解中华传统文化有助于促进文化交流"],"translation":["电子商务与乡村振兴"],"difficulty":"中等","readingDifficulty":["中","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2026-06-set3","title":"2026年6月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["转折词but、however后面覆盖约40%的细节题和推理题"],"reading":["心理健康","科技对社会的影响","环境与责任","批判性思维"],"writing":["科技与人文"],"translation":["科技医疗（远程医疗）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-12-set1","title":"2025年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["持续关注学术场景和逻辑信号词"],"reading":["社会价值观","老年人对社会贡献","教育方法","科技与人类"],"writing":["在竞争日益激烈的世界中，大学生应更好准备以应对各种挑战"],"translation":["尊老（中华民族传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_1/test.pdf"},{"id":"cet6-2025-12-set2","title":"2025年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["逻辑推断和细节抓取并重"],"reading":["网络经济与传统经济","科技发展与政策","自我价值实现","大学生活适应"],"writing":["通过“中国梦”实现自我价值"],"translation":["中华民族崇尚的自强自立精神"],"difficulty":"中等","readingDifficulty":["中","中","难","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_2/test.pdf"},{"id":"cet6-2025-12-set3","title":"2025年12月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["学术场景与日常对话交替出现"],"reading":["传统美德与消费","深度阅读与AI","人类创造力","志愿服务与社会责任"],"writing":["教师对学生学术追求和个人发展的影响"],"translation":["节俭（frugality，传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_3/test.pdf"},{"id":"cet6-2025-06-set1","title":"2025年6月 六级真题 (第一套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set1","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第1套.pdf","keyPoints":{"listening":["听力语速提升，学术场景占比增加，讲座逻辑严密"],"reading":["社会心理（身份构建）","独处的好处","追随激情的潜在问题","工作与生活平衡"],"writing":["过度依赖AI对创造力的危害"],"translation":["天宫空间站"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-06-set2","title":"2025年6月 六级真题 (第二套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set2","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第2套.pdf","keyPoints":{"listening":["学术场景为主，重视逻辑信号词"],"reading":["社会心理","图书馆的重要性","社区文化","信息获取与知识传播"],"writing":["社交媒体的使用（正确且负责任地使用）"],"translation":["南水北调工程"],"difficulty":"较难","readingDifficulty":["难","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2025-06-set3","title":"2025年6月 六级真题 (第三套)","desc":"高阶词汇突破","url":"exam-detail.html?id=cet6-2025-06-set3","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第3套.pdf","keyPoints":{"listening":["语速偏快，细节题需结合笔记技巧"],"reading":["环境意识","肉类消费与气候变化","可持续生活","公共健康"],"writing":["职业准备"],"translation":["粤港澳大湾区"],"difficulty":"较难","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set1","title":"2024年12月 六级真题 (第一套)","desc":"年度压轴真题","url":"exam-detail.html?id=cet6-2024-12-set1","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_1/test.pdf","keyPoints":{"listening":["长对话围绕绩效评估、商业项目展开；短文考儿童好奇心"],"reading":["全球贫困问题","密码记忆研究","恐怖片为何受欢迎","社会心理与科技"],"writing":["人工智能对职场的影响"],"translation":["北斗卫星导航系统"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set2","title":"2024年12月 六级真题 (第二套)","desc":"学术英语精讲","url":"exam-detail.html?id=cet6-2024-12-set2","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_2/test.pdf","keyPoints":{"listening":["讲座考物质追求、可持续时尚；学术场景比重增加"],"reading":["全球贫困问题","数字隐私与密码记忆","恐怖片流行原因","人类行为与心理"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["人工智能技术在中国各行业的应用及发展前景"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set3","title":"2024年12月 六级真题 (第三套)","desc":"写作论证技巧","url":"exam-detail.html?id=cet6-2024-12-set3","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_3/test.pdf","keyPoints":{"listening":["长对话涉及商业项目；讲座偏社会学话题"],"reading":["社会经济学","左脑与右脑差异","认知科学","教育应用"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["京剧脸谱艺术"],"difficulty":"较难","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2024-06-set1","title":"2024年6月 六级真题 (第一套)","desc":"真实真题（含听力音频）","url":"exam-detail.html?id=cet6-2024-06-set1","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_1/test.pdf","keyPoints":{"listening":["听力语速偏快，连读弱读较多，短对话聚焦职场、学术场景"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["数字素养技能（Digital Literacy Skills）"],"translation":["中国传统婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2024_06_1","hasListening":true},{"id":"cet6-2024-06-set2","title":"2024年6月 六级真题 (第二套)","desc":"复杂句式解析","url":"exam-detail.html?id=cet6-2024-06-set2","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_2/test.pdf","keyPoints":{"listening":["长对话主题为“学术会议筹备”，讲座细节推断"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["社会实践和理论学习同等重要（Social Practice and Academic Learning）"],"translation":["竹子"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-06-set3","title":"2024年6月 六级真题 (第三套)","desc":"听力长对话攻略","url":"exam-detail.html?id=cet6-2024-06-set3","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_3/test.pdf","keyPoints":{"listening":["语速快，弱读连读多；注意转折词后的答案区间"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["坚持独立思考 / 自主学习"],"translation":["中国婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2023-12-set1","title":"2023年12月 六级真题 (第一套)","desc":"深入剖析长难句","url":"exam-detail.html?id=cet6-2023-12-set1","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_1/test.pdf","keyPoints":{"listening":["短篇新闻涉及量子计算、乡村教育振兴；讲座关注专业术语理解（如“量子霸权”）"],"reading":["AI时代创造力价值","数字经济对传统行业的冲击与机遇","环境保护与经济发展","社会文化"],"writing":["环境保护与经济发展（分析矛盾并提出解决方案）"],"translation":["中国人口结构变化与老龄化社会"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_1","hasListening":true},{"id":"cet6-2023-12-set2","title":"2023年12月 六级真题 (第二套)","desc":"科技文献阅读","url":"exam-detail.html?id=cet6-2023-12-set2","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_2/test.pdf","keyPoints":{"listening":["短篇新闻涉及全球生物多样性保护会议；长对话职场场景"],"reading":["AI时代创造力价值","多元文化社会的价值冲突与融合","基础知识获取的重要性","跨文化沟通"],"writing":["The importance of acquiring the basic knowledge"],"translation":["中国城镇化进程"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_2","hasListening":true},{"id":"cet6-2023-12-set3","title":"2023年12月 六级真题 (第三套)","desc":"翻译精准表达","url":"exam-detail.html?id=cet6-2023-12-set3","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_3/test.pdf","keyPoints":{"listening":["讲座学术逻辑性强，注意信号词和逻辑词"],"reading":["社会现象","逻辑推理与信息匹配","老年人社会贡献","职场与生活"],"writing":["老年人凭借宝贵技能和经验继续为社会做贡献（给定开头句）"],"translation":["中国养老服务体系建设"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_3","hasListening":true},{"id":"cet6-2023-06-set1","title":"2023年6月 六级真题 (第一套)","desc":"议论文写作范式","url":"exam-detail.html?id=cet6-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["注意力管理","专注力对学习工作的重要性","AI时代思考能力","多角度分析"],"writing":["AI时代思考能力","多角度分析"],"translation":["贴春联"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_1","hasListening":true},{"id":"cet6-2023-06-set2","title":"2023年6月 六级真题 (第二套)","desc":"学术词汇积累","url":"exam-detail.html?id=cet6-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["AI创造力争议","人工智能能否替代人类创作","科技伦理","社会影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["印章"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_2","hasListening":true},{"id":"cet6-2023-06-set3","title":"2023年6月 六级真题 (第三套)","desc":"听力讲座笔记法","url":"exam-detail.html?id=cet6-2023-06-set3","year":2023,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_3/test.pdf","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["多元文化","文化价值冲突与融合","文化认同","全球化影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["中央电视台总部大楼"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_3","hasListening":true},{"id":"cet6-2022-12-set1","title":"2022年12月 六级真题 (第一套)","desc":"后疫情时代话题","url":"exam-detail.html?id=cet6-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["三篇新闻聚焦后疫情时代社会议题"],"reading":["韧性城市建设","数字鸿沟对社会公平的影响","学生贷款与教育公平","社会政策分析"],"writing":["培养团队精神"],"translation":["春节（习俗","文化内涵和现代意义）"],"difficulty":"中等","readingDifficulty":["中","难","中","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_1","hasListening":true},{"id":"cet6-2022-12-set2","title":"2022年12月 六级真题 (第二套)","desc":"经济全球化主题","url":"exam-detail.html?id=cet6-2022-12-set2","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_2/test.pdf","keyPoints":{"listening":["长对话细节题占比高，注意逻辑关系"],"reading":["社会心理","数字鸿沟与信息公平","教育公平","社会阶层与流动"],"writing":["培养批判性思维（逻辑推理","避免草率判断）"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_2","hasListening":true},{"id":"cet6-2022-12-set3","title":"2022年12月 六级真题 (第三套)","desc":"文化多样性","url":"exam-detail.html?id=cet6-2022-12-set3","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_3/test.pdf","keyPoints":{"listening":["学术讲座偏多，逻辑结构清晰"],"reading":["文化现象","古典音乐受众演变","文化传承与创新","艺术与商业"],"writing":["信息时代的学习"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_3","hasListening":true},{"id":"cet6-2022-06-set1","title":"2022年6月 六级真题 (第一套)","desc":"气候变化议题","url":"exam-detail.html?id=cet6-2022-06-set1","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第1套.pdf","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["环保生活","长难句与观点梳理","环境政策","绿色生活方式"],"writing":["Live an Environmentally Friendly Lifestyle"],"translation":["剪纸"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2022-06-set2","title":"2022年6月 六级真题 (第二套)","desc":"人工智能伦理","url":"exam-detail.html?id=cet6-2022-06-set2","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第2套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","信息匹配与细节定位","社会文化","生态保护"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["皮影戏"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2022-06-set3","title":"2022年6月 六级真题 (第三套)","desc":"可持续发展","url":"exam-detail.html?id=cet6-2022-06-set3","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第3套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","科普推理","社会热点问题","文化现象"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["昆曲"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2021-12-set1","title":"2021年12月 六级真题 (第一套)","desc":"数字经济时代","url":"exam-detail.html?id=cet6-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["场景多样，细节题占比高"],"reading":["睡眠与健康","社会现象分析","有效沟通","人际关系"],"writing":["有效沟通能力的重要性"],"translation":["井冈山（中国革命摇篮）"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_1","hasListening":true},{"id":"cet6-2021-12-set2","title":"2021年12月 六级真题 (第二套)","desc":"社会公平正义","url":"exam-detail.html?id=cet6-2021-12-set2","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_2/test.pdf","keyPoints":{"listening":["讲座学术性强，需要笔记辅助"],"reading":["经济影响","自动化对经济的破坏性","科技与就业","社会变迁"],"writing":["Say Thank You to Parents（向父母道谢）"],"translation":["延安（中国革命圣地）"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_2","hasListening":true},{"id":"cet6-2021-12-set3","title":"2021年12月 六级真题 (第三套)","desc":"科技创新驱动","url":"exam-detail.html?id=cet6-2021-12-set3","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_3/test.pdf","keyPoints":{"listening":["长对话偏职场与生活场景"],"reading":["社会心理","社交媒体与数字阅读","数字时代生活","阅读习惯"],"writing":["虚假信息"],"translation":["中国共产党第一次全国代表大会会址"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_3","hasListening":true},{"id":"cet6-2021-06-set1","title":"2021年6月 六级真题 (第一套)","desc":"疫情下的教育变革","url":"exam-detail.html?id=cet6-2021-06-set1","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_1/test.pdf","keyPoints":{"listening":["长对话8%、听力篇章7%、讲座20%，注意转折、因果、最高级等关键词"],"reading":["创造力","画画与创造力教育","AI与就业","职业发展"],"writing":["社交媒体是否拉近了人际距离"],"translation":["海南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_1","hasListening":true},{"id":"cet6-2021-06-set2","title":"2021年6月 六级真题 (第二套)","desc":"远程办公趋势","url":"exam-detail.html?id=cet6-2021-06-set2","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_2/test.pdf","keyPoints":{"listening":["注意七种关键词（转折、因果、最高级、事实罗列等）"],"reading":["技术影响","汽车改变生活","文化遗产（巴黎圣母院大火）","科技与社会"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["云南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_2","hasListening":true},{"id":"cet6-2021-06-set3","title":"2021年6月 六级真题 (第三套)","desc":"医疗卫生体系","url":"exam-detail.html?id=cet6-2021-06-set3","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_3/test.pdf","keyPoints":{"listening":["长对话、篇章、讲座题型分布均衡"],"reading":["教育观念","学校创造力教育","教育公平","个人成长"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["青海"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_3","hasListening":true},{"id":"cet6-2020-12-set1","title":"2020年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop the ability to meet challenges"]}},{"id":"cet6-2020-12-set2","title":"2020年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop ef fective communication skills"]}},{"id":"cet6-2020-12-set3","title":"2020年12月 六级真题 (第三套)","desc":"国际合作发展","url":"exam-detail.html?id=cet6-2020-12-set3","year":2020,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/answer.pdf","keyPoints":{"listening":["注意事实罗列词汇、情态动词"],"reading":["艺术欣赏","艺术欣赏困境","创造力","挑战自我"],"writing":["Why students should take challenges"],"translation":["大兴机场"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2020-09-set1","title":"2020年9月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;Beauty of the soul is the essential beauty.&rdquo;"]}},{"id":"cet6-2020-09-set2","title":"2020年9月 六级真题 (第二、三套合并卷)","desc":"第二、三套合并卷，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["全国共考1套听力，与第一套一致"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["在线经济崛起"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["第二、三套作文真题整理中"]}},{"id":"cet6-2020-07-set1","title":"2020年7月 六级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;The best preparation for tomorrow is doing your best today."]}},{"id":"cet6-2019-12-set1","title":"2019年12月 六级真题 (第一套)","desc":"5G时代来临","url":"exam-detail.html?id=cet6-2019-12-set1","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/listening.mp3","keyPoints":{"listening":["讲座听力为重点，需关注学术逻辑"],"reading":["家庭责任","责任感","牡丹花文化","传统美德"],"writing":["家庭责任感"],"translation":["牡丹花"],"difficulty":"适中","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2019-12-set2","title":"2019年12月 六级真题 (第二套)","desc":"区块链技术","url":"exam-detail.html?id=cet6-2019-12-set2","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/listening.mp3","keyPoints":{"listening":["讲座学术逻辑，注意信号词"],"reading":["社会责任","责任感","荷花文化","社会价值观"],"writing":["社会责任感"],"translation":["荷花"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-12-set3","title":"2019年12月 六级真题 (第三套)","desc":"大数据应用","url":"exam-detail.html?id=cet6-2019-12-set3","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["团体责任","责任感","梅花文化","传统文化"],"writing":["团体责任感"],"translation":["梅花"],"difficulty":"适中","readingDifficulty":["中","易","易","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set1","title":"2019年6月 六级真题 (第一套)","desc":"文化自信建设","url":"exam-detail.html?id=cet6-2019-06-set1","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/listening.mp3","keyPoints":{"listening":["长对话、Passage、Lecture三种题型"],"reading":["AI影响","AI对人类文明的影响","AI与霍金警告","团队精神与沟通"],"writing":["团队精神和沟通在工作中的重要性"],"translation":["汉语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set2","title":"2019年6月 六级真题 (第二套)","desc":"生态文明理念","url":"exam-detail.html?id=cet6-2019-06-set2","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/listening.mp3","keyPoints":{"listening":["注意信号词和逻辑词"],"reading":["创业","老年人市场","学习动机","教育与工作"],"writing":["学习动机和学习方法的重要性"],"translation":["成语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set3","title":"2019年6月 六级真题 (第三套)","desc":"创新型国家","url":"exam-detail.html?id=cet6-2019-06-set3","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["职业转型","重新工作感受与AI发展","人际交往","互相尊重"],"writing":["人际交往中相互理解和尊重的重要性"],"translation":["方言"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set1","title":"2018年12月 六级真题 (第一套)","desc":"改革开放40年","url":"exam-detail.html?id=cet6-2018-12-set1","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第1套.pdf","keyPoints":{"listening":["需关注关键句而非追求整篇听懂"],"reading":["农业机器人","机器人在农业中的应用","科普沟通","留学挑战"],"writing":["The challenges of studying abroad"],"translation":["图书馆"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set2","title":"2018年12月 六级真题 (第二套)","desc":"移动支付革命","url":"exam-detail.html?id=cet6-2018-12-set2","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第2套.pdf","keyPoints":{"listening":["同上"],"reading":["儿童注意力发展","智能手机与心理学","毕业挑战","职场适应"],"writing":["The challenges of starting a career after graduation"],"translation":["博物馆"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2018-12-set3","title":"2018年12月 六级真题 (第三套)","desc":"高铁走向世界","url":"exam-detail.html?id=cet6-2018-12-set3","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第3套.pdf","keyPoints":{"listening":["同上"],"reading":["教育方法","高等数学争论","护理机器人","大城市生活","社会适应"],"writing":["The challenges of living in big cities"],"translation":["体育馆"],"difficulty":"适中","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2018-06-set1","title":"2018年6月 六级真题 (第一套)","desc":"智能制造升级","url":"exam-detail.html?id=cet6-2018-06-set1","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第1套.pdf","keyPoints":{"listening":["长对话为热身过渡（7%），重点在讲座讲话（第23-25题）"],"reading":["非名校选择","社会文化","高铁网络与社会发展"],"writing":["建立企业与消费者之间的信任"],"translation":["高铁"],"difficulty":"适中","readingDifficulty":["易","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set2","title":"2018年6月 六级真题 (第二套)","desc":"电子商务发展","url":"exam-detail.html?id=cet6-2018-06-set2","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第2套.pdf","keyPoints":{"listening":["讲座听力涉及大写专有名词和数字（如1984）；第23题偏主旨概括题"],"reading":["专有名词","词汇辨析","社会现象","生活质量"],"writing":["建立师生之间的信任"],"translation":["私家车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set3","title":"2018年6月 六级真题 (第三套)","desc":"共享单车现象","url":"exam-detail.html?id=cet6-2018-06-set3","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第3套.pdf","keyPoints":{"listening":["听力素材与第二套一致，仅选项顺序不同"],"reading":["社会文化","人际关系","社会发展"],"writing":["建立老板和员工之间的信任"],"translation":["共享单车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}}]'),p0={cet4:I1,cet6:P1},eg=p0,tg={blue:{"--pf-accent":"#60a5fa","--pf-back":"#0056b3","--pf-front":"rgba(0, 123, 255, 0.65)","--pf-hint":"#60a5fa"},yellow:{"--pf-accent":"#FFCC00","--pf-back":"#F0B400","--pf-front":"rgba(255, 204, 0, 0.72)","--pf-hint":"#FFCC00"}};function ng(c,f){return(eg[c]??[]).filter(d=>Number(d.year)===f).length}const Ds=({label:c,text:f,testId:d,type:s,onEnter:p,accent:z="blue"})=>{const[L,M]=y.useState(!1),[k,w]=y.useState(""),U=y.useMemo(()=>{if(!s)return null;const O=k.trim().match(/^(20\d{2})\s*年?$/);if(!O)return null;const K=Number(O[1]),re=ng(s,K);return{year:K,count:re}},[k,s]);return r.jsxs("div",{className:"pf-item","data-type":s??"kaoyan",style:tg[z],children:[r.jsxs("div",{className:`folder-card${L?" open":""}`,"data-testid":d,onClick:()=>M(O=>!O),children:[r.jsxs("div",{className:"hint-wrapper",children:[r.jsx("span",{className:"hint-text",children:"Click to open"}),r.jsx("svg",{className:"hint-arrow",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22",stroke:"var(--pf-hint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r.jsxs("div",{className:"folder-container",children:[r.jsx("svg",{className:"folder-back",viewBox:"0 0 50 40",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z",fill:"var(--pf-back)"})}),s&&r.jsxs("div",{className:"folder-search",onClick:O=>O.stopPropagation(),children:[r.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",inputMode:"numeric",placeholder:"年份 如 2025",className:"search-input",value:k,"aria-label":`在 ${c} 中按年份搜索`,onChange:O=>{w(O.target.value.replace(/[^\d年]/g,"").slice(0,5))},onKeyDown:O=>{O.key==="Enter"&&(U!=null&&U.count)&&(O.preventDefault(),p(s??"kaoyan",U.year))}})]}),U&&r.jsx("div",{className:`year-hint${U.count?"":" is-empty"}`,"data-testid":`${d}-year-hint`,onClick:O=>{O.stopPropagation(),U.count&&p(s??"kaoyan",U.year)},children:U.count?r.jsxs(r.Fragment,{children:[r.jsxs("b",{children:[U.year," 年"]})," · ",U.count," 套 · 回车打开"]}):r.jsxs(r.Fragment,{children:[U.year," 年暂无试卷"]})}),r.jsxs("div",{className:"file file-5",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.jsx("polyline",{points:"21 15 16 10 5 21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 4.2 MB"})]}),r.jsxs("div",{className:"file file-4",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),r.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 128 MB"})]}),r.jsxs("div",{className:"file file-3",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 12 KB"})]}),r.jsxs("div",{className:"file file-2","data-testid":`${d}-enter`,onClick:O=>{O.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.jsx("polyline",{points:"10 9 9 9 8 9"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 1.1 MB"})]}),r.jsxs("div",{className:"file file-1","data-testid":`${d}-enter-top`,onClick:O=>{O.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),r.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 8.4 MB"})]}),r.jsxs("div",{className:"folder-front-wrapper",children:[r.jsx("svg",{className:"folder-front",viewBox:"0 0 50 34",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z",fill:"var(--pf-front)"})}),r.jsx("div",{className:"folder-label"}),r.jsxs("div",{className:"counter",children:[r.jsx("div",{className:"status-dot"}),r.jsx("span",{className:"counter-label",children:"FILES"}),r.jsx("span",{className:"counter-number","data-testid":`${d}-count`,children:U?U.count||"0":s?"All":"NEW"})]})]})]})]}),r.jsx("div",{className:"pf-caption",children:c})]})},ag=({onEnter:c})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:lg}),r.jsxs("div",{className:"pe-train-head",children:[r.jsx("h2",{className:"pe-train-title",children:"题目训练"}),r.jsxs("div",{className:"pe-train-tabs",children:[r.jsx("button",{type:"button",className:"pe-train-tab is-on",children:"真题训练"}),r.jsx("button",{type:"button",className:"pe-train-tab",onClick:()=>window.alert("导入题目功能即将上线"),children:"导入题目"})]})]}),r.jsxs("div",{className:"pf-stage",children:[r.jsx(Ds,{label:"CET-4 英语四级",text:"CET-4",testId:"paper-entry-cet4",type:"cet4",onEnter:c}),r.jsx(Ds,{label:"CET-6 英语六级",text:"CET-6",testId:"paper-entry-cet6",type:"cet6",onEnter:c}),r.jsx(Ds,{label:"考研英语",text:"KAOYAN",testId:"paper-entry-kaoyan",accent:"yellow",onEnter:c})]})]}),lg=`
/* 题目训练标题区（文件夹上方） */
.pe-train-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 0 0;
  /* 用 transform 下移：不占布局空间，下方三个文件夹位置保持不动 */
  transform: translateY(34px);
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
  flex-wrap: wrap; /* 内容区被侧边栏压窄时自动换行，避免横向滚动条 */
  row-gap: 24px;
  gap: clamp(24px, 4.5vw, 120px); /* 随视口收缩，保证三个文件夹始终放得下 */
  padding: 0 110px; /* 两侧对称留白：hint/箭头伸出卡片外，防止被右边缘裁掉显得不居中 */
  box-sizing: border-box;
}

.pf-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 90px 40px 40px;
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

/* 断点按「内容区宽度 = 视口 - 264(侧边栏)」折算，原 1200 断点右移 */
@media (max-width: 1464px) {
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
`,ig=p0,rg=({activeType:c,initialYear:f="",onTypeChange:d,onOpenPaper:s,onBackToEntry:p})=>{const[z,L]=y.useState(""),[M,k]=y.useState(f),[w,U]=y.useState(""),[O,K]=y.useState(""),[re,ee]=y.useState([]),[F,ce]=y.useState(null),[se,te]=y.useState(!1),[ye,we]=y.useState(!1),Se=y.useRef(null),pe=y.useRef(null),xe=y.useRef(!1),ze=y.useRef([]);y.useEffect(()=>{const g=v=>{const _=v.target;if(!(_ instanceof HTMLElement)||!Se.current||!(_===Se.current||_.contains(Se.current)))return;const G=_.scrollTop>120;te(J=>J!==G?G:J),_.scrollTop>4&&(xe.current=!0);const Z=_.getBoundingClientRect(),h=Z.top+Z.height/2;let C=null,$=Number.POSITIVE_INFINITY;for(let J=1;J<ze.current.length;J++){const he=ze.current[J];if(!he)continue;const W=he.getBoundingClientRect();if(W.top<=h&&W.bottom>=h){const Ce=Math.abs((W.top+W.bottom)/2-h);Ce<$&&($=Ce,C=J)}}C!==null?(pe.current=C,ce(C)):pe.current!==null&&(ce(J=>J===pe.current?null:J),pe.current=null)};return document.addEventListener("scroll",g,!0),()=>document.removeEventListener("scroll",g,!0)},[]),y.useEffect(()=>{const g=window.setTimeout(()=>{xe.current||(pe.current=0,ce(0))},5e3);return()=>window.clearTimeout(g)},[c]),y.useEffect(()=>{try{ee(JSON.parse(localStorage.getItem("cet:history")||"[]"))}catch{ee([])}},[]);const ne=ig[c]??[],ue=cg(ne.map(g=>String(g.year??"")).filter(Boolean)),oe=["12","07","06"],T=ne.filter(g=>{var $,J;const v=z.trim().toLowerCase(),_=(($=/^(20\d{2})\s*年?$/.exec(v))==null?void 0:$[1])??"",G=!v||!!_&&String(g.year)===_||g.title.toLowerCase().includes(v)||(g.desc||"").toLowerCase().includes(v),Z=!M||String(g.year)===M,h=!w||g.month===w,C=!O||((J=g.keyPoints)==null?void 0:J.readingLevel)===O;return G&&Z&&h&&C}),le=[];for(let g=0;g<T.length;g+=3)le.push(T.slice(g,g+3));ze.current.length=le.length;const de=g=>re.filter(v=>v&&v.id===g).length,ke=g=>{pe.current=null,ce(g)};return r.jsxs("div",{ref:Se,className:`pl-root${se?" scrolled":""}`,children:[r.jsx("style",{children:sg}),r.jsxs("div",{className:"pl-float",children:[r.jsxs("div",{className:"pl-float-bar",children:[r.jsxs("div",{className:"pl-float-left",children:[r.jsx("button",{className:"pl-fab",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Up,{})}),r.jsx("button",{className:`pl-fab${ye?" on":""}`,onClick:()=>we(g=>!g),"aria-label":"搜索",title:"搜索",children:r.jsx(Es,{width:17,height:17})})]}),r.jsxs("div",{className:"pl-float-right",children:[r.jsxs("div",{className:"pl-fab-filters",children:[r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:M||"年"}),r.jsxs("select",{value:M,onChange:g=>k(g.target.value),"aria-label":"年份",children:[r.jsx("option",{value:"",children:"全部年份"}),ue.map(g=>r.jsxs("option",{value:g,children:[g," 年"]},g))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:w?`${Number(w)}月`:"月"}),r.jsxs("select",{value:w,onChange:g=>U(g.target.value),"aria-label":"月份",children:[r.jsx("option",{value:"",children:"全部月份"}),oe.map(g=>r.jsxs("option",{value:g,children:[Number(g)," 月"]},g))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:O||"难度"}),r.jsxs("select",{value:O,onChange:g=>K(g.target.value),"aria-label":"难度",children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]})]})]}),r.jsx("div",{className:"pl-fab-switch",children:["cet4","cet6"].map(g=>r.jsx("button",{onClick:()=>{d(g),L(""),k(""),U(""),K(""),we(!1)},className:`pl-fab pl-num${c===g?" on":""}`,children:g==="cet4"?"4":"6"},g))})]})]}),se&&ye&&r.jsxs("div",{className:"pl-search-pop",children:[r.jsx(Es,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{autoFocus:!0,value:z,onChange:g=>L(g.target.value),placeholder:"搜索真题标题 / 年份 如 2025"}),r.jsxs("button",{className:"pl-pop-reset",onClick:()=>{L(""),k(""),U(""),K("")},children:[r.jsx(Ep,{width:14,height:14,color:"var(--affine-text-secondary-color)"}),"重置"]})]})]}),r.jsxs("div",{className:"pl-inner",children:[r.jsxs("div",{className:"pl-head",children:[r.jsxs("div",{className:"pl-head-left",children:[r.jsx("button",{className:"pl-back-inline",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Up,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"pl-h2",children:"真题试卷库"}),r.jsx("p",{className:"pl-sub",children:"收录历年 CET-4 / CET-6 真题，支持在线阅读与自测"})]})]}),r.jsx("div",{className:"pl-switch",children:["cet4","cet6"].map(g=>r.jsx("button",{onClick:()=>{d(g),L(""),k(""),U(""),K("")},className:`pl-switch-btn${c===g?" on":""}`,children:g==="cet4"?"英语四级 (CET-4)":"英语六级 (CET-6)"},g))})]}),r.jsxs("div",{className:"pl-filter",children:[r.jsxs("div",{className:"pl-search",children:[r.jsx(Es,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{value:z,onChange:g=>L(g.target.value),placeholder:"搜索真题标题 / 年份 如 2025"})]}),r.jsxs("select",{value:M,onChange:g=>k(g.target.value),children:[r.jsx("option",{value:"",children:"全部年份"}),ue.map(g=>r.jsxs("option",{value:g,children:[g," 年"]},g))]}),r.jsxs("select",{value:w,onChange:g=>U(g.target.value),children:[r.jsx("option",{value:"",children:"全部月份"}),oe.map(g=>r.jsxs("option",{value:g,children:[Number(g)," 月"]},g))]}),r.jsxs("select",{value:O,onChange:g=>K(g.target.value),children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]}),r.jsxs("button",{className:"pl-reset",onClick:()=>{L(""),k(""),U(""),K("")},children:[r.jsx(Ep,{width:15,height:15,color:"var(--affine-text-secondary-color)"}),"重置"]}),r.jsxs("span",{className:"pl-count",children:["共 ",T.length," 套"]})]}),T.length===0?r.jsx("div",{className:"pl-empty",children:"没有符合条件的试卷"}):le.map((g,v)=>{const _=F===v;return r.jsx("div",{className:"lion-container",ref:G=>{ze.current[v]=G},children:g.map((G,Z)=>r.jsx(og,{paper:G,type:c,r:[-15,5,25][Z%3],submitted:de(G.id),expanded:_,onOpen:()=>s(G),onActivate:()=>ke(v)},G.id))},v)})]})]})},og=({paper:c,type:f,r:d,submitted:s,expanded:p,onOpen:z,onActivate:L})=>{const M=c.keyPoints,[k,w]=y.useState(!1),U=()=>{p?w(te=>!te):L()},O=[{label:"听力重点",items:M==null?void 0:M.listening},{label:"阅读重点",items:M==null?void 0:M.reading},{label:"写作重点",items:M==null?void 0:M.writing},{label:"翻译主题",items:M==null?void 0:M.translation}],K=(M==null?void 0:M.readingDifficulty)??[],re=K.length?K.map((te,ye)=>`P${ye+1} ${te}`).join(" · "):"",ee=/^(.*?)\s*([（(]\s*第[^）)]*[）)])\s*$/.exec(c.title.trim()),F=ee?ee[1].trim():c.title,ce=ee?ee[2]:"",se=["glass","pl-glass",p?"expanded":"",k?"flipped":""].filter(Boolean).join(" ");return r.jsxs("div",{className:se,"data-text":`${c.year}年`,style:{"--r":d},children:[r.jsxs("div",{className:"pl-face pl-face-front",children:[r.jsxs("div",{className:"pl-title",children:[r.jsx("span",{className:"pl-title-main",children:F}),ce&&r.jsx("span",{className:"pl-title-sub",children:ce})]}),r.jsxs("div",{className:"pl-meta",children:[r.jsx("span",{children:"已提交次数"}),r.jsxs("b",{children:[s," 次"]})]})]}),r.jsxs("div",{className:"pl-face pl-face-back",children:[r.jsx("div",{className:"pl-back-head",children:"考试重难点"}),re&&r.jsxs("div",{className:"pl-back-sec",children:[r.jsxs("div",{className:"pl-back-label",children:["阅读难度",(M==null?void 0:M.readingLevel)&&r.jsxs("span",{className:`rd-level lv-${M.readingLevel}`,children:["最难 ",M.readingLevel]})]}),r.jsx("div",{className:"pl-rd",children:K.map((te,ye)=>r.jsxs("span",{className:`rd-item lv-${te}`,children:["第",["一","二","三","四"][ye],"篇 ",te]},ye))})]}),O.map(te=>r.jsxs("div",{className:"pl-back-sec",children:[r.jsx("div",{className:"pl-back-label",children:te.label}),r.jsx("div",{className:"pl-back-text",children:te.items&&te.items.length>0?te.items.join(" · "):"—"})]},te.label)),r.jsx("div",{className:"pl-back-tip",children:"再次点击翻回"})]}),r.jsx("div",{className:"pl-hit",onClick:U}),r.jsxs("div",{className:"pl-actions",onClick:te=>te.stopPropagation(),children:[r.jsx("button",{className:"pl-btn-write",onClick:z,children:"write"}),r.jsx("button",{type:"button",className:"pl-btn-download",onClick:()=>window.alert("该真题 PDF 源文件暂未上传，可在线查看试卷内容"),children:"download"})]})]})};function cg(c){return[...new Set(c)].sort((f,d)=>d.localeCompare(f))}const Up=()=>r.jsx("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5.5 8 12l6.5 6.5"})}),sg=`
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
`,ug=[{key:"yi",tip:"英语（一）",second:"学术学位 · 历年真题",bg:"#0E61AC",fg:"#ffffff"},{key:"er",tip:"英语（二）",second:"专业学位 · 历年真题",bg:"#FAF2E0",fg:"#0E61AC"}],dg=({onPick:c,onBack:f})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:fg}),r.jsxs("div",{className:"ky-head",children:[r.jsx("button",{type:"button",className:"ky-back",onClick:f,children:"← 返回真题训练"}),r.jsx("h2",{className:"ky-title",children:"考研英语"}),r.jsx("p",{className:"ky-sub",children:"选择报考类型进入题库"})]}),r.jsx("div",{className:"ky-stage",children:r.jsx("div",{className:"cards","data-testid":"kaoyan-cards",children:ug.map(d=>r.jsxs("div",{className:"card","data-testid":`kaoyan-card-${d.key}`,style:{"--ky-bg":d.bg,"--ky-fg":d.fg},onClick:()=>c(d.key),children:[r.jsx("p",{className:"tip",children:d.tip}),r.jsx("p",{className:"second-text",children:d.second}),r.jsx("p",{className:"paper-foot",children:"硕士研究生入学考试"})]},d.key))})})]}),fg=`
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
`,pg=()=>{const[c,f]=y.useState("cet4"),[d,s]=y.useState(!1),[p,z]=y.useState(null),[L,M]=y.useState(""),[k,w]=y.useState(!1);return r.jsx("div",{"data-testid":"paper-view",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",position:"relative",background:"var(--affine-background-secondary-color)",overflow:"auto",paddingBottom:"84px"},children:r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:k?r.jsx(dg,{onPick:U=>{const O=U==="yi"?"英语（一）":"英语（二）";window.alert(`考研英语${O}题库即将上线`)},onBack:()=>w(!1)}):d?p?r.jsx(W1,{paper:p,type:c,onBack:()=>z(null)}):r.jsx(rg,{activeType:c,initialYear:L,onTypeChange:U=>{f(U),M("")},onOpenPaper:z,onBackToEntry:()=>{z(null),s(!1)}}):r.jsx(ag,{onEnter:(U,O)=>{if(U==="kaoyan"){w(!0);return}f(U),M(O?String(O):""),s(!0)}})})})},Bp=16,Ul=64,mo=12,hg=50,Yp=23,Gp=44,gg=["试卷","听力","收藏","设置","我的"],Xp=[{name:"Home",Icon:K2},{name:"Words",Icon:Fp},{name:"Notes",Icon:l0},{name:"Settings",Icon:c0},{name:"Profile",Icon:I2}],Aa=(c,f,d)=>Math.min(Math.max(c,f),d);function mg(c,f){const d=c/2,s=Math.max(f,1e-4),p=Math.sqrt(d*d+s*s),z=Math.atan2(d,s),L=p/2/Math.cos(z),M={x:d,y:L},k=2*(Math.PI/2-z),w=3*Math.PI/2-k,U=3*Math.PI/2+k;return{center:M,radius:L,startAngle:w,endAngle:U}}function xg(c,f,d,s){const p=f/2,{center:z,radius:L,startAngle:M,endAngle:k}=c,w=(ee,F)=>({x:z.x+ee*Math.cos(F)+d,y:z.y+ee*Math.sin(F)+s}),U=w(L+p,M),O=w(L+p,k),K=w(L-p,M),re=w(L-p,k);return[`M ${U.x.toFixed(2)} ${U.y.toFixed(2)}`,`A ${L+p} ${L+p} 0 0 1 ${O.x.toFixed(2)} ${O.y.toFixed(2)}`,`A ${p} ${p} 0 0 1 ${re.x.toFixed(2)} ${re.y.toFixed(2)}`,`A ${L-p} ${L-p} 0 0 0 ${K.x.toFixed(2)} ${K.y.toFixed(2)}`,`A ${p} ${p} 0 0 1 ${U.x.toFixed(2)} ${U.y.toFixed(2)}`,"Z"].join(" ")}function yg({activeIndex:c,onTabChange:f}){const d=y.useRef(null),s=y.useRef(null),[p,z]=y.useState(0),[L,M]=y.useState(!1),[k,w]=y.useState(0),U=Xp.length,O=y.useMemo(()=>{if(p<=0)return null;const de=Math.max(p-Ul,1),ke=mg(de,Bp),g=ke.radius,v=p/2,_=g+Ul/2,G=de/2,Z=Bp+Ul,h=(p-mo*2)/U,C=Array.from({length:U},(W,Ce)=>mo+h*(Ce+.5)),$=Math.min(h*1.12,84),J=xg(ke,Ul,Ul/2,Ul/2);return{radius:g,centerX:v,centerY:_,halfSpan:G,barHeight:Z,slotWidth:h,tabCenters:C,pillWidth:$,path:J,centerlineY:W=>{const Ce=Aa(W-v,-G,G);return _-Math.sqrt(Math.max(g*g-Ce*Ce,0))}}},[p,U]);y.useLayoutEffect(()=>{const de=d.current;if(!de)return;const ke=()=>z(de.clientWidth);ke();const g=new ResizeObserver(ke);return g.observe(de),()=>g.disconnect()},[]),y.useEffect(()=>{O&&(L||w(O.tabCenters[Aa(c,0,U-1)]))},[O,c,L,U]);const K=de=>{de.currentTarget.setPointerCapture(de.pointerId),s.current={startX:de.clientX,startCenter:k},M(!0)},re=de=>{if(!L||!s.current||!O)return;const ke=de.clientX-s.current.startX,g=Aa(s.current.startCenter+ke,O.tabCenters[0],O.tabCenters[U-1]);w(g)},ee=de=>{if(!L||!s.current||!O)return;M(!1);const ke=Math.abs(de.clientX-s.current.startX);let g;if(ke<6){const v=d.current.getBoundingClientRect(),_=de.clientX-v.left;g=Aa(Math.round((_-mo)/O.slotWidth-.5),0,U-1)}else g=Aa(Math.round((k-mo)/O.slotWidth-.5),0,U-1);f(g),w(O.tabCenters[g])};if(!O)return r.jsx("div",{className:"cet-curved-wrap",children:r.jsx("div",{className:"cet-curved-bar",ref:d})});const{radius:F,centerX:ce,centerY:se,halfSpan:te,barHeight:ye,slotWidth:we,tabCenters:Se,pillWidth:pe,path:xe,centerlineY:ze}=O,ne=Aa(k-ce,-te,te),ue=Math.sqrt(Math.max(F*F-ne*ne,0)),oe=se-ue-hg/2,T=Math.atan2(ne,ue),le=k-pe/2;return r.jsx("div",{className:"cet-curved-wrap",children:r.jsxs("div",{className:"cet-curved-bar",ref:d,style:{height:ye},onPointerDown:K,onPointerMove:re,onPointerUp:ee,onPointerCancel:ee,children:[r.jsx("div",{className:"cet-curved-surface",style:{clipPath:`path("${xe}")`,WebkitClipPath:`path("${xe}")`}}),Xp.map((de,ke)=>{const g=Se[ke],v=Aa(g-ce,-te,te),_=ze(g),G=Math.atan2(v,Math.sqrt(Math.max(F*F-v*v,0))),Z=Math.abs(k-g),h=Aa(1-Z/(we*.55),0,1),C=1-h,$=de.Icon;return r.jsxs("div",{className:"cet-curved-icon",style:{left:g-Gp/2,top:_-Gp/2,transform:`rotate(${G}rad)`},children:[r.jsx("span",{className:"glyph idle",style:{opacity:C},children:r.jsx($,{size:Yp})}),r.jsx("span",{className:"glyph active",style:{opacity:h},children:r.jsx($,{size:Yp})})]},de.name)}),r.jsx("div",{className:`cet-curved-pill${L?" dragging":""}`,style:{left:le,top:oe,width:pe,transform:`rotate(${T}rad)`}})]})})}const h0=[{title:"习题集",items:[{key:"papers",label:"真题库",Icon:Q2}]},{title:"学习",items:[{key:"words",label:"单词背诵",Icon:Fp},{key:"notes",label:"笔记",Icon:l0}]},{title:"整理",items:[{key:"reading",label:"文献阅读",Icon:Z2}]}];function bg({active:c,onNavigate:f,collapsed:d,onCollapse:s}){return r.jsxs("aside",{className:`sb-card${d?" is-collapsed":""}`,"data-testid":"side-bar",children:[r.jsxs("div",{className:"sb-lights",children:[r.jsx("span",{className:"sb-light sb-light-r"}),r.jsx("span",{className:"sb-light sb-light-y"}),r.jsx("span",{className:"sb-light sb-light-g"}),r.jsx("button",{type:"button",className:"sb-collapse-btn",title:"收起侧边栏","aria-label":"收起侧边栏",onClick:s,children:r.jsx(W2,{size:17,strokeWidth:2})})]}),r.jsxs("div",{className:"sb-logo-row",children:[r.jsx("span",{className:"sb-logo-mark",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("circle",{cx:"12",cy:"12",r:"8.2",stroke:"#fff",strokeWidth:"2.6"}),r.jsx("circle",{cx:"12",cy:"12",r:"3.2",fill:"#fff"})]})}),r.jsx("span",{className:"sb-logo-text",children:"YOUR LOGO"})]}),r.jsx("nav",{className:"sb-nav",children:h0.map(p=>r.jsxs("div",{className:"sb-group",children:[r.jsx("div",{className:"sb-group-title",children:p.title}),p.items.map(z=>{const L=z.Icon,M=c===z.key;return r.jsxs("button",{type:"button",className:`sb-item${M?" is-active":""}`,onClick:()=>f(z.key),children:[r.jsx(L,{size:18,strokeWidth:2}),r.jsx("span",{className:"sb-item-label",children:z.label})]},z.key)})]},p.title))}),r.jsxs("div",{className:"sb-user-card",children:[r.jsx("span",{className:"sb-avatar",children:r.jsx($2,{size:22})}),r.jsxs("span",{className:"sb-user-meta",children:[r.jsx("span",{className:"sb-user-name",children:"MIAO"}),r.jsx("span",{className:"sb-user-role",children:"Designer"})]})]}),r.jsxs("div",{className:"sb-footer",children:[r.jsxs("button",{type:"button",className:"sb-item",children:[r.jsx(c0,{size:18,strokeWidth:2}),r.jsx("span",{className:"sb-item-label",children:"设置"})]}),r.jsxs("button",{type:"button",className:"sb-item",children:[r.jsx(J2,{size:18,strokeWidth:2}),r.jsx("span",{className:"sb-item-label",children:"退出"})]})]})]})}const vg=264,wg=Object.fromEntries(h0.flatMap(c=>c.items.map(f=>[f.key,f.label]))),Vp="https://readest.your-domain.com";function Sg(){return Vp.includes("your-domain")?r.jsx("div",{className:"lit-wrap",children:r.jsxs("div",{className:"lit-config",children:[r.jsx("div",{className:"lit-config-icon",children:"📖"}),r.jsx("div",{className:"lit-config-title",children:"文献阅读 · Readest"}),r.jsxs("div",{className:"lit-config-sub",children:["点击左侧「文献阅读」会嵌入 Readest 阅读器。请在",r.jsx("code",{children:"src/paper-view/literature-view.tsx"}),"顶部把 ",r.jsx("code",{children:"READEST_URL"})," 改为你的部署地址（如 ",r.jsx("code",{children:"https://readest.你的域名"}),"，本地预览填 ",r.jsx("code",{children:"http://localhost:3000"}),"）。"]}),r.jsxs("ol",{className:"lit-config-steps",children:[r.jsx("li",{children:"在服务器用 Docker 部署 Readest（见 readest/DEPLOY.md 三步）。"}),r.jsxs("li",{children:["Nginx 反代到 ",r.jsx("code",{children:":3000"}),"，",r.jsx("b",{children:"不要"}),"加 ",r.jsx("code",{children:"X-Frame-Options"})," 或 ",r.jsx("code",{children:"frame-ancestors"})," 限制。"]}),r.jsxs("li",{children:["把上面的地址填入 ",r.jsx("code",{children:"READEST_URL"})," 并重新构建，即可在此处直接阅读。"]})]}),r.jsx("div",{className:"lit-config-note",children:"数据说明：导入的书 / 批注 / 进度默认存在访客浏览器本地（IndexedDB），服务器无状态；如需云同步需配置 Supabase 重新构建。"})]})}):r.jsx("div",{className:"lit-wrap",children:r.jsx("iframe",{className:"lit-frame",src:Vp,title:"文献阅读 · Readest",allow:"fullscreen; clipboard-read; clipboard-write"})})}function Qp({title:c}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,padding:"24px 24px 96px",textAlign:"center",color:"var(--affine-text-secondary-color)",background:"var(--affine-background-secondary-color)"},children:[r.jsx("div",{style:{fontSize:40},children:"🚧"}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"var(--affine-text-primary-color)"},children:c}),r.jsx("div",{style:{fontSize:13,opacity:.7},children:"该界面待开发，敬请期待"})]})}const kg=()=>{const[c,f]=y.useState(0),[d,s]=y.useState("papers"),[p,z]=y.useState(!1);let L;return c!==0?L=r.jsx(Qp,{title:gg[c]??"板块"}):d==="papers"?L=r.jsx(pg,{}):d==="reading"?L=r.jsx(Sg,{}):L=r.jsx(Qp,{title:wg[d]??"界面"}),r.jsxs(r.Fragment,{children:[r.jsx(bg,{active:d,onNavigate:s,collapsed:p,onCollapse:()=>z(!0)}),p&&r.jsx("button",{type:"button",className:"sb-expand-btn",title:"展开侧边栏","aria-label":"展开侧边栏",onClick:()=>z(!1),children:r.jsx(F2,{size:18,strokeWidth:2})}),r.jsx("div",{className:`sb-content-offset${p?" sb-full":""}`,style:{height:"100%",display:"flex",flexDirection:"column",boxSizing:"border-box",paddingLeft:p?0:vg},children:L}),r.jsx("div",{className:`sb-nav-overlay${p?" sb-full":""}`,children:r.jsx(yg,{activeIndex:c,onTabChange:f})})]})},g0=document.getElementById("root");if(!g0)throw new Error("#root missing");document.documentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0";document.body.style.fontFamily="var(--affine-font-family)";const Zp=document.getElementById("root");Zp&&(Zp.style.height="100%");document.body.style.background="var(--affine-background-secondary-color)";L2.createRoot(g0).render(r.jsx(y.StrictMode,{children:r.jsx(k2,{attribute:"data-theme",defaultTheme:"light",enableSystem:!1,children:r.jsx(kg,{})})}));
