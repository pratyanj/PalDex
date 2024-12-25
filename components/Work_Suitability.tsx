import React, { act } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Colors } from "../constants/Colors";
import { ThemeContext } from "../constants/ThemeContext";
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
  const { theme } = React.useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      marginVertical: 4,
      borderRadius: 8,
    },
    activeContainer: {
      backgroundColor: actColor.background,
    },
    text: {
      fontSize: 16,
      marginLeft: 12,
      flex: 1,
    },
    activeText: {
      color: actColor.onSurface,
    },
    levelContainer: {
      backgroundColor: actColor.outlineVariant,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
    },
    levelText: {
      color: actColor.inverseSurface,
      fontSize: 14,
    },
  });
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

