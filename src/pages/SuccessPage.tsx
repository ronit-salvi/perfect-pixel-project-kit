import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Success from "@/components/success/Success";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const SuccessPage: React.FC = () => {
  const { documentIndex } = useParams();
  const { config, nextDocument } = useSigningJourney();
  const navigate = useNavigate();
  
  const currentIndex = parseInt(documentIndex || "0");
  const isLastDocument = currentIndex === config.documents.length - 1;
  
  // Move to next document when the page loads (if not the last one)
  React.useEffect(() => {
    if (!isLastDocument) {
      nextDocument();
    }
  }, [isLastDocument, nextDocument]);
  
  const handleNext = () => {
    if (isLastDocument) {
      // If this was the last document, go to home
      navigate('/');
    } else {
      // Otherwise go to the next document preview
      navigate(`/document-preview/${currentIndex + 1}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Success 
        isFinal={isLastDocument} 
        documentIndex={currentIndex}
        onNext={handleNext}
      />
    </div>
  );
};

export default SuccessPage;
