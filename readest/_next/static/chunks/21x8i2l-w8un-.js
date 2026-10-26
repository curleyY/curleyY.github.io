(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,306970,e=>{e.s(["N",0,{wiktionary:"builtin:wiktionary",wikipedia:"builtin:wikipedia",context:"builtin:context",systemDictionary:"builtin:system"},"z",0,{google:"web:builtin:google",urban:"web:builtin:urban",merriamWebster:"web:builtin:merriam-webster",goodreads:"web:builtin:goodreads"}])},63197,e=>{var t=e.i(454817);let r="custom_translator",a="translation_prompt",i=["openai-compatible","deepl"],n=e=>"string"==typeof e?e:void 0,o=e=>"number"==typeof e?e:void 0,l=(e,t)=>{let r=t("type"),a=n(t("name"));if(!i.includes(r)||!a)return null;let l={id:e,type:r,name:a,addedAt:o(t("addedAt"))??Date.now(),updatedAt:o(t("updatedAt"))??Date.now()},s=n(t("baseUrl")),d=n(t("apiKey")),c=n(t("model")),f=o(t("temperature"));return void 0!==s&&(l.baseUrl=s),void 0!==d&&(l.apiKey=d),void 0!==c&&(l.model=c),void 0!==f&&(l.temperature=f),!0===t("disabled")&&(l.disabled=!0),l},s=(e,t)=>{let r=n(t("name")),a=n(t("systemPrompt"));return r&&void 0!==a?{id:e,name:r,systemPrompt:a,addedAt:o(t("addedAt"))??Date.now(),updatedAt:o(t("updatedAt"))??Date.now()}:null},d={kind:r,schemaVersion:1,pack(e){let t={type:e.type,name:e.name,addedAt:e.addedAt,updatedAt:e.updatedAt};return void 0!==e.baseUrl&&(t.baseUrl=e.baseUrl),void 0!==e.model&&(t.model=e.model),void 0!==e.temperature&&(t.temperature=e.temperature),void 0!==e.disabled&&(t.disabled=e.disabled),void 0!==e.apiKey&&(t.apiKey=e.apiKey),t},unpack:e=>l("",t=>e[t]),computeId:t.o,unpackRow(e){let r=l(e.replica_id,r=>(0,t.u)(e.fields_jsonb[r]));return r&&e.reincarnation&&(r.reincarnation=e.reincarnation),r},encryptedFields:["apiKey"]},c={kind:a,schemaVersion:1,pack:e=>({name:e.name,systemPrompt:e.systemPrompt,addedAt:e.addedAt,updatedAt:e.updatedAt}),unpack:e=>s("",t=>e[t]),computeId:t.o,unpackRow(e){let r=s(e.replica_id,r=>(0,t.u)(e.fields_jsonb[r]));return r&&e.reincarnation&&(r.reincarnation=e.reincarnation),r}};e.s(["k",0,r,"E",0,a,"W",0,d,"A",0,c])},165839,617099,816062,e=>{let t;var r=e.i(945499),a=e.i(23457),i=e.i(908547);let n={UNAUTHORIZED:"Unauthorized",DEEPL_API_ERROR:"DeepL API Error",DAILY_QUOTA_EXCEEDED:"Daily Quota Exceeded",INTERNAL_SERVER_ERROR:"Internal Server Error"};e.s(["f",0,n],617099);var o=e.i(140018);let l="custom:";e.s(["I",0,l,"c",0,e=>!!e?.startsWith(l)],816062);let s="Output only the translation of the user's text, without explanations, notes or quotation marks.",d=()=>t??=Promise.all([e.A(633669),e.A(831501)]),c=e=>e.replace(/^\s*<think>[\s\S]*?<\/think>/,"").trim(),f=async e=>{let[,{createOpenAICompatible:t}]=await d();return t({name:"custom",baseURL:(e.baseUrl??"").replace(/\/+$/,""),apiKey:e.apiKey||void 0,fetch:(0,r.f)()}).chatModel(e.model??"")};e.s(["f",0,f,"k",0,e=>{let t,r=new Map,h=[],u=0,g=async()=>t??=await f(e),p=(e,t,r)=>(0,o.n)((0,a.T)(r?.promptId),{sourceLang:e,targetLang:t,bookTitle:r?.bookTitle,bookAuthor:r?.bookAuthor}),m=async(t,r)=>{let a=new AbortController,i=setTimeout(()=>a.abort(),6e4);try{let[{generateText:i}]=await d(),{text:n}=await i({model:await g(),system:t,prompt:r,temperature:e.temperature,maxRetries:2,abortSignal:a.signal});return c(n)}catch(t){let e;throw e=t.statusCode,401===e||403===e?Error(n.UNAUTHORIZED):t instanceof Error?t:Error(String(t))}finally{clearTimeout(i)}},b=async(e,t)=>{let r;if(1===t.length)return void t[0].resolve(await m(`${e}

${s}`,t[0].text));let a=t.map((e,t)=>`[${t+1}]
${e.text}`).join("\n\n"),i=((e,t)=>{let r=e.split(/^[ \t]*\[(\d+)\][ \t]*/m),a=[];for(let e=1;e<r.length;e+=2){if(Number(r[e])!==a.length+1)return null;a.push(r[e+1].trim())}return a.length===t?a:null})(await m(`${e}

${(r=t.length,`The user's text contains ${r} numbered blocks, each starting with a marker line like [n]. Translate every block and output exactly ${r} blocks in the same order, each starting with its original [n] marker line. Output only the translations, without explanations or notes.`)}`,a),t.length);i?t.forEach((e,t)=>e.resolve(i[t])):await Promise.all(t.map(async t=>{try{t.resolve(await m(`${e}

${s}`,t.text))}catch(e){t.reject(e)}}))},y=()=>{for(;u<4&&h.length>0;){let e=h.shift(),t=e.items.filter(e=>!e.cancelled);0!==t.length&&(u++,b(e.system,t).catch(e=>t.forEach(t=>t.reject(e))).finally(()=>{u--,y()}))}},w=e=>{let t=r.get(e);t&&(clearTimeout(t.timer),r.delete(e),h.push(t),y())};return{name:`${l}${e.id}`,label:e.name,concurrency:16,getCacheKey:(t,r,a)=>`${l}${e.id}#${(0,i.q)(`${e.model}
${p(t,r,a)}`)}`,translate:async(e,t,a,i,n,o,l)=>{o?.throwIfAborted();let s=p(t,a,l),d=[],c=Promise.all(e.map(e=>e?.trim()?new Promise((t,a)=>{let i,n,o={text:e,resolve:t,reject:a};d.push(o),(i=r.get(s))&&(i.items.length>=4||i.chars+o.text.length>3e3)&&w(s),(n=r.get(s))||((n={system:s,items:[],chars:0}).timer=setTimeout(()=>w(s),50),r.set(s,n)),n.items.push(o),n.chars+=o.text.length}):Promise.resolve(e)));return o?new Promise((e,t)=>{let r=()=>{d.forEach(e=>e.cancelled=!0),t(o.reason??new DOMException("Aborted","AbortError"))};o.addEventListener("abort",r,{once:!0}),c.then(e,t).finally(()=>o.removeEventListener("abort",r))}):c}}},"y",0,d,"i",0,c],165839)},56440,674267,833642,695036,e=>{e.s(["X",()=>ef,"q",()=>eh],56440),e.s(["g",()=>ee,"x",()=>Y,"O",()=>Z,"m",()=>ei,"t",()=>q,"b",()=>Q],695036);var t=e.i(571419),r=e.i(306970),a=e.i(858837),i=e.i(238991),n=e.i(217945),o=e.i(856807),l=e.i(454817);let s="settings",d="singleton",c=["globalViewSettings.userStylesheet","globalViewSettings.userUIStylesheet","globalViewSettings.proofreadRules","globalReadSettings.customThemes","globalReadSettings.customHighlightColors","globalReadSettings.userHighlightColors","globalReadSettings.defaultHighlightLabels","globalReadSettings.customTtsHighlightColors","dictionarySettings.providerOrder","dictionarySettings.providerEnabled","dictionarySettings.webSearches","dictionarySettings.fontScale","dictionarySettings.autoPlayPronunciation","dictionarySettings.contextTranslatorId","kosync.serverUrl","kosync.username","kosync.userkey","kosync.password","kosync.customHeaders","kosync.allowSelfSignedCert","bookorbit.serverUrl","bookorbit.username","bookorbit.userkey","bookorbit.password","bookorbit.customHeaders","bookorbit.allowSelfSignedCert","readwise.baseUrl","readwise.accessToken","hardcover.accessToken","notion.databaseId","notion.accessToken","webdav.serverUrl","webdav.username","webdav.password","webdav.rootPath","s3.endpoint","s3.region","s3.bucket","s3.accessKeyId","s3.secretAccessKey"],f=["dictionarySettings.providerOrder","dictionarySettings.providerEnabled","dictionarySettings.webSearches","dictionarySettings.fontScale","dictionarySettings.autoPlayPronunciation","dictionarySettings.contextTranslatorId"],h=["kosync.username","kosync.userkey","kosync.password","kosync.customHeaders","bookorbit.username","bookorbit.userkey","bookorbit.password","bookorbit.customHeaders","readwise.accessToken","hardcover.accessToken","notion.accessToken","webdav.username","webdav.password","s3.accessKeyId","s3.secretAccessKey"],u=["kosync.customHeaders","bookorbit.customHeaders"],g=e=>"__proto__"===e||"constructor"===e||"prototype"===e,p=(e,t)=>{let r=e;for(let e of t.split(".")){if(g(e)||null==r||"object"!=typeof r)return;r=r[e]}return r},m=(e,t,r)=>{let a=t.split(".");if(a.some(g))return;let i=e;for(let e=0;e<a.length-1;e++){let t=a[e],r=i[t];(null==r||"object"!=typeof r)&&(i[t]={}),i=i[t]}i[a[a.length-1]]=r},b=e=>{for(let t of u){let r=p(e,t);"string"==typeof r&&m(e,t,(0,o.P)(r))}};e.s(["d",0,f,"I",0,h,"T",0,s,"k",0,d,"C",0,c,"m",0,p,"J",0,{kind:s,schemaVersion:1,encryptedFields:h,pack(e){let t={};for(let r of c){let a=p(e.patch,r);void 0!==a&&(t[r]=a)}for(let e of u){if(!(e in t))continue;let r=(0,o.m)(t[e]);null===r?delete t[e]:t[e]=r}return t},unpack(e){let t={};for(let r of c){let a=e[r];void 0!==a&&m(t,r,a)}return b(t),{name:"singleton",patch:t}},computeId:async()=>d,unpackRow(e){let t=(e=>{let t={};for(let r of c){let a=(0,l.u)(e[r]);void 0!==a&&(t[r]=a)}return t})(e.fields_jsonb);if(0===Object.keys(t).length)return null;let r={};for(let[e,a]of Object.entries(t))m(r,e,a);return b(r),{name:"singleton",patch:r}}},"b",0,m],674267);var y=e.i(567119),w=e.i(317265),v=e.i(188070),k=e.i(257375),x=e.i(431187);let $=null,S=null,A=[],_=null,E=!1,C=!1,T=null,M="readest_passphrase_verify_sample_v1",I=()=>{try{return"u">typeof localStorage?localStorage:null}catch{return null}},z=async()=>$||new Promise((e,t)=>{let r=t=>{clearTimeout(a),e(t)},a=setTimeout(()=>{A=A.filter(e=>e!==r),t(new w.U("NO_PASSPHRASE","No passphrase prompter registered"))},1e4);A.push(r)}),O=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.session??y.f,r=e.client??v.j;if(e.auto&&E)throw new w.U("NO_PASSPHRASE","User declined the passphrase prompt this run");if(e.auto&&e.invalidate&&C)throw new w.U("NO_PASSPHRASE","Passphrase recovery already failed this run");if(e.auto||(E=!1,C=!1),!(!e.invalidate&&t.isUnlocked()))return _||(_=(async()=>{try{let a;e.invalidate&&await t.invalidatePassphrase();let i=await z(),n=await r.listReplicaKeys(),o=0===n.length?"setup":"unlock",l=e.verifyWith??(()=>{if(T)return T;try{let e=I()?.getItem(M);if(!e)return;let t=JSON.parse(e);if(!(0,k.d)(t))return;return T=t,t}catch{return}})();for(;;){let e=await i(a?{kind:o,error:a}:{kind:o});if(null===e||""===e)throw E=!0,new w.U("NO_PASSPHRASE","User cancelled the passphrase prompt");if("setup"===o)return void await t.setup(e);try{await t.unlock(e,l?{verifyWith:l}:{});return}catch(e){if(!(0,w.E)(e))throw e;a=(0,x.V)("Incorrect passphrase. Please try again.")}}}catch(t){throw e.auto&&e.invalidate&&(C=!0),t}finally{_=null,S?.()}})())};e.s(["Q",0,O,"G",0,e=>{T=e;try{I()?.setItem(M,JSON.stringify(e))}catch{}},"j",0,e=>{S=e},"S",0,e=>{if($=e,!e)return;let t=A;for(let r of(A=[],t))r(e)}],833642);var P=e.i(120109);let N=new Set(h),R=new Set(f),H=new Set(h.map(e=>e.split(".")[0])),L=new Set(c.filter(e=>!N.has(e)&&H.has(e.split(".")[0]))),D="readest_settings_pushed_hash_v1:",F="readest_settings_last_seen_cipher_v1",j=new Set(["dictionarySettings.providerOrder"]),U=new Set,q=()=>{U.add("dictionarySettings.providerOrder")},W=new Map,K=(e,t)=>{if(e===t)return!0;if(null==e||null==t)return e===t;if(typeof e!=typeof t)return!1;if("object"==typeof e)try{return JSON.stringify(e)===JSON.stringify(t)}catch{}return!1},B=e=>null!=e&&("string"!=typeof e||e.length>0),J=async e=>{let t="string"==typeof e?e:JSON.stringify(e);if("u"<typeof crypto||!crypto.subtle)return t;let r=new TextEncoder().encode(t),a=await crypto.subtle.digest("SHA-256",r),i="";for(let e of new Uint8Array(a))i+=e.toString(16).padStart(2,"0");return i},V=()=>{try{return"u">typeof localStorage?localStorage:null}catch{return null}},G=e=>{let t=V();if(!t)return null;try{return t.getItem(D+e)}catch{return null}},X=(e,t)=>{let r=V();if(r)try{r.setItem(D+e,t)}catch{}},Y=e=>{let t=V();if(t)for(let r of e)try{t.removeItem(D+r)}catch{}},Z=()=>{let e=V();if(!e)return{};try{let t=e.getItem(F);if(!t)return{};let r=JSON.parse(t);return r&&"object"==typeof r?r:{}}catch{return{}}},Q=async e=>{let t={},r=[],a=[],n=!1,o=(0,P.X)(),l=(0,P.$)("dictionary");for(let i of c){let s=p(e,i);if(void 0!==s&&!(!l&&R.has(i)))if(N.has(i)){if(!o||!B(s))continue;let e=await J(s);if(e===G(i))continue;a.push({path:i,value:s,hash:e}),n=!0}else if(L.has(i)){if(!B(s))continue;let e=await J(s);if(e===G(i))continue;r.push({path:i,value:s,hash:e})}else{if(j.has(i)&&!U.has(i)||K(s,W.get(i)))continue;t[i]=s,W.set(i,JSON.parse(JSON.stringify(s)))}}for(let e of j)U.delete(e);if(0===Object.keys(t).length&&0===r.length&&0===a.length)return;if(n&&!y.f.isUnlocked())try{await O()}catch{}let f={};for(let[e,r]of Object.entries(t))m(f,e,r);for(let{path:e,value:t}of r)m(f,e,t);for(let{path:e,value:t}of a)m(f,e,t);for(let{path:e,hash:t}of((0,i.K)(s,{name:"singleton",patch:f},d),r))X(e,t);if(y.f.isUnlocked())for(let{path:e,hash:t}of a)X(e,t)},ee=(e,t)=>{let{settings:r,setSettings:i,saveSettings:n}=a.f.getState();t.lastSeenCipher&&Object.keys(t.lastSeenCipher).length>0&&(e=>{let t=V();if(t)try{t.setItem(F,JSON.stringify(e))}catch{}})(t.lastSeenCipher);let o=(0,P.$)("dictionary")?t.patch:et(t.patch);if(!r||0===Object.keys(o).length)return;for(let e of c){let t=p(o,e);void 0!==t&&(N.has(e)||L.has(e)?J(t).then(t=>X(e,t)):W.set(e,JSON.parse(JSON.stringify(t))))}let l=er(r,o);i(l),n(e,l),o.dictionarySettings&&eh.getState().applyRemoteDictionarySettings(o.dictionarySettings)},et=e=>{let t={};for(let r of c){if(R.has(r))continue;let a=p(e,r);void 0!==a&&m(t,r,a)}return t},er=(e,t)=>{let r={...e,...t};return t.globalViewSettings&&(r.globalViewSettings={...e.globalViewSettings,...t.globalViewSettings}),t.globalReadSettings&&(r.globalReadSettings={...e.globalReadSettings,...t.globalReadSettings}),t.kosync&&(r.kosync={...e.kosync,...t.kosync}),t.bookorbit&&(r.bookorbit={...e.bookorbit,...t.bookorbit}),t.readwise&&(r.readwise={...e.readwise,...t.readwise}),t.hardcover&&(r.hardcover={...e.hardcover,...t.hardcover}),t.notion&&(r.notion={...e.notion,...t.notion}),t.webdav&&(r.webdav={...e.webdav,...t.webdav}),t.s3&&(r.s3={...e.s3,...t.s3}),t.dictionarySettings&&(r.dictionarySettings={...e.dictionarySettings,...t.dictionarySettings}),r},ea=null,ei=e=>{if(!ea){if(e)for(let t of c){let r=p(e,t);void 0!==r&&(N.has(t)||L.has(t)||W.set(t,JSON.parse(JSON.stringify(r))))}ea=a.f.subscribe((e,t)=>{e.settings&&e.settings!==t?.settings&&Q(e.settings)})}};var en=e.i(826828);let eo=e=>{e.contentId&&(0,i.K)(n.L,e,e.contentId,e.reincarnation)},el=e=>{(0,i.t)(n.L,e)},es=[r.z.google,r.z.urban,r.z.merriamWebster,r.z.goodreads],ed={providerOrder:[r.N.systemDictionary,r.N.wiktionary,r.N.wikipedia,r.N.context,...es],providerEnabled:{[r.N.systemDictionary]:!1,[r.N.wiktionary]:!0,[r.N.wikipedia]:!0,[r.N.context]:!1,[r.z.google]:!1,[r.z.urban]:!1,[r.z.merriamWebster]:!1,[r.z.goodreads]:!1},webSearches:[],fontScale:1,autoPlayPronunciation:!1};function ec(e){let{unavailable:t,...r}=e;return r}let ef=e=>{if(!e)return;let t=eh.getState().findByContentId(e);return t||(a.f.getState().settings?.customDictionaries??[]).find(t=>t.contentId===e&&!t.deletedAt)},eh=(0,t.f)((t,r)=>({dictionaries:[],settings:{...ed},getAvailableDictionaries:()=>r().dictionaries.filter(e=>!e.deletedAt).sort((e,t)=>(t.addedAt||0)-(e.addedAt||0)),getDictionary:e=>r().dictionaries.find(t=>t.id===e),addDictionary:e=>{t(t=>{let r=t.dictionaries.findIndex(t=>t.id===e.id),a=r>=0?t.dictionaries.map((t,a)=>a===r?{...e,deletedAt:void 0}:t):[...t.dictionaries,e],i=t.settings.providerOrder.includes(e.id)?t.settings.providerOrder:[e.id,...t.settings.providerOrder],n={...t.settings.providerEnabled};return e.id in n||(n[e.id]=!e.unsupported),{dictionaries:a,settings:{...t.settings,providerOrder:i,providerEnabled:n}}}),eo(e)},applyRemoteDictionary:e=>{t(t=>{let r=t.dictionaries.findIndex(t=>t.id===e.id),a=r>=0?t.dictionaries.map((t,a)=>a===r?{...e,deletedAt:void 0}:t):[...t.dictionaries,e],i=t.settings.providerOrder.includes(e.id)?t.settings.providerOrder:[...t.settings.providerOrder,e.id],n={...t.settings.providerEnabled};return e.id in n||(n[e.id]=!e.unsupported),{dictionaries:a,settings:{...t.settings,providerOrder:i,providerEnabled:n}}});let a=(0,en.s)();a&&r().saveCustomDictionaries(a)},findByContentId:e=>e?r().dictionaries.find(t=>t.contentId===e):void 0,markAvailableByContentId:e=>{t(t=>({dictionaries:t.dictionaries.map(t=>t.contentId===e?{...t,unavailable:void 0}:t)}));let a=(0,en.s)();a&&r().saveCustomDictionaries(a)},softDeleteByContentId:e=>{let a=r().dictionaries.find(t=>t.contentId===e),i=!a||!!a.deletedAt,n=new Set([e]);a&&n.add(a.id),t(e=>({dictionaries:a&&!i?e.dictionaries.map(e=>e.id===a.id?{...e,deletedAt:Date.now()}:e):e.dictionaries,settings:{...e.settings,providerOrder:e.settings.providerOrder.filter(e=>!n.has(e)),providerEnabled:Object.fromEntries(Object.entries(e.settings.providerEnabled).filter(e=>{let[t]=e;return!n.has(t)}))}}));let o=(0,en.s)();o&&r().saveCustomDictionaries(o)},updateDictionary:(e,r)=>{let a=null;t(t=>{let i=t.dictionaries.findIndex(t=>t.id===e);if(i<0)return t;let n=t.dictionaries[i];if(n.deletedAt)return t;let o=r.name?.trim();return o&&o!==n.name?(a={...n,name:o},{dictionaries:t.dictionaries.map((e,t)=>t===i?a:e)}):t}),a&&eo(a)},replaceDictionaries:(e,a)=>{if(0===e.length)return void r().addDictionary(a);let i=new Set(e),n=r().dictionaries.filter(e=>i.has(e.id)).map(e=>e.contentId).filter(e=>!!e);if(t(t=>{let r=t.dictionaries.filter(e=>!i.has(e.id));r.push(a);let n=t.settings.providerOrder,o=[],l=!1;for(let e of n)i.has(e)?l||(o.push(a.id),l=!0):o.push(e);l||o.push(a.id);let s=e[0],d=void 0!==t.settings.providerEnabled[s]?!1!==t.settings.providerEnabled[s]:!a.unsupported,c={...t.settings.providerEnabled};for(let t of e)delete c[t];return c[a.id]=d,{dictionaries:r,settings:{...t.settings,providerOrder:o,providerEnabled:c}}}),!(a.contentId&&n.includes(a.contentId)))for(let e of n)el(e);eo(a)},removeDictionary:e=>{let a=r().dictionaries.find(t=>t.id===e);return!!a&&(t(t=>({dictionaries:t.dictionaries.map(t=>t.id===e?{...t,deletedAt:Date.now()}:t),settings:{...t.settings,providerOrder:t.settings.providerOrder.filter(t=>t!==e),providerEnabled:Object.fromEntries(Object.entries(t.settings.providerEnabled).filter(t=>{let[r]=t;return r!==e}))}})),a.contentId&&el(a.contentId),!0)},reorder:e=>{t(t=>{let r=new Set(t.settings.providerOrder),a=e.filter(e=>r.has(e)),i=t.settings.providerOrder.filter(e=>!a.includes(e));return{settings:{...t.settings,providerOrder:[...a,...i]}}})},setEnabled:(e,r)=>{t(t=>{let a={...t.settings.providerEnabled,[e]:r};return{settings:{...t.settings,providerEnabled:a}}})},setDefaultProviderId:e=>{t(t=>({settings:{...t.settings,defaultProviderId:e}}))},setFontScale:e=>{t(t=>({settings:{...t.settings,fontScale:e}}))},setAutoPlayPronunciation:e=>{t(t=>({settings:{...t.settings,autoPlayPronunciation:e}}))},setContextTranslatorId:e=>{t(t=>({settings:{...t.settings,contextTranslatorId:e}}))},addWebSearch:(e,r)=>{let a=e.trim(),i=r.trim(),n=`web:${Math.random().toString(36).slice(2,10)}${Date.now().toString(36)}`,o={id:n,name:a,urlTemplate:i};return t(e=>{let t=e.settings.webSearches??[],r=e.settings.providerOrder.includes(n)?e.settings.providerOrder:[...e.settings.providerOrder,n],a={...e.settings.providerEnabled,[n]:!0};return{settings:{...e.settings,webSearches:[...t,o],providerOrder:r,providerEnabled:a}}}),o},updateWebSearch:(e,r)=>{e.startsWith("web:builtin:")||t(t=>{let a=t.settings.webSearches??[];if(!a.some(t=>t.id===e))return t;let i=a.map(t=>t.id===e?{...t,name:r.name?.trim()??t.name,urlTemplate:r.urlTemplate?.trim()??t.urlTemplate}:t);return{settings:{...t.settings,webSearches:i}}})},removeWebSearch:e=>!e.startsWith("web:builtin:")&&!!(r().settings.webSearches??[]).some(t=>t.id===e)&&(t(t=>({settings:{...t.settings,webSearches:(t.settings.webSearches??[]).map(t=>t.id===e?{...t,deletedAt:Date.now()}:t),providerOrder:t.settings.providerOrder.filter(t=>t!==e),providerEnabled:Object.fromEntries(Object.entries(t.settings.providerEnabled).filter(t=>{let[r]=t;return r!==e}))}})),!0),applyRemoteDictionarySettings:e=>{t(t=>({settings:{...t.settings,...e}}))},loadCustomDictionaries:async r=>{try{let i,{settings:n}=a.f.getState(),o=n?.customDictionaries??[],l=n?.dictionarySettings??ed,s=await r.getAppService();if(o.filter(e=>!e.deletedAt&&"plugin"===e.kind).length>0)try{i=await e.A(400993).then(e=>e.getDictionaryPluginControlStore(s))}catch(e){console.warn("Failed to open dictionary plugin control store",e)}let d=await Promise.all(o.map(async t=>{if(t.deletedAt)return t;if(!await s.exists(t.bundleDir,"Dictionaries"))return{...t,unavailable:!0};if("plugin"!==t.kind||!t.plugin)return t;if(!i)return{...t,unavailable:!0};let r=await i.getActiveGeneration(t.id);if(r?.pluginId===t.plugin.pluginId&&r.indexVersion===t.plugin.indexVersion)return t;try{let{materializePluginDictionary:r}=await e.A(147065);return await r(s,t,{controlStore:i}),{...t,unavailable:void 0}}catch(e){return console.warn("Failed to materialize plugin dictionary",t.id,e),{...t,unavailable:!0}}})),c=new Set(o.filter(e=>e.deletedAt).map(e=>e.id)),f=e=>!c.has(e),h=l.providerOrder.filter(f),u=new Set(h),g=h.length?[...h]:[...ed.providerOrder];for(let e of ed.providerOrder)u.has(e)||(g.push(e),u.add(e));let p=Object.fromEntries(Object.entries(l.providerEnabled).filter(e=>{let[t]=e;return f(t)})),m=[];for(let e of Object.keys(p))u.has(e)||(m.push(e),u.add(e));if(m.length>0){let e=g.findIndex(e=>e.startsWith("builtin:")||e.startsWith("web:builtin:"));e<0?g.push(...m):g.splice(e,0,...m)}let b={providerOrder:g,providerEnabled:{...ed.providerEnabled,...p},defaultProviderId:l.defaultProviderId,webSearches:l.webSearches??[],fontScale:l.fontScale??ed.fontScale,autoPlayPronunciation:l.autoPlayPronunciation??ed.autoPlayPronunciation,contextTranslatorId:l.contextTranslatorId};t({dictionaries:d,settings:b})}catch(e){console.error("Failed to load custom dictionaries settings:",e)}},saveCustomDictionaries:async(e,t)=>{try{let{settings:i,setSettings:n,saveSettings:o}=a.f.getState(),{dictionaries:l,settings:s}=r(),d={...i,customDictionaries:l.map(ec),dictionarySettings:s};t?.publishOrderChange&&q(),n(d),o(e,d)}catch(e){throw console.error("Failed to save custom dictionaries settings:",e),e}}}))},23457,140018,e=>{var t=e.i(571419),r=e.i(858837),a=e.i(826828),i=e.i(238991),n=e.i(63197),o=e.i(222488);let l="default",s=`You are a professional literary translator translating a book from {{sourceLang}} into {{targetLang}}.
Book: {{bookTitle}} by {{bookAuthor}}
Translate faithfully and naturally, preserving the tone, style and meaning of the original. Keep names and terminology consistent.`,d=e=>{if(!e||"AUTO"===e.toUpperCase())return"the source language";let t=(0,o.S)(e);return"zh-Hans"===t?"Simplified Chinese":"zh-Hant"===t?"Traditional Chinese":(0,o.t)(e)};e.s(["R",0,l,"T",0,s,"n",0,(e,t)=>e.replaceAll("{{sourceLang}}",d(t.sourceLang)).replaceAll("{{targetLang}}",d(t.targetLang)).replaceAll("{{bookTitle}}",t.bookTitle??"").replaceAll("{{bookAuthor}}",t.bookAuthor??"")],140018);let c=()=>Math.random().toString(36).slice(2),f=(e,t)=>e.some(e=>e.id===t.id)?e.map(e=>e.id===t.id?t:e):[...e,t],h=(e,t)=>e.map(e=>e.id===t?{...e,deletedAt:Date.now()}:e),u=()=>{let e=(0,a.s)();e&&g.getState().saveCustomTranslators(e)},g=(0,t.f)((e,t)=>({translators:[],prompts:[],loaded:!1,getAvailableTranslators:()=>t().translators.filter(e=>!e.deletedAt),getAvailablePrompts:()=>t().prompts.filter(e=>!e.deletedAt),addTranslator:t=>{let r=Date.now(),a={...t,id:crypto.randomUUID(),addedAt:r,updatedAt:r,reincarnation:c()};return e(e=>({translators:[...e.translators,a]})),(0,i.K)(n.k,a,a.id,a.reincarnation),a},updateTranslator:(r,a)=>{let o=t().translators.find(e=>e.id===r&&!e.deletedAt);if(!o)return;let l={...o,...a,updatedAt:Date.now()};e(e=>({translators:f(e.translators,l)})),(0,i.K)(n.k,l,r,l.reincarnation)},removeTranslator:t=>{e(e=>({translators:h(e.translators,t)})),(0,i.t)(n.k,t)},addPrompt:t=>{let r=Date.now(),a={...t,id:crypto.randomUUID(),addedAt:r,updatedAt:r,reincarnation:c()};return e(e=>({prompts:[...e.prompts,a]})),(0,i.K)(n.E,a,a.id,a.reincarnation),a},updatePrompt:(r,a)=>{let o=t().prompts.find(e=>e.id===r&&!e.deletedAt);if(!o)return;let l={...o,...a,updatedAt:Date.now()};e(e=>({prompts:f(e.prompts,l)})),(0,i.K)(n.E,l,r,l.reincarnation)},removePrompt:t=>{e(e=>({prompts:h(e.prompts,t)})),(0,i.t)(n.E,t)},applyRemoteTranslator:r=>{let a=t().translators.find(e=>e.id===r.id),i={...r,apiKey:r.apiKey??a?.apiKey,lastSeenCipher:r.lastSeenCipher??a?.lastSeenCipher,deletedAt:void 0};e(e=>({translators:f(e.translators,i)})),u()},applyRemotePrompt:t=>{e(e=>({prompts:f(e.prompts,{...t,deletedAt:void 0})})),u()},softDeleteTranslator:r=>{t().translators.some(e=>e.id===r&&!e.deletedAt)&&(e(e=>({translators:h(e.translators,r)})),u())},softDeletePrompt:r=>{t().prompts.some(e=>e.id===r&&!e.deletedAt)&&(e(e=>({prompts:h(e.prompts,r)})),u())},loadCustomTranslators:async()=>{let{settings:t}=r.f.getState();e({translators:t?.customTranslators??[],prompts:t?.translationPrompts??[],loaded:!0})},saveCustomTranslators:async e=>{let{settings:a,setSettings:i,saveSettings:n}=r.f.getState(),{translators:o,prompts:l}=t();a.customTranslators=o.filter(e=>!e.deletedAt),a.translationPrompts=l.filter(e=>!e.deletedAt),i(a),await n(e,a)}}));e.s(["E",0,e=>{g.getState().loaded||g.getState().loadCustomTranslators(e)},"M",0,e=>g.getState().translators.find(t=>t.id===e)??r.f.getState().settings?.customTranslators?.find(t=>t.id===e),"V",0,e=>g.getState().prompts.find(t=>t.id===e)??r.f.getState().settings?.translationPrompts?.find(t=>t.id===e),"S",0,()=>{let{loaded:e,translators:t}=g.getState();return(e?t:r.f.getState().settings?.customTranslators??[]).filter(e=>"openai-compatible"===e.type&&!e.deletedAt&&!e.disabled)},"T",0,e=>{if(!e||e===l)return s;let t=g.getState().getAvailablePrompts().find(t=>t.id===e);return t?.systemPrompt??s},"G",0,g],23457)},711042,e=>{var t=e.i(556678),r=e.i(431187),a=e.i(528934),i=e.i(908547);let n=[{family:"Bitter",weights:"ital,wght@0,100..900;1,100..900"},{family:"Fira Code",weights:"wght@300..700"},{family:"Literata",weights:"ital,opsz,wght@0,7..72,200..900;1,7..72,200..900"},{family:"Merriweather",weights:"ital,opsz,wght@0,18..144,300..900;1,18..144,300..900"},{family:"Noto Sans",weights:"ital,wght@0,100..900;1,100..900"},{family:"Open Sans",weights:"ital,wght@0,300..800;1,300..800"},{family:"Roboto",weights:"ital,wght@0,100..900;1,100..900"},{family:"Roboto Slab",weights:"ital,wght@0,100..900;1,100..900"},{family:"Vollkorn",weights:"ital,wght@0,400..900;1,400..900"},{family:"PT Sans",weights:"ital,wght@0,400;0,700;1,400;1,700"},{family:"PT Serif",weights:"ital,wght@0,400;0,700;1,400;1,700"},{family:"PT Mono",weights:""}],o=[{family:"LXGW WenKai TC",weights:""},{family:"Noto Sans SC",weights:""},{family:"Noto Sans TC",weights:""},{family:"Noto Serif JP",weights:""}],l=["Huiwen-MinchoGBK","KingHwa_OldSong","Source Han Serif CN","GuanKiapTsingKhai-T"],s=async function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e.head)return;let i=a||(0,r.l)(),s=`
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${n.map(e=>{let{family:t,weights:r}=e;return`family=${encodeURIComponent(t)}${r?`:${r}`:""}`}).join("&")}&display=swap" crossorigin="anonymous">
`,d="";if(i){let e;d=`
  @font-face {
    font-family: "FangSong";
    font-display: swap;
    src: local("Fang Song"), local("FangSong"), local("Noto Serif CJK"), local("Source Han Serif SC VF"), url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.eot");
    src: url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.eot?#iefix") format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.woff2") format("woff2"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.woff") format("woff"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.ttf") format("truetype"),
    url("https://db.onlinewebfonts.com/t/2ecbfe1d9bfc191c6f15c0ccc23cbd43.svg#FangSong") format("svg");
  }
  @font-face {
    font-family: "Kaiti";
    font-display: swap;
    src: local("Kai"), local("KaiTi"), local("AR PL UKai"), local("LXGW WenKai GB Screen"), url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.eot");
    src: url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/1ee9941f1b8c128110ca4307dda59917.svg#STKaiti")format("svg");
  }
  @font-face {
    font-family: "Heiti";
    font-display: swap;
    src: local("Hei"), local("SimHei"), local("WenQuanYi Zen Hei"), local("Source Han Sans SC VF"), url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.eot");
    src: url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/a4948b9d43a91468825a5251df1ec58d.svg#WenQuanYi Micro Hei")format("svg");
  }
  @font-face {
    font-family: "XiHeiti";
    font-display: swap;
    src: local("PingFang SC"), local("Microsoft YaHei"), local("WenQuanYi Micro Hei"), local("FZHei-B01"), url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.eot");
    src: url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/4f0b783ba4a1b381fc7e7af81ecab481.svg#STHeiti J Light")format("svg");
}
`,s=`${s}
${e=((0,t.f)()?.fontBaseUrl||"https://storage.readest.com/public/font/dist").replace(/\/+$/,""),`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/misans-webfont@1.0.4/misans-l3/misans-l3/result.min.css" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-web/1.520.0/lxgwwenkaigbscreen/result.css" crossorigin="anonymous" />
  ${l.map(t=>`<link rel='stylesheet' href='${e}/${encodeURIComponent(t)}/result.css' crossorigin="anonymous" />`).join("\n  ")}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${o.map(e=>{let{family:t,weights:r}=e;return`family=${encodeURIComponent(t)}${r?`:${r}`:""}`}).join("&")}&display=swap" crossorigin="anonymous" />
`}`}if(d){let t=e.createElement("style");t.textContent=d,e.head.appendChild(t)}Array.from(new DOMParser().parseFromString(s,"text/html").head.children).forEach(t=>{if("LINK"===t.tagName){let r=e.createElement("link");r.rel=t.getAttribute("rel")||"",r.href=t.getAttribute("href")||"",r.crossOrigin=t.getAttribute("crossorigin")||"",e.head.appendChild(r)}})};function d(e){switch(e.toLowerCase().split(".").pop()){case"ttf":default:return"ttf";case"otf":return"otf";case"woff":return"woff";case"woff2":return"woff2"}}function c(e){let t={ttf:"truetype",otf:"opentype",woff:"woff",woff2:"woff2"}[d(e.path)]||"truetype",r=(e.family||e.name).replace(/\s+/g," ").trim(),a=e.style||"normal",i=e.weight||400,n=e.variable||!1;if(!e.blobUrl)throw Error(`Blob URL not available for font: ${e.name}`);return`
    @font-face {
      font-family: "${r}";
      ${n?"":`font-style: ${a};`}
      ${n?"":`font-weight: ${i};`}
      src: url("${e.blobUrl}") format("${t}");
      font-display: swap;
    }
  `}e.s(["M",0,function(e,t){let r=t?.name||(0,a.U)(e).replace(/\.(ttf|otf|woff|woff2)$/i,"");return{...t,id:(0,i.q)(r),name:r,path:e}},"v",0,c,"C",0,d,"k",0,function(e){return({ttf:"font/ttf",otf:"font/otf",woff:"font/woff",woff2:"font/woff2"})[e]||"font/ttf"},"h",0,s,"W",0,(e,t)=>{if(!e.head)return;let r=`custom-font-${t.id}`,a=e.getElementById(r)||e.createElement("style");a.id=r,a.textContent=c(t),a.parentNode||e.head.appendChild(a)}])},265267,e=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,a,i,n=/^\s+/,o=/\s+$/;function l(e,r){if(r=r||{},(e=e||"")instanceof l)return e;if(!(this instanceof l))return new l(e,r);var a,i,s,d,c,f,h,u,g,p,m,b,y,w,v,k,x,$,A,C,M=(i={r:0,g:0,b:0},s=1,d=null,c=null,f=null,h=!1,u=!1,"string"==typeof(a=e)&&(a=function(e){e=e.replace(n,"").replace(o,"").toLowerCase();var t,r=!1;if(S[e])e=S[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=O.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=O.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=O.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=O.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=O.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=O.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=O.hex8.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),a:T(t[4])/255,format:r?"name":"hex8"}:(t=O.hex6.exec(e))?{r:T(t[1]),g:T(t[2]),b:T(t[3]),format:r?"name":"hex"}:(t=O.hex4.exec(e))?{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),a:T(t[4]+""+t[4])/255,format:r?"name":"hex8"}:!!(t=O.hex3.exec(e))&&{r:T(t[1]+""+t[1]),g:T(t[2]+""+t[2]),b:T(t[3]+""+t[3]),format:r?"name":"hex"}}(a)),"object"==t(a)&&(P(a.r)&&P(a.g)&&P(a.b)?(g=a.r,p=a.g,m=a.b,i={r:255*E(g,255),g:255*E(p,255),b:255*E(m,255)},h=!0,u="%"===String(a.r).substr(-1)?"prgb":"rgb"):P(a.h)&&P(a.s)&&P(a.v)?(d=I(a.s),c=I(a.v),b=a.h,y=d,w=c,b=6*E(b,360),y=E(y,100),w=E(w,100),v=Math.floor(b),k=b-v,x=w*(1-y),$=w*(1-k*y),A=w*(1-(1-k)*y),i={r:255*[w,$,x,x,A,w][C=v%6],g:255*[A,w,w,$,x,x][C],b:255*[x,x,A,w,w,$][C]},h=!0,u="hsv"):P(a.h)&&P(a.s)&&P(a.l)&&(d=I(a.s),f=I(a.l),i=function(e,t,r){var a,i,n;function o(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=E(e,360),t=E(t,100),r=E(r,100),0===t)a=i=n=r;else{var l=r<.5?r*(1+t):r+t-r*t,s=2*r-l;a=o(s,l,e+1/3),i=o(s,l,e),n=o(s,l,e-1/3)}return{r:255*a,g:255*i,b:255*n}}(a.h,d,f),h=!0,u="hsl"),a.hasOwnProperty("a")&&(s=a.a)),s=_(s),{ok:h,format:a.format||u,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s});this._originalInput=e,this._r=M.r,this._g=M.g,this._b=M.b,this._a=M.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||M.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=M.ok}function s(e,t,r){e=E(e,255);var a,i,n=Math.max(e,t=E(t,255),r=E(r,255)),o=Math.min(e,t,r),l=(n+o)/2;if(n==o)a=i=0;else{var s=n-o;switch(i=l>.5?s/(2-n-o):s/(n+o),n){case e:a=(t-r)/s+6*(t<r);break;case t:a=(r-e)/s+2;break;case r:a=(e-t)/s+4}a/=6}return{h:a,s:i,l:l}}function d(e,t,r){e=E(e,255);var a,i=Math.max(e,t=E(t,255),r=E(r,255)),n=Math.min(e,t,r),o=i-n;if(i==n)a=0;else{switch(i){case e:a=(t-r)/o+6*(t<r);break;case t:a=(r-e)/o+2;break;case r:a=(e-t)/o+4}a/=6}return{h:a,s:0===i?0:o/i,v:i}}function c(e,t,r,a){var i=[M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(r).toString(16))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function f(e,t,r,a){return[M(z(a)),M(Math.round(e).toString(16)),M(Math.round(t).toString(16)),M(Math.round(r).toString(16))].join("")}function h(e,t){t=0===t?0:t||10;var r=l(e).toHsl();return r.s-=t/100,r.s=C(r.s),l(r)}function u(e,t){t=0===t?0:t||10;var r=l(e).toHsl();return r.s+=t/100,r.s=C(r.s),l(r)}function g(e){return l(e).desaturate(100)}function p(e,t){t=0===t?0:t||10;var r=l(e).toHsl();return r.l+=t/100,r.l=C(r.l),l(r)}function m(e,t){t=0===t?0:t||10;var r=l(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-(t/100*255)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-(t/100*255)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-(t/100*255)))),l(r)}function b(e,t){t=0===t?0:t||10;var r=l(e).toHsl();return r.l-=t/100,r.l=C(r.l),l(r)}function y(e,t){var r=l(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,l(r)}function w(e){var t=l(e).toHsl();return t.h=(t.h+180)%360,l(t)}function v(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var r=l(e).toHsl(),a=[l(e)],i=360/t,n=1;n<t;n++)a.push(l({h:(r.h+n*i)%360,s:r.s,l:r.l}));return a}function k(e){var t=l(e).toHsl(),r=t.h;return[l(e),l({h:(r+72)%360,s:t.s,l:t.l}),l({h:(r+216)%360,s:t.s,l:t.l})]}function x(e,t,r){t=t||6,r=r||30;var a=l(e).toHsl(),i=360/r,n=[l(e)];for(a.h=(a.h-(i*t>>1)+720)%360;--t;)a.h=(a.h+i)%360,n.push(l(a));return n}function $(e,t){t=t||6;for(var r=l(e).toHsv(),a=r.h,i=r.s,n=r.v,o=[],s=1/t;t--;)o.push(l({h:a,s:i,v:n})),n=(n+s)%1;return o}l.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,a=this.toRgb();return e=a.r/255,t=a.g/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r=a.b/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=_(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=d(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=s(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=s(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return c(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,r,a,i,n,o;return t=this._r,r=this._g,a=this._b,i=this._a,n=e,o=[M(Math.round(t).toString(16)),M(Math.round(r).toString(16)),M(Math.round(a).toString(16)),M(z(i))],n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*E(this._r,255))+"%",g:Math.round(100*E(this._g,255))+"%",b:Math.round(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%)":"rgba("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(A[c(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+f(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";if(e){var i=l(e);r="#"+f(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&this._a>=0;return!t&&a&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return l(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(p,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(b,arguments)},desaturate:function(){return this._applyModification(h,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(y,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(x,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination($,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(v,[3])},tetrad:function(){return this._applyCombination(v,[4])}},l.fromRatio=function(e,r){if("object"==t(e)){var a={};for(var i in e)e.hasOwnProperty(i)&&("a"===i?a[i]=e[i]:a[i]=I(e[i]));e=a}return l(e,r)},l.equals=function(e,t){return!!e&&!!t&&l(e).toRgbString()==l(t).toRgbString()},l.random=function(){return l.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},l.mix=function(e,t,r){r=0===r?0:r||50;var a=l(e).toRgb(),i=l(t).toRgb(),n=r/100;return l({r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a})},l.readability=function(e,t){var r=l(e),a=l(t);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},l.isReadable=function(e,t,r){var a,i,n,o,s,d=l.readability(e,t);switch(s=!1,(i=((a=(a=r)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(a.size||"small").toLowerCase(),"AA"!==i&&"AAA"!==i&&(i="AA"),"small"!==n&&"large"!==n&&(n="small"),o={level:i,size:n}).level+o.size){case"AAsmall":case"AAAlarge":s=d>=4.5;break;case"AAlarge":s=d>=3;break;case"AAAsmall":s=d>=7}return s},l.mostReadable=function(e,t,r){var a,i,n,o,s=null,d=0;i=(r=r||{}).includeFallbackColors,n=r.level,o=r.size;for(var c=0;c<t.length;c++)(a=l.readability(e,t[c]))>d&&(d=a,s=l(t[c]));return l.isReadable(e,s,{level:n,size:o})||!i?s:(r.includeFallbackColors=!1,l.mostReadable(e,["#fff","#000"],r))};var S=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},A=l.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(S);function _(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function E(e,t){"string"==typeof(r=e)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(e="100%");var r,a,i="string"==typeof(a=e)&&-1!=a.indexOf("%");return(e=Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t))?1:e%t/parseFloat(t)}function C(e){return Math.min(1,Math.max(0,e))}function T(e){return parseInt(e,16)}function M(e){return 1==e.length?"0"+e:""+e}function I(e){return e<=1&&(e=100*e+"%"),e}function z(e){return Math.round(255*parseFloat(e)).toString(16)}var O=(a="[\\s|\\(]+("+(r="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",i="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",{CSS_UNIT:new RegExp(r),rgb:RegExp("rgb"+a),rgba:RegExp("rgba"+i),hsl:RegExp("hsl"+a),hsla:RegExp("hsla"+i),hsv:RegExp("hsv"+a),hsva:RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function P(e){return!!O.CSS_UNIT.exec(e)}let N=e=>{let t=l.readability(e,"#000000")<l.readability(e,"#ffffff");return l.mix(e,t?"#ffffff":"#000000",80).toHexString()},R=e=>{let{bg:t,fg:r,primary:a}=e;return{"base-100":t,"base-200":l(t).darken(5).toHexString(),"base-300":l(t).darken(12).toHexString(),"base-content":r,neutral:l(t).darken(15).desaturate(20).toHexString(),"neutral-content":l(r).lighten(20).desaturate(20).toHexString(),primary:a,secondary:l(a).lighten(20).toHexString(),accent:l(a).analogous()[1].toHexString()}},H=e=>{let{bg:t,fg:r,primary:a}=e;return{"base-100":t,"base-200":l(t).lighten(5).toHexString(),"base-300":l(t).lighten(12).toHexString(),"base-content":r,neutral:l(t).lighten(15).desaturate(20).toHexString(),"neutral-content":l(r).darken(20).desaturate(20).toHexString(),primary:a,secondary:l(a).darken(20).toHexString(),accent:l(a).triad()[1].toHexString()}},L=[{name:"default",label:"Default",colors:{light:R({fg:"#171717",bg:"#ffffff",primary:"#0066cc"}),dark:H({fg:"#e0e0e0",bg:"#222222",primary:"#77bbee"})}},{name:"gray",label:"Gray",colors:{light:R({fg:"#222222",bg:"#e0e0e0",primary:"#4488cc"}),dark:H({fg:"#c6c6c6",bg:"#444444",primary:"#88ccee"})}},{name:"sepia",label:"Sepia",colors:{light:R({fg:"#5b4636",bg:"#f1e8d0",primary:"#008b8b"}),dark:H({fg:"#ffd595",bg:"#342e25",primary:"#48d1cc"})}},{name:"grass",label:"Grass",colors:{light:R({fg:"#232c16",bg:"#d7dbbd",primary:"#177b4d"}),dark:H({fg:"#d8deba",bg:"#333627",primary:"#a6d608"})}},{name:"cherry",label:"Cherry",colors:{light:R({fg:"#4e1609",bg:"#f0d1d5",primary:"#de3838"}),dark:H({fg:"#e5c4c8",bg:"#462f32",primary:"#ff646e"})}},{name:"sky",label:"Sky",colors:{light:R({fg:"#262d48",bg:"#cedef5",primary:"#2d53e5"}),dark:H({fg:"#babee1",bg:"#282e47",primary:"#ff646e"})}},{name:"solarized",label:"Solarized",colors:{light:R({fg:"#586e75",bg:"#fdf6e3",primary:"#268bd2"}),dark:H({fg:"#93a1a1",bg:"#002b36",primary:"#268bd2"})}},{name:"gruvbox",label:"Gruvbox",colors:{light:R({fg:"#3c3836",bg:"#fbf1c7",primary:"#076678"}),dark:H({fg:"#ebdbb2",bg:"#282828",primary:"#83a598"})}},{name:"nord",label:"Nord",colors:{light:R({fg:"#2e3440",bg:"#eceff4",primary:"#5e81ac"}),dark:H({fg:"#d8dee9",bg:"#2e3440",primary:"#88c0d0"})}},{name:"contrast",label:"Contrast",colors:{light:R({fg:"#000000",bg:"#ffffff",primary:"#4488cc"}),dark:H({fg:"#ffffff",bg:"#000000",primary:"#88ccee"})}},{name:"sunset",label:"Sunset",colors:{light:R({fg:"#423126",bg:"#fff7f0",primary:"#fe6b64"}),dark:H({fg:"#f6e1d7",bg:"#3c2b25",primary:"#ff9c94"})}}],D=(e,t,r)=>{let a=Object.entries({"color-scheme":r,"--color-base-100":t["base-100"],"--color-base-200":t["base-200"],"--color-base-300":t["base-300"],"--color-base-content":t["base-content"],"--color-primary":t.primary,"--color-primary-content":N(t.primary),"--color-secondary":t.secondary,"--color-secondary-content":N(t.secondary),"--color-accent":t.accent,"--color-accent-content":N(t.accent),"--color-neutral":t.neutral,"--color-neutral-content":t["neutral-content"],"--color-info":"oklch(72.06% 0.191 231.6)","--color-info-content":"oklch(14.412% 0.0382 231.6)","--color-success":"oklch(64.8% 0.15 160)","--color-success-content":"oklch(12.96% 0.03 160)","--color-warning":"oklch(84.71% 0.199 83.87)","--color-warning-content":"oklch(16.942% 0.0398 83.87)","--color-error":"oklch(71.76% 0.221 22.18)","--color-error-content":"oklch(14.352% 0.0442 22.18)","--radius-selector":"1.9rem","--radius-field":"0.5rem","--radius-box":"1rem","--size-selector":"0.25rem","--size-field":"0.25rem","--border":"1px","--depth":"0","--noise":"0"}).map(e=>{let[t,r]=e;return`  ${t}: ${r};`}).join("\n");return`[data-theme="${e}"] {
${a}
}`};e.s(["e",0,e=>{let t=`${e.name}-light`,r=`${e.name}-dark`,a=[D(t,R(e.colors.light),"light"),D(r,H(e.colors.dark),"dark")].join("\n"),i=`theme-${e.name}-styles`;document.getElementById(i)?.remove();let n=document.createElement("style");return n.id=i,n.textContent=a,document.head.appendChild(n),{light:t,dark:r}},"T",0,H,"n",0,R,"g",0,L],265267)},315199,253255,433415,201071,258229,11062,e=>{var t=e.i(481959),r=e.i(734431),a=e.i(265267),i=e.i(711042),n=e.i(684658);let o=e=>{let t=e.match(/^epubcfi\((.+)\)$/);return t?t[1]:e};function l(e){try{let t=n.parse(e);return n.fake.toIndex((t.parent??t).shift())}catch{return null}}e.s(["w",0,function(e){if(!e)return()=>!1;let t=o(e),r=null,a=null;try{r=n.collapse(e),a=n.collapse(e,!0)}catch(t){console.warn("Failed to collapse location for matcher",{location:e,error:t})}return i=>{if(!i)return!1;if(i===e||o(i).startsWith(t))return!0;if(null===r||null===a)return!1;try{return n.compare(i,r)>=0&&0>=n.compare(i,a)}catch(t){return console.warn("Failed to compare CFIs",{cfi:i,location:e,error:t}),!1}}},"E",0,function(e,t){if(!t)return null;let r=e.filter(e=>"string"==typeof e&&e.length>0);if(0===r.length)return null;let a=n.collapse(t),i=0,o=r.length;for(;i<o;){let e=i+o>>>1;0>=n.compare(r[e],a)?i=e+1:o=e}return 0===i?r[0]:i>=r.length?r[r.length-1]:r[i-1]},"C",0,function(e){if(!e)return null;let t=e.match(/^epubcfi\((.+)\)$/);if(!t)return null;let r=t[1],a=r.indexOf("!");return -1===a?r:r.slice(0,a)},"u",0,l,"N",0,function(e,t){if(!e||!t)return!1;if(e===t||e&&o(e).startsWith(o(t)))return!0;let r=n.collapse(t),a=n.collapse(t,!0);try{return n.compare(e,r)>=0&&0>=n.compare(e,a)}catch(r){return console.warn("Failed to compare CFIs",{cfi:e,location:t,error:r}),!1}},"d",0,function(e){try{let t=n.parse(e);if(!t.parent)return!1;let r=e=>Array.isArray(e)&&e.every(e=>Array.isArray(e)&&0===e.length);return r(t.start)||r(t.end)}catch{return!1}}],253255);let s="readest-dialogue",d="readest-dialogue-block",c=e=>!!e.dialogueHighlight||!!e.dialogueHighlightCustomTextColor,f=/“[^“”]+?[”"]|„[^„“]+?[“"]|"[^"\n]+?"|«[^«»]+?[»]|「[^「」]+?[」]|『[^『』]+?[』]|‘(?:[^‘’\n]|’(?=\p{L})|\p{L}’(?=[\s\p{Pd}])){0,300}?(?![‘’“”„«»「」『』"'])\p{P}’(?!\p{L})|‘(?:[^‘’]|’(?=\p{L})){1,300}?’(?!\p{L})/gu,h=/“[^“”\n]*(?:“[^“”\n]*”[^“”\n]*)+”|„[^„“\n]*(?:„[^„“\n]*“[^„“\n]*)+“|«[^«»\n]*(?:«[^«»\n]*»[^«»\n]*)+»/gu,u=/^[—–―－][\s\u3000]/,g=e=>{let t=e.parentElement;return!!(!t||t.closest(`.${s}`))||!!t.closest("pre, code, kbd, samp, script, style, textarea, rt, rp")},p=(e,t,r,a)=>{if(r>=a)return;a<t.length&&t.splitText(a);let i=r>0?t.splitText(r):t,n=e.createElement("span");n.className=s,n.setAttribute("cfi-skip",""),i.parentNode?.replaceChild(n,i),n.appendChild(i)},m="p, li, blockquote, dd, dt",b=(e,t)=>{if(e.querySelectorAll(`.${s}`).forEach(e=>{let t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}}),e.querySelectorAll(`.${d}`).forEach(e=>{e.classList.remove(d)}),(e.body??e.documentElement)?.normalize(),!c(t)||!e.body&&!e.documentElement)return;let{entries:r,text:a}=(e=>{let t=e.defaultView?.NodeFilter.SHOW_TEXT??4,r=e.createTreeWalker(e.body??e.documentElement,t),a=[],i="",n=null,o=r.nextNode();for(;o;){if(!g(o)){let e=o.textContent??"";if(e){let t=o.parentElement.closest("p, div, li, blockquote, dd, dt, h1, h2, h3, h4, h5, h6, td, th, caption, figcaption, section, article, aside, body");n&&t!==n&&(i+="\n"),n=t,a.push({node:o,start:i.length,end:i.length+e.length}),i+=e}}o=r.nextNode()}return{entries:a,text:i}})(e);if(0!==r.length){let t,i;((e,t,r)=>{let a=t.length-1;for(let i=r.length-1;i>=0;i--){let n=r[i];for(;a>=0&&t[a].start>=n.end;)a--;for(let r=a;r>=0&&t[r].end>n.start;r--){let a=t[r];a.node.isConnected&&p(e,a.node,Math.max(n.start,a.start)-a.start,Math.min(n.end,a.end)-a.start)}}})(e,r,(e=>{let t=[];for(let r of[f,h]){let a;for(r.lastIndex=0;a=r.exec(e);){if(a[0].length>2048){r.lastIndex=a.index+1;continue}t.push({start:a.index,end:a.index+a[0].length})}}t.sort((e,t)=>e.start-t.start||t.end-e.end);let r=[],a=-1;for(let e of t)e.start>=a&&(r.push(e),a=e.end);return r})(a)),i=new Set(t=[...e.querySelectorAll(m)].filter(e=>u.test((e.textContent??"").trimStart()))),t.forEach(e=>{[...e.querySelectorAll(m)].some(e=>i.has(e))||e.classList.add(d)})}};e.s(["U",0,c,"J",0,b,"i",0,function(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=(a??[]).flatMap(e=>"subitems"in e?e.subitems:[e]).flatMap(e=>e.cfis??[e.cfi]);for(let{doc:a,index:n}of e.renderer.getContents())b(a,t),r.filter(e=>"annotation"===e.type&&e.style&&!e.deletedAt&&l(e.cfi)===n).forEach(t=>e.addAnnotation(t)),i.filter(e=>l(e)===n).forEach(t=>e.addAnnotation({value:"foliate-search:"+t}))}],433415);let y=["auto","light","dark"],w=["auto","light","dark","ambient"];function v(e,t){return"true"===e||"false"!==e&&t}e.s(["Y",0,function(e){return"auto"===e||"light"===e||"dark"===e||"ambient"===e},"E",0,function(e,t){let r=t?w:y,a=r.indexOf("ambient"!==e||t?e:"auto"),i=a<0?0:(a+1)%r.length;return r[i]??"auto"},"s",0,v,"x",0,function(e,t){return null===t?e<35:e<20||!(e>50)&&t},"O",0,function(e,t,r){return"dark"===e||"light"!==e&&("ambient"===e?r:t)}],201071);let k=["a","b","em","i","strong","u","span","font","sup","sub","small","mark"],x=k.join(", "),$=new Set(k);e.s(["f",0,x,"n",0,k,"P",0,e=>$.has(e.toLowerCase())],258229);var S=e.i(431187);let A="scroll-wrapper",_="scroll-wrapper-fit",E=`.${A}`,C="link-hit-area",T="data-readest-scroll-wrapper-touch-scroll",M=e=>e.scrollWidth-e.clientWidth>4,I=e=>e.scrollHeight-e.clientHeight>4,z=e=>{if(!e||!("closest"in e))return null;let t=e.closest(E);for(;t;){if(!t.classList.contains(_)&&(M(t)||I(t)))return t;t=t.parentElement?.closest(E)??null}return null},O=["Top","Right","Bottom","Left"],P=e=>{let t=e.scrollWidth-e.clientWidth;e.classList.toggle(_,t<=4||N(e,t))},N=(e,t)=>{if(t>14||!e.ownerDocument.documentElement.classList.contains(C))return!1;let r=e.querySelector(":scope > table");if(!r||r.offsetWidth-e.clientWidth>4)return!1;let a=e.ownerDocument.defaultView?.getComputedStyle(e).direction==="rtl",i=e.getBoundingClientRect().left+e.clientLeft,n=i+e.clientWidth;return[...r.querySelectorAll("a")].some(e=>{let r=e.getBoundingClientRect();return(a?i-r.left:r.right-n)+10>=t-4})},R=(e,t)=>{let r=e.ownerDocument.fonts;if(r?.status==="loading"){let a=Date.now()+1e4,i=t.setInterval(()=>{"loading"===r.status&&Date.now()<a||(t.clearInterval(i),P(e))},100)}for(let t of Array.from(e.querySelectorAll("img")))t.complete||t.addEventListener("load",()=>P(e),{once:!0})};e.s(["R",0,C,"x",0,10,"B",0,A,"f",0,_,"e",0,e=>{let t=e.defaultView,r=r=>{let a=r.parentElement;if(!a||a.classList.contains(A))return;let i=e.createElement("div");i.className=A,i.setAttribute("cfi-skip",""),a.insertBefore(i,r),i.appendChild(r),((e,t,r)=>{if(!r)return;let a=e.style;if(!a)return;let i=r.getComputedStyle(e);for(let e of O){let r=`margin${e}`,n=i[r];0>parseFloat(n)&&(t.style[r]=n,a[r]="0px")}})(r,i,t),((e,t)=>{if(!t?.ResizeObserver)return;let r=new t.ResizeObserver(()=>{e.clientWidth<=0||(P(e),r.disconnect(),R(e,t))});r.observe(e)})(i,t)};e.querySelectorAll("table:not([data-foliate-chunk])").forEach(r),e.querySelectorAll("math").forEach(e=>{((e,t)=>{if("block"===e.getAttribute("display"))return!0;let r=e;for(;;){let e=r.parentElement;if(!e)return!1;for(let t of e.childNodes)if(t!==r&&(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()))return!1;if(!t?.getComputedStyle(e).display.startsWith("inline"))return!0;r=e}})(e,t)&&r(e)})},"l",0,e=>{let t=e.documentElement;if("true"===t.getAttribute(T))return;t.setAttribute(T,"true");let r=0,a=0,i=null,n=()=>{i=null},o={capture:!0,passive:!1};e.addEventListener("touchstart",e=>{if(!(i=z(e.target)))return;let t=e.changedTouches[0];t&&(r=t.screenX,a=t.screenY)},o),e.addEventListener("touchmove",e=>{var t;if(!i||!i.contains(e.target))return;let n=e.changedTouches[0];if(!n)return;let o=n.screenX-r,l=n.screenY-a;t=i,(Math.abs(o)>Math.abs(l)?Math.abs(o)>=8&&M(t):Math.abs(l)>=8&&I(t))&&e.stopImmediatePropagation()},o),e.addEventListener("touchend",n,o),e.addEventListener("touchcancel",n,o),e.addEventListener("wheel",e=>{let t=z(e.target);t&&(Math.abs(e.deltaX)>Math.abs(e.deltaY)?M(t):I(t))&&e.stopImmediatePropagation()},{capture:!0,passive:!0})}],11062);let H=(e,r,a,i)=>{let n=["Georgia","Times New Roman"],o=[e,...i!==e?[i]:[],...t.P4.filter(t=>t!==e&&t!==i&&!n.includes(t)),...t.Jn.filter(t=>t!==e&&t!==i),...n.filter(e=>t.P4.includes(e)&&!n.includes(i)),...t.$P],l=[r,...i!==r?[i]:[],...t.JH.filter(e=>e!==r&&e!==i),...t.aJ.filter(e=>e!==r&&e!==i),...t.$P],s=[a,...t.sy.filter(e=>e!==a)],d=e=>e.map(e=>`"${e}"`).join(", ");return{serif:`${d(o)}, serif`,sansSerif:`${d(l)}, sans-serif`,monospace:`${d(s)}, monospace`}},L=e=>{let t=["ios","android"].includes((0,S.r)()),r=(e.zoomLevel||100)/100;return e.defaultFontSize*(t?1.25:1)*r},D=()=>`
    ::selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
    ::-moz-selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
  `,F="link-touch-hold",j="text-selected",U=["zh","ja","ko"],q=U.map(e=>`:lang(${e})`).join(", "),W=e=>{let t=e.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/);if(!t)return null;let[r,a,i]=[Number(t[1]),Number(t[2]),Number(t[3])];return{r,g:a,b:i,a:void 0===t[4]?1:Number(t[4]),brightness:.299*r+.587*a+.114*i}},K=e=>`
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
    ${(e=>{let{translationFont:t,translationFontStyle:r,translationFontSize:a,translationColor:i}=e;return[t&&`font-family: var(--${t}) !important;`,r?.includes("italic")&&"font-style: italic !important;",r?.includes("bold")&&"font-weight: bold !important;",a&&1!==a&&`font-size: ${a}em !important;`,i&&`color: ${i} !important;`].filter(Boolean).join("\n    ")})(e)}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,B=()=>{let e="auto",t="default",r=!1,i=!1,n=[];t=localStorage.getItem("themeColor")||"default",e=localStorage.getItem("themeMode")||"auto",r="true"===localStorage.getItem("systemIsDarkMode"),i=v(localStorage.getItem("ambientIsDarkMode"),r),n=JSON.parse(localStorage.getItem("customThemes")||"[]");let o="dark"===e||"auto"===e&&r||"ambient"===e&&i,l=a.g.find(e=>e.name===t);if(!l){let e=n.find(e=>e.name===t);e&&(l={name:e.name,label:e.label,colors:{light:(0,a.n)(e.colors.light),dark:(0,a.T)(e.colors.dark)}})}l||(l=a.g[0]);let s=o?l.colors.dark:l.colors.light;return{bg:s["base-100"],fg:s["base-content"],primary:s.primary,palette:s,isDarkMode:o}},J=/^([A-Za-z_][\w.-]*):([A-Za-z_][\w.-]*)$/;e.s(["E",0,F,"Z",0,j,"J",0,(e,t)=>{e.documentElement.setAttribute("data-eink",t?"true":"false")},"q",0,(e,t,a,i)=>{a||(a=B());let{bg:n,fg:o,primary:l,isDarkMode:s}=a,d=!i||r.m.has(i),c=t.isEink,f=t.overrideColor,h=t.invertImgColorInDark,u=t.contrast??100,g=[],p="PDF"===i&&t.applyThemeToPDF;s&&h&&!p&&g.push("invert(100%) hue-rotate(180deg)"),100!==u&&g.push(`contrast(${u}%)`);let m=g.length?`filter: ${g.join(" ")};`:"",b="fixed-layout-styles",y=e.getElementById(b);y&&y.remove(),(y=e.createElement("style")).id=b,y.textContent=`
    html {
      --theme-bg-color: ${n};
      --theme-fg-color: ${o};
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
    ${c?D():""}
    #canvas {
      display: inline-block;
      width: fit-content;
      height: fit-content;
      background-color: var(--theme-bg-color);
    }
    img, canvas {
      ${m}
      ${f&&!p?`mix-blend-mode: ${s?"#000000"===n?"luminosity":"overlay":"multiply"};`:""}
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
  `,e.head.appendChild(y)},"W",0,e=>{let t=e.defaultView??window,r=Array.from(e.querySelectorAll("img")).map(r=>{let a=r.getAttribute("width"),i=a&&(a.endsWith("%")||a.endsWith("vw"))?parseFloat(a):0/0,n=r.getAttribute("height"),o=n&&(n.endsWith("%")||n.endsWith("vh"))?parseFloat(n):0/0,l="none"===r.getAttribute("zy-enlarge-src"),s=r.closest("p"),d=null;if(s){let t=e.createRange();t.setStart(s,0),t.setEndBefore(r),t.toString().trim()||(d=s)}let c=!1,f=!1,h=r.parentNode;if(h&&h.nodeType===Node.ELEMENT_NODE){let e=Array.from(h.childNodes),a=e.some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),i=e.every(e=>e.nodeType!==Node.ELEMENT_NODE||"BR"!==e.tagName);if(c=a&&i){let e=t.getComputedStyle(r).verticalAlign;f=""===e||"baseline"===e}}return{img:r,percentWidth:i,percentHeight:o,inlineWithText:c,keepBaseline:f,noEnlarge:l,leadingImageParagraph:d}}),a=e.documentElement?.style,i=a?parseFloat(a.getPropertyValue("--available-height")):0/0,n=!isNaN(i)&&i>0?i:t?.innerHeight??window.innerHeight,o=a?parseFloat(a.getPropertyValue("--available-width")):0/0,l=!isNaN(o)&&o>0?o:t?.innerWidth??window.innerWidth;for(let{img:e,percentWidth:t,percentHeight:a,inlineWithText:i,keepBaseline:o,noEnlarge:s,leadingImageParagraph:d}of r)d?.classList.add("leading-image"),isNaN(t)||(e.style.width=`${t/100*l}px`,e.removeAttribute("width")),isNaN(a)||(e.style.height=`${a/100*n}px`,e.removeAttribute("height")),isNaN(t)||isNaN(a)||(e.style.objectFit="contain"),i&&(e.classList.add("has-text-siblings"),o&&e.classList.add("has-text-siblings-baseline")),s&&e.style.setProperty("pointer-events","none");e.querySelectorAll("hr").forEach(e=>{let t=window.getComputedStyle(e);t.backgroundImage&&"none"!==t.backgroundImage&&e.classList.add("background-img")})},"c",0,e=>{e.links.length<=1e3&&e.documentElement.classList.add(C)},"a",0,e=>{let t=(e,t)=>{for(let r=e;r;r=r.parentElement){let e=r.getAttribute(`xmlns:${t}`);if(e)return e}return null};for(let r of e.querySelectorAll("*"))for(let{name:e,value:a}of Array.from(r.attributes)){let[,i,n]=J.exec(e)??[];if(!i)continue;let o="xml"===i?"http://www.w3.org/XML/1998/namespace":t(r,i)??("epub"===i?"http://www.idpf.org/2007/ops":null);o&&!r.hasAttributeNS(o,n)&&r.setAttributeNS(o,e,a)}},"n",0,(e,t)=>{e.body.classList.remove("scroll-mode","paginated-mode"),e.body.classList.add(t?"scroll-mode":"paginated-mode")},"T",0,(e,t)=>{let r="scrollbar-hide-style",a=e.getElementById(r);t?(a||((a=e.createElement("style")).id=r,e.head.appendChild(a)),a.textContent="foliate-view::part(container) { scrollbar-width: none; }"):a&&(a.textContent="foliate-view::part(container) { scrollbar-width: thin; }")},"K",0,(e,t)=>{e.body.classList.remove("theme-light","theme-dark"),e.body.classList.add(t?"theme-dark":"theme-light")},"k",0,e=>{let t="translation-style",r=document.getElementById(t);r&&r.remove();let a=document.createElement("style");a.id=t,a.textContent=K(e),document.head.appendChild(a)},"t",0,e=>{let t=H(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return"serif"===e.defaultFont.toLowerCase()?t.serif:t.sansSerif},"z",0,L,"L",0,(e,t,r)=>`
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
      ${r?`background-color: color-mix(in srgb, ${e} 80%, #000);`:""}
    }
  `,"U",0,e=>{let t=H(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return{serif:t.serif,sans:t.sansSerif}},"x",0,()=>`
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
`,"H",0,e=>{let{isDarkMode:t,isBwEink:r,isFixedLayout:a=!1,invertImgColorInDark:i=!1,applyThemeToPDF:n=!1,format:o}=e;return r?"difference":t&&(!a||i||"PDF"===o&&n)?"screen":"multiply"},"f",0,(e,t)=>e.applyThemeToPDF?{background:t.bg,foreground:t.fg,keepImages:!(t.isDarkMode&&e.invertImgColorInDark)}:void 0,"P",0,function(e,t){var r,a,n,o,l,s,d,f,h,u;let g,p,m,b,y,w,v,k,$,S,E,T,M,I,z,O,P,N,R,W,J,V,G,X=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t||(t=B());let Y=(g=e.marginTopPx,p=e.marginRightPx,m=e.marginBottomPx,b=e.marginLeftPx,y=e.writingMode,w=e.vertical,`
  html {
    --margin-top: ${g}px;
    --margin-right: ${p}px;
    --margin-bottom: ${m}px;
    --margin-left: ${b}px;
  }
  html, body {
    ${"auto"===y?"":`writing-mode: ${y} !important;`}
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
  html.${F} a[href] {
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
  html.${C} a {
    position: relative !important;
  }
  html.${C} a::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
  /* the enlarged area swallows the text around a link, so a selection dragged
     next to a footnote marker snaps away (#6566); set while text is selected */
  html.${j} a::before {
    pointer-events: none;
  }

  .${A} {
    display: block;
    overflow: auto;
    max-width: 100%;
    touch-action: pan-x pan-y;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }
  .${_} {
    overflow: visible;
  }
  .${A} > table {
    display: table !important;
    max-width: 100%;
  }
  /* A scroll container is monolithic in CSS fragmentation, so a scrolling
     wrapper can't break across columns: taller than the page, it overflows the
     column and every row past the first page is clipped and unreachable
     (#6129). Clamp the wrapper — not the table, whose max-height Chromium and
     WebKit treat as a minimum — to one page so it scrolls vertically in place.
     A fit wrapper is overflow:visible and its rows paginate normally. */
  body.paginated-mode .${A}:not(.${_}) {
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
    ${w?"width: 1em;":"height: 1em;"}
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
`),Z=e.useBookLayout?"":(v=e.overrideLayout,k=e.paragraphMargin,$=e.lineHeight,S=e.wordSpacing,E=e.letterSpacing,T=e.textIndent,M=e.fullJustification,I=e.hyphenation,z=e.vertical,`
  html {
    --default-text-align: ${M?"justify":"start"};
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
  ${M?"html, body, p, li, blockquote, dd { text-wrap-style: auto !important; }":""}
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
  p, blockquote, dd, div:not(:has(*:not(${x}))) {
    line-height: ${$} ${v?"!important":""};
    word-spacing: ${S}px ${v?"!important":""};
    letter-spacing: ${E}px ${v?"!important":""};
    text-indent: ${T}em ${v?"!important":""};
    -webkit-hyphens: ${I?"auto":"manual"} ${v?"!important":""};
    hyphens: ${I?"auto":"manual"} ${v?"!important":""};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  li {
    line-height: ${$} ${v?"!important":""};
    -webkit-hyphens: ${I?"auto":"manual"} ${v?"!important":""};
    hyphens: ${I?"auto":"manual"} ${v?"!important":""};
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${v?"!important":""};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${M&&v?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${v?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!M&&v?"text-align: initial !important;":""};
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
  p${v?`, blockquote:not(:has(*:not(${x})))`:""} {
    ${z?`margin-left: ${k}em ${v?"!important":""};`:""}
    ${z?`margin-right: ${k}em ${v?"!important":""};`:""}
    ${z?`margin-top: unset ${v?"!important":""};`:""}
    ${z?`margin-bottom: unset ${v?"!important":""};`:""}
    ${!z?`margin-top: ${k}em ${v?"!important":""};`:""}
    ${!z?`margin-bottom: ${k}em ${v?"!important":""};`:""}
    ${!z?`margin-left: unset ${v?"!important":""};`:""}
    ${!z?`margin-right: unset ${v?"!important":""};`:""}
  }
  div {
    ${z&&v?`margin-left: ${k}em !important;`:""}
    ${z&&v?`margin-right: ${k}em !important;`:""}
    ${!z&&v?`margin-top: ${k}em !important;`:""}
    ${!z&&v?`margin-bottom: ${k}em !important;`:""}
  }
  p > font:only-child { 
    display: flow-root; 
  }

  ${q} {
    widows: 1;
    orphans: 1;
  }

  /* workaround for some badly designed epubs */
  div.left *, p.left * { text-align: left; }
  div.right *, p.right * { text-align: right; }
  div.center *, p.center * { text-align: center; }
  div.justify *, p.justify * { text-align: justify; }

  img.pi {
    ${z?"transform: rotate(90deg);":""}
    ${z?"transform-origin: center;":""}
    ${z?"height: 2em;":""}
    ${z?`width: ${$}em;`:""}
    ${z?"vertical-align: unset;":""}
  }

  .nonindent, .noindent {
    text-indent: unset !important;
  }
`),Q=(r=e.serifFont,a=e.sansSerifFont,n=e.monospaceFont,o=e.defaultFont,l=e.defaultCJKFont,s=L(e),d=e.minimumFontSize,f=e.fontWeight,h=e.overrideFont,O=H(r,a,n,l),P="serif"===o.toLowerCase()?"--serif":"--sans-serif",N=`
    p, li, div, pre, dd {
      font-size: max(1rem, var(--min-font-size, 8px)) !important;
    }
  `,`
    html {
      --serif: ${O.serif};
      --sans-serif: ${O.sansSerif};
      --monospace: ${O.monospace};
      --font-size: ${s}px;
      --min-font-size: ${d}px;
      --font-weight: ${f};
    }
    html, body {
      font-size: ${s}px !important;
      font-weight: ${f};
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
      font-family: var(${P}) ${h?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${h?`font-family: var(${P}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${d}px;
    }
    font[size="2"] {
      font-size: ${1.5*d}px;
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
    ${h?"html body :is(pre, code, kbd)":":where(pre, code, kbd)"} {
      font-family: var(--monospace) ${h?"!important":""};
      font-variant-ligatures: none;
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${h?"font-family: revert !important;":""}
    }
    ${h?N:""}
  `),ee=X.filter(e=>!!e.blobUrl).map(e=>{try{return(0,i.v)(e)}catch{return""}}).join("\n"),et=((e,t,r,a,i)=>{let{bg:n,fg:o,primary:l,isDarkMode:s}=r,d=a&&"none"!==a?"transparent":n;return`
    html {
      --bg-texture-id: ${a};
      --theme-bg-color: ${n};
      --theme-fg-color: ${o};
      --theme-primary-color: ${l};
      --override-color: ${e};
      color-scheme: ${s?"dark":"light"};
    }
    html, body {
      color: ${o};
    }
    ${i?D():s?`
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
      ${i?`background-color: ${n} !important;`:""}
    }
    section, aside, blockquote, article, nav, header, footer, main, figure,
    div, p, font, h1, h2, h3, h4, h5, h6, li, span {
      ${e?`background-color: ${d} !important;`:""}
      ${e?`color: ${o} !important;`:""}
      ${e?`border-color: ${o} !important;`:""}
    }
    pre, span { /* inline code blocks */
      ${e?`background-color: ${d} !important;`:""}
    }
    a:any-link {
      ${e?`color: ${l} !important;`:s?"color: lightblue;":""}
    }
    /* left off hovered links, so a book's own a:hover style applies (#6859) */
    a:any-link:where(:not(:hover)) {
      text-decoration: ${i?"underline":"none"};
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
      ${s?`color: ${o}cc;`:""}
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
      color: ${o} !important;
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
  `})(e.overrideColor,e.invertImgColorInDark,t,e.backgroundTextureId,e.isEink),er=K(e),ea=`
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
`,ei=(R=e.wordLensGlossFontSize||.5,W=e.wordLensGlossColor||"",`
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
    font-size: ${R}em;
    line-height: 1.1;
    ${W?`color: ${W};
    opacity: 1;`:"opacity: 0.7;"}
    font-weight: normal;
    text-align: center;
  }
`),en=`
  :where(${U.map(e=>`html:lang(${e})`).join(", ")}) {
    widows: 1;
    orphans: 1;
  }
`,eo=c(e)?(u=t,J=e.dialogueHighlight?e.dialogueHighlightCustomColor&&e.dialogueHighlightColor?e.dialogueHighlightColor:u.primary:null,V=e=>J?`
    background-color: color-mix(in srgb, ${J} ${e}%, transparent) !important;`:"",G=e.dialogueHighlightCustomTextColor&&e.dialogueHighlightTextColor?`
    color: ${e.dialogueHighlightTextColor} !important;`:"",`
  /* Dialogue lines tinted with the custom color or, by default, the theme's
     primary color. !important so the tint survives "Override Book Color",
     which repaints spans/paragraphs with the theme background at the same
     importance level but lower specificity. */
  .readest-dialogue {${V(22)}${G}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  .readest-dialogue-block {${V(12)}${G}
    border-radius: 0.3em;
  }${e.dialogueHighlightItalic?`
  /* Italic runs marked like quoted dialogue; nested marks drop their own
     tint so overlapping translucent backgrounds don't stack. */
  :is(i, em) {${V(22)}${G}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  :is(i, em) :is(i, em, .readest-dialogue), .readest-dialogue :is(i, em) {
    background-color: transparent !important;
  }`:""}
`):"",el=e.userStylesheet;return`@namespace epub "http://www.idpf.org/2007/ops";
${ee}
${Y}
${Z}
${en}
${Q}
${et}
${eo}
${er}
${ea}
${ei}
${el}`},"S",0,B,"o",0,e=>{let t=e.defaultView??window,r=e.querySelectorAll(":is(div, p, blockquote, dd):not([data-foliate-chunk])"),a=Array(r.length);for(let e=0;e<r.length;e++){let i=t.getComputedStyle(r[e]).textAlign;"center"===i?a[e]="aligned-center":"left"===i?a[e]="aligned-left":"right"===i?a[e]="aligned-right":"justify"===i?a[e]="aligned-justify":a[e]=null}for(let e=0;e<r.length;e++){let t=a[e];t&&r[e].classList.add(t)}},"F",0,e=>{let t=e=>{let t=e.getRootNode();return e.parentElement??(t instanceof ShadowRoot?t.host:null)},r=!1;for(let a=t(e);a;a=t(a)){let e=W(getComputedStyle(a).backgroundColor);if(e&&e.a>.5){r=e.brightness>=128;break}}let a=new Map,i=[];for(let t of[e,...e.querySelectorAll("*")]){let n=getComputedStyle(t),o=W(n.backgroundColor),l=t===e?r:!!a.get(t.parentElement),s=o&&o.a>.5?o.brightness>=128:l;a.set(t,s);let d=W(n.color);if(!d||s||d.brightness>=128)continue;let c=Math.round(255-2*d.brightness),[f,h,u]=[d.r,d.g,d.b].map(e=>Math.min(255,e+c));i.push([t,`rgba(${f}, ${h}, ${u}, ${d.a})`])}for(let[e,t]of i)e.style.setProperty("color",t,"important")},"G",0,function(e,t,r,a){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(i)return e;let n=["ios","android"].includes((0,S.r)())?1.25:1,o=!e.includes("{"),l=/([^{]+)({[^}]+})/g;e=e.replace(l,(e,t,r)=>{let a=/text-align\s*:\s*center\s*[;$]/.test(r),i=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(r);return a&&i?t+(r=r.replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2")):e});let s=a?"overflow-y: clip !important;":"overflow-x: clip !important;";e=e.replace(l,(e,t,r)=>{if(/white-space\s*:\s*nowrap\s*[;$]/.test(r)){if(!/overflow\s*:/.test(r)){let e=/(?:^|[;{\s])(?:max-)?height\s*:|line-clamp\s*:/.test(r);r=r.replace(/}$/,` ${e?"overflow: clip !important;":s} }`)}return t+r}return e}),o?/page-break-after\s*:\s*always\s*[;]?/.test(e)&&!/margin-bottom\s*:/.test(e)&&(e=e.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):e=e.replace(l,(e,t,r)=>/page-break-after\s*:\s*always\s*[;$]/.test(r)?(/margin-bottom\s*:/.test(r)||(r=r.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),t+r):e);let d=[];e=(e=(e=(e=e.replace(l,(e,t,r)=>{if(a)return t+r;let i=[],n=!1;for(let e of["top","bottom","left","right"]){let t=RegExp(`duokan-bleed\\s*:\\s*[^;]*${e}[^;]*;`),a=RegExp(`margin-${e}\\s*:`);t.test(r)&&!a.test(r)&&(n=!0,i.push(e),r=r.replace(/}$/,` margin-${e}: calc(-1 * var(--page-margin-${e})) !important; }`))}return n&&(/position\s*:/.test(r)||(r=r.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(r)||(r=r.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(r)||(r=r.replace(/}$/," display: flow-root !important; }")),i.includes("left")&&i.includes("right")&&(r=r.replace(/}$/," width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," min-width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," max-width: calc(var(--full-width) * 1px) !important; }")),i.includes("top")&&i.includes("bottom")&&(r=r.replace(/}$/," height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," min-height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," max-height: calc(var(--full-height) * 1px) !important; }"))),t+r})).replace(/url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/gi,e=>(d.push(e),`READEST_URL_${d.length-1}_PLACEHOLDER`))).replace(/((?:^|[{;\s])background(?:-attachment)?\s*:)([^;{}]*)/gi,(e,t,r)=>{if(!/\bfixed\b/i.test(r))return e;let a=[];return t+r.replace(/[\w-]*\([^)]*\)/g,e=>(a.push(e),`READEST_FN_${a.length-1}_PLACEHOLDER`)).replace(/\bfixed\b/gi,"scroll").replace(/READEST_FN_(\d+)_PLACEHOLDER/g,(e,t)=>a[+t])})).replace(/READEST_URL_(\d+)_PLACEHOLDER/g,(e,t)=>d[+t]),a||(e=e.replace(l,(e,t,r)=>{if(![...r.matchAll(/(?:^|[^-a-z])background(?:-color|-image)?\s*:\s*([^;!}]+)/gi)].map(e=>e[1].trim()).some(e=>!/^(?:none|transparent)$/i.test(e)&&!/^(?:rgba|hsla)\([^)]*[,\s]0(?:\.0+)?\s*\)$/i.test(e)))return e;let a="",i="";for(let e of r.matchAll(/(?:^|[^-a-z])margin(-left|-right)?\s*:\s*([^;!}]+)/gi)){let t=e[1],r=e[2].trim();if("-left"===t)a=r;else if("-right"===t)i=r;else{if(r.includes("("))continue;let e=r.split(/\s+/);if(e.length<1||e.length>4)continue;let[t,n=t,,o=n]=e;i=n,a=o}}let n=(a.startsWith("-")?" margin-left: 0 !important;":"")+(i.startsWith("-")?" margin-right: 0 !important;":"");return n?t+r.replace(/}$/,`${n} }`):e})),e=(e=e.replace(l,(e,t,r)=>{if(/\bbody\b/i.test(t)){let e=/font-family\s*:\s*serif\s*(?:;|\}|$)/.test(r),t=/font-family\s*:\s*sans-serif\s*(?:;|\}|$)/.test(r);e&&(r=r.replace(/font-family\s*:\s*serif\s*(;|\}|$)/gi,"font-family: unset$1")),t&&(r=r.replace(/font-family\s*:\s*sans-serif\s*(;|\}|$)/gi,"font-family: unset$1"))}return t+r})).replace(l,(e,r,a)=>{let i=/(?:^|[^a-z-])width\s*:\s*(\d+(?:\.\d+)?)px/.exec(a);return(i?parseFloat(i[1]??"0"):0)>t&&!/max-width\s*:/.test(a)?r+(a=a.replace(/}$/," width: 100%; max-width: calc(var(--available-width) * 1px); box-sizing: border-box; }")):e});let c=t>r,f="(min-width: 0px)",h="(min-width: 999999px)",u=[];e=(e=(e=(e=e.replace(/"[^"\n]*"|'[^'\n]*'/g,e=>(u.push(e),`READEST_STR_${u.length-1}_PLACEHOLDER`))).replace(/@media[^{]*/gi,e=>e.replace(/\(\s*orientation\s*:\s*(landscape|portrait)\s*\)/gi,(e,t)=>"landscape"===t.toLowerCase()===c?f:h).replace(/\(\s*(min|max)-(width|height)\s*:\s*([^)]+?)\s*\)/gi,(e,a,i,n)=>{let o=/^(\d*\.?\d+)(?:px)?$/.exec(n);if(!o)return e;let l="width"===i.toLowerCase()?t:r,s=parseFloat(o[1]);return("min"===a.toLowerCase()?l>=s:l<=s)?f:h}))).replace(/READEST_STR_(\d+)_PLACEHOLDER/g,(e,t)=>u[+t])).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(e,t)=>{let r=parseFloat(t)/n/16;return`font-size: ${r}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(e,t)=>{let r=parseFloat(t)/n/12;return`font-size: ${r}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return`font-size: max(${t}${r}, var(--min-font-size, 8px))`}).replace(/backdrop-filter\s*:\s*brightness\(100%\)\s*[;]?/gi,"").replace(/(\d*\.?\d+)vw/gi,(e,r)=>parseFloat(r)*t/100+"px").replace(/(\d*\.?\d+)vh/gi,(e,t)=>parseFloat(t)*r/100+"px").replace(/([\s;])-webkit-user-select\s*:\s*none/gi,"$1-webkit-user-select: unset").replace(/([\s;])-moz-user-select\s*:\s*none/gi,"$1-moz-user-select: unset").replace(/([\s;])-ms-user-select\s*:\s*none/gi,"$1-ms-user-select: unset").replace(/([\s;])-o-user-select\s*:\s*none/gi,"$1-o-user-select: unset").replace(/([\s;])user-select\s*:\s*none/gi,"$1user-select: unset").replace(/(font-family\s*:\s*)([^;{}]*)/gi,(e,t,r)=>{let a=/\s*!\s*important\s*$/i.exec(r);return t+(a?r.slice(0,a.index):r).split(",").map(e=>{let t=/^(serif|sans-serif|monospace)$/i.exec(e.trim());if(!t)return e;let r=t[1].toLowerCase();return e.replace(t[1],`var(--${r}, ${r})`)}).join(",")+(a?a[0]:"")}).replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#(?:000f?|000000(?:ff)?)(?![0-9a-f])/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)");let{isDarkMode:g,bg:p}=B();return g&&(e=e.replace(l,(e,t,r)=>{let a=r.replace(/background(-color)?\s*:\s*([^;!}]+)(\s*!important)?(?=\s*[;!}])/gi,(e,t,r,a)=>(e=>{let t=e.trim().toLowerCase();if("white"===t)return!0;let r=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(r){let e=r[1],t=3===e.length?e.split("").map(e=>e+e).join(""):e;return(.299*parseInt(t.slice(0,2),16)+.587*parseInt(t.slice(2,4),16)+.114*parseInt(t.slice(4,6),16))/255>.85}let a=t.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return a?.[1]!=null&&null!=a[2]&&null!=a[3]&&(.299*parseInt(a[1],10)+.587*parseInt(a[2],10)+.114*parseInt(a[3],10))/255>.85})(r.trim().split(/\s+/)[0]??"")?`background-color: ${p}${a??""}`:e);return a===r?e:t+a})),e}],315199)}])})();

//# sourceMappingURL=44ofeafnh2-nf.js.map