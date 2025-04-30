
import React from "react";
import { Navigate } from "react-router-dom";
import ESP from "@/components/esp/ESP";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ESPLoanAgreementPage: React.FC = () => {
  const { config } = useSigningJourney();
  
  // If we're following the dynamic flow, redirect to the main ESP page
  if (config.documents.length !== 2) {
    return <Navigate to="/esp-capture" />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        customDocumentImage="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
        customNextRoute="/final-success"
      />
    </div>
  );
};

export default ESPLoanAgreementPage;
