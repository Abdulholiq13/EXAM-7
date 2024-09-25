import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex items-center gap-10 text-base font-medium">
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/category"}>Categories</Link>
        </li>
        <li>
          <Link to={"/brands"}>Brands</Link>
        </li>
        <li>
          <Link to={"/news"}>What’s new</Link>
        </li>
        <li>
          <Link to={"/sales"}>Sales</Link>
        </li>
        <li>
          <Link to={"/help"}>Help</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
