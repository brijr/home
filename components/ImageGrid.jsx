import React from 'react';
import Image from 'next/image';

const ImageGrid = () => {
  // Use require.context to import all images from the folder
  const imageContext = require.context('../public/images', false, /\.(jpg|jpeg|png)$/);

  // Get an array of all imported image file names
  const imageFileNames = imageContext.keys();

  return (
    <section className="grid md:grid-cols-3 grid-cols-2">
      {imageFileNames.map((fileName, index) => (
        <Image
          key={index}
          src={imageContext(fileName).default} // Access the image URL
          alt={`Image ${index}`}
          className="grid-image"
        />
      ))}
    </section>
  );
};

export default ImageGrid;
