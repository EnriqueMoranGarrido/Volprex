import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../src/screens/ProfileScreen";
import NewsScreen from "../src/screens/NewsScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="News" component={NewsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigation;
