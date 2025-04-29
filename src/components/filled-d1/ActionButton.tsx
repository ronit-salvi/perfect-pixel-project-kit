
import React from "react";

interface ActionButtonProps {
  imageSrc: string;
  alt?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ imageSrc, alt = "Action icon" }) => {
  return (
    <div className="flex items-start self-stretch my-auto w-10 rounded-lg">
      <button className="flex overflow-hidden gap-2 justify-center items-center px-2.5 w-10 h-10 bg-white rounded-lg shadow-sm">
        <img
          src={imageSrc}
          className="object-contain self-stretch my-auto w-5 aspect-square"
          alt={alt}
        />
      </button>
    </div>
  );
};
