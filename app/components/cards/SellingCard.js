import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, images } from "../../constants/theme";

const SellingCard = ({
  image = images.rover,
  title = "Land Rover airbag module",
  onPressUnarchiveBtn,
  date = "02 Sep",
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image source={image} resizeMode="contain" style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={onPressUnarchiveBtn}
          style={styles.unarchiveBtn}
        >
          <Text style={styles.btnText}>Unarchive</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

export default SellingCard;

const styles = StyleSheet.create({
  date: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.cho,
    position: "absolute",
    top: 10,
    right: 20,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 20,
  },
  mainContainer: {
    padding: 13,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  textContainer: {
    marginLeft: 14,
    maxWidth: "60%",
  },
  title: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  unarchiveBtn: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderRadius: 14,
    marginTop: 10,
  },
  btnText: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.primary,
  },
});
