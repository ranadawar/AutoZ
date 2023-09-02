import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStackNavigator from "./AppStackNavigator";
import Inbox from "../screens/Inbox";
import { icons } from "../constants/theme";
import Selling from "../screens/Selling";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
        }}
      />
      <Tab.Screen
        name="Post"
        component={Inbox}
        options={{
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
