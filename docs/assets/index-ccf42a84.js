import{r as T}from"./index-44c9ce80.js";import{j as h,d as C,k as x,a as d,l as r,n as k,m as b,q as V,s as m,t as g,v as H,f as a,e as o,x as A,W as S,r as w,$ as L,z as W,o as I,F as G,_ as M,c as O,w as u,b as t,g as R,p as j,h as q}from"./index-2aad6dfc.js";import{k as Q}from"./index-bbe80eca.js";import{_ as U}from"./index-5c14c7e5.js";import{a as Y,u as J}from"./index-7e3b9668.js";import{x as K}from"./index-8a3edce5.js";import{i as X}from"./index-21782bc0.js";import"./index2-b6cd40cb.js";import"./index2-f922c431.js";const Z=h(C({name:"LayBadge",props:{theme:null,color:null,ripple:{type:Boolean},type:null},setup(l){const s=l,e=x(()=>[{"layui-badge":!s.type,"layui-badge-rim":s.type=="rim","layui-badge-dot":s.type=="dot","layui-badge-dot-ripple":s.ripple},`layui-bg-${s.theme}`]),c=x(()=>[s.color?`background-color: ${s.color}`:""]);return(_,y)=>(d(),r("span",{class:k(g(e)),style:b(g(c))},[l.type==="dot"?(d(),r("span",{key:0,class:k(s.theme?`layui-bg-${s.theme}`:""),style:b(s.color?`background-color: ${s.color}`:"background-color: #ff5722;")},null,6)):V("",!0),l.type!="dot"?m(_.$slots,"default",{key:1}):V("",!0)],6))}})),uu=h(C({name:"LayTimeline",props:{direction:{default:"vertical"}},setup(l){const s=l,e=x(()=>["layui-timeline",s.direction==="horizontal"?"layui-timeline-horizontal":""]);return(c,_)=>(d(),r("ul",{class:k(g(e))},[m(c.$slots,"default")],2))}})),tu={class:"layui-timeline-item"},eu={class:"layui-icon layui-timeline-axis"},au={class:"layui-timeline-content layui-text"},su={key:0,class:"layui-timeline-title"},lu={key:1,class:"layui-timeline-title"},ou=h(C({name:"LayTimelineItem",props:{title:null,simple:{type:Boolean}},setup:l=>(H(),(s,e)=>(d(),r("li",tu,[a("i",eu,[m(s.$slots,"dot",{},()=>[o("")])]),a("div",au,[l.simple?(d(),r("div",su,[m(s.$slots,"title",{},()=>[o(A(l.title),1)])])):(d(),r("h3",lu,[m(s.$slots,"title",{},()=>[o(A(l.title),1)])])),m(s.$slots,"default")])])))})),iu=h(C({name:"LayCountUp",props:{startVal:{default:0},endVal:{default:0},decimal:{default:"."},decimalPlaces:{default:0},useGrouping:{type:Boolean,default:!0},separator:{default:","},autoplay:{type:Boolean,default:!0},useEasing:{type:Boolean,default:!0},easingFn:{default:S.easeInOutCubic},duration:{default:2e3},prefix:{default:""},suffix:{default:""}},setup(l,{expose:s}){const e=l;let c=w(e.startVal);const _=i=>{if(typeof i!="number")return"0";i=i.toFixed(e.decimalPlaces);const n=(i+="").split(".");let f=n[0];const F=n.length>1?e.decimal+n[1]:"",D=/(\d+)(\d{3})/;if(e.useGrouping&&e.separator&&(B=e.separator,isNaN(parseFloat(B))))for(;D.test(f);)f=f.replace(D,"$1"+e.separator+"$2");var B;return e.prefix+f+F+e.suffix},y=L(c,{delay:0,duration:e.duration,disabled:!e.useEasing,transition:typeof e.easingFn=="string"?S[e.easingFn]:e.easingFn}),p=x(()=>_(y.value)),E=function(){c.value=e.endVal};return W(()=>e.endVal,()=>{e.autoplay&&(c.value=e.endVal)}),I(()=>{e.autoplay&&E()}),s({start:E}),(i,n)=>(d(),r(G,null,[m(i.$slots,"prefix"),a("span",null,A(g(p)),1),m(i.$slots,"suffix")],64))}}));const nu=C({name:"Analysis",setup(){const l=w();return I(()=>{var c=l.value,_=X(c),y={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Bai","Fan","Yue","Qian"]},yAxis:{type:"value"},grid:{x:"50px",y:"50px",x2:"50px",y2:"50px"},series:[{data:[120,200,150,80,70,110,130,50,40,70,100],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},itemStyle:{normal:{color:"#009688"}}}]};y&&_.setOption(y)}),{mainRef:l,columns21:[{type:"number"},{title:"任务内容",key:"task"},{title:"计划时间",key:"time"},{title:"完成情况",key:"state",customSlot:"state"}],dataSource21:[{task:"睡觉",time:"两小时",state:"1"},{task:"吃饭",time:"两小时",state:"2"},{task:"吃饭",time:"两小时",state:"1"},{task:"睡觉",time:"两小时",state:"1"},{task:"睡觉",time:"两小时",state:"2"},{task:"上班",time:"两小时",state:"1"},{task:"上班",time:"两小时",state:"1"},{task:"上班",time:"两小时",state:"0"},{task:"睡觉",time:"两小时",state:"0"},{task:"睡觉",time:"两小时",state:"0"}]}}});const v=l=>(j("data-v-149765f1"),l=l(),q(),l),du={class:"statistics-body"},cu={class:"statistics-body"},ru={class:"statistics-body"},Fu={class:"statistics-body"},pu={id:"main",ref:"mainRef"},mu={style:{"padding-top":"42px","padding-left":"42px","padding-right":"42px","padding-bottom":"10px"}},_u=v(()=>a("ul",{class:"leaving-messages"},[a("li",null,[a("h3",null,"张爱玲"),a("p",null,"于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，原来你也在这里？”。"),a("span",null,"5月30日 00:00")]),a("li",null,[a("h3",null,"王羲之"),a("p",null,"但我只要够快就行了对不对？你就算有无限量的子弹，你换弹匣也需要时间，我只有那么一瞬间，把你打翻，然后就拍屁股走人。"),a("span",null,"5月30日 00:00")]),a("li",null,[a("h3",null,"诸葛亮"),a("p",null,"皓首匹夫！苍髯老贼！你枉活九十有六，一生未立寸功，只会摇唇鼓舌！助曹为虐！一条断脊之犬，还敢在我军阵前狺狺狂吠，我从未见过有如此厚颜无耻之人！"),a("span",null,"5月30日 00:00")])],-1)),Eu={key:0,style:{color:"#FFB800"}},yu={key:1,style:{color:"#5FB878"}},fu={key:2,style:{color:"#FF5722"}},Bu={class:"target"},Cu=v(()=>a("span",null,null,-1)),Du=v(()=>a("p",{class:"target-title"},A("恭喜，本月目标已达标！"),-1));function xu(l,s,e,c,_,y){const p=Z,E=iu,i=K,n=Y,f=R,F=ou,D=uu,B=J,N=U,P=Q,z=T;return d(),O(z,{fluid:!0,style:{padding:"10px"}},{default:u(()=>[t(B,{space:10},{default:u(()=>[t(n,{md:6,sm:6,xs:12},{default:u(()=>[t(i,{class:"statistics"},{title:u(()=>[o("今日访问")]),extra:u(()=>[t(p,{theme:"green"},{default:u(()=>[o("Hot")]),_:1})]),footer:u(()=>[o(" 访问趋势 ")]),default:u(()=>[a("div",du,[t(E,{startVal:0,endVal:3600,decimalPlaces:2})])]),_:1})]),_:1}),t(n,{md:6,sm:6,xs:12},{default:u(()=>[t(i,{class:"statistics"},{title:u(()=>[o("提交次数")]),extra:u(()=>[t(p,{type:"rim"},{default:u(()=>[o("Hot")]),_:1})]),footer:u(()=>[o(" 最近一月 ")]),default:u(()=>[a("div",cu,[t(E,{startVal:0,endVal:3600,decimalPlaces:2})])]),_:1})]),_:1}),t(n,{md:6,sm:6,xs:12},{default:u(()=>[t(i,{class:"statistics"},{title:u(()=>[o("下载数量")]),extra:u(()=>[t(p,{type:"rim"},{default:u(()=>[o("Hot")]),_:1})]),footer:u(()=>[o(" 总下载量 ")]),default:u(()=>[a("div",ru,[t(E,{startVal:0,endVal:3600,decimalPlaces:2})])]),_:1})]),_:1}),t(n,{md:6,sm:6,xs:12},{default:u(()=>[t(i,{class:"statistics"},{title:u(()=>[o("流量统计")]),extra:u(()=>[t(p,{type:"rim"},{default:u(()=>[o("Hot")]),_:1})]),footer:u(()=>[o(" 最近一年 ")]),default:u(()=>[a("div",Fu,[t(E,{startVal:0,endVal:3600,decimalPlaces:2})])]),_:1})]),_:1}),t(n,{md:24,sm:24,xs:24},{default:u(()=>[t(i,null,{title:u(()=>[o("我的觉悟")]),extra:u(()=>[t(p,{type:"rim"},{default:u(()=>[o("昨日")]),_:1}),t(p,{type:"rim"},{default:u(()=>[o("今日")]),_:1})]),default:u(()=>[t(B,null,{default:u(()=>[t(n,{md:18},{default:u(()=>[a("div",pu,null,512)]),_:1}),t(n,{md:6},{default:u(()=>[a("div",mu,[t(D,null,{default:u(()=>[t(F,{title:"工专路 0 号店",simple:""},{dot:u(()=>[t(f,{type:"layui-icon-face-smile",color:"#009688"})]),_:1}),t(F,{title:"工专路 1 号店",simple:""}),t(F,{title:"工专路 2 号店",simple:""}),t(F,{title:"工专路 3 号店",simple:""}),t(F,{title:"工专路 4 号店",simple:""}),t(F,{title:"工专路 5 号店",simple:""}),t(F,{title:"工专路 5 号店",simple:""})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),t(n,{md:8,sm:8,xs:24},{default:u(()=>[t(i,null,{title:u(()=>[o("留言面板")]),default:u(()=>[_u]),_:1})]),_:1}),t(n,{md:8,sm:8,xs:24},{default:u(()=>[t(i,null,{title:u(()=>[o("签到统计")]),default:u(()=>[t(N,{columns:l.columns21,"data-source":l.dataSource21},{state:u(({data:$})=>[$.state==0?(d(),r("span",Eu,"进行中")):$.state==1?(d(),r("span",yu,"已完成")):(d(),r("span",fu,"已预期"))]),_:1},8,["columns","data-source"])]),_:1})]),_:1}),t(n,{md:8,sm:8,xs:24},{default:u(()=>[t(i,null,{title:u(()=>[o("本月目标")]),default:u(()=>[a("div",Bu,[t(P,{percent:90,circle:"",circleWidth:15,"show-text":!0,text:"已完成"},{text:u(({})=>[Cu]),_:1}),Du])]),_:1})]),_:1})]),_:1})]),_:1})}const wu=M(nu,[["render",xu],["__scopeId","data-v-149765f1"]]);export{wu as default};
