import React, { useState, useEffect } from "react";
import { useGetSingleProductQuery } from "@/context/api/productApi";
import { useParams } from "react-router-dom";
import { Breadcrumb, Carousel, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addToCart } from "@/context/slices/cartSlices";
import { useDispatch } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";
import "./singleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: product } = useGetSingleProductQuery(id);
  const cart = useSelector((state) => state.cart.value);

  useEffect(() => {
    if (isAdded) {
      messageApi.success("Product added to cart successfully!");
    }
  }, [isAdded, messageApi]);

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ id: product.id, ...product, quantity }));
      setIsAdded(true);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const contentStyle = {
    margin: "0 auto",
    height: "460px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const CustomNextArrow = (props) => (
    <div {...props}>
      <RightOutlined style={{ fontSize: "30px", color: "#0BA42D" }} />
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div {...props}>
      <LeftOutlined style={{ fontSize: "30px", color: "#0BA42D" }} />
    </div>
  );

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      {contextHolder}
      {product ? (
        <div className="container py-[58px] border-t-2 border-t-gray-300">
          <Breadcrumb
            className="font-medium mb-[42px]"
            separator="/"
            items={[{ title: "Home", href: "/" }, { title: "Products", href: "/products" }, { title: `${product.name}` }]}
          />
          <div className="grid grid-cols-3 gap-[39px]">
            <div className="col-span-2">
              <div className="bg-gray-100 mb-[100px] p-4 rounded-xl">
                <Carousel
                  className="py-5"
                  arrows
                  infinite={false}
                  prevArrow={<CustomPrevArrow />}
                  nextArrow={<CustomNextArrow />}
                >
                  <div>
                    <img style={contentStyle} src={product.image_url} alt="" />
                  </div>
                  {/* Boshqa rasm qo'shing */}
                </Carousel>
              </div>
              <div className="flex items-center justify-evenly gap-3 mx-auto">
                {new Array(5).fill().map((item, inx) => (
                  <div className="w-[114px] p-2 flex items-center justify-center bg-gray-100 rounded-md" key={inx}>
                    <img className="w-[80px]" src={product.image_url} alt={product.name} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="border-b border-dashed border-[#6A6969] pb-4">
                <h2 className="text-5xl uppercase text-[#190D26] font-medium mb-[15px]">{product.name}</h2>
                <p className="text-lg font-medium mb-[15px]">{product.description}</p>
                <div className="flex items-center gap-3">
                  <ReactStars className="text-sm" count={5} onChange={ratingChanged} size={24} color1={"#ffd700"} edit={false} />
                  <span className="text-sm text-[#454444]">({product.rating_counts})</span>
                </div>
              </div>
              <div className="pt-[30px] border-b border-dashed border-[#6A6969] pb-4">
                <h2 className="text-4xl font-bold mb-[15px]">${product.price} or $99/month</h2>
                <p className="text-lg font-medium">Suggested payments with 6 month special financing</p>
              </div>
              <div className="flex items-center mb-[30px]">
                <button onClick={decrementQuantity} className="bg-gray-300 px-4 py-2 rounded">
                  -
                </button>
                <span className="mx-4 text-2xl">{quantity}</span>
                <button onClick={incrementQuantity} className="bg-gray-300 px-4 py-2 rounded">
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={handleAddToCart}
                  disabled={cart.some((item) => item.id == product.id)}
                  className={`rounded-full text-[22px] bg-green-500 flex items-center gap-4 py-[16px] px-[53px] ${
                    cart.some((item) => item.id == product.id) && "opacity-80 cursor-not-allowed"
                  } text-white h-[52px] `}
                >
                  <RiShoppingCartLine />
                  {cart.some((item) => item.id == product.id) ? "Added" : "Add Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SingleProduct;
