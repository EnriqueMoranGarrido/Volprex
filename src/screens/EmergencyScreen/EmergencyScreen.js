import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import styles from "./styles";
import users from "../../../assets/Data/users";

const doctorImage = users.user.doctor.image;

const EmergencyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: doctorImage }} style={styles.image} />
      </View>
      <Pressable>
        <View style={styles.button}>
          <Text>Holi</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default EmergencyScreen;
