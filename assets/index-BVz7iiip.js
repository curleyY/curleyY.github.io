(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const S of p)if(S.type==="childList")for(const b of S.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&s(b)}).observe(document,{childList:!0,subtree:!0});function u(p){const S={};return p.integrity&&(S.integrity=p.integrity),p.referrerPolicy&&(S.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?S.credentials="include":p.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function s(p){if(p.ep)return;p.ep=!0;const S=u(p);fetch(p.href,S)}})();var Cs={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function y2(){if(kp)return Pi;kp=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function u(s,p,S){var b=null;if(S!==void 0&&(b=""+S),p.key!==void 0&&(b=""+p.key),"key"in p){S={};for(var j in p)j!=="key"&&(S[j]=p[j])}else S=p;return p=S.ref,{$$typeof:o,type:s,key:b,ref:p!==void 0?p:null,props:S}}return Pi.Fragment=f,Pi.jsx=u,Pi.jsxs=u,Pi}var jp;function b2(){return jp||(jp=1,Cs.exports=y2()),Cs.exports}var r=b2(),As={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function v2(){if(Cp)return Te;Cp=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),U=Symbol.iterator;function V(m){return m===null||typeof m!="object"?null:(m=U&&m[U]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,oe={};function ae(m,_,K){this.props=m,this.context=_,this.refs=oe,this.updater=K||Q}ae.prototype.isReactComponent={},ae.prototype.setState=function(m,_){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,_,"setState")},ae.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function F(){}F.prototype=ae.prototype;function pe(m,_,K){this.props=m,this.context=_,this.refs=oe,this.updater=K||Q}var xe=pe.prototype=new F;xe.constructor=pe,W(xe,ae.prototype),xe.isPureReactComponent=!0;var ke=Array.isArray;function he(){}var be={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function re(m,_,K){var te=K.ref;return{$$typeof:o,type:m,key:_,ref:te!==void 0?te:null,props:K}}function fe(m,_){return re(m.type,_,m.props)}function ne(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function M(m){var _={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(K){return _[K]})}var se=/\/+/g;function de(m,_){return typeof m=="object"&&m!==null&&m.key!=null?M(""+m.key):_.toString(36)}function Le(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(he,he):(m.status="pending",m.then(function(_){m.status==="pending"&&(m.status="fulfilled",m.value=_)},function(_){m.status==="pending"&&(m.status="rejected",m.reason=_)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function y(m,_,K,te,me){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var Ne=!1;if(m===null)Ne=!0;else switch(ee){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(m.$$typeof){case o:case f:Ne=!0;break;case R:return Ne=m._init,y(Ne(m._payload),_,K,te,me)}}if(Ne)return me=me(m),Ne=te===""?"."+de(m,0):te,ke(me)?(K="",Ne!=null&&(K=Ne.replace(se,"$&/")+"/"),y(me,_,K,"",function(Ie){return Ie})):me!=null&&(ne(me)&&(me=fe(me,K+(me.key==null||m&&m.key===me.key?"":(""+me.key).replace(se,"$&/")+"/")+Ne)),_.push(me)),1;Ne=0;var Ke=te===""?".":te+":";if(ke(m))for(var De=0;De<m.length;De++)te=m[De],ee=Ke+de(te,De),Ne+=y(te,_,K,ee,me);else if(De=V(m),typeof De=="function")for(m=De.call(m),De=0;!(te=m.next()).done;)te=te.value,ee=Ke+de(te,De++),Ne+=y(te,_,K,ee,me);else if(ee==="object"){if(typeof m.then=="function")return y(Le(m),_,K,te,me);throw _=String(m),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function C(m,_,K){if(m==null)return m;var te=[],me=0;return y(m,te,"","",function(ee){return _.call(K,ee,me++)}),te}function D(m){if(m._status===-1){var _=m._result;_=_(),_.then(function(K){(m._status===0||m._status===-1)&&(m._status=1,m._result=K)},function(K){(m._status===0||m._status===-1)&&(m._status=2,m._result=K)}),m._status===-1&&(m._status=0,m._result=_)}if(m._status===1)return m._result.default;throw m._result}var X=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},I={map:C,forEach:function(m,_,K){C(m,function(){_.apply(this,arguments)},K)},count:function(m){var _=0;return C(m,function(){_++}),_},toArray:function(m){return C(m,function(_){return _})||[]},only:function(m){if(!ne(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return Te.Activity=N,Te.Children=I,Te.Component=ae,Te.Fragment=u,Te.Profiler=p,Te.PureComponent=pe,Te.StrictMode=s,Te.Suspense=w,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be,Te.__COMPILER_RUNTIME={__proto__:null,c:function(m){return be.H.useMemoCache(m)}},Te.cache=function(m){return function(){return m.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(m,_,K){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var te=W({},m.props),me=m.key;if(_!=null)for(ee in _.key!==void 0&&(me=""+_.key),_)!Ee.call(_,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&_.ref===void 0||(te[ee]=_[ee]);var ee=arguments.length-2;if(ee===1)te.children=K;else if(1<ee){for(var Ne=Array(ee),Ke=0;Ke<ee;Ke++)Ne[Ke]=arguments[Ke+2];te.children=Ne}return re(m.type,me,te)},Te.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:S,_context:m},m},Te.createElement=function(m,_,K){var te,me={},ee=null;if(_!=null)for(te in _.key!==void 0&&(ee=""+_.key),_)Ee.call(_,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(me[te]=_[te]);var Ne=arguments.length-2;if(Ne===1)me.children=K;else if(1<Ne){for(var Ke=Array(Ne),De=0;De<Ne;De++)Ke[De]=arguments[De+2];me.children=Ke}if(m&&m.defaultProps)for(te in Ne=m.defaultProps,Ne)me[te]===void 0&&(me[te]=Ne[te]);return re(m,ee,me)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(m){return{$$typeof:j,render:m}},Te.isValidElement=ne,Te.lazy=function(m){return{$$typeof:R,_payload:{_status:-1,_result:m},_init:D}},Te.memo=function(m,_){return{$$typeof:k,type:m,compare:_===void 0?null:_}},Te.startTransition=function(m){var _=be.T,K={};be.T=K;try{var te=m(),me=be.S;me!==null&&me(K,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(he,X)}catch(ee){X(ee)}finally{_!==null&&K.types!==null&&(_.types=K.types),be.T=_}},Te.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()},Te.use=function(m){return be.H.use(m)},Te.useActionState=function(m,_,K){return be.H.useActionState(m,_,K)},Te.useCallback=function(m,_){return be.H.useCallback(m,_)},Te.useContext=function(m){return be.H.useContext(m)},Te.useDebugValue=function(){},Te.useDeferredValue=function(m,_){return be.H.useDeferredValue(m,_)},Te.useEffect=function(m,_){return be.H.useEffect(m,_)},Te.useEffectEvent=function(m){return be.H.useEffectEvent(m)},Te.useId=function(){return be.H.useId()},Te.useImperativeHandle=function(m,_,K){return be.H.useImperativeHandle(m,_,K)},Te.useInsertionEffect=function(m,_){return be.H.useInsertionEffect(m,_)},Te.useLayoutEffect=function(m,_){return be.H.useLayoutEffect(m,_)},Te.useMemo=function(m,_){return be.H.useMemo(m,_)},Te.useOptimistic=function(m,_){return be.H.useOptimistic(m,_)},Te.useReducer=function(m,_,K){return be.H.useReducer(m,_,K)},Te.useRef=function(m){return be.H.useRef(m)},Te.useState=function(m){return be.H.useState(m)},Te.useSyncExternalStore=function(m,_,K){return be.H.useSyncExternalStore(m,_,K)},Te.useTransition=function(){return be.H.useTransition()},Te.version="19.2.1",Te}var Ap;function Gs(){return Ap||(Ap=1,As.exports=v2()),As.exports}var h=Gs(),w2=(o,f,u,s,p,S,b,j)=>{let w=document.documentElement,k=["light","dark"];function R(V){(Array.isArray(o)?o:[o]).forEach(Q=>{let W=Q==="class",oe=W&&S?p.map(ae=>S[ae]||ae):p;W?(w.classList.remove(...oe),w.classList.add(S&&S[V]?S[V]:V)):w.setAttribute(Q,V)}),N(V)}function N(V){j&&k.includes(V)&&(w.style.colorScheme=V)}function U(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(s)R(s);else try{let V=localStorage.getItem(f)||u,Q=b&&V==="system"?U():V;R(Q)}catch{}},_p=["light","dark"],t0="(prefers-color-scheme: dark)",S2=typeof window>"u",n0=h.createContext(void 0),k2=o=>h.useContext(n0)?h.createElement(h.Fragment,null,o.children):h.createElement(C2,{...o}),j2=["light","dark"],C2=({forcedTheme:o,disableTransitionOnChange:f=!1,enableSystem:u=!0,enableColorScheme:s=!0,storageKey:p="theme",themes:S=j2,defaultTheme:b=u?"system":"light",attribute:j="data-theme",value:w,children:k,nonce:R,scriptProps:N})=>{let[U,V]=h.useState(()=>_2(p,b)),[Q,W]=h.useState(()=>U==="system"?_s():U),oe=w?Object.values(w):S,ae=h.useCallback(ke=>{let he=ke;if(!he)return;ke==="system"&&u&&(he=_s());let be=w?w[he]:he,Ee=f?E2(R):null,re=document.documentElement,fe=ne=>{ne==="class"?(re.classList.remove(...oe),be&&re.classList.add(be)):ne.startsWith("data-")&&(be?re.setAttribute(ne,be):re.removeAttribute(ne))};if(Array.isArray(j)?j.forEach(fe):fe(j),s){let ne=_p.includes(b)?b:null,M=_p.includes(he)?he:ne;re.style.colorScheme=M}Ee==null||Ee()},[R]),F=h.useCallback(ke=>{let he=typeof ke=="function"?ke(U):ke;V(he);try{localStorage.setItem(p,he)}catch{}},[U]),pe=h.useCallback(ke=>{let he=_s(ke);W(he),U==="system"&&u&&!o&&ae("system")},[U,o]);h.useEffect(()=>{let ke=window.matchMedia(t0);return ke.addListener(pe),pe(ke),()=>ke.removeListener(pe)},[pe]),h.useEffect(()=>{let ke=he=>{he.key===p&&(he.newValue?V(he.newValue):F(b))};return window.addEventListener("storage",ke),()=>window.removeEventListener("storage",ke)},[F]),h.useEffect(()=>{ae(o??U)},[o,U]);let xe=h.useMemo(()=>({theme:U,setTheme:F,forcedTheme:o,resolvedTheme:U==="system"?Q:U,themes:u?[...S,"system"]:S,systemTheme:u?Q:void 0}),[U,F,o,Q,u,S]);return h.createElement(n0.Provider,{value:xe},h.createElement(A2,{forcedTheme:o,storageKey:p,attribute:j,enableSystem:u,enableColorScheme:s,defaultTheme:b,value:w,themes:S,nonce:R,scriptProps:N}),k)},A2=h.memo(({forcedTheme:o,storageKey:f,attribute:u,enableSystem:s,enableColorScheme:p,defaultTheme:S,value:b,themes:j,nonce:w,scriptProps:k})=>{let R=JSON.stringify([u,f,S,o,j,b,s,p]).slice(1,-1);return h.createElement("script",{...k,suppressHydrationWarning:!0,nonce:typeof window>"u"?w:"",dangerouslySetInnerHTML:{__html:`(${w2.toString()})(${R})`}})}),_2=(o,f)=>{if(S2)return;let u;try{u=localStorage.getItem(o)||void 0}catch{}return u||f},E2=o=>{let f=document.createElement("style");return o&&f.setAttribute("nonce",o),f.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(f),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(f)},1)}},_s=o=>(o||(o=window.matchMedia(t0)),o.matches?"dark":"light"),Es={exports:{}},er={},zs={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function z2(){return Ep||(Ep=1,(function(o){function f(y,C){var D=y.length;y.push(C);e:for(;0<D;){var X=D-1>>>1,I=y[X];if(0<p(I,C))y[X]=C,y[D]=I,D=X;else break e}}function u(y){return y.length===0?null:y[0]}function s(y){if(y.length===0)return null;var C=y[0],D=y.pop();if(D!==C){y[0]=D;e:for(var X=0,I=y.length,m=I>>>1;X<m;){var _=2*(X+1)-1,K=y[_],te=_+1,me=y[te];if(0>p(K,D))te<I&&0>p(me,K)?(y[X]=me,y[te]=D,X=te):(y[X]=K,y[_]=D,X=_);else if(te<I&&0>p(me,D))y[X]=me,y[te]=D,X=te;else break e}}return C}function p(y,C){var D=y.sortIndex-C.sortIndex;return D!==0?D:y.id-C.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;o.unstable_now=function(){return S.now()}}else{var b=Date,j=b.now();o.unstable_now=function(){return b.now()-j}}var w=[],k=[],R=1,N=null,U=3,V=!1,Q=!1,W=!1,oe=!1,ae=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function xe(y){for(var C=u(k);C!==null;){if(C.callback===null)s(k);else if(C.startTime<=y)s(k),C.sortIndex=C.expirationTime,f(w,C);else break;C=u(k)}}function ke(y){if(W=!1,xe(y),!Q)if(u(w)!==null)Q=!0,he||(he=!0,M());else{var C=u(k);C!==null&&Le(ke,C.startTime-y)}}var he=!1,be=-1,Ee=5,re=-1;function fe(){return oe?!0:!(o.unstable_now()-re<Ee)}function ne(){if(oe=!1,he){var y=o.unstable_now();re=y;var C=!0;try{e:{Q=!1,W&&(W=!1,F(be),be=-1),V=!0;var D=U;try{t:{for(xe(y),N=u(w);N!==null&&!(N.expirationTime>y&&fe());){var X=N.callback;if(typeof X=="function"){N.callback=null,U=N.priorityLevel;var I=X(N.expirationTime<=y);if(y=o.unstable_now(),typeof I=="function"){N.callback=I,xe(y),C=!0;break t}N===u(w)&&s(w),xe(y)}else s(w);N=u(w)}if(N!==null)C=!0;else{var m=u(k);m!==null&&Le(ke,m.startTime-y),C=!1}}break e}finally{N=null,U=D,V=!1}C=void 0}}finally{C?M():he=!1}}}var M;if(typeof pe=="function")M=function(){pe(ne)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=ne,M=function(){de.postMessage(null)}}else M=function(){ae(ne,0)};function Le(y,C){be=ae(function(){y(o.unstable_now())},C)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(y){y.callback=null},o.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<y?Math.floor(1e3/y):5},o.unstable_getCurrentPriorityLevel=function(){return U},o.unstable_next=function(y){switch(U){case 1:case 2:case 3:var C=3;break;default:C=U}var D=U;U=C;try{return y()}finally{U=D}},o.unstable_requestPaint=function(){oe=!0},o.unstable_runWithPriority=function(y,C){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var D=U;U=y;try{return C()}finally{U=D}},o.unstable_scheduleCallback=function(y,C,D){var X=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?X+D:X):D=X,y){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,y={id:R++,callback:C,priorityLevel:y,startTime:D,expirationTime:I,sortIndex:-1},D>X?(y.sortIndex=D,f(k,y),u(w)===null&&y===u(k)&&(W?(F(be),be=-1):W=!0,Le(ke,D-X))):(y.sortIndex=I,f(w,y),Q||V||(Q=!0,he||(he=!0,M()))),y},o.unstable_shouldYield=fe,o.unstable_wrapCallback=function(y){var C=U;return function(){var D=U;U=C;try{return y.apply(this,arguments)}finally{U=D}}}})(Ns)),Ns}var zp;function N2(){return zp||(zp=1,zs.exports=z2()),zs.exports}var Ms={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function M2(){if(Np)return an;Np=1;var o=Gs();function f(w){var k="https://react.dev/errors/"+w;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)k+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+w+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(f(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function S(w,k,R){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:N==null?null:""+N,children:w,containerInfo:k,implementation:R}}var b=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(w,k){if(w==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(w,k){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(f(299));return S(w,k,null,R)},an.flushSync=function(w){var k=b.T,R=s.p;try{if(b.T=null,s.p=2,w)return w()}finally{b.T=k,s.p=R,s.d.f()}},an.preconnect=function(w,k){typeof w=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,s.d.C(w,k))},an.prefetchDNS=function(w){typeof w=="string"&&s.d.D(w)},an.preinit=function(w,k){if(typeof w=="string"&&k&&typeof k.as=="string"){var R=k.as,N=j(R,k.crossOrigin),U=typeof k.integrity=="string"?k.integrity:void 0,V=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;R==="style"?s.d.S(w,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:N,integrity:U,fetchPriority:V}):R==="script"&&s.d.X(w,{crossOrigin:N,integrity:U,fetchPriority:V,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},an.preinitModule=function(w,k){if(typeof w=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var R=j(k.as,k.crossOrigin);s.d.M(w,{crossOrigin:R,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&s.d.M(w)},an.preload=function(w,k){if(typeof w=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var R=k.as,N=j(R,k.crossOrigin);s.d.L(w,R,{crossOrigin:N,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},an.preloadModule=function(w,k){if(typeof w=="string")if(k){var R=j(k.as,k.crossOrigin);s.d.m(w,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:R,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else s.d.m(w)},an.requestFormReset=function(w){s.d.r(w)},an.unstable_batchedUpdates=function(w,k){return w(k)},an.useFormState=function(w,k,R){return b.H.useFormState(w,k,R)},an.useFormStatus=function(){return b.H.useHostTransitionStatus()},an.version="19.2.1",an}var Mp;function a0(){if(Mp)return Ms.exports;Mp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Ms.exports=M2(),Ms.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function T2(){if(Tp)return er;Tp=1;var o=N2(),f=Gs(),u=a0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(S(e)!==e)throw Error(s(188))}function k(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return w(l),e;if(i===a)return w(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=l,a=i;else{for(var c=!1,d=l.child;d;){if(d===n){c=!0,n=l,a=i;break}if(d===a){c=!0,a=l,n=i;break}d=d.sibling}if(!c){for(d=i.child;d;){if(d===n){c=!0,n=i,a=l;break}if(d===a){c=!0,a=i,n=l;break}d=d.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,U=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function de(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ae:return"Profiler";case oe:return"StrictMode";case ke:return"Suspense";case he:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case pe:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}var Le=Array.isArray,y=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},X=[],I=-1;function m(e){return{current:e}}function _(e){0>I||(e.current=X[I],X[I]=null,I--)}function K(e,t){I++,X[I]=e.current,e.current=t}var te=m(null),me=m(null),ee=m(null),Ne=m(null);function Ke(e,t){switch(K(ee,t),K(me,e),K(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zf(t),e=Qf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(te),K(te,e)}function De(){_(te),_(me),_(ee)}function Ie(e){e.memoizedState!==null&&K(Ne,e);var t=te.current,n=Qf(t,e.type);t!==n&&(K(me,e),K(te,n))}function Nt(e){me.current===e&&(_(te),_(me)),Ne.current===e&&(_(Ne),Ji._currentValue=D)}var Ye,ln;function st(e){if(Ye===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ye=t&&t[1]||"",ln=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+ln}var jt=!1;function Mt(e,t){if(!e||jt)return"";jt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var L=q}Reflect.construct(e,[],J)}else{try{J.call()}catch(q){L=q}e.call(J.prototype)}}else{try{throw Error()}catch(q){L=q}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&L&&typeof q.stack=="string")return[q.stack,L.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],d=i[1];if(c&&d){var g=c.split(`
`),z=d.split(`
`);for(l=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(a===g.length||l===z.length)for(a=g.length-1,l=z.length-1;1<=a&&0<=l&&g[a]!==z[l];)l--;for(;1<=a&&0<=l;a--,l--)if(g[a]!==z[l]){if(a!==1||l!==1)do if(a--,l--,0>l||g[a]!==z[l]){var G=`
`+g[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=l);break}}}finally{jt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?st(n):""}function ra(e,t){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==t&&t!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Mt(e.type,!1);case 11:return Mt(e.type.render,!1);case 1:return Mt(e.type,!0);case 31:return st("Activity");default:return""}}function It(e){try{var t="",n=null;do t+=ra(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pt=Object.prototype.hasOwnProperty,un=o.unstable_scheduleCallback,Tt=o.unstable_cancelCallback,Ut=o.unstable_shouldYield,rn=o.unstable_requestPaint,St=o.unstable_now,on=o.unstable_getCurrentPriorityLevel,Lt=o.unstable_ImmediatePriority,cn=o.unstable_UserBlockingPriority,_t=o.unstable_NormalPriority,Wn=o.unstable_LowPriority,Ca=o.unstable_IdlePriority,Gt=o.log,Aa=o.unstable_setDisableYieldValue,Gn=null,Me=null;function Pe(e){if(typeof Gt=="function"&&Aa(e),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Gn,e)}catch{}}var vt=Math.clz32?Math.clz32:nl,tl=Math.log,en=Math.LN2;function nl(e){return e>>>=0,e===0?32:31-(tl(e)/en|0)|0}var Bt=256,Xn=262144,dn=4194304;function tn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vn(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var d=a&134217727;return d!==0?(a=d&~i,a!==0?l=tn(a):(c&=d,c!==0?l=tn(c):n||(n=d&~e,n!==0&&(l=tn(n))))):(d=a&~i,d!==0?l=tn(d):c!==0?l=tn(c):n||(n=a&~e,n!==0&&(l=tn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Mn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function El(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function al(){var e=dn;return dn<<=1,(dn&62914560)===0&&(dn=4194304),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ll(e,t,n,a,l,i){var c=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,z=e.hiddenUpdates;for(n=c&~n;0<n;){var G=31-vt(n),J=1<<G;d[G]=0,g[G]=-1;var L=z[G];if(L!==null)for(z[G]=null,G=0;G<L.length;G++){var q=L[G];q!==null&&(q.lane&=-536870913)}n&=~J}a!==0&&zl(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function zl(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function _a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function fn(e,t){var n=t&-t;return n=(n&42)!==0?1:Ea(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ea(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Na(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:gp(e.type))}function Nl(e,t){var n=C.p;try{return C.p=e,t()}finally{C.p=n}}var Tn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Tn,Y="__reactProps$"+Tn,ye="__reactContainer$"+Tn,Se="__reactEvents$"+Tn,Ae="__reactListeners$"+Tn,Be="__reactHandles$"+Tn,He="__reactResources$"+Tn,ut="__reactMarker$"+Tn;function xt(e){delete e[kt],delete e[Y],delete e[Se],delete e[Ae],delete e[Be]}function Zt(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ye]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ep(e);e!==null;){if(n=e[kt])return n;e=ep(e)}return t}e=n,n=e.parentNode}return null}function Yt(e){if(e=e[kt]||e[ye]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Xt(e){var t=e[He];return t||(t=e[He]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[ut]=!0}var Ma=new Set,Zn={};function In(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(Zn[e]=t,e=0;e<t.length;e++)Ma.add(t[e])}var ir=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rr={},or={};function Ao(e){return Pt.call(or,e)?!0:Pt.call(rr,e)?!1:ir.test(e)?or[e]=!0:(rr[e]=!0,!1)}function Ml(e,t,n){if(Ao(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ln(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ui(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cr(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tl(e){if(!e._valueTracker){var t=ui(e)?"checked":"value";e._valueTracker=cr(e,t,""+e[t])}}function di(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ui(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sr=/[\n"\\]/g;function Qt(e){return e.replace(sr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fi(e,t,n,a,l,i,c,d){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+pn(t)):e.value!==""+pn(t)&&(e.value=""+pn(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?kn(e,c,pn(t)):n!=null?kn(e,c,pn(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+pn(d):e.removeAttribute("name")}function pi(e,t,n,a,l,i,c,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Tl(e);return}n=n!=null?""+pn(n):"",t=t!=null?""+pn(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=d?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Tl(e)}function kn(e,t,n){t==="number"&&Ll(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function sa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ur(e,t,n){if(t!=null&&(t=""+pn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+pn(n):""}function dr(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Le(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=pn(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Tl(e)}function x(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var O=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function le(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||O.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ce(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&le(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&le(e,i,t[i])}function P(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ue=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function B(e){return T.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function H(){}var $=null;function ie(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ve=null,$e=null;function Ge(e){var t=Yt(e);if(t&&(e=t.stateNode)){var n=e[Y]||null;e:switch(e=t.stateNode,t.type){case"input":if(fi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Y]||null;if(!l)throw Error(s(90));fi(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&di(a)}break e;case"textarea":ur(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&sa(e,!!n.multiple,t,!1)}}}var ht=!1;function Xe(e,t,n){if(ht)return e(t,n);ht=!0;try{var a=e(t);return a}finally{if(ht=!1,(ve!==null||$e!==null)&&(Jr(),ve&&(t=ve,e=$e,$e=ve=null,Ge(t),e)))for(t=0;t<e.length;t++)Ge(e[t])}}function Ue(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Y]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ze=!1;if(Ve)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch{ze=!1}var et=null,Ce=null,tt=null;function Dn(){if(tt)return tt;var e,t=Ce,n=t.length,a,l="value"in et?et.value:et.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var c=n-e;for(a=1;a<=c&&t[n-a]===l[i-a];a++);return tt=l.slice(e,1<a?1-a:void 0)}function hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mn(){return!0}function Qs(){return!1}function gn(e){function t(n,a,l,i,c){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mn:Qs,this.isPropagationStopped=Qs,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mn)},persist:function(){},isPersistent:mn}),t}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fr=gn(il),hi=N({},il,{view:0,detail:0}),g0=gn(hi),_o,Eo,mi,pr=N({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:No,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(_o=e.screenX-mi.screenX,Eo=e.screenY-mi.screenY):Eo=_o=0,mi=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Ks=gn(pr),x0=N({},pr,{dataTransfer:0}),y0=gn(x0),b0=N({},hi,{relatedTarget:0}),zo=gn(b0),v0=N({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=gn(v0),S0=N({},il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=gn(S0),j0=N({},il,{data:0}),Js=gn(j0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function No(){return E0}var z0=N({},hi,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:No,charCode:function(e){return e.type==="keypress"?hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N0=gn(z0),M0=N({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=gn(M0),T0=N({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:No}),L0=gn(T0),D0=N({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=gn(D0),O0=N({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=gn(O0),H0=N({},il,{newState:0,oldState:0}),U0=gn(H0),B0=[9,13,27,32],Mo=Ve&&"CompositionEvent"in window,gi=null;Ve&&"documentMode"in document&&(gi=document.documentMode);var Y0=Ve&&"TextEvent"in window&&!gi,Ws=Ve&&(!Mo||gi&&8<gi&&11>=gi),Is=" ",Ps=!1;function eu(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dl=!1;function $0(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(Ps=!0,Is);case"textInput":return e=t.data,e===Is&&Ps?null:e;default:return null}}function G0(e,t){if(Dl)return e==="compositionend"||!Mo&&eu(e,t)?(e=Dn(),tt=Ce=et=null,Dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function au(e,t,n,a){ve?$e?$e.push(a):$e=[a]:ve=a,t=no(t,"onChange"),0<t.length&&(n=new fr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var xi=null,yi=null;function V0(e){Bf(e,0)}function hr(e){var t=nn(e);if(di(t))return e}function lu(e,t){if(e==="change")return t}var iu=!1;if(Ve){var To;if(Ve){var Lo="oninput"in document;if(!Lo){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Lo=typeof ru.oninput=="function"}To=Lo}else To=!1;iu=To&&(!document.documentMode||9<document.documentMode)}function ou(){xi&&(xi.detachEvent("onpropertychange",cu),yi=xi=null)}function cu(e){if(e.propertyName==="value"&&hr(yi)){var t=[];au(t,yi,e,ie(e)),Xe(V0,t)}}function Z0(e,t,n){e==="focusin"?(ou(),xi=t,yi=n,xi.attachEvent("onpropertychange",cu)):e==="focusout"&&ou()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hr(yi)}function K0(e,t){if(e==="click")return hr(t)}function J0(e,t){if(e==="input"||e==="change")return hr(t)}function F0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:F0;function bi(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Pt.call(t,l)||!jn(e[l],t[l]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=su(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ll(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ll(e.document)}return t}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var W0=Ve&&"documentMode"in document&&11>=document.documentMode,Rl=null,Ro=null,vi=null,Oo=!1;function pu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oo||Rl==null||Rl!==Ll(a)||(a=Rl,"selectionStart"in a&&Do(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vi&&bi(vi,a)||(vi=a,a=no(Ro,"onSelect"),0<a.length&&(t=new fr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Rl)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ol={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},qo={},hu={};Ve&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function ol(e){if(qo[e])return qo[e];if(!Ol[e])return e;var t=Ol[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hu)return qo[e]=t[n];return e}var mu=ol("animationend"),gu=ol("animationiteration"),xu=ol("animationstart"),I0=ol("transitionrun"),P0=ol("transitionstart"),eh=ol("transitioncancel"),yu=ol("transitionend"),bu=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Qn(e,t){bu.set(e,t),In(t,[e])}var mr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rn=[],ql=0,Uo=0;function gr(){for(var e=ql,t=Uo=ql=0;t<e;){var n=Rn[t];Rn[t++]=null;var a=Rn[t];Rn[t++]=null;var l=Rn[t];Rn[t++]=null;var i=Rn[t];if(Rn[t++]=null,a!==null&&l!==null){var c=a.pending;c===null?l.next=l:(l.next=c.next,c.next=l),a.pending=l}i!==0&&vu(n,l,i)}}function xr(e,t,n,a){Rn[ql++]=e,Rn[ql++]=t,Rn[ql++]=n,Rn[ql++]=a,Uo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Bo(e,t,n,a){return xr(e,t,n,a),yr(e)}function cl(e,t){return xr(e,null,null,t),yr(e)}function vu(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-vt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function yr(e){if(50<$i)throw $i=0,Jc=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function th(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,t,n,a){return new th(e,t,n,a)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var n=e.alternate;return n===null?(n=Cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wu(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function br(e,t,n,a,l,i){var c=0;if(a=e,typeof e=="function")Yo(e)&&(c=1);else if(typeof e=="string")c=r2(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=Cn(31,n,t,l),e.elementType=re,e.lanes=i,e;case W:return sl(n.children,l,i,t);case oe:c=8,l|=24;break;case ae:return e=Cn(12,n,t,l|2),e.elementType=ae,e.lanes=i,e;case ke:return e=Cn(13,n,t,l),e.elementType=ke,e.lanes=i,e;case he:return e=Cn(19,n,t,l),e.elementType=he,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:c=10;break e;case F:c=9;break e;case xe:c=11;break e;case be:c=14;break e;case Ee:c=16,a=null;break e}c=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Cn(c,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function sl(e,t,n,a){return e=Cn(7,e,a,t),e.lanes=n,e}function $o(e,t,n){return e=Cn(6,e,null,t),e.lanes=n,e}function Su(e){var t=Cn(18,null,null,0);return t.stateNode=e,t}function Go(e,t,n){return t=Cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ku=new WeakMap;function On(e,t){if(typeof e=="object"&&e!==null){var n=ku.get(e);return n!==void 0?n:(t={value:e,source:t,stack:It(t)},ku.set(e,t),t)}return{value:e,source:t,stack:It(t)}}var Ul=[],Bl=0,vr=null,wi=0,qn=[],Hn=0,Ta=null,ea=1,ta="";function da(e,t){Ul[Bl++]=wi,Ul[Bl++]=vr,vr=e,wi=t}function ju(e,t,n){qn[Hn++]=ea,qn[Hn++]=ta,qn[Hn++]=Ta,Ta=e;var a=ea;e=ta;var l=32-vt(a)-1;a&=~(1<<l),n+=1;var i=32-vt(t)+l;if(30<i){var c=l-l%5;i=(a&(1<<c)-1).toString(32),a>>=c,l-=c,ea=1<<32-vt(t)+l|n<<l|a,ta=i+e}else ea=1<<i|n<<l|a,ta=e}function Xo(e){e.return!==null&&(da(e,1),ju(e,1,0))}function Vo(e){for(;e===vr;)vr=Ul[--Bl],Ul[Bl]=null,wi=Ul[--Bl],Ul[Bl]=null;for(;e===Ta;)Ta=qn[--Hn],qn[Hn]=null,ta=qn[--Hn],qn[Hn]=null,ea=qn[--Hn],qn[Hn]=null}function Cu(e,t){qn[Hn++]=ea,qn[Hn++]=ta,qn[Hn++]=Ta,ea=t.id,ta=t.overflow,Ta=e}var Kt=null,yt=null,We=!1,La=null,Un=!1,Zo=Error(s(519));function Da(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Si(On(t,e)),Zo}function Au(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[kt]=e,t[Y]=a,n){case"dialog":Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":case"embed":Qe("load",t);break;case"video":case"audio":for(n=0;n<Xi.length;n++)Qe(Xi[n],t);break;case"source":Qe("error",t);break;case"img":case"image":case"link":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"input":Qe("invalid",t),pi(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Qe("invalid",t);break;case"textarea":Qe("invalid",t),dr(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Xf(t.textContent,n)?(a.popover!=null&&(Qe("beforetoggle",t),Qe("toggle",t)),a.onScroll!=null&&Qe("scroll",t),a.onScrollEnd!=null&&Qe("scrollend",t),a.onClick!=null&&(t.onclick=H),t=!0):t=!1,t||Da(e,!0)}function _u(e){for(Kt=e.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Kt=Kt.return}}function Yl(e){if(e!==Kt)return!1;if(!We)return _u(e),We=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||us(e.type,e.memoizedProps)),n=!n),n&&yt&&Da(e),_u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yt=Pf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));yt=Pf(e)}else t===27?(t=yt,Ka(e.type)?(e=ms,ms=null,yt=e):yt=t):yt=Kt?Yn(e.stateNode.nextSibling):null;return!0}function ul(){yt=Kt=null,We=!1}function Qo(){var e=La;return e!==null&&(vn===null?vn=e:vn.push.apply(vn,e),La=null),e}function Si(e){La===null?La=[e]:La.push(e)}var Ko=m(null),dl=null,fa=null;function Ra(e,t,n){K(Ko,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=Ko.current,_(Ko)}function Jo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=l;for(var g=0;g<t.length;g++)if(d.context===t[g]){i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Jo(i.return,n,e),a||(c=null);break e}i=d.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,i=c.alternate,i!==null&&(i.lanes|=n),Jo(c,n,e),c=null}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===e){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function $l(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var d=l.type;jn(l.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])}}else if(l===Ne.current){if(c=l.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ji):e=[Ji])}l=l.return}e!==null&&Fo(t,e,n,a),t.flags|=262144}function wr(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fl(e){dl=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Jt(e){return Eu(dl,e)}function Sr(e,t){return dl===null&&fl(e),Eu(e,t)}function Eu(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fa===null){if(e===null)throw Error(s(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return n}var nh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ah=o.unstable_scheduleCallback,lh=o.unstable_NormalPriority,Dt={$$typeof:pe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new nh,data:new Map,refCount:0}}function ki(e){e.refCount--,e.refCount===0&&ah(lh,function(){e.controller.abort()})}var ji=null,Io=0,Gl=0,Xl=null;function ih(e,t){if(ji===null){var n=ji=[];Io=0,Gl=ts(),Xl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Io++,t.then(zu,zu),t}function zu(){if(--Io===0&&ji!==null){Xl!==null&&(Xl.status="fulfilled");var e=ji;ji=null,Gl=0,Xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Nu=y.S;y.S=function(e,t){hf=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ih(e,t),Nu!==null&&Nu(e,t)};var pl=m(null);function Po(){var e=pl.current;return e!==null?e:mt.pooledCache}function kr(e,t){t===null?K(pl,pl.current):K(pl,t.pool)}function Mu(){var e=Po();return e===null?null:{parent:Dt._currentValue,pool:e}}var Vl=Error(s(460)),ec=Error(s(474)),jr=Error(s(542)),Cr={then:function(){}};function Tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(H,H),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ru(e),e;default:if(typeof t.status=="string")t.then(H,H);else{if(e=mt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ru(e),e}throw ml=t,Vl}}function hl(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ml=n,Vl):n}}var ml=null;function Du(){if(ml===null)throw Error(s(459));var e=ml;return ml=null,e}function Ru(e){if(e===Vl||e===jr)throw Error(s(483))}var Zl=null,Ci=0;function Ar(e){var t=Ci;return Ci+=1,Zl===null&&(Zl=[]),Lu(Zl,e,t)}function Ai(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _r(e,t){throw t.$$typeof===U?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ou(e){function t(A,v){if(e){var E=A.deletions;E===null?(A.deletions=[v],A.flags|=16):E.push(v)}}function n(A,v){if(!e)return null;for(;v!==null;)t(A,v),v=v.sibling;return null}function a(A){for(var v=new Map;A!==null;)A.key!==null?v.set(A.key,A):v.set(A.index,A),A=A.sibling;return v}function l(A,v){return A=ua(A,v),A.index=0,A.sibling=null,A}function i(A,v,E){return A.index=E,e?(E=A.alternate,E!==null?(E=E.index,E<v?(A.flags|=67108866,v):E):(A.flags|=67108866,v)):(A.flags|=1048576,v)}function c(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function d(A,v,E,Z){return v===null||v.tag!==6?(v=$o(E,A.mode,Z),v.return=A,v):(v=l(v,E),v.return=A,v)}function g(A,v,E,Z){var je=E.type;return je===W?G(A,v,E.props.children,Z,E.key):v!==null&&(v.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Ee&&hl(je)===v.type)?(v=l(v,E.props),Ai(v,E),v.return=A,v):(v=br(E.type,E.key,E.props,null,A.mode,Z),Ai(v,E),v.return=A,v)}function z(A,v,E,Z){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Go(E,A.mode,Z),v.return=A,v):(v=l(v,E.children||[]),v.return=A,v)}function G(A,v,E,Z,je){return v===null||v.tag!==7?(v=sl(E,A.mode,Z,je),v.return=A,v):(v=l(v,E),v.return=A,v)}function J(A,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=$o(""+v,A.mode,E),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case V:return E=br(v.type,v.key,v.props,null,A.mode,E),Ai(E,v),E.return=A,E;case Q:return v=Go(v,A.mode,E),v.return=A,v;case Ee:return v=hl(v),J(A,v,E)}if(Le(v)||M(v))return v=sl(v,A.mode,E,null),v.return=A,v;if(typeof v.then=="function")return J(A,Ar(v),E);if(v.$$typeof===pe)return J(A,Sr(A,v),E);_r(A,v)}return null}function L(A,v,E,Z){var je=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return je!==null?null:d(A,v,""+E,Z);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case V:return E.key===je?g(A,v,E,Z):null;case Q:return E.key===je?z(A,v,E,Z):null;case Ee:return E=hl(E),L(A,v,E,Z)}if(Le(E)||M(E))return je!==null?null:G(A,v,E,Z,null);if(typeof E.then=="function")return L(A,v,Ar(E),Z);if(E.$$typeof===pe)return L(A,v,Sr(A,E),Z);_r(A,E)}return null}function q(A,v,E,Z,je){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return A=A.get(E)||null,d(v,A,""+Z,je);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return A=A.get(Z.key===null?E:Z.key)||null,g(v,A,Z,je);case Q:return A=A.get(Z.key===null?E:Z.key)||null,z(v,A,Z,je);case Ee:return Z=hl(Z),q(A,v,E,Z,je)}if(Le(Z)||M(Z))return A=A.get(E)||null,G(v,A,Z,je,null);if(typeof Z.then=="function")return q(A,v,E,Ar(Z),je);if(Z.$$typeof===pe)return q(A,v,E,Sr(v,Z),je);_r(v,Z)}return null}function ge(A,v,E,Z){for(var je=null,nt=null,we=v,qe=v=0,Fe=null;we!==null&&qe<E.length;qe++){we.index>qe?(Fe=we,we=null):Fe=we.sibling;var at=L(A,we,E[qe],Z);if(at===null){we===null&&(we=Fe);break}e&&we&&at.alternate===null&&t(A,we),v=i(at,v,qe),nt===null?je=at:nt.sibling=at,nt=at,we=Fe}if(qe===E.length)return n(A,we),We&&da(A,qe),je;if(we===null){for(;qe<E.length;qe++)we=J(A,E[qe],Z),we!==null&&(v=i(we,v,qe),nt===null?je=we:nt.sibling=we,nt=we);return We&&da(A,qe),je}for(we=a(we);qe<E.length;qe++)Fe=q(we,A,qe,E[qe],Z),Fe!==null&&(e&&Fe.alternate!==null&&we.delete(Fe.key===null?qe:Fe.key),v=i(Fe,v,qe),nt===null?je=Fe:nt.sibling=Fe,nt=Fe);return e&&we.forEach(function(Pa){return t(A,Pa)}),We&&da(A,qe),je}function _e(A,v,E,Z){if(E==null)throw Error(s(151));for(var je=null,nt=null,we=v,qe=v=0,Fe=null,at=E.next();we!==null&&!at.done;qe++,at=E.next()){we.index>qe?(Fe=we,we=null):Fe=we.sibling;var Pa=L(A,we,at.value,Z);if(Pa===null){we===null&&(we=Fe);break}e&&we&&Pa.alternate===null&&t(A,we),v=i(Pa,v,qe),nt===null?je=Pa:nt.sibling=Pa,nt=Pa,we=Fe}if(at.done)return n(A,we),We&&da(A,qe),je;if(we===null){for(;!at.done;qe++,at=E.next())at=J(A,at.value,Z),at!==null&&(v=i(at,v,qe),nt===null?je=at:nt.sibling=at,nt=at);return We&&da(A,qe),je}for(we=a(we);!at.done;qe++,at=E.next())at=q(we,A,qe,at.value,Z),at!==null&&(e&&at.alternate!==null&&we.delete(at.key===null?qe:at.key),v=i(at,v,qe),nt===null?je=at:nt.sibling=at,nt=at);return e&&we.forEach(function(x2){return t(A,x2)}),We&&da(A,qe),je}function pt(A,v,E,Z){if(typeof E=="object"&&E!==null&&E.type===W&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case V:e:{for(var je=E.key;v!==null;){if(v.key===je){if(je=E.type,je===W){if(v.tag===7){n(A,v.sibling),Z=l(v,E.props.children),Z.return=A,A=Z;break e}}else if(v.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===Ee&&hl(je)===v.type){n(A,v.sibling),Z=l(v,E.props),Ai(Z,E),Z.return=A,A=Z;break e}n(A,v);break}else t(A,v);v=v.sibling}E.type===W?(Z=sl(E.props.children,A.mode,Z,E.key),Z.return=A,A=Z):(Z=br(E.type,E.key,E.props,null,A.mode,Z),Ai(Z,E),Z.return=A,A=Z)}return c(A);case Q:e:{for(je=E.key;v!==null;){if(v.key===je)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(A,v.sibling),Z=l(v,E.children||[]),Z.return=A,A=Z;break e}else{n(A,v);break}else t(A,v);v=v.sibling}Z=Go(E,A.mode,Z),Z.return=A,A=Z}return c(A);case Ee:return E=hl(E),pt(A,v,E,Z)}if(Le(E))return ge(A,v,E,Z);if(M(E)){if(je=M(E),typeof je!="function")throw Error(s(150));return E=je.call(E),_e(A,v,E,Z)}if(typeof E.then=="function")return pt(A,v,Ar(E),Z);if(E.$$typeof===pe)return pt(A,v,Sr(A,E),Z);_r(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,v!==null&&v.tag===6?(n(A,v.sibling),Z=l(v,E),Z.return=A,A=Z):(n(A,v),Z=$o(E,A.mode,Z),Z.return=A,A=Z),c(A)):n(A,v)}return function(A,v,E,Z){try{Ci=0;var je=pt(A,v,E,Z);return Zl=null,je}catch(we){if(we===Vl||we===jr)throw we;var nt=Cn(29,we,null,A.mode);return nt.lanes=Z,nt.return=A,nt}finally{}}}var gl=Ou(!0),qu=Ou(!1),Oa=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(it&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=yr(e),vu(e,null,n),t}return xr(e,a,t,n),yr(e)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_a(e,n)}}function ac(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var c={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lc=!1;function Ei(){if(lc){var e=Xl;if(e!==null)throw e}}function zi(e,t,n,a){lc=!1;var l=e.updateQueue;Oa=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var g=d,z=g.next;g.next=null,c===null?i=z:c.next=z,c=g;var G=e.alternate;G!==null&&(G=G.updateQueue,d=G.lastBaseUpdate,d!==c&&(d===null?G.firstBaseUpdate=z:d.next=z,G.lastBaseUpdate=g))}if(i!==null){var J=l.baseState;c=0,G=z=g=null,d=i;do{var L=d.lane&-536870913,q=L!==d.lane;if(q?(Je&L)===L:(a&L)===L){L!==0&&L===Gl&&(lc=!0),G!==null&&(G=G.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var ge=e,_e=d;L=t;var pt=n;switch(_e.tag){case 1:if(ge=_e.payload,typeof ge=="function"){J=ge.call(pt,J,L);break e}J=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=_e.payload,L=typeof ge=="function"?ge.call(pt,J,L):ge,L==null)break e;J=N({},J,L);break e;case 2:Oa=!0}}L=d.callback,L!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[L]:q.push(L))}else q={lane:L,tag:d.tag,payload:d.payload,callback:d.callback,next:null},G===null?(z=G=q,g=J):G=G.next=q,c|=L;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;q=d,d=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);G===null&&(g=J),l.baseState=g,l.firstBaseUpdate=z,l.lastBaseUpdate=G,i===null&&(l.shared.lanes=0),Ga|=c,e.lanes=c,e.memoizedState=J}}function Hu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Uu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Hu(n[e],t)}var Ql=m(null),Er=m(0);function Bu(e,t){e=Sa,K(Er,e),K(Ql,t),Sa=e|t.baseLanes}function ic(){K(Er,Sa),K(Ql,Ql.current)}function rc(){Sa=Er.current,_(Ql),_(Er)}var An=m(null),Bn=null;function Ua(e){var t=e.alternate;K(Et,Et.current&1),K(An,e),Bn===null&&(t===null||Ql.current!==null||t.memoizedState!==null)&&(Bn=e)}function oc(e){K(Et,Et.current),K(An,e),Bn===null&&(Bn=e)}function Yu(e){e.tag===22?(K(Et,Et.current),K(An,e),Bn===null&&(Bn=e)):Ba()}function Ba(){K(Et,Et.current),K(An,An.current)}function _n(e){_(An),Bn===e&&(Bn=null),_(Et)}var Et=m(0);function zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ps(n)||hs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,Oe=null,dt=null,Rt=null,Nr=!1,Kl=!1,xl=!1,Mr=0,Ni=0,Jl=null,oh=0;function Ct(){throw Error(s(321))}function cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function sc(e,t,n,a,l,i){return ha=i,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?jd:jc,xl=!1,i=n(a,l),xl=!1,Kl&&(i=Gu(t,n,a,l)),$u(e),i}function $u(e){y.H=Li;var t=dt!==null&&dt.next!==null;if(ha=0,Rt=dt=Oe=null,Nr=!1,Ni=0,Jl=null,t)throw Error(s(300));e===null||Ot||(e=e.dependencies,e!==null&&wr(e)&&(Ot=!0))}function Gu(e,t,n,a){Oe=e;var l=0;do{if(Kl&&(Jl=null),Ni=0,Kl=!1,25<=l)throw Error(s(301));if(l+=1,Rt=dt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Cd,i=t(n,a)}while(Kl);return i}function ch(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Mi(t):t,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(Oe.flags|=1024),t}function uc(){var e=Mr!==0;return Mr=0,e}function dc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fc(e){if(Nr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Nr=!1}ha=0,Rt=dt=Oe=null,Kl=!1,Ni=Mr=0,Jl=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Oe.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function zt(){if(dt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=Rt===null?Oe.memoizedState:Rt.next;if(t!==null)Rt=t,dt=e;else{if(e===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Rt===null?Oe.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(e){var t=Ni;return Ni+=1,Jl===null&&(Jl=[]),e=Lu(Jl,e,t),t=Oe,(Rt===null?t.memoizedState:Rt.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?jd:jc),e}function Lr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mi(e);if(e.$$typeof===pe)return Jt(e)}throw Error(s(438,String(e)))}function pc(e){var t=null,n=Oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tr(),Oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=fe;return t.index++,n}function ma(e,t){return typeof t=="function"?t(e):t}function Dr(e){var t=zt();return hc(t,dt,e)}function hc(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var d=c=null,g=null,z=t,G=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(Je&J)===J:(ha&J)===J){var L=z.revertLane;if(L===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===Gl&&(G=!0);else if((ha&L)===L){z=z.next,L===Gl&&(G=!0);continue}else J={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=J,c=i):g=g.next=J,Oe.lanes|=L,Ga|=L;J=z.action,xl&&n(i,J),i=z.hasEagerState?z.eagerState:n(i,J)}else L={lane:J,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},g===null?(d=g=L,c=i):g=g.next=L,Oe.lanes|=J,Ga|=J;z=z.next}while(z!==null&&z!==t);if(g===null?c=i:g.next=d,!jn(i,e.memoizedState)&&(Ot=!0,G&&(n=Xl,n!==null)))throw n;e.memoizedState=i,e.baseState=c,e.baseQueue=g,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function mc(e){var t=zt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var c=l=l.next;do i=e(i,c.action),c=c.next;while(c!==l);jn(i,t.memoizedState)||(Ot=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Xu(e,t,n){var a=Oe,l=zt(),i=We;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var c=!jn((dt||l).memoizedState,n);if(c&&(l.memoizedState=n,Ot=!0),l=l.queue,yc(Qu.bind(null,a,l,e),[e]),l.getSnapshot!==t||c||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,Fl(9,{destroy:void 0},Zu.bind(null,a,l,n,t),null),mt===null)throw Error(s(349));i||(ha&127)!==0||Vu(a,t,n)}return n}function Vu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t=Tr(),Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zu(e,t,n,a){t.value=n,t.getSnapshot=a,Ku(t)&&Ju(e)}function Qu(e,t,n){return n(function(){Ku(t)&&Ju(e)})}function Ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function Ju(e){var t=cl(e,2);t!==null&&wn(t,e,2)}function gc(e){var t=sn();if(typeof e=="function"){var n=e;if(e=n(),xl){Pe(!0);try{n()}finally{Pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function Fu(e,t,n,a){return e.baseState=n,hc(e,dt,typeof a=="function"?a:ma)}function sh(e,t,n,a,l){if(qr(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};y.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Wu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Wu(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=y.T,c={};y.T=c;try{var d=n(l,a),g=y.S;g!==null&&g(c,d),Iu(e,t,d)}catch(z){xc(e,t,z)}finally{i!==null&&c.types!==null&&(i.types=c.types),y.T=i}}else try{i=n(l,a),Iu(e,t,i)}catch(z){xc(e,t,z)}}function Iu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Pu(e,t,a)},function(a){return xc(e,t,a)}):Pu(e,t,n)}function Pu(e,t,n){t.status="fulfilled",t.value=n,ed(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Wu(e,n)))}function xc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,ed(t),t=t.next;while(t!==a)}e.action=null}function ed(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function td(e,t){return t}function nd(e,t){if(We){var n=mt.formState;if(n!==null){e:{var a=Oe;if(We){if(yt){t:{for(var l=yt,i=Un;l.nodeType!==8;){if(!i){l=null;break t}if(l=Yn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){yt=Yn(l.nextSibling),a=l.data==="F!";break e}}Da(a)}a=!1}a&&(t=n[0])}}return n=sn(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:td,lastRenderedState:t},n.queue=a,n=wd.bind(null,Oe,a),a.dispatch=n,a=gc(!1),i=kc.bind(null,Oe,!1,a.queue),a=sn(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=sh.bind(null,Oe,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function ad(e){var t=zt();return ld(t,dt,e)}function ld(e,t,n){if(t=hc(e,t,td)[0],e=Dr(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mi(t)}catch(c){throw c===Vl?jr:c}else a=t;t=zt();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Oe.flags|=2048,Fl(9,{destroy:void 0},uh.bind(null,l,n),null)),[a,i,e]}function uh(e,t){e.action=t}function id(e){var t=zt(),n=dt;if(n!==null)return ld(t,n,e);zt(),t=t.memoizedState,n=zt();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Fl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Oe.updateQueue,t===null&&(t=Tr(),Oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function rd(){return zt().memoizedState}function Rr(e,t,n,a){var l=sn();Oe.flags|=e,l.memoizedState=Fl(1|t,{destroy:void 0},n,a===void 0?null:a)}function Or(e,t,n,a){var l=zt();a=a===void 0?null:a;var i=l.memoizedState.inst;dt!==null&&a!==null&&cc(a,dt.memoizedState.deps)?l.memoizedState=Fl(t,i,n,a):(Oe.flags|=e,l.memoizedState=Fl(1|t,i,n,a))}function od(e,t){Rr(8390656,8,e,t)}function yc(e,t){Or(2048,8,e,t)}function dh(e){Oe.flags|=4;var t=Oe.updateQueue;if(t===null)t=Tr(),Oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function cd(e){var t=zt().memoizedState;return dh({ref:t,nextImpl:e}),function(){if((it&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function sd(e,t){return Or(4,2,e,t)}function ud(e,t){return Or(4,4,e,t)}function dd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fd(e,t,n){n=n!=null?n.concat([e]):null,Or(4,4,dd.bind(null,t,e),n)}function bc(){}function pd(e,t){var n=zt();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&cc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=zt();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&cc(t,a[1]))return a[0];if(a=e(),xl){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[a,t],a}function vc(e,t,n){return n===void 0||(ha&1073741824)!==0&&(Je&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=gf(),Oe.lanes|=e,Ga|=e,n)}function md(e,t,n,a){return jn(n,t)?n:Ql.current!==null?(e=vc(e,n,a),jn(e,t)||(Ot=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(Je&261930)===0?(Ot=!0,e.memoizedState=n):(e=gf(),Oe.lanes|=e,Ga|=e,t)}function gd(e,t,n,a,l){var i=C.p;C.p=i!==0&&8>i?i:8;var c=y.T,d={};y.T=d,kc(e,!1,t,n);try{var g=l(),z=y.S;if(z!==null&&z(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var G=rh(g,a);Ti(e,t,G,Nn(e))}else Ti(e,t,a,Nn(e))}catch(J){Ti(e,t,{then:function(){},status:"rejected",reason:J},Nn())}finally{C.p=i,c!==null&&d.types!==null&&(c.types=d.types),y.T=c}}function fh(){}function wc(e,t,n,a){if(e.tag!==5)throw Error(s(476));var l=xd(e).queue;gd(e,l,t,D,n===null?fh:function(){return yd(e),n(a)})}function xd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:D},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yd(e){var t=xd(e);t.next===null&&(t=e.alternate.memoizedState),Ti(e,t.next.queue,{},Nn())}function Sc(){return Jt(Ji)}function bd(){return zt().memoizedState}function vd(){return zt().memoizedState}function ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=qa(n);var a=Ha(t,e,n);a!==null&&(wn(a,t,n),_i(a,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function hh(e,t,n){var a=Nn();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qr(e)?Sd(t,n):(n=Bo(e,t,n,a),n!==null&&(wn(n,e,a),kd(n,t,a)))}function wd(e,t,n){var a=Nn();Ti(e,t,n,a)}function Ti(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qr(e))Sd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,d=i(c,n);if(l.hasEagerState=!0,l.eagerState=d,jn(d,c))return xr(e,t,l,0),mt===null&&gr(),!1}catch{}finally{}if(n=Bo(e,t,l,a),n!==null)return wn(n,e,a),kd(n,t,a),!0}return!1}function kc(e,t,n,a){if(a={lane:2,revertLane:ts(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qr(e)){if(t)throw Error(s(479))}else t=Bo(e,n,a,2),t!==null&&wn(t,e,2)}function qr(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function Sd(e,t){Kl=Nr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,_a(e,n)}}var Li={readContext:Jt,use:Lr,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct};Li.useEffectEvent=Ct;var jd={readContext:Jt,use:Lr,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:Jt,useEffect:od,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Rr(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){Rr(4,2,e,t)},useMemo:function(e,t){var n=sn();t=t===void 0?null:t;var a=e();if(xl){Pe(!0);try{e()}finally{Pe(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=sn();if(n!==void 0){var l=n(t);if(xl){Pe(!0);try{n(t)}finally{Pe(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=hh.bind(null,Oe,e),[a.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:function(e){e=gc(e);var t=e.queue,n=wd.bind(null,Oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bc,useDeferredValue:function(e,t){var n=sn();return vc(n,e,t)},useTransition:function(){var e=gc(!1);return e=gd.bind(null,Oe,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Oe,l=sn();if(We){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),mt===null)throw Error(s(349));(Je&127)!==0||Vu(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,od(Qu.bind(null,a,i,e),[e]),a.flags|=2048,Fl(9,{destroy:void 0},Zu.bind(null,a,i,n,t),null),n},useId:function(){var e=sn(),t=mt.identifierPrefix;if(We){var n=ta,a=ea;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=oh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Sc,useFormState:nd,useActionState:nd,useOptimistic:function(e){var t=sn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=kc.bind(null,Oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:pc,useCacheRefresh:function(){return sn().memoizedState=ph.bind(null,Oe)},useEffectEvent:function(e){var t=sn(),n={impl:e};return t.memoizedState=n,function(){if((it&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},jc={readContext:Jt,use:Lr,useCallback:pd,useContext:Jt,useEffect:yc,useImperativeHandle:fd,useInsertionEffect:sd,useLayoutEffect:ud,useMemo:hd,useReducer:Dr,useRef:rd,useState:function(){return Dr(ma)},useDebugValue:bc,useDeferredValue:function(e,t){var n=zt();return md(n,dt.memoizedState,e,t)},useTransition:function(){var e=Dr(ma)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:Mi(e),t]},useSyncExternalStore:Xu,useId:bd,useHostTransitionStatus:Sc,useFormState:ad,useActionState:ad,useOptimistic:function(e,t){var n=zt();return Fu(n,dt,e,t)},useMemoCache:pc,useCacheRefresh:vd};jc.useEffectEvent=cd;var Cd={readContext:Jt,use:Lr,useCallback:pd,useContext:Jt,useEffect:yc,useImperativeHandle:fd,useInsertionEffect:sd,useLayoutEffect:ud,useMemo:hd,useReducer:mc,useRef:rd,useState:function(){return mc(ma)},useDebugValue:bc,useDeferredValue:function(e,t){var n=zt();return dt===null?vc(n,e,t):md(n,dt.memoizedState,e,t)},useTransition:function(){var e=mc(ma)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:Mi(e),t]},useSyncExternalStore:Xu,useId:bd,useHostTransitionStatus:Sc,useFormState:id,useActionState:id,useOptimistic:function(e,t){var n=zt();return dt!==null?Fu(n,dt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pc,useCacheRefresh:vd};Cd.useEffectEvent=cd;function Cc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ac={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Nn(),l=qa(a);l.payload=t,n!=null&&(l.callback=n),t=Ha(e,l,a),t!==null&&(wn(t,e,a),_i(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Nn(),l=qa(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ha(e,l,a),t!==null&&(wn(t,e,a),_i(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),a=qa(n);a.tag=2,t!=null&&(a.callback=t),t=Ha(e,a,n),t!==null&&(wn(t,e,n),_i(t,e,n))}};function Ad(e,t,n,a,l,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!bi(n,a)||!bi(l,i):!0}function _d(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function yl(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Ed(e){mr(e)}function zd(e){console.error(e)}function Nd(e){mr(e)}function Hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Md(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function _c(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Hr(e,t)},n}function Td(e){return e=qa(e),e.tag=3,e}function Ld(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){Md(t,n,a)}}var c=n.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Md(t,n,a),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function mh(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&$l(t,n,l,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:return Bn===null?Fr():n.alternate===null&&At===0&&(At=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Cr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Ic(e,a,l)),!1;case 22:return n.flags|=65536,a===Cr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Ic(e,a,l)),!1}throw Error(s(435,n.tag))}return Ic(e,a,l),Fr(),!1}if(We)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Zo&&(e=Error(s(422),{cause:a}),Si(On(e,n)))):(a!==Zo&&(t=Error(s(423),{cause:a}),Si(On(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=On(a,n),l=_c(e.stateNode,a,l),ac(e,l),At!==4&&(At=2)),!1;var i=Error(s(520),{cause:a});if(i=On(i,n),Yi===null?Yi=[i]:Yi.push(i),At!==4&&(At=2),t===null)return!0;a=On(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=_c(n.stateNode,a,e),ac(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xa===null||!Xa.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Td(l),Ld(l,e,n,a),ac(n,l),!1}n=n.return}while(n!==null);return!1}var Ec=Error(s(461)),Ot=!1;function Ft(e,t,n,a){t.child=e===null?qu(t,null,n,a):gl(t,e.child,n,a)}function Dd(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var c={};for(var d in a)d!=="ref"&&(c[d]=a[d])}else c=a;return fl(t),a=sc(e,t,n,c,i,l),d=uc(),e!==null&&!Ot?(dc(e,t,l),ga(e,t,l)):(We&&d&&Xo(t),t.flags|=1,Ft(e,t,a,l),t.child)}function Rd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Yo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Od(e,t,i,a,l)):(e=br(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Oc(e,l)){var c=i.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(c,a)&&e.ref===t.ref)return ga(e,t,l)}return t.flags|=1,e=ua(i,a),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(bi(i,a)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=a=i,Oc(e,l))(e.flags&131072)!==0&&(Ot=!0);else return t.lanes=e.lanes,ga(e,t,l)}return zc(e,t,n,a,l)}function qd(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Hd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(t,i!==null?i.cachePool:null),i!==null?Bu(t,i):ic(),Yu(t);else return a=t.lanes=536870912,Hd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(kr(t,i.cachePool),Bu(t,i),Ba(),t.memoizedState=null):(e!==null&&kr(t,null),ic(),Ba());return Ft(e,t,l,n),t.child}function Di(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hd(e,t,n,a,l){var i=Po();return i=i===null?null:{parent:Dt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&kr(t,null),ic(),Yu(t),e!==null&&$l(e,t,a,!0),t.childLanes=l,null}function Ur(e,t){return t=Yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ud(e,t,n){return gl(t,e.child,null,n),e=Ur(t,t.pendingProps),e.flags|=2,_n(t),t.memoizedState=null,e}function gh(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(We){if(a.mode==="hidden")return e=Ur(t,a),t.lanes=536870912,Di(null,e);if(oc(t),(e=yt)?(e=If(e,Un),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=Su(e),n.return=t,t.child=n,Kt=t,yt=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return Ur(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(oc(t),l)if(t.flags&256)t.flags&=-257,t=Ud(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ot||$l(e,t,n,!1),l=(n&e.childLanes)!==0,Ot||l){if(a=mt,a!==null&&(c=fn(a,n),c!==0&&c!==i.retryLane))throw i.retryLane=c,cl(e,c),wn(a,e,c),Ec;Fr(),t=Ud(e,t,n)}else e=i.treeContext,yt=Yn(c.nextSibling),Kt=t,We=!0,La=null,Un=!1,e!==null&&Cu(t,e),t=Ur(t,a),t.flags|=4096;return t}return e=ua(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Br(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function zc(e,t,n,a,l){return fl(t),n=sc(e,t,n,a,void 0,l),a=uc(),e!==null&&!Ot?(dc(e,t,l),ga(e,t,l)):(We&&a&&Xo(t),t.flags|=1,Ft(e,t,n,l),t.child)}function Bd(e,t,n,a,l,i){return fl(t),t.updateQueue=null,n=Gu(t,a,n,l),$u(e),a=uc(),e!==null&&!Ot?(dc(e,t,i),ga(e,t,i)):(We&&a&&Xo(t),t.flags|=1,Ft(e,t,n,i),t.child)}function Yd(e,t,n,a,l){if(fl(t),t.stateNode===null){var i=Hl,c=n.contextType;typeof c=="object"&&c!==null&&(i=Jt(c)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ac,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},tc(t),c=n.contextType,i.context=typeof c=="object"&&c!==null?Jt(c):Hl,i.state=t.memoizedState,c=n.getDerivedStateFromProps,typeof c=="function"&&(Cc(t,n,c,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Ac.enqueueReplaceState(i,i.state,null),zi(t,a,i,l),Ei(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,g=yl(n,d);i.props=g;var z=i.context,G=n.contextType;c=Hl,typeof G=="object"&&G!==null&&(c=Jt(G));var J=n.getDerivedStateFromProps;G=typeof J=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,G||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||z!==c)&&_d(t,i,a,c),Oa=!1;var L=t.memoizedState;i.state=L,zi(t,a,i,l),Ei(),z=t.memoizedState,d||L!==z||Oa?(typeof J=="function"&&(Cc(t,n,J,a),z=t.memoizedState),(g=Oa||Ad(t,n,g,a,L,z,c))?(G||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),i.props=a,i.state=z,i.context=c,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,nc(e,t),c=t.memoizedProps,G=yl(n,c),i.props=G,J=t.pendingProps,L=i.context,z=n.contextType,g=Hl,typeof z=="object"&&z!==null&&(g=Jt(z)),d=n.getDerivedStateFromProps,(z=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==J||L!==g)&&_d(t,i,a,g),Oa=!1,L=t.memoizedState,i.state=L,zi(t,a,i,l),Ei();var q=t.memoizedState;c!==J||L!==q||Oa||e!==null&&e.dependencies!==null&&wr(e.dependencies)?(typeof d=="function"&&(Cc(t,n,d,a),q=t.memoizedState),(G=Oa||Ad(t,n,G,a,L,q,g)||e!==null&&e.dependencies!==null&&wr(e.dependencies))?(z||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,q,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,q,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=q),i.props=a,i.state=q,i.context=g,a=G):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Br(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=gl(t,e.child,null,l),t.child=gl(t,null,n,l)):Ft(e,t,n,l),t.memoizedState=i.state,e=t.child):e=ga(e,t,l),e}function $d(e,t,n,a){return ul(),t.flags|=256,Ft(e,t,n,a),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mc(e){return{baseLanes:e,cachePool:Mu()}}function Tc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=zn),e}function Gd(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(We){if(l?Ua(t):Ba(),(e=yt)?(e=If(e,Un),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=Su(e),n.return=t,t.child=n,Kt=t,yt=null)):e=null,e===null)throw Da(t);return hs(e)?t.lanes=32:t.lanes=536870912,null}var d=a.children;return a=a.fallback,l?(Ba(),l=t.mode,d=Yr({mode:"hidden",children:d},l),a=sl(a,l,n,null),d.return=t,a.return=t,d.sibling=a,t.child=d,a=t.child,a.memoizedState=Mc(n),a.childLanes=Tc(e,c,n),t.memoizedState=Nc,Di(null,a)):(Ua(t),Lc(t,d))}var g=e.memoizedState;if(g!==null&&(d=g.dehydrated,d!==null)){if(i)t.flags&256?(Ua(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),d=a.fallback,l=t.mode,a=Yr({mode:"visible",children:a.children},l),d=sl(d,l,n,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,gl(t,e.child,null,n),a=t.child,a.memoizedState=Mc(n),a.childLanes=Tc(e,c,n),t.memoizedState=Nc,t=Di(null,a));else if(Ua(t),hs(d)){if(c=d.nextSibling&&d.nextSibling.dataset,c)var z=c.dgst;c=z,a=Error(s(419)),a.stack="",a.digest=c,Si({value:a,source:null,stack:null}),t=Dc(e,t,n)}else if(Ot||$l(e,t,n,!1),c=(n&e.childLanes)!==0,Ot||c){if(c=mt,c!==null&&(a=fn(c,n),a!==0&&a!==g.retryLane))throw g.retryLane=a,cl(e,a),wn(c,e,a),Ec;ps(d)||Fr(),t=Dc(e,t,n)}else ps(d)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,yt=Yn(d.nextSibling),Kt=t,We=!0,La=null,Un=!1,e!==null&&Cu(t,e),t=Lc(t,a.children),t.flags|=4096);return t}return l?(Ba(),d=a.fallback,l=t.mode,g=e.child,z=g.sibling,a=ua(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,z!==null?d=ua(z,d):(d=sl(d,l,n,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,Di(null,a),a=t.child,d=e.child.memoizedState,d===null?d=Mc(n):(l=d.cachePool,l!==null?(g=Dt._currentValue,l=l.parent!==g?{parent:g,pool:g}:l):l=Mu(),d={baseLanes:d.baseLanes|n,cachePool:l}),a.memoizedState=d,a.childLanes=Tc(e,c,n),t.memoizedState=Nc,Di(e.child,a)):(Ua(t),n=e.child,e=n.sibling,n=ua(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=n,t.memoizedState=null,n)}function Lc(e,t){return t=Yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yr(e,t){return e=Cn(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return gl(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Jo(e.return,t,n)}function Rc(e,t,n,a,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=l,c.treeForkCount=i)}function Vd(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var c=Et.current,d=(c&2)!==0;if(d?(c=c&1|2,t.flags|=128):c&=1,K(Et,c),Ft(e,t,a,n),a=We?wi:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,n,t);else if(e.tag===19)Xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Rc(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Rc(t,!0,n,null,i,a);break;case"together":Rc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ga(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($l(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ua(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ua(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wr(e)))}function xh(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),Ra(t,Dt,e.memoizedState.cache),ul();break;case 27:case 5:Ie(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ua(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Gd(e,t,n):(Ua(t),e=ga(e,t,n),e!==null?e.sibling:null);Ua(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||($l(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Vd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(Et,Et.current),a)break;return null;case 22:return t.lanes=0,qd(e,t,n,t.pendingProps);case 24:Ra(t,Dt,e.memoizedState.cache)}return ga(e,t,n)}function Zd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ot=!0;else{if(!Oc(e,n)&&(t.flags&128)===0)return Ot=!1,xh(e,t,n);Ot=(e.flags&131072)!==0}else Ot=!1,We&&(t.flags&1048576)!==0&&ju(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=hl(t.elementType),t.type=e,typeof e=="function")Yo(e)?(a=yl(e,a),t.tag=1,t=Yd(null,t,e,a,n)):(t.tag=0,t=zc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===xe){t.tag=11,t=Dd(null,t,e,a,n);break e}else if(l===be){t.tag=14,t=Rd(null,t,e,a,n);break e}}throw t=de(e)||e,Error(s(306,t,""))}}return t;case 0:return zc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=yl(a,t.pendingProps),Yd(e,t,a,l,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,nc(e,t),zi(t,a,null,n);var c=t.memoizedState;if(a=c.cache,Ra(t,Dt,a),a!==i.cache&&Fo(t,[Dt],n,!0),Ei(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=$d(e,t,a,n);break e}else if(a!==l){l=On(Error(s(424)),t),Si(l),t=$d(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(yt=Yn(e.firstChild),Kt=t,We=!0,La=null,Un=!0,n=qu(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ul(),a===l){t=ga(e,t,n);break e}Ft(e,t,a,n)}t=t.child}return t;case 26:return Br(e,t),e===null?(n=lp(t.type,null,t.pendingProps,null))?t.memoizedState=n:We||(n=t.type,e=t.pendingProps,a=ao(ee.current).createElement(n),a[kt]=t,a[Y]=e,Wt(a,n,e),rt(a),t.stateNode=a):t.memoizedState=lp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ie(t),e===null&&We&&(a=t.stateNode=tp(t.type,t.pendingProps,ee.current),Kt=t,Un=!0,l=yt,Ka(t.type)?(ms=l,yt=Yn(a.firstChild)):yt=l),Ft(e,t,t.pendingProps.children,n),Br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&We&&((l=a=yt)&&(a=Qh(a,t.type,t.pendingProps,Un),a!==null?(t.stateNode=a,Kt=t,yt=Yn(a.firstChild),Un=!1,l=!0):l=!1),l||Da(t)),Ie(t),l=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,us(l,i)?a=null:c!==null&&us(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=sc(e,t,ch,null,null,n),Ji._currentValue=l),Br(e,t),Ft(e,t,a,n),t.child;case 6:return e===null&&We&&((e=n=yt)&&(n=Kh(n,t.pendingProps,Un),n!==null?(t.stateNode=n,Kt=t,yt=null,e=!0):e=!1),e||Da(t)),null;case 13:return Gd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=gl(t,null,a,n):Ft(e,t,a,n),t.child;case 11:return Dd(e,t,t.type,t.pendingProps,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ra(t,t.type,a.value),Ft(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,fl(t),l=Jt(l),a=a(l),t.flags|=1,Ft(e,t,a,n),t.child;case 14:return Rd(e,t,t.type,t.pendingProps,n);case 15:return Od(e,t,t.type,t.pendingProps,n);case 19:return Vd(e,t,n);case 31:return gh(e,t,n);case 22:return qd(e,t,n,t.pendingProps);case 24:return fl(t),a=Jt(Dt),e===null?(l=Po(),l===null&&(l=mt,i=Wo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},tc(t),Ra(t,Dt,l)):((e.lanes&n)!==0&&(nc(e,t),zi(t,null,null,n),Ei()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ra(t,Dt,a)):(a=i.cache,Ra(t,Dt,a),a!==l.cache&&Fo(t,[Dt],n,!0))),Ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function xa(e){e.flags|=4}function qc(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(vf())e.flags|=8192;else throw ml=Cr,ec}else e.flags&=-16777217}function Qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sp(t))if(vf())e.flags|=8192;else throw ml=Cr,ec}function $r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?al():536870912,e.lanes|=t,ei|=t)}function Ri(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function yh(e,t,n){var a=t.pendingProps;switch(Vo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return bt(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),pa(Dt),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yl(t)?xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qo())),bt(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(xa(t),i!==null?(bt(t),Qd(t,i)):(bt(t),qc(t,l,null,a,n))):i?i!==e.memoizedState?(xa(t),bt(t),Qd(t,i)):(bt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&xa(t),bt(t),qc(t,l,e,a,n)),null;case 27:if(Nt(t),n=ee.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return bt(t),null}e=te.current,Yl(t)?Au(t):(e=tp(l,a,n),t.stateNode=e,xa(t))}return bt(t),null;case 5:if(Nt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return bt(t),null}if(i=te.current,Yl(t))Au(t);else{var c=ao(ee.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(l,{is:a.is}):c.createElement(l)}}i[kt]=t,i[Y]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Wt(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&xa(t)}}return bt(t),qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&xa(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Yl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Kt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[kt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Xf(e.nodeValue,n)),e||Da(t,!0)}else e=ao(e).createTextNode(a),e[kt]=t,t.stateNode=e}return bt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Yl(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),e=!1}else n=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_n(t),t):(_n(t),null);if((t.flags&128)!==0)throw Error(s(558))}return bt(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Yl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[kt]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;bt(t),l=!1}else l=Qo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_n(t),t):(_n(t),null)}return _n(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$r(t,t.updateQueue),bt(t),null);case 4:return De(),e===null&&is(t.stateNode.containerInfo),bt(t),null;case 10:return pa(t.type),bt(t),null;case 19:if(_(Et),a=t.memoizedState,a===null)return bt(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Ri(a,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zr(e),i!==null){for(t.flags|=128,Ri(a,!1),e=i.updateQueue,t.updateQueue=e,$r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wu(n,e),n=n.sibling;return K(Et,Et.current&1|2),We&&da(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&St()>Qr&&(t.flags|=128,l=!0,Ri(a,!1),t.lanes=4194304)}else{if(!l)if(e=zr(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,$r(t,e),Ri(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!We)return bt(t),null}else 2*St()-a.renderingStartTime>Qr&&n!==536870912&&(t.flags|=128,l=!0,Ri(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=St(),e.sibling=null,n=Et.current,K(Et,l?n&1|2:n&1),We&&da(t,a.treeForkCount),e):(bt(t),null);case 22:case 23:return _n(t),rc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),n=t.updateQueue,n!==null&&$r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&_(pl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Dt),bt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function bh(e,t){switch(Vo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Dt),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 31:if(t.memoizedState!==null){if(_n(t),t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Et),null;case 4:return De(),null;case 10:return pa(t.type),null;case 22:case 23:return _n(t),rc(),e!==null&&_(pl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Dt),null;case 25:return null;default:return null}}function Kd(e,t){switch(Vo(t),t.tag){case 3:pa(Dt),De();break;case 26:case 27:case 5:Nt(t);break;case 4:De();break;case 31:t.memoizedState!==null&&_n(t);break;case 13:_n(t);break;case 19:_(Et);break;case 10:pa(t.type);break;case 22:case 23:_n(t),rc(),e!==null&&_(pl);break;case 24:pa(Dt)}}function Oi(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,c=n.inst;a=i(),c.destroy=a}n=n.next}while(n!==l)}}catch(d){ct(t,t.return,d)}}function Ya(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var c=a.inst,d=c.destroy;if(d!==void 0){c.destroy=void 0,l=t;var g=n,z=d;try{z()}catch(G){ct(l,g,G)}}}a=a.next}while(a!==i)}}catch(G){ct(t,t.return,G)}}function Jd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Uu(t,n)}catch(a){ct(e,e.return,a)}}}function Fd(e,t,n){n.props=yl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ct(e,t,a)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){ct(e,t,l)}}function na(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ct(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ct(e,t,l)}else n.current=null}function Wd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ct(e,e.return,l)}}function Hc(e,t,n){try{var a=e.stateNode;Yh(a,e.type,n,t),a[Y]=t}catch(l){ct(e,e.return,l)}}function Id(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=H));else if(a!==4&&(a===27&&Ka(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}function Gr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Ka(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gr(e,t,n),e=e.sibling;e!==null;)Gr(e,t,n),e=e.sibling}function Pd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Wt(t,a,n),t[kt]=e,t[Y]=n}catch(i){ct(e,e.return,i)}}var ya=!1,qt=!1,Yc=!1,ef=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function vh(e,t){if(e=e.containerInfo,cs=uo,e=fu(e),Do(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var c=0,d=-1,g=-1,z=0,G=0,J=e,L=null;t:for(;;){for(var q;J!==n||l!==0&&J.nodeType!==3||(d=c+l),J!==i||a!==0&&J.nodeType!==3||(g=c+a),J.nodeType===3&&(c+=J.nodeValue.length),(q=J.firstChild)!==null;)L=J,J=q;for(;;){if(J===e)break t;if(L===n&&++z===l&&(d=c),L===i&&++G===a&&(g=c),(q=J.nextSibling)!==null)break;J=L,L=J.parentNode}J=q}n=d===-1||g===-1?null:{start:d,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(ss={focusedElem:e,selectionRange:n},uo=!1,Vt=t;Vt!==null;)if(t=Vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Vt=e;else for(;Vt!==null;){switch(t=Vt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ge=yl(n.type,l);e=a.getSnapshotBeforeUpdate(ge,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(_e){ct(n,n.return,_e)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Vt=e;break}Vt=t.return}}function tf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:va(e,n),a&4&&Oi(5,n);break;case 1:if(va(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(c){ct(n,n.return,c)}else{var l=yl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ct(n,n.return,c)}}a&64&&Jd(n),a&512&&qi(n,n.return);break;case 3:if(va(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Uu(e,t)}catch(c){ct(n,n.return,c)}}break;case 27:t===null&&a&4&&Pd(n);case 26:case 5:va(e,n),t===null&&a&4&&Wd(n),a&512&&qi(n,n.return);break;case 12:va(e,n);break;case 31:va(e,n),a&4&&lf(e,n);break;case 13:va(e,n),a&4&&rf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=zh.bind(null,n),Jh(e,n))));break;case 22:if(a=n.memoizedState!==null||ya,!a){t=t!==null&&t.memoizedState!==null||qt,l=ya;var i=qt;ya=a,(qt=t)&&!i?wa(e,n,(n.subtreeFlags&8772)!==0):va(e,n),ya=l,qt=i}break;case 30:break;default:va(e,n)}}function nf(e){var t=e.alternate;t!==null&&(e.alternate=null,nf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,xn=!1;function ba(e,t,n){for(n=n.child;n!==null;)af(e,t,n),n=n.sibling}function af(e,t,n){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Gn,n)}catch{}switch(n.tag){case 26:qt||na(n,t),ba(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||na(n,t);var a=wt,l=xn;Ka(n.type)&&(wt=n.stateNode,xn=!1),ba(e,t,n),Zi(n.stateNode),wt=a,xn=l;break;case 5:qt||na(n,t);case 6:if(a=wt,l=xn,wt=null,ba(e,t,n),wt=a,xn=l,wt!==null)if(xn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(i){ct(n,t,i)}else try{wt.removeChild(n.stateNode)}catch(i){ct(n,t,i)}break;case 18:wt!==null&&(xn?(e=wt,Ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ci(e)):Ff(wt,n.stateNode));break;case 4:a=wt,l=xn,wt=n.stateNode.containerInfo,xn=!0,ba(e,t,n),wt=a,xn=l;break;case 0:case 11:case 14:case 15:Ya(2,n,t),qt||Ya(4,n,t),ba(e,t,n);break;case 1:qt||(na(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Fd(n,t,a)),ba(e,t,n);break;case 21:ba(e,t,n);break;case 22:qt=(a=qt)||n.memoizedState!==null,ba(e,t,n),qt=a;break;default:ba(e,t,n)}}function lf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ci(e)}catch(n){ct(t,t.return,n)}}}function rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ci(e)}catch(n){ct(t,t.return,n)}}function wh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ef),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ef),t;default:throw Error(s(435,e.tag))}}function Xr(e,t){var n=wh(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Nh.bind(null,e,a);a.then(l,l)}})}function yn(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 27:if(Ka(d.type)){wt=d.stateNode,xn=!1;break e}break;case 5:wt=d.stateNode,xn=!1;break e;case 3:case 4:wt=d.stateNode.containerInfo,xn=!0;break e}d=d.return}if(wt===null)throw Error(s(160));af(i,c,l),wt=null,xn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)of(t,e),t=t.sibling}var Kn=null;function of(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(t,e),bn(e),a&4&&(Ya(3,e,e.return),Oi(3,e),Ya(5,e,e.return));break;case 1:yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),a&64&&ya&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Kn;if(yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ut]||i[kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Wt(i,a,n),i[kt]=e,rt(i),a=i;break e;case"link":var c=op("link","href",l).get(a+(n.href||""));if(c){for(var d=0;d<c.length;d++)if(i=c[d],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){c.splice(d,1);break t}}i=l.createElement(a),Wt(i,a,n),l.head.appendChild(i);break;case"meta":if(c=op("meta","content",l).get(a+(n.content||""))){for(d=0;d<c.length;d++)if(i=c[d],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){c.splice(d,1);break t}}i=l.createElement(a),Wt(i,a,n),l.head.appendChild(i);break;default:throw Error(s(468,a))}i[kt]=e,rt(i),a=i}e.stateNode=a}else cp(l,e.type,e.stateNode);else e.stateNode=rp(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?cp(l,e.type,e.stateNode):rp(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,n.memoizedProps)}break;case 27:yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),n!==null&&a&4&&Hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yn(t,e),bn(e),a&512&&(qt||n===null||na(n,n.return)),e.flags&32){l=e.stateNode;try{x(l,"")}catch(ge){ct(e,e.return,ge)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Hc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Yc=!0);break;case 6:if(yn(t,e),bn(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ge){ct(e,e.return,ge)}}break;case 3:if(ro=null,l=Kn,Kn=lo(t.containerInfo),yn(t,e),Kn=l,bn(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(ge){ct(e,e.return,ge)}Yc&&(Yc=!1,cf(e));break;case 4:a=Kn,Kn=lo(e.stateNode.containerInfo),yn(t,e),bn(e),Kn=a;break;case 12:yn(t,e),bn(e);break;case 31:yn(t,e),bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xr(e,a)));break;case 13:yn(t,e),bn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zr=St()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xr(e,a)));break;case 22:l=e.memoizedState!==null;var g=n!==null&&n.memoizedState!==null,z=ya,G=qt;if(ya=z||l,qt=G||g,yn(t,e),qt=G,ya=z,bn(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||g||ya||qt||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){g=n=t;try{if(i=g.stateNode,l)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{d=g.stateNode;var J=g.memoizedProps.style,L=J!=null&&J.hasOwnProperty("display")?J.display:null;d.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(ge){ct(g,g.return,ge)}}}else if(t.tag===6){if(n===null){g=t;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(ge){ct(g,g.return,ge)}}}else if(t.tag===18){if(n===null){g=t;try{var q=g.stateNode;l?Wf(q,!0):Wf(g.stateNode,!1)}catch(ge){ct(g,g.return,ge)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Xr(e,n))));break;case 19:yn(t,e),bn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xr(e,a)));break;case 30:break;case 21:break;default:yn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Id(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=Uc(e);Gr(e,i,l);break;case 5:var c=n.stateNode;n.flags&32&&(x(c,""),n.flags&=-33);var d=Uc(e);Gr(e,d,c);break;case 3:case 4:var g=n.stateNode.containerInfo,z=Uc(e);Bc(e,z,g);break;default:throw Error(s(161))}}catch(G){ct(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function va(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tf(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ya(4,t,t.return),bl(t);break;case 1:na(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fd(t,t.return,n),bl(t);break;case 27:Zi(t.stateNode);case 26:case 5:na(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function wa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:wa(l,i,n),Oi(4,i);break;case 1:if(wa(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){ct(a,a.return,z)}if(a=i,l=a.updateQueue,l!==null){var d=a.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)Hu(g[l],d)}catch(z){ct(a,a.return,z)}}n&&c&64&&Jd(i),qi(i,i.return);break;case 27:Pd(i);case 26:case 5:wa(l,i,n),n&&a===null&&c&4&&Wd(i),qi(i,i.return);break;case 12:wa(l,i,n);break;case 31:wa(l,i,n),n&&c&4&&lf(l,i);break;case 13:wa(l,i,n),n&&c&4&&rf(l,i);break;case 22:i.memoizedState===null&&wa(l,i,n),qi(i,i.return);break;case 30:break;default:wa(l,i,n)}t=t.sibling}}function $c(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ki(n))}function Gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ki(e))}function Jn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sf(e,t,n,a),t=t.sibling}function sf(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Jn(e,t,n,a),l&2048&&Oi(9,t);break;case 1:Jn(e,t,n,a);break;case 3:Jn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ki(e)));break;case 12:if(l&2048){Jn(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,d=i.onPostCommit;typeof d=="function"&&d(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ct(t,t.return,g)}}else Jn(e,t,n,a);break;case 31:Jn(e,t,n,a);break;case 13:Jn(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Jn(e,t,n,a):Hi(e,t):i._visibility&2?Jn(e,t,n,a):(i._visibility|=2,Wl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&$c(c,t);break;case 24:Jn(e,t,n,a),l&2048&&Gc(t.alternate,t);break;default:Jn(e,t,n,a)}}function Wl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,d=n,g=a,z=c.flags;switch(c.tag){case 0:case 11:case 15:Wl(i,c,d,g,l),Oi(8,c);break;case 23:break;case 22:var G=c.stateNode;c.memoizedState!==null?G._visibility&2?Wl(i,c,d,g,l):Hi(i,c):(G._visibility|=2,Wl(i,c,d,g,l)),l&&z&2048&&$c(c.alternate,c);break;case 24:Wl(i,c,d,g,l),l&&z&2048&&Gc(c.alternate,c);break;default:Wl(i,c,d,g,l)}t=t.sibling}}function Hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Hi(n,a),l&2048&&$c(a.alternate,a);break;case 24:Hi(n,a),l&2048&&Gc(a.alternate,a);break;default:Hi(n,a)}t=t.sibling}}var Ui=8192;function Il(e,t,n){if(e.subtreeFlags&Ui)for(e=e.child;e!==null;)uf(e,t,n),e=e.sibling}function uf(e,t,n){switch(e.tag){case 26:Il(e,t,n),e.flags&Ui&&e.memoizedState!==null&&o2(n,Kn,e.memoizedState,e.memoizedProps);break;case 5:Il(e,t,n);break;case 3:case 4:var a=Kn;Kn=lo(e.stateNode.containerInfo),Il(e,t,n),Kn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ui,Ui=16777216,Il(e,t,n),Ui=a):Il(e,t,n));break;default:Il(e,t,n)}}function df(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Vt=a,pf(a,e)}df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ff(e),e=e.sibling}function ff(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vr(e)):Bi(e);break;default:Bi(e)}}function Vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Vt=a,pf(a,e)}df(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ya(8,t,t.return),Vr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vr(t));break;default:Vr(t)}e=e.sibling}}function pf(e,t){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:Ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ki(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Vt=a;else e:for(n=e;Vt!==null;){a=Vt;var l=a.sibling,i=a.return;if(nf(a),a===n){Vt=null;break e}if(l!==null){l.return=i,Vt=l;break e}Vt=i}}}var Sh={getCacheForType:function(e){var t=Jt(Dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Jt(Dt).controller.signal}},kh=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,Ze=null,Je=0,ot=0,En=null,$a=!1,Pl=!1,Xc=!1,Sa=0,At=0,Ga=0,vl=0,Vc=0,zn=0,ei=0,Yi=null,vn=null,Zc=!1,Zr=0,hf=0,Qr=1/0,Kr=null,Xa=null,$t=0,Va=null,ti=null,ka=0,Qc=0,Kc=null,mf=null,$i=0,Jc=null;function Nn(){return(it&2)!==0&&Je!==0?Je&-Je:y.T!==null?ts():Na()}function gf(){if(zn===0)if((Je&536870912)===0||We){var e=Xn;Xn<<=1,(Xn&3932160)===0&&(Xn=262144),zn=e}else zn=536870912;return e=An.current,e!==null&&(e.flags|=32),zn}function wn(e,t,n){(e===mt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(ni(e,0),Za(e,Je,zn,!1)),Sn(e,n),((it&2)===0||e!==mt)&&(e===mt&&((it&2)===0&&(vl|=n),At===4&&Za(e,Je,zn,!1)),aa(e))}function xf(e,t,n){if((it&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mn(e,t),l=a?Ah(e,t):Wc(e,t,!0),i=a;do{if(l===0){Pl&&!a&&Za(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!jh(n)){l=Wc(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var d=e;l=Yi;var g=d.current.memoizedState.isDehydrated;if(g&&(ni(d,c).flags|=256),c=Wc(d,c,!1),c!==2){if(Xc&&!g){d.errorRecoveryDisabledLanes|=i,vl|=i,l=4;break e}i=vn,vn=l,i!==null&&(vn===null?vn=i:vn.push.apply(vn,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){ni(e,0),Za(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Za(a,t,zn,!$a);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Zr+300-St(),10<l)){if(Za(a,t,zn,!$a),Vn(a,0,!0)!==0)break e;ka=t,a.timeoutHandle=Kf(yf.bind(null,a,n,vn,Kr,Zc,t,zn,vl,ei,$a,i,"Throttled",-0,0),l);break e}yf(a,n,vn,Kr,Zc,t,zn,vl,ei,$a,i,null,-0,0)}}break}while(!0);aa(e)}function yf(e,t,n,a,l,i,c,d,g,z,G,J,L,q){if(e.timeoutHandle=-1,J=t.subtreeFlags,J&8192||(J&16785408)===16785408){J={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:H},uf(t,i,J);var ge=(i&62914560)===i?Zr-St():(i&4194048)===i?hf-St():0;if(ge=c2(J,ge),ge!==null){ka=i,e.cancelPendingCommit=ge(Af.bind(null,e,t,i,n,a,l,c,d,g,G,J,null,L,q)),Za(e,i,c,!z);return}}Af(e,t,i,n,a,l,c,d,g)}function jh(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!jn(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Za(e,t,n,a){t&=~Vc,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-vt(l),c=1<<i;a[i]=-1,l&=~c}n!==0&&zl(e,n,t)}function Jr(){return(it&6)===0?(Gi(0),!1):!0}function Fc(){if(Ze!==null){if(ot===0)var e=Ze.return;else e=Ze,fa=dl=null,fc(e),Zl=null,Ci=0,e=Ze;for(;e!==null;)Kd(e.alternate,e),e=e.return;Ze=null}}function ni(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xh(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ka=0,Fc(),mt=e,Ze=n=ua(e.current,null),Je=t,ot=0,En=null,$a=!1,Pl=Mn(e,t),Xc=!1,ei=zn=Vc=vl=Ga=At=0,vn=Yi=null,Zc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-vt(a),i=1<<l;t|=e[l],a&=~i}return Sa=t,gr(),n}function bf(e,t){Oe=null,y.H=Li,t===Vl||t===jr?(t=Du(),ot=3):t===ec?(t=Du(),ot=4):ot=t===Ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,Ze===null&&(At=1,Hr(e,On(t,e.current)))}function vf(){var e=An.current;return e===null?!0:(Je&4194048)===Je?Bn===null:(Je&62914560)===Je||(Je&536870912)!==0?e===Bn:!1}function wf(){var e=y.H;return y.H=Li,e===null?Li:e}function Sf(){var e=y.A;return y.A=Sh,e}function Fr(){At=4,$a||(Je&4194048)!==Je&&An.current!==null||(Pl=!0),(Ga&134217727)===0&&(vl&134217727)===0||mt===null||Za(mt,Je,zn,!1)}function Wc(e,t,n){var a=it;it|=2;var l=wf(),i=Sf();(mt!==e||Je!==t)&&(Kr=null,ni(e,t)),t=!1;var c=At;e:do try{if(ot!==0&&Ze!==null){var d=Ze,g=En;switch(ot){case 8:Fc(),c=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var z=ot;if(ot=0,En=null,ai(e,d,g,z),n&&Pl){c=0;break e}break;default:z=ot,ot=0,En=null,ai(e,d,g,z)}}Ch(),c=At;break}catch(G){bf(e,G)}while(!0);return t&&e.shellSuspendCounter++,fa=dl=null,it=a,y.H=l,y.A=i,Ze===null&&(mt=null,Je=0,gr()),c}function Ch(){for(;Ze!==null;)kf(Ze)}function Ah(e,t){var n=it;it|=2;var a=wf(),l=Sf();mt!==e||Je!==t?(Kr=null,Qr=St()+500,ni(e,t)):Pl=Mn(e,t);e:do try{if(ot!==0&&Ze!==null){t=Ze;var i=En;t:switch(ot){case 1:ot=0,En=null,ai(e,t,i,1);break;case 2:case 9:if(Tu(i)){ot=0,En=null,jf(t);break}t=function(){ot!==2&&ot!==9||mt!==e||(ot=7),aa(e)},i.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Tu(i)?(ot=0,En=null,jf(t)):(ot=0,En=null,ai(e,t,i,7));break;case 5:var c=null;switch(Ze.tag){case 26:c=Ze.memoizedState;case 5:case 27:var d=Ze;if(c?sp(c):d.stateNode.complete){ot=0,En=null;var g=d.sibling;if(g!==null)Ze=g;else{var z=d.return;z!==null?(Ze=z,Wr(z)):Ze=null}break t}}ot=0,En=null,ai(e,t,i,5);break;case 6:ot=0,En=null,ai(e,t,i,6);break;case 8:Fc(),At=6;break e;default:throw Error(s(462))}}_h();break}catch(G){bf(e,G)}while(!0);return fa=dl=null,y.H=a,y.A=l,it=n,Ze!==null?0:(mt=null,Je=0,gr(),At)}function _h(){for(;Ze!==null&&!Ut();)kf(Ze)}function kf(e){var t=Zd(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,t===null?Wr(e):Ze=t}function jf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bd(n,t,t.pendingProps,t.type,void 0,Je);break;case 11:t=Bd(n,t,t.pendingProps,t.type.render,t.ref,Je);break;case 5:fc(t);default:Kd(n,t),t=Ze=wu(t,Sa),t=Zd(n,t,Sa)}e.memoizedProps=e.pendingProps,t===null?Wr(e):Ze=t}function ai(e,t,n,a){fa=dl=null,fc(t),Zl=null,Ci=0;var l=t.return;try{if(mh(e,l,t,n,Je)){At=1,Hr(e,On(n,e.current)),Ze=null;return}}catch(i){if(l!==null)throw Ze=l,i;At=1,Hr(e,On(n,e.current)),Ze=null;return}t.flags&32768?(We||a===1?e=!0:Pl||(Je&536870912)!==0?e=!1:($a=e=!0,(a===2||a===9||a===3||a===6)&&(a=An.current,a!==null&&a.tag===13&&(a.flags|=16384))),Cf(t,e)):Wr(t)}function Wr(e){var t=e;do{if((t.flags&32768)!==0){Cf(t,$a);return}e=t.return;var n=yh(t.alternate,t,Sa);if(n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);At===0&&(At=5)}function Cf(e,t){do{var n=bh(e.alternate,e);if(n!==null){n.flags&=32767,Ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ze=e;return}Ze=e=n}while(e!==null);At=6,Ze=null}function Af(e,t,n,a,l,i,c,d,g){e.cancelPendingCommit=null;do Ir();while($t!==0);if((it&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Uo,ll(e,n,i,c,d,g),e===mt&&(Ze=mt=null,Je=0),ti=t,Va=e,ka=n,Qc=i,Kc=l,mf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mh(_t,function(){return Mf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,l=C.p,C.p=2,c=it,it|=4;try{vh(e,t,n)}finally{it=c,C.p=l,y.T=a}}$t=1,_f(),Ef(),zf()}}function _f(){if($t===1){$t=0;var e=Va,t=ti,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=y.T,y.T=null;var a=C.p;C.p=2;var l=it;it|=4;try{of(t,e);var i=ss,c=fu(e.containerInfo),d=i.focusedElem,g=i.selectionRange;if(c!==d&&d&&d.ownerDocument&&du(d.ownerDocument.documentElement,d)){if(g!==null&&Do(d)){var z=g.start,G=g.end;if(G===void 0&&(G=z),"selectionStart"in d)d.selectionStart=z,d.selectionEnd=Math.min(G,d.value.length);else{var J=d.ownerDocument||document,L=J&&J.defaultView||window;if(L.getSelection){var q=L.getSelection(),ge=d.textContent.length,_e=Math.min(g.start,ge),pt=g.end===void 0?_e:Math.min(g.end,ge);!q.extend&&_e>pt&&(c=pt,pt=_e,_e=c);var A=uu(d,_e),v=uu(d,pt);if(A&&v&&(q.rangeCount!==1||q.anchorNode!==A.node||q.anchorOffset!==A.offset||q.focusNode!==v.node||q.focusOffset!==v.offset)){var E=J.createRange();E.setStart(A.node,A.offset),q.removeAllRanges(),_e>pt?(q.addRange(E),q.extend(v.node,v.offset)):(E.setEnd(v.node,v.offset),q.addRange(E))}}}}for(J=[],q=d;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<J.length;d++){var Z=J[d];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}uo=!!cs,ss=cs=null}finally{it=l,C.p=a,y.T=n}}e.current=t,$t=2}}function Ef(){if($t===2){$t=0;var e=Va,t=ti,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=y.T,y.T=null;var a=C.p;C.p=2;var l=it;it|=4;try{tf(e,t.alternate,t)}finally{it=l,C.p=a,y.T=n}}$t=3}}function zf(){if($t===4||$t===3){$t=0,rn();var e=Va,t=ti,n=ka,a=mf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$t=5:($t=0,ti=Va=null,Nf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Xa=null),za(n),t=t.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Gn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=y.T,l=C.p,C.p=2,y.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var d=a[c];i(d.value,{componentStack:d.stack})}}finally{y.T=t,C.p=l}}(ka&3)!==0&&Ir(),aa(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Jc?$i++:($i=0,Jc=e):$i=0,Gi(0)}}function Nf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ki(t)))}function Ir(){return _f(),Ef(),zf(),Mf()}function Mf(){if($t!==5)return!1;var e=Va,t=Qc;Qc=0;var n=za(ka),a=y.T,l=C.p;try{C.p=32>n?32:n,y.T=null,n=Kc,Kc=null;var i=Va,c=ka;if($t=0,ti=Va=null,ka=0,(it&6)!==0)throw Error(s(331));var d=it;if(it|=4,ff(i.current),sf(i,i.current,c,n),it=d,Gi(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Gn,i)}catch{}return!0}finally{C.p=l,y.T=a,Nf(e,t)}}function Tf(e,t,n){t=On(n,t),t=_c(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Sn(e,2),aa(e))}function ct(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xa===null||!Xa.has(a))){e=On(n,e),n=Td(2),a=Ha(t,n,2),a!==null&&(Ld(n,a,t,e),Sn(a,2),aa(a));break}}t=t.return}}function Ic(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new kh;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Xc=!0,l.add(n),e=Eh.bind(null,e,t,n),t.then(e,e))}function Eh(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mt===e&&(Je&n)===n&&(At===4||At===3&&(Je&62914560)===Je&&300>St()-Zr?(it&2)===0&&ni(e,0):Vc|=n,ei===Je&&(ei=0)),aa(e)}function Lf(e,t){t===0&&(t=al()),e=cl(e,t),e!==null&&(Sn(e,t),aa(e))}function zh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function Nh(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Lf(e,n)}function Mh(e,t){return un(e,t)}var Pr=null,li=null,Pc=!1,eo=!1,es=!1,Qa=0;function aa(e){e!==li&&e.next===null&&(li===null?Pr=li=e:li=li.next=e),eo=!0,Pc||(Pc=!0,Lh())}function Gi(e,t){if(!es&&eo){es=!0;do for(var n=!1,a=Pr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var c=a.suspendedLanes,d=a.pingedLanes;i=(1<<31-vt(42|e)+1)-1,i&=l&~(c&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,qf(a,i))}else i=Je,i=Vn(a,a===mt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Mn(a,i)||(n=!0,qf(a,i));a=a.next}while(n);es=!1}}function Th(){Df()}function Df(){eo=Pc=!1;var e=0;Qa!==0&&Gh()&&(e=Qa);for(var t=St(),n=null,a=Pr;a!==null;){var l=a.next,i=Rf(a,t);i===0?(a.next=null,n===null?Pr=l:n.next=l,l===null&&(li=n)):(n=a,(e!==0||(i&3)!==0)&&(eo=!0)),a=l}$t!==0&&$t!==5||Gi(e),Qa!==0&&(Qa=0)}function Rf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-vt(i),d=1<<c,g=l[c];g===-1?((d&n)===0||(d&a)!==0)&&(l[c]=El(d,t)):g<=t&&(e.expiredLanes|=d),i&=~d}if(t=mt,n=Je,n=Vn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Tt(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mn(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Tt(a),za(n)){case 2:case 8:n=cn;break;case 32:n=_t;break;case 268435456:n=Ca;break;default:n=_t}return a=Of.bind(null,e),n=un(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Tt(a),e.callbackPriority=2,e.callbackNode=null,2}function Of(e,t){if($t!==0&&$t!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ir()&&e.callbackNode!==n)return null;var a=Je;return a=Vn(e,e===mt?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(xf(e,a,t),Rf(e,St()),e.callbackNode!=null&&e.callbackNode===n?Of.bind(null,e):null)}function qf(e,t){if(Ir())return null;xf(e,t,!0)}function Lh(){Vh(function(){(it&6)!==0?un(Lt,Th):Df()})}function ts(){if(Qa===0){var e=Gl;e===0&&(e=Bt,Bt<<=1,(Bt&261888)===0&&(Bt=256)),Qa=e}return Qa}function Hf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:B(""+e)}function Uf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dh(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Hf((l[Y]||null).action),c=a.submitter;c&&(t=(t=c[Y]||null)?Hf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var d=new fr("action","action",null,a,l);e.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Qa!==0){var g=c?Uf(l,c):new FormData(l);wc(n,{pending:!0,data:g,method:l.method,action:i},null,g)}}else typeof i=="function"&&(d.preventDefault(),g=c?Uf(l,c):new FormData(l),wc(n,{pending:!0,data:g,method:l.method,action:i},i,g))},currentTarget:l}]})}}for(var ns=0;ns<Ho.length;ns++){var as=Ho[ns],Rh=as.toLowerCase(),Oh=as[0].toUpperCase()+as.slice(1);Qn(Rh,"on"+Oh)}Qn(mu,"onAnimationEnd"),Qn(gu,"onAnimationIteration"),Qn(xu,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(I0,"onTransitionRun"),Qn(P0,"onTransitionStart"),Qn(eh,"onTransitionCancel"),Qn(yu,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var d=a[c],g=d.instance,z=d.currentTarget;if(d=d.listener,g!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=z;try{i(l)}catch(G){mr(G)}l.currentTarget=null,i=g}else for(c=0;c<a.length;c++){if(d=a[c],g=d.instance,z=d.currentTarget,d=d.listener,g!==i&&l.isPropagationStopped())break e;i=d,l.currentTarget=z;try{i(l)}catch(G){mr(G)}l.currentTarget=null,i=g}}}}function Qe(e,t){var n=t[Se];n===void 0&&(n=t[Se]=new Set);var a=e+"__bubble";n.has(a)||(Yf(t,e,2,!1),n.add(a))}function ls(e,t,n){var a=0;t&&(a|=4),Yf(n,e,a,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[to]){e[to]=!0,Ma.forEach(function(n){n!=="selectionchange"&&(qh.has(n)||ls(n,!1,e),ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,ls("selectionchange",!1,t))}}function Yf(e,t,n,a){switch(gp(t)){case 2:var l=d2;break;case 8:l=f2;break;default:l=vs}n=l.bind(null,t,n,e),l=void 0,!ze||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function rs(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var d=a.stateNode.containerInfo;if(d===l)break;if(c===4)for(c=a.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;d!==null;){if(c=Zt(d),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){a=i=c;continue e}d=d.parentNode}}a=a.return}Xe(function(){var z=i,G=ie(n),J=[];e:{var L=bu.get(e);if(L!==void 0){var q=fr,ge=e;switch(e){case"keypress":if(hn(n)===0)break e;case"keydown":case"keyup":q=N0;break;case"focusin":ge="focus",q=zo;break;case"focusout":ge="blur",q=zo;break;case"beforeblur":case"afterblur":q=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=L0;break;case mu:case gu:case xu:q=w0;break;case yu:q=R0;break;case"scroll":case"scrollend":q=g0;break;case"wheel":q=q0;break;case"copy":case"cut":case"paste":q=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Fs;break;case"toggle":case"beforetoggle":q=U0}var _e=(t&4)!==0,pt=!_e&&(e==="scroll"||e==="scrollend"),A=_e?L!==null?L+"Capture":null:L;_e=[];for(var v=z,E;v!==null;){var Z=v;if(E=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||E===null||A===null||(Z=Ue(v,A),Z!=null&&_e.push(Vi(v,Z,E))),pt)break;v=v.return}0<_e.length&&(L=new q(L,ge,null,n,G),J.push({event:L,listeners:_e}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",L&&n!==$&&(ge=n.relatedTarget||n.fromElement)&&(Zt(ge)||ge[ye]))break e;if((q||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,q?(ge=n.relatedTarget||n.toElement,q=z,ge=ge?Zt(ge):null,ge!==null&&(pt=S(ge),_e=ge.tag,ge!==pt||_e!==5&&_e!==27&&_e!==6)&&(ge=null)):(q=null,ge=z),q!==ge)){if(_e=Ks,Z="onMouseLeave",A="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_e=Fs,Z="onPointerLeave",A="onPointerEnter",v="pointer"),pt=q==null?L:nn(q),E=ge==null?L:nn(ge),L=new _e(Z,v+"leave",q,n,G),L.target=pt,L.relatedTarget=E,Z=null,Zt(G)===z&&(_e=new _e(A,v+"enter",ge,n,G),_e.target=E,_e.relatedTarget=pt,Z=_e),pt=Z,q&&ge)t:{for(_e=Hh,A=q,v=ge,E=0,Z=A;Z;Z=_e(Z))E++;Z=0;for(var je=v;je;je=_e(je))Z++;for(;0<E-Z;)A=_e(A),E--;for(;0<Z-E;)v=_e(v),Z--;for(;E--;){if(A===v||v!==null&&A===v.alternate){_e=A;break t}A=_e(A),v=_e(v)}_e=null}else _e=null;q!==null&&$f(J,L,q,_e,!1),ge!==null&&pt!==null&&$f(J,pt,ge,_e,!0)}}e:{if(L=z?nn(z):window,q=L.nodeName&&L.nodeName.toLowerCase(),q==="select"||q==="input"&&L.type==="file")var nt=lu;else if(nu(L))if(iu)nt=J0;else{nt=Q0;var we=Z0}else q=L.nodeName,!q||q.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?z&&P(z.elementType)&&(nt=lu):nt=K0;if(nt&&(nt=nt(e,z))){au(J,nt,n,G);break e}we&&we(e,L,z),e==="focusout"&&z&&L.type==="number"&&z.memoizedProps.value!=null&&kn(L,"number",L.value)}switch(we=z?nn(z):window,e){case"focusin":(nu(we)||we.contentEditable==="true")&&(Rl=we,Ro=z,vi=null);break;case"focusout":vi=Ro=Rl=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,pu(J,n,G);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":pu(J,n,G)}var qe;if(Mo)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Dl?eu(e,n)&&(Fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Fe="onCompositionStart");Fe&&(Ws&&n.locale!=="ko"&&(Dl||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Dl&&(qe=Dn()):(et=G,Ce="value"in et?et.value:et.textContent,Dl=!0)),we=no(z,Fe),0<we.length&&(Fe=new Js(Fe,e,null,n,G),J.push({event:Fe,listeners:we}),qe?Fe.data=qe:(qe=tu(n),qe!==null&&(Fe.data=qe)))),(qe=Y0?$0(e,n):G0(e,n))&&(Fe=no(z,"onBeforeInput"),0<Fe.length&&(we=new Js("onBeforeInput","beforeinput",null,n,G),J.push({event:we,listeners:Fe}),we.data=qe)),Dh(J,e,z,n,G)}Bf(J,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ue(e,n),l!=null&&a.unshift(Vi(e,l,i)),l=Ue(e,t),l!=null&&a.push(Vi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,n,a,l){for(var i=t._reactName,c=[];n!==null&&n!==a;){var d=n,g=d.alternate,z=d.stateNode;if(d=d.tag,g!==null&&g===a)break;d!==5&&d!==26&&d!==27||z===null||(g=z,l?(z=Ue(n,i),z!=null&&c.unshift(Vi(n,z,g))):l||(z=Ue(n,i),z!=null&&c.push(Vi(n,z,g)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Uh=/\r\n?/g,Bh=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Bh,"")}function Xf(e,t){return t=Gf(t),Gf(e)===t}function ft(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||x(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&x(e,""+a);break;case"className":Pn(e,"class",a);break;case"tabIndex":Pn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,n,a);break;case"style":ce(e,a,i);break;case"data":if(t!=="object"){Pn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=B(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",l.name,l,null),ft(e,t,"formEncType",l.formEncType,l,null),ft(e,t,"formMethod",l.formMethod,l,null),ft(e,t,"formTarget",l.formTarget,l,null)):(ft(e,t,"encType",l.encType,l,null),ft(e,t,"method",l.method,l,null),ft(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=B(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=H);break;case"onScroll":a!=null&&Qe("scroll",e);break;case"onScrollEnd":a!=null&&Qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=B(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Qe("beforetoggle",e),Qe("toggle",e),Ml(e,"popover",a);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ml(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ue.get(n)||n,Ml(e,n,a))}}function os(e,t,n,a,l,i){switch(n){case"style":ce(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?x(e,a):(typeof a=="number"||typeof a=="bigint")&&x(e,""+a);break;case"onScroll":a!=null&&Qe("scroll",e);break;case"onScrollEnd":a!=null&&Qe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=H);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zn.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Y]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ml(e,n,a)}}}function Wt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",e),Qe("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,i,c,n,null)}}l&&ft(e,t,"srcSet",n.srcSet,n,null),a&&ft(e,t,"src",n.src,n,null);return;case"input":Qe("invalid",e);var d=i=c=l=null,g=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var G=n[a];if(G!=null)switch(a){case"name":l=G;break;case"type":c=G;break;case"checked":g=G;break;case"defaultChecked":z=G;break;case"value":i=G;break;case"defaultValue":d=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,t));break;default:ft(e,t,a,G,n,null)}}pi(e,i,d,g,z,c,l,!1);return;case"select":Qe("invalid",e),a=c=i=null;for(l in n)if(n.hasOwnProperty(l)&&(d=n[l],d!=null))switch(l){case"value":i=d;break;case"defaultValue":c=d;break;case"multiple":a=d;default:ft(e,t,l,d,n,null)}t=i,n=c,e.multiple=!!a,t!=null?sa(e,!!a,t,!1):n!=null&&sa(e,!!a,n,!0);return;case"textarea":Qe("invalid",e),i=l=a=null;for(c in n)if(n.hasOwnProperty(c)&&(d=n[c],d!=null))switch(c){case"value":a=d;break;case"defaultValue":l=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:ft(e,t,c,d,n,null)}dr(e,a,l,i);return;case"option":for(g in n)if(n.hasOwnProperty(g)&&(a=n[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ft(e,t,g,a,n,null)}return;case"dialog":Qe("beforetoggle",e),Qe("toggle",e),Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":Qe("load",e);break;case"video":case"audio":for(a=0;a<Xi.length;a++)Qe(Xi[a],e);break;case"image":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"embed":case"source":case"link":Qe("error",e),Qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,z,a,n,null)}return;default:if(P(t)){for(G in n)n.hasOwnProperty(G)&&(a=n[G],a!==void 0&&os(e,t,G,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&ft(e,t,d,a,n,null))}function Yh(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,d=null,g=null,z=null,G=null;for(q in n){var J=n[q];if(n.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":g=J;default:a.hasOwnProperty(q)||ft(e,t,q,null,a,J)}}for(var L in a){var q=a[L];if(J=n[L],a.hasOwnProperty(L)&&(q!=null||J!=null))switch(L){case"type":i=q;break;case"name":l=q;break;case"checked":z=q;break;case"defaultChecked":G=q;break;case"value":c=q;break;case"defaultValue":d=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:q!==J&&ft(e,t,L,q,a,J)}}fi(e,c,d,g,z,G,i,l);return;case"select":q=c=d=L=null;for(i in n)if(g=n[i],n.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":q=g;default:a.hasOwnProperty(i)||ft(e,t,i,null,a,g)}for(l in a)if(i=a[l],g=n[l],a.hasOwnProperty(l)&&(i!=null||g!=null))switch(l){case"value":L=i;break;case"defaultValue":d=i;break;case"multiple":c=i;default:i!==g&&ft(e,t,l,i,a,g)}t=d,n=c,a=q,L!=null?sa(e,!!n,L,!1):!!a!=!!n&&(t!=null?sa(e,!!n,t,!0):sa(e,!!n,n?[]:"",!1));return;case"textarea":q=L=null;for(d in n)if(l=n[d],n.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ft(e,t,d,null,a,l)}for(c in a)if(l=a[c],i=n[c],a.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":L=l;break;case"defaultValue":q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&ft(e,t,c,l,a,i)}ur(e,L,q);return;case"option":for(var ge in n)if(L=n[ge],n.hasOwnProperty(ge)&&L!=null&&!a.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:ft(e,t,ge,null,a,L)}for(g in a)if(L=a[g],q=n[g],a.hasOwnProperty(g)&&L!==q&&(L!=null||q!=null))switch(g){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:ft(e,t,g,L,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in n)L=n[_e],n.hasOwnProperty(_e)&&L!=null&&!a.hasOwnProperty(_e)&&ft(e,t,_e,null,a,L);for(z in a)if(L=a[z],q=n[z],a.hasOwnProperty(z)&&L!==q&&(L!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,t));break;default:ft(e,t,z,L,a,q)}return;default:if(P(t)){for(var pt in n)L=n[pt],n.hasOwnProperty(pt)&&L!==void 0&&!a.hasOwnProperty(pt)&&os(e,t,pt,void 0,a,L);for(G in a)L=a[G],q=n[G],!a.hasOwnProperty(G)||L===q||L===void 0&&q===void 0||os(e,t,G,L,a,q);return}}for(var A in n)L=n[A],n.hasOwnProperty(A)&&L!=null&&!a.hasOwnProperty(A)&&ft(e,t,A,null,a,L);for(J in a)L=a[J],q=n[J],!a.hasOwnProperty(J)||L===q||L==null&&q==null||ft(e,t,J,L,a,q)}function Vf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $h(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,c=l.initiatorType,d=l.duration;if(i&&d&&Vf(c)){for(c=0,d=l.responseEnd,a+=1;a<n.length;a++){var g=n[a],z=g.startTime;if(z>d)break;var G=g.transferSize,J=g.initiatorType;G&&Vf(J)&&(g=g.responseEnd,c+=G*(g<d?1:(d-z)/(g-z)))}if(--a,t+=8*(i+c)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cs=null,ss=null;function ao(e){return e.nodeType===9?e:e.ownerDocument}function Zf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=null;function Gh(){var e=window.event;return e&&e.type==="popstate"?e===ds?!1:(ds=e,!0):(ds=null,!1)}var Kf=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(Zh)}:Kf;function Zh(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function Ff(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),ci(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Zi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Zi(n);for(var i=n.firstChild;i;){var c=i.nextSibling,d=i.nodeName;i[ut]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=c}}else n==="body"&&Zi(e.ownerDocument.body);n=l}while(n);ci(t)}function Wf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function fs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fs(n),xt(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qh(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ut])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function Kh(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function If(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yn(e.nextSibling),e===null))return null;return e}function ps(e){return e.data==="$?"||e.data==="$~"}function hs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jh(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ms=null;function Pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Yn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ep(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function tp(e,t,n){switch(t=ao(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Zi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var $n=new Map,np=new Set;function lo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ja=C.d;C.d={f:Fh,r:Wh,D:Ih,C:Ph,L:e2,m:t2,X:a2,S:n2,M:l2};function Fh(){var e=ja.f(),t=Jr();return e||t}function Wh(e){var t=Yt(e);t!==null&&t.tag===5&&t.type==="form"?yd(t):ja.r(e)}var ii=typeof document>"u"?null:document;function ap(e,t,n){var a=ii;if(a&&typeof t=="string"&&t){var l=Qt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),np.has(l)||(np.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Wt(t,"link",e),rt(t),a.head.appendChild(t)))}}function Ih(e){ja.D(e),ap("dns-prefetch",e,null)}function Ph(e,t){ja.C(e,t),ap("preconnect",e,t)}function e2(e,t,n){ja.L(e,t,n);var a=ii;if(a&&e&&t){var l='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Qt(n.imageSizes)+'"]')):l+='[href="'+Qt(e)+'"]';var i=l;switch(t){case"style":i=ri(e);break;case"script":i=oi(e)}$n.has(i)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$n.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Qi(i))||t==="script"&&a.querySelector(Ki(i))||(t=a.createElement("link"),Wt(t,"link",e),rt(t),a.head.appendChild(t)))}}function t2(e,t){ja.m(e,t);var n=ii;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Qt(a)+'"][href="'+Qt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=oi(e)}if(!$n.has(i)&&(e=N({rel:"modulepreload",href:e},t),$n.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ki(i)))return}a=n.createElement("link"),Wt(a,"link",e),rt(a),n.head.appendChild(a)}}}function n2(e,t,n){ja.S(e,t,n);var a=ii;if(a&&e){var l=Xt(a).hoistableStyles,i=ri(e);t=t||"default";var c=l.get(i);if(!c){var d={loading:0,preload:null};if(c=a.querySelector(Qi(i)))d.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$n.get(i))&&gs(e,n);var g=c=a.createElement("link");rt(g),Wt(g,"link",e),g._p=new Promise(function(z,G){g.onload=z,g.onerror=G}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,io(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:d},l.set(i,c)}}}function a2(e,t){ja.X(e,t);var n=ii;if(n&&e){var a=Xt(n).hoistableScripts,l=oi(e),i=a.get(l);i||(i=n.querySelector(Ki(l)),i||(e=N({src:e,async:!0},t),(t=$n.get(l))&&xs(e,t),i=n.createElement("script"),rt(i),Wt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function l2(e,t){ja.M(e,t);var n=ii;if(n&&e){var a=Xt(n).hoistableScripts,l=oi(e),i=a.get(l);i||(i=n.querySelector(Ki(l)),i||(e=N({src:e,async:!0,type:"module"},t),(t=$n.get(l))&&xs(e,t),i=n.createElement("script"),rt(i),Wt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function lp(e,t,n,a){var l=(l=ee.current)?lo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ri(n.href),n=Xt(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ri(n.href);var i=Xt(l).hoistableStyles,c=i.get(e);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=l.querySelector(Qi(e)))&&!i._p&&(c.instance=i,c.state.loading=5),$n.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(e,n),i||i2(l,e,n,c.state))),t&&a===null)throw Error(s(528,""));return c}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oi(n),n=Xt(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ri(e){return'href="'+Qt(e)+'"'}function Qi(e){return'link[rel="stylesheet"]['+e+"]"}function ip(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function i2(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Wt(t,"link",n),rt(t),e.head.appendChild(t))}function oi(e){return'[src="'+Qt(e)+'"]'}function Ki(e){return"script[async]"+e}function rp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(a)return t.instance=a,rt(a),a;var l=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),rt(a),Wt(a,"style",l),io(a,n.precedence,e),t.instance=a;case"stylesheet":l=ri(n.href);var i=e.querySelector(Qi(l));if(i)return t.state.loading|=4,t.instance=i,rt(i),i;a=ip(n),(l=$n.get(l))&&gs(a,l),i=(e.ownerDocument||e).createElement("link"),rt(i);var c=i;return c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Wt(i,"link",a),t.state.loading|=4,io(i,n.precedence,e),t.instance=i;case"script":return i=oi(n.src),(l=e.querySelector(Ki(i)))?(t.instance=l,rt(l),l):(a=n,(l=$n.get(i))&&(a=N({},n),xs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),rt(l),Wt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,io(a,n.precedence,e));return t.instance}function io(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,c=0;c<a.length;c++){var d=a[c];if(d.dataset.precedence===t)i=d;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ro=null;function op(e,t,n){if(ro===null){var a=new Map,l=ro=new Map;l.set(n,a)}else l=ro,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[ut]||i[kt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var d=a.get(c);d?d.push(i):a.set(c,[i])}}return a}function cp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function r2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function o2(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ri(a.href),i=t.querySelector(Qi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=oo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,rt(i);return}i=t.ownerDocument||t,a=ip(a),(l=$n.get(l))&&gs(a,l),i=i.createElement("link"),rt(i);var c=i;c._p=new Promise(function(d,g){c.onload=d,c.onerror=g}),Wt(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=oo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ys=0;function c2(e,t){return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*$h());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function oo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var co=null;function so(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,co=new Map,t.forEach(s2,e),co=null,oo.call(e))}function s2(e,t){if(!(t.state.loading&4)){var n=co.get(e);if(n)var a=n.get(null);else{n=new Map,co.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(n.set(c.dataset.precedence,c),a=c)}a&&n.set(null,a)}l=t.instance,c=l.getAttribute("data-precedence"),i=n.get(c)||a,i===a&&n.set(null,l),n.set(c,l),this.count++,a=oo.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ji={$$typeof:pe,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function u2(e,t,n,a,l,i,c,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.hiddenUpdates=oa(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function up(e,t,n,a,l,i,c,d,g,z,G,J){return e=new u2(e,t,n,c,g,z,G,J,d),t=1,i===!0&&(t|=24),i=Cn(3,null,null,t),e.current=i,i.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},tc(i),e}function dp(e){return e?(e=Hl,e):Hl}function fp(e,t,n,a,l,i){l=dp(l),a.context===null?a.context=l:a.pendingContext=l,a=qa(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Ha(e,a,t),n!==null&&(wn(n,e,t),_i(n,e,t))}function pp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bs(e,t){pp(e,t),(e=e.alternate)&&pp(e,t)}function hp(e){if(e.tag===13||e.tag===31){var t=cl(e,67108864);t!==null&&wn(t,e,67108864),bs(e,67108864)}}function mp(e){if(e.tag===13||e.tag===31){var t=Nn();t=Ea(t);var n=cl(e,t);n!==null&&wn(n,e,t),bs(e,t)}}var uo=!0;function d2(e,t,n,a){var l=y.T;y.T=null;var i=C.p;try{C.p=2,vs(e,t,n,a)}finally{C.p=i,y.T=l}}function f2(e,t,n,a){var l=y.T;y.T=null;var i=C.p;try{C.p=8,vs(e,t,n,a)}finally{C.p=i,y.T=l}}function vs(e,t,n,a){if(uo){var l=ws(a);if(l===null)rs(e,t,a,fo,n),xp(e,a);else if(h2(l,e,t,n,a))a.stopPropagation();else if(xp(e,a),t&4&&-1<p2.indexOf(e)){for(;l!==null;){var i=Yt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=tn(i.pendingLanes);if(c!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;c;){var g=1<<31-vt(c);d.entanglements[1]|=g,c&=~g}aa(i),(it&6)===0&&(Qr=St()+500,Gi(0))}}break;case 31:case 13:d=cl(i,2),d!==null&&wn(d,i,2),Jr(),bs(i,2)}if(i=ws(a),i===null&&rs(e,t,a,fo,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else rs(e,t,a,null,n)}}function ws(e){return e=ie(e),Ss(e)}var fo=null;function Ss(e){if(fo=null,e=Zt(e),e!==null){var t=S(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=j(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fo=e,null}function gp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case Lt:return 2;case cn:return 8;case _t:case Wn:return 32;case Ca:return 268435456;default:return 32}default:return 32}}var ks=!1,Ja=null,Fa=null,Wa=null,Fi=new Map,Wi=new Map,Ia=[],p2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(e,t){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function Ii(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Yt(t),t!==null&&hp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function h2(e,t,n,a,l){switch(t){case"focusin":return Ja=Ii(Ja,e,t,n,a,l),!0;case"dragenter":return Fa=Ii(Fa,e,t,n,a,l),!0;case"mouseover":return Wa=Ii(Wa,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Fi.set(i,Ii(Fi.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Wi.set(i,Ii(Wi.get(i)||null,e,t,n,a,l)),!0}return!1}function yp(e){var t=Zt(e.target);if(t!==null){var n=S(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,Nl(e.priority,function(){mp(n)});return}}else if(t===31){if(t=j(n),t!==null){e.blockedOn=t,Nl(e.priority,function(){mp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);$=a,n.target.dispatchEvent(a),$=null}else return t=Yt(n),t!==null&&hp(t),e.blockedOn=n,!1;t.shift()}return!0}function bp(e,t,n){po(e)&&n.delete(t)}function m2(){ks=!1,Ja!==null&&po(Ja)&&(Ja=null),Fa!==null&&po(Fa)&&(Fa=null),Wa!==null&&po(Wa)&&(Wa=null),Fi.forEach(bp),Wi.forEach(bp)}function ho(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,m2)))}var mo=null;function vp(e){mo!==e&&(mo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mo===e&&(mo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ss(a||n)===null)continue;break}var i=Yt(n);i!==null&&(e.splice(t,3),t-=3,wc(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ci(e){function t(g){return ho(g,e)}Ja!==null&&ho(Ja,e),Fa!==null&&ho(Fa,e),Wa!==null&&ho(Wa,e),Fi.forEach(t),Wi.forEach(t);for(var n=0;n<Ia.length;n++){var a=Ia[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ia.length&&(n=Ia[0],n.blockedOn===null);)yp(n),n.blockedOn===null&&Ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],c=l[Y]||null;if(typeof i=="function")c||vp(n);else if(c){var d=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[Y]||null)d=c.formAction;else if(Ss(l)!==null)continue}else d=c.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),vp(n)}}}function wp(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function js(e){this._internalRoot=e}go.prototype.render=js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Nn();fp(n,a,e,t,null,null)},go.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fp(e.current,2,null,e,null,null),Jr(),t[ye]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Na();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ia.length&&t!==0&&t<Ia[n].priority;n++);Ia.splice(n,0,e),n===0&&yp(e)}};var Sp=f.version;if(Sp!=="19.2.1")throw Error(s(527,Sp,"19.2.1"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=k(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var g2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Gn=xo.inject(g2),Me=xo}catch{}}return er.createRoot=function(e,t){if(!p(e))throw Error(s(299));var n=!1,a="",l=Ed,i=zd,c=Nd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=up(e,1,!1,null,null,n,a,null,l,i,c,wp),e[ye]=t.current,is(e),new js(t)},er.hydrateRoot=function(e,t,n){if(!p(e))throw Error(s(299));var a=!1,l="",i=Ed,c=zd,d=Nd,g=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(g=n.formState)),t=up(e,1,!0,t,n??null,a,l,g,i,c,d,wp),t.context=dp(null),n=t.current,a=Nn(),a=Ea(a),l=qa(a),l.callback=null,Ha(n,l,a),n=a,t.current.lanes=n,Sn(t,n),aa(t),e[ye]=t.current,is(e),new go(t)},er.version="19.2.1",er}var Lp;function L2(){if(Lp)return Es.exports;Lp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),Es.exports=T2(),Es.exports}var D2=L2();const Dp=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),R2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"})}),O2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.101c.119-1.486.259-3.245 1.303-4.595C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06",clipRule:"evenodd"})}),q2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",d:"M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"})}),H2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",d:"M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"})}),Rp=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.42c0 .417.226.651.621.651h1.187c1.28 0 2.036-.791 2.036-2.145 0-1.353-.753-2.082-2.036-2.082H7.357c-.395 0-.62.234-.62.65zm1.632-.336h-.39V11.26h.39c.595 0 .946.384.946 1.095 0 .78-.325 1.158-.946 1.158m2.698.41c0 .416.226.65.621.65.396 0 .622-.234.622-.65v-.92h1.113c.316 0 .51-.17.51-.466s-.2-.466-.51-.466h-1.113v-.808h1.239c.328 0 .548-.179.548-.495 0-.317-.214-.495-.548-.495h-1.86c-.396 0-.622.234-.622.65z",clipRule:"evenodd"})}),Op=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-4 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M11 14.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),U2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 0 1-1.54 0v-5.351H5.19v5.351a.77.77 0 1 1-1.54 0V5.673a.77.77 0 0 1 .77-.77",clipRule:"evenodd"})}),B2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061",clipRule:"evenodd"})}),Ts=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25",clipRule:"evenodd"})}),Y2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z",clipRule:"evenodd"})}),$2=o=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"none",style:{userSelect:"none",flexShrink:0},...o,children:r.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z",clipRule:"evenodd"})});var si=a0();const G2=["https://cdn.jsdelivr.net","https://fastly.jsdelivr.net","https://gcore.jsdelivr.net","https://testingcf.jsdelivr.net"];function nr(o){const f=o.match(/^https?:\/\/([\w.-]*\.)?jsdelivr\.net(\/gh\/.*)$/i);if(!f)return[o];const u=f[2];return G2.map(s=>s+u)}const Fn=o=>{const f=Math.floor(o/60),u=Math.floor(o%60);return`${f}:${String(u).padStart(2,"0")}`},X2=({meta:o,title:f="听力音频"})=>{const u=h.useRef(null),s=h.useMemo(()=>{const M=nr(o.src??""),se=(o.srcs??[]).flatMap(de=>nr(de));return[...M,...se.filter(de=>!M.includes(de))]},[o.src,o.srcs]),[p,S]=h.useState(0),b=h.useMemo(()=>{const M=s[p]??s[0]??"";return M.startsWith("/")||/^https?:/.test(M)?M:`${window.location.origin}${M.replace(/^\.?\//,"/")}`},[s,p]),j=()=>{S(M=>M<s.length-1?M+1:M)},[w,k]=h.useState(0),[R,N]=h.useState(!1),[U,V]=h.useState(1),Q=o.parts,W=o.questionTimes??{},oe=o.segments??[],ae=!!(Q!=null&&Q.length),F=h.useMemo(()=>ae?o.duration||0:oe.length?oe[oe.length-1].end:0,[ae,o.duration,oe]);h.useEffect(()=>{const M=u.current;if(!M)return;const se=()=>k(M.currentTime),de=()=>N(!1);return M.addEventListener("timeupdate",se),M.addEventListener("ended",de),()=>{M.removeEventListener("timeupdate",se),M.removeEventListener("ended",de)}},[]);const pe=h.useCallback(()=>{const M=u.current;M&&(M.paused?(M.play(),N(!0)):(M.pause(),N(!1)))},[]),xe=h.useCallback(M=>{const se=u.current;se&&(se.currentTime=Math.max(0,Math.min(M,se.duration||M)),k(se.currentTime))},[]),ke=h.useCallback(M=>F>0?Math.min(100,Math.max(0,M/F*100)):0,[F]),he=h.useRef(null),be=h.useCallback(M=>{const se=he.current;if(!se||F<=0)return;const de=se.getBoundingClientRect(),Le=Math.min(1,Math.max(0,(M.clientX-de.left)/de.width));xe(Le*F)},[xe,F]),Ee=h.useCallback(()=>{const M=Array.from(document.querySelectorAll(".exam-content-root h2")).find(se=>/Part II|Listening/i.test(se.textContent||""));M==null||M.scrollIntoView({behavior:"smooth",block:"start"})},[]);h.useEffect(()=>{if(!ae)return;const M=se=>{const de=se.detail??{},Le=typeof de.time=="number"?de.time:de.no!=null?W[de.no]:void 0;if(Le==null)return;Ee(),xe(Le);const y=u.current;y&&(y.play(),N(!0))};return window.addEventListener("cet:lp2-jump",M),()=>window.removeEventListener("cet:lp2-jump",M)},[ae,W,xe,Ee]);const[re,fe]=h.useState(0);h.useEffect(()=>{const M=he.current;if(!M)return;const se=()=>fe(M.clientWidth);se();const de=new ResizeObserver(se);return de.observe(M),()=>de.disconnect()},[ae]);const ne=M=>{var se;return((se=o.labels)==null?void 0:se[M])??`第 ${M+1} 段`};if(!o.src)return null;if(ae&&Q){const M=ke(w),se=Object.entries(W).map(([D,X])=>({no:D,x:Number(X)/(F||1)*re}));se.sort((D,X)=>D.x-X.x);const de=1;let Le=-1/0;const y=se.map(D=>{const X=D.no.length*4+2,I=Math.max(0,Le+de-(D.x-X/2));return Le=D.x+I+X/2,{no:D.no,cx:D.x+I}}),C=(()=>{const D=(Q??[]).map((_,K)=>{const te=K+1<Q.length?Q[K+1].start:F,me=_.start/(F||1)*100,ee=te/(F||1)*100;return{label:_.label,start:_.start,mid:(me+ee)/2}}),X=_=>Math.max(24,_.length*5.4+8)/(re||1)*100,I=1.2;let m=-1/0;return D.map(_=>{const K=X(_.label),te=Math.max(K/2,_.mid+Math.max(0,m+I-(_.mid-K/2)));return m=te+K/2,{..._,mid:Math.min(te,100-K/2)}})})();return r.jsxs("div",{className:"lp2",children:[r.jsx("audio",{ref:u,src:b,preload:"metadata",onError:j}),r.jsx("button",{type:"button",className:"lp2-play",onClick:pe,"aria-label":R?"暂停":"播放",children:R?"❚❚":"▶"}),r.jsxs("div",{className:"lp2-times",children:[r.jsx("span",{className:"lp2-cur",children:Fn(w)}),r.jsx("span",{className:"lp2-total",children:Fn(F)})]}),r.jsxs("div",{className:"lp2-mid",children:[r.jsxs("div",{className:"lp2-labels",children:[Q[0]&&Q[0].start>3&&r.jsx("button",{type:"button",className:"lp2-part-label is-intro",style:{left:`${ke(Q[0].start)/2}%`},onClick:()=>xe(0),title:`念题目 ${Fn(0)} - ${Fn(Q[0].start)}`,children:"念题"}),C.map(D=>r.jsx("button",{type:"button",className:"lp2-part-label",style:{left:`${D.mid}%`},onClick:()=>xe(D.start),title:`${D.label} ${Fn(D.start)}`,children:D.label},D.label))]}),r.jsxs("div",{className:"lp2-track",ref:he,onClick:be,role:"slider","aria-label":"播放进度","aria-valuemin":0,"aria-valuemax":F,"aria-valuenow":Math.round(w),children:[Q[0]&&Q[0].start>3&&r.jsx("span",{className:"lp2-segblock is-intro",style:{left:"2px",width:`calc(${ke(Q[0].start)}% - 4px)`}},"seg-intro"),Q.map((D,X)=>{const I=X+1<Q.length?Q[X+1].start:F;if(I<=D.start)return null;const m=ke(D.start),_=ke(I)-ke(D.start);return r.jsx("span",{className:"lp2-segblock",style:{left:`calc(${m}% + 2px)`,width:`calc(${_}% - 4px)`}},`seg-${D.label}`)}),r.jsx("div",{className:"lp2-glow",style:{width:`${M}%`}}),y.map(D=>r.jsx("span",{className:"lp2-mark",style:{left:`${D.cx}px`}},`mark-${D.no}`)),r.jsx("div",{className:"lp2-cursor",style:{left:`${M}%`}}),y.map(D=>r.jsx("button",{type:"button",className:"lp2-q",style:{left:`${D.cx}px`},onClick:X=>{X.stopPropagation(),xe(W[D.no])},title:`第 ${D.no} 题 ${Fn(W[D.no])}`,children:D.no},`q-${D.no}`))]})]}),r.jsx("select",{className:"lp2-rate",value:U,onChange:D=>{const X=Number(D.target.value);V(X),u.current&&(u.current.playbackRate=X)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(D=>r.jsxs("option",{value:D,children:[D,"x"]},D))}),r.jsx("button",{type:"button",className:"lp2-trans",onClick:Ee,children:"听力原文"})]})}return r.jsxs("div",{className:"lp-wrap",children:[r.jsx("audio",{ref:u,src:b,preload:"metadata",onError:j}),r.jsxs("div",{className:"lp-head",children:[r.jsx("button",{type:"button",className:"lp-play",onClick:pe,"aria-label":R?"暂停":"播放",children:R?"❚❚":"▶"}),r.jsx("span",{className:"lp-title",children:f}),r.jsxs("span",{className:"lp-time",children:[Fn(w)," / ",Fn(F)]}),r.jsx("select",{className:"lp-rate",value:U,onChange:M=>{const se=Number(M.target.value);V(se),u.current&&(u.current.playbackRate=se)},"aria-label":"播放速度",children:[.75,1,1.25,1.5,2].map(M=>r.jsxs("option",{value:M,children:[M,"x"]},M))})]}),r.jsx("div",{className:"lp-segs",children:oe.map((M,se)=>{const de=w>=M.end,Le=w>=M.start&&w<M.end;return r.jsxs("button",{type:"button",className:`lp-seg${de?" is-done":""}${Le?" is-active":""}`,style:{flexGrow:Math.max(.5,M.dur)},onClick:()=>xe(M.start),title:`${ne(se)} ${Fn(M.start)} - ${Fn(M.end)}`,"aria-label":`跳转到${ne(se)}`,children:[r.jsx("span",{className:"lp-seg-bar"}),r.jsx("span",{className:"lp-seg-name",children:ne(se)}),r.jsx("span",{className:"lp-seg-time",children:Fn(M.start)})]},`${M.start}-${se}`)})}),r.jsx("input",{className:"lp-scrub",type:"range",min:0,max:F||1,step:.1,value:Math.min(w,F||0),onChange:M=>xe(Number(M.target.value)),"aria-label":"播放进度"})]})};function V2(o){if(typeof DOMParser>"u")return o;const f=new DOMParser().parseFromString(o,"text/html");return f.querySelectorAll("script, style, iframe, object, embed, link, meta, base").forEach(u=>u.remove()),f.querySelectorAll("*").forEach(u=>{Array.from(u.attributes).forEach(s=>{const p=s.name.toLowerCase(),S=s.value.trim().toLowerCase();p.startsWith("on")&&u.removeAttribute(s.name),(p==="href"||p==="src")&&S.startsWith("javascript:")&&u.removeAttribute(s.name)})}),f.body.innerHTML}const qp="background-color: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;",Z2="background-color: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 1.5rem 0;",Q2="background: repeating-linear-gradient(to bottom, transparent, transparent 33px, #d0d7de 33px, #d0d7de 34px); padding: 1rem 1.25rem; border: 1px solid #d0d7de; border-radius: 8px; margin: 1rem 0 1.5rem;",K2=(o,f)=>`<div class="question"><p><strong>${o}.</strong> ${f}</p></div>`,J2=o=>`<div class="question"><p><strong>${o}.</strong></p><div class="options">`+["A","B","C","D"].map(f=>`<div class="option"><strong>${f})</strong> （待补入选项）</div>`).join("")+"</div></div>",wl=(o,f)=>Array.from({length:f-o+1},(u,s)=>J2(o+s)).join(""),Sl=(o,f,u)=>`<p><strong>Questions ${o} to ${f} are based on the ${u} you have just heard.</strong></p>`,Hp=o=>`<div style="${Q2}">`+Array.from({length:o},()=>"<p>&nbsp;</p>").join("")+"</div>",Ls={"cet6-2025-12-1":"Living in an increasingly competitive world, college students should better prepare themselves to confront various challenges.","cet6-2025-12-2":"While striving for the Chinese Dream, young people enjoy more opportunities to realize their self-worth.","cet6-2025-12-3":"It is believed that teachers can exert a profound influence on their students' academic pursuit and personal development.","cet6-2025-06-1":"As social media is used more and more extensively, there is a growing awareness of the importance of using it properly and responsibly.","cet6-2025-06-2":"As requirements for job applications are getting increasingly higher, college students ought to be better prepared for their future career.","cet6-2025-06-3":"With the increasing application of AI technology, there is a growing concern that it may negatively impact human creativity."},F2=o=>{if(!o)return;if(Ls[o])return Ls[o];const f=o.match(/^(cet\d)-(\d{4})-(\d{2})-set(\d)$/);return f?Ls[`${f[1]}-${f[2]}-${f[3]}-${f[4]}`]:void 0},W2=(o,f=["150","200"])=>{const u="&emsp;&emsp;",s=w=>`<em>${w}</em>`,[p,S]=f,b=o?`For this part, you are allowed 30 minutes to write an essay that begins with the sentence &ldquo;<strong>${o}</strong>&rdquo; You can make comments, cite examples or use your personal experiences to develop your essay. You should write at least <u>${p}</u> words but no more than <u>${S}</u> words.`:`For this part, you are allowed 30 minutes to write an essay. You should write at least <u>${p}</u> words but no more than <u>${S}</u> words.`,j=o?`${u}<u><strong>You should copy the sentence given in quotes at the beginning of your essay.</strong></u>`:"";return'<p class="pd-write-dir"><strong>Directions:</strong>'+s(b)+(j?`<br>
${s(j)}`:"")+"</p>"},kl={convA:"In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convB:"In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",convC:"In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A, B, C and D. Then mark the corresponding letter on <strong>Answer Sheet 1</strong> with a single line through the centre.",banked:"In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on <strong>Answer Sheet 2</strong> with a single line through the centre. You may not use any of the words in the bank more than once.",matching:"In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on <strong>Answer Sheet 2</strong>.",careful:"There are 2 passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A, B, C and D. You should decide on the best choice and mark the corresponding letter on <strong>Answer Sheet 2</strong> with a single line through the centre.",translation:"For this part, you are allowed 30 minutes to translate a passage from Chinese into English. You should write your answer on <strong>Answer Sheet 2</strong>."},jl=o=>`<p class="pd-dir"><strong>Directions:</strong><em>${o}</em></p>`,I2=o=>{const u=Math.floor(10/o),s=10%o,p=[];let S=26;for(let b=0;b<o;b++){const j=u+(b<s?1:0);p.push([S,S+j-1]),S+=j}return p},P2=(o,f,u)=>{const s=Array.from({length:f-o+1},(p,S)=>`<span class="blank" data-blank="${o+S}">${o+S}</span>`);return`<p class="pd-passage">Paragraph ${u} — to be imported, with `+s.join(" , ")+" in the passage.</p>"},Up="ABCDEFGHIJKLMNOPQRSTUVWXYZ",em=o=>Array.from({length:Math.min(Math.max(o,1),Up.length)},(f,u)=>`<p><strong>${Up[u]}.</strong> （待导入段落文本）</p>`).join(""),tr=(o,f)=>`<div class="question"><p><strong>${o}.</strong> ${f}</p><div class="options">`+["A","B","C","D"].map(u=>`<div class="option"><strong>${u})</strong> （待补入选项）</div>`).join("")+"</div></div>",tm=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"],nm=o=>tm[o]??`No.${o+1}`,am=o=>{const f=Math.min(Math.max(o||2,1),10),u=[];for(let s=0;s<f;s++){const p=46+s*5,S=p+4;u.push(`<p><strong>Passage ${nm(s)}</strong></p>`,`<p><strong>Questions ${p} to ${S} are based on the following passage.</strong></p>`,'<p class="pd-passage">（文章待导入）</p>',tr(String(p),"What is the main idea of the passage?"),tr(String(p+1),"According to Paragraph 1, what can be inferred?"),tr(String(p+2),"What does the author think of the practice?"),tr(String(p+3),"Why does the writer mention the case mentioned?"),tr(String(S),"What would the author most probably suggest?"))}return u.join("")},lm=o=>{const f=o.writing||"（待补入写作主题）",u=o.translation||"（待补入翻译段落）",s=o.readingFocus??[],p=o.matchParas??8,S=o.bankedGroups??2,b=o.carefulPassages??2;return["<h2>Part I Writing (30 minutes)</h2>",W2(F2(o.paperId),o.type==="四级"?["120","180"]:["150","200"]),`<div style="${qp}"><h3 style="margin-top:0;">写作提示：</h3><ul style="padding-left:20px;"><li>主题：${f}</li>`+(s.length?s.slice(0,3).map(j=>`<li>${j}</li>`).join(""):"<li>立意与结构</li><li>论据与例证</li><li>语言与衔接</li>")+"</ul></div>",Hp(10),"<h2>Part II Listening Comprehension (25 minutes)</h2>",'<h3 class="pd-sec">Section A - Conversations</h3>',jl(kl.convA),Sl(1,4,"conversation"),wl(1,4),Sl(5,8,"conversation"),wl(5,8),'<h3 class="pd-sec">Section B - Passages</h3>',jl(kl.convB),Sl(9,11,"passage"),wl(9,11),Sl(12,15,"passage"),wl(12,15),'<h3 class="pd-sec">Section C - Lectures</h3>',jl(kl.convC),Sl(16,18,"recording"),wl(16,18),Sl(19,21,"recording"),wl(19,21),Sl(22,25,"recording"),wl(22,25),"<h2>Part III Reading Comprehension (40 minutes)</h2>",'<h3 class="pd-break-sec">Section A - Banked Cloze</h3>',jl(kl.banked),I2(S).map(([j,w],k)=>P2(j,w,k+1)).join(""),`<div style="${qp}"><h3 style="margin-top:0;">词库 Word Bank</h3><ul class="pd-wordbank">`+"ABCDEFGHIJKLMNO".split("").map(j=>`<li>${j}. ______</li>`).join("")+"</ul></div>",'<h3 class="pd-break-sec">Section B - Matching</h3>',jl(kl.matching),em(p),"<p><strong>Statement list:</strong></p>",...Array.from({length:10},(j,w)=>K2(String(36+w),"Which paragraph does the statement below refer to?")),'<h3 class="pd-break-sec">Section C - Careful Reading</h3>',jl(kl.careful),...am(b),"<h2>Part IV Translation (30 minutes)</h2>",jl(kl.translation),`<div style="${Z2}"><p style="line-height:1.8;"><strong>翻译原文（主题：${u}）：</strong></p><p style="line-height:1.8;">（原文待补入）</p></div>`,"<p><strong>译文作答区：</strong></p>",Hp(12)].join("")},l0=`<svg
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
  </svg>`,i0=`<svg
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
  </svg>`,im=`<svg
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
</svg>`,ar=({svg:o,cls:f,color:u})=>r.jsx("span",{className:f,"aria-hidden":"true",style:u?{color:u}:void 0,dangerouslySetInnerHTML:{__html:o}}),lt=1e3,Us=14,Xs=[{key:"Red",value:"#fb7081"},{key:"Orange",value:"#ff8c38"},{key:"Yellow",value:"#fcd34d"},{key:"Green",value:"#3cbc36"},{key:"Blue",value:"#84cfff"},{key:"Purple",value:"#6e52df"},{key:"Magenta",value:"#e96cab"},{key:"Grey",value:"#929292"},{key:"Black",value:"#000000"},{key:"White",value:"#ffffff"}],r0=[2,4,6,8,10,12],rm=[10,14,18,22,26,30],jo=(o,f)=>{const u=o.replace("#",""),s=u.length===3?u.split("").map(S=>S+S).join(""):u,p=parseInt(s,16);return`rgba(${p>>16&255}, ${p>>8&255}, ${p&255}, ${f})`},Al={pencil:{color:"#1e96eb",lineWidth:4},marker:{color:"#1e96eb",lineWidth:22},highlight:{color:"#fcd34d",lineWidth:0}},Co={color:"#929292",lineWidth:4,lineStyle:"curve"},yo={strokes:[],notes:[],grid:!1,penProps:Al,shapeProps:Co,eraserSize:Us},bo=()=>Math.random().toString(36).slice(2,9),om={pencil:2.2,marker:7,curve:2.6};function cm(o){const{pts:f}=o;if(!f.length)return"";if(o.tool==="curve"&&f.length>=2){const[u,s]=[f[0],f[f.length-1]],p=o.lineStyle??"curve";if(p==="straight")return`M ${u.x} ${u.y} L ${s.x} ${s.y}`;if(p==="orthogonal"){const U=(u.x+s.x)/2;return`M ${u.x} ${u.y} L ${U} ${u.y} L ${U} ${s.y} L ${s.x} ${s.y}`}const S=(u.x+s.x)/2,b=(u.y+s.y)/2,j=s.x-u.x,w=s.y-u.y,k=Math.hypot(j,w)||1,R=S-w/k*k*.18,N=b+j/k*k*.18;return`M ${u.x} ${u.y} Q ${R} ${N} ${s.x} ${s.y}`}return"M "+f.map(u=>`${u.x.toFixed(1)} ${u.y.toFixed(1)}`).join(" L ")}const Bp=o=>o==="pencil"||o==="marker"||o==="curve"||o==="highlight"||o==="underline",sm=({ann:o,tool:f,penProps:u,shapeProps:s,onAddStroke:p,onAppendPoint:S,onSnap:b,onEraseIds:j,onEraseLocal:w,eraserSize:k,onAddNote:R,onUpdateNote:N})=>{const U=h.useRef(!1),V=h.useRef(null),[Q,W]=h.useState(null),oe=h.useRef(15),[ae,F]=h.useState(null),[pe,xe]=h.useState(null),ke=h.useRef(null),he=h.useRef(null),be=h.useRef(null),Ee=h.useCallback(C=>{ke.current=C,xe(C)},[]),re=h.useCallback(C=>{F({x:C.clientX,y:C.clientY})},[]),fe=h.useCallback((C,D)=>{const X=C.getBoundingClientRect(),I=X.left+D.x/lt*X.width,m=X.top+D.y/lt*X.height,_=X.left+(D.x+D.w)/lt*X.width,K=X.top+(D.y+D.h)/lt*X.height,te=Math.min(I,_),me=Math.max(I,_),ee=Math.min(m,K),Ne=Math.max(m,K),Ke=[];for(const Ye of o.strokes)Ye.pts.some(ln=>{const st=X.left+ln.x/lt*X.width,jt=X.top+ln.y/lt*X.height;return st>=te&&st<=me&&jt>=ee&&jt<=Ne})&&Ke.push(Ye.id);const De=[],Ie=120/lt*X.width,Nt=30/lt*X.height;for(const Ye of o.notes){const ln=X.left+Ye.x/lt*X.width,st=X.top+Ye.y/lt*X.height;ln+Ie>=te&&ln<=me&&st+Nt>=ee&&st<=Ne&&De.push(Ye.id)}return{strokeIds:Ke,noteIds:De}},[o]),ne=h.useCallback((C,D,X)=>{const I=C.getBoundingClientRect(),m=I.left+D.x/lt*I.width,_=I.top+D.y/lt*I.height,K=[];let te=!1;for(const Ke of o.strokes){let De=[],Ie=!1;const Nt=()=>{De.length>=2&&K.push({...Ke,id:bo(),pts:De}),De=[]};for(const Ye of Ke.pts){const ln=I.left+Ye.x/lt*I.width,st=I.top+Ye.y/lt*I.height;Math.hypot(ln-m,st-_)<=X?(Ie=!0,Nt()):De.push(Ye)}Nt(),Ie&&(te=!0)}const me=[],ee=120/lt*I.width,Ne=30/lt*I.height;for(const Ke of o.notes){const De=I.left+Ke.x/lt*I.width,Ie=I.top+Ke.y/lt*I.height,Nt=Math.max(De,Math.min(m,De+ee)),Ye=Math.max(Ie,Math.min(_,Ie+Ne));Math.hypot(m-Nt,_-Ye)<=X&&me.push(Ke.id)}return me.length&&(te=!0),{strokes:K,noteIds:me,changed:te}},[o]),M=h.useCallback(C=>{const X=C.currentTarget.getBoundingClientRect();return{x:(C.clientX-X.left)/Math.max(1,X.width)*lt,y:(C.clientY-X.top)/Math.max(1,X.height)*lt}},[]),se=C=>{if(C.button!==0&&C.pointerType==="mouse")return;const D=M(C);if(f==="eraser"){U.current=!0;try{C.currentTarget.setPointerCapture(C.pointerId)}catch{}re(C);const I=ne(C.currentTarget,D,k);I.changed&&w(I.strokes,I.noteIds);return}if(f==="box"){U.current=!0,he.current=D,Ee({x:D.x,y:D.y,w:0,h:0}),re(C);try{C.currentTarget.setPointerCapture(C.pointerId)}catch{}return}if(f==="text"||f==="h1"||f==="link"){const I=f==="text"?"text":f==="h1"?"h1":"link";let m,_=I==="h1"?"批注标题":I==="text"?"批注内容":"链接文字";if(I==="link"){const K=window.prompt("请输入链接地址","https://");if(!K)return;m=K,_=m}R({id:bo(),kind:I,x:D.x,y:D.y,text:_,href:m});return}if(!Bp(f))return;U.current=!0;try{C.currentTarget.setPointerCapture(C.pointerId)}catch{}if(f==="curve"){const I=s;p({id:bo(),tool:"curve",pts:[D],color:I.color,width:I.lineWidth,lineStyle:I.lineStyle});return}if(f==="highlight"||f==="underline"){const I=C.currentTarget.closest(".pd-sheet");oe.current=I&&parseFloat(getComputedStyle(I).fontSize)||15,V.current={tool:f,norm:[D],client:[{x:C.clientX,y:C.clientY}]},W({tool:f,norm:[D]}),U.current=!0;try{C.currentTarget.setPointerCapture(C.pointerId)}catch{}return}const X=u[f];p({id:bo(),tool:f,pts:[D],color:f==="marker"?jo(X.color,.3):f==="highlight"?jo(X.color,.38):X.color,width:X.lineWidth})},de=C=>{if(f==="eraser"){if(re(C),!U.current)return;const X=M(C),I=ne(C.currentTarget,X,k);I.changed&&w(I.strokes,I.noteIds);return}if(f==="box"){if(re(C),!U.current||!he.current)return;const X=M(C),I=he.current;Ee({x:Math.min(I.x,X.x),y:Math.min(I.y,X.y),w:Math.abs(X.x-I.x),h:Math.abs(X.y-I.y)});return}if(!U.current)return;const D=M(C);if(V.current){V.current.norm.push(D),V.current.client.push({x:C.clientX,y:C.clientY}),W({tool:V.current.tool,norm:V.current.norm.slice()});return}S(D)},Le=()=>{if(U.current){if(U.current=!1,f==="box"&&he.current&&ke.current){const C=ke.current,D=be.current;if(D&&(C.w>4||C.h>4)){const{strokeIds:X,noteIds:I}=fe(D,C);(X.length||I.length)&&j(X,I)}he.current=null,Ee(null);return}if(V.current){const C=V.current;V.current=null,W(null),C.client.length>=2&&b(C.tool,C.client)}}},y=Bp(f)||f==="eraser"||f==="box"||f==="text"||f==="h1"||f==="link";return r.jsxs(r.Fragment,{children:[o.grid&&r.jsx("div",{className:"pd-grid-bg","aria-hidden":"true"}),r.jsxs("svg",{ref:be,className:"pd-anno-svg",viewBox:`0 0 ${lt} ${lt}`,preserveAspectRatio:"none",style:{pointerEvents:y?"auto":"none"},onPointerDown:se,onPointerMove:de,onPointerUp:Le,onPointerLeave:C=>{f==="eraser"&&F(null),Le()},onPointerCancel:Le,children:[o.strokes.map(C=>{if(C.tool==="highlight"){const D=C.pts.map(_=>_.x),X=C.pts.map(_=>_.y),I=Math.min(...D),m=Math.min(...X);return r.jsx("rect",{x:I,y:m,width:Math.max(...D)-I,height:Math.max(...X)-m,rx:"0.5",fill:C.color,style:{pointerEvents:"none"}},C.id)}if(C.tool==="underline"){const D=C.pts.map(I=>I.x),X=Math.max(...C.pts.map(I=>I.y));return r.jsx("line",{x1:Math.min(...D),y1:X,x2:Math.max(...D),y2:X,strokeWidth:2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke",style:{stroke:C.color,pointerEvents:"none"}},C.id)}return r.jsx("path",{d:cm(C),fill:"none",strokeWidth:C.width??om[C.tool],strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{stroke:C.color,pointerEvents:"none"}},C.id)}),Q&&(()=>{const C=Q.tool==="highlight",D=u.highlight.color,X=C?jo(D,.38):D,I=C?oe.current*1.05:2,m="M "+Q.norm.map(_=>`${_.x.toFixed(1)} ${_.y.toFixed(1)}`).join(" L ");return r.jsx("path",{d:m,fill:"none",stroke:X,strokeWidth:I,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}},"__temp__")})(),pe&&(pe.w>0||pe.h>0)&&r.jsx("rect",{x:pe.x,y:pe.y,width:pe.w,height:pe.h,fill:"rgba(47,107,255,.10)",stroke:"var(--affine-primary-color)",strokeWidth:1.5,strokeDasharray:"6 4",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}})]}),f==="eraser"&&ae&&r.jsx("div",{className:"pd-erase-cursor",style:{left:ae.x,top:ae.y,width:k*2,height:k*2}}),o.notes.map(C=>r.jsx(um,{note:C,onChange:D=>N(C.id,D)},C.id))]})},um=({note:o,onChange:f})=>{const u=h.useRef(null);h.useEffect(()=>{u.current&&document.activeElement!==u.current&&(u.current.textContent=o.text)},[o.text]);const s=o.kind==="h1"?"pd-note pd-note-h1":o.kind==="link"?"pd-note pd-note-link":"pd-note";return r.jsx("div",{className:s,style:{left:`${o.x/lt*100}%`,top:`${o.y/lt*100}%`,transform:"translate(-6px, -8px) rotate(-1.5deg)"},contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,ref:u,onBlur:()=>{var p;f({text:((p=u.current)==null?void 0:p.textContent)??""})},onKeyDown:p=>{p.stopPropagation(),p.key==="Escape"&&p.target.blur()},onPointerDown:p=>{p.stopPropagation()}})},Vs=({widths:o,value:f,onPick:u})=>{const s=o.length,p=Math.max(1,o.filter(w=>w<=f).length),S=100/s,b={left:`${S/2}%`,right:`${S/2}%`},j={left:`${S/2}%`,width:`${(p-1)*S}%`};return r.jsxs("div",{className:"pd-pm-widths",role:"slider","aria-valuenow":f,children:[r.jsx("span",{className:"pd-pm-line",style:b,"aria-hidden":"true"}),r.jsx("span",{className:"pd-pm-line-fill",style:j,"aria-hidden":"true"}),o.map((w,k)=>{const R=4+k*2;return r.jsx("button",{type:"button",className:`pd-pm-cell${w<=f?" sel":""}`,onClick:()=>u(w),"aria-label":`线宽 ${w}`,children:r.jsx("span",{className:"pd-pm-dot",style:{width:R,height:R}})},w)})]})},dm=({pen:o,penProps:f,onPen:u,onSetting:s})=>{const p=o==="pencil"?r0:rm,S=f[o];return r.jsxs("div",{className:"pd-pen-menu",onPointerDown:b=>b.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-pm-pen${o==="pencil"?" is-on":""}`,onClick:()=>u("pencil"),title:"画笔","aria-label":"画笔","aria-pressed":o==="pencil",children:r.jsx(ar,{svg:l0,cls:"pd-tb-illus",color:o==="pencil"?f.pencil.color:"var(--affine-primary-color)"})}),r.jsx("button",{type:"button",className:`pd-pm-pen${o==="marker"?" is-on":""}`,onClick:()=>u("marker"),title:"荧光笔","aria-label":"荧光笔","aria-pressed":o==="marker",children:r.jsx(ar,{svg:i0,cls:"pd-tb-illus",color:o==="marker"?f.marker.color:"var(--affine-primary-color)"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Vs,{widths:p,value:S.lineWidth,onPick:b=>s(o,{lineWidth:b})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Xs.map(b=>r.jsx("button",{type:"button",className:`pd-pm-cdot${S.color.toLowerCase()===b.value.toLowerCase()?" sel":""}`,style:{background:b.value,...b.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>s(o,{color:b.value}),"aria-label":b.key,title:b.key},b.key))})]})},fm=[{key:"curve",title:"曲线",Icon:O2},{key:"orthogonal",title:"直角",Icon:q2},{key:"straight",title:"直线",Icon:H2}],pm=({shapeProps:o,onSetting:f})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:u=>u.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[fm.map(({key:u,title:s,Icon:p})=>r.jsx("button",{type:"button",className:`pd-pm-shape${o.lineStyle===u?" is-on":""}`,onClick:()=>f({lineStyle:u}),title:s,"aria-label":s,"aria-pressed":o.lineStyle===u,children:r.jsx(p,{})},u)),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx(Vs,{widths:r0,value:o.lineWidth,onPick:u=>f({lineWidth:u})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx("div",{className:"pd-pm-colors",children:Xs.map(u=>r.jsx("button",{type:"button",className:`pd-pm-cdot${o.color.toLowerCase()===u.value.toLowerCase()?" sel":""}`,style:{background:u.value,...u.key==="White"?{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.12)"}:null},onClick:()=>f({color:u.value}),"aria-label":u.key,title:u.key},u.key))})]}),hm=()=>r.jsxs("span",{className:"pd-tb-note-stack","aria-hidden":"true",children:[r.jsx("span",{className:"pd-ns-paper pd-ns-p1",children:r.jsx(B2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p2",children:r.jsx(U2,{})}),r.jsx("span",{className:"pd-ns-paper pd-ns-p3",children:r.jsx($2,{})})]}),el=({icon:o,active:f,onClick:u,title:s})=>r.jsx("button",{type:"button",className:`pd-tb-btn${f?" is-active":""}`,onClick:u,title:s,"aria-label":s,"aria-pressed":f,children:o}),mm=({mode:o})=>{const f={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round"};return o==="word"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("text",{x:"12",y:"16.5",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"currentColor",stroke:"none",fontFamily:"serif",children:"A"}),r.jsx("path",{d:"M5 20.5h14",...f})]}):o==="sentence"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("path",{d:"M4 8h16M4 13h9",...f}),r.jsx("circle",{cx:"16.2",cy:"13",r:"1.4",fill:"currentColor"})]}):o==="paragraph"?r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:r.jsx("path",{d:"M4 6.5h16M4 11.5h16M4 16.5h9",...f})}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:[r.jsx("rect",{x:"5",y:"3.5",width:"14",height:"17",rx:"2",...f}),r.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5",...f})]})},gm=[{key:"word",title:"单词翻译"},{key:"sentence",title:"句子翻译"},{key:"paragraph",title:"整段翻译"},{key:"full",title:"全文翻译"}],xm=({mode:o,onMode:f})=>r.jsx("div",{className:"pd-pen-menu",onPointerDown:u=>u.stopPropagation(),children:gm.map(u=>r.jsxs("button",{type:"button",className:`pd-trans-btn${o===u.key?" is-on":""}`,onClick:()=>f(u.key),title:u.title,"aria-label":u.title,"aria-pressed":o===u.key,children:[r.jsx(mm,{mode:u.key}),r.jsx("span",{children:u.title})]},u.key))}),Bs=({mode:o,color:f})=>o==="highlight"?r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("rect",{x:"4.2",y:"4.6",width:"12.5",height:"7.2",rx:"2",transform:"rotate(-9 10.5 8)",fill:"currentColor"}),r.jsx("path",{d:"M4 17.2h16M4 20.4h10",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"})]}):r.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",style:{color:f},fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M7 3.5v7.5a5 5 0 0 0 10 0V3.5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"}),r.jsx("path",{d:"M4.5 20.5h15",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),ym=({mode:o,color:f,onMode:u,onColor:s})=>r.jsxs("div",{className:"pd-pen-menu",onPointerDown:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"pd-pm-pens",children:[r.jsx("button",{type:"button",className:`pd-hl-btn${o==="highlight"?" is-on":""}`,onClick:()=>u("highlight"),title:"高亮","aria-label":"高亮","aria-pressed":o==="highlight",children:r.jsx(Bs,{mode:"highlight",color:o==="highlight"?f:"currentColor"})}),r.jsx("button",{type:"button",className:`pd-hl-btn${o==="underline"?" is-on":""}`,onClick:()=>u("underline"),title:"下划线","aria-label":"下划线","aria-pressed":o==="underline",children:r.jsx(Bs,{mode:"underline",color:o==="underline"?f:"currentColor"})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"})]}),r.jsx("div",{className:"pd-pm-colors",children:Xs.filter(p=>p.key!=="White"&&p.key!=="Black").map(p=>r.jsx("button",{type:"button",className:`pd-pm-cdot${f.toLowerCase()===p.value.toLowerCase()?" sel":""}`,style:{background:p.value},onClick:()=>s(p.value),"aria-label":p.key,title:p.key},p.key))})]}),bm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 7L4 12l5 5"}),r.jsx("path",{d:"M4 12h11a5 5 0 0 1 0 10h-1"})]}),vm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M8 12V5.2a1.4 1.4 0 0 1 2.8 0V11"}),r.jsx("path",{d:"M10.8 10.6V4.4a1.4 1.4 0 0 1 2.8 0v6.2"}),r.jsx("path",{d:"M13.6 10.8V5.6a1.4 1.4 0 0 1 2.8 0V12"}),r.jsx("path",{d:"M16.4 11.2a1.4 1.4 0 0 1 2.8.3v2.9A7.2 7.2 0 0 1 12 21.4c-2.6 0-4.3-.9-5.6-3L4.5 15c-.7-1.1-.4-2.3.6-2.9.9-.5 2-.3 2.6.5l.9 1.2"})]}),wm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"4",y:"4.5",width:"16",height:"15",rx:"2",strokeDasharray:"3.2 2.6"}),r.jsx("path",{d:"M9.5 9.5l5 5M14.5 9.5l-5 5"})]}),Sm=()=>r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2.5",y:"4.5",width:"8.5",height:"15",rx:"1.2"}),r.jsx("rect",{x:"13",y:"4.5",width:"8.5",height:"15",rx:"1.2"})]}),km=({paper:o})=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:o?r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3.5h8.5L19 8v12.5H6z"}),r.jsx("path",{d:"M14 3.5V8h5"}),r.jsx("path",{d:"M9 12h7M9 15h7M9 18h4.5"})]}):r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"5",cy:"7",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"12",r:"1.1"}),r.jsx("circle",{cx:"5",cy:"17",r:"1.1"}),r.jsx("path",{d:"M9 7h10M9 12h10M9 17h10"})]})}),jm=({tool:o,onTool:f,penProps:u,onPenSetting:s,shapeProps:p,onShapeSetting:S,zoom:b,onZoom:j,onUndo:w,canUndo:k,eraserSize:R,onEraserSize:N,spread:U,onToggleSpread:V,examMode:Q,onToggleExamMode:W})=>{const[oe]=h.useState(!1),[ae,F]=h.useState(!1),[pe,xe]=h.useState(!1),[ke,he]=h.useState(!1),[be,Ee]=h.useState(!1),[re,fe]=h.useState(()=>localStorage.getItem("cet:hl:mode")==="underline"?"underline":"highlight"),[ne,M]=h.useState(!1),[se,de]=h.useState(!1),[Le,y]=h.useState(()=>{const ee=localStorage.getItem("cet:trans:mode");return ee==="sentence"||ee==="paragraph"||ee==="full"?ee:"word"}),[C,D]=h.useState(!1),X=ee=>{f(ee),he(ee==="pencil"||ee==="marker"),Ee(ee==="curve"),xe(ee==="eraser"),ee!=="highlight"&&ee!=="underline"&&M(!1),ee!=="select"&&D(!1)},I=ee=>{y(ee);try{localStorage.setItem("cet:trans:mode",ee)}catch{}},m=()=>{o==="highlight"||o==="underline"?M(ee=>!ee):(f(re),M(!0))},_=ee=>{fe(ee);try{localStorage.setItem("cet:hl:mode",ee)}catch{}f(ee)},K=ee=>{o===ee?he(Ne=>!Ne):X(ee)},te=()=>{o==="curve"?Ee(ee=>!ee):X("curve")},me=()=>{o==="eraser"?xe(ee=>!ee):(f("eraser"),xe(!0))};return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pd-float-bar","data-collapsed":oe?"true":"false","data-hidden":ae?"true":"false",children:[ke&&!oe&&(o==="pencil"||o==="marker")&&r.jsx(dm,{pen:o==="pencil"?"pencil":"marker",penProps:u,onPen:ee=>f(ee),onSetting:s}),be&&!oe&&o==="curve"&&r.jsx(pm,{shapeProps:p,onSetting:S}),C&&!oe&&o==="select"&&r.jsx(xm,{mode:Le,onMode:I}),ne&&!oe&&(o==="highlight"||o==="underline")&&r.jsx(ym,{mode:re,color:u.highlight.color,onMode:_,onColor:ee=>s("highlight",{color:ee})}),se&&!oe&&r.jsxs("div",{className:"pd-zoom-menu",onPointerDown:ee=>ee.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>j(b-.1),title:"缩小",children:"−"}),r.jsxs("span",{className:"pd-zoom-val",children:[Math.round(b*100),"%"]}),r.jsx("button",{type:"button",className:"pd-zoom-btn",onClick:()=>j(b+.1),title:"放大",children:"＋"}),r.jsx("button",{type:"button",className:"pd-zoom-btn pd-zoom-reset",onClick:()=>j(1),title:"重置为 100%",children:"重置"}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(U?" is-on":""),onClick:V,title:U?"切换为单页浏览":"双页浏览：左右并排显示试卷","aria-pressed":U,children:[r.jsx(Sm,{}),r.jsx("span",{children:"双页"})]}),r.jsxs("button",{type:"button",className:"pd-zoom-btn pd-zoom-spread"+(Q==="paper"?" is-on":""),onClick:W,title:Q==="paper"?"当前为模拟真实试卷预览（A4 连续密排、纯净只读），点击切换回按题预览":"当前为按题预览（每种题型一张纸、纸高随内容、可作答），点击切换为模拟真实试卷","aria-pressed":Q==="paper",children:[r.jsx(km,{paper:Q==="paper"}),r.jsx("span",{children:Q==="paper"?"试卷":"按题"})]})]}),pe&&!oe&&o==="eraser"&&r.jsxs("div",{className:"pd-pen-menu pd-erase-menu",onPointerDown:ee=>ee.stopPropagation(),children:[r.jsx("button",{type:"button",className:"pd-erase-delbtn",onClick:()=>{xe(!1),f("box")},title:"框选删除：拖拽矩形批量清除笔迹与批注","aria-label":"框选删除",children:r.jsx(wm,{})}),r.jsx("span",{className:"pd-tb-div","aria-hidden":"true"}),r.jsx(Vs,{widths:[8,14,22,32],value:R,onPick:N})]}),r.jsx(el,{icon:r.jsx(bm,{}),active:!1,onClick:w,title:"回缩上一笔 (Ctrl+Z)"}),r.jsxs("div",{className:"pd-tb-group",children:[r.jsx(el,{icon:r.jsx(vm,{}),active:se,onClick:()=>de(ee=>!ee),title:"缩放试卷（双指捏合 / Ctrl+滚轮）"}),r.jsx(el,{icon:r.jsx(Bs,{mode:re,color:u.highlight.color}),active:o==="highlight"||o==="underline",onClick:m,title:"高亮 / 下划线"}),r.jsx(el,{icon:r.jsx(Y2,{}),active:o==="curve",onClick:te,title:"形状 / 连接线 (C)"})]}),!oe&&r.jsxs("div",{className:"pd-tb-group pd-tb-senior",children:[r.jsx(el,{icon:r.jsx(hm,{}),active:o==="text",onClick:()=>X("text"),title:"批注便签 (T)"}),r.jsx(el,{icon:r.jsx(ar,{svg:l0,cls:"pd-tb-illus",color:o==="pencil"?u.pencil.color:"var(--affine-primary-color)"}),active:o==="pencil",onClick:()=>K("pencil"),title:"铅笔 (P)"}),r.jsx(el,{icon:r.jsx(ar,{svg:i0,cls:"pd-tb-illus",color:o==="marker"?u.marker.color:"var(--affine-primary-color)"}),active:o==="marker",onClick:()=>K("marker"),title:"马克笔 (M)"}),r.jsx(el,{icon:r.jsx(ar,{svg:im,cls:"pd-tb-illus pd-tb-illus-erase"}),active:o==="eraser",onClick:me,title:"橡皮擦 (E)：点击调整擦除大小与删除"})]}),!oe&&r.jsx("button",{type:"button",className:"pd-tb-arrow pd-tb-arrow-next",onClick:()=>F(!0),title:"隐藏工具栏","aria-label":"隐藏工具栏",children:r.jsx(Dp,{})})]}),ae&&r.jsx("button",{type:"button",className:"pd-bar-show",onClick:()=>F(!1),title:"显示工具栏","aria-label":"显示工具栏",children:r.jsx(Dp,{})})]})},Cm=o=>{const f=`cet:anno:${o}`,[u,s]=h.useState(yo),[p,S]=h.useState("select"),b=h.useRef(!1);h.useEffect(()=>{var re,fe,ne;try{const M=localStorage.getItem(f);if(M){const se=JSON.parse(M),de=(re=se.penProps)==null?void 0:re.marker;s({strokes:se.strokes??[],notes:se.notes??[],grid:se.grid??!1,penProps:{highlight:{...Al.highlight,...((fe=se.penProps)==null?void 0:fe.highlight)??{}},pencil:{...Al.pencil,...((ne=se.penProps)==null?void 0:ne.pencil)??{}},marker:{...Al.marker,...de??{},...(de==null?void 0:de.color)==="#fb7081"?{color:Al.marker.color}:{}}},shapeProps:{...Co,...se.shapeProps??{}},eraserSize:se.eraserSize??Us})}else s(yo)}catch{s(yo)}b.current=!0},[f]),h.useEffect(()=>{if(!b.current)return;const re=setTimeout(()=>{try{localStorage.setItem(f,JSON.stringify(u))}catch{}},400);return()=>clearTimeout(re)},[u,f]);const j=h.useRef(null),w=h.useCallback(re=>{j.current=re.id,s(fe=>({...fe,strokes:[...fe.strokes,re]}))},[]),k=h.useCallback(re=>{const fe=j.current;!fe||!re||s(ne=>({...ne,strokes:ne.strokes.map(M=>M.id===fe?{...M,pts:[...M.pts,re]}:M)}))},[]),R=h.useCallback(re=>{s(fe=>({...fe,notes:[re]}))},[]),N=h.useCallback((re,fe)=>{s(ne=>({...ne,notes:ne.notes.map(M=>M.id===re?{...M,...fe}:M)}))},[]),U=h.useCallback((re,fe)=>{s(ne=>{const M=new Set(re),se=new Set(fe);return{...ne,strokes:M.size?ne.strokes.filter(de=>!M.has(de.id)):ne.strokes,notes:se.size?ne.notes.filter(de=>!se.has(de.id)):ne.notes}})},[]),V=h.useCallback((re,fe)=>{s(ne=>{const M=new Set(fe);return{...ne,strokes:re,notes:M.size?ne.notes.filter(se=>!M.has(se.id)):ne.notes}})},[]),Q=h.useCallback(re=>{s(fe=>({...fe,strokes:fe.strokes.map(ne=>({...ne,pts:ne.pts.map(re)})),notes:fe.notes.map(ne=>{const M=re({x:ne.x,y:ne.y});return{...ne,x:M.x,y:M.y}})}))},[]),W=h.useRef(u);W.current=u;const oe=h.useCallback(re=>{const fe=[],ne=M=>{const se=re(M);fe.push({...se,orig:M})};return W.current.strokes.forEach(M=>M.pts.forEach(ne)),W.current.notes.forEach(M=>ne({x:M.x,y:M.y})),fe},[]),ae=h.useCallback((re,fe)=>{if(!re.length)return;const ne={el:null,dx:0,dy:0,orig:{x:0,y:0}};s(M=>{let se=0;const de=()=>re[se++]??ne;return{...M,strokes:M.strokes.map(Le=>({...Le,pts:Le.pts.map(()=>fe(de()))})),notes:M.notes.map(Le=>{const y=fe(de());return{...Le,x:y.x,y:y.y}})}})},[]),F=h.useCallback(re=>{s(fe=>({...fe,eraserSize:Math.max(4,Math.min(60,Math.round(re)))}))},[]),pe=h.useCallback(re=>{s(fe=>({...fe,grid:re}))},[]),xe=h.useCallback((re,fe)=>{s(ne=>{const M=ne.penProps??Al;return{...ne,penProps:{...M,[re]:{...M[re],...fe}}}})},[]),ke=h.useCallback(re=>{s(fe=>({...fe,shapeProps:{...fe.shapeProps??Co,...re}}))},[]),he=h.useCallback(()=>{s(re=>re.notes.length?{...re,notes:re.notes.slice(0,-1)}:re.strokes.length?{...re,strokes:re.strokes.slice(0,-1)}:re)},[]),be=h.useCallback(()=>s(yo),[]),Ee=h.useMemo(()=>({v:"select",g:"select",c:"curve",k:"link",p:"pencil",t:"text",h:"h1",m:"marker",e:"eraser"}),[]);return h.useEffect(()=>{const re=fe=>{const ne=fe.target;if(ne&&(ne.isContentEditable||/input|textarea/i.test(ne.tagName)))return;if((fe.ctrlKey||fe.metaKey)&&fe.key.toLowerCase()==="z"){fe.preventDefault(),he();return}if(fe.ctrlKey||fe.metaKey||fe.altKey)return;const M=Ee[fe.key.toLowerCase()];if(M){if(M==="select"&&fe.key.toLowerCase()==="g"){s(se=>({...se,grid:!se.grid}));return}S(M)}};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[Ee,he]),{ann:u,tool:p,setTool:S,addStroke:w,appendPoint:k,addNote:R,updateNote:N,eraseIds:U,eraseLocal:V,mapAnnotations:Q,captureAnchors:oe,applyAnchors:ae,eraserSize:u.eraserSize??Us,setEraserSize:F,setGrid:pe,setPenSetting:xe,setShapeSetting:ke,undo:he,clear:be,penProps:u.penProps??Al,shapeProps:u.shapeProps??Co,canUndo:u.strokes.length>0||u.notes.length>0}},Yp=o=>{let u=(o.closest(".qblock")||o).previousElementSibling;for(;u;){const s=(u.textContent||"").trim();if(/^Questions\s+\d+/i.test(s))return s;u=u.previousElementSibling}return""},Am=(o,f)=>{var s;document.querySelectorAll(".pd-horn-tip").forEach(p=>p.remove());const u=document.createElement("span");u.className="pd-horn-tip",u.textContent=f,(s=o.parentElement)==null||s.appendChild(u),window.setTimeout(()=>u.remove(),1600)},vo=o=>{const f=Array.from(o.querySelectorAll("h2, h3, .question, .blank, .pd-blank")).sort((b,j)=>b.compareDocumentPosition(j)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);let u="";const s={},p=[],S=[];for(const b of f){if(b.tagName==="H2"||b.tagName==="H3"){const j=(b.textContent||"").trim();/Banked|选词/i.test(j)?u="banked":/Matching|长篇/i.test(j)?u="matching":/Part II|Listening|听力|Conversations|Passages|Lectures/i.test(j)?u="listening":/Careful|Reading Comprehension|阅读理解/i.test(j)?u="careful":/Translation|翻译/i.test(j)?u="translation":/Writing|写作/i.test(j)&&(u="writing");continue}if(b.classList.contains("question")){if(u!=="listening"&&u!=="matching"&&u!=="careful")continue;s[u]=(s[u]||0)+1;const j=u==="listening"?25:10;if(s[u]>j)continue;const k=(u==="listening"?1:u==="matching"?36:46)+s[u]-1,R=b.querySelector(".option")?"choice":"match";p.push({el:b,no:k,zone:u,kind:R});continue}if(u==="banked"){const j=Number(b.getAttribute("data-blank")||0)||26+S.length;S.push(j)}}return{list:p,blankNos:S}},Ds=(o,f,u)=>{const s=[];for(Array.from(o.querySelectorAll(":scope > .pd-page")).forEach(W=>{const oe=W.querySelector(":scope > .pd-page-body");if(oe)for(;oe.firstChild;)s.push(oe.removeChild(oe.firstChild));W.remove()});o.firstChild;)s.push(o.removeChild(o.firstChild));let p=s.find(W=>W instanceof HTMLElement&&W.classList.contains("pd-head"));if(!p){p=document.createElement("header"),p.className="pd-head";const W=document.createElement("div");W.className="pd-head-name",W.textContent=f,p.appendChild(W)}const S=[p,...s.filter(W=>W!==p)],b=W=>{const oe=document.createElement("div");return oe.className="pd-page-foot",oe.innerHTML=`<span>${W}</span>`,oe};let j=null;const w=()=>{const W=document.createElement("div");return W.className="pd-page",j=document.createElement("div"),j.className="pd-page-body",W.appendChild(j),o.appendChild(W),W},k=[];let R=w();k.push(R);const N=W=>{j.appendChild(W)},U="h2.pd-part, h3.pd-break-sec",V=W=>W instanceof HTMLElement&&(W.matches(U)||!!W.querySelector(U));if(u==="question"){const W=()=>Array.from(j.children).every(ae=>ae.matches(U));let oe=!1;for(const ae of S)V(ae)&&(oe&&!(W()&&j.children.length>0)&&(R=w(),k.push(R)),oe=!0),N(ae)}else{const W=ae=>{const F=[];for(;ae.firstChild;){const pe=ae.firstChild;ae.removeChild(pe),F.push(pe)}return F};let oe=0;for(;S.length&&oe++<2e4;){const ae=S.shift();if(N(ae),!(ae instanceof HTMLElement)||j.scrollHeight<=j.clientHeight+4)continue;if(Array.from(ae.children).length>1&&!/^(TABLE|UL|OL|PRE|BLOCKQUOTE)$/.test(ae.tagName)&&!ae.classList.contains("question")&&!ae.classList.contains("word-bank")&&!ae.classList.contains("options")&&!ae.classList.contains("pd-head")){const xe=W(ae);ae.remove(),S.unshift(...xe);continue}R=w(),k.push(R),N(ae)}}const Q=k.filter(W=>{var oe;return(((oe=W.querySelector(".pd-page-body"))==null?void 0:oe.childNodes.length)??0)>0});k.forEach(W=>{Q.includes(W)||W.remove()}),Q.forEach((W,oe)=>W.appendChild(b(oe+1)))},_m=(o,f)=>{var N;const u=document,s=(N=u.caretRangeFromPoint)==null?void 0:N.call(u,o,f),p=s==null?void 0:s.startContainer,S=(p==null?void 0:p.textContent)||"",b=(s==null?void 0:s.startOffset)??0,j=U=>/[A-Za-z'-]/.test(U);let w=b;for(;w>0&&w<=S.length&&j(S[w-1]);)w--;let k=b;for(;k<S.length&&j(S[k]);)k++;const R={text:S.slice(w,k),range:null};if(p&&p.nodeType===3&&k>w){const U=document.createRange();U.setStart(p,w),U.setEnd(p,k),R.range=U}return R},Em=(o,f)=>{var R;const u=document,s=(R=u.caretRangeFromPoint)==null?void 0:R.call(u,o,f),p=s==null?void 0:s.startContainer,S=(p==null?void 0:p.textContent)||"",b=(s==null?void 0:s.startOffset)??0;let j=b;for(;j>0&&!/[.!?]\s["')\]]/.test(S.slice(Math.max(0,j-2),j));)j--;let w=b;for(;w<S.length&&!/[.!?]/.test(S[w]);)w++;for(w=Math.min(S.length,w+1);j<w&&/\s/.test(S[j]);)j++;for(;w>j&&/\s/.test(S[w-1]);)w--;const k={text:S.slice(j,w).trim(),range:null};if(p&&p.nodeType===3&&w>j){const N=document.createRange();N.setStart(p,j),N.setEnd(p,w),k.range=N}return k},wo=(o,f)=>{const u=o.querySelector(".pd-qnum");if(!u)return;const s=u.parentElement;if(!s)return;let p=s.querySelector(".pd-ans-letter");f?(p||(p=document.createElement("span"),p.className="pd-ans-letter",s.insertBefore(p,u)),p.textContent=f):p&&p.remove()},$p=new Map,Gp=async o=>{var b;const f=o.toLowerCase(),u=$p.get(f);if(u)return u;const p=await(await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(o)}&langpair=en|zh-CN`)).json(),S=String(((b=p==null?void 0:p.responseData)==null?void 0:b.translatedText)||"");return S&&!/MYMEMORY WARNING/i.test(S)&&$p.set(f,S),S||"翻译服务暂不可用"},zm=async o=>{if(o.length<=450)return Gp(o);const f=[];let u="";for(const p of o.split(new RegExp("(?<=[.!?。！？]\\s)")))(u+p).length>420&&u?(f.push(u),u=p):u+=p;u&&f.push(u);const s=[];for(const p of f.slice(0,40))try{s.push(await Gp(p))}catch{s.push("")}return s.join(" ")},Xp=({x:o,y:f,children:u})=>{const s=h.useRef(null);return h.useLayoutEffect(()=>{const p=s.current;if(!p)return;const S=()=>{const V=p.offsetHeight,Q=p.offsetWidth/2+8,W=Math.min(Math.max(o,Q),window.innerWidth-Q);p.style.left=`${W}px`,p.style.top=`${f}px`,f-V-14>=8?(p.style.transform="translate(-50%, calc(-100% - 14px))",p.style.maxHeight=`${window.innerHeight-40}px`):(p.style.transform="translate(-50%, 14px)",p.style.maxHeight=`${Math.max(240,window.innerHeight-f-30)}px`)},b=performance.now();let j=0,w=0,k="",R=!1;const N=()=>{R||(R=!0,p.dataset.ready="true")},U=()=>{S();const V=`${p.offsetHeight}|${p.offsetWidth}|${p.style.transform}`;w=V===k?w+1:0,k=V,!R&&(w>=2||performance.now()-b>800)&&N(),w<10&&performance.now()-b<3e3&&(j=requestAnimationFrame(U))};return U(),()=>cancelAnimationFrame(j)},[o,f]),r.jsx("div",{ref:s,className:"pd-picker",children:u})},Vp=o=>o?Array.from(o.querySelectorAll(".word-bank li, .word-bank span, ul li")).map(f=>{var u,s,p;return((s=(u=f.parentElement)==null?void 0:u.textContent)==null?void 0:s.trim())||((p=f.textContent)==null?void 0:p.trim())||""}).filter(f=>/^[A-O][\.、]/.test(f)).flatMap(f=>f.match(/[A-O][\.、]\s*[a-z]+/g)||[]).filter((f,u,s)=>s.indexOf(f)===u):[],Nm=[{name:"听力",start:1,count:25},{name:"选词填空",start:26,count:10},{name:"长篇阅读",start:36,count:10},{name:"阅读理解",start:46,count:10},{name:"翻译（汉译英）",start:56,count:1},{name:"写作",start:57,count:1}];function Mm(o,f){if(o.pdf&&typeof o.pdf=="string")return o.pdf;const u=o.id||"";if(f==="cet4"){const s=u.match(/^cet4-(20\d{2})-(\d{2})-set(\d)$/i);if(s)return`./assets/papers/cet4/${s[1]}-${s[2]}-S${s[3]}.pdf`}else{const s=u.match(/^cet6-(20\d{2})-(\d{1,2})-set(\d)$/i);if(s)return`./assets/cet6-pdf/CET-6 ${s[1]}.${s[2].padStart(2,"0")} 第${s[3]}套.pdf`}return null}const Tm=({paper:o,type:f,onBack:u})=>{const[s,p]=h.useState(null),[S,b]=h.useState(!0),[j,w]=h.useState(null),[k,R]=h.useState(!0);h.useEffect(()=>{let x=!1;p(null),b(!0),w(null),R(!0);const O="./",le=String(o.id).replace(/[^\w.-]/g,"_");return fetch(`${O}contents/${le}.json`).then(ce=>ce.ok?ce.json():null).then(ce=>{x||(p(ce??null),b(!1))}).catch(()=>{x||(p(null),b(!1))}),fetch(`${O}listening/${le}.json`).then(ce=>ce.ok?ce.json():null).then(ce=>{x||(w(ce??null),R(!1))}).catch(()=>{x||(w(null),R(!1))}),()=>{x=!0}},[o.id]);const N=h.useMemo(()=>{var ce,P;if(s)return s;if(S)return null;const x=o.keyPoints,O=o.year??new Date().getFullYear(),le=Number(o.month??"06");return{title:o.title,date:`${O}年${le}月`,type:f==="cet4"?"四级真题":"六级真题",html:lm({title:o.title,type:f==="cet4"?"四级":"六级",writing:(ce=x==null?void 0:x.writing)==null?void 0:ce[0],translation:(P=x==null?void 0:x.translation)==null?void 0:P[0],readingFocus:x==null?void 0:x.reading,paperId:o.id})}},[s,S,o,f]),[U,V]=h.useState(0),[Q,W]=h.useState(!1),[oe,ae]=h.useState(null),F=h.useRef(null),pe=h.useRef(void 0),[xe,ke]=h.useState(()=>{try{return localStorage.getItem("cet:exam-mode")==="paper"?"paper":"question"}catch{return"question"}}),he=h.useRef(xe);he.current=xe;const be=h.useCallback(()=>{ke(x=>{const O=x==="paper"?"question":"paper";try{localStorage.setItem("cet:exam-mode",O)}catch{}return O})},[]),Ee=h.useRef(null),[re,fe]=h.useState(()=>{const x=parseFloat(localStorage.getItem("cet:zoom")||"1");return Number.isFinite(x)?Math.min(3,Math.max(.5,x)):1}),ne=h.useRef(re),M=h.useCallback(x=>{const O=Math.min(3,Math.max(.5,Math.round(x*100)/100));ne.current=O,fe(O);try{localStorage.setItem("cet:zoom",String(O))}catch{}},[]),[se,de]=h.useState(!1),Le=h.useCallback(()=>{const x=Ee.current;if(!x)return null;const O=x.getBoundingClientRect();return!O.width||!O.height?null:Array.from(x.querySelectorAll(".exam-content-root > .pd-page")).map(le=>{const ce=le.getBoundingClientRect();return{x:(ce.left-O.left)/O.width,y:(ce.top-O.top)/O.height,w:ce.width/O.width,h:ce.height/O.height}})},[]),y=h.useRef(null),C=h.useCallback(x=>{y.current=Le(),de(x);try{localStorage.setItem("cet:spread",x?"1":"0")}catch{}},[Le]),D=h.useCallback(()=>C(!se),[C,se]);h.useEffect(()=>{const x=new Map;let O=null;const le=()=>{const[H,$]=[...x.values()];return Math.hypot(H.x-$.x,H.y-$.y)||1},ce=H=>{const $=Ee.current;return!!$&&H.target instanceof Node&&$.contains(H.target)},P=H=>{H.pointerType==="mouse"||!ce(H)||(x.set(H.pointerId,{x:H.clientX,y:H.clientY}),x.size===2&&(O={startDist:le(),startZoom:ne.current}))},ue=H=>{!x.has(H.pointerId)||!O||(x.set(H.pointerId,{x:H.clientX,y:H.clientY}),x.size===2&&M(O.startZoom*(le()/O.startDist)))},T=H=>{x.delete(H.pointerId),x.size<2&&(O=null)},B=H=>{!H.ctrlKey||!ce(H)||(H.preventDefault(),M(ne.current*Math.exp(-H.deltaY*.002)))};return window.addEventListener("pointerdown",P,!0),window.addEventListener("pointermove",ue,{capture:!0}),window.addEventListener("pointerup",T,!0),window.addEventListener("pointercancel",T,!0),window.addEventListener("wheel",B,{passive:!1,capture:!0}),()=>{window.removeEventListener("pointerdown",P,!0),window.removeEventListener("pointermove",ue,!0),window.removeEventListener("pointerup",T,!0),window.removeEventListener("pointercancel",T,!0),window.removeEventListener("wheel",B,!0)}},[M]);const X=Mm(o,f),I=o.pdfAnswer||null,m=o.audio||null,[_,K]=h.useState([]),[te,me]=h.useState(!1),[ee,Ne]=h.useState("answer"),[Ke,De]=h.useState(0),[Ie,Nt]=h.useState(null),[Ye,ln]=h.useState({}),[st,jt]=h.useState({}),[Mt,ra]=h.useState({key:!1,mine:!1,cmp:!1}),[It,Pt]=h.useState({}),[un,Tt]=h.useState(!0),[Ut,rn]=h.useState(!1),[St,on]=h.useState({}),[Lt,cn]=h.useState(null),[_t,Wn]=h.useState(null),[Ca,Gt]=h.useState(null),Aa=x=>{const O=[];for(const le of Array.from(x.getClientRects()))le.width<1||le.height<1||O.push({x:le.left,y:le.top,w:le.width,h:le.height});return O};h.useEffect(()=>{if(!_t||_t.result!==null)return;let x=!0;return zm(_t.text).then(O=>{x&&Wn(le=>le&&le.text===_t.text?{...le,result:O}:le)}).catch(()=>{x&&Wn(O=>O&&{...O,result:"翻译服务暂不可用"})}),()=>{x=!1}},[_t]);const Gn=te?"panel":"popup",Me=h.useRef("popup");h.useEffect(()=>{Me.current=Gn},[Gn]);const[Pe,vt]=h.useState(null),[tl,en]=h.useState(""),[nl,Bt]=h.useState(!1),[Xn,dn]=h.useState("up"),[tn,Vn]=h.useState(!1),[Mn,El]=h.useState("up"),[al,oa]=h.useState(0),[Sn,ll]=h.useState(!0),[zl,_a]=h.useState(!1),[fn,Ea]=h.useState(null),za=130;h.useEffect(()=>{if(!tn)return;const x=window.setInterval(()=>oa(O=>O+1),1e3);return()=>window.clearInterval(x)},[tn]);const Na=x=>{const O=Math.floor(x/60),le=x%60;return`${String(O).padStart(2,"0")}:${String(le).padStart(2,"0")}`},Nl=zl?"--:--":Na(Mn==="up"?al:Math.max(0,za*60-al)),Tn=()=>{tn?ll(x=>!x):Bt(!0)},kt=h.useRef(null),Y=x=>{kt.current={px:x.clientX,py:x.clientY,ox:(fn==null?void 0:fn.x)??0,oy:(fn==null?void 0:fn.y)??0},x.currentTarget.setPointerCapture(x.pointerId)},ye=x=>{const O=kt.current;O&&Ea({x:O.ox+x.clientX-O.px,y:O.oy+x.clientY-O.py})},Se=()=>{kt.current=null},Ae=x=>{try{en(localStorage.getItem(x.storeKey)||"")}catch{en("")}vt(x)},Be=()=>{if(Pe){try{localStorage.setItem(Pe.storeKey,tl)}catch{}vt(null)}},{ann:He,tool:ut,setTool:xt,addStroke:Zt,appendPoint:Yt,addNote:nn,updateNote:Xt,eraseIds:rt,eraseLocal:Ma,mapAnnotations:Zn,captureAnchors:In,applyAnchors:ca,eraserSize:ir,setEraserSize:rr,undo:or,setPenSetting:Ao,setShapeSetting:Ml,penProps:Pn,shapeProps:Ln,canUndo:pn}=Cm(o.id);h.useLayoutEffect(()=>{const x=y.current;y.current=null;const O=Le();if(!(x!=null&&x.length)||!(O!=null&&O.length)||x.length!==O.length)return;const le=(ce,P,ue)=>{let T=-1;for(let $=0;$<ce.length;$++){const ie=ce[$];if(P>=ie.x&&P<=ie.x+ie.w&&ue>=ie.y&&ue<=ie.y+ie.h){T=$;break}}if(T>=0)return T;let B=0,H=1/0;return ce.forEach(($,ie)=>{const ve=$.x+$.w/2,$e=$.y+$.h/2,Ge=(ve-P)**2+($e-ue)**2;Ge<H&&(H=Ge,B=ie)}),B};Zn(ce=>{const P=ce.x/lt,ue=ce.y/lt,T=le(x,P,ue),B=x[T],H=O[T],$=B.w?(P-B.x)/B.w:0,ie=B.h?(ue-B.y)/B.h:0;return{x:(H.x+$*H.w)*lt,y:(H.y+ie*H.h)*lt}})},[se,Le,Zn]);const ui=h.useRef(xe),cr=h.useRef(o.id);h.useLayoutEffect(()=>{var H;const x=ui.current!==xe,O=cr.current!==o.id;if(ui.current=xe,cr.current=o.id,!x||O)return;const le=F.current;if(!le||!N)return;const ce=(H=Ee.current)==null?void 0:H.querySelector(".pd-anno-svg");if(!ce){Ds(le,N.title,xe);return}const P=$=>{const ie=ce.getBoundingClientRect();return{x:ie.left+$.x/lt*ie.width,y:ie.top+$.y/lt*ie.height}},ue=($,ie)=>{const ve=ce.getBoundingClientRect();return{x:($-ve.left)/ve.width*lt,y:(ie-ve.top)/ve.height*lt}},T=".pd-page, .pd-page-body, .pd-page-foot, .pd-anno-svg, .pd-grid-bg",B=In($=>{const ie=P($);let ve=null;for(const Ge of document.elementsFromPoint(ie.x,ie.y))if(Ge!==ce&&!(Ge instanceof Element&&Ge.matches(T))&&le.contains(Ge)){ve=Ge;break}if(!ve){let Ge=null,ht=1/0;le.querySelectorAll("p, h2, h3, .option, .question, .blank, li, strong").forEach(Xe=>{const Ue=Xe.getBoundingClientRect(),Ve=Math.max(Ue.left-ie.x,0,ie.x-Ue.right),ze=Math.max(Ue.top-ie.y,0,ie.y-Ue.bottom),Re=Ve*Ve+ze*ze;Re<ht&&(ht=Re,Ge=Xe)}),ve=Ge}if(!ve)return{el:null,dx:0,dy:0};const $e=ve.getBoundingClientRect();return{el:ve,dx:ie.x-$e.left,dy:ie.y-$e.top}});Ds(le,N.title,xe),ca(B,$=>{if(!$.el||!$.el.isConnected)return $.orig;const ie=$.el.getBoundingClientRect();return ue(ie.left+$.dx,ie.top+$.dy)})},[xe,s,In,ca]),h.useEffect(()=>{ut!=="select"&&Gt(null)},[ut]);const Tl=h.useRef("select");h.useEffect(()=>{Tl.current=ut},[ut]);const di=h.useRef(Pn);h.useEffect(()=>{di.current=Pn},[Pn]);const Ll=h.useCallback((x,O)=>{var et;const le=F.current;if(!le||O.length<2)return;const ce=(le.closest(".pd-sheet")||le).querySelector(".pd-anno-svg");if(!ce)return;const P=ce.getBoundingClientRect(),ue=P.width||1,T=P.height||1;let B=1/0,H=-1/0,$=1/0,ie=-1/0;for(const Ce of O)Ce.x<B&&(B=Ce.x),Ce.x>H&&(H=Ce.x),Ce.y<$&&($=Ce.y),Ce.y>ie&&(ie=Ce.y);const ve=di.current.highlight.color,$e=x==="highlight"?jo(ve,.38):ve,Ge=[],ht=document.createTreeWalker(le,NodeFilter.SHOW_TEXT);let Xe=ht.nextNode();for(;Xe;){if((Xe.textContent||"").trim()){let tt=Xe.parentElement;for(;tt&&tt!==le&&!tt.classList.contains("pd-page");)tt=tt.parentElement;if(tt){const Dn=parseFloat(getComputedStyle(Xe.parentElement).fontSize)||15,hn=document.createRange();hn.selectNodeContents(Xe);for(const mn of Array.from(hn.getClientRects()))mn.width<1||mn.height<1||Ge.push({left:mn.left,right:mn.right,top:mn.top,bottom:mn.bottom,fs:Dn});(et=hn.detach)==null||et.call(hn)}}Xe=ht.nextNode()}const Ue=8,Ve=[];for(const Ce of Ge){if(Ce.bottom<$||Ce.top>ie)continue;const tt=Math.max(Ce.left,B),Dn=Math.min(Ce.right,H);Dn-tt<Ue||Ve.push({x0:tt,x1:Dn,top:Ce.top,bottom:Ce.bottom,fs:Ce.fs})}if(!Ve.length)return;Ve.sort((Ce,tt)=>Ce.top-tt.top||Ce.x0-tt.x0);const ze=[];for(const Ce of Ve){const tt=ze[ze.length-1];tt&&Math.abs(tt.top-Ce.top)<=3&&Math.abs(tt.bottom-Ce.bottom)<=3?(tt.x0=Math.min(tt.x0,Ce.x0),tt.x1=Math.max(tt.x1,Ce.x1),tt.fs=Math.max(tt.fs,Ce.fs)):ze.push({...Ce})}const Re=ze.map((Ce,tt)=>{let Dn,hn;if(x==="highlight"){const mn=Math.min(Ce.bottom-Ce.top,Ce.fs*1.05);Dn=Ce.top+(Ce.bottom-Ce.top-mn)/2+Ce.fs*.08,hn=Dn+mn}else Dn=hn=Ce.bottom-Ce.fs*.12;return{id:`snap-${Date.now()}-${tt}-${Math.random().toString(36).slice(2,7)}`,tool:x,pts:[{x:(Ce.x0-P.left)/ue*1e3,y:(Dn-P.top)/T*1e3},{x:(Ce.x1-P.left)/ue*1e3,y:(hn-P.top)/T*1e3}],color:$e,width:0}});for(const Ce of Re)Zt(Ce)},[Zt]),sr=h.useRef(()=>{}),Qt=h.useCallback((x,O)=>{const le=Array.from(x.querySelectorAll(".option")),ce=le.indexOf(O);if(ce<0)return;le.forEach(T=>T.classList.remove("selected")),O.classList.add("selected");const P=String.fromCharCode(65+ce);x.setAttribute("data-ans",P),wo(x,P);const ue=F.current;if(ue){const T={};ue.querySelectorAll(".question").forEach((B,H)=>{const $=B.querySelector(".option.selected");$&&(T[H]=Array.from(B.querySelectorAll(".option")).indexOf($))});try{localStorage.setItem(`cet:answer:${o.id}`,JSON.stringify(T))}catch{}}sr.current()},[o.id]),fi=h.useRef(Qt);fi.current=Qt,h.useEffect(()=>{W(!1),ae(null),V(0)},[o.id]),h.useEffect(()=>{let x=0;const O=()=>{x=0;const ce=F.current;if(!ce)return;const P=Array.from(ce.querySelectorAll("h2")),ue=P.find(ie=>/Part II|Listening/i.test(ie.textContent||""));if(!ue){Tt(!0);return}const T=P.find(ie=>/Part III|Reading Comprehension/i.test(ie.textContent||"")),B=ue.getBoundingClientRect(),H=T?T.getBoundingClientRect():B,$=window.innerHeight;Tt(B.top<$-40&&H.bottom>40)},le=()=>{x||(x=requestAnimationFrame(O))};return window.addEventListener("scroll",le,!0),window.addEventListener("resize",le),O(),()=>{window.removeEventListener("scroll",le,!0),window.removeEventListener("resize",le),x&&cancelAnimationFrame(x)}},[s]),h.useEffect(()=>{const x=F.current;if(!x||!N)return;x.innerHTML=V2(N.html);{const T={};x.querySelectorAll(".question[data-answer]").forEach(B=>{var ie;const H=(((ie=B.querySelector("strong"))==null?void 0:ie.textContent)||"").match(/\d+/),$=B.getAttribute("data-answer");H&&$&&(T[Number(H[0])]=$)}),x.querySelectorAll(".blank[data-answer]").forEach(B=>{const H=Number(B.getAttribute("data-blank")),$=B.getAttribute("data-answer");H&&$&&(T[H]=$)}),Pt(T)}x.querySelectorAll("div").forEach(T=>{const B=T.getAttribute("style")||"";if(B.includes("linear-gradient")||B.includes("backdrop-filter"))if(T.querySelector("h2")){const H=T.cloneNode(!0);H.querySelectorAll("h2").forEach(ie=>ie.remove());const $=(H.textContent||"").replace(/•/g,"·").trim();if($){const ie=document.createElement("p");ie.className="pd-structure",ie.textContent=$,T.replaceWith(ie)}else T.remove()}else T.remove()}),x.querySelectorAll("h2, h3, h4").forEach(T=>{const B=T.textContent||"",H=B.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,"").trim();if(H!==B){const $=T.querySelector("strong");$&&$.childNodes.length===1?$.textContent=H:T.textContent=H}T.removeAttribute("style")}),x.querySelectorAll("p, li, ul, span, section").forEach(T=>{T.removeAttribute("style")}),x.querySelectorAll("i.fas, i.far, i.fab").forEach(T=>T.remove()),x.querySelectorAll(".question").forEach(T=>{var H,$;if((H=T.parentElement)!=null&&H.classList.contains("qblock"))return;const B=document.createElement("div");B.className="qblock",($=T.parentElement)==null||$.insertBefore(B,T),B.appendChild(T)}),x.querySelectorAll("p").forEach(T=>{const B=T.querySelector("strong");B&&/^Directions[:：]?\s*$/.test((B.textContent||"").trim())&&T.classList.add("pd-dir")});const O=T=>/writing/i.test(T)?[{label:"我的作文",kind:"essay"}]:/listening/i.test(T)?[{label:"播放听力",kind:"listen"}]:/translation/i.test(T)?[{label:"我的翻译",kind:"translation"},{label:"翻译范文",kind:"fanwen"}]:[];x.querySelectorAll("h2").forEach(T=>{const H=(T.textContent||"").trim().match(/^(Part\s+[IVX0-9]+)\s+(.+?)\s*\(([^)]+)\)\s*$/i);if(!H)return;const[,$,ie,ve]=H;T.classList.add("pd-part");const $e=O(ie.trim());T.innerHTML=`<span class="pd-part-no">${$}</span>`+($e.length?`<span class="pd-part-badges">${$e.map(Ge=>`<button type="button" class="pd-badge" data-kind="${Ge.kind}">${Ge.label}</button>`).join("")}</span>`:"")+`<span class="pd-part-name">${ie.trim()}</span><span class="pd-part-time">(${ve})</span>`});{let T="";x.querySelectorAll("h2, h3").forEach(B=>{const H=(B.textContent||"").trim();if(B.tagName==="H2"){T=H;return}/^\s*Section\s+[A-Z]/i.test(H)&&(B.classList.add("pd-sec"),/reading\s+comprehension/i.test(T)&&B.classList.add("pd-break-sec"))})}x.querySelectorAll("h2").forEach(T=>{if(!/Writing/i.test(T.textContent||""))return;let B=T.nextElementSibling;for(;B&&B.tagName!=="H2";){const H=B.nextElementSibling;if(B.tagName==="DIV"&&/写作提示/.test(B.textContent||""))B.remove();else if(B.tagName==="P"&&/Directions/i.test(B.textContent||"")){const $=B;let ie=$.innerHTML.replace(/[“"][^”"]*[”"]/g,$e=>`<strong>${$e}</strong>`).replace(/\b(150|200)\b(?=\s*words)/g,"<u>$1</u>");const ve=new RegExp("(?:^|(?<=[.!?]\\s))([^<>]+?[.!?])\\s*$").exec(ie);if(ve&&ve[1].trim().length>10){const $e=ve[1],Ge=ve.index+ve[0].indexOf($e);ie=ie.slice(0,Ge);const ht=document.createElement("p");ht.className="pd-indent",ht.innerHTML=$e,$.after(ht)}$.innerHTML=ie}B=H}}),x.querySelectorAll("h3").forEach(T=>{/词库|Word Bank/i.test(T.textContent||"")&&T.closest("div")&&T.remove()}),x.querySelectorAll("p").forEach(T=>{const B=T.querySelector("strong");if(!B||T.children.length!==1)return;const H=(T.textContent||"").trim();H===(B.textContent||"").trim()&&(!H||H.length>80||/^Passage\s+(One|Two)$/i.test(H)||/^Questions\b/i.test(H)||/^\d+\.$/.test(H)||/[：:]$/.test(H)||T.classList.add("pd-article-title"))}),x.querySelectorAll(".question").forEach(T=>{const B=T.querySelector("p, h3");if(!B)return;const H=B.querySelector("strong"),$=((H==null?void 0:H.textContent)||"").match(/^\s*(\d{1,2})\s*[\.、]?\s*$/);H&&$&&(H.classList.add("pd-qnum"),H.textContent=$[1])}),x.querySelectorAll(".options").forEach(T=>{Array.from(T.querySelectorAll(".option")).reduce(($,ie)=>Math.max($,(ie.textContent||"").length),0)>42&&T.classList.add("single")}),Ds(x,(s==null?void 0:s.title)??o.title,he.current);const le=localStorage.getItem(`cet:answer:${o.id}`);if(le)try{const T=JSON.parse(le);Object.entries(T).forEach(([B,H])=>{const $=x.querySelectorAll(".question")[Number(B)];if(!$)return;const ie=$.querySelectorAll(".option");if(ie[H]){ie[H].classList.add("selected");const ve=String.fromCharCode(65+Number(H));$.setAttribute("data-ans",ve),wo($,ve)}})}catch{}const ce=localStorage.getItem(`cet:blank:${o.id}`);if(ce)try{const T=JSON.parse(ce);Object.entries(T).forEach(([B,H])=>{const $=x.querySelector(`.blank[data-blank="${B}"]`);$&&($.textContent=`${B} ${H}`,$.classList.add("filled"))})}catch{}const P=()=>kn(),ue=T=>{var ve,$e,Ge,ht,Xe;const B=T.target;if(Tl.current==="select"&&!B.closest("button, a, .option, .pd-qnum, .blank, .pd-blank, .pd-note, .pd-card, .pd-float-bar, .pd-timer-bar")){const Ue=(((ve=window.getSelection())==null?void 0:ve.toString())||"").trim(),Ve=localStorage.getItem("cet:trans:mode")||"word";let ze="";if(Ue.length>1){ze=Ue;const Re=window.getSelection(),et=Re&&Re.rangeCount?Re.getRangeAt(0):null,Ce=et?Aa(et):[];Gt(Ce.length?{kind:"sentence",rects:Ce}:null)}else if(Ve==="word"){const Re=_m(T.clientX,T.clientY);ze=Re.text;const et=Re.range?Aa(Re.range):[];Gt(et.length?{kind:"word",rects:et}:null)}else if(Ve==="sentence"){const Re=Em(T.clientX,T.clientY);ze=Re.text;const et=Re.range?Aa(Re.range):[];Gt(et.length?{kind:"sentence",rects:et}:null)}else Ve==="paragraph"?(ze=((Ge=($e=B.closest("p"))==null?void 0:$e.textContent)==null?void 0:Ge.trim())||"",Gt(null)):(ze=((ht=x.innerText)==null?void 0:ht.trim())||"",Gt(null));ze&&ze.length<=12e3?Wn({text:ze,x:T.clientX,y:T.clientY,result:null}):(Wn(null),Gt(null))}if(B.closest(".pd-badge")){const Ue=B.closest(".pd-badge").dataset.kind;Ue==="essay"?Ae({kind:"essay",title:"我的作文",placeholder:"开始写作...",storeKey:`cet:essay:${o.id}`}):Ue==="translation"?Ae({kind:"translation",title:"我的翻译",placeholder:"开始翻译...",storeKey:`cet:translation:${o.id}`}):window.alert("该功能即将上线");return}const H=B.closest(".pd-qnum");if(H){if(he.current==="paper")return;const Ue=H.closest(".question"),Ve=Array.from(x.querySelectorAll(".question")),ze=Ue?Ve.indexOf(Ue):-1;if(ze>=0)if(Me.current==="panel"){cn(null);const{list:Re}=vo(x),et=Re.find(Ce=>Ce.el===Ue);De(et?Re.indexOf(et):ze),Ne("question"),me(!0)}else{const Re=H.getBoundingClientRect();Nt({kind:"question",qi:ze,x:Re.left+Re.width/2,y:Re.bottom})}return}const $=B.closest(".blank, .pd-blank");if($){if(he.current==="paper")return;const Ue=$.getBoundingClientRect(),Ve=$.closest(".question"),ze=Number($.getAttribute("data-blank"))||Number(((Xe=Ve==null?void 0:Ve.querySelector(".pd-qnum"))==null?void 0:Xe.textContent)||0);Me.current==="panel"?(cn(ze),Ne("question"),me(!0)):Nt({kind:"blank",blankNo:ze,x:Ue.left+Ue.width/2,y:Ue.bottom});return}B.closest(".option")};return x.addEventListener("click",ue),P(),()=>{x.removeEventListener("click",ue),pe.current&&clearTimeout(pe.current)}},[s,N]);const pi=h.useRef(!1);h.useEffect(()=>{if(!N||pi.current||(pi.current=!0,localStorage.getItem("cet:spread")!=="1"))return;const x=requestAnimationFrame(()=>C(!0));return()=>cancelAnimationFrame(x)},[s,C]),h.useEffect(()=>{const x=F.current;if(!x||!N)return;const O=(j==null?void 0:j.questionTimes)??{},le=[],ce=Array.from(x.querySelectorAll("p, strong, h3, h4, div")).filter(ue=>/Questions\s+\d+\s+to\s+\d+[^<]*you have just heard/i.test(ue.textContent||"")),P=ce.filter(ue=>!ce.some(T=>T!==ue&&ue.contains(T)));return P.forEach(ue=>{const T=(ue.textContent||"").match(/Questions\s+(\d+)\s+to\s+\d+/i);if(!T)return;const B=Number(T[1]),H=O[B],$=document.createElement("button");$.type="button",$.className="pd-horn",$.dataset.no=String(B),$.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9h3l5-4v14l-5-4H4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/></svg>',H!=null?($.title=`播放第 ${B} 题开始的听力`,$.addEventListener("click",ie=>{ie.stopPropagation(),ie.preventDefault(),window.dispatchEvent(new CustomEvent("cet:lp2-jump",{detail:{no:B,time:H}}))})):($.title=`第 ${B} 题听力（音频待导入）`,$.addEventListener("click",ie=>{ie.stopPropagation(),ie.preventDefault(),Am($,"音频待导入")})),ue.classList.add("has-horn"),ue.prepend($),le.push($)}),()=>{le.forEach(ue=>ue.remove()),P.forEach(ue=>ue.classList.remove("has-horn"))}},[j,s]);const kn=h.useCallback(()=>{const x=F.current;if(!x)return;const{list:O,blankNos:le}=vo(x),ce={};let P={},ue={};try{P=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}")}catch{}try{ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}")}catch{}O.forEach(({el:B,no:H,kind:$})=>{if($==="choice"){const ie=B.querySelector(".option.selected");if(ie){const ve=Array.from(B.querySelectorAll(".option")).indexOf(ie);ce[H]=String.fromCharCode(65+ve)}}else{const ie=P[String(H)];ie&&(ce[H]=ie)}}),le.forEach(B=>{const H=ue[String(B)];H&&(ce[B]=H)});const T=Nm.map(B=>{const H=[];for(let $=B.start;$<B.start+B.count;$++)ce[$]&&H.push($);return{name:B.name,start:B.start,count:B.count,done:H}});ln(ce),V(T.reduce((B,H)=>B+H.done.length,0)),K(T)},[o.id]);h.useEffect(()=>{sr.current=kn},[kn]);const sa=()=>{W(!0);let x=0,O=0;const le={},ce=F.current;if(ce){let P={},ue={};try{P=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}")}catch{}try{ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}")}catch{}ce.querySelectorAll(".question").forEach(T=>{var ht;const B=T.getAttribute("data-answer"),H=T.querySelector(".option.selected");if(T.classList.remove("is-right","is-wrong"),!B)return;O+=1;const $=(((ht=T.querySelector("strong"))==null?void 0:ht.textContent)||"").match(/\d+/),ie=$?Number($[0]):0;let ve=H?String.fromCharCode(65+Array.from(T.querySelectorAll(".option")).indexOf(H)):"";!ve&&ie&&P[String(ie)]&&(ve=P[String(ie)]),ve&&(le[ie]=ve),ve&&ve===B?(x+=1,T.classList.add("is-right")):T.classList.add("is-wrong");const $e=Array.from(T.querySelectorAll(".option"));$e.forEach(Xe=>Xe.classList.remove("answer-key"));const Ge=$e.find(Xe=>{var Ue;return(((Ue=Xe.querySelector("strong"))==null?void 0:Ue.textContent)||"").trim().replace(/[).]/g,"")===B});Ge==null||Ge.classList.add("answer-key")}),ce.querySelectorAll(".blank[data-answer]").forEach(T=>{const B=T.getAttribute("data-answer"),H=T.getAttribute("data-blank");if(T.classList.remove("is-right","is-wrong"),!B||!H)return;O+=1;const $=ue[H]||"";$&&(le[Number(H)]=$),$&&$===B?(x+=1,T.classList.add("is-right")):T.classList.add("is-wrong")})}ae({right:x,judged:O});try{const P=JSON.parse(localStorage.getItem("cet:history")||"[]");P.unshift({id:o.id,title:o.title,ts:Date.now(),right:x,judged:O,snap:le}),localStorage.setItem("cet:history",JSON.stringify(P.slice(0,20)))}catch{}},ur=()=>{if(!window.confirm("确定清空本卷全部作答记录？"))return;["cet:answer:","cet:blank:","cet:match:"].forEach(O=>{try{localStorage.removeItem(O+o.id)}catch{}});const x=F.current;x&&(x.querySelectorAll(".option.selected").forEach(O=>O.classList.remove("selected")),x.querySelectorAll(".question").forEach(O=>O.classList.remove("is-right","is-wrong")),x.querySelectorAll(".option.answer-key").forEach(O=>O.classList.remove("answer-key")),x.querySelectorAll(".question").forEach(O=>{wo(O,null),O.removeAttribute("data-ans"),O.removeAttribute("data-picked")}),x.querySelectorAll(".blank[data-blank]").forEach(O=>{O.textContent=O.getAttribute("data-blank")||"",O.classList.remove("filled","is-right","is-wrong")})),jt({}),ra({key:!1,mine:!1,cmp:!1}),rn(!1),W(!1),kn()},dr=x=>{const O=F.current;if(!O)return;O.querySelectorAll(".option.selected").forEach(P=>P.classList.remove("selected")),O.querySelectorAll(".question").forEach(P=>P.classList.remove("is-right","is-wrong")),O.querySelectorAll(".option.answer-key").forEach(P=>P.classList.remove("answer-key")),O.querySelectorAll(".question").forEach(P=>{wo(P,null),P.removeAttribute("data-ans"),P.removeAttribute("data-picked")}),O.querySelectorAll(".blank[data-blank]").forEach(P=>{P.classList.remove("filled","is-right","is-wrong"),P.textContent=P.getAttribute("data-blank")||""}),O.querySelectorAll(".question").forEach(P=>{var H,$;const ue=(((H=P.querySelector("strong"))==null?void 0:H.textContent)||"").match(/\d+/),T=ue?Number(ue[0]):0,B=x[T];if(B){const ie=P.querySelectorAll(".option"),ve=B.charCodeAt(0)-65;($=ie[ve])==null||$.classList.add("selected")}});const le={},ce={};O.querySelectorAll(".blank[data-blank]").forEach(P=>{const ue=P.getAttribute("data-blank")||"",T=x[Number(ue)];T&&(P.textContent=`${ue} ${T}`,P.classList.add("filled"),le[ue]=T)}),Object.entries(x).forEach(([P,ue])=>{const T=Number(P);T>=36&&T<=45&&(ce[P]=ue)});try{const P={};O.querySelectorAll(".question").forEach((ue,T)=>{const B=ue.querySelector(".option.selected");B&&(P[String(T)]=Array.from(ue.querySelectorAll(".option")).indexOf(B))}),localStorage.setItem(`cet:answer:${o.id}`,JSON.stringify(P)),localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(le)),localStorage.setItem(`cet:match:${o.id}`,JSON.stringify(ce))}catch{}kn(),sa(),rn(!1)};return(s==null?void 0:s.title)??o.title,r.jsxs("div",{className:`pd-root${xe==="paper"?" is-paper-mode":""}`,"data-card":te?"open":"closed",children:[r.jsxs("div",{className:"pd-toolbar",children:[r.jsxs("div",{className:"pd-left",children:[r.jsx("button",{className:"pd-back",onClick:u,title:"返回真题列表","aria-label":"返回真题列表",children:r.jsx(R2,{width:16,height:16})}),r.jsx("button",{type:"button",className:"pd-alarm",onClick:Tn,title:tn?Sn?"收起计时":"显示计时":"计时","aria-label":"计时",children:"⏱"}),r.jsx("div",{className:`pd-listening${un?"":" is-hidden"}`,children:k?r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频加载中",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频加载中…"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]}):j?r.jsx(X2,{meta:j,title:`听力音频 · ${o.title}`}):r.jsxs("div",{className:"lp2 lp2-empty",title:"听力音频待导入",children:[r.jsx("span",{className:"lp2-empty-icon","aria-hidden":"true",children:"🎧"}),r.jsx("span",{className:"lp2-empty-text",children:"听力音频待导入"}),r.jsx("span",{className:"lp2-empty-track","aria-hidden":"true"})]})})]}),r.jsxs("div",{className:"pd-corner",children:[X&&r.jsx(Rs,{onClick:()=>{const[x]=nr(X);window.open(x,"_blank","noopener")},icon:r.jsx(Rp,{width:15,height:15}),label:"试卷PDF"}),I&&r.jsx(Rs,{onClick:()=>{const[x]=nr(I);window.open(x,"_blank","noopener")},icon:r.jsx(Rp,{width:15,height:15}),label:"答案PDF"}),m&&r.jsx(Rs,{onClick:()=>{const[x]=nr(m);window.open(x,"_blank","noopener")},icon:r.jsx("span",{style:{fontSize:15,lineHeight:1},children:"🎧"}),label:"听力音频"})]})]}),S?r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"正在载入试卷…"})}):N?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Lm}),r.jsxs("div",{className:`pd-sheet${se?" is-spread":""}`,ref:Ee,style:{zoom:re},children:[r.jsx(sm,{ann:He,tool:ut,penProps:Pn,shapeProps:Ln,onAddStroke:Zt,onAppendPoint:Yt,onSnap:Ll,onEraseIds:rt,onEraseLocal:Ma,eraserSize:ir,onAddNote:nn,onUpdateNote:Xt}),r.jsx("div",{className:"exam-content-root",ref:F})]})]}):r.jsx("div",{className:"pd-sheet",children:r.jsx("div",{className:"pd-loading",children:"暂无该试卷的内容数据"})}),_.length>0&&r.jsxs("div",{className:"pd-card","data-collapsed":te?"false":"true",children:[r.jsxs("div",{className:"pd-card-side",children:[r.jsxs("button",{type:"button",className:"pd-card-progress",title:ee==="question"?"切换到答题卡":"切换到题目",onClick:()=>Ne(x=>x==="question"?"answer":"question"),children:[U,"/",_.reduce((x,O)=>x+O.count,0)]}),r.jsx("button",{type:"button",className:"pd-card-toggle",onClick:()=>me(x=>!x),title:te?"收起答题卡":"展开答题卡","aria-label":te?"收起答题卡":"展开答题卡",children:te?"›":"‹"}),ee==="answer"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:`pd-card-tool${Mt.key?" on":""}`,title:"显示正确答案（点击一键全部显示/隐藏）","aria-label":"显示正确答案",onClick:()=>{const x=!Mt.key;ra(O=>({...O,key:x}))},children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13",children:[r.jsx("path",{d:"M12 5C5.5 5 2 12 2 12s3.5 7 10 7 10-7 10-7-3.5-7-10-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z",fill:"currentColor"}),!Mt.key&&r.jsx("line",{x1:"4",y1:"20",x2:"20",y2:"4",stroke:"currentColor",strokeWidth:"2"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Mt.mine?" on":""}`,title:"题号后显示我的作答","aria-label":"显示我的作答",onClick:()=>ra(x=>({...x,mine:!x.mine})),children:"我"}),r.jsx("button",{type:"button",className:`pd-card-tool${Mt.cmp?" on":""}`,title:"交卷自测（判分）：对绿框 / 错红框","aria-label":"交卷自测",onClick:()=>{const x=!Mt.cmp;ra(O=>({...O,cmp:x})),x&&sa()},children:"交"}),r.jsx("button",{type:"button",className:"pd-card-tool",title:"清空本卷作答记录（重新作答）","aria-label":"删除作答记录",onClick:ur,children:r.jsxs("svg",{viewBox:"0 0 24 24",width:"13",height:"13","aria-hidden":"true",children:[r.jsx("path",{d:"M4 7h16M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2.5 0v11.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V7",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 11v6M14 11v6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),r.jsx("button",{type:"button",className:`pd-card-tool${Ut?" on":""}`,title:"查看作答记录与对错情况","aria-label":"作答记录",onClick:()=>rn(x=>!x),children:"录"})]})]}),r.jsxs("div",{className:"pd-card-panel",children:[ee==="question"&&r.jsx("div",{className:"pd-card-question",children:Lt!==null?(()=>{const x=F.current,O=x==null?void 0:x.querySelector(`.blank[data-blank="${Lt}"], .pd-blank`),le=Vp(x),ce=Ye[Lt];return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["选项 ",Lt]})}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(P,ue)=>String.fromCharCode(65+ue)).map(P=>r.jsx("button",{type:"button",className:`pd-picker-circle${ce===P?" on":""}`,onClick:()=>{O&&(O.textContent=`${Lt} ${P}`,O.classList.add("filled"));try{const ue=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}");ue[Lt]=P,localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(ue))}catch{}kn()},children:P},P))}),le.length>0&&r.jsx("ul",{className:"pd-picker-words",children:le.map(P=>r.jsx("li",{children:P},P))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt<=26,onClick:()=>cn(Lt-1),"aria-label":"上一空",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(P,ue)=>r.jsx("span",{className:26+ue===Lt?"on":""},ue))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:Lt>=35,onClick:()=>cn(Lt+1),"aria-label":"下一空",children:"›"})]})]})})():(()=>{var ve,$e,Ge,ht;const x=F.current,{list:O}=vo(x||document.createElement("div")),le=O[Ke];if(!le)return null;const{el:ce,no:P,kind:ue}=le;if(ue==="match"){const Xe=(($e=(ve=ce.querySelector("p"))==null?void 0:ve.textContent)==null?void 0:$e.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",Ue=Ye[P],Ve=[];{let ze=(ce.closest(".qblock")||ce).previousElementSibling,Re=null;for(;ze;){if(ze.tagName==="H3"){Re=ze;break}if(ze.tagName==="H2")break;ze=ze.previousElementSibling}let et=(Re==null?void 0:Re.nextElementSibling)??null;for(;et&&et.tagName!=="H2";){if(et.tagName==="P"){const Ce=et.querySelector("strong"),tt=/^([A-P])\.$/.exec(((Ce==null?void 0:Ce.textContent)||"").trim());tt&&Ve.push({letter:tt[1],text:(et.textContent||"").replace(/^[A-N]\./,"").trim().slice(0,64),el:et})}et=et.nextElementSibling}}return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",P," 题"]})}),Ve.length>0&&r.jsx("ul",{className:"pd-match-paras",children:Ve.map(ze=>r.jsxs("li",{onClick:()=>ze.el.scrollIntoView({behavior:"smooth",block:"center"}),children:[r.jsx("b",{children:ze.letter}),r.jsxs("span",{children:[ze.text,"…"]})]},ze.letter))}),Xe&&r.jsx("p",{className:"pd-picker-stem",children:Xe}),r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:16},(ze,Re)=>String.fromCharCode(65+Re)).map(ze=>r.jsx("button",{type:"button",className:`pd-picker-circle${Ue===ze?" on":""}`,onClick:()=>{try{const Re=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}");Re[P]=ze,localStorage.setItem(`cet:match:${o.id}`,JSON.stringify(Re))}catch{}kn()},children:ze},ze))}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:P<=36,onClick:()=>De(Ke-1),"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:Array.from({length:10},(ze,Re)=>r.jsx("span",{className:36+Re===P?"on":""},Re))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:P>=45,onClick:()=>De(Ke+1),"aria-label":"下一题",children:"›"})]})]})}const T=Yp(ce),B=((ht=(Ge=ce.querySelector("p"))==null?void 0:Ge.textContent)==null?void 0:ht.replace(/^\s*\d+\s*[\.、]?\s*/,"").trim())||"",H=Array.from(ce.querySelectorAll(".option")),$=O.filter(Xe=>Yp(Xe.el)===T).map(Xe=>Xe.no),ie=$.indexOf(P);return r.jsxs(r.Fragment,{children:[r.jsx("header",{className:"pd-picker-head",children:r.jsxs("div",{className:"pd-picker-guide",children:["第 ",P," 题"]})}),B&&r.jsx("p",{className:"pd-picker-stem",children:B}),r.jsx("div",{className:"pd-picker-opts",children:H.map((Xe,Ue)=>{const Ve=String.fromCharCode(65+Ue),ze=Xe.classList.contains("selected");return r.jsxs("button",{type:"button",className:`pd-picker-opt${ze?" on":""}`,onClick:()=>{Qt(ce,Xe)},children:[r.jsx("span",{className:"pd-picker-letter",children:Ve}),r.jsx("span",{className:"pd-picker-text",children:(Xe.textContent||"").replace(/^[A-D]\)\s*/,"").trim()})]},Ue)})}),r.jsxs("footer",{className:"pd-picker-foot",children:[r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:ie<=0,onClick:()=>{const Xe=$[ie-1],Ue=O.find(Ve=>Ve.no===Xe);Ue&&De(O.indexOf(Ue))},"aria-label":"上一题",children:"‹"}),r.jsx("div",{className:"pd-picker-dots",children:$.map(Xe=>r.jsx("span",{className:Xe===P?"on":""},Xe))}),r.jsx("button",{type:"button",className:"pd-picker-nav",disabled:ie>=$.length-1,onClick:()=>{const Xe=$[ie+1],Ue=O.find(Ve=>Ve.no===Xe);Ue&&De(O.indexOf(Ue))},"aria-label":"下一题",children:"›"})]})]})})()}),ee==="answer"&&r.jsx("div",{className:"pd-card-acc",children:_.map((x,O)=>{const le=x.name==="听力"?` · ${x.count} 题`:x.name==="选词填空"||x.name==="长篇阅读"?` · ${x.start}-${x.start+x.count-1}`:"",ce=!!St[x.name];return r.jsxs("div",{className:"pd-card-sec",children:[r.jsxs("button",{type:"button",className:"pd-card-secrow","aria-expanded":ce,onClick:()=>on(P=>({...P,[x.name]:!P[x.name]})),children:[r.jsx("b",{children:O+1}),r.jsxs("span",{className:"pd-card-secname",children:[x.name,le&&r.jsx("em",{children:le})]}),r.jsxs("span",{className:"pd-card-secnum",children:[x.done.length,"/",x.count]}),r.jsx("svg",{className:`pd-card-caret${ce?" open":""}`,viewBox:"0 0 24 24",width:"14",height:"14","aria-hidden":"true",children:r.jsx("path",{d:"M6 9l6 6 6-6",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),ce&&r.jsx("div",{className:"pd-card-grid",children:Array.from({length:x.count}).map((P,ue)=>{const T=x.start+ue,B=x.done.includes(T),H=()=>{const ve=F.current;if(!ve)return;const $e=(T>=26&&T<=35?ve.querySelector(`.blank[data-blank="${T}"]`):null)||[...ve.querySelectorAll(".question")].find(Ge=>{var ht;return((ht=Ge.querySelector(".pd-qnum"))==null?void 0:ht.textContent)===String(T)});$e==null||$e.scrollIntoView({behavior:"smooth",block:"center"})},$=()=>{const ve=F.current;if(ve){if(T>=26&&T<=35)cn(T),De(0);else{cn(null);const{list:$e}=vo(ve),Ge=$e.find(ht=>ht.no===T);Ge&&De($e.indexOf(Ge))}Ne("question"),me(!0)}},ie=Mt.cmp?Ye[T]&&Ye[T]===It[T]?" cmp-right":" cmp-wrong":"";return r.jsxs("div",{role:"button",tabIndex:0,className:`pd-card-cell${B?" done":""}${ie}`,title:`第 ${T} 题${B?"（已答）":""}`,onClick:H,onKeyDown:ve=>{ve.key==="Enter"&&H()},children:[r.jsx("button",{type:"button",className:"pd-cell-parse",title:"查看题目 / 解析",onClick:ve=>{ve.stopPropagation(),$()},children:"解析"}),Mt.key&&It[T]&&r.jsx("span",{className:"pd-cell-key",children:It[T]}),Mt.mine&&Ye[T]&&r.jsx("span",{className:"pd-cell-mine",children:Ye[T]}),r.jsx("span",{className:"pd-cell-no",children:T})]},ue)})})]},`${x.name}-${O}`)})})]})]}),Ut&&(()=>{let x=[];try{x=JSON.parse(localStorage.getItem("cet:history")||"[]")}catch{}const O=x.filter(le=>le.id===o.id);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-history-mask",onClick:()=>rn(!1)}),r.jsxs("div",{className:"pd-history-dialog",children:[r.jsxs("header",{className:"pd-history-head",children:[r.jsxs("b",{children:["作答记录 · ",o.title]}),r.jsx("button",{type:"button",className:"pd-history-close",onClick:()=>rn(!1),"aria-label":"关闭",children:"✕"})]}),O.length===0?r.jsx("div",{className:"pd-history-empty",children:"暂无记录 · 完成作答后点「比」或「提交自测」即会保存"}):r.jsx("ul",{className:"pd-history-list",children:O.map((le,ce)=>{const P=le.right!==void 0&&le.judged&&le.right/le.judged>=.6;return r.jsxs("li",{className:le.snap?"clickable":"",title:le.snap?"点击查看该次批改后的试卷":"该记录未含作答明细",onClick:()=>le.snap&&dr(le.snap),children:[r.jsx("span",{className:"pd-history-time",children:new Date(le.ts).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("span",{className:`pd-history-score${P?" good":" bad"}`,children:le.right!==void 0&&le.judged?`正确 ${le.right}/${le.judged}`:"已记录"})]},ce)})})]})]})})(),Ie&&si.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>Nt(null)}),r.jsx(Xp,{x:Ie.x,y:Ie.y,children:Ie.kind==="question"?(()=>{var ue,T;const x=(ue=F.current)==null?void 0:ue.querySelectorAll(".question")[Ie.qi],O=x?Array.from(x.querySelectorAll(".option")):[],le=x?Number(((T=x.querySelector(".pd-qnum"))==null?void 0:T.textContent)||0):0,ce=Array.from({length:O.length||16},(B,H)=>String.fromCharCode(65+H)),P=O.length>0?String.fromCharCode(65+O.findIndex(B=>B.classList.contains("selected"))):Ye[le];return r.jsx("div",{className:"pd-picker-circles",children:ce.map((B,H)=>r.jsx("button",{type:"button",className:`pd-picker-circle${P===B?" on":""}`,onClick:()=>{if(O.length>0)Qt(x,O[H]);else{try{const $=JSON.parse(localStorage.getItem(`cet:match:${o.id}`)||"{}");$[le]=B,localStorage.setItem(`cet:match:${o.id}`,JSON.stringify($))}catch{}kn()}Nt(null)},children:B},B))})})():r.jsxs("div",{className:"pd-picker-body",children:[r.jsx("div",{className:"pd-picker-circles",children:Array.from({length:15},(x,O)=>String.fromCharCode(65+O)).map(x=>r.jsx("button",{type:"button",className:`pd-picker-circle${Ye[Ie.blankNo]===x?" on":""}`,onClick:()=>{var ce;const O=F.current,le=(O==null?void 0:O.querySelector(`.blank[data-blank="${Ie.blankNo}"]`))||((ce=[...(O==null?void 0:O.querySelectorAll(".question"))||[]].find(P=>{var ue;return((ue=P.querySelector(".pd-qnum"))==null?void 0:ue.textContent)===String(Ie.blankNo)}))==null?void 0:ce.querySelector(".blank, .pd-blank"));le&&(le.textContent=`${Ie.blankNo} ${x}`,le.classList.add("filled"));try{const P=JSON.parse(localStorage.getItem(`cet:blank:${o.id}`)||"{}");P[Ie.blankNo]=x,localStorage.setItem(`cet:blank:${o.id}`,JSON.stringify(P))}catch{}kn(),Nt(null)},children:x},x))}),r.jsx("ul",{className:"pd-picker-words",children:Vp(F.current).map(x=>r.jsx("li",{children:x},x))})]})})]}),document.body),Ca&&si.createPortal(r.jsx(r.Fragment,{children:Ca.rects.map((x,O)=>r.jsx("span",{className:`pd-hl-${Ca.kind}`,style:{position:"fixed",left:x.x,top:x.y,width:x.w,height:x.h}},O))}),document.body),_t&&si.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>{Wn(null),Gt(null)}}),r.jsx(Xp,{x:_t.x,y:_t.y,children:r.jsxs("div",{className:"pd-trans",children:[r.jsx("div",{className:"pd-trans-src",children:_t.text}),r.jsx("div",{className:"pd-trans-res",children:_t.result??"翻译中…"})]})})]}),document.body),nl&&si.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-picker-mask",onClick:()=>Bt(!1)}),r.jsxs("div",{className:"pd-timer-dialog",children:[r.jsx("button",{type:"button",className:"pd-timer-dialog-close",onClick:()=>Bt(!1),"aria-label":"关闭",children:"×"}),r.jsxs("div",{className:"pd-timer-dialog-head",children:[r.jsx("span",{className:"pd-timer-dialog-icon",children:"⏱"}),r.jsxs("div",{children:[r.jsx("h3",{children:"计时"}),r.jsx("p",{children:"开始后将在正文上方显示时间"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-modes",children:[r.jsxs("button",{type:"button",className:Xn==="up"?"on":"",onClick:()=>dn("up"),children:[r.jsx("b",{children:"正计时"}),r.jsx("span",{children:"累计用时"})]}),r.jsxs("button",{type:"button",className:Xn==="down"?"on":"",onClick:()=>dn("down"),children:[r.jsx("b",{children:"倒计时"}),r.jsx("span",{children:"限时完成"})]})]}),r.jsxs("div",{className:"pd-timer-dialog-actions",children:[r.jsx("button",{type:"button",className:"pd-timer-cancel",onClick:()=>Bt(!1),children:"取消"}),r.jsx("button",{type:"button",className:"pd-timer-start",onClick:()=>{El(Xn),oa(0),_a(!1),ll(!0),Vn(!0),Bt(!1)},children:"开始"})]})]})]}),document.body),tn&&Sn&&si.createPortal(r.jsxs("div",{className:"pd-timer-bar",style:fn?{transform:`translate(-50%, 0) translate(${fn.x}px, ${fn.y}px)`}:void 0,children:[r.jsx("span",{className:"pd-timer-label",children:Mn==="up"?"用时":"剩余"}),r.jsx("b",{className:"pd-timer-time",children:Nl}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>Vn(x=>!x),children:tn?"⏸ 暂停":"▶ 继续"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>El(x=>x==="up"?"down":"up"),children:"↻ 换模式"}),r.jsx("button",{type:"button",className:"pd-tb-chip",onClick:()=>_a(x=>!x),children:"👁 遮住"}),r.jsx("button",{type:"button",className:"pd-tb-chip red",onClick:()=>{Vn(!1),oa(0),_a(!1),ll(!0),Ea(null)},children:"■ 结束"}),r.jsx("span",{className:"pd-timer-drag",onPointerDown:Y,onPointerMove:ye,onPointerUp:Se,title:"拖动"})]}),document.body),Pe&&si.createPortal(r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pd-drawer-mask",onClick:()=>vt(null)}),r.jsxs("aside",{className:"pd-drawer",children:[r.jsxs("header",{className:"pd-drawer-head",children:[r.jsx("h3",{children:Pe.title}),r.jsx("button",{type:"button",className:"pd-drawer-close",onClick:()=>vt(null),"aria-label":"关闭",children:"×"})]}),r.jsx("textarea",{className:"pd-drawer-text",placeholder:Pe.placeholder,value:tl,onChange:x=>en(x.target.value)}),r.jsx("button",{type:"button",className:"pd-drawer-save",onClick:Be,children:"保存"})]})]}),document.body),r.jsx(jm,{tool:ut,onTool:xt,penProps:Pn,onPenSetting:Ao,shapeProps:Ln,onShapeSetting:Ml,zoom:re,onZoom:M,onUndo:or,canUndo:pn,eraserSize:ir,onEraserSize:rr,spread:se,onToggleSpread:D,examMode:xe,onToggleExamMode:be})]})},Rs=({href:o,onClick:f,icon:u,label:s})=>{const p={display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 13px",borderRadius:"8px",border:"1px solid var(--affine-border-color)",background:"var(--affine-background-primary-color)",color:"var(--affine-text-primary-color)",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"none"};return o?r.jsxs("a",{href:o,target:"_blank",rel:"noreferrer",style:p,children:[u,s]}):r.jsxs("button",{onClick:f,style:p,children:[u,s]})},Lm=`
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
`,Dm=JSON.parse('[{"id":"cet4-2026-06-set1","title":"2026年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-150词/分钟，短篇新闻占比升至30%，涵盖科技突破、环境治理等话题"],"reading":["科技与生活","校园场景分析","社会现象探讨","个人成长"],"writing":["大学生参与科研项目（需回应必要性与实用性两个维度）"],"translation":["餐桌礼仪"],"readingDifficulty":["中","难","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set2","title":"2026年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["学术化场景增加，长对话信息密度提升，信号词定位（but/however后答案概率达72%）"],"reading":["教育创新","智能设备应用","文化传承","职场发展"],"writing":["校园机器人应用（需提出具体观点或可操作建议）"],"translation":["尊师文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2026-06-set3","title":"2026年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["校园与生活类场景为主，口音多元化（英音、澳音占比约15%）"],"reading":["青年品德","线上学习","环境保护","人际关系"],"writing":["提升校园生活便利性（需提出具体建议）"],"translation":["送礼习俗"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2025-12-set1","title":"2025年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["整体难度适中，话题贴近学习与生活，涉及社会、经济、文化等多层面"],"reading":["生物节律与服药时间","延迟退休原因分析","自行车道建设观念冲突","选择过多的决策困扰"],"writing":["建议信——学生会如何丰富学生生活"],"translation":["民营经济"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_1","hasListening":true},{"id":"cet4-2025-12-set2","title":"2025年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["短篇新闻涉及德国超市巧克力兔子版权纠纷，长对话偏校园与日常场景"],"reading":["用户体验设计师成长","英国学校校服政策争议","学术性文本分析","职场发展"],"writing":["如何充分利用校内资源促进学业发展"],"translation":["绿色经济"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_2","hasListening":true},{"id":"cet4-2025-12-set3","title":"2025年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["考查因果关系推断与观点态度理解能力，注重实际场景关键信息抓取"],"reading":["社会热点","文化现象","教育话题","健康生活"],"writing":["为学生会如何丰富学生生活提建议"],"translation":["城市漫步"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_12_3","hasListening":true},{"id":"cet4-2025-06-set1","title":"2025年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set1","year":2025,"month":"06","keyPoints":{"listening":["语速适中，对话为校园和日常热点场景，长对话需集中注意力抓关键信息"],"reading":["选词填空考基础词汇运用","仔细阅读贴近社会热点","长篇阅读信息匹配"],"writing":["大学图书馆是否应该向公众开放"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_1","hasListening":true},{"id":"cet4-2025-06-set2","title":"2025年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set2","year":2025,"month":"06","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["社会热点话题","文化现象分析","教育公平","科技与生活"],"writing":["创新创业课程相关"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_2","hasListening":true},{"id":"cet4-2025-06-set3","title":"2025年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2025-06-set3","year":2025,"month":"06","keyPoints":{"listening":["整体难度适中，比平时模拟题更贴近真实考试节奏，没有偏题怪题"],"reading":["选词填空考基础词汇","仔细阅读主题贴近社会热点","长篇阅读信息匹配"],"writing":["创新创业课程相关"],"translation":["15分钟便民生活圈"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2025_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2025_06_3","hasListening":true},{"id":"cet4-2024-12-set1","title":"2024年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set1","year":2024,"month":"12","keyPoints":{"listening":["整体难度适中，但听力是本次考试最难的部分，语速偏快、信息密度高"],"reading":["社交媒体对人际交往的影响","社会热点话题分析","科技与生活","职场发展"],"writing":["社交媒体对人际交往的影响"],"translation":["医患关系处理"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_1","hasListening":true},{"id":"cet4-2024-12-set2","title":"2024年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set2","year":2024,"month":"12","keyPoints":{"listening":["语速平稳、发音清晰，但部分长对话和讲座信息密度较高"],"reading":["远程工作对效率和生活质量的影响","全球气候变化对农业的影响","电子书与纸质书阅读体验差异"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_2","hasListening":true},{"id":"cet4-2024-12-set3","title":"2024年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-12-set3","year":2024,"month":"12","keyPoints":{"listening":["语速快，发音与英美音差异大，话题偏专业"],"reading":["社会热点话题","健康生活方式","教育公平","文化多样性"],"writing":["如何平衡学业学习与课外活动"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_12_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_12_3","hasListening":true},{"id":"cet4-2024-06-set1","title":"2024年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set1","year":2024,"month":"06","keyPoints":{"listening":["语速比往年快一丢丢，长对话容易走神漏细节"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["智能设备对学习的影响"],"translation":["贴福字"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_1","hasListening":true},{"id":"cet4-2024-06-set2","title":"2024年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set2","year":2024,"month":"06","keyPoints":{"listening":["语速平稳，没有怪口音，基础稳点能拿不少分"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["大学图书馆是否应该向公众开放"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_2/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_2","hasListening":true},{"id":"cet4-2024-06-set3","title":"2024年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2024-06-set3","year":2024,"month":"06","keyPoints":{"listening":["整体中等偏上，不是最难但坑点真不少"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["智能设备对学习的影响"],"translation":["四合院"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2024_06_3/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet4/2024_06_3","hasListening":true},{"id":"cet4-2023-12-set1","title":"2023年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set1","year":2023,"month":"12","keyPoints":{"listening":["短篇新闻和长对话相对简单，听力篇章难度有所增加"],"reading":["词汇理解与长篇阅读较容易，仔细阅读难度较大"],"writing":["写作要求与往年变化不大，认真审题即可"],"translation":["改革开放以来饮食变化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-12-set2","title":"2023年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set2","year":2023,"month":"12","keyPoints":{"listening":["听力语速和长对话复杂度已接近当前考试标准"],"reading":["选词填空出现个别生词","长篇阅读信息匹配","仔细阅读细节题为主"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-12-set3","title":"2023年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-12-set3","year":2023,"month":"12","keyPoints":{"listening":["听力部分如果不仔细听材料，很多细节之处容易忽略"],"reading":["仔细阅读难度较大，需要较强的逻辑推断能力"],"writing":["写作要求与往年变化不大"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set1","title":"2023年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["长对话略难，同义替换较多，不仔细听容易忽略细节"],"reading":["仔细阅读中规中矩，定位好关键句关键词正确率较高"],"writing":["作文和翻译内容相对抽象，很多词汇难写，难度较大"],"translation":["揠苗助长"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2023-06-set2","title":"2023年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["听力发音清晰、语速适中"],"reading":["阅读话题不偏，翻译是传统文化类，背过素材很好上手"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["亡羊补牢"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2023-06-set3","title":"2023年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2023-06-set3","year":2023,"month":"06","keyPoints":{"listening":["听力整体来说较简单，正确选项与原文高度匹配，体现视听一致原则"],"reading":["阅读话题不偏，仔细阅读中规中矩"],"writing":["作文和翻译内容相对抽象，很多词汇难写"],"translation":["守株待兔"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2022-12-set1","title":"2022年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["听力对我来说很难，错了挺多"],"reading":["选词填空考高中考纲词汇","仔细阅读感觉还行","翻译冬至那篇挺简单"],"writing":["培养社交能力的必要性"],"translation":["冬至"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_1","hasListening":true},{"id":"cet4-2022-12-set2","title":"2022年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set2","year":2022,"month":"12","keyPoints":{"listening":["听力开头两个全错，后十个听力错4个"],"reading":["选词填空考parenthood","仔细阅读涉及鱼和消除贫困，都读懂了但选项选不出来"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_2","hasListening":true},{"id":"cet4-2022-12-set3","title":"2022年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-12-set3","year":2022,"month":"12","keyPoints":{"listening":["听力部分16-25题较难"],"reading":["选词填空都是高中考纲词汇，没有不认识的词"],"writing":["培养社交能力"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_12_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_12_3","hasListening":true},{"id":"cet4-2022-06-set1","title":"2022年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set1","year":2022,"month":"06","keyPoints":{"listening":["听力选项同义替换多，长度普遍较长，预读起来没那么顺畅"],"reading":["段落匹配到处是显眼的TD，做起来挺轻松","仔细阅读第一篇挺简单，第二篇common sense有点绕"],"writing":["作文很好写，背的模版刚好契合"],"translation":["赵州桥"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_1","hasListening":true},{"id":"cet4-2022-06-set2","title":"2022年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set2","year":2022,"month":"06","keyPoints":{"listening":["全国共考两套听力，本套听力与前两套内容一样，只是选项顺序不同"],"reading":["阅读整体感觉还行，仔细阅读定位准确即可"],"writing":["作文较好写"],"translation":["亡羊补牢"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_2","hasListening":true},{"id":"cet4-2022-06-set3","title":"2022年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2022-06-set3","year":2022,"month":"06","keyPoints":{"listening":["听力比起去年12月的要难一点"],"reading":["阅读话题常规，仔细阅读需要仔细定位"],"writing":["作文较好写"],"translation":["揠苗助长"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet4/2022_06_3/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet4/2022_06_3","hasListening":true},{"id":"cet4-2021-12-set1","title":"2021年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["听力题目中规中矩，和之前差不多"],"reading":["阅读还算正常，仔细阅读定位准确即可"],"writing":["作文report较难，不记得怎么写"],"translation":["都江堰"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2021-12-set2","title":"2021年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set2","year":2021,"month":"12","keyPoints":{"listening":["听力部分中规中矩"],"reading":["阅读部分选词填空考词汇辨析与语法，仔细阅读涉及人工智能在医疗中的应用"],"writing":["作文report较难"],"translation":["坎儿井"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-12-set3","title":"2021年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-12-set3","year":2021,"month":"12","keyPoints":{"listening":["听力部分与第二套一致"],"reading":["阅读整体难度适中"],"writing":["作文report较难"],"translation":["大运河"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set1","title":"2021年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set1","year":2021,"month":"06","keyPoints":{"listening":["听力好难，到后面基本上是乱写"],"reading":["第二套的长篇阅读和第三套的仔细阅读，太难了，和平时的四级考试难度不在一个等级"],"writing":["科技是否会让人变懒"],"translation":["铁观音"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set2","title":"2021年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set2","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["匹配阅读真的难，文章内容根本读不懂，全是比较晦涩难懂的内容"],"writing":["科技是否会让人变懒"],"translation":["龙井"],"readingDifficulty":["难","难","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2021-06-set3","title":"2021年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2021-06-set3","year":2021,"month":"06","keyPoints":{"listening":["听力部分较难"],"reading":["仔细阅读真的有些读不懂，一个是boring，一个是肥胖"],"writing":["科技是否会让人变懒"],"translation":["普洱"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set1","title":"2020年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["听力考试难度适中，较之前考题无明显变化"],"reading":["选词填空是难点，段落匹配和传统阅读得分点与以往并无差异，主要考察名词定位和句式关键信息处理"],"writing":["Changes in the Way of Education"],"translation":["春节中鱼的象征意义"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set2","title":"2020年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["新闻听力选项内容较长，词汇难度提升，主要考察细节匹配"],"reading":["选词填空讲“该如何把控赞美的度”，快速阅读关于“贫穷的样子”，仔细阅读是比较日常的社科类话题"],"writing":["Changes in the Way of Transportation"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-12-set3","title":"2020年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-12-set3","year":2020,"month":"12","keyPoints":{"listening":["长对话部分选项内容相对容易，短文听力部分较长对话稍有难度"],"reading":["仔细阅读试题考查类型为细节理解，题干关键词定位明显"],"writing":["Changes in the Way of Communication"],"translation":["中国饮食文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set1","title":"2020年9月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["新闻部分语速适中，专业词汇较少；长对话第一篇语速较快，连读较多"],"reading":["选词填空难度不大，词性辨别及单词难度较低","长篇阅读难点在实验过程的段落区分"],"writing":["在线图书馆/在线词典/PPT的使用"],"translation":["白酒/国宴等传统文化词汇"],"readingDifficulty":["难","中","中","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-09-set2","title":"2020年9月 四级真题 (第二、三套合并卷)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["听力部分整体较往年相比难度适中，语速适中，考题均为细节题"],"reading":["仔细阅读主要考查综合阅读能力，题目以细节题为主，重在对比原文与选项是否同义"],"writing":["分析利弊型作文，网络相关话题"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2020-07-set1","title":"2020年7月 四级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["难度基本与去年12月持平，个别几道题较难，做题技巧围绕视听一致原则"],"reading":["选词填空为科普类文章，考查大纲词汇及名、动、形、副四类词汇语法结构"],"writing":["分析翻译应用程序流行的原因（原因解释类作文）"],"translation":["火锅"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set1","title":"2019年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set1","year":2019,"month":"12","keyPoints":{"listening":["新闻部分较往年容易，长对话正常难度，篇章较难，考题多为细节题"],"reading":["阅读整体难度适中，多为应用文和议论文，选词填空出现个别生词，考生易在此处丢分"],"writing":["推荐信（应用文写作）"],"translation":["父母重视教育"],"readingDifficulty":["中","易","中","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2019-12-set2","title":"2019年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set2","year":2019,"month":"12","keyPoints":{"listening":["长对话听音难点主要集中在语音，连读较多，英美音互换较难"],"reading":["阅读整体难度适中，仔细阅读部分题在常见设题点设题，较容易定位"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-12-set3","title":"2019年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-12-set3","year":2019,"month":"12","keyPoints":{"listening":["短文篇幅较长，语言难度较其他两部分来说相对难一些"],"reading":["阅读整体难度适中，选词填空出现个别生词"],"writing":["推荐信（应用文写作）"],"translation":["中国传统文化"],"readingDifficulty":["中","易","易","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set1","title":"2019年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set1","year":2019,"month":"06","keyPoints":{"listening":["整体来说较简单，新闻、长对话、篇章考的都是在课堂上讲过的简单生活类主题"],"reading":["阅读理解总体难度比2018年12月简单，高频词汇反复出现","考点中规中矩","阅读材料接地气容易理解"],"writing":["新闻报道（社会热点类话题）"],"translation":["灯笼"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set2","title":"2019年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set2","year":2019,"month":"06","keyPoints":{"listening":["听力考试整体来说较简单，好多文章的正确选项都跟原文高度匹配"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2019-06-set3","title":"2019年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2019-06-set3","year":2019,"month":"06","keyPoints":{"listening":["听力难度适中"],"reading":["阅读整体难度适中"],"writing":["新闻报道（社会热点类话题）"],"translation":["中国传统文化"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set1","title":"2018年12月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set1","year":2018,"month":"12","keyPoints":{"listening":["题型稳定，长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察学生在材料中的定位及对重点语句的理解能力"],"writing":["毕业后将面临的就业挑战"],"translation":["手机阅读"],"readingDifficulty":["中","中","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-12-set2","title":"2018年12月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set2","year":2018,"month":"12","keyPoints":{"listening":["长对话比较简单，新闻与篇章难度与往年持平"],"reading":["阅读部分整体考察相对比较浅显，题材为学生的日常兴趣与关注的话题"],"writing":["留学面临的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","难"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-12-set3","title":"2018年12月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-12-set3","year":2018,"month":"12","keyPoints":{"listening":["听力部分题型稳定，话题较为传统"],"reading":["阅读部分整体考察相对比较浅显，更加偏向于考察定位及重点语句理解能力"],"writing":["大城市生活的挑战"],"translation":["中国传统文化"],"readingDifficulty":["中","中","难","中"],"readingLevel":"难","difficulty":"中等"}},{"id":"cet4-2018-06-set1","title":"2018年6月 四级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set1","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单，新闻部分没有涉及政治经济类话题，考的是社会民生类新闻"],"reading":["试卷整体难度有所下降，阅读与听力较以往考试也更容易理解"],"writing":["口语能力的重要性及如何培养"],"translation":["飞机"],"readingDifficulty":["易","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set2","title":"2018年6月 四级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set2","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["选材源于英美主流媒体报刊，题材集中在社科领域"],"writing":["写作能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}},{"id":"cet4-2018-06-set3","title":"2018年6月 四级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet4-2018-06-set3","year":2018,"month":"06","keyPoints":{"listening":["听力难度较往年来说比较简单"],"reading":["试卷整体难度有所下降，阅读更容易理解"],"writing":["阅读能力的重要性及如何培养"],"translation":["中国传统文化"],"readingDifficulty":["中","易","中","中"],"readingLevel":"中","difficulty":"中等"}}]'),Rm=JSON.parse('[{"id":"cet6-2026-06-set1","title":"2026年6月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set1","year":2026,"month":"06","keyPoints":{"listening":["语速提升至140-160词/分钟，学术场景占比激增至68%，多模态（语音+图表）融合考查"],"reading":["科技与生活","社会现象分析","科技伦理","人文关怀"],"writing":["热爱自然（Love Nature）"],"translation":["无人机"],"difficulty":"中等","readingDifficulty":["中","难","难","难"],"readingLevel":"难"}},{"id":"cet6-2026-06-set2","title":"2026年6月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set2","year":2026,"month":"06","keyPoints":{"listening":["讲座听力开头30秒是考点密集区，主旨题答案几乎都出现在前30秒内"],"reading":["文化传承","教育与发展","经济与社会","个人成长"],"writing":["深入了解中华传统文化有助于促进文化交流"],"translation":["电子商务与乡村振兴"],"difficulty":"中等","readingDifficulty":["中","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2026-06-set3","title":"2026年6月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2026-06-set3","year":2026,"month":"06","keyPoints":{"listening":["转折词but、however后面覆盖约40%的细节题和推理题"],"reading":["心理健康","科技对社会的影响","环境与责任","批判性思维"],"writing":["科技与人文"],"translation":["科技医疗（远程医疗）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-12-set1","title":"2025年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set1","year":2025,"month":"12","keyPoints":{"listening":["持续关注学术场景和逻辑信号词"],"reading":["社会价值观","老年人对社会贡献","教育方法","科技与人类"],"writing":["在竞争日益激烈的世界中，大学生应更好准备以应对各种挑战"],"translation":["尊老（中华民族传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_1/test.pdf"},{"id":"cet6-2025-12-set2","title":"2025年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set2","year":2025,"month":"12","keyPoints":{"listening":["逻辑推断和细节抓取并重"],"reading":["网络经济与传统经济","科技发展与政策","自我价值实现","大学生活适应"],"writing":["通过“中国梦”实现自我价值"],"translation":["中华民族崇尚的自强自立精神"],"difficulty":"中等","readingDifficulty":["中","中","难","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_2/test.pdf"},{"id":"cet6-2025-12-set3","title":"2025年12月 六级真题 (第三套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2025-12-set3","year":2025,"month":"12","keyPoints":{"listening":["学术场景与日常对话交替出现"],"reading":["传统美德与消费","深度阅读与AI","人类创造力","志愿服务与社会责任"],"writing":["教师对学生学术追求和个人发展的影响"],"translation":["节俭（frugality，传统美德）"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2025_12_3/test.pdf"},{"id":"cet6-2025-06-set1","title":"2025年6月 六级真题 (第一套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set1","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第1套.pdf","keyPoints":{"listening":["听力语速提升，学术场景占比增加，讲座逻辑严密"],"reading":["社会心理（身份构建）","独处的好处","追随激情的潜在问题","工作与生活平衡"],"writing":["过度依赖AI对创造力的危害"],"translation":["天宫空间站"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2025-06-set2","title":"2025年6月 六级真题 (第二套)","desc":"最新真题！难度升级挑战","url":"exam-detail.html?id=cet6-2025-06-set2","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第2套.pdf","keyPoints":{"listening":["学术场景为主，重视逻辑信号词"],"reading":["社会心理","图书馆的重要性","社区文化","信息获取与知识传播"],"writing":["社交媒体的使用（正确且负责任地使用）"],"translation":["南水北调工程"],"difficulty":"较难","readingDifficulty":["难","难","难","中"],"readingLevel":"难"}},{"id":"cet6-2025-06-set3","title":"2025年6月 六级真题 (第三套)","desc":"高阶词汇突破","url":"exam-detail.html?id=cet6-2025-06-set3","year":2025,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2025.06 第3套.pdf","keyPoints":{"listening":["语速偏快，细节题需结合笔记技巧"],"reading":["环境意识","肉类消费与气候变化","可持续生活","公共健康"],"writing":["职业准备"],"translation":["粤港澳大湾区"],"difficulty":"较难","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set1","title":"2024年12月 六级真题 (第一套)","desc":"年度压轴真题","url":"exam-detail.html?id=cet6-2024-12-set1","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_1/test.pdf","keyPoints":{"listening":["长对话围绕绩效评估、商业项目展开；短文考儿童好奇心"],"reading":["全球贫困问题","密码记忆研究","恐怖片为何受欢迎","社会心理与科技"],"writing":["人工智能对职场的影响"],"translation":["北斗卫星导航系统"],"difficulty":"较难","readingDifficulty":["难","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set2","title":"2024年12月 六级真题 (第二套)","desc":"学术英语精讲","url":"exam-detail.html?id=cet6-2024-12-set2","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_2/test.pdf","keyPoints":{"listening":["讲座考物质追求、可持续时尚；学术场景比重增加"],"reading":["全球贫困问题","数字隐私与密码记忆","恐怖片流行原因","人类行为与心理"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["人工智能技术在中国各行业的应用及发展前景"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-12-set3","title":"2024年12月 六级真题 (第三套)","desc":"写作论证技巧","url":"exam-detail.html?id=cet6-2024-12-set3","year":2024,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_12_3/test.pdf","keyPoints":{"listening":["长对话涉及商业项目；讲座偏社会学话题"],"reading":["社会经济学","左脑与右脑差异","认知科学","教育应用"],"writing":["人工智能对职场的影响（同第一套）"],"translation":["京剧脸谱艺术"],"difficulty":"较难","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2024-06-set1","title":"2024年6月 六级真题 (第一套)","desc":"真实真题（含听力音频）","url":"exam-detail.html?id=cet6-2024-06-set1","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_1/test.pdf","keyPoints":{"listening":["听力语速偏快，连读弱读较多，短对话聚焦职场、学术场景"],"reading":["职场与教育","社会变迁","科普发现","文化传承"],"writing":["数字素养技能（Digital Literacy Skills）"],"translation":["中国传统婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2024_06_1","hasListening":true},{"id":"cet6-2024-06-set2","title":"2024年6月 六级真题 (第二套)","desc":"复杂句式解析","url":"exam-detail.html?id=cet6-2024-06-set2","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_2/test.pdf","keyPoints":{"listening":["长对话主题为“学术会议筹备”，讲座细节推断"],"reading":["教育公平","信息匹配","深度推理","社会现象剖析"],"writing":["社会实践和理论学习同等重要（Social Practice and Academic Learning）"],"translation":["竹子"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2024-06-set3","title":"2024年6月 六级真题 (第三套)","desc":"听力长对话攻略","url":"exam-detail.html?id=cet6-2024-06-set3","year":2024,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2024_06_3/test.pdf","keyPoints":{"listening":["语速快，弱读连读多；注意转折词后的答案区间"],"reading":["词汇搭配","观点梳理与匹配","独立思考","自主学习"],"writing":["坚持独立思考 / 自主学习"],"translation":["中国婚礼习俗"],"difficulty":"较难","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2023-12-set1","title":"2023年12月 六级真题 (第一套)","desc":"深入剖析长难句","url":"exam-detail.html?id=cet6-2023-12-set1","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_1/test.pdf","keyPoints":{"listening":["短篇新闻涉及量子计算、乡村教育振兴；讲座关注专业术语理解（如“量子霸权”）"],"reading":["AI时代创造力价值","数字经济对传统行业的冲击与机遇","环境保护与经济发展","社会文化"],"writing":["环境保护与经济发展（分析矛盾并提出解决方案）"],"translation":["中国人口结构变化与老龄化社会"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_1","hasListening":true},{"id":"cet6-2023-12-set2","title":"2023年12月 六级真题 (第二套)","desc":"科技文献阅读","url":"exam-detail.html?id=cet6-2023-12-set2","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_2/test.pdf","keyPoints":{"listening":["短篇新闻涉及全球生物多样性保护会议；长对话职场场景"],"reading":["AI时代创造力价值","多元文化社会的价值冲突与融合","基础知识获取的重要性","跨文化沟通"],"writing":["The importance of acquiring the basic knowledge"],"translation":["中国城镇化进程"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_2","hasListening":true},{"id":"cet6-2023-12-set3","title":"2023年12月 六级真题 (第三套)","desc":"翻译精准表达","url":"exam-detail.html?id=cet6-2023-12-set3","year":2023,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_12_3/test.pdf","keyPoints":{"listening":["讲座学术逻辑性强，注意信号词和逻辑词"],"reading":["社会现象","逻辑推理与信息匹配","老年人社会贡献","职场与生活"],"writing":["老年人凭借宝贵技能和经验继续为社会做贡献（给定开头句）"],"translation":["中国养老服务体系建设"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_12_3","hasListening":true},{"id":"cet6-2023-06-set1","title":"2023年6月 六级真题 (第一套)","desc":"议论文写作范式","url":"exam-detail.html?id=cet6-2023-06-set1","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["注意力管理","专注力对学习工作的重要性","AI时代思考能力","多角度分析"],"writing":["AI时代思考能力","多角度分析"],"translation":["贴春联"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_1","hasListening":true},{"id":"cet6-2023-06-set2","title":"2023年6月 六级真题 (第二套)","desc":"学术词汇积累","url":"exam-detail.html?id=cet6-2023-06-set2","year":2023,"month":"06","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["AI创造力争议","人工智能能否替代人类创作","科技伦理","社会影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["印章"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_2/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_2","hasListening":true},{"id":"cet6-2023-06-set3","title":"2023年6月 六级真题 (第三套)","desc":"听力讲座笔记法","url":"exam-detail.html?id=cet6-2023-06-set3","year":2023,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2023_06_3/test.pdf","keyPoints":{"listening":["前沿科技专业话题，讲座细节推断，对话推理，笔记技巧"],"reading":["多元文化","文化价值冲突与融合","文化认同","全球化影响"],"writing":["AI时代思考能力","多角度分析"],"translation":["中央电视台总部大楼"],"difficulty":"中等","readingDifficulty":["难","中","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2023_06_3","hasListening":true},{"id":"cet6-2022-12-set1","title":"2022年12月 六级真题 (第一套)","desc":"后疫情时代话题","url":"exam-detail.html?id=cet6-2022-12-set1","year":2022,"month":"12","keyPoints":{"listening":["三篇新闻聚焦后疫情时代社会议题"],"reading":["韧性城市建设","数字鸿沟对社会公平的影响","学生贷款与教育公平","社会政策分析"],"writing":["培养团队精神"],"translation":["春节（习俗","文化内涵和现代意义）"],"difficulty":"中等","readingDifficulty":["中","难","中","中"],"readingLevel":"难"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_1/test.pdf","source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_1","hasListening":true},{"id":"cet6-2022-12-set2","title":"2022年12月 六级真题 (第二套)","desc":"经济全球化主题","url":"exam-detail.html?id=cet6-2022-12-set2","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_2/test.pdf","keyPoints":{"listening":["长对话细节题占比高，注意逻辑关系"],"reading":["社会心理","数字鸿沟与信息公平","教育公平","社会阶层与流动"],"writing":["培养批判性思维（逻辑推理","避免草率判断）"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_2","hasListening":true},{"id":"cet6-2022-12-set3","title":"2022年12月 六级真题 (第三套)","desc":"文化多样性","url":"exam-detail.html?id=cet6-2022-12-set3","year":2022,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2022_12_3/test.pdf","keyPoints":{"listening":["学术讲座偏多，逻辑结构清晰"],"reading":["文化现象","古典音乐受众演变","文化传承与创新","艺术与商业"],"writing":["信息时代的学习"],"translation":["春节（同第一套）"],"difficulty":"中等","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"cettong","sourceUrl":"https://www.cettong.cn/library/cet6/2022_12_3","hasListening":true},{"id":"cet6-2022-06-set1","title":"2022年6月 六级真题 (第一套)","desc":"气候变化议题","url":"exam-detail.html?id=cet6-2022-06-set1","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第1套.pdf","keyPoints":{"listening":["全国仅考一套听力，长对话、篇章、讲座题型并重"],"reading":["环保生活","长难句与观点梳理","环境政策","绿色生活方式"],"writing":["Live an Environmentally Friendly Lifestyle"],"translation":["剪纸"],"difficulty":"中等","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2022-06-set2","title":"2022年6月 六级真题 (第二套)","desc":"人工智能伦理","url":"exam-detail.html?id=cet6-2022-06-set2","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第2套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","信息匹配与细节定位","社会文化","生态保护"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["皮影戏"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2022-06-set3","title":"2022年6月 六级真题 (第三套)","desc":"可持续发展","url":"exam-detail.html?id=cet6-2022-06-set3","year":2022,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2022.06 第3套.pdf","keyPoints":{"listening":["（同第一套）"],"reading":["环保生活","科普推理","社会热点问题","文化现象"],"writing":["Live an Environmentally Friendly Lifestyle（同第一套）"],"translation":["昆曲"],"difficulty":"中等","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2021-12-set1","title":"2021年12月 六级真题 (第一套)","desc":"数字经济时代","url":"exam-detail.html?id=cet6-2021-12-set1","year":2021,"month":"12","keyPoints":{"listening":["场景多样，细节题占比高"],"reading":["睡眠与健康","社会现象分析","有效沟通","人际关系"],"writing":["有效沟通能力的重要性"],"translation":["井冈山（中国革命摇篮）"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"},"pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_1/test.pdf","source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_1","hasListening":true},{"id":"cet6-2021-12-set2","title":"2021年12月 六级真题 (第二套)","desc":"社会公平正义","url":"exam-detail.html?id=cet6-2021-12-set2","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_2/test.pdf","keyPoints":{"listening":["讲座学术性强，需要笔记辅助"],"reading":["经济影响","自动化对经济的破坏性","科技与就业","社会变迁"],"writing":["Say Thank You to Parents（向父母道谢）"],"translation":["延安（中国革命圣地）"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_2","hasListening":true},{"id":"cet6-2021-12-set3","title":"2021年12月 六级真题 (第三套)","desc":"科技创新驱动","url":"exam-detail.html?id=cet6-2021-12-set3","year":2021,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_12_3/test.pdf","keyPoints":{"listening":["长对话偏职场与生活场景"],"reading":["社会心理","社交媒体与数字阅读","数字时代生活","阅读习惯"],"writing":["虚假信息"],"translation":["中国共产党第一次全国代表大会会址"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_12_3","hasListening":true},{"id":"cet6-2021-06-set1","title":"2021年6月 六级真题 (第一套)","desc":"疫情下的教育变革","url":"exam-detail.html?id=cet6-2021-06-set1","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_1/test.pdf","keyPoints":{"listening":["长对话8%、听力篇章7%、讲座20%，注意转折、因果、最高级等关键词"],"reading":["创造力","画画与创造力教育","AI与就业","职业发展"],"writing":["社交媒体是否拉近了人际距离"],"translation":["海南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_1","hasListening":true},{"id":"cet6-2021-06-set2","title":"2021年6月 六级真题 (第二套)","desc":"远程办公趋势","url":"exam-detail.html?id=cet6-2021-06-set2","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_2/test.pdf","keyPoints":{"listening":["注意七种关键词（转折、因果、最高级、事实罗列等）"],"reading":["技术影响","汽车改变生活","文化遗产（巴黎圣母院大火）","科技与社会"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["云南"],"difficulty":"适中","readingDifficulty":["难","难","难","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_2","hasListening":true},{"id":"cet6-2021-06-set3","title":"2021年6月 六级真题 (第三套)","desc":"医疗卫生体系","url":"exam-detail.html?id=cet6-2021-06-set3","year":2021,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website/4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2021_06_3/test.pdf","keyPoints":{"listening":["长对话、篇章、讲座题型分布均衡"],"reading":["教育观念","学校创造力教育","教育公平","个人成长"],"writing":["社交媒体是否拉近了人际距离（同第一套）"],"translation":["青海"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"},"source":"whoamiARC","sourceUrl":"https://github.com/whoamiARC/cet-website/tree/master/public/library/cet6/2021_06_3","hasListening":true},{"id":"cet6-2020-12-set1","title":"2020年12月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set1","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop the ability to meet challenges"]}},{"id":"cet6-2020-12-set2","title":"2020年12月 六级真题 (第二套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-12-set2","year":2020,"month":"12","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on why students should be encouraged to develop ef fective communication skills"]}},{"id":"cet6-2020-12-set3","title":"2020年12月 六级真题 (第三套)","desc":"国际合作发展","url":"exam-detail.html?id=cet6-2020-12-set3","year":2020,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2020_12_3/answer.pdf","keyPoints":{"listening":["注意事实罗列词汇、情态动词"],"reading":["艺术欣赏","艺术欣赏困境","创造力","挑战自我"],"writing":["Why students should take challenges"],"translation":["大兴机场"],"difficulty":"适中","readingDifficulty":["中","中","中","难"],"readingLevel":"难"}},{"id":"cet6-2020-09-set1","title":"2020年9月 六级真题 (第一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set1","year":2020,"month":"09","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;Beauty of the soul is the essential beauty.&rdquo;"]}},{"id":"cet6-2020-09-set2","title":"2020年9月 六级真题 (第二、三套合并卷)","desc":"第二、三套合并卷，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-09-set2","year":2020,"month":"09","keyPoints":{"listening":["全国共考1套听力，与第一套一致"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["在线经济崛起"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["第二、三套作文真题整理中"]}},{"id":"cet6-2020-07-set1","title":"2020年7月 六级真题 (全国仅一套)","desc":"收录真题，含听力原文与逐题解析","url":"exam-detail.html?id=cet6-2020-07-set1","year":2020,"month":"07","keyPoints":{"listening":["语速适中，兼顾学术与生活场景","注意逻辑信号词与同义替换"],"reading":["社会与科技","人文关怀","教育与成长","环境与生态"],"translation":["中国社会与文化"],"difficulty":"中等","readingDifficulty":["中","中","中","中"],"readingLevel":"中","writing":["on the saying &ldquo;The best preparation for tomorrow is doing your best today."]}},{"id":"cet6-2019-12-set1","title":"2019年12月 六级真题 (第一套)","desc":"5G时代来临","url":"exam-detail.html?id=cet6-2019-12-set1","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_1/listening.mp3","keyPoints":{"listening":["讲座听力为重点，需关注学术逻辑"],"reading":["家庭责任","责任感","牡丹花文化","传统美德"],"writing":["家庭责任感"],"translation":["牡丹花"],"difficulty":"适中","readingDifficulty":["中","易","中","难"],"readingLevel":"难"}},{"id":"cet6-2019-12-set2","title":"2019年12月 六级真题 (第二套)","desc":"区块链技术","url":"exam-detail.html?id=cet6-2019-12-set2","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_2/listening.mp3","keyPoints":{"listening":["讲座学术逻辑，注意信号词"],"reading":["社会责任","责任感","荷花文化","社会价值观"],"writing":["社会责任感"],"translation":["荷花"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-12-set3","title":"2019年12月 六级真题 (第三套)","desc":"大数据应用","url":"exam-detail.html?id=cet6-2019-12-set3","year":2019,"month":"12","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_12_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["团体责任","责任感","梅花文化","传统文化"],"writing":["团体责任感"],"translation":["梅花"],"difficulty":"适中","readingDifficulty":["中","易","易","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set1","title":"2019年6月 六级真题 (第一套)","desc":"文化自信建设","url":"exam-detail.html?id=cet6-2019-06-set1","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_1/listening.mp3","keyPoints":{"listening":["长对话、Passage、Lecture三种题型"],"reading":["AI影响","AI对人类文明的影响","AI与霍金警告","团队精神与沟通"],"writing":["团队精神和沟通在工作中的重要性"],"translation":["汉语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set2","title":"2019年6月 六级真题 (第二套)","desc":"生态文明理念","url":"exam-detail.html?id=cet6-2019-06-set2","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/answer.pdf","audio":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_2/listening.mp3","keyPoints":{"listening":["注意信号词和逻辑词"],"reading":["创业","老年人市场","学习动机","教育与工作"],"writing":["学习动机和学习方法的重要性"],"translation":["成语"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2019-06-set3","title":"2019年6月 六级真题 (第三套)","desc":"创新型国家","url":"exam-detail.html?id=cet6-2019-06-set3","year":2019,"month":"06","pdf":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/test.pdf","pdfAnswer":"https://cdn.jsdelivr.net/gh/whoamiARC/cet-website@4f4341cd7340f15e5d2d8cb8ecd8643fa8a46cae/public/library/cet6/2019_06_3/answer.pdf","keyPoints":{"listening":["同上"],"reading":["职业转型","重新工作感受与AI发展","人际交往","互相尊重"],"writing":["人际交往中相互理解和尊重的重要性"],"translation":["方言"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set1","title":"2018年12月 六级真题 (第一套)","desc":"改革开放40年","url":"exam-detail.html?id=cet6-2018-12-set1","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第1套.pdf","keyPoints":{"listening":["需关注关键句而非追求整篇听懂"],"reading":["农业机器人","机器人在农业中的应用","科普沟通","留学挑战"],"writing":["The challenges of studying abroad"],"translation":["图书馆"],"difficulty":"适中","readingDifficulty":["中","中","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-12-set2","title":"2018年12月 六级真题 (第二套)","desc":"移动支付革命","url":"exam-detail.html?id=cet6-2018-12-set2","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第2套.pdf","keyPoints":{"listening":["同上"],"reading":["儿童注意力发展","智能手机与心理学","毕业挑战","职场适应"],"writing":["The challenges of starting a career after graduation"],"translation":["博物馆"],"difficulty":"适中","readingDifficulty":["中","中","难","难"],"readingLevel":"难"}},{"id":"cet6-2018-12-set3","title":"2018年12月 六级真题 (第三套)","desc":"高铁走向世界","url":"exam-detail.html?id=cet6-2018-12-set3","year":2018,"month":"12","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.12 第3套.pdf","keyPoints":{"listening":["同上"],"reading":["教育方法","高等数学争论","护理机器人","大城市生活","社会适应"],"writing":["The challenges of living in big cities"],"translation":["体育馆"],"difficulty":"适中","readingDifficulty":["中","中","难","中"],"readingLevel":"难"}},{"id":"cet6-2018-06-set1","title":"2018年6月 六级真题 (第一套)","desc":"智能制造升级","url":"exam-detail.html?id=cet6-2018-06-set1","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第1套.pdf","keyPoints":{"listening":["长对话为热身过渡（7%），重点在讲座讲话（第23-25题）"],"reading":["非名校选择","社会文化","高铁网络与社会发展"],"writing":["建立企业与消费者之间的信任"],"translation":["高铁"],"difficulty":"适中","readingDifficulty":["易","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set2","title":"2018年6月 六级真题 (第二套)","desc":"电子商务发展","url":"exam-detail.html?id=cet6-2018-06-set2","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第2套.pdf","keyPoints":{"listening":["讲座听力涉及大写专有名词和数字（如1984）；第23题偏主旨概括题"],"reading":["专有名词","词汇辨析","社会现象","生活质量"],"writing":["建立师生之间的信任"],"translation":["私家车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}},{"id":"cet6-2018-06-set3","title":"2018年6月 六级真题 (第三套)","desc":"共享单车现象","url":"exam-detail.html?id=cet6-2018-06-set3","year":2018,"month":"06","pdf":"http://bf-lgs-kjg-hd-bkl.clouddn.com/cet6/pdf/CET-6 2018.06 第3套.pdf","keyPoints":{"listening":["听力素材与第二套一致，仅选项顺序不同"],"reading":["社会文化","人际关系","社会发展"],"writing":["建立老板和员工之间的信任"],"translation":["共享单车"],"difficulty":"适中","readingDifficulty":["中","易","中","中"],"readingLevel":"中"}}]'),o0={cet4:Dm,cet6:Rm},Om=o0,qm={blue:{"--pf-accent":"#60a5fa","--pf-back":"#0056b3","--pf-front":"rgba(0, 123, 255, 0.65)","--pf-hint":"#60a5fa"},yellow:{"--pf-accent":"#FFCC00","--pf-back":"#F0B400","--pf-front":"rgba(255, 204, 0, 0.72)","--pf-hint":"#FFCC00"}};function Hm(o,f){return(Om[o]??[]).filter(u=>Number(u.year)===f).length}const Os=({label:o,text:f,testId:u,type:s,onEnter:p,accent:S="blue"})=>{const[b,j]=h.useState(!1),[w,k]=h.useState(""),R=h.useMemo(()=>{if(!s)return null;const N=w.trim().match(/^(20\d{2})\s*年?$/);if(!N)return null;const U=Number(N[1]),V=Hm(s,U);return{year:U,count:V}},[w,s]);return r.jsxs("div",{className:"pf-item","data-type":s??"kaoyan",style:qm[S],children:[r.jsxs("div",{className:`folder-card${b?" open":""}`,"data-testid":u,onClick:()=>j(N=>!N),children:[r.jsxs("div",{className:"hint-wrapper",children:[r.jsx("span",{className:"hint-text",children:"Click to open"}),r.jsx("svg",{className:"hint-arrow",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M 35 5 C 35 5, 15 5, 10 25 M 10 25 L 3 18 M 10 25 L 18 22",stroke:"var(--pf-hint)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r.jsxs("div",{className:"folder-container",children:[r.jsx("svg",{className:"folder-back",viewBox:"0 0 50 40",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H16.524C17.721 0 18.8415 0.54051 19.574 1.4673L22.426 5.0654C23.1585 5.99219 24.279 6.5327 25.476 6.5327H46C48.2091 6.5327 50 8.32356 50 10.5327V36C50 38.2091 48.2091 40 46 40H4C1.79086 40 0 38.2091 0 36V4Z",fill:"var(--pf-back)"})}),s&&r.jsxs("div",{className:"folder-search",onClick:N=>N.stopPropagation(),children:[r.jsxs("svg",{className:"search-icon",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),r.jsx("input",{type:"text",inputMode:"numeric",placeholder:"年份 如 2025",className:"search-input",value:w,"aria-label":`在 ${o} 中按年份搜索`,onChange:N=>{k(N.target.value.replace(/[^\d年]/g,"").slice(0,5))},onKeyDown:N=>{N.key==="Enter"&&(R!=null&&R.count)&&(N.preventDefault(),p(s??"kaoyan",R.year))}})]}),R&&r.jsx("div",{className:`year-hint${R.count?"":" is-empty"}`,"data-testid":`${u}-year-hint`,onClick:N=>{N.stopPropagation(),R.count&&p(s??"kaoyan",R.year)},children:R.count?r.jsxs(r.Fragment,{children:[r.jsxs("b",{children:[R.year," 年"]})," · ",R.count," 套 · 回车打开"]}):r.jsxs(r.Fragment,{children:[R.year," 年暂无试卷"]})}),r.jsxs("div",{className:"file file-5",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),r.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),r.jsx("polyline",{points:"21 15 16 10 5 21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 4.2 MB"})]}),r.jsxs("div",{className:"file file-4",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),r.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 128 MB"})]}),r.jsxs("div",{className:"file file-3",children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 12 KB"})]}),r.jsxs("div",{className:"file file-2","data-testid":`${u}-enter`,onClick:N=>{N.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),r.jsx("polyline",{points:"10 9 9 9 8 9"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 1.1 MB"})]}),r.jsxs("div",{className:"file file-1","data-testid":`${u}-enter-top`,onClick:N=>{N.stopPropagation(),p(s??"kaoyan")},children:[r.jsx("div",{className:"shine"}),r.jsxs("svg",{className:"file-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),r.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),r.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),r.jsx("div",{className:"file-text",children:f}),r.jsx("div",{className:"file-tag",children:"PDF • 8.4 MB"})]}),r.jsxs("div",{className:"folder-front-wrapper",children:[r.jsx("svg",{className:"folder-front",viewBox:"0 0 50 34",fill:"none",children:r.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V30C50 32.2091 48.2091 34 46 34H4C1.79086 34 0 32.2091 0 30V4Z",fill:"var(--pf-front)"})}),r.jsx("div",{className:"folder-label"}),r.jsxs("div",{className:"counter",children:[r.jsx("div",{className:"status-dot"}),r.jsx("span",{className:"counter-label",children:"FILES"}),r.jsx("span",{className:"counter-number","data-testid":`${u}-count`,children:R?R.count||"0":s?"All":"NEW"})]})]})]})]}),r.jsx("div",{className:"pf-caption",children:o})]})},Um=({onEnter:o})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Bm}),r.jsxs("div",{className:"pe-train-head",children:[r.jsx("h2",{className:"pe-train-title",children:"题目训练"}),r.jsxs("div",{className:"pe-train-tabs",children:[r.jsx("button",{type:"button",className:"pe-train-tab is-on",children:"真题训练"}),r.jsx("button",{type:"button",className:"pe-train-tab",onClick:()=>window.alert("导入题目功能即将上线"),children:"导入题目"})]})]}),r.jsxs("div",{className:"pf-stage",children:[r.jsx(Os,{label:"CET-4 英语四级",text:"CET-4",testId:"paper-entry-cet4",type:"cet4",onEnter:o}),r.jsx(Os,{label:"CET-6 英语六级",text:"CET-6",testId:"paper-entry-cet6",type:"cet6",onEnter:o}),r.jsx(Os,{label:"考研英语",text:"KAOYAN",testId:"paper-entry-kaoyan",accent:"yellow",onEnter:o})]})]}),Bm=`
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
`,Ym=o0,$m=({activeType:o,initialYear:f="",onTypeChange:u,onOpenPaper:s,onBackToEntry:p})=>{const[S,b]=h.useState(""),[j,w]=h.useState(f),[k,R]=h.useState(""),[N,U]=h.useState(""),[V,Q]=h.useState([]),[W,oe]=h.useState(null),[ae,F]=h.useState(!1),[pe,xe]=h.useState(!1),ke=h.useRef(null),he=h.useRef(null),be=h.useRef(!1),Ee=h.useRef([]);h.useEffect(()=>{const y=C=>{const D=C.target;if(!(D instanceof HTMLElement)||!ke.current||!(D===ke.current||D.contains(ke.current)))return;const X=D.scrollTop>120;F(te=>te!==X?X:te),D.scrollTop>4&&(be.current=!0);const I=D.getBoundingClientRect(),m=I.top+I.height/2;let _=null,K=Number.POSITIVE_INFINITY;for(let te=1;te<Ee.current.length;te++){const me=Ee.current[te];if(!me)continue;const ee=me.getBoundingClientRect();if(ee.top<=m&&ee.bottom>=m){const Ne=Math.abs((ee.top+ee.bottom)/2-m);Ne<K&&(K=Ne,_=te)}}_!==null?(he.current=_,oe(_)):he.current!==null&&(oe(te=>te===he.current?null:te),he.current=null)};return document.addEventListener("scroll",y,!0),()=>document.removeEventListener("scroll",y,!0)},[]),h.useEffect(()=>{const y=window.setTimeout(()=>{be.current||(he.current=0,oe(0))},5e3);return()=>window.clearTimeout(y)},[o]),h.useEffect(()=>{try{Q(JSON.parse(localStorage.getItem("cet:history")||"[]"))}catch{Q([])}},[]);const re=Ym[o]??[],fe=Xm(re.map(y=>String(y.year??"")).filter(Boolean)),ne=["12","07","06"],M=re.filter(y=>{var K,te;const C=S.trim().toLowerCase(),D=((K=/^(20\d{2})\s*年?$/.exec(C))==null?void 0:K[1])??"",X=!C||!!D&&String(y.year)===D||y.title.toLowerCase().includes(C)||(y.desc||"").toLowerCase().includes(C),I=!j||String(y.year)===j,m=!k||y.month===k,_=!N||((te=y.keyPoints)==null?void 0:te.readingLevel)===N;return X&&I&&m&&_}),se=[];for(let y=0;y<M.length;y+=3)se.push(M.slice(y,y+3));Ee.current.length=se.length;const de=y=>V.filter(C=>C&&C.id===y).length,Le=y=>{he.current=null,oe(y)};return r.jsxs("div",{ref:ke,className:`pl-root${ae?" scrolled":""}`,children:[r.jsx("style",{children:Vm}),r.jsxs("div",{className:"pl-float",children:[r.jsxs("div",{className:"pl-float-bar",children:[r.jsxs("div",{className:"pl-float-left",children:[r.jsx("button",{className:"pl-fab",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Zp,{})}),r.jsx("button",{className:`pl-fab${pe?" on":""}`,onClick:()=>xe(y=>!y),"aria-label":"搜索",title:"搜索",children:r.jsx(Ts,{width:17,height:17})})]}),r.jsxs("div",{className:"pl-float-right",children:[r.jsxs("div",{className:"pl-fab-filters",children:[r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:j||"年"}),r.jsxs("select",{value:j,onChange:y=>w(y.target.value),"aria-label":"年份",children:[r.jsx("option",{value:"",children:"全部年份"}),fe.map(y=>r.jsxs("option",{value:y,children:[y," 年"]},y))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:k?`${Number(k)}月`:"月"}),r.jsxs("select",{value:k,onChange:y=>R(y.target.value),"aria-label":"月份",children:[r.jsx("option",{value:"",children:"全部月份"}),ne.map(y=>r.jsxs("option",{value:y,children:[Number(y)," 月"]},y))]})]}),r.jsxs("span",{className:"pl-chip-wrap",children:[r.jsx("button",{className:"pl-fab pl-chip",tabIndex:-1,children:N||"难度"}),r.jsxs("select",{value:N,onChange:y=>U(y.target.value),"aria-label":"难度",children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]})]})]}),r.jsx("div",{className:"pl-fab-switch",children:["cet4","cet6"].map(y=>r.jsx("button",{onClick:()=>{u(y),b(""),w(""),R(""),U(""),xe(!1)},className:`pl-fab pl-num${o===y?" on":""}`,children:y==="cet4"?"4":"6"},y))})]})]}),ae&&pe&&r.jsxs("div",{className:"pl-search-pop",children:[r.jsx(Ts,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{autoFocus:!0,value:S,onChange:y=>b(y.target.value),placeholder:"搜索真题标题 / 年份 如 2025"}),r.jsxs("button",{className:"pl-pop-reset",onClick:()=>{b(""),w(""),R(""),U("")},children:[r.jsx(Op,{width:14,height:14,color:"var(--affine-text-secondary-color)"}),"重置"]})]})]}),r.jsxs("div",{className:"pl-inner",children:[r.jsxs("div",{className:"pl-head",children:[r.jsxs("div",{className:"pl-head-left",children:[r.jsx("button",{className:"pl-back-inline",onClick:p,"aria-label":"返回",title:"返回",children:r.jsx(Zp,{})}),r.jsxs("div",{children:[r.jsx("h2",{className:"pl-h2",children:"真题试卷库"}),r.jsx("p",{className:"pl-sub",children:"收录历年 CET-4 / CET-6 真题，支持在线阅读与自测"})]})]}),r.jsx("div",{className:"pl-switch",children:["cet4","cet6"].map(y=>r.jsx("button",{onClick:()=>{u(y),b(""),w(""),R(""),U("")},className:`pl-switch-btn${o===y?" on":""}`,children:y==="cet4"?"英语四级 (CET-4)":"英语六级 (CET-6)"},y))})]}),r.jsxs("div",{className:"pl-filter",children:[r.jsxs("div",{className:"pl-search",children:[r.jsx(Ts,{width:16,height:16,color:"var(--affine-text-secondary-color)"}),r.jsx("input",{value:S,onChange:y=>b(y.target.value),placeholder:"搜索真题标题 / 年份 如 2025"})]}),r.jsxs("select",{value:j,onChange:y=>w(y.target.value),children:[r.jsx("option",{value:"",children:"全部年份"}),fe.map(y=>r.jsxs("option",{value:y,children:[y," 年"]},y))]}),r.jsxs("select",{value:k,onChange:y=>R(y.target.value),children:[r.jsx("option",{value:"",children:"全部月份"}),ne.map(y=>r.jsxs("option",{value:y,children:[Number(y)," 月"]},y))]}),r.jsxs("select",{value:N,onChange:y=>U(y.target.value),children:[r.jsx("option",{value:"",children:"全部难度"}),r.jsx("option",{value:"易",children:"阅读较易"}),r.jsx("option",{value:"中",children:"阅读中等"}),r.jsx("option",{value:"难",children:"阅读偏难"})]}),r.jsxs("button",{className:"pl-reset",onClick:()=>{b(""),w(""),R(""),U("")},children:[r.jsx(Op,{width:15,height:15,color:"var(--affine-text-secondary-color)"}),"重置"]}),r.jsxs("span",{className:"pl-count",children:["共 ",M.length," 套"]})]}),M.length===0?r.jsx("div",{className:"pl-empty",children:"没有符合条件的试卷"}):se.map((y,C)=>{const D=W===C;return r.jsx("div",{className:"lion-container",ref:X=>{Ee.current[C]=X},children:y.map((X,I)=>r.jsx(Gm,{paper:X,type:o,r:[-15,5,25][I%3],submitted:de(X.id),expanded:D,onOpen:()=>s(X),onActivate:()=>Le(C)},X.id))},C)})]})]})},Gm=({paper:o,type:f,r:u,submitted:s,expanded:p,onOpen:S,onActivate:b})=>{const j=o.keyPoints,[w,k]=h.useState(!1),R=()=>{p?k(F=>!F):b()},N=[{label:"听力重点",items:j==null?void 0:j.listening},{label:"阅读重点",items:j==null?void 0:j.reading},{label:"写作重点",items:j==null?void 0:j.writing},{label:"翻译主题",items:j==null?void 0:j.translation}],U=(j==null?void 0:j.readingDifficulty)??[],V=U.length?U.map((F,pe)=>`P${pe+1} ${F}`).join(" · "):"",Q=/^(.*?)\s*([（(]\s*第[^）)]*[）)])\s*$/.exec(o.title.trim()),W=Q?Q[1].trim():o.title,oe=Q?Q[2]:"",ae=["glass","pl-glass",p?"expanded":"",w?"flipped":""].filter(Boolean).join(" ");return r.jsxs("div",{className:ae,"data-text":`${o.year}年`,style:{"--r":u},children:[r.jsxs("div",{className:"pl-face pl-face-front",children:[r.jsxs("div",{className:"pl-title",children:[r.jsx("span",{className:"pl-title-main",children:W}),oe&&r.jsx("span",{className:"pl-title-sub",children:oe})]}),r.jsxs("div",{className:"pl-meta",children:[r.jsx("span",{children:"已提交次数"}),r.jsxs("b",{children:[s," 次"]})]})]}),r.jsxs("div",{className:"pl-face pl-face-back",children:[r.jsx("div",{className:"pl-back-head",children:"考试重难点"}),V&&r.jsxs("div",{className:"pl-back-sec",children:[r.jsxs("div",{className:"pl-back-label",children:["阅读难度",(j==null?void 0:j.readingLevel)&&r.jsxs("span",{className:`rd-level lv-${j.readingLevel}`,children:["最难 ",j.readingLevel]})]}),r.jsx("div",{className:"pl-rd",children:U.map((F,pe)=>r.jsxs("span",{className:`rd-item lv-${F}`,children:["第",["一","二","三","四"][pe],"篇 ",F]},pe))})]}),N.map(F=>r.jsxs("div",{className:"pl-back-sec",children:[r.jsx("div",{className:"pl-back-label",children:F.label}),r.jsx("div",{className:"pl-back-text",children:F.items&&F.items.length>0?F.items.join(" · "):"—"})]},F.label)),r.jsx("div",{className:"pl-back-tip",children:"再次点击翻回"})]}),r.jsx("div",{className:"pl-hit",onClick:R}),r.jsxs("div",{className:"pl-actions",onClick:F=>F.stopPropagation(),children:[r.jsx("button",{className:"pl-btn-write",onClick:S,children:"write"}),r.jsx("button",{type:"button",className:"pl-btn-download",onClick:()=>window.alert("该真题 PDF 源文件暂未上传，可在线查看试卷内容"),children:"download"})]})]})};function Xm(o){return[...new Set(o)].sort((f,u)=>u.localeCompare(f))}const Zp=()=>r.jsx("svg",{width:"19",height:"19",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M14.5 5.5 8 12l6.5 6.5"})}),Vm=`
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
`,Zm=[{key:"yi",tip:"英语（一）",second:"学术学位 · 历年真题",bg:"#0E61AC",fg:"#ffffff"},{key:"er",tip:"英语（二）",second:"专业学位 · 历年真题",bg:"#FAF2E0",fg:"#0E61AC"}],Qm=({onPick:o,onBack:f})=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[r.jsx("style",{children:Km}),r.jsxs("div",{className:"ky-head",children:[r.jsx("button",{type:"button",className:"ky-back",onClick:f,children:"← 返回真题训练"}),r.jsx("h2",{className:"ky-title",children:"考研英语"}),r.jsx("p",{className:"ky-sub",children:"选择报考类型进入题库"})]}),r.jsx("div",{className:"ky-stage",children:r.jsx("div",{className:"cards","data-testid":"kaoyan-cards",children:Zm.map(u=>r.jsxs("div",{className:"card","data-testid":`kaoyan-card-${u.key}`,style:{"--ky-bg":u.bg,"--ky-fg":u.fg},onClick:()=>o(u.key),children:[r.jsx("p",{className:"tip",children:u.tip}),r.jsx("p",{className:"second-text",children:u.second}),r.jsx("p",{className:"paper-foot",children:"硕士研究生入学考试"})]},u.key))})})]}),Km=`
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
`,Jm=()=>{const[o,f]=h.useState("cet4"),[u,s]=h.useState(!1),[p,S]=h.useState(null),[b,j]=h.useState(""),[w,k]=h.useState(!1);return r.jsx("div",{"data-testid":"paper-view",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",position:"relative",background:"var(--affine-background-secondary-color)",overflow:"auto",paddingBottom:"84px"},children:r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:w?r.jsx(Qm,{onPick:R=>{const N=R==="yi"?"英语（一）":"英语（二）";window.alert(`考研英语${N}题库即将上线`)},onBack:()=>k(!1)}):u?p?r.jsx(Tm,{paper:p,type:o,onBack:()=>S(null)}):r.jsx($m,{activeType:o,initialYear:b,onTypeChange:R=>{f(R),j("")},onOpenPaper:S,onBackToEntry:()=>{S(null),s(!1)}}):r.jsx(Um,{onEnter:(R,N)=>{if(R==="kaoyan"){k(!0);return}f(R),j(N?String(N):""),s(!0)}})})})},Fm="_root_y5qt2_3",Wm="_svg_y5qt2_13",Im="_barPath_y5qt2_23",Pm="_bevel_y5qt2_29",e1="_bevelShadow_y5qt2_37",t1="_tabsHorizontal_y5qt2_57 _tabs_y5qt2_48",n1="_tabsVertical_y5qt2_64 _tabs_y5qt2_48",a1="_tabSlot_y5qt2_71",l1="_tab_y5qt2_48",i1="_tabIcon_y5qt2_97",r1="_tabActive_y5qt2_101 _tab_y5qt2_48",o1="_circle_y5qt2_134",c1="_circleIcon_y5qt2_146",s1="_circleIconActive_y5qt2_167 _circleIcon_y5qt2_146",u1="_emptyGuard_y5qt2_174",d1="_moreCard_y5qt2_186",f1="_moreCardItem_y5qt2_211",p1="_moreCardItemActive_y5qt2_238 _moreCardItem_y5qt2_211",h1="_moreCardIcon_y5qt2_245",m1="_moreCardLabel_y5qt2_263",g1="_tabLabel_y5qt2_287",x1="_tabsHorizontalRTL_y5qt2_302 _tabs_y5qt2_48",y1="_tabsVerticalSafeArea_y5qt2_310 _tabs_y5qt2_48",gt={root:Fm,svg:Wm,barPath:Im,bevel:Pm,bevelShadow:e1,tabsHorizontal:t1,tabsVertical:n1,tabSlot:a1,tab:l1,tabIcon:i1,tabActive:r1,circle:o1,circleIcon:c1,circleIconActive:s1,emptyGuard:u1,moreCard:d1,moreCardItem:f1,moreCardItemActive:p1,moreCardIcon:h1,moreCardLabel:m1,tabLabel:g1,tabsHorizontalRTL:x1,tabsVerticalSafeArea:y1},b1=({children:o})=>r.jsx(r.Fragment,{children:o});var v1=Object.defineProperty,w1=Object.defineProperties,S1=Object.getOwnPropertyDescriptors,Qp=Object.getOwnPropertySymbols,k1=Object.prototype.hasOwnProperty,j1=Object.prototype.propertyIsEnumerable,Kp=(o,f,u)=>f in o?v1(o,f,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[f]=u,la=(o,f)=>{for(var u in f||(f={}))k1.call(f,u)&&Kp(o,u,f[u]);if(Qp)for(var u of Qp(f))j1.call(f,u)&&Kp(o,u,f[u]);return o},Zs=(o,f)=>w1(o,S1(f)),C1=56,A1=56,_1=7,_l=10,ia=.35,Ht=2,Jp=8,So=6,E1=350,ko={activeIconColor:"#007AFF",inactiveIconColor:"#6B7280",circleFillColor:"#FFFFFF",barBackground:"#FFFFFF"};function c0(o,f,u,s,p,S){const b=Math.sqrt(Math.max(0,u*u-s*s)),j=Math.min(b,o-p,f-S-o),k=Math.asin(Math.max(-1,Math.min(1,s/u)))+4*Math.PI/180,R=Math.sin(k),N=Math.cos(k),U=o-u*N,V=s+u*R,Q=o+u*N,W=R,oe=N,ae=o-j+ia*(U-(o-j)),F=U-Ht*W,pe=V-Ht*oe,xe=Q+Ht*W,ke=V-Ht*oe,he=o+j-ia*(o+j-Q);return`M ${o-j} 0 C ${ae} 0 ${F} ${pe} ${U} ${V} A ${u} ${u} 0 0 0 ${Q} ${V} C ${xe} ${ke} ${he} 0 ${o+j} 0`}function z1(o,f,u,s,p,S,b){const j=Math.sqrt(Math.max(0,s*s-p*p)),w=Math.min(j,o-S,f-b-o),R=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,N=Math.sin(R),U=Math.cos(R),V=u-(p+s*N),Q=s*U,W=o-w+ia*(w-s*U),oe=V+Ht*U,ae=o-Q-Ht*N,F=V+Ht*U,pe=o+Q+Ht*N,xe=o+w-ia*(w-s*U);return`M ${u} ${o-w} C ${u} ${W} ${oe} ${ae} ${V} ${o-Q} A ${s} ${s} 0 0 0 ${V} ${o+Q} C ${F} ${pe} ${u} ${xe} ${u} ${o+w}`}function N1(o,f){const{W:u,H:s,rc:p,yc:S,r:b=_l}=f,j=`M ${b} 0 L ${u-b} 0 A ${b} ${b} 0 0 1 ${u} ${b} L ${u} ${s-b} A ${b} ${b} 0 0 1 ${u-b} ${s} L ${b} ${s} A ${b} ${b} 0 0 1 0 ${s-b} L 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 Z`,w=c0(o,u,p,S,b,b);return`${j} ${w} Z`}function M1(o,f){const{W:u,rc:s,yc:p,r:S=_l}=f,b=Math.sqrt(Math.max(0,s*s-p*p)),j=Math.min(b,o-S,u-S-o),w=c0(o,u,s,p,S,S);return`M 0 ${S} A ${S} ${S} 0 0 1 ${S} 0 L ${o-j} 0 ${w} L ${u-S} 0 A ${S} ${S} 0 0 1 ${u} ${S}`}function T1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=_l}=f,j=`M 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 L ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u} L ${b} ${u} A ${b} ${b} 0 0 1 0 ${u-b} Z`,w=z1(o,u,s,p,S,b,b);return`${j} ${w} Z`}function L1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=_l}=f,j=Math.sqrt(Math.max(0,p*p-S*S)),w=Math.min(j,o-b,u-b-o),R=Math.asin(Math.max(-1,Math.min(1,S/p)))+4*Math.PI/180,N=Math.sin(R),U=Math.cos(R),V=s-(S+p*N),Q=p*U,W=o-w+ia*(w-p*U),oe=V+Ht*U,ae=o-Q-Ht*N,F=V+Ht*U,pe=o+Q+Ht*N,xe=o+w-ia*(w-p*U);return`M ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${o-w} C ${s} ${W} ${oe} ${ae} ${V} ${o-Q} A ${p} ${p} 0 0 0 ${V} ${o+Q} C ${F} ${pe} ${s} ${xe} ${s} ${o+w} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u}`}function D1(o,f,u,s,p,S,b){const j=Math.sqrt(Math.max(0,s*s-p*p)),w=Math.min(j,o-S,f-b-o),R=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,N=Math.sin(R),U=Math.cos(R),V=p+s*N,Q=s*U,W=o-w+ia*(w-s*U),oe=V-Ht*U,ae=o-Q-Ht*N,F=V-Ht*U,pe=o+Q+Ht*N,xe=o+w-ia*(w-s*U);return`M 0 ${o-w} C 0 ${W} ${oe} ${ae} ${V} ${o-Q} A ${s} ${s} 0 0 1 ${V} ${o+Q} C ${F} ${pe} 0 ${xe} 0 ${o+w}`}function R1(o,f){const{SH:u,SW:s,rc:p,yc:S,r:b=_l}=f,j=`M 0 ${b} A ${b} ${b} 0 0 1 ${b} 0 L ${s-b} 0 A ${b} ${b} 0 0 1 ${s} ${b} L ${s} ${u-b} A ${b} ${b} 0 0 1 ${s-b} ${u} L ${b} ${u} A ${b} ${b} 0 0 1 0 ${u-b} Z`,w=D1(o,u,s,p,S,b,b);return`${j} ${w} Z`}function O1(o,f){const{SH:u,rc:s,yc:p,r:S=_l}=f,b=Math.sqrt(Math.max(0,s*s-p*p)),j=Math.min(b,o-S,u-S-o),k=Math.asin(Math.max(-1,Math.min(1,p/s)))+4*Math.PI/180,R=Math.sin(k),N=Math.cos(k),U=p+s*R,V=s*N,Q=o-j+ia*(j-s*N),W=U-Ht*N,oe=o-V-Ht*R,ae=U-Ht*N,F=o+V+Ht*R,pe=o+j-ia*(j-s*N);return`M ${S} 0 A ${S} ${S} 0 0 0 0 ${S} L 0 ${o-j} C 0 ${Q} ${W} ${oe} ${U} ${o-V} A ${s} ${s} 0 0 1 ${U} ${o+V} C ${ae} ${F} 0 ${pe} 0 ${o+j} L 0 ${u-S} A ${S} ${S} 0 0 0 ${S} ${u}`}function q1(o,f,u){const s=[],p=(f-2*u)/o;for(let S=0;S<o;S++)s.push(u+p*(S+.5));return s}function H1({size:o,count:f,circleR:u,notchGap:s,pad:p=8}){const S=(o-2*p)/f,b=Math.max(4,Math.min(u,S/2-6)),j=Math.max(0,Math.min(s,S/2-b)),w=b*2;return{slot:S,effectiveCircleR:b,effectiveGap:j,effectiveCircleSize:w,rc:b+j}}function U1(){return r.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"6",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"6",r:"1.5"}),r.jsx("circle",{cx:"6",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"12",r:"1.5"}),r.jsx("circle",{cx:"6",cy:"18",r:"1.5"}),r.jsx("circle",{cx:"12",cy:"18",r:"1.5"}),r.jsx("circle",{cx:"18",cy:"18",r:"1.5"})]})}function B1(o){const f=h.useRef(o);return h.useLayoutEffect(()=>{f.current=o}),h.useCallback((...u)=>{var s;(s=f.current)==null||s.call(f,...u)},[])}function qs(o){return o===1?1:1-2**(-10*o)}var Ys="__notch_more__";function Y1({circleRef:o,effectiveCircleSize:f,offset:u,willChange:s,barTabs:p,activeIndex:S,hiddenActiveIndex:b,moreActive:j,hasMore:w,maxVisible:k,tabs:R,moreIconElement:N}){const U=j||b!=null;return r.jsx("div",{ref:o,className:gt.circle,style:Zs(la({},u),{width:f,height:f,willChange:s}),children:p.map((V,Q)=>{var W,oe;if(w&&Q===k-1){const F=b!=null&&(oe=(W=R[b])==null?void 0:W.activeIcon)!=null?oe:N;return r.jsx("span",{className:U?gt.circleIconActive:gt.circleIcon,children:F},Ys)}return r.jsx("span",{className:Q===S&&!U?gt.circleIconActive:gt.circleIcon,children:V.activeIcon},V.name)})})}function $1({tab:o,isActive:f,isMore:u,moreBarIcon:s,showLabel:p,ariaSelected:S,moreLabel:b,tabRef:j,onClick:w,onKeyDown:k,onPointerDown:R,onPointerUp:N,onPointerLeave:U,ariaExpanded:V}){const Q=r.jsxs("button",Zs(la({ref:j,role:"tab","aria-selected":S,"aria-label":u?b:o.name},u?{"aria-haspopup":"menu","aria-expanded":V??!1}:{}),{className:f?gt.tabActive:gt.tab,tabIndex:f?0:-1,onClick:w,onKeyDown:k,onPointerDown:R,onPointerUp:N,onPointerLeave:U,children:[r.jsx("span",{className:gt.tabIcon,"aria-hidden":"true",children:u?s:o.inactiveIcon}),p&&!u&&r.jsx("span",{className:gt.tabLabel,children:o.name})]}));return r.jsx("li",{role:"none",className:gt.tabSlot,style:{flex:1},children:!u&&o.href?r.jsx(b1,{href:o.href,style:{display:"flex",flex:1,textDecoration:"none",color:"inherit"},tabIndex:-1,"aria-hidden":"true",children:Q}):Q},u?"__notch_more__":o.name)}function G1({cardRef:o,hiddenTabs:f,activeIndex:u,maxVisible:s,cardFocusIdx:p,activeIconColor:S,inactiveIconColor:b,moreLabel:j,positionStyle:w,cardItemRef:k,onHiddenTabClick:R,onKeyDown:N}){return r.jsx("div",{ref:o,className:gt.moreCard,style:w,role:"menu","aria-label":j,onKeyDown:N,children:f.map((U,V)=>{const W=s-1+V===u;return r.jsxs("button",{ref:k(V),role:"menuitem",tabIndex:V===p?0:-1,className:W?gt.moreCardItemActive:gt.moreCardItem,onClick:()=>R(V),children:[r.jsx("span",{className:gt.moreCardIcon,style:{color:W?S:b},"aria-hidden":"true",children:W?U.activeIcon:U.inactiveIcon}),r.jsx("span",{className:gt.moreCardLabel,children:U.name})]},U.name)})})}function X1({tabs:o,onTabChange:f,maxVisible:u=5,moreLabel:s="More",moreIcon:p,orientation:S="horizontal",activeIconColor:b=ko.activeIconColor,inactiveIconColor:j=ko.inactiveIconColor,circleFillColor:w=ko.circleFillColor,barBackground:k=ko.barBackground,cornerRadius:R=_l,notchGap:N=_1,circleSize:U=C1,barSize:V=A1,transitionSpeed:Q=E1,defaultActiveTabIndex:W=0,activeIndex:oe,containerWidth:ae,containerHeight:F,containerBottomSpace:pe=0,className:xe,dir:ke="ltr",showLabels:he=!1,topSpace:be=0,bottomSpace:Ee=0}){const re=oe!==void 0,fe=re?Math.min(Math.max(oe,0),o.length-1):0,ne=S==="horizontal",M=ke==="rtl",se=U/2,de=o.length>u,Le=h.useMemo(()=>de?o.slice(0,u-1):o,[o,de,u]),y=h.useMemo(()=>de?o.slice(u-1):[],[o,de,u]),C=h.useMemo(()=>de?[...Le,{name:Ys,activeIcon:null,inactiveIcon:null}]:Le,[de,Le]),D=h.useRef(null),X=h.useRef(null),I=h.useRef(null),m=h.useRef(null),_=h.useRef(null),K=h.useRef([]),te=h.useRef(null),me=h.useRef([]),[ee,Ne]=h.useState(ae??390),[Ke,De]=h.useState(F??V),[Ie,Nt]=h.useState(re?fe:Math.min(W,o.length-1)),[Ye,ln]=h.useState(null),[st,jt]=h.useState(!1),[Mt,ra]=h.useState(0),[It,Pt]=h.useState(!1),un=h.useRef(!1),Tt=h.useRef(0),Ut=h.useRef(Ie),rn=h.useRef(Ye),St=h.useRef(st),on=h.useRef(It),Lt=h.useRef(0);h.useLayoutEffect(()=>{Ut.current=Ie},[Ie]),h.useLayoutEffect(()=>{rn.current=Ye},[Ye]),h.useLayoutEffect(()=>{St.current=st},[st]),h.useLayoutEffect(()=>{on.current=It},[It]);const cn=B1(f),_t=h.useRef(!1),Wn=C.length,Ca=h.useMemo(()=>H1({size:ne?ae??ee:F??Ke,count:Wn,circleR:se,notchGap:N,pad:Jp}),[ne,ae,ee,F,Ke,Wn,se,N]),{effectiveCircleR:Gt,effectiveGap:Aa,effectiveCircleSize:Gn}=Ca,Me=u-1,Pe=h.useCallback(Y=>!de||Y<Me?Y:Me,[de,Me]),vt=h.useRef([]),tl=h.useCallback(Y=>{let ye=q1(C.length,Y,Jp);return M&&ne&&(ye=ye.map(Se=>Y-Se)),ye},[C.length,M,ne]),en=h.useCallback(Y=>{const ye=Gt+Aa,Se=So;if(ne){const He=N1(Y,{W:ee,H:V,rc:ye,yc:Se,r:R}),ut=M1(Y,{W:ee,rc:ye,yc:Se,r:R});X.current&&X.current.setAttribute("d",He),I.current&&I.current.setAttribute("d",ut),m.current&&m.current.setAttribute("d",ut),_.current&&(_.current.style.left=`${Y-Gt}px`)}else{const Be={SH:Ke,SW:ee,rc:ye,yc:Se,r:R},He=M?R1(Y,Be):T1(Y,Be),ut={SH:Ke,SW:ee,rc:ye,yc:Se,r:R},xt=M?O1(Y,ut):L1(Y,ut);X.current&&X.current.setAttribute("d",He),I.current&&I.current.setAttribute("d",xt),m.current&&m.current.setAttribute("d",xt),_.current&&(_.current.style.top=`${Y-Gt}px`)}const Ae=vt.current[Me];Ae!==void 0&&D.current&&D.current.style.setProperty("--nn-more-pos",`${Ae}px`)},[ne,M,ee,Ke,V,Gt,Aa,R,Me]),nl=h.useCallback(()=>{const Y=D.current;if(!Y)return;const ye=Y.getBoundingClientRect(),Se=ae??ye.width,Ae=ne?V:F??ye.height;Ne(Se),De(Ae);const Be=tl(ne?Se:Ae);vt.current=Be;const He=Pe(Math.min(Ut.current,o.length-1)),ut=Math.min(He,Be.length-1),xt=Be[ut];Tt.current=xt,en(xt)},[ae,F,V,ne,tl,en,Pe,o.length]);h.useEffect(()=>{const Y=window.matchMedia("(prefers-reduced-motion: reduce)");_t.current=Y.matches;const ye=Be=>{_t.current=Be.matches};Y.addEventListener("change",ye),nl();let Se;const Ae=D.current;return Ae&&!ae&&!F&&(Se=new ResizeObserver(()=>nl()),Se.observe(Ae)),()=>{Y.removeEventListener("change",ye),Se==null||Se.disconnect()}},[nl,ae,F]),h.useEffect(()=>{if(!st)return;const Y=Se=>{const Ae=te.current;Ae&&!Ae.contains(Se.target)&&jt(!1)},ye=Se=>{var Ae;Se.key==="Escape"&&(jt(!1),(Ae=K.current[Me])==null||Ae.focus())};return document.addEventListener("pointerdown",Y),document.addEventListener("keydown",ye),()=>{document.removeEventListener("pointerdown",Y),document.removeEventListener("keydown",ye)}},[st,Me]),h.useEffect(()=>{if(st&&te.current){const Y=Ye!=null?Ye-Me:0;ra(Y),requestAnimationFrame(()=>{var ye;(ye=me.current[Y])==null||ye.focus()})}},[st,Ye,Me]);const Bt=h.useCallback(Y=>{if(un.current)return;const ye=vt.current[Y];if(ye===void 0)return;const Se=Tt.current;if(Se===ye)return;un.current=!0;const Ae=on.current||rn.current!=null?Me:Pe(Ut.current),Be=K.current[Ae];Be&&Ae!==Y&&(Be.setAttribute("aria-selected","false"),Be.setAttribute("tabindex","-1"));const He=K.current[Y];if(He&&(He.setAttribute("aria-selected","true"),He.setAttribute("tabindex","0")),_t.current){Tt.current=ye,en(ye),un.current=!1;return}const ut=Q;let xt=null;const Zt=Yt=>{xt||(xt=Yt);const nn=Math.min((Yt-xt)/ut,1),Xt=qs(nn),rt=Se+(ye-Se)*Xt;Tt.current=rt,en(rt),nn<1?requestAnimationFrame(Zt):(Tt.current=ye,un.current=!1)};requestAnimationFrame(Zt)},[Q,en,Pe,Me]);h.useEffect(()=>{!st&&It&&rn.current==null&&(Bt(Lt.current),on.current=!1,Pt(!1))},[st,It,Bt]);const Xn=h.useRef(null);h.useEffect(()=>{if(!re)return;const Y=fe;if(Xn.current===Y)return;Xn.current=Y;const ye=Pe(Y),Se=vt.current[ye];if(Se===void 0)return;const Ae=on.current||rn.current!=null?Me:Pe(Ut.current),Be=K.current[Ae];Be&&Ae!==ye&&(Be.setAttribute("aria-selected","false"),Be.setAttribute("tabindex","-1"));const He=K.current[ye];He&&(He.setAttribute("aria-selected","true"),He.setAttribute("tabindex","0")),Ut.current=Y,Nt(Y);const ut=de&&Y>=u;rn.current=ut?Y:null,ln(ut?Y:null),on.current=!1,Pt(!1),St.current&&jt(!1);const xt=Tt.current;if(xt===Se)return;if(_t.current){Tt.current=Se,en(Se);return}const Zt=Q;let Yt=null;const nn=Xt=>{Yt||(Yt=Xt);const rt=Math.min((Xt-Yt)/Zt,1),Ma=qs(rt),Zn=xt+(Se-xt)*Ma;Tt.current=Zn,en(Zn),rt<1?requestAnimationFrame(nn):Tt.current=Se};requestAnimationFrame(nn)},[re,fe]);const dn=h.useCallback(Y=>{const ye=Pe(Y);if(ye===Pe(Ut.current)&&Y===Ut.current||un.current)return;if(re){const Xt=de&&Y>=u;rn.current=Xt?Y:null,on.current=!1,cn==null||cn(o[Y],Y);return}const Se=Pe(Ut.current),Ae=K.current[Se];Ae&&(Ae.setAttribute("aria-selected","false"),Ae.setAttribute("tabindex","-1"));const Be=K.current[ye];Be&&(Be.setAttribute("aria-selected","true"),Be.setAttribute("tabindex","0")),Ut.current=Y,Nt(Y);const He=de&&Y>=u;rn.current=He?Y:null,ln(He?Y:null),on.current=!1,Pt(!1),cn==null||cn(o[Y],Y);const ut=Tt.current,xt=vt.current[ye];if(xt===void 0)return;if(un.current=!0,_t.current){Tt.current=xt,en(xt),un.current=!1;return}const Zt=Q;let Yt=null;const nn=Xt=>{Yt||(Yt=Xt);const rt=Math.min((Xt-Yt)/Zt,1),Ma=qs(rt),Zn=ut+(xt-ut)*Ma;Tt.current=Zn,en(Zn),rt<1?requestAnimationFrame(nn):(Tt.current=xt,un.current=!1)};requestAnimationFrame(nn)},[o,Q,en,cn,Pe,de,u,re]),tn=h.useCallback(()=>{_.current&&(_.current.style.scale="0.94")},[]),Vn=h.useCallback(()=>{_.current&&(_.current.style.scale="1")},[]),Mn=h.useCallback(Y=>{var ye;const Se=Me+Y;jt(!1),dn(Se),(ye=K.current[Me])==null||ye.focus()},[Me,dn]),El=h.useCallback(Y=>{var ye;const Se=y.length;if(Se===0)return;let Ae=Mt;if(Y.key==="ArrowDown"||!ne&&Y.key==="ArrowRight")Ae=(Mt+1)%Se;else if(Y.key==="ArrowUp"||!ne&&Y.key==="ArrowLeft")Ae=(Mt-1+Se)%Se;else if(Y.key==="Home")Ae=0;else if(Y.key==="End")Ae=Se-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),Mn(Mt);return}else return;Y.preventDefault(),ra(Ae),(ye=me.current[Ae])==null||ye.focus()},[Mt,y.length,ne,Mn]),al=h.useCallback(Y=>{var ye,Se;const Ae=C.length,Be=Pe(Ut.current);let He=Be;if(ne)if(M)if(Y.key==="ArrowLeft")He=(Be+1)%Ae;else if(Y.key==="ArrowRight")He=(Be-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Be===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Ut.current),jt(!0),on.current=!0,Pt(!0),Bt(Me)));return}else return;else if(Y.key==="ArrowRight")He=(Be+1)%Ae;else if(Y.key==="ArrowLeft")He=(Be-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Be===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Ut.current),jt(!0),on.current=!0,Pt(!0),Bt(Me)));return}else return;else if(Y.key==="ArrowDown")He=(Be+1)%Ae;else if(Y.key==="ArrowUp")He=(Be-1+Ae)%Ae;else if(Y.key==="Home")He=0;else if(Y.key==="End")He=Ae-1;else if(Y.key==="Enter"||Y.key===" "){Y.preventDefault(),de&&Be===Me&&(St.current?(jt(!1),Pt(!1)):(Lt.current=Pe(Ut.current),jt(!0),on.current=!0,Pt(!0),Bt(Me)));return}else return;if(Y.preventDefault(),de&&He===Me){(ye=K.current[He])==null||ye.focus();return}(Se=K.current[He])==null||Se.focus(),dn(He)},[C.length,ne,M,dn,Pe,de,Me,Bt]),oa=h.useCallback(Y=>{var ye,Se;if(de&&Y===Me){St.current?jt(!1):(Lt.current=Pe(Ut.current),jt(!0),on.current=!0,Pt(!0),Bt(Me)),(ye=K.current[Y])==null||ye.focus();return}St.current&&jt(!1),dn(Y),(Se=K.current[Y])==null||Se.focus()},[dn,de,Me,Pe,Bt]),Sn=h.useMemo(()=>p??r.jsx(U1,{}),[p]),ll=h.useMemo(()=>{if(Ye!=null){const Y=o[Ye];return Y?Y.inactiveIcon:Sn}return Sn},[Ye,o,Sn]),zl=h.useMemo(()=>ne?{bottom:V+8,left:"var(--nn-more-pos)",transform:"translateX(-50%)"}:M?{right:V+8,top:"var(--nn-more-pos)",transform:"translateY(-50%)"}:{left:V+8,top:"var(--nn-more-pos)",transform:"translateY(-50%)"},[ne,M,V]),_a=(()=>{const Y={};return!ne&&(be>0||Ee>0)&&(Y.top=be,Y.bottom=Ee),ne&&M&&(Y.paddingInlineStart=8,Y.paddingInlineEnd=8),Y})();if(o.length<2)return r.jsx("nav",{className:`${gt.root} ${xe??""}`,role:"navigation","aria-label":"Main navigation",dir:ke,style:la(la({},ae!=null?{width:ae}:{}),ne?{bottom:pe,height:V}:F!=null?{top:0,height:F}:{top:0,bottom:0,width:V}),children:r.jsx("div",{className:gt.emptyGuard,role:"status",children:"Add at least 2 tabs"})});const fn=la(la({},ae!=null?{width:ae}:{left:0,right:0}),ne?{bottom:pe,height:V}:la(Zs(la({},M?{right:0}:{left:0}),{width:V}),be>0||Ee>0?{top:be,bottom:Ee}:F!=null?{top:0,height:F}:{top:0,bottom:0})),Ea={"--nn-active-icon-color":b,"--nn-inactive-icon-color":j,"--nn-circle-fill":w,"--nn-bar-bg":k,"--nn-radius":`${R}px`,"--nn-speed":`${Q}ms`,"--nn-circle-size":`${Gn}px`},za=ee,Na=ne?V:Ke,Nl=ne?{top:-(Gt-So)}:M?{left:So}:{left:ee-So-Gt},Tn=ne?M?gt.tabsHorizontalRTL:gt.tabsHorizontal:be>0||Ee>0?gt.tabsVerticalSafeArea:gt.tabsVertical,kt=ne?"translateY(3px)":"translateX(3px)";return r.jsxs("nav",{ref:D,className:`${gt.root} ${xe??""}`,style:la(la({},fn),Ea),role:"navigation","aria-label":"Main navigation",dir:ke,children:[r.jsxs("svg",{className:gt.svg,viewBox:`0 0 ${za} ${Na}`,width:za,height:Na,"aria-hidden":"true",style:{borderRadius:R},children:[r.jsx("path",{ref:X,className:gt.barPath,d:""}),r.jsx("path",{ref:I,className:gt.bevel,d:""}),r.jsx("path",{ref:m,className:gt.bevelShadow,d:"",style:{transform:kt}})]}),r.jsx("ul",{className:Tn,role:"tablist",style:_a,children:C.map((Y,ye)=>{const Se=de&&ye===Me,Ae=It||Ye!=null,Be=Se?Ae:ye===Ie&&!It;return r.jsx($1,{tab:Y,isActive:Be,isMore:Se,moreBarIcon:ll,showLabel:he,ariaSelected:Se?Ae:ye===Ie&&!It,moreLabel:s,tabRef:He=>{K.current[ye]=He},onClick:()=>oa(ye),onKeyDown:al,onPointerDown:tn,onPointerUp:Vn,onPointerLeave:Vn,ariaExpanded:Se?st:void 0},Se?Ys:Y.name)})}),r.jsx(Y1,{circleRef:_,effectiveCircleSize:Gn,effectiveCircleR:Gt,offset:Nl,willChange:ne?"left":"top",barTabs:C,activeIndex:Ie,hiddenActiveIndex:Ye,moreActive:It,hasMore:de,maxVisible:u,tabs:o,moreIconElement:Sn}),de&&st&&r.jsx(G1,{cardRef:te,hiddenTabs:y,activeIndex:Ie,maxVisible:u,cardFocusIdx:Mt,activeIconColor:b,inactiveIconColor:j,moreLabel:s,positionStyle:zl,cardItemRef:Y=>ye=>{me.current[Y]=ye},onHiddenTabClick:Mn,onKeyDown:El})]})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=o=>o==null?void 0:o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Z1(o,f,u=[]){if(f==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:V1(o),size:24,node:f,...u.length>0?{aliases:u}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=o=>{let f="",u=!1;for(const s of o){if(s==="-"||s==="_"||s<=" "){u=f.length>0;continue}f.length===0?f+=s.toLowerCase():f+=u?s.toUpperCase():s,u=!1}return f};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=o=>{const f=Q1(o);return f.charAt(0).toUpperCase()+f.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=(...o)=>o.filter((f,u,s)=>!!f&&f.trim()!==""&&s.indexOf(f)===u).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Hs(o){return o!=null}function J1(o,f={}){var U,V;const u=f.attributeNames??{},s=Q=>u[Q]??Q,p=o.size??o.width??Cl.width,S=o.size??o.height??Cl.height,b=((U=o.aliases)==null?void 0:U.filter(Q=>typeof Q=="string"&&Q.trim()!=="").map(Q=>`lucide-${Q}`))??[],j=[...o.name?[`lucide-${o.name}`]:[],...b],w=((V=f.className)==null?void 0:V.split(" ").filter(Boolean))??[],k=f.includeDefaultClasses===!1?$s(...w):$s("lucide",...j,...w),R=f.absoluteStrokeWidth?Number(f.strokeWidth??Cl["stroke-width"])*Number(o.size??o.width??Cl.width)/Number(f.size??f.width??Cl.width):f.strokeWidth??Cl["stroke-width"];return["svg",{...Object.entries(Cl).reduce((Q,[W,oe])=>(Q[s(W)]=oe,Q),{}),..."color"in f&&f.color&&{[s("stroke")]:f.color},..."size"in f&&Hs(f.size)&&{[s("width")]:f.size,[s("height")]:f.size},..."width"in f&&Hs(f.width)&&{[s("width")]:f.width},..."height"in f&&Hs(f.height)&&{[s("height")]:f.height},[s("stroke-width")]:R,...k&&{[s("class")]:k},[s("viewBox")]:`0 0 ${p} ${S}`,...f.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in f&&f.attributes},o.node.map(Q=>{const[W,oe,ae]=Q,F=f.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...oe}:oe;return ae?[W,F,ae]:[W,F]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function F1(o,f={}){return J1(o,{...f,attributeNames:{...f.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=o=>{for(const f in o)if(f.startsWith("aria-")||f==="role"||f==="title")return!0;return!1},I1=h.createContext({}),P1=()=>h.useContext(I1),eg=h.forwardRef(({color:o,size:f,width:u,height:s,strokeWidth:p,absoluteStrokeWidth:S,nonScalingStroke:b,className:j="",children:w,iconNode:k=[],icon:R={node:k,aliases:[],size:24},...N},U)=>{const{size:V=24,strokeWidth:Q=2,absoluteStrokeWidth:W=!1,nonScalingStroke:oe=!1,color:ae="currentColor",className:F=""}=P1()??{},pe=!!w||W1(N),[xe,ke,he=[]]=F1(R,{color:o??ae,width:u??f??V,height:s??f??V,strokeWidth:p??Q,absoluteStrokeWidth:S??W,nonScalingStroke:b??oe,className:$s(F,j),hasA11yProp:pe,attributes:N});return h.createElement(xe,{ref:U,...ke},[...he.map(([be,Ee])=>h.createElement(be,Ee)),...Array.isArray(w)?w:[w]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function lr(o,f=[],u=[]){const s=typeof o=="string"?Z1(o,f,u):o,p=h.forwardRef(({className:S,...b},j)=>h.createElement(eg,{ref:j,icon:s,className:S,...b}));return s.name&&(p.displayName=K1(s.name)),p}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};s0.node;const Fp=lr(s0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};u0.node;const Wp=lr(u0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};d0.node;const Ip=lr(d0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};f0.node;const Pp=lr(f0);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};p0.node;const e0=lr(p0),h0=[{name:"Home",activeIcon:r.jsx(Fp,{size:24}),inactiveIcon:r.jsx(Fp,{size:24})},{name:"Search",activeIcon:r.jsx(Wp,{size:24}),inactiveIcon:r.jsx(Wp,{size:24})},{name:"Cart",activeIcon:r.jsx(Pp,{size:24}),inactiveIcon:r.jsx(Pp,{size:24})},{name:"Settings",activeIcon:r.jsx(Ip,{size:24}),inactiveIcon:r.jsx(Ip,{size:24})},{name:"Profile",activeIcon:r.jsx(e0,{size:24}),inactiveIcon:r.jsx(e0,{size:24})}],tg=h0.map(o=>o.name);function ng({activeIndex:o,onTabChange:f}){return r.jsx(X1,{tabs:h0,activeIndex:o,onTabChange:(u,s)=>f(s),className:"cet-bottom-nav"})}function ag({title:o}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,padding:"24px 24px 96px",textAlign:"center",color:"var(--affine-text-secondary-color)",background:"var(--affine-background-secondary-color)"},children:[r.jsx("div",{style:{fontSize:40},children:"📭"}),r.jsx("div",{style:{fontSize:16,fontWeight:600,color:"var(--affine-text-primary-color)"},children:o}),r.jsx("div",{style:{fontSize:13,opacity:.7},children:"该板块即将上线，敬请期待"})]})}const lg=()=>{const[o,f]=h.useState(0);return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:o===0?r.jsx(Jm,{}):r.jsx(ag,{title:tg[o]??"板块"})}),r.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,zIndex:100,pointerEvents:"none"},children:r.jsx(ng,{activeIndex:o,onTabChange:f})})]})},m0=document.getElementById("root");if(!m0)throw new Error("#root missing");document.documentElement.style.height="100%";document.body.style.height="100%";document.body.style.margin="0";document.body.style.fontFamily="var(--affine-font-family)";D2.createRoot(m0).render(r.jsx(h.StrictMode,{children:r.jsx(k2,{attribute:"data-theme",defaultTheme:"light",enableSystem:!1,children:r.jsx(lg,{})})}));
