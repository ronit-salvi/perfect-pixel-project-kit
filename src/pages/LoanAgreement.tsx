
import React from "react";
import { useNavigate } from "react-router-dom";
import FilledD1 from "@/components/filled-d1/FilledD1";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const LoanAgreement: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useSigningJourney();
  
  // This is typically the second document (index 1)
  const documentIndex = 1;
  
  const handleProceed = () => {
    // Navigate to the ESP sign page for this document
    navigate(`/esp-sign/${documentIndex}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 w-full flex flex-col">
      <FilledD1
        documentIndex={documentIndex}
        onProceed={handleProceed}
      />
    </div>
  );
};

export default LoanAgreement;
