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

  line-height: ${(props) => props.heading ? 1.3 : props.lineHeight};
  font-weight: ${(props) => props.heading ? 600 : props.weight};
  font-family: ${(props) => !props.heading && `"Helvetica Neue", Arial, sans-serif`};
  color: inherit;

  ${(props) => props.heading && css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  & + * {
    margin-top: ${(props) => props.spacing || "1.45rem"};
  }
`;
var Text = (props) => {
  const {
    element,
    children,
    size,
    align,
    heading,
    className,
    lineHeight,
    weight,
    spacing
  } = props;
  return /* @__PURE__ */ React.createElement(TextElement, {
    as: element,
    style: {fontSize: `var(--text-${size})`, textAlign: align},
    heading,
    className,
    lineHeight,
    weight,
    spacing
  }, children);
};
Text.propTypes = {
  heading: PropTypes.bool,
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
  children: PropTypes.string
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
import styled3 from "styled-components";
import {useKeenSlider} from "keen-slider/react";
import {ArrowLeft, ArrowRight} from "react-feather";
var keenConfig = {
  loop: true,
  duration: 300
};
var Wrapper3 = styled3.div`
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
    overflow: hidden;
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
`;
var Navigation = styled3.div`
  --nav-inset: 3rem;
  position: absolute;
  bottom: var(--nav-inset);
  right: var(--nav-inset);

  @media (max-width: 1280px) {
    --nav-inset: 1rem;
  }

  /* if the carousel exists within the Blogposts component move the navigation */
  ${Wrapper2} & {
    --nav-inset: 2rem;
    bottom: auto;
    top: var(--nav-inset);
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
    background: hsl(0, 0%, 20%);
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }
`;
var CarouselWrapper = styled3.div`
  padding-left: ${(props) => `${props.offsetStart}rem`};

  @media (max-width: 767px) {
    width: 100vw;
    overflow: hidden;

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
  offsetStart
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
  console.log(Wrapper2, "this is the blogposts wrapper");
  let next = () => {
    slider.next();
  };
  return /* @__PURE__ */ React3.createElement(Wrapper3, {
    className: "keen-wrapper",
    "data-slidesperview": slidesPerView,
    "data-slidesperviewmob": slidesPerViewMob,
    "data-offsetstart": offsetStart,
    "data-spacing": spacing
  }, /* @__PURE__ */ React3.createElement(CarouselWrapper, {
    offsetStart
  }, /* @__PURE__ */ React3.createElement("div", {
    ref: sliderRef,
    className: "keen-slider"
  }, React3.Children.map(children, (child) => React3.cloneElement(child, {className: `keen-slider__slide`}, child.props.children)))), /* @__PURE__ */ React3.createElement(Navigation, null, /* @__PURE__ */ React3.createElement(Button, {
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
var Wrapper2 = styled4.div`
  width: 100%;
`;
var ConditionalWrapper = (props) => {
  let {isCarousel, children, slidesPerView, slidesPerViewMob, spacing} = props;
  return isCarousel ? /* @__PURE__ */ React4.createElement(Carousel, {
    slidesPerView,
    spacing,
    slidesPerViewMob,
    offsetStart: 1
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
  return /* @__PURE__ */ React4.createElement(Wrapper2, null, /* @__PURE__ */ React4.createElement(ConditionalWrapper, {
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
  spacing: PropTypes4.number
};

// src/components/Button/index.jsx
import React5 from "react";
import PropTypes5 from "prop-types";
import styled5 from "styled-components";
var ButtonBase = styled5.a`
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  width: fit-content;
  border: 1px solid var(--primary-black);
  padding: ${(props) => props.text ? `0.75rem 1rem` : `1rem`};
  background: inherit;
  border-radius: var(--border-radius);
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  svg {
    display: block;
    margin-right: ${(props) => props.text && props.icon && "0.35rem"};
  }
`;
var FillButton = styled5(ButtonBase)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`;
var OutlineButton = styled5(ButtonBase)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`;
var Button2 = ({text, link, variant, className, onClick, icon}) => {
  let Component;
  let Icon = icon;
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
    text
  }, icon && /* @__PURE__ */ React5.createElement(Icon, {
    size: 16
  }), /* @__PURE__ */ React5.createElement(Text, {
    size: "base",
    heading: true
  }, text));
};
Button2.propTypes = {
  link: PropTypes5.string,
  text: PropTypes5.string.isRequired,
  variant: PropTypes5.oneOf(["outline", "fill"]),
  className: PropTypes5.string,
  onClick: PropTypes5.func,
  icon: PropTypes5.elementType
};

// src/components/Flex/index.jsx
import PropTypes6 from "prop-types";
import React6 from "react";
import styled6 from "styled-components";
var FlexWrapper = styled6.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  /* use this to emulate the gap property */
  /* only works horizontally */
  margin: calc(-1 * calc(var(--gap) * 1rem)) 0 0
    calc(-1 * calc(var(--gap) * 1rem));
  width: calc(100% + calc(var(--gap) * 1rem));

  > * {
    flex: ${(props) => props.wrapWidth && `1 1 ${props.wrapWidth}px`};
    /* use this to emulate the gap property */
    /* only works horizontally */
    margin: calc(var(--gap) * 1rem) 0 0 calc(var(--gap) * 1rem);
  }
`;
var Flex = (props) => {
  const {children, gap, direction, alignItems, justifyContent, wrapWidth} = props;
  return /* @__PURE__ */ React6.createElement(FlexWrapper, {
    gap,
    alignItems,
    justifyContent,
    direction,
    wrapWidth,
    style: {"--gap": props.gap}
  }, children);
};
Flex.propTypes = {
  gap: PropTypes6.number,
  wrapWidth: PropTypes6.number
};
Flex.defaultProps = {
  gap: 1,
  direction: "row"
};

// src/components/grid/index.jsx
import React7 from "react";
import PropTypes7 from "prop-types";
import styled7 from "styled-components";
var Wrapper4 = styled7.div`
  display: grid;
  grid-gap: ${(props) => `${props.gap}rem`};
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
  return /* @__PURE__ */ React7.createElement(Wrapper4, {
    ...props
  }, children);
};
Grid.propTypes = {
  gap: PropTypes7.number,
  wrapWidth: PropTypes7.number
};
Grid.defaultProps = {
  gap: 1,
  wrapWidth: 340
};

// src/components/HeroBanner/index.jsx
import React10 from "react";
import PropTypes9 from "prop-types";
import styled10 from "styled-components";

// src/components/Image/index.jsx
import React8, {useEffect as useEffect2, useRef as useRef2} from "react";
import PropTypes8 from "prop-types";
import styled8 from "styled-components";
var ImageWrapper2 = styled8.div`
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
    className
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
  let imageTypes = ["webp", "jpeg"];
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
  width: PropTypes8.number,
  alt: PropTypes8.string.isRequired,
  src: PropTypes8.oneOfType([PropTypes8.string, PropTypes8.array]).isRequired,
  quality: PropTypes8.number,
  sizes: PropTypes8.string,
  height: PropTypes8.number,
  backgroundColor: PropTypes8.string
};
Image.defaultProps = {
  backgroundColor: "#ECECF2",
  quality: 80,
  alt: "image component",
  height: 240,
  width: 240
};

// src/components/Stack/index.jsx
import React9 from "react";
import styled9 from "styled-components";
var Wrapper5 = styled9.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: calc(var(--spacing) * 1rem);

    @media (max-width: 767px) {
      margin-top: calc(var(--spacing) * 0.75rem);
    }
  }
`;
var Stack = ({children, spacing, className}) => /* @__PURE__ */ React9.createElement(Wrapper5, {
  className,
  style: {"--spacing": spacing}
}, children);

// src/components/HeroBanner/index.jsx
var Subcopy = styled10(Text)`
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
var Wrapper6 = styled10.a`
  --padding: 1rem;
  --gap: 0.5;
  display: block;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`;
var Content = styled10(Stack)`
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
    --content-padding: ${(props) => props.noContentBackground ? "1.5rem" : "0.75rem"};
  }
`;
var Logo = styled10.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`;
var HeroBanner = (props) => {
  const {
    className,
    buttonText = "shop now",
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
    "--gap": 1.5,
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
  return /* @__PURE__ */ React10.createElement(Wrapper6, {
    href: link,
    style: noContentBackground ? {...noBackgroundStyles} : {...defaultStyles},
    className,
    contentColor,
    contentBackground
  }, /* @__PURE__ */ React10.createElement(Image, {
    ...imageProps
  }), /* @__PURE__ */ React10.createElement(Content, {
    spacing: "var(--gap)",
    noContentBackground
  }, /* @__PURE__ */ React10.createElement(Logo, {
    src: logo,
    alt: "logo",
    style: noLogoBackground ? {...noLogoStyles} : {}
  }), /* @__PURE__ */ React10.createElement(Subcopy, null, subcopy), /* @__PURE__ */ React10.createElement(Button2, {
    text: buttonText,
    variant: "fill"
  })));
};
HeroBanner.propTypes = {
  className: PropTypes9.string,
  buttonText: PropTypes9.string,
  link: PropTypes9.string.isRequired,
  logo: PropTypes9.string,
  subcopy: PropTypes9.string,
  contentBackground: PropTypes9.string,
  contentColor: PropTypes9.string,
  alt: PropTypes9.string.isRequired,
  src: PropTypes9.array.isRequired,
  width: PropTypes9.number,
  height: PropTypes9.number,
  sizes: PropTypes9.string,
  noLogoBackground: PropTypes9.bool,
  noContentBackground: PropTypes9.bool
};
HeroBanner.defaultProps = {
  width: 1440,
  height: 640,
  sizes: "100vw"
};

// src/components/Row/index.jsx
import styled11 from "styled-components";
import PropTypes10 from "prop-types";
var Row = styled11.section`
  --width-sm: 640px;
  --width-md: 768px;
  --width-lg: 1024px;
  --width-xl: 1280px;
  --width-2xl: 1536px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  max-width: ${(props) => {
  return props.maxWidth ? `var(--width-${props.maxWidth})` : "none";
}};

  @media (max-width: 767px) {
    padding: ${(props) => !props.noPadding && `0 1rem`};
  }
`;
Row.propTypes = {
  maxWidth: PropTypes10.oneOf(["sm", "md", "lg", "xl", "2xl"]),
  noPadding: PropTypes10.bool
};

// src/components/ShoppableImage/index.jsx
import React11 from "react";
import styled12 from "styled-components";
import PropTypes11 from "prop-types";
var Wrapper7 = styled12.div`
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
  const {text, link} = props;
  return /* @__PURE__ */ React11.createElement(Wrapper7, null, /* @__PURE__ */ React11.createElement("a", {
    href: link
  }, /* @__PURE__ */ React11.createElement(Image, {
    ...props
  }), text && /* @__PURE__ */ React11.createElement(StyledText, {
    heading: true
  }, text)));
};
ShoppableImage.propTypes = {
  link: PropTypes11.string,
  text: PropTypes11.string
};
ShoppableImage.defaultProps = {
  link: "/new-in",
  width: 240,
  height: 240,
  alt: "grid item alt",
  src: "https://media.missguided.com/i/missguided/playboy_storybook_default",
  sizes: "(max-width: 767px) 50vw, 298px"
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
  Row,
  ShoppableImage,
  Stack,
  Text
};
