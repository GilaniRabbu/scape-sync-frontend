"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import AutHeader from "../shared/auth-header";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const [createAccount, { isLoading }] = useCreateUserMutation();
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create FormData object
      const data = new FormData();
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("password_confirmation", formData.password_confirmation);
      data.append("terms", formData.terms ? "true" : "false");

      // Send FormData to API
      const response = await createAccount(data).unwrap();

      if (response?.status) {
        toast.success(response?.message || "Account created successfully!");
        router.push("/login");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
          terms: false,
        });
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <AutHeader />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-6 pb-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Create your Account
            </h2>
            <p className="text-gray-600">When sports Meets smart Tech.</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={(e) =>
                    handleInputChange("first_name", e.target.value)
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={(e) =>
                    handleInputChange("last_name", e.target.value)
                  }
                  className="w-full"
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
                value={formData.password_confirmation}
                onChange={(e) =>
                  handleInputChange("password_confirmation", e.target.value)
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
                checked={formData.terms}
                onCheckedChange={(checked) =>
                  handleInputChange("terms", checked as boolean)
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
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-transparent">
            <FaGoogle className="size-4 mr-2" />
            Continue with Google
          </Button>

          {/* Sign up link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="text-green-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
