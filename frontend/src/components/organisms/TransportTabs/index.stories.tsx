import React from 'react';
import { ComponentStory } from '@storybook/react';
import TransportTabs from './index';

export default {
  title: 'organisms/TransportTab',
  Component: TransportTabs,
};

export const SampleTransportTabs: ComponentStory<typeof TransportTabs> = () => (
  <TransportTabs />
);
