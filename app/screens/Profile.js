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
const numberOfFollowers = 100;
const numberOfFollowing = 200;
const numberOfLikes = 300;

const Profile = () => {
  return (
    <AppScreen style={{ backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Header />
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/prori.png")}
              resizeMode="cover"
              style={styles.profilePicture}
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
          <YourComponent />
        </View>
        <View style={styles.bottomContainers}>
          <TitleText title="Transactions" />
          <ProfileSection image={icons.dollar} />
          <Separator style={{ marginHorizontal: -2 }} />
          <ProfileSection title="Payment & Deposit Methods" />
          <View
            style={{
              height: 5,
              backgroundColor: "#EBF3F8",
              marginBottom: 15,
              marginHorizontal: -20,
            }}
          />
          <TitleText title="Saves" />
          <ProfileSection title="Saved items" image={icons.heartc} />
          <Separator style={{ marginHorizontal: -2 }} />
          <ProfileSection title="Search alerts" image={icons.bellc} />
          <View
            style={{
              height: 5,
              backgroundColor: "#EBF3F8",
              marginBottom: 15,
              marginHorizontal: -20,
            }}
          />
          <TitleText title="Account" />
          <ProfileSection title="Account Settings" image={icons.setting} />
          <Separator style={{ marginHorizontal: -2 }} />
          <ProfileSection title="Public Profile" image={icons.profilep} />
          <Separator style={{ marginHorizontal: -2 }} />
          <ProfileSection title="Custom Profile Link" image={icons.link} />
          <Separator style={{ marginHorizontal: -2 }} />
          <ProfileSection title="Promote Plus" image={icons.promote} />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default Profile;

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Content for the first container */}
        <Text style={styles.btitle}>{numberOfFollowers}</Text>
        <Text style={styles.bsubtitle}>Followers</Text>
      </View>
      <View style={styles.boxCenter}>
        <Text style={styles.btitle}>{numberOfFollowing}</Text>
        <Text style={styles.bsubtitle}>Following</Text>
      </View>
      <View style={styles.box}>
        {/* Content for the third container */}
        <Text style={styles.btitle}>{numberOfLikes}</Text>
        <Text style={styles.bsubtitle}>Likes</Text>
      </View>
    </View>
  );
};

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
    width: 400,
    height: 400,
    marginLeft: -140,
    opacity: 0.9,
    marginBottom: -40,
  },
  topContainer: {
    backgroundColor: "#061628",
    height: 380,
    borderEndEndRadius: 45,
    borderEndStartRadius: 45,
    paddingTop: 40,
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

  bsubtitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  btitle: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: 10,
    color: COLORS.white,
  },
  container: {
    flexDirection: "row", // Arrange the containers horizontally
    justifyContent: "space-between", // Equal space between containers
    alignItems: "center", // Center content vertically
    paddingHorizontal: 10, // Add some horizontal padding for spacing
    flex: 1, // Use available parent view space equally
    marginTop: -30,
    borderRadius: 20,
    backgroundColor: "#019EF3",
    marginHorizontal: 20,
  },
  box: {
    flex: 1, // Equal space distribution among three containers
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    height: 100, // Set a fixed height for the containers (you can adjust as needed)
  },
  boxCenter: {
    flex: 1, // Equal space distribution among three containers
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    height: 100, // Set a fixed height for the containers (you can adjust as needed)
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#0084CB",
  },
});
