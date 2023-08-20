import{r as G}from"./index-18f2e450.js";import{d as H,B as K,C as Z,r as l,D as Q,E as P,a as o,c as u,w as i,b as c,t as m,G as p,e as d,f as x,l as j,F as J,H as O,x as v,I as z,Z as y,A as W,V as X}from"./index-53adf29b.js";import{x as Y}from"./index-f2193864.js";import{_ as ee}from"./index-e2d03d9a.js";/* empty css              */import{_ as te}from"./ArticleEditDialog.vue_vue_type_script_setup_true_lang-6b102cf1.js";import{_ as ae}from"./ArticleSearchForm.vue_vue_type_script_setup_true_lang-0754a114.js";import{u as ie}from"./useConfirm-a852b310.js";import{G as se,D as oe}from"./Blogs-865b1ec3.js";import{$ as re}from"./index2-79d7d27b.js";import"./index2-5d5b79b3.js";import"./index2-21289748.js";import"./index-c9fd804e.js";import"./index-afe1d6ba.js";import"./index2-31d7a95a.js";import"./index2-3ad2494b.js";import"./FileUpload-be7ce4af.js";import"./ArticleTag.vue_vue_type_script_setup_true_lang-9b0be570.js";import"./index-5dfd04c5.js";/* empty css              */import"./index-9fd596c5.js";const ne=[{key:"articleId",title:"文章Id",width:"80px",fixed:"left",sort:"desc"},{key:"articleTitle",title:"文章标题",width:"150px"},{key:"articleContent",title:"文章内容",align:"center",width:"400px"},{key:"categoryName",title:"分类名称",align:"center",width:"100px"},{key:"tagNames",title:"标签名称",align:"center",width:"100px",customSlot:"tagNames"},{key:"likeCount",title:"点赞数",align:"center",width:"80px"},{key:"readCount",title:"浏览量",align:"center",width:"80px"},{key:"sortId",title:"排序号",align:"center",width:"80px"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"issueTime",title:"发布时间",align:"center",width:"190px",customSlot:"issueTime"},{key:"userName",title:"用户名称",align:"center",width:"100px"},{key:"isShow",title:"是否显示",align:"center",width:"100px",customSlot:"isShow"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],le={style:{display:"grid"}},Ve=H({__name:"index",setup(ue){var T;const{loading:I,setLoading:g}=K(!0),V=((T=Z().meta)==null?void 0:T.title)||"",M=l(),k=l([]),D=l([]),$=l(["filter"]),f=Q({current:1,limit:10,total:0,showRefresh:!0}),_=l(!1),S=l(),s={currentPageNum:1,pageSize:10,requestData:{articleTitle:"",categoryId:0,userId:0,timeType:0,timeStart:new Date,timeEnd:new Date}};function q(a){s.requestData=a}g(!1);function h(a){const e={requestData:a||s.requestData,pageSize:s.pageSize,currentPageNum:s.currentPageNum};C(e)}async function C(a){g(!0);try{const e=await se(a);if(!e||!e.isSuccess)return;a&&a.currentPageNum&&(f.current=a.currentPageNum),f.total=e.pageCount,k.value=e.responseData}catch{}finally{g(!1)}}function B(a){const e=M.value.formModel;s.pageSize=a.limit,s.currentPageNum=a.current;const r={requestData:e,pageSize:s.pageSize,currentPageNum:s.currentPageNum};C(r)}function U(a){if(!a){y.msg("请选择用户",{icon:2,time:2e3});return}ie("确定要删除这条数据吗？",async()=>{try{const e=await oe(a);if(!e||!e.isSuccess){y.confirm(e.message||"操作失败",{icon:2});return}y.msg(e.message||"操作成功",{icon:1}),h()}catch(e){y.msg(e.message,{icon:2})}finally{}})}function N(a){S.value=a,_.value=!0}return(a,e)=>{const r=W,E=re,b=X,L=ee,R=Y,A=G,w=P("any-permission"),F=P("permission");return o(),u(A,{fluid:"true",class:"z-container"},{default:i(()=>[c(ae,{formModel:s.requestData,"onUpdate:updateParam":q},null,8,["formModel"]),c(R,{title:m(V)},{default:i(()=>[c(L,{id:"userId","selected-keys":D.value,"onUpdate:selectedKeys":e[2]||(e[2]=t=>D.value=t),loading:m(I),page:f,columns:m(ne),"data-source":k.value,"default-toolbar":$.value,"auto-cols-width":!0,"max-height":"450px",onChange:B},{toolbar:i(()=>[p((o(),u(r,{size:"sm",type:"normal",onClick:e[0]||(e[0]=t=>h())},{default:i(()=>[d(" 查询 ")]),_:1})),[[w,["sys:user:add","sys:user:save"]]]),p((o(),u(r,{size:"sm",type:"primary",onClick:e[1]||(e[1]=t=>N())},{default:i(()=>[d(" 新增 ")]),_:1})),[[w,["sys:user:add","sys:user:save"]]])]),operator:i(({row:t})=>[p((o(),u(r,{size:"xs",type:"primary",onClick:n=>N(t)},{default:i(()=>[d(" 修改 ")]),_:2},1032,["onClick"])),[[w,["sys:user:edit","sys:user:update"]]]),p((o(),u(r,{size:"xs",type:"danger",onClick:n=>U(t.articleId)},{default:i(()=>[d(" 删除 ")]),_:2},1032,["onClick"])),[[F,"sys:user:delete"]])]),tagNames:i(({row:t})=>[x("div",le,[(o(!0),j(J,null,O(t.tagNames,n=>(o(),u(E,{key:n,"max-width":"100px",style:{margin:"2px"}},{default:i(()=>[d(v(n||"无"),1)]),_:2},1024))),128))])]),isShow:i(({row:t})=>[c(b,{modelValue:t.isShow,"onUpdate:modelValue":n=>t.isShow=n,"onswitch-text":"显示","unswitch-text":"不显示"},null,8,["modelValue","onUpdate:modelValue"])]),createTime:i(({row:t})=>[x("span",null,v(m(z)(t.createTime,"yyyy-M-d H:m:s")),1)]),issueTime:i(({row:t})=>[x("span",null,v(m(z)(t.issueTime,"yyyy-M-d H:m:s")),1)]),isDisable:i(({row:t})=>[c(b,{"model-value":t.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","loading","page","columns","data-source","default-toolbar"])]),_:1},8,["title"]),c(te,{visible:_.value,"onUpdate:visible":e[3]||(e[3]=t=>_.value=t),data:S.value,onDone:h},null,8,["visible","data"])]),_:1})}}});export{Ve as default};
