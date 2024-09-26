import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const CartButton = ({ title, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-[20px] font-bold text-white flex items-center gap-2 rounded-[10px] bg-[#0BA42D] py-[16px] px-[53px]"
      >
        <RiShoppingCartLine />
        {title}
      </button>
    </>
  );
};

export default CartButton;
