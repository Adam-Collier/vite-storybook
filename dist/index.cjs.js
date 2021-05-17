var Ne=Object.create,G=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var Pe=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var ue=e=>G(e,"__esModule",{value:!0});var je=(e,t)=>{for(var r in t)G(e,r,{get:t[r],enumerable:!0})},He=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ie(t))!ze.call(e,i)&&i!=="default"&&G(e,i,{get:()=>t[i],enumerable:!(r=Se(t,i))||r.enumerable});return e},o=e=>He(ue(G(e!=null?Ne(Pe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);ue(exports);je(exports,{Blogpost:()=>V,Blogposts:()=>se,Button:()=>F,Carousel:()=>_,Flex:()=>X,Grid:()=>R,HeroBanner:()=>ee,Image:()=>C,Row:()=>A,ShoppableImage:()=>te,Stack:()=>j,Text:()=>c});var f=o(require("react")),ie=o(require("prop-types"));var fe=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};var ae=o(require("styled-components"));var he=o(require("react")),k=o(require("prop-types")),O=o(require("styled-components")),Ee=O.default.p`
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

  ${e=>e.heading&&O.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&O.css`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,c=e=>{let{element:t,children:r,size:i,align:n,heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:v}=e;return he.default.createElement(Ee,{as:t,style:{fontSize:`var(--text-${i})`,textAlign:n},heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:v},r)};c.propTypes={heading:k.default.bool,align:k.default.oneOf(["left","center","right"]),size:k.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:k.default.string,weight:k.default.number,lineHeight:k.default.number,children:k.default.string,truncate:k.default.number};c.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var Oe=ae.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,Ve=ae.default.div`
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
`,xe=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return fe(t)},V=({data:e,className:t})=>{let r=(0,f.useRef)(null);(0,f.useEffect)(()=>{let a=l=>{l.forEach(v=>{if(v.isIntersecting){let z=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),z.forEach(T=>{T.srcset=T.dataset.srcset})}})},p={threshold:0,root:null},d=new IntersectionObserver(a,p);return d.observe(r.current.querySelector("img")),()=>d.disconnect()},[r]);let i=e._embedded["wp:featuredmedia"][0].media_details.sizes,s=Object.values(i).sort((a,p)=>a.width-p.width).map(a=>`${a.source_url} ${a.width}w`).join(",");return f.default.createElement(Oe,{className:t,href:e.link},f.default.createElement(Ve,null,f.default.createElement("picture",{ref:r},f.default.createElement("source",{"data-srcset":s,sizes:"(max-width: 767px) 240px, 300px"}),f.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),f.default.createElement(c,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},xe(e.title.rendered)),f.default.createElement(c,{size:"sm",lineHeight:1.5,weight:400},xe(e.excerpt.rendered)))};V.propTypes={data:ie.default.object.isRequired,className:ie.default.string};var N=o(require("react")),S=o(require("prop-types")),ke=o(require("styled-components"));var h=o(require("react")),q=o(require("prop-types")),W=o(require("styled-components")),we=o(require("keen-slider/react")),Q=o(require("react-feather"));var qe={loop:!0,duration:300},_e=W.default.div`
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
`,Fe=W.default.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${ne} & {
      --nav-inset: 2rem;
      bottom: auto;
      top: var(--nav-inset);
    }
  }

  @media (max-width: 1280px) {
    --nav-inset: 0.75rem;
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`,ye=W.default.button`
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
`,Me=W.default.div`
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
`,_=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:i=0,offsetStart:n})=>{let[s,a]=(0,we.useKeenSlider)({...qe,slidesPerView:t,spacing:i,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),p=()=>{a.prev()},d=()=>{a.next()};return h.default.createElement(_e,{className:"keen-wrapper",offsetStart:n,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":n,"data-spacing":i},h.default.createElement(Me,{offsetStart:n,slidesPerView:t,slidesPerViewMob:r},h.default.createElement("div",{ref:s,className:"keen-slider"},h.default.Children.map(e,l=>h.default.cloneElement(l,{className:"keen-slider__slide"},l.props.children)))),h.default.createElement(Fe,null,h.default.createElement(ye,{className:"keen-prev",onClick:()=>p()},h.default.createElement(Q.ArrowLeft,{size:18})),h.default.createElement(ye,{className:"keen-next",onClick:()=>d()},h.default.createElement(Q.ArrowRight,{size:18}))))};_.propTypes={slidesPerView:q.default.number,slidesPerViewMob:q.default.number,spacing:q.default.number,offsetStart:q.default.number};var Ae=o(require("swr"));var be=o(require("axios")),ve=e=>be.default.get(e).then(t=>t.data);var ne=ke.default.div`
  width: 100%;
`,Le=e=>{let{isCarousel:t,children:r,slidesPerView:i,slidesPerViewMob:n,spacing:s,offsetStart:a}=e;return t?N.default.createElement(_,{slidesPerView:i,spacing:s,slidesPerViewMob:n,offsetStart:a},r):r},se=e=>{let{postIds:t}=e,r=t.join(","),{data:i,error:n}=(0,Ae.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,ve);return n?N.default.createElement("div",null,"failed to load"):i?N.default.createElement(ne,null,N.default.createElement(Le,{...e},i.map((s,a)=>N.default.createElement(V,{key:a,data:s})))):N.default.createElement("div",null,"loading...")};se.propTypes={postIds:S.default.array.isRequired,isCarousel:S.default.bool,slidesPerView:S.default.number,slidesPerViewMob:S.default.number,spacing:S.default.number,offsetStart:S.default.number};var Z=o(require("react")),I=o(require("prop-types"));var J=o(require("styled-components")),$e=J.default.a`
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
`,De=(0,J.default)($e)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,Ue=(0,J.default)($e)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,F=({text:e,link:t,variant:r,className:i,onClick:n,icon:s})=>{let a,p=s;if(r==="fill")a=De;else if(r==="outline")a=Ue;else throw new Error(`Unrecognized Button variant: ${r}`);return Z.default.createElement(a,{href:t,as:t?"a":"button",className:i,onClick:n,icon:s,text:e},s&&Z.default.createElement(p,{size:16}),Z.default.createElement(c,{size:"base",heading:!0},e))};F.propTypes={link:I.default.string,text:I.default.string.isRequired,variant:I.default.oneOf(["outline","fill"]),className:I.default.string,onClick:I.default.func,icon:I.default.elementType};var y=o(require("prop-types")),pe=o(require("react")),M=o(require("styled-components"));var Ce=o(require("styled-components")),le=o(require("prop-types")),A=Ce.default.section`
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
`;A.propTypes={maxWidth:le.default.oneOf(["none","sm","md","lg","xl","2xl"]),padding:le.default.bool};var Ye=M.default.div`
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
  ${e=>typeof e.itemFlex=="string"&&M.css`
      > * {
        flex: ${t=>t.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&M.css`
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
`,X=e=>{let{children:t,gap:r,direction:i,align:n,justify:s,maxWidth:a,itemFlex:p,padding:d}=e;return pe.default.createElement(A,{maxWidth:a,padding:d},pe.default.createElement(Ye,{gap:r,align:n,justify:s,direction:i,style:{"--flex-gap":e.gap},itemFlex:p},t))};X.propTypes={gap:y.default.number,align:y.default.string,justify:y.default.string,direction:y.default.string,itemFlex:y.default.oneOfType([y.default.string,y.default.array]),padding:y.default.bool,maxWidth:y.default.oneOf(["none","sm","md","lg","xl","2xl"])};X.defaultProps={gap:1,direction:"row"};var Te=o(require("react")),L=o(require("prop-types"));var Be=o(require("styled-components")),Ke=(0,Be.default)(A)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,R=e=>{let{children:t}=e;return Te.default.createElement(Ke,{...e},t)};R.propTypes={gap:L.default.number,wrapWidth:L.default.number,padding:L.default.bool,maxWidth:L.default.oneOf(["none","sm","md","lg","xl","2xl"])};R.defaultProps={gap:1,wrapWidth:340};var P=o(require("react")),m=o(require("prop-types")),U=o(require("styled-components"));var x=o(require("react")),b=o(require("prop-types")),We=o(require("styled-components")),Ge=We.default.div`
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
`,C=e=>{let{width:t,alt:r,src:i,quality:n,sizes:s,height:a,backgroundColor:p,className:d}=e,l=(0,x.useRef)(null);(0,x.useEffect)(()=>{let u=K=>{K.forEach(oe=>{if(oe.isIntersecting){let E=Array.from(l.current.querySelectorAll("source"));l.current.lastChild.classList.add("loaded"),E.forEach(ge=>{ge.srcset=ge.dataset.srcset})}})},w={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},$=new IntersectionObserver(u,w);return $.observe(l.current.querySelector("img")),()=>$.disconnect()},[l]);let v=[.25,.5,1,1.25,1.5,2,2.5],z=["webp","jpeg"],T=({type:u,width:w,src:$})=>{let K=v.flatMap(oe=>{let E=w*oe;return E<1920?`${$}.${u}?w=${E}&qlt=${n} ${E}w`:[]});return B||K.push(`${$}.${u}?w=1920&qlt=${n} 1920w`),K.join(",")},B=Array.isArray(i),re=B?i[0]:i,H;return B&&([,...H]=i),x.default.createElement(Ge,{width:t,height:a,backgroundColor:p,isArtDirected:B,artDirectedImages:H,className:d},x.default.createElement("div",null),x.default.createElement("picture",{ref:l},B&&H.map(u=>z.map((w,$)=>x.default.createElement("source",{key:$,type:`image/${w}`,"data-srcset":T({type:w,...u,isArtDirected:!0}),sizes:s,media:u.media}))),z.map((u,w)=>x.default.createElement("source",{key:w,type:`image/${u}`,"data-srcset":T({type:u,width:t,src:re,isArtDirected:!1}),sizes:s})),x.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};C.propTypes={width:b.default.number,alt:b.default.string.isRequired,src:b.default.oneOfType([b.default.string,b.default.array]).isRequired,quality:b.default.number,sizes:b.default.string,height:b.default.number,backgroundColor:b.default.string};C.defaultProps={backgroundColor:"#ECECF2",quality:80,alt:"image component",height:240,width:240};var de=o(require("react")),D=o(require("styled-components")),g=o(require("prop-types"));var Qe=D.default.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>e.direction==="column"&&D.css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>e.direction==="row"&&D.css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,j=e=>{let{as:t,direction:r,gap:i,align:n,justify:s,className:a,children:p,maxWidth:d,style:l,padding:v}=e;return de.default.createElement(A,{maxWidth:d,padding:v},de.default.createElement(Qe,{className:a,as:t,align:n,justify:s,direction:r,style:{...l,"--stack-gap":i}},p))};j.propTypes={as:g.default.string,className:g.default.string,style:g.default.string,gap:g.default.number,align:g.default.string,justify:g.default.string,direction:g.default.string,itemFlex:g.default.oneOfType([g.default.string,g.default.array]),padding:g.default.bool,maxWidth:g.default.oneOf(["none","sm","md","lg","xl","2xl"])};j.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var Ze=(0,U.default)(c)`
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
`,Je=U.default.a`
  --padding: 1rem;
  --content-gap: 0.5;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,Xe=(0,U.default)(j)`
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
`,Re=U.default.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,ee=e=>{let{className:t,buttonText:r="shop now",link:i,logo:n,subcopy:s,noContentBackground:a,noLogoBackground:p,contentBackground:d,contentColor:l,width:v,height:z,sizes:T,alt:B,src:re}=e,H={width:v,height:z,sizes:T,src:re,alt:B},u={"--padding":0,"--background":"none","--content-gap":1.5,"--color":l||"var(--primary-black)"},w={"--background":"none","--padding":"none"};return P.default.createElement(Je,{href:i,style:a?{...u}:{...{"--background":d||"var(--primary-black)","--color":l||"var(--primary-white)"}},className:t,contentColor:l,contentBackground:d},P.default.createElement(C,{...H}),P.default.createElement(Xe,{gap:"var(--content-gap)",noContentBackground:a},P.default.createElement(Re,{src:n,alt:"logo",style:p?{...w}:{}}),P.default.createElement(Ze,null,s),P.default.createElement(F,{text:r,variant:"fill"})))};ee.propTypes={className:m.default.string,buttonText:m.default.string,link:m.default.string.isRequired,logo:m.default.string,subcopy:m.default.string,contentBackground:m.default.string,contentColor:m.default.string,alt:m.default.string.isRequired,src:m.default.array.isRequired,width:m.default.number,height:m.default.number,sizes:m.default.string,noLogoBackground:m.default.bool,noContentBackground:m.default.bool};ee.defaultProps={width:1440,height:640,sizes:"100vw"};var Y=o(require("react")),me=o(require("styled-components")),ce=o(require("prop-types"));var et=me.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,tt=(0,me.default)(c)`
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
`,te=e=>{let{text:t,link:r,className:i,...n}=e;return Y.default.createElement(et,{className:i},Y.default.createElement("a",{href:r},Y.default.createElement(C,{...n}),t&&Y.default.createElement(tt,{heading:!0},t)))};te.propTypes={link:ce.default.string,text:ce.default.string};te.defaultProps={link:"/new-in",width:240,height:240,alt:"grid item alt",src:"https://media.missguided.com/i/missguided/playboy_storybook_default",sizes:"(max-width: 767px) 50vw, 298px"};0&&(module.exports={Blogpost,Blogposts,Button,Carousel,Flex,Grid,HeroBanner,Image,Row,ShoppableImage,Stack,Text});
