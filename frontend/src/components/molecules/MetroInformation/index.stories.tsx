import React from 'react';
import { ComponentStory } from '@storybook/react';
import MetroInformation from '.';
export default {
  title: 'molecules/MetroInformation',
  Component: MetroInformation,
};

export const SampleTransportTabs: ComponentStory<typeof MetroInformation> =
  () => <MetroInformation />;
