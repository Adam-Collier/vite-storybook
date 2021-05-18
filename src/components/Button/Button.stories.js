import React from 'react';
import { Copy } from 'react-feather';

import { Button } from './index.jsx';

const props = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default props;

const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  link: '/new-in',
  text: 'shop now',
  variant: 'fill',
  isFullWidth: false,
};

export const Outline = Template.bind({});

Outline.args = {
  link: '/new-in',
  text: 'shop now',
  variant: 'outline',
  isFullWidth: false,
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  link: '/new-in',
  text: 'Copy',
  variant: 'fill',
  isFullWidth: false,
  icon: Copy,
};

export const IsFullWidth = Template.bind({});

IsFullWidth.args = {
  link: '/new-in',
  text: 'Copy',
  variant: 'fill',
  isFullWidth: true,
};
