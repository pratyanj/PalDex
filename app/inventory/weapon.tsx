import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { WeaponCard } from "../../components/inv/weaponCard";

export default function Weapon() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const weaponData = {
    name: "Assault Rifle",
    type: "Weapon",
    rarity: "legendary",
    stats: {
      attack: 320,
      technology: 45,
      ammo: "Assault Rifle Ammo",
    },
    description:
      "Mows down enemies with overwhelming force. It excels at rapid-fire and is well suited to taking down powerful foes.",
    imageUrl:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: actColor.surfaceVariant }]}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={actColor.primary}
          onPress={() => router.push({ pathname: "/(tabs)/Inventory" })}
        />
        <Text style={[styles.headerTitle, { color: actColor.primary }]}>Weapons</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <WeaponCard {...weaponData} />
        {/* Optional Placeholder */}
        {/* <Text style={[styles.placeholderText, { color: actColor.onBackground }]}>
          No weapons available. Start adding some!
        </Text> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 4, // Adds depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "Inter-Black",
    textAlign: "center",
    flex: 1,
    marginLeft: 10,
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
