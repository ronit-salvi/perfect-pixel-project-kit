
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AuthContentProps {
  onProceed?: () => void;
}

export const AuthContent: React.FC<AuthContentProps> = ({ onProceed }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
    if (onProceed) {
      onProceed();
    }
  };
  
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col items-center space-y-6 mb-8">
        <h1 className="text-xl font-medium text-center">
          Please confirm your identity
        </h1>
        <p className="text-sm text-gray-500 text-center max-w-xs">
          We've sent a one-time password (OTP) to your registered mobile number
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="email-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Email/Phone
          </label>
          <Input
            id="email-phone"
            placeholder="Enter email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP
              </label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl"
                  />
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-violet-500 hover:bg-violet-600"
            >
              Sign In
            </Button>
            
            <div className="flex justify-center">
              <button 
                type="button"
                className="text-violet-600 text-sm font-medium"
              >
                Sign in with Password
              </button>
            </div>
          </div>
        </form>
        
        <div className="text-xs text-gray-500 text-center pt-6">
          <p>By continuing, you agree to our</p>
          <p><a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};
