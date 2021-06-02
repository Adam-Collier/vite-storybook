import B,{useRef as Ae,useEffect as $e}from"react";import ae from"prop-types";var ie=e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r};import ne from"styled-components";import ve from"react";import T from"prop-types";import be,{css as oe}from"styled-components";var ke=be.p`
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
`,g=e=>{let{element:t,children:r,size:i,align:a,heading:n,className:o,lineHeight:d,weight:l,spacing:s,truncate:m}=e;return ve.createElement(ke,{as:t,style:{fontSize:`var(--text-${i})`,textAlign:a},heading:n,className:o,lineHeight:d,weight:l,spacing:s,truncate:m},r)};g.propTypes={heading:T.bool,align:T.oneOf(["left","center","right"]),size:T.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:T.string,weight:T.number,lineHeight:T.number,children:T.string,truncate:T.number};g.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};var Te=ne.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,Ce=ne.div`
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
`,se=e=>{let t=e.replace(/(<([^>]+)>)/gi,"");return ie(t)},F=({data:e,className:t})=>{let r=Ae(null);$e(()=>{let o=s=>{s.forEach(m=>{if(m.isIntersecting){let f=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),f.forEach(y=>{y.srcset=y.dataset.srcset})}})},d={threshold:0,root:null},l=new IntersectionObserver(o,d);return l.observe(r.current.querySelector("img")),()=>l.disconnect()},[r]);let i=e._embedded["wp:featuredmedia"][0].media_details.sizes,n=Object.values(i).sort((o,d)=>o.width-d.width).map(o=>`${o.source_url} ${o.width}w`).join(",");return B.createElement(Te,{className:t,href:e.link},B.createElement(Ce,null,B.createElement("picture",{ref:r},B.createElement("source",{"data-srcset":n,sizes:"(max-width: 767px) 240px, 300px"}),B.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),B.createElement(g,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},se(e.title.rendered)),B.createElement(g,{size:"sm",lineHeight:1.5,weight:400},se(e.excerpt.rendered)))};F.propTypes={data:ae.object.isRequired,className:ae.string};import W from"react";import I from"prop-types";import Ee from"styled-components";import x from"react";import _ from"prop-types";import L,{css as Be}from"styled-components";import{useKeenSlider as Se}from"keen-slider/react";import{ArrowLeft as ze,ArrowRight as We}from"react-feather";var Ie={loop:!0,duration:300},Ne=L.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&Be`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,Pe=L.div`
  --nav-inset: 2rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1024px) {
    ${G} & {
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
`,le=L.button`
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
`,He=L.div`
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
`,M=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:i=0,offsetStart:a})=>{let[n,o]=Se({...Ie,slidesPerView:t,spacing:i,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}),d=()=>{o.prev()},l=()=>{o.next()};return x.createElement(Ne,{className:"keen-wrapper",offsetStart:a,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":a,"data-spacing":i},x.createElement(He,{offsetStart:a,slidesPerView:t,slidesPerViewMob:r},x.createElement("div",{ref:n,className:"keen-slider"},x.Children.map(e,s=>x.cloneElement(s,{className:"keen-slider__slide"},s.props.children)))),x.createElement(Pe,null,x.createElement(le,{className:"keen-prev",onClick:()=>d()},x.createElement(ze,{size:18})),x.createElement(le,{className:"keen-next",onClick:()=>l()},x.createElement(We,{size:18}))))};M.propTypes={slidesPerView:_.number,slidesPerViewMob:_.number,spacing:_.number,offsetStart:_.number};import Oe from"swr";import je from"axios";var de=e=>je.get(e).then(t=>t.data);var G=Ee.div`
  width: 100%;
`,Ve=e=>{let{isCarousel:t,children:r,slidesPerView:i,slidesPerViewMob:a,spacing:n,offsetStart:o}=e;return t?W.createElement(M,{slidesPerView:i,spacing:n,slidesPerViewMob:a,offsetStart:o},r):r},pe=e=>{let{postIds:t}=e,r=t.join(","),{data:i,error:a}=Oe(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,de);return a?W.createElement("div",null,"failed to load"):i?W.createElement(G,null,W.createElement(Ve,{...e},i.map((n,o)=>W.createElement(F,{key:o,data:n})))):W.createElement("div",null,"loading...")};pe.propTypes={postIds:I.array.isRequired,isCarousel:I.bool,slidesPerView:I.number,slidesPerViewMob:I.number,spacing:I.number,offsetStart:I.number};import Q from"react";import b from"prop-types";import Z from"styled-components";var qe={sm:{fontSize:"sm",padding:"0.5rem 0.75rem",iconSize:"14"},md:{fontSize:"base",padding:"0.75rem 1rem",iconSize:"16"},lg:{fontSize:"md",padding:"1rem 1.25rem",iconSize:"18"}},Fe={primary:{background:"var(--primary-black)",color:"var(--primary-white)",backgroundHover:"var(--primary-black-hover)",colorHover:"var(--primary-white-hover)"},secondary:{background:"var(--primary-white)",color:"var(--primary-black)",backgroundHover:"var(--primary-white-hover)",colorHover:"var(--primary-black-hover)",borderColor:"var(--primary-black)"}},me=Z.a`
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

  svg {
    display: block;
    margin-right: ${e=>e.text&&e.icon&&"0.35rem"};
  }
`,_e=Z(me)`
  background: ${e=>e.type.background};
  color: ${e=>e.type.color};
  border-color: ${e=>e.type.borderColor};

  &:hover {
    background: ${e=>e.type.backgroundHover};
  }
`,Le=Z(me)`
  background: none;
  color: ${e=>e.type.background};
  border-color: ${e=>e.type.background};

  &:hover {
    color: ${e=>e.type.backgroundHover};
    border-color: ${e=>e.type.backgroundHover};
  }
`,O=({text:e,link:t,type:r="primary",variant:i,className:a,onClick:n,icon:o,isFullWidth:d,size:l="md"})=>{let s,m=o,{padding:f,fontSize:y,iconSize:w}=qe[l],H=Fe[r];if(i==="fill")s=_e;else if(i==="outline")s=Le;else throw new Error(`Unrecognized Button variant: ${i}`);return Q.createElement(s,{href:t,as:t?"a":"button",className:a,onClick:n,icon:o,text:e,isFullWidth:d,padding:f,type:H},o&&Q.createElement(m,{size:w}),Q.createElement(g,{size:y,heading:!0},e))};O.defaultProps={size:"md",variant:"fill",onClick:void 0};O.propTypes={link:b.string,text:b.string,variant:b.oneOf(["outline","fill"]),type:b.string,className:b.string,onClick:b.func,icon:b.elementType,isFullWidth:b.bool,size:b.oneOf(["sm","md","lg"])};import k from"prop-types";import ge from"react";import Ue,{css as ue}from"styled-components";import Me from"styled-components";import ce from"prop-types";var C=Me.section`
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
`;C.propTypes={maxWidth:ce.oneOf(["none","sm","md","lg","xl","2xl"]),padding:ce.bool};var De=Ue.div`
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
  ${e=>typeof e.itemFlex=="string"&&ue`
      > * {
        flex: ${t=>t.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&ue`
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
`,J=e=>{let{children:t,gap:r,direction:i,align:a,justify:n,maxWidth:o,itemFlex:d,padding:l}=e;return ge.createElement(C,{maxWidth:o,padding:l},ge.createElement(De,{gap:r,align:a,justify:n,direction:i,style:{"--flex-gap":e.gap},itemFlex:d},t))};J.propTypes={gap:k.number,align:k.string,justify:k.string,direction:k.string,itemFlex:k.oneOfType([k.string,k.array]),padding:k.bool,maxWidth:k.oneOf(["none","sm","md","lg","xl","2xl"])};J.defaultProps={gap:1,direction:"row"};import Ye from"react";import U from"prop-types";import Ke from"styled-components";var Ge=Ke(C)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,X=e=>{let{children:t}=e;return Ye.createElement(Ge,{...e},t)};X.propTypes={gap:U.number,wrapWidth:U.number,padding:U.bool,maxWidth:U.oneOf(["none","sm","md","lg","xl","2xl"])};X.defaultProps={gap:1,wrapWidth:340};import P from"react";import p from"prop-types";import D from"styled-components";import N,{useEffect as Qe,useRef as Ze}from"react";import A from"prop-types";import Je from"styled-components";var Xe=Je.div`
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
`,S=e=>{let{width:t,alt:r,src:i,quality:a,sizes:n,height:o,backgroundColor:d,className:l}=e,s=Ze(null);Qe(()=>{let c=z=>{z.forEach(q=>{if(q.isIntersecting){let E=Array.from(s.current.querySelectorAll("source"));s.current.lastChild.classList.add("loaded"),E.forEach(re=>{re.srcset=re.dataset.srcset})}})},h={threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"},v=new IntersectionObserver(c,h);return v.observe(s.current.querySelector("img")),()=>v.disconnect()},[s]);let m=[.25,.5,1,1.25,1.5,2,2.5],f=["webp","jpeg"],y=({type:c,width:h,src:v})=>{let z=m.flatMap(q=>{let E=h*q;return E<1920?`${v}.${c}?w=${E}&qlt=${a} ${E}w`:[]});return w||z.push(`${v}.${c}?w=1920&qlt=${a} 1920w`),z.join(",")},w=Array.isArray(i),H=w?i[0]:i,j;return w&&([,...j]=i),N.createElement(Xe,{width:t,height:o,backgroundColor:d,isArtDirected:w,artDirectedImages:j,className:l},N.createElement("div",null),N.createElement("picture",{ref:s},w&&j.map(c=>f.map((h,v)=>N.createElement("source",{key:v,type:`image/${h}`,"data-srcset":y({type:h,...c,isArtDirected:!0}),sizes:n,media:c.media}))),f.map((c,h)=>N.createElement("source",{key:h,type:`image/${c}`,"data-srcset":y({type:c,width:t,src:H,isArtDirected:!1}),sizes:n})),N.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};S.propTypes={width:A.number,alt:A.string.isRequired,src:A.oneOfType([A.string,A.array]).isRequired,quality:A.number,sizes:A.string,height:A.number,backgroundColor:A.string};S.defaultProps={backgroundColor:"#ECECF2",quality:80};import fe from"react";import Re,{css as he}from"styled-components";import u from"prop-types";var et=Re.div`
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
`,V=e=>{let{as:t,direction:r,gap:i,align:a,justify:n,className:o,children:d,maxWidth:l,style:s,padding:m}=e;return fe.createElement(C,{maxWidth:l,padding:m},fe.createElement(et,{className:o,as:t,align:a,justify:n,direction:r,style:{...s,"--stack-gap":i}},d))};V.propTypes={as:u.string,className:u.string,style:u.string,gap:u.number,align:u.string,justify:u.string,direction:u.string,itemFlex:u.oneOfType([u.string,u.array]),padding:u.bool,maxWidth:u.oneOf(["none","sm","md","lg","xl","2xl"])};V.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};var tt=D(g)`
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
`,rt=D.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    --padding: 0.75rem;
  }
`,it=D(V)`
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
`,ot=D.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,R=e=>{let{className:t,buttonText:r="shop now",buttonType:i,buttonVariant:a="fill",link:n,logo:o,subcopy:d,noContentBackground:l,noLogoBackground:s,contentBackground:m,contentColor:f,width:y,height:w,sizes:H,alt:j,src:c}=e,h={width:y,height:w,sizes:H,src:c,alt:j},v={"--padding":0,"--background":"none","--color":f||"var(--primary-black)"},z={"--background":"none","--padding":"none"};return P.createElement(rt,{href:n,style:l?{...v}:{...{"--background":m||"var(--primary-black)","--color":f||"var(--primary-white)"}},className:t,contentColor:f,contentBackground:m},P.createElement(S,{...h}),P.createElement(it,{gap:l?1.5:.5,noContentBackground:l},P.createElement(ot,{src:o,alt:"logo",style:s?{...z}:{}}),P.createElement(tt,null,d),P.createElement(O,{text:r,variant:a,type:i})))};R.propTypes={className:p.string,buttonText:p.string,buttonVariant:p.string,buttonType:p.string,link:p.string.isRequired,logo:p.string,subcopy:p.string,contentBackground:p.string,contentColor:p.string,alt:p.string.isRequired,src:p.array.isRequired,width:p.number,height:p.number,sizes:p.string,noLogoBackground:p.bool,noContentBackground:p.bool};R.defaultProps={width:1440,height:640,sizes:"100vw"};import we from"react";import ee from"prop-types";import st,{css as $}from"styled-components";import Y from"react";import xe from"styled-components";import ye from"prop-types";var at=xe.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,nt=xe(g)`
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
`,K=e=>{let{text:t,link:r,className:i,...a}=e;return Y.createElement(at,{className:i},Y.createElement("a",{href:r},Y.createElement(S,{...a}),t&&Y.createElement(nt,{heading:!0},t)))};K.propTypes={link:ye.string,text:ye.string};var lt=st.div`
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

    ${e=>e.layout==="contrast"&&$`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${e=>e.layout==="overlap"&&$`
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

    ${e=>e.layout==="overlap"&&e.reverse&&$`
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

    ${e=>e.layout==="sidebyside"&&$`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${e=>e.layout==="padded"&&$`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${e=>e.layout==="contrast"&&$`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${e=>e.layout==="overlap"&&$`
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

    ${e=>e.layout==="overlap"&&e.reverse&&$`
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

    ${e=>e.layout==="sidebyside"&&$`
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
`,dt={contrast:[{width:432,height:510,sizes:"(max-width: 600px) 100vw, 30vw"},{width:720,height:800,sizes:"(max-width: 600px) 100vw, 50vw"}],sidebyside:[{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:800,sizes:"(max-width: 600px) 50vw, 40vw"}],overlap:[{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"},{width:680,height:850,sizes:"(max-width: 600px) 50vw, 40vw"}]},te=({layout:e,reverse:t,images:r})=>we.createElement(lt,{layout:e,reverse:t},r.map((i,a)=>{let n=dt[e][a],o={...i,...n};return we.createElement(K,{...o})}));te.defaultProps={layout:"sidebyside"};te.propTypes={layout:ee.oneOf(["contrast","sidebyside","overlap"]),reverse:ee.bool,images:ee.array};export{F as Blogpost,pe as Blogposts,O as Button,M as Carousel,J as Flex,X as Grid,R as HeroBanner,S as Image,te as ImageRow,C as Row,K as ShoppableImage,V as Stack,g as Text};
