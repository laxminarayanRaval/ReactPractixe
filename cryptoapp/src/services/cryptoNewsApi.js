import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "6c1ec53a65mshb1a9d43961d7debp164c41jsna19e0ffc7d75",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

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