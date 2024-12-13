import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { pals } from "@/constants/pals";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router/stack";
import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
export default function paldetail() {
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
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ color: "white", paddingTop: 6 }}>Name: </Text>
              <Text style={styles.palname}>{pal_name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginTop: -10 }}>
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
              backgroundColor: "#111111",
              borderColor: "#1f1f1f",
              borderWidth: 2,
              borderRadius: 15,
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 5,
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
  const pal_food = (pal_food: number) => {
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
    return <View style={{ flex: 1, flexDirection: "row" }}>{foodIcons}</View>;
  };
  return (
    <>
      <View style={{ backgroundColor: "#181818" }}>
        <View style={styles.container}>
          {pal_header(
            pals[10].image,
            pals[10].name,
            pals[10].key,
            pals[10].types[0].image,
            pals[10].types[0].name,
            pals[10].stats.food
          )}
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#11717" }}>
      <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="home" >
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="article">
          <Text>Article</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
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
  },
  container1: {
    position: "absolute",
    left: 70,
    height: 120,
    width: 240,
    paddingLeft: 70,
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  palImage: {
    width: 120, // Scaled to fit content better
    height: 120,
    borderRadius: 60, // Circle image
    borderWidth: 4, // Slightly thicker for more emphasis
    borderColor: "#111111",
    zIndex: 1, // Ensure it's above the image
    backgroundColor: "#1f1f1f",
  },
  palname: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginLeft: 8,
  },
  paklkey: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4cd137", // Use a distinctive color for keys
    marginLeft: 8, // Spacing for readability
  },
});
