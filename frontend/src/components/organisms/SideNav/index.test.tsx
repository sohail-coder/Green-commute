import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import SideNavComponent from '.';
import '@testing-library/jest-dom';

afterEach(cleanup);
test('Checking SideNav text1', () => {
  render(<SideNavComponent />);
  const text1 = screen.getByText('Dashboard');
  expect(text1).toBeInTheDocument();
});

test('Testing Click of findjobs', () => {
  render(<SideNavComponent />);
  const findJobsTab = screen.getByTestId('find-jobs');
  expect(findJobsTab).toBeInTheDocument();
  fireEvent.click(findJobsTab);
});

test('Testing Click of Saved Jobs', () => {
  render(<SideNavComponent />);
  fireEvent.click(screen.getByText('Saved Jobs'));
});

test('Test- CheckboxList', () => {
  render(<SideNavComponent />);
  const filterButton = screen.getByText('Filter');
  expect(filterButton).toBeInTheDocument();
  fireEvent.click(filterButton);

  const transport2 = screen.getByText(/Bus/);
  expect(transport2).toBeInTheDocument();
  fireEvent.click(transport2);

  const transport3 = screen.getByText(/Car Pooling/);
  expect(transport3).toBeInTheDocument();
  fireEvent.click(transport3);

  const closeButton = screen.getByTestId('closeIcon');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);

  fireEvent.click(filterButton);
  const date = screen.getByText(/Date Posted/);
  expect(date).toBeInTheDocument();

  const date1 = screen.getByText(/Past 24 hours/);
  expect(date1).toBeInTheDocument();
  fireEvent.click(date1);

  const date2 = screen.getByText(/Past week/);
  expect(date2).toBeInTheDocument();
  fireEvent.click(date2);

  const jobType = screen.getByText('Job Type');
  expect(jobType).toBeInTheDocument();

  const job1 = screen.getByText(/Full time/);
  expect(job1).toBeInTheDocument();
  fireEvent.click(job1);

  const job2 = screen.getByText(/Internship/);
  expect(job2).toBeInTheDocument();
  fireEvent.click(job2);

  const experience = screen.getByText('Experience Level');
  expect(experience).toBeInTheDocument();

  const exp1 = screen.getByText(/Director/);
  expect(exp1).toBeInTheDocument();
  fireEvent.click(exp1);

  const transport = screen.getByText('Transport');
  expect(transport).toBeInTheDocument();

  const transport1 = screen.getByText(/Metro/);
  expect(transport1).toBeInTheDocument();
  fireEvent.click(transport1);

  const distance = screen.getByText(/Distance/);
  expect(distance).toBeInTheDocument();

  const distance1 = screen.getByText(/0 - 10 Kms/);
  expect(distance1).toBeInTheDocument();
  fireEvent.click(distance1);

  const distance2 = screen.getByText(/11 - 20 Kms/);
  expect(distance2).toBeInTheDocument();
  fireEvent.click(distance2);

  const distance3 = screen.getByText(/21 - 30 Kms/);
  expect(distance3).toBeInTheDocument();
  fireEvent.click(distance3);
  fireEvent.click(distance3);

  const GreenCommuteNo = screen.getByText(/No/);
  expect(GreenCommuteNo).toBeInTheDocument();
  fireEvent.click(GreenCommuteNo);

  const GreenCommuteYes = screen.getByText(/Yes/);
  expect(GreenCommuteYes).toBeInTheDocument();
  fireEvent.click(GreenCommuteYes);

  const applyButton = screen.getByText('Apply');
  expect(applyButton).toBeInTheDocument();
  fireEvent.click(applyButton);
  fireEvent.click(closeButton);

  fireEvent.click(filterButton);

  const clearButton = screen.getByText('Clear All');
  expect(clearButton).toBeInTheDocument();
  fireEvent.click(clearButton);
  fireEvent.click(closeButton);
});
