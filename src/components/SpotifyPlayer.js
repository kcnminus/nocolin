import React from 'react'

const SpotifyPlayer = () => {
  return (
    <div className="flex justify-center">
      {<iframe 
      title="SpotifyPlayer"
      style={{ borderRadius: "12px" }} 
      src="https://open.spotify.com/embed/album/0bATZFPIMwr1GMCLb6FXLV?utm_source=generator" 
      width="50%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
      ></iframe>}
    </div>
  )
}

export default SpotifyPlayer