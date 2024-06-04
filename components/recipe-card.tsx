"use client";

import { IRecipe } from "@/types";
import { formatCurrency } from "@/utils";
import {
  Stack,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";

import Link from "next/link";

export default function Recipe({
  recipe,
  loading,
}: {
  recipe?: IRecipe;
  loading?: boolean;
}) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      {loading ? (
        <>
          <Skeleton variant="rectangular" height={200} width={"100%"} />
          <CardContent>
            <Skeleton variant="text" height={36} width={"100%"} />
            <Skeleton variant="text" height={24} width={"50%"} />
          </CardContent>
        </>
      ) : (
        <Link href={`/${recipe?.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={recipe?.imageURL}
            title={recipe?.name}
          />
          <CardContent>
            <Stack component={"div"}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color={"black"}
              >
                {recipe?.name}
              </Typography>
              <Typography color={"GrayText"}>
                {recipe?.calories} calories per serving
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ marginTop: 2, fontSize: 20 }}
                color={"primary"}
              >
                {formatCurrency(recipe?.price || 0, false)}
              </Typography>
            </Stack>
          </CardContent>
        </Link>
      )}
    </Card>
  );
}
