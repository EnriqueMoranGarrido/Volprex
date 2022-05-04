import { View, Text } from "react-native";
import React from "react";

import UserComponent from "../../components/UserComponent";
import users from "../../../assets/Data/users";

const information = users.user.personal;

const ProfileScreen = () => {
  return (
    <View>
      <UserComponent information={information} />
    </View>
  );
};

export default ProfileScreen;
