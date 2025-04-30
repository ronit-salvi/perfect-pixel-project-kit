
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
  
  const handleProceed = () => {
    // Navigate to ESP sign page for the current document
    navigate(`/esp-sign/${currentIndex}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 w-full flex flex-col">
      <FilledD1 
        documentIndex={currentIndex} 
        onProceed={handleProceed} 
      />
    </div>
  );
};

export default DocumentPreviewPage;
