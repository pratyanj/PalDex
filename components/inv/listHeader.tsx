import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { View, Text,TouchableOpacity } from "react-native";

export const ListHeader = (name: string, actColor) => (
  <View
    style={{
      backgroundColor: actColor.surfaceVariant,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 10,
      paddingHorizontal: 15,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }}
  >
    <TouchableOpacity style={{padding: 6,borderRadius: 5,backgroundColor: actColor.background,}}> 
    <AntDesign
      name="arrowleft"
      size={24}
      color={actColor.secondary}
      onPress={() => router.push({ pathname: "/(tabs)/Inventory" })}
    />
    </TouchableOpacity>
    <Text
      style={{
        color: actColor.primary,
        fontSize: 22,
        fontFamily: "Inter-Black",
        textAlign: "center",
        flex: 1,
        marginLeft: 10,
      }}
    >
      {name}
    </Text>
    <View style={{ width: 24 }} />
  </View>
);
