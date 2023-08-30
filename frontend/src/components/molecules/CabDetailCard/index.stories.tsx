import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CabDetailsCard } from '.';
import Ola from 'assets/logos/Ola.png';

export default {
  title: 'Molecules/cabDetailsCard',
  Component: CabDetailsCard,
};

const Template: ComponentStory<typeof CabDetailsCard> = (args) => (
  <CabDetailsCard {...args} />
);

export const sampleCabDetailsCard = Template.bind({});
sampleCabDetailsCard.args = {
  src: Ola,
  price: 45,
  serviceName: 'Ola',
};
