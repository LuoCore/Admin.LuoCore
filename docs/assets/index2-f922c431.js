import{f as c,j as T,d as $,S as z,v as D,r as w,k as x,z as C,a as v,l as o,x as t,t as n,q as d,s as S,e as V,n as b,F as f,H as L,G as M,a9 as F,aa as I,N as R}from"./index-2aad6dfc.js";const U={class:"layui-laypage layui-laypage-default"},q={style:{display:"none"}},E={key:0,class:"layui-laypage-count"},G=c("a",{class:"layui-laypage-spr"},"...",-1),H={key:0,class:"layui-laypage-curr"},A=["onClick"],J=c("a",{class:"layui-laypage-spr"},"...",-1),_={key:2,class:"layui-laypage-limits"},O=["value"],Q=[c("i",{class:"layui-icon layui-icon-refresh"},null,-1)],W={key:4,class:"layui-laypage-skip"},X=["disabled"],Y=$({name:"LayPage",props:{total:null,limit:{default:10},theme:null,showPage:{type:Boolean,default:!1},showSkip:{type:Boolean,default:!1},showCount:{type:Boolean,default:!1},showLimit:{type:Boolean,default:!0},showInput:{type:Boolean,default:!1},showRefresh:{type:Boolean,default:!1},pages:{default:10},limits:{default:()=>[10,20,30,40,50]},modelValue:{default:1}},emits:["update:modelValue","update:limit","change"],setup(s,{emit:m}){const p=s,{t:y}=z();D();const u=w(0),K=w(p.limits),k=x(()=>Math.floor(p.pages/2)),e=w(p.modelValue),h=w(e.value),r=w(p.limit);C(()=>p.limit,()=>{r.value=p.limit});const g=x(()=>{u.value=Math.ceil(p.total/r.value);let i=[];for(let a=u.value<=p.pages?1:e.value>k.value?u.value-e.value+1<k.value?e.value-(k.value+(k.value-(u.value-e.value+1))):e.value-k.value:1;!(i.length>=p.pages||a>u.value);a++)i.push(a);return i}),B=i=>{e.value=i,m("change",{current:e.value,limit:r.value})},j=()=>{e.value=h.value,m("change",{current:e.value,limit:r.value})},N=()=>{const i=Math.ceil(p.total/r.value);e.value>i&&(e.value=i),m("change",{current:e.value,limit:r.value})},P=()=>{m("change",{current:e.value,limit:r.value})};return C(r,()=>{m("update:limit",r.value)}),C(e,()=>{const i=g.value[0],a=g.value[g.value.length-1];e.value>a&&(e.value=a),e.value<i&&(e.value=i),h.value=e.value,m("update:modelValue",e.value)}),C(()=>p.modelValue,()=>{e.value=p.modelValue,h.value=e.value}),(i,a)=>(v(),o("div",U,[c("div",q,t(n(g)),1),s.showCount?(v(),o("span",E,t(n(y)("page.total"))+" "+t(s.total)+" "+t(n(y)("page.item")),1)):d("",!0),c("a",{href:"javascript:;",class:b(["layui-laypage-prev",[e.value===1?"layui-disabled":"",s.theme&&e.value!==1?"layui-laypage-a-"+s.theme:""]]),onClick:a[0]||(a[0]=l=>{e.value!==1&&(e.value--,m("change",{current:e.value,limit:r.value}))})},[S(i.$slots,"prev",{},()=>[V(t(n(y)("page.previous")),1)])],2),s.showPage?(v(),o(f,{key:1},[n(g)[0]!=1?(v(),o(f,{key:0},[c("a",{href:"javascript:;",class:"layui-laypage-first",onClick:a[1]||(a[1]=l=>B(1))}," 1 "),G],64)):d("",!0),(v(!0),o(f,null,L(n(g),l=>(v(),o(f,{key:l},[l===e.value?(v(),o("span",H,[c("em",{class:b(["layui-laypage-em",[s.theme?"layui-bg-"+s.theme:""]])},null,2),c("em",null,t(l),1)])):(v(),o("a",{key:1,href:"javascript:;",onClick:Z=>B(l),class:b([s.theme?"layui-laypage-a-"+s.theme:""])},t(l),11,A))],64))),128)),n(g)[n(g).length-1]!=u.value?(v(),o(f,{key:1},[J,c("a",{href:"javascript:;",class:"layui-laypage-last",onClick:a[2]||(a[2]=l=>B(u.value))},t(u.value),1)],64)):d("",!0)],64)):d("",!0),c("a",{href:"javascript:;",class:b(["layui-laypage-next",[e.value===u.value||u.value===0?"layui-disabled":"",s.theme&&e.value!==u.value&&u.value!==0?"layui-laypage-a-"+s.theme:""]]),onClick:a[3]||(a[3]=l=>{e.value!==u.value&&u.value!==0&&(e.value++,m("change",{current:e.value,limit:r.value}))})},[S(i.$slots,"next",{},()=>[V(t(n(y)("page.next")),1)])],2),s.showLimit?(v(),o("span",_,[M(c("select",{"onUpdate:modelValue":a[4]||(a[4]=l=>r.value=l),onChange:N},[(v(!0),o(f,null,L(K.value,l=>(v(),o("option",{key:l,value:l},t(l)+" "+t(n(y)("page.item"))+"/"+t(n(y)("page.page")),9,O))),128))],544),[[F,r.value]])])):d("",!0),s.showRefresh?(v(),o("a",{key:3,href:"javascript:;",onClick:P,class:"layui-laypage-refresh"},Q)):d("",!0),p.showSkip?(v(),o("span",W,[V(t(n(y)("page.goTo"))+" ",1),M(c("input",{"onUpdate:modelValue":a[5]||(a[5]=l=>h.value=l),onKeypress:a[6]||(a[6]=R(l=>j(),["enter"])),type:"number",class:"layui-input layui-input-number"},null,544),[[I,h.value]]),V(t(n(y)("page.page"))+" ",1),c("button",{type:"button",class:"layui-laypage-btn",onClick:a[7]||(a[7]=l=>j()),disabled:h.value>u.value||h.value==e.value},t(n(y)("page.confirm")),9,X)])):d("",!0)]))}}),ae=T(Y);export{Y as I,ae as K};
