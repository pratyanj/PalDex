import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { pals } from "../constants/pals";
import { SkillCard } from "./skill-card";
import { Colors } from "../constants/Colors";
import { ThemeContext } from "../constants/ThemeContext";
type Props = {
  pal_id: number;
};
const Theme = { mode: "dark" };
let actColor = Colors[Theme.mode];
interface StatBarProps {
  label: string;
  value: number;
}

export function StatBar({ label, value }: StatBarProps) {
  return (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: actColor.surfaceVariant, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 20, marginVertical: 8, elevation: 2, shadowColor: actColor.shadow, shadowOpacity: 0.2, shadowRadius: 4 }}>
    <Text style={{fontSize: 18, fontWeight: "600", color: actColor.onSurface}}>{label}</Text>      
    <Text style={{fontSize: 20, fontWeight: "bold", color: actColor.secondary}}>{value}</Text>
  </View>
  );
}

export default function Stats({ pal_id }: Props) {
  const { theme } = React.useContext(ThemeContext);
  actColor = Colors[theme.mode];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: actColor.background,
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    header: {
      alignItems: "center",
      marginBottom: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: actColor.onBackground,
    },
    scrollView: {
      paddingBottom: 50,
    },
    label: {
      fontSize: 18,
      fontWeight: "600",
      color: actColor.onSurface,
    },
    value: {
      fontSize: 20,
      fontWeight: "bold",
      color: actColor.secondary,
    },
  });

  const stats = [
    { label: "HP", value: pals[pal_id].stats.hp },
    { label: "Melee ATK", value: pals[pal_id].stats.attack.melee },
    { label: "Ranged ATK", value: pals[pal_id].stats.attack.ranged },
    { label: "Defense", value: pals[pal_id].stats.defense },
    { label: "Walk Speed", value: pals[pal_id].stats.speed.walk },
    { label: "Run Speed", value: pals[pal_id].stats.speed.run },
    { label: "Ride Speed", value: pals[pal_id].stats.speed.ride },
    { label: "Stamina", value: pals[pal_id].stats.stamina },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}

      {/* Stats List */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Stats</Text>
        </View>
        {stats.map((stat, index) => (
          <StatBar key={index} label={stat.label} value={stat.value} />
        ))}
        <Text style={styles.title}>Active Skills</Text>
        {pals[pal_id].skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={
              skill.name.charAt(0).toUpperCase() +
              skill.name.slice(1).toLowerCase().replace(/_/g, " ")
            }
            level={skill.level}
            power={skill.power}
            cooldown={skill.cooldown}
            description={skill.description}
          />
        ))}
        <View style={{ marginBottom: 25 }} />
      </ScrollView>
    </View>
  );
}
