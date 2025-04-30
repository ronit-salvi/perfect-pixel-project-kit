
import React from "react";
import { SigningJourneyProvider } from "@/contexts/SigningJourneyContext";
import ConfigurationForm from "@/components/configuration/ConfigurationForm";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full flex flex-col">
      <SigningJourneyProvider>
        <ConfigurationForm />
      </SigningJourneyProvider>
    </div>
  );
};

export default Index;
