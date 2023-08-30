import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from '.';

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;
export const chipDelete = Template.bind({});
chipDelete.args = {
  label: '10-20 Kms',
  handleDelete: handleDelete,
};
