import React from 'react';
import { ComponentStory } from '@storybook/react';
import Filter from './index';
import { Filters } from '../../../constants/constants';

export default {
  title: 'organisms/FilterPopUp',
  Component: Filter,
};

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const filter = Template.bind({});
filter.args = {
  filterOptions: Filters,
};
