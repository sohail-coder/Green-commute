import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const next = Template.bind({});
next.storyName = 'Contained';
next.args = {
  variant: 'contained',
  label: 'Next',
  labelColor: 'accent.contrastText',
  width: '140px',
  height: '46px',
  typographyVariant: 'body1',
};

export const back = Template.bind({});
back.storyName = 'Outlined';
back.args = {
  variant: 'outlined',
  label: 'Back',
  labelColor: 'primary.300',
  typographyVariant: 'caption',
};
