import React from 'react';
import { Blogposts } from './index.jsx';

const props = {
  title: 'Components/Blogposts',
  component: Blogposts,
};

export default props;

const Template = (args) => <Blogposts {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  postIds: [79905, 78697, 79178, 79335, 80981],
  slidesPerView: 3.5,
  slidesPerViewMob: 1.5,
  spacing: 16,
};

export const WithCarousel = Template.bind({});

WithCarousel.args = {
  postIds: [79905, 78697, 79178, 79335, 80981],
  slidesPerView: 3.5,
  slidesPerViewMob: 1.5,
  spacing: 16,
  isCarousel: true,
};
