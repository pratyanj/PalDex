import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../../constants/ThemeContext';
import { Colors } from '../../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack screenOptions={{ headerShown: false ,animationDuration: 2000}}>
        <Stack.Screen name="AccessoryScreen" options={() => ({ animation: 'slide_from_left'})} /> 
        <Stack.Screen name="AccessoryDetail" options={() => ({ animation: 'slide_from_right'})} />
    </Stack>  );}