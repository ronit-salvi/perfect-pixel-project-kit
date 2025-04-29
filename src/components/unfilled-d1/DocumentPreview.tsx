import React from "react";

interface DocumentPreviewProps {
  previewImages: string[];
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({
  previewImages,
}) => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch justify-center p-4">
      <div className="rounded w-full">
        {previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Document preview page ${index + 1}`}
            className={`object-contain w-full ${
              index === 0 ? "aspect-[0.82] rounded" : "aspect-[1.28] mt-1"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
