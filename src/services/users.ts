import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../components/Card/Card.types';

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: () => ({
        url: 'users',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi;

export const usersReducer = usersApi.reducer;
