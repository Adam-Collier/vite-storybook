import React from 'react';
import { Row } from './index';
import { Text } from '../Text';

const props = {
  title: 'Layout/Row',
  component: Row,
  argTypes: {
    maxWidth: {
      control: {
        type: 'select',
        options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
  },
};

export default props;

const Template = (args) => (
  <Row {...args}>
    <Text>
      In vehicula dictum ante dapibus tristique. Pellentesque porttitor ornare
      malesuada. Etiam id lobortis elit, sed pulvinar mauris. Sed ornare, ante
      et sagittis rutrum, orci felis tempus quam, eu luctus leo augue id nibh.
      In accumsan augue sit amet nisi ullamcorper venenatis. Aenean sit amet
      porttitor leo, at vehicula nisl. Sed metus massa, semper a dolor at,
      tincidunt dapibus sapien. Nullam nec massa libero. Donec lobortis semper
      massa, nec semper odio cursus sed. Aenean auctor, nisl elementum laoreet
      aliquet, ex sem tempus mauris, sit amet blandit tellus sapien vitae lorem.
      Nunc et dui sit amet risus aliquet condimentum ac eu libero. Donec sed
      augue vel purus consectetur dapibus. Vivamus condimentum orci tortor, ac
      auctor arcu lobortis quis.
    </Text>
  </Row>
);

export const Primary = Template.bind({});

Primary.args = {
  maxWidth: 'none',
  padding: true,
};
