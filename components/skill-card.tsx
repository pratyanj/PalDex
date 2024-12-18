import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Skill = {
    name: string;
    level: number;
    power: number;
    cooldown: number;
    
    description: string;
  };

export function SkillCard({ name, level, power, cooldown, description }: Skill) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.skillName}>
          {name} <Text style={styles.skillLevel}>- Lv {level}</Text>
        </Text>
      </View>
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
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#151515',
      padding: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#00E5FF',
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#2b2b2b',
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    header: {
      marginBottom: 8,
    },
    skillName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    skillLevel: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#B0BEC5',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    stat: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 16,
      color: '#FFCC80',
      marginRight: 6,
    },
    statValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FF7043',
    },
    description: {
      fontSize: 14,
      color: '#CFD8DC',
      marginTop: 8,
    },
  });

