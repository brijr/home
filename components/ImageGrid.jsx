import React from "react";
import Image from "next/image";

const ImageGrid = () => {
  const imageContext = require.context("@/public/images", true);
  const imageFileNames = imageContext.keys();
  console.log(imageFileNames);

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2">
      {imageFileNames.map((fileName, index) => (
        <Image
          key={index}
          src={imageContext(fileName).default}
          alt={`${index} by bridger tower`}
          width={500}
          height={500}
        />
      ))}
    </section>
  );
};

export default ImageGrid;
