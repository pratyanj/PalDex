import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { weaponDataSet } from "../../constants/weapon";
import { useLocalSearchParams } from "expo-router";

import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../components/inv/GetRarityColor";

export default function WeaponDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [weaponID, setWeaponID] = useState(id || 0);

  const [ammo, setAmmo] = useState(false);
  const [attack, setAttack] = useState(false);
  const [technology, setTechnology] = useState(false);

  const dataCheck = () => {
    if (weaponDataSet[Number(weaponID)].attack) {
      setAttack(true);
    }
    if (weaponDataSet[Number(weaponID)].ammo) {
      setAmmo(true);
    }
    if (weaponDataSet[Number(weaponID)].technology) {
      setTechnology(true);
    }
  }
  useEffect(() => {
    dataCheck();
  }, []);
  const weaponD = weaponDataSet[Number(weaponID)]
  if (!weaponDataSet[Number(weaponID)]) {
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
      <InvHeader name="Weapon" actColor={actColor} path="/inventory/weaponScreen" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image
            source={weaponD.image}
            style={styles.weaponImage}
          />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {weaponD.name}
          </Text>
          <View style={styles.typeContainer}>
            <Text style={[styles.type, { color: actColor.onBackground }]}>
              Weapon
            </Text>
            <Text
              style={[
                styles.rarity,
                {
                  color: actColor.surfaceVariant,
                  backgroundColor: GetRarityColor(actColor,weaponD.rarity),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {weaponD.rarity}
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
            {attack && CreateStatRow("Attack", weaponD.attack, actColor)}
            {technology && CreateStatRow("Technology", weaponD.technology, actColor)}
            {ammo && CreateStatRow("Ammo", weaponD.ammo, actColor)}
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
            {weaponD.description}
          </Text>
        </View>
        <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
          Crafting
        </Text>
        <CraftingRecipe
          recipe={weaponD.recipe}
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

  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
  scrollView: {
    paddingBottom: 20,
  },
});