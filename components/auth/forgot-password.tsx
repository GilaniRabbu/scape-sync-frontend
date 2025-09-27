"use client";

import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import AuthHeader from "../shared/auth-header";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with Logo */}
      <AuthHeader />

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
            <Link
              href={"/reset-password"}
              className="cursor-pointer w-full bg-[#49AE44] hover:bg-green-700 text-white py-2 px-6 rounded-lg text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
