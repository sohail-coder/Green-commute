import { ComponentStory } from '@storybook/react';
import React from 'react';
import CheckboxList from '.';

export default {
  title: 'Molecules/CheckboxList',
};

const Template: ComponentStory<typeof CheckboxList> = (args) => (
  <CheckboxList {...args} />
);

interface Option {
  label: string;
  checked: boolean;
  value: string;
}

export const Distance = Template.bind({});
const distanceOption1: Option = {
  label: '0 - 10 Kms',
  value: '10',
  checked: false,
};
const distanceOption2: Option = {
  label: '11 - 20 Kms',
  value: '10',
  checked: false,
};
const distanceOption3: Option = {
  label: '21 - 30 Kms',
  value: '10',
  checked: false,
};
const distanceOption4: Option = {
  label: '31 - 40 Kms',
  value: '10',
  checked: false,
};
Distance.args = {
  options: [distanceOption1, distanceOption2, distanceOption3, distanceOption4],
  title: 'Distance',
};

export const DatePosted = Template.bind({});

const dpOption1: Option = {
  label: 'Past 24 hours',
  checked: false,
  value: '24 hours',
};
const dpOption2: Option = {
  label: 'Past week',
  checked: false,
  value: 'week',
};
const dpOption3: Option = {
  label: 'Past month',
  checked: false,
  value: 'month',
};
const dpOption4: Option = {
  label: 'Anytime',
  checked: false,
  value: 'Anytime',
};
DatePosted.args = {
  options: [dpOption1, dpOption2, dpOption3, dpOption4],
  title: 'Date Posted',
};
