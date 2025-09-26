/* eslint-disable */
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create user
    createUser: build.mutation({
      query: (data: any) => ({
        url: "/register",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["User"],
    }),

    getUserDetail: build.query({
      query: () => ({
        url: "/user-detail",
        method: "GET",
        redirect: "follow",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserDetailQuery } = userApi;

export default userApi;
