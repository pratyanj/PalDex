import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { ThemeContext } from '../constants/ThemeContext';
type Skill = {
    name: string;
    level: number;
    power: number;
    cooldown: number;
    
    description: string;
  };

export function SkillCard({ name, level, power, cooldown, description }: Skill) {
  const { theme } = React.useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: actColor.background,
      padding: 16,
    },
    card: {
      backgroundColor: actColor.surfaceVariant,
      borderRadius: 12,
      padding: 10,
      marginBottom: 16,
      elevation: 2,
      shadowColor: actColor.shadow,
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    header: {
      marginBottom: 8,
    },
    skillName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: actColor.onSurface,
    },
    skillLevel: {
      fontSize: 18,
      fontWeight: 'normal',
      color: actColor.onSurfaceVariant,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
      backgroundColor: actColor.surface,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    stat: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 16,
      color: actColor.inverseSurface,
      marginRight: 6,
    },
    statValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: actColor.secondary,
    },
    description: {
      fontSize: 14,
      color: actColor.onSurface,
      marginTop: 8,
    },
  });
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.skillName}>
          {name} <Text style={styles.skillLevel}>- Lv {level}</Text>
        </Text>
      </View>
      <View style={{ backgroundColor:actColor.background,padding:5,borderRadius:10 }}>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Power:</Text>
          <Text style={styles.statValue}>{power}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Cooldown:</Text>
          <Text style={styles.statValue}>{cooldown}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Range:</Text>
          <Text style={styles.statValue}>{cooldown}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
    </View>
  );
}


