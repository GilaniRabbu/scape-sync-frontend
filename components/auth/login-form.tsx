/* eslint-disable */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import AuthHeader from "../shared/auth-header";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData).unwrap();

      if (res?.status) {
        toast.success(res?.message || "Login successful!");
        router.push("/");
        setFormData({ email: "", password: "", remember_me: false });
        localStorage.setItem("accessToken", res?.data?.token);
      } else {
        toast.error(res?.message || "Login failed!");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <AuthHeader />

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-6 pt-6 pb-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome to ScapeSync
            </h2>
            <p className="text-sm text-gray-600">
              Please share your login details so you can access the website.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-all text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={formData.remember_me}
                  onCheckedChange={(checked) =>
                    handleInputChange("remember_me", checked as boolean)
                  }
                  className="data-[state=checked]:bg-[#49AE44] data-[state=checked]:border-[#49AE44]"
                />
                <label htmlFor="remember" className="text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-[#49AE44] transition-all hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer w-full bg-[#49AE44] hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-gray-50 text-gray-600">OR</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full bg-transparent cursor-pointer"
          >
            <FaGoogle className="size-4 mr-2" />
            Continue with Google
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don&rsquo;t have an account?{" "}
            <Link
              href={"/signup"}
              className="font-medium text-[#49AE44] transition-all hover:underline"
            >
              Getting Started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
