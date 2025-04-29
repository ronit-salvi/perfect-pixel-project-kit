
import React, { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Badge } from "../filled-d1/Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";

export const AuthContent: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const handleSignIn = () => {
    console.log("Signing in with OTP");
    navigate('/gps-capture');
  };
  
  return (
    <main className="bg-white flex w-full flex-col items-stretch justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-sm text-center">
          <div className="mt-2 mb-8">
            <Badge text="Authentication" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Please confirm your identity</h2>
          <p className="text-sm text-gray-600 mb-6">
            We've sent a one-time password to verify your identity.
          </p>
          
          <div className="mb-6 w-full">
            <div className="flex flex-col space-y-2 mb-4">
              <Label htmlFor="email" className="text-left text-sm font-medium text-gray-700">Email address / Phone number</Label>
              <Input 
                id="email"
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email or phone" 
                className="w-full"
              />
            </div>
            
            <div className="text-left w-full mb-1">
              <Label htmlFor="otp-input" className="text-sm font-medium text-gray-700">Enter OTP</Label>
            </div>
            
            <InputOTP
              id="otp-input"
              maxLength={6}
              value={otp}
              onChange={setOtp}
              className="flex justify-center gap-2 w-full mb-4"
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            
            <div className="mb-4 text-sm text-center">
              <p className="text-gray-600">
                Didn't receive OTP? <button className="text-[#7F56D9] font-medium">Resend OTP</button>
              </p>
            </div>
            
            <Button 
              onClick={handleSignIn}
              className="w-full bg-[#7F56D9] hover:bg-[#6941C6] text-white py-2 rounded-lg mb-4"
            >
              Sign In
            </Button>
            
            <div className="text-center mb-6">
              <button className="text-[#7F56D9] text-sm font-medium">
                Sign in with Password
              </button>
            </div>
            
            <div className="text-xs text-gray-500 text-center">
              <p>
                By continuing, you agree to our <a href="#" className="text-[#7F56D9]">Terms of Service</a> and <a href="#" className="text-[#7F56D9]">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
