import{r as f,j as e,n as t,t as m}from"./index-fa5857f1.js";import{u as F,C as z,I as O,a as G,T as H,P as K,S as W,s,L as J,b as N,R as Q,c as U,d as X,D as Y,e as d,f as p,g as Z,M as ee,h as ne,F as ie,i as se,A as oe,j as te,k as ce}from"./useAdvert-caf1f19e.js";const re=({advert:o})=>{const[n,c]=f.useState(!1),[i,k]=f.useState(!1),{addFavorite:y,removeFavorite:C,favorite:a}=F();f.useEffect(()=>{k(a.some(x=>x._id===o._id))},[o,a]);const b=()=>{c(!n)},L=()=>{const x=a.some($=>$._id===o._id);x?C(o):y(o),k(!x)},{_id:w,name:_,price:M,rating:E,location:I,reviews:R,adults:V,description:D,details:u,gallery:P,transmission:T,engine:q}=o;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(O,{src:P[0],alt:"img"}),e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsxs("h2",{children:[" ",_]}),e.jsxs(K,{children:[M,".00",e.jsx(W,{isFavorite:i,children:e.jsx("use",{href:`${s}#icon-hart`,onClick:L})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:e.jsx("use",{href:`${s}#Rating`})}),e.jsxs(Q,{children:[e.jsx("p",{children:E}),e.jsxs("p",{children:["(",R.reduce((x,$)=>x+$.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(U,{children:[e.jsx(X,{children:e.jsx("use",{href:`${s}#icon-map`})}),e.jsxs("p",{children:[" ",I]})]})]}),e.jsx(Y,{children:D}),e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-users`})}),V," adults"]}),e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-conect`})}),T]}),e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-gasstation`})}),q]}),u.kitchen>0?e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-fork`})}),u.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-bed`})}),u.beds," beds"]}),e.jsxs(d,{children:[e.jsx(p,{children:e.jsx("use",{href:`${s}#icon-microwave`})}),u.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:b,children:"Show more"})]}),n&&e.jsx(ee,{onClose:b,children:e.jsx(ne,{id:w,toggleModal:b})})]},w)})},B=`
  display: inline-block;
  cursor: pointer;

`,le=t.div`
  width: 360px;
  display: inline-flex;
  border-top: 2px solid ${m.colors.grayScroll};
  padding-top: 24px;
  margin-right: 64px;
`,he=t.div`
  margin-bottom: 32px;
`,ae=t.div`
  border-top: 2px solid ${m.colors.grayScroll};
  padding-top: 24px;
`,xe=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,A=t.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,j=t.label`
  ${B}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,S=t.label`
  ${B}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,r=t.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,l=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${m.colors.black};
  border-color: ${o=>o.option?`${m.colors.red}`:`${m.colors.grayScroll}`};
`,g=t.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,v=t.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,h=t.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`,de=()=>{const o={option1:!1,option2:!1,option3:!1,option4:!1,option5:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs("div",{children:[e.jsx(xe,{children:"Filters"}),e.jsx(A,{children:"Vehicle equipment"}),e.jsx(le,{children:e.jsx(ie,{initialValues:o,onSubmit:()=>{},children:({values:n,setFieldValue:c})=>e.jsxs(se,{children:[e.jsxs(he,{children:[e.jsxs(j,{children:[e.jsx(r,{type:"checkbox",name:"option1",checked:n.option1,onChange:i=>c("option1",i.target.checked)}),e.jsxs(l,{option:n.option1,children:[e.jsx(g,{children:e.jsx("use",{href:`${s}#icon-wind`})}),e.jsx(h,{children:"AC"})]})]}),e.jsxs(j,{children:[e.jsx(r,{type:"checkbox",name:"option2",checked:n.option2,onChange:i=>c("option2",i.target.checked)}),e.jsxs(l,{option:n.option2,children:[e.jsx(g,{children:e.jsx("use",{href:`${s}#icon-conect`})}),e.jsx(h,{children:"Automatic"})]})]}),e.jsxs(j,{children:[e.jsx(r,{type:"checkbox",name:"option3",checked:n.option3,onChange:i=>c("option3",i.target.checked)}),e.jsxs(l,{option:n.option3,children:[e.jsx(g,{children:e.jsx("use",{href:`${s}#icon-fork`})}),e.jsx(h,{children:"Kitchen"})]})]}),e.jsxs(j,{children:[e.jsx(r,{type:"checkbox",name:"option4",checked:n.option4,onChange:i=>c("option4",i.target.checked)}),e.jsxs(l,{option:n.option4,children:[e.jsx(g,{children:e.jsx("use",{href:`${s}#icon-tv`})}),e.jsx(h,{children:"TV"})]})]}),e.jsxs(j,{children:[e.jsx(r,{type:"checkbox",name:"option5",checked:n.option5,onChange:i=>c("option5",i.target.checked)}),e.jsxs(l,{option:n.option5,children:[e.jsx(g,{children:e.jsx("use",{href:`${s}#icon-shower`})}),e.jsx(h,{children:"Shower/WC"})]})]})]}),e.jsx(A,{children:"Vehicle type"}),e.jsxs(ae,{children:[e.jsxs(S,{children:[e.jsx(r,{type:"checkbox",name:"Van",checked:n.Van,onChange:i=>c("Van",i.target.checked)}),e.jsxs(l,{option:n.Van,children:[e.jsx(v,{children:e.jsx("use",{href:`${s}#icon-van1`})}),e.jsx(h,{children:"Van"})]})]}),e.jsxs(S,{children:[e.jsx(r,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:i=>c("Fully",i.target.checked)}),e.jsxs(l,{option:n.Fully,children:[e.jsx(v,{children:e.jsx("use",{href:`${s}#icon-van2`})}),e.jsx(h,{children:"Fully Integrated"})]})]}),e.jsxs(S,{children:[e.jsx(r,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:i=>c("Alcove",i.target.checked)}),e.jsxs(l,{option:n.Alcove,children:[e.jsx(v,{children:e.jsx("use",{href:`${s}#icon-van3`})}),e.jsx(h,{children:"Alcove"})]})]})]})]})})})]})},pe=()=>{const[o,n]=f.useState(5),{getAdvert:c,adverts:i,isLoading:k}=F(),y=i?i.slice(0,o):[];f.useEffect(()=>{c()},[]);const C=()=>{n(o+5)};return k?e.jsx("p",{children:"Loading..."}):e.jsxs(oe,{children:[e.jsx(de,{}),e.jsxs(te,{children:[e.jsx("ul",{children:y.map(a=>e.jsx("li",{children:e.jsx(re,{advert:a})},a._id))}),e.jsx(ce,{onClick:C,children:"Load More"})]})]})},je=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,me=()=>e.jsx(je,{children:e.jsx(pe,{})});export{me as default};
