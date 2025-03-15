import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../constants/ThemeContext";
import { Image } from "expo-image";
import { sphereModule } from "../../../constants/inv/sphereModules";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../../components/inv/CreateStatRow";
import InvHeader from "../../../components/inv/Header";
import { CraftingRecipe } from "../../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../../components/inv/GetRarityColor";
export default function sphereModuleDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [weaponID, setWeaponID] = useState(Number(id || 0));

 
  if (!sphereModule[weaponID]) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: actColor.background }]}
      >
        <Text style={styles.errorText}>Sphere module data not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <InvHeader name='Sphere Module' actColor={actColor} path="/inventory/SphereModule/SphereModuleScreen" />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image
            source={sphereModule[Number(weaponID)].image_github_url}
            style={styles.weaponImage}
          />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {sphereModule[Number(weaponID)].name}
          </Text>
          <View style={styles.typeContainer}>
            <Text style={[styles.type, { color: actColor.onBackground }]}>
              Sphere module
            </Text>
            <Text
              style={[
                styles.rarity,
                {
                  color: actColor.shadow,
                  backgroundColor: GetRarityColor( actColor,sphereModule[Number(weaponID)].rarity ),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {sphereModule[Number(weaponID)].rarity}
            </Text>
          </View>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 20,
            }}
          >
            {CreateStatRow("Technology", sphereModule[weaponID].technology, actColor )}
          </View>
        </View>
        {/* </View> */}
        <View
          style={[
            styles.statsContainer,
            { backgroundColor: actColor.surfaceDisabled },
          ]}
        >
          <Text style={{ fontSize: 16, color: actColor.onBackground }}>
            {sphereModule[Number(weaponID)].description}
          </Text>
        </View>
        <View style={{ backgroundColor: actColor.surfaceVariant, padding: 10 , borderRadius: 10, marginTop: 14,marginHorizontal: 6 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: actColor.outline,marginBottom: 8 }}>
      Effects:
    </Text>
    {sphereModule[Number(weaponID)].effects?.map((effect, index) => (
      <Text 
        key={index} 
        style={{ 
          fontSize: 14, 
          color: actColor.onBackground,
          marginLeft: 16,
          marginBottom: 4,
          backgroundColor: actColor.background,
          width: 'auto',
          padding: 3,
          borderRadius: 50,
          
        }}
      >
        💠{effect}
      </Text>
    ))}
    </View>
        <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
          Crafting
        </Text>
        
        <CraftingRecipe
          recipe={sphereModule[Number(weaponID)].recipe}
          actColor={actColor} 
          />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  weaponImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  type: {
    fontSize: 14,
    marginRight: 8,
  },
  rarity: {
    fontSize: 14,
    fontWeight: "600",
  },
  statsContainer: {
    borderRadius: 12,
    padding: 16,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statLabel: {
    fontSize: 16,
    color: "#9CA3AF",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
  
});
