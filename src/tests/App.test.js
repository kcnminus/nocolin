import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders App component', () => {
  const {getAllByText } = render(<App />);
  const headerElements = getAllByText(/nocolin/i);
  expect(headerElements.length).toBeGreaterThan(0);
});