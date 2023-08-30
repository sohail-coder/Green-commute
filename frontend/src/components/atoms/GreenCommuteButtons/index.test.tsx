import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GreenCommuteButton from '.';

it('renders button', () => {
  render(
    <GreenCommuteButton
      label={'Green Commute'}
      endIcon={<ArrowForwardIcon />}
    />
  );
  const button = screen.getByText(/Green Commute/);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
