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
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <Image
              source={require("../../../assets/Data/yo.jpg")}
              style={styles.profileImage}
            />
          )}
        </LinearGradient>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{information.name}</Text>
        {information.hospital ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Email</Text>
            <Text style={styles.info}>{information.email}</Text>
          </View>
        ) : null}
        {information.email ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Email</Text>
            <Text style={styles.info}>{information.email}</Text>
          </View>
        ) : null}

        {information.phone ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Phone number</Text>
            <Text style={styles.info}>{information.phone}</Text>
          </View>
        ) : null}

        {information.insurance ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Insurance Policy</Text>
            <Text style={styles.info}>{information.insurance}</Text>
          </View>
        ) : null}

        {information.age ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Age</Text>
            <Text style={styles.info}>{information.age}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default UserComponent;
