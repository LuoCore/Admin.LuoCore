import{d as P,r as d,D as A,J as G,k as R,K as z,z as J,a as M,c as Z,w as i,b as l,f as K,t as D,Z as u,N as X,T as $,O as H,P as L,U as Q,X as Y,_ as ee}from"./index-53adf29b.js";/* empty css              */import{y as se}from"./index-c9fd804e.js";import{A as oe}from"./index-9fd596c5.js";import{T as te,E as ae,F as le}from"./FileUpload-be7ce4af.js";import{E as re,a as ne,b as ie}from"./Issues-e7db488b.js";import"./index2-31d7a95a.js";import"./index2-79d7d27b.js";const ue={style:{border:"1px solid #ccc"}},de=P({__name:"issuesInfoEditDialog",props:{visible:{type:Boolean,default:!1},isSub:{type:Boolean,default:!1},editData:{}},emits:["update:visible","done"],setup(U,{emit:b}){const p=U,I=d([]),_=d([]),g=d([]),v=d([]),k=function(e){a.developerStartTime=e},x=function(e){a.developerEndTime=e},m=d(),T={issuesInfoId:0,developerUserId:0,systemTypeId:0,issuesWorkTypeId:0,issuesDescription:"",developerStartTime:void 0,developerEndTime:void 0,sortId:0},a=A({...T}),E=d({issuesTypeId:[{type:"number",required:!0,message:"问题类型不能为空"},{asyncValidator:(e,s,t)=>new Promise((o,n)=>{s<=0?t(new Error("请选择问题类型!")):o()})}],developerUserId:[{type:"number",required:!0,message:"开发人员不能为空"},{asyncValidator:(e,s,t)=>new Promise((o,n)=>{s<=0?t(new Error("请选择开发人员!")):o()})}],systemTypeId:[{type:"number",required:!0,message:"系统类型不能为空"},{asyncValidator:(e,s,t)=>new Promise((o,n)=>{s<=0?t(new Error("请选择系统类型!")):o()})}],issuesWorkTypeId:[{type:"number",required:!0,message:"工作流程不能为空"},{asyncValidator:(e,s,t)=>new Promise((o,n)=>{s<=0?t(new Error("请选择工作流程!")):o()})}],issuesDescription:[{type:"string",required:!0,message:"问题信息不能为空"},{asyncValidator:(e,s,t)=>new Promise((o,n)=>{s=="<p><br></p>"?t(new Error("请输入问题信息!")):o()})}],sortId:{type:"number",required:!0,message:"排序号不能为空"}}),c=G(),C={},V={placeholder:a.issuesDescription,MENU_CONF:{}};V.MENU_CONF.uploadImage={async customUpload(e,s){const t=await le(e);!t||!t.isSuccess||s(t.responseData,"Issues","问题")}};const S=e=>{debugger;c.value=e},f=R({get(){return p.visible},set(e){b("update:visible",e)}});async function B(){const e=await Q();if(!e||!e.isSuccess){u.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}I.value=e.responseData.map(s=>({label:s.userName,value:s.userId}))}async function N(){const e=await Y();if(!e||!e.isSuccess){u.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}_.value=e.responseData.map(s=>({label:s.systemTypeName,value:s.systemTypeId}))}async function h(){const e=await ne();if(!e||!e.isSuccess){u.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}v.value=e.responseData.map(s=>({label:s.issuesWorkTypeName,value:s.issuesWorkTypeId}))}async function O(){const e=await ie();if(!e||!e.isSuccess){u.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}g.value=e.responseData.map(s=>({label:s.issuesTypeName,value:s.issuesTypeId}))}function W(){B(),O(),h(),N(),p.editData?Object.assign(a,p.editData):Object.assign(a,T)}z(()=>{const e=c.value;e!=null&&e.destroy()}),J(()=>p.visible,(e,s)=>{debugger;e&&W(),console.log(e,s)});function y(){var e;m.value.reset(),(e=m.value)==null||e.clearValidate(),f.value=!1}function F(){m.value.validate((e,s,t)=>{console.log("提交："+JSON.stringify(s)),e&&u.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async o=>{debugger;try{const n=await re(s);if(!n||!n.isSuccess){u.confirm(n.message||"提交数据信息失败",{icon:2});return}u.msg(n.message||"操作成功",{icon:1}),b("done"),y()}catch{}finally{u.close(o)}}})})}return(e,s)=>{const t=oe,o=X,n=se,w=$,j=H,q=L;return M(),Z(q,{modelValue:f.value,"onUpdate:modelValue":s[6]||(s[6]=r=>f.value=r),resize:!0,title:"系统类型编辑","shade-close":!1,move:!0,maxmin:!0,area:"50%",btnAlign:"c",btn:[{text:"提交",callback:()=>F()},{text:"关闭",callback:()=>y()}],onClose:y},{default:i(()=>[l(j,{ref_key:"refForm",ref:m,pane:!0,model:a,rules:E.value,style:{padding:"10px"}},{default:i(()=>[l(o,{label:"开发人员",prop:"developerUserId",mode:"inline"},{default:i(()=>[l(t,{modelValue:a.developerUserId,"onUpdate:modelValue":s[0]||(s[0]=r=>a.developerUserId=r),options:I.value},null,8,["modelValue","options"])]),_:1}),l(o,{label:"系统类型",prop:"systemTypeId",mode:"inline"},{default:i(()=>[l(t,{modelValue:a.systemTypeId,"onUpdate:modelValue":s[1]||(s[1]=r=>a.systemTypeId=r),options:_.value},null,8,["modelValue","options"])]),_:1}),l(o,{label:"问题类型",prop:"issuesTypeId",mode:"inline"},{default:i(()=>[l(t,{modelValue:a.issuesTypeId,"onUpdate:modelValue":s[2]||(s[2]=r=>a.issuesTypeId=r),options:g.value},null,8,["modelValue","options"])]),_:1}),l(o,{label:"问题工作流程",prop:"issuesWorkTypeId",mode:"inline","label-width":120},{default:i(()=>[l(t,{modelValue:a.issuesWorkTypeId,"onUpdate:modelValue":s[3]||(s[3]=r=>a.issuesWorkTypeId=r),options:v.value},null,8,["modelValue","options"])]),_:1}),l(o,{label:"排序号",prop:"sortId",required:"","label-width":100},{default:i(()=>[l(n,{modelValue:a.sortId,"onUpdate:modelValue":s[4]||(s[4]=r=>a.sortId=r)},null,8,["modelValue"])]),_:1}),l(o,{label:"开始时间",prop:"developerStartTime",mode:"inline"},{default:i(()=>[l(w,{type:"datetime",placeholder:"开始时间",onChange:k})]),_:1}),l(o,{label:"结束时间",prop:"developerEndTime",mode:"inline"},{default:i(()=>[l(w,{type:"datetime",placeholder:"结束时间","on-change":x})]),_:1}),l(o,{label:"问题事件信息","label-position":"top","label-width":"100%",prop:"issuesDescription"},{default:i(()=>[K("div",ue,[l(D(te),{style:{"border-bottom":"1px solid #ccc"},editor:c.value,defaultConfig:C,mode:"default"},null,8,["editor"]),l(D(ae),{style:{height:"200px","overflow-y":"hidden"},modelValue:a.issuesDescription,"onUpdate:modelValue":s[5]||(s[5]=r=>a.issuesDescription=r),defaultConfig:V,mode:"default",onOnCreated:S},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","btn"])}}});const ge=ee(de,[["__scopeId","data-v-14cb72c6"]]);export{ge as default};
