import React from 'react';
import { render } from '@testing-library/react';
import Bio from '../components/Bio';

test('renders Bio component with correct props', () => {
  const name = 'Colin No';
  const location = 'New York, USA';
  const bioText = "Hey! I'm a software engineer...";
  const { getByText } = render(<Bio name={name} location={location} bioText={bioText} />); 

  const nameElement = getByText(/Colin No/i);
  const locationElement = getByText(/New York, USA/i);
  const bioTextElement = getByText(/Hey! I'm a software engineer/i);

  expect(nameElement).toBeInTheDocument();
  expect(locationElement).toBeInTheDocument();
  expect(bioTextElement).toBeInTheDocument();
});