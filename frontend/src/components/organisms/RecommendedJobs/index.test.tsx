import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecommendedJobs from '.';
import { jobData } from '../SideNav';

test('Recommended Jobs', () => {
  render(<RecommendedJobs jobDataList={jobData} />);
  expect(screen.getByText('Recommended for you')).toBeInTheDocument();

  const time = screen.getByText('1 week ago');
  expect(time).toBeInTheDocument();

  const company = screen.getByText('Myntra');
  expect(company).toBeInTheDocument();
});
