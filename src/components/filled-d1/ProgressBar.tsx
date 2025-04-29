
import React from "react";

interface ProgressBarProps {
  progress: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
}) => {
  const width = (progress / total) * 100;

  return (
    <div className="bg-white flex w-full items-center gap-0.5 p-0.5">
      <div
        className="bg-[#7F56D9] self-stretch h-1 my-auto rounded-[1px]"
        style={{ width: `${width}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={total}
      />
      <div className="bg-[#D0D5DD] self-stretch flex min-w-60 shrink h-1 flex-1 basis-[0%] my-auto rounded-[1px]" />
    </div>
  );
};
