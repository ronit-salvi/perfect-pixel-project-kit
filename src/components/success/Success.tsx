
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
    <div className="bg-white max-w-[480px] w-full h-[812px] overflow-y-auto mx-auto">
      <div className="flex flex-col bg-white h-full">
        <SuccessHeader />
        <section className="flex-1 px-4 mt-6 w-full">
          <div className="flex-1 pt-24 w-full">
            <SuccessMessage isFinal={isFinal} />
            <DocumentList isFinal={isFinal} />
          </div>
        </section>
        <SuccessFooter isFinal={isFinal} />
      </div>
    </div>
  );
};

export default Success;
