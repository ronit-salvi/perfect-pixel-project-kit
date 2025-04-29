
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface AuthFooterProps {
  logoUrl: string;
  onBack: () => void;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({
  logoUrl,
  onBack,
}) => {
  return (
    <footer className="items-center border-t-[color:var(--Gray-200,#EAECF0)] bg-white flex min-h-[52px] w-full gap-2 text-sm font-medium whitespace-nowrap leading-none px-4 py-1.5 border-t border-solid">
      <div className="flex w-full max-w-3xl mx-auto justify-between items-center">
        <img
          src={logoUrl}
          alt="Footer Logo"
          className="aspect-[2.27] object-contain w-[91px] shrink-0 my-auto"
        />
        <Button 
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
      </div>
    </footer>
  );
};
