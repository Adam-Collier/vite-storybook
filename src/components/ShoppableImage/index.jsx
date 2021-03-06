import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from '../Image';
import { Text } from '../Text';

const Wrapper = styled.div`
  width: 100%;

  a {
    display: block;
    position: relative;
  }
`;

const StyledText = styled(Text)`
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

export const ShoppableImage = (props) => {
  const { text, link, className, ...imageProps } = props;

  return (
    <Wrapper className={className}>
      <a href={link}>
        <Image {...imageProps} />
        {text && <StyledText heading>{text}</StyledText>}
      </a>
    </Wrapper>
  );
};

ShoppableImage.propTypes = {
  /** What should the image link to? */
  link: PropTypes.string,
  /** Text for the CTA */
  text: PropTypes.string,
};
