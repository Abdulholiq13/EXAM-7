import React from "react";
import { Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementCart } from "@/context/slices/cartSlices";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCart(item));
    }
  };

  const total = cart.reduce((acc, item) => acc + item?.price * item.quantity, 0);

  return (
    <div className="container pb-[100px] border-t-2 border-[#E9E7E7]">
      <Link className="flex items-center gap-3 mb-[30px] mt-10" to={"/products"}>
        <IoArrowBackOutline className="text-2xl" />
        Back to Shopping
      </Link>
      <h2 className="mb-[40px] text-[32px] uppercase font-medium">SHOPPING CART</h2>
      {cart.length === 0 ? (
        <Empty description="Savatchada mahsulot yo'q" />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <table className="w-full col-span-2">
            <thead className="border-b-2 border-t-2 border-dashed border-[#6A6969]">
              <tr className="flex items-center px-5">
                <th className="py-2">Product</th>
                <th className="py-2 ml-auto mr-[200px]">Quantity</th>
                <th className="py-2">Price</th>
              </tr>
            </thead>
            <tbody className="flex flex-col">
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-2 border-dashed border-[#6A6969] w-full flex items-center justify-between px-5"
                >
                  <td className="flex items-start justify-start gap-4 p-5 w-[400px]">
                    <button onClick={() => handleRemove(item.id)}>
                      <RiCloseLargeLine />
                    </button>
                    <div className="flex gap-4">
                      <div className="w-[155px] py-2 rounded-md bg-gray-100">
                        <img className="mx-auto" src={item.image_url} alt={item.name} width={100} />
                      </div>
                      <div>
                        <h3 className="text-[20px] uppercase tracking-wider font-medium">{item.brand_name}</h3>
                        <p className="text-lg font-light mb-[30px]">{item.name}</p>
                        <p className="">Black</p>
                        <p className="text-[#0BA42D] font-light">In stock</p>
                      </div>
                    </div>
                  </td>
                  <td className="flex">
                    <div className="flex items-center">
                      <button onClick={() => handleDecrement(item)} className="border px-2">
                        -
                      </button>
                      <span className="mx-2 w-[30px] block text-center">{item.quantity}</span>
                      <button onClick={() => handleIncrement(item)} className="border px-2">
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-l-2 pl-4 border-[#E9E7E7] sticky top-0">
            <h2 className="text-[28px] uppercase border-b-2 border-dashed border-[#6A6969] font-bold mb-[30px]">CART TOTALS</h2>
            <div className="flex justify-between items-center">
              <p>Shipping (3-5 Business Days)</p>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center">
              <p>TAX (estimated for the United States (US))</p>
              <span className="font-semibold">$0</span>
            </div>
            <div className="pb-[41px] border-b-2 border-dashed border-[#6A6969] flex items-center justify-between">
              <p>Subtotal</p>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <div className="mb-[68px] flex items-center justify-between mt-2">
              <p>Total</p>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>

            <button className="bg-[#0BA42D] w-full py-[16px] px-[53px] rounded-[10px] text-white uppercase font-bold">
              Proceed to Checkout
            </button>
            <Link className="flex items-center justify-center gap-3 mb-[30px] mt-10 mx-auto" to={"/products"}>
              <IoArrowBackOutline className="text-2xl" />
              Back to Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
