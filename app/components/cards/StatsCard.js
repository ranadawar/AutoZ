import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants/theme";

const StatsCard = ({
  numberOfFollowers = 133,
  numberOfFollowing = 150,
  numberOfLikes = 400,
}) => {
  return <View style={styles.mainContainer}></View>;
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
});
