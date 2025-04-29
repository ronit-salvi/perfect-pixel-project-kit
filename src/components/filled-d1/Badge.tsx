
import React from "react";

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="flex items-start self-stretch my-auto text-sm font-medium leading-none text-center text-blue-700 bg-blend-normal">
      <span className="self-stretch px-3 py-1 bg-sky-50 rounded-2xl">
        {text}
      </span>
    </div>
  );
};
