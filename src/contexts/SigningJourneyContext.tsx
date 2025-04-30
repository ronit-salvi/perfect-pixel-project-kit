
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface DocumentConfig {
  name: string;
  signed: boolean;
}

export interface SigningJourneyConfig {
  documents: DocumentConfig[];
  gpsCapture: boolean;
  autoSaveForSigner: boolean;
  eSignType: "Aadhaar" | "DSC";
  currentDocumentIndex: number;
}

interface SigningJourneyContextType {
  config: SigningJourneyConfig;
  setConfig: (config: SigningJourneyConfig) => void;
  nextDocument: () => void;
  prevDocument: () => void;
  resetJourney: () => void;
  markCurrentDocumentSigned: () => void;
}

const defaultConfig: SigningJourneyConfig = {
  documents: [
    { name: "Sanction Letter", signed: false },
    { name: "Loan Agreement", signed: false },
  ],
  gpsCapture: true,
  autoSaveForSigner: true,
  eSignType: "Aadhaar",
  currentDocumentIndex: 0,
};

const SigningJourneyContext = createContext<SigningJourneyContextType | undefined>(undefined);

export const SigningJourneyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SigningJourneyConfig>(defaultConfig);

  const nextDocument = () => {
    if (config.currentDocumentIndex < config.documents.length - 1) {
      setConfig({
        ...config,
        currentDocumentIndex: config.currentDocumentIndex + 1,
      });
    }
  };
  
  const prevDocument = () => {
    if (config.currentDocumentIndex > 0) {
      setConfig({
        ...config,
        currentDocumentIndex: config.currentDocumentIndex - 1,
      });
    }
  };
  
  const markCurrentDocumentSigned = () => {
    const updatedDocuments = [...config.documents];
    updatedDocuments[config.currentDocumentIndex] = {
      ...updatedDocuments[config.currentDocumentIndex],
      signed: true
    };
    
    setConfig({
      ...config,
      documents: updatedDocuments
    });
  };

  const resetJourney = () => {
    setConfig({
      ...defaultConfig,
      documents: defaultConfig.documents.map(doc => ({ ...doc, signed: false })),
    });
  };

  return (
    <SigningJourneyContext.Provider 
      value={{ 
        config, 
        setConfig, 
        nextDocument, 
        prevDocument,
        resetJourney,
        markCurrentDocumentSigned 
      }}
    >
      {children}
    </SigningJourneyContext.Provider>
  );
};

export const useSigningJourney = () => {
  const context = useContext(SigningJourneyContext);
  if (!context) {
    throw new Error("useSigningJourney must be used within a SigningJourneyProvider");
  }
  return context;
};
