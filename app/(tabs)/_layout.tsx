import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme, SafeAreaView, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Layout() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  return (
    <SafeAreaView style={{ flex: 10, backgroundColor: actColor.background }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: actColor.surface,
              height: 70,
              marginBottom: 8,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
            },
            tabBarActiveTintColor: actColor.primary,
            tabBarInactiveTintColor: actColor.onSurfaceVariant,
            tabBarIconStyle: {
              marginTop: 8,
            },
            tabBarItemStyle: {
              paddingVertical: 8,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Paldex",
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                  Paldex
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <AntDesign
                name="book" 
                  size={24}
                  color={focused ? actColor.primary : actColor.onSurfaceVariant}
                />
              ),
            }}
          />
          <Tabs.Screen
          name="Inventory"
          options={{
            headerShown: false,
            
            title: "Inventory",
            tabBarLabel: ({ color }) => (
              <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                Inventory
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <AntDesign
              name="inbox"
                size={24}
                color={focused ? actColor.primary : actColor.onSurfaceVariant}
              />
            ),
          }}
          />
          <Tabs.Screen
           name="Breeding"
           options={{
            headerShown: false,
            animation:"fade",
            title: "Breeding",
            tabBarLabel: ({ color }) => (
              <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                Breeding
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="egg" 
                  size={24}
                  color={focused ? actColor.primary : actColor.onSurfaceVariant}
                />
            ),
          }}
          />
          <Tabs.Screen 
          name="Construction"
          options={{
            headerShown: false,
            animation:"fade",
            title: "Construction",
            tabBarLabel: ({ color }) => (
              <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                Construction
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="build"
                  size={24}
                  color={focused ? actColor.primary : actColor.onSurfaceVariant}
                />
            ),
          }}
          />
          {/* <Tabs.Screen
          name="Map"
          options={{
            headerShown: false,
            animation:"fade",
            title: "Breeding",
            tabBarLabel: ({ color }) => (
              <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                Map
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <FontAwesome6 name="map-location-dot" size={24} color={focused ? actColor.primary : actColor.onSurfaceVariant} />
            ),
          }}
          /> */}
        </Tabs>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}