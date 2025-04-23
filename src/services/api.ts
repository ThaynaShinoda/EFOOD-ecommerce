import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../pages/Home';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    //Home
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),

    //MenuList
    getRestaurantPage: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  }),
});

export const { useGetRestaurantsQuery,useGetRestaurantPageQuery } = api;
