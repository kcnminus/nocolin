import React from 'react'

const SpotifyPlayer = () => {
  return (
    <div className="shadow-lg flex justify-center mt-16 md:mt-32">
      {<iframe 
        title="SpotifyPlayer" 
        src="https://open.spotify.com/embed/album/0bATZFPIMwr1GMCLb6FXLV?utm_source=generator" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy" 
        className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 h-full"
       ></iframe>}
    </div>
  )
}

export default SpotifyPlayer