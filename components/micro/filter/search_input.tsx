import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchInput({ value, onChangeText }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#4a5568" style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter name"
        placeholderTextColor="#4a5568"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a2735',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
  },
});

