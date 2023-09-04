import{d as N,r as c,k as $,D as M,z,a as E,c as F,w as r,b as l,f as j,Z as i,I as q,J as A,V as G,K as O,M as Z}from"./index-c7b5f3e4.js";import{y as J}from"./index-1af6ae5c.js";import{V as K}from"./index-b7e71b66.js";import{_ as H}from"./ArticleTag.vue_vue_type_script_setup_true_lang-9c74e044.js";import{_ as L}from"./WangEditorText.vue_vue_type_script_setup_true_lang-c6af8385.js";import{E as P,a as Q}from"./Blogs-ff01aed4.js";const W={style:{display:"flex","align-items":"flex-end"}},oe=N({__name:"ArticleEditDialog",props:{visible:{type:Boolean},formData:{}},emits:["done","update:visible"],setup(v,{emit:_}){const u=v,d=c(),h=c(),m=$({get(){return u.visible},set(e){_("update:visible",e)}}),V=c({articleTitle:{type:"string",required:!0,message:"文章标题不能为空！"},articleContent:{type:"string",required:!0,message:"文章内容不能为空！"}}),f=c(!1),g=c([]),y={articleId:0,articleTitle:"",articleContent:"",sortId:0,tagNames:[]},o=M({...y});function b(e){const t={id:e.categoryId,title:e.categoryName,field:e.parentId,children:void 0};if(e.childrenCategorys&&e.childrenCategorys.length>0){const a=e.childrenCategorys.map(n=>b(n));t.children=a}return t}async function x(){try{const e=await Q();if(e){if(!e.isSuccess||!e.responseData){i.msg(`获取分类列表失败:${e.message}`,{icon:2});return}}else{i.msg("获取分类列表失败",{icon:2});return}e.responseData.map(t=>{g.value.push(b(t))})}catch(e){i.msg(e.message,{icon:2})}}function C(e){o.articleContent=e}function T(){x(),u.formData?(Object.assign(o,u.formData),f.value=!0):(Object.assign(o,y),f.value=!1)}function p(){var e;d.value.reset(),(e=d.value)==null||e.clearValidate(),m.value=!1}function w(){d.value.validate((e,t,a)=>{e&&i.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async n=>{await I(t,n)}})})}async function I(e,t){try{const a=await P(e);if(!a||!a.isSuccess){i.confirm((a==null?void 0:a.message)||"操作失败",{icon:2});return}i.msg((a==null?void 0:a.message)||"操作成功",{icon:1}),p(),_("done")}catch(a){i.msg(a.message,{icon:2})}finally{i.close(t)}}return z(()=>u.visible,e=>{e&&T()}),(e,t)=>{const a=q,n=A,D=K,k=J,B=G,U=O,S=Z;return E(),F(S,{modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=s=>m.value=s),title:f.value?"编辑":"新增","shade-close":!1,move:!0,maxmin:!0,btn:[{text:"提交",callback:()=>w()},{text:"关闭",callback:()=>p()}],onClose:p},{default:r(()=>[l(U,{ref_key:"refForm",ref:d,rules:V.value,model:o,pane:!0,size:"mb"},{default:r(()=>[l(n,{label:"文章标题",prop:"articleTitle"},{default:r(()=>[l(a,{modelValue:o.articleTitle,"onUpdate:modelValue":t[0]||(t[0]=s=>o.articleTitle=s)},null,8,["modelValue"])]),_:1}),l(n,{label:"分类",prop:"categoryId",mode:"inline"},{default:r(()=>[l(D,{modelValue:o.categoryId,"onUpdate:modelValue":t[1]||(t[1]=s=>o.categoryId=s),data:g.value},null,8,["modelValue","data"])]),_:1}),l(n,{label:"排序号",prop:"sortId",mode:"inline"},{default:r(()=>[l(k,{modelValue:o.sortId,"onUpdate:modelValue":t[2]||(t[2]=s=>o.sortId=s)},null,8,["modelValue"])]),_:1}),l(n,{label:"是否显示",prop:"isShow"},{default:r(()=>[j("div",W,[l(B,{modelValue:o.isShow,"onUpdate:modelValue":t[3]||(t[3]=s=>o.isShow=s),size:"lg","onswitch-text":"是","unswitch-text":"否"},null,8,["modelValue"])])]),_:1}),l(n,{label:"标签",prop:"articleTag"},{default:r(()=>[l(H,{ref_key:"articleTag",ref:h,"tag-data":o.tagNames},null,8,["tag-data"])]),_:1}),l(n,{label:"文章内容",prop:"articleContent"},{default:r(()=>[l(L,{"editor-height":"300px","rich-text-content":o.articleContent,"onUpdate:richTextContent":C},null,8,["rich-text-content"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title","btn"])}}});export{oe as _};
