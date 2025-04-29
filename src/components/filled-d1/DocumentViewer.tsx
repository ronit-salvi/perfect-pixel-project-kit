
import React from "react";

interface DocumentViewerProps {
  imageUrl: string;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ imageUrl }) => {
  return (
    <main className="bg-white flex w-full flex-col items-stretch justify-center p-4">
      <div className="rounded w-full">
        <img
          src={imageUrl}
          className="object-contain w-full aspect-[1.29]"
          alt="Document preview"
        />
      </div>
    </main>
  );
};
