/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result = [], error, arg) => [
        "PRODUCT",
        ...result.map(({ id }) => ({ type: "PRODUCT", id })),
      ],
    }),
    getLimitedProducts: builder.query({
      query: () => "/products?limit=5",
      providesTags: (result = [], error, arg) => [
        "PRODUCT",
        ...result.map(({ id }) => ({ type: "PRODUCT", id })),
      ],
    }),
    getProduct: builder.query({
      query: (initialProductId) => `/products/${initialProductId}`,
      providesTags: (result, error, arg) => [{ type: "PRODUCT", id: arg }],
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: "/products",
        method: "POST",
        body: initialProduct,
      }),
      invalidatesTags: ["PRODUCT"],
    }),
    editProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "PRODUCT", id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCT"],
    }),
    getAllCategories: builder.query({
      query: () => "/products/categories",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetLimitedProductsQuery,
  useGetProductQuery,
  useAddNewProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useGetAllCategoriesQuery,
} = apiSlice;
