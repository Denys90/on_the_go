import{r as j,j as e,n as c,t as b}from"./index-b6a9dbc3.js";import{u as S,C as D,I,a as E,T as P,P as T,S as q,s as t,L as z,b as G,R as H,c as J,d as K,D as N,e as l,f as h,g as Q,M as U,h as W,F as X,i as Y,A as Z,j as V,k as ee}from"./useAdvert-acf5b988.js";const ne=({advert:s})=>{const[n,o]=j.useState(!1),[i,g]=j.useState(!1),{addFavorite:m,removeFavorite:k,favorite:r}=S();j.useEffect(()=>{g(r.some(a=>a._id===s._id))},[s,r]);const u=()=>{o(!n)},w=()=>{const a=r.some(C=>C._id===s._id);a?k(s):m(s),g(!a)},{_id:y,name:$,price:L,rating:v,location:F,reviews:_,adults:M,description:O,details:f,gallery:R,transmission:A,engine:B}=s;return e.jsx(e.Fragment,{children:e.jsxs(D,{children:[e.jsx(I,{src:R[0],alt:"img"}),e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsxs("h2",{children:[" ",$]}),e.jsxs(T,{children:[L,".00",e.jsx(q,{isFavorite:i,children:e.jsx("use",{href:`${t}#icon-hart`,onClick:w})})]})]}),e.jsxs(z,{children:[e.jsx(G,{children:e.jsx("use",{href:`${t}#Rating`})}),e.jsxs(H,{children:[e.jsx("p",{children:v}),e.jsxs("p",{children:["(",_.reduce((a,C)=>a+C.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(J,{children:[e.jsx(K,{children:e.jsx("use",{href:`${t}#icon-map`})}),e.jsxs("p",{children:[" ",F]})]})]}),e.jsx(N,{children:O}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-users`})}),M," adults"]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-conect`})}),A]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-gasstation`})}),B]}),f.kitchen>0?e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-fork`})}),f.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-bed`})}),f.beds," beds"]}),e.jsxs(l,{children:[e.jsx(h,{children:e.jsx("use",{href:`${t}#icon-microwave`})}),f.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Q,{type:"button",onClick:u,children:"Show more"})]}),n&&e.jsx(U,{onClose:u,children:e.jsx(W,{id:y,toggleModal:u})})]},y)})},ie=c.div`
  width: 360px;
  display: inline-flex;
`,se=c.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`,oe=c.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`,d=c.label`
  display: inline-block;
  /* margin-right: 10px; */

  cursor: pointer;
`,x=c.span`
  display: inline-block;
  margin-right: 10px;
  width: 110px;
  height: 95px;
  border: 2px solid ${b.colors.lightGray};
  border-radius: 10px;
  border-color: ${s=>s.option?`${b.colors.red}`:`${b.colors.grayScroll}`};
`,p=c.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,te=()=>{const s={option1:!1,option2:!1,option3:!1,option4:!1,option5:!1};return e.jsxs("div",{children:[e.jsx(se,{children:"Filters"}),e.jsx(oe,{children:"Vehicle equipment"}),e.jsx(ie,{children:e.jsx(X,{initialValues:s,onSubmit:()=>{},children:({values:n,setFieldValue:o})=>e.jsxs(Y,{children:[e.jsxs(d,{children:[e.jsx(p,{type:"checkbox",name:"option1",checked:n.option1,onChange:i=>o("option1",i.target.checked)}),e.jsx(x,{option:n.option1,children:"Option 1"})]}),e.jsxs(d,{children:[e.jsx(p,{type:"checkbox",name:"option2",checked:n.option2,onChange:i=>o("option2",i.target.checked)}),e.jsx(x,{option:n.option2,children:"Option 2"})]}),e.jsxs(d,{children:[e.jsx(p,{type:"checkbox",name:"option3",checked:n.option3,onChange:i=>o("option3",i.target.checked)}),e.jsx(x,{option:n.option3,children:"Option 3"})]}),e.jsxs(d,{children:[e.jsx(p,{type:"checkbox",name:"option4",checked:n.option4,onChange:i=>o("option4",i.target.checked)}),e.jsx(x,{option:n.option4,children:"Option 4"})]}),e.jsxs(d,{children:[e.jsx(p,{type:"checkbox",name:"option5",checked:n.option5,onChange:i=>o("option5",i.target.checked)}),e.jsx(x,{option:n.option5,children:"Option 5"})]})]})})})]})},ce=()=>{const[s,n]=j.useState(5),{getAdvert:o,adverts:i,isLoading:g}=S(),m=i?i.slice(0,s):[];j.useEffect(()=>{o()},[]);const k=()=>{n(s+5)};return g?e.jsx("p",{children:"Loading..."}):e.jsxs(Z,{children:[e.jsx(te,{}),e.jsxs(V,{children:[e.jsx("ul",{children:m.map(r=>e.jsx("li",{children:e.jsx(ne,{advert:r})},r._id))}),e.jsx(ee,{onClick:k,children:"Load More"})]})]})},re=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,he=()=>e.jsx(re,{children:e.jsx(ce,{})});export{he as default};
