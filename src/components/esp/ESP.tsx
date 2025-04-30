import React from "react";
import { ESPHeader } from "./ESPHeader";
import { ESPProgressBar } from "./ESPProgressBar";
import { ESPSubHeader } from "./ESPSubHeader";
import { ESPFooter } from "./ESPFooter";
import { useNavigate } from "react-router-dom";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface ESPProps {
  customNextRoute?: string;
  customDocumentImage?: string;
}

const ESP: React.FC<ESPProps> = ({
  customNextRoute,
  customDocumentImage = "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { config, nextDocument } = useSigningJourney();
  
  const currentDocumentIndex = config.currentDocumentIndex;
  const totalDocuments = config.documents.length;
  const isLastDocument = currentDocumentIndex === totalDocuments - 1;
  
  const handleProceed = () => {
    if (customNextRoute) {
      navigate(customNextRoute);
      return;
    }
    
    if (isLastDocument) {
      // If this is the last document, go to final success page
      navigate('/final-success');
    } else {
      // Otherwise, go to intermediate success page
      navigate('/signed-success');
    }
  };

  // Calculate document number for display (e.g., "1/3")
  const documentNumber = `${currentDocumentIndex + 1}/${totalDocuments}`;
  
  // Get current document name
  const documentName = config.documents[currentDocumentIndex].name;
  
  // Calculate progress
  const documentsProgress = currentDocumentIndex + 1;
  const authProgress = config.autoSaveForSigner ? 1 : 0;
  const gpsProgress = config.gpsCapture ? 1 : 0;
  const espProgress = 1; // We're on the ESP page
  const progress = documentsProgress + authProgress + gpsProgress + espProgress;
  const total = totalDocuments + 4; // Documents + Auth + GPS + ESP + Success

  return (
    <div className="flex flex-col w-full min-h-[100svh]">
      <ESPHeader />
      <ESPProgressBar />
      <ESPSubHeader documentNumber={documentNumber} documentName={documentName} />
      <main className="flex-1 w-full flex items-center justify-center p-4 md:p-8 bg-white">
        <div className="max-w-2xl w-full h-[calc(100vh-240px)] overflow-y-auto">
          <img
            src={customDocumentImage}
            alt="Document Preview"
            className="object-contain w-full mx-auto"
          />
        </div>
      </main>
      <ESPFooter onProceed={handleProceed} />
    </div>
  );
};

export default ESP;
