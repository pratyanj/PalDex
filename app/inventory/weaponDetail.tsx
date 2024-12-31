import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { weaponDataSet } from "../../components/inv/weapon";
import { router, useLocalSearchParams } from "expo-router";

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
  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return actColor.onSurface
      case "rare":
        return  actColor.primary
      case "epic":
        return actColor.inversePrimary
      case "legendary":
        return  actColor.yellow
      default:
        return actColor.onSurface
    }
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <View style={[styles.header, { backgroundColor: actColor.background }]}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={actColor.primary}
          onPress={() => router.push({ pathname: "/inventory/weapon" })}
        />
        <Text style={[styles.headerTitle, { color: actColor.primary }]}>
          Weapon Details
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image
            source={weaponDataSet[Number(weaponID)].image}
            style={styles.weaponImage}
          />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {weaponDataSet[Number(weaponID)].name}
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
                  backgroundColor: getRarityColor(
                    weaponDataSet[Number(weaponID)].rarity
                  ),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {weaponDataSet[Number(weaponID)].rarity}
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
            {attack && (
              <View style={[styles.statRow, { alignItems: 'center', gap: 8 }]}>
                <Text style={{ fontSize: 16, color: actColor.outline, fontWeight: '500' }}>
                  Attack
                </Text>
                <Text style={[styles.statValue, { fontWeight: 'bold' }]}>
                  {weaponDataSet[Number(weaponID)].attack}
                </Text>
              </View>
            )}
            {technology && (
              <View style={[styles.statRow, { alignItems: 'center', gap: 8 }]}>
                <Text style={{ fontSize: 16, color: actColor.outline, fontWeight: '500' }}>
                  Technology
                </Text>
                <Text style={[styles.statValue, { fontWeight: 'bold' }]}>
                  {weaponDataSet[Number(weaponID)].technology}
                </Text>
              </View>
            )}
            {ammo && (
              <View style={[styles.statRow, { alignItems: 'center', gap: 8 }]}>
                <Text style={{ fontSize: 16, color: actColor.outline, fontWeight: '500' }}>Ammo: </Text>
                <Text style={[styles.statValue, { fontWeight: 'bold' }]}>
                  {weaponDataSet[Number(weaponID)].ammo}
                </Text>
              </View>
            )}
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
            {weaponDataSet[Number(weaponID)].description}
          </Text>
        </View>
        <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
          Crafting
        </Text>
        <View style={{ marginTop: 5, marginBottom: 100 }}>
          <View
            style={{
              backgroundColor: actColor.inverseOnSurface,
              padding: 8,
              borderRadius: 8,
            }}
          >
            {weaponDataSet[Number(weaponID)].recipe.map((i) => (
              <View
                key={`${i.name}-${i}`}
                style={{
                  backgroundColor: actColor.surface,
                  padding: 8,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 3,
                  gap: 5,
                }}
              >
                <Image
                  source={i.image}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: actColor.inverseOnSurface,
                    borderRadius: 8,
                  }}
                />
                <View style={{ flexDirection: "row", gap: 10 ,justifyContent: "space-between",flex:1}}>
                <Text style={{ fontSize: 16, color: actColor.onSurface }}>
                {i.name.charAt(0).toUpperCase() +
                    i.name.slice(1).toLowerCase().replace(/_/g, " ")}
                </Text>
                <Text style={{ fontSize: 16, color: actColor.onSurface ,fontWeight:"bold" }}>
                    {i.quantity}
                </Text>
              </View>
              </View>
            ))}
          </View>
        </View>
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
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
  scrollView: {
    paddingBottom: 20,
  },
});

// {attack && (
//   <View style={styles.statRow}>
//     <Text style={styles.statLabel}>Attack</Text>
//     <Text style={styles.statValue}>
//       {weaponDataSet[Number(weaponID)].attack}
//     </Text>
//   </View>
// )}
// {ammo && (
//   <View style={styles.statRow}>
//     <Text style={styles.statLabel}>Ammo</Text>
//     <Text style={styles.statValue}>
//       {weaponDataSet[Number(weaponID)].ammo}
//     </Text>
//   </View>
// )}
// {technology && (
//   <View style={styles.statRow}>
//     <Text style={styles.statLabel}>Technology</Text>
//     <Text style={styles.statValue}>
//       {weaponDataSet[Number(weaponID)].technology}
//     </Text>
//   </View>
// )}