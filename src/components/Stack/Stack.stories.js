import React from 'react';
import { Stack } from './index';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 50px;
  background: peachpuff;
`;

const props = {
  title: 'Layout/Stack',
  component: Text,
  argTypes: {
    direction: {
      type: 'select',
      options: ['row', 'column'],
    },
  },
};

export default props;

const Template = (args) => (
  <Stack {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);

export const Primary = Template.bind({});

Primary.args = {
  as: 'div',
  gap: 1.5,
  direction: 'column',
  align: 'stretch',
  justify: 'flex-start',
};
