import React from 'react';

import { Grid } from '../Grid';
import { ShoppableImage } from '../ShoppableImage';

const props = {
  title: 'Layout/Grid',
  component: Grid,
};

export default props;

const Template = (args) => (
  <Grid {...args}>
    <ShoppableImage />
    <ShoppableImage />
    <ShoppableImage />
    <ShoppableImage />
  </Grid>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 1,
  wrapWidth: 340,
};
