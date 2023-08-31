import{r as Q}from"./index-44c9ce80.js";import{j as W,d as L,v as X,k as Y,t as l,a,l as o,s as ee,n as T,c as n,a4 as te,C as se,B as ae,r as y,D as re,E as B,w as r,b as f,G as g,e as m,f as ie,F as ne,H as oe,x as C,q as F,Z as i,A as le,V as ce}from"./index-2aad6dfc.js";import{x as ue}from"./index-8a3edce5.js";import{_ as me}from"./index-5c14c7e5.js";/* empty css              */import de from"./UserSearchForm-4f75ff60.js";import{_ as pe}from"./UserEditDialog.vue_vue_type_script_setup_true_lang-c6e8c66c.js";import{u as q}from"./useConfirm-7a37fa3c.js";import{f as I}from"./common-42edaf76.js";import{l as ye,m as fe,n as ge}from"./Basic-2ba83306.js";import{$ as _e}from"./index2-a6139534.js";import"./index2-b6cd40cb.js";import"./index2-f922c431.js";import"./index-cddd5311.js";import"./index2-daa80bda.js";import"./index-7e3b9668.js";/* empty css              *//* empty css              *//* empty css              */const he=["src","alt"],ve=W(L({name:"LayAvatar",props:{src:null,size:{default:"md"},radius:{type:Boolean,default:!1},icon:{default:"layui-icon-username"},alt:null},setup(d){const _=d,h=X(),x=Y(()=>["layui-avatar",_.radius?"layui-avatar-radius":"",_.size?`layui-avatar-${_.size}`:""]);return(b,D)=>l(h).default?(a(),o("span",{key:0,class:T(l(x))},[ee(b.$slots,"default")],2)):(a(),o("span",{key:1,class:T(l(x))},[d.src?(a(),o("img",{key:0,src:d.src,alt:d.alt},null,8,he)):(a(),n(l(te),{key:1,type:d.icon},null,8,["type"]))],2))}}));const ke=[{key:"userId",title:"用户Id",width:"80px",fixed:"left",sort:"desc"},{key:"userName",title:"用户名称",width:"100px"},{key:"roleInfos",title:"角色",align:"center",width:"100px",customSlot:"roles"},{key:"nickname",title:"昵称",align:"center",width:"100px"},{key:"phoneTeleNumber",title:"电话号码",align:"center",width:"150px"},{key:"phoneMobileNumber",title:"手机号码",align:"center",width:"150px"},{key:"emailAddress",title:"电子邮箱",align:"center",width:"200px"},{key:"gender",title:"性别",align:"center",width:"90px",customSlot:"gender"},{key:"birthday",title:"生日",align:"center",width:"180px",customSlot:"birthday"},{key:"createTime",title:"创建时间",align:"center",width:"180px",customSlot:"createTime"},{key:"isDisable",title:"禁用",align:"center",width:"90px",customSlot:"isDisable"},{key:"operator",title:"操作",align:"left",customSlot:"operator",fixed:"right",width:"200px"}],xe={style:{display:"grid"}},be={key:0},De={key:1},Se={key:2},we={key:0},Ce={key:0},Ze=L({__name:"index",setup(d){var U;const{loading:_,setLoading:h}=se(!0),b=((U=ae().meta)==null?void 0:U.title)||"",D=y(),z=y([]),N=y([]),R=y(["filter"]),S=re({current:1,limit:10,total:0,showRefresh:!0}),w=y(!1),P=y(),c={currentPageNum:1,pageSize:10,requestData:{}};h(!1);function V(s){c.requestData=s}async function k(){h(!0);const s={requestData:c.requestData,pageSize:c.pageSize,currentPageNum:c.currentPageNum};try{const e=await ye(s);if(!e||!e.isSuccess){i.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}s&&s.currentPageNum&&(S.current=s.currentPageNum),S.total=e.pageCount,z.value=e.responseData}catch{}finally{h(!1)}}function E(s){c.pageSize=s.limit,c.currentPageNum=s.current,k()}function M(s){if(!s){i.msg("请选择用户",{icon:2,time:2e3});return}q("确定要删除这条数据吗？",async()=>{try{const e=await fe(s.userId);if(!e||!e.isSuccess){i.confirm(e.message||"操作失败",{icon:2});return}i.msg(e.message||"操作成功",{icon:1}),k()}catch(e){i.msg(e.message,{icon:2})}finally{}})}function A(s){if(!s){i.msg("请选择用户",{icon:2,time:2e3});return}q(`确定要重置【${s.userName}】的密码吗？`,async()=>{try{const e=await ge(s.userId);if(!e||!e.isSuccess){i.confirm(e.message||"操作失败",{icon:2});return}i.msg(e.message||"操作成功",{icon:1})}catch(e){i.msg(e.message,{icon:2})}finally{}})}function $(s){P.value=s,w.value=!0}return(s,e)=>{const p=le,H=ve,G=_e,K=ce,Z=me,j=ue,J=Q,v=B("any-permission"),O=B("permission");return a(),n(J,{fluid:"true",class:"z-container"},{default:r(()=>[f(j,{title:l(b)},{default:r(()=>[f(de,{ref_key:"searchForm",ref:D,formData:c.requestData,"onUpdate:FormSearchParamUpdate":V},null,8,["formData"]),f(Z,{id:"userId","selected-keys":N.value,"onUpdate:selectedKeys":e[3]||(e[3]=t=>N.value=t),loading:l(_),page:S,columns:l(ke),"data-source":z.value,"default-toolbar":R.value,"auto-cols-width":!0,"max-height":"450px",onChange:E},{toolbar:r(()=>[g((a(),n(p,{size:"sm",type:"normal",onClick:e[0]||(e[0]=t=>k())},{default:r(()=>[m(" 查询 ")]),_:1})),[[v,["sys:user:add","sys:user:save"]]]),g((a(),n(p,{size:"sm",border:"blue",onClick:e[1]||(e[1]=t=>D.value.resetFormData())},{default:r(()=>[m(" 重置表单 ")]),_:1})),[[v,["sys:user:add","sys:user:save"]]]),g((a(),n(p,{size:"sm",type:"primary",onClick:e[2]||(e[2]=t=>$())},{default:r(()=>[m(" 新增 ")]),_:1})),[[v,["sys:user:add","sys:user:save"]]])]),operator:r(({row:t})=>[g((a(),n(p,{size:"xs",type:"primary",onClick:u=>$(t)},{default:r(()=>[m(" 修改 ")]),_:2},1032,["onClick"])),[[v,["sys:user:edit","sys:user:update"]]]),g((a(),n(p,{size:"xs",type:"danger",onClick:u=>M(t)},{default:r(()=>[m(" 删除 ")]),_:2},1032,["onClick"])),[[O,"sys:user:delete"]]),g((a(),n(p,{size:"xs",onClick:u=>A(t)},{default:r(()=>[m(" 重置密码 ")]),_:2},1032,["onClick"])),[[v,["sys:user:edit","sys:user:update"]]])]),avatar:r(({row:t})=>[f(H,{src:t.avatar,radius:""},null,8,["src"])]),roles:r(({row:t})=>[ie("div",xe,[(a(!0),o(ne,null,oe(t.roleInfos,u=>(a(),n(G,{key:u.roleId,"max-width":"100px",style:{margin:"2px"}},{default:r(()=>[m(C((u==null?void 0:u.roleName)||"无"),1)]),_:2},1024))),128))])]),gender:r(({row:t})=>[t.gender==1?(a(),o("span",be,"男")):t.gender==0?(a(),o("span",De,"女")):(a(),o("span",Se,"未知"))]),createTime:r(({row:t})=>[t.createTime?(a(),o("span",we,C(l(I)(t.createTime,"yyyy-M-d H:m:s")),1)):F("",!0)]),birthday:r(({row:t})=>[t.birthday?(a(),o("span",Ce,C(l(I)(t.birthday,"yyyy-M-d H:m:s")),1)):F("",!0)]),isDisable:r(({row:t})=>[f(K,{"model-value":t.isDisable,"onswitch-text":"是","onswitch-value":!0,"unswitch-text":"否","unswitch-value":!1},null,8,["model-value"])]),_:1},8,["selected-keys","loading","page","columns","data-source","default-toolbar"])]),_:1},8,["title"]),f(pe,{visible:w.value,"onUpdate:visible":e[4]||(e[4]=t=>w.value=t),"form-data":P.value,onDone:k},null,8,["visible","form-data"])]),_:1})}}});export{Ze as default};
