import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import EntryStepper from 'components/organisms/Stepper';

const EntryStepperWrapped = () => (
  <MemoryRouter>
    <EntryStepper
      location={'Hyderabad'}
      activeStep={0}
      options={['Hyderabad', 'Mumbai']}
      selectedOptions={function (): string[] {
        throw new Error('Function not implemented.');
      }}
    />
  </MemoryRouter>
);

describe('Test stepper', () => {
  test('- stepper by test id', () => {
    render(<EntryStepperWrapped />);
    const stepperElement = screen.getByTestId('stepper');
    expect(stepperElement).toBeInTheDocument();
  });
  test('buttons', () => {
    render(<EntryStepperWrapped />);
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);
    expect(nextButton).toBeInTheDocument();
  });
});
