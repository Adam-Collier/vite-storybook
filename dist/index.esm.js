// src/components/Blogpost/index.jsx
import React2, {useRef, useEffect} from "react";
import PropTypes2 from "prop-types";

// src/utils/decode-html-entities.js
var decodeHtmlEntities = (html) => {
  var textArea = document.createElement("textarea");
  textArea.innerHTML = html;
  let decodedHTML = textArea.value;
  textArea.remove();
  return decodedHTML;
};

// src/components/Blogpost/index.jsx
import styled2 from "styled-components";

// src/components/Text/index.jsx
import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";
var TextElement = styled.p`
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

  ${(props) => props.titling && css`
      font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
      letter-spacing: 0.5px;
    `}

  ${(props) => props.heading && css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${(props) => props.truncate && css`
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
  return /* @__PURE__ */ React.createElement(TextElement, {
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
  heading: PropTypes.bool,
  titling: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
  size: PropTypes.oneOf([
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
  element: PropTypes.string,
  weight: PropTypes.number,
  lineHeight: PropTypes.number,
  truncate: PropTypes.number
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
var Wrapper = styled2.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`;
var ImageWrapper = styled2.div`
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
  const pictureEl = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ React2.createElement(Wrapper, {
    className,
    href: data.link
  }, /* @__PURE__ */ React2.createElement(ImageWrapper, null, /* @__PURE__ */ React2.createElement("picture", {
    ref: pictureEl
  }, /* @__PURE__ */ React2.createElement("source", {
    "data-srcset": srcSet,
    sizes: "(max-width: 767px) 240px, 300px"
  }), /* @__PURE__ */ React2.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    alt: data.title.rendered,
    loading: "lazy"
  }))), /* @__PURE__ */ React2.createElement(Text, {
    as: "h3",
    lineHeight: 1.5,
    weight: 600,
    spacing: "0.25rem"
  }, stripAndParse(data.title.rendered)), /* @__PURE__ */ React2.createElement(Text, {
    size: "sm",
    lineHeight: 1.5,
    weight: 400
  }, stripAndParse(data.excerpt.rendered)));
};
Blogpost.propTypes = {
  data: PropTypes2.object.isRequired,
  className: PropTypes2.string
};

// src/components/Blogposts/index.jsx
import React4 from "react";
import PropTypes4 from "prop-types";
import styled4 from "styled-components";

// src/components/Carousel/index.jsx
import React3 from "react";
import PropTypes3 from "prop-types";
import styled3, {css as css2} from "styled-components";
import {useKeenSlider} from "keen-slider/react";
import {ArrowLeft, ArrowRight} from "react-feather";
var keenConfig = {
  loop: true,
  duration: 300
};
var Wrapper2 = styled3.div`
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
    ${(props) => !Number.isInteger(props.slidesPerViewMob) && css2`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`;
var Navigation = styled3.div`
  --nav-inset: 2rem;
  position: absolute;

  ${(props) => props.position.map((pos) => css2`
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
var Button = styled3.button`
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
var CarouselWrapper = styled3.div`
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
  const [sliderRef, slider] = useKeenSlider({
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
  return /* @__PURE__ */ React3.createElement(Wrapper2, {
    className: "keen-wrapper",
    offsetStart,
    slidesPerViewMob,
    "data-slidesperview": slidesPerView,
    "data-slidesperviewmob": slidesPerViewMob,
    "data-offsetstart": offsetStart,
    "data-spacing": spacing
  }, /* @__PURE__ */ React3.createElement(CarouselWrapper, {
    offsetStart,
    slidesPerView,
    slidesPerViewMob
  }, /* @__PURE__ */ React3.createElement("div", {
    ref: sliderRef,
    className: "keen-slider"
  }, React3.Children.map(children, (child) => React3.cloneElement(child, {className: `keen-slider__slide`}, child.props.children)))), /* @__PURE__ */ React3.createElement(Navigation, {
    position: arrowsPosition
  }, /* @__PURE__ */ React3.createElement(Button, {
    className: "keen-prev",
    onClick: () => prev()
  }, /* @__PURE__ */ React3.createElement(ArrowLeft, {
    size: 18
  })), /* @__PURE__ */ React3.createElement(Button, {
    className: "keen-next",
    onClick: () => next()
  }, /* @__PURE__ */ React3.createElement(ArrowRight, {
    size: 18
  }))));
};
Carousel.propTypes = {
  slidesPerView: PropTypes3.number,
  slidesPerViewMob: PropTypes3.number,
  spacing: PropTypes3.number,
  offsetStart: PropTypes3.number
};

// src/components/Blogposts/index.jsx
import useSWR from "swr";

// src/utils/fetcher.js
import axios from "axios";
var fetcher = (url) => axios.get(url).then((res) => res.data);

// src/components/Blogposts/index.jsx
var Wrapper3 = styled4.div`
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
  return isCarousel ? /* @__PURE__ */ React4.createElement(Carousel, {
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
  const {data, error} = useSWR(`https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${stringifiedIds}&_fields=link,title,excerpt,_links,_embedded&_embed`, fetcher);
  if (error)
    return /* @__PURE__ */ React4.createElement("div", null, "failed to load");
  if (!data)
    return /* @__PURE__ */ React4.createElement("div", null, "loading...");
  return /* @__PURE__ */ React4.createElement(Wrapper3, null, /* @__PURE__ */ React4.createElement(ConditionalWrapper, {
    ...props
  }, data.map((post, index) => /* @__PURE__ */ React4.createElement(Blogpost, {
    key: index,
    data: post
  }))));
};
Blogposts.propTypes = {
  postIds: PropTypes4.array.isRequired,
  isCarousel: PropTypes4.bool,
  slidesPerView: PropTypes4.number,
  slidesPerViewMob: PropTypes4.number,
  spacing: PropTypes4.number,
  offsetStart: PropTypes4.number
};

// src/components/Button/index.jsx
import React5 from "react";
import PropTypes5 from "prop-types";
import styled5 from "styled-components";
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
var ButtonBase = styled5.a`
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
var FillButton = styled5(ButtonBase)`
  background: ${(props) => props.type.background};
  color: ${(props) => props.type.color};
  border-color: ${(props) => props.type.borderColor};

  &:hover {
    color: ${(props) => props.type.color};
    background: ${(props) => props.type.hover};
  }
`;
var OutlineButton = styled5(ButtonBase)`
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
  return /* @__PURE__ */ React5.createElement(Component, {
    href: link,
    as: link ? "a" : "button",
    className,
    onClick,
    icon,
    text,
    isFullWidth,
    padding,
    type: buttonType
  }, icon && /* @__PURE__ */ React5.createElement(Icon, {
    size: iconSize
  }), /* @__PURE__ */ React5.createElement(Text, {
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
  link: PropTypes5.string,
  text: PropTypes5.string,
  variant: PropTypes5.oneOf(["outline", "fill"]),
  type: PropTypes5.string,
  className: PropTypes5.string,
  onClick: PropTypes5.func,
  icon: PropTypes5.elementType,
  isFullWidth: PropTypes5.bool,
  size: PropTypes5.oneOf(["sm", "md", "lg"])
};

// src/components/Flex/index.jsx
import PropTypes7 from "prop-types";
import React6 from "react";
import styled7, {css as css3} from "styled-components";

// src/components/Row/index.jsx
import styled6 from "styled-components";
import PropTypes6 from "prop-types";
var Row = styled6.section`
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
  maxWidth: PropTypes6.oneOf(["none", "sm", "md", "lg", "xl", "2xl"]),
  padding: PropTypes6.bool
};

// src/components/Flex/index.jsx
var Wrapper4 = styled7.div`
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
  ${(props) => typeof props.itemFlex === "string" && css3`
      > * {
        flex: ${(props2) => props2.itemFlex}};
      }
    `}

  ${(props) => Array.isArray(props.itemFlex) && css3`
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
  return /* @__PURE__ */ React6.createElement(Row, {
    maxWidth,
    padding
  }, /* @__PURE__ */ React6.createElement(Wrapper4, {
    gap,
    align,
    justify,
    direction,
    style: {"--flex-gap": props.gap},
    itemFlex
  }, children));
};
Flex.propTypes = {
  gap: PropTypes7.number,
  align: PropTypes7.string,
  justify: PropTypes7.string,
  direction: PropTypes7.string,
  itemFlex: PropTypes7.oneOfType([PropTypes7.string, PropTypes7.array]),
  padding: PropTypes7.bool,
  maxWidth: PropTypes7.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Flex.defaultProps = {
  gap: 1,
  direction: "row"
};

// src/components/grid/index.jsx
import React7 from "react";
import PropTypes8 from "prop-types";
import styled8 from "styled-components";
var Wrapper5 = styled8(Row)`
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
  return /* @__PURE__ */ React7.createElement(Wrapper5, {
    ...props
  }, children);
};
Grid.propTypes = {
  gap: PropTypes8.number,
  wrapWidth: PropTypes8.number,
  padding: PropTypes8.bool,
  maxWidth: PropTypes8.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Grid.defaultProps = {
  gap: 1,
  wrapWidth: 340
};

// src/components/HeroBanner/index.jsx
import React10 from "react";
import PropTypes11 from "prop-types";
import styled11 from "styled-components";

// src/components/Image/index.jsx
import React8, {useEffect as useEffect2, useRef as useRef2} from "react";
import PropTypes9 from "prop-types";
import styled9 from "styled-components";
var ImageWrapper2 = styled9.div`
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
  const pictureEl = useRef2(null);
  useEffect2(() => {
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
  return /* @__PURE__ */ React8.createElement(ImageWrapper2, {
    width,
    height,
    backgroundColor,
    isArtDirected,
    artDirectedImages,
    className
  }, /* @__PURE__ */ React8.createElement("div", null), /* @__PURE__ */ React8.createElement("picture", {
    ref: pictureEl
  }, isArtDirected && artDirectedImages.map((image) => {
    return imageTypes.map((type, index) => /* @__PURE__ */ React8.createElement("source", {
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
  }), imageTypes.map((type, index) => /* @__PURE__ */ React8.createElement("source", {
    key: index,
    type: `image/${type}`,
    "data-srcset": createSrcSet({
      type,
      width,
      src: defaultImage,
      isArtDirected: false
    }),
    sizes
  })), /* @__PURE__ */ React8.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    alt,
    loading: "lazy"
  })));
};
Image.propTypes = {
  width: PropTypes9.number,
  alt: PropTypes9.string.isRequired,
  src: PropTypes9.oneOfType([PropTypes9.string, PropTypes9.array]).isRequired,
  quality: PropTypes9.number,
  sizes: PropTypes9.string,
  height: PropTypes9.number,
  backgroundColor: PropTypes9.string
};
Image.defaultProps = {
  backgroundColor: "#ECECF2",
  quality: 80
};

// src/components/Stack/index.jsx
import React9 from "react";
import styled10, {css as css4} from "styled-components";
import PropTypes10 from "prop-types";
var Wrapper6 = styled10.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props) => props.direction === "column" && css4`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${(props) => props.direction === "row" && css4`
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
  return /* @__PURE__ */ React9.createElement(Row, {
    maxWidth,
    padding
  }, /* @__PURE__ */ React9.createElement(Wrapper6, {
    className,
    as,
    align,
    justify,
    direction,
    style: {...style, "--stack-gap": gap}
  }, children));
};
Stack.propTypes = {
  as: PropTypes10.string,
  className: PropTypes10.string,
  style: PropTypes10.string,
  gap: PropTypes10.number,
  align: PropTypes10.string,
  justify: PropTypes10.string,
  direction: PropTypes10.string,
  itemFlex: PropTypes10.oneOfType([PropTypes10.string, PropTypes10.array]),
  padding: PropTypes10.bool,
  maxWidth: PropTypes10.oneOf(["none", "sm", "md", "lg", "xl", "2xl"])
};
Stack.defaultProps = {
  as: "div",
  direction: "column",
  gap: 1.5,
  align: "stretch",
  justify: "flex-start"
};

// src/components/HeroBanner/index.jsx
var Subcopy = styled11(Text)`
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
var Wrapper7 = styled11.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1024px) {
    --padding: 0.75rem;
  }
`;
var Content = styled11(Stack)`
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
var Logo = styled11.img`
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
  return /* @__PURE__ */ React10.createElement(Wrapper7, {
    href: link,
    style: noContentBackground ? {...noBackgroundStyles} : {...defaultStyles},
    className,
    contentColor,
    contentBackground
  }, /* @__PURE__ */ React10.createElement(Image, {
    ...imageProps
  }), /* @__PURE__ */ React10.createElement(Content, {
    gap: noContentBackground ? 1.5 : 0.5,
    noContentBackground
  }, /* @__PURE__ */ React10.createElement(Logo, {
    src: logo,
    alt: "logo",
    style: noLogoBackground ? {...noLogoStyles} : {}
  }), /* @__PURE__ */ React10.createElement(Subcopy, null, subcopy), /* @__PURE__ */ React10.createElement(Button2, {
    text: buttonText,
    variant: buttonVariant,
    type: buttonType
  })));
};
HeroBanner.propTypes = {
  className: PropTypes11.string,
  buttonText: PropTypes11.string,
  buttonVariant: PropTypes11.string,
  buttonType: PropTypes11.string,
  link: PropTypes11.string.isRequired,
  logo: PropTypes11.string,
  subcopy: PropTypes11.string,
  contentBackground: PropTypes11.string,
  contentColor: PropTypes11.string,
  alt: PropTypes11.string.isRequired,
  src: PropTypes11.array.isRequired,
  width: PropTypes11.number,
  height: PropTypes11.number,
  sizes: PropTypes11.string,
  noLogoBackground: PropTypes11.bool,
  noContentBackground: PropTypes11.bool
};
HeroBanner.defaultProps = {
  width: 1440,
  height: 640,
  sizes: "100vw"
};

// src/components/ImageRow/index.jsx
import React12 from "react";
import PropTypes13 from "prop-types";
import styled13, {css as css5} from "styled-components";

// src/components/ShoppableImage/index.jsx
import React11 from "react";
import styled12 from "styled-components";
import PropTypes12 from "prop-types";
var Wrapper8 = styled12.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`;
var StyledText = styled12(Text)`
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
  return /* @__PURE__ */ React11.createElement(Wrapper8, {
    className
  }, /* @__PURE__ */ React11.createElement("a", {
    href: link
  }, /* @__PURE__ */ React11.createElement(Image, {
    ...imageProps
  }), text && /* @__PURE__ */ React11.createElement(StyledText, {
    heading: true
  }, text)));
};
ShoppableImage.propTypes = {
  link: PropTypes12.string,
  text: PropTypes12.string
};

// src/components/ImageRow/index.jsx
var LayoutStyles = styled13.div`
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

    ${(props) => props.layout === "contrast" && css5`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${(props) => props.layout === "overlap" && css5`
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

    ${(props) => props.layout === "overlap" && props.reverse && css5`
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

    ${(props) => props.layout === "sidebyside" && css5`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${(props) => props.layout === "padded" && css5`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${(props) => props.layout === "contrast" && css5`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${(props) => props.layout === "overlap" && css5`
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

    ${(props) => props.layout === "overlap" && props.reverse && css5`
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

    ${(props) => props.layout === "sidebyside" && css5`
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
var ImageRow = ({layout, reverse, images}) => /* @__PURE__ */ React12.createElement(LayoutStyles, {
  layout,
  reverse
}, images.map((image, index) => {
  let layoutProps = LAYOUT[layout][index];
  let imageProps = {
    ...image,
    ...layoutProps
  };
  return /* @__PURE__ */ React12.createElement(ShoppableImage, {
    ...imageProps
  });
}));
ImageRow.defaultProps = {
  layout: "sidebyside"
};
ImageRow.propTypes = {
  layout: PropTypes13.oneOf(["contrast", "sidebyside", "overlap"]),
  reverse: PropTypes13.bool,
  images: PropTypes13.array
};
export {
  Blogpost,
  Blogposts,
  Button2 as Button,
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
};
