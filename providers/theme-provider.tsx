"use client";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: "light",
      primary: {
        main: "#890e96",
      },
      secondary: {
        main: "#b16101",
      },
    },
  };
  const theme = createTheme(themeOptions);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
