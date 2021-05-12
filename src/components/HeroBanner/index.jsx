import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../Button';
import { Text } from '../Text';
import { Image } from '../Image';
import { Stack } from '../Stack';

const Subcopy = styled(Text)`
  border-radius: var(--border-radius);
  background: var(--background);
  color: var(--color);
  padding: var(--padding);
  max-width: 400px;

  @media (max-width: 767px) {
    max-width: calc(100vw - 2rem);
  }
`;

const Wrapper = styled.a`
  --padding: 1rem;
  --gap: 0.5;
  position: relative;
  display: block;

  @media (max-width: 767px) {
    --padding: 0.75rem;
  }
`;

const Content = styled(Stack)`
  position: absolute;
  bottom: 3rem;
  left: 3rem;

  @media (max-width: 767px) {
    bottom: 0.75rem;
    left: 0.75rem;
  }
`;

const Logo = styled.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: 380px;
  max-height: 140px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;

  @media (max-width: 767px) {
    width: 70%;
    max-width: 380px;
    max-height: 100px;
  }
`;

export const HeroBanner = (props) => {
  const {
    className,
    buttonText = 'shop now',
    link,
    logo,
    subcopy,
    noContentBackground,
    noLogoBackground,
    contentBackground,
    contentColor,
    width,
    height,
    sizes,
    alt,
    src,
  } = props;

  const imageProps = {
    width,
    height,
    sizes,
    src,
    alt,
  };

  let noBackgroundStyles = {
    '--padding': '0',
    '--background': 'none',
    '--gap': 1.5,
    '--color': contentColor || 'var(--primary-black)',
  };

  let noLogoStyles = {
    '--background': 'none',
    '--padding': 'none',
  };

  let defaultStyles = {
    '--background': contentBackground || 'var(--primary-black)',
    '--color': contentColor || 'var(--primary-white)',
  };

  return (
    <Wrapper
      href={link}
      style={
        noContentBackground ? { ...noBackgroundStyles } : { ...defaultStyles }
      }
      className={className}
      contentColor={contentColor}
      contentBackground={contentBackground}
    >
      <Image {...imageProps} />
      <Content spacing="var(--gap)">
        <Logo
          src={logo}
          alt="logo"
          style={noLogoBackground ? { ...noLogoStyles } : {}}
        />
        <Subcopy>{subcopy}</Subcopy>
        <Button text={buttonText} variant="fill" />
      </Content>
    </Wrapper>
  );
};

HeroBanner.propTypes = {
  /** Optional class name */
  className: PropTypes.string,
  /** What text should the button have? Defaults to shop now */
  buttonText: PropTypes.string,
  /** Where should the banner link to? */
  link: PropTypes.string.isRequired,
  /** Image url for the PNG logo */
  logo: PropTypes.string,
  /** Subcopy for the banner */
  subcopy: PropTypes.string,
  /** Select a custom colour for the content background. Make sure it's inline with the hero banner content. */
  contentBackground: PropTypes.string,
  /** What colour should the text content be? */
  contentColor: PropTypes.string,
  /** What alt should the image have? */
  alt: PropTypes.string.isRequired,
  /** An art directed src image. Must contain a mobile and desktop image. */
  src: PropTypes.array.isRequired,
  /** Optionally change the width of the image (not recommended) */
  width: PropTypes.number,
  /** Optionally change the height of the image (not recommended) */
  height: PropTypes.number,
  /** Optionally change the sizes property of the image (not recommended) */
  sizes: PropTypes.string,
  /** Remove the default background from the logo. Some logo's come with their own. */
  noLogoBackground: PropTypes.bool,
  /** Remove the background from the Logo and Subcopy. Use when the text has good contrast and is legible against the background. */
  noContentBackground: PropTypes.bool,
};

HeroBanner.defaultProps = {
  width: 1440,
  height: 640,
  sizes: '100vw',
};
