import{j as d,d as n,v as u,a as s,l as t,f as a,t as p,s as r,F as y,q as i,x as o}from"./index-2aad6dfc.js";const x={class:"layui-exception"},v={class:"layui-exception-image"},m={key:0,class:"error-401"},k={key:1,class:"error-403"},f={key:2,class:"error-404"},b={key:3,class:"error-500"},g={class:"layui-exception-details"},j={class:"layui-exception-details-content"},B={class:"layui-exception-details-title"},S={class:"layui-exception-details-describe"},$={class:"layui-exception-details-extra"},F=d(n({name:"LayException",props:{title:{default:"exception"},status:null,describe:{default:"describe"}},setup(e){const c=u();return(l,C)=>(s(),t("div",x,[a("div",v,[p(c).default?r(l.$slots,"image",{key:0}):(s(),t(y,{key:1},[e.status=="401"?(s(),t("div",m)):i("",!0),e.status=="403"?(s(),t("div",k)):i("",!0),e.status=="404"?(s(),t("div",f)):i("",!0),e.status=="500"?(s(),t("div",b)):i("",!0)],64))]),a("div",g,[a("div",j,[a("div",B,o(e.title),1),a("div",S,o(e.describe),1),a("div",$,[r(l.$slots,"extra")])])])]))}}));export{F as j};
