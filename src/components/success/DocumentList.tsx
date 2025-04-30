
import React from "react";
import { DocumentCard } from "./DocumentCard";
import { useSigningJourney } from "@/contexts/SigningJourneyContext";

interface DocumentListProps {
  isFinal?: boolean;
}

export const DocumentList: React.FC<DocumentListProps> = ({ isFinal = false }) => {
  const { config } = useSigningJourney();
  const currentIndex = config.currentDocumentIndex;
  
  // Generate document statuses based on current index
  const documents = config.documents.map((doc, index) => ({
    title: doc.name,
    status: isFinal || index < currentIndex ? "signed" as const : "pending" as const,
    iconUrl: "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/5c957fa91da6a12fa52e98c9dffc090c8df1faa8?placeholderIfAbsent=true",
  }));

  return (
    <div className="mt-6 w-full flex flex-col items-center">
      {documents.map((doc, index) => (
        <div key={doc.title} className={index > 0 ? "mt-3" : ""}>
          <DocumentCard {...doc} isFirst={index === 0} />
        </div>
      ))}
    </div>
  );
};
