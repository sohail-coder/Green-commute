import React from 'react';
import { ComponentStory } from '@storybook/react';
import RecommendedJobs from '.';
import { jobData } from '../SideNav';

export default {
  title: 'organisms/RecommendedJobs',
  Component: RecommendedJobs,
};

const Template: ComponentStory<typeof RecommendedJobs> = (args) => {
  return <RecommendedJobs {...args} />;
};

export const recommendedJobs = Template.bind({});
recommendedJobs.args = {
  jobDataList: jobData,
};
