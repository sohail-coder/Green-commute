import React from 'react';
import { ComponentStory } from '@storybook/react';
import SideNavComponent from '.';

export default {
  title: 'Organisms/SideNavComponent',
  Component: SideNavComponent,
};

export const sampleSideNavComponent: ComponentStory<typeof SideNavComponent> =
  () => <SideNavComponent />;
