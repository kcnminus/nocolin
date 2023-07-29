import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './Bio';
import SpotifyPlayer from './SpotifyPlayer';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Background from './Background';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Home');

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <Router>
      <div className="App bg-gray-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/background" element={<Background />} />
          <Route path="/spotify" element={<SpotifyPlayer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
