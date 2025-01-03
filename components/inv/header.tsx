import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { View,Text } from "react-native";

const InvHeader = ({ name,actColor ,path}) => (
      <View style={{ backgroundColor: actColor.background,flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, }}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={actColor.primary}
          onPress={() => router.push({ pathname:path })}
        />
        <Text style={{ color: actColor.primary,fontSize: 20,fontWeight: "bold", }}>{name}</Text>
        <View style={{ width: 24 }} />
      </View>
    );

export default InvHeader;