import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TripDetail from "./components/Trips/TripDetail";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "./components/Navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <Home /> */}

        <StackNavigator />
        {/* <TripDetail /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
