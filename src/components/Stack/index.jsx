import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Row } from '../Row';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${(props) =>
    props.direction === 'column' &&
    css`
      > * + * {
        margin-top: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-top: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}

  ${(props) =>
    props.direction === 'row' &&
    css`
      > * + * {
        margin-left: calc(var(--stack-gap) * 1rem);

        @media (max-width: 767px) {
          margin-left: calc(var(--stack-gap) * 0.75rem);
        }
      }
    `}
`;

export const Stack = (props) => {
  const {
    as,
    direction,
    gap,
    align,
    justify,
    className,
    children,
    maxWidth,
    customMaxWidth,
    style,
    padding,
  } = props;

  return (
    <Row maxWidth={maxWidth} padding={padding} customMaxWidth={customMaxWidth}>
      <Wrapper
        className={className}
        as={as}
        align={align}
        justify={justify}
        direction={direction}
        style={{ ...style, '--stack-gap': gap }}
      >
        {children}
      </Wrapper>
    </Row>
  );
};

Stack.propTypes = {
  /** What element should be used (defaults to div) */
  as: PropTypes.string,
  /** Optionally give the Stack a class name */
  className: PropTypes.string,
  /** Add any inline styles */
  style: PropTypes.string,
  /** Gap between elements in rems */
  gap: PropTypes.number,
  /** Flex property align-items */
  align: PropTypes.string,
  /** Flex property justify-content */
  justify: PropTypes.string,
  /** Flex property flex-direction */
  direction: PropTypes.string,
  /** The flex values for the flex items. Provide an array to adjust individual flex items or a string for a blanket value  */
  itemFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Should the element have padding on mobile */
  padding: PropTypes.bool,
  /** What max width should the element have (if any) */
  maxWidth: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  /** If the predefined max width values don't accomodate some special scenario, you can add a custom max width */
  customMaxWidth: PropTypes.number,
};

Stack.defaultProps = {
  as: 'div',
  direction: 'column',
  gap: 1.5,
  align: 'stretch',
  justify: 'flex-start',
};
