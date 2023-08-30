import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './index';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const PrimaryInput = Template.bind({});

PrimaryInput.args = {
  placeholder: 'Enter your job location',
};
