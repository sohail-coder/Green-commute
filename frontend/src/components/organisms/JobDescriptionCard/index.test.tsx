import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobDescriptionCard from '.';

test('- Job Description Card', () => {
  render(
    <JobDescriptionCard
      id={1}
      companyLogo={'Myntra'}
      jobTitle={'User Experience Designer'}
      companyName={'Myntra'}
      jobLocation={'Hitech city, Hyderabad - 500072'}
      jobPostedDate={'2 days ago'}
      sourceLocation={'E Marredpally, Secunderabad'}
    />
  );

  const companyName = screen.getByText('Myntra');
  expect(companyName).toBeInTheDocument();

  const date = screen.getByText('2 days ago');
  expect(date).toBeInTheDocument();

  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeInTheDocument();

  fireEvent.click(saveButton);
  expect(screen.getByText('Unsave')).toBeInTheDocument();

  const applyButton = screen.getByText('Apply');
  expect(applyButton).toBeInTheDocument();

  fireEvent.click(applyButton);
  const uploadButton = screen.getByText('Click Here to Upload Files');
  expect(uploadButton).toBeInTheDocument();

  fireEvent.click(uploadButton)

  const fileInput = screen.getByTestId('file-input');
  expect(fileInput).toBeInTheDocument();
  fireEvent.change(fileInput);

  const okayButton = screen.getByText('OKAY');
  expect(okayButton).toBeInTheDocument();
  fireEvent.click(okayButton);

  expect(screen.getByText('Applied')).toBeInTheDocument();

  const description = screen.getByText('Description');
  expect(description).toBeInTheDocument();

  const seeMore = screen.getByText('SEE MORE');
  expect(seeMore).toBeInTheDocument();

  const greenCommuteButton = screen.getByText('Green Commute Routes');
  expect(greenCommuteButton).toBeInTheDocument();
  fireEvent.click(greenCommuteButton);

  const commonRoutes = screen.getByText('Common Routes');
  expect(commonRoutes).toBeInTheDocument();

  const sourceLocation = screen.getByText('E Marredpally, Secunderabad');
  expect(sourceLocation).toBeInTheDocument();

  const distance = screen.getByText('25 Kms');
  expect(distance).toBeInTheDocument();

  const mapsButton = screen.getByText('View in Google Maps');
  expect(mapsButton).toBeInTheDocument();

  const cabButton = screen.getByTestId('Cab');
  fireEvent.click(cabButton);
  expect(screen.getByText('Ola')).toBeInTheDocument();
});
