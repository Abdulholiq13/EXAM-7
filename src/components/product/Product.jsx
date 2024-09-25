import React from "react";
import { useDispatch } from "react-redux";
import CartButton from "../button/CartButton";

const Product = ({ data }) => {
  // const dispatch = useDispatch();
  return (
    <div>
      <div className="p-2 bg-[#F4F4F4] h-[300px] flex items-center justify-center">
        <img className="object-contain w-[200px]" src={data?.image_url} alt={data?.name} />
      </div>
      <div className="flex flex-col items-start">
        <h2>{data?.name}</h2>
        <p className="max-w-[259px]">{data?.description}</p>

        <ul className="flex gap-2">
          {data?.color_options?.map((color, index) => (
            <li key={index}>
              <button
                style={{
                  backgroundColor: `${color}`,
                  color: `${color}`,
                  padding: " 10px",
                  borderRadius: "50%",
                  border: color === "#FFFFFF" ? "2px solid #000" : `2px solid ${color}`,
                }}
              ></button>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-[22px] mb-[22px]">{data.price}$</h3>

        <CartButton title={"Add to Cart"} />
      </div>
    </div>
  );
};

export default Product;
