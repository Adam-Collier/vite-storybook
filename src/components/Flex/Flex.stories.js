import React from 'react';

import { Flex } from './index.jsx';
import { Image } from '../Image';

const props = {
  title: 'Layout/Flex',
  component: Flex,
};

export default props;

const Template = (args) => (
  <Flex {...args}>
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default"/>
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default"/>
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default"/>
    <Image src="https://media.missguided.com/i/missguided/playboy_storybook_default"/>
  </Flex>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 1.5,
  alignItems: 'center',
  justifyContent: "flex-start",
  direction: 'row',
  wrapWidth: 240,
};
