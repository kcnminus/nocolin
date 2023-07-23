import React from 'react';
import { render, screen } from '@testing-library/react';
import SpotifyPlayer from '../components/SpotifyPlayer';

test('renders Spotify embed iframe with correct src', () => {
  render(<SpotifyPlayer />);

  const iframe = screen.getByTitle('SpotifyPlayer');
  expect(iframe).toBeInTheDocument();

  const expectedSrc = 'https://open.spotify.com/embed/album/0bATZFPIMwr1GMCLb6FXLV?utm_source=generator';
  expect(iframe).toHaveAttribute('src', expectedSrc);
});