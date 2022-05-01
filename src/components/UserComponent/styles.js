import { StyleSheet, Dimensions } from "react-native";

const DeviceHeight = Dimensions.get("window").height;

const DeviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: {
    width: DeviceWidth,
    height: DeviceHeight / 2,
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
    fontSize: 25,
    fontWeight: "bold",
  },
  emailContainer: {
    marginVertical: 10,
  },
  emailText: {
    color: "grey",
  },
  email: {
    fontSize: 17,
  },
  phoneContainer: {
    marginVertical: 10,
  },
  phoneText: {
    color: "grey",
  },
  phone: {
    fontSize: 17,
  },
  insuranceContainer: {
    marginVertical: 10,
  },
  insuranceText: {
    color: "grey",
  },
  insurance: {
    fontSize: 17,
  },
  ageContainer: {
    marginVertical: 10,
  },
  ageText: {
    color: "grey",
  },
  age: {
    fontSize: 17,
  },
});

export default styles;
