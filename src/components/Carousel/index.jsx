import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import { ArrowLeft, ArrowRight } from 'react-feather';

// this config will also be used for the
export const keenConfig = {
  loop: true,
  duration: 300,
};

const Wrapper = styled.div`
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
    ${(props) =>
      !Number.isInteger(props.slidesPerViewMob) &&
      css`
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
      `}
  }
`;

const Navigation = styled.div`
  --nav-inset: 2rem;
  position: absolute;

  ${(props) =>
    props.position.map(
      (pos) => css`
        ${pos}: var(--nav-inset);
      `
    )}

  @media (max-width: 1024px) {
    --nav-inset: 0.75rem;
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: var(--nav-inset);
  }
`;

const Button = styled.button`
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

const CarouselWrapper = styled.div`
  overflow: hidden;
  /* if slidesPerView isnt a whole number add the offset */
  padding-left: ${(props) =>
    !Number.isInteger(props.slidesPerView) && `${props.offsetStart}rem`};

  @media (max-width: 767px) {
    /* if slidesPerViewMob isnt a whole number add the offset */
    padding-left: ${(props) =>
      !Number.isInteger(props.slidesPerViewMob) && `${props.offsetStart}rem`};
    width: 100%;

    > * {
      overflow: visible;
    }
  }
`;

export const Carousel = ({
  children,
  slidesPerView = 1,
  slidesPerViewMob = 1,
  spacing = 0,
  offsetStart,
  arrowsPosition = ['bottom', 'right'],
}) => {
  const [sliderRef, slider] = useKeenSlider({
    ...keenConfig,
    slidesPerView,
    spacing,
    breakpoints: {
      '(max-width: 767px)': {
        slidesPerView: slidesPerViewMob,
      },
    },
  });

  let prev = () => {
    slider.prev();
  };

  let next = () => {
    slider.next();
  };

  return (
    <Wrapper
      className="keen-wrapper"
      offsetStart={offsetStart}
      slidesPerViewMob={slidesPerViewMob}
      // use data attributes so we can create the config for our static markup
      data-slidesperview={slidesPerView}
      data-slidesperviewmob={slidesPerViewMob}
      data-offsetstart={offsetStart}
      data-spacing={spacing}
    >
      <CarouselWrapper
        offsetStart={offsetStart}
        slidesPerView={slidesPerView}
        slidesPerViewMob={slidesPerViewMob}
      >
        <div ref={sliderRef} className="keen-slider">
          {React.Children.map(children, (child) =>
            React.cloneElement(
              child,
              { className: `keen-slider__slide` },
              child.props.children
            )
          )}
        </div>
      </CarouselWrapper>
      <Navigation position={arrowsPosition}>
        <Button className="keen-prev" onClick={() => prev()}>
          <ArrowLeft size={18} />
        </Button>
        <Button className="keen-next" onClick={() => next()}>
          <ArrowRight size={18} />
        </Button>
      </Navigation>
    </Wrapper>
  );
};

Carousel.propTypes = {
  /** Number of slides to show on desktop */
  slidesPerView: PropTypes.number,
  /** Number of slides to show on mobile */
  slidesPerViewMob: PropTypes.number,
  /** Amount of spacing (in pixels) between each slide */
  spacing: PropTypes.number,
  /** Amount of offset you want at the start of the carousel content */
  offsetStart: PropTypes.number,
};
