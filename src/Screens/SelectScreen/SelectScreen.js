import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CreditCardDisplay from "react-native-credit-card-display";

const SelectScreen = () => {
  return (
    <View>
      <CreditCardDisplay
        number={4242424242424242}
        cvc={123}
        expiration="04/21"
        name="John J. Doe"
        since="2004"
      />
    </View>
  );
};

export default SelectScreen;

const styles = StyleSheet.create({});
