import React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';

export interface ButtonProps {
  variant: 'contained' | 'text' | 'outlined';
  label: string | React.ReactNode;
  onClick?: () => void;
  typographyVariant: 'body1' | 'caption';
  labelColor?: string;
  width?: string;
  height?: string;
}

const Button = (props: ButtonProps) => {
  const {
    variant,
    label,
    onClick,
    labelColor,
    width,
    height,
    typographyVariant,
  } = props;
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ width: { width }, height: { height } }}
    >
      <Typography variant={typographyVariant} color={labelColor}>
        {label}
      </Typography>
    </MuiButton>
  );
};

export default Button;
