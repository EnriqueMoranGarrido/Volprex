import { StyleSheet, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    height: Height / 3,
    aspectRatio: 3 / 3,
    borderRadius: 500,
  },
  button: {
    width: "40%",
    backgroundColor: "red",
  },
});

export default styles;
