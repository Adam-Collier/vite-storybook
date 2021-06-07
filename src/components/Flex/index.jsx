import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Row } from '../Row';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: wrap;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};

  /* use this to emulate the gap property */
  margin: calc(-1 * calc(var(--flex-gap) * 1rem)) 0 0
    calc(-1 * calc(var(--flex-gap) * 1rem));
  width: calc(100% + calc(var(--flex-gap) * 1rem));

  /* if flex item is a string  */
  ${(props) =>
    typeof props.itemFlex === 'string' &&
    css`
      > * {
        flex: ${(props) => props.itemFlex}};
      }
    `}

  ${(props) =>
    Array.isArray(props.itemFlex) &&
    css`
      ${props.itemFlex.map(
        (value, index) => `
        > :nth-child(${index + 1}) {
          flex: ${value};
        }
      `
      )}
    `}

  > * {
    /* use this to emulate the gap property */
    margin: calc(var(--flex-gap) * 1rem) 0 0 calc(var(--flex-gap) * 1rem);
  }
`;

export const Flex = (props) => {
  const {
    children,
    gap,
    direction,
    align,
    justify,
    maxWidth,
    customMaxWidth,
    itemFlex,
    padding,
  } = props;

  return (
    <Row maxWidth={maxWidth} padding={padding} customMaxWidth={customMaxWidth}>
      <Wrapper
        gap={gap}
        align={align}
        justify={justify}
        direction={direction}
        style={{ '--flex-gap': props.gap }}
        itemFlex={itemFlex}
      >
        {children}
      </Wrapper>
    </Row>
  );
};

Flex.propTypes = {
  /** Gap between grid elements in rems */
  gap: PropTypes.number,
  /** Flex property align-items */
  align: PropTypes.string,
  /** Flex property justify-content */
  justify: PropTypes.string,
  /** Flex property flex-direction */
  direction: PropTypes.string,
  /** The flex values for the flex items. Provide an array to adjust individual flex items or a string for a blanket value  */
  itemFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Should the element have padding */
  padding: PropTypes.bool,
  /** What max width should the element have (if any) */
  maxWidth: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  /** If the predefined max width values don't accomodate some special scenario, you can add a custom max width */
  customMaxWidth: PropTypes.number,
};

Flex.defaultProps = {
  gap: 1,
  direction: 'row',
};
