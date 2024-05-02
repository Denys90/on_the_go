import{r as m,j as e,n as t,t as r}from"./index-00198236.js";import{u as L,C as z,I as G,a as O,T as H,P as K,S as W,s as i,L as J,b as N,R as Q,c as U,d as X,D as Y,e as x,f as d,g as Z,M as ee,h as ne,F as oe,i as te,j as ie,k as se,l as ce,A as re,m as le,n as he}from"./useAdvert-7df60b60.js";const ae=({advert:s})=>{const[n,c]=m.useState(!1),[o,u]=m.useState(!1),{addFavorite:k,removeFavorite:b,favorite:p}=L();m.useEffect(()=>{u(p.some(C=>C._id===s._id))},[s,p]);const y=()=>{c(!n)},F=()=>{o?b(s):k(s)},{_id:v,name:B,price:I,rating:M,location:_,reviews:E,adults:R,description:V,details:f,gallery:D,transmission:T,engine:P}=s;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(G,{src:D[0],alt:"img"}),e.jsxs(O,{children:[e.jsxs(H,{children:[e.jsxs("h2",{children:[" ",B]}),e.jsxs(K,{children:[I,e.jsx(W,{isFavorite:o,children:e.jsx("use",{href:`${i}#icon-hart`,onClick:F})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:e.jsx("use",{href:`${i}#Rating`})}),e.jsxs(Q,{children:[e.jsx("p",{children:M}),e.jsxs("p",{children:["(",E.reduce((C,q)=>C+q.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(U,{children:[e.jsx(X,{children:e.jsx("use",{href:`${i}#icon-map`})}),e.jsxs("p",{children:[" ",_]})]})]}),e.jsx(Y,{children:V}),e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-users`})}),R," adults"]}),e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-conect`})}),T]}),e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-gasstation`})}),P]}),f.kitchen>0?e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-fork`})}),f.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-bed`})}),f.beds," beds"]}),e.jsxs(x,{children:[e.jsx(d,{children:e.jsx("use",{href:`${i}#icon-microwave`})}),f.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:y,children:"Show more"})]}),n&&e.jsx(ee,{onClose:y,children:e.jsx(ne,{id:v,toggleModal:y})})]},v)})},A=`
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
`,w=t.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,j=t.label`
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
`,h=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${r.colors.black};
  border-color: ${s=>s.option?`${r.colors.red}`:`${r.colors.grayScroll}`};
`,g=t.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,S=t.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,a=t.p`
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
  ${te}
  width: 360px;
  padding-left: 20px;
  &::placeholder {
    color: ${r.colors.black};
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
`,be=t.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,ye=()=>{const s={location:"",option1:!1,option2:!1,option3:!1,option4:!1,option5:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsx(xe,{children:e.jsx(se,{initialValues:s,onSubmit:()=>{},children:({values:n,setFieldValue:c})=>e.jsxs(ce,{children:[e.jsxs(ge,{children:[e.jsx(me,{children:"Location"}),e.jsxs(ke,{children:[" ",e.jsx("label",{htmlFor:"name"}),e.jsx(fe,{type:"text",name:"location",placeholder:"Select a city"}),e.jsx(be,{children:e.jsx("use",{href:`${i}#icon-map`})})]})]}),e.jsx(je,{children:"Filters"}),e.jsx(w,{children:"Vehicle equipment"}),e.jsxs(de,{children:[e.jsxs(j,{children:[e.jsx(l,{type:"checkbox",name:"option1",checked:n.option1,onChange:o=>c("option1",o.target.checked)}),e.jsxs(h,{option:n.option1,children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-wind`})}),e.jsx(a,{children:"AC"})]})]}),e.jsxs(j,{children:[e.jsx(l,{type:"checkbox",name:"option2",checked:n.option2,onChange:o=>c("option2",o.target.checked)}),e.jsxs(h,{option:n.option2,children:[e.jsxs(g,{children:[".",e.jsx("use",{href:`${i}#icon-conect`})]}),e.jsx(a,{children:"Automatic"})]})]}),e.jsxs(j,{children:[e.jsx(l,{type:"checkbox",name:"option3",checked:n.option3,onChange:o=>c("option3",o.target.checked)}),e.jsxs(h,{option:n.option3,children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-fork`})}),e.jsx(a,{children:"Kitchen"})]})]}),e.jsxs(j,{children:[e.jsx(l,{type:"checkbox",name:"option4",checked:n.option4,onChange:o=>c("option4",o.target.checked)}),e.jsxs(h,{option:n.option4,children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-tv`})}),e.jsx(a,{children:"TV"})]})]}),e.jsxs(j,{children:[e.jsx(l,{type:"checkbox",name:"option5",checked:n.option5,onChange:o=>c("option5",o.target.checked)}),e.jsxs(h,{option:n.option5,children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-shower`})}),e.jsx(a,{children:"Shower/WC"})]})]})]}),e.jsx(w,{children:"Vehicle type"}),e.jsxs(pe,{children:[e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Van",checked:n.Van,onChange:o=>c("Van",o.target.checked)}),e.jsxs(h,{option:n.Van,children:[e.jsx(S,{children:e.jsx("use",{href:`${i}#icon-van1`})}),e.jsx(a,{children:"Van"})]})]}),e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:o=>c("Fully",o.target.checked)}),e.jsxs(h,{option:n.Fully,children:[e.jsx(S,{children:e.jsx("use",{href:`${i}#icon-van2`})}),e.jsx(a,{children:"Fully Integrated"})]})]}),e.jsxs($,{children:[e.jsx(l,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:o=>c("Alcove",o.target.checked)}),e.jsxs(h,{option:n.Alcove,children:[e.jsx(S,{children:e.jsx("use",{href:`${i}#icon-van3`})}),e.jsx(a,{children:"Alcove"})]})]})]}),e.jsx(ue,{type:"submit",children:"Search"})]})})})},Ce=()=>{const[s,n]=m.useState(5),{getAdvert:c,adverts:o,isLoading:u}=L(),k=o?o.slice(0,s):[];m.useEffect(()=>{c()},[]);const b=()=>{n(s+5)};return u?e.jsx("p",{children:"Loading..."}):e.jsxs(re,{children:[e.jsx(ye,{}),e.jsxs(le,{children:[e.jsx("ul",{children:k.map(p=>e.jsx("li",{children:e.jsx(ae,{advert:p})},p._id))}),e.jsx(he,{onClick:b,children:"Load More"})]})]})},$e=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,we=()=>e.jsx($e,{children:e.jsx(Ce,{})});export{we as default};
