import React from 'react';
import { Carousel } from './index.jsx';
import { Image } from '../Image';

const props = {
  title: 'Components/Carousel',
  component: Carousel,
};

export default props;

const Template = (args) => (
  <Carousel {...args}>
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default" />
  </Carousel>
);

export const Primary = Template.bind({});

Primary.args = {
  slidesPerView: 4.5,
  slidesPerViewMob: 1.5,
  spacing: 16,
  offsetStart: 0,
};
