import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack >
        <Stack.Screen name="ProductionDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} /> 
        <Stack.Screen name="ProductionScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
    </Stack>  );}