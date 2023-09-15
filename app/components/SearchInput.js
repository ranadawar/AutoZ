import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, icons } from "../constants/theme";

const SearchInput = ({
  value,
  onSearch,
  onValueChange,
  placeholder = "Search Items for Sale",
  ...otherProps
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={COLORS.text}
        onChangeText={onValueChange}
        {...otherProps}
      />
      <Image resizeMode="contain" style={styles.image} source={icons.search} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginRight: 40,
    marginVertical: 10,
    padding: 6,
    paddingHorizontal: 17,
    backgroundColor: COLORS.white,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: "#019EF3",
  },
});
