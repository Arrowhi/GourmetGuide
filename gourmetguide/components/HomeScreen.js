import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CustomText from "./CustomText"; // Assuming you have this component

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Welcome to GourmetGuide</CustomText>
      <CustomText style={styles.subtitle}>
        Your Guide to Delicious Dining!
      </CustomText>
      <CustomText style={styles.description}>
        Explore a variety of restaurants, check reviews, and discover new places
        to eat.
      </CustomText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <CustomText style={styles.buttonText}>Go to Profile</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <CustomText style={styles.buttonText}>Logout</CustomText>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#129575",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default HomeScreen;
