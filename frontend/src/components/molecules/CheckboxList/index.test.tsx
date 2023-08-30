import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxList from '.';

interface Option {
  label: string;
  checked: boolean;
  value: string;
}

test('Test- CheckboxList', () => {
  const dpOption1: Option = {
    label: 'Past 24 hours',
    checked: false,
    value: '24 hours',
  };
  const dpOption2: Option = {
    label: 'Past week',
    checked: false,
    value: 'week',
  };
  const dpOption3: Option = {
    label: 'Past month',
    checked: false,
    value: 'month',
  };
  const dpOption4: Option = {
    label: 'Anytime',
    checked: false,
    value: 'Anytime',
  };

  const handlecheck = () => {
    console.log('checked');
  };
  render(
    <CheckboxList
      title={'Date Posted'}
      options={[dpOption1, dpOption2, dpOption3, dpOption4]}
      onSelectCheckBox={handlecheck}
    ></CheckboxList>
  );

  const title = screen.getByText(/Date Posted/);
  const value1 = screen.getByText(/Past 24 hours/);
  const value2 = screen.getByText(/Past week/);
  expect(title).toBeInTheDocument();
  expect(value1).toBeInTheDocument();
  expect(value2).toBeInTheDocument();
  value1.click();
  value2.click();
});
