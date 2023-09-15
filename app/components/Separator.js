import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Separator = ({ style }) => {
  return <View style={[styles.mainContainer, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  mainContainer: {
    height: 1,
    backgroundColor: COLORS.gray,
    marginHorizontal: 13,
  },
});
