import React from 'react'

const imageUrls = [
  'https://imgur.com/DEsy5Sd.jpg',
  'https://imgur.com/CmEQuSU.jpg',
  'https://imgur.com/tdCG15S.jpg',
  'https://imgur.com/gwMpUjL.jpg',
  'https://imgur.com/OfDlo8q.jpg',
  'https://imgur.com/H9PFrqR.jpg',
  'https://imgur.com/EDsC7i0.jpg',
  'https://imgur.com/BNdezAP.jpg',
  'https://imgur.com/qTCSbPa.jpg',
  'https://imgur.com/DPHw91b.jpg',
  'https://imgur.com/BPSYmn6.jpg',
  'https://imgur.com/Spk9sIS.jpg',
  'https://imgur.com/leSh7IT.jpg',
  'https://imgur.com/EwFzL5Z.jpg',
  'https://imgur.com/rngUcUB.jpg',
  'https://imgur.com/ysELBac.jpg',
  'https://imgur.com/qZjW9Xy.jpg',
  'https://imgur.com/JpQvBCc.jpg',
  'https://imgur.com/XfGS5dO.jpg',
  'https://imgur.com/Gigmg20.jpg',
  'https://imgur.com/IcZ1yBg.jpg',
  'https://imgur.com/79QXsIJ.jpg',
  'https://imgur.com/Ecwvpaa.jpg',
  'https://imgur.com/DlLJwkc.jpg',
  'https://imgur.com/jwlFvki.jpg',
  'https://imgur.com/eOyhI3r.jpg',
  'https://imgur.com/RWRjiit.jpg',
  'https://imgur.com/YJ4C2Ww.jpg',
  'https://imgur.com/Ihd8LGQ.jpg',
  'https://imgur.com/zedWtQ4.jpg',
  'https://imgur.com/sZVOvQz.jpg',
  'https://imgur.com/rmFKEg4.jpg',
  'https://imgur.com/SEFIm6d.jpg',
  'https://imgur.com/JchgRfL.jpg',
  'https://imgur.com/ZcGsKvR.jpg',
  'https://imgur.com/NWnWbWK.jpg',
  'https://imgur.com/jN1anQC.jpg',
  'https://imgur.com/wnMsAeU.jpg',
  'https://imgur.com/Lbxky6v.jpg',
  'https://imgur.com/f4pemyW.jpg',
  'https://imgur.com/WsdFrUs.jpg',
  'https://imgur.com/exiAZ8y.jpg',
  'https://imgur.com/PGMIwZv.jpg',
  'https://imgur.com/PGMIwZv.jpg',
  'https://imgur.com/bw5ViA2.jpg',
  'https://imgur.com/f5OImyR.jpg',
  'https://imgur.com/u40m9z6.jpg',
  'https://imgur.com/fSfT6wA.jpg',
  'https://imgur.com/bAiDGHv.jpg',
  'https://imgur.com/n4gm9b2.jpg'
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