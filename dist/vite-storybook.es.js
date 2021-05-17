var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,a)=>{for(var o in a||(a={}))t.call(a,o)&&i(e,o,a[o]);if(r)for(var o of r(a))n.call(a,o)&&i(e,o,a[o]);return e};import o,{useRef as l,useEffect as s}from"react";import c from"prop-types";import d,{css as u}from"styled-components";import{ArrowLeft as m,ArrowRight as p}from"react-feather";import f from"swr";import g from"axios";const h=d.p`
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

  ${e=>e.heading&&u`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&u`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,b=e=>{const{element:t,children:r,size:n,align:i,heading:a,className:l,lineHeight:s,weight:c,spacing:d,truncate:u}=e;return o.createElement(h,{as:t,style:{fontSize:`var(--text-${n})`,textAlign:i},heading:a,className:l,lineHeight:s,weight:c,spacing:d,truncate:u},r)};b.propTypes={heading:c.bool,align:c.oneOf(["left","center","right"]),size:c.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:c.string,weight:c.number,lineHeight:c.number,children:c.string,truncate:c.number},b.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};const v=d.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,w=d.div`
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
`;let y=e=>(e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r})(e.replace(/(<([^>]+)>)/gi,""));const x=({data:e,className:t})=>{const r=l(null);s((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){let e=Array.from(r.current.querySelectorAll("source"));r.current.lastChild.classList.add("loaded"),e.forEach((e=>{e.srcset=e.dataset.srcset}))}}))}),{threshold:0,root:null});return e.observe(r.current.querySelector("img")),()=>e.disconnect()}),[r]);let n=e._embedded["wp:featuredmedia"][0].media_details.sizes,i=Object.values(n).sort(((e,t)=>e.width-t.width)).map((e=>`${e.source_url} ${e.width}w`)).join(",");return o.createElement(v,{className:t,href:e.link},o.createElement(w,null,o.createElement("picture",{ref:r},o.createElement("source",{"data-srcset":i,sizes:"(max-width: 767px) 240px, 300px"}),o.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),o.createElement(b,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},y(e.title.rendered)),o.createElement(b,{size:"sm",lineHeight:1.5,weight:400},y(e.excerpt.rendered)))};x.propTypes={data:c.object.isRequired,className:c.string};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var k,A=(function(e,t){!function(e,t){function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){i=!0,a=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){var t,r,n,a,l,s,c,d,p,f,g,h,b,v,w,y,x,k,A,E,O,j,$,S,M,C,P,N,T,z,V,B,H=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},I="data-keen-slider-moves",_="data-keen-slider-v",q=[],R=null,W=!1,D=!1,F=0,L=[];function Y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,r,n),q.push([e,t,r,n])}function U(e){if(k&&A===G(e)&&le()){var r=J(e).x;if(!te(e)&&S)return Q(e);S&&(We(),E=r,t.setAttribute(I,!0),S=!1),e.cancelable&&e.preventDefault(),ze($(E-r,Ke)*(ce()?-1:1),e.timeStamp),E=r}}function K(e){k||!le()||ee(e.target)||(k=!0,S=!0,A=G(e),te(e),pe(),x=f,E=J(e).x,ze(0,e.timeStamp),ae("dragStart"))}function Q(e){k&&A===G(e,!0)&&le()&&(t.removeAttribute(I),k=!1,he(),ae("dragEnd"))}function X(e){return e.changedTouches}function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?X(e):Z(e);return t?t[0]?t[0].identifier:"error":"default"}function Z(e){return e.targetTouches}function J(e){var t=Z(e);return{x:ue()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(y.preventEvent)}function te(e){var t=Z(e);if(!t)return!0;var r=t[0],n=ue()?r.clientY:r.clientX,i=ue()?r.clientX:r.clientY,a=void 0!==O&&void 0!==j&&Math.abs(j-i)<=Math.abs(O-n);return O=n,j=i,a}function re(e){le()&&k&&e.preventDefault()}function ne(){Y(window,"orientationchange",Me),Y(window,"resize",(function(){return Se()})),Y(t,"dragstart",(function(e){le()&&e.preventDefault()})),Y(t,"mousedown",K),Y(y.cancelOnLeave?t:window,"mousemove",U),y.cancelOnLeave&&Y(t,"mouseleave",Q),Y(window,"mouseup",Q),Y(t,"touchstart",K,{passive:!0}),Y(t,"touchmove",U,{passive:!1}),Y(t,"touchend",Q,{passive:!0}),Y(t,"touchcancel",Q,{passive:!0}),Y(window,"wheel",re,{passive:!1})}function ie(){q.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),q=[]}function ae(e){y[e]&&y[e](Ke)}function oe(){return y.centered}function le(){return void 0!==r?r:y.controls}function se(){return y.loop&&n>1}function ce(){return y.rtl}function de(){return!y.loop&&y.rubberband}function ue(){return!!y.vertical}function me(){M=window.requestAnimationFrame(fe)}function pe(){M&&(window.cancelAnimationFrame(M),M=null),C=null}function fe(e){C||(C=e);var t=e-C,r=ge(t);if(t>=N)return ze(P-z,!1),B?B():void ae("afterChange");var n=Ve(r);if(0===n||se()||de()||V){if(0!==n&&de()&&!V)return xe();z+=r,ze(r,!1),me()}else ze(r-n,!1)}function ge(e){return P*T(e/N)-z}function he(){switch(ae("beforeChange"),y.mode){case"free":we();break;case"free-snap":ye();break;case"snap":default:be()}}function be(){ve((1===c&&0!==g?x:f)+Math.sign(g))}function ve(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.duration,n=function(e){return 1+--e*e*e*e*e};ke(_e(e=Ie(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),r,n,t)}function we(){if(0===b)return!(!Ve(0)||se())&&ve(f);var e=y.friction/Math.pow(Math.abs(b),-.5);ke(Math.pow(b,2)/e*Math.sign(b),6*Math.abs(b/e),(function(e){return 1-Math.pow(1-e,5)}))}function ye(){if(0===b)return ve(f);var e=y.friction/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),r=6*Math.abs(b/e),n=(F+t)/(s/c);ke((-1===g?Math.floor(n):Math.ceil(n))*(s/c)-F,r,(function(e){return 1-Math.pow(1-e,5)}))}function xe(){if(pe(),0===b)return ve(f,!0);var e=.04/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),r=function(e){return--e*e*e+1},n=b;ke(t,3*Math.abs(n/e),r,!0,(function(){ke(_e(Ie(f)),500,r,!0)}))}function ke(e,t,r,n,i){pe(),P=e,z=0,N=t,T=r,V=n,B=i,C=null,me()}function Ae(r){var n=u(e);n.length&&(t=n[0],Se(r),ne(),ae("mounted"))}function Ee(){var e,t=H.breakpoints||[];for(var r in t)window.matchMedia(r).matches&&(e=r);if(e===R)return!0;var n=(R=e)?t[R]:H;n.breakpoints&&R&&delete n.breakpoints,y=i(i(i({},Ue),H),n),W=!0,p=null,$e()}function Oe(e){return"function"==typeof e?e():m(e,1,Math.max(se()?n-1:n,1))}function je(){Ee(),D=!0,ae("created")}function $e(e,t){e&&(H=e),t&&(R=null),Ce(),Ae(t)}function Se(e){var r=window.innerWidth;if(Ee()&&(r!==p||e)){p=r;var i=y.slides;"number"==typeof i?(l=null,n=i):(l=u(i,t),n=l?l.length:0);var o=y.dragSpeed;$="function"==typeof o?o:function(e){return e*o},s=ue()?t.offsetHeight:t.offsetWidth,c=Oe(y.slidesPerView),d=m(y.spacing,0,s/(c-1)-1),s+=d,a=oe()?(s/2-s/c/2)/s:0,Ne();var g=!D||W&&y.resetSlide?y.initial:f;Ye(se()?g:Be(g)),ue()&&t.setAttribute(_,!0),W=!1}}function Me(e){Se(),setTimeout(Se,500),setTimeout(Se,2e3)}function Ce(){ie(),Te(),t&&t.hasAttribute(_)&&t.removeAttribute(_),ae("destroyed")}function Pe(){l&&l.forEach((function(e,t){var r=v[t].distance*s-t*(s/c-d/c-d/c*(c-1)),n=ue()?0:r,i=ue()?r:0,a="translate3d(".concat(n,"px, ").concat(i,"px, 0)");e.style.transform=a,e.style["-webkit-transform"]=a}))}function Ne(){l&&l.forEach((function(e){var t="calc(".concat(100/c,"% - ").concat(d/c*(c-1),"px)");ue()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Te(){if(l){var e=["transform","-webkit-transform"];e=[].concat(o(e),ue?["min-height","max-height"]:["min-width","max-width"]),l.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function ze(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Re(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=Fe(e)),F+=e,De()}function Ve(e){var t=s*(n-1*(oe()?1:c))/c,r=F+e;return r>t?r-t:r<0?r:0}function Be(e){return m(e,0,n-1-(oe()?0:c-1))}function He(){var e=Math.abs(w),t=F<0?1-e:e;return{direction:g,progressTrack:t,progressSlides:t*n/(n-1),positions:v,position:F,speed:b,relativeSlide:(f%n+n)%n,absoluteSlide:f,size:n,slidesPerView:c,widthOrHeight:s}}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return se()?t?qe(e,r):e:Be(e)}function _e(e){return-(-s/c*e+F)}function qe(e,t){var r=(f%n+n)%n,i=r<(e=(e%n+n)%n)?-r-n+e:-(r-e),a=r>e?n-r+e:e-r,o=t?Math.abs(i)<=a?i:a:e<r?i:a;return f+o}function Re(e,t){clearTimeout(h);var r=Math.sign(e);if(r!==g&&We(),g=r,L.push({distance:e,time:t}),h=setTimeout((function(){L=[],b=0}),50),(L=L.slice(-6)).length<=1||0===g)return b=0;var n=L.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),i=L[L.length-1].time,a=L[0].time;b=m(n/(i-a),-10,10)}function We(){L=[]}function De(){w=se()?F%(s*n/c)/(s*n/c):F/(s*n/c),Le();for(var e=[],t=0;t<n;t++){var r=(1/n*t-(w<0&&se()?w+1:w))*n/c+a;se()&&(r+=r>(n-1)/c?-n/c:r<-n/c+1?n/c:0);var i=1/c,o=r+i,l=o<i?o/i:o>1?1-(o-1)*c/1:1;e.push({portion:l<0||l>1?0:l,distance:ce()?-1*r+1-i:r})}v=e,Pe(),ae("move")}function Fe(e){if(se())return e;var t,r=Ve(e);return de()?0===r?e:e*(t=r/s,(1-Math.abs(t))*(1-Math.abs(t))):e-r}function Le(){var e=Math.round(F/(s/c));e!==f&&(!se()&&(e<0||e>n-1)||(f=e,ae("slideChanged")))}function Ye(e){ae("beforeChange"),ze(_e(e),!1),ae("afterChange")}var Ue={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ke={controls:function(e){r=e},destroy:Ce,refresh:function(e){$e(e,!0)},next:function(){ve(f+1,!0)},prev:function(){ve(f-1,!0)},moveToSlide:function(e,t){ve(e,!0,t)},moveToSlideRelative:function(e){ve(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Se(!0)},details:function(){return He()},options:function(){var e=i({},y);return delete e.breakpoints,e}};return je(),Ke}function d(e){return Array.prototype.slice.call(e)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?d(e()):"string"==typeof e?d(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function m(e,t,r){return Math.min(Math.max(e,t),r)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var p=function e(t,r){var n=Object.prototype.toString.call(t);if(n!==Object.prototype.toString.call(r))return!1;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var i="[object Array]"===n?t.length:Object.keys(t).length;if(i!==("[object Array]"===n?r.length:Object.keys(r).length))return!1;var a=function(t,r){var n=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!e(t,r))return!1}else{if(n!==Object.prototype.toString.call(r))return!1;if("[object Function]"===n){if(t.toString()!==r.toString())return!1}else if(t!==r)return!1}};if("[object Array]"===n){for(var o=0;o<i;o++)if(!1===a(t[o],r[o]))return!1}else for(var l in t)if(t.hasOwnProperty(l)&&!1===a(t[l],r[l]))return!1;return!0};e.default=c,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.useRef(),n=t.useRef();function i(e){return p(n.current,e)||(n.current=e),n.current}var o=a(t.useState(null),2),l=o[0],s=o[1];return t.useEffect((function(){var e=new c(r.current,n.current);return s(e),function(){e.destroy()}}),[i(e)]),[r,l]},Object.defineProperty(e,"__esModule",{value:!0})}(t,o)}(k={exports:{}},k.exports),k.exports);const E={loop:!0,duration:300},O=d.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&u`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,j=d.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${P} & {
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
`,$=d.button`
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
`,S=d.div`
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
`,M=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:n=0,offsetStart:i})=>{const[l,s]=A.useKeenSlider(a(a({},E),{slidesPerView:t,spacing:n,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}));return o.createElement(O,{className:"keen-wrapper",offsetStart:i,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":i,"data-spacing":n},o.createElement(S,{offsetStart:i,slidesPerView:t,slidesPerViewMob:r},o.createElement("div",{ref:l,className:"keen-slider"},o.Children.map(e,(e=>o.cloneElement(e,{className:"keen-slider__slide"},e.props.children))))),o.createElement(j,null,o.createElement($,{className:"keen-prev",onClick:()=>{s.prev()}},o.createElement(m,{size:18})),o.createElement($,{className:"keen-next",onClick:()=>{s.next()}},o.createElement(p,{size:18}))))};M.propTypes={slidesPerView:c.number,slidesPerViewMob:c.number,spacing:c.number,offsetStart:c.number};const C=e=>g.get(e).then((e=>e.data)),P=d.div`
  width: 100%;
`,N=e=>{let{isCarousel:t,children:r,slidesPerView:n,slidesPerViewMob:i,spacing:a,offsetStart:l}=e;return t?o.createElement(M,{slidesPerView:n,spacing:a,slidesPerViewMob:i,offsetStart:l},r):r},T=e=>{const{postIds:t}=e;let r=t.join(",");const{data:n,error:i}=f(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,C);return i?o.createElement("div",null,"failed to load"):n?o.createElement(P,null,o.createElement(N,a({},e),n.map(((e,t)=>o.createElement(x,{key:t,data:e}))))):o.createElement("div",null,"loading...")};T.propTypes={postIds:c.array.isRequired,isCarousel:c.bool,slidesPerView:c.number,slidesPerViewMob:c.number,spacing:c.number,offsetStart:c.number};const z=d.a`
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
`,V=d(z)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,B=d(z)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,H=({text:e,link:t,variant:r,className:n,onClick:i,icon:a})=>{let l,s=a;if("fill"===r)l=V;else{if("outline"!==r)throw new Error(`Unrecognized Button variant: ${r}`);l=B}return o.createElement(l,{href:t,as:t?"a":"button",className:n,onClick:i,icon:a,text:e},a&&o.createElement(s,{size:16}),o.createElement(b,{size:"base",heading:!0},e))};H.propTypes={link:c.string,text:c.string.isRequired,variant:c.oneOf(["outline","fill"]),className:c.string,onClick:c.func,icon:c.elementType};const I=d.section`
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
`;I.propTypes={maxWidth:c.oneOf(["none","sm","md","lg","xl","2xl"]),padding:c.bool};const _=d.div`
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
  ${e=>"string"==typeof e.itemFlex&&u`
      > * {
        flex: ${e=>e.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&u`
      ${e.itemFlex.map(((e,t)=>`\n        > :nth-child(${t+1}) {\n          flex: ${e};\n        }\n      `))}
    `}

  > * {
    /* use this to emulate the gap property */
    margin: calc(var(--flex-gap) * 1rem) 0 0 calc(var(--flex-gap) * 1rem);
  }
`,q=e=>{const{children:t,gap:r,direction:n,align:i,justify:a,maxWidth:l,itemFlex:s,padding:c}=e;return o.createElement(I,{maxWidth:l,padding:c},o.createElement(_,{gap:r,align:i,justify:a,direction:n,style:{"--flex-gap":e.gap},itemFlex:s},t))};q.propTypes={gap:c.number,align:c.string,justify:c.string,direction:c.string,itemFlex:c.oneOfType([c.string,c.array]),padding:c.bool,maxWidth:c.oneOf(["none","sm","md","lg","xl","2xl"])},q.defaultProps={gap:1,direction:"row"};const R=d(I)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,W=e=>{const{children:t}=e;return o.createElement(R,a({},e),t)};W.propTypes={gap:c.number,wrapWidth:c.number,padding:c.bool,maxWidth:c.oneOf(["none","sm","md","lg","xl","2xl"])},W.defaultProps={gap:1,wrapWidth:340};const D=d.div`
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
    padding-top: ${e=>e.height/e.width*100+"%"};

    ${e=>e.isArtDirected&&e.artDirectedImages.map((({media:e,height:t,width:r})=>`\n        @media ${e} {\n          padding-top: ${t/r*100}%;\n        }\n      `)).join("")}
  }
`,F=e=>{const{width:t,alt:r,src:n,quality:i,sizes:c,height:d,backgroundColor:u,className:m}=e,p=l(null);s((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){let e=Array.from(p.current.querySelectorAll("source"));p.current.lastChild.classList.add("loaded"),e.forEach((e=>{e.srcset=e.dataset.srcset}))}}))}),{threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"});return e.observe(p.current.querySelector("img")),()=>e.disconnect()}),[p]);let f=[.25,.5,1,1.25,1.5,2,2.5],g=["webp","jpeg"],h=({type:e,width:t,src:r})=>{let n=f.flatMap((n=>{let a=t*n;return a<1920?`${r}.${e}?w=${a}&qlt=${i} ${a}w`:[]}));return b||n.push(`${r}.${e}?w=1920&qlt=${i} 1920w`),n.join(",")};const b=Array.isArray(n);let v,w=b?n[0]:n;return b&&([,...v]=n),o.createElement(D,{width:t,height:d,backgroundColor:u,isArtDirected:b,artDirectedImages:v,className:m},o.createElement("div",null),o.createElement("picture",{ref:p},b&&v.map((e=>g.map(((t,r)=>o.createElement("source",{key:r,type:`image/${t}`,"data-srcset":h(a(a({type:t},e),{isArtDirected:!0})),sizes:c,media:e.media}))))),g.map(((e,r)=>o.createElement("source",{key:r,type:`image/${e}`,"data-srcset":h({type:e,width:t,src:w,isArtDirected:!1}),sizes:c}))),o.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:r,loading:"lazy"})))};F.propTypes={width:c.number,alt:c.string.isRequired,src:c.oneOfType([c.string,c.array]).isRequired,quality:c.number,sizes:c.string,height:c.number,backgroundColor:c.string},F.defaultProps={backgroundColor:"#ECECF2",quality:80,alt:"image component",height:240,width:240};const L=d.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>"column"===e.direction&&u`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>"row"===e.direction&&u`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,Y=e=>{const{as:t,direction:r,gap:n,align:i,justify:l,className:s,children:c,maxWidth:d,style:u,padding:m}=e;return o.createElement(I,{maxWidth:d,padding:m},o.createElement(L,{className:s,as:t,align:i,justify:l,direction:r,style:a(a({},u),{"--stack-gap":n})},c))};Y.propTypes={as:c.string,className:c.string,style:c.string,gap:c.number,align:c.string,justify:c.string,direction:c.string,itemFlex:c.oneOfType([c.string,c.array]),padding:c.bool,maxWidth:c.oneOf(["none","sm","md","lg","xl","2xl"])},Y.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};const U=d(b)`
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
`,K=d.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,Q=d(Y)`
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
`,X=d.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,G=e=>{const{className:t,buttonText:r="shop now",link:n,logo:i,subcopy:l,noContentBackground:s,noLogoBackground:c,contentBackground:d,contentColor:u,width:m,height:p,sizes:f,alt:g,src:h}=e,b={width:m,height:p,sizes:f,src:h,alt:g};let v={"--padding":0,"--background":"none","--color":u||"var(--primary-black)"},w={"--background":d||"var(--primary-black)","--color":u||"var(--primary-white)"};return o.createElement(K,{href:n,style:a({},s?v:w),className:t,contentColor:u,contentBackground:d},o.createElement(F,a({},b)),o.createElement(Q,{gap:s?1.5:.5,noContentBackground:s},o.createElement(X,{src:i,alt:"logo",style:c?a({},{"--background":"none","--padding":"none"}):{}}),o.createElement(U,null,l),o.createElement(H,{text:r,variant:"fill"})))};G.propTypes={className:c.string,buttonText:c.string,link:c.string.isRequired,logo:c.string,subcopy:c.string,contentBackground:c.string,contentColor:c.string,alt:c.string.isRequired,src:c.array.isRequired,width:c.number,height:c.number,sizes:c.string,noLogoBackground:c.bool,noContentBackground:c.bool},G.defaultProps={width:1440,height:640,sizes:"100vw"};const Z=d.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,J=d(b)`
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
`,ee=e=>{const{text:i,link:l,className:s}=e,c=((e,i)=>{var a={};for(var o in e)t.call(e,o)&&i.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))i.indexOf(o)<0&&n.call(e,o)&&(a[o]=e[o]);return a})(e,["text","link","className"]);return o.createElement(Z,{className:s},o.createElement("a",{href:l},o.createElement(F,a({},c)),i&&o.createElement(J,{heading:!0},i)))};ee.propTypes={link:c.string,text:c.string},ee.defaultProps={link:"/new-in",width:240,height:240,alt:"grid item alt",src:"https://media.missguided.com/i/missguided/playboy_storybook_default",sizes:"(max-width: 767px) 50vw, 298px"};export{x as Blogpost,T as Blogposts,H as Button,M as Carousel,q as Flex,W as Grid,G as HeroBanner,F as Image,I as Row,ee as ShoppableImage,Y as Stack,b as Text};
