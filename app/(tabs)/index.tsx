import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import Card11 from "../../components/palcrad";
import { pals } from "../../constants/pals";
import { router } from "expo-router";
import { Colors } from "../../constants/Colors";
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from "../../constants/ThemeContext";

export default function PalList() {
  const { theme, updateTheme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  return (
    <ScrollView style={{ backgroundColor: actColor.background }}>
      <View style={styles.mian}>
        {pals.map((pal) => (
          <React.Fragment key={pal.id}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/paldetail",
                  params: { id: pal.id - 1 },
                })
              }
            >
              <Card11
                name={pal.name}
                image={pal.image}
                number={pal.key}
                element={pal.types[0].image}
              />
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </View>
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mian: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    maxWidth: "100%",
  },
});
