import { createContext } from "react";

type ThemeContextType = {
  theme: { mode: "light" | "dark" };
  updateTheme: (theme?: { mode: "light" | "dark" }) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: { mode: "dark" },
  // theme: { mode: "light" },
  updateTheme: () => {},
});