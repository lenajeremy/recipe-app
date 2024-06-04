"use client";

import * as React from "react";
import { useGetExchangeRatesQuery } from "@/api/currencyConversionApi";
import { useGetRecipeDetailsQuery } from "@/api/recipeApi";
import {
  Container,
  Stack,
  Box,
  Typography,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { formatCurrency } from "@/utils";

export default function RecipeDetail() {
  const params = useParams() satisfies { "recipe-id": string };
  const recipeId = params["recipe-id"];
  const { data: exchangeRates, isLoading } =
    useGetExchangeRatesQuery(undefined);

  const dollarToNaira = React.useCallback(
    (amount: number) => {
      return (exchangeRates?.conversion_rates.NGN || 1) * amount;
    },
    [exchangeRates]
  );

  const { data, isFetching, isError, error } =
    useGetRecipeDetailsQuery(recipeId);

  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ marginTop: 12 }}>
      <Button sx={{ marginBottom: 3 }} onClick={router.back}>
        Back
      </Button>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Stack direction="column">
            <Image
              style={{ borderRadius: 12, width: "100%" }}
              width={536}
              height={402}
              src={data?.image || ""}
              alt={data?.title || ""}
            />

            <Box paddingY={4}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {data?.title}
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <Chip
                  sx={{ fontSize: 16 }}
                  label={`${
                    data?.nutrition.nutrients.find((n) => n.name === "Calories")
                      ?.amount
                  } calories`}
                />
                <div
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <svg
                    data-id="12"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <Typography>
                    {data?.cookingMinutes ||
                      data?.preparationMinutes ||
                      data?.readyInMinutes ||
                      0}{" "}
                    mins
                  </Typography>
                </div>

                <div
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <svg
                    data-id="15"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                    <path d="M7 2v20"></path>
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                  </svg>

                  <Typography>{data?.servings || 1} servings</Typography>
                </div>
              </Stack>

              <Stack
                direction={"row"}
                paddingTop={3}
                alignItems={"center"}
                gap={1.5}
              >
                <Typography variant="h5">
                  {formatCurrency(data?.pricePerServing || 0, false)}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    toast.custom(
                      () => (
                        <Box
                          padding={3}
                          borderRadius={2}
                          sx={{
                            backgroundColor: "purple",
                            color: "white",
                            fontSize: 18,
                          }}
                        >
                          {data?.title} costs {" "}
                          {formatCurrency(
                            dollarToNaira(data?.pricePerServing || 0),
                            true
                          )}
                        </Box>
                      ),
                      {
                        position: "top-center",
                      }
                    );
                  }}
                >
                  Click to see price in Naira
                </Button>
              </Stack>

              <Typography lineHeight={1.8} marginTop={3}>
                <span
                  dangerouslySetInnerHTML={{ __html: data?.summary || "" }}
                ></span>
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>

          <ol style={{ marginBottom: 20 }}>
            {data?.extendedIngredients.map((ing) => (
              <li key={ing.original}>
                <Typography component={"span"} lineHeight={1.8}>
                  {ing.original}
                </Typography>
              </li>
            ))}
          </ol>

          <Typography variant="h6" gutterBottom>
            Instructions
          </Typography>

          <Typography lineHeight={1.8}>
            <div
              dangerouslySetInnerHTML={{ __html: data?.instructions || "" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
