import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DarkTheme } from "@react-navigation/native";
import { lightBlue500 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
export default function Layout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: Colors.dark }
      : { ...MD3LightTheme, colors: Colors.light };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={paperTheme}>
        <Drawer
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#3e3e3e",
            },
          }}
          initialRouteName="pallist"
        >
          <Drawer.Screen
            name="pallist"
            options={{
              title: "Paldex",
              drawerLabel: "Paldex",
              drawerIcon: () => 
              <AntDesign name="QQ" size={24} color="black" />,
            }}
          />
          <Drawer.Screen
            name="paldetail"
            options={{
              title: "paldetail",
              drawerLabel: "paldetail",
              drawerIcon: () => (
                <AntDesign name="tablet1" size={24} color="black" />
              ),
            }}
          />
        </Drawer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
