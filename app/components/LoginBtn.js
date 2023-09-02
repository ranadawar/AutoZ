import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants/theme";

const LoginBtn = ({ icon, title }) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 15,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: COLORS.blutBtn,
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.blutBtn,
    maxWidth: "60%",
  },
});
