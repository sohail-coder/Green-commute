import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputComponent from '.';

const inputValidation = (InputComponent: null | undefined) => {
  if (InputComponent === null || InputComponent === undefined) {
    return 'invalid';
  }
  return 'valid';
};

describe('test for negative input null', function () {
  it('expects null to short out correctly', function () {
    const result = inputValidation(null);
    expect(result).toEqual('invalid');
  });
  it('test for negative input undefined', function () {
    const result = inputValidation(undefined);
    expect(result).toEqual('invalid');
  });
});

it('renders the placeholder text', () => {
  render(
    <InputComponent placeholder={'Enter your job location'}></InputComponent>
  );
  expect(
    screen.getByPlaceholderText('Enter your job location')
  ).toBeInTheDocument();
});
