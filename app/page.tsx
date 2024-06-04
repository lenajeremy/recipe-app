"use client";

import * as React from "react";
import {
  Stack,
  TextField,
  Grid,
  Box,
  Typography,
  Card,
  Button,
} from "@mui/material";
import Recipe from "@/components/recipe-card";
import { useLazySearchRecipeQuery } from "@/api/recipeApi";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm<{ searchQuery: string }>();
  const [getRecipes, { data, isFetching, error, isError }] =
    useLazySearchRecipeQuery();

  React.useEffect(() => {
    getRecipes("");
  }, []);

  const handleSearchRecipe: SubmitHandler<{ searchQuery: string }> =
    React.useCallback(async (values) => {
      try {
        const res = await getRecipes(values.searchQuery).unwrap();
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }, []);

  return (
    <main>
      <Box padding={2}>
        <Card variant="outlined">
          <Stack padding={3}>
            <Typography sx={{ fontSize: 30, fontWeight: 600 }} component={"h1"}>
              Recipe Search
            </Typography>
            <Typography variant="subtitle1" color={"GrayText"} marginBottom={3}>
              Find delicious and healthy recipes.
            </Typography>

            <form onSubmit={handleSubmit(handleSearchRecipe)}>
              <Stack direction={"row"} gap={1}>
                <TextField
                  {...register("searchQuery", { required: true })}
                  sx={{ flex: 1 }}
                  label="Search recipes..."
                  placeholder="e.g. nigerian jollof rice"
                  variant="filled"
                />
                <Button sx={{ paddingX: 4 }} variant="contained">
                  Search
                </Button>
              </Stack>
            </form>
          </Stack>

          <Grid container spacing={3} padding={3}>
            {isFetching
              ? Array.from({ length: 10 }).map((_, i) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={i}>
                    <Recipe loading />
                  </Grid>
                ))
              : data?.map((recipe) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2.4}
                    key={recipe.id}
                  >
                    <Recipe recipe={recipe} loading={isFetching} />
                  </Grid>
                ))}

            {error && (
              <Grid item xs={12}>
                <p
                  style={{
                    width: "40%",
                    textAlign: "center",
                    margin: "100px auto",
                  }}
                >
                  {JSON.stringify({ error }, null, 3)}
                </p>
              </Grid>
            )}
          </Grid>
        </Card>
      </Box>
    </main>
  );
}
