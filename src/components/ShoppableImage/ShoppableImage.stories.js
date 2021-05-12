import React from 'react';

import {Image} from "../Image"
import { ShoppableImage } from './index';

const props = {
  title: 'Components/ShoppableImage',
  component: ShoppableImage,
  subcomponents: {Image},
};

export default props;

const Template = (args) => <ShoppableImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  link: "/new-in",
  text: "shop new in"
};
