import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../../components/inv/CreateStatRow";
import { Colors } from "../../../constants/Colors";
import InvHeader from "../../../components/inv/Header";
import { ThemeContext } from "../../../constants/ThemeContext";
import { CraftingRecipe } from "../../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../../components/inv/GetRarityColor";
import { spheres } from "../../../constants/inv/spheres";

export default function sphereDetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const { id } = useLocalSearchParams();
  const [weaponID, setWeaponID] = useState(id || 0);

  const [capturePower, setcapturePower] = useState(false);
  const [technology, setTechnology] = useState(false);

  const dataCheck = () => {
    if (spheres[Number(weaponID)].capture_power) {
      setcapturePower(true);
    }
    if (spheres[Number(weaponID)].technology) {
      setTechnology(true);
    }
  };
  useEffect(() => {
    dataCheck();
  }, []);
    
    type ItemViewProps = {
      name: string;
      img: any;
      type: string;
      raritytpye: string;
      actColor: any;
    };
    const ItemView = ({name,img,type,raritytpye,actColor}:ItemViewProps) => (
      <View style={[styles.card, { backgroundColor: actColor.surfaceVariant }]} >
      <Image
        source={img}
        style={styles.weaponImage}
      />
      <Text style={[styles.title, { color: actColor.primary }]}>
        {name}
      </Text>
      <View style={styles.typeContainer}>
        <Text style={[styles.type, { color: actColor.onBackground }]}>
          {type}
        </Text>
        <Text
          style={[
            styles.rarity,
            {
              color: actColor.shadow,
              backgroundColor: GetRarityColor(
                actColor,raritytpye
              ),
              borderRadius: 10,
              paddingHorizontal: 8,
            },
          ]}
        >
          {raritytpye}
        </Text>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        {capturePower && (
          CreateStatRow("Capture Power", spheres[Number(weaponID)].capture_power, actColor)
        )}
        {technology && (
          CreateStatRow("Technology", spheres[Number(weaponID)].technology, actColor)
        )}
      </View>
    </View>
    );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: actColor.background }]}
    >
      <InvHeader name="Sphere details" actColor={actColor} path='/inventory/Sphere/SphereScreen' />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <ItemView 
            name={spheres[Number(weaponID)].name} 
            img={spheres[Number(weaponID)].image_github_url} 
            type="Sphere" 
            raritytpye={spheres[Number(weaponID)].rarity} 
            actColor={actColor} 
        />
        <View
          style={[
            styles.statsContainer,
            { backgroundColor: actColor.surfaceDisabled },
          ]}
        >
          <Text style={{ fontSize: 16, color: actColor.onBackground }}>
            {spheres[Number(weaponID)].description}
          </Text>
        </View>
        <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
          Crafting
        </Text>
        <CraftingRecipe recipe={spheres[Number(weaponID)].recipe} actColor={actColor} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  weaponImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  type: {
    fontSize: 14,
    marginRight: 8,
  },
  rarity: {
    fontSize: 14,
    fontWeight: "600",
  },
  
  statsContainer: {
    borderRadius: 12,
    padding: 16,
  },
  scrollView: {
    paddingBottom: 20,
  },
});
