import Image from "next/image";
import Link from "next/link";

export default function AccountSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg text-center space-y-12">
        <div className="flex justify-center">
          <Image
            src="/firework.svg"
            alt="Celebration fireworks"
            width={192}
            height={192}
            className="w-48 h-48 object-contain"
          />
        </div>

        <h1 className="text-3xl font-semibold text-gray-900">
          Account Created Successfully!
        </h1>

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
