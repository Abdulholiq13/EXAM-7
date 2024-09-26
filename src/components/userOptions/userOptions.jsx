import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserOptions = () => {
  return (
    <>
      <ul className="flex gap-3">
        <li className="p-2">
          <button className="border-none">
            <RiSearchLine className="text-2xl" />
          </button>
        </li>
        <li className="p-2">
          <Link to={"/account"}>
            <RiUser3Line className="text-2xl" />
          </Link>
        </li>
        <li className="p-2">
          <Link to={"/account"}>
            <RiShoppingCartLine className="text-2xl" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserOptions;
