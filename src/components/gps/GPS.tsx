
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GPSHeader } from "./GPSHeader";
import { GPSProgressBar } from "./GPSProgressBar";
import { LocationContent } from "./LocationContent";
import { GPSFooter } from "./GPSFooter";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Consent from "../consent/Consent";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const GPS: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useSigningJourney();
  const currentDocumentIndex = config.currentDocumentIndex;
  const totalDocuments = config.documents.length;
  
  const [location] = useState(() => ({
    query: {},
    path: "",
  }));
  const [deviceSize] = useState(() => "large");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleProceed = () => {
    console.log("Proceeding to consent");
    setIsDrawerOpen(true);
  };
  
  const handleBack = () => {
    console.log("Going back to authentication");
    if (config.autoSaveForSigner) {
      navigate('/authentication');
    } else {
      navigate('/loan-agreement');
    }
  };

  const handleSign = () => {
    console.log("Document signed, proceeding to ESP capture");
    setIsDrawerOpen(false);
    navigate('/esp-capture');
  };

  // Calculate progress
  const documentsProgress = currentDocumentIndex + 1;
  const authProgress = config.autoSaveForSigner ? 1 : 0;
  const gpsProgress = config.gpsCapture ? 1 : 0;
  const progress = documentsProgress + authProgress + gpsProgress;
  const total = totalDocuments + 4; // Documents + Auth + GPS + ESP + Success

  return (
    <div className="w-full bg-white flex flex-col min-h-[100svh]">
      <GPSHeader />
      <GPSProgressBar progress={progress} total={total} />
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

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-[480px] mx-auto">
          <Consent onSign={handleSign} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default GPS;
