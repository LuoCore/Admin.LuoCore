import{j as q,d as F,k as p,a4 as H,r as d,z as w,aq as g,a as z,l as O,b as v,w as f,f as D,t as n,ak as U,c as _,a8 as E,n as B,a6 as G,aa as J}from"./index-53adf29b.js";import{M as P}from"./index2-31d7a95a.js";import{M as Q}from"./index2-3ad2494b.js";const W={class:"layui-tree-select-content"},ee=q(F({name:"LayTreeSelect",props:{data:null,modelValue:null,disabled:{type:Boolean,default:!1},placeholder:null,multiple:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},collapseTagsTooltip:{type:Boolean,default:!0},minCollapsedNum:{default:3},size:null,checkStrictly:{type:Boolean,default:!0},search:{type:Boolean,default:!1},contentClass:null,contentStyle:null},emits:["update:modelValue","change","search"],setup(o,{emit:s}){const t=o,{size:S}=function(l){return{size:p(()=>{const e=H("LayForm",{});return l.size||e.size||"md"})}}(t),c=d(),m=d(),y=d(),C=d([]),h=d(!1),V=d(),k=d(!1),u=p({get:()=>t.multiple&&t.modelValue==null?[]:t.modelValue,set(l){s("update:modelValue",l),s("change",l)}}),i=p({get:()=>t.multiple?t.modelValue:[],set(l){t.multiple&&(s("update:modelValue",l),s("change",l))}});w([u,c],()=>{if(t.multiple)try{C.value=u.value.map(l=>{var e=g(t.data,l);return e&&(e.label=e.title,e.value=e.id,e.closable=!e.disabled),e==null&&(e={label:l,value:l,closable:!0}),e})}catch{throw new Error("v-model / model-value is not an array type")}else{const l=g(t.data,u.value);y.value=l?l.title:""}},{immediate:!0,deep:!0});const T=function(){t.multiple?s("update:modelValue",[]):s("update:modelValue","")},R=l=>{t.multiple||(V.value.hide(),u.value=l.id)},$=l=>{if(V.value.hide(),t.checkStrictly)s("update:modelValue",i.value.filter(e=>e!=l));else{const e=g(t.data,l),a=j(e);s("update:modelValue",i.value.filter(r=>!a.includes(r)))}},j=l=>{const e=[];return function a(r,K){K.push(r.id),r.children&&r.children.forEach(M=>{a(M,K)})}(l,e),e},x=p(()=>Array.isArray(u)?u.value.length>0:u.value!=""&&u.value!=null&&u.value!=null),N=p(()=>x.value?"":t.placeholder),b=l=>{k.value||(s("search",l),m.value=l)},A=()=>{k.value=!0},L=l=>{k.value=!1,b(l.target.value)};function I(l,e){return l.map(a=>({...a})).filter(a=>(a.children=a.children&&I(a.children,e),e(a)||a.children&&a.children.length))}return w(m,()=>{m.value===""?c.value=t.data:c.value=I(t.data,l=>l.title.indexOf(m.value)>-1)}),w(()=>t.data,()=>{c.value=t.data},{immediate:!0,deep:!0}),(l,e)=>(z(),O("div",{class:B(["layui-tree-select",{"layui-disabled":o.disabled,"has-content":n(x),"has-clear":o.allowClear}])},[v(J,{ref_key:"dropdownRef",ref:V,disabled:o.disabled,contentClass:o.contentClass,contentStyle:o.contentStyle,"update-at-scroll":!0,onShow:e[4]||(e[4]=a=>h.value=!0),onHide:e[5]||(e[5]=a=>h.value=!1)},{content:f(()=>[D("div",W,[v(Q,{data:c.value,onlyIconControl:!0,"show-checkbox":o.multiple,"check-strictly":o.checkStrictly,selectedKey:n(u),"onUpdate:selectedKey":e[2]||(e[2]=a=>U(u)?u.value=a:null),checkedKeys:n(i),"onUpdate:checkedKeys":e[3]||(e[3]=a=>U(i)?i.value=a:null),onNodeClick:R},null,8,["data","show-checkbox","check-strictly","selectedKey","checkedKeys"])])]),default:f(()=>[o.multiple?(z(),_(P,{key:0,size:n(S),"allow-clear":o.allowClear,placeholder:n(N),collapseTagsTooltip:o.collapseTagsTooltip,minCollapsedNum:o.minCollapsedNum,disabledInput:!o.search,onInputValueChange:b,onRemove:$,onClear:T,modelValue:C.value,"onUpdate:modelValue":e[0]||(e[0]=a=>C.value=a)},{suffix:f(()=>[v(n(E),{type:"layui-icon-triangle-d",class:B({triangle:h.value})},null,8,["class"])]),_:1},8,["size","allow-clear","placeholder","collapseTagsTooltip","minCollapsedNum","disabledInput","modelValue"])):(z(),_(G,{key:1,modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=a=>y.value=a),"allow-clear":o.allowClear,placeholder:n(N),disabled:o.disabled,readonly:!o.search,size:n(S),onClear:T,onInput:b,onCompositionstart:A,onCompositionend:L},{suffix:f(()=>[v(n(E),{type:"layui-icon-triangle-d",class:B({triangle:h.value})},null,8,["class"])]),_:1},8,["modelValue","allow-clear","placeholder","disabled","readonly","size"]))]),_:1},8,["disabled","contentClass","contentStyle"])],2))}}));export{ee as V};
