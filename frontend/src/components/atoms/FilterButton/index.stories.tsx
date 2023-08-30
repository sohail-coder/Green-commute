import React from 'react';
import { ComponentStory } from '@storybook/react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterButton from '.';

export default {
  title: 'Atoms/FilterButton',
  component: FilterButton,
};

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args}></FilterButton>
);

export const filter = Template.bind({});
filter.storyName = 'Contained';
filter.args = {
  label: 'Filter',
  startIcon: <FilterAltOutlinedIcon />,
};
