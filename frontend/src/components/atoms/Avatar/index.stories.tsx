import * as React from 'react';
import { ComponentStory } from '@storybook/react';
import Avatar from './index';
import profileAvatar from 'assets/images/profileAvatar.png';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  source: profileAvatar,
};
