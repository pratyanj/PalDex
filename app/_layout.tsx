import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="inventory" options={{ headerShown: false ,animation: 'fade',animationDuration: 2000,}} />
      <Stack.Screen name="paldetail" options={{ headerShown: false }} />
    </Stack>
  );
}
