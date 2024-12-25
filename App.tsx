import PalList from "../PalDex/app/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeContext } from "./constants/ThemeContext";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState({ mode: "dark" });
  
  const updateTheme = (newTheme?: { mode: "light" | "dark" }) => {
    if (!newTheme) {
      const nextMode = theme.mode === "light" ? "dark" : "light";
      setTheme({ mode: nextMode });
    } else {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PalList />
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}