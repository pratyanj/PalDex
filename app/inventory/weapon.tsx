import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { WeaponCard } from "../../components/inv/weaponCard";
import { Image } from "expo-image";
import { weaponDataSet } from "../../components/inv/weapon";
import { act } from "react-test-renderer";
export default function Weapon() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return actColor.onSurface
      case "rare":
        return  actColor.primary
      case "epic":
        return actColor.primary
      case "legendary":
        return  actColor.yellow
      default:
        return actColor.onSurface
    }
  }
const itemCard = ( name:string,img:any,rarity:string) => {
  const rarityColor = getRarityColor(rarity);
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: actColor.outlineVariant,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 18,color:actColor.onSurface }}>{name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" ,gap: 5}}>
        <Text style={{ fontSize: 12 ,color:actColor.onSurface}}>Weapon</Text>
        <Text style={{ fontSize: 12 ,color:actColor.shadow,backgroundColor:rarityColor,borderRadius:10,padding:2,paddingHorizontal:12}}>{rarity}</Text>
      </View>
      </View>
      <Image
        source={img}
        // source={{uri: img}}
        style={{ width: 50, height: 50 ,backgroundColor: rarityColor,borderRadius: 10,}}
      />
    </View>
  );
}
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
        { weaponDataSet.map((item, index) => (
          <View key={item.name+index}>
            {itemCard(item.name, item.image, item.rarity)}
          </View>
        ))}
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
