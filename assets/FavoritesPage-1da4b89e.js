import{n as o,t as s,r as p,j as t}from"./index-97042a1b.js";import{u as h,b as g,s as a,d as f,g as b,M as j,h as v}from"./useAdvert-72041abc.js";const m=o.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 300px;
    border-radius: 12px;
    transition:
      transform 0.3s,
      box-shadow 0.3s;
    margin-right: 20px;

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
  }
`,u=o.h2`
  color: ${s.colors.black};
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
`,w=o.div`
  display: flex;
`,y=o.div`
  display: flex;
`,k=o.button`
  position: absolute;
  top: 230px;
  right: 20px;
  font-size: 18px;
  color: ${s.colors.black};
  border: none;
  background-color: ${s.colors.white};

  &:hover {
    color: ${s.colors.red};
  }
`,F=o.p`
  display: block;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  color: ${s.colors.black};
  &::before {
    content: '\\20AC';
    display: inline-block;
  }
`,S=o.div`
  display: flex;
  margin-bottom: 100px;
`,$=o.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,z=o.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0%;
  text-align: left;
  padding-top: 80px;
`,R=o.div`
  display: flex;
  margin-bottom: 8px;
`;o.div`
  /* display: block;
  justify-content: flex-start; */
`;const C=o.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`,B=()=>{const[n,l]=p.useState(!1),{favorite:r,removeFavorite:x}=h(),i=()=>{l(!n)};return t.jsxs("div",{children:[t.jsx(z,{children:"Favorites campers"}),r.length===0?t.jsx($,{children:"No favorite cemper selected."}):t.jsx("ul",{children:r.map(e=>t.jsxs(m,{children:[t.jsxs(w,{children:[t.jsx("img",{src:e.gallery[0],alt:"cemper"}),t.jsxs("div",{children:[t.jsx(u,{children:e.name}),t.jsx(S,{children:t.jsxs("div",{children:[t.jsxs(R,{children:[t.jsx(g,{children:t.jsx("use",{href:`${a}#Rating`})})," ",t.jsx("p",{children:e.rating}),t.jsxs("p",{children:["(",e.reviews.reduce((c,d)=>c+d.reviewer_rating,0)," ","Reviews)"]})]}),t.jsxs(y,{children:[" ",t.jsx(f,{children:t.jsx("use",{href:`${a}#icon-map`})}),t.jsx(C,{children:t.jsxs("p",{children:[" ",e.location]})})]})]})}),t.jsx(b,{type:"button",onClick:i,children:"Show more"})]})]}),t.jsx(k,{type:"button",onClick:()=>x(e),children:"Remove"}),t.jsx(F,{children:e.price}),n&&t.jsx(j,{onClose:i,children:t.jsx(v,{id:e._id,toggleModal:i})})]},e._id))})]})},_=()=>t.jsx(B,{});export{_ as default};
