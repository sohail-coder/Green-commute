import * as React from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

interface AvatarImagePropType {
  source: string;
}

const Avatar = (props: AvatarImagePropType) => {
  return <MUIAvatar src={props.source} />;
};

export default Avatar;
