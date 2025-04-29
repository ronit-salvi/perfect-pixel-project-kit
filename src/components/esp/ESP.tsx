
import React from "react";
import { ESPHeader } from "./ESPHeader";
import { ESPProgressBar } from "./ESPProgressBar";
import { ESPSubHeader } from "./ESPSubHeader";
import { ESPFooter } from "./ESPFooter";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface ESPProps {
  documentNumber?: string;
  documentName?: string;
  nextRoute?: string;
  documentImage?: string;
}

const ESP: React.FC<ESPProps> = ({
  documentNumber = "1/2",
  documentName = "Sanction Letter",
  nextRoute = "/signed-success",
  documentImage = "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleProceed = () => {
    console.log(`Proceeding to ${nextRoute}`);
    navigate(nextRoute);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white flex flex-col min-h-[100svh]">
      <ESPHeader />
      <ESPProgressBar />
      <ESPSubHeader documentNumber={documentNumber} documentName={documentName} />
      <main className="flex-1 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        <div className="max-w-2xl w-full">
          <img
            src={documentImage}
            alt="Document Preview"
            className="object-contain w-full max-h-[80vh] mx-auto"
          />
        </div>
      </main>
      <ESPFooter onProceed={handleProceed} />
    </div>
  );
};

export default ESP;
