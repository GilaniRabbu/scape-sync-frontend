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
        router.push("/user-detail");
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
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

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome to ScapeSync
            </h2>
            <p className="text-gray-600">
              Please share your login details so you can access the website.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email address
              </label>
              <Input
                type="email"
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

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={formData.remember_me}
                  onCheckedChange={(checked) =>
                    handleInputChange("remember_me", checked as boolean)
                  }
                  className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-green-600 hover:text-green-700"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
