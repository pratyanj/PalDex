import { View, Text, ScrollView, StyleSheet, Switch } from 'react-native'
import React from 'react'
import { pals } from '../constants/pals'
type Props = {
    pal_id: number;
}
interface StatBarProps {
  label: string;
  value: number;
}

export function StatBar({ label, value }: StatBarProps) {
  return (
    <View style={styles.container1}>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
export default function Stats({pal_id}: Props) {

  const stats = [
    { label: 'HP', value: pals[pal_id].stats.hp },
    { label: 'Malee ATK', value: pals[pal_id].stats.attack.melee },,
    { label: 'Ranged ATK', value: pals[pal_id].stats.attack.ranged },
    { label: 'Defense', value: pals[pal_id].stats.defense },
    { label: 'Walk speed', value: pals[pal_id].stats.speed.walk },
    { label: 'Run speed', value: pals[pal_id].stats.speed.run },
    { label: 'Ride speed', value: pals[pal_id].stats.speed.ride },
    { label: 'Stamina', value: pals[pal_id].stats.stamina },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Stats</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {stats.map((stat, index) => (
          <StatBar
            key={index}  
            label={stat.label}
            value={stat.value}
          />
        ))}
        <View style={{marginBottom: 25}}></View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: '#151515',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#2b2b2b", 
    padding: 8,
     borderRadius: 8,
     paddingBottom:50

  },

  container1: {
    backgroundColor: 'rgba(176, 190, 197, 0.2)',
    borderRadius: 16,
    marginVertical: 6,
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  value: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
