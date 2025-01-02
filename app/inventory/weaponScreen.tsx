import { StyleSheet, ScrollView,TouchableOpacity, Text } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { router } from "expo-router";
import { weaponDataSet } from "../../constants/weapon";
import { ItemCard } from "../../components/inv/ItemCard";
import { ListHeader } from "../../components/inv/ListHeader";
import { ItemsData } from "../../constants/allItems";
export default function Weapon() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
      {/* Header */}
      {ListHeader("Weapons", actColor )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {
                    weaponDataSet.length ==0 ? <Text style={styles.placeholderText}>No Spheres Found</Text>:
                    weaponDataSet.map((item, index) => {
                  // console.log("Item: ",item.name);
                  // var gold = ItemsData.find((i) => i.name === item.name);
                  // console.log("Price",gold.gold);
                  console.log("---------------------")
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        router.push({
                          pathname: "/inventory/WeaponDetail",
                          params: { id: item.ID - 1 },
                        })
                      }
                    >
                      <ItemCard
                        name={item.name}
                        img={item.image}
                        type='Weapon'
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
