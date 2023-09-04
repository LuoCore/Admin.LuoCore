import{r as M}from"./index-44c9ce80.js";import{d as R,B as G,C as K,r as n,D as Z,E as I,a as o,c as i,w as s,b as l,t as c,G as d,e as u,f as g,l as A,F as j,H as q,x,Z as y,A as J,V as O}from"./index-2aad6dfc.js";import{x as P}from"./index-8a3edce5.js";import{_ as Q}from"./index-5c14c7e5.js";/* empty css              */import{u as W}from"./useConfirm-7a37fa3c.js";import{f as V}from"./common-42edaf76.js";import X from"./IssuesTypeEditDialog-b7624f1e.js";import Y from"./IssuesTypeSearchForm-90800c1d.js";import{c as ee,d as te}from"./Issues-fe0ff8c0.js";import{$ as se}from"./index2-a6139534.js";import"./index2-b6cd40cb.js";import"./index2-f922c431.js";import"./index-dbdd743f.js";import"./index-703526c2.js";const ae=[{key:"issuesTypeId",title:"序号",width:"80px",fixed:"left",sort:"desc"},{key:"issuesTypeName",title:"系统类型名称",width:"150px"},{key:"issuesTypeDescription",title:"系统类型描述",align:"center",width:"400px"},{key:"sortId",title:"排序号",align:"center",width:"400px"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],oe={style:{display:"grid"}},Te=R({__name:"index",setup(ie){var S;const z=((S=G().meta)==null?void 0:S.title)||"",{loading:B,setLoading:f}=K(!0),h=n(),w=n([]),T=n([]),F=n(["filter"]),_=n(!1),k=n(),D=Z({issuesTypeId:0,issuesTypeName:""});f(!1);async function v(){f(!0);try{const a=await ee(D);if(!a||!a.isSuccess)return;w.value=a.responseData}catch{}finally{f(!1)}}function N(a){if(!a){y.msg("无法获取到行的数据信息",{icon:2,time:2e3});return}W("确定要删除这条数据吗？",async()=>{try{const t=await te(a.issuesTypeId);if(!t||!t.isSuccess){y.confirm(t.message||"操作失败",{icon:2});return}y.msg(t.message||"操作成功",{icon:1}),v()}catch(t){y.msg(t.message,{icon:2})}finally{}})}function b(a){k.value=a,_.value=!0}return(a,t)=>{const m=J,$=se,C=O,E=Q,L=P,U=M,p=I("any-permission"),H=I("permission");return o(),i(U,{fluid:"true",class:"z-container"},{default:s(()=>[l(L,{title:c(z)},{default:s(()=>[l(Y,{ref_key:"searchForm",ref:h,formData:D},null,8,["formData"]),l(E,{"selected-keys":T.value,"onUpdate:selectedKeys":t[3]||(t[3]=e=>T.value=e),loading:c(B),columns:c(ae),"data-source":w.value,"default-toolbar":F.value,"auto-cols-width":!0,"max-height":"450px"},{toolbar:s(()=>[d((o(),i(m,{size:"sm",type:"normal",onClick:t[0]||(t[0]=e=>v())},{default:s(()=>[u(" 查询 ")]),_:1})),[[p,["sys:user:add","sys:user:save"]]]),d((o(),i(m,{size:"sm",border:"blue",onClick:t[1]||(t[1]=e=>h.value.resetFormData())},{default:s(()=>[u(" 重置表单 ")]),_:1})),[[p,["sys:user:add","sys:user:save"]]]),d((o(),i(m,{size:"sm",type:"primary",onClick:t[2]||(t[2]=e=>b())},{default:s(()=>[u(" 新增 ")]),_:1})),[[p,["sys:user:add","sys:user:save"]]])]),operator:s(({row:e})=>[d((o(),i(m,{size:"xs",type:"primary",onClick:r=>b(e)},{default:s(()=>[u(" 修改 ")]),_:2},1032,["onClick"])),[[p,["sys:user:edit","sys:user:update"]]]),d((o(),i(m,{size:"xs",type:"danger",onClick:r=>N(e)},{default:s(()=>[u(" 删除 ")]),_:2},1032,["onClick"])),[[H,"sys:user:delete"]])]),tagNames:s(({row:e})=>[g("div",oe,[(o(!0),A(j,null,q(e.tagNames,r=>(o(),i($,{key:r,"max-width":"100px",style:{margin:"2px"}},{default:s(()=>[u(x(r||"无"),1)]),_:2},1024))),128))])]),isShow:s(({row:e})=>[l(C,{modelValue:e.isShow,"onUpdate:modelValue":r=>e.isShow=r,"onswitch-text":"显示","unswitch-text":"不显示"},null,8,["modelValue","onUpdate:modelValue"])]),createTime:s(({row:e})=>[g("span",null,x(c(V)(e.createTime,"yyyy-M-d H:m:s")),1)]),issueTime:s(({row:e})=>[g("span",null,x(c(V)(e.issueTime,"yyyy-M-d H:m:s")),1)]),isDisable:s(({row:e})=>[l(C,{"model-value":e.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","loading","columns","data-source","default-toolbar"])]),_:1},8,["title"]),l(X,{visible:_.value,"onUpdate:visible":t[4]||(t[4]=e=>_.value=e),formData:k.value,onDone:v},null,8,["visible","formData"])]),_:1})}}});export{Te as default};
