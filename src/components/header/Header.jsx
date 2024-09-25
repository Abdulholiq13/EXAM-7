import React from "react";
import Logo from "@/assets/images/GameGeek.svg";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import UserOptions from "../userOptions/userOptions";

const Header = () => {
  return (
    <div className="container py-9">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img src={Logo} alt="Logo image GameGeek" />
        </Link>

        <Navbar />

        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
