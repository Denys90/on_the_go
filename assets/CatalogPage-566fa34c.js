import{r as u,j as e,n as s,t as h,u as O,g as G}from"./index-ff3b69a1.js";import{u as C,C as H,I as U,a as W,T as J,P as N,S as Q,s as o,L as X,b as Y,R as Z,c as ee,d as ne,D as te,e as m,f,g as se,M as oe,h as ie,F as ce,i as re,j as le,k as B,l as F,A as ae,m as he,n as de}from"./useAdvert-88b59183.js";const xe=({advert:r})=>{const[d,g]=u.useState(!1),[t,i]=u.useState(!1),{addFavorite:l,removeFavorite:n,favorite:c}=C();u.useEffect(()=>{i(c.some(w=>w._id===r._id))},[r,c]);const a=()=>{g(!d)},v=()=>{t?n(r):l(r)},{_id:A,name:T,price:I,rating:R,location:E,reviews:M,adults:_,description:P,details:y,gallery:q,transmission:D,engine:K}=r;return e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(U,{src:q[0],alt:"img"}),e.jsxs(W,{children:[e.jsxs(J,{children:[e.jsxs("h2",{children:[" ",T]}),e.jsxs(N,{children:[I,e.jsx(Q,{isFavorite:t,children:e.jsx("use",{href:`${o}#icon-hart`,onClick:v})})]})]}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${o}#Rating`})}),e.jsxs(Z,{children:[e.jsx("p",{children:R}),e.jsxs("p",{children:["(",M.reduce((w,z)=>w+z.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(ee,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${o}#icon-map`})}),e.jsxs("p",{children:[" ",E]})]})]}),e.jsx(te,{children:P}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-users`})}),_," adults"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-conect`})}),D]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-gasstation`})}),K]}),y.kitchen>0?e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-bed`})}),y.beds," beds"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${o}#icon-microwave`})}),y.microwave>0?"microwave":null]}),e.jsx(se,{type:"button",onClick:a,children:"Show more"})]}),d&&e.jsx(oe,{onClose:a,children:e.jsx(ie,{id:A,toggleModal:a})})]},A)})},V=`
  display: inline-block;
  cursor: pointer;
`,pe=s.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,je=s.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${h.colors.grayScroll};
`,ge=s.div`
  display: flex;
  border-top: 2px solid ${h.colors.grayScroll};
  padding-top: 24px;
`,ue=s.h2`
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
`,k=s.label`
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
`,S=s.label`
  ${V}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,x=s.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,p=s.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${h.colors.black};
  border-color: ${r=>r.option==="true"?`${h.colors.red}`:`${h.colors.grayScroll}`};
`,b=s.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,$=s.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,j=s.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`;s.div`
  display: flex;
  align-items: center;
`;const me=s.div`
  margin-bottom: 32px;
`,fe=s.h3`
  color: ${h.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,ke=s(ce)`
  appearance: none;
  ${re}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${h.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,be=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,ye=s.button`
  ${le}
  margin-top: 0;
  background: ${h.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${h.colors.btnShadow};
  }
`,Ce=s.button`
  display: block;
  border: none;
  background: ${h.colors.white};
  cursor: pointer;

  &:hover {
    color: ${h.colors.red};
  }
`,ve=s.div`
  position: relative;
`,we=s.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,Se=()=>{const[r,d]=u.useState([]),{advertsSearch:g,adverts:t}=C();u.useEffect(()=>{const l=[...new Set(t.map(n=>n.location))];d(l)},[]);const i=(l,n)=>{const c=l.target.value;n("location",c),g(c)};return e.jsx("div",{children:e.jsx(B,{initialValues:{location:""},onSubmit:()=>{},children:({values:l,setFieldValue:n})=>e.jsx(F,{children:e.jsxs(me,{children:[e.jsx(fe,{children:"Location"}),e.jsxs(ve,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(ke,{as:"select",name:"location",placeholder:"All city",value:l.location,onChange:c=>i(c,n),children:[e.jsx("option",{value:"",children:"All city"}),r.map((c,a)=>e.jsx("option",{value:c,children:c},a))]}),e.jsx(we,{children:e.jsx("use",{href:`${o}#icon-map`})})]})]})})})})},$e=()=>{const{filteredAdverts:r,adverts:d}=C(),g={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs(pe,{children:[e.jsx(Se,{}),e.jsx(B,{initialValues:g,onSubmit:t=>{const i=[];for(const[l,n]of Object.entries(t)){n===!0&&i.push(l);const c=d.filter(a=>i.every(v=>a[v]));console.log("filtered=========>",c),r(c)}},children:({values:t,setFieldValue:i,resetForm:l})=>e.jsxs(F,{children:[e.jsx(ue,{children:"Filters"}),e.jsx(L,{children:"Vehicle equipment"}),e.jsxs(je,{children:[e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"AC",checked:t.AC,onChange:n=>i("AC",n.target.checked)}),e.jsxs(p,{option:t.AC?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-wind`})}),e.jsx(j,{children:"AC"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Automatic",checked:t.Automatic,onChange:n=>i("Automatic",n.target.checked)}),e.jsxs(p,{option:t.Automatic?"true":"false",children:[e.jsxs(b,{children:[".",e.jsx("use",{href:`${o}#icon-conect`})]}),e.jsx(j,{children:"Automatic"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Kitchen",checked:t.Kitchen,onChange:n=>i("Kitchen",n.target.checked)}),e.jsxs(p,{option:t.Kitchen?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-fork`})}),e.jsx(j,{children:"Kitchen"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"TV",checked:t.TV,onChange:n=>i("TV",n.target.checked)}),e.jsxs(p,{option:t.TV?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-tv`})}),e.jsx(j,{children:"TV"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Shower",checked:t.Shower,onChange:n=>i("Shower",n.target.checked)}),e.jsxs(p,{option:t.Shower?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${o}#icon-shower`})}),e.jsx(j,{children:"Shower/WC"})]})]})]}),e.jsx(L,{children:"Vehicle type"}),e.jsxs(ge,{children:[e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Van",checked:t.Van,onChange:n=>i("Van",n.target.checked)}),e.jsxs(p,{option:t.Van?"true":"false",children:[e.jsx($,{children:e.jsx("use",{href:`${o}#icon-van1`})}),e.jsx(j,{children:"Van"})]})]}),e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Fully",checked:t.Fully,onChange:n=>i("Fully",n.target.checked)}),e.jsxs(p,{option:t.Fully?"true":"false",children:[e.jsx($,{children:e.jsx("use",{href:`${o}#icon-van2`})}),e.jsx(j,{children:"Fully Integrated"})]})]}),e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Alcove",checked:t.Alcove,onChange:n=>i("Alcove",n.target.checked)}),e.jsxs(p,{option:t.Alcove?"true":"false",children:[e.jsx($,{children:e.jsx("use",{href:`${o}#icon-van3`})}),e.jsx(j,{children:"Alcove"})]})]})]}),e.jsxs(be,{children:[" ",e.jsx(ye,{type:"submit",children:"Search"}),e.jsx(Ce,{type:"button",onClick:()=>{l()},children:"Reset"})]})]})})]})},Ae=()=>{const[r,d]=u.useState(1),{getAdvert:g,adverts:t,isLoading:i}=C(),l=O();u.useEffect(()=>{g({page:1,limit:5})},[]);const n=()=>{const a=r+1;d(a),l(G({page:a,limit:5}))},c=()=>{};return i?e.jsx("p",{children:"Loading..."}):e.jsxs(ae,{children:[e.jsx($e,{onLocationChange:c}),e.jsxs(he,{children:[e.jsx("ul",{children:t.map(a=>e.jsx("li",{children:e.jsx(xe,{advert:a})},a._id))}),e.jsx(de,{onClick:n,children:"Load More"})]})]})},Le=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ve=()=>e.jsx(Le,{children:e.jsx(Ae,{})});export{Ve as default};
