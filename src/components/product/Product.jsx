import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CartButton from "../button/CartButton";
import { Link } from "react-router-dom";
import { addToCart } from "@/context/slices/cartSlices";
import { useSelector } from "react-redux";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    setIsAdded(true);
  };

  return (
    <div>
      <div className="relative p-2 bg-[#FfFfFf] h-[300px] flex items-center justify-center">
        {data?.rating_counts > 230 ? (
          <p className="uppercase absolute top-3 text-[#20CB11] left-3 text-lg font-semibold">BESTSELLER</p>
        ) : (
          ""
        )}
        <img className="object-contain w-[200px]" src={data?.image_url} alt={data?.name} />
      </div>
      <div className="flex flex-col items-start">
        <Link to={`/products/${data.id}`}>
          <h2 className="text-[20px] text-[#190D26] font-medium uppercase mt-[22px] mb-3">{data?.name}</h2>
        </Link>
        <p className="max-w-[259px] text-base mb-11 font-light line-clamp-2">{data?.description}</p>

        <ul className="flex gap-2 mb-6">
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

        <CartButton
          onClick={handleAddToCart}
          title={cart.some((item) => item.id == data.id) ? "Added" : "Add Cart"}
          disabled={cart.some((item) => item.id == data.id)}
        />
      </div>
    </div>
  );
};

export default Product;
