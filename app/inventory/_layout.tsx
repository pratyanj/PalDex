import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack>
        <Stack.Screen name="weaponScreen" options={() => ({headerShown: false})} /> 
        <Stack.Screen name="weaponDetail" options={() => ({headerShown: false})} />
        <Stack.Screen name="sphereScreen" options={() => ({headerShown: false})} />
        <Stack.Screen name="sphereDetail" options={() => ({headerShown: false})} />
        <Stack.Screen name="sphereModuleDetail" options={() => ({headerShown: false, })} />
        <Stack.Screen name="sphereModuleScreen" options={() => ({headerShown: false, })} />

    </Stack>  );
}