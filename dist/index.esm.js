import $,{useRef as ye,useEffect as be}from"react";import re from"prop-types";var ee=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};import oe from"styled-components";import he from"react";import b from"prop-types";import xe,{css as te}from"styled-components";var we=xe.p`
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

  ${e=>e.heading&&te`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&te`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,c=e=>{let{element:t,children:r,size:o,align:a,heading:n,className:i,lineHeight:l,weight:p,spacing:s,truncate:h}=e;return he.createElement(we,{as:t,style:{fontSize:`var(--text-${o})`,textAlign:a},heading:n,className:i,lineHeight:l,weight:p,spacing:s,truncate:h},r)};c.propTypes={heading:b.bool,align:b.oneOf(["left","center","right"]),size:b.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:b.string,weight:b.number,lineHeight:b.number,children:b.string,truncate:b.number};c.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var ve=oe.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,ke=oe.div`
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
`,ie=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return ee(t)},E=({data:e,className:t})=>{let r=ye(null);be(()=>{let i=s=>{s.forEach(h=>{if(h.isIntersecting){let T=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),T.forEach(k=>{k.srcset=k.dataset.srcset})}})},l={threshold:0,root:null},p=new IntersectionObserver(i,l);return p.observe(r.current.querySelector("img")),()=>p.disconnect()},[r]);let o=e._embedded["wp:featuredmedia"][0].media_details.sizes,n=Object.values(o).sort((i,l)=>i.width-l.width).map(i=>`${i.source_url} ${i.width}w`).join(",");return $.createElement(ve,{className:t,href:e.link},$.createElement(ke,null,$.createElement("picture",{ref:r},$.createElement("source",{"data-srcset":n,sizes:"(max-width: 767px) 240px, 300px"}),$.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),$.createElement(c,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},ie(e.title.rendered)),$.createElement(c,{size:"sm",lineHeight:1.5,weight:400},ie(e.excerpt.rendered)))};E.propTypes={data:re.object.isRequired,className:re.string};import B from"react";import W from"prop-types";import Pe from"styled-components";import f from"react";import O from"prop-types";import V,{css as Ae}from"styled-components";import{useKeenSlider as $e}from"keen-slider/react";import{ArrowLeft as Ce,ArrowRight as Te}from"react-feather";var Be={loop:!0,duration:300},We=V.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&Ae`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,Ne=V.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${Y} & {
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
`,ae=V.button`
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
`,Se=V.div`
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
`,q=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:o=0,offsetStart:a})=>{let[n,i]=$e({...Be,slidesPerView:t,spacing:o,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),l=()=>{i.prev()},p=()=>{i.next()};return f.createElement(We,{className:"keen-wrapper",offsetStart:a,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":a,"data-spacing":o},f.createElement(Se,{offsetStart:a,slidesPerView:t,slidesPerViewMob:r},f.createElement("div",{ref:n,className:"keen-slider"},f.Children.map(e,s=>f.cloneElement(s,{className:"keen-slider__slide"},s.props.children)))),f.createElement(Ne,null,f.createElement(ae,{className:"keen-prev",onClick:()=>l()},f.createElement(Ce,{size:18})),f.createElement(ae,{className:"keen-next",onClick:()=>p()},f.createElement(Te,{size:18}))))};q.propTypes={slidesPerView:O.number,slidesPerViewMob:O.number,spacing:O.number,offsetStart:O.number};import ze from"swr";import Ie from"axios";var ne=e=>Ie.get(e).then(t=>t.data);var Y=Pe.div`
  width: 100%;
`,je=e=>{let{isCarousel:t,children:r,slidesPerView:o,slidesPerViewMob:a,spacing:n,offsetStart:i}=e;return t?B.createElement(q,{slidesPerView:o,spacing:n,slidesPerViewMob:a,offsetStart:i},r):r},se=e=>{let{postIds:t}=e,r=t.join(","),{data:o,error:a}=ze(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,ne);return a?B.createElement("div",null,"failed to load"):o?B.createElement(Y,null,B.createElement(je,{...e},o.map((n,i)=>B.createElement(E,{key:i,data:n})))):B.createElement("div",null,"loading...")};se.propTypes={postIds:W.array.isRequired,isCarousel:W.bool,slidesPerView:W.number,slidesPerViewMob:W.number,spacing:W.number,offsetStart:W.number};import K from"react";import N from"prop-types";import G from"styled-components";var le=G.a`
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
`,He=G(le)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,Ee=G(le)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,_=({text:e,link:t,variant:r,className:o,onClick:a,icon:n})=>{let i,l=n;if(r==="fill")i=He;else if(r==="outline")i=Ee;else throw new Error(`Unrecognized Button variant: ${r}`);return K.createElement(i,{href:t,as:t?"a":"button",className:o,onClick:a,icon:n,text:e},n&&K.createElement(l,{size:16}),K.createElement(c,{size:"base",heading:!0},e))};_.propTypes={link:N.string,text:N.string.isRequired,variant:N.oneOf(["outline","fill"]),className:N.string,onClick:N.func,icon:N.elementType};import x from"prop-types";import de from"react";import Ve,{css as me}from"styled-components";import Oe from"styled-components";import pe from"prop-types";var v=Oe.section`
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
`;v.propTypes={maxWidth:pe.oneOf(["none","sm","md","lg","xl","2xl"]),padding:pe.bool};var qe=Ve.div`
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
  ${e=>typeof e.itemFlex=="string"&&me`
      > * {
        flex: ${t=>t.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&me`
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
`,Q=e=>{let{children:t,gap:r,direction:o,align:a,justify:n,maxWidth:i,itemFlex:l,padding:p}=e;return de.createElement(v,{maxWidth:i,padding:p},de.createElement(qe,{gap:r,align:a,justify:n,direction:o,style:{"--flex-gap":e.gap},itemFlex:l},t))};Q.propTypes={gap:x.number,align:x.string,justify:x.string,direction:x.string,itemFlex:x.oneOfType([x.string,x.array]),padding:x.bool,maxWidth:x.oneOf(["none","sm","md","lg","xl","2xl"])};Q.defaultProps={gap:1,direction:"row"};import _e from"react";import F from"prop-types";import Fe from"styled-components";var Me=Fe(v)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,Z=e=>{let{children:t}=e;return _e.createElement(Me,{...e},t)};Z.propTypes={gap:F.number,wrapWidth:F.number,padding:F.bool,maxWidth:F.oneOf(["none","sm","md","lg","xl","2xl"])};Z.defaultProps={gap:1,wrapWidth:340};import I from"react";import d from"prop-types";import M from"styled-components";import S,{useEffect as Le,useRef as De}from"react";import w from"prop-types";import Ue from"styled-components";var Ye=Ue.div`
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
`,C=e=>{let{width:t,alt:r,src:o,quality:a,sizes:n,height:i,backgroundColor:l,className:p}=e,s=De(null);Le(()=>{let m=H=>{H.forEach(U=>{if(U.isIntersecting){let z=Array.from(s.current.querySelectorAll("source"));s.current.lastChild.classList.add("loaded"),z.forEach(R=>{R.srcset=R.dataset.srcset})}})},u={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},y=new IntersectionObserver(m,u);return y.observe(s.current.querySelector("img")),()=>y.disconnect()},[s]);let h=[.25,.5,1,1.25,1.5,2,2.5],T=["webp","jpeg"],k=({type:m,width:u,src:y})=>{let H=h.flatMap(U=>{let z=u*U;return z<1920?`${y}.${m}?w=${z}&qlt=${a} ${z}w`:[]});return A||H.push(`${y}.${m}?w=1920&qlt=${a} 1920w`),H.join(",")},A=Array.isArray(o),D=A?o[0]:o,P;return A&&([,...P]=o),S.createElement(Ye,{width:t,height:i,backgroundColor:l,isArtDirected:A,artDirectedImages:P,className:p},S.createElement("div",null),S.createElement("picture",{ref:s},A&&P.map(m=>T.map((u,y)=>S.createElement("source",{key:y,type:`image/${u}`,"data-srcset":k({type:u,...m,isArtDirected:!0}),sizes:n,media:m.media}))),T.map((m,u)=>S.createElement("source",{key:u,type:`image/${m}`,"data-srcset":k({type:m,width:t,src:D,isArtDirected:!1}),sizes:n})),S.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};C.propTypes={width:w.number,alt:w.string.isRequired,src:w.oneOfType([w.string,w.array]).isRequired,quality:w.number,sizes:w.string,height:w.number,backgroundColor:w.string};C.defaultProps={backgroundColor:"#ECECF2",quality:80,alt:"image component",height:240,width:240};import ce from"react";import Ke,{css as ge}from"styled-components";import g from"prop-types";var Ge=Ke.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>e.direction==="column"&&ge`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>e.direction==="row"&&ge`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,j=e=>{let{as:t,direction:r,gap:o,align:a,justify:n,className:i,children:l,maxWidth:p,style:s,padding:h}=e;return ce.createElement(v,{maxWidth:p,padding:h},ce.createElement(Ge,{className:i,as:t,align:a,justify:n,direction:r,style:{...s,"--stack-gap":o}},l))};j.propTypes={as:g.string,className:g.string,style:g.string,gap:g.number,align:g.string,justify:g.string,direction:g.string,itemFlex:g.oneOfType([g.string,g.array]),padding:g.bool,maxWidth:g.oneOf(["none","sm","md","lg","xl","2xl"])};j.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var Qe=M(c)`
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
`,Ze=M.a`
  --padding: 1rem;
  --content-gap: 0.5;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,Je=M(j)`
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
`,Xe=M.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,J=e=>{let{className:t,buttonText:r="shop now",link:o,logo:a,subcopy:n,noContentBackground:i,noLogoBackground:l,contentBackground:p,contentColor:s,width:h,height:T,sizes:k,alt:A,src:D}=e,P={width:h,height:T,sizes:k,src:D,alt:A},m={"--padding":0,"--background":"none","--content-gap":1.5,"--color":s||"var(--primary-black)"},u={"--background":"none","--padding":"none"};return I.createElement(Ze,{href:o,style:i?{...m}:{...{"--background":p||"var(--primary-black)","--color":s||"var(--primary-white)"}},className:t,contentColor:s,contentBackground:p},I.createElement(C,{...P}),I.createElement(Je,{gap:"var(--content-gap)",noContentBackground:i},I.createElement(Xe,{src:a,alt:"logo",style:l?{...u}:{}}),I.createElement(Qe,null,n),I.createElement(_,{text:r,variant:"fill"})))};J.propTypes={className:d.string,buttonText:d.string,link:d.string.isRequired,logo:d.string,subcopy:d.string,contentBackground:d.string,contentColor:d.string,alt:d.string.isRequired,src:d.array.isRequired,width:d.number,height:d.number,sizes:d.string,noLogoBackground:d.bool,noContentBackground:d.bool};J.defaultProps={width:1440,height:640,sizes:"100vw"};import L from"react";import ue from"styled-components";import fe from"prop-types";var Re=ue.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,et=ue(c)`
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
`,X=e=>{let{text:t,link:r,className:o,...a}=e;return L.createElement(Re,{className:o},L.createElement("a",{href:r},L.createElement(C,{...a}),t&&L.createElement(et,{heading:!0},t)))};X.propTypes={link:fe.string,text:fe.string};X.defaultProps={link:"/new-in",width:240,height:240,alt:"grid item alt",src:"https://media.missguided.com/i/missguided/playboy_storybook_default",sizes:"(max-width: 767px) 50vw, 298px"};export{E as Blogpost,se as Blogposts,_ as Button,q as Carousel,Q as Flex,Z as Grid,J as HeroBanner,C as Image,v as Row,X as ShoppableImage,j as Stack,c as Text};
