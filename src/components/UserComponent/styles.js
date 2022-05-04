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
  emailContainer: {
    marginVertical: 10,
  },
  emailText: {
    letterSpacing: 1,
    color: "grey",
  },
  email: {
    letterSpacing: 1,
    fontSize: 17,
  },
  phoneContainer: {
    marginVertical: 10,
  },
  phoneText: {
    letterSpacing: 1,
    color: "grey",
  },
  phone: {
    letterSpacing: 1,
    fontSize: 17,
  },
  insuranceContainer: {
    marginVertical: 10,
  },
  insuranceText: {
    letterSpacing: 1,
    color: "grey",
  },
  insurance: {
    letterSpacing: 1,
    fontSize: 17,
  },
  ageContainer: {
    marginVertical: 10,
  },
  ageText: {
    letterSpacing: 1,
    color: "grey",
  },
  age: {
    letterSpacing: 1,
    fontSize: 17,
  },
});

export default styles;
