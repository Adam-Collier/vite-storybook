import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Row';
import styled from 'styled-components';

const Wrapper = styled(Row)`
  display: grid;
  grid-gap: ${(props) => props.gap && `${props.gap}rem`};
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

export const Grid = (props) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Grid.propTypes = {
  /** Gap between grid elements in rems */
  gap: PropTypes.number,
  /** At what value, in pixels, the grid elements should wrap */
  wrapWidth: PropTypes.number,
  /** Should the element have padding */
  padding: PropTypes.bool,
  /** What max width should the element have (if any) */
  maxWidth: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  /** If the predefined max width values don't accomodate some special scenario, you can add a custom max width */
  customMaxWidth: PropTypes.number,
};

Grid.defaultProps = {
  gap: 1,
  wrapWidth: 340,
};
