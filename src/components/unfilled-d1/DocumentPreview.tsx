
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DocumentPreviewProps {
  previewImages: string[];
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  previewImages,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-6 md:px-8 md:py-8">
      <div className="rounded w-full max-w-2xl mx-auto">
        {previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Document preview page ${index + 1}`}
            className={`object-contain w-full ${
              index === 0 ? "aspect-[0.82] rounded" : "aspect-[1.28] mt-2 md:mt-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
