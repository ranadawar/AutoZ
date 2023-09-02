import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text></Text>
      <Text style={styles.title}>Account</Text>
      <Entypo name="cross" size={24} color={COLORS.white} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.white,
  },
});
