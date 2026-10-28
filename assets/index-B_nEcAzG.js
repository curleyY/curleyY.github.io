(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const z of p)if(z.type==="childList")for(const q of z.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&c(q)}).observe(document,{childList:!0,subtree:!0});function d(p){const z={};return p.integrity&&(z.integrity=p.integrity),p.referrerPolicy&&(z.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?z.credentials="include":p.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function c(p){if(p.ep)return;p.ep=!0;const z=d(p);fetch(p.href,z)}})();var vc={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function a2(){if(mp)return Hi;mp=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(c,p,z){var q=null;if(z!==void 0&&(q=""+z),p.key!==void 0&&(q=""+p.key),"key"in p){z={};for(var E in p)E!=="key"&&(z[E]=p[E])}else z=p;return p=z.ref,{$$typeof:s,type:c,key:q,ref:p!==void 0?p:null,props:z}}return Hi.Fragment=f,Hi.jsx=d,Hi.jsxs=d,Hi}var gp;function l2(){return gp||(gp=1,vc.exports=a2()),vc.exports}var r=l2(),wc={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function i2(){if(xp)return Ee;xp=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),q=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),B=Symbol.iterator;function F(h){return h===null||typeof h!="object"?null:(h=B&&h[B]||h["@@iterator"],typeof h=="function"?h:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,ue={};function de(h,A,$){this.props=h,this.context=A,this.refs=ue,this.updater=$||I}de.prototype.isReactComponent={},de.prototype.setState=function(h,A){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,A,"setState")},de.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function le(){}le.prototype=de.prototype;function xe(h,A,$){this.props=h,this.context=A,this.refs=ue,this.updater=$||I}var ye=xe.prototype=new le;ye.constructor=xe,P(ye,de.prototype),ye.isPureReactComponent=!0;var ke=Array.isArray;function ce(){}var fe={H:null,A:null,T:null,S:null},be=Object.prototype.hasOwnProperty;function ne(h,A,$){var J=$.ref;return{$$typeof:s,type:h,key:A,ref:J!==void 0?J:null,props:$}}function se(h,A){return ne(h.type,A,h.props)}function re(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function T(h){var A={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function($){return A[$]})}var ie=/\/+/g;function ve(h,A){return typeof h=="object"&&h!==null&&h.key!=null?T(""+h.key):A.toString(36)}function ze(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(ce,ce):(h.status="pending",h.then(function(A){h.status==="pending"&&(h.status="fulfilled",h.value=A)},function(A){h.status==="pending"&&(h.status="rejected",h.reason=A)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function m(h,A,$,J,pe){var W=typeof h;(W==="undefined"||W==="boolean")&&(h=null);var Ae=!1;if(h===null)Ae=!0;else switch(W){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(h.$$typeof){case s:case f:Ae=!0;break;case U:return Ae=h._init,m(Ae(h._payload),A,$,J,pe)}}if(Ae)return pe=pe(h),Ae=J===""?"."+ve(h,0):J,ke(pe)?($="",Ae!=null&&($=Ae.replace(ie,"$&/")+"/"),m(pe,A,$,"",function(rt){return rt})):pe!=null&&(re(pe)&&(pe=se(pe,$+(pe.key==null||h&&h.key===pe.key?"":(""+pe.key).replace(ie,"$&/")+"/")+Ae)),A.push(pe)),1;Ae=0;var Xe=J===""?".":J+":";if(ke(h))for(var Ne=0;Ne<h.length;Ne++)J=h[Ne],W=Xe+ve(J,Ne),Ae+=m(J,A,$,W,pe);else if(Ne=F(h),typeof Ne=="function")for(h=Ne.call(h),Ne=0;!(J=h.next()).done;)J=J.value,W=Xe+ve(J,Ne++),Ae+=m(J,A,$,W,pe);else if(W==="object"){if(typeof h.then=="function")return m(ze(h),A,$,J,pe);throw A=String(h),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function w(h,A,$){if(h==null)return h;var J=[],pe=0;return m(h,J,"","",function(W){return A.call($,W,pe++)}),J}function j(h){if(h._status===-1){var A=h._result;A=A(),A.then(function($){(h._status===0||h._status===-1)&&(h._status=1,h._result=$)},function($){(h._status===0||h._status===-1)&&(h._status=2,h._result=$)}),h._status===-1&&(h._status=0,h._result=A)}if(h._status===1)return h._result.default;throw h._result}var X=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},Q={map:w,forEach:function(h,A,$){w(h,function(){A.apply(this,arguments)},$)},count:function(h){var A=0;return w(h,function(){A++}),A},toArray:function(h){return w(h,function(A){return A})||[]},only:function(h){if(!re(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return Ee.Activity=R,Ee.Children=Q,Ee.Component=de,Ee.Fragment=d,Ee.Profiler=p,Ee.PureComponent=xe,Ee.StrictMode=c,Ee.Suspense=k,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(h){return fe.H.useMemoCache(h)}},Ee.cache=function(h){return function(){return h.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(h,A,$){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var J=P({},h.props),pe=h.key;if(A!=null)for(W in A.key!==void 0&&(pe=""+A.key),A)!be.call(A,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&A.ref===void 0||(J[W]=A[W]);var W=arguments.length-2;if(W===1)J.children=$;else if(1<W){for(var Ae=Array(W),Xe=0;Xe<W;Xe++)Ae[Xe]=arguments[Xe+2];J.children=Ae}return ne(h.type,pe,J)},Ee.createContext=function(h){return h={$$typeof:q,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:z,_context:h},h},Ee.createElement=function(h,A,$){var J,pe={},W=null;if(A!=null)for(J in A.key!==void 0&&(W=""+A.key),A)be.call(A,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(pe[J]=A[J]);var Ae=arguments.length-2;if(Ae===1)pe.children=$;else if(1<Ae){for(var Xe=Array(Ae),Ne=0;Ne<Ae;Ne++)Xe[Ne]=arguments[Ne+2];pe.children=Xe}if(h&&h.defaultProps)for(J in Ae=h.defaultProps,Ae)pe[J]===void 0&&(pe[J]=Ae[J]);return ne(h,W,pe)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(h){return{$$typeof:E,render:h}},Ee.isValidElement=re,Ee.lazy=function(h){return{$$typeof:U,_payload:{_status:-1,_result:h},_init:j}},Ee.memo=function(h,A){return{$$typeof:v,type:h,compare:A===void 0?null:A}},Ee.startTransition=function(h){var A=fe.T,$={};fe.T=$;try{var J=h(),pe=fe.S;pe!==null&&pe($,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ce,X)}catch(W){X(W)}finally{A!==null&&$.types!==null&&(A.types=$.types),fe.T=A}},Ee.unstable_useCacheRefresh=function(){return fe.H.useCacheRefresh()},Ee.use=function(h){return fe.H.use(h)},Ee.useActionState=function(h,A,$){return fe.H.useActionState(h,A,$)},Ee.useCallback=function(h,A){return fe.H.useCallback(h,A)},Ee.useContext=function(h){return fe.H.useContext(h)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(h,A){return fe.H.useDeferredValue(h,A)},Ee.useEffect=function(h,A){return fe.H.useEffect(h,A)},Ee.useEffectEvent=function(h){return fe.H.useEffectEvent(h)},Ee.useId=function(){return fe.H.useId()},Ee.useImperativeHandle=function(h,A,$){return fe.H.useImperativeHandle(h,A,$)},Ee.useInsertionEffect=function(h,A){return fe.H.useInsertionEffect(h,A)},Ee.useLayoutEffect=function(h,A){return fe.H.useLayoutEffect(h,A)},Ee.useMemo=function(h,A){return fe.H.useMemo(h,A)},Ee.useOptimistic=function(h,A){return fe.H.useOptimistic(h,A)},Ee.useReducer=function(h,A,$){return fe.H.useReducer(h,A,$)},Ee.useRef=function(h){return fe.H.useRef(h)},Ee.useState=function(h){return fe.H.useState(h)},Ee.useSyncExternalStore=function(h,A,$){return fe.H.useSyncExternalStore(h,A,$)},Ee.useTransition=function(){return fe.H.useTransition()},Ee.version="19.2.1",Ee}var yp;function Dc(){return yp||(yp=1,wc.exports=i2()),wc.exports}var y=Dc(),r2=(s,f,d,c,p,z,q,E)=>{let k=document.documentElement,v=["light","dark"];function U(F){(Array.isArray(s)?s:[s]).forEach(I=>{let P=I==="class",ue=P&&z?p.map(de=>z[de]||de):p;P?(k.classList.remove(...ue),k.classList.add(z&&z[F]?z[F]:F)):k.setAttribute(I,F)}),R(F)}function R(F){E&&v.includes(F)&&(k.style.colorScheme=F)}function B(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(c)U(c);else try{let F=localStorage.getItem(f)||d,I=q&&F==="system"?B():F;U(I)}catch{}},bp=["light","dark"],Zp="(prefers-color-scheme: dark)",o2=typeof window>"u",Rc=y.createContext(void 0),s2={setTheme:s=>{},themes:[]},c2=()=>{var s;return(s=y.useContext(Rc))!=null?s:s2},u2=s=>y.useContext(Rc)?y.createElement(y.Fragment,null,s.children):y.createElement(f2,{...s}),d2=["light","dark"],f2=({forcedTheme:s,disableTransitionOnChange:f=!1,enableSystem:d=!0,enableColorScheme:c=!0,storageKey:p="theme",themes:z=d2,defaultTheme:q=d?"system":"light",attribute:E="data-theme",value:k,children:v,nonce:U,scriptProps:R})=>{let[B,F]=y.useState(()=>h2(p,q)),[I,P]=y.useState(()=>B==="system"?Sc():B),ue=k?Object.values(k):z,de=y.useCallback(ke=>{let ce=ke;if(!ce)return;ke==="system"&&d&&(ce=Sc());let fe=k?k[ce]:ce,be=f?m2(U):null,ne=document.documentElement,se=re=>{re==="class"?(ne.classList.remove(...ue),fe&&ne.classList.add(fe)):re.startsWith("data-")&&(fe?ne.setAttribute(re,fe):ne.removeAttribute(re))};if(Array.isArray(E)?E.forEach(se):se(E),c){let re=bp.includes(q)?q:null,T=bp.includes(ce)?ce:re;ne.style.colorScheme=T}be==null||be()},[U]),le=y.useCallback(ke=>{let ce=typeof ke=="function"?ke(B):ke;F(ce);try{localStorage.setItem(p,ce)}catch{}},[B]),xe=y.useCallback(ke=>{let ce=Sc(ke);P(ce),B==="system"&&d&&!s&&de("system")},[B,s]);y.useEffect(()=>{let ke=window.matchMedia(Zp);return ke.addListener(xe),xe(ke),()=>ke.removeListener(xe)},[xe]),y.useEffect(()=>{let ke=ce=>{ce.key===p&&(ce.newValue?F(ce.newValue):le(q))};return window.addEventListener("storage",ke),()=>window.removeEventListener("storage",ke)},[le]),y.useEffect(()=>{de(s??B)},[s,B]);let ye=y.useMemo(()=>({theme:B,setTheme:le,forcedTheme:s,resolvedTheme:B==="system"?I:B,themes:d?[...z,"system"]:z,systemTheme:d?I:void 0}),[B,le,s,I,d,z]);return y.createElement(Rc.Provider,{value:ye},y.createElement(p2,{forcedTheme:s,storageKey:p,attribute:E,enableSystem:d,enableColorScheme:c,defaultTheme:q,value:k,themes:z,nonce:U,scriptProps:R}),v)},p2=y.memo(({forcedTheme:s,storageKey:f,attribute:d,enableSystem:c,enableColorScheme:p,defaultTheme:z,value:q,themes:E,nonce:k,scriptProps:v})=>{let U=JSON.stringify([d,f,z,s,E,q,c,p]).slice(1,-1);return y.createElement("script",{...v,suppressHydrationWarning:!0,nonce:typeof window>"u"?k:"",dangerouslySetInnerHTML:{__html:`(${r2.toString()})(${U})`}})}),h2=(s,f)=>{if(o2)return;let d;try{d=localStorage.getItem(s)||void 0}catch{}return d||f},m2=s=>{let f=document.createElement("style");return s&&f.setAttribute("nonce",s),f.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(f),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(f)},1)}},Sc=s=>(s||(s=window.matchMedia(Zp)),s.matches?"dark":"light"),kc={exports:{}},Ui={},jc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function g2(){return vp||(vp=1,(function(s){function f(m,w){var j=m.length;m.push(w);e:for(;0<j;){var X=j-1>>>1,Q=m[X];if(0<p(Q,w))m[X]=w,m[j]=Q,j=X;else break e}}function d(m){return m.length===0?null:m[0]}function c(m){if(m.length===0)return null;var w=m[0],j=m.pop();if(j!==w){m[0]=j;e:for(var X=0,Q=m.length,h=Q>>>1;X<h;){var A=2*(X+1)-1,$=m[A],J=A+1,pe=m[J];if(0>p($,j))J<Q&&0>p(pe,$)?(m[X]=pe,m[J]=j,X=J):(m[X]=$,m[A]=j,X=A);else if(J<Q&&0>p(pe,j))m[X]=pe,m[J]=j,X=J;else break e}}return w}function p(m,w){var j=m.sortIndex-w.sortIndex;return j!==0?j:m.id-w.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;s.unstable_now=function(){return z.now()}}else{var q=Date,E=q.now();s.unstable_now=function(){return q.now()-E}}var k=[],v=[],U=1,R=null,B=3,F=!1,I=!1,P=!1,ue=!1,de=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function ye(m){for(var w=d(v);w!==null;){if(w.callback===null)c(v);else if(w.startTime<=m)c(v),w.sortIndex=w.expirationTime,f(k,w);else break;w=d(v)}}function ke(m){if(P=!1,ye(m),!I)if(d(k)!==null)I=!0,ce||(ce=!0,T());else{var w=d(v);w!==null&&ze(ke,w.startTime-m)}}var ce=!1,fe=-1,be=5,ne=-1;function se(){return ue?!0:!(s.unstable_now()-ne<be)}function re(){if(ue=!1,ce){var m=s.unstable_now();ne=m;var w=!0;try{e:{I=!1,P&&(P=!1,le(fe),fe=-1),F=!0;var j=B;try{t:{for(ye(m),R=d(k);R!==null&&!(R.expirationTime>m&&se());){var X=R.callback;if(typeof X=="function"){R.callback=null,B=R.priorityLevel;var Q=X(R.expirationTime<=m);if(m=s.unstable_now(),typeof Q=="function"){R.callback=Q,ye(m),w=!0;break t}R===d(k)&&c(k),ye(m)}else c(k);R=d(k)}if(R!==null)w=!0;else{var h=d(v);h!==null&&ze(ke,h.startTime-m),w=!1}}break e}finally{R=null,B=j,F=!1}w=void 0}}finally{w?T():ce=!1}}}var T;if(typeof xe=="function")T=function(){xe(re)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ve=ie.port2;ie.port1.onmessage=re,T=function(){ve.postMessage(null)}}else T=function(){de(re,0)};function ze(m,w){fe=de(function(){m(s.unstable_now())},w)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(m){m.callback=null},s.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<m?Math.floor(1e3/m):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_next=function(m){switch(B){case 1:case 2:case 3:var w=3;break;default:w=B}var j=B;B=w;try{return m()}finally{B=j}},s.unstable_requestPaint=function(){ue=!0},s.unstable_runWithPriority=function(m,w){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var j=B;B=m;try{return w()}finally{B=j}},s.unstable_scheduleCallback=function(m,w,j){var X=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?X+j:X):j=X,m){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,m={id:U++,callback:w,priorityLevel:m,startTime:j,expirationTime:Q,sortIndex:-1},j>X?(m.sortIndex=j,f(v,m),d(k)===null&&m===d(v)&&(P?(le(fe),fe=-1):P=!0,ze(ke,j-X))):(m.sortIndex=Q,f(k,m),I||F||(I=!0,ce||(ce=!0,T()))),m},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(m){var w=B;return function(){var j=B;B=w;try{return m.apply(this,arguments)}finally{B=j}}}})(Cc)),Cc}var wp;function x2(){return wp||(wp=1,jc.exports=g2()),jc.exports}var Ac={exports:{}},_t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function y2(){if(Sp)return _t;Sp=1;var s=Dc();function f(k){var v="https://react.dev/errors/"+k;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)v+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+k+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var c={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function z(k,v,U){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:R==null?null:""+R,children:k,containerInfo:v,implementation:U}}var q=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(k,v){if(k==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,_t.createPortal=function(k,v){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(f(299));return z(k,v,null,U)},_t.flushSync=function(k){var v=q.T,U=c.p;try{if(q.T=null,c.p=2,k)return k()}finally{q.T=v,c.p=U,c.d.f()}},_t.preconnect=function(k,v){typeof k=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,c.d.C(k,v))},_t.prefetchDNS=function(k){typeof k=="string"&&c.d.D(k)},_t.preinit=function(k,v){if(typeof k=="string"&&v&&typeof v.as=="string"){var U=v.as,R=E(U,v.crossOrigin),B=typeof v.integrity=="string"?v.integrity:void 0,F=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;U==="style"?c.d.S(k,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:R,integrity:B,fetchPriority:F}):U==="script"&&c.d.X(k,{crossOrigin:R,integrity:B,fetchPriority:F,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},_t.preinitModule=function(k,v){if(typeof k=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var U=E(v.as,v.crossOrigin);c.d.M(k,{crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&c.d.M(k)},_t.preload=function(k,v){if(typeof k=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var U=v.as,R=E(U,v.crossOrigin);c.d.L(k,U,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},_t.preloadModule=function(k,v){if(typeof k=="string")if(v){var U=E(v.as,v.crossOrigin);c.d.m(k,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:U,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else c.d.m(k)},_t.requestFormReset=function(k){c.d.r(k)},_t.unstable_batchedUpdates=function(k,v){return k(v)},_t.useFormState=function(k,v,U){return q.H.useFormState(k,v,U)},_t.useFormStatus=function(){return q.H.useHostTransitionStatus()},_t.version="19.2.1",_t}var kp;function Vp(){if(kp)return Ac.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),Ac.exports=y2(),Ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function b2(){if(jp)return Ui;jp=1;var s=x2(),f=Dc(),d=Vp();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function q(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(z(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=z(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return k(l),e;if(i===a)return k(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,a=i;break}if(u===a){o=!0,a=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,a=l;break}if(u===a){o=!0,a=i,n=l;break}u=u.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function U(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,B=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case de:return"Profiler";case ue:return"StrictMode";case ke:return"Suspense";case ce:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case xe:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var ze=Array.isArray,m=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},X=[],Q=-1;function h(e){return{current:e}}function A(e){0>Q||(e.current=X[Q],X[Q]=null,Q--)}function $(e,t){Q++,X[Q]=e.current,e.current=t}var J=h(null),pe=h(null),W=h(null),Ae=h(null);function Xe(e,t){switch($(W,t),$(pe,e),$(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hf(t),e=Uf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(J),$(J,e)}function Ne(){A(J),A(pe),A(W)}function rt(e){e.memoizedState!==null&&$(Ae,e);var t=J.current,n=Uf(t,e.type);t!==n&&($(pe,e),$(J,n))}function wt(e){pe.current===e&&(A(J),A(pe)),Ae.current===e&&(A(Ae),Di._currentValue=j)}var at,tn;function zt(e){if(at===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);at=t&&t[1]||"",tn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+tn}var $n=!1;function Qt(e,t){if(!e||$n)return"";$n=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(D){var M=D}Reflect.construct(e,[],V)}else{try{V.call()}catch(D){M=D}e.call(V.prototype)}}else{try{throw Error()}catch(D){M=D}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(D){if(D&&M&&typeof D.stack=="string")return[D.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],u=i[1];if(o&&u){var g=o.split(`
`),N=u.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===N.length)for(a=g.length-1,l=N.length-1;1<=a&&0<=l&&g[a]!==N[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==N[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==N[l]){var G=`
`+g[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=l);break}}}finally{$n=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zt(n):""}function Ia(e,t){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==t&&t!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return zt("Activity");default:return""}}function Pa(e){try{var t="",n=null;do t+=Ia(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Hl=Object.prototype.hasOwnProperty,Ul=s.unstable_scheduleCallback,el=s.unstable_cancelCallback,Xi=s.unstable_shouldYield,Aa=s.unstable_requestPaint,Mt=s.unstable_now,yo=s.unstable_getCurrentPriorityLevel,Dt=s.unstable_ImmediatePriority,En=s.unstable_UserBlockingPriority,Tt=s.unstable_NormalPriority,Na=s.unstable_LowPriority,tl=s.unstable_IdlePriority,bn=s.log,Bl=s.unstable_setDisableYieldValue,Kn=null,St=null;function Rt(e){if(typeof bn=="function"&&Bl(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Kn,e)}catch{}}var bt=Math.clz32?Math.clz32:bo,Zi=Math.log,Yl=Math.LN2;function bo(e){return e>>>=0,e===0?32:31-(Zi(e)/Yl|0)|0}var vn=256,Jn=262144,za=4194304;function Ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wn(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?l=Ot(a):(o&=u,o!==0?l=Ot(o):n||(n=u&~e,n!==0&&(l=Ot(n))))):(u=a&~i,u!==0?l=Ot(u):o!==0?l=Ot(o):n||(n=a&~e,n!==0&&(l=Ot(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Fn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vi(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gl(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function Ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function In(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xl(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,g=e.expirationTimes,N=e.hiddenUpdates;for(n=o&~n;0<n;){var G=31-bt(n),V=1<<G;u[G]=0,g[G]=-1;var M=N[G];if(M!==null)for(N[G]=null,G=0;G<M.length;G++){var D=M[G];D!==null&&(D.lane&=-536870913)}n&=~V}a!==0&&Qi(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Qi(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-bt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function nn(e,t){var n=t&-t;return n=(n&42)!==0?1:al(n),(n&(e.suspendedLanes|t))!==0?0:n}function al(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vl(){var e=w.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function $i(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var wn=Math.random().toString(36).slice(2),ut="__reactFiber$"+wn,Et="__reactProps$"+wn,Pn="__reactContainer$"+wn,Ql="__reactEvents$"+wn,Ki="__reactListeners$"+wn,vo="__reactHandles$"+wn,Ji="__reactResources$"+wn,an="__reactMarker$"+wn;function $l(e){delete e[ut],delete e[Et],delete e[Ql],delete e[Ki],delete e[vo]}function Sn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[ut])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function ea(e){if(e=e[ut]||e[Pn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ta(e){var t=e[Ji];return t||(t=e[Ji]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pt(e){e[an]=!0}var Wi=new Set,Kl={};function kn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(Kl[e]=t,e=0;e<t.length;e++)Wi.add(t[e])}var Fi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ii={},Pi={};function wo(e){return Hl.call(Pi,e)?!0:Hl.call(Ii,e)?!1:Fi.test(e)?Pi[e]=!0:(Ii[e]=!0,!1)}function ll(e,t,n){if(wo(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function jn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function er(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function il(e){if(!e._valueTracker){var t=Jl(e)?"checked":"value";e._valueTracker=er(e,t,""+e[t])}}function Wl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Jl(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tr=/[\n"\\]/g;function kt(e){return e.replace(tr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,n,a,l,i,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?$t(e,o,qt(t)):n!=null?$t(e,o,qt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+qt(u):e.removeAttribute("name")}function Il(e,t,n,a,l,i,o,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){il(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),il(e)}function $t(e,t,n){t==="number"&&rl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function nr(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function ar(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(ze(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),il(e)}function x(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ee(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||L.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ae(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ee(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&ee(e,i,t[i])}function K(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oe=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function H(e){return _.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function O(){}var Y=null;function te(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var me=null,De=null;function Re(e){var t=ea(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Et]||null;if(!l)throw Error(c(90));Fl(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wl(a)}break e;case"textarea":nr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}}}var tt=!1;function Oe(e,t,n){if(tt)return e(t,n);tt=!0;try{var a=e(t);return a}finally{if(tt=!1,(me!==null||De!==null)&&(Yr(),me&&(t=me,e=De,De=me=null,Re(t),e)))for(t=0;t<e.length;t++)Re(e[t])}}function Le(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Et]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ce=!1;if(qe)try{var _e={};Object.defineProperty(_e,"passive",{get:function(){Ce=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch{Ce=!1}var Ze=null,Se=null,Ve=null;function rn(){if(Ve)return Ve;var e,t=Se,n=t.length,a,l="value"in Ze?Ze.value:Ze.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Ve=l.slice(e,1<a?1-a:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ut(){return!0}function Uc(){return!1}function Bt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ut:Uc,this.isPropagationStopped=Uc,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ut)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ut)},persist:function(){},isPersistent:Ut}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=Bt(Ma),Pl=R({},Ma,{view:0,detail:0}),t0=Bt(Pl),So,ko,ei,ir=R({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(So=e.screenX-ei.screenX,ko=e.screenY-ei.screenY):ko=So=0,ei=e),So)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),Bc=Bt(ir),n0=R({},ir,{dataTransfer:0}),a0=Bt(n0),l0=R({},Pl,{relatedTarget:0}),jo=Bt(l0),i0=R({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Bt(i0),o0=R({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s0=Bt(o0),c0=R({},Ma,{data:0}),Yc=Bt(c0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=f0[e])?!!t[e]:!1}function Co(){return p0}var h0=R({},Pl,{key:function(e){if(e.key){var t=u0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ht(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?Ht(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ht(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m0=Bt(h0),g0=R({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Bt(g0),x0=R({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),y0=Bt(x0),b0=R({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=Bt(b0),w0=R({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=Bt(w0),k0=R({},Ma,{newState:0,oldState:0}),j0=Bt(k0),C0=[9,13,27,32],Ao=qe&&"CompositionEvent"in window,ti=null;qe&&"documentMode"in document&&(ti=document.documentMode);var A0=qe&&"TextEvent"in window&&!ti,Xc=qe&&(!Ao||ti&&8<ti&&11>=ti),Zc=" ",Vc=!1;function Qc(e,t){switch(e){case"keyup":return C0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ol=!1;function N0(e,t){switch(e){case"compositionend":return $c(t);case"keypress":return t.which!==32?null:(Vc=!0,Zc);case"textInput":return e=t.data,e===Zc&&Vc?null:e;default:return null}}function z0(e,t){if(ol)return e==="compositionend"||!Ao&&Qc(e,t)?(e=rn(),Ve=Se=Ze=null,ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xc&&t.locale!=="ko"?null:t.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E0[e.type]:t==="textarea"}function Jc(e,t,n,a){me?De?De.push(a):De=[a]:me=a,t=Kr(t,"onChange"),0<t.length&&(n=new lr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ni=null,ai=null;function _0(e){Tf(e,0)}function rr(e){var t=_a(e);if(Wl(t))return e}function Wc(e,t){if(e==="change")return t}var Fc=!1;if(qe){var No;if(qe){var zo="oninput"in document;if(!zo){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),zo=typeof Ic.oninput=="function"}No=zo}else No=!1;Fc=No&&(!document.documentMode||9<document.documentMode)}function Pc(){ni&&(ni.detachEvent("onpropertychange",eu),ai=ni=null)}function eu(e){if(e.propertyName==="value"&&rr(ai)){var t=[];Jc(t,ai,e,te(e)),Oe(_0,t)}}function M0(e,t,n){e==="focusin"?(Pc(),ni=t,ai=n,ni.attachEvent("onpropertychange",eu)):e==="focusout"&&Pc()}function T0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rr(ai)}function L0(e,t){if(e==="click")return rr(t)}function D0(e,t){if(e==="input"||e==="change")return rr(t)}function R0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:R0;function li(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Hl.call(t,l)||!Kt(e[l],t[l]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var O0=qe&&"documentMode"in document&&11>=document.documentMode,sl=null,_o=null,ii=null,Mo=!1;function iu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mo||sl==null||sl!==rl(a)||(a=sl,"selectionStart"in a&&Eo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ii&&li(ii,a)||(ii=a,a=Kr(_o,"onSelect"),0<a.length&&(t=new lr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=sl)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cl={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},To={},ru={};qe&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function La(e){if(To[e])return To[e];if(!cl[e])return e;var t=cl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ru)return To[e]=t[n];return e}var ou=La("animationend"),su=La("animationiteration"),cu=La("animationstart"),q0=La("transitionrun"),H0=La("transitionstart"),U0=La("transitioncancel"),uu=La("transitionend"),du=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function mn(e,t){du.set(e,t),kn(t,[e])}var or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},on=[],ul=0,Do=0;function sr(){for(var e=ul,t=Do=ul=0;t<e;){var n=on[t];on[t++]=null;var a=on[t];on[t++]=null;var l=on[t];on[t++]=null;var i=on[t];if(on[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&fu(n,l,i)}}function cr(e,t,n,a){on[ul++]=e,on[ul++]=t,on[ul++]=n,on[ul++]=a,Do|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ro(e,t,n,a){return cr(e,t,n,a),ur(e)}function Da(e,t){return cr(e,null,null,t),ur(e)}function fu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-bt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ur(e){if(50<Ni)throw Ni=0,Zs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dl={};function B0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,a){return new B0(e,t,n,a)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function dr(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=V1(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Jt(31,n,t,l),e.elementType=ne,e.lanes=i,e;case P:return Ra(n.children,l,i,t);case ue:o=8,l|=24;break;case de:return e=Jt(12,n,t,l|2),e.elementType=de,e.lanes=i,e;case ke:return e=Jt(13,n,t,l),e.elementType=ke,e.lanes=i,e;case ce:return e=Jt(19,n,t,l),e.elementType=ce,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case le:o=9;break e;case ye:o=11;break e;case fe:o=14;break e;case be:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=Jt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function Ra(e,t,n,a){return e=Jt(7,e,a,t),e.lanes=n,e}function qo(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function hu(e){var t=Jt(18,null,null,0);return t.stateNode=e,t}function Ho(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mu=new WeakMap;function sn(e,t){if(typeof e=="object"&&e!==null){var n=mu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Pa(t)},mu.set(e,t),t)}return{value:e,source:t,stack:Pa(t)}}var fl=[],pl=0,fr=null,ri=0,cn=[],un=0,na=null,Cn=1,An="";function Ln(e,t){fl[pl++]=ri,fl[pl++]=fr,fr=e,ri=t}function gu(e,t,n){cn[un++]=Cn,cn[un++]=An,cn[un++]=na,na=e;var a=Cn;e=An;var l=32-bt(a)-1;a&=~(1<<l),n+=1;var i=32-bt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Cn=1<<32-bt(t)+l|n<<l|a,An=i+e}else Cn=1<<i|n<<l|a,An=e}function Uo(e){e.return!==null&&(Ln(e,1),gu(e,1,0))}function Bo(e){for(;e===fr;)fr=fl[--pl],fl[pl]=null,ri=fl[--pl],fl[pl]=null;for(;e===na;)na=cn[--un],cn[un]=null,An=cn[--un],cn[un]=null,Cn=cn[--un],cn[un]=null}function xu(e,t){cn[un++]=Cn,cn[un++]=An,cn[un++]=na,Cn=t.id,An=t.overflow,na=e}var jt=null,lt=null,Ge=!1,aa=null,dn=!1,Yo=Error(c(519));function la(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oi(sn(t,e)),Yo}function yu(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[Et]=a,n){case"dialog":Ue("cancel",t),Ue("close",t);break;case"iframe":case"object":case"embed":Ue("load",t);break;case"video":case"audio":for(n=0;n<Ei.length;n++)Ue(Ei[n],t);break;case"source":Ue("error",t);break;case"img":case"image":case"link":Ue("error",t),Ue("load",t);break;case"details":Ue("toggle",t);break;case"input":Ue("invalid",t),Il(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Ue("invalid",t);break;case"textarea":Ue("invalid",t),ar(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Of(t.textContent,n)?(a.popover!=null&&(Ue("beforetoggle",t),Ue("toggle",t)),a.onScroll!=null&&Ue("scroll",t),a.onScrollEnd!=null&&Ue("scrollend",t),a.onClick!=null&&(t.onclick=O),t=!0):t=!1,t||la(e,!0)}function bu(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:jt=jt.return}}function hl(e){if(e!==jt)return!1;if(!Ge)return bu(e),Ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ic(e.type,e.memoizedProps)),n=!n),n&&lt&&la(e),bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));lt=Vf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));lt=Vf(e)}else t===27?(t=lt,ya(e.type)?(e=uc,uc=null,lt=e):lt=t):lt=jt?pn(e.stateNode.nextSibling):null;return!0}function Oa(){lt=jt=null,Ge=!1}function Go(){var e=aa;return e!==null&&(Zt===null?Zt=e:Zt.push.apply(Zt,e),aa=null),e}function oi(e){aa===null?aa=[e]:aa.push(e)}var Xo=h(null),qa=null,Dn=null;function ia(e,t,n){$(Xo,t._currentValue),t._currentValue=n}function Rn(e){e._currentValue=Xo.current,A(Xo)}function Zo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Vo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var g=0;g<t.length;g++)if(u.context===t[g]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Zo(i.return,n,e),a||(o=null);break e}i=u.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Zo(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ml(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var u=l.type;Kt(l.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(l===Ae.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}l=l.return}e!==null&&Vo(t,e,n,a),t.flags|=262144}function pr(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){qa=e,Dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return vu(qa,e)}function hr(e,t){return qa===null&&Ha(e),vu(e,t)}function vu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Dn===null){if(e===null)throw Error(c(308));Dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Dn=Dn.next=t;return n}var Y0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},G0=s.unstable_scheduleCallback,X0=s.unstable_NormalPriority,ht={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qo(){return{controller:new Y0,data:new Map,refCount:0}}function si(e){e.refCount--,e.refCount===0&&G0(X0,function(){e.controller.abort()})}var ci=null,$o=0,gl=0,xl=null;function Z0(e,t){if(ci===null){var n=ci=[];$o=0,gl=Ws(),xl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return $o++,t.then(wu,wu),t}function wu(){if(--$o===0&&ci!==null){xl!==null&&(xl.status="fulfilled");var e=ci;ci=null,gl=0,xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function V0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Su=m.S;m.S=function(e,t){rf=Mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Z0(e,t),Su!==null&&Su(e,t)};var Ua=h(null);function Ko(){var e=Ua.current;return e!==null?e:nt.pooledCache}function mr(e,t){t===null?$(Ua,Ua.current):$(Ua,t.pool)}function ku(){var e=Ko();return e===null?null:{parent:ht._currentValue,pool:e}}var yl=Error(c(460)),Jo=Error(c(474)),gr=Error(c(542)),xr={then:function(){}};function ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(O,O),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e;default:if(typeof t.status=="string")t.then(O,O);else{if(e=nt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nu(e),e}throw Ya=t,yl}}function Ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ya=n,yl):n}}var Ya=null;function Au(){if(Ya===null)throw Error(c(459));var e=Ya;return Ya=null,e}function Nu(e){if(e===yl||e===gr)throw Error(c(483))}var bl=null,ui=0;function yr(e){var t=ui;return ui+=1,bl===null&&(bl=[]),Cu(bl,e,t)}function di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function br(e,t){throw t.$$typeof===B?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zu(e){function t(S,b){if(e){var C=S.deletions;C===null?(S.deletions=[b],S.flags|=16):C.push(b)}}function n(S,b){if(!e)return null;for(;b!==null;)t(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function l(S,b){return S=Tn(S,b),S.index=0,S.sibling=null,S}function i(S,b,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<b?(S.flags|=67108866,b):C):(S.flags|=67108866,b)):(S.flags|=1048576,b)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function u(S,b,C,Z){return b===null||b.tag!==6?(b=qo(C,S.mode,Z),b.return=S,b):(b=l(b,C),b.return=S,b)}function g(S,b,C,Z){var we=C.type;return we===P?G(S,b,C.props.children,Z,C.key):b!==null&&(b.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===be&&Ba(we)===b.type)?(b=l(b,C.props),di(b,C),b.return=S,b):(b=dr(C.type,C.key,C.props,null,S.mode,Z),di(b,C),b.return=S,b)}function N(S,b,C,Z){return b===null||b.tag!==4||b.stateNode.containerInfo!==C.containerInfo||b.stateNode.implementation!==C.implementation?(b=Ho(C,S.mode,Z),b.return=S,b):(b=l(b,C.children||[]),b.return=S,b)}function G(S,b,C,Z,we){return b===null||b.tag!==7?(b=Ra(C,S.mode,Z,we),b.return=S,b):(b=l(b,C),b.return=S,b)}function V(S,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=qo(""+b,S.mode,C),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case F:return C=dr(b.type,b.key,b.props,null,S.mode,C),di(C,b),C.return=S,C;case I:return b=Ho(b,S.mode,C),b.return=S,b;case be:return b=Ba(b),V(S,b,C)}if(ze(b)||T(b))return b=Ra(b,S.mode,C,null),b.return=S,b;if(typeof b.then=="function")return V(S,yr(b),C);if(b.$$typeof===xe)return V(S,hr(S,b),C);br(S,b)}return null}function M(S,b,C,Z){var we=b!==null?b.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return we!==null?null:u(S,b,""+C,Z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return C.key===we?g(S,b,C,Z):null;case I:return C.key===we?N(S,b,C,Z):null;case be:return C=Ba(C),M(S,b,C,Z)}if(ze(C)||T(C))return we!==null?null:G(S,b,C,Z,null);if(typeof C.then=="function")return M(S,b,yr(C),Z);if(C.$$typeof===xe)return M(S,b,hr(S,C),Z);br(S,C)}return null}function D(S,b,C,Z,we){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return S=S.get(C)||null,u(b,S,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:return S=S.get(Z.key===null?C:Z.key)||null,g(b,S,Z,we);case I:return S=S.get(Z.key===null?C:Z.key)||null,N(b,S,Z,we);case be:return Z=Ba(Z),D(S,b,C,Z,we)}if(ze(Z)||T(Z))return S=S.get(C)||null,G(b,S,Z,we,null);if(typeof Z.then=="function")return D(S,b,C,yr(Z),we);if(Z.$$typeof===xe)return D(S,b,C,hr(b,Z),we);br(b,Z)}return null}function he(S,b,C,Z){for(var we=null,Qe=null,ge=b,Te=b=0,Ye=null;ge!==null&&Te<C.length;Te++){ge.index>Te?(Ye=ge,ge=null):Ye=ge.sibling;var $e=M(S,ge,C[Te],Z);if($e===null){ge===null&&(ge=Ye);break}e&&ge&&$e.alternate===null&&t(S,ge),b=i($e,b,Te),Qe===null?we=$e:Qe.sibling=$e,Qe=$e,ge=Ye}if(Te===C.length)return n(S,ge),Ge&&Ln(S,Te),we;if(ge===null){for(;Te<C.length;Te++)ge=V(S,C[Te],Z),ge!==null&&(b=i(ge,b,Te),Qe===null?we=ge:Qe.sibling=ge,Qe=ge);return Ge&&Ln(S,Te),we}for(ge=a(ge);Te<C.length;Te++)Ye=D(ge,S,Te,C[Te],Z),Ye!==null&&(e&&Ye.alternate!==null&&ge.delete(Ye.key===null?Te:Ye.key),b=i(Ye,b,Te),Qe===null?we=Ye:Qe.sibling=Ye,Qe=Ye);return e&&ge.forEach(function(ka){return t(S,ka)}),Ge&&Ln(S,Te),we}function je(S,b,C,Z){if(C==null)throw Error(c(151));for(var we=null,Qe=null,ge=b,Te=b=0,Ye=null,$e=C.next();ge!==null&&!$e.done;Te++,$e=C.next()){ge.index>Te?(Ye=ge,ge=null):Ye=ge.sibling;var ka=M(S,ge,$e.value,Z);if(ka===null){ge===null&&(ge=Ye);break}e&&ge&&ka.alternate===null&&t(S,ge),b=i(ka,b,Te),Qe===null?we=ka:Qe.sibling=ka,Qe=ka,ge=Ye}if($e.done)return n(S,ge),Ge&&Ln(S,Te),we;if(ge===null){for(;!$e.done;Te++,$e=C.next())$e=V(S,$e.value,Z),$e!==null&&(b=i($e,b,Te),Qe===null?we=$e:Qe.sibling=$e,Qe=$e);return Ge&&Ln(S,Te),we}for(ge=a(ge);!$e.done;Te++,$e=C.next())$e=D(ge,S,Te,$e.value,Z),$e!==null&&(e&&$e.alternate!==null&&ge.delete($e.key===null?Te:$e.key),b=i($e,b,Te),Qe===null?we=$e:Qe.sibling=$e,Qe=$e);return e&&ge.forEach(function(n2){return t(S,n2)}),Ge&&Ln(S,Te),we}function et(S,b,C,Z){if(typeof C=="object"&&C!==null&&C.type===P&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case F:e:{for(var we=C.key;b!==null;){if(b.key===we){if(we=C.type,we===P){if(b.tag===7){n(S,b.sibling),Z=l(b,C.props.children),Z.return=S,S=Z;break e}}else if(b.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===be&&Ba(we)===b.type){n(S,b.sibling),Z=l(b,C.props),di(Z,C),Z.return=S,S=Z;break e}n(S,b);break}else t(S,b);b=b.sibling}C.type===P?(Z=Ra(C.props.children,S.mode,Z,C.key),Z.return=S,S=Z):(Z=dr(C.type,C.key,C.props,null,S.mode,Z),di(Z,C),Z.return=S,S=Z)}return o(S);case I:e:{for(we=C.key;b!==null;){if(b.key===we)if(b.tag===4&&b.stateNode.containerInfo===C.containerInfo&&b.stateNode.implementation===C.implementation){n(S,b.sibling),Z=l(b,C.children||[]),Z.return=S,S=Z;break e}else{n(S,b);break}else t(S,b);b=b.sibling}Z=Ho(C,S.mode,Z),Z.return=S,S=Z}return o(S);case be:return C=Ba(C),et(S,b,C,Z)}if(ze(C))return he(S,b,C,Z);if(T(C)){if(we=T(C),typeof we!="function")throw Error(c(150));return C=we.call(C),je(S,b,C,Z)}if(typeof C.then=="function")return et(S,b,yr(C),Z);if(C.$$typeof===xe)return et(S,b,hr(S,C),Z);br(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,b!==null&&b.tag===6?(n(S,b.sibling),Z=l(b,C),Z.return=S,S=Z):(n(S,b),Z=qo(C,S.mode,Z),Z.return=S,S=Z),o(S)):n(S,b)}return function(S,b,C,Z){try{ui=0;var we=et(S,b,C,Z);return bl=null,we}catch(ge){if(ge===yl||ge===gr)throw ge;var Qe=Jt(29,ge,null,S.mode);return Qe.lanes=Z,Qe.return=S,Qe}finally{}}}var Ga=zu(!0),Eu=zu(!1),ra=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Je&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ur(e),fu(e,null,n),t}return cr(e,a,t,n),ur(e)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nl(e,n)}}function Io(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Po=!1;function pi(){if(Po){var e=xl;if(e!==null)throw e}}function hi(e,t,n,a){Po=!1;var l=e.updateQueue;ra=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var g=u,N=g.next;g.next=null,o===null?i=N:o.next=N,o=g;var G=e.alternate;G!==null&&(G=G.updateQueue,u=G.lastBaseUpdate,u!==o&&(u===null?G.firstBaseUpdate=N:u.next=N,G.lastBaseUpdate=g))}if(i!==null){var V=l.baseState;o=0,G=N=g=null,u=i;do{var M=u.lane&-536870913,D=M!==u.lane;if(D?(Be&M)===M:(a&M)===M){M!==0&&M===gl&&(Po=!0),G!==null&&(G=G.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var he=e,je=u;M=t;var et=n;switch(je.tag){case 1:if(he=je.payload,typeof he=="function"){V=he.call(et,V,M);break e}V=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=je.payload,M=typeof he=="function"?he.call(et,V,M):he,M==null)break e;V=R({},V,M);break e;case 2:ra=!0}}M=u.callback,M!==null&&(e.flags|=64,D&&(e.flags|=8192),D=l.callbacks,D===null?l.callbacks=[M]:D.push(M))}else D={lane:M,tag:u.tag,payload:u.payload,callback:u.callback,next:null},G===null?(N=G=D,g=V):G=G.next=D,o|=M;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;D=u,u=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);G===null&&(g=V),l.baseState=g,l.firstBaseUpdate=N,l.lastBaseUpdate=G,i===null&&(l.shared.lanes=0),pa|=o,e.lanes=o,e.memoizedState=V}}function _u(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Mu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)_u(n[e],t)}var vl=h(null),vr=h(0);function Tu(e,t){e=Zn,$(vr,e),$(vl,t),Zn=e|t.baseLanes}function es(){$(vr,Zn),$(vl,vl.current)}function ts(){Zn=vr.current,A(vl),A(vr)}var Wt=h(null),fn=null;function ca(e){var t=e.alternate;$(dt,dt.current&1),$(Wt,e),fn===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(fn=e)}function ns(e){$(dt,dt.current),$(Wt,e),fn===null&&(fn=e)}function Lu(e){e.tag===22?($(dt,dt.current),$(Wt,e),fn===null&&(fn=e)):ua()}function ua(){$(dt,dt.current),$(Wt,Wt.current)}function Ft(e){A(Wt),fn===e&&(fn=null),A(dt)}var dt=h(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sc(n)||cc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var On=0,Me=null,Ie=null,mt=null,Sr=!1,wl=!1,Xa=!1,kr=0,mi=0,Sl=null,Q0=0;function st(){throw Error(c(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function ls(e,t,n,a,l,i){return On=i,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,m.H=e===null||e.memoizedState===null?gd:bs,Xa=!1,i=n(a,l),Xa=!1,wl&&(i=Ru(t,n,a,l)),Du(e),i}function Du(e){m.H=yi;var t=Ie!==null&&Ie.next!==null;if(On=0,mt=Ie=Me=null,Sr=!1,mi=0,Sl=null,t)throw Error(c(300));e===null||gt||(e=e.dependencies,e!==null&&pr(e)&&(gt=!0))}function Ru(e,t,n,a){Me=e;var l=0;do{if(wl&&(Sl=null),mi=0,wl=!1,25<=l)throw Error(c(301));if(l+=1,mt=Ie=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}m.H=xd,i=t(n,a)}while(wl);return i}function $0(){var e=m.H,t=e.useState()[0];return t=typeof t.then=="function"?gi(t):t,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(Me.flags|=1024),t}function is(){var e=kr!==0;return kr=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function os(e){if(Sr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sr=!1}On=0,mt=Ie=Me=null,wl=!1,mi=kr=0,Sl=null}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Me.memoizedState=mt=e:mt=mt.next=e,mt}function ft(){if(Ie===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=mt===null?Me.memoizedState:mt.next;if(t!==null)mt=t,Ie=e;else{if(e===null)throw Me.alternate===null?Error(c(467)):Error(c(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},mt===null?Me.memoizedState=mt=e:mt=mt.next=e}return mt}function jr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gi(e){var t=mi;return mi+=1,Sl===null&&(Sl=[]),e=Cu(Sl,e,t),t=Me,(mt===null?t.memoizedState:mt.next)===null&&(t=t.alternate,m.H=t===null||t.memoizedState===null?gd:bs),e}function Cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gi(e);if(e.$$typeof===xe)return Ct(e)}throw Error(c(438,String(e)))}function ss(e){var t=null,n=Me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Me.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=jr(),Me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=se;return t.index++,n}function qn(e,t){return typeof t=="function"?t(e):t}function Ar(e){var t=ft();return cs(t,Ie,e)}function cs(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=o=null,g=null,N=t,G=!1;do{var V=N.lane&-536870913;if(V!==N.lane?(Be&V)===V:(On&V)===V){var M=N.revertLane;if(M===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),V===gl&&(G=!0);else if((On&M)===M){N=N.next,M===gl&&(G=!0);continue}else V={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(u=g=V,o=i):g=g.next=V,Me.lanes|=M,pa|=M;V=N.action,Xa&&n(i,V),i=N.hasEagerState?N.eagerState:n(i,V)}else M={lane:V,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(u=g=M,o=i):g=g.next=M,Me.lanes|=V,pa|=V;N=N.next}while(N!==null&&N!==t);if(g===null?o=i:g.next=u,!Kt(i,e.memoizedState)&&(gt=!0,G&&(n=xl,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=g,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function us(e){var t=ft(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Kt(i,t.memoizedState)||(gt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Ou(e,t,n){var a=Me,l=ft(),i=Ge;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!Kt((Ie||l).memoizedState,n);if(o&&(l.memoizedState=n,gt=!0),l=l.queue,ps(Uu.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||mt!==null&&mt.memoizedState.tag&1){if(a.flags|=2048,kl(9,{destroy:void 0},Hu.bind(null,a,l,n,t),null),nt===null)throw Error(c(349));i||(On&127)!==0||qu(a,t,n)}return n}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t=jr(),Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hu(e,t,n,a){t.value=n,t.getSnapshot=a,Bu(t)&&Yu(e)}function Uu(e,t,n){return n(function(){Bu(t)&&Yu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Yu(e){var t=Da(e,2);t!==null&&Vt(t,e,2)}function ds(e){var t=Lt();if(typeof e=="function"){var n=e;if(e=n(),Xa){Rt(!0);try{n()}finally{Rt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t}function Gu(e,t,n,a){return e.baseState=n,cs(e,Ie,typeof a=="function"?a:qn)}function K0(e,t,n,a,l){if(Er(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};m.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Xu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Xu(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=m.T,o={};m.T=o;try{var u=n(l,a),g=m.S;g!==null&&g(o,u),Zu(e,t,u)}catch(N){fs(e,t,N)}finally{i!==null&&o.types!==null&&(i.types=o.types),m.T=i}}else try{i=n(l,a),Zu(e,t,i)}catch(N){fs(e,t,N)}}function Zu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Vu(e,t,a)},function(a){return fs(e,t,a)}):Vu(e,t,n)}function Vu(e,t,n){t.status="fulfilled",t.value=n,Qu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xu(e,n)))}function fs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qu(t),t=t.next;while(t!==a)}e.action=null}function Qu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $u(e,t){return t}function Ku(e,t){if(Ge){var n=nt.formState;if(n!==null){e:{var a=Me;if(Ge){if(lt){t:{for(var l=lt,i=dn;l.nodeType!==8;){if(!i){l=null;break t}if(l=pn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){lt=pn(l.nextSibling),a=l.data==="F!";break e}}la(a)}a=!1}a&&(t=n[0])}}return n=Lt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$u,lastRenderedState:t},n.queue=a,n=pd.bind(null,Me,a),a.dispatch=n,a=ds(!1),i=ys.bind(null,Me,!1,a.queue),a=Lt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=K0.bind(null,Me,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Ju(e){var t=ft();return Wu(t,Ie,e)}function Wu(e,t,n){if(t=cs(e,t,$u)[0],e=Ar(qn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gi(t)}catch(o){throw o===yl?gr:o}else a=t;t=ft();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Me.flags|=2048,kl(9,{destroy:void 0},J0.bind(null,l,n),null)),[a,i,e]}function J0(e,t){e.action=t}function Fu(e){var t=ft(),n=Ie;if(n!==null)return Wu(t,n,e);ft(),t=t.memoizedState,n=ft();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function kl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Me.updateQueue,t===null&&(t=jr(),Me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Iu(){return ft().memoizedState}function Nr(e,t,n,a){var l=Lt();Me.flags|=e,l.memoizedState=kl(1|t,{destroy:void 0},n,a===void 0?null:a)}function zr(e,t,n,a){var l=ft();a=a===void 0?null:a;var i=l.memoizedState.inst;Ie!==null&&a!==null&&as(a,Ie.memoizedState.deps)?l.memoizedState=kl(t,i,n,a):(Me.flags|=e,l.memoizedState=kl(1|t,i,n,a))}function Pu(e,t){Nr(8390656,8,e,t)}function ps(e,t){zr(2048,8,e,t)}function W0(e){Me.flags|=4;var t=Me.updateQueue;if(t===null)t=jr(),Me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ed(e){var t=ft().memoizedState;return W0({ref:t,nextImpl:e}),function(){if((Je&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function td(e,t){return zr(4,2,e,t)}function nd(e,t){return zr(4,4,e,t)}function ad(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){n=n!=null?n.concat([e]):null,zr(4,4,ad.bind(null,t,e),n)}function hs(){}function id(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&as(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function rd(e,t){var n=ft();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&as(t,a[1]))return a[0];if(a=e(),Xa){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a}function ms(e,t,n){return n===void 0||(On&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sf(),Me.lanes|=e,pa|=e,n)}function od(e,t,n,a){return Kt(n,t)?n:vl.current!==null?(e=ms(e,n,a),Kt(e,t)||(gt=!0),e):(On&42)===0||(On&1073741824)!==0&&(Be&261930)===0?(gt=!0,e.memoizedState=n):(e=sf(),Me.lanes|=e,pa|=e,t)}function sd(e,t,n,a,l){var i=w.p;w.p=i!==0&&8>i?i:8;var o=m.T,u={};m.T=u,ys(e,!1,t,n);try{var g=l(),N=m.S;if(N!==null&&N(u,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var G=V0(g,a);xi(e,t,G,en(e))}else xi(e,t,a,en(e))}catch(V){xi(e,t,{then:function(){},status:"rejected",reason:V},en())}finally{w.p=i,o!==null&&u.types!==null&&(o.types=u.types),m.T=o}}function F0(){}function gs(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=cd(e).queue;sd(e,l,t,j,n===null?F0:function(){return ud(e),n(a)})}function cd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:j},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ud(e){var t=cd(e);t.next===null&&(t=e.alternate.memoizedState),xi(e,t.next.queue,{},en())}function xs(){return Ct(Di)}function dd(){return ft().memoizedState}function fd(){return ft().memoizedState}function I0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=oa(n);var a=sa(t,e,n);a!==null&&(Vt(a,t,n),fi(a,t,n)),t={cache:Qo()},e.payload=t;return}t=t.return}}function P0(e,t,n){var a=en();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Er(e)?hd(t,n):(n=Ro(e,t,n,a),n!==null&&(Vt(n,e,a),md(n,t,a)))}function pd(e,t,n){var a=en();xi(e,t,n,a)}function xi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Er(e))hd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Kt(u,o))return cr(e,t,l,0),nt===null&&sr(),!1}catch{}finally{}if(n=Ro(e,t,l,a),n!==null)return Vt(n,e,a),md(n,t,a),!0}return!1}function ys(e,t,n,a){if(a={lane:2,revertLane:Ws(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Er(e)){if(t)throw Error(c(479))}else t=Ro(e,n,a,2),t!==null&&Vt(t,e,2)}function Er(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function hd(e,t){wl=Sr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,nl(e,n)}}var yi={readContext:Ct,use:Cr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};yi.useEffectEvent=st;var gd={readContext:Ct,use:Cr,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Pu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Nr(4194308,4,ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){Nr(4,2,e,t)},useMemo:function(e,t){var n=Lt();t=t===void 0?null:t;var a=e();if(Xa){Rt(!0);try{e()}finally{Rt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Lt();if(n!==void 0){var l=n(t);if(Xa){Rt(!0);try{n(t)}finally{Rt(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=P0.bind(null,Me,e),[a.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,n=pd.bind(null,Me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){var n=Lt();return ms(n,e,t)},useTransition:function(){var e=ds(!1);return e=sd.bind(null,Me,e.queue,!0,!1),Lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Me,l=Lt();if(Ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),nt===null)throw Error(c(349));(Be&127)!==0||qu(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Pu(Uu.bind(null,a,i,e),[e]),a.flags|=2048,kl(9,{destroy:void 0},Hu.bind(null,a,i,n,t),null),n},useId:function(){var e=Lt(),t=nt.identifierPrefix;if(Ge){var n=An,a=Cn;n=(a&~(1<<32-bt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Q0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Ku,useActionState:Ku,useOptimistic:function(e){var t=Lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ys.bind(null,Me,!0,n),n.dispatch=t,[e,t]},useMemoCache:ss,useCacheRefresh:function(){return Lt().memoizedState=I0.bind(null,Me)},useEffectEvent:function(e){var t=Lt(),n={impl:e};return t.memoizedState=n,function(){if((Je&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},bs={readContext:Ct,use:Cr,useCallback:id,useContext:Ct,useEffect:ps,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:nd,useMemo:rd,useReducer:Ar,useRef:Iu,useState:function(){return Ar(qn)},useDebugValue:hs,useDeferredValue:function(e,t){var n=ft();return od(n,Ie.memoizedState,e,t)},useTransition:function(){var e=Ar(qn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:gi(e),t]},useSyncExternalStore:Ou,useId:dd,useHostTransitionStatus:xs,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var n=ft();return Gu(n,Ie,e,t)},useMemoCache:ss,useCacheRefresh:fd};bs.useEffectEvent=ed;var xd={readContext:Ct,use:Cr,useCallback:id,useContext:Ct,useEffect:ps,useImperativeHandle:ld,useInsertionEffect:td,useLayoutEffect:nd,useMemo:rd,useReducer:us,useRef:Iu,useState:function(){return us(qn)},useDebugValue:hs,useDeferredValue:function(e,t){var n=ft();return Ie===null?ms(n,e,t):od(n,Ie.memoizedState,e,t)},useTransition:function(){var e=us(qn)[0],t=ft().memoizedState;return[typeof e=="boolean"?e:gi(e),t]},useSyncExternalStore:Ou,useId:dd,useHostTransitionStatus:xs,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var n=ft();return Ie!==null?Gu(n,Ie,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ss,useCacheRefresh:fd};xd.useEffectEvent=ed;function vs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=en(),l=oa(a);l.payload=t,n!=null&&(l.callback=n),t=sa(e,l,a),t!==null&&(Vt(t,e,a),fi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=en(),l=oa(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=sa(e,l,a),t!==null&&(Vt(t,e,a),fi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),a=oa(n);a.tag=2,t!=null&&(a.callback=t),t=sa(e,a,n),t!==null&&(Vt(t,e,n),fi(t,e,n))}};function yd(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!li(n,a)||!li(l,i):!0}function bd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function Za(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=R({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function vd(e){or(e)}function wd(e){console.error(e)}function Sd(e){or(e)}function _r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function kd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ss(e,t,n){return n=oa(n),n.tag=3,n.payload={element:null},n.callback=function(){_r(e,t)},n}function jd(e){return e=oa(e),e.tag=3,e}function Cd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){kd(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){kd(t,n,a),typeof l!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function e1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ml(t,n,l,!0),n=Wt.current,n!==null){switch(n.tag){case 31:case 13:return fn===null?Gr():n.alternate===null&&ct===0&&(ct=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===xr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),$s(e,a,l)),!1;case 22:return n.flags|=65536,a===xr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),$s(e,a,l)),!1}throw Error(c(435,n.tag))}return $s(e,a,l),Gr(),!1}if(Ge)return t=Wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Yo&&(e=Error(c(422),{cause:a}),oi(sn(e,n)))):(a!==Yo&&(t=Error(c(423),{cause:a}),oi(sn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=sn(a,n),l=Ss(e.stateNode,a,l),Io(e,l),ct!==4&&(ct=2)),!1;var i=Error(c(520),{cause:a});if(i=sn(i,n),Ai===null?Ai=[i]:Ai.push(i),ct!==4&&(ct=2),t===null)return!0;a=sn(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ss(n.stateNode,a,e),Io(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=jd(l),Cd(l,e,n,a),Io(n,l),!1}n=n.return}while(n!==null);return!1}var ks=Error(c(461)),gt=!1;function At(e,t,n,a){t.child=e===null?Eu(t,null,n,a):Ga(t,e.child,n,a)}function Ad(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}else o=a;return Ha(t),a=ls(e,t,n,o,i,l),u=is(),e!==null&&!gt?(rs(e,t,l),Hn(e,t,l)):(Ge&&u&&Uo(t),t.flags|=1,At(e,t,a,l),t.child)}function Nd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Oo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,zd(e,t,i,a,l)):(e=dr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ms(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:li,n(o,a)&&e.ref===t.ref)return Hn(e,t,l)}return t.flags|=1,e=Tn(i,a),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(li(i,a)&&e.ref===t.ref)if(gt=!1,t.pendingProps=a=i,Ms(e,l))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Hn(e,t,l)}return js(e,t,n,a,l)}function Ed(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return _d(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mr(t,i!==null?i.cachePool:null),i!==null?Tu(t,i):es(),Lu(t);else return a=t.lanes=536870912,_d(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(mr(t,i.cachePool),Tu(t,i),ua(),t.memoizedState=null):(e!==null&&mr(t,null),es(),ua());return At(e,t,l,n),t.child}function bi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _d(e,t,n,a,l){var i=Ko();return i=i===null?null:{parent:ht._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&mr(t,null),es(),Lu(t),e!==null&&ml(e,t,a,!0),t.childLanes=l,null}function Mr(e,t){return t=Lr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Md(e,t,n){return Ga(t,e.child,null,n),e=Mr(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function t1(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ge){if(a.mode==="hidden")return e=Mr(t,a),t.lanes=536870912,bi(null,e);if(ns(t),(e=lt)?(e=Zf(e,dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=hu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return Mr(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ns(t),l)if(t.flags&256)t.flags&=-257,t=Md(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(gt||ml(e,t,n,!1),l=(n&e.childLanes)!==0,gt||l){if(a=nt,a!==null&&(o=nn(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Da(e,o),Vt(a,e,o),ks;Gr(),t=Md(e,t,n)}else e=i.treeContext,lt=pn(o.nextSibling),jt=t,Ge=!0,aa=null,dn=!1,e!==null&&xu(t,e),t=Mr(t,a),t.flags|=4096;return t}return e=Tn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function js(e,t,n,a,l){return Ha(t),n=ls(e,t,n,a,void 0,l),a=is(),e!==null&&!gt?(rs(e,t,l),Hn(e,t,l)):(Ge&&a&&Uo(t),t.flags|=1,At(e,t,n,l),t.child)}function Td(e,t,n,a,l,i){return Ha(t),t.updateQueue=null,n=Ru(t,a,n,l),Du(e),a=is(),e!==null&&!gt?(rs(e,t,i),Hn(e,t,i)):(Ge&&a&&Uo(t),t.flags|=1,At(e,t,n,i),t.child)}function Ld(e,t,n,a,l){if(Ha(t),t.stateNode===null){var i=dl,o=n.contextType;typeof o=="object"&&o!==null&&(i=Ct(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ws,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Wo(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Ct(o):dl,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(vs(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ws.enqueueReplaceState(i,i.state,null),hi(t,a,i,l),pi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,g=Za(n,u);i.props=g;var N=i.context,G=n.contextType;o=dl,typeof G=="object"&&G!==null&&(o=Ct(G));var V=n.getDerivedStateFromProps;G=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,G||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||N!==o)&&bd(t,i,a,o),ra=!1;var M=t.memoizedState;i.state=M,hi(t,a,i,l),pi(),N=t.memoizedState,u||M!==N||ra?(typeof V=="function"&&(vs(t,n,V,a),N=t.memoizedState),(g=ra||yd(t,n,g,a,M,N,o))?(G||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),i.props=a,i.state=N,i.context=o,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Fo(e,t),o=t.memoizedProps,G=Za(n,o),i.props=G,V=t.pendingProps,M=i.context,N=n.contextType,g=dl,typeof N=="object"&&N!==null&&(g=Ct(N)),u=n.getDerivedStateFromProps,(N=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==V||M!==g)&&bd(t,i,a,g),ra=!1,M=t.memoizedState,i.state=M,hi(t,a,i,l),pi();var D=t.memoizedState;o!==V||M!==D||ra||e!==null&&e.dependencies!==null&&pr(e.dependencies)?(typeof u=="function"&&(vs(t,n,u,a),D=t.memoizedState),(G=ra||yd(t,n,G,a,M,D,g)||e!==null&&e.dependencies!==null&&pr(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,D,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,D,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=D),i.props=a,i.state=D,i.context=g,a=G):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Tr(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ga(t,e.child,null,l),t.child=Ga(t,null,n,l)):At(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Hn(e,t,l),e}function Dd(e,t,n,a){return Oa(),t.flags|=256,At(e,t,n,a),t.child}var Cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function As(e){return{baseLanes:e,cachePool:ku()}}function Ns(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function Rd(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(dt.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ge){if(l?ca(t):ua(),(e=lt)?(e=Zf(e,dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},n=hu(e),n.return=t,t.child=n,jt=t,lt=null)):e=null,e===null)throw la(t);return cc(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,l?(ua(),l=t.mode,u=Lr({mode:"hidden",children:u},l),a=Ra(a,l,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=As(n),a.childLanes=Ns(e,o,n),t.memoizedState=Cs,bi(null,a)):(ca(t),zs(t,u))}var g=e.memoizedState;if(g!==null&&(u=g.dehydrated,u!==null)){if(i)t.flags&256?(ca(t),t.flags&=-257,t=Es(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),u=a.fallback,l=t.mode,a=Lr({mode:"visible",children:a.children},l),u=Ra(u,l,n,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,Ga(t,e.child,null,n),a=t.child,a.memoizedState=As(n),a.childLanes=Ns(e,o,n),t.memoizedState=Cs,t=bi(null,a));else if(ca(t),cc(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var N=o.dgst;o=N,a=Error(c(419)),a.stack="",a.digest=o,oi({value:a,source:null,stack:null}),t=Es(e,t,n)}else if(gt||ml(e,t,n,!1),o=(n&e.childLanes)!==0,gt||o){if(o=nt,o!==null&&(a=nn(o,n),a!==0&&a!==g.retryLane))throw g.retryLane=a,Da(e,a),Vt(o,e,a),ks;sc(u)||Gr(),t=Es(e,t,n)}else sc(u)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,lt=pn(u.nextSibling),jt=t,Ge=!0,aa=null,dn=!1,e!==null&&xu(t,e),t=zs(t,a.children),t.flags|=4096);return t}return l?(ua(),u=a.fallback,l=t.mode,g=e.child,N=g.sibling,a=Tn(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,N!==null?u=Tn(N,u):(u=Ra(u,l,n,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,bi(null,a),a=t.child,u=e.child.memoizedState,u===null?u=As(n):(l=u.cachePool,l!==null?(g=ht._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=ku(),u={baseLanes:u.baseLanes|n,cachePool:l}),a.memoizedState=u,a.childLanes=Ns(e,o,n),t.memoizedState=Cs,bi(e.child,a)):(ca(t),n=e.child,e=n.sibling,n=Tn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function zs(e,t){return t=Lr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Lr(e,t){return e=Jt(22,e,null,t),e.lanes=0,e}function Es(e,t,n){return Ga(t,e.child,null,n),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Od(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Zo(e.return,t,n)}function _s(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function qd(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=dt.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,$(dt,o),At(e,t,a,n),a=Ge?ri:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&wr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),_s(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&wr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}_s(t,!0,n,null,i,a);break;case"together":_s(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ml(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ms(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pr(e)))}function n1(e,t,n){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),ia(t,ht,e.memoizedState.cache),Oa();break;case 27:case 5:rt(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:ia(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ns(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rd(e,t,n):(ca(t),e=Hn(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ml(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return qd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(dt,dt.current),a)break;return null;case 22:return t.lanes=0,Ed(e,t,n,t.pendingProps);case 24:ia(t,ht,e.memoizedState.cache)}return Hn(e,t,n)}function Hd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!Ms(e,n)&&(t.flags&128)===0)return gt=!1,n1(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Ge&&(t.flags&1048576)!==0&&gu(t,ri,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ba(t.elementType),t.type=e,typeof e=="function")Oo(e)?(a=Za(e,a),t.tag=1,t=Ld(null,t,e,a,n)):(t.tag=0,t=js(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ye){t.tag=11,t=Ad(null,t,e,a,n);break e}else if(l===fe){t.tag=14,t=Nd(null,t,e,a,n);break e}}throw t=ve(e)||e,Error(c(306,t,""))}}return t;case 0:return js(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Za(a,t.pendingProps),Ld(e,t,a,l,n);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Fo(e,t),hi(t,a,null,n);var o=t.memoizedState;if(a=o.cache,ia(t,ht,a),a!==i.cache&&Vo(t,[ht],n,!0),pi(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Dd(e,t,a,n);break e}else if(a!==l){l=sn(Error(c(424)),t),oi(l),t=Dd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=pn(e.firstChild),jt=t,Ge=!0,aa=null,dn=!0,n=Eu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oa(),a===l){t=Hn(e,t,n);break e}At(e,t,a,n)}t=t.child}return t;case 26:return Tr(e,t),e===null?(n=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ge||(n=t.type,e=t.pendingProps,a=Jr(W.current).createElement(n),a[ut]=t,a[Et]=e,Nt(a,n,e),pt(a),t.stateNode=a):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rt(t),e===null&&Ge&&(a=t.stateNode=$f(t.type,t.pendingProps,W.current),jt=t,dn=!0,l=lt,ya(t.type)?(uc=l,lt=pn(a.firstChild)):lt=l),At(e,t,t.pendingProps.children,n),Tr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ge&&((l=a=lt)&&(a=T1(a,t.type,t.pendingProps,dn),a!==null?(t.stateNode=a,jt=t,lt=pn(a.firstChild),dn=!1,l=!0):l=!1),l||la(t)),rt(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ic(l,i)?a=null:o!==null&&ic(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ls(e,t,$0,null,null,n),Di._currentValue=l),Tr(e,t),At(e,t,a,n),t.child;case 6:return e===null&&Ge&&((e=n=lt)&&(n=L1(n,t.pendingProps,dn),n!==null?(t.stateNode=n,jt=t,lt=null,e=!0):e=!1),e||la(t)),null;case 13:return Rd(e,t,n);case 4:return Xe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ga(t,null,a,n):At(e,t,a,n),t.child;case 11:return Ad(e,t,t.type,t.pendingProps,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,ia(t,t.type,a.value),At(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ha(t),l=Ct(l),a=a(l),t.flags|=1,At(e,t,a,n),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 19:return qd(e,t,n);case 31:return t1(e,t,n);case 22:return Ed(e,t,n,t.pendingProps);case 24:return Ha(t),a=Ct(ht),e===null?(l=Ko(),l===null&&(l=nt,i=Qo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Wo(t),ia(t,ht,l)):((e.lanes&n)!==0&&(Fo(e,t),hi(t,null,null,n),pi()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ia(t,ht,a)):(a=i.cache,ia(t,ht,a),a!==l.cache&&Vo(t,[ht],n,!0))),At(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Un(e){e.flags|=4}function Ts(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ff())e.flags|=8192;else throw Ya=xr,Jo}else e.flags&=-16777217}function Ud(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tp(t))if(ff())e.flags|=8192;else throw Ya=xr,Jo}function Dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gl():536870912,e.lanes|=t,Nl|=t)}function vi(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function a1(e,t,n){var a=t.pendingProps;switch(Bo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return it(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rn(ht),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(hl(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Go())),it(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Un(t),i!==null?(it(t),Ud(t,i)):(it(t),Ts(t,l,null,a,n))):i?i!==e.memoizedState?(Un(t),it(t),Ud(t,i)):(it(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Un(t),it(t),Ts(t,l,e,a,n)),null;case 27:if(wt(t),n=W.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return it(t),null}e=J.current,hl(t)?yu(t):(e=$f(l,a,n),t.stateNode=e,Un(t))}return it(t),null;case 5:if(wt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return it(t),null}if(i=J.current,hl(t))yu(t);else{var o=Jr(W.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[ut]=t,i[Et]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Nt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Un(t)}}return it(t),Ts(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Un(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=W.current,hl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=jt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Of(e.nodeValue,n)),e||la(t,!0)}else e=Jr(e).createTextNode(a),e[ut]=t,t.stateNode=e}return it(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=hl(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ut]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),e=!1}else n=Go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return it(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ut]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),l=!1}else l=Go(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Dr(t,t.updateQueue),it(t),null);case 4:return Ne(),e===null&&ec(t.stateNode.containerInfo),it(t),null;case 10:return Rn(t.type),it(t),null;case 19:if(A(dt),a=t.memoizedState,a===null)return it(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)vi(a,!1);else{if(ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=wr(e),i!==null){for(t.flags|=128,vi(a,!1),e=i.updateQueue,t.updateQueue=e,Dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pu(n,e),n=n.sibling;return $(dt,dt.current&1|2),Ge&&Ln(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Mt()>Ur&&(t.flags|=128,l=!0,vi(a,!1),t.lanes=4194304)}else{if(!l)if(e=wr(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Dr(t,e),vi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ge)return it(t),null}else 2*Mt()-a.renderingStartTime>Ur&&n!==536870912&&(t.flags|=128,l=!0,vi(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Mt(),e.sibling=null,n=dt.current,$(dt,l?n&1|2:n&1),Ge&&Ln(t,a.treeForkCount),e):(it(t),null);case 22:case 23:return Ft(t),ts(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),n=t.updateQueue,n!==null&&Dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&A(Ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rn(ht),it(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function l1(e,t){switch(Bo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(ht),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wt(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(c(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(dt),null;case 4:return Ne(),null;case 10:return Rn(t.type),null;case 22:case 23:return Ft(t),ts(),e!==null&&A(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rn(ht),null;case 25:return null;default:return null}}function Bd(e,t){switch(Bo(t),t.tag){case 3:Rn(ht),Ne();break;case 26:case 27:case 5:wt(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:A(dt);break;case 10:Rn(t.type);break;case 22:case 23:Ft(t),ts(),e!==null&&A(Ua);break;case 24:Rn(ht)}}function wi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(u){Fe(t,t.return,u)}}function da(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,l=t;var g=n,N=u;try{N()}catch(G){Fe(l,g,G)}}}a=a.next}while(a!==i)}}catch(G){Fe(t,t.return,G)}}function Yd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mu(t,n)}catch(a){Fe(e,e.return,a)}}}function Gd(e,t,n){n.props=Za(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Fe(e,t,a)}}function Si(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Fe(e,t,l)}}function Nn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Fe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Fe(e,t,l)}else n.current=null}function Xd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Fe(e,e.return,l)}}function Ls(e,t,n){try{var a=e.stateNode;A1(a,e.type,n,t),a[Et]=t}catch(l){Fe(e,e.return,l)}}function Zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=O));else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}function Rr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Vd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Nt(t,a,n),t[ut]=e,t[Et]=n}catch(i){Fe(e,e.return,i)}}var Bn=!1,xt=!1,Os=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,vt=null;function i1(e,t){if(e=e.containerInfo,ac=no,e=lu(e),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,g=-1,N=0,G=0,V=e,M=null;t:for(;;){for(var D;V!==n||l!==0&&V.nodeType!==3||(u=o+l),V!==i||a!==0&&V.nodeType!==3||(g=o+a),V.nodeType===3&&(o+=V.nodeValue.length),(D=V.firstChild)!==null;)M=V,V=D;for(;;){if(V===e)break t;if(M===n&&++N===l&&(u=o),M===i&&++G===a&&(g=o),(D=V.nextSibling)!==null)break;V=M,M=V.parentNode}V=D}n=u===-1||g===-1?null:{start:u,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},no=!1,vt=t;vt!==null;)if(t=vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,vt=e;else for(;vt!==null;){switch(t=vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var he=Za(n.type,l);e=a.getSnapshotBeforeUpdate(he,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(je){Fe(n,n.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)oc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,vt=e;break}vt=t.return}}function $d(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Gn(e,n),a&4&&wi(5,n);break;case 1:if(Gn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){Fe(n,n.return,o)}else{var l=Za(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Fe(n,n.return,o)}}a&64&&Yd(n),a&512&&Si(n,n.return);break;case 3:if(Gn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mu(e,t)}catch(o){Fe(n,n.return,o)}}break;case 27:t===null&&a&4&&Vd(n);case 26:case 5:Gn(e,n),t===null&&a&4&&Xd(n),a&512&&Si(n,n.return);break;case 12:Gn(e,n);break;case 31:Gn(e,n),a&4&&Wd(e,n);break;case 13:Gn(e,n),a&4&&Fd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=h1.bind(null,n),D1(e,n))));break;case 22:if(a=n.memoizedState!==null||Bn,!a){t=t!==null&&t.memoizedState!==null||xt,l=Bn;var i=xt;Bn=a,(xt=t)&&!i?Xn(e,n,(n.subtreeFlags&8772)!==0):Gn(e,n),Bn=l,xt=i}break;case 30:break;default:Gn(e,n)}}function Kd(e){var t=e.alternate;t!==null&&(e.alternate=null,Kd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$l(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ot=null,Yt=!1;function Yn(e,t,n){for(n=n.child;n!==null;)Jd(e,t,n),n=n.sibling}function Jd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Kn,n)}catch{}switch(n.tag){case 26:xt||Nn(n,t),Yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||Nn(n,t);var a=ot,l=Yt;ya(n.type)&&(ot=n.stateNode,Yt=!1),Yn(e,t,n),Mi(n.stateNode),ot=a,Yt=l;break;case 5:xt||Nn(n,t);case 6:if(a=ot,l=Yt,ot=null,Yn(e,t,n),ot=a,Yt=l,ot!==null)if(Yt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(n.stateNode)}catch(i){Fe(n,t,i)}else try{ot.removeChild(n.stateNode)}catch(i){Fe(n,t,i)}break;case 18:ot!==null&&(Yt?(e=ot,Gf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Rl(e)):Gf(ot,n.stateNode));break;case 4:a=ot,l=Yt,ot=n.stateNode.containerInfo,Yt=!0,Yn(e,t,n),ot=a,Yt=l;break;case 0:case 11:case 14:case 15:da(2,n,t),xt||da(4,n,t),Yn(e,t,n);break;case 1:xt||(Nn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gd(n,t,a)),Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:xt=(a=xt)||n.memoizedState!==null,Yn(e,t,n),xt=a;break;default:Yn(e,t,n)}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rl(e)}catch(n){Fe(t,t.return,n)}}}function Fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(n){Fe(t,t.return,n)}}function r1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(c(435,e.tag))}}function Or(e,t){var n=r1(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=m1.bind(null,e,a);a.then(l,l)}})}function Gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(ya(u.type)){ot=u.stateNode,Yt=!1;break e}break;case 5:ot=u.stateNode,Yt=!1;break e;case 3:case 4:ot=u.stateNode.containerInfo,Yt=!0;break e}u=u.return}if(ot===null)throw Error(c(160));Jd(i,o,l),ot=null,Yt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}var gn=null;function Id(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gt(t,e),Xt(e),a&4&&(da(3,e,e.return),wi(3,e),da(5,e,e.return));break;case 1:Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),a&64&&Bn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=gn;if(Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[an]||i[ut]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Nt(i,a,n),i[ut]=e,pt(i),a=i;break e;case"link":var o=Pf("link","href",l).get(a+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(i=o[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}i=l.createElement(a),Nt(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Pf("meta","content",l).get(a+(n.content||""))){for(u=0;u<o.length;u++)if(i=o[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}i=l.createElement(a),Nt(i,a,n),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[ut]=e,pt(i),a=i}e.stateNode=a}else ep(l,e.type,e.stateNode);else e.stateNode=If(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?ep(l,e.type,e.stateNode):If(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ls(e,e.memoizedProps,n.memoizedProps)}break;case 27:Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),n!==null&&a&4&&Ls(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Gt(t,e),Xt(e),a&512&&(xt||n===null||Nn(n,n.return)),e.flags&32){l=e.stateNode;try{x(l,"")}catch(he){Fe(e,e.return,he)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Ls(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Os=!0);break;case 6:if(Gt(t,e),Xt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(he){Fe(e,e.return,he)}}break;case 3:if(Ir=null,l=gn,gn=Wr(t.containerInfo),Gt(t,e),gn=l,Xt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(he){Fe(e,e.return,he)}Os&&(Os=!1,Pd(e));break;case 4:a=gn,gn=Wr(e.stateNode.containerInfo),Gt(t,e),Xt(e),gn=a;break;case 12:Gt(t,e),Xt(e);break;case 31:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 13:Gt(t,e),Xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hr=Mt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 22:l=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,N=Bn,G=xt;if(Bn=N||l,xt=G||g,Gt(t,e),xt=G,Bn=N,Xt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||g||Bn||xt||Va(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(i=g.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=g.stateNode;var V=g.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null;u.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(he){Fe(g,g.return,he)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(he){Fe(g,g.return,he)}}}else if(t.tag===18){if(n===null){g=t;try{var D=g.stateNode;l?Xf(D,!0):Xf(g.stateNode,!1)}catch(he){Fe(g,g.return,he)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Or(e,n))));break;case 19:Gt(t,e),Xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Or(e,a)));break;case 30:break;case 21:break;default:Gt(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Zd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,i=Ds(e);Rr(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(x(o,""),n.flags&=-33);var u=Ds(e);Rr(e,u,o);break;case 3:case 4:var g=n.stateNode.containerInfo,N=Ds(e);Rs(e,N,g);break;default:throw Error(c(161))}}catch(G){Fe(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$d(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Va(t);break;case 1:Nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gd(t,t.return,n),Va(t);break;case 27:Mi(t.stateNode);case 26:case 5:Nn(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function Xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Xn(l,i,n),wi(4,i);break;case 1:if(Xn(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){Fe(a,a.return,N)}if(a=i,l=a.updateQueue,l!==null){var u=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)_u(g[l],u)}catch(N){Fe(a,a.return,N)}}n&&o&64&&Yd(i),Si(i,i.return);break;case 27:Vd(i);case 26:case 5:Xn(l,i,n),n&&a===null&&o&4&&Xd(i),Si(i,i.return);break;case 12:Xn(l,i,n);break;case 31:Xn(l,i,n),n&&o&4&&Wd(l,i);break;case 13:Xn(l,i,n),n&&o&4&&Fd(l,i);break;case 22:i.memoizedState===null&&Xn(l,i,n),Si(i,i.return);break;case 30:break;default:Xn(l,i,n)}t=t.sibling}}function qs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&si(n))}function Hs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&si(e))}function xn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ef(e,t,n,a),t=t.sibling}function ef(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:xn(e,t,n,a),l&2048&&wi(9,t);break;case 1:xn(e,t,n,a);break;case 3:xn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&si(e)));break;case 12:if(l&2048){xn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,u=i.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Fe(t,t.return,g)}}else xn(e,t,n,a);break;case 31:xn(e,t,n,a);break;case 13:xn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?xn(e,t,n,a):ki(e,t):i._visibility&2?xn(e,t,n,a):(i._visibility|=2,jl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&qs(o,t);break;case 24:xn(e,t,n,a),l&2048&&Hs(t.alternate,t);break;default:xn(e,t,n,a)}}function jl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,u=n,g=a,N=o.flags;switch(o.tag){case 0:case 11:case 15:jl(i,o,u,g,l),wi(8,o);break;case 23:break;case 22:var G=o.stateNode;o.memoizedState!==null?G._visibility&2?jl(i,o,u,g,l):ki(i,o):(G._visibility|=2,jl(i,o,u,g,l)),l&&N&2048&&qs(o.alternate,o);break;case 24:jl(i,o,u,g,l),l&&N&2048&&Hs(o.alternate,o);break;default:jl(i,o,u,g,l)}t=t.sibling}}function ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ki(n,a),l&2048&&qs(a.alternate,a);break;case 24:ki(n,a),l&2048&&Hs(a.alternate,a);break;default:ki(n,a)}t=t.sibling}}var ji=8192;function Cl(e,t,n){if(e.subtreeFlags&ji)for(e=e.child;e!==null;)tf(e,t,n),e=e.sibling}function tf(e,t,n){switch(e.tag){case 26:Cl(e,t,n),e.flags&ji&&e.memoizedState!==null&&Q1(n,gn,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,t,n);break;case 3:case 4:var a=gn;gn=Wr(e.stateNode.containerInfo),Cl(e,t,n),gn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ji,ji=16777216,Cl(e,t,n),ji=a):Cl(e,t,n));break;default:Cl(e,t,n)}}function nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,lf(a,e)}nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)af(e),e=e.sibling}function af(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&da(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qr(e)):Ci(e);break;default:Ci(e)}}function qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];vt=a,lf(a,e)}nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qr(t));break;default:qr(t)}e=e.sibling}}function lf(e,t){for(;vt!==null;){var n=vt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:si(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,vt=a;else e:for(n=e;vt!==null;){a=vt;var l=a.sibling,i=a.return;if(Kd(a),a===n){vt=null;break e}if(l!==null){l.return=i,vt=l;break e}vt=i}}}var o1={getCacheForType:function(e){var t=Ct(ht),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ct(ht).controller.signal}},s1=typeof WeakMap=="function"?WeakMap:Map,Je=0,nt=null,He=null,Be=0,We=0,It=null,fa=!1,Al=!1,Us=!1,Zn=0,ct=0,pa=0,Qa=0,Bs=0,Pt=0,Nl=0,Ai=null,Zt=null,Ys=!1,Hr=0,rf=0,Ur=1/0,Br=null,ha=null,yt=0,ma=null,zl=null,Vn=0,Gs=0,Xs=null,of=null,Ni=0,Zs=null;function en(){return(Je&2)!==0&&Be!==0?Be&-Be:m.T!==null?Ws():Vl()}function sf(){if(Pt===0)if((Be&536870912)===0||Ge){var e=Jn;Jn<<=1,(Jn&3932160)===0&&(Jn=262144),Pt=e}else Pt=536870912;return e=Wt.current,e!==null&&(e.flags|=32),Pt}function Vt(e,t,n){(e===nt&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(El(e,0),ga(e,Be,Pt,!1)),In(e,n),((Je&2)===0||e!==nt)&&(e===nt&&((Je&2)===0&&(Qa|=n),ct===4&&ga(e,Be,Pt,!1)),zn(e))}function cf(e,t,n){if((Je&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fn(e,t),l=a?d1(e,t):Qs(e,t,!0),i=a;do{if(l===0){Al&&!a&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!c1(n)){l=Qs(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;l=Ai;var g=u.current.memoizedState.isDehydrated;if(g&&(El(u,o).flags|=256),o=Qs(u,o,!1),o!==2){if(Us&&!g){u.errorRecoveryDisabledLanes|=i,Qa|=i,l=4;break e}i=Zt,Zt=l,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){El(e,0),ga(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ga(a,t,Pt,!fa);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Hr+300-Mt(),10<l)){if(ga(a,t,Pt,!fa),Wn(a,0,!0)!==0)break e;Vn=t,a.timeoutHandle=Bf(uf.bind(null,a,n,Zt,Br,Ys,t,Pt,Qa,Nl,fa,i,"Throttled",-0,0),l);break e}uf(a,n,Zt,Br,Ys,t,Pt,Qa,Nl,fa,i,null,-0,0)}}break}while(!0);zn(e)}function uf(e,t,n,a,l,i,o,u,g,N,G,V,M,D){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:O},tf(t,i,V);var he=(i&62914560)===i?Hr-Mt():(i&4194048)===i?rf-Mt():0;if(he=$1(V,he),he!==null){Vn=i,e.cancelPendingCommit=he(yf.bind(null,e,t,i,n,a,l,o,u,g,G,V,null,M,D)),ga(e,i,o,!N);return}}yf(e,t,i,n,a,l,o,u,g)}function c1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Kt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,a){t&=~Bs,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-bt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Qi(e,n,t)}function Yr(){return(Je&6)===0?(zi(0),!1):!0}function Vs(){if(He!==null){if(We===0)var e=He.return;else e=He,Dn=qa=null,os(e),bl=null,ui=0,e=He;for(;e!==null;)Bd(e.alternate,e),e=e.return;He=null}}function El(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,E1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Vn=0,Vs(),nt=e,He=n=Tn(e.current,null),Be=t,We=0,It=null,fa=!1,Al=Fn(e,t),Us=!1,Nl=Pt=Bs=Qa=pa=ct=0,Zt=Ai=null,Ys=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-bt(a),i=1<<l;t|=e[l],a&=~i}return Zn=t,sr(),n}function df(e,t){Me=null,m.H=yi,t===yl||t===gr?(t=Au(),We=3):t===Jo?(t=Au(),We=4):We=t===ks?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,He===null&&(ct=1,_r(e,sn(t,e.current)))}function ff(){var e=Wt.current;return e===null?!0:(Be&4194048)===Be?fn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===fn:!1}function pf(){var e=m.H;return m.H=yi,e===null?yi:e}function hf(){var e=m.A;return m.A=o1,e}function Gr(){ct=4,fa||(Be&4194048)!==Be&&Wt.current!==null||(Al=!0),(pa&134217727)===0&&(Qa&134217727)===0||nt===null||ga(nt,Be,Pt,!1)}function Qs(e,t,n){var a=Je;Je|=2;var l=pf(),i=hf();(nt!==e||Be!==t)&&(Br=null,El(e,t)),t=!1;var o=ct;e:do try{if(We!==0&&He!==null){var u=He,g=It;switch(We){case 8:Vs(),o=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(t=!0);var N=We;if(We=0,It=null,_l(e,u,g,N),n&&Al){o=0;break e}break;default:N=We,We=0,It=null,_l(e,u,g,N)}}u1(),o=ct;break}catch(G){df(e,G)}while(!0);return t&&e.shellSuspendCounter++,Dn=qa=null,Je=a,m.H=l,m.A=i,He===null&&(nt=null,Be=0,sr()),o}function u1(){for(;He!==null;)mf(He)}function d1(e,t){var n=Je;Je|=2;var a=pf(),l=hf();nt!==e||Be!==t?(Br=null,Ur=Mt()+500,El(e,t)):Al=Fn(e,t);e:do try{if(We!==0&&He!==null){t=He;var i=It;t:switch(We){case 1:We=0,It=null,_l(e,t,i,1);break;case 2:case 9:if(ju(i)){We=0,It=null,gf(t);break}t=function(){We!==2&&We!==9||nt!==e||(We=7),zn(e)},i.then(t,t);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:ju(i)?(We=0,It=null,gf(t)):(We=0,It=null,_l(e,t,i,7));break;case 5:var o=null;switch(He.tag){case 26:o=He.memoizedState;case 5:case 27:var u=He;if(o?tp(o):u.stateNode.complete){We=0,It=null;var g=u.sibling;if(g!==null)He=g;else{var N=u.return;N!==null?(He=N,Xr(N)):He=null}break t}}We=0,It=null,_l(e,t,i,5);break;case 6:We=0,It=null,_l(e,t,i,6);break;case 8:Vs(),ct=6;break e;default:throw Error(c(462))}}f1();break}catch(G){df(e,G)}while(!0);return Dn=qa=null,m.H=a,m.A=l,Je=n,He!==null?0:(nt=null,Be=0,sr(),ct)}function f1(){for(;He!==null&&!Xi();)mf(He)}function mf(e){var t=Hd(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,t===null?Xr(e):He=t}function gf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Td(n,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Td(n,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:os(t);default:Bd(n,t),t=He=pu(t,Zn),t=Hd(n,t,Zn)}e.memoizedProps=e.pendingProps,t===null?Xr(e):He=t}function _l(e,t,n,a){Dn=qa=null,os(t),bl=null,ui=0;var l=t.return;try{if(e1(e,l,t,n,Be)){ct=1,_r(e,sn(n,e.current)),He=null;return}}catch(i){if(l!==null)throw He=l,i;ct=1,_r(e,sn(n,e.current)),He=null;return}t.flags&32768?(Ge||a===1?e=!0:Al||(Be&536870912)!==0?e=!1:(fa=e=!0,(a===2||a===9||a===3||a===6)&&(a=Wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),xf(t,e)):Xr(t)}function Xr(e){var t=e;do{if((t.flags&32768)!==0){xf(t,fa);return}e=t.return;var n=a1(t.alternate,t,Zn);if(n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);ct===0&&(ct=5)}function xf(e,t){do{var n=l1(e.alternate,e);if(n!==null){n.flags&=32767,He=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){He=e;return}He=e=n}while(e!==null);ct=6,He=null}function yf(e,t,n,a,l,i,o,u,g){e.cancelPendingCommit=null;do Zr();while(yt!==0);if((Je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=Do,Xl(e,n,i,o,u,g),e===nt&&(He=nt=null,Be=0),zl=t,ma=e,Vn=n,Gs=i,Xs=l,of=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g1(Tt,function(){return kf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=m.T,m.T=null,l=w.p,w.p=2,o=Je,Je|=4;try{i1(e,t,n)}finally{Je=o,w.p=l,m.T=a}}yt=1,bf(),vf(),wf()}}function bf(){if(yt===1){yt=0;var e=ma,t=zl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=m.T,m.T=null;var a=w.p;w.p=2;var l=Je;Je|=4;try{Id(t,e);var i=lc,o=lu(e.containerInfo),u=i.focusedElem,g=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&au(u.ownerDocument.documentElement,u)){if(g!==null&&Eo(u)){var N=g.start,G=g.end;if(G===void 0&&(G=N),"selectionStart"in u)u.selectionStart=N,u.selectionEnd=Math.min(G,u.value.length);else{var V=u.ownerDocument||document,M=V&&V.defaultView||window;if(M.getSelection){var D=M.getSelection(),he=u.textContent.length,je=Math.min(g.start,he),et=g.end===void 0?je:Math.min(g.end,he);!D.extend&&je>et&&(o=et,et=je,je=o);var S=nu(u,je),b=nu(u,et);if(S&&b&&(D.rangeCount!==1||D.anchorNode!==S.node||D.anchorOffset!==S.offset||D.focusNode!==b.node||D.focusOffset!==b.offset)){var C=V.createRange();C.setStart(S.node,S.offset),D.removeAllRanges(),je>et?(D.addRange(C),D.extend(b.node,b.offset)):(C.setEnd(b.node,b.offset),D.addRange(C))}}}}for(V=[],D=u;D=D.parentNode;)D.nodeType===1&&V.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<V.length;u++){var Z=V[u];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}no=!!ac,lc=ac=null}finally{Je=l,w.p=a,m.T=n}}e.current=t,yt=2}}function vf(){if(yt===2){yt=0;var e=ma,t=zl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=m.T,m.T=null;var a=w.p;w.p=2;var l=Je;Je|=4;try{$d(e,t.alternate,t)}finally{Je=l,w.p=a,m.T=n}}yt=3}}function wf(){if(yt===4||yt===3){yt=0,Aa();var e=ma,t=zl,n=Vn,a=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?yt=5:(yt=0,zl=ma=null,Sf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ha=null),Zl(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Kn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=m.T,l=w.p,w.p=2,m.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var u=a[o];i(u.value,{componentStack:u.stack})}}finally{m.T=t,w.p=l}}(Vn&3)!==0&&Zr(),zn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Zs?Ni++:(Ni=0,Zs=e):Ni=0,zi(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,si(t)))}function Zr(){return bf(),vf(),wf(),kf()}function kf(){if(yt!==5)return!1;var e=ma,t=Gs;Gs=0;var n=Zl(Vn),a=m.T,l=w.p;try{w.p=32>n?32:n,m.T=null,n=Xs,Xs=null;var i=ma,o=Vn;if(yt=0,zl=ma=null,Vn=0,(Je&6)!==0)throw Error(c(331));var u=Je;if(Je|=4,af(i.current),ef(i,i.current,o,n),Je=u,zi(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Kn,i)}catch{}return!0}finally{w.p=l,m.T=a,Sf(e,t)}}function jf(e,t,n){t=sn(n,t),t=Ss(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(In(e,2),zn(e))}function Fe(e,t,n){if(e.tag===3)jf(e,e,n);else for(;t!==null;){if(t.tag===3){jf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ha===null||!ha.has(a))){e=sn(n,e),n=jd(2),a=sa(t,n,2),a!==null&&(Cd(n,a,t,e),In(a,2),zn(a));break}}t=t.return}}function $s(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new s1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Us=!0,l.add(n),e=p1.bind(null,e,t,n),t.then(e,e))}function p1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,nt===e&&(Be&n)===n&&(ct===4||ct===3&&(Be&62914560)===Be&&300>Mt()-Hr?(Je&2)===0&&El(e,0):Bs|=n,Nl===Be&&(Nl=0)),zn(e)}function Cf(e,t){t===0&&(t=Gl()),e=Da(e,t),e!==null&&(In(e,t),zn(e))}function h1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function m1(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Cf(e,n)}function g1(e,t){return Ul(e,t)}var Vr=null,Ml=null,Ks=!1,Qr=!1,Js=!1,xa=0;function zn(e){e!==Ml&&e.next===null&&(Ml===null?Vr=Ml=e:Ml=Ml.next=e),Qr=!0,Ks||(Ks=!0,y1())}function zi(e,t){if(!Js&&Qr){Js=!0;do for(var n=!1,a=Vr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-bt(42|e)+1)-1,i&=l&~(o&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Ef(a,i))}else i=Be,i=Wn(a,a===nt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Fn(a,i)||(n=!0,Ef(a,i));a=a.next}while(n);Js=!1}}function x1(){Af()}function Af(){Qr=Ks=!1;var e=0;xa!==0&&z1()&&(e=xa);for(var t=Mt(),n=null,a=Vr;a!==null;){var l=a.next,i=Nf(a,t);i===0?(a.next=null,n===null?Vr=l:n.next=l,l===null&&(Ml=n)):(n=a,(e!==0||(i&3)!==0)&&(Qr=!0)),a=l}yt!==0&&yt!==5||zi(e),xa!==0&&(xa=0)}function Nf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-bt(i),u=1<<o,g=l[o];g===-1?((u&n)===0||(u&a)!==0)&&(l[o]=Vi(u,t)):g<=t&&(e.expiredLanes|=u),i&=~u}if(t=nt,n=Be,n=Wn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(We===2||We===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&el(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&el(a),Zl(n)){case 2:case 8:n=En;break;case 32:n=Tt;break;case 268435456:n=tl;break;default:n=Tt}return a=zf.bind(null,e),n=Ul(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&el(a),e.callbackPriority=2,e.callbackNode=null,2}function zf(e,t){if(yt!==0&&yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var a=Be;return a=Wn(e,e===nt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cf(e,a,t),Nf(e,Mt()),e.callbackNode!=null&&e.callbackNode===n?zf.bind(null,e):null)}function Ef(e,t){if(Zr())return null;cf(e,t,!0)}function y1(){_1(function(){(Je&6)!==0?Ul(Dt,x1):Af()})}function Ws(){if(xa===0){var e=gl;e===0&&(e=vn,vn<<=1,(vn&261888)===0&&(vn=256)),xa=e}return xa}function _f(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:H(""+e)}function Mf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function b1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=_f((l[Et]||null).action),o=a.submitter;o&&(t=(t=o[Et]||null)?_f(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var u=new lr("action","action",null,a,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var g=o?Mf(l,o):new FormData(l);gs(n,{pending:!0,data:g,method:l.method,action:i},null,g)}}else typeof i=="function"&&(u.preventDefault(),g=o?Mf(l,o):new FormData(l),gs(n,{pending:!0,data:g,method:l.method,action:i},i,g))},currentTarget:l}]})}}for(var Fs=0;Fs<Lo.length;Fs++){var Is=Lo[Fs],v1=Is.toLowerCase(),w1=Is[0].toUpperCase()+Is.slice(1);mn(v1,"on"+w1)}mn(ou,"onAnimationEnd"),mn(su,"onAnimationIteration"),mn(cu,"onAnimationStart"),mn("dblclick","onDoubleClick"),mn("focusin","onFocus"),mn("focusout","onBlur"),mn(q0,"onTransitionRun"),mn(H0,"onTransitionStart"),mn(U0,"onTransitionCancel"),mn(uu,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function Tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var u=a[o],g=u.instance,N=u.currentTarget;if(u=u.listener,g!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=N;try{i(l)}catch(G){or(G)}l.currentTarget=null,i=g}else for(o=0;o<a.length;o++){if(u=a[o],g=u.instance,N=u.currentTarget,u=u.listener,g!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=N;try{i(l)}catch(G){or(G)}l.currentTarget=null,i=g}}}}function Ue(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var a=e+"__bubble";n.has(a)||(Lf(t,e,2,!1),n.add(a))}function Ps(e,t,n){var a=0;t&&(a|=4),Lf(n,e,a,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[$r]){e[$r]=!0,Wi.forEach(function(n){n!=="selectionchange"&&(S1.has(n)||Ps(n,!1,e),Ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$r]||(t[$r]=!0,Ps("selectionchange",!1,t))}}function Lf(e,t,n,a){switch(sp(t)){case 2:var l=W1;break;case 8:l=F1;break;default:l=mc}n=l.bind(null,t,n,e),l=void 0,!Ce||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function tc(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var u=a.stateNode.containerInfo;if(u===l)break;if(o===4)for(o=a.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;u!==null;){if(o=Sn(u),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){a=i=o;continue e}u=u.parentNode}}a=a.return}Oe(function(){var N=i,G=te(n),V=[];e:{var M=du.get(e);if(M!==void 0){var D=lr,he=e;switch(e){case"keypress":if(Ht(n)===0)break e;case"keydown":case"keyup":D=m0;break;case"focusin":he="focus",D=jo;break;case"focusout":he="blur",D=jo;break;case"beforeblur":case"afterblur":D=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=a0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=y0;break;case ou:case su:case cu:D=r0;break;case uu:D=v0;break;case"scroll":case"scrollend":D=t0;break;case"wheel":D=S0;break;case"copy":case"cut":case"paste":D=s0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Gc;break;case"toggle":case"beforetoggle":D=j0}var je=(t&4)!==0,et=!je&&(e==="scroll"||e==="scrollend"),S=je?M!==null?M+"Capture":null:M;je=[];for(var b=N,C;b!==null;){var Z=b;if(C=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||C===null||S===null||(Z=Le(b,S),Z!=null&&je.push(_i(b,Z,C))),et)break;b=b.return}0<je.length&&(M=new D(M,he,null,n,G),V.push({event:M,listeners:je}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",M&&n!==Y&&(he=n.relatedTarget||n.fromElement)&&(Sn(he)||he[Pn]))break e;if((D||M)&&(M=G.window===G?G:(M=G.ownerDocument)?M.defaultView||M.parentWindow:window,D?(he=n.relatedTarget||n.toElement,D=N,he=he?Sn(he):null,he!==null&&(et=z(he),je=he.tag,he!==et||je!==5&&je!==27&&je!==6)&&(he=null)):(D=null,he=N),D!==he)){if(je=Bc,Z="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(je=Gc,Z="onPointerLeave",S="onPointerEnter",b="pointer"),et=D==null?M:_a(D),C=he==null?M:_a(he),M=new je(Z,b+"leave",D,n,G),M.target=et,M.relatedTarget=C,Z=null,Sn(G)===N&&(je=new je(S,b+"enter",he,n,G),je.target=C,je.relatedTarget=et,Z=je),et=Z,D&&he)t:{for(je=k1,S=D,b=he,C=0,Z=S;Z;Z=je(Z))C++;Z=0;for(var we=b;we;we=je(we))Z++;for(;0<C-Z;)S=je(S),C--;for(;0<Z-C;)b=je(b),Z--;for(;C--;){if(S===b||b!==null&&S===b.alternate){je=S;break t}S=je(S),b=je(b)}je=null}else je=null;D!==null&&Df(V,M,D,je,!1),he!==null&&et!==null&&Df(V,et,he,je,!0)}}e:{if(M=N?_a(N):window,D=M.nodeName&&M.nodeName.toLowerCase(),D==="select"||D==="input"&&M.type==="file")var Qe=Wc;else if(Kc(M))if(Fc)Qe=D0;else{Qe=T0;var ge=M0}else D=M.nodeName,!D||D.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?N&&K(N.elementType)&&(Qe=Wc):Qe=L0;if(Qe&&(Qe=Qe(e,N))){Jc(V,Qe,n,G);break e}ge&&ge(e,M,N),e==="focusout"&&N&&M.type==="number"&&N.memoizedProps.value!=null&&$t(M,"number",M.value)}switch(ge=N?_a(N):window,e){case"focusin":(Kc(ge)||ge.contentEditable==="true")&&(sl=ge,_o=N,ii=null);break;case"focusout":ii=_o=sl=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,iu(V,n,G);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":iu(V,n,G)}var Te;if(Ao)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else ol?Qc(e,n)&&(Ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ye="onCompositionStart");Ye&&(Xc&&n.locale!=="ko"&&(ol||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&ol&&(Te=rn()):(Ze=G,Se="value"in Ze?Ze.value:Ze.textContent,ol=!0)),ge=Kr(N,Ye),0<ge.length&&(Ye=new Yc(Ye,e,null,n,G),V.push({event:Ye,listeners:ge}),Te?Ye.data=Te:(Te=$c(n),Te!==null&&(Ye.data=Te)))),(Te=A0?N0(e,n):z0(e,n))&&(Ye=Kr(N,"onBeforeInput"),0<Ye.length&&(ge=new Yc("onBeforeInput","beforeinput",null,n,G),V.push({event:ge,listeners:Ye}),ge.data=Te)),b1(V,e,N,n,G)}Tf(V,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Le(e,n),l!=null&&a.unshift(_i(e,l,i)),l=Le(e,t),l!=null&&a.push(_i(e,l,i))),e.tag===3)return a;e=e.return}return[]}function k1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Df(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var u=n,g=u.alternate,N=u.stateNode;if(u=u.tag,g!==null&&g===a)break;u!==5&&u!==26&&u!==27||N===null||(g=N,l?(N=Le(n,i),N!=null&&o.unshift(_i(n,N,g))):l||(N=Le(n,i),N!=null&&o.push(_i(n,N,g)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var j1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Rf(e){return(typeof e=="string"?e:""+e).replace(j1,`
`).replace(C1,"")}function Of(e,t){return t=Rf(t),Rf(e)===t}function Pe(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||x(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&x(e,""+a);break;case"className":jn(e,"class",a);break;case"tabIndex":jn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(e,n,a);break;case"style":ae(e,a,i);break;case"data":if(t!=="object"){jn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=H(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Pe(e,t,"name",l.name,l,null),Pe(e,t,"formEncType",l.formEncType,l,null),Pe(e,t,"formMethod",l.formMethod,l,null),Pe(e,t,"formTarget",l.formTarget,l,null)):(Pe(e,t,"encType",l.encType,l,null),Pe(e,t,"method",l.method,l,null),Pe(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=H(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=O);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=H(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ue("beforetoggle",e),Ue("toggle",e),ll(e,"popover",a);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ll(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=oe.get(n)||n,ll(e,n,a))}}function nc(e,t,n,a,l,i){switch(n){case"style":ae(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?x(e,a):(typeof a=="number"||typeof a=="bigint")&&x(e,""+a);break;case"onScroll":a!=null&&Ue("scroll",e);break;case"onScrollEnd":a!=null&&Ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=O);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Et]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ll(e,n,a)}}}function Nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ue("error",e),Ue("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Pe(e,t,i,o,n,null)}}l&&Pe(e,t,"srcSet",n.srcSet,n,null),a&&Pe(e,t,"src",n.src,n,null);return;case"input":Ue("invalid",e);var u=i=o=l=null,g=null,N=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":l=G;break;case"type":o=G;break;case"checked":g=G;break;case"defaultChecked":N=G;break;case"value":i=G;break;case"defaultValue":u=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(c(137,t));break;default:Pe(e,t,a,G,n,null)}}Il(e,i,u,g,N,o,l,!1);return;case"select":Ue("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"multiple":a=u;default:Pe(e,t,l,u,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Mn(e,!!a,t,!1):n!=null&&Mn(e,!!a,n,!0);return;case"textarea":Ue("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":a=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:Pe(e,t,o,u,n,null)}ar(e,a,l,i);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Pe(e,t,g,a,n,null)}return;case"dialog":Ue("beforetoggle",e),Ue("toggle",e),Ue("cancel",e),Ue("close",e);break;case"iframe":case"object":Ue("load",e);break;case"video":case"audio":for(a=0;a<Ei.length;a++)Ue(Ei[a],e);break;case"image":Ue("error",e),Ue("load",e);break;case"details":Ue("toggle",e);break;case"embed":case"source":case"link":Ue("error",e),Ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(a=n[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Pe(e,t,N,a,n,null)}return;default:if(K(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&nc(e,t,G,a,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(a=n[u],a!=null&&Pe(e,t,u,a,n,null))}function A1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,u=null,g=null,N=null,G=null;for(D in n){var V=n[D];if(n.hasOwnProperty(D)&&V!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":g=V;default:a.hasOwnProperty(D)||Pe(e,t,D,null,a,V)}}for(var M in a){var D=a[M];if(V=n[M],a.hasOwnProperty(M)&&(D!=null||V!=null))switch(M){case"type":i=D;break;case"name":l=D;break;case"checked":N=D;break;case"defaultChecked":G=D;break;case"value":o=D;break;case"defaultValue":u=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:D!==V&&Pe(e,t,M,D,a,V)}}Fl(e,o,u,g,N,G,i,l);return;case"select":D=o=u=M=null;for(i in n)if(g=n[i],n.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":D=g;default:a.hasOwnProperty(i)||Pe(e,t,i,null,a,g)}for(l in a)if(i=a[l],g=n[l],a.hasOwnProperty(l)&&(i!=null||g!=null))switch(l){case"value":M=i;break;case"defaultValue":u=i;break;case"multiple":o=i;default:i!==g&&Pe(e,t,l,i,a,g)}t=u,n=o,a=D,M!=null?Mn(e,!!n,M,!1):!!a!=!!n&&(t!=null?Mn(e,!!n,t,!0):Mn(e,!!n,n?[]:"",!1));return;case"textarea":D=M=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Pe(e,t,u,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":M=l;break;case"defaultValue":D=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&Pe(e,t,o,l,a,i)}nr(e,M,D);return;case"option":for(var he in n)if(M=n[he],n.hasOwnProperty(he)&&M!=null&&!a.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Pe(e,t,he,null,a,M)}for(g in a)if(M=a[g],D=n[g],a.hasOwnProperty(g)&&M!==D&&(M!=null||D!=null))switch(g){case"selected":e.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:Pe(e,t,g,M,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)M=n[je],n.hasOwnProperty(je)&&M!=null&&!a.hasOwnProperty(je)&&Pe(e,t,je,null,a,M);for(N in a)if(M=a[N],D=n[N],a.hasOwnProperty(N)&&M!==D&&(M!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Pe(e,t,N,M,a,D)}return;default:if(K(t)){for(var et in n)M=n[et],n.hasOwnProperty(et)&&M!==void 0&&!a.hasOwnProperty(et)&&nc(e,t,et,void 0,a,M);for(G in a)M=a[G],D=n[G],!a.hasOwnProperty(G)||M===D||M===void 0&&D===void 0||nc(e,t,G,M,a,D);return}}for(var S in n)M=n[S],n.hasOwnProperty(S)&&M!=null&&!a.hasOwnProperty(S)&&Pe(e,t,S,null,a,M);for(V in a)M=a[V],D=n[V],!a.hasOwnProperty(V)||M===D||M==null&&D==null||Pe(e,t,V,M,a,D)}function qf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function N1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,u=l.duration;if(i&&u&&qf(o)){for(o=0,u=l.responseEnd,a+=1;a<n.length;a++){var g=n[a],N=g.startTime;if(N>u)break;var G=g.transferSize,V=g.initiatorType;G&&qf(V)&&(g=g.responseEnd,o+=G*(g<u?1:(u-N)/(g-N)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ac=null,lc=null;function Jr(e){return e.nodeType===9?e:e.ownerDocument}function Hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function z1(){var e=window.event;return e&&e.type==="popstate"?e===rc?!1:(rc=e,!0):(rc=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,_1=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(M1)}:Bf;function M1(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Gf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Rl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Mi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Mi(n);for(var i=n.firstChild;i;){var o=i.nextSibling,u=i.nodeName;i[an]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Mi(e.ownerDocument.body);n=l}while(n);Rl(t)}function Xf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function oc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":oc(n),$l(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function T1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[an])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pn(e.nextSibling),e===null)break}return null}function L1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pn(e.nextSibling),e===null))return null;return e}function Zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pn(e.nextSibling),e===null))return null;return e}function sc(e){return e.data==="$?"||e.data==="$~"}function cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function D1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var uc=null;function Vf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function $f(e,t,n){switch(t=Jr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$l(e)}var hn=new Map,Kf=new Set;function Wr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qn=w.d;w.d={f:R1,r:O1,D:q1,C:H1,L:U1,m:B1,X:G1,S:Y1,M:X1};function R1(){var e=Qn.f(),t=Yr();return e||t}function O1(e){var t=ea(e);t!==null&&t.tag===5&&t.type==="form"?ud(t):Qn.r(e)}var Tl=typeof document>"u"?null:document;function Jf(e,t,n){var a=Tl;if(a&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Kf.has(l)||(Kf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Nt(t,"link",e),pt(t),a.head.appendChild(t)))}}function q1(e){Qn.D(e),Jf("dns-prefetch",e,null)}function H1(e,t){Qn.C(e,t),Jf("preconnect",e,t)}function U1(e,t,n){Qn.L(e,t,n);var a=Tl;if(a&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+kt(n.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var i=l;switch(t){case"style":i=Ll(e);break;case"script":i=Dl(e)}hn.has(i)||(e=R({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Ti(i))||t==="script"&&a.querySelector(Li(i))||(t=a.createElement("link"),Nt(t,"link",e),pt(t),a.head.appendChild(t)))}}function B1(e,t){Qn.m(e,t);var n=Tl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(a)+'"][href="'+kt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Dl(e)}if(!hn.has(i)&&(e=R({rel:"modulepreload",href:e},t),hn.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Li(i)))return}a=n.createElement("link"),Nt(a,"link",e),pt(a),n.head.appendChild(a)}}}function Y1(e,t,n){Qn.S(e,t,n);var a=Tl;if(a&&e){var l=ta(a).hoistableStyles,i=Ll(e);t=t||"default";var o=l.get(i);if(!o){var u={loading:0,preload:null};if(o=a.querySelector(Ti(i)))u.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(i))&&dc(e,n);var g=o=a.createElement("link");pt(g),Nt(g,"link",e),g._p=new Promise(function(N,G){g.onload=N,g.onerror=G}),g.addEventListener("load",function(){u.loading|=1}),g.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Fr(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:u},l.set(i,o)}}}function G1(e,t){Qn.X(e,t);var n=Tl;if(n&&e){var a=ta(n).hoistableScripts,l=Dl(e),i=a.get(l);i||(i=n.querySelector(Li(l)),i||(e=R({src:e,async:!0},t),(t=hn.get(l))&&fc(e,t),i=n.createElement("script"),pt(i),Nt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function X1(e,t){Qn.M(e,t);var n=Tl;if(n&&e){var a=ta(n).hoistableScripts,l=Dl(e),i=a.get(l);i||(i=n.querySelector(Li(l)),i||(e=R({src:e,async:!0,type:"module"},t),(t=hn.get(l))&&fc(e,t),i=n.createElement("script"),pt(i),Nt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Wf(e,t,n,a){var l=(l=W.current)?Wr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ll(n.href),n=ta(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ll(n.href);var i=ta(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Ti(e)))&&!i._p&&(o.instance=i,o.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),i||Z1(l,e,n,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(n),n=ta(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ll(e){return'href="'+kt(e)+'"'}function Ti(e){return'link[rel="stylesheet"]['+e+"]"}function Ff(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function Z1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Nt(t,"link",n),pt(t),e.head.appendChild(t))}function Dl(e){return'[src="'+kt(e)+'"]'}function Li(e){return"script[async]"+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(a)return t.instance=a,pt(a),a;var l=R({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),pt(a),Nt(a,"style",l),Fr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ll(n.href);var i=e.querySelector(Ti(l));if(i)return t.state.loading|=4,t.instance=i,pt(i),i;a=Ff(n),(l=hn.get(l))&&dc(a,l),i=(e.ownerDocument||e).createElement("link"),pt(i);var o=i;return o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Nt(i,"link",a),t.state.loading|=4,Fr(i,n.precedence,e),t.instance=i;case"script":return i=Dl(n.src),(l=e.querySelector(Li(i)))?(t.instance=l,pt(l),l):(a=n,(l=hn.get(i))&&(a=R({},n),fc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),pt(l),Nt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Fr(a,n.precedence,e));return t.instance}function Fr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var u=a[o];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ir=null;function Pf(e,t,n){if(Ir===null){var a=new Map,l=Ir=new Map;l.set(n,a)}else l=Ir,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[an]||i[ut]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var u=a.get(o);u?u.push(i):a.set(o,[i])}}return a}function ep(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function V1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q1(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ll(a.href),i=t.querySelector(Ti(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,pt(i);return}i=t.ownerDocument||t,a=Ff(a),(l=hn.get(l))&&dc(a,l),i=i.createElement("link"),pt(i);var o=i;o._p=new Promise(function(u,g){o.onload=u,o.onerror=g}),Nt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Pr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var pc=0;function $1(e,t){return e.stylesheets&&e.count===0&&to(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&to(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&pc===0&&(pc=62500*N1());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&to(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>pc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)to(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eo=null;function to(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eo=new Map,t.forEach(K1,e),eo=null,Pr.call(e))}function K1(e,t){if(!(t.state.loading&4)){var n=eo.get(e);if(n)var a=n.get(null);else{n=new Map,eo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=Pr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Di={$$typeof:xe,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function J1(e,t,n,a,l,i,o,u,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function np(e,t,n,a,l,i,o,u,g,N,G,V){return e=new J1(e,t,n,o,g,N,G,V,u),t=1,i===!0&&(t|=24),i=Jt(3,null,null,t),e.current=i,i.stateNode=e,t=Qo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Wo(i),e}function ap(e){return e?(e=dl,e):dl}function lp(e,t,n,a,l,i){l=ap(l),a.context===null?a.context=l:a.pendingContext=l,a=oa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=sa(e,a,t),n!==null&&(Vt(n,e,t),fi(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hc(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function rp(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Vt(t,e,67108864),hc(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=en();t=al(t);var n=Da(e,t);n!==null&&Vt(n,e,t),hc(e,t)}}var no=!0;function W1(e,t,n,a){var l=m.T;m.T=null;var i=w.p;try{w.p=2,mc(e,t,n,a)}finally{w.p=i,m.T=l}}function F1(e,t,n,a){var l=m.T;m.T=null;var i=w.p;try{w.p=8,mc(e,t,n,a)}finally{w.p=i,m.T=l}}function mc(e,t,n,a){if(no){var l=gc(a);if(l===null)tc(e,t,a,ao,n),cp(e,a);else if(P1(l,e,t,n,a))a.stopPropagation();else if(cp(e,a),t&4&&-1<I1.indexOf(e)){for(;l!==null;){var i=ea(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);if(o!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var g=1<<31-bt(o);u.entanglements[1]|=g,o&=~g}zn(i),(Je&6)===0&&(Ur=Mt()+500,zi(0))}}break;case 31:case 13:u=Da(i,2),u!==null&&Vt(u,i,2),Yr(),hc(i,2)}if(i=gc(a),i===null&&tc(e,t,a,ao,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else tc(e,t,a,null,n)}}function gc(e){return e=te(e),xc(e)}var ao=null;function xc(e){if(ao=null,e=Sn(e),e!==null){var t=z(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=q(t),e!==null)return e;e=null}else if(n===31){if(e=E(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ao=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yo()){case Dt:return 2;case En:return 8;case Tt:case Na:return 32;case tl:return 268435456;default:return 32}default:return 32}}var yc=!1,ba=null,va=null,wa=null,Ri=new Map,Oi=new Map,Sa=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function qi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ea(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function P1(e,t,n,a,l){switch(t){case"focusin":return ba=qi(ba,e,t,n,a,l),!0;case"dragenter":return va=qi(va,e,t,n,a,l),!0;case"mouseover":return wa=qi(wa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Ri.set(i,qi(Ri.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Oi.set(i,qi(Oi.get(i)||null,e,t,n,a,l)),!0}return!1}function up(e){var t=Sn(e.target);if(t!==null){var n=z(t);if(n!==null){if(t=n.tag,t===13){if(t=q(n),t!==null){e.blockedOn=t,$i(e.priority,function(){op(n)});return}}else if(t===31){if(t=E(n),t!==null){e.blockedOn=t,$i(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Y=a,n.target.dispatchEvent(a),Y=null}else return t=ea(n),t!==null&&rp(t),e.blockedOn=n,!1;t.shift()}return!0}function dp(e,t,n){lo(e)&&n.delete(t)}function e2(){yc=!1,ba!==null&&lo(ba)&&(ba=null),va!==null&&lo(va)&&(va=null),wa!==null&&lo(wa)&&(wa=null),Ri.forEach(dp),Oi.forEach(dp)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,e2)))}var ro=null;function fp(e){ro!==e&&(ro=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(xc(a||n)===null)continue;break}var i=ea(n);i!==null&&(e.splice(t,3),t-=3,gs(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Rl(e){function t(g){return io(g,e)}ba!==null&&io(ba,e),va!==null&&io(va,e),wa!==null&&io(wa,e),Ri.forEach(t),Oi.forEach(t);for(var n=0;n<Sa.length;n++){var a=Sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Sa.length&&(n=Sa[0],n.blockedOn===null);)up(n),n.blockedOn===null&&Sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Et]||null;if(typeof i=="function")o||fp(n);else if(o){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Et]||null)u=o.formAction;else if(xc(l)!==null)continue}else u=o.action;typeof u=="function"?n[a+1]=u:(n.splice(a,3),a-=3),fp(n)}}}function pp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function bc(e){this._internalRoot=e}oo.prototype.render=bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=en();lp(n,a,e,t,null,null)},oo.prototype.unmount=bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lp(e.current,2,null,e,null,null),Yr(),t[Pn]=null}};function oo(e){this._internalRoot=e}oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sa.length&&t!==0&&t<Sa[n].priority;n++);Sa.splice(n,0,e),n===0&&up(e)}};var hp=f.version;if(hp!=="19.2.1")throw Error(c(527,hp,"19.2.1"));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var t2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:m,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Kn=so.inject(t2),St=so}catch{}}return Ui.createRoot=function(e,t){if(!p(e))throw Error(c(299));var n=!1,a="",l=vd,i=wd,o=Sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=np(e,1,!1,null,null,n,a,null,l,i,o,pp),e[Pn]=t.current,ec(e),new bc(t)},Ui.hydrateRoot=function(e,t,n){if(!p(e))throw Error(c(299));var a=!1,l="",i=vd,o=wd,u=Sd,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=np(e,1,!0,t,n??null,a,l,g,i,o,u,pp),t.context=ap(null),n=t.current,a=en(),a=al(a),l=oa(a),l.callback=null,sa(n,l,a),n=a,t.current.lanes=n,In(t,n),zn(t),e[Pn]=t.current,ec(e),new oo(t)},Ui.version="19.2.1",Ui}var Cp;function v2(){if(Cp)return kc.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),kc.exports=b2(),kc.exports}var w2=v2();function S2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"m15.287 3.152-.927.927-8.521 8.52c-.577.578-.866.867-1.114 1.185a6.556 6.556 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281-.268.802a1.06 1.06 0 0 0 1.342 1.342l.802-.268 3.281-1.094c.775-.258 1.162-.387 1.526-.56.43-.205.836-.456 1.211-.749.318-.248.607-.537 1.184-1.114l8.521-8.521.927-.927a3.932 3.932 0 0 0-5.561-5.561Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M14.36 4.078s.116 1.97 1.854 3.708c1.738 1.738 3.707 1.853 3.707 1.853M4.198 21.678 2.322 19.8",stroke:"currentColor",strokeWidth:1.5})]})}function k2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:r.jsx("path",{d:"m15 5-6 7 6 7",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})})}function j2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("circle",{cx:12,cy:13,r:3,stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{d:"M19 10h-1",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function C2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{opacity:.5,d:"M21 17v-5a9 9 0 1 0-18 0v5",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M22 15.5v2M2 15.5v2",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{d:"M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z",stroke:"currentColor",strokeWidth:1.5})]})}function Ap({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"m15.393 4.054-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5Z",fill:"currentColor"}),r.jsx("path",{opacity:.5,d:"M6 14.5h8M6 18h5.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{opacity:.5,d:"M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4",stroke:"currentColor",strokeWidth:1.5})]})}function Nc({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("circle",{cx:11.5,cy:11.5,r:9.5,stroke:"#8E93A6",strokeWidth:1.5}),r.jsx("path",{d:"M18.5 18.5 22 22",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function A2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("circle",{opacity:.5,cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{d:"m14.5 9.5-5 5m0-5 5 5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function Qp({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M19.1 10.66c1.111 1.314.88 2.921.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{opacity:.5,d:"M12.826 16c0 .173-.361.313-.806.313-.446 0-.807-.14-.807-.313s.361-.313.807-.313c.445 0 .806.14.806.313ZM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78ZM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function N2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M20 7H4",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{opacity:.5,d:"M20 12H4",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{d:"M20 17H4",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function Np({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M22 5.814v.69c0 1.038 0 1.557-.26 1.987-.26.43-.733.697-1.682 1.231l-2.913 1.64c-.636.358-.955.538-1.182.735a2.68 2.68 0 0 0-.9 1.49c-.063.285-.063.619-.063 1.286v2.67c0 1.909 0 2.863-.668 3.281-.668.418-1.607.05-3.486-.684-.895-.35-1.342-.524-1.594-.879C9 18.907 9 18.451 9 17.542v-2.67c0-.666 0-1-.064-1.285a2.68 2.68 0 0 0-.898-1.49c-.228-.197-.547-.377-1.183-.735l-2.913-1.64c-.949-.534-1.423-.8-1.682-1.23C2 8.06 2 7.541 2 6.503v-.69",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M22 5.815c0-1.327 0-1.99-.44-2.403C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815",stroke:"currentColor",strokeWidth:1.5})]})}function z2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{d:"M5.5 10h6M6.5 14h4",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{opacity:.5,d:"M15 21V3",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function E2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("circle",{cx:12,cy:12,r:3,stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555.473.297.777.803.777 1.361 0 .558-.304 1.064-.777 1.36-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z",stroke:"currentColor",strokeWidth:1.5})]})}function $p({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M8 7h8M8 10.5h5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function _2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M8 2.5V22M2 12h2M2 16h2M2 8h2",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{d:"M11.5 6.5h5M11.5 10h5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function Kp({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{d:"M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M8 7h8M8 10.5h5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function M2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{d:"M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M7 16V2.5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function T2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M21 16.09v-4.992c0-4.29 0-6.433-1.318-7.766C18.364 2 16.242 2 12 2 7.757 2 5.636 2 4.318 3.332 3 4.665 3 6.81 3 11.098v4.993c0 3.096 0 4.645.734 5.321.35.323.792.526 1.263.58.987.113 2.14-.907 4.445-2.946 1.02-.901 1.529-1.352 2.118-1.47.29-.06.59-.06.88 0 .59.118 1.099.569 2.118 1.47 2.305 2.039 3.458 3.059 4.445 2.945.47-.053.913-.256 1.263-.579.734-.676.734-2.224.734-5.321Z",stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M15 6H9",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}function L2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{opacity:.5,d:"M12 20a8 8 0 1 0 0-16",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"}),r.jsx("path",{d:"M4 12h10m0 0-3-3m3 3-3 3",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]})}function D2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("path",{d:"M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294C22 4.818 19.17 2 15.68 2S9.362 4.818 9.362 8.293c0 1.61.735 2.781.735 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.405 2.645.586 3.086 0 .735-1.024 0-2.049 0-2.049-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z",stroke:"currentColor",strokeWidth:1.5,strokeLinejoin:"round"}),r.jsx("path",{opacity:.5,d:"M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195 2.2 2.2 0 0 1-2.205-2.195 2.2 2.2 0 0 1 2.205-2.196 2.2 2.2 0 0 1 2.204 2.196Z",stroke:"currentColor",strokeWidth:1.5})]})}function R2({color:s="currentColor",size:f=16,style:d={},...c}){const p={...c,width:f,height:f,style:{color:s,display:"inline-block",...d}};return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...p,children:[r.jsx("circle",{opacity:.5,cx:12,cy:9,r:3,stroke:"currentColor",strokeWidth:1.5}),r.jsx("circle",{cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:1.5}),r.jsx("path",{opacity:.5,d:"M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round"})]})}var Ol=Vp();const O2=["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net"];function Yi(s){const f=s.match(/^https?:\/\/([\w.-]*\.)?jsdelivr\.net(\/gh\/.*)$/i);if(!f)return[s];const d=f[2];return O2.map(c=>c+d)}const yn=s=>{const f=Math.floor(s/60),d=Math.floor(s%60);return`${f}:${String(d).padStart(2,"0")}`},q2=({meta:s,title:f="听力音频"})=>{const d=y.useRef(null),c=y.useMemo(()=>{const T=Yi(s.src??""),ie=(s.srcs??[]).flatMap(ve=>Yi(ve));return[...T,...ie.filter(ve=>!T.includes(ve))]},[s.src,s.srcs]),[p,z]=y.useState(0),q=y.useMemo(()=>{const T=c[p]??c[0]??"";return T.startsWith("/")||/^https?:/.test(T)?T:`${window.location.origin}${T.replace(/^\.?\//,"/")}`},[c,p]),E=()=>{z(T=>T<c.length-1?T+1:T)},[k,v]=y.useState(0),[U,R]=y.useState(!1),[B,F]=y.useState(1),I=s.parts,P=s.questionTimes??{},ue=s.segments??[],de=!!(I!=null&&I.length),le=y.useMemo(()=>de?s.duration||0:ue.length?ue[ue.length-1].end:0,[de,s.duration,ue]);y.useEffect(()=>{const T=d.current;if(!T)return;const ie=()=>v(T.currentTime),ve=()=>R(!1);return T.addEventListener("timeupdate",ie),T.addEventListener("ended",ve),()=>{T.removeEventListener("timeupdate",ie),T.removeEventListener("ended",ve)}},[]);const xe=y.useCallback(()=>{const T=d.current;T&&(T.paused?(T.play(),R(!0)):(T.pause(),R(!1)))},[]),ye=y.useCallback(T=>{const ie=d.current;ie&&(ie.currentTime=Math.max(0,Math.min(T,ie.duration||T)),v(ie.currentTime))},[]),ke=y.useCallback(T=>le>0?Math.min(100,Math.max(0,T/le*100)):0,[le]),ce=y.useRef(null),fe=y.useCallback(T=>{const ie=ce.current;if(!ie||le<=0)return;const ve=ie.getBoundingClientRect(),ze=Math.min(1,Math.max(0,(T.clientX-ve.left)/ve.width));ye(ze*le)},[ye,le]),be=y.useCallback(()=>{const T=Array.from(document.querySelectorAll(".exam-content-root h2")).find(ie=>/Part II|Listening/i.test(ie.textContent||""));T==null||T.scrollIntoView({behavior:"smooth",block:"start"})},[]);y.useEffect(()=>{if(!de)return;const T=ie=>{const ve=ie.detail??{},ze=typeof ve.time=="number"?ve.time:ve.no!=null?P[ve.no]:void 0;if(ze==null)return;be(),ye(ze);const m=d.current;m&&(m.play(),R(!0))};return window.addEventListener("cet:lp2-jump",T),()=>window.removeEventListener("cet:lp2-jump",T)},[de,P,ye,be]);const[ne,se]=y.useState(0);y.useEffect(()=>{const T=ce.current;if(!T)return;const ie=()=>se(T.clientWidth);ie();const ve=new ResizeObserver(ie);return ve.observe(T),()=>ve.disconnect()},[de]);const re=T=>{var ie;return((ie=s.labels)==null?void 0:ie[T])??`第 ${T+1} 段`};if(!s.src)return null;if(de&&I){const T=ke(k),ie=Object.entries(P).map(([j,X])=>({no:j,x:Number(X)/(le||1)*ne}));ie.sort((j,X)=>j.x-X.x);const ve=1;let ze=-1/0;const m=ie.map(j=>{const X=j.no.length*4+2,Q=Math.max(0,ze+ve-(j.x-X/2));return ze=j.x+Q+X/2,{no:j.no,cx:j.x+Q}}),w=(()=>{const j=(I??[]).map((A,$)=>{const J=$+1<I.length?I[$+1].start:le,pe=A.start/(le||1)*100,W=J/(le||1)*100;return{label:A.label,start:A.start,mid:(pe+W)/2}}),X=A=>Math.max(24,A.length*5.4+8)/(ne||1)*100,Q=1.2;let h=-1/0;return j.map(A=>{const $=X(A.label),J=Math.max($/2,A.mid+Math.max(0,h+Q-(A.mid-$/2)));return h=J+$/2,{...A,mid:Math.min(J,100-$/2)}})})();return r.jsxs("div",{className:"lp2",children:[r.jsx("audio",{ref:d,src:q,preload:"metadata",onError:E}),r.jsx("button",{type:"button",className:"lp2-play",onClick:xe,"aria-label":U?"暂停":"播放",children:U?"❚❚":"▶"}),r.jsxs("div",{className:"lp2-times",children:[r.jsx("span",{className:"lp2-cur",children:yn(k)}),r.jsx("span",{className:"lp2-total",children:yn(le)})]}),r.jsxs("div",{className:"lp2-mid",children:[r.jsxs("div",{className:"lp2-labels",children:[I[0]&&I[0].start>3&&r.jsx("button",{type:"button",className:"lp2-part-label is-intro",style:{left:`${ke(I[0].start)/2}%`},onClick:()=>ye(0),title:`念题目 ${yn(0)} - ${yn(I[0].start)}`,children:"念题"}),w.map(j=>r.jsx("button",{type:"button",className:"lp2-part-label",style:{left:`${j.mid}%`},onClick:()=>ye(j.start),title:`${j.label} ${yn(j.start)}`,children:j.label},j.label))]}),r.jsxs("div",{className:"lp2-track",ref:ce,onClick:fe,role:"slider","aria-label":"播放进度","aria-valuemin":0,"aria-valuemax":le,"aria-valuenow":Math.round(k),children:[I[0]&&I[0].start>3&&r.jsx("span",{className:"lp2-segblock is-intro",style:{left:"2px",width:`calc(${ke(I[0].start)}% - 4px)`}},"seg-intro"),I.map((j,X)=>{const Q=X+1<I.length?I[X+1].start:le;if(Q<=j.start)return null;const h=ke(j.start),A=ke(Q)-ke(j.start);return r.jsx("span",{className:"lp2-segblock",style:{left:`calc(${h}% + 2px)`,width:`calc(${A}% - 4px)`}},`seg-${j.label}`)}),r.jsx("div",{className:"lp2-glow",style:{width:`${T}%`}}),m.map(j=>r.jsx("span",{className:"lp2-mark",style:{left:`${j.cx}px`}},`mark-${j.no}`)),r.jsx("div",{className:"lp2-cursor",style:{left:`${T}%`}}),m.map(j=>r.jsx("button",{type:"button",className:"lp2-q",style:{left:`${j.cx}px`},onClick:X=>{X.stopPropagation(),ye(P[j.no])},title:`第 ${j.no} 题 ${yn(P[j.no])}`,children:j.no},`q-${j.no}`))]})]}),r.jsx("select",{className:"lp2-rate",value:B,onChange:j=>{const X=Number(j.target.value);F(X),d.current&&(d.current.playbackRate=X)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(j=>r.jsxs("option",{value:j,children:[j,"x"]},j))}),r.jsx("button",{type:"button",className:"lp2-trans",onClick:be,children:"听力原文"})]})}return r.jsxs("div",{className:"lp-wrap",children:[r.jsx("audio",{ref:d,src:q,preload:"metadata",onError:E}),r.jsxs("div",{className:"lp-head",children:[r.jsx("button",{type:"button",className:"lp-play",onClick:xe,"aria-label":U?"暂停":"播放",children:U?"❚❚":"▶"}),r.jsx("span",{className:"lp-title",children:f}),r.jsxs("span",{className:"lp-time",children:[yn(k)," / ",yn(le)]}),r.jsx("select",{className:"lp-rate",value:B,onChange:T=>{const ie=Number(T.target.value);F(ie),d.current&&(d.current.playbackRate=ie)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(T=>r.jsxs("option",{value:T,children:[T,"x"]},T))})]}),r.jsx("div",{className:"lp-segs",children:ue.map((T,ie)=>{const ve=k>=T.end,ze=k>=T.start&&k<T.end;return r.jsxs("button",{type:"button",className:`lp-seg${ve?" is-done":""}${ze?" is-active":""}`,style:{flexGrow:Math.max(.5,T.dur)},onClick:()=>ye(T.start),title:`${re(ie)} ${yn(T.start)} - ${yn(T.end)}`,"aria-label":`跳转到${re(ie)}`,children:[r.jsx("span",{className:"lp-seg-bar"}),r.jsx("span",{className:"lp-seg-name",children:re(ie)}),r.jsx("span",{className:"lp-seg-time",children:yn(T.start)})]},`${T.start}-${ie}`)})}),r.jsx("input",{className:"lp-scrub",type:"range",min:0,max:le||1,step:.1,value:Math.min(k,le||0),onChange:T=>ye(Number(T.target.value)),"aria-label":"播放进度"})]})};function H2(s){if(typeof DOMParser>"u")return s;const f=new DOMParser().parseFromString(s,"text/html");return f.querySelectorAll("script, style, iframe, object, embed, link, meta, base").forEach(d=>d.remove()),f.querySelectorAll("*").forEach(d=>{Array.from(d.attributes).forEach(c=>{const p=c.name.toLowerCase(),z=c.value.trim().toLowerCase();p.startsWith("on")&&d.removeAttribute(c.name),(p==="href"||p==="src")&&z.startsWith("javascript:")&&d.removeAttribute(c.name)})}),f.body.innerHTML}const zp="background-color: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;",U2="background-color: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1.5rem 0;",B2="background: repeating-linear-gradient(to bottom, transparent, transparent 33px, #d0d7de 33px, #d0d7de 34px); padding: 1rem 1.25rem; border: 1px solid #d0d7de; border-radius: 8px; margin: 1rem 0 1.5rem;",Y2=(s,f)=>`<div class="question"><p><strong>${s}.</strong> ${f}</p></div>`,G2=s=>`<div class="question"><p><strong>${s}.</strong></p><div class="options">`+["A","B","C","D"].map(f=>`<div class="option"><strong>${f})</strong> （待补入选项）</div>`).join("")+"</div></div>",$a=(s,f)=>Array.from({length:f-s+1},(d,c)=>G2(s+c)).join(""),Ka=(s,f,d)=>`<p><strong>Questions ${s} to ${f} are based on the ${d} you have just heard.</strong></p>`,Ep=s=>`<div style="${B2}">`+Array.from({length:s},()=>"<p>&nbsp;</p>").join("")+"</div>",zc={"cet6-2025-12-1":"Living in an increasingly competitive world, college students should better prepare themselves to confront various challenges.","cet6-2025-12-2":"While striving for the Chinese Dream, young people enjoy more opportunities to realize their self-worth.","cet6-2025-12-3":"It is believed that teachers can exert a profound influence on their students' academic pursuit and personal development.","cet6-2025-06-1":"As social media is used more and more extensively, there is a growing awareness of the importance of using it properly and responsibly.","cet6-2025-06-2":"As requirements for job applications are getting increasingly higher, college students ought to be better prepared for their future career.","cet6-2025-06-3":"With the increasing application of AI technology, there is a growing concern that it may negatively impact human creativity."},X2=s=>{if(!s)return;if(zc[s])return zc[s];const f=s.match(/^(cet\d)-(\d{4})-(\d{2})-set(\d)$/);return f?zc[`${f[1]}-${f[2]}-${f[3]}-${f[4]}`]:void 0},Z2=(s,f=["150","200"])=>{const d="&emsp;&emsp;",c=k=>`<em>${k}</em>`,[p,z]=f,q=s?`For this part, you are allowed 30 minutes to write an essay that begins with the sentence &ldquo;<strong>${s}</strong>&rdquo; You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least <u>${p}</u> words but no more than <u>${z}</u> words.`:`For this part, you are allowed 30 minutes to write an essay. You should write at least <u>${p}</u> words but no more than <u>${z}</u> words.`,E=s?`${d}<u><strong>You should copy the sentence given in quotes at the beginning of your essay.</strong></u>`:"";return'<p class="pd-write-dir"><strong>Directions:</strong>'+c(q)+(E?`<br>
${c(E)}`:"")+"</p>"},Ja={convA:"In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convB:"In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convC:"In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",banked:"In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on <strong>Answer Sheet 2</strong> with a single line through the centre. You may not use any of the words in the bank more than once.",matching:"In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on <strong>Answer Sheet 2</strong>.",careful:"There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A, B, C and D. You should decide on the best choice and mark the corresponding letter on <strong>Answer Sheet 2</strong> with a single line through the centre.",translation:"For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on <strong>Answer Sheet 2</strong>."},Wa=s=>`<p class="pd-dir"><strong>Directions:</strong><em>${s}</em></p>`,V2=s=>{const d=Math.floor(10/s),c=10%s,p=[];let z=26;for(let q=0;q<s;q++){const E=d+(q<c?1:0);p.push([z,z+E-1]),z+=E}return p},Q2=(s,f,d)=>{const c=Array.from({length:f-s+1},(p,z)=>`<span class="blank" data-blank="${s+z}">${s+z}</span>`);return`<p class="pd-passage">Paragraph ${d} — to be imported, with `+c.join(" , ")+" in the passage.</p>"},_p="ABCDEFGHIJKLMNOPQRSTUVWXYZ",$2=s=>Array.from({length:Math.min(Math.max(s,1),_p.length)},(f,d)=>`<p><strong>${_p[d]}.</strong> （待导入段落文本）</p>`).join(""),Bi=(s,f)=>`<div class="question"><p><strong>${s}.</strong> ${f}</p><div class="options">`+["A","B","C","D"].map(d=>`<div class="option"><strong>${d})</strong> （待补入选项）</div>`).join("")+"</div></div>",K2=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],J2=s=>K2[s]??`No.${s+1}`,W2=s=>{const f=Math.min(Math.max(s||2,1),10),d=[];for(let c=0;c<f;c++){const p=46+c*5,z=p+4;d.push(`<p><strong>Passage ${J2(c)}</strong></p>`,`<p><strong>Questions ${p} to ${z} are based on the following passage.</strong></p>`,'<p class="pd-passage">（文章待导入）</p>',Bi(String(p),"What is the main idea of the passage?"),Bi(String(p+1),"According to Paragraph 1, what can be inferred?"),Bi(String(p+2),"What does the author think of the practice?"),Bi(String(p+3),"Why does the writer mention the case mentioned?"),Bi(String(z),"What would the author most probably suggest?"))}return d.join("")},F2=s=>{const f=s.writing||"（待补入写作主题）",d=s.translation||"（待补入翻译段落）",c=s.readingFocus??[],p=s.matchParas??8,z=s.bankedGroups??2,q=s.carefulPassages??2;return["<h2>Part I Writing (30 minutes)</h2>",Z2(X2(s.paperId),s.type==="四级"?["120","180"]:["150","200"]),`<div style="${zp}"><h3 style="margin-top:0;">写作提示：</h3><ul style="padding-left:20px;"><li>主题：${f}</li>`+(c.length?c.slice(0,3).map(E=>`<li>${E}</li>`).join(""):"<li>立意与结构</li><li>论据与例证</li><li>语言与衔接</li>")+"</ul></div>",Ep(10),"<h2>Part II Listening Comprehension (25 minutes)</h2>",'<h3 class="pd-sec">Section A - Conversations</h3>',Wa(Ja.convA),Ka(1,4,"conversation"),$a(1,4),Ka(5,8,"conversation"),$a(5,8),'<h3 class="pd-sec">Section B - Passages</h3>',Wa(Ja.convB),Ka(9,11,"passage"),$a(9,11),Ka(12,15,"passage"),$a(12,15),'<h3 class="pd-sec">Section C - Lectures</h3>',Wa(Ja.convC),Ka(16,18,"recording"),$a(16,18),Ka(19,21,"recording"),$a(19,21),Ka(22,25,"recording"),$a(22,25),"<h2>Part III Reading Comprehension (40 minutes)</h2>",'<h3 class="pd-break-sec">Section A - Banked Cloze</h3>',Wa(Ja.banked),V2(z).map(([E,k],v)=>Q2(E,k,v+1)).join(""),`<div style="${zp}"><h3 style="margin-top:0;">词库 Word Bank</h3><ul class="pd-wordbank">`+"ABCDEFGHIJKLMNO".split("").map(E=>`<li>${E}. ______</li>`).join("")+"</ul></div>",'<h3 class="pd-break-sec">Section B - Matching</h3>',Wa(Ja.matching),$2(p),"<p><strong>Statement list:</strong></p>",...Array.from({length:10},(E,k)=>Y2(String(36+k),"Which paragraph does the statement below refer to?")),'<h3 class="pd-break-sec">Section C - Careful Reading</h3>',Wa(Ja.careful),...W2(q),"<h2>Part IV Translation (30 minutes)</h2>",Wa(Ja.translation),`<div style="${U2}"><p style="line-height:1.8;"><strong>翻译原文（主题：${d}）：</strong></p><p style="line-height:1.8;">（原文待补入）</p></div>`,"<p><strong>译文作答区：</strong></p>",Ep(12)].join("")},Mp=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),I2=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.101c.119-1.486.259-3.245 1.303-4.595C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06",clipRule:"evenodd"})}),P2=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",d:"M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"})}),eh=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",d:"M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"})}),th=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 0 1-1.54 0v-5.351H5.19v5.351a.77.77 0 1 1-1.54 0V5.673a.77.77 0 0 1 .77-.77",clipRule:"evenodd"})}),nh=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061",clipRule:"evenodd"})}),ah=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z",clipRule:"evenodd"})}),lh=s=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...s,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z",clipRule:"evenodd"})}),Jp=`<svg
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
  </svg>`,Wp=`<svg
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
  </svg>`,ih=`<svg
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
</svg>`,Gi=({svg:s,cls:f,color:d})=>r.jsx("span",{className:f,"aria-hidden":"true",style:d?{color:d}:void 0,dangerouslySetInnerHTML:{__html:s}}),Ke=1e3,Tc=14,Oc=[{key:"Red",value:"#fb7081"},{key:"Orange",value:"#ff8c38"},{key:"Yellow",value:"#fcd34d"},{key:"Green",value:"#3cbc36"},{key:"Blue",value:"#84cfff"},{key:"Purple",value:"#6e52df"},{key:"Magenta",value:"#e96cab"},{key:"Grey",value:"#929292"},{key:"Black",value:"#000000"},{key:"White",value:"#ffffff"}],Fp=[2,4,6,8,10,12],rh=[10,14,18,22,26,30],mo=(s,f)=>{const d=s.replace("#",""),c=d.length===3?d.split("").map(z=>z+z).join(""):d,p=parseInt(c,16);return`rgba(${p>>16&255}, ${p>>8&255}, ${p&255}, ${f})`},Fa={pencil:{color:"#1e96eb",lineWidth:4},marker:{color:"#1e96eb",lineWidth:22},highlight:{color:"#fcd34d",lineWidth:0}},go={color:"#929292",lineWidth:4,lineStyle:"curve"},co={strokes:[],notes:[],grid:!1,penProps:Fa,shapeProps:go,eraserSize:Tc},uo=()=>Math.random().toString(36).slice(2,9),oh={pencil:2.2,marker:7,curve:2.6};function sh(s){const{pts:f}=s;if(!f.length)return"";if(s.tool==="curve"&&f.length>=2){const[d,c]=[f[0],f[f.length-1]],p=s.lineStyle??"curve";if(p==="straight")return`M ${d.x} ${d.y} L ${c.x} ${c.y}`;if(p==="orthogonal"){const B=(d.x+c.x)/2;return`M ${d.x} ${d.y} L ${B} ${d.y} L ${B} ${c.y} L ${c.x} ${c.y}`}const z=(d.x+c.x)/2,q=(d.y+c.y)/2,E=c.x-d.x,k=c.y-d.y,v=Math.hypot(E,k)||1,U=z-k/v*v*.18,R=q+E/v*v*.18;return`M ${d.x} ${d.y} Q ${U} ${R} ${c.x} ${c.y}`}return"M "+f.map(d=>`${d.x.toFixed(1)} ${d.y.toFixed(1)}`).join(" L ")}const Tp=s=>s==="pencil"||s==="marker"||s==="curve"||s==="highlight"||s==="underline",ch=({ann:s,tool:f,penProps:d,shapeProps:c,onAddStroke:p,onAppendPoint:z,onSnap:q,onEraseIds:E,onEraseLocal:k,eraserSize:v,onAddNote:U,onUpdateNote:R})=>{const B=y.useRef(!1),F=y.useRef(null),[I,P]=y.useState(null),ue=y.useRef(15),[de,le]=y.useState(null),[xe,ye]=y.useState(null),ke=y.useRef(null),ce=y.useRef(null),fe=y.useRef(null),be=y.useCallback(w=>{ke.current=w,ye(w)},[]),ne=y.useCallback(w=>{le({x:w.clientX,y:w.clientY})},[]),se=y.useCallback((w,j)=>{const X=w.getBoundingClientRect(),Q=X.left+j.x/Ke*X.width,h=X.top+j.y/Ke*X.height,A=X.left+(j.x+j.w)/Ke*X.width,$=X.top+(j.y+j.h)/Ke*X.height,J=Math.min(Q,A),pe=Math.max(Q,A),W=Math.min(h,$),Ae=Math.max(h,$),Xe=[];for(const at of s.strokes)at.pts.some(tn=>{const zt=X.left+tn.x/Ke*X.width,$n=X.top+tn.y/Ke*X.height;return zt>=J&&zt<=pe&&$n>=W&&$n<=Ae})&&Xe.push(at.id);const Ne=[],rt=120/Ke*X.width,wt=30/Ke*X.height;for(const at of s.notes){const tn=X.left+at.x/Ke*X.width,zt=X.top+at.y/Ke*X.height;tn+rt>=J&&tn<=pe&&zt+wt>=W&&zt<=Ae&&Ne.push(at.id)}return{strokeIds:Xe,noteIds:Ne}},[s]),re=y.useCallback((w,j,X)=>{const Q=w.getBoundingClientRect(),h=Q.left+j.x/Ke*Q.width,A=Q.top+j.y/Ke*Q.height,$=[];let J=!1;for(const Xe of s.strokes){let Ne=[],rt=!1;const wt=()=>{Ne.length>=2&&$.push({...Xe,id:uo(),pts:Ne}),Ne=[]};for(const at of Xe.pts){const tn=Q.left+at.x/Ke*Q.width,zt=Q.top+at.y/Ke*Q.height;Math.hypot(tn-h,zt-A)<=X?(rt=!0,wt()):Ne.push(at)}wt(),rt&&(J=!0)}const pe=[],W=120/Ke*Q.width,Ae=30/Ke*Q.height;for(const Xe of s.notes){const Ne=Q.left+Xe.x/Ke*Q.width,rt=Q.top+Xe.y/Ke*Q.height,wt=Math.max(Ne,Math.min(h,Ne+W)),at=Math.max(rt,Math.min(A,rt+Ae));Math.hypot(h-wt,A-at)<=X&&pe.push(Xe.id)}return pe.length&&(J=!0),{strokes:$,noteIds:pe,changed:J}},[s]),T=y.useCallback(w=>{const X=w.currentTarget.getBoundingClientRect();return{x:(w.clientX-X.left)/Math.max(1,X.width)*Ke,y:(w.clientY-X.top)/Math.max(1,X.height)*Ke}},[]),ie=w=>{if(w.button!==0&&w.pointerType==="mouse")return;const j=T(w);if(f==="eraser"){B.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}ne(w);const Q=re(w.currentTarget,j,v);Q.changed&&k(Q.strokes,Q.noteIds);return}if(f==="box"){B.current=!0,ce.current=j,be({x:j.x,y:j.y,w:0,h:0}),ne(w);try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}return}if(f==="text"||f==="h1"||f==="link"){const Q=f==="text"?"text":f==="h1"?"h1":"link";let h,A=Q==="h1"?"批注标题":Q==="text"?"批注内容":"链接文字";if(Q==="link"){const $=window.prompt("请输入链接地址","https://");if(!$)return;h=$,A=h}U({id:uo(),kind:Q,x:j.x,y:j.y,text:A,href:h});return}if(!Tp(f))return;B.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}if(f==="curve"){const Q=c;p({id:uo(),tool:"curve",pts:[j],color:Q.color,width:Q.lineWidth,lineStyle:Q.lineStyle});return}if(f==="highlight"||f==="underline"){const Q=w.currentTarget.closest(".pd-sheet");ue.current=Q&&parseFloat(getComputedStyle(Q).fontSize)||15,F.current={tool:f,norm:[j],client:[{x:w.clientX,y:w.clientY}]},P({tool:f,norm:[j]}),B.current=!0;try{w.currentTarget.setPointerCapture(w.pointerId)}catch{}return}const X=d[f];p({id:uo(),tool:f,pts:[j],color:f==="marker"?mo(X.color,.3):f==="highlight"?mo(X.color,.38):X.color,width:X.lineWidth})},ve=w=>{if(f==="eraser"){if(ne(w),!B.current)return;const X=T(w),Q=re(w.currentTarget,X,v);Q.changed&&k(Q.strokes,Q.noteIds);return}if(f==="box"){if(ne(w),!B.current||!ce.current)return;const X=T(w),Q=ce.current;be({x:Math.min(Q.x,X.x),y:Math.min(Q.y,X.y),w:Math.abs(X.x-Q.x),h:Math.abs(X.y-Q.y)});return}if(!B.current)return;const j=T(w);if(F.current){F.current.norm.push(j),F.current.client.push({x:w.clientX,y:w.clientY}),P({tool:F.current.tool,norm:F.current.norm.slice()});return}z(j)},ze=()=>{if(B.current){if(B.current=!1,f==="box"&&ce.current&&ke.current){const w=ke.current,j=fe.current;if(j&&(w.w>4||w.h>4)){const{strokeIds:X,noteIds:Q}=se(j,w);(X.length||Q.length)&&E(X,Q)}ce.current=null,be(null);return}if(F.current){const w=F.current;F.current=null,P(null),w.client.length>=2&&q(w.tool,w.client)}}},m=Tp(f)||f==="eraser"||f==="box"||f==="text"||f==="h1"||f==="link";return r.jsxs(r.Fragment,{children:[s.grid&&r.jsx("div",{className:"pd-grid-bg","aria-hidden":"true"}),r.jsxs("svg",{ref:fe,className:"pd-anno-svg",viewBox:`0 0 ${Ke} ${Ke}`,preserveAspectRatio:"none",style:{pointerEvents:m?"auto":"none"},onPointerDown:ie,onPointerMove:ve,onPointerUp:ze,onPointerLeave:w=>{f==="eraser"&&le(null),ze()},onPointerCancel:ze,children:[s.strokes.map(w=>{if(w.tool==="highlight"){const j=w.pts.map(A=>A.x),X=w.pts.map(A=>A.y),Q=Math.min(...j),h=Math.min(...X);return r.jsx("rect",{x:Q,y:h,width:Math.max(...j)-Q,height:Math.max(...X)-h,rx:"0.5",fill:w.color,style:{pointerEvents:"none"}},w.id)}if(w.tool==="underline"){const j=w.pts.map(Q=>Q.x),X=Math.max(...w.pts.map(Q=>Q.y));return r.jsx("line",{x1:Math.min(...j),y1:X,x2:Math.max(...j),y2:X,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",style:{stroke:w.color,pointerEvents:"none"}},w.id)}return r.jsx("path",{d:sh(w),fill:"none",strokeWidth:w.width??oh[w.tool],strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{stroke:w.color,pointerEvents:"none"}},w.id)}),I&&(()=>{const w=I.tool==="highlight",j=d.highlight.color,X=w?mo(j,.38):j,Q=w?ue.current*1.05:2,h="M "+I.norm.map(A=>`${A.x.toFixed(1)} ${A.y.toFixed(1)}`).join(" L ");return r.jsx("path",{d:h,fill:"none",stroke:X,strokeWidth:Q,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}},"__temp__")})(),xe&&(xe.w>0||xe.h>0)&&r.jsx("rect",{x:xe.x,y:xe.y,width:xe.w,height:xe.h,fill:"rgba(47,107,255,.10)",stroke:"var(--affine-primary-color)",strokeWidth:1.5,strokeDasharray:"6 4",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}})]}),f==="eraser"&&de&&r.jsx("div",{className:"pd-erase-cursor",style:{left:de.x,top:de.y,width:v*2,height:v*2}}),s.notes.map(w=>r.jsx(uh,{note:w,onChange:j=>R(w.id,j)},w.id))]})},uh=({note:s,onChange:f})=>{const d=y.useRef(null);y.useEffect(()=>{d.current&&document.activeElement!==d.current&&(d.current.textContent=s.text)},[s.text]);const c=s.kind==="h1"?"pd-note pd-note-h1":s.kind==="link"?"pd-note pd-note-link":"pd-note";return r.jsx("div",{className:c,style:{left:`${s.x/Ke*100}%`,top:`${s.y/Ke*100}%`,transform:"translate(-6px, -8px) rotate(-1.5deg)"},contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,ref:d,onBlur:()=>{var p;f({text:((p=d.current)==null?void 0:p.textContent)??""})},onKeyDown:p=>{p.stopPropagation(),p.key==="Escape"&&p.target.blur()},onPointerDown:p=>{p.stopPropagation()}})},qc=({widths:s,value:f,onPick:d})=>{const c=s.length,p=Math.max(1,s.filter(k=>k<=f).length),z=100/c,q={left:`${z/2}%`,right:`${z/2}%`},E={left:`${z/2}%`,width:`${(p-1)*z}%`};return r.jsxs("div",{className:"pd-pm-widths",role:"slider","aria-valuenow":f,children:[r.jsx("span",{className:"pd-pm-line",style:q,"aria-hidden":"true"}),r.jsx("span",{className:"pd-pm-line-fill",style:E,"aria-hidden":"true"}),s.map((k,v)=>{const U=4+v*2;return r.jsx("button",{type:"button",className:`pd-pm-cell${k<=f?" sel":""}`,onClick:()=>d(k),"aria-label":`线宽 ${k}`,children:r.jsx("span",{className:"pd-pm-dot",style:{width:U,height:U}})},k)})]})},dh=({pen:s,penProps:f,onPen:d,onSetting:c})=>{const p=s==="pencil"?Fp:rh,z=f[s];return r.jsxs("div",{className:"pd-pen-menu",onPointerDown:q=>q.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-pm-pen${s==="pencil"?" is-on":""}`,onClick:()=>d("pencil"),title:"画笔","aria-label":"画笔","aria-pressed":s==="pencil",children:r.jsx(Gi,{svg:Jp,cls:"pd-tb-illus",color:s==="pencil"?f.pencil.color:"var(--affine-primary-color)"})}),r.jsx("button",{type:"button",className:`pd-pm-pen${s==="marker"?" is-on":""}`,onClick:()=>d("marker"),title:"荧光笔","aria-label":"荧光笔","aria-pressed":s==="marker",children:r.jsx(Gi,{svg:Wp,cls:"pd-tb-illus",color:s==="marker"?f.marker.color:"var(--affine-primary-color)"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(qc,{widths:p,value:z.lineWidth,onPick:q=>c(s,{lineWidth:q})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Oc.map(q=>r.jsx("button",{type:"button",className:`pd-pm-cdot${z.color.toLowerCase()===q.value.toLowerCase()?" sel":""}`,style:{background:q.value,...q.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>c(s,{color:q.value}),"aria-label":q.key,title:q.key},q.key))})]})},fh=[{key:"curve",title:"曲线",Icon:I2},{key:"orthogonal",title:"直角",Icon:P2},{key:"straight",title:"直线",Icon:eh}],ph=({shapeProps:s,onSetting:f})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[fh.map(({key:d,title:c,Icon:p})=>r.jsx("button",{type:"button",className:`pd-pm-shape${s.lineStyle===d?" is-on":""}`,onClick:()=>f({lineStyle:d}),title:c,"aria-label":c,"aria-pressed":s.lineStyle===d,children:r.jsx(p,{})},d)),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(qc,{widths:Fp,value:s.lineWidth,onPick:d=>f({lineWidth:d})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Oc.map(d=>r.jsx("button",{type:"button",className:`pd-pm-cdot${s.color.toLowerCase()===d.value.toLowerCase()?" sel":""}`,style:{background:d.value,...d.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>f({color:d.value}),"aria-label":d.key,title:d.key},d.key))})]}),hh=()=>r.jsxs("span",{className:"pd-tb-note-stack","aria-hidden":"true",children:[r.jsx("span",{className:"pd-ns-paper pd-ns-p1",children:r.jsx(nh,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p2",children:r.jsx(th,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p3",children:r.jsx(lh,{})})]}),ja=({icon:s,active:f,onClick:d,title:c})=>r.jsx("button",{type:"button",className:`pd-tb-btn${f?" is-active":""}`,onClick:d,title:c,"aria-label":c,"aria-pressed":f,children:s}),mh=({mode:s})=>{const f={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round"};return s==="word"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("text",{x:"12",y:"16.5",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"currentColor",stroke:"none",fontFamily:"serif",children:"A"}),r.jsx("path",{d:"M5 20.5h14",...f})]}):s==="sentence"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("path",{d:"M4 8h16M4 13h9",...f}),r.jsx("circle",{cx:"16.2",cy:"13",r:"1.4",fill:"currentColor"})]}):s==="paragraph"?r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:r.jsx("path",{d:"M4 6.5h16M4 11.5h16M4 16.5h9",...f})}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"2",...f}),r.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5",...f})]})},gh=[{key:"word",title:"单词翻译"},{key:"sentence",title:"句子翻译"},{key:"paragraph",title:"整段翻译"},{key:"full",title:"全文翻译"}],xh=({mode:s,onMode:f})=>r.jsx("div",{className:"pd-pen-menu",onPointerDown:d=>d.stopPropagation(),children:gh.map(d=>r.jsxs("button",{type:"button",className:`pd-trans-btn${s===d.key?" is-on":""}`,onClick:()=>f(d.key),title:d.title,"aria-label":d.title,"aria-pressed":s===d.key,children:[r.jsx(mh,{mode:d.key}),r.jsx("span",{children:d.title})]},d.key))}),Lc=({mode:s,color:f})=>s==="highlight"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("rect",{x:"4.2",y:"4.6",width:"12.5",height:"7.2",rx:"2",transform:"rotate(-9 10.5 8)",fill:"currentColor"}),r.jsx("path",{d:"M4 17.2h16M4 20.4h10",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M7 3.5v7.5a5 5 0 0 0 10 0V3.5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),r.jsx("path",{d:"M4.5 20.5h15",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),yh=({mode:s,color:f,onMode:d,onColor:c})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-hl-btn${s==="highlight"?" is-on":""}`,onClick:()=>d("highlight"),title:"高亮","aria-label":"高亮","aria-pressed":s==="highlight",children:r.jsx(Lc,{mode:"highlight",color:s==="highlight"?f:"currentColor"})}),r.jsx("button",{type:"button",className:`pd-hl-btn${s==="underline"?" is-on":""}`,onClick:()=>d("underline"),title:"下划线","aria-label":"下划线","aria-pressed":s==="underline",children:r.jsx(Lc,{mode:"underline",color:s==="underline"?f:"currentColor"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx("div",{className:"pd-pm-colors",children:Oc.filter(p=>p.key!=="White"&&p.key!=="Black").map(p=>r.jsx("button",{type:"button",className:`pd-pm-cdot${f.toLowerCase()===p.value.toLowerCase()?" sel":""}`,style:{background:p.value},onClick:()=>c(p.value),"aria-label":p.key,title:p.key},p.key))})]}),bh=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 7L4 12l5 5"}),r.jsx("path",{d:"M4 12h11a5 5 0 0 1 0 10h-1"})]}),vh=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12V5.2a1.4 1.4 0 0 1 2.8 0V11"}),r.jsx("path",{d:"M10.8 10.6V4.4a1.4 1.4 0 0 1 2.8 0v6.2"}),r.jsx("path",{d:"M13.6 10.8V5.6a1.4 1.4 0 0 1 2.8 0V12"}),r.jsx("path",{d:"M16.4 11.2a1.4 1.4 0 0 1 2.8.3v2.9A7.2 7.2 0 0 1 12 21.4c-2.6 0-4.3-.9-5.6-3L4.5 15c-.7-1.1-.4-2.3.6-2.9.9-.5 2-.3 2.6.5l.9 1.2"})]}),wh=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"4",y:"4.5",width:"16",height:"15",rx:"2",strokeDasharray:"3.2 2.6"}),r.jsx("path",{d:"M9.5 9.5l5 5M14.5 9.5l-5 5"})]}),Sh=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2.5",y:"4.5",width:"8.5",height:"15",rx:"1.2"}),r.jsx("rect",{x:"13",y:"4.5",width:"8.5",height:"15",rx:"1.2"})]}),kh=({paper:s})=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:s?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3.5h8.5L19 8v12.5H6z"}),r.jsx("path",{d:"M14 3.5V8h5"}),r.jsx("path",{d:"M9 12h7M9 15h7M9 18h4.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"5",cy:"7",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"12",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"17",r:"1.1"}),r.jsx("path",{d:"M9 7h10M9 12h10M9 17h10"})]})}),jh=({tool:s,onTool:f,penProps:d,onPenSetting:c,shapeProps:p,onShapeSetting:z,zoom:q,onZoom:E,onUndo:k,canUndo:v,eraserSize:U,onEraserSize:R,spread:B,onToggleSpread:F,examMode:I,onToggleExamMode:P})=>{const[ue]=y.useState(!1),[de,le]=y.useState(!1),[xe,ye]=y.useState(!1),[ke,ce]=y.useState(!1),[fe,be]=y.useState(!1),[ne,se]=y.useState(()=>localStorage.getItem("cet:hl:mode")==="underline"?"underline":"highlight"),[re,T]=y.useState(!1),[ie,ve]=y.useState(!1),[ze,m]=y.useState(()=>{const W=localStorage.getItem("cet:trans:mode");return W==="sentence"||W==="paragraph"||W==="full"?W:"word"}),[w,j]=y.useState(!1),X=W=>{f(W),ce(W==="pencil"||W==="marker"),be(W==="curve"),ye(W==="eraser"),W!=="highlight"&&W!=="underline"&&T(!1),W!=="select"&&j(!1)},Q=W=>{m(W);try{localStorage.setItem("cet:trans:mode",W)}catch{}},h=()=>{s==="highlight"||s==="underline"?T(W=>!W):(f(ne),T(!0))},A=W=>{se(W);try{localStorage.setItem("cet:hl:mode",W)}catch{}f(W)},$=W=>{s===W?ce(Ae=>!Ae):X(W)},J=()=>{s==="curve"?be(W=>!W):X("curve")},pe=()=>{s==="eraser"?ye(W=>!W):(f("eraser"),ye(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pd-float-bar","data-collapsed":ue?"true":"false","data-hidden":de?"true":"false",children:[ke&&!ue&&(s==="pencil"||s==="marker")&&r.jsx(dh,{pen:s==="pencil"?"pencil":"marker",penProps:d,onPen:W=>f(W),onSetting:c}),fe&&!ue&&s==="curve"&&r.jsx(ph,{shapeProps:p,onSetting:z}),w&&!ue&&s==="select"&&r.jsx(xh,{mode:ze,onMode:Q}),re&&!ue&&(s==="highlight"||s==="underline")&&r.jsx(yh,{mode:ne,color:d.highlight.color,onMode:A,onColor:W=>c("highlight",{color:W})}),ie&&!ue&&r.jsxs("div",{className:"pd-zoom-menu",onPointerDown:W=>W.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>E(q-.1),title:"缩小",children:"−"}),r.jsxs("span",{className:"pd-zoom-val",children:[Math.round(q*100),"%"]}),r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>E(q+.1),title:"放大",children:"＋"}),r.jsx("button",{type:"button",className:"pd-zoom-btn pd-zoom-reset",onClick:()=>E(1),title:"重置为 100%",children:"重置"}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(B?" is-on":""),onClick:F,title:B?"切换为单页浏览":"双页浏览：左右并排显示试卷","aria-pressed":B,children:[r.jsx(Sh,{}),r.jsx("span",{children:"双页"})]}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(I==="paper"?" is-on":""),onClick:P,title:I==="paper"?"当前为模拟真实试卷预览（A4 连续密排、纯净只读），点击切换回按题预览":"当前为按题预览（每种题型一张纸、纸高随内容、可作答），点击切换为模拟真实试卷","aria-pressed":I==="paper",children:[r.jsx(kh,{paper:I==="paper"}),r.jsx("span",{children:I==="paper"?"试卷":"按题"})]})]}),xe&&!ue&&s==="eraser"&&r.jsxs("div",{className:"pd-pen-menu pd-erase-menu",onPointerDown:W=>W.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-erase-delbtn",onClick:()=>{ye(!1),f("box")},title:"框选删除：拖拽矩形批量清除笔迹与批注","aria-label":"框选删除",children:r.jsx(wh,{})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx(qc,{widths:[8,14,22,32],value:U,onPick:R})]}),r.jsx(ja,{icon:r.jsx(bh,{}),active:!1,onClick:k,title:"回缩上一笔 (Ctrl+Z)"}),r.jsxs("div",{className:"pd-tb-group",children:[r.jsx(ja,{icon:r.jsx(vh,{}),active:ie,onClick:()=>ve(W=>!W),title:"缩放试卷（双指捏合 / Ctrl+滚轮）"}),r.jsx(ja,{icon:r.jsx(Lc,{mode:ne,color:d.highlight.color}),active:s==="highlight"||s==="underline",onClick:h,title:"高亮 / 下划线"}),r.jsx(ja,{icon:r.jsx(ah,{}),active:s==="curve",onClick:J,title:"形状 / 连接线 (C)"})]}),!ue&&r.jsxs("div",{className:"pd-tb-group pd-tb-senior",children:[r.jsx(ja,{icon:r.jsx(hh,{}),active:s==="text",onClick:()=>X("text"),title:"批注便签 (T)"}),r.jsx(ja,{icon:r.jsx(Gi,{svg:Jp,cls:"pd-tb-illus",color:s==="pencil"?d.pencil.color:"var(--affine-primary-color)"}),active:s==="pencil",onClick:()=>$("pencil"),title:"铅笔 (P)"}),r.jsx(ja,{icon:r.jsx(Gi,{svg:Wp,cls:"pd-tb-illus",color:s==="marker"?d.marker.color:"var(--affine-primary-color)"}),active:s==="marker",onClick:()=>$("marker"),title:"马克笔 (M)"}),r.jsx(ja,{icon:r.jsx(Gi,{svg:ih,cls:"pd-tb-illus pd-tb-illus-erase"}),active:s==="eraser",onClick:pe,title:"橡皮擦 (E)：点击调整擦除大小与删除"})]}),!ue&&r.jsx("button",{type:"button",className:"pd-tb-arrow pd-tb-arrow-next",onClick:()=>le(!0),title:"隐藏工具栏","aria-label":"隐藏工具栏",children:r.jsx(Mp,{})})]}),de&&r.jsx("button",{type:"button",className:"pd-bar-show",onClick:()=>le(!1),title:"显示工具栏","aria-label":"显示工具栏",children:r.jsx(Mp,{})})]})},Ch=s=>{const f=`cet:anno:${s}`,[d,c]=y.useState(co),[p,z]=y.useState("select"),q=y.useRef(!1);y.useEffect(()=>{var ne,se,re;try{const T=localStorage.getItem(f);if(T){const ie=JSON.parse(T),ve=(ne=ie.penProps)==null?void 0:ne.marker;c({strokes:ie.strokes??[],notes:ie.notes??[],grid:ie.grid??!1,penProps:{highlight:{...Fa.highlight,...((se=ie.penProps)==null?void 0:se.highlight)??{}},pencil:{...Fa.pencil,...((re=ie.penProps)==null?void 0:re.pencil)??{}},marker:{...Fa.marker,...ve??{},...(ve==null?void 0:ve.color)==="#fb7081"?{color:Fa.marker.color}:{}}},shapeProps:{...go,...ie.shapeProps??{}},eraserSize:ie.eraserSize??Tc})}else c(co)}catch{c(co)}q.current=!0},[f]),y.useEffect(()=>{if(!q.current)return;const ne=setTimeout(()=>{try{localStorage.setItem(f,JSON.stringify(d))}catch{}},400);return()=>clearTimeout(ne)},[d,f]);const E=y.useRef(null),k=y.useCallback(ne=>{E.current=ne.id,c(se=>({...se,strokes:[...se.strokes,ne]}))},[]),v=y.useCallback(ne=>{const se=E.current;!se||!ne||c(re=>({...re,strokes:re.strokes.map(T=>T.id===se?{...T,pts:[...T.pts,ne]}:T)}))},[]),U=y.useCallback(ne=>{c(se=>({...se,notes:[ne]}))},[]),R=y.useCallback((ne,se)=>{c(re=>({...re,notes:re.notes.map(T=>T.id===ne?{...T,...se}:T)}))},[]),B=y.useCallback((ne,se)=>{c(re=>{const T=new Set(ne),ie=new Set(se);return{...re,strokes:T.size?re.strokes.filter(ve=>!T.has(ve.id)):re.strokes,notes:ie.size?re.notes.filter(ve=>!ie.has(ve.id)):re.notes}})},[]),F=y.useCallback((ne,se)=>{c(re=>{const T=new Set(se);return{...re,strokes:ne,notes:T.size?re.notes.filter(ie=>!T.has(ie.id)):re.notes}})},[]),I=y.useCallback(ne=>{c(se=>({...se,strokes:se.strokes.map(re=>({...re,pts:re.pts.map(ne)})),notes:se.notes.map(re=>{const T=ne({x:re.x,y:re.y});return{...re,x:T.x,y:T.y}})}))},[]),P=y.useRef(d);P.current=d;const ue=y.useCallback(ne=>{const se=[],re=T=>{const ie=ne(T);se.push({...ie,orig:T})};return P.current.strokes.forEach(T=>T.pts.forEach(re)),P.current.notes.forEach(T=>re({x:T.x,y:T.y})),se},[]),de=y.useCallback((ne,se)=>{if(!ne.length)return;const re={el:null,dx:0,dy:0,orig:{x:0,y:0}};c(T=>{let ie=0;const ve=()=>ne[ie++]??re;return{...T,strokes:T.strokes.map(ze=>({...ze,pts:ze.pts.map(()=>se(ve()))})),notes:T.notes.map(ze=>{const m=se(ve());return{...ze,x:m.x,y:m.y}})}})},[]),le=y.useCallback(ne=>{c(se=>({...se,eraserSize:Math.max(4,Math.min(60,Math.round(ne)))}))},[]),xe=y.useCallback(ne=>{c(se=>({...se,grid:ne}))},[]),ye=y.useCallback((ne,se)=>{c(re=>{const T=re.penProps??Fa;return{...re,penProps:{...T,[ne]:{...T[ne],...se}}}})},[]),ke=y.useCallback(ne=>{c(se=>({...se,shapeProps:{...se.shapeProps??go,...ne}}))},[]),ce=y.useCallback(()=>{c(ne=>ne.notes.length?{...ne,notes:ne.notes.slice(0,-1)}:ne.strokes.length?{...ne,strokes:ne.strokes.slice(0,-1)}:ne)},[]),fe=y.useCallback(()=>c(co),[]),be=y.useMemo(()=>({v:"select",g:"select",c:"curve",k:"link",p:"pencil",t:"text",h:"h1",m:"marker",e:"eraser"}),[]);return y.useEffect(()=>{const ne=se=>{const re=se.target;if(re&&(re.isContentEditable||/input|textarea/i.test(re.tagName)))return;if((se.ctrlKey||se.metaKey)&&se.key.toLowerCase()==="z"){se.preventDefault(),ce();return}if(se.ctrlKey||se.metaKey||se.altKey)return;const T=be[se.key.toLowerCase()];if(T){if(T==="select"&&se.key.toLowerCase()==="g"){c(ie=>({...ie,grid:!ie.grid}));return}z(T)}};return window.addEventListener("keydown",ne),()=>window.removeEventListener("keydown",ne)},[be,ce]),{ann:d,tool:p,setTool:z,addStroke:k,appendPoint:v,addNote:U,updateNote:R,eraseIds:B,eraseLocal:F,mapAnnotations:I,captureAnchors:ue,applyAnchors:de,eraserSize:d.eraserSize??Tc,setEraserSize:le,setGrid:xe,setPenSetting:ye,setShapeSetting:ke,undo:ce,clear:fe,penProps:d.penProps??Fa,shapeProps:d.shapeProps??go,canUndo:d.strokes.length>0||d.notes.length>0}},Lp=s=>{let d=(s.closest(".qblock")||s).previousElementSibling;for(;d;){const c=(d.textContent||"").trim();if(/^Questions\s+\d+/i.test(c))return c;d=d.previousElementSibling}return""},Ah=(s,f)=>{var c;document.querySelectorAll(".pd-horn-tip").forEach(p=>p.remove());const d=document.createElement("span");d.className="pd-horn-tip",d.textContent=f,(c=s.parentElement)==null||c.appendChild(d),window.setTimeout(()=>d.remove(),1600)},fo=s=>{const f=Array.from(s.querySelectorAll("h2, h3, .question, .blank, .pd-blank")).sort((q,E)=>q.compareDocumentPosition(E)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);let d="";const c={},p=[],z=[];for(const q of f){if(q.tagName==="H2"||q.tagName==="H3"){const E=(q.textContent||"").trim();/Banked|选词/i.test(E)?d="banked":/Matching|长篇/i.test(E)?d="matching":/Part II|Listening|听力|Conversations|Passages|Lectures/i.test(E)?d="listening":/Careful|Reading Comprehension|阅读理解/i.test(E)?d="careful":/Translation|翻译/i.test(E)?d="translation":/Writing|写作/i.test(E)&&(d="writing");continue}if(q.classList.contains("question")){if(d!=="listening"&&d!=="matching"&&d!=="careful")continue;c[d]=(c[d]||0)+1;const E=d==="listening"?25:10;if(c[d]>E)continue;const v=(d==="listening"?1:d==="matching"?36:46)+c[d]-1,U=q.querySelector(".option")?"choice":"match";p.push({el:q,no:v,zone:d,kind:U});continue}if(d==="banked"){const E=Number(q.getAttribute("data-blank")||0)||26+z.length;z.push(E)}}return{list:p,blankNos:z}},Ec=(s,f,d)=>{const c=[];for(Array.from(s.querySelectorAll(":scope > .pd-page")).forEach(P=>{const ue=P.querySelector(":scope > .pd-page-body");if(ue)for(;ue.firstChild;)c.push(ue.removeChild(ue.firstChild));P.remove()});s.firstChild;)c.push(s.removeChild(s.firstChild));let p=c.find(P=>P instanceof HTMLElement&&P.classList.contains("pd-head"));if(!p){p=document.createElement("header"),p.className="pd-head";const P=document.createElement("div");P.className="pd-head-name",P.textContent=f,p.appendChild(P)}const z=[p,...c.filter(P=>P!==p)],q=P=>{const ue=document.createElement("div");return ue.className="pd-page-foot",ue.innerHTML=`<span>${P}</span>`,ue};let E=null;const k=()=>{const P=document.createElement("div");return P.className="pd-page",E=document.createElement("div"),E.className="pd-page-body",P.appendChild(E),s.appendChild(P),P},v=[];let U=k();v.push(U);const R=P=>{E.appendChild(P)},B="h2.pd-part, h3.pd-break-sec",F=P=>P instanceof HTMLElement&&(P.matches(B)||!!P.querySelector(B));if(d==="question"){const P=()=>Array.from(E.children).every(de=>de.matches(B));let ue=!1;for(const de of z)F(de)&&(ue&&!(P()&&E.children.length>0)&&(U=k(),v.push(U)),ue=!0),R(de)}else{const P=de=>{const le=[];for(;de.firstChild;){const xe=de.firstChild;de.removeChild(xe),le.push(xe)}return le};let ue=0;for(;z.length&&ue++<2e4;){const de=z.shift();if(R(de),!(de instanceof HTMLElement)||E.scrollHeight<=E.clientHeight+4)continue;if(Array.from(de.children).length>1&&!/^(TABLE|UL|OL|PRE|BLOCKQUOTE)$/.test(de.tagName)&&!de.classList.contains("question")&&!de.classList.contains("word-bank")&&!de.classList.contains("options")&&!de.classList.contains("pd-head")){const ye=P(de);de.remove(),z.unshift(...ye);continue}U=k(),v.push(U),R(de)}}const I=v.filter(P=>{var ue;return(((ue=P.querySelector(".pd-page-body"))==null?void 0:ue.childNodes.length)??0)>0});v.forEach(P=>{I.includes(P)||P.remove()}),I.forEach((P,ue)=>P.appendChild(q(ue+1)))},Nh=(s,f)=>{var R;const d=document,c=(R=d.caretRangeFromPoint)==null?void 0:R.call(d,s,f),p=c==null?void 0:c.startContainer,z=(p==null?void 0:p.textContent)||"",q=(c==null?void 0:c.startOffset)??0,E=B=>/[A-Za-z'-]/.test(B);let k=q;for(;k>0&&k<=z.length&&E(z[k-1]);)k--;let v=q;for(;v<z.length&&E(z[v]);)v++;const U={text:z.slice(k,v),range:null};if(p&&p.nodeType===3&&v>k){const B=document.createRange();B.setStart(p,k),B.setEnd(p,v),U.range=B}return U},zh=(s,f)=>{var U;const d=document,c=(U=d.caretRangeFromPoint)==null?void 0:U.call(d,s,f),p=c==null?void 0:c.startContainer,z=(p==null?void 0:p.textContent)||"",q=(c==null?void 0:c.startOffset)??0;let E=q;for(;E>0&&!/[.!?]\s["')\]]/.test(z.slice(Math.max(0,E-2),E));)E--;let k=q;for(;k<z.length&&!/[.!?]/.test(z[k]);)k++;for(k=Math.min(z.length,k+1);E<k&&/\s/.test(z[E]);)E++;for(;k>E&&/\s/.test(z[k-1]);)k--;const v={text:z.slice(E,k).trim(),range:null};if(p&&p.nodeType===3&&k>E){const R=document.createRange();R.setStart(p,E),R.setEnd(p,k),v.range=R}return v},po=(s,f)=>{const d=s.querySelector(".pd-qnum");if(!d)return;const c=d.parentElement;if(!c)return;let p=c.querySelector(".pd-ans-letter");f?(p||(p=document.createElement("span"),p.className="pd-ans-letter",c.insertBefore(p,d)),p.textContent=f):p&&p.remove()},Dp=new Map,Rp=async s=>{var q;const f=s.toLowerCase(),d=Dp.get(f);if(d)return d;const p=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(s)}&langpair=en|zh-CN`)).json(),z=String(((q=p==null?void 0:p.responseData)==null?void 0:q.translatedText)||"");return z&&!/MYMEMORY WARNING/i.test(z)&&Dp.set(f,z),z||"翻译服务暂不可用"},Eh=async s=>{if(s.length<=450)return Rp(s);const f=[];let d="";for(const p of s.split(new RegExp("(?<=[.!?。！？]\\s)")))(d+p).length>420&&d?(f.push(d),d=p):d+=p;d&&f.push(d);const c=[];for(const p of f.slice(0,40))try{c.push(await Rp(p))}catch{c.push("")}return c.join(" ")},Op=({x:s,y:f,children:d})=>{const c=y.useRef(null);return y.useLayoutEffect(()=>{const p=c.current;if(!p)return;const z=()=>{const F=p.offsetHeight,I=p.offsetWidth/2+8,P=Math.min(Math.max(s,I),window.innerWidth-I);p.style.left=`${P}px`,p.style.top=`${f}px`,f-F-14>=8?(p.style.transform="translate(-50%, calc(-100% - 14px))",p.style.maxHeight=`${window.innerHeight-40}px`):(p.style.transform="translate(-50%, 14px)",p.style.maxHeight=`${Math.max(240,window.innerHeight-f-30)}px`)},q=performance.now();let E=0,k=0,v="",U=!1;const R=()=>{U||(U=!0,p.dataset.ready="true")},B=()=>{z();const F=`${p.offsetHeight}|${p.offsetWidth}|${p.style.transform}`;k=F===v?k+1:0,v=F,!U&&(k>=2||performance.now()-q>800)&&R(),k<10&&performance.now()-q<3e3&&(E=requestAnimationFrame(B))};return B(),()=>cancelAnimationFrame(E)},[s,f]),r.jsx("div",{ref:c,className:"pd-picker",children:d})},qp=s=>s?Array.from(s.querySelectorAll(".word-bank li, .word-bank span, ul li")).map(f=>{var d,c,p;return((c=(d=f.parentElement)==null?void 0:d.textContent)==null?void 0:c.trim())||((p=f.textContent)==null?void 0:p.trim())||""}).filter(f=>/^[A-O][\.、]/.test(f)).flatMap(f=>f.match(/[A-O][\.、]\s*[a-z]+/g)||[]).filter((f,d,c)=>c.indexOf(f)===d):[],_h=[{name:"听力",start:1,count:25},{name:"选词填空",start:26,count:10},{name:"长篇阅读",start:36,count:10},{name:"阅读理解",start:46,count:10},{name:"翻译（汉译英）",start:56,count:1},{name:"写作",start:57,count:1}];function Mh(s,f){if(s.pdf&&typeof s.pdf=="string")return s.pdf;const d=s.id||"";if(f==="cet4"){const c=d.match(/^cet4-(20\d{2})-(\d{2})-set(\d)$/i);if(c)return`./assets/papers/cet4/${c[1]}-${c[2]}-S${c[3]}.pdf`}else{const c=d.match(/^cet6-(20\d{2})-(\d{1,2})-set(\d)$/i);if(c)return`./assets/cet6-pdf/CET-6 ${c[1]}.${c[2].padStart(2,"0")} 第${c[3]}套.pdf`}return null}const Th=({paper:s,type:f,onBack:d})=>{const[c,p]=y.useState(null),[z,q]=y.useState(!0),[E,k]=y.useState(null),[v,U]=y.useState(!0);y.useEffect(()=>{let x=!1;p(null),q(!0),k(null),U(!0);const L="./",ee=String(s.id).replace(/[^\w.-]/g,"_");return fetch(`${L}contents/${ee}.json`).then(ae=>ae.ok?ae.json():null).then(ae=>{x||(p(ae??null),q(!1))}).catch(()=>{x||(p(null),q(!1))}),fetch(`${L}listening/${ee}.json`).then(ae=>ae.ok?ae.json():null).then(ae=>{x||(k(ae??null),U(!1))}).catch(()=>{x||(k(null),U(!1))}),()=>{x=!0}},[s.id]);const R=y.useMemo(()=>{var ae,K;if(c)return c;if(z)return null;const x=s.keyPoints,L=s.year??new Date().getFullYear(),ee=Number(s.month??"06");return{title:s.title,date:`${L}年${ee}月`,type:f==="cet4"?"四级真题":"六级真题",html:F2({title:s.title,type:f==="cet4"?"四级":"六级",writing:(ae=x==null?void 0:x.writing)==null?void 0:ae[0],translation:(K=x==null?void 0:x.translation)==null?void 0:K[0],readingFocus:x==null?void 0:x.reading,paperId:s.id})}},[c,z,s,f]),[B,F]=y.useState(0),[I,P]=y.useState(!1),[ue,de]=y.useState(null),le=y.useRef(null),xe=y.useRef(void 0),[ye,ke]=y.useState(()=>{try{return localStorage.getItem("cet:exam-mode")==="paper"?"paper":"question"}catch{return"question"}}),ce=y.useRef(ye);ce.current=ye;const fe=y.useCallback(()=>{ke(x=>{const L=x==="paper"?"question":"paper";try{localStorage.setItem("cet:exam-mode",L)}catch{}return L})},[]),be=y.useRef(null),[ne,se]=y.useState(()=>{const x=parseFloat(localStorage.getItem("cet:zoom")||"1");return Number.isFinite(x)?Math.min(3,Math.max(.5,x)):1}),re=y.useRef(ne),T=y.useCallback(x=>{const L=Math.min(3,Math.max(.5,Math.round(x*100)/100));re.current=L,se(L);try{localStorage.setItem("cet:zoom",String(L))}catch{}},[]),[ie,ve]=y.useState(!1),ze=y.useCallback(()=>{const x=be.current;if(!x)return null;const L=x.getBoundingClientRect();return!L.width||!L.height?null:Array.from(x.querySelectorAll(".exam-content-root > .pd-page")).map(ee=>{const ae=ee.getBoundingClientRect();return{x:(ae.left-L.left)/L.width,y:(ae.top-L.top)/L.height,w:ae.width/L.width,h:ae.height/L.height}})},[]),m=y.useRef(null),w=y.useCallback(x=>{m.current=ze(),ve(x);try{localStorage.setItem("cet:spread",x?"1":"0")}catch{}},[ze]),j=y.useCallback(()=>w(!ie),[w,ie]);y.useEffect(()=>{const x=new Map;let L=null;const ee=()=>{const[O,Y]=[...x.values()];return Math.hypot(O.x-Y.x,O.y-Y.y)||1},ae=O=>{const Y=be.current;return!!Y&&O.target instanceof Node&&Y.contains(O.target)},K=O=>{O.pointerType==="mouse"||!ae(O)||(x.set(O.pointerId,{x:O.clientX,y:O.clientY}),x.size===2&&(L={startDist:ee(),startZoom:re.current}))},oe=O=>{!x.has(O.pointerId)||!L||(x.set(O.pointerId,{x:O.clientX,y:O.clientY}),x.size===2&&T(L.startZoom*(ee()/L.startDist)))},_=O=>{x.delete(O.pointerId),x.size<2&&(L=null)},H=O=>{!O.ctrlKey||!ae(O)||(O.preventDefault(),T(re.current*Math.exp(-O.deltaY*.002)))};return window.addEventListener("pointerdown",K,!0),window.addEventListener("pointermove",oe,{capture:!0}),window.addEventListener("pointerup",_,!0),window.addEventListener("pointercancel",_,!0),window.addEventListener("wheel",H,{passive:!1,capture:!0}),()=>{window.removeEventListener("pointerdown",K,!0),window.removeEventListener("pointermove",oe,!0),window.removeEventListener("pointerup",_,!0),window.removeEventListener("pointercancel",_,!0),window.removeEventListener("wheel",H,!0)}},[T]);const X=Mh(s,f),Q=s.pdfAnswer||null,h=s.audio||null,[A,$]=y.useState([]),[J,pe]=y.useState(!1),[W,Ae]=y.useState("answer"),[Xe,Ne]=y.useState(0),[rt,wt]=y.useState(null),[at,tn]=y.useState({}),[zt,$n]=y.useState({}),[Qt,Ia]=y.useState({key:!1,mine:!1,cmp:!1}),[Pa,Hl]=y.useState({}),[Ul,el]=y.useState(!0),[Xi,Aa]=y.useState(!1),[Mt,yo]=y.useState({}),[Dt,En]=y.useState(null),[Tt,Na]=y.useState(null),[tl,bn]=y.useState(null),Bl=x=>{const L=[];for(const ee of Array.from(x.getClientRects()))ee.width<1||ee.height<1||L.push({x:ee.left,y:ee.top,w:ee.width,h:ee.height});return L};y.useEffect(()=>{if(!Tt||Tt.result!==null)return;let x=!0;return Eh(Tt.text).then(L=>{x&&Na(ee=>ee&&ee.text===Tt.text?{...ee,result:L}:ee)}).catch(()=>{x&&Na(L=>L&&{...L,result:"翻译服务暂不可用"})}),()=>{x=!1}},[Tt]);const Kn=J?"panel":"popup",St=y.useRef("popup");y.useEffect(()=>{St.current=Kn},[Kn]);const[Rt,bt]=y.useState(null),[Zi,Yl]=y.useState(""),[bo,vn]=y.useState(!1),[Jn,za]=y.useState("up"),[Ot,Wn]=y.useState(!1),[Fn,Vi]=y.useState("up"),[Gl,Ea]=y.useState(0),[In,Xl]=y.useState(!0),[Qi,nl]=y.useState(!1),[nn,al]=y.useState(null),Zl=130;y.useEffect(()=>{if(!Ot)return;const x=window.setInterval(()=>Ea(L=>L+1),1e3);return()=>window.clearInterval(x)},[Ot]);const Vl=x=>{const L=Math.floor(x/60),ee=x%60;return`${String(L).padStart(2,"0")}:${String(ee).padStart(2,"0")}`},$i=Qi?"--:--":Vl(Fn==="up"?Gl:Math.max(0,Zl*60-Gl)),wn=()=>{Ot?Xl(x=>!x):vn(!0)},ut=y.useRef(null),Et=x=>{ut.current={px:x.clientX,py:x.clientY,ox:(nn==null?void 0:nn.x)??0,oy:(nn==null?void 0:nn.y)??0},x.currentTarget.setPointerCapture(x.pointerId)},Pn=x=>{const L=ut.current;L&&al({x:L.ox+x.clientX-L.px,y:L.oy+x.clientY-L.py})},Ql=()=>{ut.current=null},Ki=x=>{try{Yl(localStorage.getItem(x.storeKey)||"")}catch{Yl("")}bt(x)},vo=()=>{if(Rt){try{localStorage.setItem(Rt.storeKey,Zi)}catch{}bt(null)}},{ann:Ji,tool:an,setTool:$l,addStroke:Sn,appendPoint:ea,addNote:_a,updateNote:ta,eraseIds:pt,eraseLocal:Wi,mapAnnotations:Kl,captureAnchors:kn,applyAnchors:_n,eraserSize:Fi,setEraserSize:Ii,undo:Pi,setPenSetting:wo,setShapeSetting:ll,penProps:jn,shapeProps:ln,canUndo:qt}=Ch(s.id);y.useLayoutEffect(()=>{const x=m.current;m.current=null;const L=ze();if(!(x!=null&&x.length)||!(L!=null&&L.length)||x.length!==L.length)return;const ee=(ae,K,oe)=>{let _=-1;for(let Y=0;Y<ae.length;Y++){const te=ae[Y];if(K>=te.x&&K<=te.x+te.w&&oe>=te.y&&oe<=te.y+te.h){_=Y;break}}if(_>=0)return _;let H=0,O=1/0;return ae.forEach((Y,te)=>{const me=Y.x+Y.w/2,De=Y.y+Y.h/2,Re=(me-K)**2+(De-oe)**2;Re<O&&(O=Re,H=te)}),H};Kl(ae=>{const K=ae.x/Ke,oe=ae.y/Ke,_=ee(x,K,oe),H=x[_],O=L[_],Y=H.w?(K-H.x)/H.w:0,te=H.h?(oe-H.y)/H.h:0;return{x:(O.x+Y*O.w)*Ke,y:(O.y+te*O.h)*Ke}})},[ie,ze,Kl]);const Jl=y.useRef(ye),er=y.useRef(s.id);y.useLayoutEffect(()=>{var O;const x=Jl.current!==ye,L=er.current!==s.id;if(Jl.current=ye,er.current=s.id,!x||L)return;const ee=le.current;if(!ee||!R)return;const ae=(O=be.current)==null?void 0:O.querySelector(".pd-anno-svg");if(!ae){Ec(ee,R.title,ye);return}const K=Y=>{const te=ae.getBoundingClientRect();return{x:te.left+Y.x/Ke*te.width,y:te.top+Y.y/Ke*te.height}},oe=(Y,te)=>{const me=ae.getBoundingClientRect();return{x:(Y-me.left)/me.width*Ke,y:(te-me.top)/me.height*Ke}},_=".pd-page, .pd-page-body, .pd-page-foot, .pd-anno-svg, .pd-grid-bg",H=kn(Y=>{const te=K(Y);let me=null;for(const Re of document.elementsFromPoint(te.x,te.y))if(Re!==ae&&!(Re instanceof Element&&Re.matches(_))&&ee.contains(Re)){me=Re;break}if(!me){let Re=null,tt=1/0;ee.querySelectorAll("p, h2, h3, .option, .question, .blank, li, strong").forEach(Oe=>{const Le=Oe.getBoundingClientRect(),qe=Math.max(Le.left-te.x,0,te.x-Le.right),Ce=Math.max(Le.top-te.y,0,te.y-Le.bottom),_e=qe*qe+Ce*Ce;_e<tt&&(tt=_e,Re=Oe)}),me=Re}if(!me)return{el:null,dx:0,dy:0};const De=me.getBoundingClientRect();return{el:me,dx:te.x-De.left,dy:te.y-De.top}});Ec(ee,R.title,ye),_n(H,Y=>{if(!Y.el||!Y.el.isConnected)return Y.orig;const te=Y.el.getBoundingClientRect();return oe(te.left+Y.dx,te.top+Y.dy)})},[ye,c,kn,_n]),y.useEffect(()=>{an!=="select"&&bn(null)},[an]);const il=y.useRef("select");y.useEffect(()=>{il.current=an},[an]);const Wl=y.useRef(jn);y.useEffect(()=>{Wl.current=jn},[jn]);const rl=y.useCallback((x,L)=>{var Ze;const ee=le.current;if(!ee||L.length<2)return;const ae=(ee.closest(".pd-sheet")||ee).querySelector(".pd-anno-svg");if(!ae)return;const K=ae.getBoundingClientRect(),oe=K.width||1,_=K.height||1;let H=1/0,O=-1/0,Y=1/0,te=-1/0;for(const Se of L)Se.x<H&&(H=Se.x),Se.x>O&&(O=Se.x),Se.y<Y&&(Y=Se.y),Se.y>te&&(te=Se.y);const me=Wl.current.highlight.color,De=x==="highlight"?mo(me,.38):me,Re=[],tt=document.createTreeWalker(ee,NodeFilter.SHOW_TEXT);let Oe=tt.nextNode();for(;Oe;){if((Oe.textContent||"").trim()){let Ve=Oe.parentElement;for(;Ve&&Ve!==ee&&!Ve.classList.contains("pd-page");)Ve=Ve.parentElement;if(Ve){const rn=parseFloat(getComputedStyle(Oe.parentElement).fontSize)||15,Ht=document.createRange();Ht.selectNodeContents(Oe);for(const Ut of Array.from(Ht.getClientRects()))Ut.width<1||Ut.height<1||Re.push({left:Ut.left,right:Ut.right,top:Ut.top,bottom:Ut.bottom,fs:rn});(Ze=Ht.detach)==null||Ze.call(Ht)}}Oe=tt.nextNode()}const Le=8,qe=[];for(const Se of Re){if(Se.bottom<Y||Se.top>te)continue;const Ve=Math.max(Se.left,H),rn=Math.min(Se.right,O);rn-Ve<Le||qe.push({x0:Ve,x1:rn,top:Se.top,bottom:Se.bottom,fs:Se.fs})}if(!qe.length)return;qe.sort((Se,Ve)=>Se.top-Ve.top||Se.x0-Ve.x0);const Ce=[];for(const Se of qe){const Ve=Ce[Ce.length-1];Ve&&Math.abs(Ve.top-Se.top)<=3&&Math.abs(Ve.bottom-Se.bottom)<=3?(Ve.x0=Math.min(Ve.x0,Se.x0),Ve.x1=Math.max(Ve.x1,Se.x1),Ve.fs=Math.max(Ve.fs,Se.fs)):Ce.push({...Se})}const _e=Ce.map((Se,Ve)=>{let rn,Ht;if(x==="highlight"){const Ut=Math.min(Se.bottom-Se.top,Se.fs*1.05);rn=Se.top+(Se.bottom-Se.top-Ut)/2+Se.fs*.08,Ht=rn+Ut}else rn=Ht=Se.bottom-Se.fs*.12;return{id:`snap-${Date.now()}-${Ve}-${Math.random().toString(36).slice(2,7)}`,tool:x,pts:[{x:(Se.x0-K.left)/oe*1e3,y:(rn-K.top)/_*1e3},{x:(Se.x1-K.left)/oe*1e3,y:(Ht-K.top)/_*1e3}],color:De,width:0}});for(const Se of _e)Sn(Se)},[Sn]),tr=y.useRef(()=>{}),kt=y.useCallback((x,L)=>{const ee=Array.from(x.querySelectorAll(".option")),ae=ee.indexOf(L);if(ae<0)return;ee.forEach(_=>_.classList.remove("selected")),L.classList.add("selected");const K=String.fromCharCode(65+ae);x.setAttribute("data-ans",K),po(x,K);const oe=le.current;if(oe){const _={};oe.querySelectorAll(".question").forEach((H,O)=>{const Y=H.querySelector(".option.selected");Y&&(_[O]=Array.from(H.querySelectorAll(".option")).indexOf(Y))});try{localStorage.setItem(`cet:answer:${s.id}`,JSON.stringify(_))}catch{}}tr.current()},[s.id]),Fl=y.useRef(kt);Fl.current=kt,y.useEffect(()=>{P(!1),de(null),F(0)},[s.id]),y.useEffect(()=>{let x=0;const L=()=>{x=0;const ae=le.current;if(!ae)return;const K=Array.from(ae.querySelectorAll("h2")),oe=K.find(te=>/Part II|Listening/i.test(te.textContent||""));if(!oe){el(!0);return}const _=K.find(te=>/Part III|Reading Comprehension/i.test(te.textContent||"")),H=oe.getBoundingClientRect(),O=_?_.getBoundingClientRect():H,Y=window.innerHeight;el(H.top<Y-40&&O.bottom>40)},ee=()=>{x||(x=requestAnimationFrame(L))};return window.addEventListener("scroll",ee,!0),window.addEventListener("resize",ee),L(),()=>{window.removeEventListener("scroll",ee,!0),window.removeEventListener("resize",ee),x&&cancelAnimationFrame(x)}},[c]),y.useEffect(()=>{const x=le.current;if(!x||!R)return;x.innerHTML=H2(R.html);{const _={};x.querySelectorAll(".question[data-answer]").forEach(H=>{var te;const O=(((te=H.querySelector("strong"))==null?void 0:te.textContent)||"").match(/\d+/),Y=H.getAttribute("data-answer");O&&Y&&(_[Number(O[0])]=Y)}),x.querySelectorAll(".blank[data-answer]").forEach(H=>{const O=Number(H.getAttribute("data-blank")),Y=H.getAttribute("data-answer");O&&Y&&(_[O]=Y)}),Hl(_)}x.querySelectorAll("div").forEach(_=>{const H=_.getAttribute("style")||"";if(H.includes("linear-gradient")||H.includes("backdrop-filter"))if(_.querySelector("h2")){const O=_.cloneNode(!0);O.querySelectorAll("h2").forEach(te=>te.remove());const Y=(O.textContent||"").replace(/•/g,"·").trim();if(Y){const te=document.createElement("p");te.className="pd-structure",te.textContent=Y,_.replaceWith(te)}else _.remove()}else _.remove()}),x.querySelectorAll("h2, h3, h4").forEach(_=>{const H=_.textContent||"",O=H.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").trim();if(O!==H){const Y=_.querySelector("strong");Y&&Y.childNodes.length===1?Y.textContent=O:_.textContent=O}_.removeAttribute("style")}),x.querySelectorAll("p, li, ul, span, section").forEach(_=>{_.removeAttribute("style")}),x.querySelectorAll("i.fas, i.far, i.fab").forEach(_=>_.remove()),x.querySelectorAll(".question").forEach(_=>{var O,Y;if((O=_.parentElement)!=null&&O.classList.contains("qblock"))return;const H=document.createElement("div");H.className="qblock",(Y=_.parentElement)==null||Y.insertBefore(H,_),H.appendChild(_)}),x.querySelectorAll("p").forEach(_=>{const H=_.querySelector("strong");H&&/^Directions[:：]?\s*$/.test((H.textContent||"").trim())&&_.classList.add("pd-dir")});const L=_=>/writing/i.test(_)?[{label:"我的作文",kind:"essay"}]:/listening/i.test(_)?[{label:"播放听力",kind:"listen"}]:/translation/i.test(_)?[{label:"我的翻译",kind:"translation"},{label:"翻译范文",kind:"fanwen"}]:[];x.querySelectorAll("h2").forEach(_=>{const O=(_.textContent||"").trim().match(/^(Part\s+[IVX0-9]+)\s+(.+?)\s*\(([^)]+)\)\s*$/i);if(!O)return;const[,Y,te,me]=O;_.classList.add("pd-part");const De=L(te.trim());_.innerHTML=`<span class="pd-part-no">${Y}</span>`+(De.length?`<span class="pd-part-badges">${De.map(Re=>`<button type="button" class="pd-badge" data-kind="${Re.kind}">${Re.label}</button>`).join("")}</span>`:"")+`<span class="pd-part-name">${te.trim()}</span><span class="pd-part-time">(${me})</span>`});{let _="";x.querySelectorAll("h2, h3").forEach(H=>{const O=(H.textContent||"").trim();if(H.tagName==="H2"){_=O;return}/^\s*Section\s+[A-Z]/i.test(O)&&(H.classList.add("pd-sec"),/reading\s+comprehension/i.test(_)&&H.classList.add("pd-break-sec"))})}x.querySelectorAll("h2").forEach(_=>{if(!/Writing/i.test(_.textContent||""))return;let H=_.nextElementSibling;for(;H&&H.tagName!=="H2";){const O=H.nextElementSibling;if(H.tagName==="DIV"&&/写作提示/.test(H.textContent||""))H.remove();else if(H.tagName==="P"&&/Directions/i.test(H.textContent||"")){const Y=H;let te=Y.innerHTML.replace(/[“"][^”"]*[”"]/g,De=>`<strong>${De}</strong>`).replace(/\b(150|200)\b(?=\s*words)/g,"<u>$1</u>");const me=new RegExp("(?:^|(?<=[.!?]\\s))([^<>]+?[.!?])\\s*$").exec(te);if(me&&me[1].trim().length>10){const De=me[1],Re=me.index+me[0].indexOf(De);te=te.slice(0,Re);const tt=document.createElement("p");tt.className="pd-indent",tt.innerHTML=De,Y.after(tt)}Y.innerHTML=te}H=O}}),x.querySelectorAll("h3").forEach(_=>{/词库|Word Bank/i.test(_.textContent||"")&&_.closest("div")&&_.remove()}),x.querySelectorAll("p").forEach(_=>{const H=_.querySelector("strong");if(!H||_.children.length!==1)return;const O=(_.textContent||"").trim();O===(H.textContent||"").trim()&&(!O||O.length>80||/^Passage\s+(One|Two)$/i.test(O)||/^Questions\b/i.test(O)||/^\d+\.$/.test(O)||/[：:]$/.test(O)||_.classList.add("pd-article-title"))}),x.querySelectorAll(".question").forEach(_=>{const H=_.querySelector("p, h3");if(!H)return;const O=H.querySelector("strong"),Y=((O==null?void 0:O.textContent)||"").match(/^\s*(\d{1,2})\s*[\.、]?\s*$/);O&&Y&&(O.classList.add("pd-qnum"),O.textContent=Y[1])}),x.querySelectorAll(".options").forEach(_=>{Array.from(_.querySelectorAll(".option")).reduce((Y,te)=>Math.max(Y,(te.textContent||"").length),0)>42&&_.classList.add("single")}),Ec(x,(c==null?void 0:c.title)??s.title,ce.current);const ee=localStorage.getItem(`cet:answer:${s.id}`);if(ee)try{const _=JSON.parse(ee);Object.entries(_).forEach(([H,O])=>{const Y=x.querySelectorAll(".question")[Number(H)];if(!Y)return;const te=Y.querySelectorAll(".option");if(te[O]){te[O].classList.add("selected");const me=String.fromCharCode(65+Number(O));Y.setAttribute("data-ans",me),po(Y,me)}})}catch{}const ae=localStorage.getItem(`cet:blank:${s.id}`);if(ae)try{const _=JSON.parse(ae);Object.entries(_).forEach(([H,O])=>{const Y=x.querySelector(`.blank[data-blank="${H}"]`);Y&&(Y.textContent=`${H} ${O}`,Y.classList.add("filled"))})}catch{}const K=()=>$t(),oe=_=>{var me,De,Re,tt,Oe;const H=_.target;if(il.current==="select"&&!H.closest("button, a, .option, .pd-qnum, .blank, .pd-blank, .pd-note, .pd-card, .pd-float-bar, .pd-timer-bar")){const Le=(((me=window.getSelection())==null?void 0:me.toString())||"").trim(),qe=localStorage.getItem("cet:trans:mode")||"word";let Ce="";if(Le.length>1){Ce=Le;const _e=window.getSelection(),Ze=_e&&_e.rangeCount?_e.getRangeAt(0):null,Se=Ze?Bl(Ze):[];bn(Se.length?{kind:"sentence",rects:Se}:null)}else if(qe==="word"){const _e=Nh(_.clientX,_.clientY);Ce=_e.text;const Ze=_e.range?Bl(_e.range):[];bn(Ze.length?{kind:"word",rects:Ze}:null)}else if(qe==="sentence"){const _e=zh(_.clientX,_.clientY);Ce=_e.text;const Ze=_e.range?Bl(_e.range):[];bn(Ze.length?{kind:"sentence",rects:Ze}:null)}else qe==="paragraph"?(Ce=((Re=(De=H.closest("p"))==null?void 0:De.textContent)==null?void 0:Re.trim())||"",bn(null)):(Ce=((tt=x.innerText)==null?void 0:tt.trim())||"",bn(null));Ce&&Ce.length<=12e3?Na({text:Ce,x:_.clientX,y:_.clientY,result:null}):(Na(null),bn(null))}if(H.closest(".pd-badge")){const Le=H.closest(".pd-badge").dataset.kind;Le==="essay"?Ki({kind:"essay",title:"我的作文",placeholder:"开始写作...",storeKey:`cet:essay:${s.id}`}):Le==="translation"?Ki({kind:"translation",title:"我的翻译",placeholder:"开始翻译...",storeKey:`cet:translation:${s.id}`}):window.alert("该功能即将上线");return}const O=H.closest(".pd-qnum");if(O){if(ce.current==="paper")return;const Le=O.closest(".question"),qe=Array.from(x.querySelectorAll(".question")),Ce=Le?qe.indexOf(Le):-1;if(Ce>=0)if(St.current==="panel"){En(null);const{list:_e}=fo(x),Ze=_e.find(Se=>Se.el===Le);Ne(Ze?_e.indexOf(Ze):Ce),Ae("question"),pe(!0)}else{const _e=O.getBoundingClientRect();wt({kind:"question",qi:Ce,x:_e.left+_e.width/2,y:_e.bottom})}return}const Y=H.closest(".blank, .pd-blank");if(Y){if(ce.current==="paper")return;const Le=Y.getBoundingClientRect(),qe=Y.closest(".question"),Ce=Number(Y.getAttribute("data-blank"))||Number(((Oe=qe==null?void 0:qe.querySelector(".pd-qnum"))==null?void 0:Oe.textContent)||0);St.current==="panel"?(En(Ce),Ae("question"),pe(!0)):wt({kind:"blank",blankNo:Ce,x:Le.left+Le.width/2,y:Le.bottom});return}H.closest(".option")};return x.addEventListener("click",oe),K(),()=>{x.removeEventListener("click",oe),xe.current&&clearTimeout(xe.current)}},[c,R]);const Il=y.useRef(!1);y.useEffect(()=>{if(!R||Il.current||(Il.current=!0,localStorage.getItem("cet:spread")!=="1"))return;const x=requestAnimationFrame(()=>w(!0));return()=>cancelAnimationFrame(x)},[c,w]),y.useEffect(()=>{const x=le.current;if(!x||!R)return;const L=(E==null?void 0:E.questionTimes)??{},ee=[],ae=Array.from(x.querySelectorAll("p, strong, h3, h4, div")).filter(oe=>/Questions\s+\d+\s+to\s+\d+[^<]*you have just heard/i.test(oe.textContent||"")),K=ae.filter(oe=>!ae.some(_=>_!==oe&&oe.contains(_)));return K.forEach(oe=>{const _=(oe.textContent||"").match(/Questions\s+(\d+)\s+to\s+\d+/i);if(!_)return;const H=Number(_[1]),O=L[H],Y=document.createElement("button");Y.type="button",Y.className="pd-horn",Y.dataset.no=String(H),Y.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/></svg>',O!=null?(Y.title=`播放第 ${H} 题开始的听力`,Y.addEventListener("click",te=>{te.stopPropagation(),te.preventDefault(),window.dispatchEvent(new CustomEvent("cet:lp2-jump",{detail:{no:H,time:O}}))})):(Y.title=`第 ${H} 题听力（音频待导入）`,Y.addEventListener("click",te=>{te.stopPropagation(),te.preventDefault(),Ah(Y,"音频待导入")})),oe.classList.add("has-horn"),oe.prepend(Y),ee.push(Y)}),()=>{ee.forEach(oe=>oe.remove()),K.forEach(oe=>oe.classList.remove("has-horn"))}},[E,c]);const $t=y.useCallback(()=>{const x=le.current;if(!x)return;const{list:L,blankNos:ee}=fo(x),ae={};let K={},oe={};try{K=JSON.parse(localStorage.getItem(`cet:match:${s.id}`)||"{}")}catch{}try{oe=JSON.parse(localStorage.getItem(`cet:blank:${s.id}`)||"{}")}catch{}L.forEach(({el:H,no:O,kind:Y})=>{if(Y==="choice"){const te=H.querySelector(".option.selected");if(te){const me=Array.from(H.querySelectorAll(".option")).indexOf(te);ae[O]=String.fromCharCode(65+me)}}else{const te=K[String(O)];te&&(ae[O]=te)}}),ee.forEach(H=>{const O=oe[String(H)];O&&(ae[H]=O)});const _=_h.map(H=>{const O=[];for(let Y=H.start;Y<H.start+H.count;Y++)ae[Y]&&O.push(Y);return{name:H.name,start:H.start,count:H.count,done:O}});tn(ae),F(_.reduce((H,O)=>H+O.done.length,0)),$(_)},[s.id]);y.useEffect(()=>{tr.current=$t},[$t]);const Mn=()=>{P(!0);let x=0,L=0;const ee={},ae=le.current;if(ae){let K={},oe={};try{K=JSON.parse(localStorage.getItem(`cet:match:${s.id}`)||"{}")}catch{}try{oe=JSON.parse(localStorage.getItem(`cet:blank:${s.id}`)||"{}")}catch{}ae.querySelectorAll(".question").forEach(_=>{var tt;const H=_.getAttribute("data-answer"),O=_.querySelector(".option.selected");if(_.classList.remove("is-right","is-wrong"),!H)return;L+=1;const Y=(((tt=_.querySelector("strong"))==null?void 0:tt.textContent)||"").match(/\d+/),te=Y?Number(Y[0]):0;let me=O?String.fromCharCode(65+Array.from(_.querySelectorAll(".option")).indexOf(O)):"";!me&&te&&K[String(te)]&&(me=K[String(te)]),me&&(ee[te]=me),me&&me===H?(x+=1,_.classList.add("is-right")):_.classList.add("is-wrong");const De=Array.from(_.querySelectorAll(".option"));De.forEach(Oe=>Oe.classList.remove("answer-key"));const Re=De.find(Oe=>{var Le;return(((Le=Oe.querySelector("strong"))==null?void 0:Le.textContent)||"").trim().replace(/[).]/g,"")===H});Re==null||Re.classList.add("answer-key")}),ae.querySelectorAll(".blank[data-answer]").forEach(_=>{const H=_.getAttribute("data-answer"),O=_.getAttribute("data-blank");if(_.classList.remove("is-right","is-wrong"),!H||!O)return;L+=1;const Y=oe[O]||"";Y&&(ee[Number(O)]=Y),Y&&Y===H?(x+=1,_.classList.add("is-right")):_.classList.add("is-wrong")})}de({right:x,judged:L});try{const K=JSON.parse(localStorage.getItem("cet:history")||"[]");K.unshift({id:s.id,title:s.title,ts:Date.now(),right:x,judged:L,snap:ee}),localStorage.setItem("cet:history",JSON.stringify(K.slice(0,20)))}catch{}},nr=()=>{if(!window.confirm("确定清空本卷全部作答记录？"))return;["cet:answer:","cet:blank:","cet:match:"].forEach(L=>{try{localStorage.removeItem(L+s.id)}catch{}});const x=le.current;x&&(x.querySelectorAll(".option.selected").forEach(L=>L.classList.remove("selected")),x.querySelectorAll(".question").forEach(L=>L.classList.remove("is-right","is-wrong")),x.querySelectorAll(".option.answer-key").forEach(L=>L.classList.remove("answer-key")),x.querySelectorAll(".question").forEach(L=>{po(L,null),L.removeAttribute("data-ans"),L.removeAttribute("data-picked")}),x.querySelectorAll(".blank[data-blank]").forEach(L=>{L.textContent=L.getAttribute("data-blank")||"",L.classList.remove("filled","is-right","is-wrong")})),$n({}),Ia({key:!1,mine:!1,cmp:!1}),Aa(!1),P(!1),$t()},ar=x=>{const L=le.current;if(!L)return;L.querySelectorAll(".option.selected").forEach(K=>K.classList.remove("selected")),L.querySelectorAll(".question").forEach(K=>K.classList.remove("is-right","is-wrong")),L.querySelectorAll(".option.answer-key").forEach(K=>K.classList.remove("answer-key")),L.querySelectorAll(".question").forEach(K=>{po(K,null),K.removeAttribute("data-ans"),K.removeAttribute("data-picked")}),L.querySelectorAll(".blank[data-blank]").forEach(K=>{K.classList.remove("filled","is-right","is-wrong"),K.textContent=K.getAttribute("data-blank")||""}),L.querySelectorAll(".question").forEach(K=>{var O,Y;const oe=(((O=K.querySelector("strong"))==null?void 0:O.textContent)||"").match(/\d+/),_=oe?Number(oe[0]):0,H=x[_];if(H){const te=K.querySelectorAll(".option"),me=H.charCodeAt(0)-65;(Y=te[me])==null||Y.classList.add("selected")}});const ee={},ae={};L.querySelectorAll(".blank[data-blank]").forEach(K=>{const oe=K.getAttribute("data-blank")||"",_=x[Number(oe)];_&&(K.textContent=`${oe} ${_}`,K.classList.add("filled"),ee[oe]=_)}),Object.entries(x).forEach(([K,oe])=>{const _=Number(K);_>=36&&_<=45&&(ae[K]=oe)});try{const K={};L.querySelectorAll(".question").forEach((oe,_)=>{const H=oe.querySelector(".option.selected");H&&(K[String(_)]=Array.from(oe.querySelectorAll(".option")).indexOf(H))}),localStorage.setItem(`cet:answer:${s.id}`,JSON.stringify(K)),localStorage.setItem(`cet:blank:${s.id}`,JSON.stringify(ee)),localStorage.setItem(`cet:match:${s.id}`,JSON.stringify(ae))}catch{}$t(),Mn(),Aa(!1)};return(c==null?void 0:c.title)??s.title,r.jsxs("div",{className:`pd-root${ye==="paper"?" is-paper-mode":""}`,"data-card":J?"open":"closed",children:[r.jsxs("div",{className:"pd-toolbar",children:[r.jsxs("div",{className:"pd-left",children:[r.jsx("button",{className:"pd-back",onClick:d,title:"返回真题列表","aria-label":"返回真题列表",children:r.jsx(k2,{size:16})}),r.jsx("button",{type:"button",className:"pd-alarm",onClick:wn,title:Ot?In?"收起计时":"显示计时":"计时","aria-label":"计时",children:"⏱"}),r.jsx("div",{className:`pd-listening${Ul?"":" is-hidden"}`,children:v?r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频加载中",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频加载中…"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]}):E?r.jsx(q2,{meta:E,title:`听力音频 · ${s.title}`}):r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频待导入",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频待导入"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]})})]}),r.jsxs("div",{className:"pd-corner",children:[X&&r.jsx(_c,{onClick:()=>{const[x]=Yi(X);window.open(x,"_blank","noopener")},icon:r.jsx(Ap,{size:15}),label:"试卷PDF"}),Q&&r.jsx(_c,{onClick:()=>{const[x]=Yi(Q);window.open(x,"_blank","noopener")},icon:r.jsx(Ap,{size:15}),label:"答案PDF"}),h&&r.jsx(_c,{onClick:()=>{const[x]=Yi(h);window.open(x,"_blank","noopener")},icon:r.jsx("span",{style:{fontSize:15,lineHeight:1},children:"🎧"}),label:"听力音频"})]})]}),z?r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"正在载入试卷…"})}):R?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Lh}),r.jsxs("div",{className:`pd-sheet${ie?" is-spread":""}`,ref:be,style:{zoom:ne},children:[r.jsx(ch,{ann:Ji,tool:an,penProps:jn,shapeProps:ln,onAddStroke:Sn,onAppendPoint:ea,onSnap:rl,onEraseIds:pt,onEraseLocal:Wi,eraserSize:Fi,onAddNote:_a,onUpdateNote:ta}),r.jsx("div",{className:"exam-content-root",ref:le})]})]}):r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"暂无该试卷的内容数据"})}),A.length>0&&r.jsxs("div",{className:"pd-card","data-collapsed":J?"false":"true",children:[r.jsxs("div",{className:"pd-card-side",children:[r.jsxs("button",{type:"button",className:"pd-card-progress",title:W==="question"?"切换到答题卡":"切换到题目",onClick:()=>Ae(x=>x==="question"?"answer":"question"),children:[B,"/",A.reduce((x,L)=>x+L.count,0)]}),r.jsx("button",{type:"button",className:"pd-card-toggle",onClick:()=>pe(x=>!x),title:J?"收起答题卡":"展开答题卡","aria-label":J?"收起答题卡":"展开答题卡",children:J?"›":"‹"}),W==="answer"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`pd-card-tool${Qt.key?" on":""}`,title:"显示正确答案（点击一键全部显示/隐藏）","aria-label":"显示正确答案",onClick:()=>{const x=!Qt.key;Ia(L=>({...L,key:x}))},children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13",children:[r.jsx("path",{d:"M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",fill:"currentColor"}),!Qt.key&&r.jsx("line",{x1:"4",y1:"20",x2:"20",y2:"4",stroke:"currentColor",strokeWidth:"2"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Qt.mine?" on":""}`,title:"题号后显示我的作答","aria-label":"显示我的作答",onClick:()=>Ia(x=>({...x,mine:!x.mine})),children:"我"}),r.jsx("button",{type:"button",className:`pd-card-tool${Qt.cmp?" on":""}`,title:"交卷自测（判分）：对绿框 / 错红框","aria-label":"交卷自测",onClick:()=>{const x=!Qt.cmp;Ia(L=>({...L,cmp:x})),x&&Mn()},children:"交"}),r.jsx("button",{type:"button",className:"pd-card-tool",title:"清空本卷作答记录（重新作答）","aria-label":"删除作答记录",onClick:nr,children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13","aria-hidden":"true",children:[r.jsx("path",{d:"M4 7h16M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2.5 0v11.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V7",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Xi?" on":""}`,title:"查看作答记录与对错情况","aria-label":"作答记录",onClick:()=>Aa(x=>!x),children:"录"})]})]}),r.jsxs("div",{className:"pd-card-panel",children:[W==="question"&&r.jsx("div",{className:"pd-card-question",children:Dt!==null?(()=>{const x=le.current,L=x==null?void 0:x.querySelector(`.blank[data-blank="${Dt}"], .pd-blank`),ee=qp(x),ae=at[Dt];return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["选项 ",Dt]})}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(K,oe)=>String.fromCharCode(65+oe)).map(K=>r.jsx("button",{type:"button",className:`pd-picker-circle${ae===K?" on":""}`,onClick:()=>{L&&(L.textContent=`${Dt} ${K}`,L.classList.add("filled"));try{const oe=JSON.parse(localStorage.getItem(`cet:blank:${s.id}`)||"{}");oe[Dt]=K,localStorage.setItem(`cet:blank:${s.id}`,JSON.stringify(oe))}catch{}$t()},children:K},K))}),ee.length>0&&r.jsx("ul",{className:"pd-picker-words",children:ee.map(K=>r.jsx("li",{children:K},K))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Dt<=26,onClick:()=>En(Dt-1),"aria-label":"上一空",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(K,oe)=>r.jsx("span",{className:26+oe===Dt?"on":""},oe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Dt>=35,onClick:()=>En(Dt+1),"aria-label":"下一空",children:"›"})]})]})})():(()=>{var me,De,Re,tt;const x=le.current,{list:L}=fo(x||document.createElement("div")),ee=L[Xe];if(!ee)return null;const{el:ae,no:K,kind:oe}=ee;if(oe==="match"){const Oe=((De=(me=ae.querySelector("p"))==null?void 0:me.textContent)==null?void 0:De.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",Le=at[K],qe=[];{let Ce=(ae.closest(".qblock")||ae).previousElementSibling,_e=null;for(;Ce;){if(Ce.tagName==="H3"){_e=Ce;break}if(Ce.tagName==="H2")break;Ce=Ce.previousElementSibling}let Ze=(_e==null?void 0:_e.nextElementSibling)??null;for(;Ze&&Ze.tagName!=="H2";){if(Ze.tagName==="P"){const Se=Ze.querySelector("strong"),Ve=/^([A-P])\.$/.exec(((Se==null?void 0:Se.textContent)||"").trim());Ve&&qe.push({letter:Ve[1],text:(Ze.textContent||"").replace(/^[A-N]\./,"").trim().slice(0,64),el:Ze})}Ze=Ze.nextElementSibling}}return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",K," 题"]})}),qe.length>0&&r.jsx("ul",{className:"pd-match-paras",children:qe.map(Ce=>r.jsxs("li",{onClick:()=>Ce.el.scrollIntoView({behavior:"smooth",block:"center"}),children:[r.jsx("b",{children:Ce.letter}),r.jsxs("span",{children:[Ce.text,"…"]})]},Ce.letter))}),Oe&&r.jsx("p",{className:"pd-picker-stem",children:Oe}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:16},(Ce,_e)=>String.fromCharCode(65+_e)).map(Ce=>r.jsx("button",{type:"button",className:`pd-picker-circle${Le===Ce?" on":""}`,onClick:()=>{try{const _e=JSON.parse(localStorage.getItem(`cet:match:${s.id}`)||"{}");_e[K]=Ce,localStorage.setItem(`cet:match:${s.id}`,JSON.stringify(_e))}catch{}$t()},children:Ce},Ce))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:K<=36,onClick:()=>Ne(Xe-1),"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(Ce,_e)=>r.jsx("span",{className:36+_e===K?"on":""},_e))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:K>=45,onClick:()=>Ne(Xe+1),"aria-label":"下一题",children:"›"})]})]})}const _=Lp(ae),H=((tt=(Re=ae.querySelector("p"))==null?void 0:Re.textContent)==null?void 0:tt.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",O=Array.from(ae.querySelectorAll(".option")),Y=L.filter(Oe=>Lp(Oe.el)===_).map(Oe=>Oe.no),te=Y.indexOf(K);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",K," 题"]})}),H&&r.jsx("p",{className:"pd-picker-stem",children:H}),r.jsx("div",{className:"pd-picker-opts",children:O.map((Oe,Le)=>{const qe=String.fromCharCode(65+Le),Ce=Oe.classList.contains("selected");return r.jsxs("button",{type:"button",className:`pd-picker-opt${Ce?" on":""}`,onClick:()=>{kt(ae,Oe)},children:[r.jsx("span",{className:"pd-picker-letter",children:qe}),r.jsx("span",{className:"pd-picker-text",children:(Oe.textContent||"").replace(/^[A-D]\)\s*/,"").trim()})]},Le)})}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:te<=0,onClick:()=>{const Oe=Y[te-1],Le=L.find(qe=>qe.no===Oe);Le&&Ne(L.indexOf(Le))},"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Y.map(Oe=>r.jsx("span",{className:Oe===K?"on":""},Oe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:te>=Y.length-1,onClick:()=>{const Oe=Y[te+1],Le=L.find(qe=>qe.no===Oe);Le&&Ne(L.indexOf(Le))},"aria-label":"下一题",children:"›"})]})]})})()}),W==="answer"&&r.jsx("div",{className:"pd-card-acc",children:A.map((x,L)=>{const ee=x.name==="听力"?` · ${x.count} 题`:x.name==="选词填空"||x.name==="长篇阅读"?` · ${x.start}-${x.start+x.count-1}`:"",ae=!!Mt[x.name];return r.jsxs("div",{className:"pd-card-sec",children:[r.jsxs("button",{type:"button",className:"pd-card-secrow","aria-expanded":ae,onClick:()=>yo(K=>({...K,[x.name]:!K[x.name]})),children:[r.jsx("b",{children:L+1}),r.jsxs("span",{className:"pd-card-secname",children:[x.name,ee&&r.jsx("em",{children:ee})]}),r.jsxs("span",{className:"pd-card-secnum",children:[x.done.length,"/",x.count]}),r.jsx("svg",{className:`pd-card-caret${ae?" open":""}`,viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:r.jsx("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),ae&&r.jsx("div",{className:"pd-card-grid",children:Array.from({length:x.count}).map((K,oe)=>{const _=x.start+oe,H=x.done.includes(_),O=()=>{const me=le.current;if(!me)return;const De=(_>=26&&_<=35?me.querySelector(`.blank[data-blank="${_}"]`):null)||[...me.querySelectorAll(".question")].find(Re=>{var tt;return((tt=Re.querySelector(".pd-qnum"))==null?void 0:tt.textContent)===String(_)});De==null||De.scrollIntoView({behavior:"smooth",block:"center"})},Y=()=>{const me=le.current;if(me){if(_>=26&&_<=35)En(_),Ne(0);else{En(null);const{list:De}=fo(me),Re=De.find(tt=>tt.no===_);Re&&Ne(De.indexOf(Re))}Ae("question"),pe(!0)}},te=Qt.cmp?at[_]&&at[_]===Pa[_]?" cmp-right":" cmp-wrong":"";return r.jsxs("div",{role:"button",tabIndex:0,className:`pd-card-cell${H?" done":""}${te}`,title:`第 ${_} 题${H?"（已答）":""}`,onClick:O,onKeyDown:me=>{me.key==="Enter"&&O()},children:[r.jsx("button",{type:"button",className:"pd-cell-parse",title:"查看题目 / 解析",onClick:me=>{me.stopPropagation(),Y()},children:"解析"}),Qt.key&&Pa[_]&&r.jsx("span",{className:"pd-cell-key",children:Pa[_]}),Qt.mine&&at[_]&&r.jsx("span",{className:"pd-cell-mine",children:at[_]}),r.jsx("span",{className:"pd-cell-no",children:_})]},oe)})})]},`${x.name}-${L}`)})})]})]}),Xi&&(()=>{let x=[];try{x=JSON.parse(localStorage.getItem("cet:history")||"[]")}catch{}const L=x.filter(ee=>ee.id===s.id);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-history-mask",onClick:()=>Aa(!1)}),r.jsxs("div",{className:"pd-history-dialog",children:[r.jsxs("header",{className:"pd-history-head",children:[r.jsxs("b",{children:["作答记录 · ",s.title]}),r.jsx("button",{type:"button",className:"pd-history-close",onClick:()=>Aa(!1),"aria-label":"关闭",children:"✕"})]}),L.length===0?r.jsx("div",{className:"pd-history-empty",children:"暂无记录 · 完成作答后点「比」或「提交自测」即会保存"}):r.jsx("ul",{className:"pd-history-list",children:L.map((ee,ae)=>{const K=ee.right!==void 0&&ee.judged&&ee.right/ee.judged>=.6;return r.jsxs("li",{className:ee.snap?"clickable":"",title:ee.snap?"点击查看该次批改后的试卷":"该记录未含作答明细",onClick:()=>ee.snap&&ar(ee.snap),children:[r.jsx("span",{className:"pd-history-time",children:new Date(ee.ts).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("span",{className:`pd-history-score${K?" good":" bad"}`,children:ee.right!==void 0&&ee.judged?`正确 ${ee.right}/${ee.judged}`:"已记录"})]},ae)})})]})]})})(),rt&&Ol.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>wt(null)}),r.jsx(Op,{x:rt.x,y:rt.y,children:rt.kind==="question"?(()=>{var oe,_;const x=(oe=le.current)==null?void 0:oe.querySelectorAll(".question")[rt.qi],L=x?Array.from(x.querySelectorAll(".option")):[],ee=x?Number(((_=x.querySelector(".pd-qnum"))==null?void 0:_.textContent)||0):0,ae=Array.from({length:L.length||16},(H,O)=>String.fromCharCode(65+O)),K=L.length>0?String.fromCharCode(65+L.findIndex(H=>H.classList.contains("selected"))):at[ee];return r.jsx("div",{className:"pd-picker-circles",children:ae.map((H,O)=>r.jsx("button",{type:"button",className:`pd-picker-circle${K===H?" on":""}`,onClick:()=>{if(L.length>0)kt(x,L[O]);else{try{const Y=JSON.parse(localStorage.getItem(`cet:match:${s.id}`)||"{}");Y[ee]=H,localStorage.setItem(`cet:match:${s.id}`,JSON.stringify(Y))}catch{}$t()}wt(null)},children:H},H))})})():r.jsxs("div",{className:"pd-picker-body",children:[r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(x,L)=>String.fromCharCode(65+L)).map(x=>r.jsx("button",{type:"button",className:`pd-picker-circle${at[rt.blankNo]===x?" on":""}`,onClick:()=>{var ae;const L=le.current,ee=(L==null?void 0:L.querySelector(`.blank[data-blank="${rt.blankNo}"]`))||((ae=[...(L==null?void 0:L.querySelectorAll(".question"))||[]].find(K=>{var oe;return((oe=K.querySelector(".pd-qnum"))==null?void 0:oe.textContent)===String(rt.blankNo)}))==null?void 0:ae.querySelector(".blank, .pd-blank"));ee&&(ee.textContent=`${rt.blankNo} ${x}`,ee.classList.add("filled"));try{const K=JSON.parse(localStorage.getItem(`cet:blank:${s.id}`)||"{}");K[rt.blankNo]=x,localStorage.setItem(`cet:blank:${s.id}`,JSON.stringify(K))}catch{}$t(),wt(null)},children:x},x))}),r.jsx("ul",{className:"pd-picker-words",children:qp(le.current).map(x=>r.jsx("li",{children:x},x))})]})})]}),document.body),tl&&Ol.createPortal(r.jsx(r.Fragment,{children:tl.rects.map((x,L)=>r.jsx("span",{className:`pd-hl-${tl.kind}`,style:{position:"fixed",left:x.x,top:x.y,width:x.w,height:x.h}},L))}),document.body),Tt&&Ol.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>{Na(null),bn(null)}}),r.jsx(Op,{x:Tt.x,y:Tt.y,children:r.jsxs("div",{className:"pd-trans",children:[r.jsx("div",{className:"pd-trans-src",children:Tt.text}),r.jsx("div",{className:"pd-trans-res",children:Tt.result??"翻译中…"})]})})]}),document.body),bo&&Ol.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>vn(!1)}),r.jsxs("div",{className:"pd-timer-dialog",children:[r.jsx("button",{type:"button",className:"pd-timer-dialog-close",onClick:()=>vn(!1),"aria-label":"关闭",children:"×"}),r.jsxs("div",{className:"pd-timer-dialog-head",children:[r.jsx("span",{className:"pd-timer-dialog-icon",children:"⏱"}),r.jsxs("div",{children:[r.jsx("h3",{children:"计时"}),r.jsx("p",{children:"开始后将在正文上方显示时间"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-modes",children:[r.jsxs("button",{type:"button",className:Jn==="up"?"on":"",onClick:()=>za("up"),children:[r.jsx("b",{children:"正计时"}),r.jsx("span",{children:"累计用时"})]}),r.jsxs("button",{type:"button",className:Jn==="down"?"on":"",onClick:()=>za("down"),children:[r.jsx("b",{children:"倒计时"}),r.jsx("span",{children:"限时完成"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-actions",children:[r.jsx("button",{type:"button",className:"pd-timer-cancel",onClick:()=>vn(!1),children:"取消"}),r.jsx("button",{type:"button",className:"pd-timer-start",onClick:()=>{Vi(Jn),Ea(0),nl(!1),Xl(!0),Wn(!0),vn(!1)},children:"开始"})]})]})]}),document.body),Ot&&In&&Ol.createPortal(r.jsxs("div",{className:"pd-timer-bar",style:nn?{transform:`translate(-50%, 0) translate(${nn.x}px, ${nn.y}px)`}:void 0,children:[r.jsx("span",{className:"pd-timer-label",children:Fn==="up"?"用时":"剩余"}),r.jsx("b",{className:"pd-timer-time",children:$i}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Wn(x=>!x),children:Ot?"⏸ 暂停":"▶ 继续"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Vi(x=>x==="up"?"down":"up"),children:"↻ 换模式"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>nl(x=>!x),children:"👁 遮住"}),r.jsx("button",{type:"button",className:"pd-tb-chip red",onClick:()=>{Wn(!1),Ea(0),nl(!1),Xl(!0),al(null)},children:"■ 结束"}),r.jsx("span",{className:"pd-timer-drag",onPointerDown:Et,onPointerMove:Pn,onPointerUp:Ql,title:"拖动"})]}),document.body),Rt&&Ol.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-drawer-mask",onClick:()=>bt(null)}),r.jsxs("aside",{className:"pd-drawer",children:[r.jsxs("header",{className:"pd-drawer-head",children:[r.jsx("h3",{children:Rt.title}),r.jsx("button",{type:"button",className:"pd-drawer-close",onClick:()=>bt(null),"aria-label":"关闭",children:"×"})]}),r.jsx("textarea",{className:"pd-drawer-text",placeholder:Rt.placeholder,value:Zi,onChange:x=>Yl(x.target.value)}),r.jsx("button",{type:"button",className:"pd-drawer-save",onClick:vo,children:"保存"})]})]}),document.body),r.jsx(jh,{tool:an,onTool:$l,penProps:jn,onPenSetting:wo,shapeProps:ln,onShapeSetting:ll,zoom:ne,onZoom:T,onUndo:Pi,canUndo:qt,eraserSize:Fi,onEraserSize:Ii,spread:ie,onToggleSpread:j,examMode:ye,onToggleExamMode:fe})]})},_c=({href:s,onClick:f,icon:d,label:c})=>{const p={display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 13px",borderRadius:"8px",border:"1px solid var(--affine-border-color)",background:"var(--affine-background-primary-color)",color:"var(--affine-text-primary-color)",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"none"};return s?r.jsxs("a",{href:s,target:"_blank",rel:"noreferrer",style:p,children:[d,c]}):r.jsxs("button",{onClick:f,style:p,children:[d,c]})},Lh=`
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
`,Dh=JSON.parse('[{"id":"cet4-2026-06-set1","title":"2026年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-150词/分钟，短篇新闻占比升至30%，涵盖科技突破、环境治理等话题"],"reading":["科技与生活","校园场景分析","社会现象探讨","个人成长"],"writing":["大学生参与科研项目（需回应必要性与实用性两个维度）"],"translation":["餐桌礼仪"],"readingDifficulty":["中","难","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set2","title":"2026年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["学术化场景增加，长对话信息密度提升，信号词定位（but/however后答案概率达72%）"],"reading":["教育创新","智能设备应用","文化传承","职场发展"],"writing":["校园机器人应用（需提出具体观点或可操作建议）"],"translation":["尊师文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set3","title":"2026年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["校园与生活类场景为主，口音多元化（英音、澳音占比约15%）"],"reading":["青年品德","线上学习","环境保护","人际关系"],"writing":["提升校园生活便利性（需提出具体建议）"],"translation":["送礼习俗"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2025-12-set1","title":"2025年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["整体难度适中，话题贴近学习与生活，涉及社会、经济、文化等多层面"],"reading":["生物节律与服药时间","延迟退休原因分析","自行车道建设观念冲突","选择过多的决策困扰"],"writing":["建议信——学生会如何丰富学生生活"],"translation":["民营经济"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_1","hasListening":true},{"id":"cet4-2025-12-set2","title":"2025年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["短篇新闻涉及德国超市巧克力兔子版权纠纷，长对话偏校园与日常场景"],"reading":["用户体验设计师成长","英国学校校服政策争议","学术性文本分析","职场发展"],"writing":["如何充分利用校内资源促进学业发展"],"translation":["绿色经济"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_2","hasListening":true},{"id":"cet4-2025-12-set3","title":"2025年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["考查因果关系推断与观点态度理解能力，注重实际场景关键信息抓取"],"reading":["社会热点","文化现象","教育话题","健康生活"],"writing":["为学生会如何丰富学生生活提建议"],"translation":["城市漫步"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_3","hasListening":true},{"id":"cet4-2025-06-set1","title":"2025年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set1","year":2025,"month":"06","keyPoints":{"listening":["语速适中，对话为校园和日常热点场景，长对话需集中注意力抓关键信息"],"reading":["选词填空考基础词汇运用","仔细阅读贴近社会热点","长篇阅读信息匹配"],"writing":["大学图书馆是否应该向公众开放"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_1","hasListening":true},{"id":"cet4-2025-06-set2","title":"2025年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set2","year":2025,"month":"06","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["社会热点话题","文化现象分析","教育公平","科技与生活"],"writing":["创新创业课程相关"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_2","hasListening":true},{"id":"cet4-2025-06-set3","title":"2025年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set3","year":2025,"month":"06","keyPoints":{"listening":["整体难度适中，比平时模拟题更贴近真实考试节奏，没有偏题怪题"],"reading":["选词填空考基础词汇","仔细阅读主题贴近社会热点","长篇阅读信息匹配"],"writing":["创新创业课程相关"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_3","hasListening":true},{"id":"cet4-2024-12-set1","title":"2024年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set1","year":2024,"month":"12","keyPoints":{"listening":["整体难度适中，但听力是本次考试最难的部分，语速偏快、信息密度高"],"reading":["社交媒体对人际交往的影响","社会热点话题分析","科技与生活","职场发展"],"writing":["社交媒体对人际交往的影响"],"translation":["医患关系处理"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_1","hasListening":true},{"id":"cet4-2024-12-set2","title":"2024年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set2","year":2024,"month":"12","keyPoints":{"listening":["语速平稳、发音清晰，但部分长对话和讲座信息密度较高"],"reading":["远程工作对效率和生活质量的影响","全球气候变化对农业的影响","电子书与纸质书阅读体验差异"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_2","hasListening":true},{"id":"cet4-2024-12-set3","title":"2024年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set3","year":2024,"month":"12","keyPoints":{"listening":["语速快，发音与英美音差异大，话题偏专业"],"reading":["社会热点话题","健康生活方式","教育公平","文化多样性"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_3","hasListening":true},{"id":"cet4-2024-06-set1","title":"2024年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set1","year":2024,"month":"06","keyPoints":{"listening":["语速比往年快一丢丢，长对话容易走神漏细节"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["智能设备对学习的影响"],"translation":["贴福字"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_1","hasListening":true},{"id":"cet4-2024-06-set2","title":"2024年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set2","year":2024,"month":"06","keyPoints":{"listening":["语速平稳，没有怪口音，基础稳点能拿不少分"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["大学图书馆是否应该向公众开放"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_2","hasListening":true},{"id":"cet4-2024-06-set3","title":"2024年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set3","year":2024,"month":"06","keyPoints":{"listening":["整体中等偏上，不是最难但坑点真不少"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["智能设备对学习的影响"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_3","hasListening":true},{"id":"cet4-2023-12-set1","title":"2023年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set1","year":2023,"month":"12","keyPoints":{"listening":["短篇新闻和长对话相对简单，听力篇章难度有所增加"],"reading":["词汇理解与长篇阅读较容易，仔细阅读难度较大"],"writing":["写作要求与往年变化不大，认真审题即可"],"translation":["改革开放以来饮食变化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-12-set2","title":"2023年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set2","year":2023,"month":"12","keyPoints":{"listening":["听力语速和长对话复杂度已接近当前考试标准"],"reading":["选词填空出现个别生词","长篇阅读信息匹配","仔细阅读细节题为主"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-12-set3","title":"2023年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set3","year":2023,"month":"12","keyPoints":{"listening":["听力部分如果不仔细听材料，很多细节之处容易忽略"],"reading":["仔细阅读难度较大，需要较强的逻辑推断能力"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set1","title":"2023年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["长对话略难，同义替换较多，不仔细听容易忽略细节"],"reading":["仔细阅读中规中矩，定位好关键句关键词正确率较高"],"writing":["作文和翻译内容相对抽象，很多词汇难写，难度较大"],"translation":["揠苗助长"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set2","title":"2023年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["听力发音清晰、语速适中"],"reading":["阅读话题不偏，翻译是传统文化类，背过素材很好上手"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["亡羊补牢"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-06-set3","title":"2023年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set3","year":2023,"month":"06","keyPoints":{"listening":["听力整体来说较简单，正确选项与原文高度匹配，体现视听一致原则"],"reading":["阅读话题不偏，仔细阅读中规中矩"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["守株待兔"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2022-12-set1","title":"2022年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["听力对我来说很难，错了挺多"],"reading":["选词填空考高中考纲词汇","仔细阅读感觉还行","翻译冬至那篇挺简单"],"writing":["培养社交能力的必要性"],"translation":["冬至"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_1","hasListening":true},{"id":"cet4-2022-12-set2","title":"2022年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set2","year":2022,"month":"12","keyPoints":{"listening":["听力开头两个全错，后十个听力错4个"],"reading":["选词填空考parenthood","仔细阅读涉及鱼和消除贫困，都读懂了但选项选不出来"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_2","hasListening":true},{"id":"cet4-2022-12-set3","title":"2022年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set3","year":2022,"month":"12","keyPoints":{"listening":["听力部分16-25题较难"],"reading":["选词填空都是高中考纲词汇，没有不认识的词"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_3","hasListening":true},{"id":"cet4-2022-06-set1","title":"2022年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set1","year":2022,"month":"06","keyPoints":{"listening":["听力选项同义替换多，长度普遍较长，预读起来没那么顺畅"],"reading":["段落匹配到处是显眼的TD，做起来挺轻松","仔细阅读第一篇挺简单，第二篇common sense有点绕"],"writing":["作文很好写，背的模版刚好契合"],"translation":["赵州桥"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_1","hasListening":true},{"id":"cet4-2022-06-set2","title":"2022年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set2","year":2022,"month":"06","keyPoints":{"listening":["全国共考两套听力，本套听力与前两套内容一样，只是选项顺序不同"],"reading":["阅读整体感觉还行，仔细阅读定位准确即可"],"writing":["作文较好写"],"translation":["亡羊补牢"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_2","hasListening":true},{"id":"cet4-2022-06-set3","title":"2022年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set3","year":2022,"month":"06","keyPoints":{"listening":["听力比起去年12月的要难一点"],"reading":["阅读话题常规，仔细阅读需要仔细定位"],"writing":["作文较好写"],"translation":["揠苗助长"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_3","hasListening":true},{"id":"cet4-2021-12-set1","title":"2021年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["听力题目中规中矩，和之前差不多"],"reading":["阅读还算正常，仔细阅读定位准确即可"],"writing":["作文report较难，不记得怎么写"],"translation":["都江堰"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2021-12-set2","title":"2021年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set2","year":2021,"month":"12","keyPoints":{"listening":["听力部分中规中矩"],"reading":["阅读部分选词填空考词汇辨析与语法，仔细阅读涉及人工智能在医疗中的应用"],"writing":["作文report较难"],"translation":["坎儿井"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-12-set3","title":"2021年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set3","year":2021,"month":"12","keyPoints":{"listening":["听力部分与第二套一致"],"reading":["阅读整体难度适中"],"writing":["作文report较难"],"translation":["大运河"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set1","title":"2021年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set1","year":2021,"month":"06","keyPoints":{"listening":["听力好难，到后面基本上是乱写"],"reading":["第二套的长篇阅读和第三套的仔细阅读，太难了，和平时的四级考试难度不在一个等级"],"writing":["科技是否会让人变懒"],"translation":["铁观音"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set2","title":"2021年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set2","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["匹配阅读真的难，文章内容根本读不懂，全是比较晦涩难懂的内容"],"writing":["科技是否会让人变懒"],"translation":["龙井"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set3","title":"2021年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set3","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["仔细阅读真的有些读不懂，一个是boring，一个是肥胖"],"writing":["科技是否会让人变懒"],"translation":["普洱"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set1","title":"2020年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["听力考试难度适中，较之前考题无明显变化"],"reading":["选词填空是难点，段落匹配和传统阅读得分点与以往并无差异，主要考察名词定位和句式关键信息处理"],"writing":["Changes in the Way of Education"],"translation":["春节中鱼的象征意义"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set2","title":"2020年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["新闻听力选项内容较长，词汇难度提升，主要考察细节匹配"],"reading":["选词填空讲“该如何把控赞美的度”，快速阅读关于“贫穷的样子”，仔细阅读是比较日常的社科类话题"],"writing":["Changes in the Way of Transportation"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set3","title":"2020年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set3","year":2020,"month":"12","keyPoints":{"listening":["长对话部分选项内容相对容易，短文听力部分较长对话稍有难度"],"reading":["仔细阅读试题考查类型为细节理解，题干关键词定位明显"],"writing":["Changes in the Way of Communication"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set1","title":"2020年9月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["新闻部分语速适中，专业词汇较少；长对话第一篇语速较快，连读较多"],"reading":["选词填空难度不大，词性辨别及单词难度较低","长篇阅读难点在实验过程的段落区分"],"writing":["在线图书馆/在线词典/PPT的使用"],"translation":["白酒/国宴等传统文化词汇"],"readingDifficulty":["难","中","中","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set2","title":"2020年9月 四级真题 (第二、三套合并卷)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["听力部分整体较往年相比难度适中，语速适中，考题均为细节题"],"reading":["仔细阅读主要考查综合阅读能力，题目以细节题为主，重在对比原文与选项是否同义"],"writing":["分析利弊型作文，网络相关话题"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-07-set1","title":"2020年7月 四级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["难度基本与去年12月持平，个别几道题较难，做题技巧围绕视听一致原则"],"reading":["选词填空为科普类文章，考查大纲词汇及名、动、形、副四类词汇语法结构"],"writing":["分析翻译应用程序流行的原因（原因解释类作文）"],"translation":["火锅"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set1","title":"2019年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set1","year":2019,"month":"12","keyPoints":{"listening":["新闻部分较往年容易，长对话正常难度，篇章较难，考题多为细节题"],"reading":["阅读整体难度适中，多为应用文和议论文，选词填空出现个别生词，考生易在此处丢分"],"writing":["推荐信（应用文写作）"],"translation":["父母重视教育"],"readingDifficulty":["中","易","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2019-12-set2","title":"2019年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set2","year":2019,"month":"12","keyPoints":{"listening":["长对话听音难点主要集中在语音，连读较多，英美音互换较难"],"reading":["阅读整体难度适中，仔细阅读部分题在常见设题点设题，较容易定位"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set3","title":"2019年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set3","year":2019,"month":"12","keyPoints":{"listening":["短文篇幅较长，语言难度较其他两部分来说相对难一些"],"reading":["阅读整体难度适中，选词填空出现个别生词"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","易","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set1","title":"2019年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set1","year":2019,"month":"06","keyPoints":{"listening":["整体来说较简单，新闻、长对话、篇章考的都是在课堂上讲过的简单生活类主题"],"reading":["阅读理解总体难度比2018年12月简单，高频词汇反复出现","考点中规中矩","阅读材料接地气容易理解"],"writing":["新闻报道（社会热点类话题）"],"translation":["灯笼"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set2","title":"2019年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set2","year":2019,"month":"06","keyPoints":{"listening":["听力考试整体来说较简单，好多文章的正确选项都跟原文高度匹配"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set3","title":"2019年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set3","year":2019,"month":"06","keyPoints":{"listening":["听力难度适中"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set1","title":"2018年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set1","year":2018,"month":"12","keyPoints":{"listening":["题型稳定，长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察学生在材料中的定位及对重点语句的理解能力"],"writing":["毕业后将面临的就业挑战"],"translation":["手机阅读"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set2","title":"2018年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set2","year":2018,"month":"12","keyPoints":{"listening":["长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，题材为学生的日常兴趣与关注的话题"],"writing":["留学面临的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-12-set3","title":"2018年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set3","year":2018,"month":"12","keyPoints":{"listening":["听力部分题型稳定，话题较为传统"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察定位及重点语句理解能力"],"writing":["大城市生活的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-06-set1","title":"2018年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set1","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单，新闻部分没有涉及政治经济类话题，考的是社会民生类新闻"],"reading":["试卷整体难度有所下降，阅读与听力较以往考试也更容易理解"],"writing":["口语能力的重要性及如何培养"],"translation":["飞机"],"readingDifficulty":["易","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set2","title":"2018年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set2","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["选材源于英美主流媒体报刊，题材集中在社科领域"],"writing":["写作能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set3","title":"2018年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set3","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["试卷整体难度有所下降，阅读更容易理解"],"writing":["阅读能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}}]'),Rh=JSON.parse('[{"id":"cet6-2026-06-set1","title":"2026年6月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-160词/分钟，学术场景占比激增至68%，多模态（语音+图表）融合考查"],"reading":["科技与生活","社会现象分析","科技伦理","人文关怀"],"writing":["热爱自然（Love Nature）"],"translation":["无人机"],"difficulty":"中等","readingDifficulty":["中","难","难","难"],"readingLevel":"难"}},{"id":"cet6-2026-06-set2","title":"2026年6月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["讲座听力开头30秒是考点密集区，主旨题答案几乎都出现在前30秒内"],"reading":["文化传承","教育与发展","经济与社会","个人成长"],"writing":["深入了解中华传统文化有助于促进文化交流"],"translation":["电子商务与乡村振兴"],"difficulty":"中等","readingDifficulty":["中","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2026-06-set3","title":"2026年6月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["转折词but、however后面覆盖约40%的细节题和推理题"],"reading":["心理健康","科技对社会的影响","环境与责任","批判性思维"],"writing":["科技与人文"],"translation":["科技医疗（远程医疗）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-12-set1","title":"2025年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["持续关注学术场景和逻辑信号词"],"reading":["社会价值观","老年人对社会贡献","教育方法","科技与人类"],"writing":["在竞争日益激烈的世界中，大学生应更好准备以应对各种挑战"],"translation":["尊老（中华民族传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_1/test.pdf"},{"id":"cet6-2025-12-set2","title":"2025年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["逻辑推断和细节抓取并重"],"reading":["网络经济与传统经济","科技发展与政策","自我价值实现","大学生活适应"],"writing":["通过“中国梦”实现自我价值"],"translation":["中华民族崇尚的自强自立精神"],"difficulty":"中等","readingDifficulty":["中","中","难","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_2/test.pdf"},{"id":"cet6-2025-12-set3","title":"2025年12月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["学术场景与日常对话交替出现"],"reading":["传统美德与消费","深度阅读与AI","人类创造力","志愿服务与社会责任"],"writing":["教师对学生学术追求和个人发展的影响"],"translation":["节俭（frugality，传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_3/test.pdf"},{"id":"cet6-2025-06-set1","title":"2025年6月 六级真题 (第一套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set1","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第1套.pdf","keyPoints":{"listening":["听力语速提升，学术场景占比增加，讲座逻辑严密"],"reading":["社会心理（身份构建）","独处的好处","追随激情的潜在问题","工作与生活平衡"],"writing":["过度依赖AI对创造力的危害"],"translation":["天宫空间站"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-06-set2","title":"2025年6月 六级真题 (第二套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set2","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第2套.pdf","keyPoints":{"listening":["学术场景为主，重视逻辑信号词"],"reading":["社会心理","图书馆的重要性","社区文化","信息获取与知识传播"],"writing":["社交媒体的使用（正确且负责任地使用）"],"translation":["南水北调工程"],"difficulty":"较难","readingDifficulty":["难","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2025-06-set3","title":"2025年6月 六级真题 (第三套)","desc":"高阶词汇突破","url":"exam-detail.html?id=cet6-2025-06-set3","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第3套.pdf","keyPoints":{"listening":["语速偏快，细节题需结合笔记技巧"],"reading":["环境意识","肉类消费与气候变化","可持续生活","公共健康"],"writing":["职业准备"],"translation":["粤港澳大湾区"],"difficulty":"较难","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set1","title":"2024年12月 六级真题 (第一套)","desc":"年度压轴真题","url":"exam-detail.html?id=cet6-2024-12-set1","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_1/test.pdf","keyPoints":{"listening":["长对话围绕绩效评估、商业项目展开；短文考儿童好奇心"],"reading":["全球贫困问题","密码记忆研究","恐怖片为何受欢迎","社会心理与科技"],"writing":["人工智能对职场的影响"],"translation":["北斗卫星导航系统"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set2","title":"2024年12月 六级真题 (第二套)","desc":"学术英语精讲","url":"exam-detail.html?id=cet6-2024-12-set2","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_2/test.pdf","keyPoints":{"listening":["讲座考物质追求、可持续时尚；学术场景比重增加"],"reading":["全球贫困问题","数字隐私与密码记忆","恐怖片流行原因","人类行为与心理"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["人工智能技术在中国各行业的应用及发展前景"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set3","title":"2024年12月 六级真题 (第三套)","desc":"写作论证技巧","url":"exam-detail.html?id=cet6-2024-12-set3","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_3/test.pdf","keyPoints":{"listening":["长对话涉及商业项目；讲座偏社会学话题"],"reading":["社会经济学","左脑与右脑差异","认知科学","教育应用"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["京剧脸谱艺术"],"difficulty":"较难","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2024-06-set1","title":"2024年6月 六级真题 (第一套)","desc":"真实真题（含听力音频）","url":"exam-detail.html?id=cet6-2024-06-set1","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_1/test.pdf","keyPoints":{"listening":["听力语速偏快，连读弱读较多，短对话聚焦职场、学术场景"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["数字素养技能（Digital Literacy Skills）"],"translation":["中国传统婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2024_06_1","hasListening":true},{"id":"cet6-2024-06-set2","title":"2024年6月 六级真题 (第二套)","desc":"复杂句式解析","url":"exam-detail.html?id=cet6-2024-06-set2","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_2/test.pdf","keyPoints":{"listening":["长对话主题为“学术会议筹备”，讲座细节推断"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["社会实践和理论学习同等重要（Social Practice and Academic Learning）"],"translation":["竹子"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-06-set3","title":"2024年6月 六级真题 (第三套)","desc":"听力长对话攻略","url":"exam-detail.html?id=cet6-2024-06-set3","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_3/test.pdf","keyPoints":{"listening":["语速快，弱读连读多；注意转折词后的答案区间"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["坚持独立思考 / 自主学习"],"translation":["中国婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2023-12-set1","title":"2023年12月 六级真题 (第一套)","desc":"深入剖析长难句","url":"exam-detail.html?id=cet6-2023-12-set1","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_1/test.pdf","keyPoints":{"listening":["短篇新闻涉及量子计算、乡村教育振兴；讲座关注专业术语理解（如“量子霸权”）"],"reading":["AI时代创造力价值","数字经济对传统行业的冲击与机遇","环境保护与经济发展","社会文化"],"writing":["环境保护与经济发展（分析矛盾并提出解决方案）"],"translation":["中国人口结构变化与老龄化社会"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_1","hasListening":true},{"id":"cet6-2023-12-set2","title":"2023年12月 六级真题 (第二套)","desc":"科技文献阅读","url":"exam-detail.html?id=cet6-2023-12-set2","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_2/test.pdf","keyPoints":{"listening":["短篇新闻涉及全球生物多样性保护会议；长对话职场场景"],"reading":["AI时代创造力价值","多元文化社会的价值冲突与融合","基础知识获取的重要性","跨文化沟通"],"writing":["The importance of acquiring the basic knowledge"],"translation":["中国城镇化进程"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_2","hasListening":true},{"id":"cet6-2023-12-set3","title":"2023年12月 六级真题 (第三套)","desc":"翻译精准表达","url":"exam-detail.html?id=cet6-2023-12-set3","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_3/test.pdf","keyPoints":{"listening":["讲座学术逻辑性强，注意信号词和逻辑词"],"reading":["社会现象","逻辑推理与信息匹配","老年人社会贡献","职场与生活"],"writing":["老年人凭借宝贵技能和经验继续为社会做贡献（给定开头句）"],"translation":["中国养老服务体系建设"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_3","hasListening":true},{"id":"cet6-2023-06-set1","title":"2023年6月 六级真题 (第一套)","desc":"议论文写作范式","url":"exam-detail.html?id=cet6-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["注意力管理","专注力对学习工作的重要性","AI时代思考能力","多角度分析"],"writing":["AI时代思考能力","多角度分析"],"translation":["贴春联"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_1","hasListening":true},{"id":"cet6-2023-06-set2","title":"2023年6月 六级真题 (第二套)","desc":"学术词汇积累","url":"exam-detail.html?id=cet6-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["AI创造力争议","人工智能能否替代人类创作","科技伦理","社会影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["印章"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_2","hasListening":true},{"id":"cet6-2023-06-set3","title":"2023年6月 六级真题 (第三套)","desc":"听力讲座笔记法","url":"exam-detail.html?id=cet6-2023-06-set3","year":2023,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_3/test.pdf","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["多元文化","文化价值冲突与融合","文化认同","全球化影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["中央电视台总部大楼"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_3","hasListening":true},{"id":"cet6-2022-12-set1","title":"2022年12月 六级真题 (第一套)","desc":"后疫情时代话题","url":"exam-detail.html?id=cet6-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["三篇新闻聚焦后疫情时代社会议题"],"reading":["韧性城市建设","数字鸿沟对社会公平的影响","学生贷款与教育公平","社会政策分析"],"writing":["培养团队精神"],"translation":["春节（习俗","文化内涵和现代意义）"],"difficulty":"中等","readingDifficulty":["中","难","中","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_1","hasListening":true},{"id":"cet6-2022-12-set2","title":"2022年12月 六级真题 (第二套)","desc":"经济全球化主题","url":"exam-detail.html?id=cet6-2022-12-set2","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_2/test.pdf","keyPoints":{"listening":["长对话细节题占比高，注意逻辑关系"],"reading":["社会心理","数字鸿沟与信息公平","教育公平","社会阶层与流动"],"writing":["培养批判性思维（逻辑推理","避免草率判断）"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_2","hasListening":true},{"id":"cet6-2022-12-set3","title":"2022年12月 六级真题 (第三套)","desc":"文化多样性","url":"exam-detail.html?id=cet6-2022-12-set3","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_3/test.pdf","keyPoints":{"listening":["学术讲座偏多，逻辑结构清晰"],"reading":["文化现象","古典音乐受众演变","文化传承与创新","艺术与商业"],"writing":["信息时代的学习"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_3","hasListening":true},{"id":"cet6-2022-06-set1","title":"2022年6月 六级真题 (第一套)","desc":"气候变化议题","url":"exam-detail.html?id=cet6-2022-06-set1","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第1套.pdf","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["环保生活","长难句与观点梳理","环境政策","绿色生活方式"],"writing":["Live an Environmentally Friendly Lifestyle"],"translation":["剪纸"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2022-06-set2","title":"2022年6月 六级真题 (第二套)","desc":"人工智能伦理","url":"exam-detail.html?id=cet6-2022-06-set2","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第2套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","信息匹配与细节定位","社会文化","生态保护"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["皮影戏"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2022-06-set3","title":"2022年6月 六级真题 (第三套)","desc":"可持续发展","url":"exam-detail.html?id=cet6-2022-06-set3","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第3套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","科普推理","社会热点问题","文化现象"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["昆曲"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2021-12-set1","title":"2021年12月 六级真题 (第一套)","desc":"数字经济时代","url":"exam-detail.html?id=cet6-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["场景多样，细节题占比高"],"reading":["睡眠与健康","社会现象分析","有效沟通","人际关系"],"writing":["有效沟通能力的重要性"],"translation":["井冈山（中国革命摇篮）"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_1","hasListening":true},{"id":"cet6-2021-12-set2","title":"2021年12月 六级真题 (第二套)","desc":"社会公平正义","url":"exam-detail.html?id=cet6-2021-12-set2","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_2/test.pdf","keyPoints":{"listening":["讲座学术性强，需要笔记辅助"],"reading":["经济影响","自动化对经济的破坏性","科技与就业","社会变迁"],"writing":["Say Thank You to Parents（向父母道谢）"],"translation":["延安（中国革命圣地）"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_2","hasListening":true},{"id":"cet6-2021-12-set3","title":"2021年12月 六级真题 (第三套)","desc":"科技创新驱动","url":"exam-detail.html?id=cet6-2021-12-set3","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_3/test.pdf","keyPoints":{"listening":["长对话偏职场与生活场景"],"reading":["社会心理","社交媒体与数字阅读","数字时代生活","阅读习惯"],"writing":["虚假信息"],"translation":["中国共产党第一次全国代表大会会址"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_3","hasListening":true},{"id":"cet6-2021-06-set1","title":"2021年6月 六级真题 (第一套)","desc":"疫情下的教育变革","url":"exam-detail.html?id=cet6-2021-06-set1","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_1/test.pdf","keyPoints":{"listening":["长对话8%、听力篇章7%、讲座20%，注意转折、因果、最高级等关键词"],"reading":["创造力","画画与创造力教育","AI与就业","职业发展"],"writing":["社交媒体是否拉近了人际距离"],"translation":["海南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_1","hasListening":true},{"id":"cet6-2021-06-set2","title":"2021年6月 六级真题 (第二套)","desc":"远程办公趋势","url":"exam-detail.html?id=cet6-2021-06-set2","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_2/test.pdf","keyPoints":{"listening":["注意七种关键词（转折、因果、最高级、事实罗列等）"],"reading":["技术影响","汽车改变生活","文化遗产（巴黎圣母院大火）","科技与社会"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["云南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_2","hasListening":true},{"id":"cet6-2021-06-set3","title":"2021年6月 六级真题 (第三套)","desc":"医疗卫生体系","url":"exam-detail.html?id=cet6-2021-06-set3","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_3/test.pdf","keyPoints":{"listening":["长对话、篇章、讲座题型分布均衡"],"reading":["教育观念","学校创造力教育","教育公平","个人成长"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["青海"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_3","hasListening":true},{"id":"cet6-2020-12-set1","title":"2020年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop the ability to meet challenges"]}},{"id":"cet6-2020-12-set2","title":"2020年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop ef fective communication skills"]}},{"id":"cet6-2020-12-set3","title":"2020年12月 六级真题 (第三套)","desc":"国际合作发展","url":"exam-detail.html?id=cet6-2020-12-set3","year":2020,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/answer.pdf","keyPoints":{"listening":["注意事实罗列词汇、情态动词"],"reading":["艺术欣赏","艺术欣赏困境","创造力","挑战自我"],"writing":["Why students should take challenges"],"translation":["大兴机场"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2020-09-set1","title":"2020年9月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;Beauty of the soul is the essential beauty.&rdquo;"]}},{"id":"cet6-2020-09-set2","title":"2020年9月 六级真题 (第二、三套合并卷)","desc":"第二、三套合并卷，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["全国共考1套听力，与第一套一致"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["在线经济崛起"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["第二、三套作文真题整理中"]}},{"id":"cet6-2020-07-set1","title":"2020年7月 六级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;The best preparation for tomorrow is doing your best today."]}},{"id":"cet6-2019-12-set1","title":"2019年12月 六级真题 (第一套)","desc":"5G时代来临","url":"exam-detail.html?id=cet6-2019-12-set1","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/listening.mp3","keyPoints":{"listening":["讲座听力为重点，需关注学术逻辑"],"reading":["家庭责任","责任感","牡丹花文化","传统美德"],"writing":["家庭责任感"],"translation":["牡丹花"],"difficulty":"适中","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2019-12-set2","title":"2019年12月 六级真题 (第二套)","desc":"区块链技术","url":"exam-detail.html?id=cet6-2019-12-set2","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/listening.mp3","keyPoints":{"listening":["讲座学术逻辑，注意信号词"],"reading":["社会责任","责任感","荷花文化","社会价值观"],"writing":["社会责任感"],"translation":["荷花"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-12-set3","title":"2019年12月 六级真题 (第三套)","desc":"大数据应用","url":"exam-detail.html?id=cet6-2019-12-set3","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["团体责任","责任感","梅花文化","传统文化"],"writing":["团体责任感"],"translation":["梅花"],"difficulty":"适中","readingDifficulty":["中","易","易","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set1","title":"2019年6月 六级真题 (第一套)","desc":"文化自信建设","url":"exam-detail.html?id=cet6-2019-06-set1","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/listening.mp3","keyPoints":{"listening":["长对话、Passage、Lecture三种题型"],"reading":["AI影响","AI对人类文明的影响","AI与霍金警告","团队精神与沟通"],"writing":["团队精神和沟通在工作中的重要性"],"translation":["汉语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set2","title":"2019年6月 六级真题 (第二套)","desc":"生态文明理念","url":"exam-detail.html?id=cet6-2019-06-set2","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/listening.mp3","keyPoints":{"listening":["注意信号词和逻辑词"],"reading":["创业","老年人市场","学习动机","教育与工作"],"writing":["学习动机和学习方法的重要性"],"translation":["成语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set3","title":"2019年6月 六级真题 (第三套)","desc":"创新型国家","url":"exam-detail.html?id=cet6-2019-06-set3","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["职业转型","重新工作感受与AI发展","人际交往","互相尊重"],"writing":["人际交往中相互理解和尊重的重要性"],"translation":["方言"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set1","title":"2018年12月 六级真题 (第一套)","desc":"改革开放40年","url":"exam-detail.html?id=cet6-2018-12-set1","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第1套.pdf","keyPoints":{"listening":["需关注关键句而非追求整篇听懂"],"reading":["农业机器人","机器人在农业中的应用","科普沟通","留学挑战"],"writing":["The challenges of studying abroad"],"translation":["图书馆"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set2","title":"2018年12月 六级真题 (第二套)","desc":"移动支付革命","url":"exam-detail.html?id=cet6-2018-12-set2","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第2套.pdf","keyPoints":{"listening":["同上"],"reading":["儿童注意力发展","智能手机与心理学","毕业挑战","职场适应"],"writing":["The challenges of starting a career after graduation"],"translation":["博物馆"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2018-12-set3","title":"2018年12月 六级真题 (第三套)","desc":"高铁走向世界","url":"exam-detail.html?id=cet6-2018-12-set3","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第3套.pdf","keyPoints":{"listening":["同上"],"reading":["教育方法","高等数学争论","护理机器人","大城市生活","社会适应"],"writing":["The challenges of living in big cities"],"translation":["体育馆"],"difficulty":"适中","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2018-06-set1","title":"2018年6月 六级真题 (第一套)","desc":"智能制造升级","url":"exam-detail.html?id=cet6-2018-06-set1","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第1套.pdf","keyPoints":{"listening":["长对话为热身过渡（7%），重点在讲座讲话（第23-25题）"],"reading":["非名校选择","社会文化","高铁网络与社会发展"],"writing":["建立企业与消费者之间的信任"],"translation":["高铁"],"difficulty":"适中","readingDifficulty":["易","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set2","title":"2018年6月 六级真题 (第二套)","desc":"电子商务发展","url":"exam-detail.html?id=cet6-2018-06-set2","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第2套.pdf","keyPoints":{"listening":["讲座听力涉及大写专有名词和数字（如1984）；第23题偏主旨概括题"],"reading":["专有名词","词汇辨析","社会现象","生活质量"],"writing":["建立师生之间的信任"],"translation":["私家车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set3","title":"2018年6月 六级真题 (第三套)","desc":"共享单车现象","url":"exam-detail.html?id=cet6-2018-06-set3","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第3套.pdf","keyPoints":{"listening":["听力素材与第二套一致，仅选项顺序不同"],"reading":["社会文化","人际关系","社会发展"],"writing":["建立老板和员工之间的信任"],"translation":["共享单车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}}]'),Ip={cet4:Dh,cet6:Rh},Oh=""+new URL("zhenti-yanxi-title-DLkwfH1s.png",import.meta.url).href,qh=Ip,Hh={blue:{"--pf-accent":"#60a5fa","--pf-back":"#0056b3","--pf-front":"rgba(0, 123, 255, 0.65)","--pf-hint":"#60a5fa"},yellow:{"--pf-accent":"#FFCC00","--pf-back":"#F0B400","--pf-front":"rgba(255, 204, 0, 0.72)","--pf-hint":"#FFCC00"}};function Uh(s,f){return(qh[s]??[]).filter(d=>Number(d.year)===f).length}const Mc=({label:s,text:f,testId:d,type:c,onEnter:p,accent:z="blue"})=>{const[q,E]=y.useState(!1),[k,v]=y.useState(""),U=y.useMemo(()=>{if(!c)return null;const R=k.trim().match(/^(20\d{2})\s*年?$/);if(!R)return null;const B=Number(R[1]),F=Uh(c,B);return{year:B,count:F}},[k,c]);return r.jsxs("div",{className:"pf-item","data-type":c??"kaoyan",style:Hh[z],children:[r.jsxs("div",{className:`folder-card${q?" open":""}`,"data-testid":d,onClick:()=>E(R=>!R),children:[r.jsxs("div",{className:"hint-wrapper",children:[r.jsx("span",{className:"hint-text",children:"Click to open"}),r.jsx("svg",{className:"hint-arrow",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22",stroke:"var(--pf-hint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r.jsxs("div",{className:"folder-container",children:[r.jsx("svg",{className:"folder-back",viewBox:"0 0 50 40",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z",fill:"var(--pf-back)"})}),c&&r.jsxs("div",{className:"folder-search",onClick:R=>R.stopPropagation(),children:[r.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",inputMode:"numeric",placeholder:"年份 如 2025",className:"search-input",value:k,"aria-label":`在 ${s} 中按年份搜索`,onChange:R=>{v(R.target.value.replace(/[^\d年]/g,"").slice(0,5))},onKeyDown:R=>{R.key==="Enter"&&(U!=null&&U.count)&&(R.preventDefault(),p(c??"kaoyan",U.year))}})]}),U&&r.jsx("div",{className:`year-hint${U.count?"":" is-empty"}`,"data-testid":`${d}-year-hint`,onClick:R=>{R.stopPropagation(),U.count&&p(c??"kaoyan",U.year)},children:U.count?r.jsxs(r.Fragment,{children:[r.jsxs("b",{children:[U.year," 年"]})," · ",U.count," 套 · 回车打开"]}):r.jsxs(r.Fragment,{children:[U.year," 年暂无试卷"]})}),r.jsxs("div",{className:"file file-5",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.jsx("polyline",{points:"21 15 16 10 5 21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 4.2 MB"})]}),r.jsxs("div",{className:"file file-4",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),r.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 128 MB"})]}),r.jsxs("div",{className:"file file-3",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 12 KB"})]}),r.jsxs("div",{className:"file file-2","data-testid":`${d}-enter`,onClick:R=>{R.stopPropagation(),p(c??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.jsx("polyline",{points:"10 9 9 9 8 9"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 1.1 MB"})]}),r.jsxs("div",{className:"file file-1","data-testid":`${d}-enter-top`,onClick:R=>{R.stopPropagation(),p(c??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),r.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 8.4 MB"})]}),r.jsxs("div",{className:"folder-front-wrapper",children:[r.jsx("svg",{className:"folder-front",viewBox:"0 0 50 34",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z",fill:"var(--pf-front)"})}),r.jsx("div",{className:"folder-label"}),r.jsxs("div",{className:"counter",children:[r.jsx("div",{className:"status-dot"}),r.jsx("span",{className:"counter-label",children:"FILES"}),r.jsx("span",{className:"counter-number","data-testid":`${d}-count`,children:U?U.count||"0":c?"All":"NEW"})]})]})]})]}),r.jsx("div",{className:"pf-caption",children:s})]})},Bh=({onEnter:s})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Yh}),r.jsxs("div",{className:"pe-train-head",children:[r.jsx("img",{className:"pe-train-title-img",src:Oh,alt:"真题研习札记",draggable:!1}),r.jsxs("div",{className:"pe-train-tabs",children:[r.jsx("button",{type:"button",className:"pe-train-tab is-on",children:"真题训练"}),r.jsx("button",{type:"button",className:"pe-train-tab",onClick:()=>window.alert("导入题目功能即将上线"),children:"导入题目"})]})]}),r.jsxs("div",{className:"pf-stage",children:[r.jsx(Mc,{label:"CET-4 英语四级",text:"CET-4",testId:"paper-entry-cet4",type:"cet4",onEnter:s}),r.jsx(Mc,{label:"CET-6 英语六级",text:"CET-6",testId:"paper-entry-cet6",type:"cet6",onEnter:s}),r.jsx(Mc,{label:"考研英语",text:"KAOYAN",testId:"paper-entry-kaoyan",accent:"yellow",onEnter:s})]})]}),Yh=`
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
/* 标题图：真题研习札记海报字（透明底 PNG，黑字）
   暗色模式 invert 让黑字变白，透明区域不受影响 */
.pe-train-title-img {
  height: 116px;
  width: auto;
  display: block;
  user-select: none;
  -webkit-user-select: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
}
[data-theme='dark'] .pe-train-title-img {
  filter: invert(1);
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
  gap: clamp(48px, 7.5vw, 150px); /* 随视口收缩，保证三个文件夹始终放得下 */
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
  /* 用户要求「左右间距大一点」：gap 48→clamp(72,8vw,120)，
     同时把 stage 侧留白 110→72、item 侧 padding 40→24 省出的宽度
     全部换成文件夹之间的间距（净间距 128→160+）。
     总宽 510+144+2G+144，视口 1330 + 侧边栏（内容 1066）时仍剩 ~55px 不换行 */
  .pf-stage {
    gap: clamp(72px, 8vw, 120px);
    padding: 0 72px;
  }
  .pf-item {
    padding: 70px 24px 30px;
  }
}

/* 平板（侧边栏可见，961~1329px）：强制三个文件夹同一行。
   关键：用 zoom 真实缩小布局占位（transform:scale 只缩视觉不缩布局，
   布局盒仍是 170px 导致平板内容区算不下就换行）。
   间距：space-between 让三个文件夹铺满内容区，配合更小的 stage 侧留白
   （56→28px）与略缩的卡片（zoom 0.9→0.85）把省下的宽度全部换成文件夹
   之间的间距，平板因此不再显得拥挤。max-width 限制铺开幅度，避免大窗口下
   三个文件夹散得过远。 */
@media (min-width: 961px) and (max-width: 1329px) {
  .pf-stage {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 88px; /* 最小间距（实际间距由 space-between 分配） */
    padding: 0 28px;
    max-width: 920px;
    margin-inline: auto;
  }
  .pf-item {
    padding: 70px 0 30px;
  }
  .folder-card {
    zoom: 0.85; /* 略缩卡片，把宽度让给文件夹间距 */
  }
}

/* 窄平板/大手机（侧边栏已隐藏，内容区=全宽，581~960px）：同样强制单行并铺开 */
@media (min-width: 581px) and (max-width: 960px) {
  .pf-stage {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 24px;
    padding: 0 28px;
  }
  .pf-item {
    padding: 50px 4px 20px;
  }
  .folder-card {
    zoom: 0.78;
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
  font-family: "Inter", sans-serif;
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
`,Gh=Ip,Xh=({activeType:s,initialYear:f="",onTypeChange:d,onOpenPaper:c,onBackToEntry:p})=>{const[z,q]=y.useState(""),[E,k]=y.useState(f),[v,U]=y.useState(""),[R,B]=y.useState(""),[F,I]=y.useState([]),[P,ue]=y.useState(null),[de,le]=y.useState(!1),[xe,ye]=y.useState(!1),ke=y.useRef(null),ce=y.useRef(null),fe=y.useRef(!1),be=y.useRef([]);y.useEffect(()=>{const m=w=>{const j=w.target;if(!(j instanceof HTMLElement)||!ke.current||!(j===ke.current||j.contains(ke.current)))return;const X=j.scrollTop>120;le(J=>J!==X?X:J),j.scrollTop>4&&(fe.current=!0);const Q=j.getBoundingClientRect(),h=Q.top+Q.height/2;let A=null,$=Number.POSITIVE_INFINITY;for(let J=1;J<be.current.length;J++){const pe=be.current[J];if(!pe)continue;const W=pe.getBoundingClientRect();if(W.top<=h&&W.bottom>=h){const Ae=Math.abs((W.top+W.bottom)/2-h);Ae<$&&($=Ae,A=J)}}A!==null?(ce.current=A,ue(A)):ce.current!==null&&(ue(J=>J===ce.current?null:J),ce.current=null)};return document.addEventListener("scroll",m,!0),()=>document.removeEventListener("scroll",m,!0)},[]),y.useEffect(()=>{const m=window.setTimeout(()=>{fe.current||(ce.current=0,ue(0))},5e3);return()=>window.clearTimeout(m)},[s]),y.useEffect(()=>{try{I(JSON.parse(localStorage.getItem("cet:history")||"[]"))}catch{I([])}},[]);const ne=Gh[s]??[],se=Vh(ne.map(m=>String(m.year??"")).filter(Boolean)),re=["12","07","06"],T=ne.filter(m=>{var $,J;const w=z.trim().toLowerCase(),j=(($=/^(20\d{2})\s*年?$/.exec(w))==null?void 0:$[1])??"",X=!w||!!j&&String(m.year)===j||m.title.toLowerCase().includes(w)||(m.desc||"").toLowerCase().includes(w),Q=!E||String(m.year)===E,h=!v||m.month===v,A=!R||((J=m.keyPoints)==null?void 0:J.readingLevel)===R;return X&&Q&&h&&A}),ie=[];for(let m=0;m<T.length;m+=3)ie.push(T.slice(m,m+3));be.current.length=ie.length;const ve=m=>F.filter(w=>w&&w.id===m).length,ze=m=>{ce.current=null,ue(m)};return r.jsxs("div",{ref:ke,className:`pl-root${de?" scrolled":""}`,children:[r.jsx("style",{children:Qh}),r.jsxs("div",{className:"pl-float",children:[r.jsxs("div",{className:"pl-float-bar",children:[r.jsxs("div",{className:"pl-float-left",children:[r.jsx("button",{className:"pl-fab",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Hp,{})}),r.jsx("button",{className:`pl-fab${xe?" on":""}`,onClick:()=>ye(m=>!m),"aria-label":"搜索",title:"搜索",children:r.jsx(Nc,{size:17})})]}),r.jsxs("div",{className:"pl-float-right",children:[r.jsxs("div",{className:"pl-fab-filters",children:[r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:E||"年"}),r.jsxs("select",{value:E,onChange:m=>k(m.target.value),"aria-label":"年份",children:[r.jsx("option",{value:"",children:"全部年份"}),se.map(m=>r.jsxs("option",{value:m,children:[m," 年"]},m))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:v?`${Number(v)}月`:"月"}),r.jsxs("select",{value:v,onChange:m=>U(m.target.value),"aria-label":"月份",children:[r.jsx("option",{value:"",children:"全部月份"}),re.map(m=>r.jsxs("option",{value:m,children:[Number(m)," 月"]},m))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:R||"难度"}),r.jsxs("select",{value:R,onChange:m=>B(m.target.value),"aria-label":"难度",children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]})]})]}),r.jsx("div",{className:"pl-fab-switch",children:["cet4","cet6"].map(m=>r.jsx("button",{onClick:()=>{d(m),q(""),k(""),U(""),B(""),ye(!1)},className:`pl-fab pl-num${s===m?" on":""}`,children:m==="cet4"?"4":"6"},m))})]})]}),de&&xe&&r.jsxs("div",{className:"pl-search-pop",children:[r.jsx(Nc,{size:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{autoFocus:!0,value:z,onChange:m=>q(m.target.value),placeholder:"搜索真题标题 / 年份 如 2025"}),r.jsxs("button",{className:"pl-pop-reset",onClick:()=>{q(""),k(""),U(""),B("")},children:[r.jsx(Np,{size:14,color:"var(--affine-text-secondary-color)"}),"重置"]})]})]}),r.jsxs("div",{className:"pl-inner",children:[r.jsxs("div",{className:"pl-head",children:[r.jsxs("div",{className:"pl-head-left",children:[r.jsx("button",{className:"pl-back-inline",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Hp,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"pl-h2",children:"真题试卷库"}),r.jsx("p",{className:"pl-sub",children:"收录历年 CET-4 / CET-6 真题，支持在线阅读与自测"})]})]}),r.jsx("div",{className:"pl-switch",children:["cet4","cet6"].map(m=>r.jsx("button",{onClick:()=>{d(m),q(""),k(""),U(""),B("")},className:`pl-switch-btn${s===m?" on":""}`,children:m==="cet4"?"英语四级 (CET-4)":"英语六级 (CET-6)"},m))})]}),r.jsxs("div",{className:"pl-filter",children:[r.jsxs("div",{className:"pl-search",children:[r.jsx(Nc,{size:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{value:z,onChange:m=>q(m.target.value),placeholder:"搜索真题标题 / 年份 如 2025"})]}),r.jsxs("select",{value:E,onChange:m=>k(m.target.value),children:[r.jsx("option",{value:"",children:"全部年份"}),se.map(m=>r.jsxs("option",{value:m,children:[m," 年"]},m))]}),r.jsxs("select",{value:v,onChange:m=>U(m.target.value),children:[r.jsx("option",{value:"",children:"全部月份"}),re.map(m=>r.jsxs("option",{value:m,children:[Number(m)," 月"]},m))]}),r.jsxs("select",{value:R,onChange:m=>B(m.target.value),children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]}),r.jsxs("button",{className:"pl-reset",onClick:()=>{q(""),k(""),U(""),B("")},children:[r.jsx(Np,{size:15,color:"var(--affine-text-secondary-color)"}),"重置"]}),r.jsxs("span",{className:"pl-count",children:["共 ",T.length," 套"]})]}),T.length===0?r.jsx("div",{className:"pl-empty",children:"没有符合条件的试卷"}):ie.map((m,w)=>{const j=P===w;return r.jsx("div",{className:"lion-container",ref:X=>{be.current[w]=X},children:m.map((X,Q)=>r.jsx(Zh,{paper:X,type:s,r:[-15,5,25][Q%3],submitted:ve(X.id),expanded:j,onOpen:()=>c(X),onActivate:()=>ze(w)},X.id))},w)})]})]})},Zh=({paper:s,type:f,r:d,submitted:c,expanded:p,onOpen:z,onActivate:q})=>{const E=s.keyPoints,[k,v]=y.useState(!1),U=()=>{p?v(le=>!le):q()},R=[{label:"听力重点",items:E==null?void 0:E.listening},{label:"阅读重点",items:E==null?void 0:E.reading},{label:"写作重点",items:E==null?void 0:E.writing},{label:"翻译主题",items:E==null?void 0:E.translation}],B=(E==null?void 0:E.readingDifficulty)??[],F=B.length?B.map((le,xe)=>`P${xe+1} ${le}`).join(" · "):"",I=/^(.*?)\s*([（(]\s*第[^）)]*[）)])\s*$/.exec(s.title.trim()),P=I?I[1].trim():s.title,ue=I?I[2]:"",de=["glass","pl-glass",p?"expanded":"",k?"flipped":""].filter(Boolean).join(" ");return r.jsxs("div",{className:de,"data-text":`${s.year}年`,style:{"--r":d},children:[r.jsxs("div",{className:"pl-face pl-face-front",children:[r.jsxs("div",{className:"pl-title",children:[r.jsx("span",{className:"pl-title-main",children:P}),ue&&r.jsx("span",{className:"pl-title-sub",children:ue})]}),r.jsxs("div",{className:"pl-meta",children:[r.jsx("span",{children:"已提交次数"}),r.jsxs("b",{children:[c," 次"]})]})]}),r.jsxs("div",{className:"pl-face pl-face-back",children:[r.jsx("div",{className:"pl-back-head",children:"考试重难点"}),F&&r.jsxs("div",{className:"pl-back-sec",children:[r.jsxs("div",{className:"pl-back-label",children:["阅读难度",(E==null?void 0:E.readingLevel)&&r.jsxs("span",{className:`rd-level lv-${E.readingLevel}`,children:["最难 ",E.readingLevel]})]}),r.jsx("div",{className:"pl-rd",children:B.map((le,xe)=>r.jsxs("span",{className:`rd-item lv-${le}`,children:["第",["一","二","三","四"][xe],"篇 ",le]},xe))})]}),R.map(le=>r.jsxs("div",{className:"pl-back-sec",children:[r.jsx("div",{className:"pl-back-label",children:le.label}),r.jsx("div",{className:"pl-back-text",children:le.items&&le.items.length>0?le.items.join(" · "):"—"})]},le.label)),r.jsx("div",{className:"pl-back-tip",children:"再次点击翻回"})]}),r.jsx("div",{className:"pl-hit",onClick:U}),r.jsxs("div",{className:"pl-actions",onClick:le=>le.stopPropagation(),children:[r.jsx("button",{className:"pl-btn-write",onClick:z,children:"write"}),r.jsx("button",{type:"button",className:"pl-btn-download",onClick:()=>window.alert("该真题 PDF 源文件暂未上传，可在线查看试卷内容"),children:"download"})]})]})};function Vh(s){return[...new Set(s)].sort((f,d)=>d.localeCompare(f))}const Hp=()=>r.jsx("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5.5 8 12l6.5 6.5"})}),Qh=`
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
`,$h=[{key:"yi",tip:"英语（一）",second:"学术学位 · 历年真题",bg:"#0E61AC",fg:"#ffffff"},{key:"er",tip:"英语（二）",second:"专业学位 · 历年真题",bg:"#FAF2E0",fg:"#0E61AC"}],Kh=({onPick:s,onBack:f})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Jh}),r.jsxs("div",{className:"ky-head",children:[r.jsx("button",{type:"button",className:"ky-back",onClick:f,children:"← 返回真题训练"}),r.jsx("h2",{className:"ky-title",children:"考研英语"}),r.jsx("p",{className:"ky-sub",children:"选择报考类型进入题库"})]}),r.jsx("div",{className:"ky-stage",children:r.jsx("div",{className:"cards","data-testid":"kaoyan-cards",children:$h.map(d=>r.jsxs("div",{className:"card","data-testid":`kaoyan-card-${d.key}`,style:{"--ky-bg":d.bg,"--ky-fg":d.fg},onClick:()=>s(d.key),children:[r.jsx("p",{className:"tip",children:d.tip}),r.jsx("p",{className:"second-text",children:d.second}),r.jsx("p",{className:"paper-foot",children:"硕士研究生入学考试"})]},d.key))})})]}),Jh=`
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
`,Wh=({onDetailChange:s})=>{const[f,d]=y.useState("cet4"),[c,p]=y.useState(!1),[z,q]=y.useState(null),[E,k]=y.useState(""),[v,U]=y.useState(!1);return y.useEffect(()=>(s==null||s(z!=null),()=>s==null?void 0:s(!1)),[z!=null,s]),r.jsx("div",{"data-testid":"paper-view",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",position:"relative",background:"var(--affine-background-secondary-color)",overflow:"auto",paddingBottom:z?0:"84px"},children:r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:v?r.jsx(Kh,{onPick:R=>{const B=R==="yi"?"英语（一）":"英语（二）";window.alert(`考研英语${B}题库即将上线`)},onBack:()=>U(!1)}):c?z?r.jsx(Th,{paper:z,type:f,onBack:()=>q(null)}):r.jsx(Xh,{activeType:f,initialYear:E,onTypeChange:R=>{d(R),k("")},onOpenPaper:q,onBackToEntry:()=>{q(null),p(!1)}}):r.jsx(Bh,{onEnter:(R,B)=>{if(R==="kaoyan"){U(!0);return}d(R),k(B?String(B):""),p(!0)}})})})},Up=16,ql=64,ho=12,Fh=50,Bp=23,Yp=44,Hc=[{name:"真题",Icon:Kp},{name:"听力",Icon:C2},{name:"阅读",Icon:$p},{name:"作文",Icon:S2},{name:"收藏",Icon:T2}];Hc.map(s=>s.name);const Ih={papers:Hc},Ca=(s,f,d)=>Math.min(Math.max(s,f),d);function Ph(s,f){const d=s/2,c=Math.max(f,1e-4),p=Math.sqrt(d*d+c*c),z=Math.atan2(d,c),q=p/2/Math.cos(z),E={x:d,y:q},k=2*(Math.PI/2-z),v=3*Math.PI/2-k,U=3*Math.PI/2+k;return{center:E,radius:q,startAngle:v,endAngle:U}}function em(s,f,d,c){const p=f/2,{center:z,radius:q,startAngle:E,endAngle:k}=s,v=(I,P)=>({x:z.x+I*Math.cos(P)+d,y:z.y+I*Math.sin(P)+c}),U=v(q+p,E),R=v(q+p,k),B=v(q-p,E),F=v(q-p,k);return[`M ${U.x.toFixed(2)} ${U.y.toFixed(2)}`,`A ${q+p} ${q+p} 0 0 1 ${R.x.toFixed(2)} ${R.y.toFixed(2)}`,`A ${p} ${p} 0 0 1 ${F.x.toFixed(2)} ${F.y.toFixed(2)}`,`A ${q-p} ${q-p} 0 0 0 ${B.x.toFixed(2)} ${B.y.toFixed(2)}`,`A ${p} ${p} 0 0 1 ${U.x.toFixed(2)} ${U.y.toFixed(2)}`,"Z"].join(" ")}function tm({tabs:s,activeIndex:f,onTabChange:d}){const c=y.useRef(null),p=y.useRef(null),[z,q]=y.useState(0),[E,k]=y.useState(!1),[v,U]=y.useState(0),R=s&&s.length>0?s:Hc,B=R.length,F=y.useMemo(()=>{if(z<=0)return null;const m=Math.max(z-ql,1),w=Ph(m,Up),j=w.radius,X=z/2,Q=j+ql/2,h=m/2,A=Up+ql,$=(z-ho*2)/B,J=Array.from({length:B},(Xe,Ne)=>ho+$*(Ne+.5)),pe=Math.min($*1.12,84),W=em(w,ql,ql/2,ql/2);return{radius:j,centerX:X,centerY:Q,halfSpan:h,barHeight:A,slotWidth:$,tabCenters:J,pillWidth:pe,path:W,centerlineY:Xe=>{const Ne=Ca(Xe-X,-h,h);return Q-Math.sqrt(Math.max(j*j-Ne*Ne,0))}}},[z,B]);y.useLayoutEffect(()=>{const m=c.current;if(!m)return;const w=()=>q(m.clientWidth);w();const j=new ResizeObserver(w);return j.observe(m),()=>j.disconnect()},[]),y.useEffect(()=>{F&&(E||U(F.tabCenters[Ca(f,0,B-1)]))},[F,f,E,B]);const I=m=>{m.currentTarget.setPointerCapture(m.pointerId),p.current={startX:m.clientX,startCenter:v},k(!0)},P=m=>{if(!E||!p.current||!F)return;const w=m.clientX-p.current.startX,j=Ca(p.current.startCenter+w,F.tabCenters[0],F.tabCenters[B-1]);U(j)},ue=m=>{if(!E||!p.current||!F)return;k(!1);const w=Math.abs(m.clientX-p.current.startX);let j;if(w<6){const X=c.current.getBoundingClientRect(),Q=m.clientX-X.left;j=Ca(Math.round((Q-ho)/F.slotWidth-.5),0,B-1)}else j=Ca(Math.round((v-ho)/F.slotWidth-.5),0,B-1);d(j),U(F.tabCenters[j])};if(!F)return r.jsx("div",{className:"cet-curved-wrap",children:r.jsx("div",{className:"cet-curved-bar",ref:c})});const{radius:de,centerX:le,centerY:xe,halfSpan:ye,barHeight:ke,slotWidth:ce,tabCenters:fe,pillWidth:be,path:ne,centerlineY:se}=F,re=Ca(v-le,-ye,ye),T=Math.sqrt(Math.max(de*de-re*re,0)),ie=xe-T-Fh/2,ve=Math.atan2(re,T),ze=v-be/2;return r.jsx("div",{className:"cet-curved-wrap",children:r.jsxs("div",{className:"cet-curved-bar",ref:c,style:{height:ke},onPointerDown:I,onPointerMove:P,onPointerUp:ue,onPointerCancel:ue,children:[r.jsx("div",{className:"cet-curved-surface",style:{clipPath:`path("${ne}")`,WebkitClipPath:`path("${ne}")`}}),R.map((m,w)=>{const j=fe[w],X=Ca(j-le,-ye,ye),Q=se(j),h=Math.atan2(X,Math.sqrt(Math.max(de*de-X*X,0))),A=Math.abs(v-j),$=Ca(1-A/(ce*.55),0,1),J=1-$,pe=m.Icon;return r.jsxs("div",{className:"cet-curved-icon",title:m.name,"aria-label":m.name,role:"button",tabIndex:0,onKeyDown:W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),d(w))},style:{left:j-Yp/2,top:Q-Yp/2,transform:`rotate(${h}rad)`},children:[r.jsx("span",{className:"glyph idle",style:{opacity:J},children:r.jsx(pe,{size:Bp})}),r.jsx("span",{className:"glyph active",style:{opacity:$},children:r.jsx(pe,{size:Bp})})]},m.name)}),r.jsx("div",{className:`cet-curved-pill${E?" dragging":""}`,style:{left:ze,top:ie,width:be,transform:`rotate(${ve}rad)`}})]})})}const nm=""+new URL("strifide-logo-BmHNU7aV.png",import.meta.url).href,am="readest-embed",lm="https://readest-reader.app.workbuddy.host/?sharecode=TGFQZN4HMT";function im(){const f=`${"./".replace(/\/$/,"")}/${am}/readest-embed.js`;return new URL(f,document.baseURI).href}function xo(){}function rm(){const s=y.useRef(null),f=y.useRef(null),[d,c]=y.useState("loading"),[p,z]=y.useState(!1),[q,E]=y.useState(0);y.useEffect(()=>{const v=s.current;if(!v)return;let U=!1,R;return c("loading"),z(!1),(async()=>{try{const B=await import(im());if(U)return;const F=B.mountReadest??B.default;if(typeof F!="function")throw new Error("readest-embed 未导出 mountReadest");const I=F({container:v,initialPath:"/library"});if(U){typeof I=="function"&&I();return}f.current=typeof I=="function"?I:null,c("ready"),z(!0),R=window.setTimeout(()=>{U||z(!1)},700)}catch(B){if(U)return;console.error("[literature-view] 原生挂载 Readest 失败：",B),c("error")}})(),()=>{if(U=!0,R&&window.clearTimeout(R),f.current){try{f.current()}catch{}f.current=null}}},[q]);const k=d!=="ready"||p;return r.jsxs("div",{className:"lit-wrap",children:[r.jsx("div",{ref:s,className:"lit-embed-host","aria-hidden":d!=="ready"}),k&&r.jsx("div",{className:`lit-loading${p?" is-fading":""}`,"aria-live":"polite","aria-busy":d==="loading",children:d==="error"?r.jsxs("div",{className:"lit-error",children:[r.jsx("div",{className:"lit-error-icon",children:"📕"}),r.jsx("div",{className:"lit-error-title",children:"阅读器加载失败"}),r.jsx("div",{className:"lit-error-sub",children:"本地文献阅读内核未能启动。你可以换成在远程打开，或稍后重试。"}),r.jsxs("div",{className:"lit-actions",children:[r.jsx("a",{className:"lit-btn lit-btn-primary",href:lm,target:"_blank",rel:"noopener noreferrer",children:"在远程打开 Readest"}),r.jsx("button",{className:"lit-btn",onClick:()=>E(v=>v+1),children:"重试"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"lit-goo-stage",children:[r.jsx("span",{className:"lit-goo-blob lit-goo-blob--l"}),r.jsx("span",{className:"lit-goo-blob lit-goo-blob--r"})]}),r.jsx("div",{className:"lit-loading-text",children:"正在加载文献阅读器…"}),r.jsx("div",{className:"lit-loading-sub",children:"首次打开稍慢，正在载入阅读内核"})]})})]})}const Pp=[{title:"习题集",items:[{key:"papers",label:"真题库",Icon:Kp}]},{title:"学习",items:[{key:"words",label:"单词背诵",Icon:$p},{key:"notes",label:"笔记",Icon:_2}]},{title:"整理",items:[{key:"reading",label:"文献阅读",Icon:M2}]}];function om({active:s,onNavigate:f,collapsed:d,onCollapse:c,userName:p,onUserCardClick:z,avatarUrl:q,onAvatarSelect:E}){const k=y.useRef(null),{theme:v,setTheme:U}=c2(),R=v==="dark";return r.jsxs("aside",{className:`sb-card${d?" is-collapsed":""}`,"data-testid":"side-bar",children:[r.jsxs("div",{className:"sb-lights",children:[r.jsx("span",{className:"sb-light sb-light-r"}),r.jsx("span",{className:"sb-light sb-light-y"}),r.jsx("span",{className:"sb-light sb-light-g"}),r.jsx("button",{type:"button",className:"sb-collapse-btn",title:"收起侧边栏","aria-label":"收起侧边栏",onClick:c,children:r.jsx(z2,{size:17})})]}),r.jsx("div",{className:"sb-logo-row",children:r.jsx("img",{className:"sb-logo-img",src:nm,alt:"STRIFIED 奋斗前行",draggable:!1})}),r.jsx("nav",{className:"sb-nav",children:Pp.map(B=>r.jsxs("div",{className:"sb-group",children:[r.jsx("div",{className:"sb-group-title",children:B.title}),B.items.map(F=>{const I=F.Icon,P=s===F.key;return r.jsxs("button",{type:"button",className:`sb-item${P?" is-active":""}`,onClick:()=>f(F.key),onMouseEnter:F.key==="reading"?xo:void 0,onFocus:F.key==="reading"?xo:void 0,children:[r.jsx(I,{size:18}),r.jsx("span",{className:"sb-item-label",children:F.label})]},F.key)})]},B.title))}),r.jsxs("button",{type:"button",className:`sb-user-card${p?" is-logged-in":""}`,"data-testid":"user-card",title:p?`已登录：${p}`:"点击登录",onClick:z,children:[r.jsxs("span",{className:"sb-avatar sb-avatar-btn",role:"button",title:"更换头像","aria-label":"更换头像","data-testid":"avatar-btn",onClick:B=>{var F;B.stopPropagation(),(F=k.current)==null||F.click()},children:[q?r.jsx("img",{src:q,alt:"头像"}):r.jsx(Qp,{size:22}),r.jsx("span",{className:"sb-avatar-edit",children:r.jsx(j2,{size:10})})]}),r.jsxs("span",{className:"sb-user-meta",children:[r.jsx("span",{className:"sb-user-name",children:p||"MIAO"}),r.jsx("span",{className:"sb-user-role",children:p?"已登录":"Designer"})]}),r.jsx("input",{ref:k,type:"file",accept:"image/*",style:{display:"none"},onChange:B=>{var I;const F=(I=B.target.files)==null?void 0:I[0];F&&E(F),B.target.value=""}})]}),r.jsxs("div",{className:"sb-footer",children:[r.jsxs("button",{type:"button",className:"sb-item",children:[r.jsx(E2,{size:18}),r.jsx("span",{className:"sb-item-label",children:"设置"})]}),r.jsxs("label",{className:"theme-switch sb-theme-toggle",title:"切换深色 / 浅色模式",children:[r.jsx("input",{type:"checkbox",className:"theme-switch__checkbox",checked:R,onChange:B=>U(B.target.checked?"dark":"light")}),r.jsxs("div",{className:"theme-switch__container",children:[r.jsx("div",{className:"theme-switch__clouds"}),r.jsx("div",{className:"theme-switch__stars-container",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144 55",fill:"none",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",fill:"currentColor"})})}),r.jsx("div",{className:"theme-switch__circle-container",children:r.jsx("div",{className:"theme-switch__sun-moon-container",children:r.jsxs("div",{className:"theme-switch__moon",children:[r.jsx("div",{className:"theme-switch__spot"}),r.jsx("div",{className:"theme-switch__spot"}),r.jsx("div",{className:"theme-switch__spot"})]})})})]})]})]})]})}const sm=264,cm=Object.fromEntries(Pp.flatMap(s=>s.items.map(f=>[f.key,f.label])));function um({open:s,onClose:f,onLogin:d,avatarUrl:c}){const[p,z]=y.useState(""),[q,E]=y.useState(""),[k,v]=y.useState(""),[U,R]=y.useState(!1),B=y.useRef(null);if(y.useEffect(()=>{if(!s)return;z(""),E(""),v(""),R(!1);const I=setTimeout(()=>{var ue;return(ue=B.current)==null?void 0:ue.focus()},120),P=ue=>{ue.key==="Escape"&&f()};return window.addEventListener("keydown",P),()=>{clearTimeout(I),window.removeEventListener("keydown",P)}},[s,f]),!s)return null;const F=I=>{var P;if(I.preventDefault(),!U){if(!p.trim()){v("请输入用户名"),(P=B.current)==null||P.focus();return}if(!q){v("请输入密码");return}v(""),R(!0),setTimeout(()=>{R(!1),d(p.trim())},600)}};return r.jsx("div",{className:"lv-mask","data-testid":"login-view",onMouseDown:I=>I.target===I.currentTarget&&f(),children:r.jsxs("div",{className:"lv-card",role:"dialog","aria-modal":"true","aria-label":"用户登录",children:[r.jsx("button",{type:"button",className:"lv-close","aria-label":"关闭",onClick:f,children:r.jsx(A2,{size:17})}),r.jsxs("div",{className:"lv-head",children:[r.jsx("span",{className:"lv-avatar",children:c?r.jsx("img",{src:c,alt:"头像"}):r.jsx(Qp,{size:26})}),r.jsx("div",{className:"lv-title",children:"用户登录"}),r.jsx("div",{className:"lv-sub",children:"STRIFIDE 奋斗前行 · 学习平台"})]}),r.jsxs("form",{className:"lv-form",onSubmit:F,children:[r.jsxs("label",{className:"lv-field",children:[r.jsx("span",{className:"lv-field-icon",children:r.jsx(R2,{size:16})}),r.jsx("input",{ref:B,value:p,onChange:I=>z(I.target.value),placeholder:"用户名",autoComplete:"username",maxLength:24})]}),r.jsxs("label",{className:"lv-field",children:[r.jsx("span",{className:"lv-field-icon",children:r.jsx(D2,{size:16})}),r.jsx("input",{type:"password",value:q,onChange:I=>E(I.target.value),placeholder:"密码",autoComplete:"current-password",maxLength:32})]}),k&&r.jsx("div",{className:"lv-err",children:k}),r.jsxs("button",{type:"submit",className:`lv-btn${U?" is-busy":""}`,disabled:U,children:[r.jsx(L2,{size:17}),r.jsx("span",{children:U?"登录中…":"登 录"})]}),r.jsxs("div",{className:"lv-links",children:[r.jsx("button",{type:"button",className:"lv-link",children:"注册账号"}),r.jsx("span",{className:"lv-dot",children:"·"}),r.jsx("button",{type:"button",className:"lv-link",children:"忘记密码"})]})]})]})})}function Gp({title:s}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,padding:"24px 24px 96px",textAlign:"center",color:"var(--affine-text-secondary-color)",background:"var(--affine-background-secondary-color)"},children:[r.jsx("div",{style:{fontSize:40},children:"🚧"}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"var(--affine-text-primary-color)"},children:s}),r.jsx("div",{style:{fontSize:13,opacity:.7},children:"该界面待开发，敬请期待"})]})}const dm=()=>{var ke;const[s,f]=y.useState({}),[d,c]=y.useState("papers"),p=Ih[d]??[],z=s[d]??0,q=ce=>f(fe=>({...fe,[d]:ce})),[E,k]=y.useState(!1),[v,U]=y.useState(!1),[R,B]=y.useState(()=>localStorage.getItem("cet-user-name")),[F,I]=y.useState(!1),[P,ue]=y.useState(()=>localStorage.getItem("cet-user-avatar")),de=ce=>{localStorage.setItem("cet-user-name",ce),B(ce),I(!1)},le=ce=>{if(!ce.type.startsWith("image/"))return;const fe=new FileReader;fe.onload=()=>{const be=new Image;be.onload=()=>{const se=document.createElement("canvas");se.width=160,se.height=160;const re=se.getContext("2d");if(!re)return;const T=Math.min(be.width,be.height),ie=(be.width-T)/2,ve=(be.height-T)/2;re.drawImage(be,ie,ve,T,T,0,0,160,160);const ze=se.toDataURL("image/jpeg",.85);localStorage.setItem("cet-user-avatar",ze),ue(ze)},be.src=fe.result},fe.readAsDataURL(ce)};let xe;d==="papers"?xe=z===0?r.jsx(Wh,{onDetailChange:U}):r.jsx(Gp,{title:((ke=p[z])==null?void 0:ke.name)??"板块"}):d==="reading"?xe=r.jsx(rm,{}):xe=r.jsx(Gp,{title:cm[d]??"界面"}),y.useEffect(()=>{(be=>"requestIdleCallback"in window?window.requestIdleCallback(be):setTimeout(be,800))(xo);const fe=setInterval(xo,2.5*60*1e3);return()=>clearInterval(fe)},[]);const ye=ce=>{U(!1),c(ce),f(fe=>({...fe,[ce]:0}))};return r.jsxs(r.Fragment,{children:[r.jsx(om,{active:d,onNavigate:ye,collapsed:E,onCollapse:()=>k(!0),userName:R??void 0,onUserCardClick:()=>I(!0),avatarUrl:P,onAvatarSelect:le}),E&&r.jsx("button",{type:"button",className:"sb-expand-btn",title:"展开侧边栏","aria-label":"展开侧边栏",onClick:()=>k(!1),children:r.jsx(N2,{size:18})}),r.jsx("div",{className:`sb-content-offset${E?" sb-full":""}`,style:{height:"100%",display:"flex",flexDirection:"column",boxSizing:"border-box",paddingLeft:E?0:sm},children:xe}),p.length>0&&!v&&r.jsx("div",{className:`sb-nav-overlay${E?" sb-full":""}`,children:r.jsx(tm,{tabs:p,activeIndex:z,onTabChange:q})}),r.jsx(um,{open:F,onClose:()=>I(!1),onLogin:de,avatarUrl:P})]})},e0=document.getElementById("root");if(!e0)throw new Error("#root missing");document.documentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0";document.body.style.fontFamily="var(--affine-font-family)";const Xp=document.getElementById("root");Xp&&(Xp.style.height="100%");document.body.style.background="var(--affine-background-secondary-color)";w2.createRoot(e0).render(r.jsx(y.StrictMode,{children:r.jsx(u2,{attribute:"data-theme",defaultTheme:"light",enableSystem:!1,children:r.jsx(dm,{})})}));
