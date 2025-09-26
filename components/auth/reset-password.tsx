"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-lg">
        <div className="mb-4 px-5 py-2">
          <Link
            href={"/login"}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium"
          >
            <ChevronLeft size={16} />
            Back
          </Link>
        </div>
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Enter your new password.
          </h2>
          <p className="text-sm text-gray-600">
            Please enter the email address associated with your account, and
            we&apos;ll email you a link to reset your password.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              id="new-password"
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              className="w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="relative">
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>

          <Button className="w-full cursor-pointer">Reset Password</Button>
        </CardContent>
      </Card>
    </div>
  );
}
