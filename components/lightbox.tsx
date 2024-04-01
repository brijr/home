"use client";

import React, { useState } from "react";
import Image from "next/image";

const LightboxImage = ({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="my-4" onClick={() => setIsOpen(true)}>
        <Image
          className="rounded-lg border transition-all hover:cursor-zoom-in hover:opacity-90"
          src={src}
          alt={alt}
          width={width || 576}
          height={height || 414.3}
          placeholder="blur"
        />
        {caption && (
          <p className="not-prose -mt-4 text-center text-xs text-muted-foreground">
            {caption}
          </p>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex cursor-zoom-out items-center justify-center bg-neutral-800 bg-opacity-75 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-h-screen w-auto p-6 md:p-24"
          />
        </div>
      )}
    </>
  );
};

export default LightboxImage;
