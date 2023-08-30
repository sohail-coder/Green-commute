import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Aqi from 'components/atoms/Aqi';
import theme from 'theme/index';

export default {
  title: 'Atoms/Aqi',
  component: Aqi,
} as ComponentMeta<typeof Aqi>;

const Template: ComponentStory<typeof Aqi> = (args) => <div style={{background:theme.palette.gradient?.light}}><Aqi  {...args} /></div>;

export const aqi = Template.bind({});
aqi.args = {
  aqi: 700,
};
