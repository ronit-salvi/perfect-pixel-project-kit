
import React from "react";
import { DocumentCard } from "./DocumentCard";

interface DocumentListProps {
  isFinal?: boolean;
}

export const DocumentList: React.FC<DocumentListProps> = ({ isFinal = false }) => {
  const documents = [
    {
      title: "Sanction Letter",
      status: "signed" as const,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/5c957fa91da6a12fa52e98c9dffc090c8df1faa8?placeholderIfAbsent=true",
    },
    {
      title: "Loan Agreement",
      status: isFinal ? "signed" as const : "pending" as const,
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/5c957fa91da6a12fa52e98c9dffc090c8df1faa8?placeholderIfAbsent=true",
    },
  ];

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
