
import React from "react";
import Success from "@/components/success/Success";

const FinalSuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Success isFinal={true} />
    </div>
  );
};

export default FinalSuccessPage;
