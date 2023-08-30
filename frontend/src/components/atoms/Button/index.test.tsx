import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

it('renders button', () => {
  render(
    <Button
      variant={'contained'}
      label={'Next'}
      typographyVariant={'caption'}
    />
  );
  expect(screen.getByText(/Next/)).toBeInTheDocument();
});

it('checks button click', () => {
  render(
    <Button variant={'outlined'} label={'Save'} typographyVariant={'caption'} />
  );
  const saveButton = screen.getByText(/Save/);
  expect(saveButton).toBeInTheDocument();
  fireEvent.click(saveButton);
});
