import Image from "next/image";
import Link from "next/link";
import AuthHeader from "../shared/auth-header";

export default function AccountSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AuthHeader />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center space-y-10">
          <div className="flex justify-center">
            <Image
              src="/firework.svg"
              alt="Celebration fireworks"
              width={192}
              height={192}
              className="w-48 h-48 object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Account Created Successfully!
          </h1>

          <Link
            href={"/"}
            className="w-full block bg-[#49AE44] hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
