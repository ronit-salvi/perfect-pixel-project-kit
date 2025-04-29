
import React, { useState } from "react";
import { ConsentHeader } from "./ConsentHeader";
import { ConsentCheckbox } from "./ConsentCheckbox";
import { SignButton } from "./SignButton";
import { DrawerClose } from "@/components/ui/drawer";

interface ConsentProps {
  onSign: () => void;
}

const Consent: React.FC<ConsentProps> = ({ onSign }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSign = () => {
    if (isChecked) {
      onSign();
    }
  };

  return (
    <div className="max-w-[480px] w-full mx-auto">
      <DrawerClose asChild>
        <ConsentHeader />
      </DrawerClose>
      <section className="overflow-hidden p-4 w-full bg-white rounded-none">
        <div className="w-full">
          <ConsentCheckbox 
            checked={isChecked} 
            onChange={setIsChecked} 
          />
        </div>
        <SignButton 
          disabled={!isChecked} 
          onClick={handleSign} 
        />
      </section>
    </div>
  );
};

export default Consent;
