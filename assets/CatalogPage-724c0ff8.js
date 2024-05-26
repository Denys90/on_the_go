import{r as j,j as e,n as t,t as l,u as G,g as O}from"./index-97042a1b.js";import{u as $,C as H,I as U,a as W,T as J,P as N,S as Q,s as o,L as X,b as Y,R as Z,c as ee,d as ne,D as te,e as g,f as u,g as se,M as oe,h as ie,F as ce,i as re,j as le,k as F,l as V,A as ae,m as he,n as xe}from"./useAdvert-72041abc.js";const de=({advert:r})=>{const[n,c]=j.useState(!1),[a,s]=j.useState(!1),{addFavorite:m,removeFavorite:f,favorite:h}=$();j.useEffect(()=>{s(h.some(S=>S._id===r._id))},[r,h]);const i=()=>{c(!n)},C=()=>{a?f(r):m(r)},{_id:A,name:I,price:R,rating:E,location:M,reviews:_,adults:P,description:q,details:y,gallery:L,transmission:D,engine:K}=r;return console.log("Show me gallery",L),e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(U,{src:L[1],alt:"img"}),e.jsxs(W,{children:[e.jsxs(J,{children:[e.jsxs("h2",{children:[" ",I]}),e.jsxs(N,{children:[R,e.jsx(Q,{isFavorite:a,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:C})})]})]}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(Z,{children:[e.jsx("p",{children:E}),e.jsxs("p",{children:["(",_.reduce((S,z)=>S+z.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(ee,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",M]})]})]}),e.jsx(te,{children:q}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-users`})}),P," adults"]}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-conect`})}),D]}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),K]}),y.kitchen>0?e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-bed`})}),y.beds," beds"]}),e.jsxs(g,{children:[e.jsx(u,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),y.airConditioner>0?"icon-microwave":null," AC"]}),e.jsx(se,{type:"button",onClick:i,children:"Show more"})]}),n&&e.jsx(oe,{onClose:i,children:e.jsx(ie,{id:A,toggleModal:i})})]},A)})},T=`
  display: inline-block;
  cursor: pointer;
`,pe=t.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,je=t.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${l.colors.grayScroll};
`,ge=t.div`
  display: flex;
  border-top: 2px solid ${l.colors.grayScroll};
  padding-top: 24px;
`,ue=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,B=t.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,k=t.label`
  ${T}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,v=t.label`
  ${T}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,x=t.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,d=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${l.colors.black};
  border-color: ${r=>r.option==="true"?`${l.colors.red}`:`${l.colors.grayScroll}`};
`,b=t.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,w=t.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,p=t.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`;t.div`
  display: flex;
  align-items: center;
`;const me=t.div`
  margin-bottom: 32px;
`,fe=t.h3`
  color: ${l.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,ke=t(ce)`
  appearance: none;
  ${re}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${l.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,be=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,ye=t.button`
  ${le}
  margin-top: 0;
  background: ${l.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${l.colors.btnShadow};
  }
`,Ce=t.button`
  display: block;
  border: none;
  background: ${l.colors.white};
  cursor: pointer;

  &:hover {
    color: ${l.colors.red};
  }
`,Se=t.div`
  position: relative;
`,ve=t.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,we=({onLocationChange:r})=>{const[n,c]=j.useState(""),{adverts:a}=$(),[s,m]=j.useState([]);j.useEffect(()=>{const h=[...new Set(a.map(i=>i.location))];m(h)},[a]);const f=h=>{const i=h.target.value;c(i),r(i)};return e.jsx("div",{children:e.jsx(F,{initialValues:{location:""},onSubmit:()=>{console.log(n)},children:({values:h})=>e.jsx(V,{children:e.jsxs(me,{children:[e.jsx(fe,{children:"Location"}),e.jsxs(Se,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(ke,{as:"select",name:"location",placeholder:"Select a city",value:h.location,onChange:f,children:[e.jsx("option",{value:"",children:"Select a city"}),s.map((i,C)=>e.jsx("option",{value:i,children:i},C))]}),e.jsx(ve,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]})})})})},$e=()=>{const r={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs(pe,{children:[e.jsx(we,{}),e.jsx(F,{initialValues:r,onSubmit:()=>{},children:({values:n,setFieldValue:c,resetForm:a})=>e.jsxs(V,{children:[e.jsx(ue,{children:"Filters"}),e.jsx(B,{children:"Vehicle equipment"}),e.jsxs(je,{children:[e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"AC",checked:n.AC,onChange:s=>c("AC",s.target.checked)}),e.jsxs(d,{option:n.AC?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(p,{children:"AC"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Automatic",checked:n.Automatic,onChange:s=>c("Automatic",s.target.checked)}),e.jsxs(d,{option:n.Automatic?"true":"false",children:[e.jsxs(b,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(p,{children:"Automatic"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Kitchen",checked:n.Kitchen,onChange:s=>c("Kitchen",s.target.checked)}),e.jsxs(d,{option:n.Kitchen?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(p,{children:"Kitchen"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"TV",checked:n.TV,onChange:s=>c("TV",s.target.checked)}),e.jsxs(d,{option:n.TV?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(p,{children:"TV"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Shower",checked:n.Shower,onChange:s=>c("Shower",s.target.checked)}),e.jsxs(d,{option:n.Shower?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(p,{children:"Shower/WC"})]})]})]}),e.jsx(B,{children:"Vehicle type"}),e.jsxs(ge,{children:[e.jsxs(v,{children:[e.jsx(x,{type:"checkbox",name:"Van",checked:n.Van,onChange:s=>c("Van",s.target.checked)}),e.jsxs(d,{option:n.Van?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(p,{children:"Van"})]})]}),e.jsxs(v,{children:[e.jsx(x,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:s=>c("Fully",s.target.checked)}),e.jsxs(d,{option:n.Fully?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(p,{children:"Fully Integrated"})]})]}),e.jsxs(v,{children:[e.jsx(x,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:s=>c("Alcove",s.target.checked)}),e.jsxs(d,{option:n.Alcove?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(p,{children:"Alcove"})]})]})]}),e.jsxs(be,{children:[" ",e.jsx(ye,{type:"submit",children:"Search"}),e.jsx(Ce,{type:"button",onClick:()=>{a()},children:"Reset"})]})]})})]})},Ae=()=>{const[r,n]=j.useState(1),{getAdvert:c,adverts:a,isLoading:s}=$();console.log("Adverts at Catalog",a);const m=G();j.useEffect(()=>{c({page:1,limit:5})},[]);const f=()=>{const i=r+1;n(i),m(O({page:i,limit:5}))},h=()=>{};return s?e.jsx("p",{children:"Loading..."}):e.jsxs(ae,{children:[e.jsx($e,{onLocationChange:h}),e.jsxs(he,{children:[e.jsx("ul",{children:a.map(i=>e.jsx("li",{children:e.jsx(de,{advert:i})},i._id))}),e.jsx(xe,{onClick:f,children:"Load More"})]})]})},Le=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ve=()=>e.jsx(Le,{children:e.jsx(Ae,{})});export{Ve as default};
