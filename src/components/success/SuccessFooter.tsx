
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <footer className="flex items-center justify-between px-4 py-1.5 w-full bg-white border-t border-solid border-t-[color:var(--Gray-200,#EAECF0)] min-h-[52px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
        alt="Footer logo"
        className="object-contain shrink-0 aspect-[2.27] w-[91px]"
      />
      <Button 
        className="bg-violet-500 hover:bg-violet-600"
        onClick={handleNext}
      >
        Next <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </footer>
  );
};
