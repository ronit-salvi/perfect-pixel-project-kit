
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GPSHeader } from "./GPSHeader";
import { GPSProgressBar } from "./GPSProgressBar";
import { LocationContent } from "./LocationContent";
import { GPSFooter } from "./GPSFooter";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Consent from "../consent/Consent";

const GPS: React.FC = () => {
  const navigate = useNavigate();
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
    navigate('/authentication');
  };

  const handleSign = () => {
    console.log("Document signed, proceeding to ESP capture");
    setIsDrawerOpen(false);
    // Navigate to ESP page instead of loan agreement
    navigate('/esp-capture');
  };

  return (
    <div className="bg-gray-50 max-w-[480px] w-full h-[812px] overflow-y-auto mx-auto">
      <div className="flex flex-col bg-white">
        <GPSHeader />
        <GPSProgressBar progress={4} total={5} />
        <header className="flex overflow-hidden flex-col justify-center self-end px-4 py-2 w-full text-lg font-medium leading-loose text-gray-900 bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)] min-h-11">
          <div className="flex gap-2 items-center w-full">
            <h1 className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60">
              Capturing GPS Location
            </h1>
          </div>
        </header>
        <div className="w-full min-h-0 bg-gray-200 border border-gray-200 border-solid" />
        <main className="flex-1 pt-6 w-full">
          <div className="flex-1 px-4 w-full">
            <LocationContent />
          </div>
        </main>
        <GPSFooter 
          onBack={handleBack} 
          onProceed={handleProceed} 
        />
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-[480px] mx-auto">
          <Consent onSign={handleSign} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default GPS;
