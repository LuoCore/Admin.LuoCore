import{j as f,d as o,k as t,a as u,l as n,s as c,n as m,t as d}from"./index-1ab8f9a4.js";const r=f(o({name:"LayCol",props:{md:null,xs:null,sm:null,lg:null,mdOffset:null,xsOffset:null,smOffset:null,lgOffset:null},setup(l){const s=l,e=t(()=>[s.md?`layui-col-md${s.md}`:"",s.xs?`layui-col-xs${s.xs}`:"",s.sm?`layui-col-sm${s.sm}`:"",s.lg?`layui-col-lg${s.lg}`:"",s.mdOffset?`layui-col-md-offset${s.mdOffset}`:"",s.xsOffset?`layui-col-xs-offset${s.xsOffset}`:"",s.smOffset?`layui-col-sm-offset${s.smOffset}`:"",s.lgOffset?`layui-col-lg-offset${s.lgOffset}`:""]);return(a,i)=>(u(),n("div",{class:m(["layui-col",d(e)])},[c(a.$slots,"default")],2))}})),y=f(o({name:"LayRow",props:{space:null},setup(l){const s=l,e=t(()=>[s.space?`layui-col-space${s.space}`:""]);return(a,i)=>(u(),n("div",{class:m(["layui-row",d(e)])},[c(a.$slots,"default")],2))}}));export{r as a,y as u};
