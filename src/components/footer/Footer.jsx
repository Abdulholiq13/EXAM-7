import React from "react";
import logo from "@/assets/images/GameGeekWhite.svg";

const Footer = () => {
  const linkStyle = "hover:underline cursor-pointer";
  return (
    <footer className="bg-[rgb(13,38,18)]">
      <div className="wrapper py-12 w-full flex justify-between flex-col text-center md:flex-row md:text-start gap-12 container">
        <div className="footer__imgs md:w-1/3 flex flex-col gap-5 items-center md:items-start">
          <img src={logo} alt="logo game geeek" className="max-w-24" />
          <h1 className="text-2xl text-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">
            Start your game with the best
          </h1>
        </div>
        <div className="w-full flex items-center md:items-start justify-end flex-col md:flex-row gap-12 md:gap-[10%] text-slate-100">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>Gift Card</li>
              <li className={linkStyle}>Mobile App</li>
              <li className={linkStyle}>Shipping & Delivery</li>
              <li className={linkStyle}>Order Pickup</li>
              <li className={linkStyle}>Account Signup</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Help</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>ShopCart Help</li>
              <li className={linkStyle}>Returns</li>
              <li className={linkStyle}>Track Orders</li>
              <li className={linkStyle}>Contact Us</li>
              <li className={linkStyle}>Feedback</li>
              <li className={linkStyle}>Security & Fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>News & Blog</li>
              <li className={linkStyle}>Help</li>
              <li className={linkStyle}>Press Center</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
