import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import pins from "../../../assets/Data/pins";
import NewsComponent from "../../components/NewsComponent";

const NewsScreen = () => {
  return (
    <SafeAreaView style={{ width: "95%" }}>
      <FlatList
        data={pins}
        renderItem={({ item }) => <NewsComponent news={item} />}
        initialScrollIndex={0}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NewsScreen;
