import { ComponentStory } from '@storybook/react';
import React from 'react';
import RadioList from '.';

export default {
  title: 'Molecules/RadioList',
};

const Template: ComponentStory<typeof RadioList> = (args) => (
  <RadioList {...args} />
);

interface Option {
  label: string;
  value: string;
  checked: boolean;
}

const option1: Option = { label: 'Yes', value: 'yes', checked: true };
const option2: Option = { label: 'No', value: 'no', checked: false };
export const radioList = Template.bind({});
radioList.args = {
  options: [option1, option2],
  title: 'Green Commute',
};
