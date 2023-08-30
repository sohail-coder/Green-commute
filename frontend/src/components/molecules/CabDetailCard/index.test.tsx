import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CabDetailsCard } from '.';
import HP from '../../../../public/assets/icons/HP.png';

test('- Cab Details Card', () => {
  render(<CabDetailsCard src={HP} serviceName={'Ola'} price={55} />);
  const service = screen.getByText('Ola');
  const Button = screen.getByText(/Book Now/);
  expect(Button).toBeInTheDocument();
  fireEvent.click(Button);
  expect(service).toBeInTheDocument();
});
