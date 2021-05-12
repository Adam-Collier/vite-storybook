import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { Wrapper as BlogpostsWrapper } from '../Blogposts';

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
    overflow: hidden;
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

const Navigation = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;

  /* if the carousel exists within the Blogposts component move the navigation */
  @media (min-width: 768px) {
    ${BlogpostsWrapper} & {
      bottom: auto;
      top: 2rem;
      right: 2rem;
    }
  }

  @media (max-width: 767px) {
    bottom: auto;
    top: 1rem;
    right: 1rem;
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
    background: hsl(0, 0%, 20%);
  }

  &:last-of-type {
    margin-left: 0.5rem;
  }
`;

const CarouselWrapper = styled.div`
  padding-left: ${(props) => `${props.offsetStart}rem`};

  @media (max-width: 767px) {
    width: 100vw;
    overflow: hidden;

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
      // use data attributes so we can create the config for our static markup
      data-slidesperview={slidesPerView}
      data-slidesperviewmob={slidesPerViewMob}
      data-offsetstart={offsetStart}
      data-spacing={spacing}
    >
      <CarouselWrapper offsetStart={offsetStart}>
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
      <Navigation>
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
