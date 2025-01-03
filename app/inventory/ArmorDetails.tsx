import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { Armors } from "../../constants/Armors";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";

export default function ArmorDetails() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [armorID, setArmorID] = useState(id || 0);

  const [defense, setDefense] = useState(false);
  const [durability, setDurability] = useState(false);

  const dataCheck = () => {
    if (Armors[Number(armorID)].defense) {
      setDefense(true);
    }
    if (Armors[Number(armorID)].health) {
      setDurability(true);
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

  type ItemViewProps = {
    name: string;
    img: any;
    type: string;
    raritytpye: string;
    actColor: any;
  };
  const ItemView = ({
    name,
    img,
    type,
    raritytpye,
    actColor,
  }: ItemViewProps) => (
    <View style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}>
      <Image source={img} style={styles.armorImage} />
      <Text style={[styles.title, { color: actColor.primary }]}>{name}</Text>
      <View style={styles.typeContainer}>
        <Text style={[styles.type, { color: actColor.onBackground }]}>
          {type}
        </Text>
        <Text
          style={[
            styles.rarity,
            {
              color: actColor.shadow,
              backgroundColor: getRarityColor(raritytpye),
              borderRadius: 10,
              paddingHorizontal: 8,
            },
          ]}
        >
          {raritytpye}
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
        {defense &&
          CreateStatRow("Defense", Armors[Number(armorID)].defense, actColor)}
        {durability &&
          CreateStatRow("Durability", Armors[Number(armorID)].health, actColor)}
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <InvHeader
        name="Armor details"
        actColor={actColor}
        path="/inventory/ArmorScreen"
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <ItemView
          name={Armors[Number(armorID)].name}
          img={Armors[Number(armorID)].image}
          type="Armor"
          raritytpye={Armors[Number(armorID)].rarity}
          actColor={actColor}
        />
        <View
          style={[
            styles.statsContainer,
            { backgroundColor: actColor.surfaceDisabled },
          ]}
        >
          <Text style={{ fontSize: 16, color: actColor.onBackground }}>
            {Armors[Number(armorID)].description}
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
            { label: "Health", value: Armors[Number(armorID)].stats.Health },
            { label: "Defense", value: Armors[Number(armorID)].stats.Defense },
            {
              label: "Gold Coin",
              value: Armors[Number(armorID)].stats["Gold Coin"],
            },
            { label: "Weight", value: Armors[Number(armorID)].stats.Weight },
            {
              label: "Max Stack Count",
              value: Armors[Number(armorID)].stats.MaxStackCount,
            },
            {
              label: "Durability",
              value: Armors[Number(armorID)].stats.Durability,
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

        <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
          Crafting
        </Text>
        <CraftingRecipe
          recipe={Armors[Number(armorID)].recipe}
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
  armorImage: {
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
  scrollView: {
    paddingBottom: 20,
  },
});
