import{r as H}from"./index-7b08d618.js";import{d as K,C as R,B as Z,r as l,D as z,E as I,a as o,c as r,w as s,b as c,t as d,G as p,e as m,f as w,l as j,F as J,H as O,x as k,Z as f,A as Q,V as W}from"./index-c7b5f3e4.js";import{x as X}from"./index-9010479a.js";import{_ as Y}from"./index-4efb63ce.js";/* empty css              */import{u as ee}from"./useConfirm-f995756f.js";import{f as V}from"./common-42edaf76.js";import{_ as te}from"./ArticleEditDialog.vue_vue_type_script_setup_true_lang-506a86ad.js";import{_ as ae}from"./ArticleSearchForm.vue_vue_type_script_setup_true_lang-ba76eb07.js";import{G as se,D as ie}from"./Blogs-ff01aed4.js";import{$ as oe}from"./index2-798ab00b.js";import"./index2-c0cbaf67.js";import"./index2-ae672500.js";import"./index-1af6ae5c.js";import"./index-b7e71b66.js";import"./index2-19dbe045.js";import"./index2-47a7bda1.js";import"./ArticleTag.vue_vue_type_script_setup_true_lang-9c74e044.js";import"./WangEditorText.vue_vue_type_script_setup_true_lang-c6af8385.js";import"./FileUpload-3242f4e2.js";import"./index-b06df37a.js";/* empty css              */import"./index-08db7ed5.js";import"./Basic-6a32a728.js";const re=[{key:"articleId",title:"文章Id",width:"80px",fixed:"left",sort:"desc"},{key:"articleTitle",title:"文章标题",width:"150px"},{key:"articleContent",title:"文章内容",align:"center",width:"400px"},{key:"categoryName",title:"分类名称",align:"center",width:"100px"},{key:"tagNames",title:"标签名称",align:"center",width:"100px",customSlot:"tagNames"},{key:"likeCount",title:"点赞数",align:"center",width:"80px"},{key:"readCount",title:"浏览量",align:"center",width:"80px"},{key:"sortId",title:"排序号",align:"center",width:"80px"},{key:"createTime",title:"创建时间",align:"center",width:"190px",customSlot:"createTime"},{key:"issueTime",title:"发布时间",align:"center",width:"190px",customSlot:"issueTime"},{key:"userName",title:"用户名称",align:"center",width:"100px"},{key:"isShow",title:"是否显示",align:"center",width:"100px",customSlot:"isShow"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],ne={style:{display:"grid"}},Ue=K({__name:"index",setup(le){var T;const{loading:$,setLoading:_}=R(!0),P=((T=Z().meta)==null?void 0:T.title)||"",h=l(),D=l([]),S=l([]),U=l(["filter"]),v=z({current:1,limit:10,total:0,showRefresh:!0}),x=l(!1),C=l(),i=z({currentPageNum:1,pageSize:10,requestData:{}});function B(t){i.requestData=t}_(!1);async function y(){_(!0);try{const t=await se(i);if(!t||!t.isSuccess){f.confirm((t==null?void 0:t.message)||"查询数据发生错误！");return}i&&i.currentPageNum&&(v.current=i.currentPageNum),v.total=t.pageCount,D.value=t.responseData}catch{}finally{_(!1)}}function F(t){h.value.formModel,i.pageSize=t.limit,i.currentPageNum=t.current,y()}function A(t){if(!t){f.msg("请选择需要删除的数据！",{icon:2,time:2e3});return}ee("确定要删除这条数据吗？",async()=>{try{const a=await ie(t.articleId);if(!a||!a.isSuccess){f.confirm(a.message||"操作失败",{icon:2});return}f.msg(a.message||"操作成功",{icon:1}),y()}catch(a){f.msg(a.message,{icon:2})}finally{}})}function b(t){C.value=t,x.value=!0}return(t,a)=>{const u=Q,E=oe,N=W,L=Y,M=X,q=H,g=I("any-permission"),G=I("permission");return o(),r(q,{fluid:"true",class:"z-container"},{default:s(()=>[c(M,{title:d(P)},{default:s(()=>[c(ae,{ref_key:"searchForm",ref:h,"form-data":i.requestData,"onUpdate:formSearchDataUpdate":B},null,8,["form-data"]),c(L,{id:"userId","selected-keys":S.value,"onUpdate:selectedKeys":a[3]||(a[3]=e=>S.value=e),loading:d($),page:v,columns:d(re),"data-source":D.value,"default-toolbar":U.value,"auto-cols-width":!0,"max-height":"450px",onChange:F},{toolbar:s(()=>[p((o(),r(u,{size:"sm",type:"normal",onClick:a[0]||(a[0]=e=>y())},{default:s(()=>[m(" 查询 ")]),_:1})),[[g,["sys:user:add","sys:user:save"]]]),p((o(),r(u,{size:"sm",border:"blue",onClick:a[1]||(a[1]=e=>h.value.resetFormData())},{default:s(()=>[m(" 重置表单 ")]),_:1})),[[g,["sys:user:add","sys:user:save"]]]),p((o(),r(u,{size:"sm",type:"primary",onClick:a[2]||(a[2]=e=>b())},{default:s(()=>[m(" 新增 ")]),_:1})),[[g,["sys:user:add","sys:user:save"]]])]),operator:s(({row:e})=>[p((o(),r(u,{size:"xs",type:"primary",onClick:n=>b(e)},{default:s(()=>[m(" 修改 ")]),_:2},1032,["onClick"])),[[g,["sys:user:edit","sys:user:update"]]]),p((o(),r(u,{size:"xs",type:"danger",onClick:n=>A(e)},{default:s(()=>[m(" 删除 ")]),_:2},1032,["onClick"])),[[G,"sys:user:delete"]])]),tagNames:s(({row:e})=>[w("div",ne,[(o(!0),j(J,null,O(e.tagNames,n=>(o(),r(E,{key:n,"max-width":"100px",style:{margin:"2px"}},{default:s(()=>[m(k(n||"无"),1)]),_:2},1024))),128))])]),isShow:s(({row:e})=>[c(N,{modelValue:e.isShow,"onUpdate:modelValue":n=>e.isShow=n,"onswitch-text":"显示","unswitch-text":"不显示"},null,8,["modelValue","onUpdate:modelValue"])]),createTime:s(({row:e})=>[w("span",null,k(d(V)(e.createTime,"yyyy-M-d H:m:s")),1)]),issueTime:s(({row:e})=>[w("span",null,k(d(V)(e.issueTime,"yyyy-M-d H:m:s")),1)]),isDisable:s(({row:e})=>[c(N,{"model-value":e.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","loading","page","columns","data-source","default-toolbar"])]),_:1},8,["title"]),c(te,{visible:x.value,"onUpdate:visible":a[4]||(a[4]=e=>x.value=e),"form-data":C.value,onDone:y},null,8,["visible","form-data"])]),_:1})}}});export{Ue as default};
