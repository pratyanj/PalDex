import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "../../../constants/Colors";
import InvHeader from "../../../components/inv/Header";
import { ThemeContext } from "../../../constants/ThemeContext";
import { GetRarityColor } from "../../../components/inv/GetRarityColor";
import { Accessories } from "../../../constants/inv/accessory";
export default function AccessoryDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [accessoryID, setAccessoryID] = useState(id || 0);
  

  const [accessoryEffect, setAccessoryEffect] = useState(false);

  const dataCheck = () => {
    if (Accessories[Number(accessoryID)].effects.length > 0) {
      setAccessoryEffect(true);
    }
  };
  useEffect(() => {
    dataCheck();
  }, []);

  const accessoryD = Accessories[Number(accessoryID)];

  if (!accessoryD) {
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
      <InvHeader
        name="Accessory"
        actColor={actColor}
        path="/inventory/Accessory/AccessoryScreen"
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image source={accessoryD.image_github_url} style={styles.weaponImage} />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {accessoryD.name}
          </Text>
          <View style={styles.typeContainer}>
            <Text style={[styles.type, { color: actColor.onBackground }]}>
              Accessory
            </Text>
            <Text
              style={[
                styles.rarity,
                {
                  color: actColor.surfaceVariant,
                  backgroundColor: GetRarityColor(actColor, accessoryD.rarity),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {accessoryD.rarity}
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
            {/* {attack && CreateStatRow("Attack", accessoryD.attack, actColor)}
              {technology && CreateStatRow("Technology", accessoryD.technology, actColor)}
              {ammo && CreateStatRow("Ammo", accessoryD.ammo, actColor)} */}
          </View>
        </View>

        <View
          style={[
            styles.statsContainer,
            { backgroundColor: actColor.surfaceDisabled },
          ]}
        >
          <Text style={{ fontSize: 16, color: actColor.onBackground }}>
            {accessoryD.description}
          </Text>
        </View>
        {accessoryEffect && (
          <View
            style={[
              styles.statsContainer,
              { backgroundColor: actColor.surfaceDisabled, marginTop: 10 },
            ]}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: actColor.onBackground,
                marginBottom: 8,
              }}
            >
              Effects:
            </Text>
            {Accessories[Number(accessoryID)].effects?.map((effect, index) => (
              <Text
                key={index}
                style={{
                  fontSize: 14,
                  color: actColor.onBackground,
                  marginLeft: 16,
                  marginBottom: 4,
                  backgroundColor: actColor.background,
                  width: "auto",
                  padding: 3,
                  borderRadius: 50,
                }}
              >
                💠{effect}
              </Text>
            ))}
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: actColor.outlineVariant,
            gap: 10,
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            marginHorizontal: 2,
          }}
        >
          {[
            {
              label: "Gold Coin",
              value: Accessories[Number(accessoryID)].stats["Gold Coin"],
            },
            {
              label: "Weight",
              value: Accessories[Number(accessoryID)].stats.Weight,
            },
            {
              label: "Max Stack Count",
              value: Accessories[Number(accessoryID)].stats.MaxStackCount,
            },
            {
              label: "Durability",
              value: Accessories[Number(accessoryID)].stats.SortID,
            },
          ].map((stat, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: actColor.surface,
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 12,
                width: "48%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  color: actColor.onBackground,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {stat.label}:
              </Text>
              <Text
                style={{
                  color: actColor.primary,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {stat.value}
              </Text>
            </View>
          ))}
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
