import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Aqi from 'components/atoms/Aqi';

test('Test - CheckBox Button', () => {
  render(<Aqi aqi={789} />);
  const aqiElement = screen.getByText('789');
  expect(aqiElement).toBeInTheDocument;
});