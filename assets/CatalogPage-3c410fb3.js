import{r as u,j as e,n as o,t as a,u as z,a as G,g as H}from"./index-5ccdde4e.js";import{u as C,C as U,I as W,a as J,T as N,P as Q,S as X,s as i,L as Y,b as Z,R as ee,c as ne,d as te,D as se,e as m,f,g as oe,M as ie,h as ce,F as re,i as le,j as ae,k as L,l as F,m as he,A as de,n as xe,o as pe}from"./useAdvert-e17fb049.js";const je=({advert:l})=>{const[h,g]=u.useState(!1),[d,t]=u.useState(!1),{addFavorite:s,removeFavorite:r,favorite:n}=C();u.useEffect(()=>{t(n.some(v=>v._id===l._id))},[l,n]);const c=()=>{g(!h)},V=()=>{d?r(l):s(l)},{_id:$,name:T,price:I,rating:R,location:E,reviews:M,adults:_,description:P,details:y,gallery:q,transmission:D,engine:K}=l;return e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(W,{src:q[0],alt:"img"}),e.jsxs(J,{children:[e.jsxs(N,{children:[e.jsxs("h2",{children:[" ",T]}),e.jsxs(Q,{children:[I,e.jsx(X,{isFavorite:d,children:e.jsx("use",{href:`${i}#icon-hart`,onClick:V})})]})]}),e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx("use",{href:`${i}#Rating`})}),e.jsxs(ee,{children:[e.jsx("p",{children:R}),e.jsxs("p",{children:["(",M.reduce((v,O)=>v+O.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(ne,{children:[e.jsx(te,{children:e.jsx("use",{href:`${i}#icon-map`})}),e.jsxs("p",{children:[" ",E]})]})]}),e.jsx(se,{children:P}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-users`})}),_," adults"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-conect`})}),D]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-gasstation`})}),K]}),y.kitchen>0?e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-fork`})}),y.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-bed`})}),y.beds," beds"]}),e.jsxs(m,{children:[e.jsx(f,{children:e.jsx("use",{href:`${i}#icon-microwave`})}),y.microwave>0?"microwave":null]}),e.jsx(oe,{type:"button",onClick:c,children:"Show more"})]}),h&&e.jsx(ie,{onClose:c,children:e.jsx(ce,{id:$,toggleModal:c})})]},$)})},B=`
  display: inline-block;
  cursor: pointer;
`,ge=o.div`
  position: fixed;
  display: block;
  width: 360px;
  height: auto;
  margin-right: 64px;
`,ue=o.div`
  padding-top: 24px;
  margin-bottom: 32px;
  border-top: 2px solid ${a.colors.grayScroll};
`,me=o.div`
  display: flex;
  border-top: 2px solid ${a.colors.grayScroll};
  padding-top: 24px;
`,fe=o.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 14px;
`,A=o.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 24px;
`,k=o.label`
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
`,S=o.label`
  ${B}
  margin-right: 10px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
`,x=o.input`
  position: absolute !important;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,p=o.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 95px;
  border-radius: 10px;
  border: 2px solid ${a.colors.black};
  border-color: ${l=>l.option==="true"?`${a.colors.red}`:`${a.colors.grayScroll}`};
`,b=o.svg`
  display: block;
  width: 28px;
  height: 24px;
  stroke: #111;
  margin-bottom: 10px;
`,w=o.svg`
  display: block;
  width: 40px;
  height: 28px;
  margin-bottom: 9px;
  stroke: #111;
`,j=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
`;o.div`
  display: flex;
  align-items: center;
`;const ke=o.div`
  margin-bottom: 32px;
`,be=o.h3`
  color: ${a.colors.lightGray};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
`,ye=o(re)`
  appearance: none;
  ${le}
  cursor: pointer;
  width: 360px;
  padding-left: 20px;

  &::placeholder {
    color: ${a.colors.black};
  }

  &:hover {
    cursor: pointer;
  }
`,Ce=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
`,ve=o.button`
  ${ae}
  margin-top: 0;
  background: ${a.colors.red};

  cursor: pointer;

  &:hover {
    box-shadow: ${a.colors.btnShadow};
  }
`,Se=o.button`
  display: block;
  border: none;
  background: ${a.colors.white};
  cursor: pointer;

  &:hover {
    color: ${a.colors.red};
  }
`,we=o.div`
  position: relative;
`,$e=o.svg`
  position: absolute;
  top: 17px;
  left: 15px;
  display: block;
  width: 18px;
  height: 20px;
  fill: white;
  stroke: #111;
`,Ae=()=>{const[l,h]=u.useState([]),{advertsSearch:g,adverts:d}=C();u.useEffect(()=>{const s=[...new Set(d.map(r=>r.location))];h(s)},[]);const t=(s,r)=>{const n=s.target.value;r("location",n),g(n)};return e.jsx("div",{children:e.jsx(L,{initialValues:{location:""},onSubmit:()=>{},children:({values:s,setFieldValue:r})=>e.jsx(F,{children:e.jsxs(ke,{children:[e.jsx(be,{children:"Location"}),e.jsxs(we,{children:[e.jsx("label",{htmlFor:"name"}),e.jsxs(ye,{as:"select",name:"location",placeholder:"All city",value:s.location,onChange:n=>t(n,r),children:[e.jsx("option",{value:"",children:"All city"}),l.map((n,c)=>e.jsx("option",{value:n,children:n},c))]}),e.jsx($e,{children:e.jsx("use",{href:`${i}#icon-map`})})]})]})})})})},Le=()=>{const{filteredAdverts:l,adverts:h}=C(),g={AC:!1,Automatic:!1,Kitchen:!1,TV:!1,Shower:!1,Van:!1,Fully:!1,Alcove:!1},d=z(he);return console.log("Filtered adverts from Redux: ",d),e.jsxs(ge,{children:[e.jsx(Ae,{}),e.jsx(L,{initialValues:g,onSubmit:t=>{const s=[];console.log("selectedOptions",s);for(const[n,c]of Object.entries(t))c===!0&&s.push(n);const r=h.filter(n=>s.every(c=>n[c]));console.log("filtered=========>",r),l(r)},children:({values:t,setFieldValue:s,resetForm:r})=>e.jsxs(F,{children:[e.jsx(fe,{children:"Filters"}),e.jsx(A,{children:"Vehicle equipment"}),e.jsxs(ue,{children:[e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"AC",checked:t.AC,onChange:n=>s("AC",n.target.checked)}),e.jsxs(p,{option:t.AC?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-wind`})}),e.jsx(j,{children:"AC"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Automatic",checked:t.Automatic,onChange:n=>s("Automatic",n.target.checked)}),e.jsxs(p,{option:t.Automatic?"true":"false",children:[e.jsxs(b,{children:[".",e.jsx("use",{href:`${i}#icon-conect`})]}),e.jsx(j,{children:"Automatic"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Kitchen",checked:t.Kitchen,onChange:n=>s("Kitchen",n.target.checked)}),e.jsxs(p,{option:t.Kitchen?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-fork`})}),e.jsx(j,{children:"Kitchen"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"TV",checked:t.TV,onChange:n=>s("TV",n.target.checked)}),e.jsxs(p,{option:t.TV?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-tv`})}),e.jsx(j,{children:"TV"})]})]}),e.jsxs(k,{children:[e.jsx(x,{type:"checkbox",name:"Shower",checked:t.Shower,onChange:n=>s("Shower",n.target.checked)}),e.jsxs(p,{option:t.Shower?"true":"false",children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-shower`})}),e.jsx(j,{children:"Shower/WC"})]})]})]}),e.jsx(A,{children:"Vehicle type"}),e.jsxs(me,{children:[e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Van",checked:t.Van,onChange:n=>s("Van",n.target.checked)}),e.jsxs(p,{option:t.Van?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van1`})}),e.jsx(j,{children:"Van"})]})]}),e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Fully",checked:t.Fully,onChange:n=>s("Fully",n.target.checked)}),e.jsxs(p,{option:t.Fully?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van2`})}),e.jsx(j,{children:"Fully Integrated"})]})]}),e.jsxs(S,{children:[e.jsx(x,{type:"checkbox",name:"Alcove",checked:t.Alcove,onChange:n=>s("Alcove",n.target.checked)}),e.jsxs(p,{option:t.Alcove?"true":"false",children:[e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-van3`})}),e.jsx(j,{children:"Alcove"})]})]})]}),e.jsxs(Ce,{children:[" ",e.jsx(ve,{type:"submit",children:"Search"}),e.jsx(Se,{type:"button",onClick:()=>{r()},children:"Reset"})]})]})})]})},Fe=()=>{const[l,h]=u.useState(1),{getAdvert:g,adverts:d,isLoading:t}=C(),s=G();u.useEffect(()=>{g({page:1,limit:5})},[]);const r=()=>{const c=l+1;h(c),s(H({page:c,limit:5}))},n=()=>{};return t?e.jsx("p",{children:"Loading..."}):e.jsxs(de,{children:[e.jsx(Le,{onLocationChange:n}),e.jsxs(xe,{children:[e.jsx("ul",{children:d.map(c=>e.jsx("li",{children:e.jsx(je,{advert:c})},c._id))}),e.jsx(pe,{onClick:r,children:"Load More"})]})]})},Be=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ie=()=>e.jsx(Be,{children:e.jsx(Fe,{})});export{Ie as default};
