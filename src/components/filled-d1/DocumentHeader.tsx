
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
    <header className="flex overflow-hidden flex-col justify-center self-end px-4 py-2 w-full bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)] min-h-11">
      <div className="flex flex-wrap gap-2 items-center w-full max-w-3xl mx-auto">
        <div className="flex flex-wrap flex-1 shrink gap-2 self-stretch my-auto text-base basis-0 min-w-60">
          <h1 className="my-auto font-medium text-gray-900">{title}</h1>
          <p className="flex-1 shrink gap-2 self-stretch h-full basis-0 min-w-60 text-ellipsis text-slate-700">
            {documentType}
          </p>
        </div>
        <Badge text={status} />
      </div>
    </header>
  );
};
