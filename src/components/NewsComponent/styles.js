import { StyleSheet, Dimensions } from "react-native";

const DeviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginBottom: "4%",
    width: "100%",
    height: DeviceHeight / 3.5,
    backgroundColor: "#f2eeed",
    borderRadius: 20,
    shadowColor: "#a10d21",
    shadowOffset: {
      width: 10,
      height: 50,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  imageContainer: {
    height: DeviceHeight / 6.6,
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
