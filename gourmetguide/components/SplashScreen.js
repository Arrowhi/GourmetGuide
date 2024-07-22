import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import GeneralButton from "./GeneralButton";
import CustomText from "./CustomText"; // Import CustomText component

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splashscreen.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <Image
          source={require("../assets/splashIcon.png")}
          style={styles.icon}
        />

        <CustomText
          style={styles.titleText}
          fontStyle="semiBold" // Choose the desired font style for the title
        >
          Gourmet {"\n"}Guide
        </CustomText>
        <CustomText
          style={styles.text}
          fontStyle="regular" // Choose the desired font style for the title
        >
          One Click To Tasty!!!
        </CustomText>

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
          onPress={() => navigation.navigate("SignUp")} // Navigate to SignUp screen
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center", // Center content vertically
  },

  titleText: {
    marginTop: 100,
    color: "white", // Ensure text is visible
    fontSize: 55,
    textAlign: "center", // Center text horizontally
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginTop: 10,
    padding: 10,
  },
});

export default SplashScreen;
