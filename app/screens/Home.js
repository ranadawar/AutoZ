import {
  Dimensions,
  FlatList,
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import MainHeader from "../components/MainHeader";
import SearchInput from "../components/SearchInput";
import { COLORS, FONTS, icons, images } from "../constants/theme";
import SwiperFlatList from "react-native-swiper-flatlist";
import { LinearGradient } from "expo-linear-gradient";
import Brand from "../components/cards/Brand";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import LatestCard from "../components/cards/LatestCard";

const colors = [
  {
    id: 1,
    title: "Bmw 5gt f07 tail lamp left left rear ",
    price: "€ 100",
    image: images.lamp,
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 2,
    title: "Bmw 5gt f07 tail lamp left left rear ",
    price: "€ 100",
    image: images.lamp,
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 3,
    title: "Bmw 5gt f07 tail lamp left left rear ",
    price: "€ 100",
    image: images.lamp,
    gradient: ["#3FF3FF", "#019EF3"],
  },
  {
    id: 4,
    title: "Bmw 5gt f07 tail lamp left left rear ",
    price: "€ 100",
    image: images.lamp,
    gradient: ["#3FF3FF", "#019EF3"],
  },
];

const six = [
  {
    id: 1,
    image: images.pro,
  },
  {
    id: 2,
    image: images.pro,
  },
  {
    id: 3,
    image: images.pro,
  },
  {
    id: 4,
    image: images.rover,
  },
  {
    id: 5,
    image: images.rover,
  },
  {
    id: 6,
    image: images.rover,
  },
];

const brands = [
  {
    id: 1,
    image: images.honda,
    title: "Honda",
  },
  {
    id: 2,
    image: images.tesla,
    title: "Tesla",
  },
  {
    id: 3,
    image: images.bmw,
    title: "BMW",
  },
  {
    id: 4,
    image: images.kia,
    title: "Kia",
  },
  {
    id: 5,
    image: images.honda,
    title: "Honda",
  },
];

const latest = [
  {
    id: 1,
    image: images.vac,
    title: "Vacuum Pump",
  },
  {
    id: 2,
    image: images.vac,
    title: "Vacuum Pump",
  },
];
const Home = () => {
  const onPressShop = () => {
    LogBox.ignoreAllLogs();
  };
  React.useEffect(() => {
    //ignore all warnings
    console.disableYellowBox = true;
  }, []);

  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <MainHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchInput />
          <View style={styles.locationContainer}>
            <Image
              source={icons.marker}
              resizeMode="contain"
              style={styles.iconLocation}
            />
            <Text style={styles.forYou}>For You:</Text>
            <Text style={styles.fDistance}>Distance (30 mi)+ Shipping</Text>
          </View>

          {/* scrollView Desgin */}
          <View style={styles.coverContainer}>
            <SwiperFlatList
              autoplayDelay={2}
              index={0}
              showPagination
              paginationStyleItemActive={{
                width: 48,
                height: 5,
                backgroundColor: "#333333",
              }}
              paginationStyleItemInactive={{
                width: 8,
                height: 5,
                backgroundColor: "#CCCCCC",
              }}
              data={colors}
              renderItem={({ item }) => (
                <View style={[styles.scrollViewItem]}>
                  <View>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity
                      onPress={onPressShop}
                      style={styles.blackBtn}
                    >
                      <Text style={styles.blackBtnText}>Shop</Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.imageRight}
                  />

                  <LinearGradient
                    colors={item.gradient}
                    style={styles.linearGradient}
                  />
                </View>
              )}
            />
          </View>

          {/* six images */}
          <View style={styles.sixImagesCover}>
            <FlatList
              data={six}
              horizontal={false}
              numColumns={3}
              contentContainerStyle={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.sixImages}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.imageSix}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Shop by brand */}
          <View style={styles.brands}>
            <FlatList
              data={brands}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Brand brand={item.title} image={item.image} />
              )}
            />
          </View>

          {/* Latest */}
          <View style={styles.latest}>
            <View style={styles.viewAll}>
              <Text style={styles.latestText}>Latest Items</Text>
              <View style={styles.viewAllContainer}>
                <Text style={styles.viewAllText}>View All</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.primary}
                  size={25}
                />
              </View>
            </View>
            <View style={styles.rowLates}>
              <LatestCard title="Inner Auto Parts" image={images.vac} />
              <LatestCard title="Auto Parts" image={images.rover} />
            </View>
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

export default Home;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  coverContainer: {
    height: 335,
    marginHorizontal: 20,
  },
  forYou: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  fDistance: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginLeft: 5,
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: 30,
    marginLeft: -10,
  },
  iconLocation: {
    width: 22,
    height: 22,
    marginRight: 7,
  },
  imageRight: {
    width: 250,
    height: 250,
    marginLeft: -80,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 15,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 45,
  },
  price: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    marginVertical: 14,
    color: COLORS.primary,
  },
  scrollViewItem: {
    width: width - 80,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
    height: 284,
    marginLeft: 15,
    borderRadius: 30,
    padding: 15,
  },
  title: {
    fontSize: 30,
    maxWidth: "70%",
    fontFamily: FONTS.bold,
  },
  blackBtn: {
    backgroundColor: COLORS.black,
    width: 100,
    height: 50,
    borderRadius: 15,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  blackBtnText: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },

  sixImages: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginHorizontal: Dimensions.get("window").width / 85,
  },
  sixImagesCover: {
    marginVertical: 2,
    marginHorizontal: 20,
  },
  imageSix: {
    width: 100,
    height: 100,
  },

  brands: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  rowLates: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  viewAll: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  latestText: {
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
  viewAllText: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
  viewAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
