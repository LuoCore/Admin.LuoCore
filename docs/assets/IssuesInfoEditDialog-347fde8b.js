import{d as j,r as u,D as q,Q as O,k as G,R as P,z as M,a as z,c as A,w as i,b as r,f as Z,t as w,Z as d,J,T as K,K as Q,M as R,_ as $}from"./index-c7b5f3e4.js";/* empty css              */import{y as H}from"./index-1af6ae5c.js";import{A as L}from"./index-08db7ed5.js";import{T as X,E as Y,F as ee}from"./FileUpload-3242f4e2.js";import{E as oe,a as se,b as te}from"./Issues-907a7589.js";import{a as le,b as ae}from"./Basic-6a32a728.js";import"./index2-19dbe045.js";import"./index2-798ab00b.js";const re={style:{border:"1px solid #ccc"}},ne=j({__name:"IssuesInfoEditDialog",props:{visible:{type:Boolean,default:!1},formData:{}},emits:["update:visible","done"],setup(D,{emit:v}){const m=D,b=u([]),I=u([]),_=u([]),g=u([]),x=function(o){a.developerStartTime=o},U=function(o){a.developerEndTime=o},p=u(),V={issuesInfoId:0,developerUserId:0,issuesWorkTypeId:0,issuesDescription:"",developerStartTime:void 0,developerEndTime:void 0,sortId:0},a=q({...V}),E=u({issuesTypeId:[{type:"number",required:!0,message:"问题类型不能为空"},{asyncValidator:(o,e,t)=>new Promise((s,l)=>{e<=0?t(new Error("请选择问题类型!")):s()})}],developerUserId:[{type:"number",required:!0,message:"开发人员不能为空"},{asyncValidator:(o,e,t)=>new Promise((s,l)=>{e<=0?t(new Error("请选择开发人员!")):s()})}],issuesWorkTypeId:[{type:"number",required:!0,message:"工作流程不能为空"},{asyncValidator:(o,e,t)=>new Promise((s,l)=>{e<=0?t(new Error("请选择工作流程!")):s()})}],issuesDescription:[{type:"string",required:!0,message:"问题信息不能为空"},{asyncValidator:(o,e,t)=>new Promise((s,l)=>{e=="<p><br></p>"?t(new Error("请输入问题信息!")):s()})}],sortId:{type:"number",required:!0,message:"排序号不能为空"}}),c=O(),k={},T={placeholder:a.issuesDescription,MENU_CONF:{}};T.MENU_CONF.uploadImage={async customUpload(o,e){const t=await ee(o);!t||!t.isSuccess||e(t.responseData,"Issues","问题")}};const S=o=>{c.value=o},f=G({get(){return m.visible},set(o){v("update:visible",o)}});async function B(){const o=await le();if(!o||!o.isSuccess){d.msg((o==null?void 0:o.message)||"获取信息失败",{icon:2});return}o.responseData&&(b.value=o.responseData.map(l=>({label:l.userName,value:l.userId})));const e=await se();if(!e||!e.isSuccess){d.msg((e==null?void 0:e.message)||"获取信息失败",{icon:2});return}_.value=e.responseData.map(l=>({label:l.issuesWorkTypeName,value:l.issuesWorkTypeId}));const t=await te();if(!t||!t.isSuccess){d.msg((t==null?void 0:t.message)||"获取信息失败",{icon:2});return}I.value=t.responseData.map(l=>({label:l.issuesTypeName,value:l.issuesTypeId}));const s=await ae();if(!s||!s.isSuccess){d.msg((s==null?void 0:s.message)||"获取信息失败",{icon:2});return}g.value=s.responseData.map(l=>({label:l.systemClientName,value:l.systemClientId}))}function N(){B(),m.formData?Object.assign(a,m.formData):Object.assign(a,V)}P(()=>{const o=c.value;o!=null&&o.destroy()}),M(()=>m.visible,(o,e)=>{o&&N()});function y(){var o;p.value.reset(),(o=p.value)==null||o.clearValidate(),f.value=!1}function F(){p.value.validate((o,e,t)=>{o&&d.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async s=>{try{const l=await oe(e);if(!l||!l.isSuccess){d.confirm(l.message||"提交数据信息失败",{icon:2});return}d.msg(l.message||"操作成功",{icon:1}),v("done"),y()}catch{}finally{d.close(s)}}})})}return(o,e)=>{const t=L,s=J,l=H,C=K,W=Q,h=R;return z(),A(h,{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=n=>f.value=n),resize:!0,title:"系统类型编辑","shade-close":!1,move:!0,maxmin:!0,area:"50%",btnAlign:"c",btn:[{text:"提交",callback:()=>F()},{text:"关闭",callback:()=>y()}],onClose:y},{default:i(()=>[r(W,{ref_key:"refForm",ref:p,pane:!0,model:a,rules:E.value,style:{padding:"10px"}},{default:i(()=>[r(s,{label:"开发人员",prop:"developerUserId",mode:"inline"},{default:i(()=>[r(t,{modelValue:a.developerUserId,"onUpdate:modelValue":e[0]||(e[0]=n=>a.developerUserId=n),options:b.value},null,8,["modelValue","options"])]),_:1}),r(s,{label:"问题类型",prop:"issuesTypeId",mode:"inline"},{default:i(()=>[r(t,{modelValue:a.issuesTypeId,"onUpdate:modelValue":e[1]||(e[1]=n=>a.issuesTypeId=n),options:I.value},null,8,["modelValue","options"])]),_:1}),r(s,{label:"客户名称",prop:"systemClientId",mode:"inline"},{default:i(()=>[r(t,{modelValue:a.systemClientId,"onUpdate:modelValue":e[2]||(e[2]=n=>a.systemClientId=n),options:g.value},null,8,["modelValue","options"])]),_:1}),r(s,{label:"问题工作流程",prop:"issuesWorkTypeId",mode:"inline","label-width":120},{default:i(()=>[r(t,{modelValue:a.issuesWorkTypeId,"onUpdate:modelValue":e[3]||(e[3]=n=>a.issuesWorkTypeId=n),options:_.value},null,8,["modelValue","options"])]),_:1}),r(s,{label:"排序号",prop:"sortId",required:"","label-width":100},{default:i(()=>[r(l,{modelValue:a.sortId,"onUpdate:modelValue":e[4]||(e[4]=n=>a.sortId=n)},null,8,["modelValue"])]),_:1}),r(s,{label:"开始时间",prop:"developerStartTime",mode:"inline"},{default:i(()=>[r(C,{type:"datetime",modelValue:a.developerStartTime,"onUpdate:modelValue":e[5]||(e[5]=n=>a.developerStartTime=n),placeholder:"开始时间",onChange:x},null,8,["modelValue"])]),_:1}),r(s,{label:"结束时间",prop:"developerEndTime",mode:"inline"},{default:i(()=>[r(C,{type:"datetime",modelValue:a.developerEndTime,"onUpdate:modelValue":e[6]||(e[6]=n=>a.developerEndTime=n),placeholder:"结束时间","on-change":U},null,8,["modelValue"])]),_:1}),r(s,{label:"问题事件信息","label-position":"top","label-width":"100%",prop:"issuesDescription"},{default:i(()=>[Z("div",re,[r(w(X),{style:{"border-bottom":"1px solid #ccc"},editor:c.value,defaultConfig:k,mode:"default"},null,8,["editor"]),r(w(Y),{style:{height:"200px","overflow-y":"hidden"},modelValue:a.issuesDescription,"onUpdate:modelValue":e[7]||(e[7]=n=>a.issuesDescription=n),defaultConfig:T,mode:"default",onOnCreated:S},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","btn"])}}});const be=$(ne,[["__scopeId","data-v-465f5f2b"]]);export{be as default};
