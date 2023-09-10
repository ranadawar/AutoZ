import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const FilterBtn = ({ wayOfSort = "Default" }) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <MaterialCommunityIcons
        name="filter-variant"
        size={24}
        color={COLORS.primary}
      />
      <Text style={styles.sortText}>Sort:</Text>
      <Text style={styles.sortWay}>{wayOfSort}</Text>
    </TouchableOpacity>
  );
};

export default FilterBtn;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  sortText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  sortWay: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.text,
  },
});
