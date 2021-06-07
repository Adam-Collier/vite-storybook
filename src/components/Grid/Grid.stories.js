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
    <ShoppableImage
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="grid image"
      width={200}
      height={200}
      text="shop new in"
      link="https://www.missguided.co.uk/new-in"
    />
    <ShoppableImage
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="grid image"
      width={200}
      height={200}
      text="shop new in"
      link="https://www.missguided.co.uk/new-in"
    />
    <ShoppableImage
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="grid image"
      width={200}
      height={200}
      text="shop new in"
      link="https://www.missguided.co.uk/new-in"
    />
    <ShoppableImage
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="grid image"
      width={200}
      height={200}
      text="shop new in"
      link="https://www.missguided.co.uk/new-in"
    />
  </Grid>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 1,
  wrapWidth: 340,
};
