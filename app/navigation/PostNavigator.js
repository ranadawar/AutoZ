import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostItem from "../screens/PostItem";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();

const PostNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ppost" component={PostItem} />
      <Stack.Screen name="pdetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default PostNavigator;

const styles = StyleSheet.create({});
