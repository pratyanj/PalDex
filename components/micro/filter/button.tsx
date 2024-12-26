import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface FilterButtonProps {
  img: string;
  isSelected?: boolean;
  onPress: () => void;
}

export  const FilterButton = React.memo(({ img, isSelected, onPress }: FilterButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#3b778d" : "#1a2735" },
      ]}
      onPress={onPress}
    >
      <Image source={img} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
});
