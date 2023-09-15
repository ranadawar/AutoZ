import { COLORS } from "../constants/theme";

const AppGradientHorizontal = ({
  primary = COLORS.secondary,
  secondary = COLORS.primary,
  style,
}) => {
  return (
    <LinearGradient
      style={[styles.absolute, style]}
      colors={[primary, secondary]}
      start={{ x: 0, y: 0 }} // Adjust the values as needed
      end={{ x: 1, y: 0 }} // This will create a horizontal gradient
    />
  );
};

export default AppGradientHorizontal;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
});
