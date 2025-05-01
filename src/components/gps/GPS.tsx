
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GPSHeader } from "./GPSHeader";
import { GPSProgressBar } from "./GPSProgressBar";
import { LocationContent } from "./LocationContent";
import { GPSFooter } from "./GPSFooter";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const GPS: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useSigningJourney();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleProceed = () => {
    navigate('/consent');
  };
  
  const handleBack = () => {
    if (config.autoSaveForSigner) {
      navigate('/authentication');
    } else {
      // Go back to the last document preview
      navigate(`/document-preview/${config.documents.length - 1}`);
    }
  };

  // Calculate progress
  // Each document has two steps: preview + sign
  // Then we have auth (conditional), GPS (conditional), and final success
  const conditionalSteps = (config.autoSaveForSigner ? 1 : 0) + (config.gpsCapture ? 1 : 0) + 1; // +1 for final success
  const totalSteps = (config.documents.length * 2) + conditionalSteps;
  
  // Current progress is: completed document previews + authentication + GPS
  const progress = config.documents.length + (config.autoSaveForSigner ? 1 : 0) + 1;

  return (
    <div className="w-full bg-white flex flex-col min-h-[100svh]">
      <GPSHeader />
      <GPSProgressBar progress={progress} total={totalSteps} />
      <header className="flex overflow-hidden flex-col justify-center px-4 py-2 w-full text-lg font-medium leading-loose text-gray-900 bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)] min-h-11">
        <div className="flex gap-2 items-center w-full">
          <h1 className="text-lg font-medium leading-loose text-gray-900">
            Capturing GPS Location
          </h1>
        </div>
      </header>
      <div className="w-full min-h-0 bg-gray-200 border border-gray-200 border-solid" />
      <main className="flex-1 overflow-y-auto pt-6 w-full max-w-3xl mx-auto">
        <div className="px-4 w-full">
          <LocationContent />
        </div>
      </main>
      <GPSFooter 
        onBack={handleBack} 
        onProceed={handleProceed} 
      />
    </div>
  );
};

export default GPS;
