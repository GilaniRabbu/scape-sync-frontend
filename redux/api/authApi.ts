import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login user
    loginUser: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});
// forgot-password, reset-password, resend-otp, verify-otp

export const { useLoginUserMutation } = authApi;
