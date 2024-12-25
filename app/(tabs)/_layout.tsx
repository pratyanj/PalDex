import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme, SafeAreaView, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { useContext } from "react";
export default function Layout() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  return (
    <SafeAreaView style={{ flex: 10 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarBackground: () => (
              <View style={{ backgroundColor: actColor.surface, flex: 1 }} />
            ),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Paldex",
              tabBarLabel: "Paldex",
              headerShown: true,
              headerStyle: {
                backgroundColor: actColor.background,
              },
              headerTitleStyle: {
                color: actColor.primary,
                textAlign: "center",
              },
              headerTitleAlign: "center",

              tabBarIcon: () => (
                <AntDesign name="QQ" size={24} color={actColor.primary} />
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
              drawerLabel: "Pal Detail",
              tabBarIcon: () => (
                <AntDesign name="tablet1" size={24} color={actColor.primary} />
              ),
            })}          />        </Tabs>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
