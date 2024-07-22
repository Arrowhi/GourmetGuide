import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";

const GeneralButton = ({ icon, title, width, marginVertical, onPress }) => (
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
      onPress={onPress}
    />
  </View>
);

export default GeneralButton;
