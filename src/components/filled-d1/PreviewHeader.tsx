
import React from "react";
import { ActionButton } from "./ActionButton";

interface PreviewHeaderProps {
  logoUrl: string;
}

export const PreviewHeader: React.FC<PreviewHeaderProps> = ({ logoUrl }) => {
  return (
    <div className="w-full bg-white border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)]">
      <div className="flex justify-between items-center w-full px-4 py-1">
        <img
          src={logoUrl}
          alt="Company Logo"
          className="aspect-[2.22] object-contain w-20 shrink-0 my-auto"
        />
        <div className="flex items-center gap-3">
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
            className="aspect-[1] object-contain w-9 shrink-0 my-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
