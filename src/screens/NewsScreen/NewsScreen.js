import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import news from "../../../assets/Data/news";
import NewsComponent from "../../components/NewsComponent";

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsComponent news={item} />}
        initialScrollIndex={0}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsScreen;
