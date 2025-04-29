
import React from "react";

interface SubHeaderProps {
  title: string;
  documentType: string;
  status: string;
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  title,
  documentType,
  status,
}) => {
  return (
    <div className="items-stretch border-t-[color:var(--Gray-200,#EAECF0)] border-b-[color:var(--Gray-200,#EAECF0)] bg-white flex min-h-11 w-full flex-col overflow-hidden whitespace-nowrap justify-center px-4 py-2.5 border-t border-solid border-b">
      <div className="flex w-full items-center gap-2 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-base flex-1 my-auto">
          <div className="text-[#101828] font-medium">
            {title}
          </div>
          <div className="text-ellipsis flex-1 text-[#344054] font-normal overflow-hidden">
            {documentType}
          </div>
        </div>
        <div className="bg-blend-normal flex text-xs font-medium text-center my-auto">
          {status === "Sign Required" ? (
            <div className="px-3 py-1 bg-sky-50 text-blue-700 rounded-2xl">
              {status}
            </div>
          ) : (
            <div className="bg-[#F2F4F7] px-2 py-0.5 text-[#344054] rounded-2xl">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
