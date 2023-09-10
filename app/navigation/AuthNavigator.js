import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import AppNavigator from "./AppNavigator";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboard" component={WelcomeScreen} />
      <Stack.Screen name="app" component={AppNavigator} />
      <Stack.Screen name="details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
