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
    {name:"Weapon",path:"/inventory/weapon"},
    {name:"Armor",path:"/inventory/armor"},
    {name:"Accessory",path:"/inventory/accessory"},
    {name:"Spheres",path:"/inventory/sphereScreen"},
    {name:"Sphere Modules",path:"/inventory/sphereModules"},
    {name:"Consumables",path:"/inventory/consumables"},
    {name:"Materials",path:"/inventory/materials"},
  ];
  const inventory = [
    {name:"Weapon",path:"/inventory/weapon"},
    {name:"Spheres",path:"/inventory/sphereScreen"},
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
        {inventory.map((item, index) => (
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
                pathname: item.path,
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
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
