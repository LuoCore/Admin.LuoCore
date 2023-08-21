import{R as V,d as x,r as _,D as M,k as P,z as q,a as F,c as T,w as n,b as a,Z as m,M as U,N as E,O,P as j,X as B,_ as h}from"./index-1ab8f9a4.js";import{C}from"./index-8c5532e5.js";import{A as z}from"./index-47fb792e.js";function X(i){return V.post("/api/Rcominfo/ReadFastSocketInfoList",i)}function R(i){return V.post("/api/Rcominfo/EditFastSocketInfo",i)}function G(i){return V.delete("/api/Rcominfo/DeleteFastSocketInfo",{params:{fastSocketId:i}})}const A=x({__name:"fastSocketEditDialog",props:{visible:{type:Boolean,default:!1},isSub:{type:Boolean,default:!1},editData:{}},emits:["update:visible","done"],setup(i,{emit:u}){const c=i,p=_(),g=_([]);async function v(){const t=await B();if(!t||!t.isSuccess){m.msg((t==null?void 0:t.message)||"获取角色失败",{icon:2});return}g.value=t.responseData.map(e=>({label:e.systemTypeName,value:e.systemTypeId}))}const k={fastSocketId:0,clientName:"",sysTypeId:0,solutionName:"",socketIp:"",socketPort:0,databaseMemo:"",webMemo:"",otheMemo:""},o=M({...k}),I=_({clientName:{type:"string",required:!0,message:"客户名称不能为空"},solutionName:{type:"string",required:!0,message:"解决方案不能为空"},socketIp:{type:"string",required:!0,message:"中间件IP不能为空"},socketPort:[{asyncValidator:(t,e,r)=>new Promise((s,d)=>{e<=0?r(new Error("端口值不能小于/等于0")):s()})}],sysTypeId:[{type:"number",required:!0,message:"系统类型不能为空"},{asyncValidator:(t,e,r)=>new Promise((s,d)=>{e<=0?r(new Error("请选择系统类型!")):s()})}]}),y=P({get(){return c.visible},set(t){u("update:visible",t)}});function w(){v(),c.editData?Object.assign(o,c.editData):Object.assign(o,k)}q(()=>c.visible,(t,e)=>{t&&w(),console.log(t,e)});function b(){var t;p.value.reset(),(t=p.value)==null||t.clearValidate(),y.value=!1}function S(){p.value.validate((t,e,r)=>{console.log("提交："+JSON.stringify(e)),t&&m.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async s=>{try{var d=await R(e);if(!d||!d.isSuccess){m.confirm(d.message||"编辑数据提交失败",{icon:2});return}m.msg(d.message||"操作成功",{icon:1}),u("done"),b()}catch{}finally{m.close(s)}}})})}return(t,e)=>{const r=U,s=E,d=z,f=C,D=O,N=j;return F(),T(N,{modelValue:y.value,"onUpdate:modelValue":e[8]||(e[8]=l=>y.value=l),resize:!0,size:"md",title:"中间件编辑","shade-close":!1,move:!0,maxmin:!0,btnAlign:"c",btn:[{text:"提交",callback:()=>S()},{text:"关闭",callback:()=>b()}],onClose:b},{default:n(()=>[a(D,{ref_key:"refForm",ref:p,pane:!0,model:o,rules:I.value,style:{padding:"10px"}},{default:n(()=>[a(s,{label:"客户名称",prop:"clientName",required:"","label-width":100},{default:n(()=>[a(r,{modelValue:o.clientName,"onUpdate:modelValue":e[0]||(e[0]=l=>o.clientName=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),a(s,{label:"系统类型",prop:"sysTypeId",mode:"inline"},{default:n(()=>[a(d,{modelValue:o.sysTypeId,"onUpdate:modelValue":e[1]||(e[1]=l=>o.sysTypeId=l),options:g.value},null,8,["modelValue","options"])]),_:1}),a(s,{label:"解决方案名称",prop:"solutionName",mode:"inline",required:"","label-width":150},{default:n(()=>[a(r,{modelValue:o.solutionName,"onUpdate:modelValue":e[2]||(e[2]=l=>o.solutionName=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),a(s,{label:"中件间IP",prop:"socketIp",required:"",mode:"inline","label-width":100},{default:n(()=>[a(r,{modelValue:o.socketIp,"onUpdate:modelValue":e[3]||(e[3]=l=>o.socketIp=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),a(s,{label:"中件间端口",prop:"socketPort",required:"",mode:"inline","label-width":120},{default:n(()=>[a(r,{modelValue:o.socketPort,"onUpdate:modelValue":e[4]||(e[4]=l=>o.socketPort=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),a(s,{label:"数据库信息备注",prop:"desc"},{default:n(()=>[a(f,{placeholder:"请输入备注信息",modelValue:o.databaseMemo,"onUpdate:modelValue":e[5]||(e[5]=l=>o.databaseMemo=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"网站信息备注",prop:"desc"},{default:n(()=>[a(f,{placeholder:"请输入备注信息",modelValue:o.webMemo,"onUpdate:modelValue":e[6]||(e[6]=l=>o.webMemo=l)},null,8,["modelValue"])]),_:1}),a(s,{label:"其他信息备注",prop:"desc"},{default:n(()=>[a(f,{placeholder:"请输入备注信息",modelValue:o.otheMemo,"onUpdate:modelValue":e[7]||(e[7]=l=>o.otheMemo=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","btn"])}}});const L=h(A,[["__scopeId","data-v-fe5aa7cc"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{G as D,X as R,H as a,L as f};
