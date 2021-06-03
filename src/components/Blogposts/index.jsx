import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Blogpost } from '../Blogpost';
import { Carousel } from '../Carousel';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';

const Wrapper = styled.div`
  width: 100%;
`;

const ConditionalWrapper = (props) => {
  let {
    isCarousel,
    children,
    slidesPerView,
    slidesPerViewMob,
    spacing,
    offsetStart,
  } = props;

  return isCarousel ? (
    <Carousel
      slidesPerView={slidesPerView}
      spacing={spacing}
      slidesPerViewMob={slidesPerViewMob}
      offsetStart={offsetStart}
    >
      {children}
    </Carousel>
  ) : (
    children
  );
};

export const Blogposts = (props) => {
  const { postIds } = props;

  let stringifiedIds = postIds.join(',');

  const { data, error } = useSWR(
    `https://www.missguided.co.uk/babezine/wp-json/wp/v2/posts?include=${stringifiedIds}&_fields=link,title,excerpt,_links,_embedded&_embed`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Wrapper>
      <ConditionalWrapper {...props}>
        {data.map((post, index) => (
          <Blogpost key={index} data={post} />
        ))}
      </ConditionalWrapper>
    </Wrapper>
  );
};

Blogposts.propTypes = {
  /** An array of post ID's we use to grab the data*/
  postIds: PropTypes.array.isRequired,
  /** Set to true if you want the blogposts inside a carousel */
  isCarousel: PropTypes.bool,
  /** Number of slides to show on desktop */
  slidesPerView: PropTypes.number,
  /** Number of slides to show on mobile */
  slidesPerViewMob: PropTypes.number,
  /** Amount of spacing (in pixels) between each slide */
  spacing: PropTypes.number,
  /** Passed down to the carousel, how much offset there should be */
  offsetStart: PropTypes.number,
};
