import{j as H,d as O,k as p,a8 as q,r as d,z as w,af as g,a as z,l as A,b as v,w as f,f as D,t as s,a3 as U,c as _,a4 as E,n as B,ae as G,a0 as J}from"./index-6c35e04c.js";import{M as P}from"./index2-e4a3b41c.js";import{M as Q}from"./index2-636e5460.js";const W={class:"layui-tree-select-content"},ee=H(O({name:"LayTreeSelect",props:{data:null,modelValue:null,disabled:{type:Boolean,default:!1},placeholder:null,multiple:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},collapseTagsTooltip:{type:Boolean,default:!0},minCollapsedNum:{default:3},size:null,checkStrictly:{type:Boolean,default:!0},search:{type:Boolean,default:!1},contentClass:null,contentStyle:null},emits:["update:modelValue","change","search"],setup(o,{emit:n}){const t=o,{size:S}=function(l){return{size:p(()=>{const e=q("LayForm",{});return l.size||e.size||"md"})}}(t),i=d(),m=d(),y=d(),C=d([]),h=d(!1),V=d(),k=d(!1),u=p({get:()=>t.multiple&&t.modelValue==null?[]:t.modelValue,set(l){n("update:modelValue",l),n("change",l)}}),c=p({get:()=>t.multiple?t.modelValue:[],set(l){t.multiple&&(n("update:modelValue",l),n("change",l))}});w([u,i],()=>{if(t.multiple)try{C.value=u.value.map(l=>{var e=g(t.data,l);return e&&(e.label=e.title,e.value=e.id,e.closable=!e.disabled),e==null&&(e={label:l,value:l,closable:!0}),e})}catch{throw new Error("v-model / model-value is not an array type")}else{const l=g(t.data,u.value);y.value=l?l.title:""}},{immediate:!0,deep:!0});const T=function(){t.multiple?n("update:modelValue",[]):n("update:modelValue","")},R=l=>{t.multiple||(V.value.hide(),u.value=l.id)},$=l=>{if(V.value.hide(),t.checkStrictly)n("update:modelValue",c.value.filter(e=>e!=l));else{const e=g(t.data,l),a=j(e);n("update:modelValue",c.value.filter(r=>!a.includes(r)))}},j=l=>{const e=[];return function a(r,K){K.push(r.id),r.children&&r.children.forEach(F=>{a(F,K)})}(l,e),e},x=p(()=>t.multiple?c.value.length>0:u.value!==""&&u.value!==void 0&&u.value!==null),N=p(()=>x.value?"":t.placeholder),b=l=>{k.value||(n("search",l),m.value=l)},L=()=>{k.value=!0},M=l=>{k.value=!1,b(l.target.value)};function I(l,e){return l.map(a=>({...a})).filter(a=>(a.children=a.children&&I(a.children,e),e(a)||a.children&&a.children.length))}return w(m,()=>{m.value===""?i.value=t.data:i.value=I(t.data,l=>l.title.indexOf(m.value)>-1)}),w(()=>t.data,()=>{i.value=t.data},{immediate:!0,deep:!0}),(l,e)=>(z(),A("div",{class:B(["layui-tree-select",{"layui-disabled":o.disabled,"has-content":s(x),"has-clear":o.allowClear}])},[v(J,{ref_key:"dropdownRef",ref:V,disabled:o.disabled,contentClass:o.contentClass,contentStyle:o.contentStyle,"update-at-scroll":!0,onShow:e[4]||(e[4]=a=>h.value=!0),onHide:e[5]||(e[5]=a=>h.value=!1)},{content:f(()=>[D("div",W,[v(Q,{data:i.value,onlyIconControl:!0,"show-checkbox":o.multiple,"check-strictly":o.checkStrictly,selectedKey:s(u),"onUpdate:selectedKey":e[2]||(e[2]=a=>U(u)?u.value=a:null),checkedKeys:s(c),"onUpdate:checkedKeys":e[3]||(e[3]=a=>U(c)?c.value=a:null),onNodeClick:R},null,8,["data","show-checkbox","check-strictly","selectedKey","checkedKeys"])])]),default:f(()=>[o.multiple?(z(),_(P,{key:0,size:s(S),"allow-clear":o.allowClear,placeholder:s(N),collapseTagsTooltip:o.collapseTagsTooltip,minCollapsedNum:o.minCollapsedNum,disabledInput:!o.search,onInputValueChange:b,onRemove:$,onClear:T,modelValue:C.value,"onUpdate:modelValue":e[0]||(e[0]=a=>C.value=a)},{suffix:f(()=>[v(s(E),{type:"layui-icon-triangle-d",class:B({triangle:h.value})},null,8,["class"])]),_:1},8,["size","allow-clear","placeholder","collapseTagsTooltip","minCollapsedNum","disabledInput","modelValue"])):(z(),_(G,{key:1,modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=a=>y.value=a),"allow-clear":o.allowClear,placeholder:s(N),disabled:o.disabled,readonly:!o.search,size:s(S),onClear:T,onInput:b,onCompositionstart:L,onCompositionend:M},{suffix:f(()=>[v(s(E),{type:"layui-icon-triangle-d",class:B({triangle:h.value})},null,8,["class"])]),_:1},8,["modelValue","allow-clear","placeholder","disabled","readonly","size"]))]),_:1},8,["disabled","contentClass","contentStyle"])],2))}}));export{ee as V};
