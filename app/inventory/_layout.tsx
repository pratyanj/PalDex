import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack >
        <Stack.Screen name="WeaponScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} /> 
        <Stack.Screen name="WeaponDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="SphereScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="SphereDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="SphereModuleDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="SphereModuleScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="ArmorScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="ArmorDetails" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="AccessoryScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="AccessoryDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
    </Stack>  );}