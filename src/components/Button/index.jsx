import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Text';
import styled from 'styled-components';

const ButtonBase = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  width: ${(props) => (props.isFullWidth ? '100%' : 'fit-content')};
  border: 1px solid var(--primary-black);
  padding: ${(props) => (props.text ? `0.75rem 1rem` : `1rem`)};
  background: inherit;
  border-radius: var(--border-radius);
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  svg {
    display: block;
    margin-right: ${(props) => props.text && props.icon && '0.35rem'};
  }
`;

const FillButton = styled(ButtonBase)`
  background: var(--primary-black);
  color: var(--primary-white);

  &:hover {
    background: var(--primary-white);
    color: var(--primary-black);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: none;
  color: var(--primary-black);

  &:hover {
    background: var(--primary-black);
    color: var(--primary-white);
  }
`;

export const Button = ({
  text,
  link,
  variant,
  className,
  onClick,
  icon,
  isFullWidth,
}) => {
  let Component;
  let Icon = icon;

  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component
      href={link}
      as={link ? 'a' : 'button'}
      className={className}
      onClick={onClick}
      icon={icon}
      text={text}
      isFullWidth={isFullWidth}
    >
      {icon && <Icon size={16} />}
      <Text size="base" heading>
        {text}
      </Text>
    </Component>
  );
};

Button.propTypes = {
  /** Should the button link to somewhere? Defaults as a `button` tag but if a href is provided an `a` tag is rendered */
  link: PropTypes.string,
  /** Your button text */
  text: PropTypes.string.isRequired,
  /** What style your button should have */
  variant: PropTypes.oneOf(['outline', 'fill']),
  /** Add an extra class name */
  className: PropTypes.string,
  /** Run a function when the button is clicked  */
  onClick: PropTypes.func,
  /** Optional: add an icon to your button */
  icon: PropTypes.elementType,
  /** Should the button fill the width of the container */
  isFullWidth: PropTypes.bool,
};
