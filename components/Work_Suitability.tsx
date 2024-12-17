import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

interface WorkSkillProps {
  name: string;
  icon: string;
  level?: number;
  isActive?: boolean;
}

export function WorkSkill({
  name,
  icon,
  level,
  isActive = true,
}: WorkSkillProps) {
  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <Image source={icon} style={{ width: 28, height: 28 }} />
      <Text style={[styles.text, isActive && styles.activeText]}>{name}</Text>
      {level && (
        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>Lv {level}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 4,
    backgroundColor: "#3D3D3D",
    borderRadius: 8,
  },
  activeContainer: {
    backgroundColor: "#151515",
  },
  text: {
    color: "#6b7280",
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  activeText: {
    color: "#ffffff",
  },
  levelContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  levelText: {
    color: "#ffffff",
    fontSize: 14,
  },
});
