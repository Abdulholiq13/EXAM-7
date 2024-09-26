import React from "react";
import { useGetSingleProductQuery } from "@/context/api/productApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ReactStars from "react-stars";
import "./singleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetSingleProductQuery(id);

  console.log(product);

  const navigate = useNavigate();

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
      <RightOutlined style={{ fontSize: "24px", color: "#0BA42D" }} />
    </div>
  );

  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <div {...props}>
      <LeftOutlined style={{ fontSize: "24px", color: "#0BA42D" }} />
    </div>
  );

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
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

          <div className="grid grid-cols-2 gap-[39px]">
            <div>
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
              <div className="flex items-center justify-center gap-3 mx-auto">
                {new Array(5).fill().map((item, inx) => (
                  <div className="w-[114px] p-2 flex items-center justify-center bg-gray-100 rounded-md" key={inx}>
                    <img className="w-[80px]" src={product.image_url} alt={product.name} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="flex items-center">
                <ReactStars count={5} onChange={ratingChanged} size={24} color2={"#ffd700"} />
                <span>({product.rating_counts})</span>
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
