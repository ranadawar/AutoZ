import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import Header from "../components/profile/Header";
import AppGradient from "../components/AppGradient";
import { COLORS, FONTS, icons, images } from "../constants/theme";
import StarRating from "react-native-star-rating-widget";
import StatsCard from "../components/cards/StatsCard";
import TitleText from "../components/profile/TitleText";
import ProfileSection from "../components/profile/ProfileSection";
import Separator from "../components/Separator";

const Profile = () => {
  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.bottomContainers}>
          <TitleText title="Transactions" />
          <ProfileSection image={icons.dollar} />
          <Separator />
          <ProfileSection title="Payment & Deposit Methods" />
          <View
            style={{ height: 12, backgroundColor: "#EBF3F8", marginBottom: 15 }}
          />
          <TitleText title="Saves" />
          <ProfileSection title="Saved items" image={icons.heartc} />
          <Separator />
          <ProfileSection title="Search alerts" image={icons.bellc} />
          <View
            style={{ height: 12, backgroundColor: "#EBF3F8", marginBottom: 15 }}
          />
          <TitleText title="Account" />
          <ProfileSection title="Account Settings" image={icons.setting} />
          <Separator />
          <ProfileSection title="Public Profile" image={icons.profilep} />
          <Separator />
          <ProfileSection title="Custom Profile Link" image={icons.link} />
          <Separator />
          <ProfileSection title="Promote Plus" image={icons.promote} />
        </View>
      </ScrollView>
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
  bottomContainers: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: COLORS.white,
    paddingVertical: 20,
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
