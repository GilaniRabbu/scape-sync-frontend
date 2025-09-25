"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Create your Account
            </h2>
            <p className="text-gray-600">When sports Meets smart Tech.</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full mt-6"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 py-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeToTerms", checked as boolean)
                }
                className="mt-0.5 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 leading-relaxed"
              >
                I agree to Tech Takes{" "}
                <a
                  href="#"
                  className="text-green-600 underline hover:text-green-700"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-green-600 underline hover:text-green-700"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Create Account Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              Create Account
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google Sign In */}
            <Button
              type="button"
              variant="outline"
              className="w-full py-3 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Footer */}
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm">
                Don&rsquo;t have an account?{" "}
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Get started
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
