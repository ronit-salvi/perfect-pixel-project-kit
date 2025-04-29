
import React from "react";

interface LocationBadgeProps {
  icon: string;
  text: string;
  variant?: "default" | "success";
}

export const LocationBadge: React.FC<LocationBadgeProps> = ({ 
  icon, 
  text, 
  variant = "default" 
}) => {
  const baseClasses = "flex items-start whitespace-nowrap bg-blend-normal";
  const variantClasses = {
    default: "text-slate-700",
    success: "text-emerald-700",
  };

  const badgeBaseClasses = {
    default: "bg-gray-100",
    success: "bg-emerald-50",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div
        className={`flex gap-1.5 justify-center items-center py-0.5 pr-2 pl-2.5 ${badgeBaseClasses[variant]} rounded-2xl`}
      >
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-2 aspect-square"
        />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </div>
  );
};
