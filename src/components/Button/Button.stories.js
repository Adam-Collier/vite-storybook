import React from 'react';
import {Copy} from "react-feather"

import { Button } from './index.jsx';

const props = {
  title: 'Components/Button',
  component: Button,
};

export default props;

const Template = (args) => (
  <Button {...args} />
);

export const Filled = Template.bind({});

Filled.args = {
  link: "/new-in",
  text: "shop now",
  variant: "fill",
};

export const Outline = Template.bind({}); 





Outline.args = {
  link: "/new-in",
  text: "shop now",
  variant: "outline",
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  link: "/new-in",
  text: "Copy",
  variant: "fill",
  icon: Copy
}
