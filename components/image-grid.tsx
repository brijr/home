"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "./masonry";

const ImageGrid = () => {
  const [imageFileNames, setImageFileNames] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      // @ts-ignore : webpack magic
      const context = require.context("@/public/images", true);
      setImageFileNames(context.keys());
    };

    loadImages();
  }, []);

  return (
    <>
      <Masonry>
        {imageFileNames.map((fileName, index) => {
          // @ts-ignore : webpack magic
          const imageContext = require.context("@/public/images", true);
          const imageSrc = imageContext(fileName).default;
          const altText = `Design ${index} by Bridger Tower at Zion Design`;
          return (
            <div
              key={fileName}
              onClick={() => {
                setIsOpen(true);
                setActiveImage(imageSrc);
              }}
            >
              <Image
                className="hover:cursor-zoom-in hover:opacity-90"
                src={imageSrc}
                alt={altText}
                width={1080}
                height={1080}
                placeholder="blur"
              />
            </div>
          );
        })}
      </Masonry>

      {isOpen && activeImage && (
        <div
          className="fixed inset-0 z-10 flex cursor-zoom-out items-center justify-center bg-neutral-800 bg-opacity-75 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={activeImage}
            alt="Design by Bridger Tower"
            width={1080}
            height={500}
            className="max-h-screen w-auto p-6 md:p-24"
          />
        </div>
      )}
    </>
  );
};

export default ImageGrid;
