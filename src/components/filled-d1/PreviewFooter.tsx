
import React from "react";

interface PreviewFooterProps {
  logoUrl: string;
  onBack: () => void;
  onProceed: () => void;
}

export const PreviewFooter: React.FC<PreviewFooterProps> = ({
  logoUrl,
  onBack,
  onProceed,
}) => {
  return (
    <footer className="mt-auto items-center border-t-[color:var(--Gray-200,#EAECF0)] bg-white flex min-h-[52px] w-full gap-2 text-sm text-white font-medium whitespace-nowrap leading-none px-4 py-1.5 border-t border-solid">
      <div className="flex w-full max-w-3xl mx-auto justify-between items-center">
        <img
          src={logoUrl}
          alt="Footer Logo"
          className="aspect-[2.27] object-contain w-[91px] shrink-0 my-auto"
        />
        <div className="flex items-center gap-3 my-auto">
          <button
            onClick={onBack}
            className="flex rounded-lg text-slate-700"
          >
            <div className="shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white gap-2 overflow-hidden px-3.5 py-2 rounded-lg">
              Back
            </div>
          </button>
          <button
            onClick={onProceed}
            className="flex rounded-lg"
          >
            <div className="shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#7F56D9] gap-2 overflow-hidden px-3.5 py-2 rounded-lg">
              Proceed
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
