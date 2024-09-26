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
  const [sortOrder, setSortOrder] = useState("all");

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

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortProducts = (products) => {
    const sortedProducts = [...products];
    if (sortOrder === "cheaply") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "expensive") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
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
      <button
        key={color}
        onClick={() => handleColorChange(color)}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          border: color === "#FFFFFF" ? "2px solid #000" : `2px solid ${color}`,
          backgroundColor: color,
          margin: "5px",
        }}
      />
    ));
  };

  const collapseItems = [
    {
      key: "1",
      label: "Brands",
      children: renderBrands(),
    },
    {
      key: "2",
      label: "Colors",
      children: renderColors(),
    },
  ];

  return (
    <section className="pb-10">
      <div className="bg-[#D5F8CF] py-7">
        <div className="container flex items-center justify-between">
          <h2 className="capitalize text-2xl font-medium text-[#0BA42D]">Filter by:</h2>

          <select className="bg-transparent p-2 text-lg text-[#0BA42D]" onChange={handleSortChange}>
            <option value="all">All</option>
            <option className="capitalize" value="cheaply">
              Cheaply
            </option>
            <option className="capitalize" value="expensive">
              Expensive
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 container">
        <aside className="col-span-1 pt-10 pr-5">
          <Collapse items={collapseItems} style={{ border: "none" }} />
        </aside>

        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-x-[36px] gap-y-[68px] pt-10">
            {productsLoading ? (
              <p>Loading products...</p>
            ) : productsData?.length ? (
              sortProducts(productsData)
                .slice((pageSize - 1) * limit, pageSize * limit)
                .map((product) => <Product key={product.id} data={product} />)
            ) : (
              <p>No products found</p>
            )}
          </div>
          <Pagination
            className="mt-5"
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
