import { View, Text } from "react-native";
import React from "react";
import UserComponent from "../../components/UserComponent";

import users from "../../../assets/Data/users";

const ProfileScreen = () => {
  const myUser = users.user.personal;
  return (
    <View>
      <UserComponent information={myUser} />
    </View>
  );
};

export default ProfileScreen;
