import { NavigationContainer } from "@react-navigation/native";
import PalDetail from "@/app/paldetail";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <PalDetail />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}