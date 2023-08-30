import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterButton from '.';

const onClick = jest.fn();

it('renders button', () => {
  render(
    <FilterButton
      label={'Filter'}
      startIcon={<ArrowForwardIcon />}
      onClick={() => onClick}
    />
  );
  const button = screen.getByText('Filter');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
