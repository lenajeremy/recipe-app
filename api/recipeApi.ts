import { IRecipe, RecipeDetails } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recipeApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes' }),
    reducerPath: 'recipeApi',
    endpoints(build) {
        return {
            searchRecipe: build.query<IRecipe[], string>({
                query: (query) => ({
                    url: '/complexSearch',
                    params: {
                        addRecipeNutrition: true,
                        query,
                        apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
                        number: 30,
                    }
                }),
                transformResponse: (res: any) => {
                    return res.results.map((recipe: any) => ({
                        id: recipe.id,
                        name: recipe.title,
                        calories: recipe.nutrition.nutrients.find((n: any) => n.name === "Calories").amount,
                        imageURL: recipe.image,
                        rating: recipe.healthScore,
                        price: recipe.pricePerServing
                    }))
                }
            }),
            getRecipeDetails: build.query<RecipeDetails, string>({
                query: (id) => ({
                    url: `/${id}/information`,
                    params: {
                        apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
                        includeNutrition: true
                    }
                })
            })
        }
    },
})

export const {
    useSearchRecipeQuery,
    useLazySearchRecipeQuery,
    useGetRecipeDetailsQuery,
} = recipeApi

export default recipeApi