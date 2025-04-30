
import React from "react";
import { SuccessHeader } from "./SuccessHeader";
import { SuccessMessage } from "./SuccessMessage";
import { DocumentList } from "./DocumentList";
import { SuccessFooter } from "./SuccessFooter";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

interface SuccessProps {
  isFinal?: boolean;
  documentIndex: number;
  onNext: () => void;
}

const Success: React.FC<SuccessProps> = ({ 
  isFinal = false, 
  documentIndex, 
  onNext 
}) => {
  return (
    <div className="flex flex-col w-full min-h-[100svh] bg-white">
      <SuccessHeader />
      <main className="flex-1 overflow-y-auto px-4">
        <div className="pt-6 w-full">
          <SuccessMessage 
            isFinal={isFinal} 
            documentIndex={documentIndex} 
          />
          <DocumentList 
            isFinal={isFinal} 
            documentIndex={documentIndex} 
          />
        </div>
      </main>
      <SuccessFooter 
        isFinal={isFinal}
        onNext={onNext} 
      />
    </div>
  );
};

export default Success;
