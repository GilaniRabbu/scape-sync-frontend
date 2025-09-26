import Image from "next/image";
import AppStoreButton from "../custom/app-store-button";
import GooglePlayButton from "../custom/google-play-button";
import ContainerWrapper from "../common/ContainerWrapper";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-[-100px] w-40 h-40 bg-[#9DFF99] opacity-75 rounded-full blur-3xl"></div>
        </div>

        <ContainerWrapper className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
            {/* Left content */}
            <div className="space-y-16">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight text-balance">
                  All Your Jobs
                  <br />
                  One Smart App
                </h1>
                <p className="leading-relaxed md:max-w-lg text-pretty text-slate-600">
                  Built for business owners, employees, and clients streamlining
                  job scheduling, service tracking, and team management in one
                  powerful app.
                </p>
              </div>

              {/* Download buttons */}
              <div className="flex flex-row flex-wrap gap-4">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>

            {/* Right content - Phone mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/hero-img.png"
                  alt="Job management app interface showing dashboard"
                  width={520}
                  height={624}
                  className="max-w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </main>
    </>
  );
}
