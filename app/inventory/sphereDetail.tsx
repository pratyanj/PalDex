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
import { spheres } from "../../constants/spheres";
import { router, useLocalSearchParams } from "expo-router";
import { BorderlessButton } from "react-native-gesture-handler";

export default function sphereDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [weaponID, setWeaponID] = useState(id || 0);

  const [capturePower, setcapturePower] = useState(false);
  const [technology, setTechnology] = useState(false);

  const dataCheck = () => {
    if (spheres[Number(weaponID)].capture_power) {
      setcapturePower(true);
    }
    if (spheres[Number(weaponID)].technology) {
      setTechnology(true);
    }
  };
  useEffect(() => {
    dataCheck();
  }, []);
  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return actColor.onSurface;
      case "rare":
        return actColor.primary;
      case "epic":
        return actColor.parpleContainer;
      case "legendary":
        return actColor.yellow;
      default:
        return actColor.onSurface;
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <View style={[styles.header, { backgroundColor: actColor.background }]}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={actColor.primary}
          onPress={() => router.push({ pathname: "/inventory/sphereScreen" })}
        />
        <Text style={[styles.headerTitle, { color: actColor.primary }]}>
          Sphere Details
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image
            source={spheres[Number(weaponID)].image}
            style={styles.weaponImage}
          />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {spheres[Number(weaponID)].name}
          </Text>
          <View style={styles.typeContainer}>
            <Text style={[styles.type, { color: actColor.onBackground }]}>
              Sphere
            </Text>
            <Text
              style={[
                styles.rarity,
                {
                  color: actColor.shadow,
                  backgroundColor: getRarityColor(
                    spheres[Number(weaponID)].rarity
                  ),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {spheres[Number(weaponID)].rarity}
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
            {capturePower && (
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: actColor.shadow,
                borderWidth: 2,
                borderRadius: 8,
              }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: actColor.outline,
                    fontWeight: "500",
                    backgroundColor: actColor.surface,
                    padding: 3,
                  }}
                >
                  Capture Power
                </Text>
                <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        padding: 2,
                        backgroundColor: actColor.inverseSurface,
                        borderTopRightRadius: 6,
                        borderBottomRightRadius: 6,
                    }}>
                  {spheres[Number(weaponID)].capture_power}
                </Text>
              </View>
            )}
            {technology && (
              <View
                style={
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderColor: actColor.shadow,
                    borderWidth: 2,
                    borderRadius: 8,
                  }
                }
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: actColor.outline,
                    fontWeight: "500",
                    backgroundColor: actColor.surface,
                    padding: 3,
                  }}
                >
                  Technology
                </Text>
                <Text
                  style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        padding: 2,
                        backgroundColor: actColor.inverseSurface,
                        borderTopRightRadius: 6,
                        borderBottomRightRadius: 6,
                    }}
                >
                  {spheres[Number(weaponID)].technology}
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
            {spheres[Number(weaponID)].description}
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
            {spheres[Number(weaponID)].recipe.map((i) => (
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
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={{ fontSize: 16, color: actColor.onSurface }}>
                    {i.name.charAt(0).toUpperCase() +
                      i.name.slice(1).toLowerCase().replace(/_/g, " ")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: actColor.onSurface,
                      fontWeight: "bold",
                    }}
                  >
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
