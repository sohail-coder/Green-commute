import React from 'react';
import { styled, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

import crossIcon from 'assets/images/crossIcon.png';

interface ChipProps {
  label: string;
  handleDelete: () => void;
}
const StyledChip = styled(Chip)({
  backgroundColor: 'white',
  padding: '0px 8px',
  borderRadius: '8px',
});
export function DeletableChip(props: ChipProps) {
  const { label, handleDelete } = props;
  return (
    <StyledChip
      label={<Typography variant="caption1">{label}</Typography>}
      onDelete={handleDelete}
      deleteIcon={
        <img src={crossIcon} alt="CossIcon" data-testid="deleteIcon" />
      }
    />
  );
}

export default DeletableChip;
