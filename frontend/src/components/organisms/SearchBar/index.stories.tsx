import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './index';

export default {
  title: 'Organisms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const TextInput = Template.bind({});

TextInput.args = {};
