import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoComplete from '.';
interface Option {
  label: string;
  value: string;
}
const option1: Option = { label: 'ui', value: 'ui' };
const option2: Option = { label: 'ux', value: 'ux' };
const locationList = [option1, option2];
describe('auto complete', () => {
  test('- autocomplete input', () => {
    render(
      <AutoComplete
        options={locationList}
        placeholder={'Location'}
        name={'name'}
        width={'25vw'}
      />
    );
    const inputElement = screen.getByTestId('autocompleteSearch');
    expect(inputElement).toBeInTheDocument();
  });
});
