import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodeSansBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    EncodeSansBoldItalic: require("./assets/fonts/Ubuntu-BoldItalic.ttf"),
    EncodeSansMedium: require("./assets/fonts/Ubuntu-Medium.ttf"),
    EncodeSansMediumItalic: require("./assets/fonts/Ubuntu-MediumItalic.ttf"),
    EncodeSansRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
    EncodeSansRegularItalic: require("./assets/fonts/Ubuntu-Italic.ttf"),
    EncodeSansLight: require("./assets/fonts/Ubuntu-Light.ttf"),
    EncodeSansLightItalic: require("./assets/fonts/Ubuntu-LightItalic.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <AuthNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
