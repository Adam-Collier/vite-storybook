import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ShoppableImage } from '../ShoppableImage';

const LayoutStyles = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    > div {
      width: 50%;
    }

    ${(props) =>
      props.layout === 'contrast' &&
      css`
        > div {
          width: 50%;
        }

        > div:first-of-type {
          padding: 0 10%;
        }
      `};

    ${(props) =>
      props.layout === 'overlap' &&
      css`
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

    ${(props) =>
      props.layout === 'overlap' &&
      props.reverse &&
      css`
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

    ${(props) =>
      props.layout === 'sidebyside' &&
      css`
        padding: 0 5%;

        > div:first-of-type {
          padding-right: 2.5%;
        }

        > div:last-of-type {
          padding-left: 2.5%;
        }
      `};

    ${(props) =>
      props.layout === 'padded' &&
      css`
        > div {
          width: 100%;
        }
        padding: 0 8%;
      `};
  }

  @media (max-width: 767px) {
    ${(props) =>
      props.layout === 'contrast' &&
      css`
        padding: 0 2rem;

        > div:first-of-type {
          padding: 0 10% 0 20%;
          margin-bottom: -2rem;
          z-index: 3;
        }
      `};

    ${(props) =>
      props.layout === 'overlap' &&
      css`
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

    ${(props) =>
      props.layout === 'overlap' &&
      props.reverse &&
      css`
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

    ${(props) =>
      props.layout === 'sidebyside' &&
      css`
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

const LAYOUT = {
  contrast: [
    {
      width: 432,
      height: 510,
      sizes: '(max-width: 600px) 100vw, 30vw',
    },
    {
      width: 720,
      height: 800,
      sizes: '(max-width: 600px) 100vw, 50vw',
    },
  ],
  sidebyside: [
    {
      width: 680,
      height: 800,
      sizes: '(max-width: 600px) 50vw, 40vw',
    },
    {
      width: 680,
      height: 800,
      sizes: '(max-width: 600px) 50vw, 40vw',
    },
  ],
  overlap: [
    {
      width: 680,
      height: 850,
      sizes: '(max-width: 600px) 50vw, 40vw',
    },
    {
      width: 680,
      height: 850,
      sizes: '(max-width: 600px) 50vw, 40vw',
    },
  ],
};

export const ImageRow = ({ layout, reverse, images }) => (
  <LayoutStyles layout={layout} reverse={reverse}>
    {images.map((image, index) => {
      let layoutProps = LAYOUT[layout][index];
      let imageProps = {
        ...image,
        ...layoutProps,
      };

      return <ShoppableImage {...imageProps} />;
    })}
  </LayoutStyles>
);

ImageRow.defaultProps = {
  layout: 'sidebyside',
};

ImageRow.propTypes = {
  /** Choose a predefined layout */
  layout: PropTypes.oneOf(['contrast', 'sidebyside', 'overlap']),
  /** Do you want to switch the order of the images? */
  reverse: PropTypes.bool,
  /** Decide what props you want to pass down to each image. Must always be an array with two items */
  images: PropTypes.array,
};
