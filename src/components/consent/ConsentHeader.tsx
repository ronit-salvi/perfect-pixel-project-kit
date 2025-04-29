
import React from "react";

export const ConsentHeader: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center px-4 py-2 w-full bg-white rounded-xl border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)]">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full">
        <h1 className="gap-2 self-stretch my-auto text-base font-medium text-gray-900 whitespace-nowrap min-w-60 w-[244px]">
          Consent
        </h1>
        <div className="flex gap-3 items-center self-stretch my-auto w-9">
          <button className="flex items-start self-stretch my-auto w-9 rounded-lg">
            <span className="flex overflow-hidden gap-2 justify-center items-center p-2 w-9 rounded-lg shadow-sm">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/19d881e74e4bb1fd2b02c70b8f67f8569d18b79a?placeholderIfAbsent=true"
                alt="Close"
                className="object-contain self-stretch my-auto w-5 aspect-square"
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
