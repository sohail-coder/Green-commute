import React from 'react';
import { FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import theme from 'theme/index';

const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  color: `${theme.palette.grey[400]}`,
  bordeRadius: ' 4px',
  padding: '0px 9px 0px 0px',
  // marginLeft: '10px',
  '&.Mui-checked': {
    color: `${theme.palette.alpha?.main}`,
  },
}));

interface CheckBoxProps {
  label: string;
  checked?: boolean;
  value?: string;
  onChange: (e: any) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  const { label, checked, onChange } = props;
  return (
    <FormControlLabel
      label={
        <Typography variant="body2" color={`${theme.palette.text.secondary}`}>
          {label}
        </Typography>
      }
      control={
        <StyledCheckBox disableRipple onChange={onChange} checked={checked} />
      }
    />
  );
};

export default CheckBox;
