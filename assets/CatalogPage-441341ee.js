import{r as a,j as e,n as s,t as r}from"./index-f9685b2f.js";import{u as B,C as O,I as q,a as z,T as G,P as H,S as W,s as o,L as J,b as N,R as Q,c as U,d as X,D as Y,e as b,f as k,g as Z,M as ee,h as te,F as ne,i as se,j as oe,k as ie,l as ce,A as re,m as le,n as ae}from"./useAdvert-1c9230c4.js";const he=({advert:c})=>{const[f,p]=a.useState(!1),[j,y]=a.useState(!1),{addFavorite:t,removeFavorite:i,favorite:l}=B();a.useEffect(()=>{y(l.some(w=>w._id===c._id))},[c,l]);const n=()=>{p(!f)},g=()=>{j?i(c):t(c)},{_id:v,name:u,price:m,rating:T,location:I,reviews:E,adults:R,description:M,details:$,gallery:_,transmission:D,engine:K}=c;return e.jsx(e.Fragment,{children:e.jsxs(O,{children:[e.jsx(q,{src:_[0],alt:"img"}),e.jsxs(z,{children:[e.jsxs(G,{children:[e.jsxs("h2",{children:[" ",u]}),e.jsxs(H,{children:[m,e.jsx(W,{isFavorite:j,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:g})})]})]}),e.jsxs(J,{children:[e.jsx(N,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(Q,{children:[e.jsx("p",{children:T}),e.jsxs("p",{children:["(",E.reduce((w,P)=>w+P.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(U,{children:[e.jsx(X,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",I]})]})]}),e.jsx(Y,{children:M}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-users`})}),R," adults"]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-conect`})}),D]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),K]}),$.kitchen>0?e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-fork`})}),$.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-bed`})}),$.beds," beds"]}),e.jsxs(b,{children:[e.jsx(k,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),$.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(Z,{type:"button",onClick:n,children:"Show more"})]}),f&&e.jsx(ee,{onClose:n,children:e.jsx(te,{id:v,toggleModal:n})})]},v)})},V=`
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
`,F=s.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,C=s.label`
  ${V}
  margin-right: 10px;
  margin-bottom: 10px;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:last-of-type,
  &:nth-last-of-type(2) {
    margin-bottom: 0;
  }
`,A=s.label`
  ${V}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,h=s.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,d=s.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${r.colors.black};
  border-color: ${c=>c.option==="true"?`${r.colors.red}`:`${r.colors.grayScroll}`};
`,S=s.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,L=s.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,x=s.p`
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
`,fe=s(ne)`
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
`,me=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,be=s.button`
  ${oe}
  margin-top: 0;
  background: ${r.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${r.colors.btnShadow};
  }
`,ke=s.button`
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
`,Se=()=>{const[c,f]=a.useState(""),{adverts:p,addDataToFilter:j}=B();a.useEffect(()=>{const t=[...new Set(p.map(i=>i.location))];f(t)},[p]);const y={location:"",AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsx(de,{children:e.jsx(ie,{initialValues:y,onSubmit:t=>{j(t)},children:({values:t,setFieldValue:i,resetForm:l})=>e.jsxs(ce,{children:[e.jsxs(ge,{children:[e.jsx(ue,{children:"Location"}),e.jsxs(ye,{children:[" ",e.jsx("label",{htmlFor:"name"}),e.jsxs(fe,{as:"select",name:"location",placeholder:"Select a city",value:t.location,onChange:n=>i("location",n.target.value),children:[e.jsx("option",{value:"",children:"Select a city"}),Array.isArray(c)&&c.map((n,g)=>e.jsx("option",{value:n,children:n},g))]}),e.jsx(Ce,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]}),e.jsx(je,{children:"Filters"}),e.jsx(F,{children:"Vehicle equipment"}),e.jsxs(xe,{children:[e.jsxs(C,{children:[e.jsx(h,{type:"checkbox",name:"AC",checked:t.AC,onChange:n=>i("AC",n.target.checked)}),e.jsxs(d,{option:t.AC?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(x,{children:"AC"})]})]}),e.jsxs(C,{children:[e.jsx(h,{type:"checkbox",name:"Automatic",checked:t.Automatic,onChange:n=>i("Automatic",n.target.checked)}),e.jsxs(d,{option:t.Automatic?"true":"false",children:[e.jsxs(S,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(x,{children:"Automatic"})]})]}),e.jsxs(C,{children:[e.jsx(h,{type:"checkbox",name:"Kitchen",checked:t.Kitchen,onChange:n=>i("Kitchen",n.target.checked)}),e.jsxs(d,{option:t.Kitchen?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(x,{children:"Kitchen"})]})]}),e.jsxs(C,{children:[e.jsx(h,{type:"checkbox",name:"TV",checked:t.TV,onChange:n=>i("TV",n.target.checked)}),e.jsxs(d,{option:t.TV?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(x,{children:"TV"})]})]}),e.jsxs(C,{children:[e.jsx(h,{type:"checkbox",name:"Shower",checked:t.Shower,onChange:n=>i("Shower",n.target.checked)}),e.jsxs(d,{option:t.Shower?"true":"false",children:[e.jsx(S,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(x,{children:"Shower/WC"})]})]})]}),e.jsx(F,{children:"Vehicle type"}),e.jsxs(pe,{children:[e.jsxs(A,{children:[e.jsx(h,{type:"checkbox",name:"Van",checked:t.Van,onChange:n=>i("Van",n.target.checked)}),e.jsxs(d,{option:t.Van?"true":"false",children:[e.jsx(L,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(x,{children:"Van"})]})]}),e.jsxs(A,{children:[e.jsx(h,{type:"checkbox",name:"Fully",checked:t.Fully,onChange:n=>i("Fully",n.target.checked)}),e.jsxs(d,{option:t.Fully?"true":"false",children:[e.jsx(L,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(x,{children:"Fully Integrated"})]})]}),e.jsxs(A,{children:[e.jsx(h,{type:"checkbox",name:"Alcove",checked:t.Alcove,onChange:n=>i("Alcove",n.target.checked)}),e.jsxs(d,{option:t.Alcove?"true":"false",children:[e.jsx(L,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(x,{children:"Alcove"})]})]})]}),e.jsxs(me,{children:[" ",e.jsx(be,{type:"submit",children:"Search"}),e.jsx(ke,{type:"button",onClick:()=>{l(),j([])},children:"Reset"})]})]})})})},ve=()=>{const[c,f]=a.useState(5),[p,j]=a.useState([]),{getAdvert:y,adverts:t,isLoading:i,filterValues:l}=B();console.log("filteredAdvertsState=====>",p),console.log("filterValues======>",l),a.useEffect(()=>{y()},[]),a.useEffect(()=>{j((()=>{const v=Object.keys(l).filter(u=>l[u]);return t.filter(u=>v.every(m=>m==="location"?u.location.includes(l[m]):Object.prototype.hasOwnProperty.call(u,m)&&u[m]===!0))})())},[l,t]);const n=()=>{f(c+5)};return i?e.jsx("p",{children:"Loading..."}):e.jsxs(re,{children:[e.jsx(Se,{}),e.jsxs(le,{children:[e.jsx("ul",{children:p.slice(0,c).map(g=>e.jsx("li",{children:e.jsx(he,{advert:g})},g._id))}),e.jsx(ae,{onClick:n,children:"Load More"})]})]})},$e=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Le=()=>e.jsx($e,{children:e.jsx(ve,{})});export{Le as default};
