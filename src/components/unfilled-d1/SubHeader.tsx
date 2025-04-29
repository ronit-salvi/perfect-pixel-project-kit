
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
    <div className="w-full bg-white border-t border-b border-solid border-t-[color:var(--Gray-200,#EAECF0)] border-b-[color:var(--Gray-200,#EAECF0)] min-h-11">
      <div className="flex justify-between items-center w-full px-4 py-2.5">
        <div className="flex items-center gap-2 text-base">
          <div className="text-[#101828] font-medium">
            {title}
          </div>
          <div className="text-ellipsis text-[#344054] font-normal overflow-hidden">
            {documentType}
          </div>
        </div>
        <div className="bg-blend-normal text-xs font-medium text-center">
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
