import React from 'react';

const Bio = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Location: {props.location}</p>
      <p>About Me: {props.bioText}</p>
    </div>
  );
};

export default Bio;