import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack >
        <Stack.Screen name="Accessory"    options={{ headerShown: false ,animation: 'fade', animationDuration: 2000}} />
        <Stack.Screen name="Ammo"         options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Armor"        options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Consumable"   options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Ingredient"   options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Material"     options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Sphere"       options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="SphereModule" options={{ headerShown: false ,animation: 'fade'}} />
        <Stack.Screen name="Weapon"       options={{ headerShown: false ,animation: 'fade'}} />
    </Stack>  );}