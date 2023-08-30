import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import JobCard from '.';
import HP from '../../../../public/assets/icons/HP.png';

export default {
  title: 'Molecules/Card',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const SquareJobCard = Template.bind({});

SquareJobCard.args = {
  company: 'HP',
  title: 'User Experience Designer',
  location: 'Hyderabad, Telangana, India',
  companyLogo: HP,
  cardType: 'square',
  postedDate: '1hr 36min ago',
  transport: [{id: 1, name: 'Scooter'},{id: 2, name: 'Bus'},{id: 3, name: 'Cab'}, {id: 4, name: 'Metro'}],
};

export const RectangleJobCard = Template.bind({});

RectangleJobCard.args = {
  company: 'HP',
  title: 'User Experience Designer',
  location: 'Hyderabad, Telangana, India',
  companyLogo: 'HP',
  cardType: 'rectangle',
  postedDate: '1hr 36min ago',
  transport: [{id: 1, name: 'Scooter'},{id: 2, name: 'Bus'},{id: 3, name: 'Cab'}, {id: 4, name: 'Metro'}],
};
