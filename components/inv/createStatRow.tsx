import { View,Text } from "react-native";


export const CreateStatRow = (label, value, actColor) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: actColor.surface,
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
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          padding: 2,
          color: actColor.shodow,
          backgroundColor: actColor.inverseSurface,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        {value}
      </Text>
    </View>
  );