
import React from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import Consent from "@/components/consent/Consent";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ConsentPage: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useSigningJourney();
  
  const handleSign = () => {
    // Navigate to the first ESP page
    navigate(`/esp-sign/0`);
  };

  return (
    <div className="flex flex-col min-h-[100svh] w-full bg-gray-100 items-center justify-center">
      <Drawer open={true}>
        <DrawerContent className="max-w-[480px] mx-auto">
          <Consent onSign={handleSign} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ConsentPage;
