import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const StatsCard = ({
  numberOfFollowers = 133,
  numberOfFollowing = 150,
  numberOfLikes = 400,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{numberOfFollowers}</Text>
        <Text style={styles.subtitle}>Followers</Text>
      </View>
      <View style={styles.innerContainer2}>
        <Text style={styles.title}>{numberOfFollowing}</Text>
        <Text style={styles.subtitle}>Following</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{numberOfLikes}</Text>
        <Text style={styles.subtitle}>Likes</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer2: {
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 25,
    borderColor: "#0084CB",
  },
  mainContainer: {
    padding: 20,
    paddingHorizontal: 30,
    backgroundColor: "#019EF3",
    marginTop: -30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    borderRadius: 25,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    marginBottom: 10,
    color: COLORS.white,
  },
});
