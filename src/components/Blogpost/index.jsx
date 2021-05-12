import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { decodeHtmlEntities } from '../../utils/decode-html-entities.js';
import styled from 'styled-components';
import { Text } from '../Text';

export const Wrapper = styled.a`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: block;
  max-width: 400px;

  &:hover {
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
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

let stripAndParse = (str) => {
  let stripped = str.replace(/(<([^>]+)>)/gi, '');
  let parsed = decodeHtmlEntities(stripped);

  return parsed;
};

export const Blogpost = ({ data, className }) => {
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
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(pictureEl.current.querySelector('img'));

    return () => observer.disconnect();
  }, [pictureEl]);

  let images =
    data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'];

  let sortedImages = Object.values(images).sort((a, b) => a.width - b.width);

  let srcSet = sortedImages
    .map((image) => `${image.source_url} ${image.width}w`)
    .join(',');

  return (
    <Wrapper className={className} href={data.link}>
      <ImageWrapper>
        <picture ref={pictureEl}>
          <source
            data-srcset={srcSet}
            sizes="(max-width: 767px) 240px, 300px"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt={data.title.rendered}
            loading="lazy"
          />
        </picture>
      </ImageWrapper>
      <Text as="h3" lineHeight={1.3} weight={600} spacing="0.25rem">
        {stripAndParse(data.title.rendered)}
      </Text>
      <Text size="sm" lineHeight={1.5} weight={400}>
        {stripAndParse(data.excerpt.rendered)}
      </Text>
    </Wrapper>
  );
};

Blogpost.propTypes = {
  /** Data fetched from the Wordpress REST API */
  data: PropTypes.object.isRequired,
  /** An optional class name*/
  className: PropTypes.string,
};
