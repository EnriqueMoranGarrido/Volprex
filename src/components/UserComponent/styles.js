import { StyleSheet, Dimensions } from "react-native";

const DeviceHeight = Dimensions.get("window").height;

const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: {
    width: DeviceWidth,
    height: DeviceHeight / 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: DeviceWidth,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
  },
  textContainer: {
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  name: {
    letterSpacing: 2,
    fontSize: 25,
    fontWeight: "bold",
  },
  infoText: {
    letterSpacing: 1,
    color: "grey",
  },
  info: {
    letterSpacing: 1,
    fontSize: 17,
  },
  infoContainer: {
    marginVertical: 10,
  },
});

export default styles;
