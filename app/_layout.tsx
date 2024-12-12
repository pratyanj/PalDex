import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
        screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#3e3e3e',
              },
            }}
      >
        <Drawer.Screen
          name="pallist"
          options={{
            title: 'Paldex',
            drawerLabel: 'Paldex',
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
      </Drawer>
      
    </GestureHandlerRootView>
  );
}
