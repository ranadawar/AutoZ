import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import { COLORS, FONTS, icons, images } from "../constants/theme";
import AppGradient from "../components/AppGradient";
import CustomSwitch from "../components/CustomSwitch";
import SwitchBtns from "../components/SwitchBtns";
import SellingCard from "../components/cards/SellingCard";

const listings = [
  {
    id: 1,
    image: images.rover,
  },
  {
    id: 2,
    image: images.pro,
  },
  {
    id: 3,
    image: images.vac,
  },
  {
    id: 4,
    image: images.pro,
  },
];

const Selling = () => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Selling</Text>
            <Image
              source={icons.editWhite}
              resizeMode="contain"
              style={styles.bellIcon}
            />
          </View>

          <SwitchBtns />

          <AppGradient />
        </View>
        <View style={{ marginTop: -80 }}>
          <FlatList
            data={listings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SellingCard />}
          />
        </View>
      </View>
    </AppScreen>
  );
};

export default Selling;

const styles = StyleSheet.create({
  bellIcon: {
    width: 30,
    height: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 22,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  topContainer: {
    height: 240,
  },
  mainContainer: {
    paddingTop: 55,
  },
});
