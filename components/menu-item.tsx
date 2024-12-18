import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
}

export function MenuItem({ icon, title, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color="#4fd1c5" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.chevronContainer}>
        <Icon name="chevron-right" size={24} color="#4fd1c5" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#4c4c4c',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    marginLeft: 16,
  },
  chevronContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#4c4c4c',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

