import React from "react";
import { Text } from "react-native";

const CustomText = ({ style, children, fontStyle = "regular", onPress }) => {
  const fontFamilyMap = {
    thin: "Poppins_100Thin",
    extraLight: "Poppins_200ExtraLight",
    light: "Poppins_300Light",
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semiBold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
    extraBold: "Poppins_800ExtraBold",
    black: "Poppins_900Black",
    italic: "Poppins_400Regular_Italic",
  };

  const fontFamily = fontFamilyMap[fontStyle] || fontFamilyMap.regular;

  return (
    <Text style={[style, { fontFamily }]} onPress={onPress}>
      {children}
    </Text>
  );
};

export default CustomText;
