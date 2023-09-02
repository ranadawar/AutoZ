import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Separator = () => {
  return <View style={styles.mainContainer} />;
};

export default Separator;

const styles = StyleSheet.create({
  mainContainer: {
    height: 1,
    backgroundColor: COLORS.gray,
    marginHorizontal: 40,
  },
});
