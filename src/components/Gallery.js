import React, { useEffect, useState } from 'react';
import * as ExifReader from 'exifreader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gallery = () => {
  const [imageData, setImageData] = useState([]);
  const [exifData, setExifData] = useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Netlify CDN isn't enough to compress my images enough, so I added a toast message.
  useEffect(() => {
    toast.info("Sorry, I'm still working on image compression, and it appears that Netlify's CDN isn't enough to get the gallery loaded quickly. Please wait a few seconds while the images load.");
  }, []);

  // useEffect will confirm that my component has mounted and then run fetchImageUrls
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        // Fetch image URLs and update state
        const imageFiles = require.context('../assets', false, /\.(jpe?g)$/i);
        const urls = imageFiles.keys().map(imageFiles);
        console.log(urls)

        const imageBlobs = await Promise.all(urls.map(async (url) =>{
          const response = await fetch(url);
          const blob = await response.blob();
          return blob;
        }));

        const exifDataArray = await Promise.all(imageBlobs.map(blob => getExif(blob)));

        setImageData(urls);
        console.log(imageData)
        setExifData(exifDataArray);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
      fetchImageUrls();
  },[]);

  const getExif = async (imageBlob) => {
    const arrayBuffer = await blobToArrayBuffer(imageBlob);
    const tags = ExifReader.load(arrayBuffer);
    const exifData = {
      Make: tags.Make?.description,
      Model: tags.Model?.description,
      ShutterSpeedValue: tags.ShutterSpeedValue?.description,
      FNumber: tags.FNumber?.description,
      FocalLength: tags.FocalLengthIn35mmFilm?.description,
      ISO: tags.ISOSpeedRatings?.description
    };
    return exifData;
  };

  const blobToArrayBuffer = (blob) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsArrayBuffer(blob);
    });
  };

  const roundShutterSpeed = (ShutterSpeedValue) => {
    const [numerator, denominator] = ShutterSpeedValue.split("/");
    const roundedDenominator = Math.max(1, Math.round(parseInt(denominator, 10) / 100) * 100);
    return `${numerator}/${roundedDenominator}`;
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <ToastContainer position="top-center" autoClose={10000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover/>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {imageData.map((imageUrl, index) => {
          const { Make, Model, FNumber, FocalLength, ISO, ShutterSpeedValue } = exifData[index] ?? {};
          const roundedShutterSpeedValue = ShutterSpeedValue && roundShutterSpeed(ShutterSpeedValue.toString());
          return(
          <div className="relative w-full h-full" key={index}>
            <img
              src={imageUrl}
              alt={`by Colin ${index + 1}`}
              className="shadow-lg w-full h-full object-scale-down cursor-pointer"
              onClick={() => setEnlargedImage(imageUrl)}
              loading="lazy"
            />
            <div className="absolute bottom-0 bg-gray-300 bg-opacity-75 w-full text-center">
              {Make && Make.toString()} {Model && Model.toString()} {FocalLength && `${FocalLength.toString()}mm `} 
              {FNumber && FNumber.toString()} {roundedShutterSpeedValue && `${roundedShutterSpeedValue.toString()} `} {ISO && `ISO ${ISO.toString()}`}
            </div>
          </div>
          );
        })}
      </div>
      {enlargedImage && (
        <div className="fixed top-20 left-20 w-full h-3/4 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <img src={enlargedImage} className="max-h-full max-w-full object-contain cursor-pointer" onClick={() => setEnlargedImage(null)} />
        </div>
      )}
    </div>
  );
};


export default Gallery
