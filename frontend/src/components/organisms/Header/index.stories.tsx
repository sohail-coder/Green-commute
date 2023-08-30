import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Organisms/Header',
  Component: Header,
};

export const sampleHeader: ComponentStory<typeof Header> = () => (
  <Header location={'East Marredpally, Secunderabad'} />
);
