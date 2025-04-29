
import React from "react";

interface SignButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export const SignButton: React.FC<SignButtonProps> = ({ disabled, onClick }) => {
  return (
    <div className="flex gap-3 items-center mt-4 w-full text-sm font-medium leading-none text-white min-h-9">
      <button 
        className="flex flex-1 shrink items-start self-stretch my-auto w-full rounded-lg basis-0 min-w-60"
        onClick={onClick}
        disabled={disabled}
      >
        <span className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2 w-full rounded-lg shadow-sm basis-0 min-w-60 ${disabled ? 'bg-violet-300 cursor-not-allowed' : 'bg-violet-500 cursor-pointer'}`}>
          Sign Document
        </span>
      </button>
    </div>
  );
};
