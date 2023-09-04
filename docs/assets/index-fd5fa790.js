import{j as S,d as $,r as m,ab as I,k as s,z as N,ac as O,X as r,a as p,l as v,f as T,n as q,m as F,t as i,b as L,a4 as R,q as f,x as A}from"./index-c7b5f3e4.js";const D={class:"layui-textarea-wrapper"},E=["rows","cols","value","placeholder","name","disabled","maxlength"],X={key:0,class:"layui-textarea-clear"},G={key:1,class:"layui-texterea-count"},K=S($({name:"LayTextarea",props:{modelValue:null,name:null,placeholder:null,disabled:{type:Boolean},showCount:{type:Boolean},allowClear:{type:Boolean},cols:null,rows:null,maxlength:null,autosize:{type:[Boolean,Object]}},emits:["blur","input","update:modelValue","change","focus","clear"],setup(a,{expose:x,emit:o}){const l=a,n=m(null),c=m(!1),g=I(),d=m("auto"),y=s(()=>({width:l.cols?"":"100%",height:l.rows?"":d.value,minHeight:l.rows?"":"100px"})),b=s(()=>Object.assign(y.value,g.style)),h=function(e){const t=e.target;c.value||(o("update:modelValue",t.value),r(()=>{o("input",t.value)}))},w=function(e){o("focus",e)},V=function(e){o("blur",e)},k=e=>{const t=e.target;o("change",t.value)},B=function(){o("update:modelValue",""),o("clear")},_=()=>{c.value=!0},z=e=>{c.value=!1,h(e)},C=s(()=>{var e;return((e=l.modelValue)==null?void 0:e.length)>0}),H=s(()=>{var e,t;let u=String((t=(e=l.modelValue)==null?void 0:e.length)!=null?t:0);return l.maxlength&&(u+="/"+l.maxlength),u});return N([()=>l.modelValue,n],()=>{var e;if(!n.value||!l.autosize)return;const t=((e=n.value)==null?void 0:e.scrollHeight)+2;if(O(l.autosize)){const{minHeight:u,maxHeight:j}=l.autosize;if(t<u||t>j)return}d.value="1px",r(()=>{var u;d.value=`${((u=n.value)==null?void 0:u.scrollHeight)+2}px`})},{immediate:!0}),x({focus:()=>{r(()=>{var e;(e=n.value)==null||e.focus()})},blur:()=>{r(()=>{var e;(e=n.value)==null||e.blur()})}}),(e,t)=>(p(),v("div",D,[T("textarea",{ref_key:"textareaRef",ref:n,class:q(["layui-textarea",{"layui-textarea-disabled":a.disabled}]),rows:a.rows,cols:a.cols,value:a.modelValue,placeholder:a.placeholder,name:a.name,disabled:a.disabled,maxlength:a.maxlength,style:F(i(b)),onCompositionstart:_,onCompositionend:z,onInput:h,onFocus:w,onChange:k,onBlur:V},null,46,E),a.allowClear&&i(C)?(p(),v("span",X,[L(i(R),{type:"layui-icon-close-fill",onClick:B})])):f("",!0),a.showCount?(p(),v("div",G,A(i(H)),1)):f("",!0)]))}}));export{K as C};
