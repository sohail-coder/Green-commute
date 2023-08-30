import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from 'components/atoms/RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);
export const radioButton = Template.bind({});
radioButton.args = {
  value: 'example',
  label: 'Example',
};
