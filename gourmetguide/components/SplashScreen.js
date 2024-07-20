import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import GeneralButton from "./GeneralButton";

const SplashScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/splashscreen.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          filter: "brightness(0.9)",
        }}
      >
        <Image
          source={require("../assets/splashIcon.png")}
          style={{ marginTop: 59 }}
        />
        <Image
          source={require("../assets/titleText.png")}
          style={{ marginTop: 150 }}
        />

        <GeneralButton
          title="Get Started"
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          width={200}
          marginVertical={60}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default SplashScreen;
