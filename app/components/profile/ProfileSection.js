import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, icons } from "../../constants/theme";

const ProfileSection = ({
  image = icons.card,
  onPress,
  title = "Purchases and Sales",
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    marginVertical: 7,
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
});
