import{n as t,t as e,r as p,j as o}from"./index-1efc1db9.js";import{u as h,b as g,s as a,R as b,c as j,d as f,g as m,M as v,h as u}from"./useAdvert-5cf95637.js";const w=t.li`
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
`,k=t.h2`
  color: ${e.colors.black};
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
`,y=t.div`
  display: flex;
`,$=t.button`
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
`,R=t.p`
  display: block;
  font-size: 36px;
  color: ${e.colors.black};
  &::before {
    content: '\\20AC';
    display: inline-block;
  }
`,S=t.div`
  display: flex;
  margin-bottom: 100px;
`,F=t.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,C=t.h1`
  margin-top: 40px;
`,B=()=>{const[n,l]=p.useState(!1),{favorite:i,removeFavorite:c}=h(),r=()=>{l(!n)};return o.jsxs("div",{children:[o.jsx(C,{children:"Favorites campers"}),i.length===0?o.jsx(F,{children:"No favorite cemper selected."}):o.jsx("ul",{children:i.map(s=>o.jsxs(w,{children:[o.jsxs(y,{children:[o.jsx("img",{src:s.gallery[0],alt:"cemper"}),o.jsxs("div",{children:[o.jsx(k,{children:s.name}),o.jsxs(S,{children:[o.jsx(g,{children:o.jsx("use",{href:`${a}#Rating`})}),o.jsxs(b,{children:[o.jsx("p",{children:s.rating}),o.jsxs("p",{children:["(",s.reviews.reduce((x,d)=>x+d.reviewer_rating,0)," ","Reviews)"]})]}),o.jsxs(j,{children:[o.jsx(f,{children:o.jsx("use",{href:`${a}#icon-map-pin`})}),o.jsxs("p",{children:[" ",s.location]})]})]}),o.jsx(m,{type:"button",onClick:r,children:"Show more"})]})]}),o.jsx($,{type:"button",onClick:()=>c(s),children:"Remove"}),o.jsx(R,{children:s.price}),n&&o.jsx(v,{onClose:r,children:o.jsx(u,{id:s._id,toggleModal:r})})]},s._id))})]})},z=()=>o.jsx(B,{});export{z as default};
