import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import { COLORS, FONTS, icons, images } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import ProfileSection from "../components/profile/ProfileSection";
import LoginBtn from "../components/LoginBtn";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <Header onPressCancel={() => navigation.navigate("app")} />
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        {/* container having both facebook and google button for social login sign up */}
        <View style={styles.btnContainer}>
          <View style={styles.lockSign}>
            <Image
              source={icons.lock}
              resizeMode="contain"
              style={styles.lockIcon}
            />
            <Text style={styles.signlog}>Sign up / Log in</Text>
          </View>
          <AppButton
            title="Login With Facebook"
            image={icons.facebook}
            bgColor={COLORS.facebook}
            onPress={() => console.log("hello")}
          />
          <AppButton
            title="Login With Google"
            image={icons.google}
            bgColor={COLORS.google}
          />
          <View style={styles.bgLight} />
        </View>

        <View style={styles.emailAppleLoginContainer}>
          <LoginBtn icon={icons.homec} title="Login with Apple" />
          <LoginBtn icon={icons.homec} title="Login with Email" />
        </View>

        <Text style={styles.textBottom}>
          By tapping any of the buttons above, you agree to the AutoZ
          <Text style={styles.inlineLink}> Terms of Services </Text> and
          acknowledge the AutoZ{" "}
          <Text style={styles.inlineLink}>Privacy Policy</Text>
        </Text>
      </View>
    </AppScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  absoluteOne: {
    backgroundColor: "#8817AF",
    height: 160,
    width: 160,
    borderRadius: 80,
    position: "absolute",
    top: 70,
    left: -30,
    opacity: 0.3,
  },
  bgLight: {
    position: "absolute",
    backgroundColor: COLORS.white,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    marginHorizontal: 20,
    opacity: 0.1,
  },
  btnContainer: {
    marginVertical: 20,
    padding: 40,
    paddingBottom: 45,
    borderRadius: 30,
  },
  emailAppleLoginContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  inlineLink: {
    fontFamily: FONTS.medium,
    marginHorizontal: 5,
    color: COLORS.blutBtn,
  },
  lockIcon: {
    width: 26,
    height: 26,
  },
  lockSign: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    height: 41,
    width: 158,
    alignSelf: "center",
  },

  logoContainer: {
    marginVertical: 10,
  },
  mainContainer: {
    backgroundColor: COLORS.bgStyle,
    flex: 1,
    paddingTop: 45,
  },
  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  signlog: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 10,
  },
  textBottom: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.white,
    textAlign: "center",
    marginHorizontal: Dimensions.get("window").width / 6,
    lineHeight: 20,
    marginTop: 30,
  },
});

const Header = ({ onPressCancel, onPressIcon }) => {
  return (
    <View style={styles.mainHeader}>
      <MaterialCommunityIcons
        name="chevron-left"
        color={COLORS.primary}
        size={27}
        onPress={onPressIcon}
      />
      <Text style={styles.headerText} onPress={onPressCancel}>
        Cancel
      </Text>
    </View>
  );
};
