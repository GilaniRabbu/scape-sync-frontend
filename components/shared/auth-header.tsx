import Image from "next/image";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="p-6">
      <Image
        width={144}
        height={60}
        src={"/logo.svg"}
        alt="ScapeSync Logo"
        className="object-contain"
      />
    </div>
  );
};

export default AuthHeader;
