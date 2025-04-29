
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
      <img
        src={logoUrl}
        alt="Footer Logo"
        className="aspect-[2.27] object-contain w-[91px] self-stretch shrink-0 my-auto"
      />
      <div className="self-stretch flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] my-auto">
        <button
          onClick={onBack}
          className="self-stretch flex my-auto rounded-lg text-slate-700"
        >
          <div className="self-stretch shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white gap-2 overflow-hidden px-3.5 py-2 rounded-lg">
            Back
          </div>
        </button>
        <button
          onClick={onProceed}
          className="self-stretch flex my-auto rounded-lg"
        >
          <div className="self-stretch shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#7F56D9] gap-2 overflow-hidden px-3.5 py-2 rounded-lg">
            Proceed
          </div>
        </button>
      </div>
    </footer>
  );
};
