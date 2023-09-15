import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons } from "../constants/theme";
import AppGradient from "./AppGradient";

const AppButtonHorizontal = ({
  bgColor = COLORS.secondary,
  image = icons.facebook,
  onPress,
  style,
  title = "Button",
  titleStyle,
  titleColor = COLORS.white,
  iconStyle,
  gradient,
  gradientStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, style, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      {image && (
        <Image
          source={image}
          resizeMode="contain"
          style={[styles.image, iconStyle]}
        />
      )}
      <Text style={[styles.title, titleStyle, { color: titleColor }]}>
        {title}
      </Text>
      {gradient && (
        <AppGradient
          style={gradientStyle}
          primary={COLORS.primary}
          secondary={COLORS.secondary}
        />
      )}
    </TouchableOpacity>
  );
};

export default AppButtonHorizontal;

const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  mainContainer: {
    padding: Platform.OS === "android" ? 10 : 16,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
});
