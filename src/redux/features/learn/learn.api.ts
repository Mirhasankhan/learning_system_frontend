import { baseApi } from "../../api/baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allBookings: builder.query({
      query: () => ({
        url: `/order/admin-list`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
   
    createBooking: builder.mutation({
      query: (data) => ({
        url: `/booking/create`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["users"],
    }),
   
   
    
   
  }),
});

export const {
  useAllBookingsQuery,
  useCreateBookingMutation,
} = bookingsApi;
