import{r as L}from"./index-8a034af5.js";import{d as M,r as i,o as V,B as A,C as G,D as K,E as k,a as n,c as r,w as a,b as l,t as c,G as d,e as u,f as U,x as Z,I as q,Z as m,A as j,V as F}from"./index-6acea29e.js";import{x as J}from"./index-1a1c2b81.js";import{_ as O}from"./index-af09c493.js";import{_ as P}from"./CategoryEditDialog.vue_vue_type_script_setup_true_lang-ab695504.js";import{u as Q}from"./useConfirm-290a5cff.js";import{b as W,c as X}from"./Blogs-545b60a8.js";import"./index2-cd0a4242.js";import"./index2-7dd06883.js";import"./index-bd34fa44.js";import"./index-3f021a5e.js";import"./index2-1f812a98.js";import"./index2-b5b6ddb4.js";import"./index2-8b56d984.js";const Y=[{key:"categoryId",title:"分类Id",width:"80px",fixed:"left",sort:"desc"},{key:"categoryName",title:"分类名称",width:"150px"},{key:"categoryDescription",title:"分类描述",align:"center",width:"400px"},{key:"isDisable",title:"是否禁用",align:"center",width:"100px",customSlot:"isDisable"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"userName",title:"创建人",align:"center",width:"100px"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],ge=M({__name:"index",setup(ee){var D;const v=i(window.innerHeight-300);V(()=>{window.addEventListener("resize",b)});function b(){v.value=window.innerHeight-300}const C=i(!1),{loading:S,setLoading:p}=A(!0),T=((D=G().meta)==null?void 0:D.title)||"";i();const _=i([]),h=i([]),E=i(["filter"]);K({current:1,limit:10,total:0,showRefresh:!0});const f=i(!1),w=i();p(!1);async function y(o){p(!0);try{let e={categoryName:"",timeState:new Date,timeEnd:new Date};e.timeState.setDate(e.timeState.getDate()-1),e.timeEnd.setDate(e.timeEnd.getDate());const s=await W(e);if(!s||!s.isSuccess)return;_.value=s.responseData}catch{}finally{p(!1)}}function z(o){if(!o){m.msg("请选择用户",{icon:2,time:2e3});return}Q("确定要删除这条数据吗？",async()=>{try{const e=await X(o);if(!e||!e.isSuccess){m.confirm(e.message||"操作失败",{icon:2});return}m.msg(e.message||"操作成功",{icon:1}),y()}catch(e){m.msg(e.message,{icon:2})}finally{}})}function x(o){w.value=o,f.value=!0}return(o,e)=>{const s=j,I=F,N=O,$=J,H=L,g=k("any-permission"),R=k("permission");return n(),r(H,{fluid:"true",class:"z-container"},{default:a(()=>[l($,{title:c(T)},{default:a(()=>[l(N,{id:"categoryId","selected-keys":h.value,"onUpdate:selectedKeys":e[2]||(e[2]=t=>h.value=t),"children-column-name":"childrenCategorys",height:`${v.value}px`,"default-expand-all":C.value,loading:c(S),columns:c(Y),"data-source":_.value,"default-toolbar":E.value,"expand-index":1},{toolbar:a(()=>[d((n(),r(s,{size:"sm",type:"normal",onClick:e[0]||(e[0]=t=>y())},{default:a(()=>[u(" 查询 ")]),_:1})),[[g,["sys:user:add","sys:user:save"]]]),d((n(),r(s,{size:"sm",type:"primary",onClick:e[1]||(e[1]=t=>x())},{default:a(()=>[u(" 新增 ")]),_:1})),[[g,["sys:user:add","sys:user:save"]]])]),operator:a(({row:t})=>[d((n(),r(s,{size:"xs",type:"primary",onClick:B=>x(t)},{default:a(()=>[u(" 修改 ")]),_:2},1032,["onClick"])),[[g,["sys:user:edit","sys:user:update"]]]),d((n(),r(s,{size:"xs",type:"danger",onClick:B=>z(t.articleId)},{default:a(()=>[u(" 删除 ")]),_:2},1032,["onClick"])),[[R,"sys:user:delete"]])]),createTime:a(({row:t})=>[U("span",null,Z(c(q)(t.createTime,"yyyy-M-d H:m:s")),1)]),isDisable:a(({row:t})=>[l(I,{"model-value":t.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","height","default-expand-all","loading","columns","data-source","default-toolbar"])]),_:1},8,["title"]),l(P,{visible:f.value,"onUpdate:visible":e[3]||(e[3]=t=>f.value=t),data:w.value,onDone:y},null,8,["visible","data"])]),_:1})}}});export{ge as default};
