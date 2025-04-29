
import React from "react";

interface ESPSubHeaderProps {
  documentNumber?: string;
  documentName?: string;
}

export const ESPSubHeader: React.FC<ESPSubHeaderProps> = ({ 
  documentNumber = "1/2", 
  documentName = "Sanction Letter" 
}) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-4 py-2 w-full bg-white border-t border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)]">
      <div className="flex gap-2 items-center w-full">
        <button className="flex items-start self-stretch my-auto w-7 rounded-lg">
          <div className="flex overflow-hidden gap-1.5 justify-center items-center p-1.5 w-7 rounded-md shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/2b82f329f08ba9eafef9fbd87969447330330611?placeholderIfAbsent=true"
              alt="Navigation"
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </button>

        <span className="self-stretch my-auto text-base font-medium text-gray-900">
          ({documentNumber})
        </span>

        <div className="flex flex-1 shrink gap-2 self-stretch my-auto text-base basis-0">
          <h1 className="my-auto font-medium text-gray-900">Aadhaar Signing</h1>
          <p className="flex-1 shrink gap-2 self-stretch h-full basis-0 text-ellipsis text-slate-700">
            {documentName}
          </p>
        </div>

        <button className="flex items-start self-stretch my-auto w-7 rounded-lg">
          <div className="flex overflow-hidden gap-1.5 justify-center items-center px-1.5 w-7 h-7 bg-white rounded-md shadow-sm">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/be5cdf4f94cfedc906d2819a60dbf905f9a9c686?placeholderIfAbsent=true"
              alt="Download"
              className="object-contain self-stretch my-auto w-4 aspect-square"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
