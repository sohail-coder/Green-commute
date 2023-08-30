import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import SearchBar from '.';
import '@testing-library/jest-dom';
import theme from 'theme/index';

const onSkillChange = (_event: any, value: React.SetStateAction<any>) =>
  console.info('OnSkillChange invoked');
const onLocationChange = (_event: any, value: React.SetStateAction<any>) =>
  console.info('OnLocationChange invoked');

it('change searchbar', () => {
  render(
    <ThemeProvider theme={theme}>
      <SearchBar
        onSkillChange={onSkillChange}
        onLocationChange={onLocationChange}
      />
    </ThemeProvider>
  );
  const searchbar = screen.getAllByTestId('searchBar');
  expect(searchbar).toBeTruthy();
  const button = screen.getByTestId(/iconButton/i);
  fireEvent.click(button);
  const skillText = screen.getByPlaceholderText(/Search Skills/i);
  fireEvent.change(skillText);
  const LocationText = screen.getByPlaceholderText(/Location/i);
  fireEvent.change(LocationText);
});
