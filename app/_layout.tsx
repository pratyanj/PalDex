import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="inventory" options={{ headerShown: false ,animation: 'fade'}} />
      <Stack.Screen name="paldetail" options={{ headerShown: false }} />
      <Stack.Screen name="breeding" options={{ headerShown: false }} />
      <Stack.Screen name="Construction" options={{ headerShown: false ,animation: 'flip'}} />
    </Stack>
  );
}
