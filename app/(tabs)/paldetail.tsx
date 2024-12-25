import { View, Text, StyleSheet, ScrollView } from "react-native";
import React ,{ useEffect ,useContext,useState}from "react";
import { Image } from "expo-image";
import { pals } from "../../constants/pals";
import { Colors } from "../../constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import GeneralTab from "../../components/general_screen";
import Stats from "../../components/stats_screen";
import { MiscScreen } from "../../components/other_screen";
import { ThemeContext } from "../../constants/ThemeContext";
const Tab = createMaterialTopTabNavigator();



export default function paldetail() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const { id } = useLocalSearchParams();
  const [pal_id, setPalId] = useState(Number(id) || 0);
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: actColor.surface,
      padding: 16,
      paddingBottom: 10,
      marginBottom: 16,
      shadowColor: actColor.shadow,
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
      backgroundColor: actColor.surfaceVariant,
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 16,
      justifyContent: "space-evenly",
      shadowColor: actColor.shadow,
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
    },
    palImage: {
      width: 120, // Scaled to fit content better
      height: 120,
      borderRadius: 60, // Circle image
      borderWidth: 8, // Slightly thicker for more emphasis
      borderColor: actColor.surfaceVariant,
      zIndex: 1, // Ensure it's above the image
      backgroundColor: actColor.surface,
    },
    palname: {
      fontSize: 18,
      fontWeight: "600",
      color: actColor.onSurface,
      marginLeft: 8,
      flexWrap: "wrap",
      
    },
    paklkey: {
      fontSize: 20,
      fontWeight: "bold",
      color: actColor.secondary, // Use a distinctive color for keys
      marginLeft: 8, // Spacing for readability
    },
  
    tabBar: {
      backgroundColor: actColor.surfaceVariant, // Dark background for the tab bar
      borderRadius: 8, // Rounded edges for the tab bar
      marginHorizontal: 10, // Center alignment
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
      backgroundColor: actColor.inversePrimary, // Accent color for the indicator
      height: 4,
      borderRadius: 2,
    },
    text: {
      fontSize: 16,
      color: actColor.surface,
    },
  });
  
  useEffect(() => {
    const numId = Number(id) || 0;
    const validPal = pals[numId];
    setPalId(numId);
    navigation.setOptions({
      title: validPal?.name || 'Pal Details'
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
            source={require("../../assets/images/items/Food_on_icon.png")}
            style={{ width: 20, height: 20, marginLeft: 8 }}
          />
        );
      } else {
        foodIcons.push(
          <Image
            key={`food-off-${i}`}
            source={require("../../assets/images/items/Food_off_icon.png")}
            style={{ width: 20, height: 20, marginLeft: 8 }}
          />
        );
      }
    }

    return (
      <>
        <View >
          <Image source={pal_image} style={styles.palImage} />
          <View style={styles.container1}>
            <View style={{ flex: 0, flexDirection: "row" }}>
              <Text style={ [styles.text,{ paddingTop: 10}] }>No: </Text>
              <Text style={styles.paklkey}>#{pal_key}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row",paddingRight: 30 }}>
              <Text style={[styles.text,{paddingTop: 6}] }>Name: </Text>
              <Text style={styles.palname}>{pal_name}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={[styles.text,{ paddingTop: 6 }]}>Element: </Text>
              <Text style={styles.palname}>{pal_element_name}</Text>
              <Image
                source={pal_element}
                style={{ width: 20, height: 20, marginLeft: 8, marginTop: 2 }}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: actColor.surfaceVariant,
              borderColor: actColor.outline,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: actColor.background }}>
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
           id = {undefined}
            screenOptions={{
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabLabel,
              tabBarIndicatorStyle: styles.tabIndicator,
              tabBarActiveTintColor: actColor.primary,
              tabBarInactiveTintColor: actColor.onTertiaryContainer,
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
              name="Other"
              options={{ title: "Other" }}
              children={() => <MiscScreen pal_id={String(pal_id + 1)} />}
            />
          </Tab.Navigator>
        </View>
          
      </View>
    </SafeAreaView>
  );

}