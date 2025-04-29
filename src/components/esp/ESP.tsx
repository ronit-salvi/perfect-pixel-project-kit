
import React from "react";
import { ESPHeader } from "./ESPHeader";
import { ESPProgressBar } from "./ESPProgressBar";
import { ESPSubHeader } from "./ESPSubHeader";
import { ESPFooter } from "./ESPFooter";
import { useNavigate } from "react-router-dom";

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
  
  const handleProceed = () => {
    console.log(`Proceeding to ${nextRoute}`);
    navigate(nextRoute);
  };

  return (
    <div className="bg-gray-50 max-w-[480px] w-full h-[812px] overflow-y-auto mx-auto">
      <div className="flex flex-col bg-white h-full">
        <ESPHeader />
        <ESPProgressBar />
        <ESPSubHeader documentNumber={documentNumber} documentName={documentName} />
        <main className="flex flex-col flex-1 justify-center p-4 w-full">
          <img
            src={documentImage}
            alt="Document Preview"
            className="object-contain flex-1 w-full aspect-[0.55]"
          />
        </main>
        <ESPFooter onProceed={handleProceed} />
      </div>
    </div>
  );
};

export default ESP;
