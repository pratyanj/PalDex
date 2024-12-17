import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { pals } from "../constants/pals";
import { Colors } from "../constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GeneralTab from "../components/general";
import { WorkSkill } from "../components/Work_Suitability";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import Stats from "../components/stats";
const Tab = createMaterialTopTabNavigator();

function TabScreen({ title }: { title: string }) {
  return (
    <View style={styles.tabScreen}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}


export default function paldetail() {
  const { id } = useLocalSearchParams();
  const [pal_id, setPalId] = useState(Number(id) || 0);
  const navigation = useNavigation();

  useEffect(() => {
    setPalId(Number(id));
    navigation.setOptions({
      title: pals[Number(id)].name
    });
    
  }, [id]);
  const pal_header = (
    pal_image: String,
    pal_name: string,
    pal_key: string,
    pal_element: String,
    pal_element_name: string,
    pal_food: number
  ) => {
    const foodIcons = [];
    for (let i = 0; i < 10; i++) {
      if (i < pal_food) {
        foodIcons.push(
          <Image
            key={`food-on-${i}`}
            source={require("../assets/images/items/Food_on_icon.png")}
            style={{ width: 20, height: 20, marginLeft: 8 }}
          />
        );
      } else {
        foodIcons.push(
          <Image
            key={`food-off-${i}`}
            source={require("../assets/images/items/Food_off_icon.png")}
            style={{ width: 20, height: 20, marginLeft: 8 }}
          />
        );
      }
    }

    return (
      <>
        <View>
          <Image source={pal_image} style={styles.palImage} />
          <View style={styles.container1}>
            <View style={{ flex: 0, flexDirection: "row" }}>
              <Text style={{ color: "white", paddingTop: 10 }}>No: </Text>
              <Text style={styles.paklkey}>#{pal_key}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row",paddingRight: 30 }}>
              <Text style={{ color: "white", paddingTop: 6 }}>Name: </Text>
              <Text style={styles.palname}>{pal_name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ color: "white", paddingTop: 6 }}>Element: </Text>
              <Text style={styles.palname}>{pal_element_name}</Text>
              <Image
                source={pal_element}
                style={{ width: 20, height: 20, marginLeft: 8, marginTop: 2 }}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#2b2b2b",
              borderColor: "#1f1f1f",
              borderWidth: 2,
              borderRadius: 15,
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 10,
              padding: 5,
              paddingRight: 10,
            }}
          >
            {foodIcons}
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#181818" }}>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          {pal_header(
            pals[pal_id].image,
            pals[pal_id].name,
            pals[pal_id].key,
            pals[pal_id].types[0].image,
            pals[pal_id].types[0].name,
            pals[pal_id].stats.food
          )}
        </View>
          
        <View style={{ flex: 1 ,height: 1000}}>
          <Tab.Navigator
          
            screenOptions={{
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabLabel,
              tabBarIndicatorStyle: styles.tabIndicator,
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              name="General"
              options={{ title: "General" }}
              children={() => ( <GeneralTab pal_id={pal_id} /> )} 
              />
            <Tab.Screen
              name="Stats"
              options={{ title: "Stats" }}
              children={() => <Stats pal_id={pal_id} />}
            />
            <Tab.Screen
              name="Tab3"
              options={{ title: "2.1-3MM" }}
              children={() => <TabScreen title="2.1-3MM Content" />}
            />
          </Tab.Navigator>
        </View>
          
      </View>
    </SafeAreaView>
  );

}const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    padding: 16,
    paddingBottom: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 12,
    margin: 10,
    width: 300,
  },
  container1: {
    position: "absolute",
    left: 70,
    height: 120,
    width: 250,
    paddingLeft: 70,
    flex: 1,
    backgroundColor: "#2b2b2b",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-evenly",
    shadowColor: "#fff",
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  palImage: {
    width: 120, // Scaled to fit content better
    height: 120,
    borderRadius: 60, // Circle image
    borderWidth: 8, // Slightly thicker for more emphasis
    borderColor: "#2b2b2b",
    zIndex: 1, // Ensure it's above the image
    backgroundColor: "#1f1f1f",
  },
  palname: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginLeft: 8,
    flexWrap: "wrap",
    
  },
  paklkey: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4cd137", // Use a distinctive color for keys
    marginLeft: 8, // Spacing for readability
  },

  tabBar: {
    backgroundColor: "#2b2b2b", // Dark background for the tab bar
    borderRadius: 8, // Rounded edges for the tab bar
    marginHorizontal: 8, // Center alignment
    marginVertical: 6,
    height: 50, // Height for better visibility
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none", // Disable uppercase labels
  },
  tabIndicator: {
    backgroundColor: "#32a852", // Accent color for the indicator
    height: 4,
    borderRadius: 2,
  },
  tabScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    color: "red",
  },
});
