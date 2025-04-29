
import React from "react";
import { LocationBadge } from "./LocationBadge";

export const LocationContent: React.FC = () => {
  return (
    <div className="flex flex-1 gap-2.5 items-start size-full">
      <section className="flex-1 shrink py-4 w-full bg-white rounded basis-0 min-w-60">
        <div className="flex flex-col justify-center w-full">
          <div className="w-full">
            <div className="flex gap-10 justify-center items-start w-full">
              <div className="flex gap-10 justify-center items-start w-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/a12012bfd2b69f9c0e633d944ad9bde11cb342b6?placeholderIfAbsent=true"
                  alt="Success"
                  className="object-contain w-10 aspect-square"
                />
              </div>
            </div>
            <h2 className="mt-4 w-full text-lg font-medium leading-loose text-center text-gray-900">
              GPS location captured successfully!
            </h2>
          </div>
        </div>
        <div className="relative mt-4 w-full">
          <div className="overflow-hidden z-0 w-full bg-white rounded-lg border-t border-r border-l border-solid border-l-[color:var(--Gray-200,#EAECF0)] border-r-[color:var(--Gray-200,#EAECF0)] border-t-[color:var(--Gray-200,#EAECF0)]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/3665a831e6d255b9afb49d1bb3c66cd22cf09adb?placeholderIfAbsent=true"
              alt="Location Map"
              className="object-contain w-full aspect-[1.63]"
            />
          </div>
          <div className="flex z-0 flex-col justify-center p-2 w-full text-sm font-medium leading-none text-center bg-white rounded-none text-slate-700">
            <div className="flex flex-col items-start w-full">
              <LocationBadge 
                icon="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/701c7fcc8f8f7e8e0405859241a0689d82705134?placeholderIfAbsent=true" 
                text="Latitude:19.02341234" 
              />
              <div className="mt-2.5">
                <LocationBadge 
                  icon="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/701c7fcc8f8f7e8e0405859241a0689d82705134?placeholderIfAbsent=true" 
                  text="Longitude:19.02341234" 
                />
              </div>
              <div className="mt-2.5">
                <LocationBadge
                  icon="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/e919b086a7108da073c3cb7c124bedde1878d175?placeholderIfAbsent=true"
                  text="Accuracy: Upto 15m"
                  variant="success"
                />
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/ba5237715dcfdcfa0ad3c9ee79d65c666f4d25ea?placeholderIfAbsent=true"
            alt="Location Marker"
            className="object-contain absolute z-0 w-10 h-10 aspect-square right-[calc(50%-35px)] top-[39px]"
          />
        </div>
      </section>
    </div>
  );
};
