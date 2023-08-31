import{r as G}from"./index-b873fbdd.js";import{d as R,B as H,C as K,r as n,D as M,E as w,a as o,c as i,w as s,b as c,t as p,G as d,e as l,f as Z,l as b,F as q,H as A,x as T,q as j,Z as y,A as J,V as O}from"./index-9c77520b.js";import{x as P}from"./index-a07f0d91.js";import{_ as Q}from"./index-7ab2fe9b.js";/* empty css              */import{u as W}from"./useConfirm-3d6c3304.js";import{f as X}from"./common-42edaf76.js";import Y from"./SystemClientEditDialog-0618cf83.js";import ee from"./SystemClientSearchForm-ebd70c05.js";import{G as te,D as se}from"./Basic-e37710ac.js";import{$ as ae}from"./index2-5bd3cf1b.js";import"./index2-f0c41502.js";import"./index2-72193fcd.js";import"./index-ff45222d.js";import"./index-481feabf.js";const oe=[{key:"systemClientId",title:"序号",width:"80px",fixed:"left",sort:"desc"},{key:"systemClientName",title:"系统客户名称",width:"150px"},{key:"systemClientDescription",title:"系统客户描述",align:"center",width:"400px"},{key:"sortId",title:"排序号",align:"center",width:"80px"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],ie={style:{display:"grid"}},re={key:0},De=R({__name:"index",setup(ne){var D;const V=((D=H().meta)==null?void 0:D.title)||"",{loading:I,setLoading:f}=K(!0),g=n(),x=n([]),C=n([]),N=n(["filter"]),_=n(!1),h=n(),k=M({systemClientId:0,systemClientName:""});f(!1);async function v(){f(!0);try{const a=await te(k);if(!a||!a.isSuccess)return;x.value=a.responseData}catch{}finally{f(!1)}}function z(a){if(!a){y.msg("无法获取到行的数据信息",{icon:2,time:2e3});return}W("确定要删除这条数据吗？",async()=>{try{const e=await se(a.systemClientId);if(!e||!e.isSuccess){y.confirm(e.message||"操作失败",{icon:2});return}y.msg(e.message||"操作成功",{icon:1}),v()}catch(e){y.msg(e.message,{icon:2})}finally{}})}function S(a){h.value=a,_.value=!0}return(a,e)=>{const m=J,B=ae,F=O,$=Q,E=P,L=G,u=w("any-permission"),U=w("permission");return o(),i(L,{fluid:"true",class:"z-container"},{default:s(()=>[c(E,{title:p(V)},{default:s(()=>[c(ee,{ref_key:"searchForm",ref:g,formData:k},null,8,["formData"]),c($,{"selected-keys":C.value,"onUpdate:selectedKeys":e[3]||(e[3]=t=>C.value=t),loading:p(I),columns:p(oe),"data-source":x.value,"default-toolbar":N.value,"auto-cols-width":!0,"max-height":"450px"},{toolbar:s(()=>[d((o(),i(m,{size:"sm",type:"normal",onClick:e[0]||(e[0]=t=>v())},{default:s(()=>[l(" 查询 ")]),_:1})),[[u,["sys:user:add","sys:user:save"]]]),d((o(),i(m,{size:"sm",border:"blue",onClick:e[1]||(e[1]=t=>g.value.resetFormData())},{default:s(()=>[l(" 重置表单 ")]),_:1})),[[u,["sys:user:add","sys:user:save"]]]),d((o(),i(m,{size:"sm",type:"primary",onClick:e[2]||(e[2]=t=>S())},{default:s(()=>[l(" 新增 ")]),_:1})),[[u,["sys:user:add","sys:user:save"]]])]),operator:s(({row:t})=>[d((o(),i(m,{size:"xs",type:"primary",onClick:r=>S(t)},{default:s(()=>[l(" 修改 ")]),_:2},1032,["onClick"])),[[u,["sys:user:edit","sys:user:update"]]]),d((o(),i(m,{size:"xs",type:"danger",onClick:r=>z(t)},{default:s(()=>[l(" 删除 ")]),_:2},1032,["onClick"])),[[U,"sys:user:delete"]])]),tagNames:s(({row:t})=>[Z("div",ie,[(o(!0),b(q,null,A(t.tagNames,r=>(o(),i(B,{key:r,"max-width":"100px",style:{margin:"2px"}},{default:s(()=>[l(T(r||"无"),1)]),_:2},1024))),128))])]),isShow:s(({row:t})=>[c(F,{modelValue:t.isShow,"onUpdate:modelValue":r=>t.isShow=r,"onswitch-text":"显示","unswitch-text":"不显示"},null,8,["modelValue","onUpdate:modelValue"])]),createTime:s(({row:t})=>[t.createTime?(o(),b("span",re,T(p(X)(t.createTime,"yyyy-M-d H:m:s")),1)):j("",!0)]),_:1},8,["selected-keys","loading","columns","data-source","default-toolbar"])]),_:1},8,["title"]),c(Y,{visible:_.value,"onUpdate:visible":e[4]||(e[4]=t=>_.value=t),"form-data":h.value,onDone:v},null,8,["visible","form-data"])]),_:1})}}});export{De as default};
