import { Stack } from 'expo-router/stack';
import { ThemeContext } from '../../constants/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useContext } from 'react';
export default function Layout() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
  return (
    <Stack >
        <Stack.Screen name="Weapon" options={{ headerShown: false }} />
        <Stack.Screen name="SphereScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="SphereDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="SphereModuleDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="SphereModuleScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="ArmorScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="ArmorDetails" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="AccessoryScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="AccessoryDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name="MaterialScreen" options={() => ({headerShown: false, animation: 'slide_from_left'})} />
        <Stack.Screen name="MaterialDetail" options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name='ConsumableDetail' options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name='ConsumableScreen' options={() => ({headerShown: false, animation: 'slide_from_left'})}/>
        <Stack.Screen name='AmmoDetail' options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name='AmmoScreen' options={() => ({headerShown: false, animation: 'slide_from_left'})}/>
        <Stack.Screen name='IngredientDetail' options={() => ({headerShown: false, animation: 'slide_from_right'})} />
        <Stack.Screen name='IngredientScreen' options={() => ({headerShown: false, animation: 'slide_from_left'})} />
    </Stack>  );}