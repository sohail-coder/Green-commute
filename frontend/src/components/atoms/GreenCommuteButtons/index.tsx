import React from 'react';
import { Button, Icon, styled, Typography } from '@mui/material';

export interface ButtonProps {
  label: string | React.ReactNode;
  endIcon: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
}
const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 85px;
  gap: 10px;
  border-radius: 0px 0px 12px 12px;
  background: #ffffff;
  box-shadow: 0px -2px 8px rgba(125, 125, 125, 0.12);
`;

const StyledIcon = styled(Icon)`
  color: #30a193;
`;

const GreenCommuteButton = (props: ButtonProps) => {
  const { label, onClick, endIcon, width, height } = props;
  return (
    <StyledButton
      variant={'text'}
      endIcon={<StyledIcon>{endIcon}</StyledIcon>}
      onClick={onClick}
      sx={{ width: { width }, height: { height } }}
    >
      <Typography variant="subtitle1" color="primary.300">
        {label}
      </Typography>
    </StyledButton>
  );
};

export default GreenCommuteButton;
