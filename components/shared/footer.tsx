import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const socialLinks = [
  { name: "YouTube", href: "#", icon: <FaYoutube className="w-5 h-5" /> },
  { name: "X (Twitter)", href: "#", icon: <FaXTwitter className="w-5 h-5" /> },
  { name: "Facebook", href: "#", icon: <FaFacebookF className="w-5 h-5" /> },
  { name: "Instagram", href: "#", icon: <FaInstagram className="w-5 h-5" /> },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F3B34] text-white">
      <div
        className="absolute bottom-0 right-0 h-full w-full bg-no-repeat bg-right bg-cover xl:bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/mask-group.png')" }}
      ></div>
      <ContainerWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr_1fr] gap-12 items-center py-10">
          <div>
            <Image
              src="/logo-light.svg"
              alt="ScapeSync Logo"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          <p className="leading-relaxed text-xs w-[360px] text-[#CFD8D6]">
            Your all-in-one platform for job scheduling, employee management,
            and client service built to keep your business running smoothly from
            anywhere.
          </p>

          <div className="flex flex-wrap flex-row gap-4 lg:justify-end">
            <button className="cursor-pointer px-4 py-2 rounded-md border border-[#C7E6C5] flex items-center gap-3">
              <FaApple className="size-7" />
              <div className="text-left">
                <div className="text-[8px] text-gray-300">Download on the</div>
                <div className="text-sm font-semibold text-gray-300">
                  App Store
                </div>
              </div>
            </button>
            <button className="cursor-pointer px-4 py-2 rounded-md border border-[#C7E6C5] flex items-center gap-3">
              <Image
                width={28}
                height={28}
                src={"/playstore.svg"}
                alt="Google Play"
              />
              <div className="text-left">
                <div className="text-[8px] text-gray-300">Download on the</div>
                <div className="text-sm font-semibold text-gray-300">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-start lg:my-2 gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-white"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </ContainerWrapper>

      <div className="mt-2 lg:mt-4 border-t border-white/30">
        <div className="container mx-auto py-2 px-5 md:px-10 lg:px-14">
          <p className="text-sm text-[#CFD8D6]">
            © 2021-2025, ScapeSync. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
