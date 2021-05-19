import React from 'react';
import { ImageRow } from './index';

const props = {
  title: 'Components/ImageRow',
  component: ImageRow,
  argTypes: {
    layout: {
      options: ['sidebyside', 'contrast', 'overlap'],
    },
  },
};

export default props;

const Template = (args) => <ImageRow {...args} />;

export const SideBySide = Template.bind({});

SideBySide.args = {
  layout: 'sidebyside',
  images: [
    {
      src: 'https://media.missguided.com/i/missguided/restyld_tops_25_03_21',
      link: '/collaborations/restyld/restyld-tops',
      alt: 'this is an image alt',
    },
    {
      src: 'https://media.missguided.com/i/missguided/restyld_trousers_25_03_21',
      link: '/collaborations/restyld/restyld-pants',
      alt: 'this is an image alt',
    },
  ],
};

export const Contrast = Template.bind({});

Contrast.args = { ...SideBySide.args, layout: 'contrast' };

export const Overlap = Template.bind({});

Overlap.args = {
  ...SideBySide.args,
  layout: 'overlap',
};
