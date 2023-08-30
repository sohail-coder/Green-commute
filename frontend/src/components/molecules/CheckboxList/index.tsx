import { FormGroup, FormLabel, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import CheckBox from '../../atoms/CheckBox';

export interface Option {
  label: string;
  value: string;
  checked: boolean;
}

interface CheckboxListProps {
  options: Option[];
  title: string;
  onSelectCheckBox: (label: string) => void;
}
const StyledFL = styled(FormLabel)({
  marginBottom: '11px',
});

export const selectedFilters: string[] = [];
const CheckboxList = (props: CheckboxListProps) => {
  const { options, title, onSelectCheckBox } = props;

  return (
    <FormGroup>
      <StyledFL>
        <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
      </StyledFL>
      <Grid container direction="column" rowSpacing={'8px'} marginLeft="10px">
        {options.map((option: Option) => {
          return (
            <Grid item key={option.label}>
              <CheckBox
                // checked={selectedFilters?.includes(option.label)}
                checked={option.checked}
                label={option.label}
                value={option.value}
                onChange={() => onSelectCheckBox(option.label)}
                // onChange={onChange}
              />
            </Grid>
          );
        })}
      </Grid>
    </FormGroup>
  );
};

export default CheckboxList;
