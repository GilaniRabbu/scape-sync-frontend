import Link from "next/link";
import AuthHeader from "../shared/auth-header";
import { ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";

const VerifyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AuthHeader />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link
              href={"/"}
              className="text-sm font-medium flex items-center gap-2 text-[#49AE44]"
            >
              <ChevronLeft size={16} />
              Back
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Please check your email!!
            </h2>
            <p className="text-sm text-gray-600">
              We’ve emailed a 6-digit confirmation code to acb@domain. please
              enter the code in below box to verify your email.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49AE44]"
            />
          </div>

          <Button
            type="submit"
            className="cursor-pointer w-full mt-4 bg-[#49AE44] hover:bg-green-700 text-white py-3 rounded-lg font-medium"
          >
            Verify
          </Button>

          <p className="mt-2 text-sm text-center text-gray-600">
            Don’t have a code?{" "}
            <Link href={"/"} className="font-medium text-[#49AE44]">
              Resend code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
