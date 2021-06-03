var Pe=Object.create,X=Object.defineProperty;var Ne=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,He=Object.prototype.hasOwnProperty;var xe=e=>X(e,"__esModule",{value:!0});var Oe=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of je(t))!He.call(e,o)&&o!=="default"&&X(e,o,{get:()=>t[o],enumerable:!(r=Ne(t,o))||r.enumerable});return e},i=e=>Ve(xe(X(e!=null?Pe(Ee(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);xe(exports);Oe(exports,{Blogpost:()=>L,Blogposts:()=>de,Button:()=>H,Carousel:()=>U,Flex:()=>re,Grid:()=>ie,HeroBanner:()=>oe,Image:()=>I,ImageRow:()=>ne,Row:()=>z,ShoppableImage:()=>Z,Stack:()=>O,Text:()=>g});var u=i(require("react")),se=i(require("prop-types"));var ye=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};var le=i(require("styled-components"));var we=i(require("react")),B=i(require("prop-types")),_=i(require("styled-components")),qe=_.default.p`
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

  ${e=>e.heading&&_.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&_.css`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,g=e=>{let{element:t,children:r,size:o,align:n,heading:s,className:a,lineHeight:l,weight:p,spacing:c,truncate:d}=e;return we.default.createElement(qe,{as:t,style:{fontSize:`var(--text-${o})`,textAlign:n},heading:s,className:a,lineHeight:l,weight:p,spacing:c,truncate:d},r)};g.propTypes={heading:B.default.bool,align:B.default.oneOf(["left","center","right"]),size:B.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:B.default.string,weight:B.default.number,lineHeight:B.default.number,children:B.default.string,truncate:B.default.number};g.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var Fe=le.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,_e=le.default.div`
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
`,be=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return ye(t)},L=({data:e,className:t})=>{let r=(0,u.useRef)(null);(0,u.useEffect)(()=>{let a=c=>{c.forEach(d=>{if(d.isIntersecting){let $=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),$.forEach(T=>{T.srcset=T.dataset.srcset})}})},l={threshold:0,root:null},p=new IntersectionObserver(a,l);return p.observe(r.current.querySelector("img")),()=>p.disconnect()},[r]);let o=e._embedded["wp:featuredmedia"][0].media_details.sizes,s=Object.values(o).sort((a,l)=>a.width-l.width).map(a=>`${a.source_url} ${a.width}w`).join(",");return u.default.createElement(Fe,{className:t,href:e.link},u.default.createElement(_e,null,u.default.createElement("picture",{ref:r},u.default.createElement("source",{"data-srcset":s,sizes:"(max-width: 767px) 240px, 300px"}),u.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),u.default.createElement(g,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},be(e.title.rendered)),u.default.createElement(g,{size:"sm",lineHeight:1.5,weight:400},be(e.excerpt.rendered)))};L.propTypes={data:se.default.object.isRequired,className:se.default.string};var P=i(require("react")),N=i(require("prop-types")),Te=i(require("styled-components"));var y=i(require("react")),M=i(require("prop-types")),W=i(require("styled-components")),ve=i(require("keen-slider/react")),R=i(require("react-feather")),Le={loop:!0,duration:300},Me=W.default.div`
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

  @media (max-width: 767px) {
    /* if there is an offset being applied make the carousel full width */
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&W.css`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,Ue=W.default.div`
  --nav-inset: 2rem;
  position: absolute;

  ${e=>e.position.map(t=>W.css`
        ${t}: var(--nav-inset);
      `)}

  @media (max-width: 1024px) {
    --nav-inset: 0.75rem;
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`,ke=W.default.button`
  background: var(--primary-black);
  border: none;
  color: var(--primary-white);
  border-radius: var(--border-radius);
  line-height: 0px;
  padding: 0.75rem;

  &:hover {
    cursor: pointer;
    background: var(--primary-black-hover);
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }
`,De=W.default.div`
  overflow: hidden;
  /* if slidesPerView isnt a whole number add the offset */
  padding-left: ${e=>!Number.isInteger(e.slidesPerView)&&`${e.offsetStart}rem`};

  @media (max-width: 767px) {
    /* if slidesPerViewMob isnt a whole number add the offset */
    padding-left: ${e=>!Number.isInteger(e.slidesPerViewMob)&&`${e.offsetStart}rem`};
    width: 100%;

    > * {
      overflow: visible;
    }
  }
`,U=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:o=0,offsetStart:n,arrowsPosition:s=["bottom","right"]})=>{let[a,l]=(0,ve.useKeenSlider)({...Le,slidesPerView:t,spacing:o,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),p=()=>{l.prev()},c=()=>{l.next()};return y.default.createElement(Me,{className:"keen-wrapper",offsetStart:n,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":n,"data-spacing":o},y.default.createElement(De,{offsetStart:n,slidesPerView:t,slidesPerViewMob:r},y.default.createElement("div",{ref:a,className:"keen-slider"},y.default.Children.map(e,d=>y.default.cloneElement(d,{className:"keen-slider__slide"},d.props.children)))),y.default.createElement(Ue,{position:s},y.default.createElement(ke,{className:"keen-prev",onClick:()=>p()},y.default.createElement(R.ArrowLeft,{size:18})),y.default.createElement(ke,{className:"keen-next",onClick:()=>c()},y.default.createElement(R.ArrowRight,{size:18}))))};U.propTypes={slidesPerView:M.default.number,slidesPerViewMob:M.default.number,spacing:M.default.number,offsetStart:M.default.number};var Ce=i(require("swr"));var Ae=i(require("axios")),$e=e=>Ae.default.get(e).then(t=>t.data);var Ye=Te.default.div`
  width: 100%;
`,Ke=e=>{let{isCarousel:t,children:r,slidesPerView:o,slidesPerViewMob:n,spacing:s,offsetStart:a,arrowsPosition:l=["top","right"]}=e;return t?P.default.createElement(U,{slidesPerView:o,spacing:s,slidesPerViewMob:n,offsetStart:a,arrowsPosition:l},r):r},de=e=>{let{postIds:t}=e,r=t.join(","),{data:o,error:n}=(0,Ce.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,$e);return n?P.default.createElement("div",null,"failed to load"):o?P.default.createElement(Ye,null,P.default.createElement(Ke,{...e},o.map((s,a)=>P.default.createElement(L,{key:a,data:s})))):P.default.createElement("div",null,"loading...")};de.propTypes={postIds:N.default.array.isRequired,isCarousel:N.default.bool,slidesPerView:N.default.number,slidesPerViewMob:N.default.number,spacing:N.default.number,offsetStart:N.default.number};var ee=i(require("react")),v=i(require("prop-types"));var te=i(require("styled-components")),Ge={sm:{fontSize:"sm",padding:"0.5rem 0.75rem",iconSize:"14"},md:{fontSize:"base",padding:"0.75rem 1rem",iconSize:"16"},lg:{fontSize:"md",padding:"1rem 1.25rem",iconSize:"18"}},Qe={primary:{background:"var(--primary-black)",color:"var(--primary-white)",hover:"var(--primary-black-hover)"},secondary:{background:"var(--primary-white)",color:"var(--primary-black)",hover:"var(--primary-white-hover)",borderColor:"var(--primary-black)"}},Se=te.default.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  width: ${e=>e.isFullWidth?"100%":"fit-content"};
  border: 1px solid transparent;
  padding: ${e=>e.text?e.padding:"1rem"};
  background: inherit;
  border-radius: var(--border-radius);
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  svg {
    display: block;
    margin-right: ${e=>e.text&&e.icon&&"0.35rem"};
  }
`,Ze=(0,te.default)(Se)`
  background: ${e=>e.type.background};
  color: ${e=>e.type.color};
  border-color: ${e=>e.type.borderColor};

  &:hover {
    color: ${e=>e.type.color};
    background: ${e=>e.type.hover};
  }
`,Je=(0,te.default)(Se)`
  background: none;
  color: ${e=>e.type.background};
  border-color: ${e=>e.type.background};

  &:hover {
    color: ${e=>e.type.hover};
    border-color: ${e=>e.type.hover};
  }
`,H=({text:e,link:t,type:r="primary",variant:o,className:n,onClick:s,icon:a,isFullWidth:l,size:p="md"})=>{let c,d=a,{padding:$,fontSize:T,iconSize:C}=Ge[p],V=Qe[r];if(o==="fill")c=Ze;else if(o==="outline")c=Je;else throw new Error(`Unrecognized Button variant: ${o}`);return ee.default.createElement(c,{href:t,as:t?"a":"button",className:n,onClick:s,icon:a,text:e,isFullWidth:l,padding:$,type:V},a&&ee.default.createElement(d,{size:C}),ee.default.createElement(g,{size:T,heading:!0},e))};H.defaultProps={size:"md",variant:"fill",onClick:void 0};H.propTypes={link:v.default.string,text:v.default.string,variant:v.default.oneOf(["outline","fill"]),type:v.default.string,className:v.default.string,onClick:v.default.func,icon:v.default.elementType,isFullWidth:v.default.bool,size:v.default.oneOf(["sm","md","lg"])};var k=i(require("prop-types")),me=i(require("react")),D=i(require("styled-components"));var Be=i(require("styled-components")),pe=i(require("prop-types")),z=Be.default.section`
  --width-sm: 640px;
  --width-md: 768px;
  --width-lg: 1024px;
  --width-xl: 1280px;
  --width-2xl: 1536px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  max-width: ${e=>e.maxWidth?`var(--width-${e.maxWidth})`:"none"};

  padding: ${e=>e.padding&&"0 1rem"};
`;z.propTypes={maxWidth:pe.default.oneOf(["none","sm","md","lg","xl","2xl"]),padding:pe.default.bool};var Xe=D.default.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${e=>e.direction||"row"};
  flex-wrap: wrap;
  align-items: ${e=>e.align};
  justify-content: ${e=>e.justify};

  /* use this to emulate the gap property */
  margin: calc(-1 * calc(var(--flex-gap) * 1rem)) 0 0
    calc(-1 * calc(var(--flex-gap) * 1rem));
  width: calc(100% + calc(var(--flex-gap) * 1rem));

  /* if flex item is a string  */
  ${e=>typeof e.itemFlex=="string"&&D.css`
      > * {
        flex: ${t=>t.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&D.css`
      ${e.itemFlex.map((t,r)=>`
        > :nth-child(${r+1}) {
          flex: ${t};
        }
      `)}
    `}

  > * {
    /* use this to emulate the gap property */
    margin: calc(var(--flex-gap) * 1rem) 0 0 calc(var(--flex-gap) * 1rem);
  }
`,re=e=>{let{children:t,gap:r,direction:o,align:n,justify:s,maxWidth:a,itemFlex:l,padding:p}=e;return me.default.createElement(z,{maxWidth:a,padding:p},me.default.createElement(Xe,{gap:r,align:n,justify:s,direction:o,style:{"--flex-gap":e.gap},itemFlex:l},t))};re.propTypes={gap:k.default.number,align:k.default.string,justify:k.default.string,direction:k.default.string,itemFlex:k.default.oneOfType([k.default.string,k.default.array]),padding:k.default.bool,maxWidth:k.default.oneOf(["none","sm","md","lg","xl","2xl"])};re.defaultProps={gap:1,direction:"row"};var ze=i(require("react")),Y=i(require("prop-types"));var We=i(require("styled-components")),Re=(0,We.default)(z)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  /* add a fallback here for older browsers */
  grid-template-columns: repeat(
    auto-fill,
    minmax(${e=>e.wrapWidth}px, 1fr)
  );

  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,ie=e=>{let{children:t}=e;return ze.default.createElement(Re,{...e},t)};ie.propTypes={gap:Y.default.number,wrapWidth:Y.default.number,padding:Y.default.bool,maxWidth:Y.default.oneOf(["none","sm","md","lg","xl","2xl"])};ie.defaultProps={gap:1,wrapWidth:340};var j=i(require("react")),m=i(require("prop-types")),G=i(require("styled-components"));var w=i(require("react")),A=i(require("prop-types")),Ie=i(require("styled-components")),et=Ie.default.div`
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

    ${e=>e.isArtDirected&&e.artDirectedImages.map(({media:t,height:r,width:o})=>`
        @media ${t} {
          padding-top: ${r/o*100}%;
        }
      `).join("")}
  }
`,I=e=>{let{width:t,alt:r,src:o,quality:n,sizes:s,height:a,backgroundColor:l,className:p,imageTypes:c=["webp","jpeg"]}=e,d=(0,w.useRef)(null);(0,w.useEffect)(()=>{let h=E=>{E.forEach(J=>{if(J.isIntersecting){let F=Array.from(d.current.querySelectorAll("source"));d.current.lastChild.classList.add("loaded"),F.forEach(ue=>{ue.srcset=ue.dataset.srcset})}})},b={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},S=new IntersectionObserver(h,b);return S.observe(d.current.querySelector("img")),()=>S.disconnect()},[d]);let $=[.25,.5,1,1.25,1.5,2,2.5],T=({type:h,width:b,src:S})=>{let E=$.flatMap(J=>{let F=b*J;return F<1920?`${S}.${h}?w=${F}&qlt=${n} ${F}w`:[]});return C||E.push(`${S}.${h}?w=1920&qlt=${n} 1920w`),E.join(",")},C=Array.isArray(o),V=C?o[0]:o,q;return C&&([,...q]=o),w.default.createElement(et,{width:t,height:a,backgroundColor:l,isArtDirected:C,artDirectedImages:q,className:p},w.default.createElement("div",null),w.default.createElement("picture",{ref:d},C&&q.map(h=>c.map((b,S)=>w.default.createElement("source",{key:S,type:`image/${b}`,"data-srcset":T({type:b,...h,isArtDirected:!0}),sizes:s,media:h.media}))),c.map((h,b)=>w.default.createElement("source",{key:b,type:`image/${h}`,"data-srcset":T({type:h,width:t,src:V,isArtDirected:!1}),sizes:s})),w.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};I.propTypes={width:A.default.number,alt:A.default.string.isRequired,src:A.default.oneOfType([A.default.string,A.default.array]).isRequired,quality:A.default.number,sizes:A.default.string,height:A.default.number,backgroundColor:A.default.string};I.defaultProps={backgroundColor:"#ECECF2",quality:80};var ce=i(require("react")),K=i(require("styled-components")),f=i(require("prop-types"));var tt=K.default.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>e.direction==="column"&&K.css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>e.direction==="row"&&K.css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,O=e=>{let{as:t,direction:r,gap:o,align:n,justify:s,className:a,children:l,maxWidth:p,style:c,padding:d}=e;return ce.default.createElement(z,{maxWidth:p,padding:d},ce.default.createElement(tt,{className:a,as:t,align:n,justify:s,direction:r,style:{...c,"--stack-gap":o}},l))};O.propTypes={as:f.default.string,className:f.default.string,style:f.default.string,gap:f.default.number,align:f.default.string,justify:f.default.string,direction:f.default.string,itemFlex:f.default.oneOfType([f.default.string,f.default.array]),padding:f.default.bool,maxWidth:f.default.oneOf(["none","sm","md","lg","xl","2xl"])};O.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var rt=(0,G.default)(g)`
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
`,it=G.default.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    --padding: 0.75rem;
  }
`,ot=(0,G.default)(O)`
  --content-padding: 2rem;
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  padding: var(--content-padding);

  @media (max-width: 1024px) {
    --content-padding: 1rem;

    button {
      display: none;
    }
  }

  @media (max-width: 767px) {
    --content-padding: ${e=>e.noContentBackground?"1.5rem":"0.75rem"};
  }
`,at=G.default.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  /* fallback for older browsers */
  max-width: 380px;
  max-height: 140px;
  @media (max-width: 767px) {
    max-width: 240px;
    max-height: 140px;
  }
  @supports (max-width: clamp(min(240px, 70%), 30vw, 380px)) {
    max-width: clamp(min(240px, 70%), 30vw, 380px);
    max-height: clamp(100px, 10vw, 140px);
  }
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,oe=e=>{let{className:t,buttonText:r="shop now",buttonType:o,buttonVariant:n="fill",link:s,logo:a,subcopy:l,noContentBackground:p,noLogoBackground:c,contentBackground:d,contentColor:$,width:T,height:C,sizes:V,alt:q,src:h}=e,b={width:T,height:C,sizes:V,src:h,alt:q},S={"--padding":0,"--background":"none","--color":$||"var(--primary-black)"},E={"--background":"none","--padding":"none"};return j.default.createElement(it,{href:s,style:p?{...S}:{...{"--background":d||"var(--primary-black)","--color":$||"var(--primary-white)"}},className:t,contentColor:$,contentBackground:d},j.default.createElement(I,{...b}),j.default.createElement(ot,{gap:p?1.5:.5,noContentBackground:p},j.default.createElement(at,{src:a,alt:"logo",style:c?{...E}:{}}),j.default.createElement(rt,null,l),j.default.createElement(H,{text:r,variant:n,type:o})))};oe.propTypes={className:m.default.string,buttonText:m.default.string,buttonVariant:m.default.string,buttonType:m.default.string,link:m.default.string.isRequired,logo:m.default.string,subcopy:m.default.string,contentBackground:m.default.string,contentColor:m.default.string,alt:m.default.string.isRequired,src:m.default.array.isRequired,width:m.default.number,height:m.default.number,sizes:m.default.string,noLogoBackground:m.default.bool,noContentBackground:m.default.bool};oe.defaultProps={width:1440,height:640,sizes:"100vw"};var he=i(require("react")),ae=i(require("prop-types")),x=i(require("styled-components"));var Q=i(require("react")),ge=i(require("styled-components")),fe=i(require("prop-types"));var nt=ge.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,st=(0,ge.default)(g)`
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
`,Z=e=>{let{text:t,link:r,className:o,...n}=e;return Q.default.createElement(nt,{className:o},Q.default.createElement("a",{href:r},Q.default.createElement(I,{...n}),t&&Q.default.createElement(st,{heading:!0},t)))};Z.propTypes={link:fe.default.string,text:fe.default.string};var lt=x.default.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
  flex-direction: ${e=>e.reverse?"row-reverse":"row"};
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }

    ${e=>e.layout==="contrast"&&x.css`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${e=>e.layout==="overlap"&&x.css`
        padding: 0 10%;
        align-items: flex-start;

        > div {
          width: calc(50% + 2rem);
        }

        > div:first-of-type {
          margin-right: -2rem;
        }

        > div:last-of-type {
          margin-left: -2rem;
          margin-top: 20%;
        }
      `};

    ${e=>e.layout==="overlap"&&e.reverse&&x.css`
        > div:first-of-type {
          margin-left: -2rem;
          margin-right: 0;
          z-index: 3;
        }

        > div:last-of-type {
          margin-right: -2rem;
          margin-left: 0;
        }
      `};

    ${e=>e.layout==="sidebyside"&&x.css`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${e=>e.layout==="padded"&&x.css`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${e=>e.layout==="contrast"&&x.css`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${e=>e.layout==="overlap"&&x.css`
        align-items: flex-start;

        > div {
          width: calc(50% + 1rem);
        }

        > div:first-of-type {
          margin-right: -1rem;
        }

        > div:last-of-type {
          margin-left: -1rem;
          margin-top: 30%;
        }
      `};

    ${e=>e.layout==="overlap"&&e.reverse&&x.css`
        > div:last-of-type {
          margin-right: -1rem;
          margin-left: 0;
        }

        > div:first-of-type {
          margin-left: -1rem;
          margin-right: 0;
          z-index: 3;
        }
      `};

    ${e=>e.layout==="sidebyside"&&x.css`
        > div:first-of-type {
          width: 90%;
        }
        > div:last-of-type {
          width: 65%;
          margin-top: -1.5rem;
          margin-left: auto;
        }
      `};
  }
`,dt={contrast:[{width:432,height:510,sizes:"(max-width: 600px) 100vw, 30vw"},{width:720,height:800,sizes:"(max-width: 600px) 100vw, 50vw"}],sidebyside:[{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"}],overlap:[{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"}]},ne=({layout:e,reverse:t,images:r})=>he.default.createElement(lt,{layout:e,reverse:t},r.map((o,n)=>{let s=dt[e][n],a={...o,...s};return he.default.createElement(Z,{...a})}));ne.defaultProps={layout:"sidebyside"};ne.propTypes={layout:ae.default.oneOf(["contrast","sidebyside","overlap"]),reverse:ae.default.bool,images:ae.default.array};0&&(module.exports={Blogpost,Blogposts,Button,Carousel,Flex,Grid,HeroBanner,Image,ImageRow,Row,ShoppableImage,Stack,Text});
