import React from 'react';
import { Image } from './index';

const props = {
  title: 'Components/Image',
  component: Image,
};

export default props;

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 240,
  height: 240,
  alt: 'alt example',
  src: 'https://media.missguided.com/i/missguided/playboy_storybook_default',
  backgroundColor: '#ECECF2',
};

export const ArtDirected = Template.bind({});

ArtDirected.args = {
  width: 1440,
  height: 640,
  alt: 'art directed banner alt',
  sizes: '100vw',
  src: [
    'https://media.missguided.com/i/missguided/missguided_beauty_hero',
    {
      media: '(max-width: 767px)',
      width: 414,
      height: 600,
      src: 'https://media.missguided.com/i/missguided/missguided_beauty_mobile',
    },
  ],
  backgroundColor: '#ECECF2',
};
