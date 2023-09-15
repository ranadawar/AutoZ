import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import AppScreen from "../components/AppScreen";
import { COLORS, FONTS, icons, images } from "../constants/theme";
import HeaderPost from "../components/post/HeaderPost";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../components/AppButton";
import AppGradient from "../components/AppGradient";
import AppTextInput from "../components/AppTextInput";
import DropDown from "../components/DropDown";
import Separator from "../components/Separator";
import Switch from "../components/SwitchBtn";
import AppButtonHorizontal from "../components/AppButtonHorizontal";
import ImageInputList from "../components/ImageInputList";
const screenHeight = Dimensions.get("window").height;

const categories = [
  {
    id: 1,
    name: "Cars",
    label: "Cars",
  },
];

const selectedCategory = {
  id: 1,
  name: "Electrical System Ignition",
  label: "Electrical System Ignition",
};

const selectedCondition = {
  id: 1,
  name: "Used (normal wear)",
  label: "Used (normal wear)",
};

const selectedBrand = {
  id: 1,
  name: "BMW",
  label: "BMW",
};

const selectedModel = {
  id: 1,
  name: "5 Series",
  label: "5 Series",
};

const PostItem = ({ navigation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [switchValue, setSwitchValue] = useState(true);
  const [images, setImages] = useState([
    require("../../assets/images/selecti.png"),
  ]);

  const [isUpload, setIsUpload] = useState(false);

  const onNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const onPrevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const takePhoto = () => {
    setIsUpload(true);
  };

  const handleCancel = () => {
    navigation.goBack();
    setTimeout(() => {
      navigation.navigate("pdetails");
    }, 1000);
    setIsUpload(false);
  };
  return (
    <AppScreen>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, marginTop: -120 }}>
          <ProgressSteps
            topOffset={850}
            // Adjust this value as needed to position the indicator at the bottom
            activeStepIconBorderColor={COLORS.bgs}
            activeStepIconColor={COLORS.bgs}
            completedProgressBarColor={COLORS.bgs}
            //step icon size should be 25
            activeStep={activeStep}
            completedStepIconColor={COLORS.bgs}
            completedCheckColor={COLORS.white}
            activeLabelColor={COLORS.bgs}
            activeStepNumColor={COLORS.white}
            completedStepNumColor={COLORS.white}
            completedLabelColor={COLORS.bgs}
            labelFontFamily={FONTS.medium}
            labelFontSize={16}
            labelColor={COLORS.cho}
          >
            <ProgressStep
              nextBtnDisabled
              nextBtnText=""
              previousBtnDisabled
              label="Post"
              previousBtnText=""
            >
              <View style={{ flex: 1, paddingTop: 27 }}>
                <ScrollView>
                  <View
                    style={
                      !isUpload ? styles.topContainer1 : styles.topContainer1s
                    }
                  >
                    <View
                      style={
                        isUpload
                          ? { marginBottom: -40, marginTop: 70, width: "100%" }
                          : { width: "100%", marginTop: -40 }
                      }
                    >
                      <HeaderPost
                        rightText="Cancel"
                        onPressIcon={() => navigation.goBack()}
                        title="Post an Item"
                        titleColor={isUpload ? COLORS.black : COLORS.white}
                      />
                    </View>

                    {!isUpload ? (
                      <>
                        <View style={{ marginTop: -35 }}>
                          <Image
                            resizeMode="cover"
                            style={{ width: 200, height: 200 }}
                            source={require("../../assets/images/imagei.png")}
                          />
                        </View>

                        <View style={styles.btnContainer}>
                          <AppButton
                            title="Take Photo"
                            bgColor="transparent"
                            titleColor="#00B0FC"
                            style={{
                              borderWidth: 1,
                              borderColor: "#00B0FC",
                              minWidth: Dimensions.get("window").width - 100,
                              paddingVertical: 10,
                            }}
                            onPress={() => takePhoto()}
                            image={icons.camera}
                          />
                          <AppButton
                            title="Select Photo"
                            image={icons.gallery}
                            bgColor={COLORS.bgs}
                            style={{ paddingVertical: 10 }}
                          />
                          <Text
                            style={{
                              textAlign: "center",
                              fontFamily: FONTS.regular,
                              fontSize: 13,
                              color: COLORS.white,
                              marginTop: 5,
                            }}
                          >
                            Add your cover photo first
                          </Text>
                        </View>
                      </>
                    ) : (
                      <View>
                        <View style={{ marginTop: 70 }}>
                          <View style={{ marginBottom: 25 }}>
                            <ImageInputList imageUris={images} />
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginVertical: 5,
                            }}
                          >
                            <Image
                              resizeMode="contain"
                              style={{ width: 13, height: 13 }}
                              source={require("../../assets/icons/pencil.png")}
                            />
                            <Text
                              style={{
                                fontFamily: FONTS.regular,
                                fontSize: 15,
                                marginLeft: 7,
                              }}
                            >
                              Tap photo to edit
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginVertical: 5,
                            }}
                          >
                            <Image
                              resizeMode="contain"
                              style={{ width: 13, height: 13 }}
                              source={require("../../assets/icons/pencil.png")}
                            />
                            <Text
                              style={{
                                fontFamily: FONTS.regular,
                                fontSize: 15,
                                marginLeft: 7,
                              }}
                            >
                              Tap photo to edit
                            </Text>
                          </View>
                        </View>

                        <LinearGradient
                          style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 100,
                            bottom: 70,
                            zIndex: -1,
                            opacity: 0.2,
                            width: "100%",
                            marginLeft: -80,
                          }}
                          colors={[
                            COLORS.white,
                            COLORS.white,
                            COLORS.white,
                            COLORS.primary,
                          ]}
                        />
                      </View>
                    )}
                  </View>
                  <View style={styles.bottomContainer1}>
                    <Text style={styles.titleText}>Title</Text>
                    <AppTextInput
                      placeholder="For example: Brand, Model, Color & Size"
                      icon={false}
                    />
                    <Text style={styles.titleText}>Description</Text>
                    <AppTextInput
                      placeholder="Items with details description sell faster!"
                      icon={false}
                      numberOfLines={5}
                      height={100}
                    />
                  </View>
                </ScrollView>
              </View>
            </ProgressStep>

            <ProgressStep
              style={{ backgroundColor: COLORS.primary }}
              label="Details"
              nextBtnDisabled
              nextBtnText=""
              previousBtnDisabled
              previousBtnText=""
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.white,
                  paddingTop: 65,
                }}
              >
                <View style={styles.headerSecond}>
                  <TouchableOpacity onPress={onPrevStep}>
                    <MaterialCommunityIcons
                      name="chevron-left"
                      color={COLORS.bgs}
                      size={35}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleTextBig}>Details</Text>
                  <Text style={styles.cancle}>Cancel</Text>
                  <LinearGradient
                    colors={[COLORS.primary, COLORS.secondary]}
                    style={{
                      opacity: 0.1,
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      position: "absolute",
                    }}
                  />
                </View>
                <View style={styles.dropDown}>
                  <DropDown
                    placeholder="Cateory (required)"
                    data={categories}
                    selectedItem={selectedCategory}
                  />
                  <Separator />
                  <DropDown
                    placeholder="Condition (required)"
                    data={categories}
                    selectedItem={selectedCondition}
                  />
                  <Separator />
                  <DropDown
                    placeholder="Brand (optional)"
                    data={categories}
                    selectedItem={selectedBrand}
                  />
                  <Separator />
                  <DropDown
                    placeholder="Model (optional)"
                    data={categories}
                    selectedItem={selectedModel}
                  />
                </View>
              </View>
            </ProgressStep>

            <ProgressStep
              nextBtnDisabled
              nextBtnText=""
              previousBtnDisabled
              previousBtnText=""
              label="Price"
            >
              <View style={{ paddingTop: 55 }}>
                <View style={styles.headerSecond}>
                  <MaterialCommunityIcons
                    name="chevron-left"
                    color={COLORS.bgs}
                    size={35}
                    onPress={onPrevStep}
                  />
                  <Text style={styles.titleTextBig}>Price</Text>
                  <Text onPress={handleCancel} style={styles.cancle}>
                    Cancel
                  </Text>
                </View>

                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/price.png")}
                  style={styles.imageP}
                />

                <View style={styles.rowContainer}>
                  <Text>Firm on price</Text>
                  <Switch
                    active={switchValue}
                    onChange={() => setSwitchValue(!switchValue)}
                  />
                </View>
                <Separator style={{ marginHorizontal: 25, marginTop: -10 }} />
              </View>
            </ProgressStep>
            <ProgressStep label="Finish">
              <View style={{ alignItems: "center" }}>
                <Text>This is the content within step 3!</Text>
              </View>
            </ProgressStep>
            {/* // All your step components should go here */}
          </ProgressSteps>
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              marginHorizontal: 20,
              borderRadius: 10,
              overflow: "hidden",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <AppButtonHorizontal
              gradientStyle={{ borderRadius: 10 }}
              title="Next"
              gradient={true}
              image={false}
              onPress={onNextStep}
            />
          </View>
        </View>
      </View>
    </AppScreen>
  );
};

export default PostItem;
//hide bottom tab bar

const styles = StyleSheet.create({
  bottomContainer1: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  titleText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    marginBottom: 15,
  },
  btnContainer: {
    marginTop: -25,
  },
  imageContainer1: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cameraMain: {
    width: 50,
    height: 50,
    marginTop: 65,
  },
  topContainer1: {
    height: 390,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 35,
  },
  topContainer1s: {
    height: 390,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 35,
  },
  topContainer1Absolute: {
    width: 150,
    height: 150,
    position: "absolute",
    //put it in the center of parent div
    top: 40,
    left: 140,
    right: 0,
    bottom: 0,
    borderRadius: 75,
    opacity: 0.2,
    zIndex: -1,
  },

  //for second step

  headerSecond: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleTextBig: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  cancle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.bgs,
  },
  dropDown: {
    marginHorizontal: 20,
  },

  //third

  imageP: {
    width: Dimensions.get("window").width - 10,
    height: Dimensions.get("window").height / 3,
    alignSelf: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    marginTop: -30,
  },
});
