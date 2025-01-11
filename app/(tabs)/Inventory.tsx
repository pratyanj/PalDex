import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Divider } from "react-native-paper";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function Inventory() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const inv = [
    { name: "Weapon", path: "/inventory/weapon" },
    { name: "Armor", path: "/inventory/armor" },
    { name: "Accessory", path: "/inventory/accessory" },
    { name: "Spheres", path: "/inventory/sphereScreen" },
    { name: "Sphere Modules", path: "/inventory/sphereModules" },
    { name: "Consumables", path: "/inventory/consumables" },
    { name: "Materials", path: "/inventory/materials" },
  ];
  const inventory: { name: string, path: any ,image?: any }[] = [
    { name: "Weapon", path: '/inventory/WeaponScreen',image: require('../../assets/images/background/weaponBG.png') },
    { name: "Spheres", path: '/inventory/SphereScreen' ,image: require('../../assets/images/background/sphereBG.png')},
    { name: "Sphere Modules", path: '/inventory/SphereModuleScreen',image: require('../../assets/images/background/sphereModule.png') },
    { name: "Armor", path: "/inventory/ArmorScreen",image: require('../../assets/images/background/armorBG.png') },
    { name: "Accessory", path: "/inventory/AccessoryScreen" ,image: require('../../assets/images/background/accessoryBG.png')},
    { name: "Materials", path: "/inventory/MaterialScreen",image: require('../../assets/images/background/materialsBG.png') },
    { name: "Consumables", path: "/inventory/ConsumableScreen",image: require('../../assets/images/background/consumableBG.png') },
    { name: "Ammo", path: "/inventory/AmmoScreen",image: require('../../assets/images/background/ammoBG.png') },
    { name: "Ingredients", path: "/inventory/IngredientScreen",image: require('../../assets/images/background/ingredientBG.png') },
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
          fontWeight: "bold",
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
              backgroundImage:item.image,        
              marginVertical: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() =>
              router.push(item.path)
            }
          >
            <Image
            source={item.image} 
            style={{ width: 110, height: 110,position: 'absolute', opacity: 0.4 }}
            /> 
            <Text
              style={{
                fontSize: 22,
                color: actColor.primary,
                fontFamily: "Inter-Black",
                fontWeight: "bold",
                textAlign: "center",
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
