var We=Object.create,V=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Ne=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var le=e=>V(e,"__esModule",{value:!0});var Pe=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},He=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Se(t))!ze.call(e,i)&&i!=="default"&&V(e,i,{get:()=>t[i],enumerable:!(r=Ie(t,i))||r.enumerable});return e},o=e=>He(le(V(e!=null?We(Ne(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);le(exports);Pe(exports,{Blogpost:()=>z,Blogposts:()=>te,Button:()=>j,Carousel:()=>E,Flex:()=>Y,Grid:()=>K,HeroBanner:()=>Q,Image:()=>v,Row:()=>ne,ShoppableImage:()=>Z,Stack:()=>G,Text:()=>m});var g=o(require("react")),R=o(require("prop-types"));var de=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};var ee=o(require("styled-components"));var me=o(require("react")),b=o(require("prop-types")),L=o(require("styled-components")),Ee=L.default.p`
  --text-5xl: calc(64 / 16 * 1rem);
  --text-4xl: calc(48 / 16 * 1rem);
  --text-3xl: calc(36 / 16 * 1rem);
  --text-2xl: calc(30 / 16 * 1rem);
  --text-xl: calc(24 / 16 * 1rem);
  --text-lg: calc(20 / 16 * 1rem);
  --text-md: calc(18 / 16 * 1rem);
  --text-base: calc(16 / 16 * 1rem);
  --text-sm: calc(14 / 16 * 1rem);
  --text-xs: calc(12 / 16 * 1rem);
  --text-xxs: calc(10 / 16 * 1rem);

  line-height: ${e=>e.heading?1.3:e.lineHeight};
  font-weight: ${e=>e.heading?600:e.weight};
  font-family: ${e=>!e.heading&&'"Helvetica Neue", Arial, sans-serif'};
  color: inherit;

  ${e=>e.heading&&L.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  & + * {
    margin-top: ${e=>e.spacing||"1.45rem"};
  }
`,m=e=>{let{element:t,children:r,size:i,align:s,heading:a,className:n,lineHeight:d,weight:u,spacing:p}=e;return me.default.createElement(Ee,{as:t,style:{fontSize:`var(--text-${i})`,textAlign:s},heading:a,className:n,lineHeight:d,weight:u,spacing:p},r)};m.propTypes={heading:b.default.bool,align:b.default.oneOf(["left","center","right"]),size:b.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:b.default.string,weight:b.default.number,lineHeight:b.default.number,children:b.default.string};m.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var je=ee.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,qe=ee.default.div`
  position: relative;
  display: block;
  padding-top: 100%;
  margin-bottom: 0.625rem;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateZ(0);
    transition: opacity 0.5s linear;
    will-change: opacity;
  }

  .loaded {
    opacity: 1;
  }
`,ce=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return de(t)},z=({data:e,className:t})=>{let r=(0,g.useRef)(null);(0,g.useEffect)(()=>{let n=p=>{p.forEach(I=>{if(I.isIntersecting){let $=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),$.forEach(k=>{k.srcset=k.dataset.srcset})}})},d={threshold:0,root:null},u=new IntersectionObserver(n,d);return u.observe(r.current.querySelector("img")),()=>u.disconnect()},[r]);let i=e._embedded["wp:featuredmedia"][0].media_details.sizes,a=Object.values(i).sort((n,d)=>n.width-d.width).map(n=>`${n.source_url} ${n.width}w`).join(",");return g.default.createElement(je,{className:t,href:e.link},g.default.createElement(qe,null,g.default.createElement("picture",{ref:r},g.default.createElement("source",{"data-srcset":a,sizes:"(max-width: 767px) 240px, 300px"}),g.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),g.default.createElement(m,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},ce(e.title.rendered)),g.default.createElement(m,{size:"sm",lineHeight:1.5,weight:400},ce(e.excerpt.rendered)))};z.propTypes={data:R.default.object.isRequired,className:R.default.string};var C=o(require("react")),W=o(require("prop-types")),xe=o(require("styled-components"));var h=o(require("react")),P=o(require("prop-types")),H=o(require("styled-components")),ge=o(require("keen-slider/react")),D=o(require("react-feather"));var _e={loop:!0,duration:300},Oe=H.default.div`
  display: block;
  width: 100%;
  position: relative;

  .keen-slider {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
  }
  .keen-slider,
  .keen-slider__slide {
    position: relative;
  }
  .keen-slider__slide {
    width: 100%;
    min-height: 100%;
  }
  .keen-slider[data-keen-slider-v] {
    flex-wrap: wrap;
  }
  .keen-slider[data-keen-slider-v] .keen-slider__slide {
    width: 100%;
  }
  .keen-slider[data-keen-slider-moves] * {
    pointer-events: none;
  }
`,Ve=H.default.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  @media (max-width: 1280px) {
    --nav-inset: 1rem;
  }

  /* if the carousel exists within the Blogposts component move the navigation */
  ${M} & {
    --nav-inset: 2rem;
    bottom: auto;
    top: var(--nav-inset);
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`,ue=H.default.button`
  background: var(--primary-black);
  border: none;
  color: var(--primary-white);
  border-radius: var(--border-radius);
  line-height: 0px;
  padding: 0.75rem;

  &:hover {
    cursor: pointer;
    background: hsl(0, 0%, 20%);
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }
`,Le=H.default.div`
  padding-left: ${e=>`${e.offsetStart}rem`};

  @media (max-width: 767px) {
    width: 100vw;
    overflow: hidden;

    > * {
      overflow: visible;
    }
  }
`,E=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:i=0,offsetStart:s})=>{let[a,n]=(0,ge.useKeenSlider)({..._e,slidesPerView:t,spacing:i,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),d=()=>{n.prev()};console.log(M,"this is the blogposts wrapper");let u=()=>{n.next()};return h.default.createElement(Oe,{className:"keen-wrapper","data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":s,"data-spacing":i},h.default.createElement(Le,{offsetStart:s},h.default.createElement("div",{ref:a,className:"keen-slider"},h.default.Children.map(e,p=>h.default.cloneElement(p,{className:"keen-slider__slide"},p.props.children)))),h.default.createElement(Ve,null,h.default.createElement(ue,{className:"keen-prev",onClick:()=>d()},h.default.createElement(D.ArrowLeft,{size:18})),h.default.createElement(ue,{className:"keen-next",onClick:()=>u()},h.default.createElement(D.ArrowRight,{size:18}))))};E.propTypes={slidesPerView:P.default.number,slidesPerViewMob:P.default.number,spacing:P.default.number,offsetStart:P.default.number};var ye=o(require("swr"));var he=o(require("axios")),fe=e=>he.default.get(e).then(t=>t.data);var M=xe.default.div`
  width: 100%;
`,De=e=>{let{isCarousel:t,children:r,slidesPerView:i,slidesPerViewMob:s,spacing:a}=e;return t?C.default.createElement(E,{slidesPerView:i,spacing:a,slidesPerViewMob:s,offsetStart:1},r):r},te=e=>{let{postIds:t}=e,r=t.join(","),{data:i,error:s}=(0,ye.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,fe);return s?C.default.createElement("div",null,"failed to load"):i?C.default.createElement(M,null,C.default.createElement(De,{...e},i.map((a,n)=>C.default.createElement(z,{key:n,data:a})))):C.default.createElement("div",null,"loading...")};te.propTypes={postIds:W.default.array.isRequired,isCarousel:W.default.bool,slidesPerView:W.default.number,slidesPerViewMob:W.default.number,spacing:W.default.number};var F=o(require("react")),B=o(require("prop-types"));var U=o(require("styled-components")),we=U.default.a`
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  width: fit-content;
  border: 1px solid var(--primary-black);
  padding: ${e=>e.text?"0.75rem 1rem":"1rem"};
  background: inherit;
  border-radius: var(--border-radius);
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  svg {
    display: block;
    margin-right: ${e=>e.text&&e.icon&&"0.35rem"};
  }
`,Me=(0,U.default)(we)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,Fe=(0,U.default)(we)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,j=({text:e,link:t,variant:r,className:i,onClick:s,icon:a})=>{let n,d=a;if(r==="fill")n=Me;else if(r==="outline")n=Fe;else throw new Error(`Unrecognized Button variant: ${r}`);return F.default.createElement(n,{href:t,as:t?"a":"button",className:i,onClick:s,icon:a,text:e},a&&F.default.createElement(d,{size:16}),F.default.createElement(m,{size:"base",heading:!0},e))};j.propTypes={link:B.default.string,text:B.default.string.isRequired,variant:B.default.oneOf(["outline","fill"]),className:B.default.string,onClick:B.default.func,icon:B.default.elementType};var re=o(require("prop-types")),be=o(require("react")),ve=o(require("styled-components")),Ue=ve.default.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${e=>e.direction||"row"};
  flex-wrap: wrap;
  align-items: ${e=>e.alignItems};
  justify-content: ${e=>e.justifyContent};

  /* use this to emulate the gap property */
  /* only works horizontally */
  margin: calc(-1 * calc(var(--gap) * 1rem)) 0 0
    calc(-1 * calc(var(--gap) * 1rem));
  width: calc(100% + calc(var(--gap) * 1rem));

  > * {
    flex: ${e=>e.wrapWidth&&`1 1 ${e.wrapWidth}px`};
    /* use this to emulate the gap property */
    /* only works horizontally */
    margin: calc(var(--gap) * 1rem) 0 0 calc(var(--gap) * 1rem);
  }
`,Y=e=>{let{children:t,gap:r,direction:i,alignItems:s,justifyContent:a,wrapWidth:n}=e;return be.default.createElement(Ue,{gap:r,alignItems:s,justifyContent:a,direction:i,wrapWidth:n,style:{"--gap":e.gap}},t)};Y.propTypes={gap:re.default.number,wrapWidth:re.default.number};Y.defaultProps={gap:1,direction:"row"};var ke=o(require("react")),oe=o(require("prop-types")),Ae=o(require("styled-components")),Ye=Ae.default.div`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,K=e=>{let{children:t}=e;return ke.default.createElement(Ye,{...e},t)};K.propTypes={gap:oe.default.number,wrapWidth:oe.default.number};K.defaultProps={gap:1,wrapWidth:340};var T=o(require("react")),l=o(require("prop-types")),q=o(require("styled-components"));var f=o(require("react")),y=o(require("prop-types")),Ce=o(require("styled-components")),Ke=Ce.default.div`
  display: block;
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: none;
    opacity: 0;
    transform: translateZ(0);
    transition: opacity 0.5s linear;
    will-change: opacity;
  }

  .loaded {
    opacity: 1;
  }

  div {
    position: relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    background-color: ${e=>e.backgroundColor};
    padding-top: ${e=>`${e.height/e.width*100}%`};

    ${e=>e.isArtDirected&&e.artDirectedImages.map(({media:t,height:r,width:i})=>`
        @media ${t} {
          padding-top: ${r/i*100}%;
        }
      `).join("")}
  }
`,v=e=>{let{width:t,alt:r,src:i,quality:s,sizes:a,height:n,backgroundColor:d,className:u}=e,p=(0,f.useRef)(null);(0,f.useEffect)(()=>{let c=O=>{O.forEach(X=>{if(X.isIntersecting){let N=Array.from(p.current.querySelectorAll("source"));p.current.lastChild.classList.add("loaded"),N.forEach(pe=>{pe.srcset=pe.dataset.srcset})}})},x={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},w=new IntersectionObserver(c,x);return w.observe(p.current.querySelector("img")),()=>w.disconnect()},[p]);let I=[.25,.5,1,1.25,1.5,2,2.5],$=["webp","jpeg"],k=({type:c,width:x,src:w})=>{let O=I.flatMap(X=>{let N=x*X;return N<1920?`${w}.${c}?w=${N}&qlt=${s} ${N}w`:[]});return A||O.push(`${w}.${c}?w=1920&qlt=${s} 1920w`),O.join(",")},A=Array.isArray(i),J=A?i[0]:i,S;return A&&([,...S]=i),f.default.createElement(Ke,{width:t,height:n,backgroundColor:d,isArtDirected:A,artDirectedImages:S,className:u},f.default.createElement("div",null),f.default.createElement("picture",{ref:p},A&&S.map(c=>$.map((x,w)=>f.default.createElement("source",{key:w,type:`image/${x}`,"data-srcset":k({type:x,...c,isArtDirected:!0}),sizes:a,media:c.media}))),$.map((c,x)=>f.default.createElement("source",{key:x,type:`image/${c}`,"data-srcset":k({type:c,width:t,src:J,isArtDirected:!1}),sizes:a})),f.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};v.propTypes={width:y.default.number,alt:y.default.string.isRequired,src:y.default.oneOfType([y.default.string,y.default.array]).isRequired,quality:y.default.number,sizes:y.default.string,height:y.default.number,backgroundColor:y.default.string};v.defaultProps={backgroundColor:"#ECECF2",quality:80,alt:"image component",height:240,width:240};var Be=o(require("react")),Te=o(require("styled-components")),Ge=Te.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: calc(var(--spacing) * 1rem);

    @media (max-width: 767px) {
      margin-top: calc(var(--spacing) * 0.75rem);
    }
  }
`,G=({children:e,spacing:t,className:r})=>Be.default.createElement(Ge,{className:r,style:{"--spacing":t}},e);var Qe=(0,q.default)(m)`
  --max-width: calc(400 / 16 * 1rem);
  border-radius: var(--border-radius);
  background: var(--background);
  color: var(--color);
  padding: var(--padding);
  max-width: var(--max-width);

  /* laptop || ipad fill to half */
  @media (max-width: 1028px) {
    --max-width: calc(50% - 1rem);
  }

  /* at phone size take up the fill width */
  @media (max-width: 767px) {
    --max-width: 100%;
  }
`,Ze=q.default.a`
  --padding: 1rem;
  --gap: 0.5;
  display: block;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,Je=(0,q.default)(G)`
  --content-padding: 3rem;
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  padding: var(--content-padding);

  @media (max-width: 1280px) {
    --content-padding: 1rem;

    button {
      display: none;
    }
  }

  @media (max-width: 767px) {
    --content-padding: ${e=>e.noContentBackground?"1.5rem":"0.75rem"};
  }
`,Xe=q.default.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,Q=e=>{let{className:t,buttonText:r="shop now",link:i,logo:s,subcopy:a,noContentBackground:n,noLogoBackground:d,contentBackground:u,contentColor:p,width:I,height:$,sizes:k,alt:A,src:J}=e,S={width:I,height:$,sizes:k,src:J,alt:A},c={"--padding":0,"--background":"none","--gap":1.5,"--color":p||"var(--primary-black)"},x={"--background":"none","--padding":"none"};return T.default.createElement(Ze,{href:i,style:n?{...c}:{...{"--background":u||"var(--primary-black)","--color":p||"var(--primary-white)"}},className:t,contentColor:p,contentBackground:u},T.default.createElement(v,{...S}),T.default.createElement(Je,{spacing:"var(--gap)",noContentBackground:n},T.default.createElement(Xe,{src:s,alt:"logo",style:d?{...x}:{}}),T.default.createElement(Qe,null,a),T.default.createElement(j,{text:r,variant:"fill"})))};Q.propTypes={className:l.default.string,buttonText:l.default.string,link:l.default.string.isRequired,logo:l.default.string,subcopy:l.default.string,contentBackground:l.default.string,contentColor:l.default.string,alt:l.default.string.isRequired,src:l.default.array.isRequired,width:l.default.number,height:l.default.number,sizes:l.default.string,noLogoBackground:l.default.bool,noContentBackground:l.default.bool};Q.defaultProps={width:1440,height:640,sizes:"100vw"};var $e=o(require("styled-components")),ie=o(require("prop-types")),ne=$e.default.section`
  --width-sm: 640px;
  --width-md: 768px;
  --width-lg: 1024px;
  --width-xl: 1280px;
  --width-2xl: 1536px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  max-width: ${e=>e.maxWidth?`var(--width-${e.maxWidth})`:"none"};

  @media (max-width: 767px) {
    padding: ${e=>!e.noPadding&&"0 1rem"};
  }
`;ne.propTypes={maxWidth:ie.default.oneOf(["sm","md","lg","xl","2xl"]),noPadding:ie.default.bool};var _=o(require("react")),ae=o(require("styled-components")),se=o(require("prop-types"));var Re=ae.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,et=(0,ae.default)(m)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  padding: 0.5rem 0.75rem;
  background: var(--primary-black);
  color: var(--primary-white);

  @media (max-width: 767px) {
    bottom: 0.75rem;
    left: 0.75rem;
  }
`,Z=e=>{let{text:t,link:r}=e;return _.default.createElement(Re,null,_.default.createElement("a",{href:r},_.default.createElement(v,{...e}),t&&_.default.createElement(et,{heading:!0},t)))};Z.propTypes={link:se.default.string,text:se.default.string};Z.defaultProps={link:"/new-in",width:240,height:240,alt:"grid item alt",src:"https://media.missguided.com/i/missguided/playboy_storybook_default",sizes:"(max-width: 767px) 50vw, 298px"};0&&(module.exports={Blogpost,Blogposts,Button,Carousel,Flex,Grid,HeroBanner,Image,Row,ShoppableImage,Stack,Text});
