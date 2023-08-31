import{j as x,d as $,k as a,a as s,l as c,f as i,t as o,m as n,x as u,q as h,n as y}from"./index-c7b5f3e4.js";const b={key:0,class:"lay-progress-circle"},m=["viewBox","width","height"],z=["d"],w=["d"],S={key:0,class:"layui-progress-text lay-progress-circle__text"},v={key:0,class:"layui-progress-text"},W=x($({name:"LayProgress",props:{percent:null,theme:null,color:null,size:null,showText:{type:Boolean},text:null,circle:{type:Boolean,default:!1},circleSize:{default:150},circleWidth:{default:6}},setup(t){const r=t,f=a(()=>[r.color?"background-color: "+r.color:"",{width:r.percent+"%"}]),k=a(()=>{let e;switch(r.theme){case"red":e="#ff5722";break;case"orange":e="#ffb800";break;case"green":e="#009688";break;case"cyan":e="#2f4056";break;case"blue":e="#1e9fff";break;case"black":e="#393d49";break;case"gray":e="#fafafa";break;default:e="#5FB878"}return e=r.color?r.color:e,e});a(()=>{let e;return e=typeof r.percent=="string"?parseInt(r.percent):r.percent,e/100*360});const g=a(()=>{let e;e=typeof r.percent=="string"?parseInt(r.percent):r.percent;let l=r.circleSize/2-r.circleWidth/2,d=2*Math.PI*l;return`${e/100*d}px ${d}px`}),p=a(()=>{let e=r.circleSize,l=r.circleWidth;return`M ${e/2} ${e/2} m 0, -${(e-l)/2} a ${(e-l)/2}, ${(e-l)/2} 0 1, 1 0, ${e-l} a ${(e-l)/2}, ${(e-l)/2} 0 1, 1 0, -${e-l}`});return(e,l)=>t.circle?(s(),c("div",b,[(s(),c("svg",{viewBox:`0 0 ${t.circleSize} ${t.circleSize}`,width:t.circleSize,height:t.circleSize},[i("path",{d:o(p),style:n([{fill:"none",stroke:"var(--global-neutral-color-3)"},{strokeWidth:`${t.circleWidth}px`}])},null,12,z),i("path",{d:o(p),style:n([{fill:"none","stroke-linecap":"round"},{strokeDasharray:o(g),stroke:o(k),strokeWidth:`${t.circleWidth}px`}])},null,12,w)],8,m)),t.showText?(s(),c("div",S,u(t.text?t.text:t.percent+"%"),1)):h("",!0)])):(s(),c("div",{key:1,class:y(["layui-progress","layui-progress-"+t.size])},[i("div",{class:y(["layui-progress-bar","layui-bg-"+t.theme]),style:n(o(f))},[t.showText?(s(),c("span",v,u(t.text?t.text:t.percent+"%"),1)):h("",!0)],6)],2))}}));export{W as k};
