"use client";

import ReduxProvider from "./redux-provider";
import ThemeProvider from "./theme-provider";
import { Toaster } from "sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ReduxProvider>{children}</ReduxProvider>
      <Toaster />
    </ThemeProvider>
  );
}
