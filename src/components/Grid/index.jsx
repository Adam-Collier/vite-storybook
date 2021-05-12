import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
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

export const Grid = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Grid.propTypes = {
  /** Gap between grid elements in rems */
  gap: PropTypes.number,
  /** At what value, in pixels, the grid elements should wrap */
  wrapWidth: PropTypes.number,
};

Grid.defaultProps = {
  gap: 1,
  wrapWidth: 340,
};
