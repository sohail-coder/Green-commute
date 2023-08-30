import React from 'react';
import { ComponentStory } from '@storybook/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GreenCommuteIcon from '.';

export default {
  title: 'Atoms/GreenCommuteIcon',
  component: GreenCommuteIcon,
};

const Template: ComponentStory<typeof GreenCommuteIcon> = (args) => (
  <GreenCommuteIcon {...args}></GreenCommuteIcon>
);

export const filter = Template.bind({});
filter.storyName = 'Contained';
filter.args = {
  label: 'Green Commute Routes',
  endIcon: <ArrowForwardIcon />,
};
