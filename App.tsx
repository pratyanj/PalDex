import PalList from "./app/(tabs)";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeContext } from "./constants/ThemeContext";
import { useState } from "react";
import { PaperProvider } from "react-native-paper";
import { Appearance } from "react-native";
export default function App() {
  const [theme, setTheme] = useState<{ mode: "light" | "dark" }>({
    mode: "dark",
  });
  const updateTheme = (newTheme?: { mode: "light" | "dark" }) => {
    if (!newTheme) {
      const nextMode = theme.mode === "light" ? "dark" : "light";
      setTheme({ mode: nextMode });

      Appearance.setColorScheme(nextMode);
    } else {
      setTheme(newTheme);
      Appearance.setColorScheme(newTheme.mode);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <PalList />
        </PaperProvider>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
