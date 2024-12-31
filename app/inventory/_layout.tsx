import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack>
      <Stack.Screen name="weapon" options={({ route, navigation }) => ({
        title: "Weapon",
        headerStyle: {
          backgroundColor: actColor.surface,
        },
        headerTintColor: actColor.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
        
      })} /> 
      <Stack.Screen name="weaponDetail" options={({ route, navigation }) => ({
        title: "weaponDetail",
        headerStyle: {
          backgroundColor: actColor.surface,
        },
        headerTintColor: actColor.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
        
      })} />
    </Stack>  );
}