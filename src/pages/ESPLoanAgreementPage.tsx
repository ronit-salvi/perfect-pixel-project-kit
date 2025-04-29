
import React from "react";
import ESP from "@/components/esp/ESP";

const ESPLoanAgreementPage: React.FC = () => {
  return <ESP 
    documentNumber="2/2"
    documentName="Loan Agreement"
    nextRoute="/final-success"
  />;
};

export default ESPLoanAgreementPage;
