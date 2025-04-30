
import React from "react";
import { useNavigate } from "react-router-dom";
import { PreviewHeader } from "./PreviewHeader";
import { ProgressBar } from "./ProgressBar";
import { DocumentHeader } from "./DocumentHeader";
import { DocumentViewer } from "./DocumentViewer";
import { PreviewFooter } from "./PreviewFooter";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";
import { useIsMobile } from "@/hooks/use-mobile";

const FilledD1: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { config, nextDocument } = useSigningJourney();
  const currentDocumentIndex = config.currentDocumentIndex;
  const currentDocument = config.documents[currentDocumentIndex];
  const totalDocuments = config.documents.length;
  
  const handleProceed = () => {
    console.log("Proceeding to next step");
    
    // Navigate to authentication if enabled, otherwise skip to GPS or ESP
    if (config.autoSaveForSigner) {
      navigate('/authentication');
    } else if (config.gpsCapture) {
      navigate('/gps-capture');
    } else {
      navigate('/esp-capture');
    }
  };
  
  const handleBack = () => {
    console.log("Going back");
    
    if (currentDocumentIndex > 0) {
      // If not the first document, go back to previous document
      nextDocument(); // This will need to be prevDocument in context
      navigate('/loan-agreement');
    } else {
      // If first document, go back to home
      navigate('/');
    }
  };

  // Create an array with 10 copies of the same image for scrolling
  const documentImages = Array(10).fill(
    "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/45ecd45f8f0481c0f11090735756d0ae7641c02a?placeholderIfAbsent=true"
  );

  // Calculate progress
  const progress = currentDocumentIndex + 1;
  const total = totalDocuments + 4; // Documents + Auth + GPS + ESP + Success

  return (
    <div className="flex flex-col min-h-[100svh] w-full">
      <PreviewHeader logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/96ae0dc7ef30a827bde15140af97c803bf655902?placeholderIfAbsent=true" />
      <ProgressBar progress={progress} total={total} />
      <DocumentHeader 
        title="Preview" 
        documentType={currentDocument.name} 
        status="Sign Required" 
      />
      <div className="flex-1 overflow-y-auto w-full bg-white">
        <DocumentViewer images={documentImages} />
      </div>
      <PreviewFooter 
        logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
        onBack={handleBack}
        onProceed={handleProceed}
      />
    </div>
  );
};

export default FilledD1;
