import{j as be,d as ve,r as W,k as C,o as ye,a as k,l as $,s as N,q as B,f as T,aa as me,b as te,t as y,B as xe,n as ke,m as we,v as Be,ah as se,C as ue,aA as _e,av as Ne,aB as ze,z as Ve,aw as qe,x as P,F as ce,I as fe,c as G,w as I,e as J,aq as Q,aC as Ee,ak as Ie,af as X}from"./index-ca6d4815.js";function m(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1})(t)&&(t="100%");var a=function(r){return typeof r=="string"&&r.indexOf("%")!==-1}(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),a&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=e===360?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function O(t){return Math.min(1,Math.max(0,t))}function Me(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function j(t){return t<=1?"".concat(100*Number(t),"%"):t}function z(t){return t.length===1?"0"+t:String(t)}function he(t,e,a){t=m(t,255),e=m(e,255),a=m(a,255);var r=Math.max(t,e,a),n=Math.min(t,e,a),l=0,h=0,c=(r+n)/2;if(r===n)h=0,l=0;else{var u=r-n;switch(h=c>.5?u/(2-r-n):u/(r+n),r){case t:l=(e-a)/u+(e<a?6:0);break;case e:l=(a-t)/u+2;break;case a:l=(t-e)/u+4}l/=6}return{h:l,s:h,l:c}}function Y(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+6*a*(e-t):a<.5?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function de(t,e,a){t=m(t,255),e=m(e,255),a=m(a,255);var r=Math.max(t,e,a),n=Math.min(t,e,a),l=0,h=r,c=r-n,u=r===0?0:c/r;if(r===n)l=0;else{switch(r){case t:l=(e-a)/c+(e<a?6:0);break;case e:l=(a-t)/c+2;break;case a:l=(t-e)/c+4}l/=6}return{h:l,s:u,v:h}}function pe(t,e,a,r){var n=[z(Math.round(t).toString(16)),z(Math.round(e).toString(16)),z(Math.round(a).toString(16))];return r&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function ge(t){return M(t)/255}function M(t){return parseInt(t,16)}var ae={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Te(t){var e,a,r,n={r:0,g:0,b:0},l=1,h=null,c=null,u=null,d=!1,x=!1;return typeof t=="string"&&(t=function(s){if(s=s.trim().toLowerCase(),s.length===0)return!1;var f=!1;if(ae[s])s=ae[s],f=!0;else if(s==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var o=A.rgb.exec(s);return o?{r:o[1],g:o[2],b:o[3]}:(o=A.rgba.exec(s),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=A.hsl.exec(s),o?{h:o[1],s:o[2],l:o[3]}:(o=A.hsla.exec(s),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=A.hsv.exec(s),o?{h:o[1],s:o[2],v:o[3]}:(o=A.hsva.exec(s),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=A.hex8.exec(s),o?{r:M(o[1]),g:M(o[2]),b:M(o[3]),a:ge(o[4]),format:f?"name":"hex8"}:(o=A.hex6.exec(s),o?{r:M(o[1]),g:M(o[2]),b:M(o[3]),format:f?"name":"hex"}:(o=A.hex4.exec(s),o?{r:M(o[1]+o[1]),g:M(o[2]+o[2]),b:M(o[3]+o[3]),a:ge(o[4]+o[4]),format:f?"name":"hex8"}:(o=A.hex3.exec(s),o?{r:M(o[1]+o[1]),g:M(o[2]+o[2]),b:M(o[3]+o[3]),format:f?"name":"hex"}:!1)))))))))}(t)),typeof t=="object"&&(R(t.r)&&R(t.g)&&R(t.b)?(e=t.r,a=t.g,r=t.b,n={r:255*m(e,255),g:255*m(a,255),b:255*m(r,255)},d=!0,x=String(t.r).substr(-1)==="%"?"prgb":"rgb"):R(t.h)&&R(t.s)&&R(t.v)?(h=j(t.s),c=j(t.v),n=function(s,f,o){s=6*m(s,360),f=m(f,100),o=m(o,100);var b=Math.floor(s),g=s-b,v=o*(1-f),w=o*(1-g*f),H=o*(1-(1-g)*f),V=b%6;return{r:255*[o,w,v,v,H,o][V],g:255*[H,o,o,w,v,v][V],b:255*[v,v,H,o,o,w][V]}}(t.h,h,c),d=!0,x="hsv"):R(t.h)&&R(t.s)&&R(t.l)&&(h=j(t.s),u=j(t.l),n=function(s,f,o){var b,g,v;if(s=m(s,360),f=m(f,100),o=m(o,100),f===0)g=o,v=o,b=o;else{var w=o<.5?o*(1+f):o+f-o*f,H=2*o-w;b=Y(H,w,s+1/3),g=Y(H,w,s),v=Y(H,w,s-1/3)}return{r:255*b,g:255*g,b:255*v}}(t.h,h,u),d=!0,x="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(l=t.a)),l=Me(l),{ok:d,format:t.format||x,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:l}}var _="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Z="[\\s|\\(]+(".concat(_,")[,|\\s]+(").concat(_,")[,|\\s]+(").concat(_,")\\s*\\)?"),ee="[\\s|\\(]+(".concat(_,")[,|\\s]+(").concat(_,")[,|\\s]+(").concat(_,")[,|\\s]+(").concat(_,")\\s*\\)?"),A={CSS_UNIT:new RegExp(_),rgb:new RegExp("rgb"+Z),rgba:new RegExp("rgba"+ee),hsl:new RegExp("hsl"+Z),hsla:new RegExp("hsla"+ee),hsv:new RegExp("hsv"+Z),hsva:new RegExp("hsva"+ee),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function R(t){return!!A.CSS_UNIT.exec(String(t))}var We=function(){function t(e,a){var r;if(e===void 0&&(e=""),a===void 0&&(a={}),e instanceof t)return e;typeof e=="number"&&(e=function(l){return{r:l>>16,g:(65280&l)>>8,b:255&l}}(e)),this.originalInput=e;var n=Te(e);this.originalInput=e,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=a.format)!==null&&r!==void 0?r:n.format,this.gradientType=a.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),a=e.r/255,r=e.g/255,n=e.b/255;return .2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Me(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){return this.toHsl().s===0},t.prototype.toHsv=function(){var e=de(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=de(this.r,this.g,this.b),a=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.v);return this.a===1?"hsv(".concat(a,", ").concat(r,"%, ").concat(n,"%)"):"hsva(".concat(a,", ").concat(r,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=he(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=he(this.r,this.g,this.b),a=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.l);return this.a===1?"hsl(".concat(a,", ").concat(r,"%, ").concat(n,"%)"):"hsla(".concat(a,", ").concat(r,"%, ").concat(n,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),pe(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),function(a,r,n,l,h){var c,u=[z(Math.round(a).toString(16)),z(Math.round(r).toString(16)),z(Math.round(n).toString(16)),z((c=l,Math.round(255*parseFloat(c)).toString(16)))];return h&&u[0].startsWith(u[0].charAt(1))&&u[1].startsWith(u[1].charAt(1))&&u[2].startsWith(u[2].charAt(1))&&u[3].startsWith(u[3].charAt(1))?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0)+u[3].charAt(0):u.join("")}(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),a=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(a,", ").concat(r,")"):"rgba(".concat(e,", ").concat(a,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(a){return"".concat(Math.round(100*m(a,255)),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(a){return Math.round(100*m(a,255))};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+pe(this.r,this.g,this.b,!1),a=0,r=Object.entries(ae);a<r.length;a++){var n=r[a],l=n[0];if(e===n[1])return l}return!1},t.prototype.toString=function(e){var a=!!e;e=e??this.format;var r=!1,n=this.a<1&&this.a>=0;return a||!n||!e.startsWith("hex")&&e!=="name"?(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):e==="name"&&this.a===0?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var a=this.toHsl();return a.l+=e/100,a.l=O(a.l),new t(a)},t.prototype.brighten=function(e){e===void 0&&(e=10);var a=this.toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-e/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-e/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-e/100*255))),new t(a)},t.prototype.darken=function(e){e===void 0&&(e=10);var a=this.toHsl();return a.l-=e/100,a.l=O(a.l),new t(a)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var a=this.toHsl();return a.s-=e/100,a.s=O(a.s),new t(a)},t.prototype.saturate=function(e){e===void 0&&(e=10);var a=this.toHsl();return a.s+=e/100,a.s=O(a.s),new t(a)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var a=this.toHsl(),r=(a.h+e)%360;return a.h=r<0?360+r:r,new t(a)},t.prototype.mix=function(e,a){a===void 0&&(a=50);var r=this.toRgb(),n=new t(e).toRgb(),l=a/100;return new t({r:(n.r-r.r)*l+r.r,g:(n.g-r.g)*l+r.g,b:(n.b-r.b)*l+r.b,a:(n.a-r.a)*l+r.a})},t.prototype.analogous=function(e,a){e===void 0&&(e=6),a===void 0&&(a=30);var r=this.toHsl(),n=360/a,l=[this];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,l.push(new t(r));return l},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var a=this.toHsv(),r=a.h,n=a.s,l=a.v,h=[],c=1/e;e--;)h.push(new t({h:r,s:n,v:l})),l=(l+c)%1;return h},t.prototype.splitcomplement=function(){var e=this.toHsl(),a=e.h;return[this,new t({h:(a+72)%360,s:e.s,l:e.l}),new t({h:(a+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var a=this.toRgb(),r=new t(e).toRgb(),n=a.a+r.a*(1-a.a);return new t({r:(a.r*a.a+r.r*r.a*(1-a.a))/n,g:(a.g*a.a+r.g*r.a*(1-a.a))/n,b:(a.b*a.a+r.b*r.a*(1-a.a))/n,a:n})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var a=this.toHsl(),r=a.h,n=[this],l=360/e,h=1;h<e;h++)n.push(new t({h:(r+h*l)%360,s:a.s,l:a.l}));return n},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();const Pe={key:0,class:"layui-tag-icon"},Oe={class:"layui-tag-text"},je=["onClick"],D=ve({name:"LayTag",props:{type:null,color:null,closable:{type:Boolean},size:{default:"md"},bordered:{type:Boolean,default:!0},disabled:{type:Boolean},shape:{default:"square"},maxWidth:null,variant:{default:"dark"}},emits:["close","check","update:checked"],setup(t,{emit:e}){const a=t,r=W(!0),n=u=>{a.disabled||e("close",u)},l=C(()=>["layui-tag",`layui-tag-size-${a.size}`,`layui-tag-shap-${a.shape}`,{[`layui-tag-variant-${a.variant}`]:a.variant,[`layui-tag-variant-${a.variant}-bordered`]:a.bordered,[`layui-tag-${a.type}-bordered`]:a.bordered,[`layui-tag-${a.type}`]:a.type,"layui-tag-bordered":a.bordered,"layui-tag-disabled":a.disabled}]),h=C(()=>{var u;return[{"max-width":(u=a.maxWidth)!=null?u:"100%",...(d=a,C(()=>{let x={};if(c.value,d.color||d.type){var s=void 0;d.color?s=d.color:s=getComputedStyle(document.documentElement).getPropertyValue(`--global-${d.type}-color`);const f=new We(s);if(d.variant==="dark"){const o=f.getBrightness()<190,b=o?"#FFF":"#000000";x={"background-color":s,"border-color":d.bordered?s:"transparent",color:b}}else d.variant==="light"?x={"background-color":f.tint(90).toString(),"border-color":d.bordered?f.tint(50).toString():"transparent",color:s}:d.variant==="plain"&&(x={"background-color":"transparent","border-color":d.bordered?s:"transparent",color:s})}return x})).value}];var d}),c=W(!0);return ye(()=>{var u=void 0;const d=document.documentElement;new MutationObserver(function(x){for(let s of x)if(s.type==="attributes"&&s.attributeName==="style"){const f=getComputedStyle(d).getPropertyValue(`--global-${a.type}-color`);(u==null||u!=null&&u!=f)&&(u=f,c.value=!c.value)}}).observe(d,{attributes:!0,attributeOldValue:!0,attributeFilter:["style"]})}),(u,d)=>r.value?(k(),$("span",{key:0,class:ke(y(l)),style:we(y(h))},[u.$slots.icon?(k(),$("span",Pe,[N(u.$slots,"icon")])):B("",!0),T("span",Oe,[N(u.$slots,"default")]),t.closable?(k(),$("span",{key:1,class:"layui-tag-close-icon",onClick:me(n,["stop"])},[N(u.$slots,"close-icon",{},()=>[te(y(xe),{type:"layui-icon-close"})])],8,je)):B("",!0)],6)):B("",!0)}}),et=be(D),De={key:0,class:"layui-tag-input-prepend"},Le={key:1},Ke={class:"layui-tag-input-inner"},Ue={class:"layui-tag-input-collapsed-panel"},Ge=["disabled","placeholder","readonly","onKeydown"],Je={key:2,class:"layui-tag-input-clear"},Qe={key:3,class:"layui-tag-input-suffix"},Xe={key:4,class:"layui-tag-input-append"},Ye=ve({name:"LayTagInput",props:{modelValue:null,inputValue:null,disabled:{type:Boolean},placeholder:{default:void 0},readonly:{type:Boolean},allowClear:{type:Boolean},max:null,minCollapsedNum:{default:0},collapseTagsTooltip:{type:Boolean},size:{default:"md"},tagProps:null,disabledInput:{type:Boolean}},emits:["change","update:modelValue","update:inputValue","inputValueChange","pressEnter","remove","clear","focus","blur"],setup(t,{expose:e,emit:a}){var r;const n=t,l=Be(),h=se(void 0),c=se(void 0),u=W(""),d=W(""),x=W(!1),s=ue({width:"15px"}),f=ue((r=n.tagProps)!=null?r:{}),o=_e(f,"closable","size","disabled"),b=C({get:()=>n.inputValue,set(i){a("update:inputValue",i),a("inputValueChange",i)}}),g=C({get:()=>n.modelValue,set(i){a("update:modelValue",i),a("change",i)}}),v=C(()=>{var i;return Fe((i=g.value)!=null?i:[])}),w=C(()=>{var i;if(v.value)return n.minCollapsedNum?(i=v.value)==null?void 0:i.slice(0,n.minCollapsedNum):v.value}),H=C(()=>{var i,p;if(v.value)return n.minCollapsedNum&&((i=v.value)==null?void 0:i.length)>n.minCollapsedNum?(p=v.value)==null?void 0:p.slice(n.minCollapsedNum):[]}),V=function(i){x.value||(b.value=i.target.value)},L=i=>{var p;i.type==="compositionend"?(x.value=!1,d.value="",V(i)):(x.value=!0,d.value=b.value+((p=i.data)!=null?p:""))},Se=i=>{var p;i.preventDefault();const S=b.value?String(b.value).trim():"";!S||!g.value||(n.max&&((p=g.value)==null?void 0:p.length)>=n.max||(g.value=g.value instanceof Array?g.value.concat(String(S)):[S],b.value=""),a("pressEnter",b.value,i))},Ae=i=>{var p;if(g.value&&g.value.length){if(!u.value&&["Backspace","Delete"].includes(i.code)){const S=v.value.length-1;K(v.value[S].value,S,i)}u.value=(p=b.value)!=null?p:""}},re=i=>{var p;a("focus",i),(p=c.value)==null||p.focus()},oe=i=>{var p;a("blur",i),(p=c.value)==null||p.blur()},$e=i=>{n.disabled||n.readonly||!n.allowClear||(g.value=[],a("clear",i))},K=(i,p,S)=>{if(!g.value)return;const q=[...g.value];q.splice(p,1),g.value=q,a("remove",i,S)},Ce=i=>{c.value&&(i.preventDefault(),c.value.focus())},ne=()=>{var i;h.value&&(i=h.value.offsetWidth,s.width=i>15?`${i}px`:"15px")},He=C(()=>["layui-tag-input",`layui-tag-input-${n.size}`,{"layui-tag-input-disabled":n.disabled}]),Fe=i=>i.map(p=>Ne(p)?p:{value:p,label:String(p),closable:!0});ze(h,()=>{ne()}),Ve(()=>b.value,i=>{c.value&&!x.value&&qe(()=>{c.value.value=i??""})});const Re=C(()=>{if(g.value&&w.value)return g.value.length-w.value.length});return ye(()=>{ne()}),e({focus:re,blur:oe}),(i,p)=>{var S,q,ie;return k(),$("div",{class:ke(y(He)),onMousedown:Ce},[T("span",{ref_key:"mirrorRefEl",ref:h,class:"layui-tag-input-mirror"},P(d.value||y(b)||t.placeholder),513),y(l).prepend?(k(),$("div",De,[N(i.$slots,"prepend")])):B("",!0),i.$slots.prefix?(k(),$("span",Le,[N(i.$slots,"prefix")])):B("",!0),T("span",Ke,[(k(!0),$(ce,null,fe(y(w),(F,E)=>(k(),G(D,Q({key:`${F}-${E}`},y(o),{closable:!t.readonly&&!t.disabled&&F.closable,size:t.size,onClose:U=>K(F.value,E,U)}),{default:I(()=>[J(P(F.label),1)]),_:2},1040,["closable","size","onClose"]))),128)),((S=y(w))==null?void 0:S.length)!=((q=y(g))==null?void 0:q.length)?(k(),G(Ee,{key:0,isDark:!1,trigger:"hover",popperStyle:"padding:6px",disabled:!t.collapseTagsTooltip},{content:I(()=>[T("div",Ue,[(k(!0),$(ce,null,fe(y(H),(F,E)=>(k(),G(D,Q({key:`${F}-${E}`},y(o),{closable:!t.readonly&&!t.disabled&&F.closable,size:t.size,onClose:U=>{var le;return K(F.value,E+((le=t.minCollapsedNum)!=null?le:0),U)}}),{default:I(()=>[J(P(F.label),1)]),_:2},1040,["closable","size","onClose"]))),128))])]),default:I(()=>[te(D,Q(y(o),{key:"more",closable:!1,size:t.size}),{default:I(()=>[J(" +"+P(y(Re))+"... ",1)]),_:1},16,["size"])]),_:1},8,["disabled"])):B("",!0),T("input",{ref_key:"inputRefEl",ref:c,class:"layui-tag-input-inner-input",style:we(s),disabled:t.disabled||t.disabledInput,placeholder:t.placeholder,readonly:t.readonly,onKeydown:Ie(Se,["enter"]),onKeyup:Ae,onInput:V,onFocus:re,onBlur:oe,onCompositionstart:L,onCompositionupdate:L,onCompositionend:L},null,44,Ge)]),t.allowClear&&((ie=y(g))!=null&&ie.length)&&!t.disabled?(k(),$("span",Je,[te(y(xe),{type:"layui-icon-close-fill",onClick:me($e,["stop"])},null,8,["onClick"])])):B("",!0),i.$slots.suffix?(k(),$("span",Qe,[N(i.$slots,"suffix")])):B("",!0),y(l).append?(k(),$("div",Xe,[N(i.$slots,"append")])):B("",!0)],34)}}});be(Ye);function tt(t,e){const a=X.confirm(t,{title:"提示",icon:3,btn:[{text:"确定",callback:()=>{e(),X.close(a)}},{text:"取消",callback:()=>{X.close(a)}}]})}export{et as $,Ye as M,tt as u};
