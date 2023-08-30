import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import theme from 'theme/index';
import LandingPage from '.';

it('Page render', async () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </BrowserRouter>
  );
  const landingPage = screen.getByTestId('LandingPage');
  expect(landingPage).toBeTruthy();
  const textField = screen.getByPlaceholderText(/Enter your Location/i);
  expect(textField).toBeInTheDocument();
  fireEvent.change(await textField, { target: { value: 'Hyderabad' } });
  expect((await textField).getAttribute('value')).toBe('Hyderabad');
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);
  const setHookState = (newState: {
    activeStep: number;
    location: string;
    options: never[];
    preferredLocations: never[];
    preferredJobs: never[];
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }) => jest.fn().mockImplementation(() => [newState, () => {}]);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const reactMock = require('react');
  reactMock.useState = setHookState({
    activeStep: 0,
    location: '',
    options: [],
    preferredLocations: [],
    preferredJobs: [],
  });
  const autoComplete = screen.getByPlaceholderText(/Enter your job location/i);
  expect(autoComplete).toBeInTheDocument();
  fireEvent.change(await autoComplete, { target: { value: 'Hyderabad' } });
  expect((await autoComplete).getAttribute('value')).toBe('Hyderabad');
  const location = screen.getByText(/Hyderabad/i);
  expect(location).toBeTruthy();
  const text = screen.getByText(/Next/i);
  expect(text).toBeInTheDocument();
  const back = screen.getByText(/Back/i);
  expect(back).toBeInTheDocument();
  jest.useFakeTimers();
  const { rerender } = render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </BrowserRouter>
  );
  rerender(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </BrowserRouter>
  );

  jest.advanceTimersByTime(500);
});
