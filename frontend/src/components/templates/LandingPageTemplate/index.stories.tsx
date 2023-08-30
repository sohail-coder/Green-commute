import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandingPageTemplate from '.';

export default {
  title: 'Templates/Landing Page',
  component: LandingPageTemplate,
} as ComponentMeta<typeof LandingPageTemplate>;

const Template: ComponentStory<typeof LandingPageTemplate> = (args) => (
  <LandingPageTemplate {...args} />
);

export const landingPageTemplate = Template.bind({});

landingPageTemplate.args = {
  left: <div>Left Section</div>,
  right: <div>Right Section</div>,
};
