
"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { SubHeader } from "./SubHeader";
import { DocumentPreview } from "./DocumentPreview";
import { Footer } from "./Footer";

const UnfilledD1: React.FC = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    console.log("Proceeding to next step");
    navigate('/loan-agreement');
  };

  // Create arrays with 10 copies of each image for scrolling
  const documentImages = [
    ...Array(10).fill("https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/6ef8932525b317405498b17eb668929a636ce0b6?placeholderIfAbsent=true"),
    ...Array(10).fill("https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f97e604cca36a8f1553b828be6a2e68294d5d840?placeholderIfAbsent=true")
  ];

  return (
    <div className="bg-gray-50 max-w-[480px] w-full h-[812px] mx-auto">
      <div className="flex flex-col h-full bg-white">
        <Header logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/4e587c6514340c105ae873476a950fb74240d938?placeholderIfAbsent=true" />
        <ProgressBar progress={1} total={5} />
        <SubHeader
          title="Preview"
          documentType="SanctionLetter"
          status="Sign Required"
        />
        <main className="flex-1 overflow-y-auto">
          <DocumentPreview previewImages={documentImages} />
        </main>
        <Footer logoUrl="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/0a78363f011d5aef950b0e23bd3c32b40ad818ae?placeholderIfAbsent=true" 
                onProceed={handleProceed} />
      </div>
    </div>
  );
};

export default UnfilledD1;
