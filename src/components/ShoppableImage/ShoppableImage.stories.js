import React from 'react';

import { Image } from '../Image';
import { ShoppableImage } from './index';

const props = {
  title: 'Components/ShoppableImage',
  component: ShoppableImage,
  subcomponents: { Image },
};

export default props;

const Template = (args) => <ShoppableImage {...args} />;

export const withText = Template.bind({});
withText.args = {
  link: '/new-in',
  text: 'shop new in',
  width: 240,
  height: 240,
  alt: 'grid item alt',
  src: 'https://media.missguided.com/i/missguided/playboy_storybook_default',
  sizes: '(max-width: 767px) 50vw, 298px',
};

export const withoutText = Template.bind({});
withoutText.args = {
  link: '/new-in',
  width: 240,
  height: 240,
  alt: 'grid item alt',
  src: 'https://media.missguided.com/i/missguided/playboy_storybook_default',
  sizes: '(max-width: 767px) 50vw, 298px',
};
