import { ComponentStory } from '@storybook/react';
import React from 'react';
import JobDescriptionCard from './index';
// import Myntra from 'assets/logos/Myntra.png';
export default {
  title: 'Organisms/JobDescriptionCard',
  Component: JobDescriptionCard,
};

const Template: ComponentStory<typeof JobDescriptionCard> = (args) => (
  <JobDescriptionCard {...args} />
);

export const jobDescriptionCard = Template.bind({});
jobDescriptionCard.args = {
  companyLogo: 'Myntra',
  companyName: 'Myntra',
  jobTitle: 'User Experience Designer',
  jobLocation: 'Hitech city, Hyderabad - 500072',
  jobPostedDate: '2 days ago',
  sourceLocation: 'E Marredpally, Secunderabad',
};
