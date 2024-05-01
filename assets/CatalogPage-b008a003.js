import{r as g,j as e,n as o,t as f}from"./index-2cd45e1a.js";import{u as A,C as z,I as O,a as G,T as H,P as K,S as W,s,L as J,b as N,R as Q,c as U,d as X,D as Y,e as a,f as x,g as Z,M as ee,h as ne,F as ie,i as se,A as oe,j as te,k as ce}from"./useAdvert-e1047d12.js";const re=({advert:t})=>{const[n,c]=g.useState(!1),[i,k]=g.useState(!1),{addFavorite:u,removeFavorite:y,favorite:d}=A();g.useEffect(()=>{k(d.some(b=>b._id===t._id))},[t,d]);const C=()=>{c(!n)},B=()=>{i?y(t):u(t)},{_id:v,name:L,price:M,rating:_,location:E,reviews:I,adults:R,description:V,details:m,gallery:D,transmission:P,engine:T}=t;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(O,{src:D[0],alt:"img"}),e.jsxs(G,{children:[e.jsxs(H,{children:[e.jsxs("h2",{children:[" ",L]}),e.jsxs(K,{children:[M,".00",e.jsx(W,{isFavorite:i,children:e.jsx("use",{href:`${s}#icon-hart`,onClick:B})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:e.jsx("use",{href:`${s}#Rating`})}),e.jsxs(Q,{children:[e.jsx("p",{children:_}),e.jsxs("p",{children:["(",I.reduce((b,q)=>b+q.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(U,{children:[e.jsx(X,{children:e.jsx("use",{href:`${s}#icon-map`})}),e.jsxs("p",{children:[" ",E]})]})]}),e.jsx(Y,{children:V}),e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-users`})}),R," adults"]}),e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-conect`})}),P]}),e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-gasstation`})}),T]}),m.kitchen>0?e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-fork`})}),m.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-bed`})}),m.beds," beds"]}),e.jsxs(a,{children:[e.jsx(x,{children:e.jsx("use",{href:`${s}#icon-microwave`})}),m.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:C,children:"Show more"})]}),n&&e.jsx(ee,{onClose:C,children:e.jsx(ne,{id:v,toggleModal:C})})]},v)})},F=`
  display: inline-block;
  cursor: pointer;

`,le=o.div`
  width: 360px;
  display: inline-flex;
  border-top: 2px solid ${f.colors.grayScroll};
  padding-top: 24px;
  margin-right: 64px;
`,he=o.div`
  margin-bottom: 32px;
`,ae=o.div`
  border-top: 2px solid ${f.colors.grayScroll};
  padding-top: 24px;
`,xe=o.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,w=o.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,p=o.label`
  ${F}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,$=o.label`
  ${F}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,r=o.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,l=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${f.colors.black};
  border-color: ${t=>t.option?`${f.colors.red}`:`${f.colors.grayScroll}`};
`,j=o.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,S=o.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,h=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`,de=()=>{const t={option1:!1,option2:!1,option3:!1,option4:!1,option5:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs("div",{children:[e.jsx(xe,{children:"Filters"}),e.jsx(w,{children:"Vehicle equipment"}),e.jsx(le,{children:e.jsx(ie,{initialValues:t,onSubmit:()=>{},children:({values:n,setFieldValue:c})=>e.jsxs(se,{children:[e.jsxs(he,{children:[e.jsxs(p,{children:[e.jsx(r,{type:"checkbox",name:"option1",checked:n.option1,onChange:i=>c("option1",i.target.checked)}),e.jsxs(l,{option:n.option1,children:[e.jsx(j,{children:e.jsx("use",{href:`${s}#icon-wind`})}),e.jsx(h,{children:"AC"})]})]}),e.jsxs(p,{children:[e.jsx(r,{type:"checkbox",name:"option2",checked:n.option2,onChange:i=>c("option2",i.target.checked)}),e.jsxs(l,{option:n.option2,children:[e.jsx(j,{children:e.jsx("use",{href:`${s}#icon-conect`})}),e.jsx(h,{children:"Automatic"})]})]}),e.jsxs(p,{children:[e.jsx(r,{type:"checkbox",name:"option3",checked:n.option3,onChange:i=>c("option3",i.target.checked)}),e.jsxs(l,{option:n.option3,children:[e.jsx(j,{children:e.jsx("use",{href:`${s}#icon-fork`})}),e.jsx(h,{children:"Kitchen"})]})]}),e.jsxs(p,{children:[e.jsx(r,{type:"checkbox",name:"option4",checked:n.option4,onChange:i=>c("option4",i.target.checked)}),e.jsxs(l,{option:n.option4,children:[e.jsx(j,{children:e.jsx("use",{href:`${s}#icon-tv`})}),e.jsx(h,{children:"TV"})]})]}),e.jsxs(p,{children:[e.jsx(r,{type:"checkbox",name:"option5",checked:n.option5,onChange:i=>c("option5",i.target.checked)}),e.jsxs(l,{option:n.option5,children:[e.jsx(j,{children:e.jsx("use",{href:`${s}#icon-shower`})}),e.jsx(h,{children:"Shower/WC"})]})]})]}),e.jsx(w,{children:"Vehicle type"}),e.jsxs(ae,{children:[e.jsxs($,{children:[e.jsx(r,{type:"checkbox",name:"Van",checked:n.Van,onChange:i=>c("Van",i.target.checked)}),e.jsxs(l,{option:n.Van,children:[e.jsx(S,{children:e.jsx("use",{href:`${s}#icon-van1`})}),e.jsx(h,{children:"Van"})]})]}),e.jsxs($,{children:[e.jsx(r,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:i=>c("Fully",i.target.checked)}),e.jsxs(l,{option:n.Fully,children:[e.jsx(S,{children:e.jsx("use",{href:`${s}#icon-van2`})}),e.jsx(h,{children:"Fully Integrated"})]})]}),e.jsxs($,{children:[e.jsx(r,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:i=>c("Alcove",i.target.checked)}),e.jsxs(l,{option:n.Alcove,children:[e.jsx(S,{children:e.jsx("use",{href:`${s}#icon-van3`})}),e.jsx(h,{children:"Alcove"})]})]})]})]})})})]})},pe=()=>{const[t,n]=g.useState(5),{getAdvert:c,adverts:i,isLoading:k}=A(),u=i?i.slice(0,t):[];g.useEffect(()=>{c()},[]);const y=()=>{n(t+5)};return k?e.jsx("p",{children:"Loading..."}):e.jsxs(oe,{children:[e.jsx(de,{}),e.jsxs(te,{children:[e.jsx("ul",{children:u.map(d=>e.jsx("li",{children:e.jsx(re,{advert:d})},d._id))}),e.jsx(ce,{onClick:y,children:"Load More"})]})]})},je=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,me=()=>e.jsx(je,{children:e.jsx(pe,{})});export{me as default};
