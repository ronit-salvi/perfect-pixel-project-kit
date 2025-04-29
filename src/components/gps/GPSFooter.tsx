
import React from "react";

interface GPSFooterProps {
  onBack: () => void;
  onProceed: () => void;
}

export const GPSFooter: React.FC<GPSFooterProps> = ({ onBack, onProceed }) => {
  return (
    <footer className="flex flex-wrap gap-2 items-center self-end px-4 py-2 w-full text-sm font-medium leading-none whitespace-nowrap bg-white border-t border-solid border-t-[color:var(--Gray-200,#EAECF0)] min-h-14">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
        alt="Footer Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.27] w-[91px]"
      />
      <div className="flex flex-wrap flex-1 shrink gap-3 items-center self-stretch my-auto basis-0 min-w-60">
        <button 
          className="flex items-start self-stretch my-auto rounded-lg text-slate-700"
          onClick={onBack}
        >
          <div className="overflow-hidden gap-2 self-stretch px-3.5 py-2 bg-white rounded-lg shadow-sm">
            Back
          </div>
        </button>
        <button 
          className="flex items-start self-stretch my-auto text-white rounded-lg"
          onClick={onProceed}
        >
          <div className="overflow-hidden gap-2 self-stretch px-4 py-2.5 bg-violet-500 rounded-lg shadow-sm">
            Proceed
          </div>
        </button>
      </div>
    </footer>
  );
};
