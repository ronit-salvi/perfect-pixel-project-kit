
import React from "react";
import ESP from "@/components/esp/ESP";

const ESPLoanAgreementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ESP 
        documentNumber="2/2"
        documentName="Loan Agreement"
        nextRoute="/final-success"
      />
    </div>
  );
};

export default ESPLoanAgreementPage;
