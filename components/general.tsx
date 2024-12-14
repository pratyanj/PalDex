// GeneralTab.js
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { WorkSkill } from "./Work_Suitability";
import { pals } from "@/constants/pals";
type Props = {
  description: string;
  partner_skill: string;
  partner_skill_name: string;
  pal_id: number;
};

const GeneralTab = ({
  description,
  partner_skill,
  partner_skill_name,
  pal_id,
}: Props) => {
  // console.log(works)
  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#151515", padding: 8, borderRadius: 8 }}>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.skill}>
        <Text style={styles.skillTitle}>Partner Skill</Text>
        <View
          style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}
        >
          <Text style={styles.skillTitle}>{partner_skill_name}</Text>
          <View
            style={{ backgroundColor: "#151515", padding: 8, borderRadius: 8 }}
          >
            <Text style={styles.text}>{partner_skill}</Text>
          </View>
        </View>
      </View>
      <View style={styles.skill}>
        <Text style={styles.skillTitle}>Work Suitability</Text>
        <View
          style={{ backgroundColor: "#2b2b2b", padding: 8, borderRadius: 8 }}
        >
          {pals[pal_id].suitability.map((i) => (
            <WorkSkill name={i.type.charAt(0).toUpperCase() + i.type.slice(1).replace("_", " ")} icon={i.image} level={i.level} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
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
