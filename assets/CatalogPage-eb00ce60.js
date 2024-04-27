import{r as x,j as e,n}from"./index-6e8101eb.js";import{u as v,C as I,I as P,a as E,T,P as z,S as B,s as i,L as H,b as O,R as V,c as q,d as G,D as W,e as o,f as c,g as J,M as K,h as N,A as Q,i as U,j as X}from"./useAdvert-b331ae6e.js";const Y=({advert:s})=>{const[h,u]=x.useState(!1),[j,p]=x.useState(!1),{addFavorite:f,removeFavorite:b,favorite:t}=v();x.useEffect(()=>{p(t.some(r=>r._id===s._id))},[s,t]);const m=()=>{u(!h)},y=()=>{const r=t.some(k=>k._id===s._id);r?b(s):f(s),p(!r)},{_id:C,name:w,price:S,rating:L,location:F,reviews:_,adults:$,description:M,details:g,gallery:R,transmission:A,engine:D}=s;return e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(P,{src:R[0],alt:"img"}),e.jsxs(E,{children:[e.jsxs(T,{children:[e.jsxs("h2",{children:[" ",w]}),e.jsxs(z,{children:[S,".00",e.jsx(B,{isFavorite:j,children:e.jsx("use",{href:`${i}#icon-hart`,onClick:y})})]})]}),e.jsxs(H,{children:[e.jsx(O,{children:e.jsx("use",{href:`${i}#Rating`})}),e.jsxs(V,{children:[e.jsx("p",{children:L}),e.jsxs("p",{children:["(",_.reduce((r,k)=>r+k.reviewer_rating,0)," ","Reviews)"]})]}),e.jsxs(q,{children:[e.jsx(G,{children:e.jsx("use",{href:`${i}#icon-map`})}),e.jsxs("p",{children:[" ",F]})]})]}),e.jsx(W,{children:M}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-users`})}),$," adults"]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-conect`})}),A]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-gasstation`})}),D]}),g.kitchen>0?e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-fork`})}),g.kitchen.length>0?"icon-fork":null," kitchen"]}):null,e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-bed`})}),g.beds," beds"]}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx("use",{href:`${i}#icon-microwave`})}),g.airConditioner.length>0?"icon-microwave":null," AC"]}),e.jsx(J,{type:"button",onClick:m,children:"Show more"})]}),h&&e.jsx(K,{onClose:m,children:e.jsx(N,{id:C,toggleModal:m})})]},C)})},Z=n.div`
  display: block;
  border: 2px solid black;

  margin-right: 64px;

  border-radius: 10px;
`,ee=n.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`,se=n.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`,ie=n.div`
  border: 2px solid black;
  border-radius: 10px;
  display: inline-block;

  &:nth-of-type(3) {
    margin-right: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`,l=n.div`
  display: inline-block;
  width: 115px;
  height: 95px;
  border: 2px solid red;
  border-radius: 10px;
  margin-right: 10px;
  &:active {
    border-color: blue;
  }
`,a=n.input`
  position: absolute;
  opacity: 0;
  display: none;
`,d=n.div``,ne=()=>e.jsxs(Z,{children:[e.jsx(ee,{children:"Filter"}),e.jsx(se,{children:"Vehicle equipment"}),e.jsxs(ie,{children:[e.jsxs(l,{children:[e.jsx(a,{type:"checkbox"}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(a,{type:"checkbox"}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(a,{type:"checkbox"}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(a,{type:"checkbox"}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(a,{type:"checkbox"}),e.jsx(d,{})]})]})]}),te=()=>{const[s,h]=x.useState(5),{getAdvert:u,adverts:j,isLoading:p}=v(),f=j?j.slice(0,s):[];x.useEffect(()=>{u()},[]);const b=()=>{h(s+5)};return p?e.jsx("p",{children:"Loading..."}):e.jsxs(Q,{children:[e.jsx(ne,{}),e.jsxs(U,{children:[e.jsx("ul",{children:f.map(t=>e.jsx("li",{children:e.jsx(Y,{advert:t})},t._id))}),e.jsx(X,{onClick:b,children:"Load More"})]})]})},re=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,le=()=>e.jsx(re,{children:e.jsx(te,{})});export{le as default};
