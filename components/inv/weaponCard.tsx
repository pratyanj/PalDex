import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface WeaponCardProps {
  name: string;
  type: string;
  rarity: string;
  stats: {
    attack: number;
    technology: number;
    ammo: string;
  };
  description: string;
  imageUrl: string;
}

export function WeaponCard({
  name,
  type,
  rarity,
  stats,
  description,
  imageUrl,
}: WeaponCardProps) {
  const rarityColor = getRarityColor(rarity);

  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{type}</Text>
          <Text style={[styles.rarity, { color: rarityColor }]}>{rarity}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.weaponImage}
            resizeMode="contain"
          />
          <View style={styles.decorativeLine1} />
          <View style={styles.decorativeLine2} />
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Attack</Text>
            <Text style={styles.statValue}>{stats.attack}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Technology</Text>
            <Text style={styles.statValue}>{stats.technology}</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Ammo</Text>
            <Text style={styles.statValue}>{stats.ammo}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

function getRarityColor(rarity: string) {
  switch (rarity.toLowerCase()) {
    case "common":
      return "#9CA3AF"; // Gray
    case "rare":
      return "#3B82F6"; // Blue
    case "epic":
      return "#8B5CF6"; // Purple
    case "legendary":
      return "#F59E0B"; // Gold
    default:
      return "#FFFFFF"; // Default white
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    marginVertical: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  type: {
    color: "#9CA3AF",
    marginRight: 8,
  },
  rarity: {
    fontWeight: "600",
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#374151",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    position: "relative",
  },
  weaponImage: {
    width: "100%",
    height: "100%",
  },
  decorativeLine1: {
    position: "absolute",
    bottom: 8,
    left: 8,
    width: 24,
    height: 3,
    backgroundColor: "#3B82F6",
  },
  decorativeLine2: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 24,
    height: 3,
    backgroundColor: "#3B82F6",
  },
  statsContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statLabel: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  description: {
    color: "#9CA3AF",
    fontSize: 14,
    lineHeight: 20,
  },
});
