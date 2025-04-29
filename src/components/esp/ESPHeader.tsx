
import React from "react";

export const ESPHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-solid border-b-[color:var(--Gray-200,#EAECF0)]">
      <div className="flex justify-between items-center w-full px-4 py-1">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/4e587c6514340c105ae873476a950fb74240d938?placeholderIfAbsent=true"
          alt="Logo"
          className="object-contain w-20 aspect-[2.22]"
        />
        <div className="flex items-center">
          {/* Space for potential future icons */}
        </div>
      </div>
    </div>
  );
};
