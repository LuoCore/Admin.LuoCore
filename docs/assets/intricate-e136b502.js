import{r as U}from"./index-44c9ce80.js";import{r as V,P as y,_ as A,a as m,l as b,f as k,b as e,w as a,c as v,x as B,e as D,q as x,I as S,J as N,T as H,K as z,A as q,p as R,h as J}from"./index-2aad6dfc.js";import{_ as K}from"./index-5c14c7e5.js";import{a as P,u as j}from"./index-7e3b9668.js";/* empty css              */import{x as G,A as L}from"./index-cddd5311.js";import{x as M}from"./index-8a3edce5.js";import"./index2-b6cd40cb.js";import"./index2-f922c431.js";import"./index2-daa80bda.js";import"./index2-a6139534.js";const O={name:"Intricate",setup(){const c=[{title:"名称",width:"200px",key:"name",customSlot:"name"},{title:"描述",key:"description",customSlot:"description"},{title:"重量",key:"weight",width:"100px",customSlot:"weight"},{title:"备注",key:"remark",ellipsisTooltip:!0,customSlot:"remark"},{title:"操作",width:"180px",key:"operate",customSlot:"operate",ellipsisTooltip:!0}],o=V([{id:"1",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "},{id:"2",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "},{id:"3",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "},{id:"4",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "},{id:"5",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "},{id:"6",name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "}]),g=u=>{u.isEdit=!0},t=u=>{u.isEdit=!1},h=(u,r,p)=>{r[p]=u},C=u=>{y.confirm("确定删除此条数据？",{btn:[{text:"确定",callback:()=>{o.value.forEach((r,p)=>{r.id===u.id&&o.value.splice(p,1)}),y.closeAll()}},{text:"取消",callback:()=>{y.closeAll()}}]})},f=()=>{o.value.push({id:(o.value.length+1).toString(),name:"layui",description:"layui",weight:"∞",remark:"layui - vue（谐音：类 UI) "})},n=V({name:"",domain:"",admin:"",approver:"",effectiveDate:["2022-09-25","2022-10-25"],type:"",taskName:"",description:"",executor:"",principal:"",remindTime:"01:01:01",taskType:""}),i=V();return{saveTable:t,tableData:o,editHandle:g,columns:c,changeData:h,formData:n,submitForm:()=>{i.value.validate((u,r,p)=>{if(u){let F=y.load(1);setTimeout(()=>{y.close(F),y.msg("提交成功",{icon:1,time:1e3}),n.value={name:"",domain:"",admin:"",approver:"",effectiveDate:["2022-09-25","2022-10-25"],type:"",taskName:"",description:"",executor:"",principal:"",remindTime:"01:01:01",taskType:""},setTimeout(()=>{i.value.clearValidate()},200)},2e3)}else console.log("校验失败")})},layFormRef:i,deleteHandler:C,addHandler:f}}};const E=c=>(R("data-v-d9fb049b"),c=c(),J(),c),Q={style:{height:"100%",width:"100%"}},W={style:{height:"calc(100% - 60px)",width:"100%",overflow:"auto"}},X=E(()=>k("p",{class:"title"},"复杂表单",-1)),Y=E(()=>k("p",{class:"describe"},"复杂表单常见于一次性输入和提交大批量数据的场景。",-1)),Z=E(()=>k("br",null,null,-1)),$={key:1},ee={key:1},le={key:1},ae={key:1},te={class:"footer"},oe={class:"footer-button"};function ue(c,o,g,t,h,C){const f=M,n=S,i=N,d=P,u=G,r=L,p=H,F=j,w=z,_=q,I=K,T=U;return m(),b("div",Q,[k("div",W,[e(f,null,{default:a(()=>[X,Y]),_:1}),e(T,{fluid:!0,style:{padding:"10px","padding-top":"0px",position:"relative"}},{default:a(()=>[e(w,{model:t.formData,ref:"layFormRef",required:""},{default:a(()=>[e(f,{title:"基本信息"},{default:a(()=>[e(F,null,{default:a(()=>[e(d,{md:"8"},{default:a(()=>[e(i,{label:"名称",prop:"name"},{default:a(()=>[e(n,{placeholder:"请输入名称",modelValue:t.formData.name,"onUpdate:modelValue":o[0]||(o[0]=l=>t.formData.name=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"域名",prop:"domain"},{default:a(()=>[e(n,{placeholder:"请输入域名",modelValue:t.formData.domain,"onUpdate:modelValue":o[1]||(o[1]=l=>t.formData.domain=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"管理员",prop:"admin"},{default:a(()=>[e(r,{modelValue:t.formData.admin,"onUpdate:modelValue":o[2]||(o[2]=l=>t.formData.admin=l)},{default:a(()=>[e(u,{value:"1",label:"张三"}),e(u,{value:"2",label:"李四"}),e(u,{value:"3",label:"王五"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"审批人",prop:"approver"},{default:a(()=>[e(r,{modelValue:t.formData.approver,"onUpdate:modelValue":o[3]||(o[3]=l=>t.formData.approver=l)},{default:a(()=>[e(u,{value:"1",label:"张三"}),e(u,{value:"2",label:"李四"}),e(u,{value:"3",label:"王五"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"生效日期",prop:"effectiveDate"},{default:a(()=>[e(p,{modelValue:t.formData.effectiveDate,"onUpdate:modelValue":o[4]||(o[4]=l=>t.formData.effectiveDate=l),style:{width:"100%"},range:"",placeholder:"type : date"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"仓库类型",prop:"type"},{default:a(()=>[e(r,{modelValue:t.formData.type,"onUpdate:modelValue":o[5]||(o[5]=l=>t.formData.type=l)},{default:a(()=>[e(u,{value:"1",label:"类型1"}),e(u,{value:"2",label:"类型2"}),e(u,{value:"3",label:"类型3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{title:"附加信息"},{default:a(()=>[e(F,null,{default:a(()=>[e(d,{md:"8"},{default:a(()=>[e(i,{label:"名称",prop:"taskName"},{default:a(()=>[e(n,{placeholder:"请输入名称",modelValue:t.formData.taskName,"onUpdate:modelValue":o[6]||(o[6]=l=>t.formData.taskName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"表述",prop:"description"},{default:a(()=>[e(n,{placeholder:"请输入表述",modelValue:t.formData.description,"onUpdate:modelValue":o[7]||(o[7]=l=>t.formData.description=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"执行人",prop:"admin"},{default:a(()=>[e(r,{modelValue:t.formData.executor,"onUpdate:modelValue":o[8]||(o[8]=l=>t.formData.executor=l)},{default:a(()=>[e(u,{value:"1",label:"张三"}),e(u,{value:"2",label:"李四"}),e(u,{value:"3",label:"王五"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"负责人",prop:"principal"},{default:a(()=>[e(r,{modelValue:t.formData.principal,"onUpdate:modelValue":o[9]||(o[9]=l=>t.formData.principal=l)},{default:a(()=>[e(u,{value:"1",label:"张三"}),e(u,{value:"2",label:"李四"}),e(u,{value:"3",label:"王五"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"提醒时间",prop:"remindTime"},{default:a(()=>[e(p,{type:"time",modelValue:t.formData.remindTime,"onUpdate:modelValue":o[10]||(o[10]=l=>t.formData.remindTime=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{md:"8"},{default:a(()=>[e(i,{label:"类型",prop:"taskType"},{default:a(()=>[e(r,{modelValue:t.formData.taskType,"onUpdate:modelValue":o[11]||(o[11]=l=>t.formData.taskType=l)},{default:a(()=>[e(u,{value:"1",label:"类型1"}),e(u,{value:"2",label:"类型2"}),e(u,{value:"3",label:"类型3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),Z,e(f,{title:"货品列表"},{default:a(()=>[e(I,{columns:t.columns,"data-source":t.tableData},{name:a(({data:l})=>[l.isEdit?(m(),v(n,{key:0,"model-value":l.name,onInput:s=>t.changeData(s,l,"name")},null,8,["model-value","onInput"])):(m(),b("span",$,B(l.name),1))]),description:a(({data:l})=>[l.isEdit?(m(),v(n,{key:0,"model-value":l.description,onInput:s=>t.changeData(s,l,"description")},null,8,["model-value","onInput"])):(m(),b("span",ee,B(l.description),1))]),weight:a(({data:l})=>[l.isEdit?(m(),v(n,{key:0,"model-value":l.weight,onInput:s=>t.changeData(s,l,"weight")},null,8,["model-value","onInput"])):(m(),b("span",le,B(l.weight),1))]),remark:a(({data:l})=>[l.isEdit?(m(),v(n,{key:0,"model-value":l.remark,onInput:s=>t.changeData(s,l,"remark")},null,8,["model-value","onInput"])):(m(),b("span",ae,B(l.remark),1))]),operate:a(({data:l})=>[l.isEdit?x("",!0):(m(),v(_,{key:0,type:"primary",size:"xs",onClick:s=>t.editHandle(l)},{default:a(()=>[D(" 编辑 ")]),_:2},1032,["onClick"])),l.isEdit?(m(),v(_,{key:1,type:"primary",size:"xs",onClick:s=>t.saveTable(l)},{default:a(()=>[D(" 保存 ")]),_:2},1032,["onClick"])):x("",!0),e(_,{type:"danger",size:"xs",onClick:s=>t.deleteHandler(l)},{default:a(()=>[D(" 删除 ")]),_:2},1032,["onClick"])]),_:1},8,["columns","data-source"]),e(_,{border:"green","border-style":"dashed",fluid:!0,onClick:t.addHandler,style:{"margin-top":"10px"}},{default:a(()=>[D("新增")]),_:1},8,["onClick"])]),_:1})]),_:1})]),k("div",te,[k("div",oe,[e(_,{type:"primary",onClick:t.submitForm},{default:a(()=>[D("提交")]),_:1},8,["onClick"]),e(_,null,{default:a(()=>[D("重置")]),_:1})])])])}const ve=A(O,[["render",ue],["__scopeId","data-v-d9fb049b"]]);export{ve as default};
