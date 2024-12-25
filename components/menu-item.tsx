import React, { act } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../constants/Colors';
import { useContext } from 'react';
import { ThemeContext } from '../constants/ThemeContext';
interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
}

export function MenuItem({ icon, title, onPress }: MenuItemProps) {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: actColor.surfaceVariant,
      borderRadius: 16,
      marginBottom: 16,
      padding: 16,
    },
    iconContainer: {
      width: 48,
      height: 48,
      backgroundColor: actColor.surface,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      flex: 1,
      color: actColor.onSurface,
      fontSize: 18,
      marginLeft: 16,
    },
    chevronContainer: {
      width: 48,
      height: 48,
      backgroundColor: actColor.surfaceVariant,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={actColor.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.chevronContainer}>
        <Icon name="chevron-right" size={24} color= {actColor.primary} />
      </View>
    </TouchableOpacity>
  );
}



