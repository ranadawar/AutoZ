import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import CustomStepper from "../components/CustomStepper";
const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const Testing = () => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <CustomStepper
          steps={steps}
          activeStep={0}
          onComplete={() => alert("Stepper completed")}
          stepColor="blue"
          completedStepColor="green"
          stepIcon="numeric"
          completedStepIcon="check"
          stepTitleColor="black"
          completedStepTitleColor="green"
          nextButtonTitle="Next"
          nextButtonColor="blue"
        />
      </View>
    </AppScreen>
  );
};

export default Testing;

const styles = StyleSheet.create({});
