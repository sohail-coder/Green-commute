import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUpload from 'components/organisms/FileUpload';
import React from 'react';

export default {
  title: 'Organisms/FileUpload',
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
  return <FileUpload {...args} />;
};
export const fileUpload = Template.bind({});
fileUpload.args = {
  display: true,
};
