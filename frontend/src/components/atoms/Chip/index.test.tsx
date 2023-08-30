import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeletableChip from './index';

test('Should render a chip and image', () => {
  render(
    <DeletableChip
      label={'10-20 kms'}
      handleDelete={() => jest.fn()}
    ></DeletableChip>
  );
  const MuiElement = screen.getByRole(/img/i);
  expect(MuiElement).toBeInTheDocument();
});
