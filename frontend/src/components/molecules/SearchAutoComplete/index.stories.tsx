import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchAutocomplete from '.';

export default {
  title: 'Molecules/SearchAutocomplete',
  component: SearchAutocomplete,
} as ComponentMeta<typeof SearchAutocomplete>;

const Template: ComponentStory<typeof SearchAutocomplete> = (args) => (
  <SearchAutocomplete {...args} />
);

export const AutoCompleteSearch = Template.bind({});

interface Option {
  label: string;
  value: string;
}
const option1: Option = { label: 'ui', value: 'yes' };
const option2: Option = { label: 'ux', value: 'no' };
AutoCompleteSearch.args = {
  options: [option1, option2],
  placeholder: 'Search skills',
};
