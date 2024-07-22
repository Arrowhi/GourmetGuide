import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Image,
} from "react-native";
import CustomText from "./CustomText";

const SignupScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Create an account</CustomText>
      <CustomText style={styles.subtitle}>
        Let's help you set up your account, {"\n"}it won't take long.
      </CustomText>
      <CustomText style={styles.text}>Name</CustomText>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <CustomText style={styles.text}>Email</CustomText>
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <CustomText style={styles.text}>Password</CustomText>
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <CustomText style={styles.text}>Confirm Password</CustomText>
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          tintColors={{ true: "#FF9C00", false: "#FF9C00" }}
        />
        <CustomText style={styles.label}>Accept terms & Conditions</CustomText>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <CustomText style={styles.buttonText}>Sign Up</CustomText>
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
        Already a member?{" "}
        <CustomText
          style={styles.link}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </CustomText>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    marginLeft: 8,
    color: "#FF9C00",
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
    color: "#888",
  },
  link: {
    color: "#FF9C00",
    fontWeight: "bold",
  },
});

export default SignupScreen;
