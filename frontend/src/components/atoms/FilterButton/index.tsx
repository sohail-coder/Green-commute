import React from 'react';
import { Button, Icon, styled, Typography } from '@mui/material';

export interface FilterButtonProps {
  label: string | React.ReactNode;
  startIcon: React.ReactNode;
  onClick: (val: any) => void;
}
const StyledButton = styled(Button)({
  background: 'white',
  borderRadius: '32px',
  padding: '16px 32px',
  justifyContent: 'space-between',
});

const StyledIcon = styled(Icon)`
  color: #656e66;
`;
const StyledLabel = styled(Typography)`
  padding-top: 5px;
`;

const FilterButton = (props: FilterButtonProps) => {
  const { label, onClick, startIcon } = props;
  return (
    <StyledButton
      variant="text"
      startIcon={<StyledIcon>{startIcon}</StyledIcon>}
      onClick={(val: any) => onClick(val)}
    >
      <StyledLabel variant="body2">{label}</StyledLabel>
    </StyledButton>
  );
};

export default FilterButton;
