
import React from "react";
import { ESPHeader } from "./ESPHeader";
import { ESPProgressBar } from "./ESPProgressBar";
import { ESPSubHeader } from "./ESPSubHeader";
import { ESPFooter } from "./ESPFooter";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface ESPProps {
  documentNumber: string;
  documentName: string;
  onProceed: () => void;
  customDocumentImage?: string;
  customNextRoute?: string; // Added this prop
}

const ESP: React.FC<ESPProps> = ({
  documentNumber,
  documentName,
  onProceed,
  customDocumentImage = "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f8e8f3283d7969c06675aafff542c79647e5a10f?placeholderIfAbsent=true"
}) => {
  const isMobile = useIsMobile();
  const { config } = useSigningJourney();
  
  // Calculate progress
  // Each document has two steps: preview + sign
  // Then we have auth (conditional), GPS (conditional), and final success
  const conditionalSteps = (config.autoSaveForSigner ? 1 : 0) + (config.gpsCapture ? 1 : 0) + 1; // +1 for final success
  const totalSteps = (config.documents.length * 2) + conditionalSteps;
  
  // Parse document number to get current index
  const currentDocIndex = parseInt(documentNumber.split('/')[0]) - 1;
  
  // Current progress is: completed documents (preview + sign) + current document preview + ESP
  // For each document: preview (1) + ESP (1) = 2 steps
  // For document index 0: (0 * 2) + 1 (preview) + 1 (auth/GPS) + 1 (ESP) = 3
  // For document index 1: (1 * 2) + 1 (preview) + 1 (auth/GPS) + 1 (ESP) = 5
  const completedDocuments = currentDocIndex > 0 ? currentDocIndex : 0;
  const conditionalProgress = (config.autoSaveForSigner ? 1 : 0) + (config.gpsCapture ? 1 : 0);
  const progress = (completedDocuments * 2) + 1 + conditionalProgress + 1;

  return (
    <div className="flex flex-col w-full min-h-[100svh]">
      <ESPHeader />
      <ESPProgressBar progress={progress} total={totalSteps} />
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
      <ESPFooter onProceed={onProceed} />
    </div>
  );
};

export default ESP;
