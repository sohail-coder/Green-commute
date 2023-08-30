import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Image from '.';
import Stay from 'assets/images/stay.png';

it('checks if image is present', () => {
  render(<Image imageSource={Stay} />);
  expect(screen.getByTestId('image')).toBeInTheDocument();
});
