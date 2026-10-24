(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const S of p)if(S.type==="childList")for(const b of S.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function u(p){const S={};return p.integrity&&(S.integrity=p.integrity),p.referrerPolicy&&(S.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?S.credentials="include":p.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function s(p){if(p.ep)return;p.ep=!0;const S=u(p);fetch(p.href,S)}})();var js={exports:{}},Ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function s2(){if(vp)return Ii;vp=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function u(s,p,S){var b=null;if(S!==void 0&&(b=""+S),p.key!==void 0&&(b=""+p.key),"key"in p){S={};for(var A in p)A!=="key"&&(S[A]=p[A])}else S=p;return p=S.ref,{$$typeof:o,type:s,key:b,ref:p!==void 0?p:null,props:S}}return Ii.Fragment=f,Ii.jsx=u,Ii.jsxs=u,Ii}var wp;function u2(){return wp||(wp=1,js.exports=s2()),js.exports}var r=u2(),Cs={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function d2(){if(Sp)return Te;Sp=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),b=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),U=Symbol.iterator;function K(m){return m===null||typeof m!="object"?null:(m=U&&m[U]||m["@@iterator"],typeof m=="function"?m:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,se={};function le(m,_,Z){this.props=m,this.context=_,this.refs=se,this.updater=Z||P}le.prototype.isReactComponent={},le.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},le.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function W(){}W.prototype=le.prototype;function me(m,_,Z){this.props=m,this.context=_,this.refs=se,this.updater=Z||P}var ye=me.prototype=new W;ye.constructor=me,ee(ye,le.prototype),ye.isPureReactComponent=!0;var je=Array.isArray;function xe(){}var ve={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function re(m,_,Z){var te=Z.ref;return{$$typeof:o,type:m,key:_,ref:te!==void 0?te:null,props:Z}}function fe(m,_){return re(m.type,_,m.props)}function ne(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function N(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Z){return _[Z]})}var ce=/\/+/g;function de(m,_){return typeof m=="object"&&m!==null&&m.key!=null?N(""+m.key):_.toString(36)}function Le(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(xe,xe):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function y(m,_,Z,te,pe){var I=typeof m;(I==="undefined"||I==="boolean")&&(m=null);var Ne=!1;if(m===null)Ne=!0;else switch(I){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(m.$$typeof){case o:case f:Ne=!0;break;case q:return Ne=m._init,y(Ne(m._payload),_,Z,te,pe)}}if(Ne)return pe=pe(m),Ne=te===""?"."+de(m,0):te,je(pe)?(Z="",Ne!=null&&(Z=Ne.replace(ce,"$&/")+"/"),y(pe,_,Z,"",function(Ie){return Ie})):pe!=null&&(ne(pe)&&(pe=fe(pe,Z+(pe.key==null||m&&m.key===pe.key?"":(""+pe.key).replace(ce,"$&/")+"/")+Ne)),_.push(pe)),1;Ne=0;var Ke=te===""?".":te+":";if(je(m))for(var De=0;De<m.length;De++)te=m[De],I=Ke+de(te,De),Ne+=y(te,_,Z,I,pe);else if(De=K(m),typeof De=="function")for(m=De.call(m),De=0;!(te=m.next()).done;)te=te.value,I=Ke+de(te,De++),Ne+=y(te,_,Z,I,pe);else if(I==="object"){if(typeof m.then=="function")return y(Le(m),_,Z,te,pe);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function j(m,_,Z){if(m==null)return m;var te=[],pe=0;return y(m,te,"","",function(I){return _.call(Z,I,pe++)}),te}function D(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(Z){(m._status===0||m._status===-1)&&(m._status=1,m._result=Z)},function(Z){(m._status===0||m._status===-1)&&(m._status=2,m._result=Z)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var X=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},J={map:j,forEach:function(m,_,Z){j(m,function(){_.apply(this,arguments)},Z)},count:function(m){var _=0;return j(m,function(){_++}),_},toArray:function(m){return j(m,function(_){return _})||[]},only:function(m){if(!ne(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return Te.Activity=L,Te.Children=J,Te.Component=le,Te.Fragment=u,Te.Profiler=p,Te.PureComponent=me,Te.StrictMode=s,Te.Suspense=w,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve,Te.__COMPILER_RUNTIME={__proto__:null,c:function(m){return ve.H.useMemoCache(m)}},Te.cache=function(m){return function(){return m.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(m,_,Z){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var te=ee({},m.props),pe=m.key;if(_!=null)for(I in _.key!==void 0&&(pe=""+_.key),_)!ze.call(_,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&_.ref===void 0||(te[I]=_[I]);var I=arguments.length-2;if(I===1)te.children=Z;else if(1<I){for(var Ne=Array(I),Ke=0;Ke<I;Ke++)Ne[Ke]=arguments[Ke+2];te.children=Ne}return re(m.type,pe,te)},Te.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:S,_context:m},m},Te.createElement=function(m,_,Z){var te,pe={},I=null;if(_!=null)for(te in _.key!==void 0&&(I=""+_.key),_)ze.call(_,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(pe[te]=_[te]);var Ne=arguments.length-2;if(Ne===1)pe.children=Z;else if(1<Ne){for(var Ke=Array(Ne),De=0;De<Ne;De++)Ke[De]=arguments[De+2];pe.children=Ke}if(m&&m.defaultProps)for(te in Ne=m.defaultProps,Ne)pe[te]===void 0&&(pe[te]=Ne[te]);return re(m,I,pe)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(m){return{$$typeof:A,render:m}},Te.isValidElement=ne,Te.lazy=function(m){return{$$typeof:q,_payload:{_status:-1,_result:m},_init:D}},Te.memo=function(m,_){return{$$typeof:k,type:m,compare:_===void 0?null:_}},Te.startTransition=function(m){var _=ve.T,Z={};ve.T=Z;try{var te=m(),pe=ve.S;pe!==null&&pe(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(xe,X)}catch(I){X(I)}finally{_!==null&&Z.types!==null&&(_.types=Z.types),ve.T=_}},Te.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()},Te.use=function(m){return ve.H.use(m)},Te.useActionState=function(m,_,Z){return ve.H.useActionState(m,_,Z)},Te.useCallback=function(m,_){return ve.H.useCallback(m,_)},Te.useContext=function(m){return ve.H.useContext(m)},Te.useDebugValue=function(){},Te.useDeferredValue=function(m,_){return ve.H.useDeferredValue(m,_)},Te.useEffect=function(m,_){return ve.H.useEffect(m,_)},Te.useEffectEvent=function(m){return ve.H.useEffectEvent(m)},Te.useId=function(){return ve.H.useId()},Te.useImperativeHandle=function(m,_,Z){return ve.H.useImperativeHandle(m,_,Z)},Te.useInsertionEffect=function(m,_){return ve.H.useInsertionEffect(m,_)},Te.useLayoutEffect=function(m,_){return ve.H.useLayoutEffect(m,_)},Te.useMemo=function(m,_){return ve.H.useMemo(m,_)},Te.useOptimistic=function(m,_){return ve.H.useOptimistic(m,_)},Te.useReducer=function(m,_,Z){return ve.H.useReducer(m,_,Z)},Te.useRef=function(m){return ve.H.useRef(m)},Te.useState=function(m){return ve.H.useState(m)},Te.useSyncExternalStore=function(m,_,Z){return ve.H.useSyncExternalStore(m,_,Z)},Te.useTransition=function(){return ve.H.useTransition()},Te.version="19.2.1",Te}var kp;function Us(){return kp||(kp=1,Cs.exports=d2()),Cs.exports}var h=Us(),f2=(o,f,u,s,p,S,b,A)=>{let w=document.documentElement,k=["light","dark"];function q(K){(Array.isArray(o)?o:[o]).forEach(P=>{let ee=P==="class",se=ee&&S?p.map(le=>S[le]||le):p;ee?(w.classList.remove(...se),w.classList.add(S&&S[K]?S[K]:K)):w.setAttribute(P,K)}),L(K)}function L(K){A&&k.includes(K)&&(w.style.colorScheme=K)}function U(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)q(s);else try{let K=localStorage.getItem(f)||u,P=b&&K==="system"?U():K;q(P)}catch{}},jp=["light","dark"],Wp="(prefers-color-scheme: dark)",p2=typeof window>"u",Ip=h.createContext(void 0),h2=o=>h.useContext(Ip)?h.createElement(h.Fragment,null,o.children):h.createElement(g2,{...o}),m2=["light","dark"],g2=({forcedTheme:o,disableTransitionOnChange:f=!1,enableSystem:u=!0,enableColorScheme:s=!0,storageKey:p="theme",themes:S=m2,defaultTheme:b=u?"system":"light",attribute:A="data-theme",value:w,children:k,nonce:q,scriptProps:L})=>{let[U,K]=h.useState(()=>y2(p,b)),[P,ee]=h.useState(()=>U==="system"?As():U),se=w?Object.values(w):S,le=h.useCallback(je=>{let xe=je;if(!xe)return;je==="system"&&u&&(xe=As());let ve=w?w[xe]:xe,ze=f?b2(q):null,re=document.documentElement,fe=ne=>{ne==="class"?(re.classList.remove(...se),ve&&re.classList.add(ve)):ne.startsWith("data-")&&(ve?re.setAttribute(ne,ve):re.removeAttribute(ne))};if(Array.isArray(A)?A.forEach(fe):fe(A),s){let ne=jp.includes(b)?b:null,N=jp.includes(xe)?xe:ne;re.style.colorScheme=N}ze==null||ze()},[q]),W=h.useCallback(je=>{let xe=typeof je=="function"?je(U):je;K(xe);try{localStorage.setItem(p,xe)}catch{}},[U]),me=h.useCallback(je=>{let xe=As(je);ee(xe),U==="system"&&u&&!o&&le("system")},[U,o]);h.useEffect(()=>{let je=window.matchMedia(Wp);return je.addListener(me),me(je),()=>je.removeListener(me)},[me]),h.useEffect(()=>{let je=xe=>{xe.key===p&&(xe.newValue?K(xe.newValue):W(b))};return window.addEventListener("storage",je),()=>window.removeEventListener("storage",je)},[W]),h.useEffect(()=>{le(o??U)},[o,U]);let ye=h.useMemo(()=>({theme:U,setTheme:W,forcedTheme:o,resolvedTheme:U==="system"?P:U,themes:u?[...S,"system"]:S,systemTheme:u?P:void 0}),[U,W,o,P,u,S]);return h.createElement(Ip.Provider,{value:ye},h.createElement(x2,{forcedTheme:o,storageKey:p,attribute:A,enableSystem:u,enableColorScheme:s,defaultTheme:b,value:w,themes:S,nonce:q,scriptProps:L}),k)},x2=h.memo(({forcedTheme:o,storageKey:f,attribute:u,enableSystem:s,enableColorScheme:p,defaultTheme:S,value:b,themes:A,nonce:w,scriptProps:k})=>{let q=JSON.stringify([u,f,S,o,A,b,s,p]).slice(1,-1);return h.createElement("script",{...k,suppressHydrationWarning:!0,nonce:typeof window>"u"?w:"",dangerouslySetInnerHTML:{__html:`(${f2.toString()})(${q})`}})}),y2=(o,f)=>{if(p2)return;let u;try{u=localStorage.getItem(o)||void 0}catch{}return u||f},b2=o=>{let f=document.createElement("style");return o&&f.setAttribute("nonce",o),f.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(f),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(f)},1)}},As=o=>(o||(o=window.matchMedia(Wp)),o.matches?"dark":"light"),_s={exports:{}},Pi={},Es={exports:{}},zs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function v2(){return Cp||(Cp=1,(function(o){function f(y,j){var D=y.length;y.push(j);e:for(;0<D;){var X=D-1>>>1,J=y[X];if(0<p(J,j))y[X]=j,y[D]=J,D=X;else break e}}function u(y){return y.length===0?null:y[0]}function s(y){if(y.length===0)return null;var j=y[0],D=y.pop();if(D!==j){y[0]=D;e:for(var X=0,J=y.length,m=J>>>1;X<m;){var _=2*(X+1)-1,Z=y[_],te=_+1,pe=y[te];if(0>p(Z,D))te<J&&0>p(pe,Z)?(y[X]=pe,y[te]=D,X=te):(y[X]=Z,y[_]=D,X=_);else if(te<J&&0>p(pe,D))y[X]=pe,y[te]=D,X=te;else break e}}return j}function p(y,j){var D=y.sortIndex-j.sortIndex;return D!==0?D:y.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;o.unstable_now=function(){return S.now()}}else{var b=Date,A=b.now();o.unstable_now=function(){return b.now()-A}}var w=[],k=[],q=1,L=null,U=3,K=!1,P=!1,ee=!1,se=!1,le=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function ye(y){for(var j=u(k);j!==null;){if(j.callback===null)s(k);else if(j.startTime<=y)s(k),j.sortIndex=j.expirationTime,f(w,j);else break;j=u(k)}}function je(y){if(ee=!1,ye(y),!P)if(u(w)!==null)P=!0,xe||(xe=!0,N());else{var j=u(k);j!==null&&Le(je,j.startTime-y)}}var xe=!1,ve=-1,ze=5,re=-1;function fe(){return se?!0:!(o.unstable_now()-re<ze)}function ne(){if(se=!1,xe){var y=o.unstable_now();re=y;var j=!0;try{e:{P=!1,ee&&(ee=!1,W(ve),ve=-1),K=!0;var D=U;try{t:{for(ye(y),L=u(w);L!==null&&!(L.expirationTime>y&&fe());){var X=L.callback;if(typeof X=="function"){L.callback=null,U=L.priorityLevel;var J=X(L.expirationTime<=y);if(y=o.unstable_now(),typeof J=="function"){L.callback=J,ye(y),j=!0;break t}L===u(w)&&s(w),ye(y)}else s(w);L=u(w)}if(L!==null)j=!0;else{var m=u(k);m!==null&&Le(je,m.startTime-y),j=!1}}break e}finally{L=null,U=D,K=!1}j=void 0}}finally{j?N():xe=!1}}}var N;if(typeof me=="function")N=function(){me(ne)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=ne,N=function(){de.postMessage(null)}}else N=function(){le(ne,0)};function Le(y,j){ve=le(function(){y(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(y){y.callback=null},o.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<y?Math.floor(1e3/y):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(y){switch(U){case 1:case 2:case 3:var j=3;break;default:j=U}var D=U;U=j;try{return y()}finally{U=D}},o.unstable_requestPaint=function(){se=!0},o.unstable_runWithPriority=function(y,j){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var D=U;U=y;try{return j()}finally{U=D}},o.unstable_scheduleCallback=function(y,j,D){var X=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?X+D:X):D=X,y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=D+J,y={id:q++,callback:j,priorityLevel:y,startTime:D,expirationTime:J,sortIndex:-1},D>X?(y.sortIndex=D,f(k,y),u(w)===null&&y===u(k)&&(ee?(W(ve),ve=-1):ee=!0,Le(je,D-X))):(y.sortIndex=J,f(w,y),P||K||(P=!0,xe||(xe=!0,N()))),y},o.unstable_shouldYield=fe,o.unstable_wrapCallback=function(y){var j=U;return function(){var D=U;U=j;try{return y.apply(this,arguments)}finally{U=D}}}})(zs)),zs}var Ap;function w2(){return Ap||(Ap=1,Es.exports=v2()),Es.exports}var Ns={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function S2(){if(_p)return an;_p=1;var o=Us();function f(w){var k="https://react.dev/errors/"+w;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)k+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+w+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(f(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function S(w,k,q){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:L==null?null:""+L,children:w,containerInfo:k,implementation:q}}var b=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(w,k){if(w==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(w,k){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(f(299));return S(w,k,null,q)},an.flushSync=function(w){var k=b.T,q=s.p;try{if(b.T=null,s.p=2,w)return w()}finally{b.T=k,s.p=q,s.d.f()}},an.preconnect=function(w,k){typeof w=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,s.d.C(w,k))},an.prefetchDNS=function(w){typeof w=="string"&&s.d.D(w)},an.preinit=function(w,k){if(typeof w=="string"&&k&&typeof k.as=="string"){var q=k.as,L=A(q,k.crossOrigin),U=typeof k.integrity=="string"?k.integrity:void 0,K=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;q==="style"?s.d.S(w,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:L,integrity:U,fetchPriority:K}):q==="script"&&s.d.X(w,{crossOrigin:L,integrity:U,fetchPriority:K,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},an.preinitModule=function(w,k){if(typeof w=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var q=A(k.as,k.crossOrigin);s.d.M(w,{crossOrigin:q,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&s.d.M(w)},an.preload=function(w,k){if(typeof w=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var q=k.as,L=A(q,k.crossOrigin);s.d.L(w,q,{crossOrigin:L,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},an.preloadModule=function(w,k){if(typeof w=="string")if(k){var q=A(k.as,k.crossOrigin);s.d.m(w,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:q,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else s.d.m(w)},an.requestFormReset=function(w){s.d.r(w)},an.unstable_batchedUpdates=function(w,k){return w(k)},an.useFormState=function(w,k,q){return b.H.useFormState(w,k,q)},an.useFormStatus=function(){return b.H.useHostTransitionStatus()},an.version="19.2.1",an}var Ep;function Pp(){if(Ep)return Ns.exports;Ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Ns.exports=S2(),Ns.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function k2(){if(zp)return Pi;zp=1;var o=w2(),f=Us(),u=Pp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(S(e)!==e)throw Error(s(188))}function k(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return w(l),e;if(i===a)return w(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=i;else{for(var c=!1,d=l.child;d;){if(d===n){c=!0,n=l,a=i;break}if(d===a){c=!0,a=l,n=i;break}d=d.sibling}if(!c){for(d=i.child;d;){if(d===n){c=!0,n=i,a=l;break}if(d===a){c=!0,a=i,n=l;break}d=d.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=q(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,U=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),me=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),ve=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function de(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case le:return"Profiler";case se:return"StrictMode";case je:return"Suspense";case xe:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case me:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ve:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}var Le=Array.isArray,y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},X=[],J=-1;function m(e){return{current:e}}function _(e){0>J||(e.current=X[J],X[J]=null,J--)}function Z(e,t){J++,X[J]=e.current,e.current=t}var te=m(null),pe=m(null),I=m(null),Ne=m(null);function Ke(e,t){switch(Z(I,t),Z(pe,e),Z(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=Xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(te),Z(te,e)}function De(){_(te),_(pe),_(I)}function Ie(e){e.memoizedState!==null&&Z(Ne,e);var t=te.current,n=Xf(t,e.type);t!==n&&(Z(pe,e),Z(te,n))}function Nt(e){pe.current===e&&(_(te),_(pe)),Ne.current===e&&(_(Ne),Ki._currentValue=D)}var Ye,ln;function st(e){if(Ye===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ye=t&&t[1]||"",ln=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+ln}var jt=!1;function Mt(e,t){if(!e||jt)return"";jt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(O){var T=O}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(O){T=O}e.call(Q.prototype)}}else{try{throw Error()}catch(O){T=O}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],d=i[1];if(c&&d){var g=c.split(`
`),z=d.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===z.length)for(a=g.length-1,l=z.length-1;1<=a&&0<=l&&g[a]!==z[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==z[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==z[l]){var G=`
`+g[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=l);break}}}finally{jt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?st(n):""}function ra(e,t){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==t&&t!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Mt(e.type,!1);case 11:return Mt(e.type.render,!1);case 1:return Mt(e.type,!0);case 31:return st("Activity");default:return""}}function It(e){try{var t="",n=null;do t+=ra(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pt=Object.prototype.hasOwnProperty,un=o.unstable_scheduleCallback,Tt=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,rn=o.unstable_requestPaint,St=o.unstable_now,on=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,cn=o.unstable_UserBlockingPriority,_t=o.unstable_NormalPriority,Wn=o.unstable_LowPriority,Ca=o.unstable_IdlePriority,Gt=o.log,Aa=o.unstable_setDisableYieldValue,Gn=null,Me=null;function Pe(e){if(typeof Gt=="function"&&Aa(e),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Gn,e)}catch{}}var vt=Math.clz32?Math.clz32:nl,tl=Math.log,en=Math.LN2;function nl(e){return e>>>=0,e===0?32:31-(tl(e)/en|0)|0}var Ut=256,Xn=262144,dn=4194304;function tn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~i,a!==0?l=tn(a):(c&=d,c!==0?l=tn(c):n||(n=d&~e,n!==0&&(l=tn(n))))):(d=a&~i,d!==0?l=tn(d):c!==0?l=tn(c):n||(n=a&~e,n!==0&&(l=tn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Mn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _l(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ll(e,t,n,a,l,i){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,z=e.hiddenUpdates;for(n=c&~n;0<n;){var G=31-vt(n),Q=1<<G;d[G]=0,g[G]=-1;var T=z[G];if(T!==null)for(z[G]=null,G=0;G<T.length;G++){var O=T[G];O!==null&&(O.lane&=-536870913)}n&=~Q}a!==0&&El(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function El(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function _a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function fn(e,t){var n=t&-t;return n=(n&42)!==0?1:Ea(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ea(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Na(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:pp(e.type))}function zl(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var Tn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Tn,Y="__reactProps$"+Tn,ge="__reactContainer$"+Tn,Se="__reactEvents$"+Tn,Ae="__reactListeners$"+Tn,Ue="__reactHandles$"+Tn,He="__reactResources$"+Tn,ut="__reactMarker$"+Tn;function xt(e){delete e[kt],delete e[Y],delete e[Se],delete e[Ae],delete e[Ue]}function Zt(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ge]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[kt])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function Yt(e){if(e=e[kt]||e[ge]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Xt(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[ut]=!0}var Ma=new Set,Zn={};function In(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Ma.add(t[e])}var ar=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lr={},ir={};function Co(e){return Pt.call(ir,e)?!0:Pt.call(lr,e)?!1:ar.test(e)?ir[e]=!0:(lr[e]=!0,!1)}function Nl(e,t,n){if(Co(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function si(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rr(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ml(e){if(!e._valueTracker){var t=si(e)?"checked":"value";e._valueTracker=rr(e,t,""+e[t])}}function ui(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=si(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var or=/[\n"\\]/g;function Qt(e){return e.replace(or,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function di(e,t,n,a,l,i,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pn(t)):e.value!==""+pn(t)&&(e.value=""+pn(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?kn(e,c,pn(t)):n!=null?kn(e,c,pn(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+pn(d):e.removeAttribute("name")}function fi(e,t,n,a,l,i,c,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ml(e);return}n=n!=null?""+pn(n):"",t=t!=null?""+pn(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ml(e)}function kn(e,t,n){t==="number"&&Tl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function sa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function cr(e,t,n){if(t!=null&&(t=""+pn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+pn(n):""}function sr(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Le(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=pn(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Ml(e)}function x(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var R=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ae(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||R.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function oe(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ae(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&ae(e,i,t[i])}function F(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ue=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function B(e){return M.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function H(){}var $=null;function ie(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var be=null,$e=null;function Ge(e){var t=Yt(e);if(t&&(e=t.stateNode)){var n=e[Y]||null;e:switch(e=t.stateNode,t.type){case"input":if(di(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Y]||null;if(!l)throw Error(s(90));di(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&ui(a)}break e;case"textarea":cr(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}}}var ht=!1;function Xe(e,t,n){if(ht)return e(t,n);ht=!0;try{var a=e(t);return a}finally{if(ht=!1,(be!==null||$e!==null)&&(Qr(),be&&(t=be,e=$e,$e=be=null,Ge(t),e)))for(t=0;t<e.length;t++)Ge(e[t])}}function Be(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Y]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ee=!1;if(Ve)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ee=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch{Ee=!1}var et=null,Ce=null,tt=null;function Dn(){if(tt)return tt;var e,t=Ce,n=t.length,a,l="value"in et?et.value:et.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[i-a];a++);return tt=l.slice(e,1<a?1-a:void 0)}function hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function Xs(){return!1}function gn(e){function t(n,a,l,i,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mn:Xs,this.isPropagationStopped=Xs,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ur=gn(il),pi=L({},il,{view:0,detail:0}),o0=gn(pi),Ao,_o,hi,dr=L({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(Ao=e.screenX-hi.screenX,_o=e.screenY-hi.screenY):_o=Ao=0,hi=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Vs=gn(dr),c0=L({},dr,{dataTransfer:0}),s0=gn(c0),u0=L({},pi,{relatedTarget:0}),Eo=gn(u0),d0=L({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=gn(d0),p0=L({},il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h0=gn(p0),m0=L({},il,{data:0}),Zs=gn(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y0[e])?!!t[e]:!1}function zo(){return b0}var v0=L({},pi,{key:function(e){if(e.key){var t=g0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=gn(v0),S0=L({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=gn(S0),k0=L({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),j0=gn(k0),C0=L({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=gn(C0),_0=L({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=gn(_0),z0=L({},il,{newState:0,oldState:0}),N0=gn(z0),M0=[9,13,27,32],No=Ve&&"CompositionEvent"in window,mi=null;Ve&&"documentMode"in document&&(mi=document.documentMode);var T0=Ve&&"TextEvent"in window&&!mi,Ks=Ve&&(!No||mi&&8<mi&&11>=mi),Js=" ",Fs=!1;function Ws(e,t){switch(e){case"keyup":return M0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Is(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ll=!1;function L0(e,t){switch(e){case"compositionend":return Is(t);case"keypress":return t.which!==32?null:(Fs=!0,Js);case"textInput":return e=t.data,e===Js&&Fs?null:e;default:return null}}function D0(e,t){if(Ll)return e==="compositionend"||!No&&Ws(e,t)?(e=Dn(),tt=Ce=et=null,Ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R0[e.type]:t==="textarea"}function eu(e,t,n,a){be?$e?$e.push(a):$e=[a]:be=a,t=eo(t,"onChange"),0<t.length&&(n=new ur("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var gi=null,xi=null;function O0(e){qf(e,0)}function fr(e){var t=nn(e);if(ui(t))return e}function tu(e,t){if(e==="change")return t}var nu=!1;if(Ve){var Mo;if(Ve){var To="oninput"in document;if(!To){var au=document.createElement("div");au.setAttribute("oninput","return;"),To=typeof au.oninput=="function"}Mo=To}else Mo=!1;nu=Mo&&(!document.documentMode||9<document.documentMode)}function lu(){gi&&(gi.detachEvent("onpropertychange",iu),xi=gi=null)}function iu(e){if(e.propertyName==="value"&&fr(xi)){var t=[];eu(t,xi,e,ie(e)),Xe(O0,t)}}function q0(e,t,n){e==="focusin"?(lu(),gi=t,xi=n,gi.attachEvent("onpropertychange",iu)):e==="focusout"&&lu()}function H0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr(xi)}function B0(e,t){if(e==="click")return fr(t)}function U0(e,t){if(e==="input"||e==="change")return fr(t)}function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:Y0;function yi(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Pt.call(t,l)||!jn(e[l],t[l]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=ru(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function su(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Tl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tl(e.document)}return t}function Lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $0=Ve&&"documentMode"in document&&11>=document.documentMode,Dl=null,Do=null,bi=null,Ro=!1;function uu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ro||Dl==null||Dl!==Tl(a)||(a=Dl,"selectionStart"in a&&Lo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bi&&yi(bi,a)||(bi=a,a=eo(Do,"onSelect"),0<a.length&&(t=new ur("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Dl)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rl={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},Oo={},du={};Ve&&(du=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function ol(e){if(Oo[e])return Oo[e];if(!Rl[e])return e;var t=Rl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in du)return Oo[e]=t[n];return e}var fu=ol("animationend"),pu=ol("animationiteration"),hu=ol("animationstart"),G0=ol("transitionrun"),X0=ol("transitionstart"),V0=ol("transitioncancel"),mu=ol("transitionend"),gu=new Map,qo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qo.push("scrollEnd");function Qn(e,t){gu.set(e,t),In(t,[e])}var pr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rn=[],Ol=0,Ho=0;function hr(){for(var e=Ol,t=Ho=Ol=0;t<e;){var n=Rn[t];Rn[t++]=null;var a=Rn[t];Rn[t++]=null;var l=Rn[t];Rn[t++]=null;var i=Rn[t];if(Rn[t++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&xu(n,l,i)}}function mr(e,t,n,a){Rn[Ol++]=e,Rn[Ol++]=t,Rn[Ol++]=n,Rn[Ol++]=a,Ho|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Bo(e,t,n,a){return mr(e,t,n,a),gr(e)}function cl(e,t){return mr(e,null,null,t),gr(e)}function xu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-vt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function gr(e){if(50<Yi)throw Yi=0,Kc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ql={};function Z0(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,a){return new Z0(e,t,n,a)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xr(e,t,n,a,l,i){var c=0;if(a=e,typeof e=="function")Uo(e)&&(c=1);else if(typeof e=="string")c=Wh(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=Cn(31,n,t,l),e.elementType=re,e.lanes=i,e;case ee:return sl(n.children,l,i,t);case se:c=8,l|=24;break;case le:return e=Cn(12,n,t,l|2),e.elementType=le,e.lanes=i,e;case je:return e=Cn(13,n,t,l),e.elementType=je,e.lanes=i,e;case xe:return e=Cn(19,n,t,l),e.elementType=xe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:c=10;break e;case W:c=9;break e;case ye:c=11;break e;case ve:c=14;break e;case ze:c=16,a=null;break e}c=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Cn(c,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function sl(e,t,n,a){return e=Cn(7,e,a,t),e.lanes=n,e}function Yo(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function bu(e){var t=Cn(18,null,null,0);return t.stateNode=e,t}function $o(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vu=new WeakMap;function On(e,t){if(typeof e=="object"&&e!==null){var n=vu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:It(t)},vu.set(e,t),t)}return{value:e,source:t,stack:It(t)}}var Hl=[],Bl=0,yr=null,vi=0,qn=[],Hn=0,Ta=null,ea=1,ta="";function da(e,t){Hl[Bl++]=vi,Hl[Bl++]=yr,yr=e,vi=t}function wu(e,t,n){qn[Hn++]=ea,qn[Hn++]=ta,qn[Hn++]=Ta,Ta=e;var a=ea;e=ta;var l=32-vt(a)-1;a&=~(1<<l),n+=1;var i=32-vt(t)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,ea=1<<32-vt(t)+l|n<<l|a,ta=i+e}else ea=1<<i|n<<l|a,ta=e}function Go(e){e.return!==null&&(da(e,1),wu(e,1,0))}function Xo(e){for(;e===yr;)yr=Hl[--Bl],Hl[Bl]=null,vi=Hl[--Bl],Hl[Bl]=null;for(;e===Ta;)Ta=qn[--Hn],qn[Hn]=null,ta=qn[--Hn],qn[Hn]=null,ea=qn[--Hn],qn[Hn]=null}function Su(e,t){qn[Hn++]=ea,qn[Hn++]=ta,qn[Hn++]=Ta,ea=t.id,ta=t.overflow,Ta=e}var Kt=null,yt=null,We=!1,La=null,Bn=!1,Vo=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wi(On(t,e)),Vo}function ku(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[kt]=e,t[Y]=a,n){case"dialog":Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":case"embed":Qe("load",t);break;case"video":case"audio":for(n=0;n<Gi.length;n++)Qe(Gi[n],t);break;case"source":Qe("error",t);break;case"img":case"image":case"link":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"input":Qe("invalid",t),fi(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Qe("invalid",t);break;case"textarea":Qe("invalid",t),sr(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Yf(t.textContent,n)?(a.popover!=null&&(Qe("beforetoggle",t),Qe("toggle",t)),a.onScroll!=null&&Qe("scroll",t),a.onScrollEnd!=null&&Qe("scrollend",t),a.onClick!=null&&(t.onclick=H),t=!0):t=!1,t||Da(e,!0)}function ju(e){for(Kt=e.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Kt=Kt.return}}function Ul(e){if(e!==Kt)return!1;if(!We)return ju(e),We=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ss(e.type,e.memoizedProps)),n=!n),n&&yt&&Da(e),ju(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yt=Ff(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yt=Ff(e)}else t===27?(t=yt,Ka(e.type)?(e=hs,hs=null,yt=e):yt=t):yt=Kt?Yn(e.stateNode.nextSibling):null;return!0}function ul(){yt=Kt=null,We=!1}function Zo(){var e=La;return e!==null&&(vn===null?vn=e:vn.push.apply(vn,e),La=null),e}function wi(e){La===null?La=[e]:La.push(e)}var Qo=m(null),dl=null,fa=null;function Ra(e,t,n){Z(Qo,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=Qo.current,_(Qo)}function Ko(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=l;for(var g=0;g<t.length;g++)if(d.context===t[g]){i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Ko(i.return,n,e),a||(c=null);break e}i=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,i=c.alternate,i!==null&&(i.lanes|=n),Ko(c,n,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function Yl(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var d=l.type;jn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===Ne.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ki):e=[Ki])}l=l.return}e!==null&&Jo(t,e,n,a),t.flags|=262144}function br(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fl(e){dl=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Jt(e){return Cu(dl,e)}function vr(e,t){return dl===null&&fl(e),Cu(e,t)}function Cu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fa===null){if(e===null)throw Error(s(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return n}var Q0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},K0=o.unstable_scheduleCallback,J0=o.unstable_NormalPriority,Dt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fo(){return{controller:new Q0,data:new Map,refCount:0}}function Si(e){e.refCount--,e.refCount===0&&K0(J0,function(){e.controller.abort()})}var ki=null,Wo=0,$l=0,Gl=null;function F0(e,t){if(ki===null){var n=ki=[];Wo=0,$l=es(),Gl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Wo++,t.then(Au,Au),t}function Au(){if(--Wo===0&&ki!==null){Gl!==null&&(Gl.status="fulfilled");var e=ki;ki=null,$l=0,Gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function W0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var _u=y.S;y.S=function(e,t){df=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&F0(e,t),_u!==null&&_u(e,t)};var pl=m(null);function Io(){var e=pl.current;return e!==null?e:mt.pooledCache}function wr(e,t){t===null?Z(pl,pl.current):Z(pl,t.pool)}function Eu(){var e=Io();return e===null?null:{parent:Dt._currentValue,pool:e}}var Xl=Error(s(460)),Po=Error(s(474)),Sr=Error(s(542)),kr={then:function(){}};function zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(H,H),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tu(e),e;default:if(typeof t.status=="string")t.then(H,H);else{if(e=mt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tu(e),e}throw ml=t,Xl}}function hl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ml=n,Xl):n}}var ml=null;function Mu(){if(ml===null)throw Error(s(459));var e=ml;return ml=null,e}function Tu(e){if(e===Xl||e===Sr)throw Error(s(483))}var Vl=null,ji=0;function jr(e){var t=ji;return ji+=1,Vl===null&&(Vl=[]),Nu(Vl,e,t)}function Ci(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===U?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Lu(e){function t(C,v){if(e){var E=C.deletions;E===null?(C.deletions=[v],C.flags|=16):E.push(v)}}function n(C,v){if(!e)return null;for(;v!==null;)t(C,v),v=v.sibling;return null}function a(C){for(var v=new Map;C!==null;)C.key!==null?v.set(C.key,C):v.set(C.index,C),C=C.sibling;return v}function l(C,v){return C=ua(C,v),C.index=0,C.sibling=null,C}function i(C,v,E){return C.index=E,e?(E=C.alternate,E!==null?(E=E.index,E<v?(C.flags|=67108866,v):E):(C.flags|=67108866,v)):(C.flags|=1048576,v)}function c(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function d(C,v,E,V){return v===null||v.tag!==6?(v=Yo(E,C.mode,V),v.return=C,v):(v=l(v,E),v.return=C,v)}function g(C,v,E,V){var ke=E.type;return ke===ee?G(C,v,E.props.children,V,E.key):v!==null&&(v.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ze&&hl(ke)===v.type)?(v=l(v,E.props),Ci(v,E),v.return=C,v):(v=xr(E.type,E.key,E.props,null,C.mode,V),Ci(v,E),v.return=C,v)}function z(C,v,E,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=$o(E,C.mode,V),v.return=C,v):(v=l(v,E.children||[]),v.return=C,v)}function G(C,v,E,V,ke){return v===null||v.tag!==7?(v=sl(E,C.mode,V,ke),v.return=C,v):(v=l(v,E),v.return=C,v)}function Q(C,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Yo(""+v,C.mode,E),v.return=C,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case K:return E=xr(v.type,v.key,v.props,null,C.mode,E),Ci(E,v),E.return=C,E;case P:return v=$o(v,C.mode,E),v.return=C,v;case ze:return v=hl(v),Q(C,v,E)}if(Le(v)||N(v))return v=sl(v,C.mode,E,null),v.return=C,v;if(typeof v.then=="function")return Q(C,jr(v),E);if(v.$$typeof===me)return Q(C,vr(C,v),E);Cr(C,v)}return null}function T(C,v,E,V){var ke=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return ke!==null?null:d(C,v,""+E,V);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case K:return E.key===ke?g(C,v,E,V):null;case P:return E.key===ke?z(C,v,E,V):null;case ze:return E=hl(E),T(C,v,E,V)}if(Le(E)||N(E))return ke!==null?null:G(C,v,E,V,null);if(typeof E.then=="function")return T(C,v,jr(E),V);if(E.$$typeof===me)return T(C,v,vr(C,E),V);Cr(C,E)}return null}function O(C,v,E,V,ke){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return C=C.get(E)||null,d(v,C,""+V,ke);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case K:return C=C.get(V.key===null?E:V.key)||null,g(v,C,V,ke);case P:return C=C.get(V.key===null?E:V.key)||null,z(v,C,V,ke);case ze:return V=hl(V),O(C,v,E,V,ke)}if(Le(V)||N(V))return C=C.get(E)||null,G(v,C,V,ke,null);if(typeof V.then=="function")return O(C,v,E,jr(V),ke);if(V.$$typeof===me)return O(C,v,E,vr(v,V),ke);Cr(v,V)}return null}function he(C,v,E,V){for(var ke=null,nt=null,we=v,qe=v=0,Fe=null;we!==null&&qe<E.length;qe++){we.index>qe?(Fe=we,we=null):Fe=we.sibling;var at=T(C,we,E[qe],V);if(at===null){we===null&&(we=Fe);break}e&&we&&at.alternate===null&&t(C,we),v=i(at,v,qe),nt===null?ke=at:nt.sibling=at,nt=at,we=Fe}if(qe===E.length)return n(C,we),We&&da(C,qe),ke;if(we===null){for(;qe<E.length;qe++)we=Q(C,E[qe],V),we!==null&&(v=i(we,v,qe),nt===null?ke=we:nt.sibling=we,nt=we);return We&&da(C,qe),ke}for(we=a(we);qe<E.length;qe++)Fe=O(we,C,qe,E[qe],V),Fe!==null&&(e&&Fe.alternate!==null&&we.delete(Fe.key===null?qe:Fe.key),v=i(Fe,v,qe),nt===null?ke=Fe:nt.sibling=Fe,nt=Fe);return e&&we.forEach(function(Pa){return t(C,Pa)}),We&&da(C,qe),ke}function _e(C,v,E,V){if(E==null)throw Error(s(151));for(var ke=null,nt=null,we=v,qe=v=0,Fe=null,at=E.next();we!==null&&!at.done;qe++,at=E.next()){we.index>qe?(Fe=we,we=null):Fe=we.sibling;var Pa=T(C,we,at.value,V);if(Pa===null){we===null&&(we=Fe);break}e&&we&&Pa.alternate===null&&t(C,we),v=i(Pa,v,qe),nt===null?ke=Pa:nt.sibling=Pa,nt=Pa,we=Fe}if(at.done)return n(C,we),We&&da(C,qe),ke;if(we===null){for(;!at.done;qe++,at=E.next())at=Q(C,at.value,V),at!==null&&(v=i(at,v,qe),nt===null?ke=at:nt.sibling=at,nt=at);return We&&da(C,qe),ke}for(we=a(we);!at.done;qe++,at=E.next())at=O(we,C,qe,at.value,V),at!==null&&(e&&at.alternate!==null&&we.delete(at.key===null?qe:at.key),v=i(at,v,qe),nt===null?ke=at:nt.sibling=at,nt=at);return e&&we.forEach(function(c2){return t(C,c2)}),We&&da(C,qe),ke}function pt(C,v,E,V){if(typeof E=="object"&&E!==null&&E.type===ee&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case K:e:{for(var ke=E.key;v!==null;){if(v.key===ke){if(ke=E.type,ke===ee){if(v.tag===7){n(C,v.sibling),V=l(v,E.props.children),V.return=C,C=V;break e}}else if(v.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ze&&hl(ke)===v.type){n(C,v.sibling),V=l(v,E.props),Ci(V,E),V.return=C,C=V;break e}n(C,v);break}else t(C,v);v=v.sibling}E.type===ee?(V=sl(E.props.children,C.mode,V,E.key),V.return=C,C=V):(V=xr(E.type,E.key,E.props,null,C.mode,V),Ci(V,E),V.return=C,C=V)}return c(C);case P:e:{for(ke=E.key;v!==null;){if(v.key===ke)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(C,v.sibling),V=l(v,E.children||[]),V.return=C,C=V;break e}else{n(C,v);break}else t(C,v);v=v.sibling}V=$o(E,C.mode,V),V.return=C,C=V}return c(C);case ze:return E=hl(E),pt(C,v,E,V)}if(Le(E))return he(C,v,E,V);if(N(E)){if(ke=N(E),typeof ke!="function")throw Error(s(150));return E=ke.call(E),_e(C,v,E,V)}if(typeof E.then=="function")return pt(C,v,jr(E),V);if(E.$$typeof===me)return pt(C,v,vr(C,E),V);Cr(C,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(n(C,v.sibling),V=l(v,E),V.return=C,C=V):(n(C,v),V=Yo(E,C.mode,V),V.return=C,C=V),c(C)):n(C,v)}return function(C,v,E,V){try{ji=0;var ke=pt(C,v,E,V);return Vl=null,ke}catch(we){if(we===Xl||we===Sr)throw we;var nt=Cn(29,we,null,C.mode);return nt.lanes=V,nt.return=C,nt}finally{}}}var gl=Lu(!0),Du=Lu(!1),Oa=!1;function ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(it&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=gr(e),xu(e,null,n),t}return mr(e,a,t,n),gr(e)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_a(e,n)}}function nc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ac=!1;function _i(){if(ac){var e=Gl;if(e!==null)throw e}}function Ei(e,t,n,a){ac=!1;var l=e.updateQueue;Oa=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var g=d,z=g.next;g.next=null,c===null?i=z:c.next=z,c=g;var G=e.alternate;G!==null&&(G=G.updateQueue,d=G.lastBaseUpdate,d!==c&&(d===null?G.firstBaseUpdate=z:d.next=z,G.lastBaseUpdate=g))}if(i!==null){var Q=l.baseState;c=0,G=z=g=null,d=i;do{var T=d.lane&-536870913,O=T!==d.lane;if(O?(Je&T)===T:(a&T)===T){T!==0&&T===$l&&(ac=!0),G!==null&&(G=G.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var he=e,_e=d;T=t;var pt=n;switch(_e.tag){case 1:if(he=_e.payload,typeof he=="function"){Q=he.call(pt,Q,T);break e}Q=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=_e.payload,T=typeof he=="function"?he.call(pt,Q,T):he,T==null)break e;Q=L({},Q,T);break e;case 2:Oa=!0}}T=d.callback,T!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[T]:O.push(T))}else O={lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},G===null?(z=G=O,g=Q):G=G.next=O,c|=T;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;O=d,d=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);G===null&&(g=Q),l.baseState=g,l.firstBaseUpdate=z,l.lastBaseUpdate=G,i===null&&(l.shared.lanes=0),Ga|=c,e.lanes=c,e.memoizedState=Q}}function Ru(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Ou(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ru(n[e],t)}var Zl=m(null),Ar=m(0);function qu(e,t){e=Sa,Z(Ar,e),Z(Zl,t),Sa=e|t.baseLanes}function lc(){Z(Ar,Sa),Z(Zl,Zl.current)}function ic(){Sa=Ar.current,_(Zl),_(Ar)}var An=m(null),Un=null;function Ba(e){var t=e.alternate;Z(Et,Et.current&1),Z(An,e),Un===null&&(t===null||Zl.current!==null||t.memoizedState!==null)&&(Un=e)}function rc(e){Z(Et,Et.current),Z(An,e),Un===null&&(Un=e)}function Hu(e){e.tag===22?(Z(Et,Et.current),Z(An,e),Un===null&&(Un=e)):Ua()}function Ua(){Z(Et,Et.current),Z(An,An.current)}function _n(e){_(An),Un===e&&(Un=null),_(Et)}var Et=m(0);function _r(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fs(n)||ps(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,Oe=null,dt=null,Rt=null,Er=!1,Ql=!1,xl=!1,zr=0,zi=0,Kl=null,I0=0;function Ct(){throw Error(s(321))}function oc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function cc(e,t,n,a,l,i){return ha=i,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?wd:kc,xl=!1,i=n(a,l),xl=!1,Ql&&(i=Uu(t,n,a,l)),Bu(e),i}function Bu(e){y.H=Ti;var t=dt!==null&&dt.next!==null;if(ha=0,Rt=dt=Oe=null,Er=!1,zi=0,Kl=null,t)throw Error(s(300));e===null||Ot||(e=e.dependencies,e!==null&&br(e)&&(Ot=!0))}function Uu(e,t,n,a){Oe=e;var l=0;do{if(Ql&&(Kl=null),zi=0,Ql=!1,25<=l)throw Error(s(301));if(l+=1,Rt=dt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Sd,i=t(n,a)}while(Ql);return i}function P0(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Ni(t):t,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(Oe.flags|=1024),t}function sc(){var e=zr!==0;return zr=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Er=!1}ha=0,Rt=dt=Oe=null,Ql=!1,zi=zr=0,Kl=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Oe.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function zt(){if(dt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=Rt===null?Oe.memoizedState:Rt.next;if(t!==null)Rt=t,dt=e;else{if(e===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Rt===null?Oe.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var t=zi;return zi+=1,Kl===null&&(Kl=[]),e=Nu(Kl,e,t),t=Oe,(Rt===null?t.memoizedState:Rt.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?wd:kc),e}function Mr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===me)return Jt(e)}throw Error(s(438,String(e)))}function fc(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nr(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=fe;return t.index++,n}function ma(e,t){return typeof t=="function"?t(e):t}function Tr(e){var t=zt();return pc(t,dt,e)}function pc(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var d=c=null,g=null,z=t,G=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Je&Q)===Q:(ha&Q)===Q){var T=z.revertLane;if(T===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===$l&&(G=!0);else if((ha&T)===T){z=z.next,T===$l&&(G=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=Q,c=i):g=g.next=Q,Oe.lanes|=T,Ga|=T;Q=z.action,xl&&n(i,Q),i=z.hasEagerState?z.eagerState:n(i,Q)}else T={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=T,c=i):g=g.next=T,Oe.lanes|=Q,Ga|=Q;z=z.next}while(z!==null&&z!==t);if(g===null?c=i:g.next=d,!jn(i,e.memoizedState)&&(Ot=!0,G&&(n=Gl,n!==null)))throw n;e.memoizedState=i,e.baseState=c,e.baseQueue=g,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hc(e){var t=zt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do i=e(i,c.action),c=c.next;while(c!==l);jn(i,t.memoizedState)||(Ot=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Yu(e,t,n){var a=Oe,l=zt(),i=We;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var c=!jn((dt||l).memoizedState,n);if(c&&(l.memoizedState=n,Ot=!0),l=l.queue,xc(Xu.bind(null,a,l,e),[e]),l.getSnapshot!==t||c||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,Jl(9,{destroy:void 0},Gu.bind(null,a,l,n,t),null),mt===null)throw Error(s(349));i||(ha&127)!==0||$u(a,t,n)}return n}function $u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=Nr(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,a){t.value=n,t.getSnapshot=a,Vu(t)&&Zu(e)}function Xu(e,t,n){return n(function(){Vu(t)&&Zu(e)})}function Vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function Zu(e){var t=cl(e,2);t!==null&&wn(t,e,2)}function mc(e){var t=sn();if(typeof e=="function"){var n=e;if(e=n(),xl){Pe(!0);try{n()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function Qu(e,t,n,a){return e.baseState=n,pc(e,dt,typeof a=="function"?a:ma)}function eh(e,t,n,a,l){if(Rr(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};y.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Ku(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Ku(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=y.T,c={};y.T=c;try{var d=n(l,a),g=y.S;g!==null&&g(c,d),Ju(e,t,d)}catch(z){gc(e,t,z)}finally{i!==null&&c.types!==null&&(i.types=c.types),y.T=i}}else try{i=n(l,a),Ju(e,t,i)}catch(z){gc(e,t,z)}}function Ju(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Fu(e,t,a)},function(a){return gc(e,t,a)}):Fu(e,t,n)}function Fu(e,t,n){t.status="fulfilled",t.value=n,Wu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ku(e,n)))}function gc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Wu(t),t=t.next;while(t!==a)}e.action=null}function Wu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Iu(e,t){return t}function Pu(e,t){if(We){var n=mt.formState;if(n!==null){e:{var a=Oe;if(We){if(yt){t:{for(var l=yt,i=Bn;l.nodeType!==8;){if(!i){l=null;break t}if(l=Yn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){yt=Yn(l.nextSibling),a=l.data==="F!";break e}}Da(a)}a=!1}a&&(t=n[0])}}return n=sn(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iu,lastRenderedState:t},n.queue=a,n=yd.bind(null,Oe,a),a.dispatch=n,a=mc(!1),i=Sc.bind(null,Oe,!1,a.queue),a=sn(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=eh.bind(null,Oe,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function ed(e){var t=zt();return td(t,dt,e)}function td(e,t,n){if(t=pc(e,t,Iu)[0],e=Tr(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ni(t)}catch(c){throw c===Xl?Sr:c}else a=t;t=zt();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,Jl(9,{destroy:void 0},th.bind(null,l,n),null)),[a,i,e]}function th(e,t){e.action=t}function nd(e){var t=zt(),n=dt;if(n!==null)return td(t,n,e);zt(),t=t.memoizedState,n=zt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Jl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=Nr(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ad(){return zt().memoizedState}function Lr(e,t,n,a){var l=sn();Oe.flags|=e,l.memoizedState=Jl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Dr(e,t,n,a){var l=zt();a=a===void 0?null:a;var i=l.memoizedState.inst;dt!==null&&a!==null&&oc(a,dt.memoizedState.deps)?l.memoizedState=Jl(t,i,n,a):(Oe.flags|=e,l.memoizedState=Jl(1|t,i,n,a))}function ld(e,t){Lr(8390656,8,e,t)}function xc(e,t){Dr(2048,8,e,t)}function nh(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=Nr(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function id(e){var t=zt().memoizedState;return nh({ref:t,nextImpl:e}),function(){if((it&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function rd(e,t){return Dr(4,2,e,t)}function od(e,t){return Dr(4,4,e,t)}function cd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){n=n!=null?n.concat([e]):null,Dr(4,4,cd.bind(null,t,e),n)}function yc(){}function ud(e,t){var n=zt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&oc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function dd(e,t){var n=zt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&oc(t,a[1]))return a[0];if(a=e(),xl){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[a,t],a}function bc(e,t,n){return n===void 0||(ha&1073741824)!==0&&(Je&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=pf(),Oe.lanes|=e,Ga|=e,n)}function fd(e,t,n,a){return jn(n,t)?n:Zl.current!==null?(e=bc(e,n,a),jn(e,t)||(Ot=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Je&261930)===0?(Ot=!0,e.memoizedState=n):(e=pf(),Oe.lanes|=e,Ga|=e,t)}function pd(e,t,n,a,l){var i=j.p;j.p=i!==0&&8>i?i:8;var c=y.T,d={};y.T=d,Sc(e,!1,t,n);try{var g=l(),z=y.S;if(z!==null&&z(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var G=W0(g,a);Mi(e,t,G,Nn(e))}else Mi(e,t,a,Nn(e))}catch(Q){Mi(e,t,{then:function(){},status:"rejected",reason:Q},Nn())}finally{j.p=i,c!==null&&d.types!==null&&(c.types=d.types),y.T=c}}function ah(){}function vc(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=hd(e).queue;pd(e,l,t,D,n===null?ah:function(){return md(e),n(a)})}function hd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:D},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function md(e){var t=hd(e);t.next===null&&(t=e.alternate.memoizedState),Mi(e,t.next.queue,{},Nn())}function wc(){return Jt(Ki)}function gd(){return zt().memoizedState}function xd(){return zt().memoizedState}function lh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=qa(n);var a=Ha(t,e,n);a!==null&&(wn(a,t,n),Ai(a,t,n)),t={cache:Fo()},e.payload=t;return}t=t.return}}function ih(e,t,n){var a=Nn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rr(e)?bd(t,n):(n=Bo(e,t,n,a),n!==null&&(wn(n,e,a),vd(n,t,a)))}function yd(e,t,n){var a=Nn();Mi(e,t,n,a)}function Mi(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rr(e))bd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,d=i(c,n);if(l.hasEagerState=!0,l.eagerState=d,jn(d,c))return mr(e,t,l,0),mt===null&&hr(),!1}catch{}finally{}if(n=Bo(e,t,l,a),n!==null)return wn(n,e,a),vd(n,t,a),!0}return!1}function Sc(e,t,n,a){if(a={lane:2,revertLane:es(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rr(e)){if(t)throw Error(s(479))}else t=Bo(e,n,a,2),t!==null&&wn(t,e,2)}function Rr(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function bd(e,t){Ql=Er=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_a(e,n)}}var Ti={readContext:Jt,use:Mr,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct};Ti.useEffectEvent=Ct;var wd={readContext:Jt,use:Mr,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:ld,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Lr(4194308,4,cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){Lr(4,2,e,t)},useMemo:function(e,t){var n=sn();t=t===void 0?null:t;var a=e();if(xl){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=sn();if(n!==void 0){var l=n(t);if(xl){Pe(!0);try{n(t)}finally{Pe(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=ih.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:function(e){e=mc(e);var t=e.queue,n=yd.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yc,useDeferredValue:function(e,t){var n=sn();return bc(n,e,t)},useTransition:function(){var e=mc(!1);return e=pd.bind(null,Oe,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Oe,l=sn();if(We){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),mt===null)throw Error(s(349));(Je&127)!==0||$u(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ld(Xu.bind(null,a,i,e),[e]),a.flags|=2048,Jl(9,{destroy:void 0},Gu.bind(null,a,i,n,t),null),n},useId:function(){var e=sn(),t=mt.identifierPrefix;if(We){var n=ta,a=ea;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=I0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var t=sn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sc.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:fc,useCacheRefresh:function(){return sn().memoizedState=lh.bind(null,Oe)},useEffectEvent:function(e){var t=sn(),n={impl:e};return t.memoizedState=n,function(){if((it&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},kc={readContext:Jt,use:Mr,useCallback:ud,useContext:Jt,useEffect:xc,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:od,useMemo:dd,useReducer:Tr,useRef:ad,useState:function(){return Tr(ma)},useDebugValue:yc,useDeferredValue:function(e,t){var n=zt();return fd(n,dt.memoizedState,e,t)},useTransition:function(){var e=Tr(ma)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Yu,useId:gd,useHostTransitionStatus:wc,useFormState:ed,useActionState:ed,useOptimistic:function(e,t){var n=zt();return Qu(n,dt,e,t)},useMemoCache:fc,useCacheRefresh:xd};kc.useEffectEvent=id;var Sd={readContext:Jt,use:Mr,useCallback:ud,useContext:Jt,useEffect:xc,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:od,useMemo:dd,useReducer:hc,useRef:ad,useState:function(){return hc(ma)},useDebugValue:yc,useDeferredValue:function(e,t){var n=zt();return dt===null?bc(n,e,t):fd(n,dt.memoizedState,e,t)},useTransition:function(){var e=hc(ma)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:Ni(e),t]},useSyncExternalStore:Yu,useId:gd,useHostTransitionStatus:wc,useFormState:nd,useActionState:nd,useOptimistic:function(e,t){var n=zt();return dt!==null?Qu(n,dt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fc,useCacheRefresh:xd};Sd.useEffectEvent=id;function jc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Nn(),l=qa(a);l.payload=t,n!=null&&(l.callback=n),t=Ha(e,l,a),t!==null&&(wn(t,e,a),Ai(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Nn(),l=qa(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ha(e,l,a),t!==null&&(wn(t,e,a),Ai(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),a=qa(n);a.tag=2,t!=null&&(a.callback=t),t=Ha(e,a,n),t!==null&&(wn(t,e,n),Ai(t,e,n))}};function kd(e,t,n,a,l,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!yi(n,a)||!yi(l,i):!0}function jd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function yl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=L({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Cd(e){pr(e)}function Ad(e){console.error(e)}function _d(e){pr(e)}function Or(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ed(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ac(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Or(e,t)},n}function zd(e){return e=qa(e),e.tag=3,e}function Nd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Ed(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Ed(t,n,a),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function rh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Yl(t,n,l,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:return Un===null?Kr():n.alternate===null&&At===0&&(At=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===kr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Wc(e,a,l)),!1;case 22:return n.flags|=65536,a===kr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Wc(e,a,l)),!1}throw Error(s(435,n.tag))}return Wc(e,a,l),Kr(),!1}if(We)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Vo&&(e=Error(s(422),{cause:a}),wi(On(e,n)))):(a!==Vo&&(t=Error(s(423),{cause:a}),wi(On(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=On(a,n),l=Ac(e.stateNode,a,l),nc(e,l),At!==4&&(At=2)),!1;var i=Error(s(520),{cause:a});if(i=On(i,n),Ui===null?Ui=[i]:Ui.push(i),At!==4&&(At=2),t===null)return!0;a=On(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ac(n.stateNode,a,e),nc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xa===null||!Xa.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=zd(l),Nd(l,e,n,a),nc(n,l),!1}n=n.return}while(n!==null);return!1}var _c=Error(s(461)),Ot=!1;function Ft(e,t,n,a){t.child=e===null?Du(t,null,n,a):gl(t,e.child,n,a)}function Md(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return fl(t),a=cc(e,t,n,c,i,l),d=sc(),e!==null&&!Ot?(uc(e,t,l),ga(e,t,l)):(We&&d&&Go(t),t.flags|=1,Ft(e,t,a,l),t.child)}function Td(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Uo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ld(e,t,i,a,l)):(e=xr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Rc(e,l)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:yi,n(c,a)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ua(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ld(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(yi(i,a)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=a=i,Rc(e,l))(e.flags&131072)!==0&&(Ot=!0);else return t.lanes=e.lanes,ga(e,t,l)}return Ec(e,t,n,a,l)}function Dd(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Rd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wr(t,i!==null?i.cachePool:null),i!==null?qu(t,i):lc(),Hu(t);else return a=t.lanes=536870912,Rd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(wr(t,i.cachePool),qu(t,i),Ua(),t.memoizedState=null):(e!==null&&wr(t,null),lc(),Ua());return Ft(e,t,l,n),t.child}function Li(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,n,a,l){var i=Io();return i=i===null?null:{parent:Dt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&wr(t,null),lc(),Hu(t),e!==null&&Yl(e,t,a,!0),t.childLanes=l,null}function qr(e,t){return t=Br({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Od(e,t,n){return gl(t,e.child,null,n),e=qr(t,t.pendingProps),e.flags|=2,_n(t),t.memoizedState=null,e}function oh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(We){if(a.mode==="hidden")return e=qr(t,a),t.lanes=536870912,Li(null,e);if(rc(t),(e=yt)?(e=Jf(e,Bn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=bu(e),n.return=t,t.child=n,Kt=t,yt=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return qr(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(rc(t),l)if(t.flags&256)t.flags&=-257,t=Od(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ot||Yl(e,t,n,!1),l=(n&e.childLanes)!==0,Ot||l){if(a=mt,a!==null&&(c=fn(a,n),c!==0&&c!==i.retryLane))throw i.retryLane=c,cl(e,c),wn(a,e,c),_c;Kr(),t=Od(e,t,n)}else e=i.treeContext,yt=Yn(c.nextSibling),Kt=t,We=!0,La=null,Bn=!1,e!==null&&Su(t,e),t=qr(t,a),t.flags|=4096;return t}return e=ua(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ec(e,t,n,a,l){return fl(t),n=cc(e,t,n,a,void 0,l),a=sc(),e!==null&&!Ot?(uc(e,t,l),ga(e,t,l)):(We&&a&&Go(t),t.flags|=1,Ft(e,t,n,l),t.child)}function qd(e,t,n,a,l,i){return fl(t),t.updateQueue=null,n=Uu(t,a,n,l),Bu(e),a=sc(),e!==null&&!Ot?(uc(e,t,i),ga(e,t,i)):(We&&a&&Go(t),t.flags|=1,Ft(e,t,n,i),t.child)}function Hd(e,t,n,a,l){if(fl(t),t.stateNode===null){var i=ql,c=n.contextType;typeof c=="object"&&c!==null&&(i=Jt(c)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},ec(t),c=n.contextType,i.context=typeof c=="object"&&c!==null?Jt(c):ql,i.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(jc(t,n,c,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Cc.enqueueReplaceState(i,i.state,null),Ei(t,a,i,l),_i(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,g=yl(n,d);i.props=g;var z=i.context,G=n.contextType;c=ql,typeof G=="object"&&G!==null&&(c=Jt(G));var Q=n.getDerivedStateFromProps;G=typeof Q=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,G||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||z!==c)&&jd(t,i,a,c),Oa=!1;var T=t.memoizedState;i.state=T,Ei(t,a,i,l),_i(),z=t.memoizedState,d||T!==z||Oa?(typeof Q=="function"&&(jc(t,n,Q,a),z=t.memoizedState),(g=Oa||kd(t,n,g,a,T,z,c))?(G||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=c,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,tc(e,t),c=t.memoizedProps,G=yl(n,c),i.props=G,Q=t.pendingProps,T=i.context,z=n.contextType,g=ql,typeof z=="object"&&z!==null&&(g=Jt(z)),d=n.getDerivedStateFromProps,(z=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==Q||T!==g)&&jd(t,i,a,g),Oa=!1,T=t.memoizedState,i.state=T,Ei(t,a,i,l),_i();var O=t.memoizedState;c!==Q||T!==O||Oa||e!==null&&e.dependencies!==null&&br(e.dependencies)?(typeof d=="function"&&(jc(t,n,d,a),O=t.memoizedState),(G=Oa||kd(t,n,G,a,T,O,g)||e!==null&&e.dependencies!==null&&br(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),i.props=a,i.state=O,i.context=g,a=G):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Hr(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=gl(t,e.child,null,l),t.child=gl(t,null,n,l)):Ft(e,t,n,l),t.memoizedState=i.state,e=t.child):e=ga(e,t,l),e}function Bd(e,t,n,a){return ul(),t.flags|=256,Ft(e,t,n,a),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Eu()}}function Mc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zn),e}function Ud(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(We){if(l?Ba(t):Ua(),(e=yt)?(e=Jf(e,Bn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=bu(e),n.return=t,t.child=n,Kt=t,yt=null)):e=null,e===null)throw Da(t);return ps(e)?t.lanes=32:t.lanes=536870912,null}var d=a.children;return a=a.fallback,l?(Ua(),l=t.mode,d=Br({mode:"hidden",children:d},l),a=sl(a,l,n,null),d.return=t,a.return=t,d.sibling=a,t.child=d,a=t.child,a.memoizedState=Nc(n),a.childLanes=Mc(e,c,n),t.memoizedState=zc,Li(null,a)):(Ba(t),Tc(t,d))}var g=e.memoizedState;if(g!==null&&(d=g.dehydrated,d!==null)){if(i)t.flags&256?(Ba(t),t.flags&=-257,t=Lc(e,t,n)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),d=a.fallback,l=t.mode,a=Br({mode:"visible",children:a.children},l),d=sl(d,l,n,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,gl(t,e.child,null,n),a=t.child,a.memoizedState=Nc(n),a.childLanes=Mc(e,c,n),t.memoizedState=zc,t=Li(null,a));else if(Ba(t),ps(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;c=z,a=Error(s(419)),a.stack="",a.digest=c,wi({value:a,source:null,stack:null}),t=Lc(e,t,n)}else if(Ot||Yl(e,t,n,!1),c=(n&e.childLanes)!==0,Ot||c){if(c=mt,c!==null&&(a=fn(c,n),a!==0&&a!==g.retryLane))throw g.retryLane=a,cl(e,a),wn(c,e,a),_c;fs(d)||Kr(),t=Lc(e,t,n)}else fs(d)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,yt=Yn(d.nextSibling),Kt=t,We=!0,La=null,Bn=!1,e!==null&&Su(t,e),t=Tc(t,a.children),t.flags|=4096);return t}return l?(Ua(),d=a.fallback,l=t.mode,g=e.child,z=g.sibling,a=ua(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,z!==null?d=ua(z,d):(d=sl(d,l,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,Li(null,a),a=t.child,d=e.child.memoizedState,d===null?d=Nc(n):(l=d.cachePool,l!==null?(g=Dt._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=Eu(),d={baseLanes:d.baseLanes|n,cachePool:l}),a.memoizedState=d,a.childLanes=Mc(e,c,n),t.memoizedState=zc,Li(e.child,a)):(Ba(t),n=e.child,e=n.sibling,n=ua(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Br({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Br(e,t){return e=Cn(22,e,null,t),e.lanes=0,e}function Lc(e,t,n){return gl(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ko(e.return,t,n)}function Dc(e,t,n,a,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=l,c.treeForkCount=i)}function $d(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var c=Et.current,d=(c&2)!==0;if(d?(c=c&1|2,t.flags|=128):c&=1,Z(Et,c),Ft(e,t,a,n),a=We?vi:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yd(e,n,t);else if(e.tag===19)Yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&_r(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Dc(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&_r(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Dc(t,!0,n,null,i,a);break;case"together":Dc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ga(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ua(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ua(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&br(e)))}function ch(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),Ra(t,Dt,e.memoizedState.cache),ul();break;case 27:case 5:Ie(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,rc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ba(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ud(e,t,n):(Ba(t),e=ga(e,t,n),e!==null?e.sibling:null);Ba(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Yl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return $d(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(Et,Et.current),a)break;return null;case 22:return t.lanes=0,Dd(e,t,n,t.pendingProps);case 24:Ra(t,Dt,e.memoizedState.cache)}return ga(e,t,n)}function Gd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ot=!0;else{if(!Rc(e,n)&&(t.flags&128)===0)return Ot=!1,ch(e,t,n);Ot=(e.flags&131072)!==0}else Ot=!1,We&&(t.flags&1048576)!==0&&wu(t,vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=hl(t.elementType),t.type=e,typeof e=="function")Uo(e)?(a=yl(e,a),t.tag=1,t=Hd(null,t,e,a,n)):(t.tag=0,t=Ec(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ye){t.tag=11,t=Md(null,t,e,a,n);break e}else if(l===ve){t.tag=14,t=Td(null,t,e,a,n);break e}}throw t=de(e)||e,Error(s(306,t,""))}}return t;case 0:return Ec(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=yl(a,t.pendingProps),Hd(e,t,a,l,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,tc(e,t),Ei(t,a,null,n);var c=t.memoizedState;if(a=c.cache,Ra(t,Dt,a),a!==i.cache&&Jo(t,[Dt],n,!0),_i(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bd(e,t,a,n);break e}else if(a!==l){l=On(Error(s(424)),t),wi(l),t=Bd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(yt=Yn(e.firstChild),Kt=t,We=!0,La=null,Bn=!0,n=Du(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ul(),a===l){t=ga(e,t,n);break e}Ft(e,t,a,n)}t=t.child}return t;case 26:return Hr(e,t),e===null?(n=tp(t.type,null,t.pendingProps,null))?t.memoizedState=n:We||(n=t.type,e=t.pendingProps,a=to(I.current).createElement(n),a[kt]=t,a[Y]=e,Wt(a,n,e),rt(a),t.stateNode=a):t.memoizedState=tp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&We&&(a=t.stateNode=If(t.type,t.pendingProps,I.current),Kt=t,Bn=!0,l=yt,Ka(t.type)?(hs=l,yt=Yn(a.firstChild)):yt=l),Ft(e,t,t.pendingProps.children,n),Hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&We&&((l=a=yt)&&(a=Hh(a,t.type,t.pendingProps,Bn),a!==null?(t.stateNode=a,Kt=t,yt=Yn(a.firstChild),Bn=!1,l=!0):l=!1),l||Da(t)),Ie(t),l=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,ss(l,i)?a=null:c!==null&&ss(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=cc(e,t,P0,null,null,n),Ki._currentValue=l),Hr(e,t),Ft(e,t,a,n),t.child;case 6:return e===null&&We&&((e=n=yt)&&(n=Bh(n,t.pendingProps,Bn),n!==null?(t.stateNode=n,Kt=t,yt=null,e=!0):e=!1),e||Da(t)),null;case 13:return Ud(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=gl(t,null,a,n):Ft(e,t,a,n),t.child;case 11:return Md(e,t,t.type,t.pendingProps,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ra(t,t.type,a.value),Ft(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,fl(t),l=Jt(l),a=a(l),t.flags|=1,Ft(e,t,a,n),t.child;case 14:return Td(e,t,t.type,t.pendingProps,n);case 15:return Ld(e,t,t.type,t.pendingProps,n);case 19:return $d(e,t,n);case 31:return oh(e,t,n);case 22:return Dd(e,t,n,t.pendingProps);case 24:return fl(t),a=Jt(Dt),e===null?(l=Io(),l===null&&(l=mt,i=Fo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},ec(t),Ra(t,Dt,l)):((e.lanes&n)!==0&&(tc(e,t),Ei(t,null,null,n),_i()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ra(t,Dt,a)):(a=i.cache,Ra(t,Dt,a),a!==l.cache&&Jo(t,[Dt],n,!0))),Ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function xa(e){e.flags|=4}function Oc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(xf())e.flags|=8192;else throw ml=kr,Po}else e.flags&=-16777217}function Xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rp(t))if(xf())e.flags|=8192;else throw ml=kr,Po}function Ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?al():536870912,e.lanes|=t,Pl|=t)}function Di(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function sh(e,t,n){var a=t.pendingProps;switch(Xo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return bt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pa(Dt),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ul(t)?xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zo())),bt(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(xa(t),i!==null?(bt(t),Xd(t,i)):(bt(t),Oc(t,l,null,a,n))):i?i!==e.memoizedState?(xa(t),bt(t),Xd(t,i)):(bt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&xa(t),bt(t),Oc(t,l,e,a,n)),null;case 27:if(Nt(t),n=I.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return bt(t),null}e=te.current,Ul(t)?ku(t):(e=If(l,a,n),t.stateNode=e,xa(t))}return bt(t),null;case 5:if(Nt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return bt(t),null}if(i=te.current,Ul(t))ku(t);else{var c=to(I.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}i[kt]=t,i[Y]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Wt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&xa(t)}}return bt(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=I.current,Ul(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Kt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[kt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Yf(e.nodeValue,n)),e||Da(t,!0)}else e=to(e).createTextNode(a),e[kt]=t,t.stateNode=e}return bt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ul(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),e=!1}else n=Zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_n(t),t):(_n(t),null);if((t.flags&128)!==0)throw Error(s(558))}return bt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ul(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[kt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),l=!1}else l=Zo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_n(t),t):(_n(t),null)}return _n(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ur(t,t.updateQueue),bt(t),null);case 4:return De(),e===null&&ls(t.stateNode.containerInfo),bt(t),null;case 10:return pa(t.type),bt(t),null;case 19:if(_(Et),a=t.memoizedState,a===null)return bt(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Di(a,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=_r(e),i!==null){for(t.flags|=128,Di(a,!1),e=i.updateQueue,t.updateQueue=e,Ur(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yu(n,e),n=n.sibling;return Z(Et,Et.current&1|2),We&&da(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&St()>Vr&&(t.flags|=128,l=!0,Di(a,!1),t.lanes=4194304)}else{if(!l)if(e=_r(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ur(t,e),Di(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!We)return bt(t),null}else 2*St()-a.renderingStartTime>Vr&&n!==536870912&&(t.flags|=128,l=!0,Di(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=St(),e.sibling=null,n=Et.current,Z(Et,l?n&1|2:n&1),We&&da(t,a.treeForkCount),e):(bt(t),null);case 22:case 23:return _n(t),ic(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),n=t.updateQueue,n!==null&&Ur(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&_(pl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Dt),bt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function uh(e,t){switch(Xo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Dt),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 31:if(t.memoizedState!==null){if(_n(t),t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Et),null;case 4:return De(),null;case 10:return pa(t.type),null;case 22:case 23:return _n(t),ic(),e!==null&&_(pl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Dt),null;case 25:return null;default:return null}}function Vd(e,t){switch(Xo(t),t.tag){case 3:pa(Dt),De();break;case 26:case 27:case 5:Nt(t);break;case 4:De();break;case 31:t.memoizedState!==null&&_n(t);break;case 13:_n(t);break;case 19:_(Et);break;case 10:pa(t.type);break;case 22:case 23:_n(t),ic(),e!==null&&_(pl);break;case 24:pa(Dt)}}function Ri(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,c=n.inst;a=i(),c.destroy=a}n=n.next}while(n!==l)}}catch(d){ct(t,t.return,d)}}function Ya(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=t;var g=n,z=d;try{z()}catch(G){ct(l,g,G)}}}a=a.next}while(a!==i)}}catch(G){ct(t,t.return,G)}}function Zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ou(t,n)}catch(a){ct(e,e.return,a)}}}function Qd(e,t,n){n.props=yl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ct(e,t,a)}}function Oi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ct(e,t,l)}}function na(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ct(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ct(e,t,l)}else n.current=null}function Kd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ct(e,e.return,l)}}function qc(e,t,n){try{var a=e.stateNode;Th(a,e.type,n,t),a[Y]=t}catch(l){ct(e,e.return,l)}}function Jd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function Hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=H));else if(a!==4&&(a===27&&Ka(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}function Yr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ka(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yr(e,t,n),e=e.sibling;e!==null;)Yr(e,t,n),e=e.sibling}function Fd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Wt(t,a,n),t[kt]=e,t[Y]=n}catch(i){ct(e,e.return,i)}}var ya=!1,qt=!1,Uc=!1,Wd=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function dh(e,t){if(e=e.containerInfo,os=co,e=su(e),Lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var c=0,d=-1,g=-1,z=0,G=0,Q=e,T=null;t:for(;;){for(var O;Q!==n||l!==0&&Q.nodeType!==3||(d=c+l),Q!==i||a!==0&&Q.nodeType!==3||(g=c+a),Q.nodeType===3&&(c+=Q.nodeValue.length),(O=Q.firstChild)!==null;)T=Q,Q=O;for(;;){if(Q===e)break t;if(T===n&&++z===l&&(d=c),T===i&&++G===a&&(g=c),(O=Q.nextSibling)!==null)break;Q=T,T=Q.parentNode}Q=O}n=d===-1||g===-1?null:{start:d,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(cs={focusedElem:e,selectionRange:n},co=!1,Vt=t;Vt!==null;)if(t=Vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Vt=e;else for(;Vt!==null;){switch(t=Vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var he=yl(n.type,l);e=a.getSnapshotBeforeUpdate(he,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(_e){ct(n,n.return,_e)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ds(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ds(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Vt=e;break}Vt=t.return}}function Id(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:va(e,n),a&4&&Ri(5,n);break;case 1:if(va(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){ct(n,n.return,c)}else{var l=yl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ct(n,n.return,c)}}a&64&&Zd(n),a&512&&Oi(n,n.return);break;case 3:if(va(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ou(e,t)}catch(c){ct(n,n.return,c)}}break;case 27:t===null&&a&4&&Fd(n);case 26:case 5:va(e,n),t===null&&a&4&&Kd(n),a&512&&Oi(n,n.return);break;case 12:va(e,n);break;case 31:va(e,n),a&4&&tf(e,n);break;case 13:va(e,n),a&4&&nf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vh.bind(null,n),Uh(e,n))));break;case 22:if(a=n.memoizedState!==null||ya,!a){t=t!==null&&t.memoizedState!==null||qt,l=ya;var i=qt;ya=a,(qt=t)&&!i?wa(e,n,(n.subtreeFlags&8772)!==0):va(e,n),ya=l,qt=i}break;case 30:break;default:va(e,n)}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,xn=!1;function ba(e,t,n){for(n=n.child;n!==null;)ef(e,t,n),n=n.sibling}function ef(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Gn,n)}catch{}switch(n.tag){case 26:qt||na(n,t),ba(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||na(n,t);var a=wt,l=xn;Ka(n.type)&&(wt=n.stateNode,xn=!1),ba(e,t,n),Vi(n.stateNode),wt=a,xn=l;break;case 5:qt||na(n,t);case 6:if(a=wt,l=xn,wt=null,ba(e,t,n),wt=a,xn=l,wt!==null)if(xn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(i){ct(n,t,i)}else try{wt.removeChild(n.stateNode)}catch(i){ct(n,t,i)}break;case 18:wt!==null&&(xn?(e=wt,Qf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),oi(e)):Qf(wt,n.stateNode));break;case 4:a=wt,l=xn,wt=n.stateNode.containerInfo,xn=!0,ba(e,t,n),wt=a,xn=l;break;case 0:case 11:case 14:case 15:Ya(2,n,t),qt||Ya(4,n,t),ba(e,t,n);break;case 1:qt||(na(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Qd(n,t,a)),ba(e,t,n);break;case 21:ba(e,t,n);break;case 22:qt=(a=qt)||n.memoizedState!==null,ba(e,t,n),qt=a;break;default:ba(e,t,n)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oi(e)}catch(n){ct(t,t.return,n)}}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oi(e)}catch(n){ct(t,t.return,n)}}function fh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wd),t;default:throw Error(s(435,e.tag))}}function $r(e,t){var n=fh(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=wh.bind(null,e,a);a.then(l,l)}})}function yn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(Ka(d.type)){wt=d.stateNode,xn=!1;break e}break;case 5:wt=d.stateNode,xn=!1;break e;case 3:case 4:wt=d.stateNode.containerInfo,xn=!0;break e}d=d.return}if(wt===null)throw Error(s(160));ef(i,c,l),wt=null,xn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,e),t=t.sibling}var Kn=null;function af(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(t,e),bn(e),a&4&&(Ya(3,e,e.return),Ri(3,e),Ya(5,e,e.return));break;case 1:yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),a&64&&ya&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Kn;if(yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ut]||i[kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Wt(i,a,n),i[kt]=e,rt(i),a=i;break e;case"link":var c=lp("link","href",l).get(a+(n.href||""));if(c){for(var d=0;d<c.length;d++)if(i=c[d],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(d,1);break t}}i=l.createElement(a),Wt(i,a,n),l.head.appendChild(i);break;case"meta":if(c=lp("meta","content",l).get(a+(n.content||""))){for(d=0;d<c.length;d++)if(i=c[d],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(d,1);break t}}i=l.createElement(a),Wt(i,a,n),l.head.appendChild(i);break;default:throw Error(s(468,a))}i[kt]=e,rt(i),a=i}e.stateNode=a}else ip(l,e.type,e.stateNode);else e.stateNode=ap(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?ip(l,e.type,e.stateNode):ap(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps)}break;case 27:yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),n!==null&&a&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),e.flags&32){l=e.stateNode;try{x(l,"")}catch(he){ct(e,e.return,he)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,qc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Uc=!0);break;case 6:if(yn(t,e),bn(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(he){ct(e,e.return,he)}}break;case 3:if(lo=null,l=Kn,Kn=no(t.containerInfo),yn(t,e),Kn=l,bn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(he){ct(e,e.return,he)}Uc&&(Uc=!1,lf(e));break;case 4:a=Kn,Kn=no(e.stateNode.containerInfo),yn(t,e),bn(e),Kn=a;break;case 12:yn(t,e),bn(e);break;case 31:yn(t,e),bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$r(e,a)));break;case 13:yn(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xr=St()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$r(e,a)));break;case 22:l=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,z=ya,G=qt;if(ya=z||l,qt=G||g,yn(t,e),qt=G,ya=z,bn(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||g||ya||qt||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(i=g.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=g.stateNode;var Q=g.memoizedProps.style,T=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;d.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(he){ct(g,g.return,he)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(he){ct(g,g.return,he)}}}else if(t.tag===18){if(n===null){g=t;try{var O=g.stateNode;l?Kf(O,!0):Kf(g.stateNode,!1)}catch(he){ct(g,g.return,he)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,$r(e,n))));break;case 19:yn(t,e),bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$r(e,a)));break;case 30:break;case 21:break;default:yn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Jd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=Hc(e);Yr(e,i,l);break;case 5:var c=n.stateNode;n.flags&32&&(x(c,""),n.flags&=-33);var d=Hc(e);Yr(e,d,c);break;case 3:case 4:var g=n.stateNode.containerInfo,z=Hc(e);Bc(e,z,g);break;default:throw Error(s(161))}}catch(G){ct(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Id(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),bl(t);break;case 1:na(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qd(t,t.return,n),bl(t);break;case 27:Vi(t.stateNode);case 26:case 5:na(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function wa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:wa(l,i,n),Ri(4,i);break;case 1:if(wa(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){ct(a,a.return,z)}if(a=i,l=a.updateQueue,l!==null){var d=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Ru(g[l],d)}catch(z){ct(a,a.return,z)}}n&&c&64&&Zd(i),Oi(i,i.return);break;case 27:Fd(i);case 26:case 5:wa(l,i,n),n&&a===null&&c&4&&Kd(i),Oi(i,i.return);break;case 12:wa(l,i,n);break;case 31:wa(l,i,n),n&&c&4&&tf(l,i);break;case 13:wa(l,i,n),n&&c&4&&nf(l,i);break;case 22:i.memoizedState===null&&wa(l,i,n),Oi(i,i.return);break;case 30:break;default:wa(l,i,n)}t=t.sibling}}function Yc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Si(n))}function $c(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e))}function Jn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rf(e,t,n,a),t=t.sibling}function rf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jn(e,t,n,a),l&2048&&Ri(9,t);break;case 1:Jn(e,t,n,a);break;case 3:Jn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e)));break;case 12:if(l&2048){Jn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,d=i.onPostCommit;typeof d=="function"&&d(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ct(t,t.return,g)}}else Jn(e,t,n,a);break;case 31:Jn(e,t,n,a);break;case 13:Jn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Jn(e,t,n,a):qi(e,t):i._visibility&2?Jn(e,t,n,a):(i._visibility|=2,Fl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Yc(c,t);break;case 24:Jn(e,t,n,a),l&2048&&$c(t.alternate,t);break;default:Jn(e,t,n,a)}}function Fl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,d=n,g=a,z=c.flags;switch(c.tag){case 0:case 11:case 15:Fl(i,c,d,g,l),Ri(8,c);break;case 23:break;case 22:var G=c.stateNode;c.memoizedState!==null?G._visibility&2?Fl(i,c,d,g,l):qi(i,c):(G._visibility|=2,Fl(i,c,d,g,l)),l&&z&2048&&Yc(c.alternate,c);break;case 24:Fl(i,c,d,g,l),l&&z&2048&&$c(c.alternate,c);break;default:Fl(i,c,d,g,l)}t=t.sibling}}function qi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:qi(n,a),l&2048&&Yc(a.alternate,a);break;case 24:qi(n,a),l&2048&&$c(a.alternate,a);break;default:qi(n,a)}t=t.sibling}}var Hi=8192;function Wl(e,t,n){if(e.subtreeFlags&Hi)for(e=e.child;e!==null;)of(e,t,n),e=e.sibling}function of(e,t,n){switch(e.tag){case 26:Wl(e,t,n),e.flags&Hi&&e.memoizedState!==null&&Ih(n,Kn,e.memoizedState,e.memoizedProps);break;case 5:Wl(e,t,n);break;case 3:case 4:var a=Kn;Kn=no(e.stateNode.containerInfo),Wl(e,t,n),Kn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Hi,Hi=16777216,Wl(e,t,n),Hi=a):Wl(e,t,n));break;default:Wl(e,t,n)}}function cf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Vt=a,uf(a,e)}cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sf(e),e=e.sibling}function sf(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gr(e)):Bi(e);break;default:Bi(e)}}function Gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Vt=a,uf(a,e)}cf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Gr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gr(t));break;default:Gr(t)}e=e.sibling}}function uf(e,t){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:Ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Si(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Vt=a;else e:for(n=e;Vt!==null;){a=Vt;var l=a.sibling,i=a.return;if(Pd(a),a===n){Vt=null;break e}if(l!==null){l.return=i,Vt=l;break e}Vt=i}}}var ph={getCacheForType:function(e){var t=Jt(Dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Jt(Dt).controller.signal}},hh=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,Ze=null,Je=0,ot=0,En=null,$a=!1,Il=!1,Gc=!1,Sa=0,At=0,Ga=0,vl=0,Xc=0,zn=0,Pl=0,Ui=null,vn=null,Vc=!1,Xr=0,df=0,Vr=1/0,Zr=null,Xa=null,$t=0,Va=null,ei=null,ka=0,Zc=0,Qc=null,ff=null,Yi=0,Kc=null;function Nn(){return(it&2)!==0&&Je!==0?Je&-Je:y.T!==null?es():Na()}function pf(){if(zn===0)if((Je&536870912)===0||We){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),zn=e}else zn=536870912;return e=An.current,e!==null&&(e.flags|=32),zn}function wn(e,t,n){(e===mt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(ti(e,0),Za(e,Je,zn,!1)),Sn(e,n),((it&2)===0||e!==mt)&&(e===mt&&((it&2)===0&&(vl|=n),At===4&&Za(e,Je,zn,!1)),aa(e))}function hf(e,t,n){if((it&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mn(e,t),l=a?xh(e,t):Fc(e,t,!0),i=a;do{if(l===0){Il&&!a&&Za(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!mh(n)){l=Fc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var d=e;l=Ui;var g=d.current.memoizedState.isDehydrated;if(g&&(ti(d,c).flags|=256),c=Fc(d,c,!1),c!==2){if(Gc&&!g){d.errorRecoveryDisabledLanes|=i,vl|=i,l=4;break e}i=vn,vn=l,i!==null&&(vn===null?vn=i:vn.push.apply(vn,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){ti(e,0),Za(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Za(a,t,zn,!$a);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Xr+300-St(),10<l)){if(Za(a,t,zn,!$a),Vn(a,0,!0)!==0)break e;ka=t,a.timeoutHandle=Vf(mf.bind(null,a,n,vn,Zr,Vc,t,zn,vl,Pl,$a,i,"Throttled",-0,0),l);break e}mf(a,n,vn,Zr,Vc,t,zn,vl,Pl,$a,i,null,-0,0)}}break}while(!0);aa(e)}function mf(e,t,n,a,l,i,c,d,g,z,G,Q,T,O){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},of(t,i,Q);var he=(i&62914560)===i?Xr-St():(i&4194048)===i?df-St():0;if(he=Ph(Q,he),he!==null){ka=i,e.cancelPendingCommit=he(kf.bind(null,e,t,i,n,a,l,c,d,g,G,Q,null,T,O)),Za(e,i,c,!z);return}}kf(e,t,i,n,a,l,c,d,g)}function mh(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!jn(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Za(e,t,n,a){t&=~Xc,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-vt(l),c=1<<i;a[i]=-1,l&=~c}n!==0&&El(e,n,t)}function Qr(){return(it&6)===0?($i(0),!1):!0}function Jc(){if(Ze!==null){if(ot===0)var e=Ze.return;else e=Ze,fa=dl=null,dc(e),Vl=null,ji=0,e=Ze;for(;e!==null;)Vd(e.alternate,e),e=e.return;Ze=null}}function ti(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Rh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ka=0,Jc(),mt=e,Ze=n=ua(e.current,null),Je=t,ot=0,En=null,$a=!1,Il=Mn(e,t),Gc=!1,Pl=zn=Xc=vl=Ga=At=0,vn=Ui=null,Vc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-vt(a),i=1<<l;t|=e[l],a&=~i}return Sa=t,hr(),n}function gf(e,t){Oe=null,y.H=Ti,t===Xl||t===Sr?(t=Mu(),ot=3):t===Po?(t=Mu(),ot=4):ot=t===_c?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,Ze===null&&(At=1,Or(e,On(t,e.current)))}function xf(){var e=An.current;return e===null?!0:(Je&4194048)===Je?Un===null:(Je&62914560)===Je||(Je&536870912)!==0?e===Un:!1}function yf(){var e=y.H;return y.H=Ti,e===null?Ti:e}function bf(){var e=y.A;return y.A=ph,e}function Kr(){At=4,$a||(Je&4194048)!==Je&&An.current!==null||(Il=!0),(Ga&134217727)===0&&(vl&134217727)===0||mt===null||Za(mt,Je,zn,!1)}function Fc(e,t,n){var a=it;it|=2;var l=yf(),i=bf();(mt!==e||Je!==t)&&(Zr=null,ti(e,t)),t=!1;var c=At;e:do try{if(ot!==0&&Ze!==null){var d=Ze,g=En;switch(ot){case 8:Jc(),c=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var z=ot;if(ot=0,En=null,ni(e,d,g,z),n&&Il){c=0;break e}break;default:z=ot,ot=0,En=null,ni(e,d,g,z)}}gh(),c=At;break}catch(G){gf(e,G)}while(!0);return t&&e.shellSuspendCounter++,fa=dl=null,it=a,y.H=l,y.A=i,Ze===null&&(mt=null,Je=0,hr()),c}function gh(){for(;Ze!==null;)vf(Ze)}function xh(e,t){var n=it;it|=2;var a=yf(),l=bf();mt!==e||Je!==t?(Zr=null,Vr=St()+500,ti(e,t)):Il=Mn(e,t);e:do try{if(ot!==0&&Ze!==null){t=Ze;var i=En;t:switch(ot){case 1:ot=0,En=null,ni(e,t,i,1);break;case 2:case 9:if(zu(i)){ot=0,En=null,wf(t);break}t=function(){ot!==2&&ot!==9||mt!==e||(ot=7),aa(e)},i.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:zu(i)?(ot=0,En=null,wf(t)):(ot=0,En=null,ni(e,t,i,7));break;case 5:var c=null;switch(Ze.tag){case 26:c=Ze.memoizedState;case 5:case 27:var d=Ze;if(c?rp(c):d.stateNode.complete){ot=0,En=null;var g=d.sibling;if(g!==null)Ze=g;else{var z=d.return;z!==null?(Ze=z,Jr(z)):Ze=null}break t}}ot=0,En=null,ni(e,t,i,5);break;case 6:ot=0,En=null,ni(e,t,i,6);break;case 8:Jc(),At=6;break e;default:throw Error(s(462))}}yh();break}catch(G){gf(e,G)}while(!0);return fa=dl=null,y.H=a,y.A=l,it=n,Ze!==null?0:(mt=null,Je=0,hr(),At)}function yh(){for(;Ze!==null&&!Bt();)vf(Ze)}function vf(e){var t=Gd(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,t===null?Jr(e):Ze=t}function wf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qd(n,t,t.pendingProps,t.type,void 0,Je);break;case 11:t=qd(n,t,t.pendingProps,t.type.render,t.ref,Je);break;case 5:dc(t);default:Vd(n,t),t=Ze=yu(t,Sa),t=Gd(n,t,Sa)}e.memoizedProps=e.pendingProps,t===null?Jr(e):Ze=t}function ni(e,t,n,a){fa=dl=null,dc(t),Vl=null,ji=0;var l=t.return;try{if(rh(e,l,t,n,Je)){At=1,Or(e,On(n,e.current)),Ze=null;return}}catch(i){if(l!==null)throw Ze=l,i;At=1,Or(e,On(n,e.current)),Ze=null;return}t.flags&32768?(We||a===1?e=!0:Il||(Je&536870912)!==0?e=!1:($a=e=!0,(a===2||a===9||a===3||a===6)&&(a=An.current,a!==null&&a.tag===13&&(a.flags|=16384))),Sf(t,e)):Jr(t)}function Jr(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,$a);return}e=t.return;var n=sh(t.alternate,t,Sa);if(n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);At===0&&(At=5)}function Sf(e,t){do{var n=uh(e.alternate,e);if(n!==null){n.flags&=32767,Ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ze=e;return}Ze=e=n}while(e!==null);At=6,Ze=null}function kf(e,t,n,a,l,i,c,d,g){e.cancelPendingCommit=null;do Fr();while($t!==0);if((it&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Ho,ll(e,n,i,c,d,g),e===mt&&(Ze=mt=null,Je=0),ei=t,Va=e,ka=n,Zc=i,Qc=l,ff=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sh(_t,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,l=j.p,j.p=2,c=it,it|=4;try{dh(e,t,n)}finally{it=c,j.p=l,y.T=a}}$t=1,jf(),Cf(),Af()}}function jf(){if($t===1){$t=0;var e=Va,t=ei,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var a=j.p;j.p=2;var l=it;it|=4;try{af(t,e);var i=cs,c=su(e.containerInfo),d=i.focusedElem,g=i.selectionRange;if(c!==d&&d&&d.ownerDocument&&cu(d.ownerDocument.documentElement,d)){if(g!==null&&Lo(d)){var z=g.start,G=g.end;if(G===void 0&&(G=z),"selectionStart"in d)d.selectionStart=z,d.selectionEnd=Math.min(G,d.value.length);else{var Q=d.ownerDocument||document,T=Q&&Q.defaultView||window;if(T.getSelection){var O=T.getSelection(),he=d.textContent.length,_e=Math.min(g.start,he),pt=g.end===void 0?_e:Math.min(g.end,he);!O.extend&&_e>pt&&(c=pt,pt=_e,_e=c);var C=ou(d,_e),v=ou(d,pt);if(C&&v&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==v.node||O.focusOffset!==v.offset)){var E=Q.createRange();E.setStart(C.node,C.offset),O.removeAllRanges(),_e>pt?(O.addRange(E),O.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),O.addRange(E))}}}}for(Q=[],O=d;O=O.parentNode;)O.nodeType===1&&Q.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<Q.length;d++){var V=Q[d];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}co=!!os,cs=os=null}finally{it=l,j.p=a,y.T=n}}e.current=t,$t=2}}function Cf(){if($t===2){$t=0;var e=Va,t=ei,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var a=j.p;j.p=2;var l=it;it|=4;try{Id(e,t.alternate,t)}finally{it=l,j.p=a,y.T=n}}$t=3}}function Af(){if($t===4||$t===3){$t=0,rn();var e=Va,t=ei,n=ka,a=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$t=5:($t=0,ei=Va=null,_f(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Xa=null),za(n),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Gn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,l=j.p,j.p=2,y.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var d=a[c];i(d.value,{componentStack:d.stack})}}finally{y.T=t,j.p=l}}(ka&3)!==0&&Fr(),aa(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Kc?Yi++:(Yi=0,Kc=e):Yi=0,$i(0)}}function _f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Si(t)))}function Fr(){return jf(),Cf(),Af(),Ef()}function Ef(){if($t!==5)return!1;var e=Va,t=Zc;Zc=0;var n=za(ka),a=y.T,l=j.p;try{j.p=32>n?32:n,y.T=null,n=Qc,Qc=null;var i=Va,c=ka;if($t=0,ei=Va=null,ka=0,(it&6)!==0)throw Error(s(331));var d=it;if(it|=4,sf(i.current),rf(i,i.current,c,n),it=d,$i(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Gn,i)}catch{}return!0}finally{j.p=l,y.T=a,_f(e,t)}}function zf(e,t,n){t=On(n,t),t=Ac(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Sn(e,2),aa(e))}function ct(e,t,n){if(e.tag===3)zf(e,e,n);else for(;t!==null;){if(t.tag===3){zf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xa===null||!Xa.has(a))){e=On(n,e),n=zd(2),a=Ha(t,n,2),a!==null&&(Nd(n,a,t,e),Sn(a,2),aa(a));break}}t=t.return}}function Wc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new hh;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Gc=!0,l.add(n),e=bh.bind(null,e,t,n),t.then(e,e))}function bh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mt===e&&(Je&n)===n&&(At===4||At===3&&(Je&62914560)===Je&&300>St()-Xr?(it&2)===0&&ti(e,0):Xc|=n,Pl===Je&&(Pl=0)),aa(e)}function Nf(e,t){t===0&&(t=al()),e=cl(e,t),e!==null&&(Sn(e,t),aa(e))}function vh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nf(e,n)}function wh(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Nf(e,n)}function Sh(e,t){return un(e,t)}var Wr=null,ai=null,Ic=!1,Ir=!1,Pc=!1,Qa=0;function aa(e){e!==ai&&e.next===null&&(ai===null?Wr=ai=e:ai=ai.next=e),Ir=!0,Ic||(Ic=!0,jh())}function $i(e,t){if(!Pc&&Ir){Pc=!0;do for(var n=!1,a=Wr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,d=a.pingedLanes;i=(1<<31-vt(42|e)+1)-1,i&=l&~(c&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Df(a,i))}else i=Je,i=Vn(a,a===mt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Mn(a,i)||(n=!0,Df(a,i));a=a.next}while(n);Pc=!1}}function kh(){Mf()}function Mf(){Ir=Ic=!1;var e=0;Qa!==0&&Dh()&&(e=Qa);for(var t=St(),n=null,a=Wr;a!==null;){var l=a.next,i=Tf(a,t);i===0?(a.next=null,n===null?Wr=l:n.next=l,l===null&&(ai=n)):(n=a,(e!==0||(i&3)!==0)&&(Ir=!0)),a=l}$t!==0&&$t!==5||$i(e),Qa!==0&&(Qa=0)}function Tf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-vt(i),d=1<<c,g=l[c];g===-1?((d&n)===0||(d&a)!==0)&&(l[c]=_l(d,t)):g<=t&&(e.expiredLanes|=d),i&=~d}if(t=mt,n=Je,n=Vn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Tt(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Tt(a),za(n)){case 2:case 8:n=cn;break;case 32:n=_t;break;case 268435456:n=Ca;break;default:n=_t}return a=Lf.bind(null,e),n=un(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Tt(a),e.callbackPriority=2,e.callbackNode=null,2}function Lf(e,t){if($t!==0&&$t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fr()&&e.callbackNode!==n)return null;var a=Je;return a=Vn(e,e===mt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(hf(e,a,t),Tf(e,St()),e.callbackNode!=null&&e.callbackNode===n?Lf.bind(null,e):null)}function Df(e,t){if(Fr())return null;hf(e,t,!0)}function jh(){Oh(function(){(it&6)!==0?un(Lt,kh):Mf()})}function es(){if(Qa===0){var e=$l;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Qa=e}return Qa}function Rf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:B(""+e)}function Of(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ch(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Rf((l[Y]||null).action),c=a.submitter;c&&(t=(t=c[Y]||null)?Rf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var d=new ur("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qa!==0){var g=c?Of(l,c):new FormData(l);vc(n,{pending:!0,data:g,method:l.method,action:i},null,g)}}else typeof i=="function"&&(d.preventDefault(),g=c?Of(l,c):new FormData(l),vc(n,{pending:!0,data:g,method:l.method,action:i},i,g))},currentTarget:l}]})}}for(var ts=0;ts<qo.length;ts++){var ns=qo[ts],Ah=ns.toLowerCase(),_h=ns[0].toUpperCase()+ns.slice(1);Qn(Ah,"on"+_h)}Qn(fu,"onAnimationEnd"),Qn(pu,"onAnimationIteration"),Qn(hu,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(G0,"onTransitionRun"),Qn(X0,"onTransitionStart"),Qn(V0,"onTransitionCancel"),Qn(mu,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gi));function qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var d=a[c],g=d.instance,z=d.currentTarget;if(d=d.listener,g!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=z;try{i(l)}catch(G){pr(G)}l.currentTarget=null,i=g}else for(c=0;c<a.length;c++){if(d=a[c],g=d.instance,z=d.currentTarget,d=d.listener,g!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=z;try{i(l)}catch(G){pr(G)}l.currentTarget=null,i=g}}}}function Qe(e,t){var n=t[Se];n===void 0&&(n=t[Se]=new Set);var a=e+"__bubble";n.has(a)||(Hf(t,e,2,!1),n.add(a))}function as(e,t,n){var a=0;t&&(a|=4),Hf(n,e,a,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[Pr]){e[Pr]=!0,Ma.forEach(function(n){n!=="selectionchange"&&(Eh.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,as("selectionchange",!1,t))}}function Hf(e,t,n,a){switch(pp(t)){case 2:var l=n2;break;case 8:l=a2;break;default:l=bs}n=l.bind(null,t,n,e),l=void 0,!Ee||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function is(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l)break;if(c===4)for(c=a.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;d!==null;){if(c=Zt(d),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){a=i=c;continue e}d=d.parentNode}}a=a.return}Xe(function(){var z=i,G=ie(n),Q=[];e:{var T=gu.get(e);if(T!==void 0){var O=ur,he=e;switch(e){case"keypress":if(hn(n)===0)break e;case"keydown":case"keyup":O=w0;break;case"focusin":he="focus",O=Eo;break;case"focusout":he="blur",O=Eo;break;case"beforeblur":case"afterblur":O=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=j0;break;case fu:case pu:case hu:O=f0;break;case mu:O=A0;break;case"scroll":case"scrollend":O=o0;break;case"wheel":O=E0;break;case"copy":case"cut":case"paste":O=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Qs;break;case"toggle":case"beforetoggle":O=N0}var _e=(t&4)!==0,pt=!_e&&(e==="scroll"||e==="scrollend"),C=_e?T!==null?T+"Capture":null:T;_e=[];for(var v=z,E;v!==null;){var V=v;if(E=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||E===null||C===null||(V=Be(v,C),V!=null&&_e.push(Xi(v,V,E))),pt)break;v=v.return}0<_e.length&&(T=new O(T,he,null,n,G),Q.push({event:T,listeners:_e}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",T&&n!==$&&(he=n.relatedTarget||n.fromElement)&&(Zt(he)||he[ge]))break e;if((O||T)&&(T=G.window===G?G:(T=G.ownerDocument)?T.defaultView||T.parentWindow:window,O?(he=n.relatedTarget||n.toElement,O=z,he=he?Zt(he):null,he!==null&&(pt=S(he),_e=he.tag,he!==pt||_e!==5&&_e!==27&&_e!==6)&&(he=null)):(O=null,he=z),O!==he)){if(_e=Vs,V="onMouseLeave",C="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_e=Qs,V="onPointerLeave",C="onPointerEnter",v="pointer"),pt=O==null?T:nn(O),E=he==null?T:nn(he),T=new _e(V,v+"leave",O,n,G),T.target=pt,T.relatedTarget=E,V=null,Zt(G)===z&&(_e=new _e(C,v+"enter",he,n,G),_e.target=E,_e.relatedTarget=pt,V=_e),pt=V,O&&he)t:{for(_e=zh,C=O,v=he,E=0,V=C;V;V=_e(V))E++;V=0;for(var ke=v;ke;ke=_e(ke))V++;for(;0<E-V;)C=_e(C),E--;for(;0<V-E;)v=_e(v),V--;for(;E--;){if(C===v||v!==null&&C===v.alternate){_e=C;break t}C=_e(C),v=_e(v)}_e=null}else _e=null;O!==null&&Bf(Q,T,O,_e,!1),he!==null&&pt!==null&&Bf(Q,pt,he,_e,!0)}}e:{if(T=z?nn(z):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var nt=tu;else if(Ps(T))if(nu)nt=U0;else{nt=H0;var we=q0}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&F(z.elementType)&&(nt=tu):nt=B0;if(nt&&(nt=nt(e,z))){eu(Q,nt,n,G);break e}we&&we(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&kn(T,"number",T.value)}switch(we=z?nn(z):window,e){case"focusin":(Ps(we)||we.contentEditable==="true")&&(Dl=we,Do=z,bi=null);break;case"focusout":bi=Do=Dl=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,uu(Q,n,G);break;case"selectionchange":if($0)break;case"keydown":case"keyup":uu(Q,n,G)}var qe;if(No)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Ll?Ws(e,n)&&(Fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Fe="onCompositionStart");Fe&&(Ks&&n.locale!=="ko"&&(Ll||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Ll&&(qe=Dn()):(et=G,Ce="value"in et?et.value:et.textContent,Ll=!0)),we=eo(z,Fe),0<we.length&&(Fe=new Zs(Fe,e,null,n,G),Q.push({event:Fe,listeners:we}),qe?Fe.data=qe:(qe=Is(n),qe!==null&&(Fe.data=qe)))),(qe=T0?L0(e,n):D0(e,n))&&(Fe=eo(z,"onBeforeInput"),0<Fe.length&&(we=new Zs("onBeforeInput","beforeinput",null,n,G),Q.push({event:we,listeners:Fe}),we.data=qe)),Ch(Q,e,z,n,G)}qf(Q,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Be(e,n),l!=null&&a.unshift(Xi(e,l,i)),l=Be(e,t),l!=null&&a.push(Xi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function zh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bf(e,t,n,a,l){for(var i=t._reactName,c=[];n!==null&&n!==a;){var d=n,g=d.alternate,z=d.stateNode;if(d=d.tag,g!==null&&g===a)break;d!==5&&d!==26&&d!==27||z===null||(g=z,l?(z=Be(n,i),z!=null&&c.unshift(Xi(n,z,g))):l||(z=Be(n,i),z!=null&&c.push(Xi(n,z,g)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Nh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(Mh,"")}function Yf(e,t){return t=Uf(t),Uf(e)===t}function ft(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||x(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&x(e,""+a);break;case"className":Pn(e,"class",a);break;case"tabIndex":Pn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,n,a);break;case"style":oe(e,a,i);break;case"data":if(t!=="object"){Pn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=B(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",l.name,l,null),ft(e,t,"formEncType",l.formEncType,l,null),ft(e,t,"formMethod",l.formMethod,l,null),ft(e,t,"formTarget",l.formTarget,l,null)):(ft(e,t,"encType",l.encType,l,null),ft(e,t,"method",l.method,l,null),ft(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=B(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=H);break;case"onScroll":a!=null&&Qe("scroll",e);break;case"onScrollEnd":a!=null&&Qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=B(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Qe("beforetoggle",e),Qe("toggle",e),Nl(e,"popover",a);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ue.get(n)||n,Nl(e,n,a))}}function rs(e,t,n,a,l,i){switch(n){case"style":oe(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?x(e,a):(typeof a=="number"||typeof a=="bigint")&&x(e,""+a);break;case"onScroll":a!=null&&Qe("scroll",e);break;case"onScrollEnd":a!=null&&Qe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=H);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zn.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Y]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Nl(e,n,a)}}}function Wt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",e),Qe("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,i,c,n,null)}}l&&ft(e,t,"srcSet",n.srcSet,n,null),a&&ft(e,t,"src",n.src,n,null);return;case"input":Qe("invalid",e);var d=i=c=l=null,g=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":l=G;break;case"type":c=G;break;case"checked":g=G;break;case"defaultChecked":z=G;break;case"value":i=G;break;case"defaultValue":d=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,t));break;default:ft(e,t,a,G,n,null)}}fi(e,i,d,g,z,c,l,!1);return;case"select":Qe("invalid",e),a=c=i=null;for(l in n)if(n.hasOwnProperty(l)&&(d=n[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:ft(e,t,l,d,n,null)}t=i,n=c,e.multiple=!!a,t!=null?sa(e,!!a,t,!1):n!=null&&sa(e,!!a,n,!0);return;case"textarea":Qe("invalid",e),i=l=a=null;for(c in n)if(n.hasOwnProperty(c)&&(d=n[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:ft(e,t,c,d,n,null)}sr(e,a,l,i);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ft(e,t,g,a,n,null)}return;case"dialog":Qe("beforetoggle",e),Qe("toggle",e),Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":Qe("load",e);break;case"video":case"audio":for(a=0;a<Gi.length;a++)Qe(Gi[a],e);break;case"image":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"embed":case"source":case"link":Qe("error",e),Qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,z,a,n,null)}return;default:if(F(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&rs(e,t,G,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&ft(e,t,d,a,n,null))}function Th(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,d=null,g=null,z=null,G=null;for(O in n){var Q=n[O];if(n.hasOwnProperty(O)&&Q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":g=Q;default:a.hasOwnProperty(O)||ft(e,t,O,null,a,Q)}}for(var T in a){var O=a[T];if(Q=n[T],a.hasOwnProperty(T)&&(O!=null||Q!=null))switch(T){case"type":i=O;break;case"name":l=O;break;case"checked":z=O;break;case"defaultChecked":G=O;break;case"value":c=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==Q&&ft(e,t,T,O,a,Q)}}di(e,c,d,g,z,G,i,l);return;case"select":O=c=d=T=null;for(i in n)if(g=n[i],n.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":O=g;default:a.hasOwnProperty(i)||ft(e,t,i,null,a,g)}for(l in a)if(i=a[l],g=n[l],a.hasOwnProperty(l)&&(i!=null||g!=null))switch(l){case"value":T=i;break;case"defaultValue":d=i;break;case"multiple":c=i;default:i!==g&&ft(e,t,l,i,a,g)}t=d,n=c,a=O,T!=null?sa(e,!!n,T,!1):!!a!=!!n&&(t!=null?sa(e,!!n,t,!0):sa(e,!!n,n?[]:"",!1));return;case"textarea":O=T=null;for(d in n)if(l=n[d],n.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ft(e,t,d,null,a,l)}for(c in a)if(l=a[c],i=n[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":T=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&ft(e,t,c,l,a,i)}cr(e,T,O);return;case"option":for(var he in n)if(T=n[he],n.hasOwnProperty(he)&&T!=null&&!a.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:ft(e,t,he,null,a,T)}for(g in a)if(T=a[g],O=n[g],a.hasOwnProperty(g)&&T!==O&&(T!=null||O!=null))switch(g){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:ft(e,t,g,T,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in n)T=n[_e],n.hasOwnProperty(_e)&&T!=null&&!a.hasOwnProperty(_e)&&ft(e,t,_e,null,a,T);for(z in a)if(T=a[z],O=n[z],a.hasOwnProperty(z)&&T!==O&&(T!=null||O!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:ft(e,t,z,T,a,O)}return;default:if(F(t)){for(var pt in n)T=n[pt],n.hasOwnProperty(pt)&&T!==void 0&&!a.hasOwnProperty(pt)&&rs(e,t,pt,void 0,a,T);for(G in a)T=a[G],O=n[G],!a.hasOwnProperty(G)||T===O||T===void 0&&O===void 0||rs(e,t,G,T,a,O);return}}for(var C in n)T=n[C],n.hasOwnProperty(C)&&T!=null&&!a.hasOwnProperty(C)&&ft(e,t,C,null,a,T);for(Q in a)T=a[Q],O=n[Q],!a.hasOwnProperty(Q)||T===O||T==null&&O==null||ft(e,t,Q,T,a,O)}function $f(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,c=l.initiatorType,d=l.duration;if(i&&d&&$f(c)){for(c=0,d=l.responseEnd,a+=1;a<n.length;a++){var g=n[a],z=g.startTime;if(z>d)break;var G=g.transferSize,Q=g.initiatorType;G&&$f(Q)&&(g=g.responseEnd,c+=G*(g<d?1:(d-z)/(g-z)))}if(--a,t+=8*(i+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var os=null,cs=null;function to(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=null;function Dh(){var e=window.event;return e&&e.type==="popstate"?e===us?!1:(us=e,!0):(us=null,!1)}var Vf=typeof setTimeout=="function"?setTimeout:void 0,Rh=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,Oh=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(e){return Zf.resolve(null).then(e).catch(qh)}:Vf;function qh(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function Qf(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),oi(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Vi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vi(n);for(var i=n.firstChild;i;){var c=i.nextSibling,d=i.nodeName;i[ut]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=c}}else n==="body"&&Vi(e.ownerDocument.body);n=l}while(n);oi(t)}function Kf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function ds(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ds(n),xt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Hh(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ut])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function Bh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Jf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yn(e.nextSibling),e===null))return null;return e}function fs(e){return e.data==="$?"||e.data==="$~"}function ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hs=null;function Ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Yn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function If(e,t,n){switch(t=to(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Vi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var $n=new Map,Pf=new Set;function no(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=j.d;j.d={f:Yh,r:$h,D:Gh,C:Xh,L:Vh,m:Zh,X:Kh,S:Qh,M:Jh};function Yh(){var e=ja.f(),t=Qr();return e||t}function $h(e){var t=Yt(e);t!==null&&t.tag===5&&t.type==="form"?md(t):ja.r(e)}var li=typeof document>"u"?null:document;function ep(e,t,n){var a=li;if(a&&typeof t=="string"&&t){var l=Qt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Pf.has(l)||(Pf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Wt(t,"link",e),rt(t),a.head.appendChild(t)))}}function Gh(e){ja.D(e),ep("dns-prefetch",e,null)}function Xh(e,t){ja.C(e,t),ep("preconnect",e,t)}function Vh(e,t,n){ja.L(e,t,n);var a=li;if(a&&e&&t){var l='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Qt(n.imageSizes)+'"]')):l+='[href="'+Qt(e)+'"]';var i=l;switch(t){case"style":i=ii(e);break;case"script":i=ri(e)}$n.has(i)||(e=L({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$n.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Zi(i))||t==="script"&&a.querySelector(Qi(i))||(t=a.createElement("link"),Wt(t,"link",e),rt(t),a.head.appendChild(t)))}}function Zh(e,t){ja.m(e,t);var n=li;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ri(e)}if(!$n.has(i)&&(e=L({rel:"modulepreload",href:e},t),$n.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qi(i)))return}a=n.createElement("link"),Wt(a,"link",e),rt(a),n.head.appendChild(a)}}}function Qh(e,t,n){ja.S(e,t,n);var a=li;if(a&&e){var l=Xt(a).hoistableStyles,i=ii(e);t=t||"default";var c=l.get(i);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Zi(i)))d.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$n.get(i))&&ms(e,n);var g=c=a.createElement("link");rt(g),Wt(g,"link",e),g._p=new Promise(function(z,G){g.onload=z,g.onerror=G}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,ao(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(i,c)}}}function Kh(e,t){ja.X(e,t);var n=li;if(n&&e){var a=Xt(n).hoistableScripts,l=ri(e),i=a.get(l);i||(i=n.querySelector(Qi(l)),i||(e=L({src:e,async:!0},t),(t=$n.get(l))&&gs(e,t),i=n.createElement("script"),rt(i),Wt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Jh(e,t){ja.M(e,t);var n=li;if(n&&e){var a=Xt(n).hoistableScripts,l=ri(e),i=a.get(l);i||(i=n.querySelector(Qi(l)),i||(e=L({src:e,async:!0,type:"module"},t),(t=$n.get(l))&&gs(e,t),i=n.createElement("script"),rt(i),Wt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function tp(e,t,n,a){var l=(l=I.current)?no(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ii(n.href),n=Xt(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ii(n.href);var i=Xt(l).hoistableStyles,c=i.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=l.querySelector(Zi(e)))&&!i._p&&(c.instance=i,c.state.loading=5),$n.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(e,n),i||Fh(l,e,n,c.state))),t&&a===null)throw Error(s(528,""));return c}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(n),n=Xt(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ii(e){return'href="'+Qt(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function np(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function Fh(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Wt(t,"link",n),rt(t),e.head.appendChild(t))}function ri(e){return'[src="'+Qt(e)+'"]'}function Qi(e){return"script[async]"+e}function ap(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,rt(a),a;var l=L({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),rt(a),Wt(a,"style",l),ao(a,n.precedence,e),t.instance=a;case"stylesheet":l=ii(n.href);var i=e.querySelector(Zi(l));if(i)return t.state.loading|=4,t.instance=i,rt(i),i;a=np(n),(l=$n.get(l))&&ms(a,l),i=(e.ownerDocument||e).createElement("link"),rt(i);var c=i;return c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Wt(i,"link",a),t.state.loading|=4,ao(i,n.precedence,e),t.instance=i;case"script":return i=ri(n.src),(l=e.querySelector(Qi(i)))?(t.instance=l,rt(l),l):(a=n,(l=$n.get(i))&&(a=L({},n),gs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),rt(l),Wt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ao(a,n.precedence,e));return t.instance}function ao(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===t)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lo=null;function lp(e,t,n){if(lo===null){var a=new Map,l=lo=new Map;l.set(n,a)}else l=lo,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[ut]||i[kt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var d=a.get(c);d?d.push(i):a.set(c,[i])}}return a}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Wh(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ih(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ii(a.href),i=t.querySelector(Zi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=io.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,rt(i);return}i=t.ownerDocument||t,a=np(a),(l=$n.get(l))&&ms(a,l),i=i.createElement("link"),rt(i);var c=i;c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Wt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=io.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xs=0;function Ph(e,t){return e.stylesheets&&e.count===0&&oo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&oo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&xs===0&&(xs=62500*Lh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>xs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function io(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ro=null;function oo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ro=new Map,t.forEach(e2,e),ro=null,io.call(e))}function e2(e,t){if(!(t.state.loading&4)){var n=ro.get(e);if(n)var a=n.get(null);else{n=new Map,ro.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}l=t.instance,c=l.getAttribute("data-precedence"),i=n.get(c)||a,i===a&&n.set(null,l),n.set(c,l),this.count++,a=io.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ki={$$typeof:me,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function t2(e,t,n,a,l,i,c,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.hiddenUpdates=oa(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function op(e,t,n,a,l,i,c,d,g,z,G,Q){return e=new t2(e,t,n,c,g,z,G,Q,d),t=1,i===!0&&(t|=24),i=Cn(3,null,null,t),e.current=i,i.stateNode=e,t=Fo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},ec(i),e}function cp(e){return e?(e=ql,e):ql}function sp(e,t,n,a,l,i){l=cp(l),a.context===null?a.context=l:a.pendingContext=l,a=qa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Ha(e,a,t),n!==null&&(wn(n,e,t),Ai(n,e,t))}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ys(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function dp(e){if(e.tag===13||e.tag===31){var t=cl(e,67108864);t!==null&&wn(t,e,67108864),ys(e,67108864)}}function fp(e){if(e.tag===13||e.tag===31){var t=Nn();t=Ea(t);var n=cl(e,t);n!==null&&wn(n,e,t),ys(e,t)}}var co=!0;function n2(e,t,n,a){var l=y.T;y.T=null;var i=j.p;try{j.p=2,bs(e,t,n,a)}finally{j.p=i,y.T=l}}function a2(e,t,n,a){var l=y.T;y.T=null;var i=j.p;try{j.p=8,bs(e,t,n,a)}finally{j.p=i,y.T=l}}function bs(e,t,n,a){if(co){var l=vs(a);if(l===null)is(e,t,a,so,n),hp(e,a);else if(i2(l,e,t,n,a))a.stopPropagation();else if(hp(e,a),t&4&&-1<l2.indexOf(e)){for(;l!==null;){var i=Yt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=tn(i.pendingLanes);if(c!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var g=1<<31-vt(c);d.entanglements[1]|=g,c&=~g}aa(i),(it&6)===0&&(Vr=St()+500,$i(0))}}break;case 31:case 13:d=cl(i,2),d!==null&&wn(d,i,2),Qr(),ys(i,2)}if(i=vs(a),i===null&&is(e,t,a,so,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else is(e,t,a,null,n)}}function vs(e){return e=ie(e),ws(e)}var so=null;function ws(e){if(so=null,e=Zt(e),e!==null){var t=S(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=A(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return so=e,null}function pp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case Lt:return 2;case cn:return 8;case _t:case Wn:return 32;case Ca:return 268435456;default:return 32}default:return 32}}var Ss=!1,Ja=null,Fa=null,Wa=null,Ji=new Map,Fi=new Map,Ia=[],l2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hp(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function Wi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Yt(t),t!==null&&dp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function i2(e,t,n,a,l){switch(t){case"focusin":return Ja=Wi(Ja,e,t,n,a,l),!0;case"dragenter":return Fa=Wi(Fa,e,t,n,a,l),!0;case"mouseover":return Wa=Wi(Wa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Ji.set(i,Wi(Ji.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Fi.set(i,Wi(Fi.get(i)||null,e,t,n,a,l)),!0}return!1}function mp(e){var t=Zt(e.target);if(t!==null){var n=S(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,zl(e.priority,function(){fp(n)});return}}else if(t===31){if(t=A(n),t!==null){e.blockedOn=t,zl(e.priority,function(){fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);$=a,n.target.dispatchEvent(a),$=null}else return t=Yt(n),t!==null&&dp(t),e.blockedOn=n,!1;t.shift()}return!0}function gp(e,t,n){uo(e)&&n.delete(t)}function r2(){Ss=!1,Ja!==null&&uo(Ja)&&(Ja=null),Fa!==null&&uo(Fa)&&(Fa=null),Wa!==null&&uo(Wa)&&(Wa=null),Ji.forEach(gp),Fi.forEach(gp)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ss||(Ss=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,r2)))}var po=null;function xp(e){po!==e&&(po=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){po===e&&(po=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(ws(a||n)===null)continue;break}var i=Yt(n);i!==null&&(e.splice(t,3),t-=3,vc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function oi(e){function t(g){return fo(g,e)}Ja!==null&&fo(Ja,e),Fa!==null&&fo(Fa,e),Wa!==null&&fo(Wa,e),Ji.forEach(t),Fi.forEach(t);for(var n=0;n<Ia.length;n++){var a=Ia[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ia.length&&(n=Ia[0],n.blockedOn===null);)mp(n),n.blockedOn===null&&Ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],c=l[Y]||null;if(typeof i=="function")c||xp(n);else if(c){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[Y]||null)d=c.formAction;else if(ws(l)!==null)continue}else d=c.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),xp(n)}}}function yp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ks(e){this._internalRoot=e}ho.prototype.render=ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Nn();sp(n,a,e,t,null,null)},ho.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sp(e.current,2,null,e,null,null),Qr(),t[ge]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Na();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ia.length&&t!==0&&t<Ia[n].priority;n++);Ia.splice(n,0,e),n===0&&mp(e)}};var bp=f.version;if(bp!=="19.2.1")throw Error(s(527,bp,"19.2.1"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=k(t),e=e!==null?q(e):null,e=e===null?null:e.stateNode,e};var o2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Gn=mo.inject(o2),Me=mo}catch{}}return Pi.createRoot=function(e,t){if(!p(e))throw Error(s(299));var n=!1,a="",l=Cd,i=Ad,c=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=op(e,1,!1,null,null,n,a,null,l,i,c,yp),e[ge]=t.current,ls(e),new ks(t)},Pi.hydrateRoot=function(e,t,n){if(!p(e))throw Error(s(299));var a=!1,l="",i=Cd,c=Ad,d=_d,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=op(e,1,!0,t,n??null,a,l,g,i,c,d,yp),t.context=cp(null),n=t.current,a=Nn(),a=Ea(a),l=qa(a),l.callback=null,Ha(n,l,a),n=a,t.current.lanes=n,Sn(t,n),aa(t),e[ge]=t.current,ls(e),new ho(t)},Pi.version="19.2.1",Pi}var Np;function j2(){if(Np)return _s.exports;Np=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),_s.exports=k2(),_s.exports}var C2=j2();const Mp=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),A2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),_2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.101c.119-1.486.259-3.245 1.303-4.595C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06",clipRule:"evenodd"})}),E2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",d:"M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"})}),z2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",d:"M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"})}),Tp=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.42c0 .417.226.651.621.651h1.187c1.28 0 2.036-.791 2.036-2.145 0-1.353-.753-2.082-2.036-2.082H7.357c-.395 0-.62.234-.62.65zm1.632-.336h-.39V11.26h.39c.595 0 .946.384.946 1.095 0 .78-.325 1.158-.946 1.158m2.698.41c0 .416.226.65.621.65.396 0 .622-.234.622-.65v-.92h1.113c.316 0 .51-.17.51-.466s-.2-.466-.51-.466h-1.113v-.808h1.239c.328 0 .548-.179.548-.495 0-.317-.214-.495-.548-.495h-1.86c-.396 0-.622.234-.622.65z",clipRule:"evenodd"})}),Lp=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-4 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M11 14.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),N2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 0 1-1.54 0v-5.351H5.19v5.351a.77.77 0 1 1-1.54 0V5.673a.77.77 0 0 1 .77-.77",clipRule:"evenodd"})}),M2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061",clipRule:"evenodd"})}),Ms=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25",clipRule:"evenodd"})}),T2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z",clipRule:"evenodd"})}),L2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z",clipRule:"evenodd"})});var ci=Pp();const D2=["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net"];function tr(o){const f=o.match(/^https?:\/\/([\w.-]*\.)?jsdelivr\.net(\/gh\/.*)$/i);if(!f)return[o];const u=f[2];return D2.map(s=>s+u)}const Fn=o=>{const f=Math.floor(o/60),u=Math.floor(o%60);return`${f}:${String(u).padStart(2,"0")}`},R2=({meta:o,title:f="听力音频"})=>{const u=h.useRef(null),s=h.useMemo(()=>{const N=tr(o.src??""),ce=(o.srcs??[]).flatMap(de=>tr(de));return[...N,...ce.filter(de=>!N.includes(de))]},[o.src,o.srcs]),[p,S]=h.useState(0),b=h.useMemo(()=>{const N=s[p]??s[0]??"";return N.startsWith("/")||/^https?:/.test(N)?N:`${window.location.origin}${N.replace(/^\.?\//,"/")}`},[s,p]),A=()=>{S(N=>N<s.length-1?N+1:N)},[w,k]=h.useState(0),[q,L]=h.useState(!1),[U,K]=h.useState(1),P=o.parts,ee=o.questionTimes??{},se=o.segments??[],le=!!(P!=null&&P.length),W=h.useMemo(()=>le?o.duration||0:se.length?se[se.length-1].end:0,[le,o.duration,se]);h.useEffect(()=>{const N=u.current;if(!N)return;const ce=()=>k(N.currentTime),de=()=>L(!1);return N.addEventListener("timeupdate",ce),N.addEventListener("ended",de),()=>{N.removeEventListener("timeupdate",ce),N.removeEventListener("ended",de)}},[]);const me=h.useCallback(()=>{const N=u.current;N&&(N.paused?(N.play(),L(!0)):(N.pause(),L(!1)))},[]),ye=h.useCallback(N=>{const ce=u.current;ce&&(ce.currentTime=Math.max(0,Math.min(N,ce.duration||N)),k(ce.currentTime))},[]),je=h.useCallback(N=>W>0?Math.min(100,Math.max(0,N/W*100)):0,[W]),xe=h.useRef(null),ve=h.useCallback(N=>{const ce=xe.current;if(!ce||W<=0)return;const de=ce.getBoundingClientRect(),Le=Math.min(1,Math.max(0,(N.clientX-de.left)/de.width));ye(Le*W)},[ye,W]),ze=h.useCallback(()=>{const N=Array.from(document.querySelectorAll(".exam-content-root h2")).find(ce=>/Part II|Listening/i.test(ce.textContent||""));N==null||N.scrollIntoView({behavior:"smooth",block:"start"})},[]);h.useEffect(()=>{if(!le)return;const N=ce=>{const de=ce.detail??{},Le=typeof de.time=="number"?de.time:de.no!=null?ee[de.no]:void 0;if(Le==null)return;ze(),ye(Le);const y=u.current;y&&(y.play(),L(!0))};return window.addEventListener("cet:lp2-jump",N),()=>window.removeEventListener("cet:lp2-jump",N)},[le,ee,ye,ze]);const[re,fe]=h.useState(0);h.useEffect(()=>{const N=xe.current;if(!N)return;const ce=()=>fe(N.clientWidth);ce();const de=new ResizeObserver(ce);return de.observe(N),()=>de.disconnect()},[le]);const ne=N=>{var ce;return((ce=o.labels)==null?void 0:ce[N])??`第 ${N+1} 段`};if(!o.src)return null;if(le&&P){const N=je(w),ce=Object.entries(ee).map(([D,X])=>({no:D,x:Number(X)/(W||1)*re}));ce.sort((D,X)=>D.x-X.x);const de=1;let Le=-1/0;const y=ce.map(D=>{const X=D.no.length*4+2,J=Math.max(0,Le+de-(D.x-X/2));return Le=D.x+J+X/2,{no:D.no,cx:D.x+J}}),j=(()=>{const D=(P??[]).map((_,Z)=>{const te=Z+1<P.length?P[Z+1].start:W,pe=_.start/(W||1)*100,I=te/(W||1)*100;return{label:_.label,start:_.start,mid:(pe+I)/2}}),X=_=>Math.max(24,_.length*5.4+8)/(re||1)*100,J=1.2;let m=-1/0;return D.map(_=>{const Z=X(_.label),te=Math.max(Z/2,_.mid+Math.max(0,m+J-(_.mid-Z/2)));return m=te+Z/2,{..._,mid:Math.min(te,100-Z/2)}})})();return r.jsxs("div",{className:"lp2",children:[r.jsx("audio",{ref:u,src:b,preload:"metadata",onError:A}),r.jsx("button",{type:"button",className:"lp2-play",onClick:me,"aria-label":q?"暂停":"播放",children:q?"❚❚":"▶"}),r.jsxs("div",{className:"lp2-times",children:[r.jsx("span",{className:"lp2-cur",children:Fn(w)}),r.jsx("span",{className:"lp2-total",children:Fn(W)})]}),r.jsxs("div",{className:"lp2-mid",children:[r.jsxs("div",{className:"lp2-labels",children:[P[0]&&P[0].start>3&&r.jsx("button",{type:"button",className:"lp2-part-label is-intro",style:{left:`${je(P[0].start)/2}%`},onClick:()=>ye(0),title:`念题目 ${Fn(0)} - ${Fn(P[0].start)}`,children:"念题"}),j.map(D=>r.jsx("button",{type:"button",className:"lp2-part-label",style:{left:`${D.mid}%`},onClick:()=>ye(D.start),title:`${D.label} ${Fn(D.start)}`,children:D.label},D.label))]}),r.jsxs("div",{className:"lp2-track",ref:xe,onClick:ve,role:"slider","aria-label":"播放进度","aria-valuemin":0,"aria-valuemax":W,"aria-valuenow":Math.round(w),children:[P[0]&&P[0].start>3&&r.jsx("span",{className:"lp2-segblock is-intro",style:{left:"2px",width:`calc(${je(P[0].start)}% - 4px)`}},"seg-intro"),P.map((D,X)=>{const J=X+1<P.length?P[X+1].start:W;if(J<=D.start)return null;const m=je(D.start),_=je(J)-je(D.start);return r.jsx("span",{className:"lp2-segblock",style:{left:`calc(${m}% + 2px)`,width:`calc(${_}% - 4px)`}},`seg-${D.label}`)}),r.jsx("div",{className:"lp2-glow",style:{width:`${N}%`}}),y.map(D=>r.jsx("span",{className:"lp2-mark",style:{left:`${D.cx}px`}},`mark-${D.no}`)),r.jsx("div",{className:"lp2-cursor",style:{left:`${N}%`}}),y.map(D=>r.jsx("button",{type:"button",className:"lp2-q",style:{left:`${D.cx}px`},onClick:X=>{X.stopPropagation(),ye(ee[D.no])},title:`第 ${D.no} 题 ${Fn(ee[D.no])}`,children:D.no},`q-${D.no}`))]})]}),r.jsx("select",{className:"lp2-rate",value:U,onChange:D=>{const X=Number(D.target.value);K(X),u.current&&(u.current.playbackRate=X)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(D=>r.jsxs("option",{value:D,children:[D,"x"]},D))}),r.jsx("button",{type:"button",className:"lp2-trans",onClick:ze,children:"听力原文"})]})}return r.jsxs("div",{className:"lp-wrap",children:[r.jsx("audio",{ref:u,src:b,preload:"metadata",onError:A}),r.jsxs("div",{className:"lp-head",children:[r.jsx("button",{type:"button",className:"lp-play",onClick:me,"aria-label":q?"暂停":"播放",children:q?"❚❚":"▶"}),r.jsx("span",{className:"lp-title",children:f}),r.jsxs("span",{className:"lp-time",children:[Fn(w)," / ",Fn(W)]}),r.jsx("select",{className:"lp-rate",value:U,onChange:N=>{const ce=Number(N.target.value);K(ce),u.current&&(u.current.playbackRate=ce)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(N=>r.jsxs("option",{value:N,children:[N,"x"]},N))})]}),r.jsx("div",{className:"lp-segs",children:se.map((N,ce)=>{const de=w>=N.end,Le=w>=N.start&&w<N.end;return r.jsxs("button",{type:"button",className:`lp-seg${de?" is-done":""}${Le?" is-active":""}`,style:{flexGrow:Math.max(.5,N.dur)},onClick:()=>ye(N.start),title:`${ne(ce)} ${Fn(N.start)} - ${Fn(N.end)}`,"aria-label":`跳转到${ne(ce)}`,children:[r.jsx("span",{className:"lp-seg-bar"}),r.jsx("span",{className:"lp-seg-name",children:ne(ce)}),r.jsx("span",{className:"lp-seg-time",children:Fn(N.start)})]},`${N.start}-${ce}`)})}),r.jsx("input",{className:"lp-scrub",type:"range",min:0,max:W||1,step:.1,value:Math.min(w,W||0),onChange:N=>ye(Number(N.target.value)),"aria-label":"播放进度"})]})};function O2(o){if(typeof DOMParser>"u")return o;const f=new DOMParser().parseFromString(o,"text/html");return f.querySelectorAll("script, style, iframe, object, embed, link, meta, base").forEach(u=>u.remove()),f.querySelectorAll("*").forEach(u=>{Array.from(u.attributes).forEach(s=>{const p=s.name.toLowerCase(),S=s.value.trim().toLowerCase();p.startsWith("on")&&u.removeAttribute(s.name),(p==="href"||p==="src")&&S.startsWith("javascript:")&&u.removeAttribute(s.name)})}),f.body.innerHTML}const Dp="background-color: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;",q2="background-color: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1.5rem 0;",H2="background: repeating-linear-gradient(to bottom, transparent, transparent 33px, #d0d7de 33px, #d0d7de 34px); padding: 1rem 1.25rem; border: 1px solid #d0d7de; border-radius: 8px; margin: 1rem 0 1.5rem;",B2=(o,f)=>`<div class="question"><p><strong>${o}.</strong> ${f}</p></div>`,U2=o=>`<div class="question"><p><strong>${o}.</strong></p><div class="options">`+["A","B","C","D"].map(f=>`<div class="option"><strong>${f})</strong> （待补入选项）</div>`).join("")+"</div></div>",wl=(o,f)=>Array.from({length:f-o+1},(u,s)=>U2(o+s)).join(""),Sl=(o,f,u)=>`<p><strong>Questions ${o} to ${f} are based on the ${u} you have just heard.</strong></p>`,Rp=o=>`<div style="${H2}">`+Array.from({length:o},()=>"<p>&nbsp;</p>").join("")+"</div>",Ts={"cet6-2025-12-1":"Living in an increasingly competitive world, college students should better prepare themselves to confront various challenges.","cet6-2025-12-2":"While striving for the Chinese Dream, young people enjoy more opportunities to realize their self-worth.","cet6-2025-12-3":"It is believed that teachers can exert a profound influence on their students' academic pursuit and personal development.","cet6-2025-06-1":"As social media is used more and more extensively, there is a growing awareness of the importance of using it properly and responsibly.","cet6-2025-06-2":"As requirements for job applications are getting increasingly higher, college students ought to be better prepared for their future career.","cet6-2025-06-3":"With the increasing application of AI technology, there is a growing concern that it may negatively impact human creativity."},Y2=o=>{if(!o)return;if(Ts[o])return Ts[o];const f=o.match(/^(cet\d)-(\d{4})-(\d{2})-set(\d)$/);return f?Ts[`${f[1]}-${f[2]}-${f[3]}-${f[4]}`]:void 0},$2=(o,f=["150","200"])=>{const u="&emsp;&emsp;",s=w=>`<em>${w}</em>`,[p,S]=f,b=o?`For this part, you are allowed 30 minutes to write an essay that begins with the sentence &ldquo;<strong>${o}</strong>&rdquo; You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least <u>${p}</u> words but no more than <u>${S}</u> words.`:`For this part, you are allowed 30 minutes to write an essay. You should write at least <u>${p}</u> words but no more than <u>${S}</u> words.`,A=o?`${u}<u><strong>You should copy the sentence given in quotes at the beginning of your essay.</strong></u>`:"";return'<p class="pd-write-dir"><strong>Directions:</strong>'+s(b)+(A?`<br>
${s(A)}`:"")+"</p>"},kl={convA:"In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convB:"In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convC:"In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",banked:"In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on <strong>Answer Sheet 2</strong> with a single line through the centre. You may not use any of the words in the bank more than once.",matching:"In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on <strong>Answer Sheet 2</strong>.",careful:"There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A, B, C and D. You should decide on the best choice and mark the corresponding letter on <strong>Answer Sheet 2</strong> with a single line through the centre.",translation:"For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on <strong>Answer Sheet 2</strong>."},jl=o=>`<p class="pd-dir"><strong>Directions:</strong><em>${o}</em></p>`,G2=o=>{const u=Math.floor(10/o),s=10%o,p=[];let S=26;for(let b=0;b<o;b++){const A=u+(b<s?1:0);p.push([S,S+A-1]),S+=A}return p},X2=(o,f,u)=>{const s=Array.from({length:f-o+1},(p,S)=>`<span class="blank" data-blank="${o+S}">${o+S}</span>`);return`<p class="pd-passage">Paragraph ${u} — to be imported, with `+s.join(" , ")+" in the passage.</p>"},Op="ABCDEFGHIJKLMNOPQRSTUVWXYZ",V2=o=>Array.from({length:Math.min(Math.max(o,1),Op.length)},(f,u)=>`<p><strong>${Op[u]}.</strong> （待导入段落文本）</p>`).join(""),er=(o,f)=>`<div class="question"><p><strong>${o}.</strong> ${f}</p><div class="options">`+["A","B","C","D"].map(u=>`<div class="option"><strong>${u})</strong> （待补入选项）</div>`).join("")+"</div></div>",Z2=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],Q2=o=>Z2[o]??`No.${o+1}`,K2=o=>{const f=Math.min(Math.max(o||2,1),10),u=[];for(let s=0;s<f;s++){const p=46+s*5,S=p+4;u.push(`<p><strong>Passage ${Q2(s)}</strong></p>`,`<p><strong>Questions ${p} to ${S} are based on the following passage.</strong></p>`,'<p class="pd-passage">（文章待导入）</p>',er(String(p),"What is the main idea of the passage?"),er(String(p+1),"According to Paragraph 1, what can be inferred?"),er(String(p+2),"What does the author think of the practice?"),er(String(p+3),"Why does the writer mention the case mentioned?"),er(String(S),"What would the author most probably suggest?"))}return u.join("")},J2=o=>{const f=o.writing||"（待补入写作主题）",u=o.translation||"（待补入翻译段落）",s=o.readingFocus??[],p=o.matchParas??8,S=o.bankedGroups??2,b=o.carefulPassages??2;return["<h2>Part I Writing (30 minutes)</h2>",$2(Y2(o.paperId),o.type==="四级"?["120","180"]:["150","200"]),`<div style="${Dp}"><h3 style="margin-top:0;">写作提示：</h3><ul style="padding-left:20px;"><li>主题：${f}</li>`+(s.length?s.slice(0,3).map(A=>`<li>${A}</li>`).join(""):"<li>立意与结构</li><li>论据与例证</li><li>语言与衔接</li>")+"</ul></div>",Rp(10),"<h2>Part II Listening Comprehension (25 minutes)</h2>",'<h3 class="pd-sec">Section A - Conversations</h3>',jl(kl.convA),Sl(1,4,"conversation"),wl(1,4),Sl(5,8,"conversation"),wl(5,8),'<h3 class="pd-sec">Section B - Passages</h3>',jl(kl.convB),Sl(9,11,"passage"),wl(9,11),Sl(12,15,"passage"),wl(12,15),'<h3 class="pd-sec">Section C - Lectures</h3>',jl(kl.convC),Sl(16,18,"recording"),wl(16,18),Sl(19,21,"recording"),wl(19,21),Sl(22,25,"recording"),wl(22,25),"<h2>Part III Reading Comprehension (40 minutes)</h2>",'<h3 class="pd-break-sec">Section A - Banked Cloze</h3>',jl(kl.banked),G2(S).map(([A,w],k)=>X2(A,w,k+1)).join(""),`<div style="${Dp}"><h3 style="margin-top:0;">词库 Word Bank</h3><ul class="pd-wordbank">`+"ABCDEFGHIJKLMNO".split("").map(A=>`<li>${A}. ______</li>`).join("")+"</ul></div>",'<h3 class="pd-break-sec">Section B - Matching</h3>',jl(kl.matching),V2(p),"<p><strong>Statement list:</strong></p>",...Array.from({length:10},(A,w)=>B2(String(36+w),"Which paragraph does the statement below refer to?")),'<h3 class="pd-break-sec">Section C - Careful Reading</h3>',jl(kl.careful),...K2(b),"<h2>Part IV Translation (30 minutes)</h2>",jl(kl.translation),`<div style="${q2}"><p style="line-height:1.8;"><strong>翻译原文（主题：${u}）：</strong></p><p style="line-height:1.8;">（原文待补入）</p></div>`,"<p><strong>译文作答区：</strong></p>",Rp(12)].join("")},e0=`<svg
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
  </svg>`,t0=`<svg
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
  </svg>`,F2=`<svg
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
</svg>`,nr=({svg:o,cls:f,color:u})=>r.jsx("span",{className:f,"aria-hidden":"true",style:u?{color:u}:void 0,dangerouslySetInnerHTML:{__html:o}}),lt=1e3,qs=14,Ys=[{key:"Red",value:"#fb7081"},{key:"Orange",value:"#ff8c38"},{key:"Yellow",value:"#fcd34d"},{key:"Green",value:"#3cbc36"},{key:"Blue",value:"#84cfff"},{key:"Purple",value:"#6e52df"},{key:"Magenta",value:"#e96cab"},{key:"Grey",value:"#929292"},{key:"Black",value:"#000000"},{key:"White",value:"#ffffff"}],n0=[2,4,6,8,10,12],W2=[10,14,18,22,26,30],So=(o,f)=>{const u=o.replace("#",""),s=u.length===3?u.split("").map(S=>S+S).join(""):u,p=parseInt(s,16);return`rgba(${p>>16&255}, ${p>>8&255}, ${p&255}, ${f})`},Cl={pencil:{color:"#1e96eb",lineWidth:4},marker:{color:"#1e96eb",lineWidth:22},highlight:{color:"#fcd34d",lineWidth:0}},ko={color:"#929292",lineWidth:4,lineStyle:"curve"},go={strokes:[],notes:[],grid:!1,penProps:Cl,shapeProps:ko,eraserSize:qs},xo=()=>Math.random().toString(36).slice(2,9),I2={pencil:2.2,marker:7,curve:2.6};function P2(o){const{pts:f}=o;if(!f.length)return"";if(o.tool==="curve"&&f.length>=2){const[u,s]=[f[0],f[f.length-1]],p=o.lineStyle??"curve";if(p==="straight")return`M ${u.x} ${u.y} L ${s.x} ${s.y}`;if(p==="orthogonal"){const U=(u.x+s.x)/2;return`M ${u.x} ${u.y} L ${U} ${u.y} L ${U} ${s.y} L ${s.x} ${s.y}`}const S=(u.x+s.x)/2,b=(u.y+s.y)/2,A=s.x-u.x,w=s.y-u.y,k=Math.hypot(A,w)||1,q=S-w/k*k*.18,L=b+A/k*k*.18;return`M ${u.x} ${u.y} Q ${q} ${L} ${s.x} ${s.y}`}return"M "+f.map(u=>`${u.x.toFixed(1)} ${u.y.toFixed(1)}`).join(" L ")}const qp=o=>o==="pencil"||o==="marker"||o==="curve"||o==="highlight"||o==="underline",em=({ann:o,tool:f,penProps:u,shapeProps:s,onAddStroke:p,onAppendPoint:S,onSnap:b,onEraseIds:A,onEraseLocal:w,eraserSize:k,onAddNote:q,onUpdateNote:L})=>{const U=h.useRef(!1),K=h.useRef(null),[P,ee]=h.useState(null),se=h.useRef(15),[le,W]=h.useState(null),[me,ye]=h.useState(null),je=h.useRef(null),xe=h.useRef(null),ve=h.useRef(null),ze=h.useCallback(j=>{je.current=j,ye(j)},[]),re=h.useCallback(j=>{W({x:j.clientX,y:j.clientY})},[]),fe=h.useCallback((j,D)=>{const X=j.getBoundingClientRect(),J=X.left+D.x/lt*X.width,m=X.top+D.y/lt*X.height,_=X.left+(D.x+D.w)/lt*X.width,Z=X.top+(D.y+D.h)/lt*X.height,te=Math.min(J,_),pe=Math.max(J,_),I=Math.min(m,Z),Ne=Math.max(m,Z),Ke=[];for(const Ye of o.strokes)Ye.pts.some(ln=>{const st=X.left+ln.x/lt*X.width,jt=X.top+ln.y/lt*X.height;return st>=te&&st<=pe&&jt>=I&&jt<=Ne})&&Ke.push(Ye.id);const De=[],Ie=120/lt*X.width,Nt=30/lt*X.height;for(const Ye of o.notes){const ln=X.left+Ye.x/lt*X.width,st=X.top+Ye.y/lt*X.height;ln+Ie>=te&&ln<=pe&&st+Nt>=I&&st<=Ne&&De.push(Ye.id)}return{strokeIds:Ke,noteIds:De}},[o]),ne=h.useCallback((j,D,X)=>{const J=j.getBoundingClientRect(),m=J.left+D.x/lt*J.width,_=J.top+D.y/lt*J.height,Z=[];let te=!1;for(const Ke of o.strokes){let De=[],Ie=!1;const Nt=()=>{De.length>=2&&Z.push({...Ke,id:xo(),pts:De}),De=[]};for(const Ye of Ke.pts){const ln=J.left+Ye.x/lt*J.width,st=J.top+Ye.y/lt*J.height;Math.hypot(ln-m,st-_)<=X?(Ie=!0,Nt()):De.push(Ye)}Nt(),Ie&&(te=!0)}const pe=[],I=120/lt*J.width,Ne=30/lt*J.height;for(const Ke of o.notes){const De=J.left+Ke.x/lt*J.width,Ie=J.top+Ke.y/lt*J.height,Nt=Math.max(De,Math.min(m,De+I)),Ye=Math.max(Ie,Math.min(_,Ie+Ne));Math.hypot(m-Nt,_-Ye)<=X&&pe.push(Ke.id)}return pe.length&&(te=!0),{strokes:Z,noteIds:pe,changed:te}},[o]),N=h.useCallback(j=>{const X=j.currentTarget.getBoundingClientRect();return{x:(j.clientX-X.left)/Math.max(1,X.width)*lt,y:(j.clientY-X.top)/Math.max(1,X.height)*lt}},[]),ce=j=>{if(j.button!==0&&j.pointerType==="mouse")return;const D=N(j);if(f==="eraser"){U.current=!0;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}re(j);const J=ne(j.currentTarget,D,k);J.changed&&w(J.strokes,J.noteIds);return}if(f==="box"){U.current=!0,xe.current=D,ze({x:D.x,y:D.y,w:0,h:0}),re(j);try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}return}if(f==="text"||f==="h1"||f==="link"){const J=f==="text"?"text":f==="h1"?"h1":"link";let m,_=J==="h1"?"批注标题":J==="text"?"批注内容":"链接文字";if(J==="link"){const Z=window.prompt("请输入链接地址","https://");if(!Z)return;m=Z,_=m}q({id:xo(),kind:J,x:D.x,y:D.y,text:_,href:m});return}if(!qp(f))return;U.current=!0;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}if(f==="curve"){const J=s;p({id:xo(),tool:"curve",pts:[D],color:J.color,width:J.lineWidth,lineStyle:J.lineStyle});return}if(f==="highlight"||f==="underline"){const J=j.currentTarget.closest(".pd-sheet");se.current=J&&parseFloat(getComputedStyle(J).fontSize)||15,K.current={tool:f,norm:[D],client:[{x:j.clientX,y:j.clientY}]},ee({tool:f,norm:[D]}),U.current=!0;try{j.currentTarget.setPointerCapture(j.pointerId)}catch{}return}const X=u[f];p({id:xo(),tool:f,pts:[D],color:f==="marker"?So(X.color,.3):f==="highlight"?So(X.color,.38):X.color,width:X.lineWidth})},de=j=>{if(f==="eraser"){if(re(j),!U.current)return;const X=N(j),J=ne(j.currentTarget,X,k);J.changed&&w(J.strokes,J.noteIds);return}if(f==="box"){if(re(j),!U.current||!xe.current)return;const X=N(j),J=xe.current;ze({x:Math.min(J.x,X.x),y:Math.min(J.y,X.y),w:Math.abs(X.x-J.x),h:Math.abs(X.y-J.y)});return}if(!U.current)return;const D=N(j);if(K.current){K.current.norm.push(D),K.current.client.push({x:j.clientX,y:j.clientY}),ee({tool:K.current.tool,norm:K.current.norm.slice()});return}S(D)},Le=()=>{if(U.current){if(U.current=!1,f==="box"&&xe.current&&je.current){const j=je.current,D=ve.current;if(D&&(j.w>4||j.h>4)){const{strokeIds:X,noteIds:J}=fe(D,j);(X.length||J.length)&&A(X,J)}xe.current=null,ze(null);return}if(K.current){const j=K.current;K.current=null,ee(null),j.client.length>=2&&b(j.tool,j.client)}}},y=qp(f)||f==="eraser"||f==="box"||f==="text"||f==="h1"||f==="link";return r.jsxs(r.Fragment,{children:[o.grid&&r.jsx("div",{className:"pd-grid-bg","aria-hidden":"true"}),r.jsxs("svg",{ref:ve,className:"pd-anno-svg",viewBox:`0 0 ${lt} ${lt}`,preserveAspectRatio:"none",style:{pointerEvents:y?"auto":"none"},onPointerDown:ce,onPointerMove:de,onPointerUp:Le,onPointerLeave:j=>{f==="eraser"&&W(null),Le()},onPointerCancel:Le,children:[o.strokes.map(j=>{if(j.tool==="highlight"){const D=j.pts.map(_=>_.x),X=j.pts.map(_=>_.y),J=Math.min(...D),m=Math.min(...X);return r.jsx("rect",{x:J,y:m,width:Math.max(...D)-J,height:Math.max(...X)-m,rx:"0.5",fill:j.color,style:{pointerEvents:"none"}},j.id)}if(j.tool==="underline"){const D=j.pts.map(J=>J.x),X=Math.max(...j.pts.map(J=>J.y));return r.jsx("line",{x1:Math.min(...D),y1:X,x2:Math.max(...D),y2:X,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",style:{stroke:j.color,pointerEvents:"none"}},j.id)}return r.jsx("path",{d:P2(j),fill:"none",strokeWidth:j.width??I2[j.tool],strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{stroke:j.color,pointerEvents:"none"}},j.id)}),P&&(()=>{const j=P.tool==="highlight",D=u.highlight.color,X=j?So(D,.38):D,J=j?se.current*1.05:2,m="M "+P.norm.map(_=>`${_.x.toFixed(1)} ${_.y.toFixed(1)}`).join(" L ");return r.jsx("path",{d:m,fill:"none",stroke:X,strokeWidth:J,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}},"__temp__")})(),me&&(me.w>0||me.h>0)&&r.jsx("rect",{x:me.x,y:me.y,width:me.w,height:me.h,fill:"rgba(47,107,255,.10)",stroke:"var(--affine-primary-color)",strokeWidth:1.5,strokeDasharray:"6 4",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}})]}),f==="eraser"&&le&&r.jsx("div",{className:"pd-erase-cursor",style:{left:le.x,top:le.y,width:k*2,height:k*2}}),o.notes.map(j=>r.jsx(tm,{note:j,onChange:D=>L(j.id,D)},j.id))]})},tm=({note:o,onChange:f})=>{const u=h.useRef(null);h.useEffect(()=>{u.current&&document.activeElement!==u.current&&(u.current.textContent=o.text)},[o.text]);const s=o.kind==="h1"?"pd-note pd-note-h1":o.kind==="link"?"pd-note pd-note-link":"pd-note";return r.jsx("div",{className:s,style:{left:`${o.x/lt*100}%`,top:`${o.y/lt*100}%`,transform:"translate(-6px, -8px) rotate(-1.5deg)"},contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,ref:u,onBlur:()=>{var p;f({text:((p=u.current)==null?void 0:p.textContent)??""})},onKeyDown:p=>{p.stopPropagation(),p.key==="Escape"&&p.target.blur()},onPointerDown:p=>{p.stopPropagation()}})},$s=({widths:o,value:f,onPick:u})=>{const s=o.length,p=Math.max(1,o.filter(w=>w<=f).length),S=100/s,b={left:`${S/2}%`,right:`${S/2}%`},A={left:`${S/2}%`,width:`${(p-1)*S}%`};return r.jsxs("div",{className:"pd-pm-widths",role:"slider","aria-valuenow":f,children:[r.jsx("span",{className:"pd-pm-line",style:b,"aria-hidden":"true"}),r.jsx("span",{className:"pd-pm-line-fill",style:A,"aria-hidden":"true"}),o.map((w,k)=>{const q=4+k*2;return r.jsx("button",{type:"button",className:`pd-pm-cell${w<=f?" sel":""}`,onClick:()=>u(w),"aria-label":`线宽 ${w}`,children:r.jsx("span",{className:"pd-pm-dot",style:{width:q,height:q}})},w)})]})},nm=({pen:o,penProps:f,onPen:u,onSetting:s})=>{const p=o==="pencil"?n0:W2,S=f[o];return r.jsxs("div",{className:"pd-pen-menu",onPointerDown:b=>b.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-pm-pen${o==="pencil"?" is-on":""}`,onClick:()=>u("pencil"),title:"画笔","aria-label":"画笔","aria-pressed":o==="pencil",children:r.jsx(nr,{svg:e0,cls:"pd-tb-illus",color:o==="pencil"?f.pencil.color:"var(--affine-primary-color)"})}),r.jsx("button",{type:"button",className:`pd-pm-pen${o==="marker"?" is-on":""}`,onClick:()=>u("marker"),title:"荧光笔","aria-label":"荧光笔","aria-pressed":o==="marker",children:r.jsx(nr,{svg:t0,cls:"pd-tb-illus",color:o==="marker"?f.marker.color:"var(--affine-primary-color)"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx($s,{widths:p,value:S.lineWidth,onPick:b=>s(o,{lineWidth:b})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Ys.map(b=>r.jsx("button",{type:"button",className:`pd-pm-cdot${S.color.toLowerCase()===b.value.toLowerCase()?" sel":""}`,style:{background:b.value,...b.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>s(o,{color:b.value}),"aria-label":b.key,title:b.key},b.key))})]})},am=[{key:"curve",title:"曲线",Icon:_2},{key:"orthogonal",title:"直角",Icon:E2},{key:"straight",title:"直线",Icon:z2}],lm=({shapeProps:o,onSetting:f})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:u=>u.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[am.map(({key:u,title:s,Icon:p})=>r.jsx("button",{type:"button",className:`pd-pm-shape${o.lineStyle===u?" is-on":""}`,onClick:()=>f({lineStyle:u}),title:s,"aria-label":s,"aria-pressed":o.lineStyle===u,children:r.jsx(p,{})},u)),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx($s,{widths:n0,value:o.lineWidth,onPick:u=>f({lineWidth:u})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Ys.map(u=>r.jsx("button",{type:"button",className:`pd-pm-cdot${o.color.toLowerCase()===u.value.toLowerCase()?" sel":""}`,style:{background:u.value,...u.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>f({color:u.value}),"aria-label":u.key,title:u.key},u.key))})]}),im=()=>r.jsxs("span",{className:"pd-tb-note-stack","aria-hidden":"true",children:[r.jsx("span",{className:"pd-ns-paper pd-ns-p1",children:r.jsx(M2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p2",children:r.jsx(N2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p3",children:r.jsx(L2,{})})]}),el=({icon:o,active:f,onClick:u,title:s})=>r.jsx("button",{type:"button",className:`pd-tb-btn${f?" is-active":""}`,onClick:u,title:s,"aria-label":s,"aria-pressed":f,children:o}),rm=({mode:o})=>{const f={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round"};return o==="word"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("text",{x:"12",y:"16.5",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"currentColor",stroke:"none",fontFamily:"serif",children:"A"}),r.jsx("path",{d:"M5 20.5h14",...f})]}):o==="sentence"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("path",{d:"M4 8h16M4 13h9",...f}),r.jsx("circle",{cx:"16.2",cy:"13",r:"1.4",fill:"currentColor"})]}):o==="paragraph"?r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:r.jsx("path",{d:"M4 6.5h16M4 11.5h16M4 16.5h9",...f})}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"2",...f}),r.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5",...f})]})},om=[{key:"word",title:"单词翻译"},{key:"sentence",title:"句子翻译"},{key:"paragraph",title:"整段翻译"},{key:"full",title:"全文翻译"}],cm=({mode:o,onMode:f})=>r.jsx("div",{className:"pd-pen-menu",onPointerDown:u=>u.stopPropagation(),children:om.map(u=>r.jsxs("button",{type:"button",className:`pd-trans-btn${o===u.key?" is-on":""}`,onClick:()=>f(u.key),title:u.title,"aria-label":u.title,"aria-pressed":o===u.key,children:[r.jsx(rm,{mode:u.key}),r.jsx("span",{children:u.title})]},u.key))}),Hs=({mode:o,color:f})=>o==="highlight"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("rect",{x:"4.2",y:"4.6",width:"12.5",height:"7.2",rx:"2",transform:"rotate(-9 10.5 8)",fill:"currentColor"}),r.jsx("path",{d:"M4 17.2h16M4 20.4h10",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M7 3.5v7.5a5 5 0 0 0 10 0V3.5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),r.jsx("path",{d:"M4.5 20.5h15",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),sm=({mode:o,color:f,onMode:u,onColor:s})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-hl-btn${o==="highlight"?" is-on":""}`,onClick:()=>u("highlight"),title:"高亮","aria-label":"高亮","aria-pressed":o==="highlight",children:r.jsx(Hs,{mode:"highlight",color:o==="highlight"?f:"currentColor"})}),r.jsx("button",{type:"button",className:`pd-hl-btn${o==="underline"?" is-on":""}`,onClick:()=>u("underline"),title:"下划线","aria-label":"下划线","aria-pressed":o==="underline",children:r.jsx(Hs,{mode:"underline",color:o==="underline"?f:"currentColor"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx("div",{className:"pd-pm-colors",children:Ys.filter(p=>p.key!=="White"&&p.key!=="Black").map(p=>r.jsx("button",{type:"button",className:`pd-pm-cdot${f.toLowerCase()===p.value.toLowerCase()?" sel":""}`,style:{background:p.value},onClick:()=>s(p.value),"aria-label":p.key,title:p.key},p.key))})]}),um=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 7L4 12l5 5"}),r.jsx("path",{d:"M4 12h11a5 5 0 0 1 0 10h-1"})]}),dm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12V5.2a1.4 1.4 0 0 1 2.8 0V11"}),r.jsx("path",{d:"M10.8 10.6V4.4a1.4 1.4 0 0 1 2.8 0v6.2"}),r.jsx("path",{d:"M13.6 10.8V5.6a1.4 1.4 0 0 1 2.8 0V12"}),r.jsx("path",{d:"M16.4 11.2a1.4 1.4 0 0 1 2.8.3v2.9A7.2 7.2 0 0 1 12 21.4c-2.6 0-4.3-.9-5.6-3L4.5 15c-.7-1.1-.4-2.3.6-2.9.9-.5 2-.3 2.6.5l.9 1.2"})]}),fm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"4",y:"4.5",width:"16",height:"15",rx:"2",strokeDasharray:"3.2 2.6"}),r.jsx("path",{d:"M9.5 9.5l5 5M14.5 9.5l-5 5"})]}),pm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2.5",y:"4.5",width:"8.5",height:"15",rx:"1.2"}),r.jsx("rect",{x:"13",y:"4.5",width:"8.5",height:"15",rx:"1.2"})]}),hm=({paper:o})=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:o?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3.5h8.5L19 8v12.5H6z"}),r.jsx("path",{d:"M14 3.5V8h5"}),r.jsx("path",{d:"M9 12h7M9 15h7M9 18h4.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"5",cy:"7",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"12",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"17",r:"1.1"}),r.jsx("path",{d:"M9 7h10M9 12h10M9 17h10"})]})}),mm=({tool:o,onTool:f,penProps:u,onPenSetting:s,shapeProps:p,onShapeSetting:S,zoom:b,onZoom:A,onUndo:w,canUndo:k,eraserSize:q,onEraserSize:L,spread:U,onToggleSpread:K,examMode:P,onToggleExamMode:ee})=>{const[se]=h.useState(!1),[le,W]=h.useState(!1),[me,ye]=h.useState(!1),[je,xe]=h.useState(!1),[ve,ze]=h.useState(!1),[re,fe]=h.useState(()=>localStorage.getItem("cet:hl:mode")==="underline"?"underline":"highlight"),[ne,N]=h.useState(!1),[ce,de]=h.useState(!1),[Le,y]=h.useState(()=>{const I=localStorage.getItem("cet:trans:mode");return I==="sentence"||I==="paragraph"||I==="full"?I:"word"}),[j,D]=h.useState(!1),X=I=>{f(I),xe(I==="pencil"||I==="marker"),ze(I==="curve"),ye(I==="eraser"),I!=="highlight"&&I!=="underline"&&N(!1),I!=="select"&&D(!1)},J=I=>{y(I);try{localStorage.setItem("cet:trans:mode",I)}catch{}},m=()=>{o==="highlight"||o==="underline"?N(I=>!I):(f(re),N(!0))},_=I=>{fe(I);try{localStorage.setItem("cet:hl:mode",I)}catch{}f(I)},Z=I=>{o===I?xe(Ne=>!Ne):X(I)},te=()=>{o==="curve"?ze(I=>!I):X("curve")},pe=()=>{o==="eraser"?ye(I=>!I):(f("eraser"),ye(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pd-float-bar","data-collapsed":se?"true":"false","data-hidden":le?"true":"false",children:[je&&!se&&(o==="pencil"||o==="marker")&&r.jsx(nm,{pen:o==="pencil"?"pencil":"marker",penProps:u,onPen:I=>f(I),onSetting:s}),ve&&!se&&o==="curve"&&r.jsx(lm,{shapeProps:p,onSetting:S}),j&&!se&&o==="select"&&r.jsx(cm,{mode:Le,onMode:J}),ne&&!se&&(o==="highlight"||o==="underline")&&r.jsx(sm,{mode:re,color:u.highlight.color,onMode:_,onColor:I=>s("highlight",{color:I})}),ce&&!se&&r.jsxs("div",{className:"pd-zoom-menu",onPointerDown:I=>I.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>A(b-.1),title:"缩小",children:"−"}),r.jsxs("span",{className:"pd-zoom-val",children:[Math.round(b*100),"%"]}),r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>A(b+.1),title:"放大",children:"＋"}),r.jsx("button",{type:"button",className:"pd-zoom-btn pd-zoom-reset",onClick:()=>A(1),title:"重置为 100%",children:"重置"}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(U?" is-on":""),onClick:K,title:U?"切换为单页浏览":"双页浏览：左右并排显示试卷","aria-pressed":U,children:[r.jsx(pm,{}),r.jsx("span",{children:"双页"})]}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(P==="paper"?" is-on":""),onClick:ee,title:P==="paper"?"当前为模拟真实试卷预览（A4 连续密排、纯净只读），点击切换回按题预览":"当前为按题预览（每种题型一张纸、纸高随内容、可作答），点击切换为模拟真实试卷","aria-pressed":P==="paper",children:[r.jsx(hm,{paper:P==="paper"}),r.jsx("span",{children:P==="paper"?"试卷":"按题"})]})]}),me&&!se&&o==="eraser"&&r.jsxs("div",{className:"pd-pen-menu pd-erase-menu",onPointerDown:I=>I.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-erase-delbtn",onClick:()=>{ye(!1),f("box")},title:"框选删除：拖拽矩形批量清除笔迹与批注","aria-label":"框选删除",children:r.jsx(fm,{})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx($s,{widths:[8,14,22,32],value:q,onPick:L})]}),r.jsx(el,{icon:r.jsx(um,{}),active:!1,onClick:w,title:"回缩上一笔 (Ctrl+Z)"}),r.jsxs("div",{className:"pd-tb-group",children:[r.jsx(el,{icon:r.jsx(dm,{}),active:ce,onClick:()=>de(I=>!I),title:"缩放试卷（双指捏合 / Ctrl+滚轮）"}),r.jsx(el,{icon:r.jsx(Hs,{mode:re,color:u.highlight.color}),active:o==="highlight"||o==="underline",onClick:m,title:"高亮 / 下划线"}),r.jsx(el,{icon:r.jsx(T2,{}),active:o==="curve",onClick:te,title:"形状 / 连接线 (C)"})]}),!se&&r.jsxs("div",{className:"pd-tb-group pd-tb-senior",children:[r.jsx(el,{icon:r.jsx(im,{}),active:o==="text",onClick:()=>X("text"),title:"批注便签 (T)"}),r.jsx(el,{icon:r.jsx(nr,{svg:e0,cls:"pd-tb-illus",color:o==="pencil"?u.pencil.color:"var(--affine-primary-color)"}),active:o==="pencil",onClick:()=>Z("pencil"),title:"铅笔 (P)"}),r.jsx(el,{icon:r.jsx(nr,{svg:t0,cls:"pd-tb-illus",color:o==="marker"?u.marker.color:"var(--affine-primary-color)"}),active:o==="marker",onClick:()=>Z("marker"),title:"马克笔 (M)"}),r.jsx(el,{icon:r.jsx(nr,{svg:F2,cls:"pd-tb-illus pd-tb-illus-erase"}),active:o==="eraser",onClick:pe,title:"橡皮擦 (E)：点击调整擦除大小与删除"})]}),!se&&r.jsx("button",{type:"button",className:"pd-tb-arrow pd-tb-arrow-next",onClick:()=>W(!0),title:"隐藏工具栏","aria-label":"隐藏工具栏",children:r.jsx(Mp,{})})]}),le&&r.jsx("button",{type:"button",className:"pd-bar-show",onClick:()=>W(!1),title:"显示工具栏","aria-label":"显示工具栏",children:r.jsx(Mp,{})})]})},gm=o=>{const f=`cet:anno:${o}`,[u,s]=h.useState(go),[p,S]=h.useState("select"),b=h.useRef(!1);h.useEffect(()=>{var re,fe,ne;try{const N=localStorage.getItem(f);if(N){const ce=JSON.parse(N),de=(re=ce.penProps)==null?void 0:re.marker;s({strokes:ce.strokes??[],notes:ce.notes??[],grid:ce.grid??!1,penProps:{highlight:{...Cl.highlight,...((fe=ce.penProps)==null?void 0:fe.highlight)??{}},pencil:{...Cl.pencil,...((ne=ce.penProps)==null?void 0:ne.pencil)??{}},marker:{...Cl.marker,...de??{},...(de==null?void 0:de.color)==="#fb7081"?{color:Cl.marker.color}:{}}},shapeProps:{...ko,...ce.shapeProps??{}},eraserSize:ce.eraserSize??qs})}else s(go)}catch{s(go)}b.current=!0},[f]),h.useEffect(()=>{if(!b.current)return;const re=setTimeout(()=>{try{localStorage.setItem(f,JSON.stringify(u))}catch{}},400);return()=>clearTimeout(re)},[u,f]);const A=h.useRef(null),w=h.useCallback(re=>{A.current=re.id,s(fe=>({...fe,strokes:[...fe.strokes,re]}))},[]),k=h.useCallback(re=>{const fe=A.current;!fe||!re||s(ne=>({...ne,strokes:ne.strokes.map(N=>N.id===fe?{...N,pts:[...N.pts,re]}:N)}))},[]),q=h.useCallback(re=>{s(fe=>({...fe,notes:[re]}))},[]),L=h.useCallback((re,fe)=>{s(ne=>({...ne,notes:ne.notes.map(N=>N.id===re?{...N,...fe}:N)}))},[]),U=h.useCallback((re,fe)=>{s(ne=>{const N=new Set(re),ce=new Set(fe);return{...ne,strokes:N.size?ne.strokes.filter(de=>!N.has(de.id)):ne.strokes,notes:ce.size?ne.notes.filter(de=>!ce.has(de.id)):ne.notes}})},[]),K=h.useCallback((re,fe)=>{s(ne=>{const N=new Set(fe);return{...ne,strokes:re,notes:N.size?ne.notes.filter(ce=>!N.has(ce.id)):ne.notes}})},[]),P=h.useCallback(re=>{s(fe=>({...fe,strokes:fe.strokes.map(ne=>({...ne,pts:ne.pts.map(re)})),notes:fe.notes.map(ne=>{const N=re({x:ne.x,y:ne.y});return{...ne,x:N.x,y:N.y}})}))},[]),ee=h.useRef(u);ee.current=u;const se=h.useCallback(re=>{const fe=[],ne=N=>{const ce=re(N);fe.push({...ce,orig:N})};return ee.current.strokes.forEach(N=>N.pts.forEach(ne)),ee.current.notes.forEach(N=>ne({x:N.x,y:N.y})),fe},[]),le=h.useCallback((re,fe)=>{if(!re.length)return;const ne={el:null,dx:0,dy:0,orig:{x:0,y:0}};s(N=>{let ce=0;const de=()=>re[ce++]??ne;return{...N,strokes:N.strokes.map(Le=>({...Le,pts:Le.pts.map(()=>fe(de()))})),notes:N.notes.map(Le=>{const y=fe(de());return{...Le,x:y.x,y:y.y}})}})},[]),W=h.useCallback(re=>{s(fe=>({...fe,eraserSize:Math.max(4,Math.min(60,Math.round(re)))}))},[]),me=h.useCallback(re=>{s(fe=>({...fe,grid:re}))},[]),ye=h.useCallback((re,fe)=>{s(ne=>{const N=ne.penProps??Cl;return{...ne,penProps:{...N,[re]:{...N[re],...fe}}}})},[]),je=h.useCallback(re=>{s(fe=>({...fe,shapeProps:{...fe.shapeProps??ko,...re}}))},[]),xe=h.useCallback(()=>{s(re=>re.notes.length?{...re,notes:re.notes.slice(0,-1)}:re.strokes.length?{...re,strokes:re.strokes.slice(0,-1)}:re)},[]),ve=h.useCallback(()=>s(go),[]),ze=h.useMemo(()=>({v:"select",g:"select",c:"curve",k:"link",p:"pencil",t:"text",h:"h1",m:"marker",e:"eraser"}),[]);return h.useEffect(()=>{const re=fe=>{const ne=fe.target;if(ne&&(ne.isContentEditable||/input|textarea/i.test(ne.tagName)))return;if((fe.ctrlKey||fe.metaKey)&&fe.key.toLowerCase()==="z"){fe.preventDefault(),xe();return}if(fe.ctrlKey||fe.metaKey||fe.altKey)return;const N=ze[fe.key.toLowerCase()];if(N){if(N==="select"&&fe.key.toLowerCase()==="g"){s(ce=>({...ce,grid:!ce.grid}));return}S(N)}};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[ze,xe]),{ann:u,tool:p,setTool:S,addStroke:w,appendPoint:k,addNote:q,updateNote:L,eraseIds:U,eraseLocal:K,mapAnnotations:P,captureAnchors:se,applyAnchors:le,eraserSize:u.eraserSize??qs,setEraserSize:W,setGrid:me,setPenSetting:ye,setShapeSetting:je,undo:xe,clear:ve,penProps:u.penProps??Cl,shapeProps:u.shapeProps??ko,canUndo:u.strokes.length>0||u.notes.length>0}},Hp=o=>{let u=(o.closest(".qblock")||o).previousElementSibling;for(;u;){const s=(u.textContent||"").trim();if(/^Questions\s+\d+/i.test(s))return s;u=u.previousElementSibling}return""},xm=(o,f)=>{var s;document.querySelectorAll(".pd-horn-tip").forEach(p=>p.remove());const u=document.createElement("span");u.className="pd-horn-tip",u.textContent=f,(s=o.parentElement)==null||s.appendChild(u),window.setTimeout(()=>u.remove(),1600)},yo=o=>{const f=Array.from(o.querySelectorAll("h2, h3, .question, .blank, .pd-blank")).sort((b,A)=>b.compareDocumentPosition(A)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);let u="";const s={},p=[],S=[];for(const b of f){if(b.tagName==="H2"||b.tagName==="H3"){const A=(b.textContent||"").trim();/Banked|选词/i.test(A)?u="banked":/Matching|长篇/i.test(A)?u="matching":/Part II|Listening|听力|Conversations|Passages|Lectures/i.test(A)?u="listening":/Careful|Reading Comprehension|阅读理解/i.test(A)?u="careful":/Translation|翻译/i.test(A)?u="translation":/Writing|写作/i.test(A)&&(u="writing");continue}if(b.classList.contains("question")){if(u!=="listening"&&u!=="matching"&&u!=="careful")continue;s[u]=(s[u]||0)+1;const A=u==="listening"?25:10;if(s[u]>A)continue;const k=(u==="listening"?1:u==="matching"?36:46)+s[u]-1,q=b.querySelector(".option")?"choice":"match";p.push({el:b,no:k,zone:u,kind:q});continue}if(u==="banked"){const A=Number(b.getAttribute("data-blank")||0)||26+S.length;S.push(A)}}return{list:p,blankNos:S}},Ls=(o,f,u)=>{const s=[];for(Array.from(o.querySelectorAll(":scope > .pd-page")).forEach(ee=>{const se=ee.querySelector(":scope > .pd-page-body");if(se)for(;se.firstChild;)s.push(se.removeChild(se.firstChild));ee.remove()});o.firstChild;)s.push(o.removeChild(o.firstChild));let p=s.find(ee=>ee instanceof HTMLElement&&ee.classList.contains("pd-head"));if(!p){p=document.createElement("header"),p.className="pd-head";const ee=document.createElement("div");ee.className="pd-head-name",ee.textContent=f,p.appendChild(ee)}const S=[p,...s.filter(ee=>ee!==p)],b=ee=>{const se=document.createElement("div");return se.className="pd-page-foot",se.innerHTML=`<span>${ee}</span>`,se};let A=null;const w=()=>{const ee=document.createElement("div");return ee.className="pd-page",A=document.createElement("div"),A.className="pd-page-body",ee.appendChild(A),o.appendChild(ee),ee},k=[];let q=w();k.push(q);const L=ee=>{A.appendChild(ee)},U="h2.pd-part, h3.pd-break-sec",K=ee=>ee instanceof HTMLElement&&(ee.matches(U)||!!ee.querySelector(U));if(u==="question"){const ee=()=>Array.from(A.children).every(le=>le.matches(U));let se=!1;for(const le of S)K(le)&&(se&&!(ee()&&A.children.length>0)&&(q=w(),k.push(q)),se=!0),L(le)}else{const ee=le=>{const W=[];for(;le.firstChild;){const me=le.firstChild;le.removeChild(me),W.push(me)}return W};let se=0;for(;S.length&&se++<2e4;){const le=S.shift();if(L(le),!(le instanceof HTMLElement)||A.scrollHeight<=A.clientHeight+4)continue;if(Array.from(le.children).length>1&&!/^(TABLE|UL|OL|PRE|BLOCKQUOTE)$/.test(le.tagName)&&!le.classList.contains("question")&&!le.classList.contains("word-bank")&&!le.classList.contains("options")&&!le.classList.contains("pd-head")){const ye=ee(le);le.remove(),S.unshift(...ye);continue}q=w(),k.push(q),L(le)}}const P=k.filter(ee=>{var se;return(((se=ee.querySelector(".pd-page-body"))==null?void 0:se.childNodes.length)??0)>0});k.forEach(ee=>{P.includes(ee)||ee.remove()}),P.forEach((ee,se)=>ee.appendChild(b(se+1)))},ym=(o,f)=>{var L;const u=document,s=(L=u.caretRangeFromPoint)==null?void 0:L.call(u,o,f),p=s==null?void 0:s.startContainer,S=(p==null?void 0:p.textContent)||"",b=(s==null?void 0:s.startOffset)??0,A=U=>/[A-Za-z'-]/.test(U);let w=b;for(;w>0&&w<=S.length&&A(S[w-1]);)w--;let k=b;for(;k<S.length&&A(S[k]);)k++;const q={text:S.slice(w,k),range:null};if(p&&p.nodeType===3&&k>w){const U=document.createRange();U.setStart(p,w),U.setEnd(p,k),q.range=U}return q},bm=(o,f)=>{var q;const u=document,s=(q=u.caretRangeFromPoint)==null?void 0:q.call(u,o,f),p=s==null?void 0:s.startContainer,S=(p==null?void 0:p.textContent)||"",b=(s==null?void 0:s.startOffset)??0;let A=b;for(;A>0&&!/[.!?]\s["')\]]/.test(S.slice(Math.max(0,A-2),A));)A--;let w=b;for(;w<S.length&&!/[.!?]/.test(S[w]);)w++;for(w=Math.min(S.length,w+1);A<w&&/\s/.test(S[A]);)A++;for(;w>A&&/\s/.test(S[w-1]);)w--;const k={text:S.slice(A,w).trim(),range:null};if(p&&p.nodeType===3&&w>A){const L=document.createRange();L.setStart(p,A),L.setEnd(p,w),k.range=L}return k},bo=(o,f)=>{const u=o.querySelector(".pd-qnum");if(!u)return;const s=u.parentElement;if(!s)return;let p=s.querySelector(".pd-ans-letter");f?(p||(p=document.createElement("span"),p.className="pd-ans-letter",s.insertBefore(p,u)),p.textContent=f):p&&p.remove()},Bp=new Map,Up=async o=>{var b;const f=o.toLowerCase(),u=Bp.get(f);if(u)return u;const p=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(o)}&langpair=en|zh-CN`)).json(),S=String(((b=p==null?void 0:p.responseData)==null?void 0:b.translatedText)||"");return S&&!/MYMEMORY WARNING/i.test(S)&&Bp.set(f,S),S||"翻译服务暂不可用"},vm=async o=>{if(o.length<=450)return Up(o);const f=[];let u="";for(const p of o.split(new RegExp("(?<=[.!?。！？]\\s)")))(u+p).length>420&&u?(f.push(u),u=p):u+=p;u&&f.push(u);const s=[];for(const p of f.slice(0,40))try{s.push(await Up(p))}catch{s.push("")}return s.join(" ")},Yp=({x:o,y:f,children:u})=>{const s=h.useRef(null);return h.useLayoutEffect(()=>{const p=s.current;if(!p)return;const S=()=>{const K=p.offsetHeight,P=p.offsetWidth/2+8,ee=Math.min(Math.max(o,P),window.innerWidth-P);p.style.left=`${ee}px`,p.style.top=`${f}px`,f-K-14>=8?(p.style.transform="translate(-50%, calc(-100% - 14px))",p.style.maxHeight=`${window.innerHeight-40}px`):(p.style.transform="translate(-50%, 14px)",p.style.maxHeight=`${Math.max(240,window.innerHeight-f-30)}px`)},b=performance.now();let A=0,w=0,k="",q=!1;const L=()=>{q||(q=!0,p.dataset.ready="true")},U=()=>{S();const K=`${p.offsetHeight}|${p.offsetWidth}|${p.style.transform}`;w=K===k?w+1:0,k=K,!q&&(w>=2||performance.now()-b>800)&&L(),w<10&&performance.now()-b<3e3&&(A=requestAnimationFrame(U))};return U(),()=>cancelAnimationFrame(A)},[o,f]),r.jsx("div",{ref:s,className:"pd-picker",children:u})},$p=o=>o?Array.from(o.querySelectorAll(".word-bank li, .word-bank span, ul li")).map(f=>{var u,s,p;return((s=(u=f.parentElement)==null?void 0:u.textContent)==null?void 0:s.trim())||((p=f.textContent)==null?void 0:p.trim())||""}).filter(f=>/^[A-O][\.、]/.test(f)).flatMap(f=>f.match(/[A-O][\.、]\s*[a-z]+/g)||[]).filter((f,u,s)=>s.indexOf(f)===u):[],wm=[{name:"听力",start:1,count:25},{name:"选词填空",start:26,count:10},{name:"长篇阅读",start:36,count:10},{name:"阅读理解",start:46,count:10},{name:"翻译（汉译英）",start:56,count:1},{name:"写作",start:57,count:1}];function Sm(o,f){if(o.pdf&&typeof o.pdf=="string")return o.pdf;const u=o.id||"";if(f==="cet4"){const s=u.match(/^cet4-(20\d{2})-(\d{2})-set(\d)$/i);if(s)return`./assets/papers/cet4/${s[1]}-${s[2]}-S${s[3]}.pdf`}else{const s=u.match(/^cet6-(20\d{2})-(\d{1,2})-set(\d)$/i);if(s)return`./assets/cet6-pdf/CET-6 ${s[1]}.${s[2].padStart(2,"0")} 第${s[3]}套.pdf`}return null}const km=({paper:o,type:f,onBack:u})=>{const[s,p]=h.useState(null),[S,b]=h.useState(!0),[A,w]=h.useState(null),[k,q]=h.useState(!0);h.useEffect(()=>{let x=!1;p(null),b(!0),w(null),q(!0);const R="./",ae=String(o.id).replace(/[^\w.-]/g,"_");return fetch(`${R}contents/${ae}.json`).then(oe=>oe.ok?oe.json():null).then(oe=>{x||(p(oe??null),b(!1))}).catch(()=>{x||(p(null),b(!1))}),fetch(`${R}listening/${ae}.json`).then(oe=>oe.ok?oe.json():null).then(oe=>{x||(w(oe??null),q(!1))}).catch(()=>{x||(w(null),q(!1))}),()=>{x=!0}},[o.id]);const L=h.useMemo(()=>{var oe,F;if(s)return s;if(S)return null;const x=o.keyPoints,R=o.year??new Date().getFullYear(),ae=Number(o.month??"06");return{title:o.title,date:`${R}年${ae}月`,type:f==="cet4"?"四级真题":"六级真题",html:J2({title:o.title,type:f==="cet4"?"四级":"六级",writing:(oe=x==null?void 0:x.writing)==null?void 0:oe[0],translation:(F=x==null?void 0:x.translation)==null?void 0:F[0],readingFocus:x==null?void 0:x.reading,paperId:o.id})}},[s,S,o,f]),[U,K]=h.useState(0),[P,ee]=h.useState(!1),[se,le]=h.useState(null),W=h.useRef(null),me=h.useRef(void 0),[ye,je]=h.useState(()=>{try{return localStorage.getItem("cet:exam-mode")==="paper"?"paper":"question"}catch{return"question"}}),xe=h.useRef(ye);xe.current=ye;const ve=h.useCallback(()=>{je(x=>{const R=x==="paper"?"question":"paper";try{localStorage.setItem("cet:exam-mode",R)}catch{}return R})},[]),ze=h.useRef(null),[re,fe]=h.useState(()=>{const x=parseFloat(localStorage.getItem("cet:zoom")||"1");return Number.isFinite(x)?Math.min(3,Math.max(.5,x)):1}),ne=h.useRef(re),N=h.useCallback(x=>{const R=Math.min(3,Math.max(.5,Math.round(x*100)/100));ne.current=R,fe(R);try{localStorage.setItem("cet:zoom",String(R))}catch{}},[]),[ce,de]=h.useState(!1),Le=h.useCallback(()=>{const x=ze.current;if(!x)return null;const R=x.getBoundingClientRect();return!R.width||!R.height?null:Array.from(x.querySelectorAll(".exam-content-root > .pd-page")).map(ae=>{const oe=ae.getBoundingClientRect();return{x:(oe.left-R.left)/R.width,y:(oe.top-R.top)/R.height,w:oe.width/R.width,h:oe.height/R.height}})},[]),y=h.useRef(null),j=h.useCallback(x=>{y.current=Le(),de(x);try{localStorage.setItem("cet:spread",x?"1":"0")}catch{}},[Le]),D=h.useCallback(()=>j(!ce),[j,ce]);h.useEffect(()=>{const x=new Map;let R=null;const ae=()=>{const[H,$]=[...x.values()];return Math.hypot(H.x-$.x,H.y-$.y)||1},oe=H=>{const $=ze.current;return!!$&&H.target instanceof Node&&$.contains(H.target)},F=H=>{H.pointerType==="mouse"||!oe(H)||(x.set(H.pointerId,{x:H.clientX,y:H.clientY}),x.size===2&&(R={startDist:ae(),startZoom:ne.current}))},ue=H=>{!x.has(H.pointerId)||!R||(x.set(H.pointerId,{x:H.clientX,y:H.clientY}),x.size===2&&N(R.startZoom*(ae()/R.startDist)))},M=H=>{x.delete(H.pointerId),x.size<2&&(R=null)},B=H=>{!H.ctrlKey||!oe(H)||(H.preventDefault(),N(ne.current*Math.exp(-H.deltaY*.002)))};return window.addEventListener("pointerdown",F,!0),window.addEventListener("pointermove",ue,{capture:!0}),window.addEventListener("pointerup",M,!0),window.addEventListener("pointercancel",M,!0),window.addEventListener("wheel",B,{passive:!1,capture:!0}),()=>{window.removeEventListener("pointerdown",F,!0),window.removeEventListener("pointermove",ue,!0),window.removeEventListener("pointerup",M,!0),window.removeEventListener("pointercancel",M,!0),window.removeEventListener("wheel",B,!0)}},[N]);const X=Sm(o,f),J=o.pdfAnswer||null,m=o.audio||null,[_,Z]=h.useState([]),[te,pe]=h.useState(!1),[I,Ne]=h.useState("answer"),[Ke,De]=h.useState(0),[Ie,Nt]=h.useState(null),[Ye,ln]=h.useState({}),[st,jt]=h.useState({}),[Mt,ra]=h.useState({key:!1,mine:!1,cmp:!1}),[It,Pt]=h.useState({}),[un,Tt]=h.useState(!0),[Bt,rn]=h.useState(!1),[St,on]=h.useState({}),[Lt,cn]=h.useState(null),[_t,Wn]=h.useState(null),[Ca,Gt]=h.useState(null),Aa=x=>{const R=[];for(const ae of Array.from(x.getClientRects()))ae.width<1||ae.height<1||R.push({x:ae.left,y:ae.top,w:ae.width,h:ae.height});return R};h.useEffect(()=>{if(!_t||_t.result!==null)return;let x=!0;return vm(_t.text).then(R=>{x&&Wn(ae=>ae&&ae.text===_t.text?{...ae,result:R}:ae)}).catch(()=>{x&&Wn(R=>R&&{...R,result:"翻译服务暂不可用"})}),()=>{x=!1}},[_t]);const Gn=te?"panel":"popup",Me=h.useRef("popup");h.useEffect(()=>{Me.current=Gn},[Gn]);const[Pe,vt]=h.useState(null),[tl,en]=h.useState(""),[nl,Ut]=h.useState(!1),[Xn,dn]=h.useState("up"),[tn,Vn]=h.useState(!1),[Mn,_l]=h.useState("up"),[al,oa]=h.useState(0),[Sn,ll]=h.useState(!0),[El,_a]=h.useState(!1),[fn,Ea]=h.useState(null),za=130;h.useEffect(()=>{if(!tn)return;const x=window.setInterval(()=>oa(R=>R+1),1e3);return()=>window.clearInterval(x)},[tn]);const Na=x=>{const R=Math.floor(x/60),ae=x%60;return`${String(R).padStart(2,"0")}:${String(ae).padStart(2,"0")}`},zl=El?"--:--":Na(Mn==="up"?al:Math.max(0,za*60-al)),Tn=()=>{tn?ll(x=>!x):Ut(!0)},kt=h.useRef(null),Y=x=>{kt.current={px:x.clientX,py:x.clientY,ox:(fn==null?void 0:fn.x)??0,oy:(fn==null?void 0:fn.y)??0},x.currentTarget.setPointerCapture(x.pointerId)},ge=x=>{const R=kt.current;R&&Ea({x:R.ox+x.clientX-R.px,y:R.oy+x.clientY-R.py})},Se=()=>{kt.current=null},Ae=x=>{try{en(localStorage.getItem(x.storeKey)||"")}catch{en("")}vt(x)},Ue=()=>{if(Pe){try{localStorage.setItem(Pe.storeKey,tl)}catch{}vt(null)}},{ann:He,tool:ut,setTool:xt,addStroke:Zt,appendPoint:Yt,addNote:nn,updateNote:Xt,eraseIds:rt,eraseLocal:Ma,mapAnnotations:Zn,captureAnchors:In,applyAnchors:ca,eraserSize:ar,setEraserSize:lr,undo:ir,setPenSetting:Co,setShapeSetting:Nl,penProps:Pn,shapeProps:Ln,canUndo:pn}=gm(o.id);h.useLayoutEffect(()=>{const x=y.current;y.current=null;const R=Le();if(!(x!=null&&x.length)||!(R!=null&&R.length)||x.length!==R.length)return;const ae=(oe,F,ue)=>{let M=-1;for(let $=0;$<oe.length;$++){const ie=oe[$];if(F>=ie.x&&F<=ie.x+ie.w&&ue>=ie.y&&ue<=ie.y+ie.h){M=$;break}}if(M>=0)return M;let B=0,H=1/0;return oe.forEach(($,ie)=>{const be=$.x+$.w/2,$e=$.y+$.h/2,Ge=(be-F)**2+($e-ue)**2;Ge<H&&(H=Ge,B=ie)}),B};Zn(oe=>{const F=oe.x/lt,ue=oe.y/lt,M=ae(x,F,ue),B=x[M],H=R[M],$=B.w?(F-B.x)/B.w:0,ie=B.h?(ue-B.y)/B.h:0;return{x:(H.x+$*H.w)*lt,y:(H.y+ie*H.h)*lt}})},[ce,Le,Zn]);const si=h.useRef(ye),rr=h.useRef(o.id);h.useLayoutEffect(()=>{var H;const x=si.current!==ye,R=rr.current!==o.id;if(si.current=ye,rr.current=o.id,!x||R)return;const ae=W.current;if(!ae||!L)return;const oe=(H=ze.current)==null?void 0:H.querySelector(".pd-anno-svg");if(!oe){Ls(ae,L.title,ye);return}const F=$=>{const ie=oe.getBoundingClientRect();return{x:ie.left+$.x/lt*ie.width,y:ie.top+$.y/lt*ie.height}},ue=($,ie)=>{const be=oe.getBoundingClientRect();return{x:($-be.left)/be.width*lt,y:(ie-be.top)/be.height*lt}},M=".pd-page, .pd-page-body, .pd-page-foot, .pd-anno-svg, .pd-grid-bg",B=In($=>{const ie=F($);let be=null;for(const Ge of document.elementsFromPoint(ie.x,ie.y))if(Ge!==oe&&!(Ge instanceof Element&&Ge.matches(M))&&ae.contains(Ge)){be=Ge;break}if(!be){let Ge=null,ht=1/0;ae.querySelectorAll("p, h2, h3, .option, .question, .blank, li, strong").forEach(Xe=>{const Be=Xe.getBoundingClientRect(),Ve=Math.max(Be.left-ie.x,0,ie.x-Be.right),Ee=Math.max(Be.top-ie.y,0,ie.y-Be.bottom),Re=Ve*Ve+Ee*Ee;Re<ht&&(ht=Re,Ge=Xe)}),be=Ge}if(!be)return{el:null,dx:0,dy:0};const $e=be.getBoundingClientRect();return{el:be,dx:ie.x-$e.left,dy:ie.y-$e.top}});Ls(ae,L.title,ye),ca(B,$=>{if(!$.el||!$.el.isConnected)return $.orig;const ie=$.el.getBoundingClientRect();return ue(ie.left+$.dx,ie.top+$.dy)})},[ye,s,In,ca]),h.useEffect(()=>{ut!=="select"&&Gt(null)},[ut]);const Ml=h.useRef("select");h.useEffect(()=>{Ml.current=ut},[ut]);const ui=h.useRef(Pn);h.useEffect(()=>{ui.current=Pn},[Pn]);const Tl=h.useCallback((x,R)=>{var et;const ae=W.current;if(!ae||R.length<2)return;const oe=(ae.closest(".pd-sheet")||ae).querySelector(".pd-anno-svg");if(!oe)return;const F=oe.getBoundingClientRect(),ue=F.width||1,M=F.height||1;let B=1/0,H=-1/0,$=1/0,ie=-1/0;for(const Ce of R)Ce.x<B&&(B=Ce.x),Ce.x>H&&(H=Ce.x),Ce.y<$&&($=Ce.y),Ce.y>ie&&(ie=Ce.y);const be=ui.current.highlight.color,$e=x==="highlight"?So(be,.38):be,Ge=[],ht=document.createTreeWalker(ae,NodeFilter.SHOW_TEXT);let Xe=ht.nextNode();for(;Xe;){if((Xe.textContent||"").trim()){let tt=Xe.parentElement;for(;tt&&tt!==ae&&!tt.classList.contains("pd-page");)tt=tt.parentElement;if(tt){const Dn=parseFloat(getComputedStyle(Xe.parentElement).fontSize)||15,hn=document.createRange();hn.selectNodeContents(Xe);for(const mn of Array.from(hn.getClientRects()))mn.width<1||mn.height<1||Ge.push({left:mn.left,right:mn.right,top:mn.top,bottom:mn.bottom,fs:Dn});(et=hn.detach)==null||et.call(hn)}}Xe=ht.nextNode()}const Be=8,Ve=[];for(const Ce of Ge){if(Ce.bottom<$||Ce.top>ie)continue;const tt=Math.max(Ce.left,B),Dn=Math.min(Ce.right,H);Dn-tt<Be||Ve.push({x0:tt,x1:Dn,top:Ce.top,bottom:Ce.bottom,fs:Ce.fs})}if(!Ve.length)return;Ve.sort((Ce,tt)=>Ce.top-tt.top||Ce.x0-tt.x0);const Ee=[];for(const Ce of Ve){const tt=Ee[Ee.length-1];tt&&Math.abs(tt.top-Ce.top)<=3&&Math.abs(tt.bottom-Ce.bottom)<=3?(tt.x0=Math.min(tt.x0,Ce.x0),tt.x1=Math.max(tt.x1,Ce.x1),tt.fs=Math.max(tt.fs,Ce.fs)):Ee.push({...Ce})}const Re=Ee.map((Ce,tt)=>{let Dn,hn;if(x==="highlight"){const mn=Math.min(Ce.bottom-Ce.top,Ce.fs*1.05);Dn=Ce.top+(Ce.bottom-Ce.top-mn)/2+Ce.fs*.08,hn=Dn+mn}else Dn=hn=Ce.bottom-Ce.fs*.12;return{id:`snap-${Date.now()}-${tt}-${Math.random().toString(36).slice(2,7)}`,tool:x,pts:[{x:(Ce.x0-F.left)/ue*1e3,y:(Dn-F.top)/M*1e3},{x:(Ce.x1-F.left)/ue*1e3,y:(hn-F.top)/M*1e3}],color:$e,width:0}});for(const Ce of Re)Zt(Ce)},[Zt]),or=h.useRef(()=>{}),Qt=h.useCallback((x,R)=>{const ae=Array.from(x.querySelectorAll(".option")),oe=ae.indexOf(R);if(oe<0)return;ae.forEach(M=>M.classList.remove("selected")),R.classList.add("selected");const F=String.fromCharCode(65+oe);x.setAttribute("data-ans",F),bo(x,F);const ue=W.current;if(ue){const M={};ue.querySelectorAll(".question").forEach((B,H)=>{const $=B.querySelector(".option.selected");$&&(M[H]=Array.from(B.querySelectorAll(".option")).indexOf($))});try{localStorage.setItem(`cet:answer:${o.id}`,JSON.stringify(M))}catch{}}or.current()},[o.id]),di=h.useRef(Qt);di.current=Qt,h.useEffect(()=>{ee(!1),le(null),K(0)},[o.id]),h.useEffect(()=>{let x=0;const R=()=>{x=0;const oe=W.current;if(!oe)return;const F=Array.from(oe.querySelectorAll("h2")),ue=F.find(ie=>/Part II|Listening/i.test(ie.textContent||""));if(!ue){Tt(!0);return}const M=F.find(ie=>/Part III|Reading Comprehension/i.test(ie.textContent||"")),B=ue.getBoundingClientRect(),H=M?M.getBoundingClientRect():B,$=window.innerHeight;Tt(B.top<$-40&&H.bottom>40)},ae=()=>{x||(x=requestAnimationFrame(R))};return window.addEventListener("scroll",ae,!0),window.addEventListener("resize",ae),R(),()=>{window.removeEventListener("scroll",ae,!0),window.removeEventListener("resize",ae),x&&cancelAnimationFrame(x)}},[s]),h.useEffect(()=>{const x=W.current;if(!x||!L)return;x.innerHTML=O2(L.html);{const M={};x.querySelectorAll(".question[data-answer]").forEach(B=>{var ie;const H=(((ie=B.querySelector("strong"))==null?void 0:ie.textContent)||"").match(/\d+/),$=B.getAttribute("data-answer");H&&$&&(M[Number(H[0])]=$)}),x.querySelectorAll(".blank[data-answer]").forEach(B=>{const H=Number(B.getAttribute("data-blank")),$=B.getAttribute("data-answer");H&&$&&(M[H]=$)}),Pt(M)}x.querySelectorAll("div").forEach(M=>{const B=M.getAttribute("style")||"";if(B.includes("linear-gradient")||B.includes("backdrop-filter"))if(M.querySelector("h2")){const H=M.cloneNode(!0);H.querySelectorAll("h2").forEach(ie=>ie.remove());const $=(H.textContent||"").replace(/•/g,"·").trim();if($){const ie=document.createElement("p");ie.className="pd-structure",ie.textContent=$,M.replaceWith(ie)}else M.remove()}else M.remove()}),x.querySelectorAll("h2, h3, h4").forEach(M=>{const B=M.textContent||"",H=B.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").trim();if(H!==B){const $=M.querySelector("strong");$&&$.childNodes.length===1?$.textContent=H:M.textContent=H}M.removeAttribute("style")}),x.querySelectorAll("p, li, ul, span, section").forEach(M=>{M.removeAttribute("style")}),x.querySelectorAll("i.fas, i.far, i.fab").forEach(M=>M.remove()),x.querySelectorAll(".question").forEach(M=>{var H,$;if((H=M.parentElement)!=null&&H.classList.contains("qblock"))return;const B=document.createElement("div");B.className="qblock",($=M.parentElement)==null||$.insertBefore(B,M),B.appendChild(M)}),x.querySelectorAll("p").forEach(M=>{const B=M.querySelector("strong");B&&/^Directions[:：]?\s*$/.test((B.textContent||"").trim())&&M.classList.add("pd-dir")});const R=M=>/writing/i.test(M)?[{label:"我的作文",kind:"essay"}]:/listening/i.test(M)?[{label:"播放听力",kind:"listen"}]:/translation/i.test(M)?[{label:"我的翻译",kind:"translation"},{label:"翻译范文",kind:"fanwen"}]:[];x.querySelectorAll("h2").forEach(M=>{const H=(M.textContent||"").trim().match(/^(Part\s+[IVX0-9]+)\s+(.+?)\s*\(([^)]+)\)\s*$/i);if(!H)return;const[,$,ie,be]=H;M.classList.add("pd-part");const $e=R(ie.trim());M.innerHTML=`<span class="pd-part-no">${$}</span>`+($e.length?`<span class="pd-part-badges">${$e.map(Ge=>`<button type="button" class="pd-badge" data-kind="${Ge.kind}">${Ge.label}</button>`).join("")}</span>`:"")+`<span class="pd-part-name">${ie.trim()}</span><span class="pd-part-time">(${be})</span>`});{let M="";x.querySelectorAll("h2, h3").forEach(B=>{const H=(B.textContent||"").trim();if(B.tagName==="H2"){M=H;return}/^\s*Section\s+[A-Z]/i.test(H)&&(B.classList.add("pd-sec"),/reading\s+comprehension/i.test(M)&&B.classList.add("pd-break-sec"))})}x.querySelectorAll("h2").forEach(M=>{if(!/Writing/i.test(M.textContent||""))return;let B=M.nextElementSibling;for(;B&&B.tagName!=="H2";){const H=B.nextElementSibling;if(B.tagName==="DIV"&&/写作提示/.test(B.textContent||""))B.remove();else if(B.tagName==="P"&&/Directions/i.test(B.textContent||"")){const $=B;let ie=$.innerHTML.replace(/[“"][^”"]*[”"]/g,$e=>`<strong>${$e}</strong>`).replace(/\b(150|200)\b(?=\s*words)/g,"<u>$1</u>");const be=new RegExp("(?:^|(?<=[.!?]\\s))([^<>]+?[.!?])\\s*$").exec(ie);if(be&&be[1].trim().length>10){const $e=be[1],Ge=be.index+be[0].indexOf($e);ie=ie.slice(0,Ge);const ht=document.createElement("p");ht.className="pd-indent",ht.innerHTML=$e,$.after(ht)}$.innerHTML=ie}B=H}}),x.querySelectorAll("h3").forEach(M=>{/词库|Word Bank/i.test(M.textContent||"")&&M.closest("div")&&M.remove()}),x.querySelectorAll("p").forEach(M=>{const B=M.querySelector("strong");if(!B||M.children.length!==1)return;const H=(M.textContent||"").trim();H===(B.textContent||"").trim()&&(!H||H.length>80||/^Passage\s+(One|Two)$/i.test(H)||/^Questions\b/i.test(H)||/^\d+\.$/.test(H)||/[：:]$/.test(H)||M.classList.add("pd-article-title"))}),x.querySelectorAll(".question").forEach(M=>{const B=M.querySelector("p, h3");if(!B)return;const H=B.querySelector("strong"),$=((H==null?void 0:H.textContent)||"").match(/^\s*(\d{1,2})\s*[\.、]?\s*$/);H&&$&&(H.classList.add("pd-qnum"),H.textContent=$[1])}),x.querySelectorAll(".options").forEach(M=>{Array.from(M.querySelectorAll(".option")).reduce(($,ie)=>Math.max($,(ie.textContent||"").length),0)>42&&M.classList.add("single")}),Ls(x,(s==null?void 0:s.title)??o.title,xe.current);const ae=localStorage.getItem(`cet:answer:${o.id}`);if(ae)try{const M=JSON.parse(ae);Object.entries(M).forEach(([B,H])=>{const $=x.querySelectorAll(".question")[Number(B)];if(!$)return;const ie=$.querySelectorAll(".option");if(ie[H]){ie[H].classList.add("selected");const be=String.fromCharCode(65+Number(H));$.setAttribute("data-ans",be),bo($,be)}})}catch{}const oe=localStorage.getItem(`cet:blank:${o.id}`);if(oe)try{const M=JSON.parse(oe);Object.entries(M).forEach(([B,H])=>{const $=x.querySelector(`.blank[data-blank="${B}"]`);$&&($.textContent=`${B} ${H}`,$.classList.add("filled"))})}catch{}const F=()=>kn(),ue=M=>{var be,$e,Ge,ht,Xe;const B=M.target;if(Ml.current==="select"&&!B.closest("button, a, .option, .pd-qnum, .blank, .pd-blank, .pd-note, .pd-card, .pd-float-bar, .pd-timer-bar")){const Be=(((be=window.getSelection())==null?void 0:be.toString())||"").trim(),Ve=localStorage.getItem("cet:trans:mode")||"word";let Ee="";if(Be.length>1){Ee=Be;const Re=window.getSelection(),et=Re&&Re.rangeCount?Re.getRangeAt(0):null,Ce=et?Aa(et):[];Gt(Ce.length?{kind:"sentence",rects:Ce}:null)}else if(Ve==="word"){const Re=ym(M.clientX,M.clientY);Ee=Re.text;const et=Re.range?Aa(Re.range):[];Gt(et.length?{kind:"word",rects:et}:null)}else if(Ve==="sentence"){const Re=bm(M.clientX,M.clientY);Ee=Re.text;const et=Re.range?Aa(Re.range):[];Gt(et.length?{kind:"sentence",rects:et}:null)}else Ve==="paragraph"?(Ee=((Ge=($e=B.closest("p"))==null?void 0:$e.textContent)==null?void 0:Ge.trim())||"",Gt(null)):(Ee=((ht=x.innerText)==null?void 0:ht.trim())||"",Gt(null));Ee&&Ee.length<=12e3?Wn({text:Ee,x:M.clientX,y:M.clientY,result:null}):(Wn(null),Gt(null))}if(B.closest(".pd-badge")){const Be=B.closest(".pd-badge").dataset.kind;Be==="essay"?Ae({kind:"essay",title:"我的作文",placeholder:"开始写作...",storeKey:`cet:essay:${o.id}`}):Be==="translation"?Ae({kind:"translation",title:"我的翻译",placeholder:"开始翻译...",storeKey:`cet:translation:${o.id}`}):window.alert("该功能即将上线");return}const H=B.closest(".pd-qnum");if(H){if(xe.current==="paper")return;const Be=H.closest(".question"),Ve=Array.from(x.querySelectorAll(".question")),Ee=Be?Ve.indexOf(Be):-1;if(Ee>=0)if(Me.current==="panel"){cn(null);const{list:Re}=yo(x),et=Re.find(Ce=>Ce.el===Be);De(et?Re.indexOf(et):Ee),Ne("question"),pe(!0)}else{const Re=H.getBoundingClientRect();Nt({kind:"question",qi:Ee,x:Re.left+Re.width/2,y:Re.bottom})}return}const $=B.closest(".blank, .pd-blank");if($){if(xe.current==="paper")return;const Be=$.getBoundingClientRect(),Ve=$.closest(".question"),Ee=Number($.getAttribute("data-blank"))||Number(((Xe=Ve==null?void 0:Ve.querySelector(".pd-qnum"))==null?void 0:Xe.textContent)||0);Me.current==="panel"?(cn(Ee),Ne("question"),pe(!0)):Nt({kind:"blank",blankNo:Ee,x:Be.left+Be.width/2,y:Be.bottom});return}B.closest(".option")};return x.addEventListener("click",ue),F(),()=>{x.removeEventListener("click",ue),me.current&&clearTimeout(me.current)}},[s,L]);const fi=h.useRef(!1);h.useEffect(()=>{if(!L||fi.current||(fi.current=!0,localStorage.getItem("cet:spread")!=="1"))return;const x=requestAnimationFrame(()=>j(!0));return()=>cancelAnimationFrame(x)},[s,j]),h.useEffect(()=>{const x=W.current;if(!x||!L)return;const R=(A==null?void 0:A.questionTimes)??{},ae=[],oe=Array.from(x.querySelectorAll("p, strong, h3, h4, div")).filter(ue=>/Questions\s+\d+\s+to\s+\d+[^<]*you have just heard/i.test(ue.textContent||"")),F=oe.filter(ue=>!oe.some(M=>M!==ue&&ue.contains(M)));return F.forEach(ue=>{const M=(ue.textContent||"").match(/Questions\s+(\d+)\s+to\s+\d+/i);if(!M)return;const B=Number(M[1]),H=R[B],$=document.createElement("button");$.type="button",$.className="pd-horn",$.dataset.no=String(B),$.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/></svg>',H!=null?($.title=`播放第 ${B} 题开始的听力`,$.addEventListener("click",ie=>{ie.stopPropagation(),ie.preventDefault(),window.dispatchEvent(new CustomEvent("cet:lp2-jump",{detail:{no:B,time:H}}))})):($.title=`第 ${B} 题听力（音频待导入）`,$.addEventListener("click",ie=>{ie.stopPropagation(),ie.preventDefault(),xm($,"音频待导入")})),ue.classList.add("has-horn"),ue.prepend($),ae.push($)}),()=>{ae.forEach(ue=>ue.remove()),F.forEach(ue=>ue.classList.remove("has-horn"))}},[A,s]);const kn=h.useCallback(()=>{const x=W.current;if(!x)return;const{list:R,blankNos:ae}=yo(x),oe={};let F={},ue={};try{F=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}")}catch{}try{ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}")}catch{}R.forEach(({el:B,no:H,kind:$})=>{if($==="choice"){const ie=B.querySelector(".option.selected");if(ie){const be=Array.from(B.querySelectorAll(".option")).indexOf(ie);oe[H]=String.fromCharCode(65+be)}}else{const ie=F[String(H)];ie&&(oe[H]=ie)}}),ae.forEach(B=>{const H=ue[String(B)];H&&(oe[B]=H)});const M=wm.map(B=>{const H=[];for(let $=B.start;$<B.start+B.count;$++)oe[$]&&H.push($);return{name:B.name,start:B.start,count:B.count,done:H}});ln(oe),K(M.reduce((B,H)=>B+H.done.length,0)),Z(M)},[o.id]);h.useEffect(()=>{or.current=kn},[kn]);const sa=()=>{ee(!0);let x=0,R=0;const ae={},oe=W.current;if(oe){let F={},ue={};try{F=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}")}catch{}try{ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}")}catch{}oe.querySelectorAll(".question").forEach(M=>{var ht;const B=M.getAttribute("data-answer"),H=M.querySelector(".option.selected");if(M.classList.remove("is-right","is-wrong"),!B)return;R+=1;const $=(((ht=M.querySelector("strong"))==null?void 0:ht.textContent)||"").match(/\d+/),ie=$?Number($[0]):0;let be=H?String.fromCharCode(65+Array.from(M.querySelectorAll(".option")).indexOf(H)):"";!be&&ie&&F[String(ie)]&&(be=F[String(ie)]),be&&(ae[ie]=be),be&&be===B?(x+=1,M.classList.add("is-right")):M.classList.add("is-wrong");const $e=Array.from(M.querySelectorAll(".option"));$e.forEach(Xe=>Xe.classList.remove("answer-key"));const Ge=$e.find(Xe=>{var Be;return(((Be=Xe.querySelector("strong"))==null?void 0:Be.textContent)||"").trim().replace(/[).]/g,"")===B});Ge==null||Ge.classList.add("answer-key")}),oe.querySelectorAll(".blank[data-answer]").forEach(M=>{const B=M.getAttribute("data-answer"),H=M.getAttribute("data-blank");if(M.classList.remove("is-right","is-wrong"),!B||!H)return;R+=1;const $=ue[H]||"";$&&(ae[Number(H)]=$),$&&$===B?(x+=1,M.classList.add("is-right")):M.classList.add("is-wrong")})}le({right:x,judged:R});try{const F=JSON.parse(localStorage.getItem("cet:history")||"[]");F.unshift({id:o.id,title:o.title,ts:Date.now(),right:x,judged:R,snap:ae}),localStorage.setItem("cet:history",JSON.stringify(F.slice(0,20)))}catch{}},cr=()=>{if(!window.confirm("确定清空本卷全部作答记录？"))return;["cet:answer:","cet:blank:","cet:match:"].forEach(R=>{try{localStorage.removeItem(R+o.id)}catch{}});const x=W.current;x&&(x.querySelectorAll(".option.selected").forEach(R=>R.classList.remove("selected")),x.querySelectorAll(".question").forEach(R=>R.classList.remove("is-right","is-wrong")),x.querySelectorAll(".option.answer-key").forEach(R=>R.classList.remove("answer-key")),x.querySelectorAll(".question").forEach(R=>{bo(R,null),R.removeAttribute("data-ans"),R.removeAttribute("data-picked")}),x.querySelectorAll(".blank[data-blank]").forEach(R=>{R.textContent=R.getAttribute("data-blank")||"",R.classList.remove("filled","is-right","is-wrong")})),jt({}),ra({key:!1,mine:!1,cmp:!1}),rn(!1),ee(!1),kn()},sr=x=>{const R=W.current;if(!R)return;R.querySelectorAll(".option.selected").forEach(F=>F.classList.remove("selected")),R.querySelectorAll(".question").forEach(F=>F.classList.remove("is-right","is-wrong")),R.querySelectorAll(".option.answer-key").forEach(F=>F.classList.remove("answer-key")),R.querySelectorAll(".question").forEach(F=>{bo(F,null),F.removeAttribute("data-ans"),F.removeAttribute("data-picked")}),R.querySelectorAll(".blank[data-blank]").forEach(F=>{F.classList.remove("filled","is-right","is-wrong"),F.textContent=F.getAttribute("data-blank")||""}),R.querySelectorAll(".question").forEach(F=>{var H,$;const ue=(((H=F.querySelector("strong"))==null?void 0:H.textContent)||"").match(/\d+/),M=ue?Number(ue[0]):0,B=x[M];if(B){const ie=F.querySelectorAll(".option"),be=B.charCodeAt(0)-65;($=ie[be])==null||$.classList.add("selected")}});const ae={},oe={};R.querySelectorAll(".blank[data-blank]").forEach(F=>{const ue=F.getAttribute("data-blank")||"",M=x[Number(ue)];M&&(F.textContent=`${ue} ${M}`,F.classList.add("filled"),ae[ue]=M)}),Object.entries(x).forEach(([F,ue])=>{const M=Number(F);M>=36&&M<=45&&(oe[F]=ue)});try{const F={};R.querySelectorAll(".question").forEach((ue,M)=>{const B=ue.querySelector(".option.selected");B&&(F[String(M)]=Array.from(ue.querySelectorAll(".option")).indexOf(B))}),localStorage.setItem(`cet:answer:${o.id}`,JSON.stringify(F)),localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(ae)),localStorage.setItem(`cet:match:${o.id}`,JSON.stringify(oe))}catch{}kn(),sa(),rn(!1)};return(s==null?void 0:s.title)??o.title,r.jsxs("div",{className:`pd-root${ye==="paper"?" is-paper-mode":""}`,"data-card":te?"open":"closed",children:[r.jsxs("div",{className:"pd-toolbar",children:[r.jsxs("div",{className:"pd-left",children:[r.jsx("button",{className:"pd-back",onClick:u,title:"返回真题列表","aria-label":"返回真题列表",children:r.jsx(A2,{width:16,height:16})}),r.jsx("button",{type:"button",className:"pd-alarm",onClick:Tn,title:tn?Sn?"收起计时":"显示计时":"计时","aria-label":"计时",children:"⏱"}),r.jsx("div",{className:`pd-listening${un?"":" is-hidden"}`,children:k?r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频加载中",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频加载中…"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]}):A?r.jsx(R2,{meta:A,title:`听力音频 · ${o.title}`}):r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频待导入",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频待导入"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]})})]}),r.jsxs("div",{className:"pd-corner",children:[X&&r.jsx(Ds,{onClick:()=>{const[x]=tr(X);window.open(x,"_blank","noopener")},icon:r.jsx(Tp,{width:15,height:15}),label:"试卷PDF"}),J&&r.jsx(Ds,{onClick:()=>{const[x]=tr(J);window.open(x,"_blank","noopener")},icon:r.jsx(Tp,{width:15,height:15}),label:"答案PDF"}),m&&r.jsx(Ds,{onClick:()=>{const[x]=tr(m);window.open(x,"_blank","noopener")},icon:r.jsx("span",{style:{fontSize:15,lineHeight:1},children:"🎧"}),label:"听力音频"})]})]}),S?r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"正在载入试卷…"})}):L?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:jm}),r.jsxs("div",{className:`pd-sheet${ce?" is-spread":""}`,ref:ze,style:{zoom:re},children:[r.jsx(em,{ann:He,tool:ut,penProps:Pn,shapeProps:Ln,onAddStroke:Zt,onAppendPoint:Yt,onSnap:Tl,onEraseIds:rt,onEraseLocal:Ma,eraserSize:ar,onAddNote:nn,onUpdateNote:Xt}),r.jsx("div",{className:"exam-content-root",ref:W})]})]}):r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"暂无该试卷的内容数据"})}),_.length>0&&r.jsxs("div",{className:"pd-card","data-collapsed":te?"false":"true",children:[r.jsxs("div",{className:"pd-card-side",children:[r.jsxs("button",{type:"button",className:"pd-card-progress",title:I==="question"?"切换到答题卡":"切换到题目",onClick:()=>Ne(x=>x==="question"?"answer":"question"),children:[U,"/",_.reduce((x,R)=>x+R.count,0)]}),r.jsx("button",{type:"button",className:"pd-card-toggle",onClick:()=>pe(x=>!x),title:te?"收起答题卡":"展开答题卡","aria-label":te?"收起答题卡":"展开答题卡",children:te?"›":"‹"}),I==="answer"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`pd-card-tool${Mt.key?" on":""}`,title:"显示正确答案（点击一键全部显示/隐藏）","aria-label":"显示正确答案",onClick:()=>{const x=!Mt.key;ra(R=>({...R,key:x}))},children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13",children:[r.jsx("path",{d:"M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",fill:"currentColor"}),!Mt.key&&r.jsx("line",{x1:"4",y1:"20",x2:"20",y2:"4",stroke:"currentColor",strokeWidth:"2"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Mt.mine?" on":""}`,title:"题号后显示我的作答","aria-label":"显示我的作答",onClick:()=>ra(x=>({...x,mine:!x.mine})),children:"我"}),r.jsx("button",{type:"button",className:`pd-card-tool${Mt.cmp?" on":""}`,title:"交卷自测（判分）：对绿框 / 错红框","aria-label":"交卷自测",onClick:()=>{const x=!Mt.cmp;ra(R=>({...R,cmp:x})),x&&sa()},children:"交"}),r.jsx("button",{type:"button",className:"pd-card-tool",title:"清空本卷作答记录（重新作答）","aria-label":"删除作答记录",onClick:cr,children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13","aria-hidden":"true",children:[r.jsx("path",{d:"M4 7h16M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2.5 0v11.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V7",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Bt?" on":""}`,title:"查看作答记录与对错情况","aria-label":"作答记录",onClick:()=>rn(x=>!x),children:"录"})]})]}),r.jsxs("div",{className:"pd-card-panel",children:[I==="question"&&r.jsx("div",{className:"pd-card-question",children:Lt!==null?(()=>{const x=W.current,R=x==null?void 0:x.querySelector(`.blank[data-blank="${Lt}"], .pd-blank`),ae=$p(x),oe=Ye[Lt];return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["选项 ",Lt]})}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(F,ue)=>String.fromCharCode(65+ue)).map(F=>r.jsx("button",{type:"button",className:`pd-picker-circle${oe===F?" on":""}`,onClick:()=>{R&&(R.textContent=`${Lt} ${F}`,R.classList.add("filled"));try{const ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}");ue[Lt]=F,localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(ue))}catch{}kn()},children:F},F))}),ae.length>0&&r.jsx("ul",{className:"pd-picker-words",children:ae.map(F=>r.jsx("li",{children:F},F))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt<=26,onClick:()=>cn(Lt-1),"aria-label":"上一空",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(F,ue)=>r.jsx("span",{className:26+ue===Lt?"on":""},ue))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt>=35,onClick:()=>cn(Lt+1),"aria-label":"下一空",children:"›"})]})]})})():(()=>{var be,$e,Ge,ht;const x=W.current,{list:R}=yo(x||document.createElement("div")),ae=R[Ke];if(!ae)return null;const{el:oe,no:F,kind:ue}=ae;if(ue==="match"){const Xe=(($e=(be=oe.querySelector("p"))==null?void 0:be.textContent)==null?void 0:$e.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",Be=Ye[F],Ve=[];{let Ee=(oe.closest(".qblock")||oe).previousElementSibling,Re=null;for(;Ee;){if(Ee.tagName==="H3"){Re=Ee;break}if(Ee.tagName==="H2")break;Ee=Ee.previousElementSibling}let et=(Re==null?void 0:Re.nextElementSibling)??null;for(;et&&et.tagName!=="H2";){if(et.tagName==="P"){const Ce=et.querySelector("strong"),tt=/^([A-P])\.$/.exec(((Ce==null?void 0:Ce.textContent)||"").trim());tt&&Ve.push({letter:tt[1],text:(et.textContent||"").replace(/^[A-N]\./,"").trim().slice(0,64),el:et})}et=et.nextElementSibling}}return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",F," 题"]})}),Ve.length>0&&r.jsx("ul",{className:"pd-match-paras",children:Ve.map(Ee=>r.jsxs("li",{onClick:()=>Ee.el.scrollIntoView({behavior:"smooth",block:"center"}),children:[r.jsx("b",{children:Ee.letter}),r.jsxs("span",{children:[Ee.text,"…"]})]},Ee.letter))}),Xe&&r.jsx("p",{className:"pd-picker-stem",children:Xe}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:16},(Ee,Re)=>String.fromCharCode(65+Re)).map(Ee=>r.jsx("button",{type:"button",className:`pd-picker-circle${Be===Ee?" on":""}`,onClick:()=>{try{const Re=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}");Re[F]=Ee,localStorage.setItem(`cet:match:${o.id}`,JSON.stringify(Re))}catch{}kn()},children:Ee},Ee))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:F<=36,onClick:()=>De(Ke-1),"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(Ee,Re)=>r.jsx("span",{className:36+Re===F?"on":""},Re))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:F>=45,onClick:()=>De(Ke+1),"aria-label":"下一题",children:"›"})]})]})}const M=Hp(oe),B=((ht=(Ge=oe.querySelector("p"))==null?void 0:Ge.textContent)==null?void 0:ht.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",H=Array.from(oe.querySelectorAll(".option")),$=R.filter(Xe=>Hp(Xe.el)===M).map(Xe=>Xe.no),ie=$.indexOf(F);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",F," 题"]})}),B&&r.jsx("p",{className:"pd-picker-stem",children:B}),r.jsx("div",{className:"pd-picker-opts",children:H.map((Xe,Be)=>{const Ve=String.fromCharCode(65+Be),Ee=Xe.classList.contains("selected");return r.jsxs("button",{type:"button",className:`pd-picker-opt${Ee?" on":""}`,onClick:()=>{Qt(oe,Xe)},children:[r.jsx("span",{className:"pd-picker-letter",children:Ve}),r.jsx("span",{className:"pd-picker-text",children:(Xe.textContent||"").replace(/^[A-D]\)\s*/,"").trim()})]},Be)})}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:ie<=0,onClick:()=>{const Xe=$[ie-1],Be=R.find(Ve=>Ve.no===Xe);Be&&De(R.indexOf(Be))},"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:$.map(Xe=>r.jsx("span",{className:Xe===F?"on":""},Xe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:ie>=$.length-1,onClick:()=>{const Xe=$[ie+1],Be=R.find(Ve=>Ve.no===Xe);Be&&De(R.indexOf(Be))},"aria-label":"下一题",children:"›"})]})]})})()}),I==="answer"&&r.jsx("div",{className:"pd-card-acc",children:_.map((x,R)=>{const ae=x.name==="听力"?` · ${x.count} 题`:x.name==="选词填空"||x.name==="长篇阅读"?` · ${x.start}-${x.start+x.count-1}`:"",oe=!!St[x.name];return r.jsxs("div",{className:"pd-card-sec",children:[r.jsxs("button",{type:"button",className:"pd-card-secrow","aria-expanded":oe,onClick:()=>on(F=>({...F,[x.name]:!F[x.name]})),children:[r.jsx("b",{children:R+1}),r.jsxs("span",{className:"pd-card-secname",children:[x.name,ae&&r.jsx("em",{children:ae})]}),r.jsxs("span",{className:"pd-card-secnum",children:[x.done.length,"/",x.count]}),r.jsx("svg",{className:`pd-card-caret${oe?" open":""}`,viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:r.jsx("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),oe&&r.jsx("div",{className:"pd-card-grid",children:Array.from({length:x.count}).map((F,ue)=>{const M=x.start+ue,B=x.done.includes(M),H=()=>{const be=W.current;if(!be)return;const $e=(M>=26&&M<=35?be.querySelector(`.blank[data-blank="${M}"]`):null)||[...be.querySelectorAll(".question")].find(Ge=>{var ht;return((ht=Ge.querySelector(".pd-qnum"))==null?void 0:ht.textContent)===String(M)});$e==null||$e.scrollIntoView({behavior:"smooth",block:"center"})},$=()=>{const be=W.current;if(be){if(M>=26&&M<=35)cn(M),De(0);else{cn(null);const{list:$e}=yo(be),Ge=$e.find(ht=>ht.no===M);Ge&&De($e.indexOf(Ge))}Ne("question"),pe(!0)}},ie=Mt.cmp?Ye[M]&&Ye[M]===It[M]?" cmp-right":" cmp-wrong":"";return r.jsxs("div",{role:"button",tabIndex:0,className:`pd-card-cell${B?" done":""}${ie}`,title:`第 ${M} 题${B?"（已答）":""}`,onClick:H,onKeyDown:be=>{be.key==="Enter"&&H()},children:[r.jsx("button",{type:"button",className:"pd-cell-parse",title:"查看题目 / 解析",onClick:be=>{be.stopPropagation(),$()},children:"解析"}),Mt.key&&It[M]&&r.jsx("span",{className:"pd-cell-key",children:It[M]}),Mt.mine&&Ye[M]&&r.jsx("span",{className:"pd-cell-mine",children:Ye[M]}),r.jsx("span",{className:"pd-cell-no",children:M})]},ue)})})]},`${x.name}-${R}`)})})]})]}),Bt&&(()=>{let x=[];try{x=JSON.parse(localStorage.getItem("cet:history")||"[]")}catch{}const R=x.filter(ae=>ae.id===o.id);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-history-mask",onClick:()=>rn(!1)}),r.jsxs("div",{className:"pd-history-dialog",children:[r.jsxs("header",{className:"pd-history-head",children:[r.jsxs("b",{children:["作答记录 · ",o.title]}),r.jsx("button",{type:"button",className:"pd-history-close",onClick:()=>rn(!1),"aria-label":"关闭",children:"✕"})]}),R.length===0?r.jsx("div",{className:"pd-history-empty",children:"暂无记录 · 完成作答后点「比」或「提交自测」即会保存"}):r.jsx("ul",{className:"pd-history-list",children:R.map((ae,oe)=>{const F=ae.right!==void 0&&ae.judged&&ae.right/ae.judged>=.6;return r.jsxs("li",{className:ae.snap?"clickable":"",title:ae.snap?"点击查看该次批改后的试卷":"该记录未含作答明细",onClick:()=>ae.snap&&sr(ae.snap),children:[r.jsx("span",{className:"pd-history-time",children:new Date(ae.ts).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("span",{className:`pd-history-score${F?" good":" bad"}`,children:ae.right!==void 0&&ae.judged?`正确 ${ae.right}/${ae.judged}`:"已记录"})]},oe)})})]})]})})(),Ie&&ci.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>Nt(null)}),r.jsx(Yp,{x:Ie.x,y:Ie.y,children:Ie.kind==="question"?(()=>{var ue,M;const x=(ue=W.current)==null?void 0:ue.querySelectorAll(".question")[Ie.qi],R=x?Array.from(x.querySelectorAll(".option")):[],ae=x?Number(((M=x.querySelector(".pd-qnum"))==null?void 0:M.textContent)||0):0,oe=Array.from({length:R.length||16},(B,H)=>String.fromCharCode(65+H)),F=R.length>0?String.fromCharCode(65+R.findIndex(B=>B.classList.contains("selected"))):Ye[ae];return r.jsx("div",{className:"pd-picker-circles",children:oe.map((B,H)=>r.jsx("button",{type:"button",className:`pd-picker-circle${F===B?" on":""}`,onClick:()=>{if(R.length>0)Qt(x,R[H]);else{try{const $=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}");$[ae]=B,localStorage.setItem(`cet:match:${o.id}`,JSON.stringify($))}catch{}kn()}Nt(null)},children:B},B))})})():r.jsxs("div",{className:"pd-picker-body",children:[r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(x,R)=>String.fromCharCode(65+R)).map(x=>r.jsx("button",{type:"button",className:`pd-picker-circle${Ye[Ie.blankNo]===x?" on":""}`,onClick:()=>{var oe;const R=W.current,ae=(R==null?void 0:R.querySelector(`.blank[data-blank="${Ie.blankNo}"]`))||((oe=[...(R==null?void 0:R.querySelectorAll(".question"))||[]].find(F=>{var ue;return((ue=F.querySelector(".pd-qnum"))==null?void 0:ue.textContent)===String(Ie.blankNo)}))==null?void 0:oe.querySelector(".blank, .pd-blank"));ae&&(ae.textContent=`${Ie.blankNo} ${x}`,ae.classList.add("filled"));try{const F=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}");F[Ie.blankNo]=x,localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(F))}catch{}kn(),Nt(null)},children:x},x))}),r.jsx("ul",{className:"pd-picker-words",children:$p(W.current).map(x=>r.jsx("li",{children:x},x))})]})})]}),document.body),Ca&&ci.createPortal(r.jsx(r.Fragment,{children:Ca.rects.map((x,R)=>r.jsx("span",{className:`pd-hl-${Ca.kind}`,style:{position:"fixed",left:x.x,top:x.y,width:x.w,height:x.h}},R))}),document.body),_t&&ci.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>{Wn(null),Gt(null)}}),r.jsx(Yp,{x:_t.x,y:_t.y,children:r.jsxs("div",{className:"pd-trans",children:[r.jsx("div",{className:"pd-trans-src",children:_t.text}),r.jsx("div",{className:"pd-trans-res",children:_t.result??"翻译中…"})]})})]}),document.body),nl&&ci.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>Ut(!1)}),r.jsxs("div",{className:"pd-timer-dialog",children:[r.jsx("button",{type:"button",className:"pd-timer-dialog-close",onClick:()=>Ut(!1),"aria-label":"关闭",children:"×"}),r.jsxs("div",{className:"pd-timer-dialog-head",children:[r.jsx("span",{className:"pd-timer-dialog-icon",children:"⏱"}),r.jsxs("div",{children:[r.jsx("h3",{children:"计时"}),r.jsx("p",{children:"开始后将在正文上方显示时间"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-modes",children:[r.jsxs("button",{type:"button",className:Xn==="up"?"on":"",onClick:()=>dn("up"),children:[r.jsx("b",{children:"正计时"}),r.jsx("span",{children:"累计用时"})]}),r.jsxs("button",{type:"button",className:Xn==="down"?"on":"",onClick:()=>dn("down"),children:[r.jsx("b",{children:"倒计时"}),r.jsx("span",{children:"限时完成"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-actions",children:[r.jsx("button",{type:"button",className:"pd-timer-cancel",onClick:()=>Ut(!1),children:"取消"}),r.jsx("button",{type:"button",className:"pd-timer-start",onClick:()=>{_l(Xn),oa(0),_a(!1),ll(!0),Vn(!0),Ut(!1)},children:"开始"})]})]})]}),document.body),tn&&Sn&&ci.createPortal(r.jsxs("div",{className:"pd-timer-bar",style:fn?{transform:`translate(-50%, 0) translate(${fn.x}px, ${fn.y}px)`}:void 0,children:[r.jsx("span",{className:"pd-timer-label",children:Mn==="up"?"用时":"剩余"}),r.jsx("b",{className:"pd-timer-time",children:zl}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Vn(x=>!x),children:tn?"⏸ 暂停":"▶ 继续"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>_l(x=>x==="up"?"down":"up"),children:"↻ 换模式"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>_a(x=>!x),children:"👁 遮住"}),r.jsx("button",{type:"button",className:"pd-tb-chip red",onClick:()=>{Vn(!1),oa(0),_a(!1),ll(!0),Ea(null)},children:"■ 结束"}),r.jsx("span",{className:"pd-timer-drag",onPointerDown:Y,onPointerMove:ge,onPointerUp:Se,title:"拖动"})]}),document.body),Pe&&ci.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-drawer-mask",onClick:()=>vt(null)}),r.jsxs("aside",{className:"pd-drawer",children:[r.jsxs("header",{className:"pd-drawer-head",children:[r.jsx("h3",{children:Pe.title}),r.jsx("button",{type:"button",className:"pd-drawer-close",onClick:()=>vt(null),"aria-label":"关闭",children:"×"})]}),r.jsx("textarea",{className:"pd-drawer-text",placeholder:Pe.placeholder,value:tl,onChange:x=>en(x.target.value)}),r.jsx("button",{type:"button",className:"pd-drawer-save",onClick:Ue,children:"保存"})]})]}),document.body),r.jsx(mm,{tool:ut,onTool:xt,penProps:Pn,onPenSetting:Co,shapeProps:Ln,onShapeSetting:Nl,zoom:re,onZoom:N,onUndo:ir,canUndo:pn,eraserSize:ar,onEraserSize:lr,spread:ce,onToggleSpread:D,examMode:ye,onToggleExamMode:ve})]})},Ds=({href:o,onClick:f,icon:u,label:s})=>{const p={display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 13px",borderRadius:"8px",border:"1px solid var(--affine-border-color)",background:"var(--affine-background-primary-color)",color:"var(--affine-text-primary-color)",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"none"};return o?r.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",style:p,children:[u,s]}):r.jsxs("button",{onClick:f,style:p,children:[u,s]})},jm=`
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
`,Cm=JSON.parse('[{"id":"cet4-2026-06-set1","title":"2026年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-150词/分钟，短篇新闻占比升至30%，涵盖科技突破、环境治理等话题"],"reading":["科技与生活","校园场景分析","社会现象探讨","个人成长"],"writing":["大学生参与科研项目（需回应必要性与实用性两个维度）"],"translation":["餐桌礼仪"],"readingDifficulty":["中","难","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set2","title":"2026年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["学术化场景增加，长对话信息密度提升，信号词定位（but/however后答案概率达72%）"],"reading":["教育创新","智能设备应用","文化传承","职场发展"],"writing":["校园机器人应用（需提出具体观点或可操作建议）"],"translation":["尊师文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set3","title":"2026年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["校园与生活类场景为主，口音多元化（英音、澳音占比约15%）"],"reading":["青年品德","线上学习","环境保护","人际关系"],"writing":["提升校园生活便利性（需提出具体建议）"],"translation":["送礼习俗"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2025-12-set1","title":"2025年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["整体难度适中，话题贴近学习与生活，涉及社会、经济、文化等多层面"],"reading":["生物节律与服药时间","延迟退休原因分析","自行车道建设观念冲突","选择过多的决策困扰"],"writing":["建议信——学生会如何丰富学生生活"],"translation":["民营经济"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_1","hasListening":true},{"id":"cet4-2025-12-set2","title":"2025年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["短篇新闻涉及德国超市巧克力兔子版权纠纷，长对话偏校园与日常场景"],"reading":["用户体验设计师成长","英国学校校服政策争议","学术性文本分析","职场发展"],"writing":["如何充分利用校内资源促进学业发展"],"translation":["绿色经济"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_2","hasListening":true},{"id":"cet4-2025-12-set3","title":"2025年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["考查因果关系推断与观点态度理解能力，注重实际场景关键信息抓取"],"reading":["社会热点","文化现象","教育话题","健康生活"],"writing":["为学生会如何丰富学生生活提建议"],"translation":["城市漫步"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_3","hasListening":true},{"id":"cet4-2025-06-set1","title":"2025年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set1","year":2025,"month":"06","keyPoints":{"listening":["语速适中，对话为校园和日常热点场景，长对话需集中注意力抓关键信息"],"reading":["选词填空考基础词汇运用","仔细阅读贴近社会热点","长篇阅读信息匹配"],"writing":["大学图书馆是否应该向公众开放"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_1","hasListening":true},{"id":"cet4-2025-06-set2","title":"2025年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set2","year":2025,"month":"06","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["社会热点话题","文化现象分析","教育公平","科技与生活"],"writing":["创新创业课程相关"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_2","hasListening":true},{"id":"cet4-2025-06-set3","title":"2025年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set3","year":2025,"month":"06","keyPoints":{"listening":["整体难度适中，比平时模拟题更贴近真实考试节奏，没有偏题怪题"],"reading":["选词填空考基础词汇","仔细阅读主题贴近社会热点","长篇阅读信息匹配"],"writing":["创新创业课程相关"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_3","hasListening":true},{"id":"cet4-2024-12-set1","title":"2024年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set1","year":2024,"month":"12","keyPoints":{"listening":["整体难度适中，但听力是本次考试最难的部分，语速偏快、信息密度高"],"reading":["社交媒体对人际交往的影响","社会热点话题分析","科技与生活","职场发展"],"writing":["社交媒体对人际交往的影响"],"translation":["医患关系处理"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_1","hasListening":true},{"id":"cet4-2024-12-set2","title":"2024年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set2","year":2024,"month":"12","keyPoints":{"listening":["语速平稳、发音清晰，但部分长对话和讲座信息密度较高"],"reading":["远程工作对效率和生活质量的影响","全球气候变化对农业的影响","电子书与纸质书阅读体验差异"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_2","hasListening":true},{"id":"cet4-2024-12-set3","title":"2024年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set3","year":2024,"month":"12","keyPoints":{"listening":["语速快，发音与英美音差异大，话题偏专业"],"reading":["社会热点话题","健康生活方式","教育公平","文化多样性"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_3","hasListening":true},{"id":"cet4-2024-06-set1","title":"2024年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set1","year":2024,"month":"06","keyPoints":{"listening":["语速比往年快一丢丢，长对话容易走神漏细节"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["智能设备对学习的影响"],"translation":["贴福字"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_1","hasListening":true},{"id":"cet4-2024-06-set2","title":"2024年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set2","year":2024,"month":"06","keyPoints":{"listening":["语速平稳，没有怪口音，基础稳点能拿不少分"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["大学图书馆是否应该向公众开放"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_2","hasListening":true},{"id":"cet4-2024-06-set3","title":"2024年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set3","year":2024,"month":"06","keyPoints":{"listening":["整体中等偏上，不是最难但坑点真不少"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["智能设备对学习的影响"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_3","hasListening":true},{"id":"cet4-2023-12-set1","title":"2023年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set1","year":2023,"month":"12","keyPoints":{"listening":["短篇新闻和长对话相对简单，听力篇章难度有所增加"],"reading":["词汇理解与长篇阅读较容易，仔细阅读难度较大"],"writing":["写作要求与往年变化不大，认真审题即可"],"translation":["改革开放以来饮食变化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-12-set2","title":"2023年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set2","year":2023,"month":"12","keyPoints":{"listening":["听力语速和长对话复杂度已接近当前考试标准"],"reading":["选词填空出现个别生词","长篇阅读信息匹配","仔细阅读细节题为主"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-12-set3","title":"2023年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set3","year":2023,"month":"12","keyPoints":{"listening":["听力部分如果不仔细听材料，很多细节之处容易忽略"],"reading":["仔细阅读难度较大，需要较强的逻辑推断能力"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set1","title":"2023年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["长对话略难，同义替换较多，不仔细听容易忽略细节"],"reading":["仔细阅读中规中矩，定位好关键句关键词正确率较高"],"writing":["作文和翻译内容相对抽象，很多词汇难写，难度较大"],"translation":["揠苗助长"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set2","title":"2023年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["听力发音清晰、语速适中"],"reading":["阅读话题不偏，翻译是传统文化类，背过素材很好上手"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["亡羊补牢"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-06-set3","title":"2023年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set3","year":2023,"month":"06","keyPoints":{"listening":["听力整体来说较简单，正确选项与原文高度匹配，体现视听一致原则"],"reading":["阅读话题不偏，仔细阅读中规中矩"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["守株待兔"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2022-12-set1","title":"2022年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["听力对我来说很难，错了挺多"],"reading":["选词填空考高中考纲词汇","仔细阅读感觉还行","翻译冬至那篇挺简单"],"writing":["培养社交能力的必要性"],"translation":["冬至"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_1","hasListening":true},{"id":"cet4-2022-12-set2","title":"2022年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set2","year":2022,"month":"12","keyPoints":{"listening":["听力开头两个全错，后十个听力错4个"],"reading":["选词填空考parenthood","仔细阅读涉及鱼和消除贫困，都读懂了但选项选不出来"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_2","hasListening":true},{"id":"cet4-2022-12-set3","title":"2022年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set3","year":2022,"month":"12","keyPoints":{"listening":["听力部分16-25题较难"],"reading":["选词填空都是高中考纲词汇，没有不认识的词"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_3","hasListening":true},{"id":"cet4-2022-06-set1","title":"2022年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set1","year":2022,"month":"06","keyPoints":{"listening":["听力选项同义替换多，长度普遍较长，预读起来没那么顺畅"],"reading":["段落匹配到处是显眼的TD，做起来挺轻松","仔细阅读第一篇挺简单，第二篇common sense有点绕"],"writing":["作文很好写，背的模版刚好契合"],"translation":["赵州桥"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_1","hasListening":true},{"id":"cet4-2022-06-set2","title":"2022年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set2","year":2022,"month":"06","keyPoints":{"listening":["全国共考两套听力，本套听力与前两套内容一样，只是选项顺序不同"],"reading":["阅读整体感觉还行，仔细阅读定位准确即可"],"writing":["作文较好写"],"translation":["亡羊补牢"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_2","hasListening":true},{"id":"cet4-2022-06-set3","title":"2022年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set3","year":2022,"month":"06","keyPoints":{"listening":["听力比起去年12月的要难一点"],"reading":["阅读话题常规，仔细阅读需要仔细定位"],"writing":["作文较好写"],"translation":["揠苗助长"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_3","hasListening":true},{"id":"cet4-2021-12-set1","title":"2021年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["听力题目中规中矩，和之前差不多"],"reading":["阅读还算正常，仔细阅读定位准确即可"],"writing":["作文report较难，不记得怎么写"],"translation":["都江堰"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2021-12-set2","title":"2021年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set2","year":2021,"month":"12","keyPoints":{"listening":["听力部分中规中矩"],"reading":["阅读部分选词填空考词汇辨析与语法，仔细阅读涉及人工智能在医疗中的应用"],"writing":["作文report较难"],"translation":["坎儿井"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-12-set3","title":"2021年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set3","year":2021,"month":"12","keyPoints":{"listening":["听力部分与第二套一致"],"reading":["阅读整体难度适中"],"writing":["作文report较难"],"translation":["大运河"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set1","title":"2021年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set1","year":2021,"month":"06","keyPoints":{"listening":["听力好难，到后面基本上是乱写"],"reading":["第二套的长篇阅读和第三套的仔细阅读，太难了，和平时的四级考试难度不在一个等级"],"writing":["科技是否会让人变懒"],"translation":["铁观音"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set2","title":"2021年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set2","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["匹配阅读真的难，文章内容根本读不懂，全是比较晦涩难懂的内容"],"writing":["科技是否会让人变懒"],"translation":["龙井"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set3","title":"2021年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set3","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["仔细阅读真的有些读不懂，一个是boring，一个是肥胖"],"writing":["科技是否会让人变懒"],"translation":["普洱"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set1","title":"2020年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["听力考试难度适中，较之前考题无明显变化"],"reading":["选词填空是难点，段落匹配和传统阅读得分点与以往并无差异，主要考察名词定位和句式关键信息处理"],"writing":["Changes in the Way of Education"],"translation":["春节中鱼的象征意义"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set2","title":"2020年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["新闻听力选项内容较长，词汇难度提升，主要考察细节匹配"],"reading":["选词填空讲“该如何把控赞美的度”，快速阅读关于“贫穷的样子”，仔细阅读是比较日常的社科类话题"],"writing":["Changes in the Way of Transportation"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set3","title":"2020年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set3","year":2020,"month":"12","keyPoints":{"listening":["长对话部分选项内容相对容易，短文听力部分较长对话稍有难度"],"reading":["仔细阅读试题考查类型为细节理解，题干关键词定位明显"],"writing":["Changes in the Way of Communication"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set1","title":"2020年9月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["新闻部分语速适中，专业词汇较少；长对话第一篇语速较快，连读较多"],"reading":["选词填空难度不大，词性辨别及单词难度较低","长篇阅读难点在实验过程的段落区分"],"writing":["在线图书馆/在线词典/PPT的使用"],"translation":["白酒/国宴等传统文化词汇"],"readingDifficulty":["难","中","中","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set2","title":"2020年9月 四级真题 (第二、三套合并卷)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["听力部分整体较往年相比难度适中，语速适中，考题均为细节题"],"reading":["仔细阅读主要考查综合阅读能力，题目以细节题为主，重在对比原文与选项是否同义"],"writing":["分析利弊型作文，网络相关话题"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-07-set1","title":"2020年7月 四级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["难度基本与去年12月持平，个别几道题较难，做题技巧围绕视听一致原则"],"reading":["选词填空为科普类文章，考查大纲词汇及名、动、形、副四类词汇语法结构"],"writing":["分析翻译应用程序流行的原因（原因解释类作文）"],"translation":["火锅"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set1","title":"2019年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set1","year":2019,"month":"12","keyPoints":{"listening":["新闻部分较往年容易，长对话正常难度，篇章较难，考题多为细节题"],"reading":["阅读整体难度适中，多为应用文和议论文，选词填空出现个别生词，考生易在此处丢分"],"writing":["推荐信（应用文写作）"],"translation":["父母重视教育"],"readingDifficulty":["中","易","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2019-12-set2","title":"2019年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set2","year":2019,"month":"12","keyPoints":{"listening":["长对话听音难点主要集中在语音，连读较多，英美音互换较难"],"reading":["阅读整体难度适中，仔细阅读部分题在常见设题点设题，较容易定位"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set3","title":"2019年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set3","year":2019,"month":"12","keyPoints":{"listening":["短文篇幅较长，语言难度较其他两部分来说相对难一些"],"reading":["阅读整体难度适中，选词填空出现个别生词"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","易","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set1","title":"2019年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set1","year":2019,"month":"06","keyPoints":{"listening":["整体来说较简单，新闻、长对话、篇章考的都是在课堂上讲过的简单生活类主题"],"reading":["阅读理解总体难度比2018年12月简单，高频词汇反复出现","考点中规中矩","阅读材料接地气容易理解"],"writing":["新闻报道（社会热点类话题）"],"translation":["灯笼"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set2","title":"2019年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set2","year":2019,"month":"06","keyPoints":{"listening":["听力考试整体来说较简单，好多文章的正确选项都跟原文高度匹配"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set3","title":"2019年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set3","year":2019,"month":"06","keyPoints":{"listening":["听力难度适中"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set1","title":"2018年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set1","year":2018,"month":"12","keyPoints":{"listening":["题型稳定，长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察学生在材料中的定位及对重点语句的理解能力"],"writing":["毕业后将面临的就业挑战"],"translation":["手机阅读"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set2","title":"2018年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set2","year":2018,"month":"12","keyPoints":{"listening":["长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，题材为学生的日常兴趣与关注的话题"],"writing":["留学面临的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-12-set3","title":"2018年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set3","year":2018,"month":"12","keyPoints":{"listening":["听力部分题型稳定，话题较为传统"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察定位及重点语句理解能力"],"writing":["大城市生活的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-06-set1","title":"2018年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set1","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单，新闻部分没有涉及政治经济类话题，考的是社会民生类新闻"],"reading":["试卷整体难度有所下降，阅读与听力较以往考试也更容易理解"],"writing":["口语能力的重要性及如何培养"],"translation":["飞机"],"readingDifficulty":["易","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set2","title":"2018年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set2","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["选材源于英美主流媒体报刊，题材集中在社科领域"],"writing":["写作能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set3","title":"2018年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set3","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["试卷整体难度有所下降，阅读更容易理解"],"writing":["阅读能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}}]'),Am=JSON.parse('[{"id":"cet6-2026-06-set1","title":"2026年6月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-160词/分钟，学术场景占比激增至68%，多模态（语音+图表）融合考查"],"reading":["科技与生活","社会现象分析","科技伦理","人文关怀"],"writing":["热爱自然（Love Nature）"],"translation":["无人机"],"difficulty":"中等","readingDifficulty":["中","难","难","难"],"readingLevel":"难"}},{"id":"cet6-2026-06-set2","title":"2026年6月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["讲座听力开头30秒是考点密集区，主旨题答案几乎都出现在前30秒内"],"reading":["文化传承","教育与发展","经济与社会","个人成长"],"writing":["深入了解中华传统文化有助于促进文化交流"],"translation":["电子商务与乡村振兴"],"difficulty":"中等","readingDifficulty":["中","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2026-06-set3","title":"2026年6月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["转折词but、however后面覆盖约40%的细节题和推理题"],"reading":["心理健康","科技对社会的影响","环境与责任","批判性思维"],"writing":["科技与人文"],"translation":["科技医疗（远程医疗）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-12-set1","title":"2025年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["持续关注学术场景和逻辑信号词"],"reading":["社会价值观","老年人对社会贡献","教育方法","科技与人类"],"writing":["在竞争日益激烈的世界中，大学生应更好准备以应对各种挑战"],"translation":["尊老（中华民族传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_1/test.pdf"},{"id":"cet6-2025-12-set2","title":"2025年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["逻辑推断和细节抓取并重"],"reading":["网络经济与传统经济","科技发展与政策","自我价值实现","大学生活适应"],"writing":["通过“中国梦”实现自我价值"],"translation":["中华民族崇尚的自强自立精神"],"difficulty":"中等","readingDifficulty":["中","中","难","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_2/test.pdf"},{"id":"cet6-2025-12-set3","title":"2025年12月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["学术场景与日常对话交替出现"],"reading":["传统美德与消费","深度阅读与AI","人类创造力","志愿服务与社会责任"],"writing":["教师对学生学术追求和个人发展的影响"],"translation":["节俭（frugality，传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_3/test.pdf"},{"id":"cet6-2025-06-set1","title":"2025年6月 六级真题 (第一套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set1","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第1套.pdf","keyPoints":{"listening":["听力语速提升，学术场景占比增加，讲座逻辑严密"],"reading":["社会心理（身份构建）","独处的好处","追随激情的潜在问题","工作与生活平衡"],"writing":["过度依赖AI对创造力的危害"],"translation":["天宫空间站"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-06-set2","title":"2025年6月 六级真题 (第二套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set2","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第2套.pdf","keyPoints":{"listening":["学术场景为主，重视逻辑信号词"],"reading":["社会心理","图书馆的重要性","社区文化","信息获取与知识传播"],"writing":["社交媒体的使用（正确且负责任地使用）"],"translation":["南水北调工程"],"difficulty":"较难","readingDifficulty":["难","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2025-06-set3","title":"2025年6月 六级真题 (第三套)","desc":"高阶词汇突破","url":"exam-detail.html?id=cet6-2025-06-set3","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第3套.pdf","keyPoints":{"listening":["语速偏快，细节题需结合笔记技巧"],"reading":["环境意识","肉类消费与气候变化","可持续生活","公共健康"],"writing":["职业准备"],"translation":["粤港澳大湾区"],"difficulty":"较难","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set1","title":"2024年12月 六级真题 (第一套)","desc":"年度压轴真题","url":"exam-detail.html?id=cet6-2024-12-set1","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_1/test.pdf","keyPoints":{"listening":["长对话围绕绩效评估、商业项目展开；短文考儿童好奇心"],"reading":["全球贫困问题","密码记忆研究","恐怖片为何受欢迎","社会心理与科技"],"writing":["人工智能对职场的影响"],"translation":["北斗卫星导航系统"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set2","title":"2024年12月 六级真题 (第二套)","desc":"学术英语精讲","url":"exam-detail.html?id=cet6-2024-12-set2","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_2/test.pdf","keyPoints":{"listening":["讲座考物质追求、可持续时尚；学术场景比重增加"],"reading":["全球贫困问题","数字隐私与密码记忆","恐怖片流行原因","人类行为与心理"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["人工智能技术在中国各行业的应用及发展前景"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set3","title":"2024年12月 六级真题 (第三套)","desc":"写作论证技巧","url":"exam-detail.html?id=cet6-2024-12-set3","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_3/test.pdf","keyPoints":{"listening":["长对话涉及商业项目；讲座偏社会学话题"],"reading":["社会经济学","左脑与右脑差异","认知科学","教育应用"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["京剧脸谱艺术"],"difficulty":"较难","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2024-06-set1","title":"2024年6月 六级真题 (第一套)","desc":"真实真题（含听力音频）","url":"exam-detail.html?id=cet6-2024-06-set1","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_1/test.pdf","keyPoints":{"listening":["听力语速偏快，连读弱读较多，短对话聚焦职场、学术场景"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["数字素养技能（Digital Literacy Skills）"],"translation":["中国传统婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2024_06_1","hasListening":true},{"id":"cet6-2024-06-set2","title":"2024年6月 六级真题 (第二套)","desc":"复杂句式解析","url":"exam-detail.html?id=cet6-2024-06-set2","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_2/test.pdf","keyPoints":{"listening":["长对话主题为“学术会议筹备”，讲座细节推断"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["社会实践和理论学习同等重要（Social Practice and Academic Learning）"],"translation":["竹子"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-06-set3","title":"2024年6月 六级真题 (第三套)","desc":"听力长对话攻略","url":"exam-detail.html?id=cet6-2024-06-set3","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_3/test.pdf","keyPoints":{"listening":["语速快，弱读连读多；注意转折词后的答案区间"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["坚持独立思考 / 自主学习"],"translation":["中国婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2023-12-set1","title":"2023年12月 六级真题 (第一套)","desc":"深入剖析长难句","url":"exam-detail.html?id=cet6-2023-12-set1","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_1/test.pdf","keyPoints":{"listening":["短篇新闻涉及量子计算、乡村教育振兴；讲座关注专业术语理解（如“量子霸权”）"],"reading":["AI时代创造力价值","数字经济对传统行业的冲击与机遇","环境保护与经济发展","社会文化"],"writing":["环境保护与经济发展（分析矛盾并提出解决方案）"],"translation":["中国人口结构变化与老龄化社会"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_1","hasListening":true},{"id":"cet6-2023-12-set2","title":"2023年12月 六级真题 (第二套)","desc":"科技文献阅读","url":"exam-detail.html?id=cet6-2023-12-set2","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_2/test.pdf","keyPoints":{"listening":["短篇新闻涉及全球生物多样性保护会议；长对话职场场景"],"reading":["AI时代创造力价值","多元文化社会的价值冲突与融合","基础知识获取的重要性","跨文化沟通"],"writing":["The importance of acquiring the basic knowledge"],"translation":["中国城镇化进程"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_2","hasListening":true},{"id":"cet6-2023-12-set3","title":"2023年12月 六级真题 (第三套)","desc":"翻译精准表达","url":"exam-detail.html?id=cet6-2023-12-set3","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_3/test.pdf","keyPoints":{"listening":["讲座学术逻辑性强，注意信号词和逻辑词"],"reading":["社会现象","逻辑推理与信息匹配","老年人社会贡献","职场与生活"],"writing":["老年人凭借宝贵技能和经验继续为社会做贡献（给定开头句）"],"translation":["中国养老服务体系建设"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_3","hasListening":true},{"id":"cet6-2023-06-set1","title":"2023年6月 六级真题 (第一套)","desc":"议论文写作范式","url":"exam-detail.html?id=cet6-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["注意力管理","专注力对学习工作的重要性","AI时代思考能力","多角度分析"],"writing":["AI时代思考能力","多角度分析"],"translation":["贴春联"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_1","hasListening":true},{"id":"cet6-2023-06-set2","title":"2023年6月 六级真题 (第二套)","desc":"学术词汇积累","url":"exam-detail.html?id=cet6-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["AI创造力争议","人工智能能否替代人类创作","科技伦理","社会影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["印章"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_2","hasListening":true},{"id":"cet6-2023-06-set3","title":"2023年6月 六级真题 (第三套)","desc":"听力讲座笔记法","url":"exam-detail.html?id=cet6-2023-06-set3","year":2023,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_3/test.pdf","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["多元文化","文化价值冲突与融合","文化认同","全球化影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["中央电视台总部大楼"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_3","hasListening":true},{"id":"cet6-2022-12-set1","title":"2022年12月 六级真题 (第一套)","desc":"后疫情时代话题","url":"exam-detail.html?id=cet6-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["三篇新闻聚焦后疫情时代社会议题"],"reading":["韧性城市建设","数字鸿沟对社会公平的影响","学生贷款与教育公平","社会政策分析"],"writing":["培养团队精神"],"translation":["春节（习俗","文化内涵和现代意义）"],"difficulty":"中等","readingDifficulty":["中","难","中","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_1","hasListening":true},{"id":"cet6-2022-12-set2","title":"2022年12月 六级真题 (第二套)","desc":"经济全球化主题","url":"exam-detail.html?id=cet6-2022-12-set2","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_2/test.pdf","keyPoints":{"listening":["长对话细节题占比高，注意逻辑关系"],"reading":["社会心理","数字鸿沟与信息公平","教育公平","社会阶层与流动"],"writing":["培养批判性思维（逻辑推理","避免草率判断）"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_2","hasListening":true},{"id":"cet6-2022-12-set3","title":"2022年12月 六级真题 (第三套)","desc":"文化多样性","url":"exam-detail.html?id=cet6-2022-12-set3","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_3/test.pdf","keyPoints":{"listening":["学术讲座偏多，逻辑结构清晰"],"reading":["文化现象","古典音乐受众演变","文化传承与创新","艺术与商业"],"writing":["信息时代的学习"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_3","hasListening":true},{"id":"cet6-2022-06-set1","title":"2022年6月 六级真题 (第一套)","desc":"气候变化议题","url":"exam-detail.html?id=cet6-2022-06-set1","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第1套.pdf","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["环保生活","长难句与观点梳理","环境政策","绿色生活方式"],"writing":["Live an Environmentally Friendly Lifestyle"],"translation":["剪纸"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2022-06-set2","title":"2022年6月 六级真题 (第二套)","desc":"人工智能伦理","url":"exam-detail.html?id=cet6-2022-06-set2","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第2套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","信息匹配与细节定位","社会文化","生态保护"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["皮影戏"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2022-06-set3","title":"2022年6月 六级真题 (第三套)","desc":"可持续发展","url":"exam-detail.html?id=cet6-2022-06-set3","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第3套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","科普推理","社会热点问题","文化现象"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["昆曲"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2021-12-set1","title":"2021年12月 六级真题 (第一套)","desc":"数字经济时代","url":"exam-detail.html?id=cet6-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["场景多样，细节题占比高"],"reading":["睡眠与健康","社会现象分析","有效沟通","人际关系"],"writing":["有效沟通能力的重要性"],"translation":["井冈山（中国革命摇篮）"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_1","hasListening":true},{"id":"cet6-2021-12-set2","title":"2021年12月 六级真题 (第二套)","desc":"社会公平正义","url":"exam-detail.html?id=cet6-2021-12-set2","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_2/test.pdf","keyPoints":{"listening":["讲座学术性强，需要笔记辅助"],"reading":["经济影响","自动化对经济的破坏性","科技与就业","社会变迁"],"writing":["Say Thank You to Parents（向父母道谢）"],"translation":["延安（中国革命圣地）"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_2","hasListening":true},{"id":"cet6-2021-12-set3","title":"2021年12月 六级真题 (第三套)","desc":"科技创新驱动","url":"exam-detail.html?id=cet6-2021-12-set3","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_3/test.pdf","keyPoints":{"listening":["长对话偏职场与生活场景"],"reading":["社会心理","社交媒体与数字阅读","数字时代生活","阅读习惯"],"writing":["虚假信息"],"translation":["中国共产党第一次全国代表大会会址"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_3","hasListening":true},{"id":"cet6-2021-06-set1","title":"2021年6月 六级真题 (第一套)","desc":"疫情下的教育变革","url":"exam-detail.html?id=cet6-2021-06-set1","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_1/test.pdf","keyPoints":{"listening":["长对话8%、听力篇章7%、讲座20%，注意转折、因果、最高级等关键词"],"reading":["创造力","画画与创造力教育","AI与就业","职业发展"],"writing":["社交媒体是否拉近了人际距离"],"translation":["海南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_1","hasListening":true},{"id":"cet6-2021-06-set2","title":"2021年6月 六级真题 (第二套)","desc":"远程办公趋势","url":"exam-detail.html?id=cet6-2021-06-set2","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_2/test.pdf","keyPoints":{"listening":["注意七种关键词（转折、因果、最高级、事实罗列等）"],"reading":["技术影响","汽车改变生活","文化遗产（巴黎圣母院大火）","科技与社会"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["云南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_2","hasListening":true},{"id":"cet6-2021-06-set3","title":"2021年6月 六级真题 (第三套)","desc":"医疗卫生体系","url":"exam-detail.html?id=cet6-2021-06-set3","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_3/test.pdf","keyPoints":{"listening":["长对话、篇章、讲座题型分布均衡"],"reading":["教育观念","学校创造力教育","教育公平","个人成长"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["青海"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_3","hasListening":true},{"id":"cet6-2020-12-set1","title":"2020年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop the ability to meet challenges"]}},{"id":"cet6-2020-12-set2","title":"2020年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop ef fective communication skills"]}},{"id":"cet6-2020-12-set3","title":"2020年12月 六级真题 (第三套)","desc":"国际合作发展","url":"exam-detail.html?id=cet6-2020-12-set3","year":2020,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/answer.pdf","keyPoints":{"listening":["注意事实罗列词汇、情态动词"],"reading":["艺术欣赏","艺术欣赏困境","创造力","挑战自我"],"writing":["Why students should take challenges"],"translation":["大兴机场"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2020-09-set1","title":"2020年9月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;Beauty of the soul is the essential beauty.&rdquo;"]}},{"id":"cet6-2020-09-set2","title":"2020年9月 六级真题 (第二、三套合并卷)","desc":"第二、三套合并卷，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["全国共考1套听力，与第一套一致"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["在线经济崛起"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["第二、三套作文真题整理中"]}},{"id":"cet6-2020-07-set1","title":"2020年7月 六级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;The best preparation for tomorrow is doing your best today."]}},{"id":"cet6-2019-12-set1","title":"2019年12月 六级真题 (第一套)","desc":"5G时代来临","url":"exam-detail.html?id=cet6-2019-12-set1","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/listening.mp3","keyPoints":{"listening":["讲座听力为重点，需关注学术逻辑"],"reading":["家庭责任","责任感","牡丹花文化","传统美德"],"writing":["家庭责任感"],"translation":["牡丹花"],"difficulty":"适中","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2019-12-set2","title":"2019年12月 六级真题 (第二套)","desc":"区块链技术","url":"exam-detail.html?id=cet6-2019-12-set2","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/listening.mp3","keyPoints":{"listening":["讲座学术逻辑，注意信号词"],"reading":["社会责任","责任感","荷花文化","社会价值观"],"writing":["社会责任感"],"translation":["荷花"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-12-set3","title":"2019年12月 六级真题 (第三套)","desc":"大数据应用","url":"exam-detail.html?id=cet6-2019-12-set3","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["团体责任","责任感","梅花文化","传统文化"],"writing":["团体责任感"],"translation":["梅花"],"difficulty":"适中","readingDifficulty":["中","易","易","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set1","title":"2019年6月 六级真题 (第一套)","desc":"文化自信建设","url":"exam-detail.html?id=cet6-2019-06-set1","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/listening.mp3","keyPoints":{"listening":["长对话、Passage、Lecture三种题型"],"reading":["AI影响","AI对人类文明的影响","AI与霍金警告","团队精神与沟通"],"writing":["团队精神和沟通在工作中的重要性"],"translation":["汉语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set2","title":"2019年6月 六级真题 (第二套)","desc":"生态文明理念","url":"exam-detail.html?id=cet6-2019-06-set2","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/listening.mp3","keyPoints":{"listening":["注意信号词和逻辑词"],"reading":["创业","老年人市场","学习动机","教育与工作"],"writing":["学习动机和学习方法的重要性"],"translation":["成语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set3","title":"2019年6月 六级真题 (第三套)","desc":"创新型国家","url":"exam-detail.html?id=cet6-2019-06-set3","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["职业转型","重新工作感受与AI发展","人际交往","互相尊重"],"writing":["人际交往中相互理解和尊重的重要性"],"translation":["方言"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set1","title":"2018年12月 六级真题 (第一套)","desc":"改革开放40年","url":"exam-detail.html?id=cet6-2018-12-set1","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第1套.pdf","keyPoints":{"listening":["需关注关键句而非追求整篇听懂"],"reading":["农业机器人","机器人在农业中的应用","科普沟通","留学挑战"],"writing":["The challenges of studying abroad"],"translation":["图书馆"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set2","title":"2018年12月 六级真题 (第二套)","desc":"移动支付革命","url":"exam-detail.html?id=cet6-2018-12-set2","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第2套.pdf","keyPoints":{"listening":["同上"],"reading":["儿童注意力发展","智能手机与心理学","毕业挑战","职场适应"],"writing":["The challenges of starting a career after graduation"],"translation":["博物馆"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2018-12-set3","title":"2018年12月 六级真题 (第三套)","desc":"高铁走向世界","url":"exam-detail.html?id=cet6-2018-12-set3","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第3套.pdf","keyPoints":{"listening":["同上"],"reading":["教育方法","高等数学争论","护理机器人","大城市生活","社会适应"],"writing":["The challenges of living in big cities"],"translation":["体育馆"],"difficulty":"适中","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2018-06-set1","title":"2018年6月 六级真题 (第一套)","desc":"智能制造升级","url":"exam-detail.html?id=cet6-2018-06-set1","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第1套.pdf","keyPoints":{"listening":["长对话为热身过渡（7%），重点在讲座讲话（第23-25题）"],"reading":["非名校选择","社会文化","高铁网络与社会发展"],"writing":["建立企业与消费者之间的信任"],"translation":["高铁"],"difficulty":"适中","readingDifficulty":["易","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set2","title":"2018年6月 六级真题 (第二套)","desc":"电子商务发展","url":"exam-detail.html?id=cet6-2018-06-set2","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第2套.pdf","keyPoints":{"listening":["讲座听力涉及大写专有名词和数字（如1984）；第23题偏主旨概括题"],"reading":["专有名词","词汇辨析","社会现象","生活质量"],"writing":["建立师生之间的信任"],"translation":["私家车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set3","title":"2018年6月 六级真题 (第三套)","desc":"共享单车现象","url":"exam-detail.html?id=cet6-2018-06-set3","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第3套.pdf","keyPoints":{"listening":["听力素材与第二套一致，仅选项顺序不同"],"reading":["社会文化","人际关系","社会发展"],"writing":["建立老板和员工之间的信任"],"translation":["共享单车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}}]'),a0={cet4:Cm,cet6:Am},_m=a0,Em={blue:{"--pf-accent":"#60a5fa","--pf-back":"#0056b3","--pf-front":"rgba(0, 123, 255, 0.65)","--pf-hint":"#60a5fa"},yellow:{"--pf-accent":"#FFCC00","--pf-back":"#F0B400","--pf-front":"rgba(255, 204, 0, 0.72)","--pf-hint":"#FFCC00"}};function zm(o,f){return(_m[o]??[]).filter(u=>Number(u.year)===f).length}const Rs=({label:o,text:f,testId:u,type:s,onEnter:p,accent:S="blue"})=>{const[b,A]=h.useState(!1),[w,k]=h.useState(""),q=h.useMemo(()=>{if(!s)return null;const L=w.trim().match(/^(20\d{2})\s*年?$/);if(!L)return null;const U=Number(L[1]),K=zm(s,U);return{year:U,count:K}},[w,s]);return r.jsxs("div",{className:"pf-item","data-type":s??"kaoyan",style:Em[S],children:[r.jsxs("div",{className:`folder-card${b?" open":""}`,"data-testid":u,onClick:()=>A(L=>!L),children:[r.jsxs("div",{className:"hint-wrapper",children:[r.jsx("span",{className:"hint-text",children:"Click to open"}),r.jsx("svg",{className:"hint-arrow",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22",stroke:"var(--pf-hint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r.jsxs("div",{className:"folder-container",children:[r.jsx("svg",{className:"folder-back",viewBox:"0 0 50 40",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z",fill:"var(--pf-back)"})}),s&&r.jsxs("div",{className:"folder-search",onClick:L=>L.stopPropagation(),children:[r.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",inputMode:"numeric",placeholder:"年份 如 2025",className:"search-input",value:w,"aria-label":`在 ${o} 中按年份搜索`,onChange:L=>{k(L.target.value.replace(/[^\d年]/g,"").slice(0,5))},onKeyDown:L=>{L.key==="Enter"&&(q!=null&&q.count)&&(L.preventDefault(),p(s??"kaoyan",q.year))}})]}),q&&r.jsx("div",{className:`year-hint${q.count?"":" is-empty"}`,"data-testid":`${u}-year-hint`,onClick:L=>{L.stopPropagation(),q.count&&p(s??"kaoyan",q.year)},children:q.count?r.jsxs(r.Fragment,{children:[r.jsxs("b",{children:[q.year," 年"]})," · ",q.count," 套 · 回车打开"]}):r.jsxs(r.Fragment,{children:[q.year," 年暂无试卷"]})}),r.jsxs("div",{className:"file file-5",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.jsx("polyline",{points:"21 15 16 10 5 21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 4.2 MB"})]}),r.jsxs("div",{className:"file file-4",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),r.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 128 MB"})]}),r.jsxs("div",{className:"file file-3",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 12 KB"})]}),r.jsxs("div",{className:"file file-2","data-testid":`${u}-enter`,onClick:L=>{L.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.jsx("polyline",{points:"10 9 9 9 8 9"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 1.1 MB"})]}),r.jsxs("div",{className:"file file-1","data-testid":`${u}-enter-top`,onClick:L=>{L.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),r.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 8.4 MB"})]}),r.jsxs("div",{className:"folder-front-wrapper",children:[r.jsx("svg",{className:"folder-front",viewBox:"0 0 50 34",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z",fill:"var(--pf-front)"})}),r.jsx("div",{className:"folder-label"}),r.jsxs("div",{className:"counter",children:[r.jsx("div",{className:"status-dot"}),r.jsx("span",{className:"counter-label",children:"FILES"}),r.jsx("span",{className:"counter-number","data-testid":`${u}-count`,children:q?q.count||"0":s?"All":"NEW"})]})]})]})]}),r.jsx("div",{className:"pf-caption",children:o})]})},Nm=({onEnter:o})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Mm}),r.jsxs("div",{className:"pe-train-head",children:[r.jsx("h2",{className:"pe-train-title",children:"题目训练"}),r.jsxs("div",{className:"pe-train-tabs",children:[r.jsx("button",{type:"button",className:"pe-train-tab is-on",children:"真题训练"}),r.jsx("button",{type:"button",className:"pe-train-tab",onClick:()=>window.alert("导入题目功能即将上线"),children:"导入题目"})]})]}),r.jsxs("div",{className:"pf-stage",children:[r.jsx(Rs,{label:"CET-4 英语四级",text:"CET-4",testId:"paper-entry-cet4",type:"cet4",onEnter:o}),r.jsx(Rs,{label:"CET-6 英语六级",text:"CET-6",testId:"paper-entry-cet6",type:"cet6",onEnter:o}),r.jsx(Rs,{label:"考研英语",text:"KAOYAN",testId:"paper-entry-kaoyan",accent:"yellow",onEnter:o})]})]}),Mm=`
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
`,Tm=a0,Lm=({activeType:o,initialYear:f="",onTypeChange:u,onOpenPaper:s,onBackToEntry:p})=>{const[S,b]=h.useState(""),[A,w]=h.useState(f),[k,q]=h.useState(""),[L,U]=h.useState(""),[K,P]=h.useState([]),[ee,se]=h.useState(null),[le,W]=h.useState(!1),[me,ye]=h.useState(!1),je=h.useRef(null),xe=h.useRef(null),ve=h.useRef(!1),ze=h.useRef([]);h.useEffect(()=>{const y=j=>{const D=j.target;if(!(D instanceof HTMLElement)||!je.current||!(D===je.current||D.contains(je.current)))return;const X=D.scrollTop>120;W(te=>te!==X?X:te),D.scrollTop>4&&(ve.current=!0);const J=D.getBoundingClientRect(),m=J.top+J.height/2;let _=null,Z=Number.POSITIVE_INFINITY;for(let te=1;te<ze.current.length;te++){const pe=ze.current[te];if(!pe)continue;const I=pe.getBoundingClientRect();if(I.top<=m&&I.bottom>=m){const Ne=Math.abs((I.top+I.bottom)/2-m);Ne<Z&&(Z=Ne,_=te)}}_!==null?(xe.current=_,se(_)):xe.current!==null&&(se(te=>te===xe.current?null:te),xe.current=null)};return document.addEventListener("scroll",y,!0),()=>document.removeEventListener("scroll",y,!0)},[]),h.useEffect(()=>{const y=window.setTimeout(()=>{ve.current||(xe.current=0,se(0))},5e3);return()=>window.clearTimeout(y)},[o]),h.useEffect(()=>{try{P(JSON.parse(localStorage.getItem("cet:history")||"[]"))}catch{P([])}},[]);const re=Tm[o]??[],fe=Rm(re.map(y=>String(y.year??"")).filter(Boolean)),ne=["12","07","06"],N=re.filter(y=>{var Z,te;const j=S.trim().toLowerCase(),D=((Z=/^(20\d{2})\s*年?$/.exec(j))==null?void 0:Z[1])??"",X=!j||!!D&&String(y.year)===D||y.title.toLowerCase().includes(j)||(y.desc||"").toLowerCase().includes(j),J=!A||String(y.year)===A,m=!k||y.month===k,_=!L||((te=y.keyPoints)==null?void 0:te.readingLevel)===L;return X&&J&&m&&_}),ce=[];for(let y=0;y<N.length;y+=3)ce.push(N.slice(y,y+3));ze.current.length=ce.length;const de=y=>K.filter(j=>j&&j.id===y).length,Le=y=>{xe.current=null,se(y)};return r.jsxs("div",{ref:je,className:`pl-root${le?" scrolled":""}`,children:[r.jsx("style",{children:Om}),r.jsxs("div",{className:"pl-float",children:[r.jsxs("div",{className:"pl-float-bar",children:[r.jsxs("div",{className:"pl-float-left",children:[r.jsx("button",{className:"pl-fab",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Gp,{})}),r.jsx("button",{className:`pl-fab${me?" on":""}`,onClick:()=>ye(y=>!y),"aria-label":"搜索",title:"搜索",children:r.jsx(Ms,{width:17,height:17})})]}),r.jsxs("div",{className:"pl-float-right",children:[r.jsxs("div",{className:"pl-fab-filters",children:[r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:A||"年"}),r.jsxs("select",{value:A,onChange:y=>w(y.target.value),"aria-label":"年份",children:[r.jsx("option",{value:"",children:"全部年份"}),fe.map(y=>r.jsxs("option",{value:y,children:[y," 年"]},y))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:k?`${Number(k)}月`:"月"}),r.jsxs("select",{value:k,onChange:y=>q(y.target.value),"aria-label":"月份",children:[r.jsx("option",{value:"",children:"全部月份"}),ne.map(y=>r.jsxs("option",{value:y,children:[Number(y)," 月"]},y))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:L||"难度"}),r.jsxs("select",{value:L,onChange:y=>U(y.target.value),"aria-label":"难度",children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]})]})]}),r.jsx("div",{className:"pl-fab-switch",children:["cet4","cet6"].map(y=>r.jsx("button",{onClick:()=>{u(y),b(""),w(""),q(""),U(""),ye(!1)},className:`pl-fab pl-num${o===y?" on":""}`,children:y==="cet4"?"4":"6"},y))})]})]}),le&&me&&r.jsxs("div",{className:"pl-search-pop",children:[r.jsx(Ms,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{autoFocus:!0,value:S,onChange:y=>b(y.target.value),placeholder:"搜索真题标题 / 年份 如 2025"}),r.jsxs("button",{className:"pl-pop-reset",onClick:()=>{b(""),w(""),q(""),U("")},children:[r.jsx(Lp,{width:14,height:14,color:"var(--affine-text-secondary-color)"}),"重置"]})]})]}),r.jsxs("div",{className:"pl-inner",children:[r.jsxs("div",{className:"pl-head",children:[r.jsxs("div",{className:"pl-head-left",children:[r.jsx("button",{className:"pl-back-inline",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Gp,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"pl-h2",children:"真题试卷库"}),r.jsx("p",{className:"pl-sub",children:"收录历年 CET-4 / CET-6 真题，支持在线阅读与自测"})]})]}),r.jsx("div",{className:"pl-switch",children:["cet4","cet6"].map(y=>r.jsx("button",{onClick:()=>{u(y),b(""),w(""),q(""),U("")},className:`pl-switch-btn${o===y?" on":""}`,children:y==="cet4"?"英语四级 (CET-4)":"英语六级 (CET-6)"},y))})]}),r.jsxs("div",{className:"pl-filter",children:[r.jsxs("div",{className:"pl-search",children:[r.jsx(Ms,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{value:S,onChange:y=>b(y.target.value),placeholder:"搜索真题标题 / 年份 如 2025"})]}),r.jsxs("select",{value:A,onChange:y=>w(y.target.value),children:[r.jsx("option",{value:"",children:"全部年份"}),fe.map(y=>r.jsxs("option",{value:y,children:[y," 年"]},y))]}),r.jsxs("select",{value:k,onChange:y=>q(y.target.value),children:[r.jsx("option",{value:"",children:"全部月份"}),ne.map(y=>r.jsxs("option",{value:y,children:[Number(y)," 月"]},y))]}),r.jsxs("select",{value:L,onChange:y=>U(y.target.value),children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]}),r.jsxs("button",{className:"pl-reset",onClick:()=>{b(""),w(""),q(""),U("")},children:[r.jsx(Lp,{width:15,height:15,color:"var(--affine-text-secondary-color)"}),"重置"]}),r.jsxs("span",{className:"pl-count",children:["共 ",N.length," 套"]})]}),N.length===0?r.jsx("div",{className:"pl-empty",children:"没有符合条件的试卷"}):ce.map((y,j)=>{const D=ee===j;return r.jsx("div",{className:"lion-container",ref:X=>{ze.current[j]=X},children:y.map((X,J)=>r.jsx(Dm,{paper:X,type:o,r:[-15,5,25][J%3],submitted:de(X.id),expanded:D,onOpen:()=>s(X),onActivate:()=>Le(j)},X.id))},j)})]})]})},Dm=({paper:o,type:f,r:u,submitted:s,expanded:p,onOpen:S,onActivate:b})=>{const A=o.keyPoints,[w,k]=h.useState(!1),q=()=>{p?k(W=>!W):b()},L=[{label:"听力重点",items:A==null?void 0:A.listening},{label:"阅读重点",items:A==null?void 0:A.reading},{label:"写作重点",items:A==null?void 0:A.writing},{label:"翻译主题",items:A==null?void 0:A.translation}],U=(A==null?void 0:A.readingDifficulty)??[],K=U.length?U.map((W,me)=>`P${me+1} ${W}`).join(" · "):"",P=/^(.*?)\s*([（(]\s*第[^）)]*[）)])\s*$/.exec(o.title.trim()),ee=P?P[1].trim():o.title,se=P?P[2]:"",le=["glass","pl-glass",p?"expanded":"",w?"flipped":""].filter(Boolean).join(" ");return r.jsxs("div",{className:le,"data-text":`${o.year}年`,style:{"--r":u},children:[r.jsxs("div",{className:"pl-face pl-face-front",children:[r.jsxs("div",{className:"pl-title",children:[r.jsx("span",{className:"pl-title-main",children:ee}),se&&r.jsx("span",{className:"pl-title-sub",children:se})]}),r.jsxs("div",{className:"pl-meta",children:[r.jsx("span",{children:"已提交次数"}),r.jsxs("b",{children:[s," 次"]})]})]}),r.jsxs("div",{className:"pl-face pl-face-back",children:[r.jsx("div",{className:"pl-back-head",children:"考试重难点"}),K&&r.jsxs("div",{className:"pl-back-sec",children:[r.jsxs("div",{className:"pl-back-label",children:["阅读难度",(A==null?void 0:A.readingLevel)&&r.jsxs("span",{className:`rd-level lv-${A.readingLevel}`,children:["最难 ",A.readingLevel]})]}),r.jsx("div",{className:"pl-rd",children:U.map((W,me)=>r.jsxs("span",{className:`rd-item lv-${W}`,children:["第",["一","二","三","四"][me],"篇 ",W]},me))})]}),L.map(W=>r.jsxs("div",{className:"pl-back-sec",children:[r.jsx("div",{className:"pl-back-label",children:W.label}),r.jsx("div",{className:"pl-back-text",children:W.items&&W.items.length>0?W.items.join(" · "):"—"})]},W.label)),r.jsx("div",{className:"pl-back-tip",children:"再次点击翻回"})]}),r.jsx("div",{className:"pl-hit",onClick:q}),r.jsxs("div",{className:"pl-actions",onClick:W=>W.stopPropagation(),children:[r.jsx("button",{className:"pl-btn-write",onClick:S,children:"write"}),r.jsx("button",{type:"button",className:"pl-btn-download",onClick:()=>window.alert("该真题 PDF 源文件暂未上传，可在线查看试卷内容"),children:"download"})]})]})};function Rm(o){return[...new Set(o)].sort((f,u)=>u.localeCompare(f))}const Gp=()=>r.jsx("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5.5 8 12l6.5 6.5"})}),Om=`
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
`,qm=[{key:"yi",tip:"英语（一）",second:"学术学位 · 历年真题",bg:"#0E61AC",fg:"#ffffff"},{key:"er",tip:"英语（二）",second:"专业学位 · 历年真题",bg:"#FAF2E0",fg:"#0E61AC"}],Hm=({onPick:o,onBack:f})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Bm}),r.jsxs("div",{className:"ky-head",children:[r.jsx("button",{type:"button",className:"ky-back",onClick:f,children:"← 返回真题训练"}),r.jsx("h2",{className:"ky-title",children:"考研英语"}),r.jsx("p",{className:"ky-sub",children:"选择报考类型进入题库"})]}),r.jsx("div",{className:"ky-stage",children:r.jsx("div",{className:"cards","data-testid":"kaoyan-cards",children:qm.map(u=>r.jsxs("div",{className:"card","data-testid":`kaoyan-card-${u.key}`,style:{"--ky-bg":u.bg,"--ky-fg":u.fg},onClick:()=>o(u.key),children:[r.jsx("p",{className:"tip",children:u.tip}),r.jsx("p",{className:"second-text",children:u.second}),r.jsx("p",{className:"paper-foot",children:"硕士研究生入学考试"})]},u.key))})})]}),Bm=`
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
`,Um=()=>{const[o,f]=h.useState("cet4"),[u,s]=h.useState(!1),[p,S]=h.useState(null),[b,A]=h.useState(""),[w,k]=h.useState(!1);return r.jsx("div",{"data-testid":"paper-view",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",position:"relative",background:"var(--affine-background-secondary-color)",overflow:"auto",paddingBottom:"84px"},children:r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:w?r.jsx(Hm,{onPick:q=>{const L=q==="yi"?"英语（一）":"英语（二）";window.alert(`考研英语${L}题库即将上线`)},onBack:()=>k(!1)}):u?p?r.jsx(km,{paper:p,type:o,onBack:()=>S(null)}):r.jsx(Lm,{activeType:o,initialYear:b,onTypeChange:q=>{f(q),A("")},onOpenPaper:S,onBackToEntry:()=>{S(null),s(!1)}}):r.jsx(Nm,{onEnter:(q,L)=>{if(q==="kaoyan"){k(!0);return}f(q),A(L?String(L):""),s(!0)}})})})},Ym="_root_y5qt2_3",$m="_svg_y5qt2_13",Gm="_barPath_y5qt2_23",Xm="_bevel_y5qt2_29",Vm="_bevelShadow_y5qt2_37",Zm="_tabsHorizontal_y5qt2_57 _tabs_y5qt2_48",Qm="_tabsVertical_y5qt2_64 _tabs_y5qt2_48",Km="_tabSlot_y5qt2_71",Jm="_tab_y5qt2_48",Fm="_tabIcon_y5qt2_97",Wm="_tabActive_y5qt2_101 _tab_y5qt2_48",Im="_circle_y5qt2_134",Pm="_circleIcon_y5qt2_146",e1="_circleIconActive_y5qt2_167 _circleIcon_y5qt2_146",t1="_emptyGuard_y5qt2_174",n1="_moreCard_y5qt2_186",a1="_moreCardItem_y5qt2_211",l1="_moreCardItemActive_y5qt2_238 _moreCardItem_y5qt2_211",i1="_moreCardIcon_y5qt2_245",r1="_moreCardLabel_y5qt2_263",o1="_tabLabel_y5qt2_287",c1="_tabsHorizontalRTL_y5qt2_302 _tabs_y5qt2_48",s1="_tabsVerticalSafeArea_y5qt2_310 _tabs_y5qt2_48",gt={root:Ym,svg:$m,barPath:Gm,bevel:Xm,bevelShadow:Vm,tabsHorizontal:Zm,tabsVertical:Qm,tabSlot:Km,tab:Jm,tabIcon:Fm,tabActive:Wm,circle:Im,circleIcon:Pm,circleIconActive:e1,emptyGuard:t1,moreCard:n1,moreCardItem:a1,moreCardItemActive:l1,moreCardIcon:i1,moreCardLabel:r1,tabLabel:o1,tabsHorizontalRTL:c1,tabsVerticalSafeArea:s1},u1=({children:o})=>r.jsx(r.Fragment,{children:o});var d1=Object.defineProperty,f1=Object.defineProperties,p1=Object.getOwnPropertyDescriptors,Xp=Object.getOwnPropertySymbols,h1=Object.prototype.hasOwnProperty,m1=Object.prototype.propertyIsEnumerable,Vp=(o,f,u)=>f in o?d1(o,f,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[f]=u,la=(o,f)=>{for(var u in f||(f={}))h1.call(f,u)&&Vp(o,u,f[u]);if(Xp)for(var u of Xp(f))m1.call(f,u)&&Vp(o,u,f[u]);return o},Gs=(o,f)=>f1(o,p1(f)),g1=56,x1=56,y1=7,Al=10,ia=.35,Ht=2,Zp=8,vo=6,b1=350,wo={activeIconColor:"#007AFF",inactiveIconColor:"#6B7280",circleFillColor:"#FFFFFF",barBackground:"#FFFFFF"};function l0(o,f,u,s,p,S){const b=Math.sqrt(Math.max(0,u*u-s*s)),A=Math.min(b,o-p,f-S-o),k=Math.asin(Math.max(-1,Math.min(1,s/u)))+4*Math.PI/180,q=Math.sin(k),L=Math.cos(k),U=o-u*L,K=s+u*q,P=o+u*L,ee=q,se=L,le=o-A+ia*(U-(o-A)),W=U-Ht*ee,me=K-Ht*se,ye=P+Ht*ee,je=K-Ht*se,xe=o+A-ia*(o+A-P);return`M ${o-A} 0 C ${le} 0 ${W} ${me} ${U} ${K} A ${u} ${u} 0 0 0 ${P} ${K} C ${ye} ${je} ${xe} 0 ${o+A} 0`}function v1(o,f,u,s,p,S,b){const A=Math.sqrt(Math.max(0,s*s-p*p)),w=Math.min(A,o-S,f-b-o),q=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,L=Math.sin(q),U=Math.cos(q),K=u-(p+s*L),P=s*U,ee=o-w+ia*(w-s*U),se=K+Ht*U,le=o-P-Ht*L,W=K+Ht*U,me=o+P+Ht*L,ye=o+w-ia*(w-s*U);return`M ${u} ${o-w} C ${u} ${ee} ${se} ${le} ${K} ${o-P} A ${s} ${s} 0 0 0 ${K} ${o+P} C ${W} ${me} ${u} ${ye} ${u} ${o+w}`}function w1(o,f){const{W:u,H:s,rc:p,yc:S,r:b=Al}=f,A=`M ${b} 0 L ${u-b} 0 A ${b} ${b} 0 0 1 ${u} ${b} L ${u} ${s-b} A ${b} ${b} 0 0 1 ${u-b} ${s} L ${b} ${s} A ${b} ${b} 0 0 1 0 ${s-b} L 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 Z`,w=l0(o,u,p,S,b,b);return`${A} ${w} Z`}function S1(o,f){const{W:u,rc:s,yc:p,r:S=Al}=f,b=Math.sqrt(Math.max(0,s*s-p*p)),A=Math.min(b,o-S,u-S-o),w=l0(o,u,s,p,S,S);return`M 0 ${S} A ${S} ${S} 0 0 1 ${S} 0 L ${o-A} 0 ${w} L ${u-S} 0 A ${S} ${S} 0 0 1 ${u} ${S}`}function k1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=Al}=f,A=`M 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 L ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u} L ${b} ${u} A ${b} ${b} 0 0 1 0 ${u-b} Z`,w=v1(o,u,s,p,S,b,b);return`${A} ${w} Z`}function j1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=Al}=f,A=Math.sqrt(Math.max(0,p*p-S*S)),w=Math.min(A,o-b,u-b-o),q=Math.asin(Math.max(-1,Math.min(1,S/p)))+4*Math.PI/180,L=Math.sin(q),U=Math.cos(q),K=s-(S+p*L),P=p*U,ee=o-w+ia*(w-p*U),se=K+Ht*U,le=o-P-Ht*L,W=K+Ht*U,me=o+P+Ht*L,ye=o+w-ia*(w-p*U);return`M ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${o-w} C ${s} ${ee} ${se} ${le} ${K} ${o-P} A ${p} ${p} 0 0 0 ${K} ${o+P} C ${W} ${me} ${s} ${ye} ${s} ${o+w} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u}`}function C1(o,f,u,s,p,S,b){const A=Math.sqrt(Math.max(0,s*s-p*p)),w=Math.min(A,o-S,f-b-o),q=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,L=Math.sin(q),U=Math.cos(q),K=p+s*L,P=s*U,ee=o-w+ia*(w-s*U),se=K-Ht*U,le=o-P-Ht*L,W=K-Ht*U,me=o+P+Ht*L,ye=o+w-ia*(w-s*U);return`M 0 ${o-w} C 0 ${ee} ${se} ${le} ${K} ${o-P} A ${s} ${s} 0 0 1 ${K} ${o+P} C ${W} ${me} 0 ${ye} 0 ${o+w}`}function A1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=Al}=f,A=`M 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 L ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u} L ${b} ${u} A ${b} ${b} 0 0 1 0 ${u-b} Z`,w=C1(o,u,s,p,S,b,b);return`${A} ${w} Z`}function _1(o,f){const{SH:u,rc:s,yc:p,r:S=Al}=f,b=Math.sqrt(Math.max(0,s*s-p*p)),A=Math.min(b,o-S,u-S-o),k=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,q=Math.sin(k),L=Math.cos(k),U=p+s*q,K=s*L,P=o-A+ia*(A-s*L),ee=U-Ht*L,se=o-K-Ht*q,le=U-Ht*L,W=o+K+Ht*q,me=o+A-ia*(A-s*L);return`M ${S} 0 A ${S} ${S} 0 0 0 0 ${S} L 0 ${o-A} C 0 ${P} ${ee} ${se} ${U} ${o-K} A ${s} ${s} 0 0 1 ${U} ${o+K} C ${le} ${W} 0 ${me} 0 ${o+A} L 0 ${u-S} A ${S} ${S} 0 0 0 ${S} ${u}`}function E1(o,f,u){const s=[],p=(f-2*u)/o;for(let S=0;S<o;S++)s.push(u+p*(S+.5));return s}function z1({size:o,count:f,circleR:u,notchGap:s,pad:p=8}){const S=(o-2*p)/f,b=Math.max(4,Math.min(u,S/2-6)),A=Math.max(0,Math.min(s,S/2-b)),w=b*2;return{slot:S,effectiveCircleR:b,effectiveGap:A,effectiveCircleSize:w,rc:b+A}}function N1(){return r.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"6",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"6",cy:"18",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"18",r:"1.5"})]})}function M1(o){const f=h.useRef(o);return h.useLayoutEffect(()=>{f.current=o}),h.useCallback((...u)=>{var s;(s=f.current)==null||s.call(f,...u)},[])}function Os(o){return o===1?1:1-2**(-10*o)}var Bs="__notch_more__";function T1({circleRef:o,effectiveCircleSize:f,offset:u,willChange:s,barTabs:p,activeIndex:S,hiddenActiveIndex:b,moreActive:A,hasMore:w,maxVisible:k,tabs:q,moreIconElement:L}){const U=A||b!=null;return r.jsx("div",{ref:o,className:gt.circle,style:Gs(la({},u),{width:f,height:f,willChange:s}),children:p.map((K,P)=>{var ee,se;if(w&&P===k-1){const W=b!=null&&(se=(ee=q[b])==null?void 0:ee.activeIcon)!=null?se:L;return r.jsx("span",{className:U?gt.circleIconActive:gt.circleIcon,children:W},Bs)}return r.jsx("span",{className:P===S&&!U?gt.circleIconActive:gt.circleIcon,children:K.activeIcon},K.name)})})}function L1({tab:o,isActive:f,isMore:u,moreBarIcon:s,showLabel:p,ariaSelected:S,moreLabel:b,tabRef:A,onClick:w,onKeyDown:k,onPointerDown:q,onPointerUp:L,onPointerLeave:U,ariaExpanded:K}){const P=r.jsxs("button",Gs(la({ref:A,role:"tab","aria-selected":S,"aria-label":u?b:o.name},u?{"aria-haspopup":"menu","aria-expanded":K??!1}:{}),{className:f?gt.tabActive:gt.tab,tabIndex:f?0:-1,onClick:w,onKeyDown:k,onPointerDown:q,onPointerUp:L,onPointerLeave:U,children:[r.jsx("span",{className:gt.tabIcon,"aria-hidden":"true",children:u?s:o.inactiveIcon}),p&&!u&&r.jsx("span",{className:gt.tabLabel,children:o.name})]}));return r.jsx("li",{role:"none",className:gt.tabSlot,style:{flex:1},children:!u&&o.href?r.jsx(u1,{href:o.href,style:{display:"flex",flex:1,textDecoration:"none",color:"inherit"},tabIndex:-1,"aria-hidden":"true",children:P}):P},u?"__notch_more__":o.name)}function D1({cardRef:o,hiddenTabs:f,activeIndex:u,maxVisible:s,cardFocusIdx:p,activeIconColor:S,inactiveIconColor:b,moreLabel:A,positionStyle:w,cardItemRef:k,onHiddenTabClick:q,onKeyDown:L}){return r.jsx("div",{ref:o,className:gt.moreCard,style:w,role:"menu","aria-label":A,onKeyDown:L,children:f.map((U,K)=>{const ee=s-1+K===u;return r.jsxs("button",{ref:k(K),role:"menuitem",tabIndex:K===p?0:-1,className:ee?gt.moreCardItemActive:gt.moreCardItem,onClick:()=>q(K),children:[r.jsx("span",{className:gt.moreCardIcon,style:{color:ee?S:b},"aria-hidden":"true",children:ee?U.activeIcon:U.inactiveIcon}),r.jsx("span",{className:gt.moreCardLabel,children:U.name})]},U.name)})})}function R1({tabs:o,onTabChange:f,maxVisible:u=5,moreLabel:s="More",moreIcon:p,orientation:S="horizontal",activeIconColor:b=wo.activeIconColor,inactiveIconColor:A=wo.inactiveIconColor,circleFillColor:w=wo.circleFillColor,barBackground:k=wo.barBackground,cornerRadius:q=Al,notchGap:L=y1,circleSize:U=g1,barSize:K=x1,transitionSpeed:P=b1,defaultActiveTabIndex:ee=0,activeIndex:se,containerWidth:le,containerHeight:W,containerBottomSpace:me=0,className:ye,dir:je="ltr",showLabels:xe=!1,topSpace:ve=0,bottomSpace:ze=0}){const re=se!==void 0,fe=re?Math.min(Math.max(se,0),o.length-1):0,ne=S==="horizontal",N=je==="rtl",ce=U/2,de=o.length>u,Le=h.useMemo(()=>de?o.slice(0,u-1):o,[o,de,u]),y=h.useMemo(()=>de?o.slice(u-1):[],[o,de,u]),j=h.useMemo(()=>de?[...Le,{name:Bs,activeIcon:null,inactiveIcon:null}]:Le,[de,Le]),D=h.useRef(null),X=h.useRef(null),J=h.useRef(null),m=h.useRef(null),_=h.useRef(null),Z=h.useRef([]),te=h.useRef(null),pe=h.useRef([]),[I,Ne]=h.useState(le??390),[Ke,De]=h.useState(W??K),[Ie,Nt]=h.useState(re?fe:Math.min(ee,o.length-1)),[Ye,ln]=h.useState(null),[st,jt]=h.useState(!1),[Mt,ra]=h.useState(0),[It,Pt]=h.useState(!1),un=h.useRef(!1),Tt=h.useRef(0),Bt=h.useRef(Ie),rn=h.useRef(Ye),St=h.useRef(st),on=h.useRef(It),Lt=h.useRef(0);h.useLayoutEffect(()=>{Bt.current=Ie},[Ie]),h.useLayoutEffect(()=>{rn.current=Ye},[Ye]),h.useLayoutEffect(()=>{St.current=st},[st]),h.useLayoutEffect(()=>{on.current=It},[It]);const cn=M1(f),_t=h.useRef(!1),Wn=j.length,Ca=h.useMemo(()=>z1({size:ne?le??I:W??Ke,count:Wn,circleR:ce,notchGap:L,pad:Zp}),[ne,le,I,W,Ke,Wn,ce,L]),{effectiveCircleR:Gt,effectiveGap:Aa,effectiveCircleSize:Gn}=Ca,Me=u-1,Pe=h.useCallback(Y=>!de||Y<Me?Y:Me,[de,Me]),vt=h.useRef([]),tl=h.useCallback(Y=>{let ge=E1(j.length,Y,Zp);return N&&ne&&(ge=ge.map(Se=>Y-Se)),ge},[j.length,N,ne]),en=h.useCallback(Y=>{const ge=Gt+Aa,Se=vo;if(ne){const He=w1(Y,{W:I,H:K,rc:ge,yc:Se,r:q}),ut=S1(Y,{W:I,rc:ge,yc:Se,r:q});X.current&&X.current.setAttribute("d",He),J.current&&J.current.setAttribute("d",ut),m.current&&m.current.setAttribute("d",ut),_.current&&(_.current.style.left=`${Y-Gt}px`)}else{const Ue={SH:Ke,SW:I,rc:ge,yc:Se,r:q},He=N?A1(Y,Ue):k1(Y,Ue),ut={SH:Ke,SW:I,rc:ge,yc:Se,r:q},xt=N?_1(Y,ut):j1(Y,ut);X.current&&X.current.setAttribute("d",He),J.current&&J.current.setAttribute("d",xt),m.current&&m.current.setAttribute("d",xt),_.current&&(_.current.style.top=`${Y-Gt}px`)}const Ae=vt.current[Me];Ae!==void 0&&D.current&&D.current.style.setProperty("--nn-more-pos",`${Ae}px`)},[ne,N,I,Ke,K,Gt,Aa,q,Me]),nl=h.useCallback(()=>{const Y=D.current;if(!Y)return;const ge=Y.getBoundingClientRect(),Se=le??ge.width,Ae=ne?K:W??ge.height;Ne(Se),De(Ae);const Ue=tl(ne?Se:Ae);vt.current=Ue;const He=Pe(Math.min(Bt.current,o.length-1)),ut=Math.min(He,Ue.length-1),xt=Ue[ut];Tt.current=xt,en(xt)},[le,W,K,ne,tl,en,Pe,o.length]);h.useEffect(()=>{const Y=window.matchMedia("(prefers-reduced-motion: reduce)");_t.current=Y.matches;const ge=Ue=>{_t.current=Ue.matches};Y.addEventListener("change",ge),nl();let Se;const Ae=D.current;return Ae&&!le&&!W&&(Se=new ResizeObserver(()=>nl()),Se.observe(Ae)),()=>{Y.removeEventListener("change",ge),Se==null||Se.disconnect()}},[nl,le,W]),h.useEffect(()=>{if(!st)return;const Y=Se=>{const Ae=te.current;Ae&&!Ae.contains(Se.target)&&jt(!1)},ge=Se=>{var Ae;Se.key==="Escape"&&(jt(!1),(Ae=Z.current[Me])==null||Ae.focus())};return document.addEventListener("pointerdown",Y),document.addEventListener("keydown",ge),()=>{document.removeEventListener("pointerdown",Y),document.removeEventListener("keydown",ge)}},[st,Me]),h.useEffect(()=>{if(st&&te.current){const Y=Ye!=null?Ye-Me:0;ra(Y),requestAnimationFrame(()=>{var ge;(ge=pe.current[Y])==null||ge.focus()})}},[st,Ye,Me]);const Ut=h.useCallback(Y=>{if(un.current)return;const ge=vt.current[Y];if(ge===void 0)return;const Se=Tt.current;if(Se===ge)return;un.current=!0;const Ae=on.current||rn.current!=null?Me:Pe(Bt.current),Ue=Z.current[Ae];Ue&&Ae!==Y&&(Ue.setAttribute("aria-selected","false"),Ue.setAttribute("tabindex","-1"));const He=Z.current[Y];if(He&&(He.setAttribute("aria-selected","true"),He.setAttribute("tabindex","0")),_t.current){Tt.current=ge,en(ge),un.current=!1;return}const ut=P;let xt=null;const Zt=Yt=>{xt||(xt=Yt);const nn=Math.min((Yt-xt)/ut,1),Xt=Os(nn),rt=Se+(ge-Se)*Xt;Tt.current=rt,en(rt),nn<1?requestAnimationFrame(Zt):(Tt.current=ge,un.current=!1)};requestAnimationFrame(Zt)},[P,en,Pe,Me]);h.useEffect(()=>{!st&&It&&rn.current==null&&(Ut(Lt.current),on.current=!1,Pt(!1))},[st,It,Ut]);const Xn=h.useRef(null);h.useEffect(()=>{if(!re)return;const Y=fe;if(Xn.current===Y)return;Xn.current=Y;const ge=Pe(Y),Se=vt.current[ge];if(Se===void 0)return;const Ae=on.current||rn.current!=null?Me:Pe(Bt.current),Ue=Z.current[Ae];Ue&&Ae!==ge&&(Ue.setAttribute("aria-selected","false"),Ue.setAttribute("tabindex","-1"));const He=Z.current[ge];He&&(He.setAttribute("aria-selected","true"),He.setAttribute("tabindex","0")),Bt.current=Y,Nt(Y);const ut=de&&Y>=u;rn.current=ut?Y:null,ln(ut?Y:null),on.current=!1,Pt(!1),St.current&&jt(!1);const xt=Tt.current;if(xt===Se)return;if(_t.current){Tt.current=Se,en(Se);return}const Zt=P;let Yt=null;const nn=Xt=>{Yt||(Yt=Xt);const rt=Math.min((Xt-Yt)/Zt,1),Ma=Os(rt),Zn=xt+(Se-xt)*Ma;Tt.current=Zn,en(Zn),rt<1?requestAnimationFrame(nn):Tt.current=Se};requestAnimationFrame(nn)},[re,fe]);const dn=h.useCallback(Y=>{const ge=Pe(Y);if(ge===Pe(Bt.current)&&Y===Bt.current||un.current)return;if(re){const Xt=de&&Y>=u;rn.current=Xt?Y:null,on.current=!1,cn==null||cn(o[Y],Y);return}const Se=Pe(Bt.current),Ae=Z.current[Se];Ae&&(Ae.setAttribute("aria-selected","false"),Ae.setAttribute("tabindex","-1"));const Ue=Z.current[ge];Ue&&(Ue.setAttribute("aria-selected","true"),Ue.setAttribute("tabindex","0")),Bt.current=Y,Nt(Y);const He=de&&Y>=u;rn.current=He?Y:null,ln(He?Y:null),on.current=!1,Pt(!1),cn==null||cn(o[Y],Y);const ut=Tt.current,xt=vt.current[ge];if(xt===void 0)return;if(un.current=!0,_t.current){Tt.current=xt,en(xt),un.current=!1;return}const Zt=P;let Yt=null;const nn=Xt=>{Yt||(Yt=Xt);const rt=Math.min((Xt-Yt)/Zt,1),Ma=Os(rt),Zn=ut+(xt-ut)*Ma;Tt.current=Zn,en(Zn),rt<1?requestAnimationFrame(nn):(Tt.current=xt,un.current=!1)};requestAnimationFrame(nn)},[o,P,en,cn,Pe,de,u,re]),tn=h.useCallback(()=>{_.current&&(_.current.style.scale="0.94")},[]),Vn=h.useCallback(()=>{_.current&&(_.current.style.scale="1")},[]),Mn=h.useCallback(Y=>{var ge;const Se=Me+Y;jt(!1),dn(Se),(ge=Z.current[Me])==null||ge.focus()},[Me,dn]),_l=h.useCallback(Y=>{var ge;const Se=y.length;if(Se===0)return;let Ae=Mt;if(Y.key==="ArrowDown"||!ne&&Y.key==="ArrowRight")Ae=(Mt+1)%Se;else if(Y.key==="ArrowUp"||!ne&&Y.key==="ArrowLeft")Ae=(Mt-1+Se)%Se;else if(Y.key==="Home")Ae=0;else if(Y.key==="End")Ae=Se-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),Mn(Mt);return}else return;Y.preventDefault(),ra(Ae),(ge=pe.current[Ae])==null||ge.focus()},[Mt,y.length,ne,Mn]),al=h.useCallback(Y=>{var ge,Se;const Ae=j.length,Ue=Pe(Bt.current);let He=Ue;if(ne)if(N)if(Y.key==="ArrowLeft")He=(Ue+1)%Ae;else if(Y.key==="ArrowRight")He=(Ue-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Ue===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Bt.current),jt(!0),on.current=!0,Pt(!0),Ut(Me)));return}else return;else if(Y.key==="ArrowRight")He=(Ue+1)%Ae;else if(Y.key==="ArrowLeft")He=(Ue-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Ue===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Bt.current),jt(!0),on.current=!0,Pt(!0),Ut(Me)));return}else return;else if(Y.key==="ArrowDown")He=(Ue+1)%Ae;else if(Y.key==="ArrowUp")He=(Ue-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Ue===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Bt.current),jt(!0),on.current=!0,Pt(!0),Ut(Me)));return}else return;if(Y.preventDefault(),de&&He===Me){(ge=Z.current[He])==null||ge.focus();return}(Se=Z.current[He])==null||Se.focus(),dn(He)},[j.length,ne,N,dn,Pe,de,Me,Ut]),oa=h.useCallback(Y=>{var ge,Se;if(de&&Y===Me){St.current?jt(!1):(Lt.current=Pe(Bt.current),jt(!0),on.current=!0,Pt(!0),Ut(Me)),(ge=Z.current[Y])==null||ge.focus();return}St.current&&jt(!1),dn(Y),(Se=Z.current[Y])==null||Se.focus()},[dn,de,Me,Pe,Ut]),Sn=h.useMemo(()=>p??r.jsx(N1,{}),[p]),ll=h.useMemo(()=>{if(Ye!=null){const Y=o[Ye];return Y?Y.inactiveIcon:Sn}return Sn},[Ye,o,Sn]),El=h.useMemo(()=>ne?{bottom:K+8,left:"var(--nn-more-pos)",transform:"translateX(-50%)"}:N?{right:K+8,top:"var(--nn-more-pos)",transform:"translateY(-50%)"}:{left:K+8,top:"var(--nn-more-pos)",transform:"translateY(-50%)"},[ne,N,K]),_a=(()=>{const Y={};return!ne&&(ve>0||ze>0)&&(Y.top=ve,Y.bottom=ze),ne&&N&&(Y.paddingInlineStart=8,Y.paddingInlineEnd=8),Y})();if(o.length<2)return r.jsx("nav",{className:`${gt.root} ${ye??""}`,role:"navigation","aria-label":"Main navigation",dir:je,style:la(la({},le!=null?{width:le}:{}),ne?{bottom:me,height:K}:W!=null?{top:0,height:W}:{top:0,bottom:0,width:K}),children:r.jsx("div",{className:gt.emptyGuard,role:"status",children:"Add at least 2 tabs"})});const fn=la(la({},le!=null?{width:le}:{left:0,right:0}),ne?{bottom:me,height:K}:la(Gs(la({},N?{right:0}:{left:0}),{width:K}),ve>0||ze>0?{top:ve,bottom:ze}:W!=null?{top:0,height:W}:{top:0,bottom:0})),Ea={"--nn-active-icon-color":b,"--nn-inactive-icon-color":A,"--nn-circle-fill":w,"--nn-bar-bg":k,"--nn-radius":`${q}px`,"--nn-speed":`${P}ms`,"--nn-circle-size":`${Gn}px`},za=I,Na=ne?K:Ke,zl=ne?{top:-(Gt-vo)}:N?{left:vo}:{left:I-vo-Gt},Tn=ne?N?gt.tabsHorizontalRTL:gt.tabsHorizontal:ve>0||ze>0?gt.tabsVerticalSafeArea:gt.tabsVertical,kt=ne?"translateY(3px)":"translateX(3px)";return r.jsxs("nav",{ref:D,className:`${gt.root} ${ye??""}`,style:la(la({},fn),Ea),role:"navigation","aria-label":"Main navigation",dir:je,children:[r.jsxs("svg",{className:gt.svg,viewBox:`0 0 ${za} ${Na}`,width:za,height:Na,"aria-hidden":"true",style:{borderRadius:q},children:[r.jsx("path",{ref:X,className:gt.barPath,d:""}),r.jsx("path",{ref:J,className:gt.bevel,d:""}),r.jsx("path",{ref:m,className:gt.bevelShadow,d:"",style:{transform:kt}})]}),r.jsx("ul",{className:Tn,role:"tablist",style:_a,children:j.map((Y,ge)=>{const Se=de&&ge===Me,Ae=It||Ye!=null,Ue=Se?Ae:ge===Ie&&!It;return r.jsx(L1,{tab:Y,isActive:Ue,isMore:Se,moreBarIcon:ll,showLabel:xe,ariaSelected:Se?Ae:ge===Ie&&!It,moreLabel:s,tabRef:He=>{Z.current[ge]=He},onClick:()=>oa(ge),onKeyDown:al,onPointerDown:tn,onPointerUp:Vn,onPointerLeave:Vn,ariaExpanded:Se?st:void 0},Se?Bs:Y.name)})}),r.jsx(T1,{circleRef:_,effectiveCircleSize:Gn,effectiveCircleR:Gt,offset:zl,willChange:ne?"left":"top",barTabs:j,activeIndex:Ie,hiddenActiveIndex:Ye,moreActive:It,hasMore:de,maxVisible:u,tabs:o,moreIconElement:Sn}),de&&st&&r.jsx(D1,{cardRef:te,hiddenTabs:y,activeIndex:Ie,maxVisible:u,cardFocusIdx:Mt,activeIconColor:b,inactiveIconColor:A,moreLabel:s,positionStyle:El,cardItemRef:Y=>ge=>{pe.current[Y]=ge},onHiddenTabClick:Mn,onKeyDown:_l})]})}const jo=({children:o})=>r.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:o}),Qp=()=>r.jsxs(jo,{children:[r.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),r.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),Kp=()=>r.jsxs(jo,{children:[r.jsx("path",{d:"M3 14v-2a9 9 0 0 1 18 0v2"}),r.jsx("path",{d:"M21 14v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z"}),r.jsx("path",{d:"M3 14v3a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"})]}),Jp=()=>r.jsx(jo,{children:r.jsx("path",{d:"M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9z"})}),Fp=()=>r.jsxs(jo,{children:[r.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),r.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),r.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),r.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),r.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),r.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),r.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),r.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]}),i0=[{name:"题库",activeIcon:r.jsx(Qp,{}),inactiveIcon:r.jsx(Qp,{})},{name:"听力",activeIcon:r.jsx(Kp,{}),inactiveIcon:r.jsx(Kp,{})},{name:"收藏",activeIcon:r.jsx(Jp,{}),inactiveIcon:r.jsx(Jp,{})},{name:"设置",activeIcon:r.jsx(Fp,{}),inactiveIcon:r.jsx(Fp,{})}],O1=i0.map(o=>o.name);function q1({activeIndex:o,onTabChange:f}){return r.jsx(R1,{tabs:i0,activeIndex:o,onTabChange:(u,s)=>f(s),className:"cet-bottom-nav",containerBottomSpace:8,barSize:58,circleSize:56,activeIconColor:"#2383E2",barBackground:"#ffffff",circleFillColor:"#ffffff",inactiveIconColor:"#6B7280"})}function H1({title:o}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,padding:"24px 24px 96px",textAlign:"center",color:"var(--affine-text-secondary-color)",background:"var(--affine-background-secondary-color)"},children:[r.jsx("div",{style:{fontSize:40},children:"📭"}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"var(--affine-text-primary-color)"},children:o}),r.jsx("div",{style:{fontSize:13,opacity:.7},children:"该板块即将上线，敬请期待"})]})}const B1=()=>{const[o,f]=h.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:o===0?r.jsx(Um,{}):r.jsx(H1,{title:O1[o]??"板块"})}),r.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,zIndex:100,pointerEvents:"none"},children:r.jsx(q1,{activeIndex:o,onTabChange:f})})]})},r0=document.getElementById("root");if(!r0)throw new Error("#root missing");document.documentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0";document.body.style.fontFamily="var(--affine-font-family)";C2.createRoot(r0).render(r.jsx(h.StrictMode,{children:r.jsx(h2,{attribute:"data-theme",defaultTheme:"light",enableSystem:!1,children:r.jsx(B1,{})})}));
