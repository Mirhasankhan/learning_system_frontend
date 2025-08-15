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
    course: builder.query({
      query: (id) => ({
        url: `/course/${id}`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    lecture: builder.query({
      query: (id) => ({
        url: `/lecture/details/${id}`,
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

export const {
  useAllCoursesQuery,
  useCreateCourseMutation,
  useCourseQuery,
  useLectureQuery,
} = bookingsApi;
