import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users/add",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = apiSlice;
