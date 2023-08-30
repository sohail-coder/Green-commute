import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EntryStepper from '.';

export default {
  title: 'Organisms/EntryStepper',
  component: EntryStepper,
} as ComponentMeta<typeof EntryStepper>;

const Template: ComponentStory<typeof EntryStepper> = () => (
  <EntryStepper
    location={'hyd'}
    activeStep={0}
    options={['mumbai', 'hyderabad']}
    selectedOptions={function (): string[] {
      throw new Error('Function not implemented.');
    }}
  />
);
export const entryStepper = Template.bind({});
