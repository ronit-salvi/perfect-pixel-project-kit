
import React, { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Badge } from "../filled-d1/Badge";

export const AuthContent: React.FC = () => {
  const [otp, setOtp] = useState("");
  
  return (
    <main className="bg-white flex w-full flex-col items-stretch justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-sm text-center">
          <div className="mt-2 mb-8">
            <Badge text="OTP Sent" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Verify OTP</h2>
          <p className="text-sm text-gray-600 mb-6">
            We've sent a one-time password to your registered email address. Please enter it below to continue.
          </p>
          
          <div className="mb-8 w-full">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              className="flex justify-center gap-2 w-full"
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            
            <div className="mt-4 text-sm text-center">
              <p className="text-gray-600">
                Didn't receive OTP? <button className="text-[#7F56D9] font-medium">Resend OTP</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
