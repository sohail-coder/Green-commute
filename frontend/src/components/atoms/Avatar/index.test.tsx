import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from './index';

test('Check for Avatar', async () => {
  render(<Avatar source={'assets/images/profileAvatar.png'} />);
  const MuiElement = screen.getByRole(/img/i);
  expect(MuiElement).toBeInTheDocument();
});
