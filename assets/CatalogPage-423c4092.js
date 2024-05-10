import{r as d,j as e,n as s,t as r}from"./index-afeb5ed4.js";import{u as A,C as q,I as z,a as G,T as O,P as H,S as U,s as o,L as W,b as J,R as N,c as Q,d as X,D as Y,e as u,f as m,g as Z,M as ee,h as ne,F as te,i as se,j as oe,k as ie,l as ce,A as re,m as le,n as ae}from"./useAdvert-2f5f3b99.js";const he=({advert:c})=>{const[p,j]=d.useState(!1),[x,g]=d.useState(!1),{addFavorite:f,removeFavorite:n,favorite:i}=A();d.useEffect(()=>{g(i.some($=>$._id===c._id))},[c,i]);const k=()=>{j(!p)},t=()=>{x?n(c):f(c)},{_id:C,name:F,price:V,rating:T,location:I,reviews:E,adults:R,description:M,details:S,gallery:_,transmission:D,engine:K}=c;return e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsx(z,{src:_[0],alt:"img"}),e.jsxs(G,{children:[e.jsxs(O,{children:[e.jsxs("h2",{children:[" ",F]}),e.jsxs(H,{children:[V,e.jsx(U,{isFavorite:x,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:t})})]})]}),e.jsxs(W,{children:[e.jsx(J,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(N,{children:[e.jsx("p",{children:T}),e.jsxs("p",{children:["(",E.reduce(($,P)=>$+P.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(Q,{children:[e.jsx(X,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",I]})]})]}),e.jsx(Y,{children:M}),e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-users`})}),R," adults"]}),e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-conect`})}),D]}),e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),K]}),S.kitchen>0?e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-fork`})}),S.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-bed`})}),S.beds," beds"]}),e.jsxs(u,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),S.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:k,children:"Show more"})]}),p&&e.jsx(ee,{onClose:k,children:e.jsx(ne,{id:C,toggleModal:k})})]},C)})},B=`
  display: inline-block;
  cursor: pointer;
`,de=s.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,xe=s.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${r.colors.grayScroll};
`,pe=s.div`
  display: flex;
  border-top: 2px solid ${r.colors.grayScroll};
  padding-top: 24px;
`,je=s.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,L=s.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,b=s.label`
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
`,v=s.label`
  ${B}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,l=s.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,a=s.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${r.colors.black};
  border-color: ${c=>c.option==="true"?`${r.colors.red}`:`${r.colors.grayScroll}`};
`,y=s.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,w=s.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,h=s.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`;s.div`
  display: flex;
  align-items: center;
`;const ge=s.div`
  margin-bottom: 32px;
`,ue=s.h3`
  color: ${r.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,me=s(te)`
  appearance: none;
  ${se}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${r.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,fe=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,ke=s.button`
  ${oe}
  margin-top: 0;
  background: ${r.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${r.colors.btnShadow};
  }
`,be=s.button`
  display: block;
  border: none;
  background: ${r.colors.white};
  cursor: pointer;

  &:hover {
    color: ${r.colors.red};
  }
`,ye=s.div`
  position: relative;
`,Ce=s.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,Se=()=>{const[c,p]=d.useState(""),{adverts:j,addDataToFilter:x,filterValues:g}=A();d.useEffect(()=>{const n=j.map(i=>i.location);p(n)},[j]),d.useEffect(()=>{console.log("Updated filterValues:",g)},[g]);const f={location:"",AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsx(de,{children:e.jsx(ie,{initialValues:f,onSubmit:n=>{console.log("Form values:",n),x(n)},children:({values:n,setFieldValue:i,resetForm:k})=>e.jsxs(ce,{children:[e.jsxs(ge,{children:[e.jsx(ue,{children:"Location"}),e.jsxs(ye,{children:[" ",e.jsx("label",{htmlFor:"name"}),e.jsxs(me,{as:"select",name:"location",placeholder:"Select a city",value:n.location,onChange:t=>i("location",t.target.value),children:[e.jsx("option",{value:"",children:"Select a city"}),Array.isArray(c)&&c.map((t,C)=>e.jsx("option",{value:t,children:t},C))]}),e.jsx(Ce,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]}),e.jsx(je,{children:"Filters"}),e.jsx(L,{children:"Vehicle equipment"}),e.jsxs(xe,{children:[e.jsxs(b,{children:[e.jsx(l,{type:"checkbox",name:"AC",checked:n.AC,onChange:t=>i("AC",t.target.checked)}),e.jsxs(a,{option:n.AC?"true":"false",children:[e.jsx(y,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(h,{children:"AC"})]})]}),e.jsxs(b,{children:[e.jsx(l,{type:"checkbox",name:"Automatic",checked:n.Automatic,onChange:t=>i("Automatic",t.target.checked)}),e.jsxs(a,{option:n.Automatic?"true":"false",children:[e.jsxs(y,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(h,{children:"Automatic"})]})]}),e.jsxs(b,{children:[e.jsx(l,{type:"checkbox",name:"Kitchen",checked:n.Kitchen,onChange:t=>i("Kitchen",t.target.checked)}),e.jsxs(a,{option:n.Kitchen?"true":"false",children:[e.jsx(y,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(h,{children:"Kitchen"})]})]}),e.jsxs(b,{children:[e.jsx(l,{type:"checkbox",name:"TV",checked:n.TV,onChange:t=>i("TV",t.target.checked)}),e.jsxs(a,{option:n.TV?"true":"false",children:[e.jsx(y,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(h,{children:"TV"})]})]}),e.jsxs(b,{children:[e.jsx(l,{type:"checkbox",name:"Shower",checked:n.Shower,onChange:t=>i("Shower",t.target.checked)}),e.jsxs(a,{option:n.Shower?"true":"false",children:[e.jsx(y,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(h,{children:"Shower/WC"})]})]})]}),e.jsx(L,{children:"Vehicle type"}),e.jsxs(pe,{children:[e.jsxs(v,{children:[e.jsx(l,{type:"checkbox",name:"Van",checked:n.Van,onChange:t=>i("Van",t.target.checked)}),e.jsxs(a,{option:n.Van?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(h,{children:"Van"})]})]}),e.jsxs(v,{children:[e.jsx(l,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:t=>i("Fully",t.target.checked)}),e.jsxs(a,{option:n.Fully?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(h,{children:"Fully Integrated"})]})]}),e.jsxs(v,{children:[e.jsx(l,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:t=>i("Alcove",t.target.checked)}),e.jsxs(a,{option:n.Alcove?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(h,{children:"Alcove"})]})]})]}),e.jsxs(fe,{children:[" ",e.jsx(ke,{type:"submit",children:"Search"}),e.jsx(be,{type:"button",onClick:()=>k(),children:"Reset"})]})]})})})},$e=()=>{const[c,p]=d.useState(5),{getAdvert:j,adverts:x,isLoading:g}=A(),f=x?x.slice(0,c):[];d.useEffect(()=>{j()},[]);const n=()=>{p(c+5)};return g?e.jsx("p",{children:"Loading..."}):e.jsxs(re,{children:[e.jsx(Se,{}),e.jsxs(le,{children:[e.jsx("ul",{children:f.map(i=>e.jsx("li",{children:e.jsx(he,{advert:i})},i._id))}),e.jsx(ae,{onClick:n,children:"Load More"})]})]})},ve=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Le=()=>e.jsx(ve,{children:e.jsx($e,{})});export{Le as default};
