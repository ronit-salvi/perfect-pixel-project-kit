
import React from "react";
import { SuccessHeader } from "./SuccessHeader";
import { SuccessMessage } from "./SuccessMessage";
import { DocumentList } from "./DocumentList";
import { SuccessFooter } from "./SuccessFooter";

interface SuccessProps {
  isFinal?: boolean;
}

const Success: React.FC<SuccessProps> = ({ isFinal = false }) => {
  return (
    <div className="bg-white max-w-[480px] w-full h-[812px] mx-auto">
      <div className="flex flex-col h-full bg-white">
        <SuccessHeader />
        <main className="flex-1 overflow-y-auto px-4">
          <div className="pt-24 w-full">
            <SuccessMessage isFinal={isFinal} />
            <DocumentList isFinal={isFinal} />
          </div>
        </main>
        <SuccessFooter isFinal={isFinal} />
      </div>
    </div>
  );
};

export default Success;
