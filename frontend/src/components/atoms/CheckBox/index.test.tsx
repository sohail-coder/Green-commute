import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckBox from 'components/atoms/CheckBox';

const onChange = jest.fn();

test('- CheckBox Button', () => {
  render(<CheckBox checked={true} label="A" onChange={onChange} />);
  const checkBox = screen.getByText('A');
  expect(checkBox).toBeInTheDocument();
});
