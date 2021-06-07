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
    <Image
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="flex image"
      width={200}
      height={200}
    />
    <Image
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="flex image"
      width={200}
      height={200}
    />
    <Image
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="flex image"
      width={200}
      height={200}
    />
    <Image
      src="https://media.missguided.com/i/missguided/playboy_storybook_default"
      alt="flex image"
      width={200}
      height={200}
    />
  </Flex>
);

export const Primary = Template.bind({});

Primary.args = {
  gap: 1.5,
  align: 'center',
  justify: 'flex-start',
  itemFlex: '1 1 100px',
  direction: 'row',
};
