
import React from "react";
import { useNavigate } from "react-router-dom";

interface ESPFooterProps {
  onProceed?: () => void;
}

export const ESPFooter: React.FC<ESPFooterProps> = ({ onProceed }) => {
  const navigate = useNavigate();
  
  const handleProceed = () => {
    if (onProceed) {
      onProceed();
    } else {
      navigate('/signed-success');
    }
  };
  
  return (
    <footer className="flex gap-2 items-center px-4 py-1.5 w-full bg-white border-t border-solid border-t-[color:var(--Gray-200,#EAECF0)] min-h-[52px]">
      <div className="flex w-full max-w-3xl mx-auto justify-between items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
          alt="Footer Logo"
          className="object-contain my-auto aspect-[2.27] w-[91px]"
        />
        <div className="flex gap-3 items-center my-auto">
          <button 
            className="flex items-start text-white rounded-lg"
            onClick={handleProceed}
          >
            <div className="overflow-hidden gap-2 px-4 py-2.5 bg-violet-500 rounded-lg shadow-sm">
              Proceed
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
