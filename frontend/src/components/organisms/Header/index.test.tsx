import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

it('renders button', () => {
  render(<Header location={'Pune'} />);
  const logo = screen.getByTestId('Logo');
  expect(screen.getByText('Pune')).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
  expect(screen.getByTestId('message')).toBeInTheDocument();
});
