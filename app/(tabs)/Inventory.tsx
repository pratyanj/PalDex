import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Divider } from "react-native-paper";
import { router } from "expo-router";
export default function Inventory() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const inv = [
    "Weapon",
    "Armor",
    "Accessory",
    "Spheres",
    "shpere Modules",
    "Consumables",
    "Materials",
  ];
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 25, backgroundColor: actColor.background }}
    >
      <Text
        style={{
          marginTop: 10,
          fontSize: 30,
          color: actColor.primary,
          textAlign: "center",
          fontFamily: "Inter-Black",
        }}
      >
        Inventory
      </Text>
      <Divider
        style={{
          marginBottom: 20,
          marginHorizontal: 20,
          height: 2,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingHorizontal: 10,
        }}
      >
        {inv.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: "45%",
              height: 100,
              backgroundColor: actColor.surfaceVariant,
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              router.push({
                pathname: "/inventory/weapon",
              })
            }
          >
            <Text
              style={{
                fontSize: 20,
                color: actColor.primary,
                fontFamily: "Inter-Black",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}