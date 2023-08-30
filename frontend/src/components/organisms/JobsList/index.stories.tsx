import React from 'react';
import { ComponentStory } from '@storybook/react';
import JobsList from '.';
import { JOBLIST_DATA } from '../../../constants/constants';

const handleClick = () => console.info('You clicked the delete icon.');

const filterData = [
  '10 - 20 Kms',
  'Past 24 hrs',
  'Full time',
  'Fresher',
  'Green commute Routes',
];
export default {
  title: 'organisms/JobsList',
  Component: JobsList,
};

const Template: ComponentStory<typeof JobsList> = (args) => {
  return <JobsList {...args} />;
};

export const jobsList = Template.bind({});
jobsList.args = {
  searchData: JOBLIST_DATA,
  filterData: filterData,
  onClick: handleClick,
};
