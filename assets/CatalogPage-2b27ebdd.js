import{r as u,j as e,n as t,t as a,u as G,g as O}from"./index-3ac82c75.js";import{u as $,C as H,I as U,a as W,T as J,P as N,S as Q,s as o,L as X,b as Y,R as Z,c as ee,d as ne,D as te,e as m,f,g as se,M as oe,h as ie,F as ce,i as re,j as le,k as L,l as B,A as ae,m as he,n as xe}from"./useAdvert-2e554efd.js";const de=({advert:c})=>{const[n,i]=u.useState(!1),[d,s]=u.useState(!1),{addFavorite:h,removeFavorite:x,favorite:r}=$();u.useEffect(()=>{s(r.some(C=>C._id===c._id))},[c,r]);const l=()=>{i(!n)},V=()=>{d?x(c):h(c)},{_id:w,name:T,price:I,rating:R,location:E,reviews:M,adults:_,description:P,details:y,gallery:q,transmission:D,engine:K}=c;return e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(U,{src:q[0],alt:"img"}),e.jsxs(W,{children:[e.jsxs(J,{children:[e.jsxs("h2",{children:[" ",T]}),e.jsxs(N,{children:[I,e.jsx(Q,{isFavorite:d,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:V})})]})]}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(Z,{children:[e.jsx("p",{children:R}),e.jsxs("p",{children:["(",M.reduce((C,z)=>C+z.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(ee,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",E]})]})]}),e.jsx(te,{children:P}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-users`})}),_," adults"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-conect`})}),D]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),K]}),y.kitchen>0?e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-bed`})}),y.beds," beds"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),y.airConditioner>0?"icon-microwave":null," AC"]}),e.jsx(se,{type:"button",onClick:l,children:"Show more"})]}),n&&e.jsx(oe,{onClose:l,children:e.jsx(ie,{id:w,toggleModal:l})})]},w)})},F=`
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
  border-top: 2px solid ${a.colors.grayScroll};
`,ge=t.div`
  display: flex;
  border-top: 2px solid ${a.colors.grayScroll};
  padding-top: 24px;
`,ue=t.h2`
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
`,k=t.label`
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
`,v=t.label`
  ${F}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,p=t.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,j=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${a.colors.black};
  border-color: ${c=>c.option==="true"?`${a.colors.red}`:`${a.colors.grayScroll}`};
`,b=t.svg`
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
`,g=t.p`
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
  color: ${a.colors.lightGray};
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
    color: ${a.colors.black};
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
  background: ${a.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${a.colors.btnShadow};
  }
`,Ce=t.button`
  display: block;
  border: none;
  background: ${a.colors.white};
  cursor: pointer;

  &:hover {
    color: ${a.colors.red};
  }
`,ve=t.div`
  position: relative;
`,Se=t.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,$e=()=>{const[c,n]=u.useState([]),{advertsSearch:i,adverts:d}=$();u.useEffect(()=>{const h=[...new Set(d.map(x=>x.location))];n(h)},[]);const s=(h,x)=>{const r=h.target.value;x("location",r),i(r)};return e.jsx("div",{children:e.jsx(L,{initialValues:{location:""},onSubmit:()=>{},children:({values:h,setFieldValue:x})=>e.jsx(B,{children:e.jsxs(me,{children:[e.jsx(fe,{children:"Location"}),e.jsxs(ve,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(ke,{as:"select",name:"location",placeholder:"All city",value:h.location,onChange:r=>s(r,x),children:[e.jsx("option",{value:"",children:"All city"}),c.map((r,l)=>e.jsx("option",{value:r,children:r},l))]}),e.jsx(Se,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]})})})})},we=()=>{const c={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs(pe,{children:[e.jsx($e,{}),e.jsx(L,{initialValues:c,onSubmit:()=>{},children:({values:n,setFieldValue:i,resetForm:d})=>e.jsxs(B,{children:[e.jsx(ue,{children:"Filters"}),e.jsx(A,{children:"Vehicle equipment"}),e.jsxs(je,{children:[e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"AC",checked:n.AC,onChange:s=>i("AC",s.target.checked)}),e.jsxs(j,{option:n.AC?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(g,{children:"AC"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Automatic",checked:n.Automatic,onChange:s=>i("Automatic",s.target.checked)}),e.jsxs(j,{option:n.Automatic?"true":"false",children:[e.jsxs(b,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(g,{children:"Automatic"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Kitchen",checked:n.Kitchen,onChange:s=>i("Kitchen",s.target.checked)}),e.jsxs(j,{option:n.Kitchen?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(g,{children:"Kitchen"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"TV",checked:n.TV,onChange:s=>i("TV",s.target.checked)}),e.jsxs(j,{option:n.TV?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(g,{children:"TV"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Shower",checked:n.Shower,onChange:s=>i("Shower",s.target.checked)}),e.jsxs(j,{option:n.Shower?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(g,{children:"Shower/WC"})]})]})]}),e.jsx(A,{children:"Vehicle type"}),e.jsxs(ge,{children:[e.jsxs(v,{children:[e.jsx(p,{type:"checkbox",name:"Van",checked:n.Van,onChange:s=>i("Van",s.target.checked)}),e.jsxs(j,{option:n.Van?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(g,{children:"Van"})]})]}),e.jsxs(v,{children:[e.jsx(p,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:s=>i("Fully",s.target.checked)}),e.jsxs(j,{option:n.Fully?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(g,{children:"Fully Integrated"})]})]}),e.jsxs(v,{children:[e.jsx(p,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:s=>i("Alcove",s.target.checked)}),e.jsxs(j,{option:n.Alcove?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(g,{children:"Alcove"})]})]})]}),e.jsxs(be,{children:[" ",e.jsx(ye,{type:"submit",children:"Search"}),e.jsx(Ce,{type:"button",onClick:()=>{d()},children:"Reset"})]})]})})]})},Ae=()=>{const[c,n]=u.useState(1),{getAdvert:i,adverts:d,isLoading:s}=$(),h=G();u.useEffect(()=>{i({page:1,limit:5})},[]);const x=()=>{const l=c+1;n(l),h(O({page:l,limit:5}))},r=()=>{};return s?e.jsx("p",{children:"Loading..."}):e.jsxs(ae,{children:[e.jsx(we,{onLocationChange:r}),e.jsxs(he,{children:[e.jsx("ul",{children:d.map(l=>e.jsx("li",{children:e.jsx(de,{advert:l})},l._id))}),e.jsx(xe,{onClick:x,children:"Load More"})]})]})},Le=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ve=()=>e.jsx(Le,{children:e.jsx(Ae,{})});export{Ve as default};
