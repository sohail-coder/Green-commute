import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import MetroCard from '.';

it('renders button', () => {
  render(<MetroCard />);
  const button = screen.getByTestId('mapsButton');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
