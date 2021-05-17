var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__assign=(e,t)=>{for(var r in t||(t={}))__hasOwnProp.call(t,r)&&__defNormalProp(e,r,t[r]);if(__getOwnPropSymbols)for(var r of __getOwnPropSymbols(t))__propIsEnum.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__rest=(e,t)=>{var r={};for(var n in e)__hasOwnProp.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))t.indexOf(n)<0&&__propIsEnum.call(e,n)&&(r[n]=e[n]);return r};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("styled-components"),require("react-feather"),require("swr"),require("axios")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","styled-components","react-feather","swr","axios"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MyLib={},e.React,e.PropTypes,e.styled,e.reactFeather,e.useSWR,e.axios)}(this,(function(e,t,r,n,a,i,o){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(t),d=l(r),c=l(n),u=l(i),f=l(o);const p=c.default.p`
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

  ${e=>e.heading&&n.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${e=>e.truncate&&n.css`
      display: -webkit-box;
      -webkit-line-clamp: ${e.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`,m=e=>{const{element:t,children:r,size:n,align:a,heading:i,className:o,lineHeight:l,weight:d,spacing:c,truncate:u}=e;return s.default.createElement(p,{as:t,style:{fontSize:`var(--text-${n})`,textAlign:a},heading:i,className:o,lineHeight:l,weight:d,spacing:c,truncate:u},r)};m.propTypes={heading:d.default.bool,align:d.default.oneOf(["left","center","right"]),size:d.default.oneOf(["5xl","4xl","3xl","2xl","xl","lg","md","base","sm","xs","xxs"]),element:d.default.string,weight:d.default.number,lineHeight:d.default.number,children:d.default.string,truncate:d.default.number},m.defaultProps={heading:!1,element:"p",size:"base",align:"left",weight:500,lineHeight:1.75};const g=c.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`,h=c.default.div`
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
`;let b=e=>(e=>{var t=document.createElement("textarea");t.innerHTML=e;let r=t.value;return t.remove(),r})(e.replace(/(<([^>]+)>)/gi,""));const v=({data:e,className:r})=>{const n=t.useRef(null);t.useEffect((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){let e=Array.from(n.current.querySelectorAll("source"));n.current.lastChild.classList.add("loaded"),e.forEach((e=>{e.srcset=e.dataset.srcset}))}}))}),{threshold:0,root:null});return e.observe(n.current.querySelector("img")),()=>e.disconnect()}),[n]);let a=e._embedded["wp:featuredmedia"][0].media_details.sizes,i=Object.values(a).sort(((e,t)=>e.width-t.width)).map((e=>`${e.source_url} ${e.width}w`)).join(",");return s.default.createElement(g,{className:r,href:e.link},s.default.createElement(h,null,s.default.createElement("picture",{ref:n},s.default.createElement("source",{"data-srcset":i,sizes:"(max-width: 767px) 240px, 300px"}),s.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:e.title.rendered,loading:"lazy"}))),s.default.createElement(m,{as:"h3",lineHeight:1.5,weight:600,spacing:"0.25rem"},b(e.title.rendered)),s.default.createElement(m,{size:"sm",lineHeight:1.5,weight:400},b(e.excerpt.rendered)))};v.propTypes={data:d.default.object.isRequired,className:d.default.string};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var w,y=(function(e,t){!function(e,t){function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){var t,r,n,i,l,s,d,c,p,m,g,h,b,v,w,y,x,k,A,_,E,O,j,S,P,$,M,C,N,T,z,V,B=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},I="data-keen-slider-moves",q="data-keen-slider-v",H=[],R=null,W=!1,D=!1,F=0,L=[];function Y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,r,n),H.push([e,t,r,n])}function U(e){if(k&&A===G(e)&&le()){var r=J(e).x;if(!te(e)&&S)return Q(e);S&&(We(),_=r,t.setAttribute(I,!0),S=!1),e.cancelable&&e.preventDefault(),Te(j(_-r,Ke)*(de()?-1:1),e.timeStamp),_=r}}function K(e){k||!le()||ee(e.target)||(k=!0,S=!0,A=G(e),te(e),pe(),x=m,_=J(e).x,Te(0,e.timeStamp),ie("dragStart"))}function Q(e){k&&A===G(e,!0)&&le()&&(t.removeAttribute(I),k=!1,he(),ie("dragEnd"))}function X(e){return e.changedTouches}function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?X(e):Z(e);return t?t[0]?t[0].identifier:"error":"default"}function Z(e){return e.targetTouches}function J(e){var t=Z(e);return{x:ue()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(y.preventEvent)}function te(e){var t=Z(e);if(!t)return!0;var r=t[0],n=ue()?r.clientY:r.clientX,a=ue()?r.clientX:r.clientY,i=void 0!==E&&void 0!==O&&Math.abs(O-a)<=Math.abs(E-n);return E=n,O=a,i}function re(e){le()&&k&&e.preventDefault()}function ne(){Y(window,"orientationchange",Pe),Y(window,"resize",(function(){return Se()})),Y(t,"dragstart",(function(e){le()&&e.preventDefault()})),Y(t,"mousedown",K),Y(y.cancelOnLeave?t:window,"mousemove",U),y.cancelOnLeave&&Y(t,"mouseleave",Q),Y(window,"mouseup",Q),Y(t,"touchstart",K,{passive:!0}),Y(t,"touchmove",U,{passive:!1}),Y(t,"touchend",Q,{passive:!0}),Y(t,"touchcancel",Q,{passive:!0}),Y(window,"wheel",re,{passive:!1})}function ae(){H.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),H=[]}function ie(e){y[e]&&y[e](Ke)}function oe(){return y.centered}function le(){return void 0!==r?r:y.controls}function se(){return y.loop&&n>1}function de(){return y.rtl}function ce(){return!y.loop&&y.rubberband}function ue(){return!!y.vertical}function fe(){P=window.requestAnimationFrame(me)}function pe(){P&&(window.cancelAnimationFrame(P),P=null),$=null}function me(e){$||($=e);var t=e-$,r=ge(t);if(t>=C)return Te(M-T,!1),V?V():void ie("afterChange");var n=ze(r);if(0===n||se()||ce()||z){if(0!==n&&ce()&&!z)return xe();T+=r,Te(r,!1),fe()}else Te(r-n,!1)}function ge(e){return M*N(e/C)-T}function he(){switch(ie("beforeChange"),y.mode){case"free":we();break;case"free-snap":ye();break;case"snap":default:be()}}function be(){ve((1===d&&0!==g?x:m)+Math.sign(g))}function ve(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.duration,n=function(e){return 1+--e*e*e*e*e};ke(qe(e=Ie(e,arguments.length>3&&void 0!==arguments[3]&&arguments[3],arguments.length>4&&void 0!==arguments[4]&&arguments[4])),r,n,t)}function we(){if(0===b)return!(!ze(0)||se())&&ve(m);var e=y.friction/Math.pow(Math.abs(b),-.5);ke(Math.pow(b,2)/e*Math.sign(b),6*Math.abs(b/e),(function(e){return 1-Math.pow(1-e,5)}))}function ye(){if(0===b)return ve(m);var e=y.friction/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),r=6*Math.abs(b/e),n=(F+t)/(s/d);ke((-1===g?Math.floor(n):Math.ceil(n))*(s/d)-F,r,(function(e){return 1-Math.pow(1-e,5)}))}function xe(){if(pe(),0===b)return ve(m,!0);var e=.04/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),r=function(e){return--e*e*e+1},n=b;ke(t,3*Math.abs(n/e),r,!0,(function(){ke(qe(Ie(m)),500,r,!0)}))}function ke(e,t,r,n,a){pe(),M=e,T=0,C=t,N=r,z=n,V=a,$=null,fe()}function Ae(r){var n=u(e);n.length&&(t=n[0],Se(r),ne(),ie("mounted"))}function _e(){var e,t=B.breakpoints||[];for(var r in t)window.matchMedia(r).matches&&(e=r);if(e===R)return!0;var n=(R=e)?t[R]:B;n.breakpoints&&R&&delete n.breakpoints,y=a(a(a({},Ue),B),n),W=!0,p=null,je()}function Ee(e){return"function"==typeof e?e():f(e,1,Math.max(se()?n-1:n,1))}function Oe(){_e(),D=!0,ie("created")}function je(e,t){e&&(B=e),t&&(R=null),$e(),Ae(t)}function Se(e){var r=window.innerWidth;if(_e()&&(r!==p||e)){p=r;var a=y.slides;"number"==typeof a?(l=null,n=a):(l=u(a,t),n=l?l.length:0);var o=y.dragSpeed;j="function"==typeof o?o:function(e){return e*o},s=ue()?t.offsetHeight:t.offsetWidth,d=Ee(y.slidesPerView),c=f(y.spacing,0,s/(d-1)-1),s+=c,i=oe()?(s/2-s/d/2)/s:0,Ce();var g=!D||W&&y.resetSlide?y.initial:m;Ye(se()?g:Ve(g)),ue()&&t.setAttribute(q,!0),W=!1}}function Pe(e){Se(),setTimeout(Se,500),setTimeout(Se,2e3)}function $e(){ae(),Ne(),t&&t.hasAttribute(q)&&t.removeAttribute(q),ie("destroyed")}function Me(){l&&l.forEach((function(e,t){var r=v[t].distance*s-t*(s/d-c/d-c/d*(d-1)),n=ue()?0:r,a=ue()?r:0,i="translate3d(".concat(n,"px, ").concat(a,"px, 0)");e.style.transform=i,e.style["-webkit-transform"]=i}))}function Ce(){l&&l.forEach((function(e){var t="calc(".concat(100/d,"% - ").concat(c/d*(d-1),"px)");ue()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Ne(){if(l){var e=["transform","-webkit-transform"];e=[].concat(o(e),ue?["min-height","max-height"]:["min-width","max-width"]),l.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Te(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Re(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now()),t&&(e=Fe(e)),F+=e,De()}function ze(e){var t=s*(n-1*(oe()?1:d))/d,r=F+e;return r>t?r-t:r<0?r:0}function Ve(e){return f(e,0,n-1-(oe()?0:d-1))}function Be(){var e=Math.abs(w),t=F<0?1-e:e;return{direction:g,progressTrack:t,progressSlides:t*n/(n-1),positions:v,position:F,speed:b,relativeSlide:(m%n+n)%n,absoluteSlide:m,size:n,slidesPerView:d,widthOrHeight:s}}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return se()?t?He(e,r):e:Ve(e)}function qe(e){return-(-s/d*e+F)}function He(e,t){var r=(m%n+n)%n,a=r<(e=(e%n+n)%n)?-r-n+e:-(r-e),i=r>e?n-r+e:e-r,o=t?Math.abs(a)<=i?a:i:e<r?a:i;return m+o}function Re(e,t){clearTimeout(h);var r=Math.sign(e);if(r!==g&&We(),g=r,L.push({distance:e,time:t}),h=setTimeout((function(){L=[],b=0}),50),(L=L.slice(-6)).length<=1||0===g)return b=0;var n=L.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),a=L[L.length-1].time,i=L[0].time;b=f(n/(a-i),-10,10)}function We(){L=[]}function De(){w=se()?F%(s*n/d)/(s*n/d):F/(s*n/d),Le();for(var e=[],t=0;t<n;t++){var r=(1/n*t-(w<0&&se()?w+1:w))*n/d+i;se()&&(r+=r>(n-1)/d?-n/d:r<-n/d+1?n/d:0);var a=1/d,o=r+a,l=o<a?o/a:o>1?1-(o-1)*d/1:1;e.push({portion:l<0||l>1?0:l,distance:de()?-1*r+1-a:r})}v=e,Me(),ie("move")}function Fe(e){if(se())return e;var t,r=ze(e);return ce()?0===r?e:e*(t=r/s,(1-Math.abs(t))*(1-Math.abs(t))):e-r}function Le(){var e=Math.round(F/(s/d));e!==m&&(!se()&&(e<0||e>n-1)||(m=e,ie("slideChanged")))}function Ye(e){ie("beforeChange"),Te(qe(e),!1),ie("afterChange")}var Ue={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ke={controls:function(e){r=e},destroy:$e,refresh:function(e){je(e,!0)},next:function(){ve(m+1,!0)},prev:function(){ve(m-1,!0)},moveToSlide:function(e,t){ve(e,!0,t)},moveToSlideRelative:function(e){ve(e,!0,arguments.length>2?arguments[2]:void 0,!0,arguments.length>1&&void 0!==arguments[1]&&arguments[1])},resize:function(){Se(!0)},details:function(){return Be()},options:function(){var e=a({},y);return delete e.breakpoints,e}};return Oe(),Ke}function c(e){return Array.prototype.slice.call(e)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?c(e()):"string"==typeof e?c(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function f(e,t,r){return Math.min(Math.max(e,t),r)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var p=function e(t,r){var n=Object.prototype.toString.call(t);if(n!==Object.prototype.toString.call(r))return!1;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var a="[object Array]"===n?t.length:Object.keys(t).length;if(a!==("[object Array]"===n?r.length:Object.keys(r).length))return!1;var i=function(t,r){var n=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!e(t,r))return!1}else{if(n!==Object.prototype.toString.call(r))return!1;if("[object Function]"===n){if(t.toString()!==r.toString())return!1}else if(t!==r)return!1}};if("[object Array]"===n){for(var o=0;o<a;o++)if(!1===i(t[o],r[o]))return!1}else for(var l in t)if(t.hasOwnProperty(l)&&!1===i(t[l],r[l]))return!1;return!0};e.default=d,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.useRef(),n=t.useRef();function a(e){return p(n.current,e)||(n.current=e),n.current}var o=i(t.useState(null),2),l=o[0],s=o[1];return t.useEffect((function(){var e=new d(r.current,n.current);return s(e),function(){e.destroy()}}),[a(e)]),[r,l]},Object.defineProperty(e,"__esModule",{value:!0})}(t,s.default)}(w={exports:{}},w.exports),w.exports);const x={loop:!0,duration:300},k=c.default.div`
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
    ${e=>!Number.isInteger(e.slidesPerViewMob)&&n.css`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`,A=c.default.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  /* if the carousel exists within the Blogposts component move the navigation arrows */
  @media (min-width: 1280px) {
    ${S} & {
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
`,_=c.default.button`
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
`,E=c.default.div`
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
`,O=({children:e,slidesPerView:t=1,slidesPerViewMob:r=1,spacing:n=0,offsetStart:i})=>{const[o,l]=y.useKeenSlider(__assign(__assign({},x),{slidesPerView:t,spacing:n,breakpoints:{"(max-width: 767px)":{slidesPerView:r}}}));return s.default.createElement(k,{className:"keen-wrapper",offsetStart:i,slidesPerViewMob:r,"data-slidesperview":t,"data-slidesperviewmob":r,"data-offsetstart":i,"data-spacing":n},s.default.createElement(E,{offsetStart:i,slidesPerView:t,slidesPerViewMob:r},s.default.createElement("div",{ref:o,className:"keen-slider"},s.default.Children.map(e,(e=>s.default.cloneElement(e,{className:"keen-slider__slide"},e.props.children))))),s.default.createElement(A,null,s.default.createElement(_,{className:"keen-prev",onClick:()=>{l.prev()}},s.default.createElement(a.ArrowLeft,{size:18})),s.default.createElement(_,{className:"keen-next",onClick:()=>{l.next()}},s.default.createElement(a.ArrowRight,{size:18}))))};O.propTypes={slidesPerView:d.default.number,slidesPerViewMob:d.default.number,spacing:d.default.number,offsetStart:d.default.number};const j=e=>f.default.get(e).then((e=>e.data)),S=c.default.div`
  width: 100%;
`,P=e=>{let{isCarousel:t,children:r,slidesPerView:n,slidesPerViewMob:a,spacing:i,offsetStart:o}=e;return t?s.default.createElement(O,{slidesPerView:n,spacing:i,slidesPerViewMob:a,offsetStart:o},r):r},$=e=>{const{postIds:t}=e;let r=t.join(",");const{data:n,error:a}=u.default(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${r}&_fields=link,title,excerpt,_links,_embedded&_embed`,j);return a?s.default.createElement("div",null,"failed to load"):n?s.default.createElement(S,null,s.default.createElement(P,__assign({},e),n.map(((e,t)=>s.default.createElement(v,{key:t,data:e}))))):s.default.createElement("div",null,"loading...")};$.propTypes={postIds:d.default.array.isRequired,isCarousel:d.default.bool,slidesPerView:d.default.number,slidesPerViewMob:d.default.number,spacing:d.default.number,offsetStart:d.default.number};const M=c.default.a`
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
`,C=c.default(M)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`,N=c.default(M)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`,T=({text:e,link:t,variant:r,className:n,onClick:a,icon:i})=>{let o,l=i;if("fill"===r)o=C;else{if("outline"!==r)throw new Error(`Unrecognized Button variant: ${r}`);o=N}return s.default.createElement(o,{href:t,as:t?"a":"button",className:n,onClick:a,icon:i,text:e},i&&s.default.createElement(l,{size:16}),s.default.createElement(m,{size:"base",heading:!0},e))};T.propTypes={link:d.default.string,text:d.default.string.isRequired,variant:d.default.oneOf(["outline","fill"]),className:d.default.string,onClick:d.default.func,icon:d.default.elementType};const z=c.default.section`
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
`;z.propTypes={maxWidth:d.default.oneOf(["none","sm","md","lg","xl","2xl"]),padding:d.default.bool};const V=c.default.div`
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
  ${e=>"string"==typeof e.itemFlex&&n.css`
      > * {
        flex: ${e=>e.itemFlex}};
      }
    `}

  ${e=>Array.isArray(e.itemFlex)&&n.css`
      ${e.itemFlex.map(((e,t)=>`\n        > :nth-child(${t+1}) {\n          flex: ${e};\n        }\n      `))}
    `}

  > * {
    /* use this to emulate the gap property */
    margin: calc(var(--flex-gap) * 1rem) 0 0 calc(var(--flex-gap) * 1rem);
  }
`,B=e=>{const{children:t,gap:r,direction:n,align:a,justify:i,maxWidth:o,itemFlex:l,padding:d}=e;return s.default.createElement(z,{maxWidth:o,padding:d},s.default.createElement(V,{gap:r,align:a,justify:i,direction:n,style:{"--flex-gap":e.gap},itemFlex:l},t))};B.propTypes={gap:d.default.number,align:d.default.string,justify:d.default.string,direction:d.default.string,itemFlex:d.default.oneOfType([d.default.string,d.default.array]),padding:d.default.bool,maxWidth:d.default.oneOf(["none","sm","md","lg","xl","2xl"])},B.defaultProps={gap:1,direction:"row"};const I=c.default(z)`
  display: grid;
  grid-gap: ${e=>`${e.gap}rem`};
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${e=>e.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${e=>`${e.gapMob}rem`};
  }
`,q=e=>{const{children:t}=e;return s.default.createElement(I,__assign({},e),t)};q.propTypes={gap:d.default.number,wrapWidth:d.default.number,padding:d.default.bool,maxWidth:d.default.oneOf(["none","sm","md","lg","xl","2xl"])},q.defaultProps={gap:1,wrapWidth:340};const H=c.default.div`
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
`,R=e=>{const{width:r,alt:n,src:a,quality:i,sizes:o,height:l,backgroundColor:d,className:c}=e,u=t.useRef(null);t.useEffect((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){let e=Array.from(u.current.querySelectorAll("source"));u.current.lastChild.classList.add("loaded"),e.forEach((e=>{e.srcset=e.dataset.srcset}))}}))}),{threshold:0,root:null,rootMargin:"-50px 0px 0px 0px"});return e.observe(u.current.querySelector("img")),()=>e.disconnect()}),[u]);let f=[.25,.5,1,1.25,1.5,2,2.5],p=["webp","jpeg"],m=({type:e,width:t,src:r})=>{let n=f.flatMap((n=>{let a=t*n;return a<1920?`${r}.${e}?w=${a}&qlt=${i} ${a}w`:[]}));return g||n.push(`${r}.${e}?w=1920&qlt=${i} 1920w`),n.join(",")};const g=Array.isArray(a);let h,b=g?a[0]:a;return g&&([,...h]=a),s.default.createElement(H,{width:r,height:l,backgroundColor:d,isArtDirected:g,artDirectedImages:h,className:c},s.default.createElement("div",null),s.default.createElement("picture",{ref:u},g&&h.map((e=>p.map(((t,r)=>s.default.createElement("source",{key:r,type:`image/${t}`,"data-srcset":m(__assign(__assign({type:t},e),{isArtDirected:!0})),sizes:o,media:e.media}))))),p.map(((e,t)=>s.default.createElement("source",{key:t,type:`image/${e}`,"data-srcset":m({type:e,width:r,src:b,isArtDirected:!1}),sizes:o}))),s.default.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",alt:n,loading:"lazy"})))};R.propTypes={width:d.default.number,alt:d.default.string.isRequired,src:d.default.oneOfType([d.default.string,d.default.array]).isRequired,quality:d.default.number,sizes:d.default.string,height:d.default.number,backgroundColor:d.default.string},R.defaultProps={backgroundColor:"#ECECF2",quality:80,alt:"image component",height:240,width:240};const W=c.default.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${e=>"column"===e.direction&&n.css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${e=>"row"===e.direction&&n.css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`,D=e=>{const{as:t,direction:r,gap:n,align:a,justify:i,className:o,children:l,maxWidth:d,style:c,padding:u}=e;return s.default.createElement(z,{maxWidth:d,padding:u},s.default.createElement(W,{className:o,as:t,align:a,justify:i,direction:r,style:__assign(__assign({},c),{"--stack-gap":n})},l))};D.propTypes={as:d.default.string,className:d.default.string,style:d.default.string,gap:d.default.number,align:d.default.string,justify:d.default.string,direction:d.default.string,itemFlex:d.default.oneOfType([d.default.string,d.default.array]),padding:d.default.bool,maxWidth:d.default.oneOf(["none","sm","md","lg","xl","2xl"])},D.defaultProps={as:"div",direction:"column",gap:1.5,align:"stretch",justify:"flex-start"};const F=c.default(m)`
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
`,L=c.default.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`,Y=c.default(D)`
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
`,U=c.default.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`,K=e=>{const{className:t,buttonText:r="shop now",link:n,logo:a,subcopy:i,noContentBackground:o,noLogoBackground:l,contentBackground:d,contentColor:c,width:u,height:f,sizes:p,alt:m,src:g}=e,h={width:u,height:f,sizes:p,src:g,alt:m};let b={"--padding":0,"--background":"none","--color":c||"var(--primary-black)"},v={"--background":d||"var(--primary-black)","--color":c||"var(--primary-white)"};return s.default.createElement(L,{href:n,style:__assign({},o?b:v),className:t,contentColor:c,contentBackground:d},s.default.createElement(R,__assign({},h)),s.default.createElement(Y,{gap:o?1.5:.5,noContentBackground:o},s.default.createElement(U,{src:a,alt:"logo",style:l?__assign({},{"--background":"none","--padding":"none"}):{}}),s.default.createElement(F,null,i),s.default.createElement(T,{text:r,variant:"fill"})))};K.propTypes={className:d.default.string,buttonText:d.default.string,link:d.default.string.isRequired,logo:d.default.string,subcopy:d.default.string,contentBackground:d.default.string,contentColor:d.default.string,alt:d.default.string.isRequired,src:d.default.array.isRequired,width:d.default.number,height:d.default.number,sizes:d.default.string,noLogoBackground:d.default.bool,noContentBackground:d.default.bool},K.defaultProps={width:1440,height:640,sizes:"100vw"};const Q=c.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`,X=c.default(m)`
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
`,G=e=>{const{text:t,link:r,className:n}=e,a=__rest(e,["text","link","className"]);return s.default.createElement(Q,{className:n},s.default.createElement("a",{href:r},s.default.createElement(R,__assign({},a)),t&&s.default.createElement(X,{heading:!0},t)))};G.propTypes={link:d.default.string,text:d.default.string},G.defaultProps={link:"/new-in",width:240,height:240,alt:"grid item alt",src:"https://media.missguided.com/i/missguided/playboy_storybook_default",sizes:"(max-width: 767px) 50vw, 298px"},e.Blogpost=v,e.Blogposts=$,e.Button=T,e.Carousel=O,e.Flex=B,e.Grid=q,e.HeroBanner=K,e.Image=R,e.Row=z,e.ShoppableImage=G,e.Stack=D,e.Text=m,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
