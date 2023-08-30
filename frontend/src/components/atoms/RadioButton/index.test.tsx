import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from 'components/atoms/RadioButton';

test('Radio Button', () => {
  render(<RadioButton value="a" label="A" />);
  const radio = screen.getByText('A');
  expect(radio).toBeInTheDocument();
});
test('radio button checked', () => {
  render(<RadioButton value="a" label="A" />);
  const radio = screen.getByTestId('radio');
  expect(radio).toBeInTheDocument();
  fireEvent.click(radio);
});
