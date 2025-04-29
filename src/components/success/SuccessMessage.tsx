
import React from "react";

interface SuccessMessageProps {
  isFinal?: boolean;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ isFinal = false }) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col self-center max-w-full w-[311px]">
        <div className="flex gap-10 justify-center items-start w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/8aba57ee888f3145f380fb2ac0a2481bab8eba4a?placeholderIfAbsent=true"
            alt="Success checkmark"
            className="object-contain w-12 aspect-square"
          />
        </div>
        <div className="self-end mt-4 w-full text-center">
          <h1 className="text-lg font-medium leading-loose text-gray-900">
            Signed Successfully
          </h1>
          <p className="mt-2 text-sm leading-none text-gray-500">
            {isFinal ? "2/2 documents signed successfully." : "1/2 document signed successfully."}
          </p>
        </div>
      </div>
    </div>
  );
};
