import{d as I,r as y,D as T,k as w,z as x,a as h,c as N,w as n,b as l,Z as d,I as C,J as B,K as E,M as U,_ as q}from"./index-9c77520b.js";import{C as F}from"./index-ff45222d.js";import{y as S}from"./index-481feabf.js";import{f as j}from"./Issues-3f2ad0cb.js";const z=I({__name:"IssuesWorkEditDialog",props:{visible:{type:Boolean,default:!1},formDate:{}},emits:["update:visible","done"],setup(b,{emit:c}){const i=b,u=y(),f={issuesWorkTypeId:0,issuesWorkTypeName:"",issuesWorkTypeDescription:"",sortId:0},s=T({...f}),k=y({sysTypeName:{type:"string",required:!0,message:"系统类型名称不能为空"}}),m=w({get(){return i.visible},set(o){c("update:visible",o)}});function v(){i.formDate?Object.assign(s,i.formDate):Object.assign(s,f)}x(()=>i.visible,(o,e)=>{o&&v()});function p(){var o;u.value.reset(),(o=u.value)==null||o.clearValidate(),m.value=!1}function g(){u.value.validate((o,e,_)=>{o&&d.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async r=>{try{const t=await j(e);if(!t||!t.isSuccess){d.confirm(t.message||"操作失败",{icon:2});return}d.msg(t.message||"操作成功",{icon:1}),c("done"),p()}catch{}finally{d.close(r)}}})})}return(o,e)=>{const _=C,r=B,t=S,V=F,D=E,W=U;return h(),N(W,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=a=>m.value=a),resize:!0,title:"问题工作类型编辑","shade-close":!1,move:!0,maxmin:!0,btnAlign:"c",btn:[{text:"提交",callback:()=>g()},{text:"关闭",callback:()=>p()}],onClose:p},{default:n(()=>[l(D,{ref_key:"refForm",ref:u,pane:!0,model:s,rules:k.value,style:{padding:"10px"}},{default:n(()=>[l(r,{label:"类型名称",prop:"issuesWorkTypeName",required:"","label-width":100,style:{width:"100%"}},{default:n(()=>[l(_,{modelValue:s.issuesWorkTypeName,"onUpdate:modelValue":e[0]||(e[0]=a=>s.issuesWorkTypeName=a),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),l(r,{label:"排序号",prop:"sortId",required:"","label-width":100,style:{width:"100%"}},{default:n(()=>[l(t,{modelValue:s.sortId,"onUpdate:modelValue":e[1]||(e[1]=a=>s.sortId=a)},null,8,["modelValue"])]),_:1}),l(r,{label:"描述信息",prop:"issuesWorkTypeDescription"},{default:n(()=>[l(V,{placeholder:"请输入描述信息",modelValue:s.issuesWorkTypeDescription,"onUpdate:modelValue":e[2]||(e[2]=a=>s.issuesWorkTypeDescription=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","btn"])}}});const K=q(z,[["__scopeId","data-v-83cf5ec7"]]);export{K as default};
