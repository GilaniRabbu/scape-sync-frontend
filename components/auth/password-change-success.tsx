import Image from "next/image";
import Link from "next/link";

export default function PasswordChangeSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl text-center space-y-10">
        <div className="flex justify-center">
          <Image
            src="/firework.svg"
            alt="Celebration fireworks"
            width={192}
            height={192}
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-gray-900">
            Password Changed Successfully!
          </h1>
          <p>Your account is set up! Just verify your email to get started.</p>
        </div>

        <Link
          href={"/"}
          className="w-full block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
}
