import React, { useState, useEffect } from "react";
import { useGetSingleProductQuery } from "@/context/api/productApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Carousel, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addToCart } from "@/context/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import "./singleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  useEffect(() => {
    if (isAdded) {
      messageApi.success("Product added to cart successfully!");
    }
  }, [isAdded, messageApi]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ cart: { ...product, quantity } }));
    setIsAdded(true); // Xabar trigger qilish uchun isAdded qiymatini true qilamiz
  };

  const contentStyle = {
    margin: "0 auto",
    height: "460px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <RightOutlined style={{ fontSize: "30px", color: "#0BA42D" }} />
    </div>
  );

  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
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
            items={[
              {
                title: "Home",
                href: "/",
              },
              {
                title: "Products",
                href: "/products",
              },
              {
                title: `${product.name}`,
              },
            ]}
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
                  <div>
                    <img style={contentStyle} src={product.image_url} alt="" />
                  </div>
                  <div>
                    <img style={contentStyle} src={product.image_url} alt="" />
                  </div>
                  <div>
                    <img style={contentStyle} src={product.image_url} alt="" />
                  </div>
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
                <div className="flex items-center gpa-3">
                  <ReactStars className="text-sm" count={5} onChange={ratingChanged} size={24} color1={"#ffd700"} edit={false} />
                  <span className="text-sm text-[#454444]">({product.rating_counts})</span>
                </div>
              </div>
              <div className="pt-[30px] border-b border-dashed border-[#6A6969] pb-4">
                <h2 className="text-4xl font-bold mb-[15px]">${product.price} or $99/month</h2>
                <p className="text-lg font-medium">Suggested payments with 6 month special financing</p>
              </div>
              <div className="border-b border-dashed border-[#6A6969] pb-[30px] pt-[30px]">
                <h2 className="text-2xl text-[#190D26] font-semibold mb-[30px]">Choose a color</h2>
                <div className="flex items-center gap-6">
                  {product.color_options.map((color) => (
                    <button
                      style={{
                        borderRadius: "50%",
                        border: color === "#FFFFFF" ? "2px solid #000" : `2px solid ${color}`,
                        backgroundColor: color,
                        padding: "30px",
                      }}
                      key={color}
                    ></button>
                  ))}
                </div>
                <div>
                  <div>
                    <button
                      onClick={handleAddToCart}
                      disabled={isAdded}
                      className={`w-[80%] rounded-full ${
                        isAdded ? "bg-gray-300 cursor-not-allowed" : "bg-[#0BA42D]"
                      } text-white h-[52px] 
                hover:bg-gray-800 hover:text-gray-300 
                active:bg-gray-900 active:scale-95 
                focus:outline-none focus:ring-2 focus:ring-gray-500 
                transition-all duration-300 ease-in-out flex gap-3 items-center justify-center`}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SingleProduct;
