import React from 'react';
import { ComponentStory } from '@storybook/react';
import HomePageTemplate from '.';
import { Header } from 'components/organisms/Header';
import SideNavComponent from 'components/organisms/SideNav';
export default {
  title: 'Templates/HomePageTemplate',
  component: HomePageTemplate,
};

const Template: ComponentStory<typeof HomePageTemplate> = (args) => (
  <HomePageTemplate {...args} />
);

export const HomeTemplateStory = Template.bind({});

HomeTemplateStory.args = {
  header: <Header location={''} />,
  sideNav: <SideNavComponent />,
};
