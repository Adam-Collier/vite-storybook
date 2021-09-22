import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextElement = styled.p`
  --text-5xl: calc(64 / 16 * 1rem);
  --text-4xl: calc(48 / 16 * 1rem);
  --text-3xl: calc(36 / 16 * 1rem);
  --text-2xl: calc(30 / 16 * 1rem);
  --text-xl: calc(24 / 16 * 1rem);
  --text-lg: calc(20 / 16 * 1rem);
  --text-md: calc(18 / 16 * 1rem);
  --text-base: calc(16 / 16 * 1rem);
  --text-sm: calc(14 / 16 * 1rem);
  --text-xs: calc(12 / 16 * 1rem);
  --text-xxs: calc(10 / 16 * 1rem);

  line-height: ${(props) =>
    props.heading || props.titling ? 1.3 : props.lineHeight};
  font-weight: ${(props) =>
    props.heading || props.titling ? 600 : props.weight};
  font-family: ${(props) =>
    !props.heading && !props.titling && `"Helvetica Neue", Arial, sans-serif`};
  color: ${(props) => (props.color ? `var(--${props.color})` : 'inherit')};
  text-transform: none;

  ${(props) =>
    props.titling &&
    css`
      font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
      letter-spacing: 0.5px;
    `}

  ${(props) =>
    props.heading &&
    css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${(props) =>
    props.truncate &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;

export const Text = (props) => {
  const {
    element,
    children,
    color,
    size,
    align,
    heading,
    titling,
    className,
    lineHeight,
    weight,
    spacing,
    truncate,
  } = props;

  return (
    <TextElement
      as={element}
      style={{ fontSize: `var(--text-${size})`, textAlign: align }}
      color={color}
      heading={heading}
      titling={titling}
      className={className}
      lineHeight={lineHeight}
      weight={weight}
      spacing={spacing}
      truncate={truncate}
    >
      {children}
    </TextElement>
  );
};

Text.propTypes = {
  /**
   * Boolean indicating whether the text should be a heading or not
   */
  heading: PropTypes.bool,
  /**
   * Boolean indicating whether the text should use titling or not
   */
  titling: PropTypes.bool,
  /** What alignment should the text have? */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** How large should the text be */
  size: PropTypes.oneOf([
    '5xl',
    '4xl',
    '3xl',
    '2xl',
    'xl',
    'lg',
    'md',
    'base',
    'sm',
    'xs',
    'xxs',
  ]),
  /** Semantically what element should be used */
  element: PropTypes.string,
  /** What weight should the font be (only use if defaults don't satify) */
  weight: PropTypes.number,
  /** Optional line height (only use if defaults don't satify) */
  lineHeight: PropTypes.number,
  /** The number of lines you want to truncate to */
  truncate: PropTypes.number,
  /** The text color. Limited to the CSS variables we us in the design system. */
  color: PropTypes.oneOf([
    'primary-black',
    'primary-white',
    'grey-1',
    'grey-2',
    'grey-3',
    'grey-4',
  ]),
};

Text.defaultProps = {
  heading: false,
  element: 'p',
  size: 'base',
  align: 'left',
  weight: 500,
  lineHeight: 1.75,
};
