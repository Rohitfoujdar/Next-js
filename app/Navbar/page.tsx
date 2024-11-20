import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div
      className="flex h-[70px] justify-center items-center shadow-xl ml-[-10px]"
      style={{ fontFamily: "Georgia" }}
    >
      <Image
        className="h-[60px] w-auto"
        src="https://s3.rdbuz.com/Images/rdc/rdc-redbus-logo.webp"
        alt="logo"
        width={200}
        height={200}
      />
      <Link href="/about">
        <p className="pl-[20px] font-[550] text-[#D02025] cursor-pointer">
          About us
        </p>
      </Link>
    </div>
  );
}

export default Header;
