
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DocumentViewerProps {
  images: string[];
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ images }) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-6 md:px-8 md:py-8">
      <div className="rounded w-full max-w-2xl mx-auto h-[calc(100vh-240px)] overflow-y-auto">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className={`object-contain w-full ${
              index === 0 ? "aspect-[1.29]" : "aspect-[1.29] mt-2 md:mt-4"
            }`}
            alt={`Document preview page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
