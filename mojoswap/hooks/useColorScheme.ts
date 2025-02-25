import { useState, useEffect } from "react";

export function useColorScheme(): "light" | "dark" {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateColorScheme = () => setColorScheme(darkModeQuery.matches ? "dark" : "light");

      darkModeQuery.addEventListener("change", updateColorScheme);
      updateColorScheme();

      return () => darkModeQuery.removeEventListener("change", updateColorScheme);
    }
  }, []);

  return colorScheme;
}