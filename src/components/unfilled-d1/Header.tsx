
import React from "react";

interface HeaderProps {
  logoUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <div className="w-full">
      <div className="justify-center items-stretch border-b-[color:var(--Gray-200,#EAECF0)] bg-white flex w-full flex-col overflow-hidden flex-1 px-4 py-1 border-b border-solid">
        <div className="flex w-full items-center gap-[40px_100px] justify-between max-w-3xl mx-auto">
          <img
            src={logoUrl}
            alt="Company Logo"
            className="aspect-[2.22] object-contain w-20 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center gap-3 my-auto">
            <button
              aria-label="Download"
              className="self-stretch flex w-9 my-auto rounded-lg"
            >
              <div className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-9 gap-2 overflow-hidden h-9 px-2 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/447e5ce529ab2363601e293032b7ed8885a9af94?placeholderIfAbsent=true"
                  alt="Download"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                />
              </div>
            </button>
            <button
              aria-label="Change language"
              className="self-stretch flex w-9 my-auto rounded-lg"
            >
              <div className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-9 gap-2 overflow-hidden h-9 px-2 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/065fe0617644676e9a49b3a89f5fffea10a77ef8?placeholderIfAbsent=true"
                  alt="Language"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                />
              </div>
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/89febec0fe0ef513f0db2a56a3a5fbd61b6f7722?placeholderIfAbsent=true"
              alt="Profile"
              className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
