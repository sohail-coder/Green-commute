import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import HomePageTemplate from '.';
import '@testing-library/jest-dom';
import theme from 'theme/index';

it('change searchbar', () => {
  render(
    <ThemeProvider theme={theme}>
      <HomePageTemplate />
    </ThemeProvider>
  );
  const template = screen.getAllByTestId('template2');
  expect(template).toBeTruthy();
});
