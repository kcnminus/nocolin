import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './Bio';
import SpotifyPlayer from './SpotifyPlayer';
import Gallery from './Gallery';
import Navbar from './Navbar';

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
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bio" element={<Bio {...bioData} />} />
          <Route path="/spotify" element={<SpotifyPlayer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return <div>Welcome to nocolin.com!</div>
}

export default App;
