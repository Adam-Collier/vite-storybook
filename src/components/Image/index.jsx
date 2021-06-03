import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageWrapper = styled.div`
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
    padding-top: ${(props) => `${(props.height / props.width) * 100}%`};

    ${(props) =>
      props.isArtDirected &&
      props.artDirectedImages
        .map(({ media, height, width }) => {
          return `
        @media ${media} {
          padding-top: ${(height / width) * 100}%;
        }
      `;
        })
        .join('')}
  }
`;

export const Image = (props) => {
  const {
    width,
    alt,
    src,
    quality,
    sizes,
    height,
    backgroundColor,
    className,
    imageTypes = ['webp', 'jpeg'],
  } = props;

  const pictureEl = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sources = Array.from(
            pictureEl.current.querySelectorAll('source')
          );
          pictureEl.current.lastChild.classList.add('loaded');
          sources.forEach((source) => {
            source.srcset = source.dataset.srcset;
          });
        }
      });
    };

    const options = {
      threshold: 0,
      root: null,
      rootMargin: '-50px 0px 0px 0px',
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(pictureEl.current.querySelector('img'));

    return () => observer.disconnect();
  }, [pictureEl]);

  let imageSizes = [0.25, 0.5, 1, 1.25, 1.5, 2, 2.5];

  let createSrcSet = ({ type, width, src }) => {
    let sizes = imageSizes.flatMap((size) => {
      let imageWidth = width * size;
      return imageWidth < 1920
        ? `${src}.${type}?w=${imageWidth}&qlt=${quality} ${imageWidth}w`
        : [];
    });
    if (!isArtDirected) {
      sizes.push(`${src}.${type}?w=1920&qlt=${quality} 1920w`);
    }

    return sizes.join(',');
  };

  const isArtDirected = Array.isArray(src);

  let defaultImage = isArtDirected ? src[0] : src;
  let artDirectedImages;

  if (isArtDirected) {
    [, ...artDirectedImages] = src;
  }

  return (
    <ImageWrapper
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      isArtDirected={isArtDirected}
      artDirectedImages={artDirectedImages}
      className={className}
    >
      <div></div>
      <picture ref={pictureEl}>
        {isArtDirected &&
          artDirectedImages.map((image) => {
            return imageTypes.map((type, index) => (
              <source
                key={index}
                type={`image/${type}`}
                data-srcset={createSrcSet({
                  type,
                  ...image,
                  isArtDirected: true,
                })}
                sizes={sizes}
                media={image.media}
              />
            ));
          })}
        {imageTypes.map((type, index) => (
          <source
            key={index}
            type={`image/${type}`}
            data-srcset={createSrcSet({
              type,
              width,
              src: defaultImage,
              isArtDirected: false,
            })}
            sizes={sizes}
          />
        ))}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt={alt}
          loading="lazy"
        />
      </picture>
    </ImageWrapper>
  );
};

Image.propTypes = {
  /** What is the width of the image? */
  width: PropTypes.number,
  /** What alt text should the image have? */
  alt: PropTypes.string.isRequired,
  /** Image source from Amplience. Use an array for art directed content or a string if only one image is needed */
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /** Quality of the image (handled by Amplience) defaults to 80 */
  quality: PropTypes.number,
  /** Describe what size the media should be at what viewport widths */
  sizes: PropTypes.string,
  /** What height should the image be? */
  height: PropTypes.number,
  /** The placeholder colour that should be shown before the image has loaded */
  backgroundColor: PropTypes.string,
};

Image.defaultProps = {
  backgroundColor: '#ECECF2',
  quality: 80,
};
