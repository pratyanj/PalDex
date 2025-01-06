import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { View,Text,TouchableOpacity } from "react-native";

const InvHeader = ({ name,actColor ,path}) => (
      <View style={{ backgroundColor: actColor.background,flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, marginBottom: 10, }}> 
        <TouchableOpacity onPress={() => router.push({ pathname:path })} style={{padding: 6,borderRadius: 5,backgroundColor: actColor.surfaceVariant,}}>
        <AntDesign
          name="arrowleft"
          size={24}
          color={actColor.primary}
          
        />
        </TouchableOpacity>
        <Text style={{ color: actColor.primary,fontSize: 20,fontWeight: "bold", }}>{name}</Text>
        <View style={{ width: 24 }} />
      </View>
    );

export default InvHeader;