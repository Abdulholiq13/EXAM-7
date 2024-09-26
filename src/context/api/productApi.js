import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ selectedColor, selectedBrands }) => {
        const params = [];

        if (selectedColor) {
          params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
        }

        if (selectedBrands && selectedBrands.length > 0) {
          params.push(`brand_name=${selectedBrands.join("&brand_name=")}`);
        }

        return `/products${params.length > 0 ? `?${params.join("&")}` : ""}`;
      },
      providesTags: ["Products"],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),

    getBrands: build.query({
      query: () => "/brands",
    }),
    getColors: build.query({
      query: () => "/colors",
    }),
  }),
});

export const { useGetProductsQuery, useGetBrandsQuery, useGetColorsQuery, useGetSingleProductQuery } = productApi;
