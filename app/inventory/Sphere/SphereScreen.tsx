import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../constants/ThemeContext";
import { ItemCard } from "../../../components/inv/ItemCard";
import { ListHeader } from "../../../components/inv/ListHeader";
import { spheres } from "../../../constants/inv/spheres";

export default function sphereScreen() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      {ListHeader("Spheres", actColor,"/Inventory")}

      <ScrollView contentContainerStyle={styles.content}>
        {
            spheres.length ==0 ? <Text style={styles.placeholderText}>No Spheres Found</Text>:
        spheres.map((item, index) => {
          // var gold = ItemsData.find((i) => i.name === item.name);
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                router.push({
                  pathname: "/inventory/Sphere/SphereDetail",
                  params: { id: item.id - 1 },
                })
              }
            >
              <ItemCard
                name={item.name}
                img={item.image_github_url}
                type={item.stats["Gold Coin"]}
                rarity={item.rarity}
                actColor={actColor}
              />
            </TouchableOpacity>
          );
        })
    }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 15,
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
    textAlign: "center",
    marginTop: 20,
  },
});
