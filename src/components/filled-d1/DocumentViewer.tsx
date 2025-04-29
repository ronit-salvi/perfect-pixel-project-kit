
import React from "react";

interface DocumentViewerProps {
  images: string[];
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ images }) => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch justify-center p-4">
      <div className="rounded w-full">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className={`object-contain w-full ${
              index === 0 ? "aspect-[1.29]" : "aspect-[1.29] mt-1"
            }`}
            alt={`Document preview page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
