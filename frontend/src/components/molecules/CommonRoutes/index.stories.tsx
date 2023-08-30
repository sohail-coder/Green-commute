import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommonRoutes from 'components/molecules/CommonRoutes';

export default {
  title: 'Molecules/CommonRoutes',
  component: CommonRoutes,
} as ComponentMeta<typeof CommonRoutes>;

const Template: ComponentStory<typeof CommonRoutes> = (args) => (
  <CommonRoutes {...args} />
);
export const commonRoutes = Template.bind({});
commonRoutes.args = {
  from:"E Marredpally, Secunderabad",
  to:"Hitech City, Telanagana, Hyderabad."
};
