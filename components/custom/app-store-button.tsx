import { FaApple } from "react-icons/fa";

const AppStoreButton = () => {
  return (
    <button className="cursor-pointer px-4 py-2 rounded-md border border-[#C7E6C5] flex items-center gap-3">
      <FaApple className="size-7" />
      <div className="text-left">
        <div className="text-[8px] text-gray-800">Download on the</div>
        <div className="text-sm font-semibold text-gray-800">App Store</div>
      </div>
    </button>
  );
};

export default AppStoreButton;
