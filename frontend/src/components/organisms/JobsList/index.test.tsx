import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobsList from '.';
import { JOBLIST_DATA } from '../../../constants/constants';

const handleClick = () => console.info('You clicked the delete icon.');
const onClearAllClick = () => console.info('You clicked on clear all');

const filterData = [
  '10 - 20 Kms',
  'Past 24 hrs',
  'Full time',
  'Fresher',
  'Green commute Routes',
];
test('Jobs List', () => {
  render(
    <JobsList
      searchData={JOBLIST_DATA}
      filterData={filterData}
      onClick={handleClick}
      onClearAllClick={onClearAllClick}
    />
  );
  expect(screen.getByText('Based on your search')).toBeInTheDocument();

  const chip = screen.getByText('10 - 20 Kms');
  expect(chip).toBeInTheDocument();

  const DeleteButton = screen.getAllByTestId('deleteIcon');
  fireEvent.click(DeleteButton[0]);

  const company = screen.getAllByText('Myntra');
  expect(company).toHaveLength(1);

  const time = screen.getAllByText('1 day ago');
  expect(time).toHaveLength(2);

  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeInTheDocument();

  fireEvent.click(saveButton);
  expect(screen.getByText('Unsave')).toBeInTheDocument();

  const description = screen.getByText('Description');
  expect(description).toBeInTheDocument();

  const seeMore = screen.getByText('SEE MORE');
  expect(seeMore).toBeInTheDocument();

  const greenCommuteButton = screen.getByText('Green Commute Routes');
  expect(greenCommuteButton).toBeInTheDocument();
  fireEvent.click(greenCommuteButton);

  const commonRoutes = screen.getByText('Common Routes');
  expect(commonRoutes).toBeInTheDocument();

  const distance = screen.getByText('25 Kms');
  expect(distance).toBeInTheDocument();

  const mapsButton = screen.getByText('View in Google Maps');
  expect(mapsButton).toBeInTheDocument();

  const cabButton = screen.getByTestId('Cab');
  fireEvent.click(cabButton);
  expect(screen.getByText('Ola')).toBeInTheDocument();
});

test('Jobs List with empty filters', () => {
  render(
    <JobsList
      searchData={JOBLIST_DATA}
      filterData={[]}
      onClick={handleClick}
      onClearAllClick={onClearAllClick}
    />
  );
  expect(screen.getByTestId('no-filters')).toBeInTheDocument();
});
