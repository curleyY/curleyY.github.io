(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,322295,415810,979846,695018,882580,816256,110250,e=>{"use strict";var t,r,a,n=e.i(262504),o=e.i(27357);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=/^\s+/,s=/\s+$/;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var r,a,n,o,c,h,g,u,f,p,m,b,y,k,v,w,x,$,_,A,M=(a={r:0,g:0,b:0},n=1,o=null,c=null,h=null,g=!1,u=!1,"string"==typeof(r=e)&&(r=function(e){e=e.replace(l,"").replace(s,"").toLowerCase();var t,r=!1;if(S[e])e=S[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=R.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=R.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=R.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=R.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=R.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=R.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=R.hex8.exec(e))?{r:L(t[1]),g:L(t[2]),b:L(t[3]),a:L(t[4])/255,format:r?"name":"hex8"}:(t=R.hex6.exec(e))?{r:L(t[1]),g:L(t[2]),b:L(t[3]),format:r?"name":"hex"}:(t=R.hex4.exec(e))?{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),a:L(t[4]+""+t[4])/255,format:r?"name":"hex8"}:!!(t=R.hex3.exec(e))&&{r:L(t[1]+""+t[1]),g:L(t[2]+""+t[2]),b:L(t[3]+""+t[3]),format:r?"name":"hex"}}(r)),"object"==i(r)&&(T(r.r)&&T(r.g)&&T(r.b)?(f=r.r,p=r.g,m=r.b,a={r:255*E(f,255),g:255*E(p,255),b:255*E(m,255)},g=!0,u="%"===String(r.r).substr(-1)?"prgb":"rgb"):T(r.h)&&T(r.s)&&T(r.v)?(o=H(r.s),c=H(r.v),b=r.h,y=o,k=c,b=6*E(b,360),y=E(y,100),k=E(k,100),v=Math.floor(b),w=b-v,x=k*(1-y),$=k*(1-w*y),_=k*(1-(1-w)*y),a={r:255*[k,$,x,x,_,k][A=v%6],g:255*[_,k,k,$,x,x][A],b:255*[x,x,_,k,k,$][A]},g=!0,u="hsv"):T(r.h)&&T(r.s)&&T(r.l)&&(o=H(r.s),h=H(r.l),a=function(e,t,r){var a,n,o;function i(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=E(e,360),t=E(t,100),r=E(r,100),0===t)a=n=o=r;else{var l=r<.5?r*(1+t):r+t-r*t,s=2*r-l;a=i(s,l,e+1/3),n=i(s,l,e),o=i(s,l,e-1/3)}return{r:255*a,g:255*n,b:255*o}}(r.h,o,h),g=!0,u="hsl"),r.hasOwnProperty("a")&&(n=r.a)),n=C(n),{ok:g,format:r.format||u,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:n});this._originalInput=e,this._r=M.r,this._g=M.g,this._b=M.b,this._a=M.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||M.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=M.ok}function c(e,t,r){e=E(e,255);var a,n,o=Math.max(e,t=E(t,255),r=E(r,255)),i=Math.min(e,t,r),l=(o+i)/2;if(o==i)a=n=0;else{var s=o-i;switch(n=l>.5?s/(2-o-i):s/(o+i),o){case e:a=(t-r)/s+6*(t<r);break;case t:a=(r-e)/s+2;break;case r:a=(e-t)/s+4}a/=6}return{h:a,s:n,l:l}}function h(e,t,r){e=E(e,255);var a,n=Math.max(e,t=E(t,255),r=E(r,255)),o=Math.min(e,t,r),i=n-o;if(n==o)a=0;else{switch(n){case e:a=(t-r)/i+6*(t<r);break;case t:a=(r-e)/i+2;break;case r:a=(e-t)/i+4}a/=6}return{h:a,s:0===n?0:i/n,v:n}}function g(e,t,r,a){var n=[F(Math.round(e).toString(16)),F(Math.round(t).toString(16)),F(Math.round(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function u(e,t,r,a){return[F(N(a)),F(Math.round(e).toString(16)),F(Math.round(t).toString(16)),F(Math.round(r).toString(16))].join("")}function f(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s-=t/100,r.s=z(r.s),d(r)}function p(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s+=t/100,r.s=z(r.s),d(r)}function m(e){return d(e).desaturate(100)}function b(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l+=t/100,r.l=z(r.l),d(r)}function y(e,t){t=0===t?0:t||10;var r=d(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-(t/100*255)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-(t/100*255)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-(t/100*255)))),d(r)}function k(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l-=t/100,r.l=z(r.l),d(r)}function v(e,t){var r=d(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,d(r)}function w(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function x(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var r=d(e).toHsl(),a=[d(e)],n=360/t,o=1;o<t;o++)a.push(d({h:(r.h+o*n)%360,s:r.s,l:r.l}));return a}function $(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+72)%360,s:t.s,l:t.l}),d({h:(r+216)%360,s:t.s,l:t.l})]}function _(e,t,r){t=t||6,r=r||30;var a=d(e).toHsl(),n=360/r,o=[d(e)];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,o.push(d(a));return o}function A(e,t){t=t||6;for(var r=d(e).toHsv(),a=r.h,n=r.s,o=r.v,i=[],l=1/t;t--;)i.push(d({h:a,s:n,v:o})),o=(o+l)%1;return i}d.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,a=this.toRgb();return e=a.r/255,t=a.g/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r=a.b/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=C(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=h(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return g(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,r,a,n,o,i;return t=this._r,r=this._g,a=this._b,n=this._a,o=e,i=[F(Math.round(t).toString(16)),F(Math.round(r).toString(16)),F(Math.round(a).toString(16)),F(N(n))],o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*E(this._r,255))+"%",g:Math.round(100*E(this._g,255))+"%",b:Math.round(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%)":"rgba("+Math.round(100*E(this._r,255))+"%, "+Math.round(100*E(this._g,255))+"%, "+Math.round(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(M[g(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+u(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";if(e){var n=d(e);r="#"+u(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&this._a>=0;return!t&&a&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return d(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(y,arguments)},darken:function(){return this._applyModification(k,arguments)},desaturate:function(){return this._applyModification(f,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(m,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(_,arguments)},complement:function(){return this._applyCombination(w,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination($,arguments)},triad:function(){return this._applyCombination(x,[3])},tetrad:function(){return this._applyCombination(x,[4])}},d.fromRatio=function(e,t){if("object"==i(e)){var r={};for(var a in e)e.hasOwnProperty(a)&&("a"===a?r[a]=e[a]:r[a]=H(e[a]));e=r}return d(e,t)},d.equals=function(e,t){return!!e&&!!t&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},d.mix=function(e,t,r){r=0===r?0:r||50;var a=d(e).toRgb(),n=d(t).toRgb(),o=r/100;return d({r:(n.r-a.r)*o+a.r,g:(n.g-a.g)*o+a.g,b:(n.b-a.b)*o+a.b,a:(n.a-a.a)*o+a.a})},d.readability=function(e,t){var r=d(e),a=d(t);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},d.isReadable=function(e,t,r){var a,n,o,i,l,s=d.readability(e,t);switch(l=!1,(n=((a=(a=r)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),o=(a.size||"small").toLowerCase(),"AA"!==n&&"AAA"!==n&&(n="AA"),"small"!==o&&"large"!==o&&(o="small"),i={level:n,size:o}).level+i.size){case"AAsmall":case"AAAlarge":l=s>=4.5;break;case"AAlarge":l=s>=3;break;case"AAAsmall":l=s>=7}return l},d.mostReadable=function(e,t,r){var a,n,o,i,l=null,s=0;n=(r=r||{}).includeFallbackColors,o=r.level,i=r.size;for(var c=0;c<t.length;c++)(a=d.readability(e,t[c]))>s&&(s=a,l=d(t[c]));return d.isReadable(e,l,{level:o,size:i})||!n?l:(r.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],r))};var S=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},M=d.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(S);function C(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function E(e,t){"string"==typeof(r=e)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(e="100%");var r,a,n="string"==typeof(a=e)&&-1!=a.indexOf("%");return(e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t))?1:e%t/parseFloat(t)}function z(e){return Math.min(1,Math.max(0,e))}function L(e){return parseInt(e,16)}function F(e){return 1==e.length?"0"+e:""+e}function H(e){return e<=1&&(e=100*e+"%"),e}function N(e){return Math.round(255*parseFloat(e)).toString(16)}var R=(r="[\\s|\\(]+("+(t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",{CSS_UNIT:new RegExp(t),rgb:RegExp("rgb"+r),rgba:RegExp("rgba"+a),hsl:RegExp("hsl"+r),hsla:RegExp("hsla"+a),hsv:RegExp("hsv"+r),hsva:RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function T(e){return!!R.CSS_UNIT.exec(e)}let I=e=>{let t=d.readability(e,"#000000")<d.readability(e,"#ffffff");return d.mix(e,t?"#ffffff":"#000000",80).toHexString()},j=e=>{let{bg:t,fg:r,primary:a}=e;return{"base-100":t,"base-200":d(t).darken(5).toHexString(),"base-300":d(t).darken(12).toHexString(),"base-content":r,neutral:d(t).darken(15).desaturate(20).toHexString(),"neutral-content":d(r).lighten(20).desaturate(20).toHexString(),primary:a,secondary:d(a).lighten(20).toHexString(),accent:d(a).analogous()[1].toHexString()}},q=e=>{let{bg:t,fg:r,primary:a}=e;return{"base-100":t,"base-200":d(t).lighten(5).toHexString(),"base-300":d(t).lighten(12).toHexString(),"base-content":r,neutral:d(t).lighten(15).desaturate(20).toHexString(),"neutral-content":d(r).darken(20).desaturate(20).toHexString(),primary:a,secondary:d(a).darken(20).toHexString(),accent:d(a).triad()[1].toHexString()}},P=[{name:"default",label:"Default",colors:{light:j({fg:"#171717",bg:"#ffffff",primary:"#0066cc"}),dark:q({fg:"#e0e0e0",bg:"#222222",primary:"#77bbee"})}},{name:"gray",label:"Gray",colors:{light:j({fg:"#222222",bg:"#e0e0e0",primary:"#4488cc"}),dark:q({fg:"#c6c6c6",bg:"#444444",primary:"#88ccee"})}},{name:"sepia",label:"Sepia",colors:{light:j({fg:"#5b4636",bg:"#f1e8d0",primary:"#008b8b"}),dark:q({fg:"#ffd595",bg:"#342e25",primary:"#48d1cc"})}},{name:"grass",label:"Grass",colors:{light:j({fg:"#232c16",bg:"#d7dbbd",primary:"#177b4d"}),dark:q({fg:"#d8deba",bg:"#333627",primary:"#a6d608"})}},{name:"cherry",label:"Cherry",colors:{light:j({fg:"#4e1609",bg:"#f0d1d5",primary:"#de3838"}),dark:q({fg:"#e5c4c8",bg:"#462f32",primary:"#ff646e"})}},{name:"sky",label:"Sky",colors:{light:j({fg:"#262d48",bg:"#cedef5",primary:"#2d53e5"}),dark:q({fg:"#babee1",bg:"#282e47",primary:"#ff646e"})}},{name:"solarized",label:"Solarized",colors:{light:j({fg:"#586e75",bg:"#fdf6e3",primary:"#268bd2"}),dark:q({fg:"#93a1a1",bg:"#002b36",primary:"#268bd2"})}},{name:"gruvbox",label:"Gruvbox",colors:{light:j({fg:"#3c3836",bg:"#fbf1c7",primary:"#076678"}),dark:q({fg:"#ebdbb2",bg:"#282828",primary:"#83a598"})}},{name:"nord",label:"Nord",colors:{light:j({fg:"#2e3440",bg:"#eceff4",primary:"#5e81ac"}),dark:q({fg:"#d8dee9",bg:"#2e3440",primary:"#88c0d0"})}},{name:"contrast",label:"Contrast",colors:{light:j({fg:"#000000",bg:"#ffffff",primary:"#4488cc"}),dark:q({fg:"#ffffff",bg:"#000000",primary:"#88ccee"})}},{name:"sunset",label:"Sunset",colors:{light:j({fg:"#423126",bg:"#fff7f0",primary:"#fe6b64"}),dark:q({fg:"#f6e1d7",bg:"#3c2b25",primary:"#ff9c94"})}}],D=(e,t,r)=>{let a=Object.entries({"color-scheme":r,"--color-base-100":t["base-100"],"--color-base-200":t["base-200"],"--color-base-300":t["base-300"],"--color-base-content":t["base-content"],"--color-primary":t.primary,"--color-primary-content":I(t.primary),"--color-secondary":t.secondary,"--color-secondary-content":I(t.secondary),"--color-accent":t.accent,"--color-accent-content":I(t.accent),"--color-neutral":t.neutral,"--color-neutral-content":t["neutral-content"],"--color-info":"oklch(72.06% 0.191 231.6)","--color-info-content":"oklch(14.412% 0.0382 231.6)","--color-success":"oklch(64.8% 0.15 160)","--color-success-content":"oklch(12.96% 0.03 160)","--color-warning":"oklch(84.71% 0.199 83.87)","--color-warning-content":"oklch(16.942% 0.0398 83.87)","--color-error":"oklch(71.76% 0.221 22.18)","--color-error-content":"oklch(14.352% 0.0442 22.18)","--radius-selector":"1.9rem","--radius-field":"0.5rem","--radius-box":"1rem","--size-selector":"0.25rem","--size-field":"0.25rem","--border":"1px","--depth":"0","--noise":"0"}).map(e=>{let[t,r]=e;return`  ${t}: ${r};`}).join("\n");return`[data-theme="${e}"] {
${a}
}`};e.s(["e",0,e=>{let t=`${e.name}-light`,r=`${e.name}-dark`,a=[D(t,j(e.colors.light),"light"),D(r,q(e.colors.dark),"dark")].join("\n"),n=`theme-${e.name}-styles`;document.getElementById(n)?.remove();let o=document.createElement("style");return o.id=n,o.textContent=a,document.head.appendChild(o),{light:t,dark:r}},"T",0,q,"n",0,j,"g",0,P],415810);var O=e.i(234721),B=e.i(399458);let W=e=>{let t=e.match(/^epubcfi\((.+)\)$/);return t?t[1]:e};function U(e){try{let t=B.parse(e);return B.fake.toIndex((t.parent??t).shift())}catch{return null}}e.s(["w",0,function(e){if(!e)return()=>!1;let t=W(e),r=null,a=null;try{r=B.collapse(e),a=B.collapse(e,!0)}catch(t){console.warn("Failed to collapse location for matcher",{location:e,error:t})}return n=>{if(!n)return!1;if(n===e||W(n).startsWith(t))return!0;if(null===r||null===a)return!1;try{return B.compare(n,r)>=0&&0>=B.compare(n,a)}catch(t){return console.warn("Failed to compare CFIs",{cfi:n,location:e,error:t}),!1}}},"E",0,function(e,t){if(!t)return null;let r=e.filter(e=>"string"==typeof e&&e.length>0);if(0===r.length)return null;let a=B.collapse(t),n=0,o=r.length;for(;n<o;){let e=n+o>>>1;0>=B.compare(r[e],a)?n=e+1:o=e}return 0===n?r[0]:n>=r.length?r[r.length-1]:r[n-1]},"C",0,function(e){if(!e)return null;let t=e.match(/^epubcfi\((.+)\)$/);if(!t)return null;let r=t[1],a=r.indexOf("!");return -1===a?r:r.slice(0,a)},"u",0,U,"N",0,function(e,t){if(!e||!t)return!1;if(e===t||e&&W(e).startsWith(W(t)))return!0;let r=B.collapse(t),a=B.collapse(t,!0);try{return B.compare(e,r)>=0&&0>=B.compare(e,a)}catch(r){return console.warn("Failed to compare CFIs",{cfi:e,location:t,error:r}),!1}},"d",0,function(e){try{let t=B.parse(e);if(!t.parent)return!1;let r=e=>Array.isArray(e)&&e.every(e=>Array.isArray(e)&&0===e.length);return r(t.start)||r(t.end)}catch{return!1}}],979846);let G="readest-dialogue",J="readest-dialogue-block",V=e=>!!e.dialogueHighlight||!!e.dialogueHighlightCustomTextColor,K=/“[^“”]+?[”"]|„[^„“]+?[“"]|"[^"\n]+?"|«[^«»]+?[»]|「[^「」]+?[」]|『[^『』]+?[』]|‘(?:[^‘’\n]|’(?=\p{L})|\p{L}’(?=[\s\p{Pd}])){0,300}?(?![‘’“”„«»「」『』"'])\p{P}’(?!\p{L})|‘(?:[^‘’]|’(?=\p{L})){1,300}?’(?!\p{L})/gu,X=/“[^“”\n]*(?:“[^“”\n]*”[^“”\n]*)+”|„[^„“\n]*(?:„[^„“\n]*“[^„“\n]*)+“|«[^«»\n]*(?:«[^«»\n]*»[^«»\n]*)+»/gu,Y=/^[—–―－][\s\u3000]/,Z=e=>{let t=e.parentElement;return!!(!t||t.closest(`.${G}`))||!!t.closest("pre, code, kbd, samp, script, style, textarea, rt, rp")},Q=(e,t,r,a)=>{if(r>=a)return;a<t.length&&t.splitText(a);let n=r>0?t.splitText(r):t,o=e.createElement("span");o.className=G,o.setAttribute("cfi-skip",""),n.parentNode?.replaceChild(o,n),o.appendChild(n)},ee="p, li, blockquote, dd, dt",et=(e,t)=>{if(e.querySelectorAll(`.${G}`).forEach(e=>{let t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}}),e.querySelectorAll(`.${J}`).forEach(e=>{e.classList.remove(J)}),(e.body??e.documentElement)?.normalize(),!V(t)||!e.body&&!e.documentElement)return;let{entries:r,text:a}=(e=>{let t=e.defaultView?.NodeFilter.SHOW_TEXT??4,r=e.createTreeWalker(e.body??e.documentElement,t),a=[],n="",o=null,i=r.nextNode();for(;i;){if(!Z(i)){let e=i.textContent??"";if(e){let t=i.parentElement.closest("p, div, li, blockquote, dd, dt, h1, h2, h3, h4, h5, h6, td, th, caption, figcaption, section, article, aside, body");o&&t!==o&&(n+="\n"),o=t,a.push({node:i,start:n.length,end:n.length+e.length}),n+=e}}i=r.nextNode()}return{entries:a,text:n}})(e);if(0!==r.length){let t,n;((e,t,r)=>{let a=t.length-1;for(let n=r.length-1;n>=0;n--){let o=r[n];for(;a>=0&&t[a].start>=o.end;)a--;for(let r=a;r>=0&&t[r].end>o.start;r--){let a=t[r];a.node.isConnected&&Q(e,a.node,Math.max(o.start,a.start)-a.start,Math.min(o.end,a.end)-a.start)}}})(e,r,(e=>{let t=[];for(let r of[K,X]){let a;for(r.lastIndex=0;a=r.exec(e);){if(a[0].length>2048){r.lastIndex=a.index+1;continue}t.push({start:a.index,end:a.index+a[0].length})}}t.sort((e,t)=>e.start-t.start||t.end-e.end);let r=[],a=-1;for(let e of t)e.start>=a&&(r.push(e),a=e.end);return r})(a)),n=new Set(t=[...e.querySelectorAll(ee)].filter(e=>Y.test((e.textContent??"").trimStart()))),t.forEach(e=>{[...e.querySelectorAll(ee)].some(e=>n.has(e))||e.classList.add(J)})}};e.s(["U",0,V,"J",0,et,"i",0,function(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=(a??[]).flatMap(e=>"subitems"in e?e.subitems:[e]).flatMap(e=>e.cfis??[e.cfi]);for(let{doc:a,index:o}of e.renderer.getContents())et(a,t),r.filter(e=>"annotation"===e.type&&e.style&&!e.deletedAt&&U(e.cfi)===o).forEach(t=>e.addAnnotation(t)),n.filter(e=>U(e)===o).forEach(t=>e.addAnnotation({value:"foliate-search:"+t}))}],695018);let er=["auto","light","dark"],ea=["auto","light","dark","ambient"];function en(e,t){return"true"===e||"false"!==e&&t}e.s(["Y",0,function(e){return"auto"===e||"light"===e||"dark"===e||"ambient"===e},"E",0,function(e,t){let r=t?ea:er,a=r.indexOf("ambient"!==e||t?e:"auto"),n=a<0?0:(a+1)%r.length;return r[n]??"auto"},"s",0,en,"x",0,function(e,t){return null===t?e<35:e<20||!(e>50)&&t},"O",0,function(e,t,r){return"dark"===e||"light"!==e&&("ambient"===e?r:t)}],882580);let eo=["a","b","em","i","strong","u","span","font","sup","sub","small","mark"],ei=eo.join(", "),el=new Set(eo);e.s(["f",0,ei,"n",0,eo,"P",0,e=>el.has(e.toLowerCase())],816256);var es=e.i(62725);let ed="scroll-wrapper",ec="scroll-wrapper-fit",eh=`.${ed}`,eg="link-hit-area",eu="data-readest-scroll-wrapper-touch-scroll",ef=e=>e.scrollWidth-e.clientWidth>4,ep=e=>e.scrollHeight-e.clientHeight>4,em=e=>{if(!e||!("closest"in e))return null;let t=e.closest(eh);for(;t;){if(!t.classList.contains(ec)&&(ef(t)||ep(t)))return t;t=t.parentElement?.closest(eh)??null}return null},eb=["Top","Right","Bottom","Left"],ey=e=>{let t=e.scrollWidth-e.clientWidth;e.classList.toggle(ec,t<=4||ek(e,t))},ek=(e,t)=>{if(t>14||!e.ownerDocument.documentElement.classList.contains(eg))return!1;let r=e.querySelector(":scope > table");if(!r||r.offsetWidth-e.clientWidth>4)return!1;let a=e.ownerDocument.defaultView?.getComputedStyle(e).direction==="rtl",n=e.getBoundingClientRect().left+e.clientLeft,o=n+e.clientWidth;return[...r.querySelectorAll("a")].some(e=>{let r=e.getBoundingClientRect();return(a?n-r.left:r.right-o)+10>=t-4})},ev=(e,t)=>{let r=e.ownerDocument.fonts;if(r?.status==="loading"){let a=Date.now()+1e4,n=t.setInterval(()=>{"loading"===r.status&&Date.now()<a||(t.clearInterval(n),ey(e))},100)}for(let t of Array.from(e.querySelectorAll("img")))t.complete||t.addEventListener("load",()=>ey(e),{once:!0})};e.s(["R",0,eg,"x",0,10,"B",0,ed,"f",0,ec,"e",0,e=>{let t=e.defaultView,r=r=>{let a=r.parentElement;if(!a||a.classList.contains(ed))return;let n=e.createElement("div");n.className=ed,n.setAttribute("cfi-skip",""),a.insertBefore(n,r),n.appendChild(r),((e,t,r)=>{if(!r)return;let a=e.style;if(!a)return;let n=r.getComputedStyle(e);for(let e of eb){let r=`margin${e}`,o=n[r];0>parseFloat(o)&&(t.style[r]=o,a[r]="0px")}})(r,n,t),((e,t)=>{if(!t?.ResizeObserver)return;let r=new t.ResizeObserver(()=>{e.clientWidth<=0||(ey(e),r.disconnect(),ev(e,t))});r.observe(e)})(n,t)};e.querySelectorAll("table:not([data-foliate-chunk])").forEach(r),e.querySelectorAll("math").forEach(e=>{((e,t)=>{if("block"===e.getAttribute("display"))return!0;let r=e;for(;;){let e=r.parentElement;if(!e)return!1;for(let t of e.childNodes)if(t!==r&&(t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()))return!1;if(!t?.getComputedStyle(e).display.startsWith("inline"))return!0;r=e}})(e,t)&&r(e)})},"l",0,e=>{let t=e.documentElement;if("true"===t.getAttribute(eu))return;t.setAttribute(eu,"true");let r=0,a=0,n=null,o=()=>{n=null},i={capture:!0,passive:!1};e.addEventListener("touchstart",e=>{if(!(n=em(e.target)))return;let t=e.changedTouches[0];t&&(r=t.screenX,a=t.screenY)},i),e.addEventListener("touchmove",e=>{var t;if(!n||!n.contains(e.target))return;let o=e.changedTouches[0];if(!o)return;let i=o.screenX-r,l=o.screenY-a;t=n,(Math.abs(i)>Math.abs(l)?Math.abs(i)>=8&&ef(t):Math.abs(l)>=8&&ep(t))&&e.stopImmediatePropagation()},i),e.addEventListener("touchend",o,i),e.addEventListener("touchcancel",o,i),e.addEventListener("wheel",e=>{let t=em(e.target);t&&(Math.abs(e.deltaX)>Math.abs(e.deltaY)?ef(t):ep(t))&&e.stopImmediatePropagation()},{capture:!0,passive:!0})}],110250);let ew=(e,t,r,a)=>{let o=["Georgia","Times New Roman"],i=[e,...a!==e?[a]:[],...n.P4.filter(t=>t!==e&&t!==a&&!o.includes(t)),...n.Jn.filter(t=>t!==e&&t!==a),...o.filter(e=>n.P4.includes(e)&&!o.includes(a)),...n.$P],l=[t,...a!==t?[a]:[],...n.JH.filter(e=>e!==t&&e!==a),...n.aJ.filter(e=>e!==t&&e!==a),...n.$P],s=[r,...n.sy.filter(e=>e!==r)],d=e=>e.map(e=>`"${e}"`).join(", ");return{serif:`${d(i)}, serif`,sansSerif:`${d(l)}, sans-serif`,monospace:`${d(s)}, monospace`}},ex=e=>{let t=["ios","android"].includes((0,es.r)()),r=(e.zoomLevel||100)/100;return e.defaultFontSize*(t?1.25:1)*r},e$=()=>`
    ::selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
    ::-moz-selection {
      color: var(--theme-bg-color);
      background: var(--theme-fg-color);
    }
  `,e_="link-touch-hold",eA="text-selected",eS=["zh","ja","ko"],eM=eS.map(e=>`:lang(${e})`).join(", "),eC=e=>{let t=e.match(/^rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)$/);if(!t)return null;let[r,a,n]=[Number(t[1]),Number(t[2]),Number(t[3])];return{r,g:a,b:n,a:void 0===t[4]?1:Number(t[4]),brightness:.299*r+.587*a+.114*n}},eE=e=>`
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
    ${(e=>{let{translationFont:t,translationFontStyle:r,translationFontSize:a,translationColor:n}=e;return[t&&`font-family: var(--${t}) !important;`,r?.includes("italic")&&"font-style: italic !important;",r?.includes("bold")&&"font-weight: bold !important;",a&&1!==a&&`font-size: ${a}em !important;`,n&&`color: ${n} !important;`].filter(Boolean).join("\n    ")})(e)}
  }
  .translation-target-toc {
    display: block !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,ez=()=>{let e="auto",t="default",r=!1,a=!1,n=[];t=localStorage.getItem("themeColor")||"default",e=localStorage.getItem("themeMode")||"auto",r="true"===localStorage.getItem("systemIsDarkMode"),a=en(localStorage.getItem("ambientIsDarkMode"),r),n=JSON.parse(localStorage.getItem("customThemes")||"[]");let o="dark"===e||"auto"===e&&r||"ambient"===e&&a,i=P.find(e=>e.name===t);if(!i){let e=n.find(e=>e.name===t);e&&(i={name:e.name,label:e.label,colors:{light:j(e.colors.light),dark:q(e.colors.dark)}})}i||(i=P[0]);let l=o?i.colors.dark:i.colors.light;return{bg:l["base-100"],fg:l["base-content"],primary:l.primary,palette:l,isDarkMode:o}},eL=/^([A-Za-z_][\w.-]*):([A-Za-z_][\w.-]*)$/;e.s(["E",0,e_,"Z",0,eA,"J",0,(e,t)=>{e.documentElement.setAttribute("data-eink",t?"true":"false")},"q",0,(e,t,r,a)=>{r||(r=ez());let{bg:n,fg:i,primary:l,isDarkMode:s}=r,d=!a||o.m.has(a),c=t.isEink,h=t.overrideColor,g=t.invertImgColorInDark,u=t.contrast??100,f=[],p="PDF"===a&&t.applyThemeToPDF;s&&g&&!p&&f.push("invert(100%) hue-rotate(180deg)"),100!==u&&f.push(`contrast(${u}%)`);let m=f.length?`filter: ${f.join(" ")};`:"",b="fixed-layout-styles",y=e.getElementById(b);y&&y.remove(),(y=e.createElement("style")).id=b,y.textContent=`
    html {
      --theme-bg-color: ${n};
      --theme-fg-color: ${i};
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
    ${c?e$():""}
    #canvas {
      display: inline-block;
      width: fit-content;
      height: fit-content;
      background-color: var(--theme-bg-color);
    }
    img, canvas {
      ${m}
      ${h&&!p?`mix-blend-mode: ${s?"#000000"===n?"luminosity":"overlay":"multiply"};`:""}
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
  `,e.head.appendChild(y)},"W",0,e=>{let t=e.defaultView??window,r=Array.from(e.querySelectorAll("img")).map(r=>{let a=r.getAttribute("width"),n=a&&(a.endsWith("%")||a.endsWith("vw"))?parseFloat(a):0/0,o=r.getAttribute("height"),i=o&&(o.endsWith("%")||o.endsWith("vh"))?parseFloat(o):0/0,l="none"===r.getAttribute("zy-enlarge-src"),s=r.closest("p"),d=null;if(s){let t=e.createRange();t.setStart(s,0),t.setEndBefore(r),t.toString().trim()||(d=s)}let c=!1,h=!1,g=r.parentNode;if(g&&g.nodeType===Node.ELEMENT_NODE){let e=Array.from(g.childNodes),a=e.some(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),n=e.every(e=>e.nodeType!==Node.ELEMENT_NODE||"BR"!==e.tagName);if(c=a&&n){let e=t.getComputedStyle(r).verticalAlign;h=""===e||"baseline"===e}}return{img:r,percentWidth:n,percentHeight:i,inlineWithText:c,keepBaseline:h,noEnlarge:l,leadingImageParagraph:d}}),a=e.documentElement?.style,n=a?parseFloat(a.getPropertyValue("--available-height")):0/0,o=!isNaN(n)&&n>0?n:t?.innerHeight??window.innerHeight,i=a?parseFloat(a.getPropertyValue("--available-width")):0/0,l=!isNaN(i)&&i>0?i:t?.innerWidth??window.innerWidth;for(let{img:e,percentWidth:t,percentHeight:a,inlineWithText:n,keepBaseline:i,noEnlarge:s,leadingImageParagraph:d}of r)d?.classList.add("leading-image"),isNaN(t)||(e.style.width=`${t/100*l}px`,e.removeAttribute("width")),isNaN(a)||(e.style.height=`${a/100*o}px`,e.removeAttribute("height")),isNaN(t)||isNaN(a)||(e.style.objectFit="contain"),n&&(e.classList.add("has-text-siblings"),i&&e.classList.add("has-text-siblings-baseline")),s&&e.style.setProperty("pointer-events","none");e.querySelectorAll("hr").forEach(e=>{let t=window.getComputedStyle(e);t.backgroundImage&&"none"!==t.backgroundImage&&e.classList.add("background-img")})},"c",0,e=>{e.links.length<=1e3&&e.documentElement.classList.add(eg)},"a",0,e=>{let t=(e,t)=>{for(let r=e;r;r=r.parentElement){let e=r.getAttribute(`xmlns:${t}`);if(e)return e}return null};for(let r of e.querySelectorAll("*"))for(let{name:e,value:a}of Array.from(r.attributes)){let[,n,o]=eL.exec(e)??[];if(!n)continue;let i="xml"===n?"http://www.w3.org/XML/1998/namespace":t(r,n)??("epub"===n?"http://www.idpf.org/2007/ops":null);i&&!r.hasAttributeNS(i,o)&&r.setAttributeNS(i,e,a)}},"n",0,(e,t)=>{e.body.classList.remove("scroll-mode","paginated-mode"),e.body.classList.add(t?"scroll-mode":"paginated-mode")},"T",0,(e,t)=>{let r="scrollbar-hide-style",a=e.getElementById(r);t?(a||((a=e.createElement("style")).id=r,e.head.appendChild(a)),a.textContent="foliate-view::part(container) { scrollbar-width: none; }"):a&&(a.textContent="foliate-view::part(container) { scrollbar-width: thin; }")},"K",0,(e,t)=>{e.body.classList.remove("theme-light","theme-dark"),e.body.classList.add(t?"theme-dark":"theme-light")},"k",0,e=>{let t="translation-style",r=document.getElementById(t);r&&r.remove();let a=document.createElement("style");a.id=t,a.textContent=eE(e),document.head.appendChild(a)},"t",0,e=>{let t=ew(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return"serif"===e.defaultFont.toLowerCase()?t.serif:t.sansSerif},"z",0,ex,"L",0,(e,t,r)=>`
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
  `,"U",0,e=>{let t=ew(e.serifFont,e.sansSerifFont,e.monospaceFont,e.defaultCJKFont);return{serif:t.serif,sans:t.sansSerif}},"x",0,()=>`
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
`,"H",0,e=>{let{isDarkMode:t,isBwEink:r,isFixedLayout:a=!1,invertImgColorInDark:n=!1,applyThemeToPDF:o=!1,format:i}=e;return r?"difference":t&&(!a||n||"PDF"===i&&o)?"screen":"multiply"},"f",0,(e,t)=>e.applyThemeToPDF?{background:t.bg,foreground:t.fg,keepImages:!(t.isDarkMode&&e.invertImgColorInDark)}:void 0,"P",0,function(e,t){var r,a,n,o,i,l,s,d,c,h;let g,u,f,p,m,b,y,k,v,w,x,$,_,A,S,M,C,E,z,L,F,H,N,R=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t||(t=ez());let T=(g=e.marginTopPx,u=e.marginRightPx,f=e.marginBottomPx,p=e.marginLeftPx,m=e.writingMode,b=e.vertical,`
  html {
    --margin-top: ${g}px;
    --margin-right: ${u}px;
    --margin-bottom: ${f}px;
    --margin-left: ${p}px;
  }
  html, body {
    ${"auto"===m?"":`writing-mode: ${m} !important;`}
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
  html.${e_} a[href] {
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
  html.${eg} a {
    position: relative !important;
  }
  html.${eg} a::before {
    content: '';
    position: absolute;
    inset: -10px;
  }
  /* the enlarged area swallows the text around a link, so a selection dragged
     next to a footnote marker snaps away (#6566); set while text is selected */
  html.${eA} a::before {
    pointer-events: none;
  }

  .${ed} {
    display: block;
    overflow: auto;
    max-width: 100%;
    touch-action: pan-x pan-y;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }
  .${ec} {
    overflow: visible;
  }
  .${ed} > table {
    display: table !important;
    max-width: 100%;
  }
  /* A scroll container is monolithic in CSS fragmentation, so a scrolling
     wrapper can't break across columns: taller than the page, it overflows the
     column and every row past the first page is clipped and unreachable
     (#6129). Clamp the wrapper — not the table, whose max-height Chromium and
     WebKit treat as a minimum — to one page so it scrolls vertically in place.
     A fit wrapper is overflow:visible and its rows paginate normally. */
  body.paginated-mode .${ed}:not(.${ec}) {
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
    ${b?"width: 1em;":"height: 1em;"}
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
`),I=e.useBookLayout?"":(y=e.overrideLayout,k=e.paragraphMargin,v=e.lineHeight,w=e.wordSpacing,x=e.letterSpacing,$=e.textIndent,_=e.fullJustification,A=e.hyphenation,S=e.vertical,`
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
  p, blockquote, dd, div:not(:has(*:not(${ei}))) {
    line-height: ${v} ${y?"!important":""};
    word-spacing: ${w}px ${y?"!important":""};
    letter-spacing: ${x}px ${y?"!important":""};
    text-indent: ${$}em ${y?"!important":""};
    -webkit-hyphens: ${A?"auto":"manual"} ${y?"!important":""};
    hyphens: ${A?"auto":"manual"} ${y?"!important":""};
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 2;
    -webkit-hyphenate-limit-lines: 2;
    hanging-punctuation: allow-end last;
    widows: 2;
  }
  li {
    line-height: ${v} ${y?"!important":""};
    -webkit-hyphens: ${A?"auto":"manual"} ${y?"!important":""};
    hyphens: ${A?"auto":"manual"} ${y?"!important":""};
  }
  p.aligned-center, blockquote.aligned-center,
  dd.aligned-center, div.aligned-center {
    text-align: center ${y?"!important":""};
  }
  p.aligned-left, blockquote.aligned-left,
  dd.aligned-left, div.aligned-left {
    ${_&&y?"text-align: justify !important;":""}
  }
  p.aligned-right, blockquote.aligned-right,
  dd.aligned-right, div.aligned-right {
    text-align: right ${y?"!important":""};
  }
  p.aligned-justify, blockquote.aligned-justify,
  dd.aligned-justify, div.aligned-justify {
    ${!_&&y?"text-align: initial !important;":""};
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
  p${y?`, blockquote:not(:has(*:not(${ei})))`:""} {
    ${S?`margin-left: ${k}em ${y?"!important":""};`:""}
    ${S?`margin-right: ${k}em ${y?"!important":""};`:""}
    ${S?`margin-top: unset ${y?"!important":""};`:""}
    ${S?`margin-bottom: unset ${y?"!important":""};`:""}
    ${!S?`margin-top: ${k}em ${y?"!important":""};`:""}
    ${!S?`margin-bottom: ${k}em ${y?"!important":""};`:""}
    ${!S?`margin-left: unset ${y?"!important":""};`:""}
    ${!S?`margin-right: unset ${y?"!important":""};`:""}
  }
  div {
    ${S&&y?`margin-left: ${k}em !important;`:""}
    ${S&&y?`margin-right: ${k}em !important;`:""}
    ${!S&&y?`margin-top: ${k}em !important;`:""}
    ${!S&&y?`margin-bottom: ${k}em !important;`:""}
  }
  p > font:only-child { 
    display: flow-root; 
  }

  ${eM} {
    widows: 1;
    orphans: 1;
  }

  /* workaround for some badly designed epubs */
  div.left *, p.left * { text-align: left; }
  div.right *, p.right * { text-align: right; }
  div.center *, p.center * { text-align: center; }
  div.justify *, p.justify * { text-align: justify; }

  img.pi {
    ${S?"transform: rotate(90deg);":""}
    ${S?"transform-origin: center;":""}
    ${S?"height: 2em;":""}
    ${S?`width: ${v}em;`:""}
    ${S?"vertical-align: unset;":""}
  }

  .nonindent, .noindent {
    text-indent: unset !important;
  }
`),j=(r=e.serifFont,a=e.sansSerifFont,n=e.monospaceFont,o=e.defaultFont,i=e.defaultCJKFont,l=ex(e),s=e.minimumFontSize,d=e.fontWeight,c=e.overrideFont,M=ew(r,a,n,i),C="serif"===o.toLowerCase()?"--serif":"--sans-serif",E=`
    p, li, div, pre, dd {
      font-size: max(1rem, var(--min-font-size, 8px)) !important;
    }
  `,`
    html {
      --serif: ${M.serif};
      --sans-serif: ${M.sansSerif};
      --monospace: ${M.monospace};
      --font-size: ${l}px;
      --min-font-size: ${s}px;
      --font-weight: ${d};
    }
    html, body {
      font-size: ${l}px !important;
      font-weight: ${d};
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
      font-family: var(${C}) ${c?"!important":""};
    }
    /* higher specificity than ebook built-in font styles */
    html body {
      ${c?`font-family: var(${C}) !important;`:""}
    }
    font[size="1"] {
      font-size: ${s}px;
    }
    font[size="2"] {
      font-size: ${1.5*s}px;
    }
    font[size="3"] {
      font-size: ${l}px;
    }
    font[size="4"] {
      font-size: ${1.2*l}px;
    }
    font[size="5"] {
      font-size: ${1.5*l}px;
    }
    font[size="6"] {
      font-size: ${2*l}px;
    }
    font[size="7"] {
      font-size: ${3*l}px;
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
    ${c?"html body :is(pre, code, kbd)":":where(pre, code, kbd)"} {
      font-family: var(--monospace) ${c?"!important":""};
      font-variant-ligatures: none;
    }
    body *:not(pre, code, kbd, .code):not(pre *, code *, kbd *, .code *) {
      ${c?"font-family: revert !important;":""}
    }
    ${c?E:""}
  `),q=R.filter(e=>!!e.blobUrl).map(e=>{try{return(0,O.v)(e)}catch{return""}}).join("\n"),P=((e,t,r,a,n)=>{let{bg:o,fg:i,primary:l,isDarkMode:s}=r,d=a&&"none"!==a?"transparent":o;return`
    html {
      --bg-texture-id: ${a};
      --theme-bg-color: ${o};
      --theme-fg-color: ${i};
      --theme-primary-color: ${l};
      --override-color: ${e};
      color-scheme: ${s?"dark":"light"};
    }
    html, body {
      color: ${i};
    }
    ${n?e$():s?`
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
      ${n?`background-color: ${o} !important;`:""}
    }
    section, aside, blockquote, article, nav, header, footer, main, figure,
    div, p, font, h1, h2, h3, h4, h5, h6, li, span {
      ${e?`background-color: ${d} !important;`:""}
      ${e?`color: ${i} !important;`:""}
      ${e?`border-color: ${i} !important;`:""}
    }
    pre, span { /* inline code blocks */
      ${e?`background-color: ${d} !important;`:""}
    }
    a:any-link {
      ${e?`color: ${l} !important;`:s?"color: lightblue;":""}
    }
    /* left off hovered links, so a book's own a:hover style applies (#6859) */
    a:any-link:where(:not(:hover)) {
      text-decoration: ${n?"underline":"none"};
    }
    body.pbg {
      ${s?`background-color: ${o} !important;`:""}
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
      background-color: ${o};
    }
    hr.background-img {
      mix-blend-mode: multiply;
    }
    p[width][height] > img:only-child {
      mix-blend-mode: multiply;
    }
    /* inline images */
    *:has(> img.has-text-siblings):not(body) {
      ${e?`background-color: ${o};`:""}
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
      ${s?`color: ${i}cc;`:""}
      ${s?`background: color-mix(in srgb, ${o} 90%, #000);`:""}
      ${s?`background-color: color-mix(in srgb, ${o} 90%, #000);`:""}
    }
    blockquote {
      ${s?`background: color-mix(in srgb, ${o} 80%, #000);`:""}
    }
    /* Only tint table descendants when the user has opted into color override.
       By default, leave them transparent so a plain table (and the invisible
       spacer cells some books use for vertical layout) keeps the page
       background instead of a different shade. Illegible light/zebra table
       backgrounds are handled separately by the dark-mode light-background
       rewriters (getDarkModeLightBackgroundOverrides / transformStylesheet).
       See #4419 (and #2377, which this gate originally fixed). */
    blockquote, table * {
      ${s&&e?`background: color-mix(in srgb, ${o} 80%, #000);`:""}
      ${s&&e?`background-color: color-mix(in srgb, ${o} 80%, #000);`:""}
    }
    /* override inline hardcoded text color */
    font[color="#000000"], font[color="#000"], font[color="black"],
    font[color="rgb(0,0,0)"], font[color="rgb(0, 0, 0)"],
    *[style*="color: rgb(0,0,0)"], *[style*="color: rgb(0, 0, 0)"],
    *[style*="color: #000"], *[style*="color: #000000"], *[style*="color: black"],
    *[style*="color:rgb(0,0,0)"], *[style*="color:rgb(0, 0, 0)"],
    *[style*="color:#000"], *[style*="color:#000000"], *[style*="color:black"] {
      color: ${i} !important;
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
      background-color: ${o} !important;
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
      background-color: ${o} !important;
    }
    .calibre {
      color: unset;
      background-color: unset;
    }
  `})(e.overrideColor,e.invertImgColorInDark,t,e.backgroundTextureId,e.isEink),D=eE(e),B=`
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
`,W=(z=e.wordLensGlossFontSize||.5,L=e.wordLensGlossColor||"",`
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
    font-size: ${z}em;
    line-height: 1.1;
    ${L?`color: ${L};
    opacity: 1;`:"opacity: 0.7;"}
    font-weight: normal;
    text-align: center;
  }
`),U=`
  :where(${eS.map(e=>`html:lang(${e})`).join(", ")}) {
    widows: 1;
    orphans: 1;
  }
`,G=V(e)?(h=t,F=e.dialogueHighlight?e.dialogueHighlightCustomColor&&e.dialogueHighlightColor?e.dialogueHighlightColor:h.primary:null,H=e=>F?`
    background-color: color-mix(in srgb, ${F} ${e}%, transparent) !important;`:"",N=e.dialogueHighlightCustomTextColor&&e.dialogueHighlightTextColor?`
    color: ${e.dialogueHighlightTextColor} !important;`:"",`
  /* Dialogue lines tinted with the custom color or, by default, the theme's
     primary color. !important so the tint survives "Override Book Color",
     which repaints spans/paragraphs with the theme background at the same
     importance level but lower specificity. */
  .readest-dialogue {${H(22)}${N}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  .readest-dialogue-block {${H(12)}${N}
    border-radius: 0.3em;
  }${e.dialogueHighlightItalic?`
  /* Italic runs marked like quoted dialogue; nested marks drop their own
     tint so overlapping translucent backgrounds don't stack. */
  :is(i, em) {${H(22)}${N}
    border-radius: 0.2em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  :is(i, em) :is(i, em, .readest-dialogue), .readest-dialogue :is(i, em) {
    background-color: transparent !important;
  }`:""}
`):"",J=e.userStylesheet;return`@namespace epub "http://www.idpf.org/2007/ops";
${q}
${T}
${I}
${U}
${j}
${P}
${G}
${D}
${B}
${W}
${J}`},"S",0,ez,"o",0,e=>{let t=e.defaultView??window,r=e.querySelectorAll(":is(div, p, blockquote, dd):not([data-foliate-chunk])"),a=Array(r.length);for(let e=0;e<r.length;e++){let n=t.getComputedStyle(r[e]).textAlign;"center"===n?a[e]="aligned-center":"left"===n?a[e]="aligned-left":"right"===n?a[e]="aligned-right":"justify"===n?a[e]="aligned-justify":a[e]=null}for(let e=0;e<r.length;e++){let t=a[e];t&&r[e].classList.add(t)}},"F",0,e=>{let t=e=>{let t=e.getRootNode();return e.parentElement??(t instanceof ShadowRoot?t.host:null)},r=!1;for(let a=t(e);a;a=t(a)){let e=eC(getComputedStyle(a).backgroundColor);if(e&&e.a>.5){r=e.brightness>=128;break}}let a=new Map,n=[];for(let t of[e,...e.querySelectorAll("*")]){let o=getComputedStyle(t),i=eC(o.backgroundColor),l=t===e?r:!!a.get(t.parentElement),s=i&&i.a>.5?i.brightness>=128:l;a.set(t,s);let d=eC(o.color);if(!d||s||d.brightness>=128)continue;let c=Math.round(255-2*d.brightness),[h,g,u]=[d.r,d.g,d.b].map(e=>Math.min(255,e+c));n.push([t,`rgba(${h}, ${g}, ${u}, ${d.a})`])}for(let[e,t]of n)e.style.setProperty("color",t,"important")},"G",0,function(e,t,r,a){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(n)return e;let o=["ios","android"].includes((0,es.r)())?1.25:1,i=!e.includes("{"),l=/([^{]+)({[^}]+})/g;e=e.replace(l,(e,t,r)=>{let a=/text-align\s*:\s*center\s*[;$]/.test(r),n=/text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?\s*[;$]/.test(r);return a&&n?t+(r=r.replace(/(text-indent\s*:\s*0(?:\.0+)?(?:px|em|rem|%)?)(\s*;|\s*$)/g,"$1 !important$2")):e});let s=a?"overflow-y: clip !important;":"overflow-x: clip !important;";e=e.replace(l,(e,t,r)=>{if(/white-space\s*:\s*nowrap\s*[;$]/.test(r)){if(!/overflow\s*:/.test(r)){let e=/(?:^|[;{\s])(?:max-)?height\s*:|line-clamp\s*:/.test(r);r=r.replace(/}$/,` ${e?"overflow: clip !important;":s} }`)}return t+r}return e}),i?/page-break-after\s*:\s*always\s*[;]?/.test(e)&&!/margin-bottom\s*:/.test(e)&&(e=e.replace(/;?\s*$/,"")+"; margin-bottom: calc(var(--available-height) * 1px)"):e=e.replace(l,(e,t,r)=>/page-break-after\s*:\s*always\s*[;$]/.test(r)?(/margin-bottom\s*:/.test(r)||(r=r.replace(/}$/," margin-bottom: calc(var(--available-height) * 1px); }")),t+r):e);let d=[];e=(e=(e=(e=e.replace(l,(e,t,r)=>{if(a)return t+r;let n=[],o=!1;for(let e of["top","bottom","left","right"]){let t=RegExp(`duokan-bleed\\s*:\\s*[^;]*${e}[^;]*;`),a=RegExp(`margin-${e}\\s*:`);t.test(r)&&!a.test(r)&&(o=!0,n.push(e),r=r.replace(/}$/,` margin-${e}: calc(-1 * var(--page-margin-${e})) !important; }`))}return o&&(/position\s*:/.test(r)||(r=r.replace(/}$/," position: relative !important; }")),/overflow\s*:/.test(r)||(r=r.replace(/}$/," overflow: hidden !important; }")),/display\s*:/.test(r)||(r=r.replace(/}$/," display: flow-root !important; }")),n.includes("left")&&n.includes("right")&&(r=r.replace(/}$/," width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," min-width: calc(var(--full-width) * 1px) !important; }").replace(/}$/," max-width: calc(var(--full-width) * 1px) !important; }")),n.includes("top")&&n.includes("bottom")&&(r=r.replace(/}$/," height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," min-height: calc(var(--full-height) * 1px) !important; }").replace(/}$/," max-height: calc(var(--full-height) * 1px) !important; }"))),t+r})).replace(/url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/gi,e=>(d.push(e),`READEST_URL_${d.length-1}_PLACEHOLDER`))).replace(/((?:^|[{;\s])background(?:-attachment)?\s*:)([^;{}]*)/gi,(e,t,r)=>{if(!/\bfixed\b/i.test(r))return e;let a=[];return t+r.replace(/[\w-]*\([^)]*\)/g,e=>(a.push(e),`READEST_FN_${a.length-1}_PLACEHOLDER`)).replace(/\bfixed\b/gi,"scroll").replace(/READEST_FN_(\d+)_PLACEHOLDER/g,(e,t)=>a[+t])})).replace(/READEST_URL_(\d+)_PLACEHOLDER/g,(e,t)=>d[+t]),a||(e=e.replace(l,(e,t,r)=>{if(![...r.matchAll(/(?:^|[^-a-z])background(?:-color|-image)?\s*:\s*([^;!}]+)/gi)].map(e=>e[1].trim()).some(e=>!/^(?:none|transparent)$/i.test(e)&&!/^(?:rgba|hsla)\([^)]*[,\s]0(?:\.0+)?\s*\)$/i.test(e)))return e;let a="",n="";for(let e of r.matchAll(/(?:^|[^-a-z])margin(-left|-right)?\s*:\s*([^;!}]+)/gi)){let t=e[1],r=e[2].trim();if("-left"===t)a=r;else if("-right"===t)n=r;else{if(r.includes("("))continue;let e=r.split(/\s+/);if(e.length<1||e.length>4)continue;let[t,o=t,,i=o]=e;n=o,a=i}}let o=(a.startsWith("-")?" margin-left: 0 !important;":"")+(n.startsWith("-")?" margin-right: 0 !important;":"");return o?t+r.replace(/}$/,`${o} }`):e})),e=(e=e.replace(l,(e,t,r)=>{if(/\bbody\b/i.test(t)){let e=/font-family\s*:\s*serif\s*(?:;|\}|$)/.test(r),t=/font-family\s*:\s*sans-serif\s*(?:;|\}|$)/.test(r);e&&(r=r.replace(/font-family\s*:\s*serif\s*(;|\}|$)/gi,"font-family: unset$1")),t&&(r=r.replace(/font-family\s*:\s*sans-serif\s*(;|\}|$)/gi,"font-family: unset$1"))}return t+r})).replace(l,(e,r,a)=>{let n=/(?:^|[^a-z-])width\s*:\s*(\d+(?:\.\d+)?)px/.exec(a);return(n?parseFloat(n[1]??"0"):0)>t&&!/max-width\s*:/.test(a)?r+(a=a.replace(/}$/," width: 100%; max-width: calc(var(--available-width) * 1px); box-sizing: border-box; }")):e});let c=t>r,h="(min-width: 0px)",g="(min-width: 999999px)",u=[];e=(e=(e=(e=e.replace(/"[^"\n]*"|'[^'\n]*'/g,e=>(u.push(e),`READEST_STR_${u.length-1}_PLACEHOLDER`))).replace(/@media[^{]*/gi,e=>e.replace(/\(\s*orientation\s*:\s*(landscape|portrait)\s*\)/gi,(e,t)=>"landscape"===t.toLowerCase()===c?h:g).replace(/\(\s*(min|max)-(width|height)\s*:\s*([^)]+?)\s*\)/gi,(e,a,n,o)=>{let i=/^(\d*\.?\d+)(?:px)?$/.exec(o);if(!i)return e;let l="width"===n.toLowerCase()?t:r,s=parseFloat(i[1]);return("min"===a.toLowerCase()?l>=s:l<=s)?h:g}))).replace(/READEST_STR_(\d+)_PLACEHOLDER/g,(e,t)=>u[+t])).replace(/font-size\s*:\s*xx-small/gi,"font-size: 0.6rem").replace(/font-size\s*:\s*x-small/gi,"font-size: 0.75rem").replace(/font-size\s*:\s*small/gi,"font-size: 0.875rem").replace(/font-size\s*:\s*medium/gi,"font-size: 1rem").replace(/font-size\s*:\s*large/gi,"font-size: 1.2rem").replace(/font-size\s*:\s*x-large/gi,"font-size: 1.5rem").replace(/font-size\s*:\s*xx-large/gi,"font-size: 2rem").replace(/font-size\s*:\s*xxx-large/gi,"font-size: 3rem").replace(/font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(e,t)=>{let r=parseFloat(t)/o/16;return`font-size: ${r}rem`}).replace(/font-size\s*:\s*(\d+(?:\.\d+)?)pt/gi,(e,t)=>{let r=parseFloat(t)/o/12;return`font-size: ${r}rem`}).replace(/font-size\s*:\s*(\d*\.?\d+)(px|rem|em|%)?/gi,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return`font-size: max(${t}${r}, var(--min-font-size, 8px))`}).replace(/backdrop-filter\s*:\s*brightness\(100%\)\s*[;]?/gi,"").replace(/(\d*\.?\d+)vw/gi,(e,r)=>parseFloat(r)*t/100+"px").replace(/(\d*\.?\d+)vh/gi,(e,t)=>parseFloat(t)*r/100+"px").replace(/([\s;])-webkit-user-select\s*:\s*none/gi,"$1-webkit-user-select: unset").replace(/([\s;])-moz-user-select\s*:\s*none/gi,"$1-moz-user-select: unset").replace(/([\s;])-ms-user-select\s*:\s*none/gi,"$1-ms-user-select: unset").replace(/([\s;])-o-user-select\s*:\s*none/gi,"$1-o-user-select: unset").replace(/([\s;])user-select\s*:\s*none/gi,"$1user-select: unset").replace(/(font-family\s*:\s*)([^;{}]*)/gi,(e,t,r)=>{let a=/\s*!\s*important\s*$/i.exec(r);return t+(a?r.slice(0,a.index):r).split(",").map(e=>{let t=/^(serif|sans-serif|monospace)$/i.exec(e.trim());if(!t)return e;let r=t[1].toLowerCase();return e.replace(t[1],`var(--${r}, ${r})`)}).join(",")+(a?a[0]:"")}).replace(/([\s;])font-weight\s*:\s*normal/gi,"$1font-weight: var(--font-weight)").replace(/([\s;])color\s*:\s*black/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*#(?:000f?|000000(?:ff)?)(?![0-9a-f])/gi,"$1color: var(--theme-fg-color)").replace(/([\s;])color\s*:\s*rgb\(0,\s*0,\s*0\)/gi,"$1color: var(--theme-fg-color)");let{isDarkMode:f,bg:p}=ez();return f&&(e=e.replace(l,(e,t,r)=>{let a=r.replace(/background(-color)?\s*:\s*([^;!}]+)(\s*!important)?(?=\s*[;!}])/gi,(e,t,r,a)=>(e=>{let t=e.trim().toLowerCase();if("white"===t)return!0;let r=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(r){let e=r[1],t=3===e.length?e.split("").map(e=>e+e).join(""):e;return(.299*parseInt(t.slice(0,2),16)+.587*parseInt(t.slice(2,4),16)+.114*parseInt(t.slice(4,6),16))/255>.85}let a=t.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return a?.[1]!=null&&null!=a[2]&&null!=a[3]&&(.299*parseInt(a[1],10)+.587*parseInt(a[2],10)+.114*parseInt(a[3],10))/255>.85})(r.trim().split(/\s+/)[0]??"")?`background-color: ${p}${a??""}`:e);return a===r?e:t+a})),e}],322295)}]);

//# sourceMappingURL=3e71o-q0l5oi3.js.map