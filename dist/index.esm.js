import S,{useRef as Ae,useEffect as $e}from"react";import ae from"prop-types";var ie=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};import ne from"styled-components";import ve from"react";import A from"prop-types";import be,{css as oe}from"styled-components";var ke=be.p`
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

  ${e=>e.heading&&oe`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&oe`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,c=e=>{let{element:t,children:r,size:i,align:a,heading:n,className:o,lineHeight:d,weight:l,spacing:s,truncate:f}=e;return ve.createElement(ke,{as:t,style:{fontSize:`var(--text-${i})`,textAlign:a},heading:n,className:o,lineHeight:d,weight:l,spacing:s,truncate:f},r)};c.propTypes={heading:A.bool,align:A.oneOf(["left","center","right"]),size:A.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:A.string,weight:A.number,lineHeight:A.number,children:A.string,truncate:A.number};c.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var Ce=ne.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,Te=ne.div`
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
`,se=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return ie(t)},V=({data:e,className:t})=>{let r=Ae(null);$e(()=>{let o=s=>{s.forEach(f=>{if(f.isIntersecting){let b=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),b.forEach(x=>{x.srcset=x.dataset.srcset})}})},d={threshold:0,root:null},l=new IntersectionObserver(o,d);return l.observe(r.current.querySelector("img")),()=>l.disconnect()},[r]);let i=e._embedded["wp:featuredmedia"][0].media_details.sizes,n=Object.values(i).sort((o,d)=>o.width-d.width).map(o=>`${o.source_url} ${o.width}w`).join(",");return S.createElement(Ce,{className:t,href:e.link},S.createElement(Te,null,S.createElement("picture",{ref:r},S.createElement("source",{"data-srcset":n,sizes:"(max-width: 767px) 240px, 300px"}),S.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),S.createElement(c,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},se(e.title.rendered)),S.createElement(c,{size:"sm",lineHeight:1.5,weight:400},se(e.excerpt.rendered)))};V.propTypes={data:ae.object.isRequired,className:ae.string};import z from"react";import W from"prop-types";import Ee from"styled-components";import h from"react";import q from"prop-types";import F,{css as Se}from"styled-components";import{useKeenSlider as Be}from"keen-slider/react";import{ArrowLeft as ze,ArrowRight as We}from"react-feather";var Ie={loop:!0,duration:300},Ne=F.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&Se`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,Pe=F.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${G} & {
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
`,le=F.button`
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
`,je=F.div`
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
`,_=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:i=0,offsetStart:a})=>{let[n,o]=Be({...Ie,slidesPerView:t,spacing:i,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),d=()=>{o.prev()},l=()=>{o.next()};return h.createElement(Ne,{className:"keen-wrapper",offsetStart:a,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":a,"data-spacing":i},h.createElement(je,{offsetStart:a,slidesPerView:t,slidesPerViewMob:r},h.createElement("div",{ref:n,className:"keen-slider"},h.Children.map(e,s=>h.cloneElement(s,{className:"keen-slider__slide"},s.props.children)))),h.createElement(Pe,null,h.createElement(le,{className:"keen-prev",onClick:()=>d()},h.createElement(ze,{size:18})),h.createElement(le,{className:"keen-next",onClick:()=>l()},h.createElement(We,{size:18}))))};_.propTypes={slidesPerView:q.number,slidesPerViewMob:q.number,spacing:q.number,offsetStart:q.number};import Oe from"swr";import He from"axios";var de=e=>He.get(e).then(t=>t.data);var G=Ee.div`
  width: 100%;
`,Ve=e=>{let{isCarousel:t,children:r,slidesPerView:i,slidesPerViewMob:a,spacing:n,offsetStart:o}=e;return t?z.createElement(_,{slidesPerView:i,spacing:n,slidesPerViewMob:a,offsetStart:o},r):r},pe=e=>{let{postIds:t}=e,r=t.join(","),{data:i,error:a}=Oe(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,de);return a?z.createElement("div",null,"failed to load"):i?z.createElement(G,null,z.createElement(Ve,{...e},i.map((n,o)=>z.createElement(V,{key:o,data:n})))):z.createElement("div",null,"loading...")};pe.propTypes={postIds:W.array.isRequired,isCarousel:W.bool,slidesPerView:W.number,slidesPerViewMob:W.number,spacing:W.number,offsetStart:W.number};import Q from"react";import $ from"prop-types";import Z from"styled-components";var qe={sm:{fontSize:"sm",padding:"0.5rem 0.75rem",iconSize:"14"},md:{fontSize:"base",padding:"0.75rem 1rem",iconSize:"16"},lg:{fontSize:"md",padding:"1rem 1.25rem",iconSize:"18"}},me=Z.a`
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
`,Fe=Z(me)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,_e=Z(me)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,H=({text:e,link:t,variant:r,className:i,onClick:a,icon:n,isFullWidth:o,size:d="md"})=>{let l,s=n,{padding:f,fontSize:b,iconSize:x}=qe[d];if(r==="fill")l=Fe;else if(r==="outline")l=_e;else throw new Error(`Unrecognized Button variant: ${r}`);return Q.createElement(l,{href:t,as:t?"a":"button",className:i,onClick:a,icon:n,text:e,isFullWidth:o,padding:f},n&&Q.createElement(s,{size:x}),Q.createElement(c,{size:b,heading:!0},e))};H.defaultProps={size:"md",variant:"fill",onClick:void 0};H.propTypes={link:$.string,text:$.string,variant:$.oneOf(["outline","fill"]),className:$.string,onClick:$.func,icon:$.elementType,isFullWidth:$.bool,size:$.oneOf(["sm","md","lg"])};import y from"prop-types";import ge from"react";import Me,{css as fe}from"styled-components";import Le from"styled-components";import ce from"prop-types";var C=Le.section`
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
`;C.propTypes={maxWidth:ce.oneOf(["none","sm","md","lg","xl","2xl"]),padding:ce.bool};var De=Me.div`
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
  ${e=>typeof e.itemFlex=="string"&&fe`
      > * {
        flex: ${t=>t.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&fe`
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
`,J=e=>{let{children:t,gap:r,direction:i,align:a,justify:n,maxWidth:o,itemFlex:d,padding:l}=e;return ge.createElement(C,{maxWidth:o,padding:l},ge.createElement(De,{gap:r,align:a,justify:n,direction:i,style:{"--flex-gap":e.gap},itemFlex:d},t))};J.propTypes={gap:y.number,align:y.string,justify:y.string,direction:y.string,itemFlex:y.oneOfType([y.string,y.array]),padding:y.bool,maxWidth:y.oneOf(["none","sm","md","lg","xl","2xl"])};J.defaultProps={gap:1,direction:"row"};import Ue from"react";import L from"prop-types";import Ye from"styled-components";var Ke=Ye(C)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,X=e=>{let{children:t}=e;return Ue.createElement(Ke,{...e},t)};X.propTypes={gap:L.number,wrapWidth:L.number,padding:L.bool,maxWidth:L.oneOf(["none","sm","md","lg","xl","2xl"])};X.defaultProps={gap:1,wrapWidth:340};import N from"react";import p from"prop-types";import M from"styled-components";import I,{useEffect as Ge,useRef as Qe}from"react";import w from"prop-types";import Ze from"styled-components";var Je=Ze.div`
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
`,B=e=>{let{width:t,alt:r,src:i,quality:a,sizes:n,height:o,backgroundColor:d,className:l}=e,s=Qe(null);Ge(()=>{let m=O=>{O.forEach(K=>{if(K.isIntersecting){let j=Array.from(s.current.querySelectorAll("source"));s.current.lastChild.classList.add("loaded"),j.forEach(re=>{re.srcset=re.dataset.srcset})}})},u={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},k=new IntersectionObserver(m,u);return k.observe(s.current.querySelector("img")),()=>k.disconnect()},[s]);let f=[.25,.5,1,1.25,1.5,2,2.5],b=["webp","jpeg"],x=({type:m,width:u,src:k})=>{let O=f.flatMap(K=>{let j=u*K;return j<1920?`${k}.${m}?w=${j}&qlt=${a} ${j}w`:[]});return T||O.push(`${k}.${m}?w=1920&qlt=${a} 1920w`),O.join(",")},T=Array.isArray(i),Y=T?i[0]:i,P;return T&&([,...P]=i),I.createElement(Je,{width:t,height:o,backgroundColor:d,isArtDirected:T,artDirectedImages:P,className:l},I.createElement("div",null),I.createElement("picture",{ref:s},T&&P.map(m=>b.map((u,k)=>I.createElement("source",{key:k,type:`image/${u}`,"data-srcset":x({type:u,...m,isArtDirected:!0}),sizes:n,media:m.media}))),b.map((m,u)=>I.createElement("source",{key:u,type:`image/${m}`,"data-srcset":x({type:m,width:t,src:Y,isArtDirected:!1}),sizes:n})),I.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};B.propTypes={width:w.number,alt:w.string.isRequired,src:w.oneOfType([w.string,w.array]).isRequired,quality:w.number,sizes:w.string,height:w.number,backgroundColor:w.string};B.defaultProps={backgroundColor:"#ECECF2",quality:80};import ue from"react";import Xe,{css as he}from"styled-components";import g from"prop-types";var Re=Xe.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>e.direction==="column"&&he`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>e.direction==="row"&&he`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,E=e=>{let{as:t,direction:r,gap:i,align:a,justify:n,className:o,children:d,maxWidth:l,style:s,padding:f}=e;return ue.createElement(C,{maxWidth:l,padding:f},ue.createElement(Re,{className:o,as:t,align:a,justify:n,direction:r,style:{...s,"--stack-gap":i}},d))};E.propTypes={as:g.string,className:g.string,style:g.string,gap:g.number,align:g.string,justify:g.string,direction:g.string,itemFlex:g.oneOfType([g.string,g.array]),padding:g.bool,maxWidth:g.oneOf(["none","sm","md","lg","xl","2xl"])};E.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var et=M(c)`
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
`,tt=M.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,rt=M(E)`
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
`,it=M.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,R=e=>{let{className:t,buttonText:r="shop now",link:i,logo:a,subcopy:n,noContentBackground:o,noLogoBackground:d,contentBackground:l,contentColor:s,width:f,height:b,sizes:x,alt:T,src:Y}=e,P={width:f,height:b,sizes:x,src:Y,alt:T},m={"--padding":0,"--background":"none","--color":s||"var(--primary-black)"},u={"--background":"none","--padding":"none"};return N.createElement(tt,{href:i,style:o?{...m}:{...{"--background":l||"var(--primary-black)","--color":s||"var(--primary-white)"}},className:t,contentColor:s,contentBackground:l},N.createElement(B,{...P}),N.createElement(rt,{gap:o?1.5:.5,noContentBackground:o},N.createElement(it,{src:a,alt:"logo",style:d?{...u}:{}}),N.createElement(et,null,n),N.createElement(H,{text:r,variant:"fill"})))};R.propTypes={className:p.string,buttonText:p.string,link:p.string.isRequired,logo:p.string,subcopy:p.string,contentBackground:p.string,contentColor:p.string,alt:p.string.isRequired,src:p.array.isRequired,width:p.number,height:p.number,sizes:p.string,noLogoBackground:p.bool,noContentBackground:p.bool};R.defaultProps={width:1440,height:640,sizes:"100vw"};import we from"react";import ee from"prop-types";import nt,{css as v}from"styled-components";import D from"react";import xe from"styled-components";import ye from"prop-types";var ot=xe.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,at=xe(c)`
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
`,U=e=>{let{text:t,link:r,className:i,...a}=e;return D.createElement(ot,{className:i},D.createElement("a",{href:r},D.createElement(B,{...a}),t&&D.createElement(at,{heading:!0},t)))};U.propTypes={link:ye.string,text:ye.string};var st=nt.div`
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

    ${e=>e.layout==="contrast"&&v`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${e=>e.layout==="overlap"&&v`
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

    ${e=>e.layout==="overlap"&&e.reverse&&v`
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

    ${e=>e.layout==="sidebyside"&&v`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${e=>e.layout==="padded"&&v`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${e=>e.layout==="contrast"&&v`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${e=>e.layout==="overlap"&&v`
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

    ${e=>e.layout==="overlap"&&e.reverse&&v`
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

    ${e=>e.layout==="sidebyside"&&v`
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
`,lt={contrast:[{width:432,height:510,sizes:"(max-width: 600px) 100vw, 30vw"},{width:720,height:800,sizes:"(max-width: 600px) 100vw, 50vw"}],sidebyside:[{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"}],overlap:[{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"}]},te=({layout:e,reverse:t,images:r})=>we.createElement(st,{layout:e,reverse:t},r.map((i,a)=>{let n=lt[e][a],o={...i,...n};return we.createElement(U,{...o})}));te.defaultProps={layout:"sidebyside"};te.propTypes={layout:ee.oneOf(["contrast","sidebyside","overlap"]),reverse:ee.bool,images:ee.array};export{V as Blogpost,pe as Blogposts,H as Button,_ as Carousel,J as Flex,X as Grid,R as HeroBanner,B as Image,te as ImageRow,C as Row,U as ShoppableImage,E as Stack,c as Text};
