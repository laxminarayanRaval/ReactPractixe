import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "6c1ec53a65mshb1a9d43961d7debp164c41jsna19e0ffc7d75",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url, extraParams = {}) => ({
  url,
  headers: cryptoApiHeaders,
  ...extraParams,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`, {
        // params: {referenceCurrencyUuid:'6mUvpzCc2lFo' }, // referenceCurrencyUuid: "yhjMzLPhuIDl", '6mUvpzCc2lFo'
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history`, {
          params: { timePeriod }, // referenceCurrencyUuid: "yhjMzLPhuIDl", '6mUvpzCc2lFo'
        }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
