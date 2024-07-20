import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "@rneui/themed";
const GeneralButton = ({ icon, title, width, marginVertical }) => (
  <View style={{ marginTop: "auto", marginBottom: marginVertical }}>
    <Button
      title={title}
      icon={icon}
      iconRight
      iconContainerStyle={{ marginLeft: 10 }}
      titleStyle={{ fontWeight: "700", fontSize: 20 }}
      buttonStyle={{
        backgroundColor: "#129575",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        padding: 15,
        width: width,
      }}
      containerStyle={{
        marginHorizontal: 50,
        marginVertical: 10,
      }}
    />
  </View>
);

export default GeneralButton;
