import { View,Text } from "react-native";
import { Image } from "expo-image";
import { GetRarityColor } from "./GetRarityColor"
type props ={
  name: string;
  img: any;
  type: string;
  rarity: string;
  actColor: any;
}
export const ItemCard = ({ name, img, type, rarity, actColor }:props) => (
      <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: actColor.outlineVariant,
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 18,color:actColor.onSurface }}>{name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" ,gap: 5}}>
              <Text style={{ fontSize: 12 ,color:actColor.onSurface,backgroundColor:actColor.background,borderRadius:10,padding:2,paddingHorizontal:12}}>{type}</Text>
              <Text style={{ fontSize: 12 ,color:actColor.shadow,backgroundColor:GetRarityColor(actColor,rarity),borderRadius:10,padding:2,paddingHorizontal:12}}>{rarity}</Text>
            </View>
            </View>
            <Image
              // source={img}
              source={{uri: img}}
              style={{ width: 50, height: 50 ,backgroundColor: GetRarityColor(actColor,rarity),borderRadius: 10,}}
            />
          </View>
    
)
{/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            backgroundColor: actColor.background,
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../../assets/images/items/gold-coin.png")}
            style={{ width: 18, height: 18}}
          />
          <Text
            style={{
              fontSize: 12,
              color: actColor.onSurface,
              borderRadius: 10,
              padding: 2,
            }}
          >
            {gold}
          </Text>
        </View> */}