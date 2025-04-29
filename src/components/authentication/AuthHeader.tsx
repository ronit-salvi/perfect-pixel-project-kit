
import React from "react";
import { ActionButton } from "../filled-d1/ActionButton";

interface AuthHeaderProps {
  logoUrl: string;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ logoUrl }) => {
  return (
    <div className="min-h-[52px] w-full">
      <div className="justify-center items-stretch border-b-[color:var(--Gray-200,#EAECF0)] bg-white flex w-full flex-col overflow-hidden flex-1 px-4 py-1 border-b border-solid">
        <div className="flex w-full items-center gap-[40px_100px] justify-between">
          <img
            src={logoUrl}
            alt="Company Logo"
            className="aspect-[2.22] object-contain w-20 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-center gap-3 my-auto">
            <ActionButton
              imageSrc="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/3977bdb039b1c2ba3e9b0c3ef1d0015c37fc70aa?placeholderIfAbsent=true"
              alt="Download"
            />
            <ActionButton
              imageSrc="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/061a72d340ed1f86fad2a0c4c4404280975678d2?placeholderIfAbsent=true"
              alt="Language"
            />
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
