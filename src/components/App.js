import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpotifyPlayer from './SpotifyPlayer';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Profile from './Profile';

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
          <Route path="/profile" element={<Profile />} />
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
