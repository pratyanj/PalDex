import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme, SafeAreaView, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";


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
            name="paldetail"
            options={({ route, navigation }) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: actColor.background,
              },
              headerTitleStyle: {
                color: actColor.primary,
                textAlign: "center",
              },
              headerTitleAlign: "center",
              headerLeft: () => (
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={actColor.primary}
                  onPress={() => navigation.navigate("index")}
                  style={{ marginLeft: 10 }}
                />
              ),
              title: (route.params as { palName?: string })?.palName || "Pal Detail",
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 14, fontWeight: "500" }}>
                  Detail
                </Text>
              ),
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="tablet1"
                  size={24}
                  color={focused ? actColor.primary : actColor.onSurfaceVariant}
                />
              ),
            })}
          />
        </Tabs>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}