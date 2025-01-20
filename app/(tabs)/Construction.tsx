import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Divider } from "react-native-paper";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function Construction() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const inv = [
    { name: "Weapon", path: "/inventory/weapon" },
    
  ];
  const inventory: { name: string, path: any ,image?: any }[] = [
    { name: "Production ", path: '/Construction/ProductionScreen',image: require('../../assets/images/background/weaponBG.png') },
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
        Construction
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
