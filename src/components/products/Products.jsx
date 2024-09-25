import "./products.css";
import React, { useState } from "react";
import { Pagination, Select } from "antd";
import Product from "../product/Product";
import { useGetProductsQuery } from "@/context/api/productApi";

const ProductsComponent = () => {
  const [pageSize, setPageSize] = useState(1);
  const [limit, setLimit] = useState(10);
  const handleChange = (value) => {
    console.log(value);
  };

  const handlePageChange = (current, limit) => {
    setPageSize(current);
    setLimit(limit);
  };

  const { data, isLoading } = useGetProductsQuery({ pageSize: pageSize, limit: limit });

  return (
    <>
      <section>
        <div className="bg-[#D5F8CF] py-7">
          <div className="container flex items-center justify-between">
            <h2 className="capitalize text-2xl font-medium text-[#0BA42D]">Filter by:</h2>

            <Select
              labelInValue
              variant="borderless"
              defaultValue={{
                value: "Sort By",
                label: "Sort By",
              }}
              onChange={handleChange}
              options={[
                {
                  value: "expensive",
                  label: "Expensive",
                },
                {
                  value: "cheap",
                  label: "Cheap",
                },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 container">
          <aside className="col-span-1"></aside>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-x-[36px] gap-y-[68px]">
              {data?.map((product) => {
                return <Product key={product?.id} data={product} />;
              })}
            </div>
            <Pagination defaultCurrent={1} total={2} align="center" defaultPageSize={pageSize} onChange={handlePageChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsComponent;
