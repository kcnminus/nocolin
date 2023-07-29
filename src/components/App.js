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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/spotify" element={<SpotifyPlayer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
