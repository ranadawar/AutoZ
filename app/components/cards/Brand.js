import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const Brand = ({ brand, image }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image source={image} resizeMode="contain" style={styles.brandImage} />
      </View>
      <Text style={styles.brandtitle}>{brand}</Text>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  brandImage: {
    width: 50,
    height: 50,
  },
  brandtitle: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.text,
  },
  innerContainer: {
    backgroundColor: "#EBF4F6",
    width: 82,
    height: 82,
    borderRadius: 41,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    alignItems: "center",
  },
});
