import React from "react";
import logo from "@/assets/gamegeek.svg";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Subheader = () => {
  return (
    <div className="bg-[#0D2613]">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="object-cover w-[50px]" />
          <div className="flex items-center gap-2 text-white">
            <FaPhone className="text-[#14FF00]" />
            <a href="tel:+4904-049-950" className="hover:underline">
              +4904-049-950
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white">
          <div className="border-r border-[#14FF00] pr-4">
            <p>Get 50% Off on the Selected items</p>
          </div>
          <p className="hover:text-[#14FF00] cursor-pointer">Shop Now</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative inline-block">
            <select className="appearance-none bg-transparent border border-gray-300 text-white text-base py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-[#14FF00]">
              <option
                value="en"
                style={{
                  backgroundImage: "url(https://flagcdn.com/w20/us.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "30px",
                }}
              >
                English
              </option>
              <option
                value="ru"
                style={{
                  backgroundImage: "url(https://flagcdn.com/w20/ru.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "30px",
                }}
              >
                Русский
              </option>
              <option
                className="capitalize"
                value="sp"
                style={{
                  backgroundImage: "url(https://flagcdn.com/w20/fr.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "30px",
                }}
              >
                español
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white">
            <IoLocationSharp className="text-[#14FF00]" />
            <p>Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
