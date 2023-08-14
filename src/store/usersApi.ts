import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getUsersList: build.query<User[], undefined>({
      query: () => ({
        url: `/users`,
      }),
      providesTags: ["Users"],
    }),
    deleteUser: build.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersListQuery, useDeleteUserMutation } = usersApi;
