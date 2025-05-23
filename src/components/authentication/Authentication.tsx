
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "./AuthHeader";
import { AuthProgressBar } from "./AuthProgressBar";
import { AuthContent } from "./AuthContent";
import { AuthFooter } from "./AuthFooter";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Authentication: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { config } = useSigningJourney();
  
  const handleBack = () => {
    console.log("Going back to loan agreement");
    navigate('/document-preview/0');
  };
  
  const handleProceed = () => {
    // Navigate based on GPS toggle
    if (config.gpsCapture) {
      navigate('/gps-capture');
    } else {
      navigate('/consent');
    }
  };

  // Calculate progress
  // Each document has two steps: preview + sign
  // Then we have auth (conditional), GPS (conditional), and final success
  const conditionalSteps = (config.autoSaveForSigner ? 1 : 0) + (config.gpsCapture ? 1 : 0) + 1; // +1 for final success
  const totalSteps = (config.documents.length * 2) + conditionalSteps;
  
  // Current progress is: completed document previews + authentication
  const progress = config.documents.length + 1;

  return (
    <div className="bg-gray-50 w-full">
      <div className="flex flex-col bg-white w-full min-h-[100svh]">
        <AuthHeader logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/96ae0dc7ef30a827bde15140af97c803bf655902?placeholderIfAbsent=true" />
        <AuthProgressBar progress={progress} total={totalSteps} />
        <div className="flex overflow-hidden flex-col justify-center px-4 py-2 w-full text-lg font-medium leading-loose text-gray-900 bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)] min-h-11">
          <div className="flex gap-2 items-center w-full max-w-3xl mx-auto">
            <h1 className="flex-1 gap-2 w-full">
              Authentication
            </h1>
          </div>
        </div>
        <div className="flex-1 max-w-3xl mx-auto w-full">
          <AuthContent onProceed={handleProceed} />
        </div>
        <AuthFooter 
          logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
          onBack={handleBack}
        />
      </div>
    </div>
  );
};

export default Authentication;
