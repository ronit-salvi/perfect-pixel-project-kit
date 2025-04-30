
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ESP from "@/components/esp/ESP";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ESPLoanAgreementPage: React.FC = () => {
  const { config } = useSigningJourney();
  const navigate = useNavigate();
  
  // If we're following the dynamic flow, redirect to the main ESP page
  if (config.documents.length !== 2) {
    return <Navigate to="/esp-capture" />;
  }
  
  const handleProceed = () => {
    // Navigate to the final success page
    navigate("/final-success");
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        documentNumber="2/2" // Hardcoded for loan agreement page
        documentName="Loan Agreement"
        onProceed={handleProceed}
        customDocumentImage="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
      />
    </div>
  );
};

export default ESPLoanAgreementPage;
