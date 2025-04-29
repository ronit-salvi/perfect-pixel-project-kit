
import React from "react";

interface DocumentCardProps {
  title: string;
  status: "signed" | "pending";
  iconUrl: string;
  isFirst: boolean;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ 
  title, 
  status, 
  iconUrl, 
  isFirst 
}) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center py-1 w-6">
        {isFirst ? (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/f647b2d51f49ca10798d3b2d72a3ba688d0235a6?placeholderIfAbsent=true"
            alt=""
            className="object-contain w-6 aspect-square"
          />
        ) : (
          <div className="flex overflow-hidden flex-col justify-center items-center px-0.5 w-6 h-6 bg-gray-50 rounded-xl">
            <div className="flex shrink-0 w-full h-2 bg-gray-200 rounded-full" />
          </div>
        )}
        <div className="flex flex-1 mt-1 w-0.5 bg-gray-200 rounded-sm min-h-5" />
      </div>
      <article className="flex gap-3 items-start self-start p-4 font-medium bg-white rounded min-w-60 text-slate-700 w-[311px]">
        <div className="flex flex-1 shrink gap-4 items-start w-full basis-0 min-w-60">
          <img
            src={iconUrl}
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div className="flex-1 shrink basis-0">
            <div className="flex gap-2 items-center w-full">
              <h2 className="flex-1 shrink self-stretch my-auto text-sm leading-none basis-0">
                {title}
              </h2>
              <div className="flex items-start self-stretch my-auto text-xs text-center whitespace-nowrap bg-blend-normal">
                {status === "signed" ? (
                  <span className="self-stretch px-2 py-0.5 bg-emerald-50 rounded-2xl text-emerald-700">
                    Signed
                  </span>
                ) : (
                  <span className="self-stretch px-2 py-0.5 bg-gray-100 rounded-2xl">
                    Pending
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
