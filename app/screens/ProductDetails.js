import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import { COLORS, FONTS, icons, images } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Separator from "../components/Separator";
import ProfileCard from "../components/ProfileCard";
import AppButton from "../components/AppButton";

const ProductDetails = ({ navigation }) => {
  const onPressViewSimilar = () => {
    console.log("View Similar");
  };

  return (
    <AppScreen style={{ backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer}>
          <Header onPressBack={() => navigation.goBack()} />
          <View style={styles.mainImageContainer}>
            <Image
              source={images.chain}
              resizeMode="cover"
              style={styles.chainImage}
            />
          </View>

          <TouchableOpacity
            style={styles.similarContainer}
            onPress={onPressViewSimilar}
          >
            <Text style={styles.similar}>View Similar</Text>
          </TouchableOpacity>
        </View>

        <TitlePrice />
        <Separator />
        <ShippingAndRate />
        <Separator />
        <DetailLocation />
        <Separator />

        <DetailBox />

        <ProfileCard />
        <SafteyBox />
        <AdditionalBox />
      </ScrollView>
    </AppScreen>
  );
};

export default ProductDetails;

const Header = ({ onPressBack }) => {
  return (
    <View style={styles.headerMain}>
      <Image
        source={icons.chevron}
        style={styles.chevron}
        resizeMode="contain"
      />
      <View style={styles.rightRow}>
        <Image
          source={icons.enter}
          resizeMode="contain"
          style={styles.chevron2}
        />
        <View style={styles.heartContainer}>
          <Image
            source={icons.redHeart}
            resizeMode="contain"
            style={styles.chevron2}
          />
        </View>
      </View>
    </View>
  );
};

const TitlePrice = ({ title = "Chain Saw", price = "$200" }) => {
  return (
    <View style={styles.titlePriceContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const ShippingAndRate = ({
  shipping = "Free Shipping",
  rate = "4.5",
  rateCount = "50",
}) => {
  return (
    <View style={styles.titlePriceContainer}>
      <View style={styles.rightRow}>
        <Image
          source={icons.car}
          resizeMode="contain"
          style={styles.chevron2}
        />
        <Text style={styles.normal}>{shipping}</Text>
      </View>
      <View style={styles.rightRow}>
        <Image
          source={icons.star}
          resizeMode="contain"
          style={styles.chevron}
        />
        <Text style={styles.highlight}>{rate}</Text>
        <Text style={styles.graish}> rating</Text>
      </View>
    </View>
  );
};

const DetailLocation = ({
  condition = "New",
  postedTimeAgo = 30,
  location = "Dallas, TX",
  original = true,
}) => {
  return (
    <View style={styles.detLocContainer}>
      <Text style={styles.normal}>
        Posted <Text style={styles.highlight}>{postedTimeAgo} mins ago </Text>
        in {location}
      </Text>
      <Text style={[styles.normal, { marginVertical: 10 }]}>
        Condition: {condition}
      </Text>
      {original ? (
        <Text style={styles.highlight}>
          O-<Text style={styles.normal}>Original with the company logo</Text>
        </Text>
      ) : (
        <Text style={styles.normal}>Aftermarket</Text>
      )}
    </View>
  );
};

//detailbox

const DetailBox = ({ title, value }) => {
  return (
    <View style={styles.detailBoxContainer}>
      <Text style={{ fontFamily: FONTS.bold, fontSize: 18 }}>Details</Text>
      <View style={styles.viewOfDetailBox}>
        <DetailItem icon={icons.partNumber} rightTitle="4S61-2M110-DA" />
        <DetailItem
          icon={icons.brand}
          iconRight={images.honda}
          rightTitle="Honda"
        />
        <DetailItem icon={icons.car} rightTitle="Cars" />
      </View>
    </View>
  );
};

const DetailItem = ({
  icon = icons.ship,
  iconRight,
  leftTitle = "Rhia",
  rightTitle = "This",
  value,
}) => {
  return (
    <View style={styles.detailItemContainer}>
      <View style={styles.detailInnerRow}>
        <Image source={icon} resizeMode="contain" style={styles.detailIcon} />
        <Text style={styles.highlight}>{leftTitle}</Text>
      </View>
      <View style={styles.detailInnerRow}>
        <Text style={styles.normal}>{rightTitle}</Text>
        {iconRight && (
          <Image
            source={iconRight}
            resizeMode="contain"
            style={styles.detailIcon}
          />
        )}
      </View>
    </View>
  );
};

const SafteyBox = ({
  title = "2-Day Purchase Protection",
  value = "Items shipped through OfferUp come with a 2-day purchase protection",
}) => {
  return (
    <View style={styles.safetyContainer}>
      <Image
        source={require("../../assets/icons/safety.png")}
        resizeMode="contain"
        style={styles.safteyIcon}
      />
      <View>
        <Text style={styles.safetyTitle}>{title}</Text>
        <Text style={styles.safetyValue}>{value}</Text>
        <Text style={styles.safetyReadMore}>Read More</Text>
      </View>
    </View>
  );
};

const AdditionalBox = ({ title, value }) => {
  return (
    <View style={styles.mainAdditional}>
      <Text style={{ fontFamily: FONTS.bold, fontSize: 18 }}>
        Additional Details
      </Text>
      <View style={styles.additionalRow}>
        <AppButton
          style={{
            marginRight: 10,
            minWidth: Dimensions.get("window").width / 2 - 60,
          }}
          title="Save"
          bgColor={COLORS.google}
          image={require("../../assets/icons/heartw.png")}
        />
        <AppButton
          style={{
            marginRight: 10,
            minWidth: Dimensions.get("window").width / 2 - 60,
          }}
          title="Save"
          bgColor={COLORS.bgs}
          image={require("../../assets/icons/flag.png")}
        />

        <TouchableOpacity style={styles.shareBtn}>
          <Image
            source={require("../../assets/icons/share.png")}
            resizeMode="contain"
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chainImage: {
    width: 250,
    height: 250,
  },
  chevron: {
    width: 20,
    height: 20,
  },
  chevron2: {
    width: 25,
    height: 25,
  },

  headerMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  heartContainer: {
    padding: 7,
    backgroundColor: COLORS.white,
    borderRadius: "50%",
    marginLeft: 15,
  },
  mainImageContainer: {
    alignSelf: "center",
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  similar: {
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  similarContainer: {
    width: 110,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 13,
    borderRadius: 20,
    marginLeft: 20,
  },
  topContainer: {
    backgroundColor: "#DBE4F8",
    height: 455,
    paddingTop: 55,

    borderBottomEndRadius: 80,
    //fade background color
    overflow: "hidden",
  },

  //titlePrice
  price: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    color: COLORS.text,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    color: COLORS.text,
  },
  titlePriceContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //shipment

  highlight: {
    fontFamily: FONTS.medium,
    marginHorizontal: 5,
    fontSize: 15,
  },
  graish: {
    color: COLORS.cho,
    fontFamily: FONTS.regular,
    fontSize: 15,
  },
  normal: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    marginHorizontal: 5,
  },

  //Detail and location

  detLocContainer: {
    padding: 20,
  },

  //DetailBox
  detailBoxContainer: {
    padding: 20,
  },
  viewOfDetailBox: {
    borderWidth: 1,
    borderColor: "#EBF3F8",
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: COLORS.white,
  },
  detailIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 7,
  },
  detailItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
  },
  detailInnerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  //SafetyBox
  safetyContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.white,
  },
  safteyIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  safetyTitle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.text,
  },
  safetyValue: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.text,
    maxWidth: "90%",
    marginVertical: 5,
    lineHeight: 20,
    marginBottom: 10,
  },
  safetyReadMore: {
    fontFamily: FONTS.bold,
    color: COLORS.bgs,
    fontSize: 18,
  },

  //AdditionalBox
  mainAdditional: {
    padding: 20,
    backgroundColor: COLORS.white,
  },
  additionalRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  shareBtn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.bgs,
    borderRadius: 10,
  },
});
