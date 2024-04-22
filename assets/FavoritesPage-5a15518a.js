import{n as s,t as e,r as p,j as o}from"./index-3fa16f90.js";import{u as h,b as g,s as a,d as f,g as b,M as j,h as v}from"./useAdvert-becd1f69.js";const m=s.li`
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
`,u=s.h2`
  color: ${e.colors.black};
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
`,w=s.div`
  display: flex;
`,y=s.button`
  position: absolute;
  top: 208px;
  right: 20px;
  font-size: 18px;
  color: ${e.colors.black};
  border: none;
  background-color: ${e.colors.white};

  &:hover {
    color: ${e.colors.red};
    text-shadow: ${e.colors.btnShadow};
    transform: scale(1.1);
  }
`,k=s.p`
  display: block;
  font-size: 36px;
  color: ${e.colors.black};
  &::before {
    content: '\\20AC';
    display: inline-block;
  }
`,$=s.div`
  display: flex;
  margin-bottom: 100px;
`,F=s.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,S=s.h1`
  margin-top: 40px;
`,R=s.div`
  display: flex;
  margin-bottom: 8px;
`;s.div`
  /* display: block;
  justify-content: flex-start; */
`;const B=s.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`,C=s.div`
  display: flex;
  align-items: center;
`,_=()=>{const[n,l]=p.useState(!1),{favorite:r,removeFavorite:c}=h(),i=()=>{l(!n)};return o.jsxs("div",{children:[o.jsx(S,{children:"Favorites campers"}),r.length===0?o.jsx(F,{children:"No favorite cemper selected."}):o.jsx("ul",{children:r.map(t=>o.jsxs(m,{children:[o.jsxs(w,{children:[o.jsx("img",{src:t.gallery[0],alt:"cemper"}),o.jsxs("div",{children:[o.jsx(u,{children:t.name}),o.jsx($,{children:o.jsxs("div",{children:[o.jsxs(R,{children:[o.jsx(g,{children:o.jsx("use",{href:`${a}#Rating`})})," ",o.jsx("p",{children:t.rating}),o.jsxs("p",{children:["(",t.reviews.reduce((x,d)=>x+d.reviewer_rating,0)," ","Reviews)"]})]}),o.jsxs(C,{children:[" ",o.jsx(f,{children:o.jsx("use",{href:`${a}#icon-map`})}),o.jsx(B,{children:o.jsxs("p",{children:[" ",t.location]})})]})]})}),o.jsx(b,{type:"button",onClick:i,children:"Show more"})]})]}),o.jsx(y,{type:"button",onClick:()=>c(t),children:"Remove"}),o.jsx(k,{children:t.price}),n&&o.jsx(j,{onClose:i,children:o.jsx(v,{id:t._id,toggleModal:i})})]},t._id))})]})},I=()=>o.jsx(_,{});export{I as default};
