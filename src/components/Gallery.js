import React, { useEffect, useState } from 'react';
import EXIF from 'exif-js';


const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [exifData, setExifData] = useState([]);

  // useEffect will confirm that my component has mounted and then run fetchImageUrls
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Fetch image URLs and update state
        const imageFiles = require.context('../assets', false, /\.(jpe?g)$/);
        const urls = imageFiles.keys().map(imageFiles);
        setImageData(urls);
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
        {imageData.map((imageUrl, index) => (
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