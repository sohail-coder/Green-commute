import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoComplete from 'components/molecules/AutoCompleteDropDown';

const options = ['Hyderabad', 'Mumbai'];
describe('auto complete', () => {
  test('- autocomplete input', () => {
    render(<AutoComplete options={options} placeHolder={'Enter city'} />);
    const inputElement = screen.getByTestId('textfeild');
    expect(inputElement).toBeInTheDocument();
  });
});
