import React from 'react';
import { FormControlLabel, Radio, styled } from '@mui/material';
import theme from 'theme/index';

interface RadioButtonProps {
  value: string;
  label: string;
}

const BpIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  border: `1px solid ${theme.palette.grey[400]}`,
}));

const BpCheckedIcon = styled(BpIcon)(() => ({
  backgroundColor: `${theme.palette.alpha?.main}`,
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
}));

const BpRadio = () => {
  return (
    <Radio
      disableRipple
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      data-testid="radio"
    />
  );
};

const RadioButton = ({ value, label }: RadioButtonProps) => {
  return <FormControlLabel value={value} label={label} control={<BpRadio />} />;
};
export default RadioButton;
