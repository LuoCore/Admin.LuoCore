import{d as I,r as u,o as C,X as V,z as b,Z as F,a as P,c as S,w as s,b as t,I as x,J as U,K as w}from"./index-7c55f663.js";import{A as N}from"./index-5f419692.js";import{b as h}from"./Basic-bc49e0e2.js";const z=I({__name:"FastSocketSearchForm",props:{formData:{}},emits:["update:SearchFormParamUpdate"],setup(i,{expose:f,emit:m}){const p=i,d=u(),e=u({systemClientId:0,solutionName:"",socketIp:"",socketPort:0});p.formData&&Object.assign(e,p.formData),C(()=>{V(()=>{console.log("界面节点更新完以后再修改值。"),m("update:SearchFormParamUpdate",e.value)})});const c=u([]);v(),b(e,o=>{m("update:SearchFormParamUpdate",o)},{deep:!0});async function v(){const o=await h();if(!o||!o.isSuccess){F.msg((o==null?void 0:o.message)||"获取信息失败",{icon:2});return}c.value=o.responseData.map(a=>({label:a.systemClientName,value:a.systemClientId}))}function y(){const o=d.value.reset();return e.value.systemClientId=0,e.value.socketPort=0,e.value.socketIp="",e.value.solutionName="",m("update:SearchFormParamUpdate",e.value),o}return f({resetFormData:y}),(o,a)=>{const r=x,n=U,_=N,k=w;return P(),S(k,{size:"md",ref_key:"searchFormRef",ref:d,model:e.value},{default:s(()=>[t(n,{mode:"inline",label:"中间件地址",prop:"socketIp"},{default:s(()=>[t(r,{modelValue:e.value.socketIp,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.socketIp=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),t(n,{mode:"inline",label:"中间件端口",prop:"socketPort"},{default:s(()=>[t(r,{modelValue:e.value.socketPort,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.socketPort=l),placeholder:"请填写",type:"number","allow-clear":""},null,8,["modelValue"])]),_:1}),t(n,{mode:"inline",label:"解决方案名称",prop:"solutionName"},{default:s(()=>[t(r,{modelValue:e.value.solutionName,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.solutionName=l),placeholder:"请填写",type:"number","allow-clear":""},null,8,["modelValue"])]),_:1}),t(n,{mode:"inline",label:"客户",prop:"systemClientId"},{default:s(()=>[t(_,{modelValue:e.value.systemClientId,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.systemClientId=l),items:c.value,placeholder:"请选择"},null,8,["modelValue","items"])]),_:1})]),_:1},8,["model"])}}});export{z as _};
