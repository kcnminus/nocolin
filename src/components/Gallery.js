import React, { useEffect, useState } from 'react';
import EXIF from 'exif-js';

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
];

const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [exifData, setExifData] = useState([]);

  // useEffect will confirm that my component has mounted and then run fetchImageUrls
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Fetch image URLs and update state
        const response = await fetch(imageUrls);
        if (!response.ok) {
          throw new Error('Failed to fetch image URLs');
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
      fetchImageUrls();
  },[]);

  const getExif = (imageBlob) => {
    return new Promise((resolve) => {
      EXIF.getData(imageBlob, function () {
        const exifData = EXIF.getAllTags(this);
        resolve(exifData)
      });
    });
  };

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