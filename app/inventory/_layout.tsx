import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack>
        <Stack.Screen name="WeaponScreen" options={() => ({headerShown: false})} /> 
        <Stack.Screen name="WeaponDetail" options={() => ({headerShown: false})} />
        <Stack.Screen name="SphereScreen" options={() => ({headerShown: false})} />
        <Stack.Screen name="SphereDetail" options={() => ({headerShown: false})} />
        <Stack.Screen name="SphereModuleDetail" options={() => ({headerShown: false, })} />
        <Stack.Screen name="SphereModuleScreen" options={() => ({headerShown: false, })} />
        <Stack.Screen name="ArmorScreen" options={() => ({headerShown: false, })} />
        <Stack.Screen name="ArmorDetails" options={() => ({headerShown: false, })} />

    </Stack>  );
}