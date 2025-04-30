
import React from "react";
import { useNavigate } from "react-router-dom";
import ESP from "@/components/esp/ESP";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ESPPage: React.FC = () => {
  const { config } = useSigningJourney();
  const navigate = useNavigate();
  const isLastDocument = config.currentDocumentIndex === config.documents.length - 1;
  
  const handleProceed = () => {
    // Navigate to the appropriate success page based on whether this is the last document
    navigate(isLastDocument ? "/final-success" : "/signed-success");
  };
  
  // Calculate document number for display (e.g., "1/3")
  const documentNumber = `${config.currentDocumentIndex + 1}/${config.documents.length}`;
  
  // Get current document name
  const documentName = config.documents[config.currentDocumentIndex]?.name || "Document";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        documentNumber={documentNumber}
        documentName={documentName}
        onProceed={handleProceed}
        customDocumentImage="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
      />
    </div>
  );
};

export default ESPPage;
