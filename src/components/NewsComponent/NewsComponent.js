import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import pins from "../../../assets/Data/pins";

const NewsComponent = (props) => {
  const news = props.news;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: news.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date} numberOfLines={1}>
          {news.date}
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {news.title}
        </Text>
        <Text style={styles.text} numberOfLines={2}>
          {news.text}
        </Text>
      </View>
    </View>
  );
};

export default NewsComponent;
