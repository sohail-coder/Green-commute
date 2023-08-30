import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from 'components/atoms/CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const onChange = () => {
  console.log('Clicked On Change');
};
const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);
export const checkBox = Template.bind({});
checkBox.args = {
  label: 'Example',
  checked: true,
  onChange: onChange,
};
