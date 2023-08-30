import React from 'react';
import { styled, TextField } from '@mui/material';

interface InputProps {
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const StyledInput = styled(TextField)(() => ({
  width: '400px',
  height: '48px',
  borderRadius: '8px',
  '& label.Mui-focused': {
    color: '#D6D6D6',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#D6D6D6',
    },

    '&:hover fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'black',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    },
    '&.Mui-focused fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#77EDDF',
    },
  },
  input: {
    '&::placeholder': {
      fontSize: 12,
      fontWeight: 500,
      color: 'black',
    },
  },
}));

const TextInput = (props: InputProps) => {
  const { placeholder, value, onChange } = props;
  return (
    <StyledInput
      variant="outlined"
      label=""
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      inputProps = {{maxLength:20 }}
    />
  );
};

export default TextInput;
