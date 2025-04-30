
import React from "react";
import ESP from "@/components/esp/ESP";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ESPPage: React.FC = () => {
  const { config } = useSigningJourney();
  const isLastDocument = config.currentDocumentIndex === config.documents.length - 1;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        customNextRoute={isLastDocument ? "/final-success" : "/signed-success"}
      />
    </div>
  );
};

export default ESPPage;
