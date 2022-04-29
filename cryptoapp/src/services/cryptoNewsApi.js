import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": process.env.REACT_APP_NEWS_API_HOST,
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
};

const baseUrl = `https://${process.env.REACT_APP_NEWS_API_HOST}`;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) =>createRequest(
          `/news/search?q=${newsCategory ? newsCategory : 'Trending'}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count ? count : 20}`
        )},
    ),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;