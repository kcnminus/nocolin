import React, { useEffect, useState } from 'react';
import EXIF from 'exif-js';


const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [exifData, setExifData] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // useEffect will confirm that my component has mounted and then run fetchImageUrls
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Fetch image URLs and update state
        const imageFiles = require.context('../assets', false, /\.(jpe?g)$/);
        const urls = imageFiles.keys().map(imageFiles);

        const imageBlobs = await Promise.all(urls.map(async (url) =>{
          const response = await fetch(url);
          const blob = await response.blob();
          return blob;
        }));

        const exifDataArray = await Promise.all(imageBlobs.map(blob => getExif(blob)));

        setImageData(urls);
        setExifData(exifDataArray);
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
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {imageData.map((imageUrl, index) => {
          const { Make, Model, ShutterSpeedValue, ApertureValue, FocalLength, ISO } = exifData[index] ?? {};
          return(
          <div className="relative w-full h-full" key={index}>
            <img
              src={imageUrl}
              alt={`by Colin ${index + 1}`}
              className="w-full h-full object-scale-down cursor-pointer"
              onClick={() => setEnlargedImage(imageUrl)}
            />
            <div className="absolute bottom-0 bg-white bg-opacity-50 w-full text-center">
              {Make && Make.toString()} {Model && Model.toString()} {FocalLength && FocalLength.toString()} 
              {ApertureValue && ApertureValue.toString()} {ShutterSpeedValue && ShutterSpeedValue.toString()} 
              {ISO && ISO.toString()}
            </div>
          </div>
          );
        })}
      </div>
      {enlargedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <img src={enlargedImage} className="max-h-full max-w-full object-contain cursor-pointer" onClick={() => setEnlargedImage(null)} />
        </div>
      )}
    </div>
  );
};


export default Gallery
