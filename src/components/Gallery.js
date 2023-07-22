import React from 'react'

const imageUrls = [
  require('../assets/1.jpg'),
  require('../assets/2.jpg'),
  require('../assets/3.jpg'),
  require('../assets/4.jpg'),
  require('../assets/5.jpg'),
  require('../assets/6.jpg'),
  require('../assets/7.jpg'),
  require('../assets/8.jpg'),
  require('../assets/9.jpg'),
  require('../assets/10.jpg'),
  require('../assets/11.jpg'),
  require('../assets/12.jpg'),
  require('../assets/13.jpg'),
  require('../assets/14.jpg'),
  require('../assets/15.jpg'),
  require('../assets/16.jpg'),
  require('../assets/17.jpg'),
  require('../assets/18.jpg'),
  require('../assets/19.jpg'),
  require('../assets/20.jpg'),
  require('../assets/21.jpg'),
  require('../assets/22.jpg'),
  require('../assets/23.jpg'),
  require('../assets/24.jpg'),
  require('../assets/25.jpg'),
  require('../assets/26.jpg'),
  require('../assets/27.jpg'),
  require('../assets/28.jpg'),
  require('../assets/29.jpg'),
  require('../assets/30.jpg'),
  require('../assets/31.jpg'),
  require('../assets/32.jpg'),
  require('../assets/33.jpg'),
  require('../assets/34.jpg'),
  require('../assets/35.jpg'),
  require('../assets/36.jpg'),
  require('../assets/37.jpg'),
  require('../assets/38.jpg'),
  require('../assets/39.jpg'),
  require('../assets/40.jpg'),
  require('../assets/41.jpg'),
  require('../assets/42.jpg'),
  require('../assets/43.jpg'),
  require('../assets/44.jpg'),
  require('../assets/45.jpg'),
  require('../assets/46.jpg'),
  require('../assets/47.jpg'),
  require('../assets/48.jpg'),
  require('../assets/49.jpg'),
  require('../assets/50.jpg')
]

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2>Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {imageUrls.map((imageUrl, index) => (
          <img 
          key={index}
          src={imageUrl}
          alt={`by Colin ${index + 1}`}
          className="rounded-md w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery