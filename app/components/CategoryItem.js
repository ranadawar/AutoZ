import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";

const CategoryItem = ({
  icon = require("../../assets/icons/enginea.png"),
  itemTitle = "Ebody Parts",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Image source={icon} resizeMode="contain" style={styles.iconImage} />
        </View>
        <Text style={styles.itemTitle}>{itemTitle}</Text>
      </View>
      <MaterialCommunityIcons name="chevron-down" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    backgroundColor: COLORS.bgs,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: 19,
    height: 19,
  },
  itemTitle: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    marginLeft: 10,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
