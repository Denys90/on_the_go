import{r as p,j as e,n as t,t as r}from"./index-0bd19ef1.js";import{u as S,C as z,I as G,a as O,T as H,P as K,S as W,s as i,L as J,b as N,R as Q,c as U,d as X,D as Y,e as m,f,g as Z,M as ee,h as ne,F as oe,i as te,j as ie,k as se,l as ce,A as re,m as le,n as ae}from"./useAdvert-8e353250.js";const he=({advert:c})=>{const[j,g]=p.useState(!1),[x,o]=p.useState(!1),{addFavorite:s,removeFavorite:n,favorite:d}=S();p.useEffect(()=>{o(d.some(C=>C._id===c._id))},[c,d]);const b=()=>{g(!j)},B=()=>{x?n(c):s(c)},{_id:w,name:F,price:I,rating:E,location:M,reviews:_,adults:R,description:D,details:y,gallery:T,transmission:V,engine:P}=c;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(G,{src:T[0],alt:"img"}),e.jsxs(O,{children:[e.jsxs(H,{children:[e.jsxs("h2",{children:[" ",F]}),e.jsxs(K,{children:[I,e.jsx(W,{isFavorite:x,children:e.jsx("use",{href:`${i}#icon-hart`,onClick:B})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:e.jsx("use",{href:`${i}#Rating`})}),e.jsxs(Q,{children:[e.jsx("p",{children:E}),e.jsxs("p",{children:["(",_.reduce((C,q)=>C+q.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(U,{children:[e.jsx(X,{children:e.jsx("use",{href:`${i}#icon-map`})}),e.jsxs("p",{children:[" ",M]})]})]}),e.jsx(Y,{children:D}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-users`})}),R," adults"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-conect`})}),V]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-gasstation`})}),P]}),y.kitchen>0?e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-bed`})}),y.beds," beds"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-microwave`})}),y.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:b,children:"Show more"})]}),j&&e.jsx(ee,{onClose:b,children:e.jsx(ne,{id:w,toggleModal:b})})]},w)})},A=`
  display: inline-block;
  cursor: pointer;
`,xe=t.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,de=t.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${r.colors.grayScroll};
`,pe=t.div`
  display: flex;
  border-top: 2px solid ${r.colors.grayScroll};
  padding-top: 24px;
`,je=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,L=t.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,u=t.label`
  ${A}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,$=t.label`
  ${A}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,l=t.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,a=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${r.colors.black};
  border-color: ${c=>c.option?`${r.colors.red}`:`${r.colors.grayScroll}`};
`,k=t.svg`
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
`;t.div`
  display: flex;
  align-items: center;
`;const ge=t.div`
  margin-bottom: 32px;
`,me=t.h3`
  color: ${r.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,fe=t(oe)`
  appearance: none;
  ${te}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${r.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,ue=t.button`
  ${ie}
  margin-top: 64px;
  background: ${r.colors.red};
  cursor: pointer;

  &:hover {
    box-shadow: ${r.colors.btnShadow};
  }
`,ke=t.div`
  position: relative;
`,ye=t.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,be=()=>{const[c,j]=p.useState(""),{adverts:g}=S();p.useEffect(()=>{const o=g.map(s=>s.location);j(o)},[g]);const x={location:"",option1:!1,option2:!1,option3:!1,option4:!1,option5:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsx(xe,{children:e.jsx(se,{initialValues:x,onSubmit:()=>{},children:({values:o,setFieldValue:s})=>e.jsxs(ce,{children:[e.jsxs(ge,{children:[e.jsx(me,{children:"Location"}),e.jsxs(ke,{children:[" ",e.jsx("label",{htmlFor:"name"}),e.jsxs(fe,{as:"select",name:"location",placeholder:"Select a city",value:o.location,onChange:n=>s("location",n.target.value),children:[e.jsx("option",{value:"",children:"Select a city"}),Array.isArray(c)&&c.map((n,d)=>e.jsx("option",{value:n,children:n},d))]}),e.jsx(ye,{children:e.jsx("use",{href:`${i}#icon-map`})})]})]}),e.jsx(je,{children:"Filters"}),e.jsx(L,{children:"Vehicle equipment"}),e.jsxs(de,{children:[e.jsxs(u,{children:[e.jsx(l,{type:"checkbox",name:"option1",checked:o.option1,onChange:n=>s("option1",n.target.checked)}),e.jsxs(a,{option:o.option1,children:[e.jsx(k,{children:e.jsx("use",{href:`${i}#icon-wind`})}),e.jsx(h,{children:"AC"})]})]}),e.jsxs(u,{children:[e.jsx(l,{type:"checkbox",name:"option2",checked:o.option2,onChange:n=>s("option2",n.target.checked)}),e.jsxs(a,{option:o.option2,children:[e.jsxs(k,{children:[".",e.jsx("use",{href:`${i}#icon-conect`})]}),e.jsx(h,{children:"Automatic"})]})]}),e.jsxs(u,{children:[e.jsx(l,{type:"checkbox",name:"option3",checked:o.option3,onChange:n=>s("option3",n.target.checked)}),e.jsxs(a,{option:o.option3,children:[e.jsx(k,{children:e.jsx("use",{href:`${i}#icon-fork`})}),e.jsx(h,{children:"Kitchen"})]})]}),e.jsxs(u,{children:[e.jsx(l,{type:"checkbox",name:"option4",checked:o.option4,onChange:n=>s("option4",n.target.checked)}),e.jsxs(a,{option:o.option4,children:[e.jsx(k,{children:e.jsx("use",{href:`${i}#icon-tv`})}),e.jsx(h,{children:"TV"})]})]}),e.jsxs(u,{children:[e.jsx(l,{type:"checkbox",name:"option5",checked:o.option5,onChange:n=>s("option5",n.target.checked)}),e.jsxs(a,{option:o.option5,children:[e.jsx(k,{children:e.jsx("use",{href:`${i}#icon-shower`})}),e.jsx(h,{children:"Shower/WC"})]})]})]}),e.jsx(L,{children:"Vehicle type"}),e.jsxs(pe,{children:[e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Van",checked:o.Van,onChange:n=>s("Van",n.target.checked)}),e.jsxs(a,{option:o.Van,children:[e.jsx(v,{children:e.jsx("use",{href:`${i}#icon-van1`})}),e.jsx(h,{children:"Van"})]})]}),e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Fully",checked:o.Fully,onChange:n=>s("Fully",n.target.checked)}),e.jsxs(a,{option:o.Fully,children:[e.jsx(v,{children:e.jsx("use",{href:`${i}#icon-van2`})}),e.jsx(h,{children:"Fully Integrated"})]})]}),e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Alcove",checked:o.Alcove,onChange:n=>s("Alcove",n.target.checked)}),e.jsxs(a,{option:o.Alcove,children:[e.jsx(v,{children:e.jsx("use",{href:`${i}#icon-van3`})}),e.jsx(h,{children:"Alcove"})]})]})]}),e.jsx(ue,{type:"submit",children:"Search"})]})})})},Ce=()=>{const[c,j]=p.useState(5),{getAdvert:g,adverts:x,isLoading:o}=S(),s=x?x.slice(0,c):[];p.useEffect(()=>{g()},[]);const n=()=>{j(c+5)};return o?e.jsx("p",{children:"Loading..."}):e.jsxs(re,{children:[e.jsx(be,{}),e.jsxs(le,{children:[e.jsx("ul",{children:s.map(d=>e.jsx("li",{children:e.jsx(he,{advert:d})},d._id))}),e.jsx(ae,{onClick:n,children:"Load More"})]})]})},$e=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,we=()=>e.jsx($e,{children:e.jsx(Ce,{})});export{we as default};
