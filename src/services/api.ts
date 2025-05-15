import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../pages/Home';

type PurchaseResponse = {
  orderId: string;
};

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description?: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

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
      query: (id) => `restaurantes/${id}`,
    }),

    //POST
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantPageQuery,
  usePurchaseMutation,
} = api;
