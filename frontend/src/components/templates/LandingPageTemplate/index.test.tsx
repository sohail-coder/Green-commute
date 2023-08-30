import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import LandingPageTemplate from '.';
import '@testing-library/jest-dom';
import theme from 'theme/index';

it('change searchbar', () => {
  render(
    <ThemeProvider theme={theme}>
      <LandingPageTemplate />
    </ThemeProvider>
  );
  const searchbar = screen.getAllByTestId('template1');
  expect(searchbar).toBeTruthy();
});
