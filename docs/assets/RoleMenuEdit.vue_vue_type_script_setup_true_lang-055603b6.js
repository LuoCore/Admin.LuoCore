import{d as y,k as g,r as f,z as b,o as k,a as M,c as _,w as x,b as I,Z as n,M as w}from"./index-7c55f663.js";import{c as B,U as C}from"./Basic-bc49e0e2.js";import{_ as K}from"./index2-a5c9f400.js";const G=y({__name:"RoleMenuEdit",props:{visible:{type:Boolean},roleId:{},checkedMenuIds:{}},emits:["done","update:visible"],setup(h,{emit:d}){const o=h,t=g({get(){return o.visible},set(s){d("update:visible",s)}}),a=f([]),l=f([]);async function p(){a.value=o.checkedMenuIds,n.msg("正在获取菜单信息...",{icon:16,time:0,shade:!0,success:async s=>{try{const e=await B();if(e){if(!e.isSuccess||!e.responseData){n.msg(`获取菜单列表失败:${e.message}`,{icon:2});return}}else{n.msg("获取菜单列表失败",{icon:2});return}e.responseData.map(c=>{l.value.push(m(c))})}catch(e){n.msg(e.message,{icon:2})}finally{n.close(s)}}})}function m(s){const e={id:s.menuId,title:s.menuName,field:s.menuIcon,spread:!0,children:void 0};if(s.childrenMenus&&s.childrenMenus.length>0){const c=s.childrenMenus.map(r=>m(r));e.children=c}return e}function u(){a.value=[],l.value=[],t.value=!1}async function v(){n.msg("正在提交数据...",{icon:16,time:0,shade:!0,success:async s=>{try{const e=await C({roleId:o.roleId,menuIds:a.value});if(!e||!e.isSuccess){n.msg((e==null?void 0:e.message)||"操作失败",{icon:2});return}n.msg((e==null?void 0:e.message)||"操作成功",{icon:1}),u(),d("done")}catch(e){n.msg(e.message,{icon:2})}finally{n.close(s)}}})}return b(()=>o.visible,s=>{s&&p()}),k(()=>{a.value=o.checkedMenuIds}),(s,e)=>{const c=K,r=w;return M(),_(r,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value=i),area:["300px","700px"],title:"分配权限","shade-close":!1,move:!0,maxmin:!1,btn:[{text:"提交",callback:()=>v()},{text:"关闭",callback:()=>u()}],onClose:u},{default:x(()=>[I(c,{checkedKeys:a.value,"onUpdate:checkedKeys":e[0]||(e[0]=i=>a.value=i),data:l.value,"show-checkbox":!0,"show-line":!1},null,8,["checkedKeys","data"])]),_:1},8,["modelValue","btn"])}}});export{G as _};
