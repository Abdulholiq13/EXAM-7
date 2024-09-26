import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useSelector } from "react-redux";

const UserOptions = () => {
  const badge = useSelector((state) => state.cart.value);

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
          <Link to={"/cart"}>
            <Badge count={badge.length}>
              <RiShoppingCartLine className="text-2xl" />
            </Badge>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserOptions;
