import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

// I'm currently using the method 'require.context()', so I'm mocking that and pulling images from the local directory. 
beforeAll(() => {
  jest.mock('../assets', () => ({
    './1.jpg' : '../assets/1.jpg',
    './2.jpg' : '../assets/2.jpg',
    './3.jpg' : '../assets/3.jpg',
    './4.jpg' : '../assets/4.jpg',
    './5.jpg' : '../assets/5.jpg',
  }), { virtual: true });
});

import Gallery from '../components/Gallery';

describe('Gallery', () => {
  test('renders Gallery components and checks images', async () => {
    render(<Gallery />);

    screen.findAllByAltText(/by Colin/);

    expect(screen.getAllByAltText(/by Colin/)).toHaveLength(5);;
  });

  test('checks that EXIF data is showing', async() => {
    render(<Gallery />);
    await screen.findAllByRole('caption');

    expect(screen.getAllByRole('caption')).toHaveLength(5);
  });

  test('checks modal is accessible and can be closed', async () => {
    render(<Gallery />);

    const images = await screen.findAllByAltText(/by Colin/);
    const modal = screen.getByRole('dialog');

    //Click first image to summon the modal
    fireEvent.click(images[0]);
    
    expect(modal).toBeInTheDocument();

    //Close modal and check that it is not there
    fireEvent.click(images[0]);

    expect(modal).not.toBeInTheDocument();
  })
})