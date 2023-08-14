import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPostsList: build.query<Post[], undefined>({
      query: () => ({
        url: `/posts`,
      }),
      providesTags: ["Posts"],
    }),
    deletePost: build.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsListQuery, useDeletePostMutation } = postsApi;
