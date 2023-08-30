import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

export interface Option {
  label: string;
  value: string;
}
interface AutoCompleteProps {
  options: Option[];
  placeholder: string;
  name: string;
  width: string;
  handleChange?: (_event: any, value: React.SetStateAction<any>) => void;
}

const SearchAutocomplete = (props: AutoCompleteProps) => {
  const { width, options, placeholder, name, handleChange } = props;
  return (
    <Autocomplete
      data-testid="autocompleteSearch"
      autoHighlight
      filterSelectedOptions
      freeSolo
      clearOnBlur
      id="combo-box-demo2"
      options={options}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{
            '.MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
            },
            width: { width },
          }}
          name={name}
        />
      )}
    />
  );
};

export default SearchAutocomplete;
