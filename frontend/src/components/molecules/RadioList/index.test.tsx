import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioList from './index';
import '@testing-library/jest-dom';

interface Option {
  label: string;
  value: string;
  checked: boolean;
}
test('Test- Radio List', () => {
  const option1: Option = { label: 'Yes', value: 'yes', checked: true };
  const option2: Option = { label: 'No', value: 'no', checked: false };
  render(
    <RadioList title={'Green Commute'} options={[option1, option2]}></RadioList>
  );

  const title = screen.getByText(/Green Commute/);
  const value1 = screen.getByText(/Yes/);
  const value2 = screen.getByText(/No/);
  expect(title).toBeInTheDocument();
  expect(value1).toBeInTheDocument();
  expect(value2).toBeInTheDocument();
  value1.click();
  value2.click();
});
