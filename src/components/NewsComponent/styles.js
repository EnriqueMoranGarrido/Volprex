import { StyleSheet, Dimensions } from "react-native";

const DeviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginBottom: "4%",
    width: "100%",
    height: DeviceHeight / 3,
    backgroundColor: "#f2eeed",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageContainer: {
    height: DeviceHeight / 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    marginTop: "2%",
    marginHorizontal: "2%",
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#a10d21",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    marginTop: "1%",
  },
});

export default styles;
