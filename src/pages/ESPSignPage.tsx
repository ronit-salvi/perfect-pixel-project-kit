
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ESP from "@/components/esp/ESP";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

const ESPSignPage: React.FC = () => {
  const { documentIndex } = useParams();
  const { config, markCurrentDocumentSigned } = useSigningJourney();
  const navigate = useNavigate();
  
  const currentIndex = parseInt(documentIndex || "0");
  
  const handleComplete = () => {
    // Mark the current document as signed
    markCurrentDocumentSigned();
    
    // Navigate to the success page for this document
    navigate(`/success/${currentIndex}`);
  };
  
  // Calculate document number for display (e.g., "1/3")
  const documentNumber = `${currentIndex + 1}/${config.documents.length}`;
  
  // Get current document name
  const documentName = config.documents[currentIndex]?.name || "Document";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        documentNumber={documentNumber}
        documentName={documentName}
        onProceed={handleComplete}
        customDocumentImage="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
      />
    </div>
  );
};

export default ESPSignPage;
