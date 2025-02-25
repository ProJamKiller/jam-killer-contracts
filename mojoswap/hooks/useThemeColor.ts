import { useColorScheme } from "./useColorScheme"; // Uses our fixed color scheme hook

const Colors = {
  light: {
    primary: "#000000",
    background: "#FFFFFF",
    text: "#000000",
  },
  dark: {
    primary: "#FFFFFF",
    background: "#000000",
    text: "#FFFFFF",
  },
};

export function useThemeColor(
  themeProps: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme(); // Uses web-compatible color scheme detection
  return themeProps[theme] ?? Colors[theme][colorName];
}