import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterPopUp from './index';

test('Testing filter popup', () => {
  render(
    <FilterPopUp
      open={false}
      handleOpen={jest.fn()}
      filterOptions={[]}
      onSelectCheckBox={jest.fn()}
      onSelectRadioButton={jest.fn()}
      clearAll={jest.fn()}
      handleClickApply={jest.fn()}
    />
  );
  const filterButton = screen.getByText('Filter');
  expect(filterButton).toBeInTheDocument();
});
