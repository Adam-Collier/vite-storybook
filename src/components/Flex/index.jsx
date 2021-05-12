import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${(props) => props.direction || 'row'};
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

export const Flex = (props) => {
  const { children, gap, direction, alignItems, justifyContent, wrapWidth } =
    props;

  return (
    <FlexWrapper
      gap={gap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
      wrapWidth={wrapWidth}
      style={{ '--gap': props.gap }}
    >
      {children}
    </FlexWrapper>
  );
};

Flex.propTypes = {
  /** Gap between grid elements in rems */
  gap: PropTypes.number,
  /** At what value, in pixels, the flex elements should wrap */
  wrapWidth: PropTypes.number,
};

Flex.defaultProps = {
  gap: 1,
  direction: 'row',
};
