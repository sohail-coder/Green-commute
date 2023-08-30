import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommonRoutes from 'components/molecules/CommonRoutes';

test('Test - Common Routes ', () => {
  render(<CommonRoutes from={'Chennai'} to={'Hyderabad'}  />);
  const commonRoutesElement=screen.getByText("Hyderabad");
  expect(commonRoutesElement).toBeInTheDocument;
 
});