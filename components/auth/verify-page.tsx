import Link from "next/link";

const VerifyPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="text-left">
          <Link href={"/"} className="text-green-700 text-sm font-medium">
            ← Back
          </Link>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Please check your email!!
          </h2>
          <p className="text-sm mt-2 text-gray-600">
            We’ve emailed a 6-digit confirmation code to acb@domain. please
            enter the code in below box to verify your email.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="cursor-pointer mt-6 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800">
            Verify
          </button>
          <p className="mt-2 text-sm text-center text-gray-600">
            Don’t have a code?{" "}
            <Link href={""} className="text-green-700 font-medium">
              Resend code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
