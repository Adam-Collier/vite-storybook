import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../Button';
import { Text } from '../Text';
import { Image } from '../Image';
import { Stack } from '../Stack';

const Subcopy = styled(Text)`
  --max-width: calc(400 / 16 * 1rem);
  border-radius: var(--border-radius);
  background: var(--background);
  color: var(--color);
  padding: var(--padding);
  max-width: var(--max-width);

  /* laptop || ipad fill to half */
  @media (max-width: 1028px) {
    --max-width: calc(50% - 1rem);
  }

  /* at phone size take up the fill width */
  @media (max-width: 767px) {
    --max-width: 100%;
  }
`;

const Wrapper = styled.a`
  --padding: 1rem;
  display: block;
  position: relative;

  @media (max-width: 1280px) {
    --padding: 0.75rem;
  }
`;

const Content = styled(Stack)`
  --content-padding: 3rem;
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  padding: var(--content-padding);

  @media (max-width: 1280px) {
    --content-padding: 1rem;

    button {
      display: none;
    }
  }

  @media (max-width: 767px) {
    --content-padding: ${(props) =>
      props.noContentBackground ? '1.5rem' : '0.75rem'};
  }
`;

const Logo = styled.img`
  padding: var(--padding);
  background: var(--background);
  display: block;
  max-width: clamp(min(240px, 70%), 30vw, 380px);
  max-height: clamp(100px, 10vw, 140px);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
`;

export const HeroBanner = (props) => {
  const {
    className,
    buttonText = 'shop now',
    buttonType,
    buttonVariant = 'fill',
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
    '--padding': 0,
    '--background': 'none',
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
      <Content
        gap={noContentBackground ? 1.5 : 0.5}
        noContentBackground={noContentBackground}
      >
        <Logo
          src={logo}
          alt="logo"
          style={noLogoBackground ? { ...noLogoStyles } : {}}
        />
        <Subcopy>{subcopy}</Subcopy>
        <Button text={buttonText} variant={buttonVariant} type={buttonType} />
      </Content>
    </Wrapper>
  );
};

HeroBanner.propTypes = {
  /** Optional class name */
  className: PropTypes.string,
  /** What text should the button have? Defaults to shop now */
  buttonText: PropTypes.string,
  /** What variant should be button use e.g outline, fill */
  buttonVariant: PropTypes.string,
  /** Change the type of the button e.g primary, secondary */
  buttonType: PropTypes.string,
  /** Where should the banner link to? */
  link: PropTypes.string.isRequired,
  /** Image url for the PNG logo */
  logo: PropTypes.string,
  /** Subcopy for the banner */
  subcopy: PropTypes.string,
  /** Select a custom colour for the content background. Make sure it's in line with the hero banner content. */
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
