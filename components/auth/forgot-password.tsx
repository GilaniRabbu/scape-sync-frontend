"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-green-600 rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ScapeSync</h1>
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              Landscaping Management Software
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <button className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium">
              <ChevronLeft size={16} />
              Back
            </button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Forgot your password?
            </h2>
            <p className="text-gray-600">
              Please enter the email address associated with your account, and
              we&rsquo;ll email you a link to reset your password.
            </p>
          </div>

          <div className="space-y-6">
            <Input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-600 focus:ring-green-600 text-gray-900 placeholder-gray-500"
            />

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
