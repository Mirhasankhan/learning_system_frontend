import { baseApi } from "../../api/baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCourses: builder.query({
      query: () => ({
        url: `/course`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),

    createCourse: builder.mutation({
      query: (data) => ({
        url: `/course/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const { useAllCoursesQuery, useCreateCourseMutation } = bookingsApi;
