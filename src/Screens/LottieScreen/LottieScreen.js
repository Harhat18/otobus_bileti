import React, { useEffect } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const LottieScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Details");
    }, 2500);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#E86A33" }}>
      <LottieView
        source={require("../../../assets/lottie.json")}
        autoPlay
        loop
      />
      <Text
        style={{
          position: "absolute",
          top: 600,
          left: 80,
          fontSize: 30,
          color: "white",
          fontWeight: "bold",
        }}
      >
        EN UYGUN FİYATLAR
        <Text style={{}}></Text>
      </Text>
    </View>
  );
};

export default LottieScreen;
