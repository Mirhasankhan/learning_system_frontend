
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/users/create",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    socialLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/social-login",
        method: "POST",
        body: userInfo,
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
        
      }),
      providesTags:["users"]
    }),
    sendOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: email,
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: { email, otp },
      }),
    }),
    resetPassword: builder.mutation({
      query: (newPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: newPassword,
      }),
    }),
    changePassword: builder.mutation({
      query: (newPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: newPassword,
      }),
    }),
    updateImage: builder.mutation({
      query: (image) => ({
        url: "/users/update/profileImage",
        method: "PUT",
        body: image,
      }),
      invalidatesTags:["users"]
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags:["users"]
    }),

    allUsers: builder.query({
      query: ({ searchQuery, selectedRole, page, limit }) => ({
        url: `/analysis/all-users?search=${searchQuery}&role=${selectedRole}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    updateUserStatus: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useSendOtpMutation,
  useRegisterMutation,
  useProfileQuery,
  useUpdateImageMutation,
  useLoginMutation,
  useAllUsersQuery,
  useUpdateUserStatusMutation,
  useUpdateProfileMutation,
  useSocialLoginMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation
} = authApi;
