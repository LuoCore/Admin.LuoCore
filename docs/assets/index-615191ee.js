import{r as q}from"./index-b873fbdd.js";import{d as R,B as G,C as H,r as i,D as b,i as V,E as w,a as r,c as n,w as o,b as c,t as y,G as m,e as u,l as K,x as Z,q as A,Z as d,A as j}from"./index-9c77520b.js";import{x as J}from"./index-a07f0d91.js";import{_ as O}from"./index-7ab2fe9b.js";import{u as Q}from"./useConfirm-3d6c3304.js";import{f as W}from"./common-42edaf76.js";import{F as X,G as Y,D as ee}from"./FastSocketEditDialog-9b988ae6.js";import{_ as te}from"./FastSocketSearchForm.vue_vue_type_script_setup_true_lang-fdf812df.js";import"./index2-f0c41502.js";import"./index2-72193fcd.js";import"./index-2f9f97bc.js";import"./index2-0080956f.js";import"./index2-5bd3cf1b.js";import"./WangEditorText.vue_vue_type_script_setup_true_lang-a7dfc7c2.js";import"./FileUpload-18da30bc.js";import"./Basic-e37710ac.js";const ae=[{key:"fastSocketId",title:"序号",width:"80px",fixed:"left",sort:"desc"},{key:"systemClientName",title:"客户名称",width:"100px"},{key:"solutionName",title:"解决方案名称",align:"center",width:"150px"},{key:"socketIp",title:"中间接Ip地址",align:"center",width:"120px"},{key:"socketPort",title:"中间接端口",align:"center",width:"120px"},{key:"additionalMemo",title:"备注信息",customSlot:"additionalMemo"},{key:"createTime",title:"创建时间",align:"center",width:"150px",customSlot:"createTime"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],oe={key:0},Se=R({__name:"index",setup(se){var D;const T=((D=G().meta)==null?void 0:D.title)||"",{loading:F,setLoading:g}=H(!0),k=i(),x=i([]),h=i([]),N=i(["filter","export"]),_=b({current:1,limit:10,total:0,showRefresh:!0}),v=i(!1),S=i(),s=b({currentPageNum:1,pageSize:10,requestData:{}});function P(e){s.requestData=e}g(!1);async function p(){g(!0);try{const e=await Y(s);if(!e||!e.isSuccess){d.msg((e==null?void 0:e.message)||"查询数据失败！");return}s&&s.currentPageNum&&(_.current=s.currentPageNum),_.total=e.pageCount,x.value=e.responseData}catch{}finally{g(!1)}}function z(e){s.pageSize=e.limit,s.currentPageNum=e.current,p()}function I(e){if(!e){d.msg("请选择需要操作的行数据",{icon:2,time:2e3});return}Q("确定要删除这条数据吗？",async()=>{try{const t=await ee(e.fastSocketId);if(!t||!t.isSuccess){d.confirm(t.message||"操作失败",{icon:2});return}d.msg(t.message||"操作成功",{icon:1}),p()}catch(t){d.msg(t.message,{icon:2})}finally{}})}function C(e){S.value=e,v.value=!0}return(e,t)=>{const l=j,M=V("duv"),$=O,B=J,E=q,f=w("any-permission"),L=w("permission");return r(),n(E,{fluid:"true",class:"z-container"},{default:o(()=>[c(B,{title:y(T)},{default:o(()=>[c(te,{ref_key:"searchFormRef",ref:k,"form-data":s.requestData,"onUpdate:SearchFormParamUpdate":P},null,8,["form-data"]),c($,{id:"userId","selected-keys":h.value,"onUpdate:selectedKeys":t[3]||(t[3]=a=>h.value=a),loading:y(F),page:_,columns:y(ae),"data-source":x.value,"default-toolbar":N.value,"auto-cols-width":!0,"max-height":"450px",onChange:z},{toolbar:o(()=>[m((r(),n(l,{size:"sm",type:"normal",onClick:t[0]||(t[0]=a=>p())},{default:o(()=>[u(" 查询 ")]),_:1})),[[f,["sys:user:add","sys:user:save"]]]),m((r(),n(l,{size:"sm",border:"blue",onClick:t[1]||(t[1]=a=>k.value.resetFormData())},{default:o(()=>[u(" 重置表单 ")]),_:1})),[[f,["sys:user:add","sys:user:save"]]]),m((r(),n(l,{size:"sm",type:"primary",onClick:t[2]||(t[2]=a=>C())},{default:o(()=>[u(" 新增 ")]),_:1})),[[f,["sys:user:add","sys:user:save"]]])]),operator:o(({row:a})=>[m((r(),n(l,{size:"xs",type:"primary",onClick:U=>C(a)},{default:o(()=>[u(" 修改 ")]),_:2},1032,["onClick"])),[[f,["sys:user:edit","sys:user:update"]]]),m((r(),n(l,{size:"xs",type:"danger",onClick:U=>I(a)},{default:o(()=>[u(" 删除 ")]),_:2},1032,["onClick"])),[[L,"sys:user:delete"]])]),additionalMemo:o(({row:a})=>[c(M,{innerHTML:a.additionalMemo},null,8,["innerHTML"])]),createTime:o(({row:a})=>[a.createTime?(r(),K("span",oe,Z(y(W)(a.createTime,"yyyy-M-d H:m:s")),1)):A("",!0)]),_:1},8,["selected-keys","loading","page","columns","data-source","default-toolbar"])]),_:1},8,["title"]),c(X,{visible:v.value,"onUpdate:visible":t[4]||(t[4]=a=>v.value=a),"form-data":S.value,onDone:p},null,8,["visible","form-data"])]),_:1})}}});export{Se as default};
