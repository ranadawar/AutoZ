import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { COLORS, FONTS, icons, images } from "../constants/theme";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    icon: icons.bodyPart,
    title: "EBody Parts",
  },
  {
    id: 2,
    icon: icons.engine,
    title: "Engine and Accessories",
  },
  {
    id: 3,
    icon: icons.lighting,
    title: "Lighting",
  },
  {
    id: 4,
    icon: icons.braking,
    title: "Braking System",
  },
  {
    id: 5,
    icon: icons.eSystem,
    title: "Electrical System Ignition",
  },
];

const MainHeader = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleMenuPress = () => {
    setIsShow(!isShow);
    console.log("hello");
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => handleMenuPress()}>
          <MaterialCommunityIcons name="menu" color={COLORS.text} size={28} />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/logob.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.rowContainer}>
          <Image
            source={icons.headerProfile}
            resizeMode="contain"
            style={styles.image2}
          />
          <Text style={styles.loginText}>Login</Text>
        </View>
      </View>

      {isShow && (
        <View style={styles.absoluteContainer}>
          <View style={styles.innerRowContainer}>
            <Text style={styles.categoryTitle}>All Categories</Text>
            <TouchableOpacity onPress={() => setIsShow(false)}>
              <Image
                resizeMode="contain"
                style={{ width: 15, height: 15 }}
                source={require("../../assets/icons/crossss.png")}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryItem
                icon={item.icon}
                itemTitle={item.title}
                onPress={() => setIsShow(false)}
              />
            )}
          />
        </View>
      )}
    </>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    height: 400,
    backgroundColor: COLORS.white,
    top: 128,
    left: 0,
    right: 0,
    zIndex: 1,
    borderTopColor: "#BFDAE7",
    borderTopWidth: 2,
    paddingHorizontal: 7,
  },
  categoryTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginHorizontal: -8,
  },
  loginText: {
    fontSize: 15,
    fontFamily: FONTS.medium,
  },
  mainContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 130,
    height: 33,
  },
  image2: {
    width: 25,
    height: 25,
    marginRight: 7,
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
