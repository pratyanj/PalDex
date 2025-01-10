import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../../constants/ThemeContext";
import { Colors } from "../../constants/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
export default function Breeding() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const Card = ({ icon, title, description,path }) => (
    <TouchableOpacity onPress={()=>router.push(path)}
      style={[
        styles.card,
        {
          backgroundColor: actColor.surfaceVariant,
          shadowColor: actColor.shadow,
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center",padding:3,justifyContent:"space-between" }}>
        <View>
          <View style={styles.iconRow}>
            {icon}
            <Text style={[styles.cardTitle, { color: actColor.primary }]}>
              {title}
            </Text>
          </View>
          <Text
            style={[
              styles.cardDescription,
              { color: actColor.onSurfaceVariant },
            ]}
          >
            {description}
          </Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={actColor.primary}
          style={{
            
            
            width: 30,
            borderRadius: 8,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.container, { backgroundColor: actColor.background }]}
      >
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={[styles.header, { color: actColor.onSurfaceVariant }]}>
          Breeding Guide
        </Text>
        <Card
          path="/breeding/KnowOffspring"
          icon={
            <Ionicons name="git-branch" size={24} color={actColor.primary} />
          }
          title="Breeding Matches"
          description="Pick two parents to explore their possible offspring."
        />
        <Card
          path="/breeding/FindPerent"
          icon={<Ionicons name="search" size={24} color={actColor.primary} />}
          title="Find My Parents"
          description="Select an offspring to find the necessary parent combinations."
        />
        {/* <Card
          icon={<Ionicons name="egg" size={24} color={actColor.primary} />}
          title="Egg Types"
          description="View all egg types and their possible offspring combinations."
        /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
