import { ExchangeRateResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exchangeRatesApi = createApi({
    reducerPath: 'exchangeRatesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://v6.exchangerate-api.com/v6/d49ffc0a044a3902e44867a0/latest/USD',
    }),
    endpoints: build => ({
        getExchangeRates: build.query<ExchangeRateResponse, undefined>({
            query: () => ""
        })
    })
})

export default exchangeRatesApi;
export const { useGetExchangeRatesQuery } = exchangeRatesApi