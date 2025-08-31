import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "products",
    }),
    fetchProductDetails: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});
export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;