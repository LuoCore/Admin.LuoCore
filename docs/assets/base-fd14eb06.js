import{r as x}from"./index-e2ed7113.js";import{r as c,S as b,_ as S,a as C,c as B,w as e,b as a,e as s,x as m,M as E,N as F,A as K,O as D}from"./index-a5a9e71e.js";import{_ as N}from"./index-c7ea6aab.js";import{x as z}from"./index-02b99dd4.js";import{a as A,u as T}from"./index-1295ec85.js";import"./index2-e1c285aa.js";import"./index2-fdd70e22.js";const O={setup(){const p=c(["1"]),l=c(!0),_=c(!0),o=c({total:100,limit:10,current:2});return{columns:[{title:"复选",width:"50px",type:"checkbox",fixed:"left"},{title:"账户",width:"200px",customSlot:"username",key:"username"},{title:"密码",width:"180px",customSlot:"password",key:"password"},{title:"年龄",width:"180px",key:"age"},{title:"描述",key:"remark",ellipsisTooltip:!0},{title:"操作",width:"180px",customSlot:"operator",key:"operator",fixed:"right"}],dataSource:[{id:"1",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"2",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"3",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"4",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"5",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"6",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"7",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"8",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"9",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"10",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"},{id:"11",username:"shana",password:"夏娜",remark:"花开堪折直须折,莫待无花空折枝",age:"22"}],selectedKeys:p,checkbox:l,defaultToolbar:_,page:o,rowClick:function(t){console.log(JSON.stringify(t))},rowDoubleClick:function(t){console.log(JSON.stringify(t))},change:function({current:t,limit:u}){b.msg("current:"+t+" limit:"+u)}}}};function J(p,l,_,o,y,w){const i=E,d=F,r=A,t=K,u=T,g=D,f=z,h=N,k=x;return C(),B(k,{fluid:"true",style:{padding:"10px"}},{default:e(()=>[a(u,{space:10},{default:e(()=>[a(r,{md:24},{default:e(()=>[a(f,null,{default:e(()=>[a(g,{style:{"margin-top":"20px"}},{default:e(()=>[a(u,null,{default:e(()=>[a(r,{md:6},{default:e(()=>[a(d,{label:"账号：","label-width":"50"},{default:e(()=>[a(i,{style:{width:"90%"}})]),_:1})]),_:1}),a(r,{md:6},{default:e(()=>[a(d,{label:"邮箱：","label-width":"50"},{default:e(()=>[a(i,{style:{width:"90%"}})]),_:1})]),_:1}),a(r,{md:6},{default:e(()=>[a(d,{"label-width":"0"},{default:e(()=>[a(t,{type:"primary"},{default:e(()=>[s("查询")]),_:1}),a(t,null,{default:e(()=>[s("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{md:24},{default:e(()=>[a(f,null,{default:e(()=>[a(h,{page:o.page,columns:o.columns,dataSource:o.dataSource,"default-toolbar":o.defaultToolbar,selectedKeys:o.selectedKeys,"onUpdate:selectedKeys":l[0]||(l[0]=n=>o.selectedKeys=n),onRow:o.rowClick,onChange:o.change},{toolbar:e(()=>[a(t,{size:"sm",type:"primary"},{default:e(()=>[s("新增")]),_:1}),a(t,{size:"sm"},{default:e(()=>[s("删除")]),_:1})]),username:e(({data:n})=>[s(m(n.username),1)]),password:e(({data:n})=>[s(m(n.password),1)]),operator:e(({})=>[a(t,{size:"xs",type:"primary"},{default:e(()=>[s("修改")]),_:1}),a(t,{size:"xs"},{default:e(()=>[s("删除")]),_:1})]),footer:e(()=>[s(m(o.selectedKeys),1)]),_:1},8,["page","columns","dataSource","default-toolbar","selectedKeys","onRow","onChange"])]),_:1})]),_:1})]),_:1})]),_:1})}const G=S(O,[["render",J]]);export{G as default};
