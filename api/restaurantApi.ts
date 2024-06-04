import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wyre-data.p.rapidapi.com/restaurants/', prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "");
            return headers
        }
    }),
    endpoints: build => ({
        getRestaurantsInTown: build.query<any, string>({
            query(town) {
                return {
                    url: `/town/${town}`
                }
            },
        })
    })
})


export default restaurantsApi
export const { useGetRestaurantsInTownQuery } = restaurantsApi