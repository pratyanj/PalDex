// GeneralTab.js
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { WorkSkill } from "./Work_Suitability";
import { pals } from "../constants/pals";
import { Image } from "expo-image";
type Props = {
  pal_id: number;
};

const GeneralTab = ({
  pal_id,
}: Props) => {
  // console.log(works)
  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}>
        <Text style={styles.text}>{pals[pal_id].description}</Text>
      </View>
      <View style={styles.skill}>
        <Text style={styles.skillTitle}>Partner Skill</Text>
        <View
          style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}
        >
          <Text style={styles.skillTitle}>{pals[pal_id].aura.name.charAt(0).toUpperCase() + pals[pal_id].aura.name.slice(1).replace("_", " ")}</Text>
          <View
            style={{ backgroundColor: "#151515", padding: 8, borderRadius: 8 }}
          >
            <Text style={styles.text}>{pals[pal_id].aura.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.skill}>
        <Text style={styles.skillTitle}>Work Suitability</Text>
        <View
          style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}
        >
          {pals[pal_id].suitability.map((i) => (
            <WorkSkill
              key={`${i.type}-${i}`}
              name={
                i.type.charAt(0).toUpperCase() +
                i.type.slice(1).replace("_", " ")
              }
              icon={i.image}
              level={i.level}
            />
          ))}
        </View>
      </View>
      {/* Add drop item here */}
      <View style={[styles.skill, { marginBottom: 100 }]}>
        <Text style={styles.skillTitle}>Drop Item</Text>
        <View
          style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}
        >
          {pals[pal_id].drops.map((i) => (
            <View
            key={`${i.name}-${i}`}
              style={{
                backgroundColor: "#151515",
                padding: 8,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 3,
                gap: 5,
              }}
            >
              <Image
                source={i.image}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#2b2b2b",
                  borderRadius: 8,
                }}
              />
              <Text style={styles.text}>
                {i.name.charAt(0).toUpperCase() + i.name.slice(1).toLowerCase().replace(/_/g, " ")}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    padding: 16,
    // marginHorizontal: 8,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  skill: {
    marginTop: 16,
  },
  skillTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default GeneralTab;
