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
      <div className="flex w-full items-center gap-2">
        <div className="self-stretch flex min-w-60 items-center gap-2 text-base flex-1 shrink basis-[0%] my-auto">
          <div className="text-[#101828] font-medium self-stretch my-auto">
            {title}
          </div>
          <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] gap-2 text-[#344054] font-normal my-auto">
            {documentType}
          </div>
        </div>
        <div className="bg-blend-normal self-stretch flex text-xs text-[#344054] font-medium text-center my-auto">
          <div className="self-stretch bg-[#F2F4F7] px-2 py-0.5 rounded-2xl">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};
