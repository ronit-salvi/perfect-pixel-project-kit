
import React from "react";
import { SuccessProgressBar } from "./SuccessProgressBar";

export const SuccessHeader: React.FC = () => {
  return (
    <header className="w-full">
      <div className="w-full">
        <div className="w-full min-h-[52px]">
          <div className="flex overflow-hidden flex-col flex-1 justify-center px-4 py-1 w-full bg-white border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)]">
            <div className="flex gap-10 items-center w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/4e587c6514340c105ae873476a950fb74240d938?placeholderIfAbsent=true"
                alt="Logo"
                className="object-contain self-stretch my-auto w-20 aspect-[2.22]"
              />
            </div>
          </div>
        </div>
        <SuccessProgressBar />
      </div>
    </header>
  );
};
