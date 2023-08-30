import React from 'react';
import { ComponentStory } from '@storybook/react';
import Image from '.';
import Stay from 'assets/images/stay.png';
import Rapido from 'assets/logos/Rapido.png';
import Myntra from 'assets/logos/Myntra.png';

export default {
  title: 'Atoms/Images',
  component: Image,
};

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args}></Image>
);

export const stay = Template.bind({});
stay.args = {
  imageSource: Stay,
  imageHeight: '244px',
  imageWidth: '256px',
};

export const rapidoLogo = Template.bind({});
rapidoLogo.args = {
  imageSource: Rapido,
};

export const myntraLogo = Template.bind({});
myntraLogo.args = {
  imageSource: Myntra,
};
