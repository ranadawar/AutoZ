import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

const SwitchBtns = ({
  btnOnePress,
  btnTwoPress,
  titleOne = "For Sale",
  titleTwo = "Archive",
}) => {
  const [btnOne, setBtnOne] = React.useState(true);
  const [btnTwo, setBtnTwo] = React.useState(false);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={btnOne ? styles.selected : styles.notSelected}
        onPress={btnOnePress}
      >
        <Text style={btnOne ? styles.selectedText : styles.notSelectedText}>
          {titleOne}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={btnTwo ? styles.selected : styles.notSelected}
        onPress={btnTwoPress}
      >
        <Text style={btnTwo ? styles.selectedText : styles.notSelectedText}>
          {titleTwo}
        </Text>
      </TouchableOpacity>

      <LinearGradient style={styles.full} colors={["#000", "#000"]} />
    </View>
  );
};

export default SwitchBtns;

const styles = StyleSheet.create({
  full: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.3,
    borderRadius: 30,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    borderRadius: 30,
  },
  selected: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  selectedText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.primary,
  },
  notSelected: {
    padding: 12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notSelectedText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
});
