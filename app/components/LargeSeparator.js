import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LargeSeparator = ({ style }) => {
  return <View style={[styles.mainContainer, style]} />;
};

export default LargeSeparator;

const styles = StyleSheet.create({});
