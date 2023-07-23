import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '../components/Gallery';

test('renders all images in the Gallery', () => {
  render(<Gallery />);

  const images = screen.getAllByAltText(/by Colin \d+/);
  expect(images.length).toBeGreaterThan(0);
});