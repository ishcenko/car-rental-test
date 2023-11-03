import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mockapi.io/',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetCarPageQuery, setGetAdvertsQuery } = carApi;
