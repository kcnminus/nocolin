import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import SpotifyPlayer from './components/SpotifyPlayer';
import Gallery from './components/Gallery';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const bioData = {
    name: 'Colin No',
    location: 'New York, USA',
    bioText: "Hey! I'm a software engineer who is passionate about learning and creating things. I built this website as a small showcase of my skills and achievements, like the music I've published and some photos I've taken."
  };

  return (
    <Router>
      <div>
        <h1>nocolin</h1>
        <nav>
          <ul>
            <li onClick={() => handleNavClick('Home')}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => handleNavClick('Bio')}>
              <Link to="/bio">About Me</Link>
            </li>
            <li onClick={() => handleNavClick('Spotify')}>
              <Link to="/spotify">My Spotify</Link>
            </li>
            <li onClick={() => handleNavClick('Gallery')}>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={Home}/>
          <Route path="/bio" render={() => <Bio {...bioData} />} />
          <Route path="/spotify" element={SpotifyPlayer} />
          <Route path="/gallery" element={Gallery}/>
        </Routes>
        <div>
          {activeComponent === 'Home' && <Home/>}
          {activeComponent === 'Bio' && <Bio {...bioData} />}
          {activeComponent === 'Spotify' && <SpotifyPlayer />}
          {activeComponent === 'Gallery' && <Gallery />}
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  return <div>Welcome to nocolin.com!</div>
}

export default App;
