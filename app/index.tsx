import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Card11 from "../components/palcrad";
// import pals from "../assets/json/pals.json";
import { pals } from "../constants/pals";
import { imageMapping } from "../constants/imageMapping";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
export default function PalList() {
  const Theme = useTheme();
  return (
    <ScrollView style={{ backgroundColor: "#181818" }}>
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
