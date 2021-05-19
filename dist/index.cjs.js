var Pe=Object.create,Z=Object.defineProperty;var je=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var ye=e=>Z(e,"__esModule",{value:!0});var Ve=(e,t)=>{for(var r in t)Z(e,r,{get:t[r],enumerable:!0})},qe=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of He(t))!Oe.call(e,o)&&o!=="default"&&Z(e,o,{get:()=>t[o],enumerable:!(r=je(t,o))||r.enumerable});return e},i=e=>qe(ye(Z(e!=null?Pe(Ee(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);ye(exports);Ve(exports,{Blogpost:()=>F,Blogposts:()=>pe,Button:()=>H,Carousel:()=>L,Flex:()=>ee,Grid:()=>te,HeroBanner:()=>re,Image:()=>z,ImageRow:()=>oe,Row:()=>T,ShoppableImage:()=>G,Stack:()=>E,Text:()=>c});var u=i(require("react")),se=i(require("prop-types"));var we=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};var le=i(require("styled-components"));var ve=i(require("react")),$=i(require("prop-types")),q=i(require("styled-components")),Fe=q.default.p`
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

  ${e=>e.heading&&q.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&q.css`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,c=e=>{let{element:t,children:r,size:o,align:n,heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:x}=e;return ve.default.createElement(Fe,{as:t,style:{fontSize:`var(--text-${o})`,textAlign:n},heading:s,className:a,lineHeight:p,weight:d,spacing:l,truncate:x},r)};c.propTypes={heading:$.default.bool,align:$.default.oneOf(["left","center","right"]),size:$.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:$.default.string,weight:$.default.number,lineHeight:$.default.number,children:$.default.string,truncate:$.default.number};c.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var _e=le.default.a`
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
`,be=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return we(t)},F=({data:e,className:t})=>{let r=(0,u.useRef)(null);(0,u.useEffect)(()=>{let a=l=>{l.forEach(x=>{if(x.isIntersecting){let S=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),S.forEach(A=>{A.srcset=A.dataset.srcset})}})},p={threshold:0,root:null},d=new IntersectionObserver(a,p);return d.observe(r.current.querySelector("img")),()=>d.disconnect()},[r]);let o=e._embedded["wp:featuredmedia"][0].media_details.sizes,s=Object.values(o).sort((a,p)=>a.width-p.width).map(a=>`${a.source_url} ${a.width}w`).join(",");return u.default.createElement(_e,{className:t,href:e.link},u.default.createElement(Le,null,u.default.createElement("picture",{ref:r},u.default.createElement("source",{"data-srcset":s,sizes:"(max-width: 767px) 240px, 300px"}),u.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),u.default.createElement(c,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},be(e.title.rendered)),u.default.createElement(c,{size:"sm",lineHeight:1.5,weight:400},be(e.excerpt.rendered)))};F.propTypes={data:se.default.object.isRequired,className:se.default.string};var N=i(require("react")),P=i(require("prop-types")),Te=i(require("styled-components"));var y=i(require("react")),_=i(require("prop-types")),I=i(require("styled-components")),ke=i(require("keen-slider/react")),J=i(require("react-feather"));var Me={loop:!0,duration:300},De=I.default.div`
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
`,Ue=I.default.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${de} & {
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
`,Ae=I.default.button`
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
`,L=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:o=0,offsetStart:n})=>{let[s,a]=(0,ke.useKeenSlider)({...Me,slidesPerView:t,spacing:o,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),p=()=>{a.prev()},d=()=>{a.next()};return y.default.createElement(De,{className:"keen-wrapper",offsetStart:n,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":n,"data-spacing":o},y.default.createElement(Ye,{offsetStart:n,slidesPerView:t,slidesPerViewMob:r},y.default.createElement("div",{ref:s,className:"keen-slider"},y.default.Children.map(e,l=>y.default.cloneElement(l,{className:"keen-slider__slide"},l.props.children)))),y.default.createElement(Ue,null,y.default.createElement(Ae,{className:"keen-prev",onClick:()=>p()},y.default.createElement(J.ArrowLeft,{size:18})),y.default.createElement(Ae,{className:"keen-next",onClick:()=>d()},y.default.createElement(J.ArrowRight,{size:18}))))};L.propTypes={slidesPerView:_.default.number,slidesPerViewMob:_.default.number,spacing:_.default.number,offsetStart:_.default.number};var Se=i(require("swr"));var $e=i(require("axios")),Ce=e=>$e.default.get(e).then(t=>t.data);var de=Te.default.div`
  width: 100%;
`,Ke=e=>{let{isCarousel:t,children:r,slidesPerView:o,slidesPerViewMob:n,spacing:s,offsetStart:a}=e;return t?N.default.createElement(L,{slidesPerView:o,spacing:s,slidesPerViewMob:n,offsetStart:a},r):r},pe=e=>{let{postIds:t}=e,r=t.join(","),{data:o,error:n}=(0,Se.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,Ce);return n?N.default.createElement("div",null,"failed to load"):o?N.default.createElement(de,null,N.default.createElement(Ke,{...e},o.map((s,a)=>N.default.createElement(F,{key:a,data:s})))):N.default.createElement("div",null,"loading...")};pe.propTypes={postIds:P.default.array.isRequired,isCarousel:P.default.bool,slidesPerView:P.default.number,slidesPerViewMob:P.default.number,spacing:P.default.number,offsetStart:P.default.number};var X=i(require("react")),C=i(require("prop-types"));var R=i(require("styled-components")),Ge={sm:{fontSize:"sm",padding:"0.5rem 0.75rem",iconSize:"14"},md:{fontSize:"base",padding:"0.75rem 1rem",iconSize:"16"},lg:{fontSize:"md",padding:"1rem 1.25rem",iconSize:"18"}},Be=R.default.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  width: ${e=>e.isFullWidth?"100%":"fit-content"};
  border: 1px solid var(--primary-black);
  padding: ${e=>e.text?e.padding:"1rem"};
  background: inherit;
  border-radius: var(--border-radius);
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  svg {
    display: block;
    margin-right: ${e=>e.text&&e.icon&&"0.35rem"};
  }
`,Qe=(0,R.default)(Be)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,Ze=(0,R.default)(Be)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,H=({text:e,link:t,variant:r,className:o,onClick:n,icon:s,isFullWidth:a,size:p="md"})=>{let d,l=s,{padding:x,fontSize:S,iconSize:A}=Ge[p];if(r==="fill")d=Qe;else if(r==="outline")d=Ze;else throw new Error(`Unrecognized Button variant: ${r}`);return X.default.createElement(d,{href:t,as:t?"a":"button",className:o,onClick:n,icon:s,text:e,isFullWidth:a,padding:x},s&&X.default.createElement(l,{size:A}),X.default.createElement(c,{size:S,heading:!0},e))};H.defaultProps={size:"md",variant:"fill",onClick:void 0};H.propTypes={link:C.default.string,text:C.default.string,variant:C.default.oneOf(["outline","fill"]),className:C.default.string,onClick:C.default.func,icon:C.default.elementType,isFullWidth:C.default.bool,size:C.default.oneOf(["sm","md","lg"])};var b=i(require("prop-types")),ce=i(require("react")),M=i(require("styled-components"));var ze=i(require("styled-components")),me=i(require("prop-types")),T=ze.default.section`
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
`;T.propTypes={maxWidth:me.default.oneOf(["none","sm","md","lg","xl","2xl"]),padding:me.default.bool};var Je=M.default.div`
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
`,ee=e=>{let{children:t,gap:r,direction:o,align:n,justify:s,maxWidth:a,itemFlex:p,padding:d}=e;return ce.default.createElement(T,{maxWidth:a,padding:d},ce.default.createElement(Je,{gap:r,align:n,justify:s,direction:o,style:{"--flex-gap":e.gap},itemFlex:p},t))};ee.propTypes={gap:b.default.number,align:b.default.string,justify:b.default.string,direction:b.default.string,itemFlex:b.default.oneOfType([b.default.string,b.default.array]),padding:b.default.bool,maxWidth:b.default.oneOf(["none","sm","md","lg","xl","2xl"])};ee.defaultProps={gap:1,direction:"row"};var We=i(require("react")),D=i(require("prop-types"));var Ie=i(require("styled-components")),Xe=(0,Ie.default)(T)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,te=e=>{let{children:t}=e;return We.default.createElement(Xe,{...e},t)};te.propTypes={gap:D.default.number,wrapWidth:D.default.number,padding:D.default.bool,maxWidth:D.default.oneOf(["none","sm","md","lg","xl","2xl"])};te.defaultProps={gap:1,wrapWidth:340};var j=i(require("react")),m=i(require("prop-types")),Y=i(require("styled-components"));var w=i(require("react")),k=i(require("prop-types")),Ne=i(require("styled-components")),Re=Ne.default.div`
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
`,z=e=>{let{width:t,alt:r,src:o,quality:n,sizes:s,height:a,backgroundColor:p,className:d}=e,l=(0,w.useRef)(null);(0,w.useEffect)(()=>{let f=Q=>{Q.forEach(ne=>{if(ne.isIntersecting){let V=Array.from(l.current.querySelectorAll("source"));l.current.lastChild.classList.add("loaded"),V.forEach(xe=>{xe.srcset=xe.dataset.srcset})}})},v={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},B=new IntersectionObserver(f,v);return B.observe(l.current.querySelector("img")),()=>B.disconnect()},[l]);let x=[.25,.5,1,1.25,1.5,2,2.5],S=["webp","jpeg"],A=({type:f,width:v,src:B})=>{let Q=x.flatMap(ne=>{let V=v*ne;return V<1920?`${B}.${f}?w=${V}&qlt=${n} ${V}w`:[]});return W||Q.push(`${B}.${f}?w=1920&qlt=${n} 1920w`),Q.join(",")},W=Array.isArray(o),ae=W?o[0]:o,O;return W&&([,...O]=o),w.default.createElement(Re,{width:t,height:a,backgroundColor:p,isArtDirected:W,artDirectedImages:O,className:d},w.default.createElement("div",null),w.default.createElement("picture",{ref:l},W&&O.map(f=>S.map((v,B)=>w.default.createElement("source",{key:B,type:`image/${v}`,"data-srcset":A({type:v,...f,isArtDirected:!0}),sizes:s,media:f.media}))),S.map((f,v)=>w.default.createElement("source",{key:v,type:`image/${f}`,"data-srcset":A({type:f,width:t,src:ae,isArtDirected:!1}),sizes:s})),w.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};z.propTypes={width:k.default.number,alt:k.default.string.isRequired,src:k.default.oneOfType([k.default.string,k.default.array]).isRequired,quality:k.default.number,sizes:k.default.string,height:k.default.number,backgroundColor:k.default.string};z.defaultProps={backgroundColor:"#ECECF2",quality:80};var ge=i(require("react")),U=i(require("styled-components")),g=i(require("prop-types"));var et=U.default.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>e.direction==="column"&&U.css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>e.direction==="row"&&U.css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,E=e=>{let{as:t,direction:r,gap:o,align:n,justify:s,className:a,children:p,maxWidth:d,style:l,padding:x}=e;return ge.default.createElement(T,{maxWidth:d,padding:x},ge.default.createElement(et,{className:a,as:t,align:n,justify:s,direction:r,style:{...l,"--stack-gap":o}},p))};E.propTypes={as:g.default.string,className:g.default.string,style:g.default.string,gap:g.default.number,align:g.default.string,justify:g.default.string,direction:g.default.string,itemFlex:g.default.oneOfType([g.default.string,g.default.array]),padding:g.default.bool,maxWidth:g.default.oneOf(["none","sm","md","lg","xl","2xl"])};E.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var tt=(0,Y.default)(c)`
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
`,rt=Y.default.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,it=(0,Y.default)(E)`
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
`,ot=Y.default.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,re=e=>{let{className:t,buttonText:r="shop now",link:o,logo:n,subcopy:s,noContentBackground:a,noLogoBackground:p,contentBackground:d,contentColor:l,width:x,height:S,sizes:A,alt:W,src:ae}=e,O={width:x,height:S,sizes:A,src:ae,alt:W},f={"--padding":0,"--background":"none","--color":l||"var(--primary-black)"},v={"--background":"none","--padding":"none"};return j.default.createElement(rt,{href:o,style:a?{...f}:{...{"--background":d||"var(--primary-black)","--color":l||"var(--primary-white)"}},className:t,contentColor:l,contentBackground:d},j.default.createElement(z,{...O}),j.default.createElement(it,{gap:a?1.5:.5,noContentBackground:a},j.default.createElement(ot,{src:n,alt:"logo",style:p?{...v}:{}}),j.default.createElement(tt,null,s),j.default.createElement(H,{text:r,variant:"fill"})))};re.propTypes={className:m.default.string,buttonText:m.default.string,link:m.default.string.isRequired,logo:m.default.string,subcopy:m.default.string,contentBackground:m.default.string,contentColor:m.default.string,alt:m.default.string.isRequired,src:m.default.array.isRequired,width:m.default.number,height:m.default.number,sizes:m.default.string,noLogoBackground:m.default.bool,noContentBackground:m.default.bool};re.defaultProps={width:1440,height:640,sizes:"100vw"};var he=i(require("react")),ie=i(require("prop-types")),h=i(require("styled-components"));var K=i(require("react")),fe=i(require("styled-components")),ue=i(require("prop-types"));var at=fe.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,nt=(0,fe.default)(c)`
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
`,G=e=>{let{text:t,link:r,className:o,...n}=e;return K.default.createElement(at,{className:o},K.default.createElement("a",{href:r},K.default.createElement(z,{...n}),t&&K.default.createElement(nt,{heading:!0},t)))};G.propTypes={link:ue.default.string,text:ue.default.string};var st=h.default.div`
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

    ${e=>e.layout==="contrast"&&h.css`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${e=>e.layout==="overlap"&&h.css`
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

    ${e=>e.layout==="overlap"&&e.reverse&&h.css`
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

    ${e=>e.layout==="sidebyside"&&h.css`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${e=>e.layout==="padded"&&h.css`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${e=>e.layout==="contrast"&&h.css`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${e=>e.layout==="overlap"&&h.css`
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

    ${e=>e.layout==="overlap"&&e.reverse&&h.css`
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

    ${e=>e.layout==="sidebyside"&&h.css`
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
`,lt={contrast:[{width:432,height:510,sizes:"(max-width: 600px) 100vw, 30vw"},{width:720,height:800,sizes:"(max-width: 600px) 100vw, 50vw"}],sidebyside:[{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"}],overlap:[{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"}]},oe=({layout:e,reverse:t,images:r})=>he.default.createElement(st,{layout:e,reverse:t},r.map((o,n)=>{let s=lt[e][n],a={...o,...s};return he.default.createElement(G,{...a})}));oe.defaultProps={layout:"sidebyside"};oe.propTypes={layout:ie.default.oneOf(["contrast","sidebyside","overlap"]),reverse:ie.default.bool,images:ie.default.array};0&&(module.exports={Blogpost,Blogposts,Button,Carousel,Flex,Grid,HeroBanner,Image,ImageRow,Row,ShoppableImage,Stack,Text});
