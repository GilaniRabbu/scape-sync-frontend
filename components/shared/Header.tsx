import Image from "next/image";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <ContainerWrapper>
        <div className="flex items-center justify-between flex-wrap gap-5">
          {/* Logo */}
          <div>
            <Image
              src="/logo.svg"
              alt="ScapeSync Logo"
              width={144}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Button */}
          <div>
            <Link
              href={"/signup"}
              className="px-6 py-3 rounded-lg bg-[#3BA334] text-white font-semibold shadow-lg cursor-pointer hover:bg-green-600 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </ContainerWrapper>
    </header>
  );
}
