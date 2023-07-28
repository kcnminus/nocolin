import React from 'react';

const Bio = (props) => {
  const {name, location, bioText} = props;

  return (
    <div>
      <img 
        className="max-w-sm"
        src={require('../assets/profile/green_hat.JPG')} 
        alt="Profile"
      />
      <h1>{ name }</h1>
      <p>Location: { location }</p>
      <p>About Me: { bioText }</p>
    </div>
  );
};

export default Bio;