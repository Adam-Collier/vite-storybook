import React from 'react';
import { Text } from './index';

const props = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    heading: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          '5xl',
          '4xl',
          '3xl',
          '2xl',
          'xl',
          'lg',
          'md',
          'base',
          'sm',
          'xs',
          'xxs',
        ],
      },
    },
  },
};

export default props;

const Template = (args) => <Text {...args} />;

export const Body = Template.bind({});

Body.args = {
  align: 'left',
  children: 'This is some text',
  element: 'p',
  lineHeight: 1.75,
  size: 'base',
  weight: 500,
};

export const Heading = Template.bind({});

Heading.args = { ...Body.args, heading: true, size: 'lg' };
