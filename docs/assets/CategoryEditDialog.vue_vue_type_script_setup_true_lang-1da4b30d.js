import{d as U,k as M,r as d,D as T,z as F,a as S,c as $,w as i,b as s,Z as r,J as j,I as q,V as E,K as G,M as O}from"./index-7492a36a.js";import{C as Z}from"./index-3725fea0.js";import{V as z}from"./index-52c9049b.js";import{a as J,d as K}from"./Blogs-a9cc5796.js";const Q=U({__name:"CategoryEditDialog",props:{visible:{type:Boolean},formData:{}},emits:["done","update:visible"],setup(b,{emit:v}){const c=b,m=M({get(){return c.visible},set(e){v("update:visible",e)}}),u=d(),p=d(!1),y={categoryId:0,categoryName:"",categoryDescription:"",parentId:0,isDisable:!1},o=T({...y}),V=d({categoryName:{type:"string",required:!0,message:"分类名称不能为空"}}),f=d([]);function _(e){const a={id:e.categoryId,title:e.categoryName,field:e.parentId,children:void 0};if(e.childrenCategorys&&e.childrenCategorys.length>0){const t=e.childrenCategorys.map(n=>_(n));a.children=t}return a}async function h(){try{const e=await J();if(e){if(!e.isSuccess||!e.responseData){r.msg(`获取分类列表失败:${e.message}`,{icon:2});return}}else{r.msg("获取分类列表失败",{icon:2});return}f.value=[{id:0,title:"父级",field:"",children:[]}],e.responseData.map(a=>{f.value[0].children.push(_(a))})}catch(e){r.msg(e.message,{icon:2})}}function D(){h(),c.formData?(Object.assign(o,c.formData),p.value=!0):(Object.assign(o,y),p.value=!1)}function g(){var e;u.value.reset(),(e=u.value)==null||e.clearValidate(),m.value=!1}async function w(e,a){try{const t=await K(e);if(!t||!t.isSuccess){r.msg((t==null?void 0:t.message)||"操作失败",{icon:2});return}r.msg((t==null?void 0:t.message)||"操作成功",{icon:1}),r.close(a),g()}catch(t){r.close(a),r.msg(t.message,{icon:2})}}function x(){u.value.validate((e,a,t)=>{e&&r.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async n=>{await w(a,n)}})})}return F(()=>c.visible,e=>{e&&D()}),(e,a)=>{const t=z,n=j,C=q,I=Z,k=E,B=G,N=O;return S(),$(N,{modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=l=>m.value=l),area:"500px",title:p.value?"编辑":"新增","shade-close":!1,move:!0,maxmin:!0,btn:[{text:"提交",callback:()=>x()},{text:"关闭",callback:()=>g()}],onClose:g},{default:i(()=>[s(B,{ref_key:"refForm",ref:u,model:o,rules:V.value,style:{padding:"10px"}},{default:i(()=>[s(n,{label:"上级菜单",prop:"parentId",required:""},{default:i(()=>[s(t,{modelValue:o.parentId,"onUpdate:modelValue":a[0]||(a[0]=l=>o.parentId=l),"allow-clear":!0,search:!0,data:f.value,style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),s(n,{label:"名称",prop:"categoryName"},{default:i(()=>[s(C,{modelValue:o.categoryName,"onUpdate:modelValue":a[1]||(a[1]=l=>o.categoryName=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),s(n,{label:"描述",prop:"categoryDescription"},{default:i(()=>[s(I,{modelValue:o.categoryDescription,"onUpdate:modelValue":a[2]||(a[2]=l=>o.categoryDescription=l),placeholder:"请填写","allow-clear":""},null,8,["modelValue"])]),_:1}),s(n,{label:"是否禁用",prop:"switch",mode:"inline"},{default:i(()=>[s(k,{modelValue:o.isDisable,"onUpdate:modelValue":a[3]||(a[3]=l=>o.isDisable=l),"onswitch-text":"是","unswitch-text":"否"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title","btn"])}}});export{Q as _};
