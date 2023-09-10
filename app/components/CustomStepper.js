import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomStepper = ({
  steps = [],
  activeStep = 0,
  onComplete = () => {},
  nextButtonTitle = "Next",
  stepColors = {
    active: "blue",
    completed: "green",
    inactive: "gray",
  },
  stepIcons = {
    active: "numeric",
    completed: "check",
    inactive: "numeric",
  },
  stepTitleColors = {
    active: "black",
    completed: "green",
    inactive: "black",
  },
  nextButtonStyles = {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  progressBarStyles = {
    container: {
      flex: 1,
      height: 2,
      backgroundColor: "gray",
      marginHorizontal: 8,
    },
    bar: {
      height: "100%",
      backgroundColor: "blue",
    },
  },
}) => {
  const [currentStep, setCurrentStep] = useState(activeStep);

  const barWidth = new Animated.Value(0);

  useEffect(() => {
    setCurrentStep(activeStep);
    animateBar();
  }, [activeStep]);

  const animateBar = () => {
    Animated.timing(barWidth, {
      toValue: (currentStep / (steps.length - 1)) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      animateBar();
    } else {
      onComplete();
    }
  };

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <StepIndicator
            stepNumber={index + 1}
            isCompleted={index < currentStep}
            isActive={index === currentStep}
            stepColors={stepColors}
            stepIcons={stepIcons}
            stepTitleColors={stepTitleColors}
          />
          <Text style={styles.stepTitle}>{step}</Text>
        </View>
      ))}
      <View style={[styles.progressBarContainer, progressBarStyles.container]}>
        <Animated.View
          style={[
            styles.progressBar,
            progressBarStyles.bar,
            {
              width: `${barWidth}%`,
            },
          ]}
        />
      </View>
      <TouchableOpacity
        style={[styles.nextButton, nextButtonStyles]}
        onPress={handleNext}
        disabled={currentStep === steps.length}
      >
        <Text style={styles.nextButtonText}>
          {currentStep === steps.length ? "Completed" : nextButtonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const StepIndicator = ({ stepNumber, isCompleted, isActive }) => {
  return (
    <View
      style={[
        styles.stepIndicator,
        {
          backgroundColor: isActive
            ? "blue" // Active step color
            : isCompleted
            ? "green" // Completed step color
            : "gray", // Inactive step color
        },
      ]}
    >
      {isCompleted ? (
        <MaterialCommunityIcons name="check" size={24} color="white" />
      ) : (
        <Text style={styles.stepNumber}>{stepNumber}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  stepContainer: {
    alignItems: "center",
  },
  stepIndicator: {
    backgroundColor: "blue",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  stepTitle: {
    fontSize: 12,
    textAlign: "center",
  },
  progressBarContainer: {
    flex: 1,
    height: 2,
    backgroundColor: "gray",
    marginHorizontal: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "blue", // Progress bar color
  },
  nextButton: {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomStepper;
