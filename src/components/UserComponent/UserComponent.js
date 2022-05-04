import { Button, Image, View, Platform, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

const UserComponent = ({ information }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onPress = () => {
    pickImage();
  };
  return (
    <View>
      <Pressable onPress={onPress}>
        <LinearGradient
          style={styles.imageContainer}
          colors={["#e8586b", "#49a6b3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          useAngle={true}
          angle={250}
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          {image && (
            <Image
              source={{
                uri: image == undefined ? DEFAULT_IMAGE : image,
              }}
              style={styles.profileImage}
            />
          )}
        </LinearGradient>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{information.name}</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>Email</Text>
          <Text style={styles.email}>{information.email}</Text>
        </View>
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneText}>Phone number</Text>
          <Text style={styles.phone}>{information.phone}</Text>
        </View>
        <View style={styles.insuranceContainer}>
          <Text style={styles.insuranceText}>Insurance Policy</Text>
          <Text style={styles.insurance}>{information.insurance}</Text>
        </View>
        <View style={styles.ageContainer}>
          <Text style={styles.ageText}>Age</Text>
          <Text style={styles.age}>{information.age}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserComponent;
