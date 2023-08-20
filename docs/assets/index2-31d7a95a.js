import{d as te,v as oe,J as Q,r as S,D as W,ar as ie,k as f,as as re,at as de,z as pe,ah as ve,o as ce,a as o,l as v,f as _,x,t as n,s as z,q as m,F as j,H as G,c as T,w as b,e as D,al as I,b as U,am as fe,m as me,Q as ye,a9 as ge,a8 as be,n as he,j as Ce}from"./index-53adf29b.js";import{h as E}from"./index2-79d7d27b.js";const ke={key:0,class:"layui-tag-input-prepend"},_e={key:1},xe={class:"layui-tag-input-inner"},ze={class:"layui-tag-input-collapsed-panel"},$e=["disabled","placeholder","readonly","onKeydown"],we={key:2,class:"layui-tag-input-clear"},Ve={key:3,class:"layui-tag-input-suffix"},Be={key:4,class:"layui-tag-input-append"},Ne=te({name:"LayTagInput",props:{modelValue:null,inputValue:null,disabled:{type:Boolean},placeholder:{default:void 0},readonly:{type:Boolean},allowClear:{type:Boolean},max:null,minCollapsedNum:{default:0},collapseTagsTooltip:{type:Boolean},size:{default:"md"},tagProps:null,disabledInput:{type:Boolean}},emits:["change","update:modelValue","update:inputValue","inputValueChange","pressEnter","remove","clear","focus","blur"],setup(l,{expose:X,emit:i}){var F;const s=l,K=oe(),h=Q(void 0),c=Q(void 0),P=S(""),$=S(""),C=S(!1),R=W({width:"15px"}),Y=W((F=s.tagProps)!=null?F:{}),w=ie(Y,"closable","size","disabled"),r=f({get:()=>s.inputValue,set(e){i("update:inputValue",e),i("inputValueChange",e)}}),u=f({get:()=>s.modelValue,set(e){i("update:modelValue",e),i("change",e)}}),p=f(()=>{var e;return se((e=u.value)!=null?e:[])}),k=f(()=>{var e;if(p.value)return s.minCollapsedNum?(e=p.value)==null?void 0:e.slice(0,s.minCollapsedNum):p.value}),Z=f(()=>{var e,a;if(p.value)return s.minCollapsedNum&&((e=p.value)==null?void 0:e.length)>s.minCollapsedNum?(a=p.value)==null?void 0:a.slice(s.minCollapsedNum):[]}),L=function(e){C.value||(r.value=e.target.value)},V=e=>{var a;e.type==="compositionend"?(C.value=!1,$.value="",L(e)):(C.value=!0,$.value=r.value+((a=e.data)!=null?a:""))},M=e=>{var a;e.preventDefault();const t=r.value?String(r.value).trim():"";!t||!u.value||(s.max&&((a=u.value)==null?void 0:a.length)>=s.max||(u.value=u.value instanceof Array?u.value.concat(String(t)):[t],r.value=""),i("pressEnter",r.value,e))},ee=e=>{var a;if(u.value&&u.value.length){if(!P.value&&["Backspace","Delete"].includes(e.code)){const t=p.value.length-1;B(p.value[t].value,t,e)}P.value=(a=r.value)!=null?a:""}},q=e=>{var a;i("focus",e),(a=c.value)==null||a.focus()},A=e=>{var a;i("blur",e),(a=c.value)==null||a.blur()},ae=e=>{s.disabled||s.readonly||!s.allowClear||(u.value=[],i("clear",e))},B=(e,a,t)=>{if(!u.value)return;const y=[...u.value];y.splice(a,1),u.value=y,i("remove",e,t)},le=e=>{c.value&&(e.preventDefault(),c.value.focus())},H=()=>{var e;h.value&&(e=h.value.offsetWidth,R.width=e>15?`${e}px`:"15px")},ue=f(()=>["layui-tag-input",`layui-tag-input-${s.size}`,{"layui-tag-input-disabled":s.disabled}]),se=e=>e.map(a=>re(a)?a:{value:a,label:String(a),closable:!0});de(h,()=>{H()}),pe(()=>r.value,e=>{c.value&&!C.value&&ve(()=>{c.value.value=e??""})});const ne=f(()=>{if(u.value&&k.value)return u.value.length-k.value.length});return ce(()=>{H()}),X({focus:q,blur:A}),(e,a)=>{var t,y,J;return o(),v("div",{class:he(n(ue)),onMousedown:le},[_("span",{ref_key:"mirrorRefEl",ref:h,class:"layui-tag-input-mirror"},x($.value||n(r)||l.placeholder),513),n(K).prepend?(o(),v("div",ke,[z(e.$slots,"prepend")])):m("",!0),e.$slots.prefix?(o(),v("span",_e,[z(e.$slots,"prefix")])):m("",!0),_("span",xe,[(o(!0),v(j,null,G(n(k),(d,g)=>(o(),T(E,I({key:`${d}-${g}`},n(w),{closable:!l.readonly&&!l.disabled&&d.closable,size:l.size,onClose:N=>B(d.value,g,N)}),{default:b(()=>[D(x(d.label),1)]),_:2},1040,["closable","size","onClose"]))),128)),((t=n(k))==null?void 0:t.length)!=((y=n(u))==null?void 0:y.length)?(o(),T(fe,{key:0,isDark:!1,trigger:"hover",popperStyle:"padding:6px",disabled:!l.collapseTagsTooltip},{content:b(()=>[_("div",ze,[(o(!0),v(j,null,G(n(Z),(d,g)=>(o(),T(E,I({key:`${d}-${g}`},n(w),{closable:!l.readonly&&!l.disabled&&d.closable,size:l.size,onClose:N=>{var O;return B(d.value,g+((O=l.minCollapsedNum)!=null?O:0),N)}}),{default:b(()=>[D(x(d.label),1)]),_:2},1040,["closable","size","onClose"]))),128))])]),default:b(()=>[U(E,I(n(w),{key:"more",closable:!1,size:l.size}),{default:b(()=>[D(" +"+x(n(ne))+"... ",1)]),_:1},16,["size"])]),_:1},8,["disabled"])):m("",!0),_("input",{ref_key:"inputRefEl",ref:c,class:"layui-tag-input-inner-input",style:me(R),disabled:l.disabled||l.disabledInput,placeholder:l.placeholder,readonly:l.readonly,onKeydown:ye(M,["enter"]),onKeyup:ee,onInput:L,onFocus:q,onBlur:A,onCompositionstart:V,onCompositionupdate:V,onCompositionend:V},null,44,$e)]),l.allowClear&&((J=n(u))!=null&&J.length)&&!l.disabled?(o(),v("span",we,[U(n(be),{type:"layui-icon-close-fill",onClick:ge(ae,["stop"])},null,8,["onClick"])])):m("",!0),e.$slots.suffix?(o(),v("span",Ve,[z(e.$slots,"suffix")])):m("",!0),n(K).append?(o(),v("div",Be,[z(e.$slots,"append")])):m("",!0)],34)}}});Ce(Ne);export{Ne as M};
