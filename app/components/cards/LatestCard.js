import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const LatestCard = ({ image, title }) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image resizeMode="cover" style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons
        name="heart"
        size={20}
        color={COLORS.white}
        style={styles.iconHeart}
      />
    </TouchableOpacity>
  );
};

export default LatestCard;

const styles = StyleSheet.create({
  iconHeart: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  image: {
    width: 170,
    height: 125,
    borderRadius: 20,
  },
  mainContainer: {
    width: 170,
    height: 170,
  },
  title: {
    fontSize: 14,
    color: COLORS.text,
    marginTop: 10,
    fontFamily: FONTS.medium,
  },
});
