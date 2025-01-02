import { View,Text } from "react-native";


export const createStatRow = (label, value, actColor) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: actColor.shadow,
        borderWidth: 2,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: actColor.outline,
          fontWeight: "500",
          backgroundColor: actColor.surface,
          padding: 3,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          padding: 2,
          backgroundColor: actColor.inverseSurface,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        {value}
      </Text>
    </View>
  );