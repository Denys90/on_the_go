import{r as u,j as e,n as s,t as a,u as O,g as G}from"./index-a345e410.js";import{u as C,C as H,I as U,a as W,T as J,P as N,S as Q,s as i,L as X,b as Y,R as Z,c as ee,d as ne,D as te,e as m,f,g as se,M as oe,h as ie,F as ce,i as re,j as le,k as L,l as B,A as ae,m as he,n as xe}from"./useAdvert-41ff59e2.js";const de=({advert:c})=>{const[d,t]=u.useState(!1),[o,h]=u.useState(!1),{addFavorite:n,removeFavorite:x,favorite:r}=C();u.useEffect(()=>{h(r.some(v=>v._id===c._id))},[c,r]);const l=()=>{t(!d)},V=()=>{o?x(c):n(c)},{_id:$,name:T,price:I,rating:R,location:E,reviews:M,adults:_,description:P,details:y,gallery:q,transmission:D,engine:K}=c;return e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(U,{src:q[0],alt:"img"}),e.jsxs(W,{children:[e.jsxs(J,{children:[e.jsxs("h2",{children:[" ",T]}),e.jsxs(N,{children:[I,e.jsx(Q,{isFavorite:o,children:e.jsx("use",{href:`${i}#icon-hart`,onClick:V})})]})]}),e.jsxs(X,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${i}#Rating`})}),e.jsxs(Z,{children:[e.jsx("p",{children:R}),e.jsxs("p",{children:["(",M.reduce((v,z)=>v+z.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(ee,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${i}#icon-map`})}),e.jsxs("p",{children:[" ",E]})]})]}),e.jsx(te,{children:P}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-users`})}),_," adults"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-conect`})}),D]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-gasstation`})}),K]}),y.kitchen>0?e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-bed`})}),y.beds," beds"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-microwave`})}),y.microwave>0?"microwave":null]}),e.jsx(se,{type:"button",onClick:l,children:"Show more"})]}),d&&e.jsx(oe,{onClose:l,children:e.jsx(ie,{id:$,toggleModal:l})})]},$)})},F=`
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
  border-top: 2px solid ${a.colors.grayScroll};
`,ge=s.div`
  display: flex;
  border-top: 2px solid ${a.colors.grayScroll};
  padding-top: 24px;
`,ue=s.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,A=s.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,k=s.label`
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
`,S=s.label`
  ${F}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,p=s.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,j=s.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${a.colors.black};
  border-color: ${c=>c.option==="true"?`${a.colors.red}`:`${a.colors.grayScroll}`};
`,b=s.svg`
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
`,g=s.p`
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
  color: ${a.colors.lightGray};
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
    color: ${a.colors.black};
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
  background: ${a.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${a.colors.btnShadow};
  }
`,Ce=s.button`
  display: block;
  border: none;
  background: ${a.colors.white};
  cursor: pointer;

  &:hover {
    color: ${a.colors.red};
  }
`,ve=s.div`
  position: relative;
`,Se=s.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,we=()=>{const[c,d]=u.useState([]),{advertsSearch:t,adverts:o}=C();u.useEffect(()=>{const n=[...new Set(o.map(x=>x.location))];d(n)},[]);const h=(n,x)=>{const r=n.target.value;x("location",r),t(r)};return e.jsx("div",{children:e.jsx(L,{initialValues:{location:""},onSubmit:()=>{},children:({values:n,setFieldValue:x})=>e.jsx(B,{children:e.jsxs(me,{children:[e.jsx(fe,{children:"Location"}),e.jsxs(ve,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(ke,{as:"select",name:"location",placeholder:"All city",value:n.location,onChange:r=>h(r,x),children:[e.jsx("option",{value:"",children:"All city"}),c.map((r,l)=>e.jsx("option",{value:r,children:r},l))]}),e.jsx(Se,{children:e.jsx("use",{href:`${i}#icon-map`})})]})]})})})})},$e=()=>{const{advertsSorted:c}=C(),d={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1};return e.jsxs(pe,{children:[e.jsx(we,{}),e.jsx(L,{initialValues:d,onSubmit:t=>{const o=[];for(const[h,n]of Object.entries(t))n===!0&&o.push(h);c(o),console.log(o)},children:({values:t,setFieldValue:o,resetForm:h})=>e.jsxs(B,{children:[e.jsx(ue,{children:"Filters"}),e.jsx(A,{children:"Vehicle equipment"}),e.jsxs(je,{children:[e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"AC",checked:t.AC,onChange:n=>o("AC",n.target.checked)}),e.jsxs(j,{option:t.AC?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-wind`})}),e.jsx(g,{children:"AC"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Automatic",checked:t.Automatic,onChange:n=>o("Automatic",n.target.checked)}),e.jsxs(j,{option:t.Automatic?"true":"false",children:[e.jsxs(b,{children:[".",e.jsx("use",{href:`${i}#icon-conect`})]}),e.jsx(g,{children:"Automatic"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Kitchen",checked:t.Kitchen,onChange:n=>o("Kitchen",n.target.checked)}),e.jsxs(j,{option:t.Kitchen?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-fork`})}),e.jsx(g,{children:"Kitchen"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"TV",checked:t.TV,onChange:n=>o("TV",n.target.checked)}),e.jsxs(j,{option:t.TV?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-tv`})}),e.jsx(g,{children:"TV"})]})]}),e.jsxs(k,{children:[e.jsx(p,{type:"checkbox",name:"Shower",checked:t.Shower,onChange:n=>o("Shower",n.target.checked)}),e.jsxs(j,{option:t.Shower?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-shower`})}),e.jsx(g,{children:"Shower/WC"})]})]})]}),e.jsx(A,{children:"Vehicle type"}),e.jsxs(ge,{children:[e.jsxs(S,{children:[e.jsx(p,{type:"checkbox",name:"Van",checked:t.Van,onChange:n=>o("Van",n.target.checked)}),e.jsxs(j,{option:t.Van?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van1`})}),e.jsx(g,{children:"Van"})]})]}),e.jsxs(S,{children:[e.jsx(p,{type:"checkbox",name:"Fully",checked:t.Fully,onChange:n=>o("Fully",n.target.checked)}),e.jsxs(j,{option:t.Fully?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van2`})}),e.jsx(g,{children:"Fully Integrated"})]})]}),e.jsxs(S,{children:[e.jsx(p,{type:"checkbox",name:"Alcove",checked:t.Alcove,onChange:n=>o("Alcove",n.target.checked)}),e.jsxs(j,{option:t.Alcove?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van3`})}),e.jsx(g,{children:"Alcove"})]})]})]}),e.jsxs(be,{children:[" ",e.jsx(ye,{type:"submit",children:"Search"}),e.jsx(Ce,{type:"button",onClick:()=>{h()},children:"Reset"})]})]})})]})},Ae=()=>{const[c,d]=u.useState(1),{getAdvert:t,adverts:o,isLoading:h}=C(),n=O();u.useEffect(()=>{t({page:1,limit:5})},[]);const x=()=>{const l=c+1;d(l),n(G({page:l,limit:5}))},r=()=>{};return h?e.jsx("p",{children:"Loading..."}):e.jsxs(ae,{children:[e.jsx($e,{onLocationChange:r}),e.jsxs(he,{children:[e.jsx("ul",{children:o.map(l=>e.jsx("li",{children:e.jsx(de,{advert:l})},l._id))}),e.jsx(xe,{onClick:x,children:"Load More"})]})]})},Le=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ve=()=>e.jsx(Le,{children:e.jsx(Ae,{})});export{Ve as default};
