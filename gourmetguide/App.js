import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import SplashScreen from "./components/SplashScreen";

const PlaceholderImage = require("./assets/splashscreen.jpg");

export default function App() {
  return (
    <View>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
});
