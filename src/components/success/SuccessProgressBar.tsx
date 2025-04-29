
import React from "react";

export const SuccessProgressBar: React.FC = () => {
  return (
    <div className="flex gap-0.5 items-center p-0.5 w-full bg-white">
      <div className="flex shrink-0 self-stretch my-auto h-1 bg-violet-500 rounded-sm min-w-60 w-[270px]" />
      <div className="flex flex-1 shrink self-stretch my-auto h-1 bg-gray-300 rounded-sm basis-0 w-[99px]" />
    </div>
  );
};
