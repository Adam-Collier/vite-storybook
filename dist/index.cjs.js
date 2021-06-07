var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// src/index.js
__markAsModule(exports);
__export(exports, {
  Blogpost: () => Blogpost,
  Blogposts: () => Blogposts,
  Button: () => Button2,
  Carousel: () => Carousel,
  Flex: () => Flex,
  Grid: () => Grid,
  HeroBanner: () => HeroBanner,
  Image: () => Image,
  ImageRow: () => ImageRow,
  Row: () => Row,
  ShoppableImage: () => ShoppableImage,
  Stack: () => Stack,
  Text: () => Text
});

// src/components/Blogpost/index.jsx
var import_react2 = __toModule(require("react"));
var import_prop_types2 = __toModule(require("prop-types"));

// src/utils/decode-html-entities.js
var decodeHtmlEntities = (html) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  let decodedHTML = textArea.value;
  textArea.remove();
  return decodedHTML;
};

// src/components/Blogpost/index.jsx
var import_styled_components2 = __toModule(require("styled-components"));

// src/components/Text/index.jsx
var import_react = __toModule(require("react"));
var import_prop_types = __toModule(require("prop-types"));
var import_styled_components = __toModule(require("styled-components"));
var TextElement = import_styled_components.default.p`
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

  line-height: ${(props) => props.heading || props.titling ? 1.3 : props.lineHeight};
  font-weight: ${(props) => props.heading || props.titling ? 600 : props.weight};
  font-family: ${(props) => !props.heading && !props.titling && `"Helvetica Neue", Arial, sans-serif`};
  color: inherit;

  ${(props) => props.titling && import_styled_components.css`
      font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
      letter-spacing: 0.5px;
    `}

  ${(props) => props.heading && import_styled_components.css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${(props) => props.truncate && import_styled_components.css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;
var Text = (props) => {
  const {
    element,
    children,
    size,
    align,
    heading,
    titling,
    className,
    lineHeight,
    weight,
    spacing,
    truncate
  } = props;
  return /* @__PURE__ */ import_react.default.createElement(TextElement, {
    as: element,
    style: {fontSize: `var(--text-${size})`, textAlign: align},
    heading,
    titling,
    className,
    lineHeight,
    weight,
    spacing,
    truncate
  }, children);
};
Text.propTypes = {
  heading: import_prop_types.default.bool,
  titling: import_prop_types.default.bool,
  align: import_prop_types.default.oneOf(["left", "center", "right"]),
  size: import_prop_types.default.oneOf([
    "5xl",
    "4xl",
    "3xl",
    "2xl",
    "xl",
    "lg",
    "md",
    "base",
    "sm",
    "xs",
    "xxs"
  ]),
  element: import_prop_types.default.string,
  weight: import_prop_types.default.number,
  lineHeight: import_prop_types.default.number,
  truncate: import_prop_types.default.number
};
Text.defaultProps = {
  heading: false,
  element: "p",
  size: "base",
  align: "left",
  weight: 500,
  lineHeight: 1.75
};

// src/components/Blogpost/index.jsx
var Wrapper = import_styled_components2.default.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`;
var ImageWrapper = import_styled_components2.default.div`
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
`;
var stripAndParse = (str) => {
  let stripped = str.replace(/(<([^>]+)>)/gi, "");
  let parsed = decodeHtmlEntities(stripped);
  return parsed;
};
var Blogpost = ({data, className}) => {
  const pictureEl = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sources = Array.from(pictureEl.current.querySelectorAll("source"));
          pictureEl.current.lastChild.classList.add("loaded");
          sources.forEach((source) => {
            source.srcset = source.dataset.srcset;
          });
        }
      });
    };
    const options = {
      threshold: 0,
      root: null
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(pictureEl.current.querySelector("img"));
    return () => observer.disconnect();
  }, [pictureEl]);
  let images = data["_embedded"]["wp:featuredmedia"][0]["media_details"]["sizes"];
  let sortedImages = Object.values(images).sort((a, b) => a.width - b.width);
  let srcSet = sortedImages.map((image) => `${image.source_url} ${image.width}w`).join(",");
  return /* @__PURE__ */ import_react2.default.createElement(Wrapper, {
    className,
    href: data.link
  }, /* @__PURE__ */ import_react2.default.createElement(ImageWrapper, null, /* @__PURE__ */ import_react2.default.createElement("picture", {
    ref: pictureEl
  }, /* @__PURE__ */ import_react2.default.createElement("source", {
    "data-srcset": srcSet,
    sizes: "(max-width: 767px) 240px, 300px"
  }), /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    alt: data.title.rendered,
    loading: "lazy"
  }))), /* @__PURE__ */ import_react2.default.createElement(Text, {
    as: "h3",
    lineHeight: 1.5,
    weight: 600,
    spacing: "0.25rem"
  }, stripAndParse(data.title.rendered)), /* @__PURE__ */ import_react2.default.createElement(Text, {
    size: "sm",
    lineHeight: 1.5,
    weight: 400
  }, stripAndParse(data.excerpt.rendered)));
};
Blogpost.propTypes = {
  data: import_prop_types2.default.object.isRequired,
  className: import_prop_types2.default.string
};

// src/components/Blogposts/index.jsx
var import_react5 = __toModule(require("react"));
var import_prop_types4 = __toModule(require("prop-types"));
var import_styled_components4 = __toModule(require("styled-components"));

// src/components/Carousel/index.jsx
var import_react3 = __toModule(require("react"));
var import_prop_types3 = __toModule(require("prop-types"));
var import_styled_components3 = __toModule(require("styled-components"));
var import_react4 = __toModule(require("keen-slider/react"));
var import_react_feather = __toModule(require("react-feather"));
var keenConfig = {
  loop: true,
  duration: 300
};
var Wrapper2 = import_styled_components3.default.div`
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
    ${(props) => !Number.isInteger(props.slidesPerViewMob) && import_styled_components3.css`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`;
var Navigation = import_styled_components3.default.div`
  --nav-inset: 2rem;
  position: absolute;

  ${(props) => props.position.map((pos) => import_styled_components3.css`
        ${pos}: var(--nav-inset);
      `)}

  @media (max-width: 1024px) {
    --nav-inset: 0.75rem;
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`;
var Button = import_styled_components3.default.button`
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
`;
var CarouselWrapper = import_styled_components3.default.div`
  overflow: hidden;
  /* if slidesPerView isnt a whole number add the offset */
  padding-left: ${(props) => !Number.isInteger(props.slidesPerView) && `${props.offsetStart}rem`};

  @media (max-width: 767px) {
    /* if slidesPerViewMob isnt a whole number add the offset */
    padding-left: ${(props) => !Number.isInteger(props.slidesPerViewMob) && `${props.offsetStart}rem`};
    width: 100%;

    > * {
      overflow: visible;
    }
  }
`;
var Carousel = ({
  children,
  slidesPerView = 1,
  slidesPerViewMob = 1,
  spacing = 0,
  offsetStart,
  arrowsPosition = ["bottom", "right"]
}) => {
  const [sliderRef, slider] = (0, import_react4.useKeenSlider)({
    ...keenConfig,
    slidesPerView,
    spacing,
    breakpoints: {
      "(max-width: 767px)": {
        slidesPerView: slidesPerViewMob
      }
    }
  });
  let prev = () => {
    slider.prev();
  };
  let next = () => {
    slider.next();
  };
  return /* @__PURE__ */ import_react3.default.createElement(Wrapper2, {
    className: "keen-wrapper",
    offsetStart,
    slidesPerViewMob,
    "data-slidesperview": slidesPerView,
    "data-slidesperviewmob": slidesPerViewMob,
    "data-offsetstart": offsetStart,
    "data-spacing": spacing
  }, /* @__PURE__ */ import_react3.default.createElement(CarouselWrapper, {
    offsetStart,
    slidesPerView,
    slidesPerViewMob
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    ref: sliderRef,
    className: "keen-slider"
  }, import_react3.default.Children.map(children, (child) => import_react3.default.cloneElement(child, {className: `keen-slider__slide`}, child.props.children)))), /* @__PURE__ */ import_react3.default.createElement(Navigation, {
    position: arrowsPosition
  }, /* @__PURE__ */ import_react3.default.createElement(Button, {
    className: "keen-prev",
    onClick: () => prev()
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_feather.ArrowLeft, {
    size: 18
  })), /* @__PURE__ */ import_react3.default.createElement(Button, {
    className: "keen-next",
    onClick: () => next()
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_feather.ArrowRight, {
    size: 18
  }))));
};
Carousel.propTypes = {
  slidesPerView: import_prop_types3.default.number,
  slidesPerViewMob: import_prop_types3.default.number,
  spacing: import_prop_types3.default.number,
  offsetStart: import_prop_types3.default.number
};

// src/components/Blogposts/index.jsx
var import_swr = __toModule(require("swr"));

// src/utils/fetcher.js
var import_axios = __toModule(require("axios"));
var fetcher = (url) => import_axios.default.get(url).then((res) => res.data);

// src/components/Blogposts/index.jsx
var Wrapper3 = import_styled_components4.default.div`
  width: 100%;
`;
var ConditionalWrapper = (props) => {
  let {
    isCarousel,
    children,
    slidesPerView,
    slidesPerViewMob,
    spacing,
    offsetStart,
    arrowsPosition = ["top", "right"]
  } = props;
  return isCarousel ? /* @__PURE__ */ import_react5.default.createElement(Carousel, {
    slidesPerView,
    spacing,
    slidesPerViewMob,
    offsetStart,
    arrowsPosition
  }, children) : children;
};
var Blogposts = (props) => {
  const {postIds} = props;
  let stringifiedIds = postIds.join(",");
  const {data, error} = (0, import_swr.default)(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${stringifiedIds}&_fields=link,title,excerpt,_links,_embedded&_embed`, fetcher);
  if (error)
    return /* @__PURE__ */ import_react5.default.createElement("div", null, "failed to load");
  if (!data)
    return /* @__PURE__ */ import_react5.default.createElement("div", null, "loading...");
  return /* @__PURE__ */ import_react5.default.createElement(Wrapper3, null, /* @__PURE__ */ import_react5.default.createElement(ConditionalWrapper, {
    ...props
  }, data.map((post, index) => /* @__PURE__ */ import_react5.default.createElement(Blogpost, {
    key: index,
    data: post
  }))));
};
Blogposts.propTypes = {
  postIds: import_prop_types4.default.array.isRequired,
  isCarousel: import_prop_types4.default.bool,
  slidesPerView: import_prop_types4.default.number,
  slidesPerViewMob: import_prop_types4.default.number,
  spacing: import_prop_types4.default.number,
  offsetStart: import_prop_types4.default.number
};

// src/components/Button/index.jsx
var import_react6 = __toModule(require("react"));
var import_prop_types5 = __toModule(require("prop-types"));
var import_styled_components5 = __toModule(require("styled-components"));
var SIZES = {
  sm: {
    fontSize: "sm",
    padding: "0.5rem 0.75rem",
    iconSize: "14"
  },
  md: {
    fontSize: "base",
    padding: `0.75rem 1rem`,
    iconSize: "16"
  },
  lg: {
    fontSize: "md",
    padding: "1rem 1.25rem",
    iconSize: "18"
  }
};
var BUTTON_TYPE = {
  primary: {
    background: "var(--primary-black)",
    color: "var(--primary-white)",
    hover: "var(--primary-black-hover)"
  },
  secondary: {
    background: "var(--primary-white)",
    color: "var(--primary-black)",
    hover: "var(--primary-white-hover)",
    borderColor: "var(--primary-black)"
  }
};
var ButtonBase = import_styled_components5.default.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  width: ${(props) => props.isFullWidth ? "100%" : "fit-content"};
  border: 1px solid transparent;
  padding: ${(props) => props.text ? props.padding : `1rem`};
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
    margin-right: ${(props) => props.text && props.icon && "0.35rem"};
  }
`;
var FillButton = (0, import_styled_components5.default)(ButtonBase)`
  background: ${(props) => props.type.background};
  color: ${(props) => props.type.color};
  border-color: ${(props) => props.type.borderColor};

  &:hover {
    color: ${(props) => props.type.color};
    background: ${(props) => props.type.hover};
  }
`;
var OutlineButton = (0, import_styled_components5.default)(ButtonBase)`
  background: none;
  color: ${(props) => props.type.background};
  border-color: ${(props) => props.type.background};

  &:hover {
    color: ${(props) => props.type.hover};
    border-color: ${(props) => props.type.hover};
  }
`;
var Button2 = ({
  text,
  link,
  type = "primary",
  variant,
  className,
  onClick,
  icon,
  isFullWidth,
  size = "md"
}) => {
  let Component;
  let Icon = icon;
  let {padding, fontSize, iconSize} = SIZES[size];
  let buttonType = BUTTON_TYPE[type];
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return /* @__PURE__ */ import_react6.default.createElement(Component, {
    href: link,
    as: link ? "a" : "button",
    className,
    onClick,
    icon,
    text,
    isFullWidth,
    padding,
    type: buttonType
  }, icon && /* @__PURE__ */ import_react6.default.createElement(Icon, {
    size: iconSize
  }), /* @__PURE__ */ import_react6.default.createElement(Text, {
    size: fontSize,
    heading: true
  }, text));
};
Button2.defaultProps = {
  size: "md",
  variant: "fill",
  onClick: void 0
};
Button2.propTypes = {
  link: import_prop_types5.default.string,
  text: import_prop_types5.default.string,
  variant: import_prop_types5.default.oneOf(["outline", "fill"]),
  type: import_prop_types5.default.string,
  className: import_prop_types5.default.string,
  onClick: import_prop_types5.default.func,
  icon: import_prop_types5.default.elementType,
  isFullWidth: import_prop_types5.default.bool,
  size: import_prop_types5.default.oneOf(["sm", "md", "lg"])
};

// src/components/Flex/index.jsx
var import_prop_types7 = __toModule(require("prop-types"));
var import_react7 = __toModule(require("react"));
var import_styled_components7 = __toModule(require("styled-components"));

// src/components/Row/index.jsx
var import_styled_components6 = __toModule(require("styled-components"));
var import_prop_types6 = __toModule(require("prop-types"));
var Row = import_styled_components6.default.section`
  --width-sm: 640px;
  --width-md: 768px;
  --width-lg: 1024px;
  --width-xl: 1280px;
  --width-2xl: 1536px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  max-width: ${(props) => {
  return props.maxWidth ? `var(--width-${props.maxWidth})` : "none";
}};

  padding: ${(props) => props.padding && `0 1rem`};
`;
Row.propTypes = {
  maxWidth: import_prop_types6.default.oneOf(["none", "sm", "md", "lg", "xl", "2xl"]),
  padding: import_prop_types6.default.bool
};

// src/components/Flex/index.jsx
var Wrapper4 = import_styled_components7.default.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: wrap;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  /* use this to emulate the gap property */
  margin: calc(-1 * calc(var(--flex-gap) * 1rem)) 0 0
    calc(-1 * calc(var(--flex-gap) * 1rem));
  width: calc(100% + calc(var(--flex-gap) * 1rem));

  /* if flex item is a string  */
  ${(props) => typeof props.itemFlex === "string" && import_styled_components7.css`
      > * {
        flex: ${(props2) => props2.itemFlex}};
      }
    `}

  ${(props) => Array.isArray(props.itemFlex) && import_styled_components7.css`
      ${props.itemFlex.map((value, index) => `
        > :nth-child(${index + 1}) {
          flex: ${value};
        }
      `)}
    `}

  > * {
    /* use this to emulate the gap property */
    margin: calc(var(--flex-gap) * 1rem) 0 0 calc(var(--flex-gap) * 1rem);
  }
`;
var Flex = (props) => {
  const {
    children,
    gap,
    direction,
    align,
    justify,
    maxWidth,
    itemFlex,
    padding
  } = props;
  return /* @__PURE__ */ import_react7.default.createElement(Row, {
    maxWidth,
    padding
  }, /* @__PURE__ */ import_react7.default.createElement(Wrapper4, {
    gap,
    align,
    justify,
    direction,
    style: {"--flex-gap": props.gap},
    itemFlex
  }, children));
};
Flex.propTypes = {
  gap: import_prop_types7.default.number,
  align: import_prop_types7.default.string,
  justify: import_prop_types7.default.string,
  direction: import_prop_types7.default.string,
  itemFlex: import_prop_types7.default.oneOfType([import_prop_types7.default.string, import_prop_types7.default.array]),
  padding: import_prop_types7.default.bool,
  maxWidth: import_prop_types7.default.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Flex.defaultProps = {
  gap: 1,
  direction: "row"
};

// src/components/grid/index.jsx
var import_react8 = __toModule(require("react"));
var import_prop_types8 = __toModule(require("prop-types"));
var import_styled_components8 = __toModule(require("styled-components"));
var Wrapper5 = (0, import_styled_components8.default)(Row)`
  display: grid;
  grid-gap: ${(props) => `${props.gap}rem`};
  /* add a fallback here for older browsers */
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.wrapWidth}px, 1fr)
  );

  grid-template-columns: repeat(
    auto-fill,
    minmax(min(${(props) => props.wrapWidth}px, 40%), 1fr)
  );

  @media (max-width: 767px) {
    grid-gap: ${(props) => `${props.gapMob}rem`};
  }
`;
var Grid = (props) => {
  const {children} = props;
  return /* @__PURE__ */ import_react8.default.createElement(Wrapper5, {
    ...props
  }, children);
};
Grid.propTypes = {
  gap: import_prop_types8.default.number,
  wrapWidth: import_prop_types8.default.number,
  padding: import_prop_types8.default.bool,
  maxWidth: import_prop_types8.default.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Grid.defaultProps = {
  gap: 1,
  wrapWidth: 340
};

// src/components/HeroBanner/index.jsx
var import_react11 = __toModule(require("react"));
var import_prop_types11 = __toModule(require("prop-types"));
var import_styled_components11 = __toModule(require("styled-components"));

// src/components/Image/index.jsx
var import_react9 = __toModule(require("react"));
var import_prop_types9 = __toModule(require("prop-types"));
var import_styled_components9 = __toModule(require("styled-components"));
var ImageWrapper2 = import_styled_components9.default.div`
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
    background-color: ${(props) => props.backgroundColor};
    padding-top: ${(props) => `${props.height / props.width * 100}%`};

    ${(props) => props.isArtDirected && props.artDirectedImages.map(({media, height, width}) => {
  return `
        @media ${media} {
          padding-top: ${height / width * 100}%;
        }
      `;
}).join("")}
  }
`;
var Image = (props) => {
  const {
    width,
    alt,
    src,
    quality,
    sizes,
    height,
    backgroundColor,
    className,
    imageTypes = ["webp", "jpeg"]
  } = props;
  const pictureEl = (0, import_react9.useRef)(null);
  (0, import_react9.useEffect)(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sources = Array.from(pictureEl.current.querySelectorAll("source"));
          pictureEl.current.lastChild.classList.add("loaded");
          sources.forEach((source) => {
            source.srcset = source.dataset.srcset;
          });
        }
      });
    };
    const options = {
      threshold: 0,
      root: null,
      rootMargin: "-50px 0px 0px 0px"
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(pictureEl.current.querySelector("img"));
    return () => observer.disconnect();
  }, [pictureEl]);
  let imageSizes = [0.25, 0.5, 1, 1.25, 1.5, 2, 2.5];
  let createSrcSet = ({type, width: width2, src: src2}) => {
    let sizes2 = imageSizes.flatMap((size) => {
      let imageWidth = width2 * size;
      return imageWidth < 1920 ? `${src2}.${type}?w=${imageWidth}&qlt=${quality} ${imageWidth}w` : [];
    });
    if (!isArtDirected) {
      sizes2.push(`${src2}.${type}?w=1920&qlt=${quality} 1920w`);
    }
    return sizes2.join(",");
  };
  const isArtDirected = Array.isArray(src);
  let defaultImage = isArtDirected ? src[0] : src;
  let artDirectedImages;
  if (isArtDirected) {
    [, ...artDirectedImages] = src;
  }
  return /* @__PURE__ */ import_react9.default.createElement(ImageWrapper2, {
    width,
    height,
    backgroundColor,
    isArtDirected,
    artDirectedImages,
    className
  }, /* @__PURE__ */ import_react9.default.createElement("div", null), /* @__PURE__ */ import_react9.default.createElement("picture", {
    ref: pictureEl
  }, isArtDirected && artDirectedImages.map((image) => {
    return imageTypes.map((type, index) => /* @__PURE__ */ import_react9.default.createElement("source", {
      key: index,
      type: `image/${type}`,
      "data-srcset": createSrcSet({
        type,
        ...image,
        isArtDirected: true
      }),
      sizes,
      media: image.media
    }));
  }), imageTypes.map((type, index) => /* @__PURE__ */ import_react9.default.createElement("source", {
    key: index,
    type: `image/${type}`,
    "data-srcset": createSrcSet({
      type,
      width,
      src: defaultImage,
      isArtDirected: false
    }),
    sizes
  })), /* @__PURE__ */ import_react9.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    alt,
    loading: "lazy"
  })));
};
Image.propTypes = {
  width: import_prop_types9.default.number,
  alt: import_prop_types9.default.string.isRequired,
  src: import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.array]).isRequired,
  quality: import_prop_types9.default.number,
  sizes: import_prop_types9.default.string,
  height: import_prop_types9.default.number,
  backgroundColor: import_prop_types9.default.string
};
Image.defaultProps = {
  backgroundColor: "#ECECF2",
  quality: 80
};

// src/components/Stack/index.jsx
var import_react10 = __toModule(require("react"));
var import_styled_components10 = __toModule(require("styled-components"));
var import_prop_types10 = __toModule(require("prop-types"));
var Wrapper6 = import_styled_components10.default.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props) => props.direction === "column" && import_styled_components10.css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${(props) => props.direction === "row" && import_styled_components10.css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`;
var Stack = (props) => {
  const {
    as,
    direction,
    gap,
    align,
    justify,
    className,
    children,
    maxWidth,
    style,
    padding
  } = props;
  return /* @__PURE__ */ import_react10.default.createElement(Row, {
    maxWidth,
    padding
  }, /* @__PURE__ */ import_react10.default.createElement(Wrapper6, {
    className,
    as,
    align,
    justify,
    direction,
    style: {...style, "--stack-gap": gap}
  }, children));
};
Stack.propTypes = {
  as: import_prop_types10.default.string,
  className: import_prop_types10.default.string,
  style: import_prop_types10.default.string,
  gap: import_prop_types10.default.number,
  align: import_prop_types10.default.string,
  justify: import_prop_types10.default.string,
  direction: import_prop_types10.default.string,
  itemFlex: import_prop_types10.default.oneOfType([import_prop_types10.default.string, import_prop_types10.default.array]),
  padding: import_prop_types10.default.bool,
  maxWidth: import_prop_types10.default.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Stack.defaultProps = {
  as: "div",
  direction: "column",
  gap: 1.5,
  align: "stretch",
  justify: "flex-start"
};

// src/components/HeroBanner/index.jsx
var Subcopy = (0, import_styled_components11.default)(Text)`
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
`;
var Wrapper7 = import_styled_components11.default.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    --padding: 0.75rem;
  }
`;
var Content = (0, import_styled_components11.default)(Stack)`
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
    --content-padding: ${(props) => props.noContentBackground ? "1.5rem" : "0.75rem"};
  }
`;
var Logo = import_styled_components11.default.img`
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
`;
var HeroBanner = (props) => {
  const {
    className,
    buttonText = "shop now",
    buttonType,
    buttonVariant = "fill",
    link,
    logo,
    subcopy,
    noContentBackground,
    noLogoBackground,
    contentBackground,
    contentColor,
    width,
    height,
    sizes,
    alt,
    src
  } = props;
  const imageProps = {
    width,
    height,
    sizes,
    src,
    alt
  };
  let noBackgroundStyles = {
    "--padding": 0,
    "--background": "none",
    "--color": contentColor || "var(--primary-black)"
  };
  let noLogoStyles = {
    "--background": "none",
    "--padding": "none"
  };
  let defaultStyles = {
    "--background": contentBackground || "var(--primary-black)",
    "--color": contentColor || "var(--primary-white)"
  };
  return /* @__PURE__ */ import_react11.default.createElement(Wrapper7, {
    href: link,
    style: noContentBackground ? {...noBackgroundStyles} : {...defaultStyles},
    className,
    contentColor,
    contentBackground
  }, /* @__PURE__ */ import_react11.default.createElement(Image, {
    ...imageProps
  }), /* @__PURE__ */ import_react11.default.createElement(Content, {
    gap: noContentBackground ? 1.5 : 0.5,
    noContentBackground
  }, /* @__PURE__ */ import_react11.default.createElement(Logo, {
    src: logo,
    alt: "logo",
    style: noLogoBackground ? {...noLogoStyles} : {}
  }), /* @__PURE__ */ import_react11.default.createElement(Subcopy, null, subcopy), /* @__PURE__ */ import_react11.default.createElement(Button2, {
    text: buttonText,
    variant: buttonVariant,
    type: buttonType
  })));
};
HeroBanner.propTypes = {
  className: import_prop_types11.default.string,
  buttonText: import_prop_types11.default.string,
  buttonVariant: import_prop_types11.default.string,
  buttonType: import_prop_types11.default.string,
  link: import_prop_types11.default.string.isRequired,
  logo: import_prop_types11.default.string,
  subcopy: import_prop_types11.default.string,
  contentBackground: import_prop_types11.default.string,
  contentColor: import_prop_types11.default.string,
  alt: import_prop_types11.default.string.isRequired,
  src: import_prop_types11.default.array.isRequired,
  width: import_prop_types11.default.number,
  height: import_prop_types11.default.number,
  sizes: import_prop_types11.default.string,
  noLogoBackground: import_prop_types11.default.bool,
  noContentBackground: import_prop_types11.default.bool
};
HeroBanner.defaultProps = {
  width: 1440,
  height: 640,
  sizes: "100vw"
};

// src/components/ImageRow/index.jsx
var import_react13 = __toModule(require("react"));
var import_prop_types13 = __toModule(require("prop-types"));
var import_styled_components13 = __toModule(require("styled-components"));

// src/components/ShoppableImage/index.jsx
var import_react12 = __toModule(require("react"));
var import_styled_components12 = __toModule(require("styled-components"));
var import_prop_types12 = __toModule(require("prop-types"));
var Wrapper8 = import_styled_components12.default.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`;
var StyledText = (0, import_styled_components12.default)(Text)`
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
`;
var ShoppableImage = (props) => {
  const {text, link, className, ...imageProps} = props;
  return /* @__PURE__ */ import_react12.default.createElement(Wrapper8, {
    className
  }, /* @__PURE__ */ import_react12.default.createElement("a", {
    href: link
  }, /* @__PURE__ */ import_react12.default.createElement(Image, {
    ...imageProps
  }), text && /* @__PURE__ */ import_react12.default.createElement(StyledText, {
    heading: true
  }, text)));
};
ShoppableImage.propTypes = {
  link: import_prop_types12.default.string,
  text: import_prop_types12.default.string
};

// src/components/ImageRow/index.jsx
var LayoutStyles = import_styled_components13.default.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
  flex-direction: ${(props) => props.reverse ? "row-reverse" : "row"};
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }

    ${(props) => props.layout === "contrast" && import_styled_components13.css`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${(props) => props.layout === "overlap" && import_styled_components13.css`
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

    ${(props) => props.layout === "overlap" && props.reverse && import_styled_components13.css`
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

    ${(props) => props.layout === "sidebyside" && import_styled_components13.css`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${(props) => props.layout === "padded" && import_styled_components13.css`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${(props) => props.layout === "contrast" && import_styled_components13.css`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${(props) => props.layout === "overlap" && import_styled_components13.css`
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

    ${(props) => props.layout === "overlap" && props.reverse && import_styled_components13.css`
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

    ${(props) => props.layout === "sidebyside" && import_styled_components13.css`
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
`;
var LAYOUT = {
  contrast: [
    {
      width: 432,
      height: 510,
      sizes: "(max-width: 600px) 100vw, 30vw"
    },
    {
      width: 720,
      height: 800,
      sizes: "(max-width: 600px) 100vw, 50vw"
    }
  ],
  sidebyside: [
    {
      width: 680,
      height: 800,
      sizes: "(max-width: 600px) 50vw, 40vw"
    },
    {
      width: 680,
      height: 800,
      sizes: "(max-width: 600px) 50vw, 40vw"
    }
  ],
  overlap: [
    {
      width: 680,
      height: 850,
      sizes: "(max-width: 600px) 50vw, 40vw"
    },
    {
      width: 680,
      height: 850,
      sizes: "(max-width: 600px) 50vw, 40vw"
    }
  ]
};
var ImageRow = ({layout, reverse, images}) => /* @__PURE__ */ import_react13.default.createElement(LayoutStyles, {
  layout,
  reverse
}, images.map((image, index) => {
  let layoutProps = LAYOUT[layout][index];
  let imageProps = {
    ...image,
    ...layoutProps
  };
  return /* @__PURE__ */ import_react13.default.createElement(ShoppableImage, {
    ...imageProps
  });
}));
ImageRow.defaultProps = {
  layout: "sidebyside"
};
ImageRow.propTypes = {
  layout: import_prop_types13.default.oneOf(["contrast", "sidebyside", "overlap"]),
  reverse: import_prop_types13.default.bool,
  images: import_prop_types13.default.array
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Blogpost,
  Blogposts,
  Button,
  Carousel,
  Flex,
  Grid,
  HeroBanner,
  Image,
  ImageRow,
  Row,
  ShoppableImage,
  Stack,
  Text
});
