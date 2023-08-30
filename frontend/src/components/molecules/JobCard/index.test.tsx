import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobCard from '.';

test('- Job Card - Square', () => {
  render(
    <JobCard
      company={'HP'}
      title={'User Experience Designer'}
      location={'Hyderabad'}
      cardType={'square'}
      companyLogo={'HP'}
      postedDate={'45 min ago'}
      transport={[{id: 1, name: 'Scooter'},{id: 2, name: 'Bus'},{id: 3, name: 'Cab'}, {id: 4, name: 'Metro'}]}
    />
  );
  const company = screen.getByText('HP');
  const time = screen.getByText('45 min ago');
  expect(company).toBeInTheDocument();
  expect(time).toBeInTheDocument();
});

test('- Job Card - Rectangle', () => {
  render(
    <JobCard
      company={'Myntra'}
      title={'Full Stack Engineer'}
      location={'Banglore'}
      cardType={'rectangle'}
      companyLogo={'HP'}
      transport={[{id: 1, name: 'Scooter'},{id: 2, name: 'Bus'},{id: 3, name: 'Cab'}, {id: 4, name: 'Metro'}]}
    />
  );
  const title = screen.getByText('Full Stack Engineer');
  const location = screen.getByText('Banglore');
  expect(title).toBeInTheDocument();
  expect(location).toBeInTheDocument();
});
