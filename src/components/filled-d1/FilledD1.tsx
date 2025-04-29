
import React from "react";
import { PreviewHeader } from "./PreviewHeader";
import { ProgressBar } from "./ProgressBar";
import { DocumentHeader } from "./DocumentHeader";
import { DocumentViewer } from "./DocumentViewer";
import { PreviewFooter } from "./PreviewFooter";
import { useNavigate } from "react-router-dom";

const FilledD1: React.FC = () => {
  const navigate = useNavigate();
  
  const handleProceed = () => {
    console.log("Proceeding to authentication");
    navigate('/authentication');
  };
  
  const handleBack = () => {
    console.log("Going back");
    navigate('/');
  };

  return (
    <div className="bg-gray-50 max-w-[480px] w-full overflow-hidden mx-auto">
      <div className="flex flex-col bg-white">
        <PreviewHeader logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/96ae0dc7ef30a827bde15140af97c803bf655902?placeholderIfAbsent=true" />
        <ProgressBar progress={2} total={5} />
        <DocumentHeader title="Preview" documentType="Loan Agreement" status="Sign Required" />
        <DocumentViewer imageUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/45ecd45f8f0481c0f11090735756d0ae7641c02a?placeholderIfAbsent=true" />
        <PreviewFooter 
          logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true"
          onBack={handleBack}
          onProceed={handleProceed}
        />
      </div>
    </div>
  );
};

export default FilledD1;
