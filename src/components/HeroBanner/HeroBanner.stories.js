import React from 'react';
import { HeroBanner } from '../HeroBanner';

const props = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  argTypes: {
    noLogoBackground: {
      control: {
        type: 'boolean',
      },
    },
    noContentBackground: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default props;

const Template = (args) => <HeroBanner {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  link: '/beauty',
  src: [
    'https://media.missguided.com/i/missguided/missguided_beauty_hero',
    {
      media: '(max-width: 767px)',
      width: 414,
      height: 600,
      src: 'https://media.missguided.com/i/missguided/missguided_beauty_mobile',
    },
  ],
  subcopy:
    'Missguided Beauty is now live. Make room in your makeup bag for affordable, vegan and cruelty-free makeup that will leave you with a flawless finish.',
  buttonText: 'shop now',
  logo: 'https://media.missguided.com/i/missguided/missguided_beauty_1',
  alt: 'hero banner alt',
  sizes: '100vw',
};

export const noLogoBackground = Template.bind({});

noLogoBackground.args = {
  link: '/beauty',
  src: [
    'https://media.missguided.com/i/missguided/missguided_beauty_hero',
    {
      media: '(max-width: 767px)',
      width: 414,
      height: 600,
      src: 'https://media.missguided.com/i/missguided/missguided_beauty_mobile',
    },
  ],
  subcopy:
    'Missguided Beauty is now live. Make room in your makeup bag for affordable, vegan and cruelty-free makeup that will leave you with a flawless finish.',
  buttonText: 'shop now',
  logo: 'https://media.missguided.com/i/missguided/missguided_beauty_1',
  alt: 'hero banner alt',
  sizes: '100vw',
  noLogoBackground: true,
};

export const noContentBackground = Template.bind({});

noContentBackground.args = {
  link: '/beauty',
  src: [
    'https://media.missguided.com/i/missguided/missguided_beauty_hero',
    {
      media: '(max-width: 767px)',
      width: 414,
      height: 600,
      src: 'https://media.missguided.com/i/missguided/missguided_beauty_mobile',
    },
  ],
  subcopy:
    'Missguided Beauty is now live. Make room in your makeup bag for affordable, vegan and cruelty-free makeup that will leave you with a flawless finish.',
  buttonText: 'shop now',
  logo: 'https://media.missguided.com/i/missguided/missguided_beauty_1',
  alt: 'hero banner alt',
  sizes: '100vw',
  contentColor: '#fff',
  noContentBackground: true,
};
