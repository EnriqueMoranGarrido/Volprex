import { StyleSheet, Dimensions } from "react-native";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;
const DeviceFontScale = Dimensions.get("window").fontScale;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "2%",
  },
});

export default styles;
