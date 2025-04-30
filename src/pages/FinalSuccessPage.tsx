
import React from "react";
import { useNavigate } from "react-router-dom";
import Success from "@/components/success/Success";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const FinalSuccessPage: React.FC = () => {
  const { config } = useSigningJourney();
  const navigate = useNavigate();
  
  const handleNext = () => {
    // Navigate back to home
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Success 
        isFinal={true}
        documentIndex={config.documents.length - 1} // Last document index
        onNext={handleNext}
      />
    </div>
  );
};

export default FinalSuccessPage;
