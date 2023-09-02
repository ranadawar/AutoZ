import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CustomSwitch = ({ primaryColor, onValueChange, value }) => {
  const [isSelected, setIsSelected] = useState(value);

  const toggleSwitch = () => {
    setIsSelected(!isSelected);
    onValueChange && onValueChange(!isSelected);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "transparent", true: primaryColor }}
        thumbColor={isSelected ? "white" : "white"}
        ios_backgroundColor="transparent"
        onValueChange={toggleSwitch}
        value={isSelected}
      />
    </View>
  );
};

CustomSwitch.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  value: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default CustomSwitch;
