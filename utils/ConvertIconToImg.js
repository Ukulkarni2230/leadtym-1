"use client";
import React, { useState } from "react";
import Image from "next/image";

const ConvertIconToImg = ({
  icon: Icon,
  src,
  alt,
  width,
  height,
  size = 20,
  className,
  iconClassname,
  loader: Loader,
  loaderClassname,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center select-none">
      {Icon && (
        <div
          className={`absolute transition-opacity duration-300 ${
            isImageLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <Icon size={size} className={iconClassname} />
        </div>
      )}
      {!isImageLoaded && Loader && (
        <div className={`absolute ${loaderClassname}`}>
          <Loader />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsImageLoaded(true)}
        className={`transition-opacity ${className} duration-300 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        draggable="false"
        style={{ userSelect: "none" }}
      />
    </div>
  );
};

export default ConvertIconToImg;
