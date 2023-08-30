import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MetroInformation from '.';

it('renders button', () => {
  render(<MetroInformation />);
  const kms = screen.getByText('25 Kms');
  expect(kms).toBeInTheDocument();

  const time = screen.getByText('1 hr 20 min');
  expect(time).toBeInTheDocument();
});
