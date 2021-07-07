import{$ as e,q as t,r as n,R as r,M as a,L as o,G as i,a as l,b as f}from"./vendor.de95ddb6.js";const m={primary:"#efefef",primaryFaint:"#efefef",background:"#1D1D28",sidebar:"#2B2B3C",text:"#D4D4ED",button:"#444455",buttonFaint:"#31313E",border:"#38383e",borderFaint:"#62627B",borderDark:"#16161C",textFaint:"#A8A8BC",textOuter:"#D4D4ED"};function c([e]){return`fonts/${e}`}var s=e`
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Bold.ttf`}) format('truetype');
        font-weight: bold;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Book-Italic.ttf`}) format('truetype');
        font-weight: book;
        font-style: italic; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Book.ttf`}) format('truetype');
        font-weight: book;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Light-Italic.ttf`}) format('truetype');
        font-weight: light;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Light.ttf`}) format('truetype');
        font-weight: light;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Medium-Italic.ttf`}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Medium.ttf`}) format('truetype');
        font-weight: normal;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Semibold-Italic.ttf`}) format('truetype');
        font-weight: semibold;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${c`Whitney-Semibold.ttf`}) format('truetype');
        font-weight: semibold;
        font-style: normal; 
    }
`;function d(e){const t=n.exports.useRef(null),[a,o]=n.exports.useState(!1);return n.exports.useEffect((()=>{}),[]),r.createElement(h,{ref:t,hover:a},r.createElement(g,{src:e.avatar}),r.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row",padding:"8px 0px"}},r.createElement("h2",{style:{fontFamily:"Whitney",fontWeight:"bold",margin:0}},e.name),r.createElement(p,null)),r.createElement("span",{style:{marginTop:-5}},"#23909"),r.createElement("div",{style:{flexGrow:1}}))}const p=t.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  /* margin-top: 8px; */
  margin-left: 5px;
  background-color: #47ce47;
`,h=t.div`
  border-radius: 20px;
  /* border: 1px solid ${e=>e.theme.border}; */
  flex-direction: column;
  display: flex;
  /* width: 160px; */
  margin: 10px;
  transition: 300ms;
  /* justify-content: center; */
  align-items: center;
  /* height: 240px; */
  box-shadow: 0 0 10px #00000010;
  margin-right: 10px;
  &:hover {
    /* transform: scale(1.05); */
  }
  h2 {
    font-size: 19px;
    /* margin-top: 5px; */
  }
  span {
    font-size: 15px;
    font-weight: normal;
    color: ${e=>e.theme.textFaint};
  }
  img {
    transition: 300ms;
  }
  ${e=>e.hover&&"\n    img {\n      opacity: 0.2;\n    }\n    transform: translateY(-10px);\n  "}
`,g=t.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`,y=()=>r.createElement(x,null,r.createElement(w,null,r.createElement(a,{weight:"bold",size:30,style:{transform:"translate(0, -2px)"}}),r.createElement(E,{placeholder:"Search",autoFocus:!0})),r.createElement(b,null,r.createElement(d,{name:"jamie",avatar:"https://i.pravatar.cc/299"}),r.createElement(d,{name:"xQc",avatar:"https://i.pravatar.cc/301"}),r.createElement(d,{name:"jeff01",avatar:"https://i.pravatar.cc/302"}),r.createElement(d,{name:"weffeef",avatar:"https://i.pravatar.cc/303"})),r.createElement(u,null,r.createElement("div",{style:{width:40,height:40}},r.createElement("img",{src:"images/logo.png",alt:"space-logo",style:{width:40,height:40}})),r.createElement("div",{style:{marginLeft:10,flex:1}},r.createElement("span",null,r.createElement(o,{weight:"bold",style:{marginBottom:-2,marginRight:5}}),"Secured with the Signal Protocol")),r.createElement(i,{size:30,weight:"bold",style:{marginLeft:40}}))),u=t.div`
  padding: 0px 20px 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${e=>e.theme.textOuter};
  p {
    font-size: 15px;
  }
`,x=t.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`,b=t.div`
  font-size: 20px;
  /* background-color: ${e=>e.theme.background+"40"}; */

  flex: 1;
  padding: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`,w=t.div`
  position: relative;
  display: flex;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  height: 50px;
  align-items: center;
  padding: 0 10px;
  padding-top: 10px;
  flex-direction: row;
  color: ${({theme:e})=>e.textOuter};
`,E=t.input`
  background: none;
  flex: 1;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 5px;
  border-width: 0px;
  border-bottom: 2px solid transparent;
  color: ${({theme:e})=>e.textOuter};
  box-sizing: border-box;
  transition: border 50ms ease-out;
  :focus {
    outline: none;
    border-bottom-color: gray;
  }
`,v=t.div`
  /* background-color: ${e=>e.theme.background+"40"}; */
  color: ${e=>e.theme.text};
  font-family: Whitney;
`,W=()=>r.createElement(l,{theme:m},r.createElement(s,null),r.createElement(v,null,r.createElement(y,null)));f.render(r.createElement(r.StrictMode,null,r.createElement(W,null)),document.getElementById("root"));
