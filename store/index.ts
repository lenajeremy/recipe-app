import { Middleware, configureStore } from "@reduxjs/toolkit";
import recipeApi from "@/api/recipeApi";
import exchangeRatesApi from "@/api/currencyConversionApi";


const middleware = [
    recipeApi.middleware,
    exchangeRatesApi.middleware
] satisfies Middleware[]

const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer,
        [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch