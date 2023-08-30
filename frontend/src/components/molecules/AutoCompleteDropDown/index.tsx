import React from 'react';
import { Chip, styled, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import crossIcon from 'assets/images/x.png';

interface AutoCompleteDropDownProps {
  options: string[];
  placeHolder: string;
  handleOptionsChange?: (e: any, values: any) => void;
  values?: string[];
}
const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  borderRadius: '8px',
  border: `1px  solid  ${theme.palette.grey['200']}`,
  maxWidth: '400px',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#77EDDF',
    },
  },
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  padding: '4px 12px',
  maxWidth: '146px',
  height: '32px',
  background: `${theme.palette.secondary.dark}`,
}));
const StyledTypography = styled(Typography)({
  fontWeight: 500,
});

const AutoCompleteDropDown = (props: AutoCompleteDropDownProps) => {
  const { options, placeHolder, handleOptionsChange, values } = props;
  return (
    <StyledAutoComplete
      multiple
      freeSolo
      filterSelectedOptions
      options={options}
      onChange={handleOptionsChange}
      value={values}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option: any, index: number) => (
          <StyledChip
            {...getTagProps({ index })}
            label={
              <StyledTypography variant="caption">{option}</StyledTypography>
            }
            key={index}
            deleteIcon={<img src={crossIcon} alt="icon" />}
          />
        ));
      }}
      renderInput={(params) => (
        <TextField
          data-testid="textfeild"
          {...params}
          placeholder={placeHolder}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = placeHolder)}
        />
      )}
    ></StyledAutoComplete>
  );
};

export default AutoCompleteDropDown;
