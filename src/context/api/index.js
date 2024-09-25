import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Products", "Category", "Colors"],
  endpoints: () => ({}),
});
