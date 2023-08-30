import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MetroCard from '.';

export default {
  title: 'Molecules/MetroCard',
  component: MetroCard,
} as ComponentMeta<typeof MetroCard>;

export const sampleMetroCard: ComponentStory<typeof MetroCard> = () => (
  <MetroCard />
);
