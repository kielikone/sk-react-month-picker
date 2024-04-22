(this["webpackJsonpsk-react-month-picker"]=this["webpackJsonpsk-react-month-picker"]||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o,s,a,i=n(0),r=n.n(i),c=n(12),l=n.n(c),d=(n(24),n(2)),h=n.n(d),b=n(5),j=n(6);const x=j.a.div(o||(o=Object(b.a)(["\n  border: #eee 1px solid;\n  border-radius: 5px;\n  position: relative;\n  user-select: none;\n  min-width: 200px;\n\tbackground-color: white;\n"]))),p=j.a.div(s||(s=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 10px;\n"]))),g=j.a.div(a||(a=Object(b.a)([""])));var u,f,m,O,v,y,w,C,Y,D=n(15),k=n.n(D),M=n(16),S=n.n(M);const T=j.a.div(u||(u=Object(b.a)(["\n  background-color: white;\n  border: #eee 1px solid;\n  position: absolute;\n  top: 35px;\n  left: 0;\n  z-index: 99999;\n  width: 425px;\n  flex-direction: row;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);\n  @media (max-width: 425px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),E=j.a.div(f||(f=Object(b.a)(["\n  box-sizing: border-box;\n  flex: 0.5;\n  padding: 20px;\n  border-right: #eee 1px solid;\n"]))),H=j.a.div(m||(m=Object(b.a)(["\n  box-sizing: border-box;\n  flex: 1;\n  padding: 20px;\n"]))),N=j.a.div(O||(O=Object(b.a)(["\n  color: #575757;\n  margin: 0 0 20px 0;\n  user-select: none;\n"]))),P=j.a.div(v||(v=Object(b.a)(["\n  color: #282c34;\n  font-weight: bold;\n  cursor: pointer;\n"]))),A=j.a.div(y||(y=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),B=j.a.div(w||(w=Object(b.a)(["\n  user-select: none;\n"]))),F=j.a.div(C||(C=Object(b.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 5px;\n  margin-top: 10px;\n"]))),z=j.a.div(Y||(Y=Object(b.a)(["\n  border: #eee 1px solid;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: white;\n  text-align: center;\n  &:hover {\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n  }\n  &.selected {\n    background-color: ",";\n    color: white;\n  }\n  pointer-events: ",";\n  opacity: ",";\n  cursor: ",";\n  transition: .2s;\n"])),(e=>e.highlightCol?e.highlightCol:"#1d7f7a"),(e=>e.disabled?"none":"auto"),(e=>e.disabled?.5:1),(e=>e.disabled?"default":"pointer"));var L=n(9),I=n(8),J=n(3);h.a.extend(k.a),h.a.extend(S.a);const R=e=>{let{presets:t,onChange:n,highlightCol:o}=e;const[s,a]=Object(i.useState)(0),[r,c]=Object(i.useState)([]),[l,d]=Object(i.useState)([]);Object(i.useEffect)((()=>{let e=[];for(let t=2010;t<=Number(h()().format("YYYY"));t++){const n=["01","02","03","04","05","06","07","08","09","10","11","12"].map((e=>({selected:!1,date:h()(t+"-"+e+"-01 00:00:00").toDate()})));e.push({year:t,months:n})}c(e),a(e.length-1)}),[]),Object(i.useEffect)((()=>{2===l.length&&n(l)}),[l]);const b=r[s];return b?Object(J.jsxs)(T,{children:[t&&t.length&&Object(J.jsxs)(E,{children:[Object(J.jsx)(N,{children:"PRESETS"}),t.map(((e,t)=>Object(J.jsx)(P,{onClick:t=>(e=>{let{start:t,end:n}=e;d([t,n])})(e),children:e.title},t)))]}),Object(J.jsxs)(H,{children:[Object(J.jsx)(N,{children:"SELECT A MONTH RANGE:"}),Object(J.jsxs)(A,{children:[Object(J.jsx)(L.a,{icon:I.a,style:{width:20,height:20,opacity:s?1:.2,cursor:s?"pointer":"default"},onClick:e=>s?a(s-1):null}),Object(J.jsx)(B,{children:b.year}),Object(J.jsx)(L.a,{icon:I.b,style:{width:20,height:20,opacity:s===r.length-1?.2:1,cursor:s===r.length-1?"default":"pointer"},onClick:e=>s<r.length-1?a(s+1):null})]}),Object(J.jsx)(F,{children:b.months.map(((e,t)=>Object(J.jsxs)(z,{highlightCol:o,className:!0===e.selected||2===l.length&&h()(e.date).isSameOrAfter(h()(l[0]),"month")&&h()(e.date).isSameOrBefore(h()(l[1]),"month")?"selected":"",disabled:h()(e.date).isAfter(h()().endOf("month")),onClick:n=>((e,t)=>{let n=[...r];n[s].months[e].selected=!0,c(n),l.length?h()(l[0]).isBefore(h()(t.date))?d([l[0],t.date]):d([t.date,l[0]]):d([t.date])})(t,e),children:[e.selected," ",h()(e.date).format("MMM")]},t)))})]})]}):null};var G=Object(i.memo)(R);var q=e=>{let{onChange:t,value:n,presets:o,style:s,closeDelay:a,highlightCol:r}=e;const[c,l]=Object(i.useState)(!1),[d,b]=Object(i.useState)(!1);Object(i.useEffect)((()=>{j(n)}),[]);const j=e=>{if(!e||e.length<2)return b("No dates selected");const t=o&&o.length?o.find((t=>(h()(t.start).isSame(h()(e[0]),"month")||t.start===e[0])&&(h()(t.end).isSame(h()(e[1]),"month")||t.end===e[1]))):null;return b(t?t.title:h()(e[0]).format("MMM YY")+" - "+h()(e[1]).format("MMM YY"))};return Object(J.jsxs)(x,{style:s,children:[Object(J.jsxs)(p,{onClick:e=>l(!c),children:[Object(J.jsx)(g,{children:d}),Object(J.jsx)(L.a,{icon:I.c,style:{width:14,height:14}})]}),c&&Object(J.jsx)(G,{presets:o,onChange:e=>{j(e),"function"===typeof t&&t([null===e[0]?null:h()(e[0]).startOf("month").format("YYYY-MM-DDTHH:mm:ss"),null===e[1]?null:h()(e[1]).endOf("month").format("YYYY-MM-DDTHH:mm:ss")]),setTimeout((()=>{l(!1)}),a||200)},highlightCol:r})]})};var K=function(){const e=[{title:"This month",start:h()().startOf("month").toDate(),end:h()().endOf("month").toDate()},{title:"Past 3 months",start:h()().subtract(2,"month").startOf("month").toDate(),end:h()().endOf("month").toDate()},{title:"Past 6 months",start:h()().subtract(5,"month").startOf("month").toDate(),end:h()().endOf("month").toDate()},{title:"This Year",start:h()().startOf("year").toDate(),end:h()().endOf("year").toDate()}];return Object(J.jsx)("div",{style:{width:300,margin:"50px auto"},children:Object(J.jsx)(q,{highlightCol:"#f60",presets:e,onChange:e=>console.log(e),closeDelay:500})})};var Q=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((t=>{let{getCLS:n,getFID:o,getFCP:s,getLCP:a,getTTFB:i}=t;n(e),o(e),s(e),a(e),i(e)}))};l.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(K,{})}),document.getElementById("root")),Q()}},[[28,1,2]]]);
//# sourceMappingURL=main.a40059f9.chunk.js.map