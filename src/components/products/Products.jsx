import "./products.css";
import React, { useState } from "react";
import { Pagination, Checkbox, Collapse } from "antd";
import Product from "../product/Product";
import { useGetProductsQuery, useGetColorsQuery, useGetBrandsQuery } from "@/context/api/productApi";

const ProductsComponent = () => {
  const [pageSize, setPageSize] = useState(1);
  const [limit, setLimit] = useState(10);
  const [currentColor, setCurrentColor] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const { data: productsData, isLoading: productsLoading } = useGetProductsQuery({
    selectedColor: currentColor === "all" ? "" : currentColor,
    selectedBrands,
  });

  const { data: colorsData, isLoading: colorsLoading } = useGetColorsQuery();
  const { data: brandsData, isLoading: brandsLoading } = useGetBrandsQuery();

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      }
      return [...prev, brand];
    });
  };

  const handlePageChange = (current) => {
    setPageSize(current);
  };

  const renderBrands = () => {
    if (brandsLoading) return <p>Loading brands...</p>;
    return (
      <div>
        {brandsData.map((brand) => (
          <div key={brand}>
            <Checkbox checked={selectedBrands.includes(brand)} onChange={() => handleBrandChange(brand)}>
              {brand}
            </Checkbox>
          </div>
        ))}
      </div>
    );
  };

  const renderColors = () => {
    if (colorsLoading) return <p>Loading colors...</p>;
    return colorsData.map((color) => (
      <input
        readOnly
        key={color}
        onClick={() => handleColorChange(color)}
        className="w-[10px] h-[10px] outline-1 outline-green-500 shadow-md hover:cursor-pointer"
        style={{
          margin: "5px",
          padding: "10px",
          border: color === "#FFFFFF" ? "2px solid #0000" : `2px solid ${color}`,
          backgroundColor: color,
          borderRadius: "50%",
        }}
      />
    ));
  };

  return (
    <section>
      <div className="bg-[#D5F8CF] py-7">
        <div className="container flex items-center justify-between">
          <h2 className="capitalize text-2xl font-medium text-[#0BA42D]">Filter by:</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 container">
        <aside className="col-span-1 p-5">
          <Collapse defaultActiveKey={["1", "2"]} style={{ border: "none" }}>
            <Collapse.Panel header="Brands" key="1" style={{ border: "none", boxShadow: "none" }}>
              {renderBrands()}
            </Collapse.Panel>
            <Collapse.Panel header="Colors" key="2">
              {renderColors()}
            </Collapse.Panel>
          </Collapse>
        </aside>

        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-x-[36px] gap-y-[68px]">
            {productsLoading ? (
              <p>Loading products...</p>
            ) : productsData?.length ? (
              productsData
                .slice((pageSize - 1) * limit, pageSize * limit)
                .map((product) => <Product key={product.id} data={product} />)
            ) : (
              <p>No products found</p>
            )}
          </div>
          <Pagination
            current={pageSize}
            total={productsData?.length}
            align="center"
            pageSize={limit}
            onChange={handlePageChange}
            onShowSizeChange={(current, size) => setLimit(size)}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsComponent;
