import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";
import NewsScreen from "./src/screens/NewsScreen/NewsScreen";
import EmergencyScreen from "./src/screens/EmergencyScreen/EmergencyScreen";
import { SafeAreaView } from "react-native-safe-area-context";

import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
