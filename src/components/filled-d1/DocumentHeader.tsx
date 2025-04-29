
import React from "react";
import { Badge } from "./Badge";

interface DocumentHeaderProps {
  title: string;
  documentType: string;
  status: string;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  title,
  documentType,
  status,
}) => {
  return (
    <header className="flex overflow-hidden flex-col justify-center w-full bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)] min-h-11">
      <div className="flex flex-wrap justify-between items-center w-full px-4 py-2">
        <div className="flex flex-wrap gap-2 items-center text-base">
          <h1 className="my-auto font-medium text-gray-900">{title}</h1>
          <p className="text-ellipsis text-slate-700">
            {documentType}
          </p>
        </div>
        <Badge text={status} />
      </div>
    </header>
  );
};
