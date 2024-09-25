import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ pageSize, limit }) => ({
        url: `/products?_page=${pageSize}&_per_page=${limit}`,
      }),
      providesTags: ["Products"],
    }),

    getProductsById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),

    // createProduct: build.mutation({
    //   query: (body) => ({
    //     url: "/products",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
    // updateProduct: build.mutation({
    //   query: ({ id, body }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT", // or "PATCH"
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productApi;
