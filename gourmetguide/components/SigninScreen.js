import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CustomText from "./CustomText";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Hello,</CustomText>
      <CustomText style={styles.subtitle}>Welcome Back!</CustomText>
      <CustomText style={styles.text}>Email</CustomText>
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <CustomText style={styles.text}>Enter Password</CustomText>
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity>
        <CustomText style={styles.forgotPassword}>Forgot Password?</CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <CustomText style={styles.buttonText}>Sign In</CustomText>
      </TouchableOpacity>
      <CustomText style={styles.orText}>
        ---------- Or Sign in With ----------
      </CustomText>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Google.jpg")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/Facebook.jpg")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <CustomText style={styles.footerText}>
        Don't have an account?{" "}
        <TouchableOpacity>
          <CustomText
            style={styles.link}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up
          </CustomText>
        </TouchableOpacity>
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 20,
  },
  text: {
    textAlign: "left",
    color: "#000000",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#129575",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "#000000",
  },
  link: {
    color: "#FF9C00",
    fontWeight: "bold",
  },
  forgotPassword: {
    textAlign: "left",
    color: "#FF9C00",
    marginBottom: 20,
  },
});

export default SigninScreen;
