import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import bus_data from "../../../data.json";
import ProductCard from "../../components/ProductCard";

const DetailsScreen = ({ navigation }) => {
  const renderBus = ({ item }) => (
    <ProductCard products={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bus_data}
        renderItem={renderBus}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
