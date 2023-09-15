import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStackNavigator from "./AppStackNavigator";
import Inbox from "../screens/Inbox";
import { icons } from "../constants/theme";
import Selling from "../screens/Selling";
import Profile from "../screens/Profile";
import PostItem from "../screens/PostItem";
import ProductDetails from "../screens/ProductDetails";
import Testing from "../screens/Testing";

import { SHADOWS } from "../constants/theme";
import PostNavigator from "./PostNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          paddingTop: 20,
          shadowOffset: {
            ...SHADOWS.dark,
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={AppStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.homec : icons.home}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.inboxc : icons.inbox}
              resizeMode="contain"
              style={styles.image}
            />
          ),
          //hide tabBar on this screen
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostNavigator}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.postc : icons.post}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Listing"
        component={Selling}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.listingc : icons.listing}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.profilec : icons.profile}
              resizeMode="contain"
              style={styles.image}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
});
