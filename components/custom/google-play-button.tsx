import Image from "next/image";

const GooglePlayButton = () => {
  return (
    <button className="cursor-pointer px-4 py-2 rounded-md border border-[#C7E6C5] flex items-center gap-3">
      <Image width={28} height={28} src={"/playstore.svg"} alt="Google Play" />
      <div className="text-left">
        <div className="text-[8px] text-gray-800">Download on the</div>
        <div className="text-sm font-semibold text-gray-800">Google Play</div>
      </div>
    </button>
  );
};

export default GooglePlayButton;
