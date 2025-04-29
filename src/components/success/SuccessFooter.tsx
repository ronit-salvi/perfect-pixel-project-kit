
import React from "react";
import { useNavigate } from "react-router-dom";

interface SuccessFooterProps {
  isFinal?: boolean;
}

export const SuccessFooter: React.FC<SuccessFooterProps> = ({ isFinal = false }) => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (isFinal) {
      // Navigate to home when all documents are signed
      navigate('/');
    } else {
      // Navigate to the next document signing page
      navigate('/esp-loan-agreement');
    }
  };
  
  return (
    <footer className="flex gap-2 items-center px-4 py-1.5 w-full bg-white border-t border-solid border-t-[color:var(--Gray-200,#EAECF0)] min-h-[52px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
        alt="Footer logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.27] w-[91px]"
      />
      <div className="flex flex-1 shrink gap-3 items-center self-stretch my-auto basis-0 min-w-60">
        <div className="flex items-start self-stretch my-auto rounded-lg">
          <button 
            className="overflow-hidden gap-2 self-stretch px-3.5 py-2 bg-violet-500 rounded-lg shadow-sm text-white"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </footer>
  );
};
