import React from "react";
import Image from "next/image";
import whatsapp from "@/Image/whatsapp.svg";
import In from "@/Image/in.svg";
import instagram from "@/Image/instagram.svg";
import telegram from "@/Image/telegram.svg";
import twitter from "@/Image/twitter.svg";
import footer from "@/Image/footer.svg";

function Footer() {
  return (
    <>
      <footer className="relative p-5 bottom-[80px] py-4 bg-white flex flex-col justify-center items-center text-center text-sm text-gray-600">
        <div className="mb-7">
          <Image src={footer} alt="image" />
        </div>
        <div className="flex justify-center gap-5 mb-3">
          <Image src={whatsapp} alt="logo" />
          <Image src={In} alt="logo" />
          <Image src={instagram} alt="logo" />
          <Image src={telegram} alt="logo" />
          <Image src={twitter} alt="logo" />

          {/* <Image src={whatsapp} alt="logo" /> */}
          {/* <Image src={In} alt="logo" /> */}
          {/* <Image src={instagram} alt="logo" /> */}
          {/* <Image src={telegram} alt="logo" /> */}
          {/* <Image src={twitter} alt="logo" /> */}
        </div>
        <p className="mb-2 text-[#372011] text-base font-normal">
          Privacy | Terms | Legal | Cookie Preferences
        </p>
        <p className="text-[#372011] text-base font-normal">
          ©2020 All Rights Reserved. Koffeekodes® is a registered trademark.
        </p>
      </footer>
    </>
  );
}

export default Footer;
