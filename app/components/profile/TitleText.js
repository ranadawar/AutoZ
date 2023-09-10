import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const TitleText = ({ style, title }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
});
