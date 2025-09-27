"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import AutHeader from "../shared/auth-header";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with Logo */}
      <AutHeader />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link
              href={"/login"}
              className="text-sm font-medium flex items-center gap-2 text-[#49AE44]"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Forgot your password?
            </h2>
            <p className="text-sm text-gray-600">
              Please enter the email address associated with your account, and
              we&rsquo;ll email you a link to reset your password.
            </p>
          </div>

          <div className="space-y-6">
            <Input
              type="email"
              placeholder="Email address"
              className="w-full"
            />
            <Button
              type="submit"
              className="cursor-pointer w-full bg-[#49AE44] hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
