import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  styled,
  Typography,
} from '@mui/material';
import theme from 'theme/index';
import React from 'react';

interface Option {
  label: string;
  value: string;
  checked: boolean;
}

interface RadioListProps {
  options: Option[];
  title: string;
  // selected: string;
  onSelect?: React.Dispatch<React.SetStateAction<string>>;
}

const UncheckedRadio = styled('span')({
  borderRadius: '50%',
  width: 16,
  height: 16,
  border: `1px solid ${theme.palette.grey[400]}`,
});

const CheckedRadio = styled(UncheckedRadio)({
  backgroundColor: `${theme.palette.alpha?.main}`,
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
});

const RadioList = ({ options, title, onSelect, ...props }: RadioListProps) => {
  return (
    <FormGroup>
      <FormLabel>
        <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
      </FormLabel>
      {options.map((option) => (
        <Grid item key={option.value}>
          <FormControlLabel
            checked={option.checked}
            control={
              <Radio
                disableRipple
                checkedIcon={<CheckedRadio />}
                icon={<UncheckedRadio />}
                {...props}
                onClick={() => {
                  onSelect?.(option.value);
                }}
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                {option.label}
              </Typography>
            }
            value={option.value}
          />
        </Grid>
      ))}
    </FormGroup>
  );
};

export default RadioList;
