
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Materials } from "../../../constants/inv/Materials";
import { useLocalSearchParams } from "expo-router";

import { ThemeContext } from "../../../constants/ThemeContext";
import { Colors } from "../../../constants/Colors";
import InvHeader from "../../../components/inv/Header";
import { GetRarityColor } from "../../../components/inv/GetRarityColor";
import { CraftingRecipe } from "../../../components/inv/CraftingRecipe";

export default function MaterialDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const materialD = Materials[Number(id)];
  const [recipe, setRecipe] = React.useState(false);
  const dataCheck = () => {
      if (Materials[Number(id)].recipe.length > 0) {
        setRecipe(true);
      }
    };
    useEffect(() => {
      dataCheck();
    }, []);

  if (!Materials[Number(id)]) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: actColor.background }]}
      >
        <Text style={styles.errorText}>Material data not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <InvHeader name="Material" actColor={actColor} path="/inventory/Material/MaterialScreen" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}
        >
          <Image
            source={materialD.image_github_url}
            style={styles.materialImage}
          />
          <Text style={[styles.title, { color: actColor.primary }]}>
            {materialD.name}
          </Text>
          <View style={styles.typeContainer}>
            <Text style={[styles.type, { color: actColor.onBackground }]}>
              Material
            </Text>
            <Text
              style={[
                styles.rarity,
                {
                  color: actColor.shadow,
                  backgroundColor: GetRarityColor(actColor, materialD.rarity),
                  borderRadius: 10,
                  paddingHorizontal: 8,
                },
              ]}
            >
              {materialD.rarity}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.statsContainer,
            { backgroundColor: actColor.surfaceDisabled },
          ]}
        >
          <Text style={{ fontSize: 16, color: actColor.onBackground }}>
            {materialD.description}
          </Text>
        </View>

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
              value: materialD.stats["Gold Coin"],
            },
            {
              label: "Weight",
              value: materialD.stats.Weight,
            },
            {
              label: "Max Stack Count",
              value: materialD.stats.MaxStackCount,
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
                  flexWrap: "wrap",
                }}
                
              >
                {stat.label}:
              </Text>
              <Text
                style={{
                  color: actColor.primary,
                  fontSize: 16,
                  fontWeight: "bold",
                  flexWrap: "wrap",
                  flex: 1,
                  textAlign: "right",
                }}
                numberOfLines={2}
              >
                {stat.value?stat.value:0}
              </Text>
            </View>
          ))}
        </View>
        {recipe &&(
          <>
          <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
                  Crafting
                </Text>
                <CraftingRecipe
                  recipe={Materials[Number(id)].recipe}
                  actColor={actColor}
            />
          </>
        )}
        
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
  materialImage: {
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
