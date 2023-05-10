import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          color: "white",
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        OTOBÜS BİLETİ
      </Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
