import{r as H}from"./index-8a034af5.js";import{d as K,C as Z,B as A,r as l,D as G,E as z,a as o,c as u,w as a,b as c,t as m,G as p,e as d,f as x,l as Q,F as j,H as J,x as w,I as P,Z as y,A as O,V as W}from"./index-6acea29e.js";import{x as X}from"./index-1a1c2b81.js";import{_ as Y}from"./index-af09c493.js";/* empty css              */import{u as ee}from"./useConfirm-290a5cff.js";import te from"./issuesTypeEditDialog-cf13de61.js";import{c as se,d as ae}from"./Issues-2dbf0f21.js";import{$ as ie}from"./index2-b5b6ddb4.js";import"./index2-cd0a4242.js";import"./index2-7dd06883.js";import"./index-bd34fa44.js";import"./index-69d0110e.js";const oe=[{key:"issuesTypeId",title:"序号",width:"80px",fixed:"left",sort:"desc"},{key:"issuesTypeName",title:"系统类型名称",width:"150px"},{key:"issuesTypeDescription",title:"系统类型描述",align:"center",width:"400px"},{key:"sortId",title:"排序号",align:"center",width:"400px"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],ne={style:{display:"grid"}},De=K({__name:"index",setup(re){var C;const I=((C=Z().meta)==null?void 0:C.title)||"",{loading:V,setLoading:f}=A(!0),B=l(),D=l([]),k=l([]),M=l(["filter"]),g=G({current:1,limit:10,total:0,showRefresh:!0}),_=l(!1),T=l(),i={currentPageNum:1,pageSize:10};f(!1);function v(s){const e={requestData:s||i.requestData,pageSize:i.pageSize,currentPageNum:i.currentPageNum};S(e)}async function S(s){f(!0);try{const e=await se(s);if(!e||!e.isSuccess)return;s&&s.currentPageNum&&(g.current=s.currentPageNum),g.total=e.pageCount,D.value=e.responseData}catch{}finally{f(!1)}}function R(s){const e=B.value.formModel;i.pageSize=s.limit,i.currentPageNum=s.current;const n={requestData:e,pageSize:i.pageSize,currentPageNum:i.currentPageNum};S(n)}function $(s){if(!s){y.msg("无法获取到行的数据信息",{icon:2,time:2e3});return}ee("确定要删除这条数据吗？",async()=>{try{const e=await ae(s.issuesTypeId);if(!e||!e.isSuccess){y.confirm(e.message||"操作失败",{icon:2});return}y.msg(e.message||"操作成功",{icon:1}),v()}catch(e){y.msg(e.message,{icon:2})}finally{}})}function b(s){T.value=s,_.value=!0}return(s,e)=>{const n=O,E=ie,N=W,L=Y,U=X,q=H,h=z("any-permission"),F=z("permission");return o(),u(q,{fluid:"true",class:"z-container"},{default:a(()=>[c(U,{title:m(I)},{default:a(()=>[c(L,{"selected-keys":k.value,"onUpdate:selectedKeys":e[2]||(e[2]=t=>k.value=t),loading:m(V),page:g,columns:m(oe),"data-source":D.value,"default-toolbar":M.value,"auto-cols-width":!0,"max-height":"450px",onChange:R},{toolbar:a(()=>[p((o(),u(n,{size:"sm",type:"normal",onClick:e[0]||(e[0]=t=>v())},{default:a(()=>[d(" 查询 ")]),_:1})),[[h,["sys:user:add","sys:user:save"]]]),p((o(),u(n,{size:"sm",type:"primary",onClick:e[1]||(e[1]=t=>b())},{default:a(()=>[d(" 新增 ")]),_:1})),[[h,["sys:user:add","sys:user:save"]]])]),operator:a(({row:t})=>[p((o(),u(n,{size:"xs",type:"primary",onClick:r=>b(t)},{default:a(()=>[d(" 修改 ")]),_:2},1032,["onClick"])),[[h,["sys:user:edit","sys:user:update"]]]),p((o(),u(n,{size:"xs",type:"danger",onClick:r=>$(t)},{default:a(()=>[d(" 删除 ")]),_:2},1032,["onClick"])),[[F,"sys:user:delete"]])]),tagNames:a(({row:t})=>[x("div",ne,[(o(!0),Q(j,null,J(t.tagNames,r=>(o(),u(E,{key:r,"max-width":"100px",style:{margin:"2px"}},{default:a(()=>[d(w(r||"无"),1)]),_:2},1024))),128))])]),isShow:a(({row:t})=>[c(N,{modelValue:t.isShow,"onUpdate:modelValue":r=>t.isShow=r,"onswitch-text":"显示","unswitch-text":"不显示"},null,8,["modelValue","onUpdate:modelValue"])]),createTime:a(({row:t})=>[x("span",null,w(m(P)(t.createTime,"yyyy-M-d H:m:s")),1)]),issueTime:a(({row:t})=>[x("span",null,w(m(P)(t.issueTime,"yyyy-M-d H:m:s")),1)]),isDisable:a(({row:t})=>[c(N,{"model-value":t.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","loading","page","columns","data-source","default-toolbar"])]),_:1},8,["title"]),c(te,{visible:_.value,"onUpdate:visible":e[3]||(e[3]=t=>_.value=t),"edit-data":T.value,onDone:v},null,8,["visible","edit-data"])]),_:1})}}});export{De as default};
