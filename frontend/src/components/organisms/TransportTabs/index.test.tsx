import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TransportTabs from '.';

it('Checks Metro Tab', () => {
  render(<TransportTabs />);
  const distance = screen.getByText('25 Kms');
  expect(distance).toBeInTheDocument();
  const mapsButton = screen.getByText('View in Google Maps');
  expect(mapsButton).toBeInTheDocument();
});

it('Checks Cab Tab', () => {
  render(<TransportTabs />);
  const cabButton = screen.getByTestId('Cab');
  fireEvent.click(cabButton);
  expect(screen.getByText('Ola')).toBeInTheDocument();
});
