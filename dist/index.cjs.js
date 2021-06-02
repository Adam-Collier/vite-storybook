var Pe=Object.create,X=Object.defineProperty;var He=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var ye=e=>X(e,"__esModule",{value:!0});var Ve=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},qe=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of je(t))!Oe.call(e,i)&&i!=="default"&&X(e,i,{get:()=>t[i],enumerable:!(r=He(t,i))||r.enumerable});return e},o=e=>qe(ye(X(e!=null?Pe(Ee(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);ye(exports);Ve(exports,{Blogpost:()=>L,Blogposts:()=>pe,Button:()=>E,Carousel:()=>U,Flex:()=>re,Grid:()=>oe,HeroBanner:()=>ie,Image:()=>W,ImageRow:()=>ne,Row:()=>z,ShoppableImage:()=>Z,Stack:()=>O,Text:()=>c});var h=o(require("react")),se=o(require("prop-types"));var we=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};var le=o(require("styled-components"));var ve=o(require("react")),S=o(require("prop-types")),_=o(require("styled-components")),Fe=_.default.p`
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
`,c=e=>{let{element:t,children:r,size:i,align:n,heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:u}=e;return ve.default.createElement(Fe,{as:t,style:{fontSize:`var(--text-${i})`,textAlign:n},heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:u},r)};c.propTypes={heading:S.default.bool,align:S.default.oneOf(["left","center","right"]),size:S.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:S.default.string,weight:S.default.number,lineHeight:S.default.number,children:S.default.string,truncate:S.default.number};c.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var _e=le.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,Le=le.default.div`
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
`,be=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return we(t)},L=({data:e,className:t})=>{let r=(0,h.useRef)(null);(0,h.useEffect)(()=>{let a=l=>{l.forEach(u=>{if(u.isIntersecting){let v=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),v.forEach(T=>{T.srcset=T.dataset.srcset})}})},p={threshold:0,root:null},d=new IntersectionObserver(a,p);return d.observe(r.current.querySelector("img")),()=>d.disconnect()},[r]);let i=e._embedded["wp:featuredmedia"][0].media_details.sizes,s=Object.values(i).sort((a,p)=>a.width-p.width).map(a=>`${a.source_url} ${a.width}w`).join(",");return h.default.createElement(_e,{className:t,href:e.link},h.default.createElement(Le,null,h.default.createElement("picture",{ref:r},h.default.createElement("source",{"data-srcset":s,sizes:"(max-width: 767px) 240px, 300px"}),h.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),h.default.createElement(c,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},be(e.title.rendered)),h.default.createElement(c,{size:"sm",lineHeight:1.5,weight:400},be(e.excerpt.rendered)))};L.propTypes={data:se.default.object.isRequired,className:se.default.string};var N=o(require("react")),P=o(require("prop-types")),Ce=o(require("styled-components"));var y=o(require("react")),M=o(require("prop-types")),I=o(require("styled-components")),ke=o(require("keen-slider/react")),R=o(require("react-feather"));var Me={loop:!0,duration:300},Ue=I.default.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&I.css`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,De=I.default.div`
  --nav-inset: 2rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1024px) {
    ${de} & {
      --nav-inset: 2rem;
      bottom: auto;
      top: var(--nav-inset);
    }
  }

  @media (max-width: 1024px) {
    --nav-inset: 0.75rem;
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`,Ae=I.default.button`
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
`,Ye=I.default.div`
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
`,U=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:i=0,offsetStart:n})=>{let[s,a]=(0,ke.useKeenSlider)({...Me,slidesPerView:t,spacing:i,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),p=()=>{a.prev()},d=()=>{a.next()};return y.default.createElement(Ue,{className:"keen-wrapper",offsetStart:n,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":n,"data-spacing":i},y.default.createElement(Ye,{offsetStart:n,slidesPerView:t,slidesPerViewMob:r},y.default.createElement("div",{ref:s,className:"keen-slider"},y.default.Children.map(e,l=>y.default.cloneElement(l,{className:"keen-slider__slide"},l.props.children)))),y.default.createElement(De,null,y.default.createElement(Ae,{className:"keen-prev",onClick:()=>p()},y.default.createElement(R.ArrowLeft,{size:18})),y.default.createElement(Ae,{className:"keen-next",onClick:()=>d()},y.default.createElement(R.ArrowRight,{size:18}))))};U.propTypes={slidesPerView:M.default.number,slidesPerViewMob:M.default.number,spacing:M.default.number,offsetStart:M.default.number};var Be=o(require("swr"));var $e=o(require("axios")),Te=e=>$e.default.get(e).then(t=>t.data);var de=Ce.default.div`
  width: 100%;
`,Ke=e=>{let{isCarousel:t,children:r,slidesPerView:i,slidesPerViewMob:n,spacing:s,offsetStart:a}=e;return t?N.default.createElement(U,{slidesPerView:i,spacing:s,slidesPerViewMob:n,offsetStart:a},r):r},pe=e=>{let{postIds:t}=e,r=t.join(","),{data:i,error:n}=(0,Be.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,Te);return n?N.default.createElement("div",null,"failed to load"):i?N.default.createElement(de,null,N.default.createElement(Ke,{...e},i.map((s,a)=>N.default.createElement(L,{key:a,data:s})))):N.default.createElement("div",null,"loading...")};pe.propTypes={postIds:P.default.array.isRequired,isCarousel:P.default.bool,slidesPerView:P.default.number,slidesPerViewMob:P.default.number,spacing:P.default.number,offsetStart:P.default.number};var ee=o(require("react")),k=o(require("prop-types"));var te=o(require("styled-components")),Ge={sm:{fontSize:"sm",padding:"0.5rem 0.75rem",iconSize:"14"},md:{fontSize:"base",padding:"0.75rem 1rem",iconSize:"16"},lg:{fontSize:"md",padding:"1rem 1.25rem",iconSize:"18"}},Qe={primary:{background:"var(--primary-black)",color:"var(--primary-white)",backgroundHover:"var(--primary-black-hover)",colorHover:"var(--primary-white-hover)"},secondary:{background:"var(--primary-white)",color:"var(--primary-black)",backgroundHover:"var(--primary-white-hover)",colorHover:"var(--primary-black-hover)",borderColor:"var(--primary-black)"}},Se=te.default.a`
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
    color: ${e=>e.type.colorHover};
    background: ${e=>e.type.backgroundHover};
  }
`,Je=(0,te.default)(Se)`
  background: none;
  color: ${e=>e.type.background};
  border-color: ${e=>e.type.background};

  &:hover {
    color: ${e=>e.type.backgroundHover};
    border-color: ${e=>e.type.backgroundHover};
  }
`,E=({text:e,link:t,type:r="primary",variant:i,className:n,onClick:s,icon:a,isFullWidth:p,size:d="md"})=>{let l,u=a,{padding:v,fontSize:T,iconSize:C}=Ge[d],V=Qe[r];if(i==="fill")l=Ze;else if(i==="outline")l=Je;else throw new Error(`Unrecognized Button variant: ${i}`);return ee.default.createElement(l,{href:t,as:t?"a":"button",className:n,onClick:s,icon:a,text:e,isFullWidth:p,padding:v,type:V},a&&ee.default.createElement(u,{size:C}),ee.default.createElement(c,{size:T,heading:!0},e))};E.defaultProps={size:"md",variant:"fill",onClick:void 0};E.propTypes={link:k.default.string,text:k.default.string,variant:k.default.oneOf(["outline","fill"]),type:k.default.string,className:k.default.string,onClick:k.default.func,icon:k.default.elementType,isFullWidth:k.default.bool,size:k.default.oneOf(["sm","md","lg"])};var A=o(require("prop-types")),ce=o(require("react")),D=o(require("styled-components"));var ze=o(require("styled-components")),me=o(require("prop-types")),z=ze.default.section`
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
`;z.propTypes={maxWidth:me.default.oneOf(["none","sm","md","lg","xl","2xl"]),padding:me.default.bool};var Xe=D.default.div`
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
`,re=e=>{let{children:t,gap:r,direction:i,align:n,justify:s,maxWidth:a,itemFlex:p,padding:d}=e;return ce.default.createElement(z,{maxWidth:a,padding:d},ce.default.createElement(Xe,{gap:r,align:n,justify:s,direction:i,style:{"--flex-gap":e.gap},itemFlex:p},t))};re.propTypes={gap:A.default.number,align:A.default.string,justify:A.default.string,direction:A.default.string,itemFlex:A.default.oneOfType([A.default.string,A.default.array]),padding:A.default.bool,maxWidth:A.default.oneOf(["none","sm","md","lg","xl","2xl"])};re.defaultProps={gap:1,direction:"row"};var We=o(require("react")),Y=o(require("prop-types"));var Ie=o(require("styled-components")),Re=(0,Ie.default)(z)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,oe=e=>{let{children:t}=e;return We.default.createElement(Re,{...e},t)};oe.propTypes={gap:Y.default.number,wrapWidth:Y.default.number,padding:Y.default.bool,maxWidth:Y.default.oneOf(["none","sm","md","lg","xl","2xl"])};oe.defaultProps={gap:1,wrapWidth:340};var H=o(require("react")),m=o(require("prop-types")),G=o(require("styled-components"));var w=o(require("react")),$=o(require("prop-types")),Ne=o(require("styled-components")),et=Ne.default.div`
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
`,W=e=>{let{width:t,alt:r,src:i,quality:n,sizes:s,height:a,backgroundColor:p,className:d}=e,l=(0,w.useRef)(null);(0,w.useEffect)(()=>{let f=j=>{j.forEach(J=>{if(J.isIntersecting){let F=Array.from(l.current.querySelectorAll("source"));l.current.lastChild.classList.add("loaded"),F.forEach(xe=>{xe.srcset=xe.dataset.srcset})}})},b={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},B=new IntersectionObserver(f,b);return B.observe(l.current.querySelector("img")),()=>B.disconnect()},[l]);let u=[.25,.5,1,1.25,1.5,2,2.5],v=["webp","jpeg"],T=({type:f,width:b,src:B})=>{let j=u.flatMap(J=>{let F=b*J;return F<1920?`${B}.${f}?w=${F}&qlt=${n} ${F}w`:[]});return C||j.push(`${B}.${f}?w=1920&qlt=${n} 1920w`),j.join(",")},C=Array.isArray(i),V=C?i[0]:i,q;return C&&([,...q]=i),w.default.createElement(et,{width:t,height:a,backgroundColor:p,isArtDirected:C,artDirectedImages:q,className:d},w.default.createElement("div",null),w.default.createElement("picture",{ref:l},C&&q.map(f=>v.map((b,B)=>w.default.createElement("source",{key:B,type:`image/${b}`,"data-srcset":T({type:b,...f,isArtDirected:!0}),sizes:s,media:f.media}))),v.map((f,b)=>w.default.createElement("source",{key:b,type:`image/${f}`,"data-srcset":T({type:f,width:t,src:V,isArtDirected:!1}),sizes:s})),w.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};W.propTypes={width:$.default.number,alt:$.default.string.isRequired,src:$.default.oneOfType([$.default.string,$.default.array]).isRequired,quality:$.default.number,sizes:$.default.string,height:$.default.number,backgroundColor:$.default.string};W.defaultProps={backgroundColor:"#ECECF2",quality:80};var ge=o(require("react")),K=o(require("styled-components")),g=o(require("prop-types"));var tt=K.default.div`
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
`,O=e=>{let{as:t,direction:r,gap:i,align:n,justify:s,className:a,children:p,maxWidth:d,style:l,padding:u}=e;return ge.default.createElement(z,{maxWidth:d,padding:u},ge.default.createElement(tt,{className:a,as:t,align:n,justify:s,direction:r,style:{...l,"--stack-gap":i}},p))};O.propTypes={as:g.default.string,className:g.default.string,style:g.default.string,gap:g.default.number,align:g.default.string,justify:g.default.string,direction:g.default.string,itemFlex:g.default.oneOfType([g.default.string,g.default.array]),padding:g.default.bool,maxWidth:g.default.oneOf(["none","sm","md","lg","xl","2xl"])};O.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var rt=(0,G.default)(c)`
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
`,ot=G.default.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    --padding: 0.75rem;
  }
`,it=(0,G.default)(O)`
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
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,ie=e=>{let{className:t,buttonText:r="shop now",buttonType:i,buttonVariant:n="fill",link:s,logo:a,subcopy:p,noContentBackground:d,noLogoBackground:l,contentBackground:u,contentColor:v,width:T,height:C,sizes:V,alt:q,src:f}=e,b={width:T,height:C,sizes:V,src:f,alt:q},B={"--padding":0,"--background":"none","--color":v||"var(--primary-black)"},j={"--background":"none","--padding":"none"};return H.default.createElement(ot,{href:s,style:d?{...B}:{...{"--background":u||"var(--primary-black)","--color":v||"var(--primary-white)"}},className:t,contentColor:v,contentBackground:u},H.default.createElement(W,{...b}),H.default.createElement(it,{gap:d?1.5:.5,noContentBackground:d},H.default.createElement(at,{src:a,alt:"logo",style:l?{...j}:{}}),H.default.createElement(rt,null,p),H.default.createElement(E,{text:r,variant:n,type:i})))};ie.propTypes={className:m.default.string,buttonText:m.default.string,buttonVariant:m.default.string,buttonType:m.default.string,link:m.default.string.isRequired,logo:m.default.string,subcopy:m.default.string,contentBackground:m.default.string,contentColor:m.default.string,alt:m.default.string.isRequired,src:m.default.array.isRequired,width:m.default.number,height:m.default.number,sizes:m.default.string,noLogoBackground:m.default.bool,noContentBackground:m.default.bool};ie.defaultProps={width:1440,height:640,sizes:"100vw"};var he=o(require("react")),ae=o(require("prop-types")),x=o(require("styled-components"));var Q=o(require("react")),ue=o(require("styled-components")),fe=o(require("prop-types"));var nt=ue.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,st=(0,ue.default)(c)`
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
`,Z=e=>{let{text:t,link:r,className:i,...n}=e;return Q.default.createElement(nt,{className:i},Q.default.createElement("a",{href:r},Q.default.createElement(W,{...n}),t&&Q.default.createElement(st,{heading:!0},t)))};Z.propTypes={link:fe.default.string,text:fe.default.string};var lt=x.default.div`
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
`,dt={contrast:[{width:432,height:510,sizes:"(max-width: 600px) 100vw, 30vw"},{width:720,height:800,sizes:"(max-width: 600px) 100vw, 50vw"}],sidebyside:[{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"}],overlap:[{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"}]},ne=({layout:e,reverse:t,images:r})=>he.default.createElement(lt,{layout:e,reverse:t},r.map((i,n)=>{let s=dt[e][n],a={...i,...s};return he.default.createElement(Z,{...a})}));ne.defaultProps={layout:"sidebyside"};ne.propTypes={layout:ae.default.oneOf(["contrast","sidebyside","overlap"]),reverse:ae.default.bool,images:ae.default.array};0&&(module.exports={Blogpost,Blogposts,Button,Carousel,Flex,Grid,HeroBanner,Image,ImageRow,Row,ShoppableImage,Stack,Text});
