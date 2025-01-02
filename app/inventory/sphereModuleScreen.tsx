import { StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { router } from "expo-router";
import { sphereModule } from "../../constants/sphereModules";
import { ItemCard } from "../../components/inv/ItemCard";
import { ListHeader } from "../../components/inv/ListHeader";
export default function sphereModuleScreen() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
      {ListHeader("Sphere Modules", actColor)}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        { sphereModule.map((item, index) => (
          <TouchableOpacity key={item.name+index} onPress={() => router.push({ pathname: "/inventory/sphereModuleDetail",params: { id:item.ID - 1 }, })}>
            {/* {itemCard(item.name, item.image, item.rarity,"Sphere Module",actColor)} */}
            <ItemCard name={item.name} img={item.image} type="Sphere Module" rarity={item.rarity} actColor={actColor} />
          </TouchableOpacity>
        ))}
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
