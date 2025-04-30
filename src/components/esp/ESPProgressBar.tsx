
import React from "react";

interface ESPProgressBarProps {
  progress: number;
  total: number;
}

export const ESPProgressBar: React.FC<ESPProgressBarProps> = ({
  progress,
  total
}) => {
  const progressPercentage = (progress / total) * 100;
  
  return (
    <div className="flex gap-0.5 items-center p-0.5 w-full bg-white">
      <div 
        className="flex shrink-0 self-stretch my-auto h-1 bg-violet-500 rounded-sm"
        style={{ width: `${progressPercentage}%` }}
      />
      <div 
        className="flex flex-1 shrink self-stretch my-auto h-1 bg-gray-300 rounded-sm basis-0"
        style={{ width: `${100 - progressPercentage}%` }}
      />
    </div>
  );
};
