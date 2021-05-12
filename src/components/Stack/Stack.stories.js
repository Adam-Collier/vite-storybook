import React from 'react';
import { Stack } from './index';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 50px;
  background: peachpuff;
`;

export default {
  title: 'Layout/Stack',
  component: Text,
  argTypes: { spacing: 1.5 },
};

const Template = (args) => (
  <Stack {...args}>
    <Box />
    <Box />
    <Box />
  </Stack>
);

export const Primary = Template.bind({});

Primary.args = {
  spacing: 1.5,
};
