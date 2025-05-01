import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilledD1 from "@/components/filled-d1/FilledD1";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const DocumentPreviewPage: React.FC = () => {
  const { documentIndex } = useParams();
  const { config } = useSigningJourney();
  const navigate = useNavigate();
  
  const currentIndex = parseInt(documentIndex || "0");
  const isLastDocument = currentIndex === config.documents.length - 1;
  
  const handleNext = () => {
    if (isLastDocument) {
      // If on the last document, check where to go next based on configuration
      if (config.autoSaveForSigner) {
        navigate('/authentication');
      } else if (config.gpsCapture) {
        navigate('/gps-capture');
      } else {
        navigate('/consent');
      }
    } else {
      // Otherwise go to the next document
      navigate(`/document-preview/${currentIndex + 1}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 w-full flex flex-col">
      <FilledD1 
        documentIndex={currentIndex} 
        onProceed={handleNext} 
      />
    </div>
  );
};

export default DocumentPreviewPage;
