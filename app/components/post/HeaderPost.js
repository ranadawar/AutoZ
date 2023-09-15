import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS } from "../../constants/theme";

const HeaderPost = ({
  title = "Post an Item",
  rightText = "Cancel",
  titleColor = COLORS.white,
  onPressIcon,
  rightTextColor = COLORS.primary,
  onPressRightText,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPressIcon}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={COLORS.primary}
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <TouchableOpacity onPress={onPressRightText}>
        <Text style={[styles.rightText, { color: rightTextColor }]}>
          {rightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPost;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingVertical: 25,
    width: "100%",
  },
  rightText: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.primary,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: COLORS.white,
  },
});
