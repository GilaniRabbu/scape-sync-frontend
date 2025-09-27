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

    // forgot password
    forgotPassword: build.mutation({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),

    // reset password
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),

    // verify otp (registration)
    verifyOtp: build.mutation({
      query: (data) => ({
        url: "/verify_otp",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),

    // resend otp
    resendOtp: build.mutation({
      query: (data) => ({
        url: "/resend_otp",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),

    // forgot verify otp (password reset flow)
    forgotVerifyOtp: build.mutation({
      query: (data) => ({
        url: "/forgot-verify-otp",
        method: "POST",
        body: data,
        redirect: "follow",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useForgotVerifyOtpMutation,
} = authApi;
