import{r as a,j as e,n as t,t as h}from"./index-14fa2817.js";import{u as L,C as O,I as H,a as U,T as W,P as J,S as N,s as o,L as Q,b as X,R as Y,c as Z,d as ee,D as ne,e as f,f as m,g as te,M as se,h as oe,F as ie,i as ce,j as re,k as B,l as V,A as le,m as ae,n as he}from"./useAdvert-b816c87a.js";const de=({advert:c})=>{const[n,i]=a.useState(!1),[d,s]=a.useState(!1),{addFavorite:u,removeFavorite:k,favorite:l}=L();a.useEffect(()=>{s(l.some($=>$._id===c._id))},[c,l]);const r=()=>{i(!n)},b=()=>{d?k(c):u(c)},{_id:S,name:x,price:E,rating:R,location:M,reviews:_,adults:q,description:D,details:v,gallery:K,transmission:P,engine:z}=c;return e.jsx(e.Fragment,{children:e.jsxs(O,{children:[e.jsx(H,{src:K[0],alt:"img"}),e.jsxs(U,{children:[e.jsxs(W,{children:[e.jsxs("h2",{children:[" ",x]}),e.jsxs(J,{children:[E,e.jsx(N,{isFavorite:d,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:b})})]})]}),e.jsxs(Q,{children:[e.jsx(X,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(Y,{children:[e.jsx("p",{children:R}),e.jsxs("p",{children:["(",_.reduce(($,G)=>$+G.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(Z,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",M]})]})]}),e.jsx(ne,{children:D}),e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-users`})}),q," adults"]}),e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-conect`})}),P]}),e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),z]}),v.kitchen>0?e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-fork`})}),v.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-bed`})}),v.beds," beds"]}),e.jsxs(f,{children:[e.jsx(m,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),v.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(te,{type:"button",onClick:r,children:"Show more"})]}),n&&e.jsx(se,{onClose:r,children:e.jsx(oe,{id:S,toggleModal:r})})]},S)})},I=`
  display: inline-block;
  cursor: pointer;
`,T=t.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,xe=t.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${h.colors.grayScroll};
`,pe=t.div`
  display: flex;
  border-top: 2px solid ${h.colors.grayScroll};
  padding-top: 24px;
`,je=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,F=t.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,y=t.label`
  ${I}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,w=t.label`
  ${I}
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
  border: 2px solid ${h.colors.black};
  border-color: ${c=>c.option==="true"?`${h.colors.red}`:`${h.colors.grayScroll}`};
`,C=t.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,A=t.svg`
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
`;const ge=t.div`
  margin-bottom: 32px;
`,ue=t.h3`
  color: ${h.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,fe=t(ie)`
  appearance: none;
  ${ce}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${h.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,me=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,ke=t.button`
  ${re}
  margin-top: 0;
  background: ${h.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${h.colors.btnShadow};
  }
`,be=t.button`
  display: block;
  border: none;
  background: ${h.colors.white};
  cursor: pointer;

  &:hover {
    color: ${h.colors.red};
  }
`,ye=t.div`
  position: relative;
`,Ce=t.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,Se=({onLocationChange:c})=>{const[n,i]=a.useState(""),{adverts:d}=L(),[s,u]=a.useState([]);a.useEffect(()=>{const l=[...new Set(d.map(r=>r.location))];u(l)},[d]);const k=l=>{const r=l.target.value;i(r),c(r)};return e.jsx(T,{children:e.jsx(B,{initialValues:{location:""},onSubmit:()=>{console.log(n)},children:({values:l})=>e.jsx(V,{children:e.jsxs(ge,{children:[e.jsx(ue,{children:"Location"}),e.jsxs(ye,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(fe,{as:"select",name:"location",placeholder:"Select a city",value:l.location,onChange:k,children:[e.jsx("option",{value:"",children:"Select a city"}),s.map((r,b)=>e.jsx("option",{value:r,children:r},b))]}),e.jsx(Ce,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]})})})})},ve=()=>{const c={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs(T,{children:[e.jsx(Se,{}),e.jsx(B,{initialValues:c,onSubmit:()=>{},children:({values:n,setFieldValue:i,resetForm:d})=>e.jsxs(V,{children:[e.jsx(je,{children:"Filters"}),e.jsx(F,{children:"Vehicle equipment"}),e.jsxs(xe,{children:[e.jsxs(y,{children:[e.jsx(p,{type:"checkbox",name:"AC",checked:n.AC,onChange:s=>i("AC",s.target.checked)}),e.jsxs(j,{option:n.AC?"true":"false",children:[e.jsx(C,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(g,{children:"AC"})]})]}),e.jsxs(y,{children:[e.jsx(p,{type:"checkbox",name:"Automatic",checked:n.Automatic,onChange:s=>i("Automatic",s.target.checked)}),e.jsxs(j,{option:n.Automatic?"true":"false",children:[e.jsxs(C,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(g,{children:"Automatic"})]})]}),e.jsxs(y,{children:[e.jsx(p,{type:"checkbox",name:"Kitchen",checked:n.Kitchen,onChange:s=>i("Kitchen",s.target.checked)}),e.jsxs(j,{option:n.Kitchen?"true":"false",children:[e.jsx(C,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(g,{children:"Kitchen"})]})]}),e.jsxs(y,{children:[e.jsx(p,{type:"checkbox",name:"TV",checked:n.TV,onChange:s=>i("TV",s.target.checked)}),e.jsxs(j,{option:n.TV?"true":"false",children:[e.jsx(C,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(g,{children:"TV"})]})]}),e.jsxs(y,{children:[e.jsx(p,{type:"checkbox",name:"Shower",checked:n.Shower,onChange:s=>i("Shower",s.target.checked)}),e.jsxs(j,{option:n.Shower?"true":"false",children:[e.jsx(C,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(g,{children:"Shower/WC"})]})]})]}),e.jsx(F,{children:"Vehicle type"}),e.jsxs(pe,{children:[e.jsxs(w,{children:[e.jsx(p,{type:"checkbox",name:"Van",checked:n.Van,onChange:s=>i("Van",s.target.checked)}),e.jsxs(j,{option:n.Van?"true":"false",children:[e.jsx(A,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(g,{children:"Van"})]})]}),e.jsxs(w,{children:[e.jsx(p,{type:"checkbox",name:"Fully",checked:n.Fully,onChange:s=>i("Fully",s.target.checked)}),e.jsxs(j,{option:n.Fully?"true":"false",children:[e.jsx(A,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(g,{children:"Fully Integrated"})]})]}),e.jsxs(w,{children:[e.jsx(p,{type:"checkbox",name:"Alcove",checked:n.Alcove,onChange:s=>i("Alcove",s.target.checked)}),e.jsxs(j,{option:n.Alcove?"true":"false",children:[e.jsx(A,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(g,{children:"Alcove"})]})]})]}),e.jsxs(me,{children:[" ",e.jsx(ke,{type:"submit",children:"Search"}),e.jsx(be,{type:"button",onClick:()=>{d()},children:"Reset"})]})]})})]})},$e=()=>{const[c,n]=a.useState(5),[i,d]=a.useState(""),[s,u]=a.useState([]),{getAdvert:k,adverts:l,isLoading:r}=L();a.useEffect(()=>{k()},[]),a.useEffect(()=>{u(i?l.filter(x=>x.location===i):l)},[i,l]);const b=()=>{n(c+5)},S=x=>{d(x)};return r?e.jsx("p",{children:"Loading..."}):e.jsxs(le,{children:[e.jsx(ve,{onLocationChange:S}),e.jsxs(ae,{children:[e.jsx("ul",{children:s.slice(0,c).map(x=>e.jsx("li",{children:e.jsx(de,{advert:x})},x._id))}),e.jsx(he,{onClick:b,children:"Load More"})]})]})},we=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Fe=()=>e.jsx(we,{children:e.jsx($e,{})});export{Fe as default};
