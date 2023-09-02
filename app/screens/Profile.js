import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import Header from "../components/profile/Header";
import AppGradient from "../components/AppGradient";
import { COLORS, FONTS, images } from "../constants/theme";
import StarRating from "react-native-star-rating-widget";
import StatsCard from "../components/cards/StatsCard";

const Profile = () => {
  return (
    <AppScreen>
      <View style={styles.topContainer}>
        <Header />
        <View style={styles.imageContainer}>
          <Image
            source={images.person1}
            resizeMode="cover"
            style={styles.profilePicture}
          />
          <AppGradient style={styles.absolute} />
          <AppGradient
            primary="#8817AF"
            secondary="#8817AF"
            style={styles.absoluteSecond}
          />
        </View>
        <Text style={styles.name}>Jordon James</Text>
        <Text style={styles.subTitle}>Clermont, FL</Text>
        <View style={styles.rowStars}>
          <StarRating rating={5} starSize={20} />
          <Text style={styles.totalStars}>(5)</Text>
        </View>
      </View>

      <View>
        <StatsCard />
      </View>
    </AppScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  absolute: {
    borderRadius: 80,
    opacity: 0.1,
  },
  absoluteSecond: {
    borderRadius: 80,

    top: -30,
    left: -100,
    right: 100,
    bottom: 30,
    opacity: 0.1,
  },
  profilePicture: {
    width: 130,
    height: 130,
  },
  topContainer: {
    backgroundColor: "#061628",
    height: 345,
    borderEndEndRadius: 45,
    borderEndStartRadius: 45,
  },
  imageContainer: {
    width: 140,
    height: 140,
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 25,
  },
  rowStars: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  totalStars: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: COLORS.white,
  },

  name: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    textAlign: "center",
    marginTop: 10,
  },
  subTitle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.white,
    textAlign: "center",
    marginVertical: 10,
  },
});
