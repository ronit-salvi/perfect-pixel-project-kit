
import React from "react";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({ checked, onChange }) => {
  return (
    <section className="w-full rounded">
      <div className="flex overflow-hidden flex-wrap gap-3 items-start w-full min-h-6">
        <div className="flex justify-center items-center pt-0.5 w-5">
          <div 
            className="flex justify-center items-center self-stretch my-auto w-5 cursor-pointer"
            onClick={() => onChange(!checked)}
          >
            <img
              src={checked 
                ? "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/8343d9a50111bb71c19de795d84a291d2cf90d73?placeholderIfAbsent=true" 
                : "https://cdn.builder.io/api/v1/image/assets/455f743bc1c9461cac1bab4c6df6f995/71172712319f3b11bf561d7f861feacbd0be029f?placeholderIfAbsent=true"}
              alt="Checkbox"
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </div>
        <h2 className="flex-1 shrink text-base font-medium basis-0 min-w-60 text-slate-700">
          I agree that
        </h2>
      </div>
      <p className="flex-1 shrink gap-2.5 self-stretch mt-2 w-full text-sm leading-5 text-gray-500 basis-0">
        By clicking this checkbox and the Sign Document button, I agree that
        this mark will be the electronic representation of my signature for the
        electronic document. I also understand that recipients of electronic
        documents I sign will be able to see my signing details, including but
        not restricted to my Email ID/Phone Number and IP address.
      </p>
    </section>
  );
};
