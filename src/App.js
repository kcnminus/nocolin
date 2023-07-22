import React, { useState } from 'react';
import Bio from './components/Bio';
import SpotifyPlayer from './components/SpotifyPlayer';
import Gallery from './components/Gallery';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('bio');

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const bioData = {
    name: 'Colin No',
    location: 'New York, USA',
    bioText: "Hey! I'm a software engineer who is passionate about learning and creating things. I built this website as a small showcase of my skills and achievements, like the music I've published and some photos I've taken."
  };

  return (
    <div>
      <h1>nocolin</h1>
      <nav>
        <button onClick={() => handleNavClick('bio')}>Bio</button>
        <button onClick={() => handleNavClick('spotify')}>Spotify Player</button>
        <button onClick={() => handleNavClick('gallery')}>Gallery</button>
      </nav>

      {activeComponent === 'bio' && (
        <Bio 
          name={bioData.name}
          location={bioData.location}
          bioText={bioData.bioText}
        />
      )}
      
      {activeComponent === 'spotify' && <SpotifyPlayer />}
      {activeComponent === 'gallery' && <Gallery />}
    </div>
  );
};

export default App;
