import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CreditCardDisplay from "react-native-credit-card-display";

const ProductCard = ({ products, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image
          style={{
            height: 100,
            width: 200,
            borderRadius: 10,
            resizeMode: "contain",
          }}
          source={{ uri: products.imgURL }}
        />
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 20,
          }}
        >
          {products.saat}
        </Text>
        <View
          style={{
            positon: "absolute",
            top: 45,
            right: 50,
          }}
        >
          <Text>{products.toplamsure}*</Text>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 25,
            marginTop: 15,
          }}
        >
          {products.price}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 55,
            borderRadius: 15,
            overflow: "hidden",
          }}
          onPress={() => navigation.navigate("BusSelect")}
        >
          <Text
            style={{
              backgroundColor: "green",
              color: "white",
              padding: 10,
            }}
          >
            Satın Al
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentButtonText: {
    color: "purple",
    marginLeft: 80,
    marginTop: 10,
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
