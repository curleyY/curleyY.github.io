const Ne = new Date(2107, 11, 31), Ue = new Date(1980, 0, 1), C = void 0, jA = 1 / 0, RA = "undefined", MA = "function", Nn = "object", Un = 64;
let Bt = 2;
try {
  typeof navigator != RA && navigator.hardwareConcurrency && (Bt = navigator.hardwareConcurrency);
} catch {
}
const Ln = {
  workerURI: "./core/web-worker-wasm.js",
  wasmURI: "./core/streams/zlib-wasm/zlib-streams.wasm",
  chunkSize: 64 * 1024,
  maxWorkers: Bt,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: !0,
  useCompressionStream: !0,
  CompressionStream: typeof CompressionStream != RA && CompressionStream,
  DecompressionStream: typeof DecompressionStream != RA && DecompressionStream
}, lt = Object.assign({}, Ln);
function It() {
  return lt;
}
function dt(e) {
  return Math.max(e.chunkSize, Un);
}
function Be(e) {
  const {
    baseURI: A,
    chunkSize: n,
    maxWorkers: t,
    terminateWorkerTimeout: s,
    useCompressionStream: i,
    useWebWorkers: o,
    CompressionStream: g,
    DecompressionStream: r,
    CompressionStreamZlib: a,
    DecompressionStreamZlib: E,
    workerURI: c,
    wasmURI: B
  } = e;
  fA("baseURI", A), fA("wasmURI", B), fA("workerURI", c), fA("chunkSize", n), fA("maxWorkers", t), fA("terminateWorkerTimeout", s), fA("useCompressionStream", i), fA("useWebWorkers", o), fA("CompressionStream", g), fA("DecompressionStream", r), fA("CompressionStreamZlib", a), fA("DecompressionStreamZlib", E);
}
function fA(e, A) {
  A !== C && (lt[e] = A);
}
function Hn(e) {
  const A = `(t=>{"function"==typeof define&&define.amd?define(t):t()})(function(){"use strict";const{Array:t,Object:e,Number:n,Math:s,Error:r,Uint8Array:o,Uint16Array:i,Uint32Array:c,Int32Array:a,Map:h,DataView:f,Promise:l,TextEncoder:u,crypto:w,postMessage:p,TransformStream:d,ReadableStream:y,WritableStream:m,CompressionStream:g,DecompressionStream:S}=self,b=void 0,v="undefined",k="function",z=[];for(let t=0;256>t;t++){let e=t;for(let t=0;8>t;t++)1&e?e=e>>>1^3988292384:e>>>=1;z[t]=e}class C{constructor(t){this.t=t||-1}append(t){let e=0|this.t;for(let n=0,s=0|t.length;s>n;n++)e=e>>>8^z[255&(e^t[n])];this.t=e}get(){return~this.t}}class A extends d{constructor(){let t;const e=new C;super({transform(t,n){e.append(t),n.enqueue(t)},flush(){const n=new o(4);new f(n.buffer).setUint32(0,e.get()),t.value=n}}),t=this}}const x={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const n=t[t.length-1],s=x.o(n);return 32===s?t.concat(e):x.i(e,s,0|n,t.slice(0,t.length-1))},h(t){const e=t.length;if(0===e)return 0;const n=t[e-1];return 32*(e-1)+x.o(n)},l(t,e){if(32*t.length<e)return t;const n=(t=t.slice(0,s.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=x.u(e,t[n-1]&2147483648>>e-1,1)),t},u:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,o:t=>s.round(t/1099511627776)||32,i(t,e,n,s){for(void 0===s&&(s=[]);e>=32;e-=32)s.push(n),n=0;if(0===e)return s.concat(t);for(let r=0;r<t.length;r++)s.push(n|t[r]>>>e),n=t[r]<<32-e;const r=t.length?t[t.length-1]:0,o=x.o(r);return s.push(x.u(e+o&31,e+o>32?n:s.pop(),1)),s}},I={bytes:{p(t){const e=x.h(t)/8,n=new o(e);let s;for(let r=0;e>r;r++)3&r||(s=t[r/4]),n[r]=s>>>24,s<<=8;return n},m(t){const e=[];let n,s=0;for(n=0;n<t.length;n++)s=s<<8|t[n],3&~n||(e.push(s),s=0);return 3&n&&e.push(x.u(8*(3&n),s)),e}}},R=class{constructor(t){const e=this;e.blockSize=512,e.S=[1732584193,4023233417,2562383102,271733878,3285377520],e.v=[1518500249,1859775393,2400959708,3395469782],t?(e.k=t.k.slice(0),e.C=t.C.slice(0),e.A=t.A):e.reset()}reset(){const t=this;return t.k=t.S.slice(0),t.C=[],t.A=0,t}update(t){const e=this;"string"==typeof t&&(t=I.I.m(t));const n=e.C=x.concat(e.C,t),s=e.A,o=e.A=s+x.h(t);if(o>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const i=new c(n);let a=0;for(let t=e.blockSize+s-(e.blockSize+s&e.blockSize-1);o>=t;t+=e.blockSize)e.R(i.subarray(16*a,16*(a+1))),a+=1;return n.splice(0,16*a),e}P(){const t=this;let e=t.C;const n=t.k;e=x.concat(e,[x.u(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(s.floor(t.A/4294967296)),e.push(0|t.A);e.length;)t.R(e.splice(0,16));return t.reset(),n}U(t,e,n,s){return t>19?t>39?t>59?t>79?void 0:e^n^s:e&n|e&s|n&s:e^n^s:e&n|~e&s}V(t,e){return e<<t|e>>>32-t}R(e){const n=this,r=n.k,o=t(80);for(let t=0;16>t;t++)o[t]=e[t];let i=r[0],c=r[1],a=r[2],h=r[3],f=r[4];for(let t=0;79>=t;t++){16>t||(o[t]=n.V(1,o[t-3]^o[t-8]^o[t-14]^o[t-16]));const e=n.V(5,i)+n.U(t,c,a,h)+f+o[t]+n.v[s.floor(t/20)]|0;f=h,h=a,a=n.V(30,c),c=i,i=e}r[0]=r[0]+i|0,r[1]=r[1]+c|0,r[2]=r[2]+a|0,r[3]=r[3]+h|0,r[4]=r[4]+f|0}},P={getRandomValues(t){const e=new c(t.buffer),n=t=>{let e=987654321;const n=4294967295;return()=>(e=36969*(65535&e)+(e>>16)&n,(((e<<16)+(t=18e3*(65535&t)+(t>>16)&n)&n)/4294967296+.5)*(s.random()>.5?1:-1))};for(let r,o=0;o<t.length;o+=4){const t=n(4294967296*(r||s.random()));r=987654071*t(),e[o/4]=4294967296*t()|0}return t}},U={importKey:t=>new U.M(I.bytes.m(t)),_(t,e,n,s){if(n=n||1e4,0>s||0>n)throw new r("invalid params to pbkdf2");const o=1+(s>>5)<<2;let i,c,a,h,l;const u=new ArrayBuffer(o),w=new f(u);let p=0;const d=x;for(e=I.bytes.m(e),l=1;(o||1)>p;l++){for(i=c=t.encrypt(d.concat(e,[l])),a=1;n>a;a++)for(c=t.encrypt(c),h=0;h<c.length;h++)i[h]^=c[h];for(a=0;(o||1)>p&&a<i.length;a++)w.setInt32(p,i[a]),p+=4}return u.slice(0,s/8)},M:class{constructor(t){const e=this,n=e.B=R,s=[[],[]];e.D=[new n,new n];const r=e.D[0].blockSize/32;t.length>r&&(t=(new n).update(t).P());for(let e=0;r>e;e++)s[0][e]=909522486^t[e],s[1][e]=1549556828^t[e];e.D[0].update(s[0]),e.D[1].update(s[1]),e.W=new n(e.D[0])}reset(){const t=this;t.W=new t.B(t.D[0]),t.K=!1}update(t){this.K=!0,this.W.update(t)}digest(){const t=this,e=t.W.P(),n=new t.B(t.D[1]).update(e).P();return t.reset(),n}encrypt(t){if(this.K)throw new r("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}}},V=typeof w!=v&&typeof w.getRandomValues==k,M="Invalid password",_="Invalid signature",B="zipjs-abort-check-password";function D(t){return V?w.getRandomValues(t):P.getRandomValues(t)}const W=16,K={name:"PBKDF2"},E=e.assign({hash:{name:"HMAC"}},K),L=e.assign({iterations:1e3,hash:{name:"SHA-1"}},K),O=["deriveBits"],T=[8,12,16],j=[16,24,32],H=10,Z=[0,0,0,0],F=typeof w!=v,N=F&&w.subtle,q=F&&typeof N!=v,G=I.bytes,J=class{constructor(t){const e=this;e.L=[[[],[],[],[],[]],[[],[],[],[],[]]],e.L[0][0][0]||e.O();const n=e.L[0][4],s=e.L[1],o=t.length;let i,c,a,h=1;if(4!==o&&6!==o&&8!==o)throw new r("invalid aes key size");for(e.v=[c=t.slice(0),a=[]],i=o;4*o+28>i;i++){let t=c[i-1];(i%o===0||8===o&&i%o===4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],i%o===0&&(t=t<<8^t>>>24^h<<24,h=h<<1^283*(h>>7))),c[i]=c[i-o]^t}for(let t=0;i;t++,i--){const e=c[3&t?i:i-4];a[t]=4>=i||4>t?e:s[0][n[e>>>24]]^s[1][n[e>>16&255]]^s[2][n[e>>8&255]]^s[3][n[255&e]]}}encrypt(t){return this.T(t,0)}decrypt(t){return this.T(t,1)}O(){const t=this.L[0],e=this.L[1],n=t[4],s=e[4],r=[],o=[];let i,c,a,h;for(let t=0;256>t;t++)o[(r[t]=t<<1^283*(t>>7))^t]=t;for(let f=i=0;!n[f];f^=c||1,i=o[i]||1){let o=i^i<<1^i<<2^i<<3^i<<4;o=o>>8^255&o^99,n[f]=o,s[o]=f,h=r[a=r[c=r[f]]];let l=16843009*h^65537*a^257*c^16843008*f,u=257*r[o]^16843008*o;for(let n=0;4>n;n++)t[n][f]=u=u<<24^u>>>8,e[n][o]=l=l<<24^l>>>8}for(let n=0;5>n;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0)}T(t,e){if(4!==t.length)throw new r("invalid aes block size");const n=this.v[e],s=n.length/4-2,o=[0,0,0,0],i=this.L[e],c=i[0],a=i[1],h=i[2],f=i[3],l=i[4];let u,w,p,d=t[0]^n[0],y=t[e?3:1]^n[1],m=t[2]^n[2],g=t[e?1:3]^n[3],S=4;for(let t=0;s>t;t++)u=c[d>>>24]^a[y>>16&255]^h[m>>8&255]^f[255&g]^n[S],w=c[y>>>24]^a[m>>16&255]^h[g>>8&255]^f[255&d]^n[S+1],p=c[m>>>24]^a[g>>16&255]^h[d>>8&255]^f[255&y]^n[S+2],g=c[g>>>24]^a[d>>16&255]^h[y>>8&255]^f[255&m]^n[S+3],S+=4,d=u,y=w,m=p;for(let t=0;4>t;t++)o[e?3&-t:t]=l[d>>>24]<<24^l[y>>16&255]<<16^l[m>>8&255]<<8^l[255&g]^n[S++],u=d,d=y,y=m,m=g,g=u;return o}},Q=class{constructor(t,e){this.j=t,this.H=e,this.Z=e}reset(){this.Z=this.H}update(t){return this.F(this.j,t,this.Z)}N(t){if(255&~(t>>24))t+=1<<24;else{let e=t>>16&255,n=t>>8&255,s=255&t;255===e?(e=0,255===n?(n=0,255===s?s=0:++s):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=s}return t}q(t){0===(t[0]=this.N(t[0]))&&(t[1]=this.N(t[1]))}F(t,e,n){let s;if(!(s=e.length))return[];const r=x.h(e);for(let r=0;s>r;r+=4){this.q(n);const s=t.encrypt(n);e[r]^=s[0],e[r+1]^=s[1],e[r+2]^=s[2],e[r+3]^=s[3]}return x.l(e,r)}},X=U.M;let Y=F&&q&&typeof N.importKey==k,$=F&&q&&typeof N.deriveBits==k;class tt extends d{constructor({password:t,rawPassword:n,signed:s,encryptionStrength:i,checkPasswordOnly:c}){super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),signed:s,J:i-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:i,G:a,ready:h}=n;s?(await(async(t,e,n,s)=>{const o=await st(t,e,n,it(s,0,T[e])),i=it(s,T[e]);if(o[0]!=i[0]||o[1]!=i[1])throw new r(M)})(n,i,s,it(t,0,T[i]+2)),t=it(t,T[i]+2),c?e.error(new r(B)):a()):await h;const f=new o(t.length-H-(t.length-H)%W);e.enqueue(nt(n,t,f,0,H,!0))},async flush(t){const{signed:e,X:n,Y:s,pending:i,ready:c}=this;if(s&&n){await c;const a=it(i,0,i.length-H),h=it(i,i.length-H);let f=new o;if(a.length){const t=at(G,a);s.update(t);const e=n.update(t);f=ct(G,e)}if(e){const t=it(ct(G,s.digest()),0,H);for(let e=0;H>e;e++)if(t[e]!=h[e])throw new r(_)}t.enqueue(f)}}})}}class et extends d{constructor({password:t,rawPassword:n,encryptionStrength:s}){let r;super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),J:s-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:r,G:i,ready:c}=n;let a=new o;s?(a=await(async(t,e,n)=>{const s=D(new o(T[e]));return ot(s,await st(t,e,n,s))})(n,r,s),i()):await c;const h=new o(a.length+t.length-t.length%W);h.set(a,0),e.enqueue(nt(n,t,h,a.length,0))},async flush(t){const{X:e,Y:n,pending:s,ready:i}=this;if(n&&e){await i;let c=new o;if(s.length){const t=e.update(at(G,s));n.update(t),c=ct(G,t)}r.signature=ct(G,n.digest()).slice(0,H),t.enqueue(ot(c,r.signature))}}}),r=this}}function nt(t,e,n,s,r,i){const{X:c,Y:a,pending:h}=t,f=e.length-r;let l;for(h.length&&(e=ot(h,e),n=((t,e)=>{if(e&&e>t.length){const n=t;(t=new o(e)).set(n,0)}return t})(n,f-f%W)),l=0;f-W>=l;l+=W){const t=at(G,it(e,l,l+W));i&&a.update(t);const r=c.update(t);i||a.update(r),n.set(ct(G,r),l+s)}return t.pending=it(e,l),n}async function st(n,s,r,i){n.password=null;const c=await(async(t,e,n,s,r)=>{if(!Y)return U.importKey(e);try{return await N.importKey("raw",e,n,!1,r)}catch{return Y=!1,U.importKey(e)}})(0,r,E,0,O),a=await(async(t,e,n)=>{if(!$)return U._(e,t.salt,L.iterations,n);try{return await N.deriveBits(t,e,n)}catch{return $=!1,U._(e,t.salt,L.iterations,n)}})(e.assign({salt:i},L),c,8*(2*j[s]+2)),h=new o(a),f=at(G,it(h,0,j[s])),l=at(G,it(h,j[s],2*j[s])),u=it(h,2*j[s]);return e.assign(n,{keys:{key:f,$:l,passwordVerification:u},X:new Q(new J(f),t.from(Z)),Y:new X(l)}),u}function rt(t,e){return e===b?(t=>{if(typeof u==v){const e=new o((t=unescape(encodeURIComponent(t))).length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}return(new u).encode(t)})(t):e}function ot(t,e){let n=t;return t.length+e.length&&(n=new o(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function it(t,e,n){return t.subarray(e,n)}function ct(t,e){return t.p(e)}function at(t,e){return t.m(e)}class ht extends d{constructor({password:t,passwordVerification:n,checkPasswordOnly:s}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;if(n.password){const e=lt(n,t.subarray(0,12));if(n.password=null,e.at(-1)!=n.passwordVerification)throw new r(M);t=t.subarray(12)}s?e.error(new r(B)):e.enqueue(lt(n,t))}})}}class ft extends d{constructor({password:t,passwordVerification:n}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;let s,r;if(n.password){n.password=null;const e=D(new o(12));e[11]=n.passwordVerification,s=new o(t.length+e.length),s.set(ut(n,e),0),r=12}else s=new o(t.length),r=0;s.set(ut(n,t),r),e.enqueue(s)}})}}function lt(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,n[s]);return n}function ut(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,e[s]);return n}function wt(t,n){const s=[305419896,591751049,878082192];e.assign(t,{keys:s,tt:new C(s[0]),et:new C(s[2])});for(let e=0;e<n.length;e++)pt(t,n.charCodeAt(e))}function pt(t,e){let[n,r,o]=t.keys;t.tt.append([e]),n=~t.tt.get(),r=mt(s.imul(mt(r+yt(n)),134775813)+1),t.et.append([r>>>24]),o=~t.et.get(),t.keys=[n,r,o]}function dt(t){const e=2|t.keys[2];return yt(s.imul(e,1^e)>>>8)}function yt(t){return 255&t}function mt(t){return 4294967295&t}class gt extends d{constructor(t,{chunkSize:e,nt:n,CompressionStream:s}){super({});const{compressed:r,encrypted:o,useCompressionStream:i,zipCrypto:c,signed:a,level:h}=t,l=this;let u,w,p=super.readable;o&&!c||!a||(u=new A,p=kt(p,u)),r&&(p=vt(p,i,{level:h,chunkSize:e},s,n,s)),o&&(c?p=kt(p,new ft(t)):(w=new et(t),p=kt(p,w))),bt(l,p,()=>{let t;o&&!c&&(t=w.signature),o&&!c||!a||(t=new f(u.value.buffer).getUint32(0)),l.signature=t})}}class St extends d{constructor(t,{chunkSize:e,st:n,DecompressionStream:s}){super({});const{zipCrypto:o,encrypted:i,signed:c,signature:a,compressed:h,useCompressionStream:l,rt:u}=t;let w,p,d=super.readable;i&&(o?d=kt(d,new ht(t)):(p=new tt(t),d=kt(d,p))),h&&(d=vt(d,l,{chunkSize:e,rt:u},s,n,s)),i&&!o||!c||(w=new A,d=kt(d,w)),bt(this,d,()=>{if((!i||o)&&c){const t=new f(w.value.buffer);if(a!=t.getUint32(0,!1))throw new r(_)}})}}function bt(t,n,s){n=kt(n,new d({flush:s})),e.defineProperty(t,"readable",{get:()=>n})}function vt(t,e,n,s,r,o){const i=e&&s?s:r||o,c=n.rt?"deflate64-raw":"deflate-raw";try{t=kt(t,new i(c,n))}catch(s){if(!e)throw s;if(r)t=kt(t,new r(c,n));else{if(!o)throw s;t=kt(t,new o(c,n))}}return t}function kt(t,e){return t.pipeThrough(e)}const zt="data",Ct="close";class At extends d{constructor(t,n){super({});const s=this,{codecType:o}=t;let i;o.startsWith("deflate")?i=gt:o.startsWith("inflate")&&(i=St),s.outputSize=0;let c=0;const a=new i(t,n),h=super.readable,f=new d({transform(t,e){t&&t.length&&(c+=t.length,e.enqueue(t))},flush(){e.assign(s,{inputSize:c})}}),l=new d({transform(e,n){if(e&&e.length&&(n.enqueue(e),s.outputSize+=e.length,t.outputSize!==b&&s.outputSize>t.outputSize))throw new r("Invalid uncompressed size")},flush(){const{signature:t}=a;e.assign(s,{signature:t,inputSize:c})}});e.defineProperty(s,"readable",{get:()=>h.pipeThrough(f).pipeThrough(a).pipeThrough(l)})}}class xt extends d{constructor(t){let e;super({transform:function n(s,r){if(e){const t=new o(e.length+s.length);t.set(e),t.set(s,e.length),s=t,e=null}s.length>t?(r.enqueue(s.slice(0,t)),n(s.slice(t),r)):e=s},flush(t){e&&e.length&&t.enqueue(e)}})}}const It=new h,Rt=new h;let Pt,Ut,Vt,Mt,_t,Bt=0;async function Dt(t){try{const{options:e,config:s}=t;if(!e.useCompressionStream)try{await self.initModule(t.config)}catch{e.useCompressionStream=!0}s.CompressionStream=self.CompressionStream,s.DecompressionStream=self.DecompressionStream;const r={highWaterMark:1},o=t.readable||new y({async pull(t){const e=new l(t=>It.set(Bt,t));Wt({type:"pull",messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER;const{value:s,done:r}=await e;t.enqueue(s),r&&t.close()}},r),i=t.writable||new m({async write(t){let e;const s=new l(t=>e=t);Rt.set(Bt,e),Wt({type:zt,value:t,messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER,await s}},r),c=new At(e,s);Pt=new AbortController;const{signal:a}=Pt;await o.pipeThrough(c).pipeThrough(new xt(s.chunkSize)).pipeTo(i,{signal:a,preventClose:!0,preventAbort:!0}),await i.getWriter().close();const{signature:h,inputSize:f,outputSize:u}=c;Wt({type:Ct,result:{signature:h,inputSize:f,outputSize:u}})}catch(t){t.outputSize=0,Kt(t)}}function Wt(t){let{value:e}=t;if(e)if(e.length)try{e=new o(e),t.value=e.buffer,p(t,[t.value])}catch{p(t)}else p(t);else p(t)}function Kt(t=new r("Unknown error")){const{message:e,stack:n,code:s,name:o,outputSize:i}=t;p({error:{message:e,stack:n,code:s,name:o,outputSize:i}})}function Et(t,e,n={}){const i="number"==typeof n.level?n.level:-1,c="number"==typeof n.ot?n.ot:65536,a="number"==typeof n.it?n.it:65536;return new d({start(){let n;if(this.ct=Vt(c),this.in=Vt(a),this.it=a,this.ht=new o(c),t?(this.ft=Ut.deflate_process,this.lt=Ut.deflate_last_consumed,this.ut=Ut.deflate_end,this.wt=Ut.deflate_new(),n="gzip"===e?Ut.deflate_init_gzip(this.wt,i):"deflate-raw"===e?Ut.deflate_init_raw(this.wt,i):Ut.deflate_init(this.wt,i)):"deflate64-raw"===e?(this.ft=Ut.inflate9_process,this.lt=Ut.inflate9_last_consumed,this.ut=Ut.inflate9_end,this.wt=Ut.inflate9_new(),n=Ut.inflate9_init_raw(this.wt)):(this.ft=Ut.inflate_process,this.lt=Ut.inflate_last_consumed,this.ut=Ut.inflate_end,this.wt=Ut.inflate_new(),n="deflate-raw"===e?Ut.inflate_init_raw(this.wt):"gzip"===e?Ut.inflate_init_gzip(this.wt):Ut.inflate_init(this.wt)),0!==n)throw new r("init failed:"+n)},transform(e,n){try{const i=e,a=new o(_t.buffer),h=this.ft,f=this.lt,l=this.ct,u=this.ht;let w=0;for(;w<i.length;){const e=s.min(i.length-w,32768);this.in&&this.it>=e||(this.in&&Mt&&Mt(this.in),this.in=Vt(e),this.it=e),a.set(i.subarray(w,w+e),this.in);const o=h(this.wt,this.in,e,l,c,0),p=16777215&o;if(p&&(u.set(a.subarray(l,l+p),0),n.enqueue(u.slice(0,p))),!t){const t=o>>24&255,e=128&t?t-256:t;if(0>e)throw new r("process error:"+e)}const d=f(this.wt);if(0===d)break;w+=d}}catch(t){this.ut&&this.wt&&this.ut(this.wt),this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct),n.error(t)}},flush(e){try{const n=new o(_t.buffer),s=this.ft,i=this.ct,a=this.ht;for(;;){const o=s(this.wt,0,0,i,c,4),h=16777215&o,f=o>>24&255;if(!t){const t=128&f?f-256:f;if(0>t)throw new r("process error:"+t)}if(h&&(a.set(n.subarray(i,i+h),0),e.enqueue(a.slice(0,h))),1===f||0===h)break}}catch(t){e.error(t)}finally{if(this.ut&&this.wt){const t=this.ut(this.wt);0!==t&&e.error(new r("end error:"+t))}this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct)}}})}addEventListener("message",({data:t})=>{const{type:e,messageId:n,value:s,done:r}=t;try{if("start"==e&&Dt(t),e==zt){const t=It.get(n);It.delete(n),t({value:new o(s),done:r})}if("ack"==e){const t=Rt.get(n);Rt.delete(n),t()}e==Ct&&Pt.abort()}catch(t){Kt(t)}});class Lt{constructor(t="deflate",e){return Et(!0,t,e)}}class Ot{constructor(t="deflate",e){return Et(!1,t,e)}}let Tt=!1;self.initModule=async t=>{try{const e=await(async(t,{baseURI:e})=>{if(!Tt){let n,s;try{try{s=new URL(t,e)}catch{}const r=await fetch(s);n=await r.arrayBuffer()}catch(e){if(!t.startsWith("data:application/wasm;base64,"))throw e;n=(t=>{const e=t.split(",")[1],n=atob(e),s=n.length,r=new o(s);for(let t=0;s>t;++t)r[t]=n.charCodeAt(t);return r.buffer})(t)}(t=>{if(Ut=t,({malloc:Vt,free:Mt,memory:_t}=Ut),"function"!=typeof Vt||"function"!=typeof Mt||!_t)throw Ut=Vt=Mt=_t=null,new r("Invalid WASM module")})((await WebAssembly.instantiate(n)).instance.exports),Tt=!0}})(t.wasmURI,t);return t.nt=Lt,t.st=Ot,e}catch{}}});
`;
  e({ workerURI: (n) => {
    const t = "text/javascript";
    if (n) {
      const s = new Blob([A], { type: t });
      return URL.createObjectURL(s);
    }
    return "data:" + t + "," + encodeURIComponent(A);
  } });
}
const ft = [];
for (let e = 0; e < 256; e++) {
  let A = e;
  for (let n = 0; n < 8; n++)
    A & 1 ? A = A >>> 1 ^ 3988292384 : A = A >>> 1;
  ft[e] = A;
}
class re {
  constructor(A) {
    this.crc = A || -1;
  }
  append(A) {
    let n = this.crc | 0;
    for (let t = 0, s = A.length | 0; t < s; t++)
      n = n >>> 8 ^ ft[(n ^ A[t]) & 255];
    this.crc = n;
  }
  get() {
    return ~this.crc;
  }
}
class Ct extends TransformStream {
  constructor() {
    let A;
    const n = new re();
    super({
      transform(t, s) {
        n.append(t), s.enqueue(t);
      },
      flush() {
        const t = new Uint8Array(4);
        new DataView(t.buffer).setUint32(0, n.get()), A.value = t;
      }
    }), A = this;
  }
}
function te(e) {
  if (typeof TextEncoder == RA) {
    e = unescape(encodeURIComponent(e));
    const A = new Uint8Array(e.length);
    for (let n = 0; n < A.length; n++)
      A[n] = e.charCodeAt(n);
    return A;
  } else
    return new TextEncoder().encode(e);
}
const aA = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(e, A) {
    if (e.length === 0 || A.length === 0)
      return e.concat(A);
    const n = e[e.length - 1], t = aA.getPartial(n);
    return t === 32 ? e.concat(A) : aA._shiftRight(A, t, n | 0, e.slice(0, e.length - 1));
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(e) {
    const A = e.length;
    if (A === 0)
      return 0;
    const n = e[A - 1];
    return (A - 1) * 32 + aA.getPartial(n);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(e, A) {
    if (e.length * 32 < A)
      return e;
    e = e.slice(0, Math.ceil(A / 32));
    const n = e.length;
    return A = A & 31, n > 0 && A && (e[n - 1] = aA.partial(A, e[n - 1] & 2147483648 >> A - 1, 1)), e;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(e, A, n) {
    return e === 32 ? A : (n ? A | 0 : A << 32 - e) + e * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(e) {
    return Math.round(e / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(e, A, n, t) {
    for (t === void 0 && (t = []); A >= 32; A -= 32)
      t.push(n), n = 0;
    if (A === 0)
      return t.concat(e);
    for (let o = 0; o < e.length; o++)
      t.push(n | e[o] >>> A), n = e[o] << 32 - A;
    const s = e.length ? e[e.length - 1] : 0, i = aA.getPartial(s);
    return t.push(aA.partial(A + i & 31, A + i > 32 ? n : t.pop(), 1)), t;
  }
}, ae = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(e) {
      const n = aA.bitLength(e) / 8, t = new Uint8Array(n);
      let s;
      for (let i = 0; i < n; i++)
        (i & 3) === 0 && (s = e[i / 4]), t[i] = s >>> 24, s <<= 8;
      return t;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(e) {
      const A = [];
      let n, t = 0;
      for (n = 0; n < e.length; n++)
        t = t << 8 | e[n], (n & 3) === 3 && (A.push(t), t = 0);
      return n & 3 && A.push(aA.partial(8 * (n & 3), t)), A;
    }
  }
}, mt = {};
mt.sha1 = class {
  constructor(e) {
    const A = this;
    A.blockSize = 512, A._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], A._key = [1518500249, 1859775393, 2400959708, 3395469782], e ? (A._h = e._h.slice(0), A._buffer = e._buffer.slice(0), A._length = e._length) : A.reset();
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const e = this;
    return e._h = e._init.slice(0), e._buffer = [], e._length = 0, e;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(e) {
    const A = this;
    typeof e == "string" && (e = ae.utf8String.toBits(e));
    const n = A._buffer = aA.concat(A._buffer, e), t = A._length, s = A._length = t + aA.bitLength(e);
    if (s > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const i = new Uint32Array(n);
    let o = 0;
    for (let g = A.blockSize + t - (A.blockSize + t & A.blockSize - 1); g <= s; g += A.blockSize)
      A._block(i.subarray(16 * o, 16 * (o + 1))), o += 1;
    return n.splice(0, 16 * o), A;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const e = this;
    let A = e._buffer;
    const n = e._h;
    A = aA.concat(A, [aA.partial(1, 1)]);
    for (let t = A.length + 2; t & 15; t++)
      A.push(0);
    for (A.push(Math.floor(e._length / 4294967296)), A.push(e._length | 0); A.length; )
      e._block(A.splice(0, 16));
    return e.reset(), n;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(e, A, n, t) {
    if (e <= 19)
      return A & n | ~A & t;
    if (e <= 39)
      return A ^ n ^ t;
    if (e <= 59)
      return A & n | A & t | n & t;
    if (e <= 79)
      return A ^ n ^ t;
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(e, A) {
    return A << e | A >>> 32 - e;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(e) {
    const A = this, n = A._h, t = Array(80);
    for (let a = 0; a < 16; a++)
      t[a] = e[a];
    let s = n[0], i = n[1], o = n[2], g = n[3], r = n[4];
    for (let a = 0; a <= 79; a++) {
      a >= 16 && (t[a] = A._S(1, t[a - 3] ^ t[a - 8] ^ t[a - 14] ^ t[a - 16]));
      const E = A._S(5, s) + A._f(a, i, o, g) + r + t[a] + A._key[Math.floor(a / 20)] | 0;
      r = g, g = o, o = A._S(30, i), i = s, s = E;
    }
    n[0] = n[0] + s | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + g | 0, n[4] = n[4] + r | 0;
  }
};
const ut = {};
ut.aes = class {
  constructor(e) {
    const A = this;
    A._tables = [[[], [], [], [], []], [[], [], [], [], []]], A._tables[0][0][0] || A._precompute();
    const n = A._tables[0][4], t = A._tables[1], s = e.length;
    let i, o, g, r = 1;
    if (s !== 4 && s !== 6 && s !== 8)
      throw new Error("invalid aes key size");
    for (A._key = [o = e.slice(0), g = []], i = s; i < 4 * s + 28; i++) {
      let a = o[i - 1];
      (i % s === 0 || s === 8 && i % s === 4) && (a = n[a >>> 24] << 24 ^ n[a >> 16 & 255] << 16 ^ n[a >> 8 & 255] << 8 ^ n[a & 255], i % s === 0 && (a = a << 8 ^ a >>> 24 ^ r << 24, r = r << 1 ^ (r >> 7) * 283)), o[i] = o[i - s] ^ a;
    }
    for (let a = 0; i; a++, i--) {
      const E = o[a & 3 ? i : i - 4];
      i <= 4 || a < 4 ? g[a] = E : g[a] = t[0][n[E >>> 24]] ^ t[1][n[E >> 16 & 255]] ^ t[2][n[E >> 8 & 255]] ^ t[3][n[E & 255]];
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(e) {
    return this._crypt(e, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(e) {
    return this._crypt(e, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const e = this._tables[0], A = this._tables[1], n = e[4], t = A[4], s = [], i = [];
    let o, g, r, a;
    for (let E = 0; E < 256; E++)
      i[(s[E] = E << 1 ^ (E >> 7) * 283) ^ E] = E;
    for (let E = o = 0; !n[E]; E ^= g || 1, o = i[o] || 1) {
      let c = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
      c = c >> 8 ^ c & 255 ^ 99, n[E] = c, t[c] = E, a = s[r = s[g = s[E]]];
      let B = a * 16843009 ^ r * 65537 ^ g * 257 ^ E * 16843008, I = s[c] * 257 ^ c * 16843008;
      for (let l = 0; l < 4; l++)
        e[l][E] = I = I << 24 ^ I >>> 8, A[l][c] = B = B << 24 ^ B >>> 8;
    }
    for (let E = 0; E < 5; E++)
      e[E] = e[E].slice(0), A[E] = A[E].slice(0);
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(e, A) {
    if (e.length !== 4)
      throw new Error("invalid aes block size");
    const n = this._key[A], t = n.length / 4 - 2, s = [0, 0, 0, 0], i = this._tables[A], o = i[0], g = i[1], r = i[2], a = i[3], E = i[4];
    let c = e[0] ^ n[0], B = e[A ? 3 : 1] ^ n[1], I = e[2] ^ n[2], l = e[A ? 1 : 3] ^ n[3], f = 4, u, w, d;
    for (let m = 0; m < t; m++)
      u = o[c >>> 24] ^ g[B >> 16 & 255] ^ r[I >> 8 & 255] ^ a[l & 255] ^ n[f], w = o[B >>> 24] ^ g[I >> 16 & 255] ^ r[l >> 8 & 255] ^ a[c & 255] ^ n[f + 1], d = o[I >>> 24] ^ g[l >> 16 & 255] ^ r[c >> 8 & 255] ^ a[B & 255] ^ n[f + 2], l = o[l >>> 24] ^ g[c >> 16 & 255] ^ r[B >> 8 & 255] ^ a[I & 255] ^ n[f + 3], f += 4, c = u, B = w, I = d;
    for (let m = 0; m < 4; m++)
      s[A ? 3 & -m : m] = E[c >>> 24] << 24 ^ E[B >> 16 & 255] << 16 ^ E[I >> 8 & 255] << 8 ^ E[l & 255] ^ n[f++], u = c, c = B, B = I, I = l, l = u;
    return s;
  }
};
const kn = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(e) {
    const A = new Uint32Array(e.buffer), n = (t) => {
      let s = 987654321;
      const i = 4294967295;
      return function() {
        return s = 36969 * (s & 65535) + (s >> 16) & i, t = 18e3 * (t & 65535) + (t >> 16) & i, (((s << 16) + t & i) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let t = 0, s; t < e.length; t += 4) {
      const i = n((s || Math.random()) * 4294967296);
      s = i() * 987654071, A[t / 4] = i() * 4294967296 | 0;
    }
    return e;
  }
}, ht = {};
ht.ctrGladman = class {
  constructor(e, A) {
    this._prf = e, this._initIv = A, this._iv = A;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(e) {
    return this.calculate(this._prf, e, this._iv);
  }
  incWord(e) {
    if ((e >> 24 & 255) === 255) {
      let A = e >> 16 & 255, n = e >> 8 & 255, t = e & 255;
      A === 255 ? (A = 0, n === 255 ? (n = 0, t === 255 ? t = 0 : ++t) : ++n) : ++A, e = 0, e += A << 16, e += n << 8, e += t;
    } else
      e += 1 << 24;
    return e;
  }
  incCounter(e) {
    (e[0] = this.incWord(e[0])) === 0 && (e[1] = this.incWord(e[1]));
  }
  calculate(e, A, n) {
    let t;
    if (!(t = A.length))
      return [];
    const s = aA.bitLength(A);
    for (let i = 0; i < t; i += 4) {
      this.incCounter(n);
      const o = e.encrypt(n);
      A[i] ^= o[0], A[i + 1] ^= o[1], A[i + 2] ^= o[2], A[i + 3] ^= o[3];
    }
    return aA.clamp(A, s);
  }
};
const GA = {
  importKey(e) {
    return new GA.hmacSha1(ae.bytes.toBits(e));
  },
  pbkdf2(e, A, n, t) {
    if (n = n || 1e4, t < 0 || n < 0)
      throw new Error("invalid params to pbkdf2");
    const s = (t >> 5) + 1 << 2;
    let i, o, g, r, a;
    const E = new ArrayBuffer(s), c = new DataView(E);
    let B = 0;
    const I = aA;
    for (A = ae.bytes.toBits(A), a = 1; B < (s || 1); a++) {
      for (i = o = e.encrypt(I.concat(A, [a])), g = 1; g < n; g++)
        for (o = e.encrypt(o), r = 0; r < o.length; r++)
          i[r] ^= o[r];
      for (g = 0; B < (s || 1) && g < i.length; g++)
        c.setInt32(B, i[g]), B += 4;
    }
    return E.slice(0, t / 8);
  }
};
GA.hmacSha1 = class {
  constructor(e) {
    const A = this, n = A._hash = mt.sha1, t = [[], []];
    A._baseHash = [new n(), new n()];
    const s = A._baseHash[0].blockSize / 32;
    e.length > s && (e = new n().update(e).finalize());
    for (let i = 0; i < s; i++)
      t[0][i] = e[i] ^ 909522486, t[1][i] = e[i] ^ 1549556828;
    A._baseHash[0].update(t[0]), A._baseHash[1].update(t[1]), A._resultHash = new n(A._baseHash[0]);
  }
  reset() {
    const e = this;
    e._resultHash = new e._hash(e._baseHash[0]), e._updated = !1;
  }
  update(e) {
    const A = this;
    A._updated = !0, A._resultHash.update(e);
  }
  digest() {
    const e = this, A = e._resultHash.finalize(), n = new e._hash(e._baseHash[1]).update(A).finalize();
    return e.reset(), n;
  }
  encrypt(e) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(e), this.digest(e);
  }
};
const Kn = typeof crypto != RA && typeof crypto.getRandomValues == MA, pt = "Invalid password", wt = "Invalid signature", xe = "zipjs-abort-check-password";
function Qt(e) {
  return Kn ? crypto.getRandomValues(e) : kn.getRandomValues(e);
}
const HA = 16, Pn = "raw", Dt = { name: "PBKDF2" }, Jn = { name: "HMAC" }, Xn = "SHA-1", zn = Object.assign({ hash: Jn }, Dt), De = Object.assign({ iterations: 1e3, hash: { name: Xn } }, Dt), Wn = ["deriveBits"], VA = [8, 12, 16], zA = [16, 24, 32], TA = 10, qn = [0, 0, 0, 0], le = typeof crypto != RA, Ae = le && crypto.subtle, _t = le && typeof Ae != RA, pA = ae.bytes, jn = ut.aes, Vn = ht.ctrGladman, Zn = GA.hmacSha1;
let Le = le && _t && typeof Ae.importKey == MA, He = le && _t && typeof Ae.deriveBits == MA;
class $n extends TransformStream {
  constructor({ password: A, rawPassword: n, signed: t, encryptionStrength: s, checkPasswordOnly: i }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((o) => this.resolveReady = o),
          password: Tt(A, n),
          signed: t,
          strength: s - 1,
          pending: new Uint8Array()
        });
      },
      async transform(o, g) {
        const r = this, {
          password: a,
          strength: E,
          resolveReady: c,
          ready: B
        } = r;
        a ? (await es(r, E, a, CA(o, 0, VA[E] + 2)), o = CA(o, VA[E] + 2), i ? g.error(new Error(xe)) : c()) : await B;
        const I = new Uint8Array(o.length - TA - (o.length - TA) % HA);
        g.enqueue(St(r, o, I, 0, TA, !0));
      },
      async flush(o) {
        const {
          signed: g,
          ctr: r,
          hmac: a,
          pending: E,
          ready: c
        } = this;
        if (a && r) {
          await c;
          const B = CA(E, 0, E.length - TA), I = CA(E, E.length - TA);
          let l = new Uint8Array();
          if (B.length) {
            const f = $A(pA, B);
            a.update(f);
            const u = r.update(f);
            l = ZA(pA, u);
          }
          if (g) {
            const f = CA(ZA(pA, a.digest()), 0, TA);
            for (let u = 0; u < TA; u++)
              if (f[u] != I[u])
                throw new Error(wt);
          }
          o.enqueue(l);
        }
      }
    });
  }
}
class As extends TransformStream {
  constructor({ password: A, rawPassword: n, encryptionStrength: t }) {
    let s;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((i) => this.resolveReady = i),
          password: Tt(A, n),
          strength: t - 1,
          pending: new Uint8Array()
        });
      },
      async transform(i, o) {
        const g = this, {
          password: r,
          strength: a,
          resolveReady: E,
          ready: c
        } = g;
        let B = new Uint8Array();
        r ? (B = await ts(g, a, r), E()) : await c;
        const I = new Uint8Array(B.length + i.length - i.length % HA);
        I.set(B, 0), o.enqueue(St(g, i, I, B.length, 0));
      },
      async flush(i) {
        const {
          ctr: o,
          hmac: g,
          pending: r,
          ready: a
        } = this;
        if (g && o) {
          await a;
          let E = new Uint8Array();
          if (r.length) {
            const c = o.update($A(pA, r));
            g.update(c), E = ZA(pA, c);
          }
          s.signature = ZA(pA, g.digest()).slice(0, TA), i.enqueue(Te(E, s.signature));
        }
      }
    }), s = this;
  }
}
function St(e, A, n, t, s, i) {
  const {
    ctr: o,
    hmac: g,
    pending: r
  } = e, a = A.length - s;
  r.length && (A = Te(r, A), n = os(n, a - a % HA));
  let E;
  for (E = 0; E <= a - HA; E += HA) {
    const c = $A(pA, CA(A, E, E + HA));
    i && g.update(c);
    const B = o.update(c);
    i || g.update(B), n.set(ZA(pA, B), E + t);
  }
  return e.pending = CA(A, E), n;
}
async function es(e, A, n, t) {
  const s = await xt(e, A, n, CA(t, 0, VA[A])), i = CA(t, VA[A]);
  if (s[0] != i[0] || s[1] != i[1])
    throw new Error(pt);
}
async function ts(e, A, n) {
  const t = Qt(new Uint8Array(VA[A])), s = await xt(e, A, n, t);
  return Te(t, s);
}
async function xt(e, A, n, t) {
  e.password = null;
  const s = await ns(Pn, n, zn, !1, Wn), i = await ss(Object.assign({ salt: t }, De), s, 8 * (zA[A] * 2 + 2)), o = new Uint8Array(i), g = $A(pA, CA(o, 0, zA[A])), r = $A(pA, CA(o, zA[A], zA[A] * 2)), a = CA(o, zA[A] * 2);
  return Object.assign(e, {
    keys: {
      key: g,
      authentication: r,
      passwordVerification: a
    },
    ctr: new Vn(new jn(g), Array.from(qn)),
    hmac: new Zn(r)
  }), a;
}
async function ns(e, A, n, t, s) {
  if (Le)
    try {
      return await Ae.importKey(e, A, n, t, s);
    } catch {
      return Le = !1, GA.importKey(A);
    }
  else
    return GA.importKey(A);
}
async function ss(e, A, n) {
  if (He)
    try {
      return await Ae.deriveBits(e, A, n);
    } catch {
      return He = !1, GA.pbkdf2(A, e.salt, De.iterations, n);
    }
  else
    return GA.pbkdf2(A, e.salt, De.iterations, n);
}
function Tt(e, A) {
  return A === C ? te(e) : A;
}
function Te(e, A) {
  let n = e;
  return e.length + A.length && (n = new Uint8Array(e.length + A.length), n.set(e, 0), n.set(A, e.length)), n;
}
function os(e, A) {
  if (A && A > e.length) {
    const n = e;
    e = new Uint8Array(A), e.set(n, 0);
  }
  return e;
}
function CA(e, A, n) {
  return e.subarray(A, n);
}
function ZA(e, A) {
  return e.fromBits(A);
}
function $A(e, A) {
  return e.toBits(A);
}
const WA = 12;
class is extends TransformStream {
  constructor({ password: A, passwordVerification: n, checkPasswordOnly: t }) {
    super({
      start() {
        Object.assign(this, {
          password: A,
          passwordVerification: n
        }), Ft(this, A);
      },
      transform(s, i) {
        const o = this;
        if (o.password) {
          const g = ke(o, s.subarray(0, WA));
          if (o.password = null, g.at(-1) != o.passwordVerification)
            throw new Error(pt);
          s = s.subarray(WA);
        }
        t ? i.error(new Error(xe)) : i.enqueue(ke(o, s));
      }
    });
  }
}
class gs extends TransformStream {
  constructor({ password: A, passwordVerification: n }) {
    super({
      start() {
        Object.assign(this, {
          password: A,
          passwordVerification: n
        }), Ft(this, A);
      },
      transform(t, s) {
        const i = this;
        let o, g;
        if (i.password) {
          i.password = null;
          const r = Qt(new Uint8Array(WA));
          r[WA - 1] = i.passwordVerification, o = new Uint8Array(t.length + r.length), o.set(Ke(i, r), 0), g = WA;
        } else
          o = new Uint8Array(t.length), g = 0;
        o.set(Ke(i, t), g), s.enqueue(o);
      }
    });
  }
}
function ke(e, A) {
  const n = new Uint8Array(A.length);
  for (let t = 0; t < A.length; t++)
    n[t] = Rt(e) ^ A[t], Fe(e, n[t]);
  return n;
}
function Ke(e, A) {
  const n = new Uint8Array(A.length);
  for (let t = 0; t < A.length; t++)
    n[t] = Rt(e) ^ A[t], Fe(e, A[t]);
  return n;
}
function Ft(e, A) {
  const n = [305419896, 591751049, 878082192];
  Object.assign(e, {
    keys: n,
    crcKey0: new re(n[0]),
    crcKey2: new re(n[2])
  });
  for (let t = 0; t < A.length; t++)
    Fe(e, A.charCodeAt(t));
}
function Fe(e, A) {
  let [n, t, s] = e.keys;
  e.crcKey0.append([A]), n = ~e.crcKey0.get(), t = Pe(Math.imul(Pe(t + yt(n)), 134775813) + 1), e.crcKey2.append([t >>> 24]), s = ~e.crcKey2.get(), e.keys = [n, t, s];
}
function Rt(e) {
  const A = e.keys[2] | 2;
  return yt(Math.imul(A, A ^ 1) >>> 8);
}
function yt(e) {
  return e & 255;
}
function Pe(e) {
  return e & 4294967295;
}
const Mt = "Invalid uncompressed size", rs = "deflate-raw", as = "deflate64-raw";
class cs extends TransformStream {
  constructor(A, { chunkSize: n, CompressionStreamZlib: t, CompressionStream: s }) {
    super({});
    const { compressed: i, encrypted: o, useCompressionStream: g, zipCrypto: r, signed: a, level: E } = A, c = this;
    let B, I, l = super.readable;
    (!o || r) && a && (B = new Ct(), l = wA(l, B)), i && (l = Ot(l, g, { level: E, chunkSize: n }, s, t, s)), o && (r ? l = wA(l, new gs(A)) : (I = new As(A), l = wA(l, I))), Yt(c, l, () => {
      let f;
      o && !r && (f = I.signature), (!o || r) && a && (f = new DataView(B.value.buffer).getUint32(0)), c.signature = f;
    });
  }
}
class Es extends TransformStream {
  constructor(A, { chunkSize: n, DecompressionStreamZlib: t, DecompressionStream: s }) {
    super({});
    const { zipCrypto: i, encrypted: o, signed: g, signature: r, compressed: a, useCompressionStream: E, deflate64: c } = A;
    let B, I, l = super.readable;
    o && (i ? l = wA(l, new is(A)) : (I = new $n(A), l = wA(l, I))), a && (l = Ot(l, E, { chunkSize: n, deflate64: c }, s, t, s)), (!o || i) && g && (B = new Ct(), l = wA(l, B)), Yt(this, l, () => {
      if ((!o || i) && g) {
        const f = new DataView(B.value.buffer);
        if (r != f.getUint32(0, !1))
          throw new Error(wt);
      }
    });
  }
}
function Yt(e, A, n) {
  A = wA(A, new TransformStream({ flush: n })), Object.defineProperty(e, "readable", {
    get() {
      return A;
    }
  });
}
function Ot(e, A, n, t, s, i) {
  const o = A && t ? t : s || i, g = n.deflate64 ? as : rs;
  try {
    e = wA(e, new o(g, n));
  } catch (r) {
    if (A)
      if (s)
        e = wA(e, new s(g, n));
      else if (i)
        e = wA(e, new i(g, n));
      else
        throw r;
    else
      throw r;
  }
  return e;
}
function wA(e, A) {
  return e.pipeThrough(A);
}
const Bs = "message", ls = "start", Is = "pull", Je = "data", ds = "ack", Xe = "close", vt = "deflate", bt = "inflate";
class fs extends TransformStream {
  constructor(A, n) {
    super({});
    const t = this, { codecType: s } = A;
    let i;
    s.startsWith(vt) ? i = cs : s.startsWith(bt) && (i = Es), t.outputSize = 0;
    let o = 0;
    const g = new i(A, n), r = super.readable, a = new TransformStream({
      transform(c, B) {
        c && c.length && (o += c.length, B.enqueue(c));
      },
      flush() {
        Object.assign(t, {
          inputSize: o
        });
      }
    }), E = new TransformStream({
      transform(c, B) {
        if (c && c.length && (B.enqueue(c), t.outputSize += c.length, A.outputSize !== C && t.outputSize > A.outputSize))
          throw new Error(Mt);
      },
      flush() {
        const { signature: c } = g;
        Object.assign(t, {
          signature: c,
          inputSize: o
        });
      }
    });
    Object.defineProperty(t, "readable", {
      get() {
        return r.pipeThrough(a).pipeThrough(g).pipeThrough(E);
      }
    });
  }
}
class Cs extends TransformStream {
  constructor(A) {
    let n;
    super({
      transform: t,
      flush(s) {
        n && n.length && s.enqueue(n);
      }
    });
    function t(s, i) {
      if (n) {
        const o = new Uint8Array(n.length + s.length);
        o.set(n), o.set(s, n.length), s = o, n = null;
      }
      s.length > A ? (i.enqueue(s.slice(0, A)), t(s.slice(A), i)) : n = s;
    }
  }
}
const ze = { type: "module" };
let ne, Ie, We, _e = !0;
try {
  _e = typeof structuredClone == MA && structuredClone(new DOMException("", "AbortError")).code !== C;
} catch {
}
let Gt = () => {
};
function ms({ initModule: e }) {
  Gt = e;
}
class de {
  constructor(A, { readable: n, writable: t }, { options: s, config: i, streamOptions: o, useWebWorkers: g, transferStreams: r, workerURI: a }, E) {
    const { signal: c } = o;
    return Object.assign(A, {
      busy: !0,
      readable: n.pipeThrough(new Cs(i.chunkSize)).pipeThrough(new us(o), { signal: c }),
      writable: t,
      options: Object.assign({}, s),
      workerURI: a,
      transferStreams: r,
      terminate() {
        return new Promise((B) => {
          const { worker: I, busy: l } = A;
          I ? (l ? A.resolveTerminated = B : (I.terminate(), B()), A.interface = null) : B();
        });
      },
      onTaskFinished() {
        const { resolveTerminated: B } = A;
        B && (A.resolveTerminated = null, A.terminated = !0, A.worker.terminate(), B()), A.busy = !1, E(A);
      }
    }), ne === C && (ne = typeof Worker != RA), (g && ne ? hs : Nt)(A, i);
  }
}
class us extends TransformStream {
  constructor({ onstart: A, onprogress: n, size: t, onend: s }) {
    let i = 0;
    super({
      async start() {
        A && await fe(A, t);
      },
      async transform(o, g) {
        i += o.length, n && await fe(n, i, t), g.enqueue(o);
      },
      async flush() {
        s && await fe(s, i);
      }
    });
  }
}
async function fe(e, ...A) {
  try {
    await e(...A);
  } catch {
  }
}
function Nt(e, A) {
  return {
    run: () => ps(e, A)
  };
}
function hs(e, A) {
  const { baseURI: n, chunkSize: t } = A;
  let { wasmURI: s } = A;
  if (!e.interface) {
    typeof s == MA && (s = s());
    let i;
    try {
      i = se(e.workerURI, n, e);
    } catch {
      return ne = !1, Nt(e, A);
    }
    Object.assign(e, {
      worker: i,
      interface: {
        run: () => ws(e, { chunkSize: t, wasmURI: s, baseURI: n })
      }
    });
  }
  return e.interface;
}
async function ps({ options: e, readable: A, writable: n, onTaskFinished: t }, s) {
  let i;
  try {
    if (!e.useCompressionStream)
      try {
        await Gt(s);
      } catch {
        e.useCompressionStream = !0;
      }
    i = new fs(e, s), await A.pipeThrough(i).pipeTo(n, { preventClose: !0, preventAbort: !0 });
    const {
      signature: o,
      inputSize: g,
      outputSize: r
    } = i;
    return {
      signature: o,
      inputSize: g,
      outputSize: r
    };
  } catch (o) {
    throw i && (o.outputSize = i.outputSize), o;
  } finally {
    t();
  }
}
async function ws(e, A) {
  let n, t;
  const s = new Promise((c, B) => {
    n = c, t = B;
  });
  Object.assign(e, {
    reader: null,
    writer: null,
    resolveResult: n,
    rejectResult: t,
    result: s
  });
  const { readable: i, options: o } = e, { writable: g, closed: r } = Qs(e.writable), a = oe({
    type: ls,
    options: o,
    config: A,
    readable: i,
    writable: g
  }, e);
  a || Object.assign(e, {
    reader: i.getReader(),
    writer: g.getWriter()
  });
  const E = await s;
  return a || await g.getWriter().close(), await r, E;
}
function Qs(e) {
  const { writable: A, readable: n } = new TransformStream(), t = n.pipeTo(e, { preventClose: !0 });
  return { writable: A, closed: t };
}
function se(e, A, n, t, s = !0) {
  let i, o, g;
  if (Ie === C) {
    const r = typeof e == MA;
    r ? o = e(s) : o = e;
    const a = o.startsWith("data:"), E = o.startsWith("blob:");
    if (a || E) {
      t === C && (t = !1), t && (g = ze);
      try {
        i = new Worker(o, g);
      } catch (c) {
        if (E)
          try {
            URL.revokeObjectURL(o);
          } catch {
          }
        if (r && E)
          return se(e, A, n, t, !1);
        if (t)
          throw c;
        return se(e, A, n, !0, !1);
      }
    } else {
      t === C && (t = !0), t && (g = ze);
      try {
        o = new URL(o, A);
      } catch {
      }
      try {
        i = new Worker(o, g);
      } catch (c) {
        if (t)
          throw c;
        return se(e, A, n, !1, s);
      }
    }
    Ie = o, We = g;
  } else
    i = new Worker(Ie, We);
  return i.addEventListener(Bs, (r) => Ds(r, n)), i;
}
function oe(e, { worker: A, writer: n, onTaskFinished: t, transferStreams: s }) {
  try {
    const { value: i, readable: o, writable: g } = e, r = [];
    if (i && (e.value = i, r.push(e.value.buffer)), s && _e ? (o && r.push(o), g && r.push(g)) : e.readable = e.writable = null, r.length)
      try {
        return A.postMessage(e, r), !0;
      } catch {
        _e = !1, e.readable = e.writable = null, A.postMessage(e);
      }
    else
      A.postMessage(e);
  } catch (i) {
    throw n && n.releaseLock(), t(), i;
  }
}
async function Ds({ data: e }, A) {
  const { type: n, value: t, messageId: s, result: i, error: o } = e, { reader: g, writer: r, resolveResult: a, rejectResult: E, onTaskFinished: c } = A;
  try {
    if (o) {
      const { message: I, stack: l, code: f, name: u, outputSize: w } = o, d = new Error(I);
      Object.assign(d, { stack: l, code: f, name: u, outputSize: w }), B(d);
    } else {
      if (n == Is) {
        const { value: I, done: l } = await g.read();
        oe({ type: Je, value: I, done: l, messageId: s }, A);
      }
      n == Je && (await r.ready, await r.write(new Uint8Array(t)), oe({ type: ds, messageId: s }, A)), n == Xe && B(null, i);
    }
  } catch (I) {
    oe({ type: Xe, messageId: s }, A), B(I);
  }
  function B(I, l) {
    I ? E(I) : a(l), r && r.releaseLock(), c();
  }
}
let bA = [];
const Ce = [];
let qe = 0;
async function Ut(e, A) {
  const { options: n, config: t } = A, { transferStreams: s, useWebWorkers: i, useCompressionStream: o, compressed: g, signed: r, encrypted: a } = n, { workerURI: E, maxWorkers: c } = t;
  A.transferStreams = s || s === C;
  const B = !g && !r && !a && !A.transferStreams;
  return A.useWebWorkers = !B && (i || i === C && t.useWebWorkers), A.workerURI = A.useWebWorkers && E ? E : C, n.useCompressionStream = o || o === C && t.useCompressionStream, (await I()).run();
  async function I() {
    const f = bA.find((u) => !u.busy);
    if (f)
      return je(f), new de(f, e, A, l);
    if (bA.length < c) {
      const u = { indexWorker: qe };
      return qe++, bA.push(u), new de(u, e, A, l);
    } else
      return new Promise((u) => Ce.push({ resolve: u, stream: e, workerOptions: A }));
  }
  function l(f) {
    if (Ce.length) {
      const [{ resolve: u, stream: w, workerOptions: d }] = Ce.splice(0, 1);
      u(new de(f, w, d, l));
    } else f.worker ? (je(f), _s(f, A)) : bA = bA.filter((u) => u != f);
  }
}
function _s(e, A) {
  const { config: n } = A, { terminateWorkerTimeout: t } = n;
  Number.isFinite(t) && t >= 0 && (e.terminated ? e.terminated = !1 : e.terminateTimeout = setTimeout(async () => {
    bA = bA.filter((s) => s != e);
    try {
      await e.terminate();
    } catch {
    }
  }, t));
}
function je(e) {
  const { terminateTimeout: A } = e;
  A && (clearTimeout(A), e.terminateTimeout = null);
}
const Ss = "Writer iterator completed too soon", xs = "text/plain", Ts = "Content-Type", Fs = 64 * 1024, Lt = "writable";
class Re {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class ye extends Re {
  get readable() {
    const A = this, { chunkSize: n = Fs } = A, t = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(s) {
        const { offset: i = 0, size: o, diskNumberStart: g } = t, { chunkOffset: r } = this, a = o === C ? n : Math.min(n, o - r), E = await gA(A, i + r, a, g);
        s.enqueue(E), r + n > o || o === C && !E.length && a ? s.close() : this.chunkOffset += n;
      }
    });
    return t;
  }
}
class Ht extends ye {
  constructor(A) {
    super(), Object.assign(this, {
      blob: A,
      size: A.size
    });
  }
  async readUint8Array(A, n) {
    const t = this, s = A + n;
    let o = await (A || s < t.size ? t.blob.slice(A, s) : t.blob).arrayBuffer();
    return o.byteLength > n && (o = o.slice(A, s)), new Uint8Array(o);
  }
}
class li extends Re {
  constructor(A) {
    super();
    const n = this, t = new TransformStream(), s = [];
    A && s.push([Ts, A]), Object.defineProperty(n, Lt, {
      get() {
        return t.writable;
      }
    }), n.blob = new Response(t.readable, { headers: s }).blob();
  }
  getData() {
    return this.blob;
  }
}
class Ii extends Ht {
  constructor(A) {
    super(new Blob([A], { type: xs }));
  }
}
class di extends ye {
  constructor(A) {
    super(), A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength), Object.assign(this, {
      array: A,
      size: A.length
    });
  }
  readUint8Array(A, n) {
    return this.array.slice(A, A + n);
  }
}
class Rs extends ye {
  constructor(A) {
    super(), this.readers = A;
  }
  async init() {
    const A = this, { readers: n } = A;
    A.lastDiskNumber = 0, A.lastDiskOffset = 0, await Promise.all(n.map(async (t, s) => {
      await t.init(), s != n.length - 1 && (A.lastDiskOffset += t.size), A.size += t.size;
    })), super.init();
  }
  async readUint8Array(A, n, t = 0) {
    const s = this, { readers: i } = this;
    let o, g = t;
    g == -1 && (g = i.length - 1);
    let r = A;
    for (; i[g] && r >= i[g].size; )
      r -= i[g].size, g++;
    const a = i[g];
    if (a) {
      const E = a.size;
      if (r + n <= E)
        o = await gA(a, r, n);
      else {
        const c = E - r;
        o = new Uint8Array(n);
        const B = await gA(a, r, c);
        o.set(B, 0);
        const I = await s.readUint8Array(A + c, n - c, t);
        o.set(I, c), B.length + I.length < n && (o = o.subarray(0, B.length + I.length));
      }
    } else
      o = new Uint8Array();
    return s.lastDiskNumber = Math.max(g, s.lastDiskNumber), o;
  }
}
class Ve extends Re {
  constructor(A, n = 4294967295) {
    super();
    const t = this;
    Object.assign(t, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: n,
      availableSize: n
    });
    let s, i, o;
    const g = new WritableStream({
      async write(E) {
        const { availableSize: c } = t;
        if (o)
          E.length >= c ? (await r(E.subarray(0, c)), await a(), t.diskOffset += s.size, t.diskNumber++, o = null, await this.write(E.subarray(c))) : await r(E);
        else {
          const { value: B, done: I } = await A.next();
          if (I && !B)
            throw new Error(Ss);
          s = B, s.size = 0, s.maxSize && (t.maxSize = s.maxSize), t.availableSize = t.maxSize, await yA(s), i = B.writable, o = i.getWriter(), await this.write(E);
        }
      },
      async close() {
        await o.ready, await a();
      }
    });
    Object.defineProperty(t, Lt, {
      get() {
        return g;
      }
    });
    async function r(E) {
      const c = E.length;
      c && (await o.ready, await o.write(E), s.size += c, t.size += c, t.availableSize -= c);
    }
    async function a() {
      await o.close();
    }
  }
}
class Me {
  constructor(A) {
    return Array.isArray(A) && (A = new Rs(A)), A instanceof ReadableStream && (A = {
      readable: A
    }), A;
  }
}
class kt {
  constructor(A) {
    return A.writable === C && typeof A.next == MA && (A = new Ve(A)), A instanceof WritableStream && (A = {
      writable: A
    }), A.size === C && (A.size = 0), A instanceof Ve || Object.assign(A, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: jA,
      maxSize: jA
    }), A;
  }
}
async function yA(e, A) {
  if (e.init && !e.initialized)
    await e.init(A);
  else
    return Promise.resolve();
}
function gA(e, A, n, t) {
  return e.readUint8Array(A, n, t);
}
const Kt = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""), ys = Kt.length == 256;
function Ms(e) {
  if (ys) {
    let A = "";
    for (let n = 0; n < e.length; n++)
      A += Kt[e[n]];
    return A;
  } else
    return new TextDecoder().decode(e);
}
function ie(e, A) {
  return A && A.trim().toLowerCase() == "cp437" ? Ms(e) : new TextDecoder(A).decode(e);
}
const Pt = "filename", Jt = "rawFilename", Ye = "comment", Xt = "rawComment", Oe = "uncompressedSize", zt = "compressedSize", Wt = "offset", qt = "diskNumberStart", ce = "lastModDate", Se = "rawLastModDate", ve = "lastAccessDate", Ys = "rawLastAccessDate", be = "creationDate", jt = "rawCreationDate", Vt = "internalFileAttributes", Zt = "externalFileAttributes", $t = "msdosAttributesRaw", An = "msdosAttributes", en = "msDosCompatible", Ge = "zip64", tn = "encrypted", nn = "version", sn = "versionMadeBy", on = "zipCrypto", ge = "directory", gn = "executable", rn = "compressionMethod", an = "signature", cn = "extraField", Os = "extraFieldInfoZip", vs = "extraFieldUnix", En = "uid", Bn = "gid", ln = "unixMode", In = "setuid", dn = "setgid", fn = "sticky", bs = "bitFlag", Gs = "filenameUTF8", Ns = "commentUTF8", Us = "rawExtraField", Ls = "extraFieldZip64", Hs = "extraFieldUnicodePath", ks = "extraFieldUnicodeComment", Ks = "extraFieldAES", Ps = "extraFieldNTFS", Js = "extraFieldExtendedTimestamp", Xs = [
  Pt,
  Jt,
  Oe,
  zt,
  ce,
  Se,
  Ye,
  Xt,
  ve,
  be,
  jt,
  Wt,
  qt,
  Vt,
  Zt,
  $t,
  An,
  en,
  Ge,
  tn,
  nn,
  sn,
  on,
  ge,
  gn,
  rn,
  an,
  cn,
  vs,
  Os,
  En,
  Bn,
  ln,
  In,
  dn,
  fn,
  bs,
  Gs,
  Ns,
  Us,
  Ls,
  Hs,
  ks,
  Ks,
  Ps,
  Js
];
class Ee {
  constructor(A) {
    Xs.forEach((n) => this[n] = A[n]);
  }
}
const zs = "filenameEncoding", Ws = "commentEncoding", qs = "decodeText", js = "extractPrependedData", Vs = "extractAppendedData", Cn = "password", mn = "rawPassword", un = "passThrough", hn = "signal", Zs = "checkPasswordOnly", $s = "checkOverlappingEntryOnly", Ao = "checkOverlappingEntry", eo = "checkSignature", pn = "useWebWorkers", wn = "useCompressionStream", Qn = "transferStreams", Dn = "preventClose", to = "encryptionStrength", no = "extendedTimestamp", so = "keepOrder", oo = "level", io = "bufferedWrite", go = "createTempStream", ro = "dataDescriptorSignature", ao = "useUnicodeFileNames", co = "dataDescriptor", Eo = "supportZip64SplitFile", Bo = "encodeText", Ze = "offset", _n = "usdz", lo = "unixExtraFieldType", me = "File format is not recognized", Io = "End of central directory not found", fo = "End of Zip64 central directory locator not found", Co = "Central directory header not found", mo = "Local file header not found", uo = "Zip64 extra field not found", ho = "File contains encrypted entry", po = "Encryption method not supported", $e = "Compression method not supported", At = "Split zip file", wo = "Overlapping entry found", et = "utf-8", Qo = "UTF8", tt = "cp437", Do = [
  [Oe, 4294967295],
  [zt, 4294967295],
  [Wt, 4294967295],
  [qt, 65535]
], _o = {
  65535: {
    getValue: P,
    bytes: 4
  },
  4294967295: {
    getValue: kA,
    bytes: 8
  }
};
class So {
  constructor(A, n = {}) {
    Object.assign(this, {
      reader: new Me(A),
      options: n,
      config: It(),
      readRanges: []
    });
  }
  async *getEntriesGenerator(A = {}) {
    const n = this;
    let { reader: t } = n;
    const { config: s } = n;
    if (await yA(t), (t.size === C || !t.readUint8Array) && (t = new Ht(await new Response(t.readable).blob()), await yA(t)), t.size < 22)
      throw new Error(me);
    t.chunkSize = dt(s);
    const i = await Yo(t, 101010256, t.size, 22, 65535 * 16);
    if (!i) {
      const y = await gA(t, 0, 4), h = J(y);
      throw P(h) == 134695760 ? new Error(At) : new Error(Io);
    }
    const o = J(i);
    let g = P(o, 12), r = P(o, 16);
    const a = i.offset, E = nA(o, 20), c = a + 22 + E;
    let B = nA(o, 4);
    const I = t.lastDiskNumber || 0;
    let l = nA(o, 6), f = nA(o, 8), u = 0, w = 0;
    if (r == 4294967295 || g == 4294967295 || f == 65535 || l == 65535) {
      const y = await gA(t, i.offset - 20, 20), h = J(y);
      if (P(h, 0) == 117853008) {
        r = kA(h, 8);
        let k = await gA(t, r, 56, -1), _ = J(k);
        const O = i.offset - 20 - 56;
        if (P(_, 0) != 101075792 && r != O) {
          const L = r;
          r = O, r > L && (u = r - L), k = await gA(t, r, 56, -1), _ = J(k);
        }
        if (P(_, 0) != 101075792)
          throw new Error(fo);
        B == 65535 && (B = P(_, 16)), l == 65535 && (l = P(_, 20)), f == 65535 && (f = kA(_, 32)), g == 4294967295 && (g = kA(_, 40)), r -= g;
      }
    }
    if (r >= t.size && (u = t.size - r - g - 22, r = t.size - g - 22), I != B)
      throw new Error(At);
    if (r < 0)
      throw new Error(me);
    let d = 0, m = await gA(t, r, g, l), p = J(m);
    if (g) {
      const y = i.offset - g;
      if (P(p, d) != 33639248 && r != y) {
        const h = r;
        r = y, r > h && (u += r - h), m = await gA(t, r, g, l), p = J(m);
      }
    }
    const U = i.offset - r - (t.lastDiskOffset || 0);
    if (g != U && U >= 0 && (g = U, m = await gA(t, r, g, l), p = J(m)), r < 0 || r >= t.size)
      throw new Error(me);
    const Y = iA(n, A, zs), S = iA(n, A, Ws);
    for (let y = 0; y < f; y++) {
      const h = new xo(t, s, n.options);
      if (P(p, d) != 33639248)
        throw new Error(Co);
      Sn(h, p, d + 6);
      const k = !!h.bitFlag.languageEncodingFlag, _ = d + 46, O = _ + h.filenameLength, L = O + h.extraFieldLength, j = nA(p, d + 4), AA = j >> 8 == 0, eA = j >> 8 == 3, M = m.subarray(_, O), H = nA(p, d + 32), X = L + H, x = m.subarray(L, X), N = k, b = k, z = P(p, d + 38), sA = z & 255, dA = {
        readOnly: !!(sA & 1),
        hidden: !!(sA & 2),
        system: !!(sA & 4),
        directory: !!(sA & 16),
        archive: !!(sA & 32)
      }, Q = P(p, d + 42) + u, W = iA(n, A, qs) || ie, EA = N ? et : Y || tt, rA = b ? et : S || tt;
      let Z = W(M, EA);
      Z === C && (Z = ie(M, EA));
      let oA = W(x, rA);
      oA === C && (oA = ie(x, rA)), Object.assign(h, {
        versionMadeBy: j,
        msDosCompatible: AA,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: H,
        offset: Q,
        diskNumberStart: nA(p, d + 34),
        internalFileAttributes: nA(p, d + 36),
        externalFileAttributes: z,
        msdosAttributesRaw: sA,
        msdosAttributes: dA,
        rawFilename: M,
        filenameUTF8: N,
        commentUTF8: b,
        rawExtraField: m.subarray(O, L),
        rawComment: x,
        filename: Z,
        comment: oA
      }), w = Math.max(Q, w), xn(h, h, p, d + 6);
      const V = h.externalFileAttributes >> 16 & 65535;
      h.unixMode === C && (V & 16877) != 0 && (h.unixMode = V);
      const cA = !!(h.unixMode & 2048), uA = !!(h.unixMode & 1024), BA = !!(h.unixMode & 512), NA = h.unixMode !== C ? (h.unixMode & 73) != 0 : eA && (V & 73) != 0, PA = h.unixMode !== C && (h.unixMode & 61440) == 16384, JA = (V & 61440) == 16384;
      Object.assign(h, {
        setuid: cA,
        setgid: uA,
        sticky: BA,
        unixExternalUpper: V,
        internalFileAttribute: h.internalFileAttributes,
        externalFileAttribute: h.externalFileAttributes,
        executable: NA,
        directory: PA || JA || AA && dA.directory || Z.endsWith("/") && !h.uncompressedSize,
        zipCrypto: h.encrypted && !h.extraFieldAES
      });
      const hA = new Ee(h);
      hA.getData = (OA, QA) => h.getData(OA, hA, n.readRanges, QA), hA.arrayBuffer = async (OA) => {
        const QA = new TransformStream(), [UA] = await Promise.all([
          new Response(QA.readable).arrayBuffer(),
          h.getData(QA, hA, n.readRanges, OA)
        ]);
        return UA;
      }, d = X;
      const { onprogress: YA } = A;
      if (YA)
        try {
          await YA(y + 1, f, new Ee(h));
        } catch {
        }
      yield hA;
    }
    const R = iA(n, A, js), G = iA(n, A, Vs);
    return R && (n.prependedData = w > 0 ? await gA(t, 0, w) : new Uint8Array()), n.comment = E ? await gA(t, a + 22, E) : new Uint8Array(), G && (n.appendedData = c < t.size ? await gA(t, c, t.size - c) : new Uint8Array()), !0;
  }
  async getEntries(A = {}) {
    const n = [];
    for await (const t of this.getEntriesGenerator(A))
      n.push(t);
    return n;
  }
  async close() {
  }
}
class xo {
  constructor(A, n, t) {
    Object.assign(this, {
      reader: A,
      config: n,
      options: t
    });
  }
  async getData(A, n, t, s = {}) {
    const i = this, {
      reader: o,
      offset: g,
      diskNumberStart: r,
      extraFieldAES: a,
      extraFieldZip64: E,
      compressionMethod: c,
      config: B,
      bitFlag: I,
      signature: l,
      rawLastModDate: f,
      uncompressedSize: u,
      compressedSize: w
    } = i, {
      dataDescriptor: d
    } = I, m = n.localDirectory = {}, p = await gA(o, g, 30, r), U = J(p);
    let Y = iA(i, s, Cn), S = iA(i, s, mn);
    const R = iA(i, s, un);
    if (Y = Y && Y.length && Y, S = S && S.length && S, a && a.originalCompressionMethod != 99)
      throw new Error($e);
    if (c != 0 && c != 8 && c != 9 && !R)
      throw new Error($e);
    if (P(U, 0) != 67324752)
      throw new Error(mo);
    Sn(m, U, 4);
    const {
      extraFieldLength: G,
      filenameLength: y,
      lastAccessDate: h,
      creationDate: k
    } = m;
    m.rawExtraField = G ? await gA(o, g + 30 + y, G, r) : new Uint8Array(), xn(i, m, U, 4, !0), Object.assign(n, { lastAccessDate: h, creationDate: k });
    const _ = i.encrypted && m.encrypted && !R, O = _ && !a;
    if (R || (n.zipCrypto = O), _) {
      if (!O && a.strength === C)
        throw new Error(po);
      if (!Y && !S)
        throw new Error(ho);
    }
    const L = g + 30 + y + G, j = w, AA = o.readable;
    Object.assign(AA, {
      diskNumberStart: r,
      offset: L,
      size: j
    });
    const eA = iA(i, s, hn), M = iA(i, s, Zs);
    let H = iA(i, s, Ao);
    const X = iA(i, s, $s);
    X && (H = !0);
    const { onstart: x, onprogress: N, onend: b } = s, z = c == 9;
    let sA = iA(i, s, wn);
    z && (sA = !1);
    const dA = {
      options: {
        codecType: bt,
        password: Y,
        rawPassword: S,
        zipCrypto: O,
        encryptionStrength: a && a.strength,
        signed: iA(i, s, eo) && !R,
        passwordVerification: O && (d ? f >>> 8 & 255 : l >>> 24 & 255),
        outputSize: R ? w : u,
        signature: l,
        compressed: c != 0 && !R,
        encrypted: i.encrypted && !R,
        useWebWorkers: iA(i, s, pn),
        useCompressionStream: sA,
        transferStreams: iA(i, s, Qn),
        deflate64: z,
        checkPasswordOnly: M
      },
      config: B,
      streamOptions: { signal: eA, size: j, onstart: x, onprogress: N, onend: b }
    };
    H && await Mo({
      reader: o,
      fileEntry: n,
      offset: g,
      diskNumberStart: r,
      signature: l,
      compressedSize: w,
      uncompressedSize: u,
      dataOffset: L,
      dataDescriptor: d || m.bitFlag.dataDescriptor,
      extraFieldZip64: E || m.extraFieldZip64,
      readRanges: t
    });
    let Q;
    try {
      if (!X) {
        M && (A = new WritableStream()), A = new kt(A), await yA(A, R ? w : u), { writable: Q } = A;
        const { outputSize: W } = await Ut({ readable: AA, writable: Q }, dA);
        if (A.size += W, W != (R ? w : u))
          throw new Error(Mt);
      }
    } catch (W) {
      if (W.outputSize !== C && (A.size += W.outputSize), !M || W.message != xe)
        throw W;
    } finally {
      !iA(i, s, Dn) && Q && !Q.locked && await Q.getWriter().close();
    }
    return M || X ? C : A.getData ? A.getData() : Q;
  }
}
function Sn(e, A, n) {
  const t = e.rawBitFlag = nA(A, n + 2), s = (t & 1) == 1, i = P(A, n + 6);
  Object.assign(e, {
    encrypted: s,
    version: nA(A, n),
    bitFlag: {
      level: (t & 6) >> 1,
      dataDescriptor: (t & 8) == 8,
      languageEncodingFlag: (t & 2048) == 2048
    },
    rawLastModDate: i,
    lastModDate: Oo(i),
    filenameLength: nA(A, n + 22),
    extraFieldLength: nA(A, n + 24)
  });
}
function xn(e, A, n, t, s) {
  const { rawExtraField: i } = A, o = A.extraField = /* @__PURE__ */ new Map(), g = J(new Uint8Array(i));
  let r = 0;
  try {
    for (; r < i.length; ) {
      const d = nA(g, r), m = nA(g, r + 2);
      o.set(d, {
        type: d,
        data: i.slice(r + 4, r + 4 + m)
      }), r += 4 + m;
    }
  } catch {
  }
  const a = nA(n, t + 4);
  Object.assign(A, {
    signature: P(n, t + 10),
    compressedSize: P(n, t + 14),
    uncompressedSize: P(n, t + 18)
  });
  const E = o.get(1);
  E && (To(E, A), A.extraFieldZip64 = E);
  const c = o.get(28789);
  c && (nt(c, Pt, Jt, A, e), A.extraFieldUnicodePath = c);
  const B = o.get(25461);
  B && (nt(B, Ye, Xt, A, e), A.extraFieldUnicodeComment = B);
  const I = o.get(39169);
  I ? (Fo(I, A, a), A.extraFieldAES = I) : A.compressionMethod = a;
  const l = o.get(10);
  l && (Ro(l, A), A.extraFieldNTFS = l);
  const f = o.get(30805);
  if (f)
    st(f, A, !1), A.extraFieldUnix = f;
  else {
    const d = o.get(30837);
    d && (st(d, A, !0), A.extraFieldInfoZip = d);
  }
  const u = o.get(21589);
  u && (yo(u, A, s), A.extraFieldExtendedTimestamp = u);
  const w = o.get(6534);
  w && (A.extraFieldUSDZ = w);
}
function To(e, A) {
  A.zip64 = !0;
  const n = J(e.data), t = Do.filter(([s, i]) => A[s] == i);
  for (let s = 0, i = 0; s < t.length; s++) {
    const [o, g] = t[s];
    if (A[o] == g) {
      const r = _o[g];
      A[o] = e[o] = r.getValue(n, i), i += r.bytes;
    } else if (e[o])
      throw new Error(uo);
  }
}
function nt(e, A, n, t, s) {
  const i = J(e.data), o = new re();
  o.append(s[n]);
  const g = J(new Uint8Array(4));
  g.setUint32(0, o.get(), !0);
  const r = P(i, 1);
  Object.assign(e, {
    version: FA(i, 0),
    [A]: ie(e.data.subarray(5)),
    valid: !s.bitFlag.languageEncodingFlag && r == P(g, 0)
  }), e.valid && (t[A] = e[A], t[A + Qo] = !0);
}
function Fo(e, A, n) {
  const t = J(e.data), s = FA(t, 4);
  Object.assign(e, {
    vendorVersion: FA(t, 0),
    vendorId: FA(t, 2),
    strength: s,
    originalCompressionMethod: n,
    compressionMethod: nA(t, 5)
  }), A.compressionMethod = e.compressionMethod;
}
function Ro(e, A) {
  const n = J(e.data);
  let t = 4, s;
  try {
    for (; t < e.data.length && !s; ) {
      const i = nA(n, t), o = nA(n, t + 2);
      i == 1 && (s = e.data.slice(t + 4, t + 4 + o)), t += 4 + o;
    }
  } catch {
  }
  try {
    if (s && s.length == 24) {
      const i = J(s), o = i.getBigUint64(0, !0), g = i.getBigUint64(8, !0), r = i.getBigUint64(16, !0);
      Object.assign(e, {
        rawLastModDate: o,
        rawLastAccessDate: g,
        rawCreationDate: r
      });
      const a = ue(o), E = ue(g), c = ue(r), B = { lastModDate: a, lastAccessDate: E, creationDate: c };
      Object.assign(e, B), Object.assign(A, B);
    }
  } catch {
  }
}
function st(e, A, n) {
  try {
    const t = J(new Uint8Array(e.data));
    let s = 0;
    const i = FA(t, s++), o = FA(t, s++), g = e.data.subarray(s, s + o);
    s += o;
    const r = ot(g), a = FA(t, s++), E = e.data.subarray(s, s + a);
    s += a;
    const c = ot(E);
    let B = C;
    if (!n && s + 2 <= e.data.length) {
      const I = e.data;
      B = new DataView(I.buffer, I.byteOffset + s, 2).getUint16(0, !0);
    }
    Object.assign(e, { version: i, uid: r, gid: c, unixMode: B }), r !== C && (A.uid = r), c !== C && (A.gid = c), B !== C && (A.unixMode = B);
  } catch {
  }
}
function ot(e) {
  const A = new Uint8Array(4);
  return A.set(e, 0), new DataView(A.buffer, A.byteOffset, 4).getUint32(0, !0);
}
function yo(e, A, n) {
  const t = J(e.data), s = FA(t, 0), i = [], o = [];
  n ? ((s & 1) == 1 && (i.push(ce), o.push(Se)), (s & 2) == 2 && (i.push(ve), o.push(Ys)), (s & 4) == 4 && (i.push(be), o.push(jt))) : e.data.length >= 5 && (i.push(ce), o.push(Se));
  let g = 1;
  i.forEach((r, a) => {
    if (e.data.length >= g + 4) {
      const E = P(t, g);
      A[r] = e[r] = new Date(E * 1e3);
      const c = o[a];
      e[c] = E;
    }
    g += 4;
  });
}
async function Mo({
  reader: e,
  fileEntry: A,
  offset: n,
  diskNumberStart: t,
  signature: s,
  compressedSize: i,
  uncompressedSize: o,
  dataOffset: g,
  dataDescriptor: r,
  extraFieldZip64: a,
  readRanges: E
}) {
  let c = 0;
  if (t)
    for (let l = 0; l < t; l++) {
      const f = e.readers[l];
      c += f.size;
    }
  let B = 0;
  if (r && (a ? B = 20 : B = 12), B) {
    const l = await gA(e, g + i, B + 4, t);
    if (P(J(l), 0) == 134695760) {
      const u = P(J(l), 4);
      let w, d;
      a ? (w = kA(J(l), 8), d = kA(J(l), 16)) : (w = P(J(l), 8), d = P(J(l), 12)), (A.encrypted && !A.zipCrypto || u == s) && w == i && d == o && (B += 4);
    }
  }
  const I = {
    start: c + n,
    end: c + g + i + B,
    fileEntry: A
  };
  for (const l of E)
    if (l.fileEntry != A && I.start >= l.start && I.start < l.end) {
      const f = new Error(wo);
      throw f.overlappingEntry = l.fileEntry, f;
    }
  E.push(I);
}
async function Yo(e, A, n, t, s) {
  const i = new Uint8Array(4), o = J(i);
  vo(o, 0, A);
  const g = t + s;
  return await r(t) || await r(Math.min(g, n));
  async function r(a) {
    const E = n - a, c = await gA(e, E, a);
    for (let B = c.length - t; B >= 0; B--)
      if (c[B] == i[0] && c[B + 1] == i[1] && c[B + 2] == i[2] && c[B + 3] == i[3])
        return {
          offset: E + B,
          buffer: c.slice(B, B + t).buffer
        };
  }
}
function iA(e, A, n) {
  return A[n] === C ? e.options[n] : A[n];
}
function Oo(e) {
  const A = (e & 4294901760) >> 16, n = e & 65535;
  try {
    return new Date(1980 + ((A & 65024) >> 9), ((A & 480) >> 5) - 1, A & 31, (n & 63488) >> 11, (n & 2016) >> 5, (n & 31) * 2, 0);
  } catch {
  }
}
function ue(e) {
  return new Date(Number(e / BigInt(1e4) - BigInt(116444736e5)));
}
function FA(e, A) {
  return e.getUint8(A);
}
function nA(e, A) {
  return e.getUint16(A, !0);
}
function P(e, A) {
  return e.getUint32(A, !0);
}
function kA(e, A) {
  return Number(e.getBigUint64(A, !0));
}
function vo(e, A, n) {
  e.setUint32(A, n, !0);
}
function J(e) {
  return new DataView(e.buffer);
}
const bo = "File already exists", Go = "Zip file comment exceeds 64KB", No = "File entry comment exceeds 64KB", Uo = "File entry name exceeds 64KB", it = "Version exceeds 65535", Lo = "The strength must equal 1, 2, or 3", Ho = "Extra field type exceeds 65535", ko = "Extra field data exceeds 64KB", Tn = "Zip64 is not supported (set the 'zip64' option to 'true')", Ko = "Undefined uncompressed size", Po = "Zip file not empty", Jo = "Invalid uid (must be integer 0..2^32-1)", Xo = "Invalid gid (must be integer 0..2^32-1)", zo = "Invalid UNIX mode (must be integer 0..65535)", Wo = "Invalid unixExtraFieldType (must be 'infozip' or 'unix')", qo = "Invalid msdosAttributesRaw (must be integer 0..255)", jo = "Invalid msdosAttributes (must be an object with boolean flags)", gt = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]), Fn = "infozip", Rn = "unix";
let he = 0;
const rt = [];
class fi {
  constructor(A, n = {}) {
    A = new kt(A);
    const t = A.availableSize !== C && A.availableSize > 0 && A.availableSize !== jA && A.maxSize !== C && A.maxSize > 0 && A.maxSize !== jA;
    Object.assign(this, {
      writer: A,
      addSplitZipSignature: t,
      options: n,
      config: It(),
      files: /* @__PURE__ */ new Map(),
      filenames: /* @__PURE__ */ new Set(),
      offset: n[Ze] === C ? A.size || A.writable.size || 0 : n[Ze],
      pendingEntriesSize: 0,
      pendingAddFileCalls: /* @__PURE__ */ new Set(),
      bufferedWrites: 0
    });
  }
  async prependZip(A) {
    if (this.filenames.size)
      throw new Error(Po);
    A = new Me(A);
    const n = new So(A.readable), t = await n.getEntries();
    await n.close(), await A.readable.pipeTo(this.writer.writable, { preventClose: !0, preventAbort: !0 }), this.writer.size = this.offset = A.size, this.filenames = new Set(t.map((s) => s.filename)), this.files = new Map(t.map((s) => {
      const {
        version: i,
        compressionMethod: o,
        lastModDate: g,
        lastAccessDate: r,
        creationDate: a,
        rawFilename: E,
        bitFlag: c,
        encrypted: B,
        uncompressedSize: I,
        compressedSize: l,
        diskOffset: f,
        diskNumber: u,
        zip64: w
      } = s;
      let {
        rawExtraFieldZip64: d,
        rawExtraFieldAES: m,
        rawExtraFieldExtendedTimestamp: p,
        rawExtraFieldNTFS: U,
        rawExtraFieldUnix: Y,
        rawExtraField: S
      } = s;
      const { level: R, languageEncodingFlag: G, dataDescriptor: y } = c;
      d = d || new Uint8Array(), m = m || new Uint8Array(), p = p || new Uint8Array(), U = U || new Uint8Array(), Y = s.rawExtraFieldUnix || new Uint8Array(), S = S || new Uint8Array();
      const h = T(d, m, p, U, Y, S), k = w && I > 4294967295, _ = w && l > 4294967295, {
        headerArray: O,
        headerView: L
      } = yn({
        version: i,
        bitFlag: Mn(R, G, y, B, o),
        compressionMethod: o,
        uncompressedSize: I,
        compressedSize: l,
        lastModDate: g,
        rawFilename: E,
        zip64CompressedSize: _,
        zip64UncompressedSize: k,
        extraFieldLength: h
      });
      return Object.assign(s, {
        zip64UncompressedSize: k,
        zip64CompressedSize: _,
        zip64Offset: w && this.offset - f > 4294967295,
        zip64DiskNumberStart: w && u > 65535,
        rawExtraFieldZip64: d,
        rawExtraFieldAES: m,
        rawExtraFieldExtendedTimestamp: p,
        rawExtraFieldNTFS: U,
        rawExtraFieldUnix: Y,
        rawExtraField: S,
        extendedTimestamp: p.length > 0 || U.length > 0,
        extraFieldExtendedTimestampFlag: 1 + (r ? 2 : 0) + (a ? 4 : 0),
        headerArray: O,
        headerView: L
      }), [s.filename, s];
    }));
  }
  async add(A = "", n, t = {}) {
    const s = this, {
      pendingAddFileCalls: i,
      config: o
    } = s;
    he < o.maxWorkers ? he++ : await new Promise((r) => rt.push(r));
    let g;
    try {
      if (A = A.trim(), s.filenames.has(A))
        throw new Error(bo);
      return s.filenames.add(A), g = Vo(s, A, n, t), i.add(g), await g;
    } catch (r) {
      throw s.filenames.delete(A), r;
    } finally {
      i.delete(g);
      const r = rt.shift();
      r ? r() : he--;
    }
  }
  remove(A) {
    const { filenames: n, files: t } = this;
    if (typeof A == "string" && (A = t.get(A)), A && A.filename !== C) {
      const { filename: s } = A;
      if (n.has(s) && t.has(s))
        return n.delete(s), t.delete(s), !0;
    }
    return !1;
  }
  async close(A = new Uint8Array(), n = {}) {
    const t = this, { pendingAddFileCalls: s, writer: i } = this, { writable: o } = i;
    for (; s.size; )
      await Promise.allSettled(Array.from(s));
    return await ii(t, A, n), D(t, n, Dn) || await o.getWriter().close(), i.getData ? i.getData() : o;
  }
}
async function Vo(e, A, n, t) {
  A = A.trim();
  let s = D(e, t, en), i = D(e, t, sn, s ? 20 : 768);
  const o = D(e, t, gn), g = D(e, t, En), r = D(e, t, Bn);
  let a = D(e, t, ln);
  const E = D(e, t, lo);
  let c = D(e, t, In), B = D(e, t, dn), I = D(e, t, fn);
  if (g !== C && (g < 0 || g > 4294967295))
    throw new Error(Jo);
  if (r !== C && (r < 0 || r > 4294967295))
    throw new Error(Xo);
  if (a !== C && (a < 0 || a > 65535))
    throw new Error(zo);
  if (E !== C && E !== Fn && E !== Rn)
    throw new Error(Wo);
  let l = D(e, t, $t), f = D(e, t, An);
  const u = g !== C || r !== C || a !== C || E, w = l !== C || f !== C;
  if (u ? (s = !1, i = i & 65535 | 768) : w && (s = !0, i = i & 255), l !== C && (l < 0 || l > 255))
    throw new Error(qo);
  if (f && typeof f !== Nn)
    throw new Error(jo);
  if (i > 65535)
    throw new Error(it);
  let d = D(e, t, Zt, 0);
  !t[ge] && A.endsWith("/") && (t[ge] = !0);
  const m = D(e, t, ge);
  m ? (A.endsWith("/") || (A += "/"), d === 0 && (d = 16, s || (d |= 16877 << 16))) : !s && d === 0 && (o ? d = 493 << 16 : d = 420 << 16);
  let p;
  s || (p = d >> 16 & 65535, a = a === C ? p : a & 65535, c ? a |= 2048 : c = !!(a & 2048), B ? a |= 1024 : B = !!(a & 1024), I ? a |= 512 : I = !!(a & 512), m && (a |= 16384), d = (a & 65535) << 16 | d & 255), { msdosAttributesRaw: l, msdosAttributes: f } = ti(l, f), w && (d = d & 4294967295 | l & 255);
  const U = D(e, t, Bo, te);
  let Y = U(A);
  if (Y === C && (Y = te(A)), T(Y) > 65535)
    throw new Error(Uo);
  const S = t[Ye] || "";
  let R = U(S);
  if (R === C && (R = te(S)), T(R) > 65535)
    throw new Error(No);
  const G = D(e, t, nn, 20);
  if (G > 65535)
    throw new Error(it);
  const y = D(e, t, ce, /* @__PURE__ */ new Date()), h = D(e, t, ve), k = D(e, t, be), _ = D(e, t, Vt, 0), O = D(e, t, un);
  let L, j;
  O || (L = D(e, t, Cn), j = D(e, t, mn));
  const AA = D(e, t, to, 3), eA = D(e, t, on), M = D(e, t, no, !0), H = D(e, t, so, !0), X = D(e, t, pn), x = D(e, t, Qn, !0), N = D(e, t, io), b = D(e, t, go), z = D(e, t, ro, !1), sA = D(e, t, hn), dA = D(e, t, ao, !0), Q = D(e, t, rn);
  let W = D(e, t, oo), EA = D(e, t, wn), rA = D(e, t, co);
  N && rA === C && (rA = !1), (rA === C || eA) && (rA = !0), W !== C && W != 6 && (EA = !1), !EA && e.config.CompressionStream === C && e.config.CompressionStreamZlib === C && (W = 0);
  let Z = D(e, t, Ge);
  if (!eA && (L !== C || j !== C) && !(AA >= 1 && AA <= 3))
    throw new Error(Lo);
  let oA = new Uint8Array();
  const V = t[cn];
  if (V) {
    let XA = 0, SA = 0;
    V.forEach((mA) => XA += 4 + T(mA)), oA = new Uint8Array(XA), V.forEach((mA, xA) => {
      if (xA > 65535)
        throw new Error(Ho);
      if (T(mA) > 65535)
        throw new Error(ko);
      K(oA, new Uint16Array([xA]), SA), K(oA, new Uint16Array([T(mA)]), SA + 2), K(oA, mA, SA + 4), SA += 4 + T(mA);
    });
  }
  let cA = 0, uA = 0, BA = 0;
  if (O && (BA = t[Oe], BA === C))
    throw new Error(Ko);
  const NA = Z === !0;
  n && (n = new Me(n), await yA(n), O ? (t.uncompressedSize = BA, cA = ct(BA)) : n.size === C ? (rA = !0, (Z || Z === C) && (Z = !0, BA = cA = 4294967296)) : (t.uncompressedSize = BA = n.size, cA = ct(BA)));
  const { diskOffset: PA, diskNumber: JA } = e.writer, hA = NA || BA > 4294967295, YA = NA || cA > 4294967295;
  if (hA || YA) {
    if (Z === !1)
      throw new Error(Tn);
    Z = !0;
  }
  Z = Z || !1;
  const OA = D(e, t, tn);
  t = Object.assign({}, t, {
    rawFilename: Y,
    rawComment: R,
    version: G,
    versionMadeBy: i,
    lastModDate: y,
    lastAccessDate: h,
    creationDate: k,
    rawExtraField: oA,
    zip64: Z,
    zip64UncompressedSize: hA,
    zip64CompressedSize: YA,
    password: L,
    rawPassword: j,
    level: W,
    useWebWorkers: X,
    transferStreams: x,
    encryptionStrength: AA,
    extendedTimestamp: M,
    zipCrypto: eA,
    bufferedWrite: N,
    createTempStream: b,
    keepOrder: H,
    useUnicodeFileNames: dA,
    dataDescriptor: rA,
    dataDescriptorSignature: z,
    signal: sA,
    msDosCompatible: s,
    internalFileAttribute: _,
    internalFileAttributes: _,
    externalFileAttribute: d,
    externalFileAttributes: d,
    useCompressionStream: EA,
    passThrough: O,
    encrypted: !!(L && T(L) || j && T(j)) || O && OA,
    signature: t[an],
    compressionMethod: Q,
    uncompressedSize: BA,
    offset: e.offset - PA,
    diskNumberStart: JA,
    uid: g,
    gid: r,
    setuid: c,
    setgid: B,
    sticky: I,
    unixMode: a,
    msdosAttributesRaw: l,
    msdosAttributes: f,
    unixExternalUpper: p
  });
  const QA = Ai(t), UA = ni(t), ee = T(QA.localHeaderArray, UA.dataDescriptorArray);
  uA = ee + cA, e.options[_n] && (uA += uA + 64), e.pendingEntriesSize += uA;
  let DA;
  try {
    DA = await Zo(e, A, n, { headerInfo: QA, dataDescriptorInfo: UA, metadataSize: ee }, t);
  } finally {
    e.pendingEntriesSize -= uA;
  }
  return Object.assign(DA, { name: A, comment: S, extraField: V }), new Ee(DA);
}
async function Zo(e, A, n, t, s) {
  const {
    files: i,
    writer: o
  } = e, {
    keepOrder: g,
    dataDescriptor: r,
    signal: a
  } = s, {
    headerInfo: E
  } = t, c = e.options[_n], B = Array.from(i.values()).pop();
  let I = {}, l, f, u, w, d, m;
  i.set(A, I);
  try {
    let S;
    g && (S = B && B.lock, p()), (s.bufferedWrite || !g || e.writerLocked || e.bufferedWrites || !r) && !c ? (s.createTempStream ? m = await s.createTempStream() : m = new TransformStream(C, C, { highWaterMark: jA }), m.size = 0, l = !0, e.bufferedWrites++, await yA(o)) : (m = o, await U()), await yA(m);
    const { writable: R, diskOffset: G } = o;
    if (e.addSplitZipSignature) {
      delete e.addSplitZipSignature;
      const _ = new Uint8Array(4), O = $(_);
      v(O, 0, 134695760), await _A(o, _), e.offset += 4;
    }
    c && ei(t, e.offset - G);
    const {
      localHeaderView: y,
      localHeaderArray: h
    } = E;
    l || (await S, await Y(R));
    const { diskNumber: k } = o;
    return I.diskNumberStart = k, l || (d = !0, await _A(m, h)), I = await $o(n, m, I, t, e.config, s), l || (d = !1), i.set(A, I), I.filename = A, l ? (await Promise.all([m.writable.getWriter().close(), S]), await U(), w = !0, I.diskNumberStart = o.diskNumber, I.offset = e.offset - o.diskOffset, oi(I, y, s), await Y(R), await _A(o, h), await m.readable.pipeTo(R, { preventClose: !0, preventAbort: !0, signal: a }), o.size += m.size, w = !1) : I.offset = e.offset - G, e.offset += I.size, I;
  } catch (S) {
    if (w || d) {
      if (e.hasCorruptedEntries = !0, S)
        try {
          S.corruptedEntry = !0;
        } catch {
        }
      l ? e.offset += m.size : e.offset = m.size;
    }
    throw i.delete(A), S;
  } finally {
    l && e.bufferedWrites--, u && u(), f && f();
  }
  function p() {
    I.lock = new Promise((S) => u = S);
  }
  async function U() {
    e.writerLocked = !0;
    const { lockWriter: S } = e;
    e.lockWriter = new Promise((R) => f = () => {
      e.writerLocked = !1, R();
    }), await S;
  }
  async function Y(S) {
    T(E.localHeaderArray) > o.availableSize && (o.availableSize = 0, await _A(S, new Uint8Array()));
  }
}
async function $o(e, A, { diskNumberStart: n, lock: t }, s, i, o) {
  const {
    headerInfo: g,
    dataDescriptorInfo: r,
    metadataSize: a
  } = s, {
    headerArray: E,
    headerView: c,
    lastModDate: B,
    rawLastModDate: I,
    encrypted: l,
    compressed: f,
    version: u,
    compressionMethod: w,
    rawExtraFieldZip64: d,
    localExtraFieldZip64Length: m,
    rawExtraFieldExtendedTimestamp: p,
    extraFieldExtendedTimestampFlag: U,
    rawExtraFieldNTFS: Y,
    rawExtraFieldUnix: S,
    rawExtraFieldAES: R
  } = g, { dataDescriptorArray: G } = r, {
    rawFilename: y,
    lastAccessDate: h,
    creationDate: k,
    password: _,
    rawPassword: O,
    level: L,
    zip64: j,
    zip64UncompressedSize: AA,
    zip64CompressedSize: eA,
    zipCrypto: M,
    dataDescriptor: H,
    directory: X,
    executable: x,
    versionMadeBy: N,
    rawComment: b,
    rawExtraField: z,
    useWebWorkers: sA,
    transferStreams: dA,
    onstart: Q,
    onprogress: W,
    onend: EA,
    signal: rA,
    encryptionStrength: Z,
    extendedTimestamp: oA,
    msDosCompatible: V,
    internalFileAttributes: cA,
    externalFileAttributes: uA,
    uid: BA,
    gid: NA,
    unixMode: PA,
    setuid: JA,
    setgid: hA,
    sticky: YA,
    unixExternalUpper: OA,
    msdosAttributesRaw: QA,
    msdosAttributes: UA,
    useCompressionStream: ee,
    passThrough: DA
  } = o, XA = {
    lock: t,
    versionMadeBy: N,
    zip64: j,
    directory: !!X,
    executable: !!x,
    filenameUTF8: !0,
    rawFilename: y,
    commentUTF8: !0,
    rawComment: b,
    rawExtraFieldZip64: d,
    localExtraFieldZip64Length: m,
    rawExtraFieldExtendedTimestamp: p,
    rawExtraFieldNTFS: Y,
    rawExtraFieldUnix: S,
    rawExtraFieldAES: R,
    rawExtraField: z,
    extendedTimestamp: oA,
    msDosCompatible: V,
    internalFileAttributes: cA,
    externalFileAttributes: uA,
    diskNumberStart: n,
    uid: BA,
    gid: NA,
    unixMode: PA,
    setuid: JA,
    setgid: hA,
    sticky: YA,
    unixExternalUpper: OA,
    msdosAttributesRaw: QA,
    msdosAttributes: UA
  };
  let {
    signature: SA,
    uncompressedSize: mA
  } = o, xA = 0;
  DA || (mA = 0);
  const { writable: On } = A;
  if (e) {
    e.chunkSize = dt(i);
    const vn = e.readable, bn = e.size, Gn = {
      options: {
        codecType: vt,
        level: L,
        rawPassword: O,
        password: _,
        encryptionStrength: Z,
        zipCrypto: l && M,
        passwordVerification: l && M && I >> 8 & 255,
        signed: !DA,
        compressed: f && !DA,
        encrypted: l && !DA,
        useWebWorkers: sA,
        useCompressionStream: ee,
        transferStreams: dA
      },
      config: i,
      streamOptions: { signal: rA, size: bn, onstart: Q, onprogress: W, onend: EA }
    };
    try {
      const vA = await Ut({ readable: vn, writable: On }, Gn);
      xA = vA.outputSize, A.size += xA, DA || (mA = vA.inputSize, SA = vA.signature);
    } catch (vA) {
      throw vA.outputSize !== C && (A.size += vA.outputSize), vA;
    }
  }
  return si({
    signature: SA,
    compressedSize: xA,
    uncompressedSize: mA,
    headerInfo: g,
    dataDescriptorInfo: r
  }, o), H && await _A(A, G), Object.assign(XA, {
    uncompressedSize: mA,
    compressedSize: xA,
    lastModDate: B,
    rawLastModDate: I,
    creationDate: k,
    lastAccessDate: h,
    encrypted: l,
    zipCrypto: M,
    size: a + xA,
    compressionMethod: w,
    version: u,
    headerArray: E,
    headerView: c,
    signature: SA,
    extraFieldExtendedTimestampFlag: U,
    zip64UncompressedSize: AA,
    zip64CompressedSize: eA
  }), XA;
}
function Ai(e) {
  const {
    rawFilename: A,
    lastModDate: n,
    lastAccessDate: t,
    creationDate: s,
    level: i,
    zip64: o,
    zipCrypto: g,
    useUnicodeFileNames: r,
    dataDescriptor: a,
    directory: E,
    rawExtraField: c,
    encryptionStrength: B,
    extendedTimestamp: I,
    passThrough: l,
    encrypted: f,
    zip64UncompressedSize: u,
    zip64CompressedSize: w,
    uncompressedSize: d
  } = e;
  let { version: m, compressionMethod: p } = e;
  const U = !E && (i > 0 || i === C && p !== 0);
  let Y;
  const S = l || !U, R = o && (e.bufferedWrite || !u && !w || S);
  if (o) {
    let x = 4;
    u && (x += 8), w && (x += 8), Y = new Uint8Array(x);
    const N = $(Y);
    if (F(N, 0, 1), F(N, 2, T(Y) - 4), R) {
      const b = $(Y);
      let z = 4;
      u && (tA(b, z, BigInt(d)), z += 8), w && S && (tA(b, z, BigInt(d)), z += 8), z == 4 && (Y = new Uint8Array());
    }
  } else
    Y = new Uint8Array();
  let G;
  if (f && !g) {
    G = new Uint8Array(T(gt) + 2);
    const x = $(G);
    F(x, 0, 39169), K(G, gt, 2), LA(x, 8, B);
  } else
    G = new Uint8Array();
  let y, h, k;
  if (I) {
    h = new Uint8Array(9 + (t ? 4 : 0) + (s ? 4 : 0));
    const x = $(h);
    F(x, 0, 21589), F(x, 2, T(h) - 4), k = 1 + (t ? 2 : 0) + (s ? 4 : 0), LA(x, 4, k);
    let N = 5;
    v(x, N, Math.floor(n.getTime() / 1e3)), N += 4, t && (v(x, N, Math.floor(t.getTime() / 1e3)), N += 4), s && v(x, N, Math.floor(s.getTime() / 1e3));
    try {
      y = new Uint8Array(36);
      const b = $(y), z = pe(n);
      F(b, 0, 10), F(b, 2, 32), F(b, 8, 1), F(b, 10, 24), tA(b, 12, z), tA(b, 20, pe(t) || z), tA(b, 28, pe(s) || z);
    } catch {
      y = new Uint8Array();
    }
  } else
    y = h = new Uint8Array();
  let _;
  try {
    const { uid: x, gid: N, unixMode: b, setuid: z, setgid: sA, sticky: dA, unixExtraFieldType: Q } = e;
    if (Q && (x !== C || N !== C || b !== C)) {
      const W = at(x), EA = at(N);
      let rA = new Uint8Array();
      if (Q == Rn && b !== C) {
        let cA = b & 65535;
        z && (cA |= 2048), sA && (cA |= 1024), dA && (cA |= 512), rA = new Uint8Array(2), new DataView(rA.buffer).setUint16(0, cA, !0);
      }
      const Z = 3 + W.length + EA.length + rA.length;
      _ = new Uint8Array(4 + Z);
      const oA = $(_);
      F(oA, 0, Q == Fn ? 30837 : 30805), F(oA, 2, Z), LA(oA, 4, 1), LA(oA, 5, W.length);
      let V = 6;
      K(_, W, V), V += W.length, LA(oA, V, EA.length), V++, K(_, EA, V), V += EA.length, K(_, rA, V);
    } else
      _ = new Uint8Array();
  } catch {
    _ = new Uint8Array();
  }
  p === C && (p = U ? 8 : 0), o && (m = m > 45 ? m : 45), f && !g && (m = m > 51 ? m : 51, G[9] = p, p = 99);
  const O = R ? T(Y) : 0, L = O + T(G, h, y, _, c), {
    headerArray: j,
    headerView: AA,
    rawLastModDate: eA
  } = yn({
    version: m,
    bitFlag: Mn(i, r, a, f, p),
    compressionMethod: p,
    uncompressedSize: d,
    lastModDate: n < Ue ? Ue : n > Ne ? Ne : n,
    rawFilename: A,
    zip64CompressedSize: w,
    zip64UncompressedSize: u,
    extraFieldLength: L
  });
  let M = 30;
  const H = new Uint8Array(M + T(A) + L), X = $(H);
  return v(X, 0, 67324752), K(H, j, 4), K(H, A, M), M += T(A), R && K(H, Y, M), M += O, K(H, G, M), M += T(G), K(H, h, M), M += T(h), K(H, y, M), M += T(y), K(H, _, M), M += T(_), K(H, c, M), a && (v(X, 18, 0), v(X, 22, 0)), {
    localHeaderArray: H,
    localHeaderView: X,
    headerArray: j,
    headerView: AA,
    lastModDate: n,
    rawLastModDate: eA,
    encrypted: f,
    compressed: U,
    version: m,
    compressionMethod: p,
    extraFieldExtendedTimestampFlag: k,
    rawExtraFieldZip64: new Uint8Array(),
    localExtraFieldZip64Length: O,
    rawExtraFieldExtendedTimestamp: h,
    rawExtraFieldNTFS: y,
    rawExtraFieldUnix: _,
    rawExtraFieldAES: G,
    extraFieldLength: L
  };
}
function ei(e, A) {
  const { headerInfo: n } = e;
  let { localHeaderArray: t, extraFieldLength: s } = n, i = $(t), o = 64 - (A + T(t)) % 64;
  o < 4 && (o += 64);
  const g = new Uint8Array(o), r = $(g);
  F(r, 0, 6534), F(r, 2, o - 2);
  const a = t;
  n.localHeaderArray = t = new Uint8Array(T(a) + o), K(t, a), K(t, g, T(a)), i = $(t), F(i, 28, s + o), e.metadataSize += o;
}
function at(e) {
  if (e === C)
    return new Uint8Array();
  {
    const A = new Uint8Array(4);
    $(A).setUint32(0, e, !0);
    let t = 4;
    for (; t > 1 && A[t - 1] === 0; )
      t--;
    return A.subarray(0, t);
  }
}
function ti(e, A) {
  if (e !== C)
    e = e & 255;
  else if (A !== C) {
    const { readOnly: n, hidden: t, system: s, directory: i, archive: o } = A;
    let g = 0;
    n && (g |= 1), t && (g |= 2), s && (g |= 4), i && (g |= 16), o && (g |= 32), e = g & 255;
  }
  return A === C && (A = {
    readOnly: !!(e & 1),
    hidden: !!(e & 2),
    system: !!(e & 4),
    directory: !!(e & 16),
    archive: !!(e & 32)
  }), { msdosAttributesRaw: e, msdosAttributes: A };
}
function ni({
  zip64: e,
  dataDescriptor: A,
  dataDescriptorSignature: n
}) {
  let t = new Uint8Array(), s, i = 0, o = e ? 20 : 12;
  return n && (o += 4), A && (t = new Uint8Array(o), s = $(t), n && (i = 4, v(s, 0, 134695760))), {
    dataDescriptorArray: t,
    dataDescriptorView: s,
    dataDescriptorOffset: i
  };
}
function si({
  signature: e,
  compressedSize: A,
  uncompressedSize: n,
  headerInfo: t,
  dataDescriptorInfo: s
}, {
  zip64: i,
  zipCrypto: o,
  dataDescriptor: g
}) {
  const {
    headerView: r,
    encrypted: a
  } = t, {
    dataDescriptorView: E,
    dataDescriptorOffset: c
  } = s;
  (!a || o) && e !== C && (v(r, 10, e), g && v(E, c, e)), i ? g && (tA(E, c + 4, BigInt(A)), tA(E, c + 12, BigInt(n))) : (v(r, 14, A), v(r, 18, n), g && (v(E, c + 4, A), v(E, c + 8, n)));
}
function oi({
  rawFilename: e,
  encrypted: A,
  zip64: n,
  localExtraFieldZip64Length: t,
  signature: s,
  compressedSize: i,
  uncompressedSize: o,
  zip64UncompressedSize: g,
  zip64CompressedSize: r
}, a, { dataDescriptor: E }) {
  if (E || (A || v(a, 14, s), r || v(a, 18, i), g || v(a, 22, o)), n && t) {
    let c = 30 + T(e) + 4;
    g && (tA(a, c, BigInt(o)), c += 8), r && (tA(a, c, BigInt(i)), c += 8);
  }
}
async function ii(e, A, n) {
  const { files: t, writer: s } = e, { diskOffset: i } = s;
  let { diskNumber: o } = s, g = 0, r = 0, a = e.offset - i, E = t.size;
  for (const [, p] of t) {
    const {
      rawFilename: U,
      rawExtraFieldAES: Y,
      rawComment: S,
      rawExtraFieldNTFS: R,
      rawExtraFieldUnix: G,
      rawExtraField: y,
      extendedTimestamp: h,
      extraFieldExtendedTimestampFlag: k,
      lastModDate: _,
      zip64UncompressedSize: O,
      zip64CompressedSize: L,
      uncompressedSize: j,
      compressedSize: AA
    } = p, eA = p.offset > 4294967295, M = p.diskNumberStart > 65535;
    let H;
    if (eA || M || O || L) {
      let x = 4;
      O && (x += 8), L && (x += 8), eA && (x += 8), M && (x += 4), H = new Uint8Array(x);
      const N = $(H);
      F(N, 0, 1), F(N, 2, x - 4);
      let b = 4;
      O && (tA(N, b, BigInt(j)), b += 8), L && (tA(N, b, BigInt(AA)), b += 8), eA && (tA(N, b, BigInt(p.offset)), b += 8), M && v(N, b, p.diskNumberStart);
    } else
      H = new Uint8Array();
    p.rawExtraFieldZip64 = H, p.zip64Offset = eA, p.zip64DiskNumberStart = M;
    let X;
    if (h) {
      X = new Uint8Array(9);
      const x = $(X);
      F(x, 0, 21589), F(x, 2, 5), LA(x, 4, k), v(x, 5, Math.floor(_.getTime() / 1e3));
    } else
      X = new Uint8Array();
    p.rawExtraFieldExtendedTimestamp = X, r += 46 + T(
      U,
      S,
      H,
      Y,
      R,
      G,
      X,
      y
    );
  }
  const c = new Uint8Array(r), B = $(c);
  await yA(s);
  let I = 0;
  for (const [p, U] of Array.from(t.values()).entries()) {
    const {
      offset: Y,
      rawFilename: S,
      rawExtraFieldZip64: R,
      rawExtraFieldAES: G,
      rawExtraFieldExtendedTimestamp: y,
      rawExtraFieldNTFS: h,
      rawExtraFieldUnix: k,
      rawExtraField: _,
      rawComment: O,
      versionMadeBy: L,
      headerArray: j,
      headerView: AA,
      zip64UncompressedSize: eA,
      zip64CompressedSize: M,
      zip64DiskNumberStart: H,
      zip64Offset: X,
      internalFileAttributes: x,
      externalFileAttributes: N,
      diskNumberStart: b,
      uncompressedSize: z,
      compressedSize: sA
    } = U, dA = T(R, G, y, h, k, _);
    v(B, g, 33639248), F(B, g + 4, L), eA || v(AA, 18, z), M || v(AA, 14, sA), K(c, j, g + 6);
    let Q = g + 30;
    if (F(B, Q, dA), Q += 2, F(B, Q, T(O)), Q += 2, F(B, Q, H ? 65535 : b), Q += 2, F(B, Q, x), Q += 2, N && v(B, Q, N), Q += 4, v(B, Q, X ? 4294967295 : Y), Q += 4, K(c, S, Q), Q += T(S), K(c, R, Q), Q += T(R), K(c, G, Q), Q += T(G), K(c, y, Q), Q += T(y), K(c, h, Q), Q += T(h), K(c, k, Q), Q += T(k), K(c, _, Q), Q += T(_), K(c, O, Q), Q += T(O), g - I > s.availableSize && (s.availableSize = 0, await _A(s, c.slice(I, g)), I = g), g = Q, n.onprogress)
      try {
        await n.onprogress(p + 1, t.size, new Ee(U));
      } catch {
      }
  }
  await _A(s, I ? c.slice(I) : c);
  let l = s.diskNumber;
  const { availableSize: f } = s;
  f < 22 && l++;
  let u = D(e, n, Ge);
  if (a > 4294967295 || r > 4294967295 || E > 65535 || l > 65535) {
    if (u === !1)
      throw new Error(Tn);
    u = !0;
  }
  const w = new Uint8Array(u ? 98 : 22), d = $(w);
  g = 0, u && (v(d, 0, 101075792), tA(d, 4, BigInt(44)), F(d, 12, 45), F(d, 14, 45), v(d, 16, l), v(d, 20, o), tA(d, 24, BigInt(E)), tA(d, 32, BigInt(E)), tA(d, 40, BigInt(r)), tA(d, 48, BigInt(a)), v(d, 56, 117853008), tA(d, 64, BigInt(a) + BigInt(r)), v(d, 72, l + 1), D(e, n, Eo, !0) && (l = 65535, o = 65535), E = 65535, a = 4294967295, r = 4294967295, g += 76), v(d, g, 101010256), F(d, g + 4, l), F(d, g + 6, o), F(d, g + 8, E), F(d, g + 10, E), v(d, g + 12, r), v(d, g + 16, a);
  const m = T(A);
  if (m)
    if (m <= 65535)
      F(d, g + 20, m);
    else
      throw new Error(Go);
  await _A(s, w), m && await _A(s, A);
}
async function _A(e, A) {
  const { writable: n } = e, t = n.getWriter();
  try {
    await t.ready, e.size += T(A), await t.write(A);
  } finally {
    t.releaseLock();
  }
}
function pe(e) {
  if (e)
    return (BigInt(e.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
}
function D(e, A, n, t) {
  const s = A[n] === C ? e.options[n] : A[n];
  return s === C ? t : s;
}
function ct(e) {
  return e + 5 * (Math.floor(e / 16383) + 1);
}
function LA(e, A, n) {
  e.setUint8(A, n);
}
function F(e, A, n) {
  e.setUint16(A, n, !0);
}
function v(e, A, n) {
  e.setUint32(A, n, !0);
}
function tA(e, A, n) {
  e.setBigUint64(A, n, !0);
}
function K(e, A, n) {
  e.set(A, n);
}
function $(e) {
  return new DataView(e.buffer);
}
function T(...e) {
  let A = 0;
  return e.forEach((n) => n && (A += n.length)), A;
}
function yn({
  version: e,
  bitFlag: A,
  compressionMethod: n,
  uncompressedSize: t,
  compressedSize: s,
  lastModDate: i,
  rawFilename: o,
  zip64CompressedSize: g,
  zip64UncompressedSize: r,
  extraFieldLength: a
}) {
  const E = new Uint8Array(26), c = $(E);
  F(c, 0, e), F(c, 2, A), F(c, 4, n);
  const B = new Uint32Array(1), I = $(B);
  F(I, 0, (i.getHours() << 6 | i.getMinutes()) << 5 | i.getSeconds() / 2), F(I, 2, (i.getFullYear() - 1980 << 4 | i.getMonth() + 1) << 5 | i.getDate());
  const l = B[0];
  return v(c, 6, l), (g || s !== C) && v(c, 14, g ? 4294967295 : s), (r || t !== C) && v(c, 18, r ? 4294967295 : t), F(c, 22, T(o)), F(c, 24, a), {
    headerArray: E,
    headerView: c,
    rawLastModDate: l
  };
}
function Mn(e, A, n, t, s) {
  let i = 0;
  return A && (i = i | 2048), n && (i = i | 8), (s == 8 || s == 9) && (e >= 0 && e <= 3 && (i = i | 6), e > 3 && e <= 5 && (i = i | 4), e == 9 && (i = i | 2)), t && (i = i | 1), i;
}
try {
  Be({ baseURI: import.meta.url });
} catch {
}
const lA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function gi(e) {
  let A;
  e({ wasmURI: () => (A || (A = "data:application/wasm;base64," + ((n) => {
    n = ((o) => {
      const g = (o = (o + "").replace(/[^A-Za-z0-9+/=]/g, "")).length, r = [];
      for (let a = 0; g > a; a += 4) {
        const E = lA.indexOf(o[a]) << 18 | lA.indexOf(o[a + 1]) << 12 | (63 & lA.indexOf(o[a + 2])) << 6 | 63 & lA.indexOf(o[a + 3]);
        r.push(E >> 16 & 255), o[a + 2] !== "=" && r.push(E >> 8 & 255), o[a + 3] !== "=" && r.push(255 & E);
      }
      return new Uint8Array(r);
    })(n);
    let t = new Uint8Array(1024), s = 0;
    for (let o = 0; o < n.length; ) {
      const g = n[o++];
      if (128 & g) {
        const r = 3 + (127 & g), a = n[o++] << 8 | n[o++], E = s - a;
        i(s + r);
        for (let c = 0; r > c; c++) t[s++] = t[E + c];
      } else {
        const r = g;
        i(s + r);
        for (let a = 0; r > a && o < n.length; a++) t[s++] = n[o++];
      }
    }
    return ((o) => {
      let g = "";
      const r = o.length;
      let a = 0;
      for (; r > a + 2; a += 3) {
        const c = o[a] << 16 | o[a + 1] << 8 | o[a + 2];
        g += lA[c >> 18 & 63] + lA[c >> 12 & 63] + lA[c >> 6 & 63] + lA[63 & c];
      }
      const E = r - a;
      if (E === 1) {
        const c = o[a] << 16;
        g += lA[c >> 18 & 63] + lA[c >> 12 & 63] + "==";
      } else if (E === 2) {
        const c = o[a] << 16 | o[a + 1] << 8;
        g += lA[c >> 18 & 63] + lA[c >> 12 & 63] + lA[c >> 6 & 63] + "=";
      }
      return g;
    })(new Uint8Array(t.buffer.slice(0, s)));
    function i(o) {
      if (t.length < o) {
        let g = 2 * t.length;
        for (; o > g; ) g *= 2;
        const r = new Uint8Array(g);
        r.set(t.subarray(0, s)), t = r;
      }
    }
  })("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BAGZgAAEAVmAAAQB2YAABAE5gAAEAbmAAAQBeYAABAH5gAAEAQWAAAQBhYAABAFFgAAEAcWAAAQBJYAABAGlgAAEAWWAAAQB5YAABAEVgAAEAZWAAAQBVYAABAHVgAAEATWAAAQBtYAABAF1gAAEAfWAAAQBDYAABAGNgAAEAU2AAAQBzYAABIARMwIArYAABAFtgAAEAe2AAAQBHYAABAGdgAAEAV2AAAQB3YAABAE9gAAEAb2AAAQBfYAABAH9gAAEAROAAMIFEwEJAJOAAAgBk4AACAFTgAAIAVOAAAgB04AACAHTgAAIATOAAAgBM4AACAGzgAAIAbOAAAgBc4AACAFzgAAIAfOAAAgB84AACAELgAAIgBDagAQCgAAEgAAIAUuAAAgBS4AACAHLgAAIAcuAAAgBK4AACAErgAAIAauAAAgBq4AACAFrgAAIAWuAAAgB64AACAHrgAAIARuAAAgBG4AACAGbgAAIAZuAAAgBW4AACAFbgAAIAduAAAgB24AACAE7gAAIATuAAAgBu4AACAG7gAAIAXuAAAgBe4AACAH7gAAIAfuAAAiBA7YBB4AACAGHgAAIAYeAAAgBR4AACAFHgAAIAceAAAgBx4AACAEngAAIASeAAAgBp4AACAGngAAIAWeAAAgBZ4AACAHngAAIAeeAAAgBF4AACAEXgAAIAZeAAAgBl4AACAFXgAAIAVeAAAgB14AACAHXgAAIATeAAAgBN4AACAG3gAAIAbeAAAgBd4AACAF3gAAIAfeAAAgB94AACAEPgAAIAQ+AAAgBj4AACAGPgAAIAU+AAAgBT4AACAHPgAAIAc+AAAgBL4AACAEvgAAIAa+AAAgBr4AACAFvgAAIAW+AAAgB74AACAHvgAAIAR+AAAgBH4AACAGfgAAIAZ+AAAgBX4AACAFfgAAIAd+AAAgB34AACAE/gAAIAT+AAAgBv4AACAG/gAAIAX+AAAgBf4AACAH/gAAIAf+AAAiBBAoBQIAABAEggAAEAWCAAAQBEIAABAFQgAAEATCAAAQBcIIFVgMHAEiAAAQBKIAABAFogAAEARiAAAQBWIAABAE4gAAEAXiAAAQBBIAABAFEgAAEASSAAAQBZIAABAEUgAAEAVSAAAQBNIAABAF0gAAEAQOAAEIBg4AABAFDgAAEAcOAAAQBI4AABAGjgAAEAWOAAAQB44AABIC+K4AAdIECxgEFgABcAQWCBUoBFIAABAEMgAAEARyAAASAvlaABEQBBYIGBAEaggXqAQWAA9QBBYADuAEFgAOcgE92gAAEARGAAAQBCYAABAEZgAAEgQACARWAAAQBDYAABAEdgAAEgL59gAKkgQZAAQWAAiyBBaYBBYABtAEFgD3fAxsLTYMfuYcABIC+rooABIEHUYkABAEEjAAEAQWKAAQEQbAcC4C9CosAS40AO4UALwEGhAAEgQWIgQAEgQEKgQAEgQGSgQAEgIS2ggAEAQuEAAQBDIQABIAF24FHeQTgHQsjhQBfhQXLAhARgAVtBgcJBgoFC4A6uAQNAg4BgAclBJQeC2mFAJCFAIiFAICFAHiBAGiBAFyBBh8BEIAABAEUgAAEARiAAAQBHIAABAEggAAEASiAAAQBMIAABAE4gAAEAUCAAAQBUIAABIEGvQFwgAAEAYCAAAQBoIAABAHAgAAEAeCAAG8DHwtyjQBvgQBrgQBngQBjgQBfgQBbgQBXgQBTgQBPgQBLgQBHgQBDgQE8AYCvAEGAUc0CC22BAMcBBIAAAgEIgAAEgQEzgQJLARCAAA6DAAyBnqyAqmuEACSBB3OBAE8BCIAACIEAGIUADIEIt4MADAEggQCUgDKEgQBrAYCBCC8BBIMADIA/SAoBABAMAEGRIQv/gCUfgMDAgIKxBQgJCQoKgEk3gAABAQ2AAAEBDoAAAQEPgAABARCEAAEBEYQAAQEShAABAROEAAEBFIwAAQEVjAABARaMAAEBF4wAAQEYnAABARmcAAEBGpwAAQEbmwABARyBffsEBAQFBYHB1QEHgAABAQiEAAGAXSqCAAEBCowAAYAnsooAAYEBMJkAAYEBTJkAAYEBaLkAAYEBpLkAAYIDdYABzoUBvI0BqJ0BkLwBgAIbHLwAAQEdvAABgA9PgH05A9AqAQ==")), A) });
}
let q, KA, IA, qA;
function ri(e) {
  if (q = e, { malloc: KA, free: IA, memory: qA } = q, typeof KA != "function" || typeof IA != "function" || !qA)
    throw q = KA = IA = qA = null, new Error("Invalid WASM module");
}
function Yn(e, A, n = {}) {
  const t = typeof n.level == "number" ? n.level : -1, s = typeof n.outBuffer == "number" ? n.outBuffer : 64 * 1024, i = typeof n.inBufferSize == "number" ? n.inBufferSize : 64 * 1024;
  return new TransformStream({
    start() {
      let o;
      if (this.out = KA(s), this.in = KA(i), this.inBufferSize = i, this._scratch = new Uint8Array(s), e ? (this._process = q.deflate_process, this._last_consumed = q.deflate_last_consumed, this._end = q.deflate_end, this.streamHandle = q.deflate_new(), A === "gzip" ? o = q.deflate_init_gzip(this.streamHandle, t) : A === "deflate-raw" ? o = q.deflate_init_raw(this.streamHandle, t) : o = q.deflate_init(this.streamHandle, t)) : A === "deflate64-raw" ? (this._process = q.inflate9_process, this._last_consumed = q.inflate9_last_consumed, this._end = q.inflate9_end, this.streamHandle = q.inflate9_new(), o = q.inflate9_init_raw(this.streamHandle)) : (this._process = q.inflate_process, this._last_consumed = q.inflate_last_consumed, this._end = q.inflate_end, this.streamHandle = q.inflate_new(), A === "deflate-raw" ? o = q.inflate_init_raw(this.streamHandle) : A === "gzip" ? o = q.inflate_init_gzip(this.streamHandle) : o = q.inflate_init(this.streamHandle)), o !== 0)
        throw new Error("init failed:" + o);
    },
    transform(o, g) {
      try {
        const r = o, a = new Uint8Array(qA.buffer), E = this._process, c = this._last_consumed, B = this.out, I = this._scratch;
        let l = 0;
        for (; l < r.length; ) {
          const f = Math.min(r.length - l, 32768);
          (!this.in || this.inBufferSize < f) && (this.in && IA && IA(this.in), this.in = KA(f), this.inBufferSize = f), a.set(r.subarray(l, l + f), this.in);
          const u = E(this.streamHandle, this.in, f, B, s, 0), w = u & 16777215;
          if (w && (I.set(a.subarray(B, B + w), 0), g.enqueue(I.slice(0, w))), !e) {
            const m = u >> 24 & 255, p = m & 128 ? m - 256 : m;
            if (p < 0)
              throw new Error("process error:" + p);
          }
          const d = c(this.streamHandle);
          if (d === 0)
            break;
          l += d;
        }
      } catch (r) {
        this._end && this.streamHandle && this._end(this.streamHandle), this.in && IA && IA(this.in), this.out && IA && IA(this.out), g.error(r);
      }
    },
    flush(o) {
      try {
        const g = new Uint8Array(qA.buffer), r = this._process, a = this.out, E = this._scratch;
        for (; ; ) {
          const c = r(this.streamHandle, 0, 0, a, s, 4), B = c & 16777215, I = c >> 24 & 255;
          if (!e) {
            const l = I & 128 ? I - 256 : I;
            if (l < 0)
              throw new Error("process error:" + l);
          }
          if (B && (E.set(g.subarray(a, a + B), 0), o.enqueue(E.slice(0, B))), I === 1 || B === 0)
            break;
        }
      } catch (g) {
        o.error(g);
      } finally {
        if (this._end && this.streamHandle) {
          const g = this._end(this.streamHandle);
          g !== 0 && o.error(new Error("end error:" + g));
        }
        this.in && IA && IA(this.in), this.out && IA && IA(this.out);
      }
    }
  });
}
class ai {
  constructor(A = "deflate", n) {
    return Yn(!0, A, n);
  }
}
class ci {
  constructor(A = "deflate", n) {
    return Yn(!1, A, n);
  }
}
let Et = !1;
async function Ei(e, { baseURI: A }) {
  if (!Et) {
    let n, t;
    try {
      try {
        t = new URL(e, A);
      } catch {
      }
      n = await (await fetch(t)).arrayBuffer();
    } catch (i) {
      if (e.startsWith("data:application/wasm;base64,"))
        n = Bi(e);
      else
        throw i;
    }
    const s = await WebAssembly.instantiate(n);
    ri(s.instance.exports), Et = !0;
  }
}
function Bi(e) {
  const A = e.split(",")[1], n = atob(A), t = n.length, s = new Uint8Array(t);
  for (let i = 0; i < t; ++i)
    s[i] = n.charCodeAt(i);
  return s.buffer;
}
let we;
gi(Be);
ms({
  initModule: (e) => {
    if (!we) {
      let { wasmURI: A } = e;
      typeof A == MA && (A = A()), we = Ei(A, e);
    }
    return we;
  }
});
Be({
  CompressionStreamZlib: ai,
  DecompressionStreamZlib: ci
});
const Qe = {
  application: {
    "andrew-inset": "ez",
    annodex: "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    bbolin: "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    dsptype: "tsp",
    ecmascript: [
      "es",
      "ecma"
    ],
    futuresplash: "spl",
    hta: "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    m3g: "m3g",
    "mac-binhex40": "hqx",
    mathematica: [
      "nb",
      "ma",
      "mb"
    ],
    msaccess: "mdb",
    msword: [
      "doc",
      "dot",
      "wiz"
    ],
    mxf: "mxf",
    oda: "oda",
    ogg: "ogx",
    pdf: "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    postscript: [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    rar: "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    rtf: "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    xml: [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    zip: "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    applixware: "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    exi: "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    gxf: "gxf",
    hyperstudio: "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    ipfix: "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    marc: "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    mbox: "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    mp21: [
      "m21",
      "mp21"
    ],
    mp4: "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    onenote: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    oxps: "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    pkcs10: "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    pkcs8: "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    pkixcmp: "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    sdp: "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    srgs: "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    widget: "wgt",
    winhlp: "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    yang: "yang",
    "yin+xml": "yin",
    envoy: "evy",
    fractals: "fif",
    "internet-property-stream": "acx",
    olescript: "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    gzip: [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    yaml: [
      "yaml",
      "yml"
    ]
  },
  audio: {
    amr: "amr",
    "amr-wb": "awb",
    annodex: "axa",
    basic: [
      "au",
      "snd"
    ],
    flac: "flac",
    midi: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    mpeg: [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    mpegurl: "m3u",
    ogg: [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    adpcm: "adp",
    mp4: "mp4a",
    s3m: "s3m",
    silk: "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    webm: "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    aac: "aac",
    aiff: [
      "aiff",
      "aif",
      "aff"
    ],
    opus: "opus",
    wav: "wav"
  },
  chemical: {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  font: {
    otf: "otf",
    woff: "woff",
    woff2: "woff2"
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    pcx: "pcx",
    png: "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    tiff: [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    bmp: "bmp",
    cgm: "cgm",
    g3fax: "g3",
    ktx: "ktx",
    "prs.btif": "btif",
    sgi: "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    webp: "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    avif: "avifs",
    heic: [
      "heif",
      "heic"
    ],
    pjpeg: [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  message: {
    rfc822: [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  model: {
    iges: [
      "igs",
      "iges"
    ],
    mesh: [
      "msh",
      "mesh",
      "silo"
    ],
    vrml: [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  text: {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    calendar: [
      "ics",
      "icz",
      "ifb"
    ],
    css: "css",
    csv: "csv",
    h323: "323",
    html: [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    iuls: "uls",
    plain: [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    richtext: "rtx",
    scriptlet: [
      "sct",
      "wsc"
    ],
    texmacs: "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    n3: "n3",
    "prs.lines.tag": "dsc",
    sgml: [
      "sgml",
      "sgm"
    ],
    troff: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    turtle: "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    vcard: "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    webviewhtml: "htt",
    javascript: "js",
    json: "json",
    markdown: [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  video: {
    avif: "avif",
    "3gpp": "3gp",
    annodex: "axv",
    dl: "dl",
    dv: [
      "dif",
      "dv"
    ],
    fli: "fli",
    gl: "gl",
    mpeg: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    mp4: [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    quicktime: [
      "qt",
      "mov"
    ],
    ogg: "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: [
      "jpm",
      "jpgm"
    ],
    mj2: [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    mp2t: "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
(() => {
  const e = {};
  for (const A of Object.keys(Qe))
    for (const n of Object.keys(Qe[A])) {
      const t = Qe[A][n];
      if (typeof t == "string")
        e[t] = A + "/" + n;
      else
        for (let s = 0; s < t.length; s++)
          e[t[s]] = A + "/" + n;
    }
  return e;
})();
Hn(Be);
export {
  Ht as BlobReader,
  li as BlobWriter,
  me as ERR_BAD_FORMAT,
  Co as ERR_CENTRAL_DIRECTORY_NOT_FOUND,
  bo as ERR_DUPLICATED_NAME,
  ho as ERR_ENCRYPTED,
  fo as ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND,
  Io as ERR_EOCDR_NOT_FOUND,
  uo as ERR_EXTRAFIELD_ZIP64_NOT_FOUND,
  Go as ERR_INVALID_COMMENT,
  Lo as ERR_INVALID_ENCRYPTION_STRENGTH,
  No as ERR_INVALID_ENTRY_COMMENT,
  Uo as ERR_INVALID_ENTRY_NAME,
  ko as ERR_INVALID_EXTRAFIELD_DATA,
  Ho as ERR_INVALID_EXTRAFIELD_TYPE,
  pt as ERR_INVALID_PASSWORD,
  wt as ERR_INVALID_SIGNATURE,
  Mt as ERR_INVALID_UNCOMPRESSED_SIZE,
  it as ERR_INVALID_VERSION,
  mo as ERR_LOCAL_FILE_HEADER_NOT_FOUND,
  wo as ERR_OVERLAPPING_ENTRY,
  At as ERR_SPLIT_ZIP_FILE,
  Ko as ERR_UNDEFINED_UNCOMPRESSED_SIZE,
  $e as ERR_UNSUPPORTED_COMPRESSION,
  po as ERR_UNSUPPORTED_ENCRYPTION,
  Tn as ERR_UNSUPPORTED_FORMAT,
  Po as ERR_ZIP_NOT_EMPTY,
  ye as Reader,
  Rs as SplitDataReader,
  Ve as SplitDataWriter,
  Ii as TextReader,
  di as Uint8ArrayReader,
  So as ZipReader,
  fi as ZipWriter,
  Be as configure
};
