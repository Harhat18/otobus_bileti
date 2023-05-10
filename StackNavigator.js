import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen/RegisterScreen";
import FirstScreen from "./src/Screens/FirstScreen/FirstScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import DetailsScreen from "./src/Screens/DetailsScreen";
import LottieScreen from "./src/Screens/LottieScreen/LottieScreen";
import SelectScreen from "./src/Screens/SelectScreen/SelectScreen";
import ProductCard from "./src/components/ProductCard";
import SelectLayout from "./src/Screens/BusSelectLayoutScreen/SelectLayout";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Lottie"
          component={LottieScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Select"
          component={SelectScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="Card"
          component={ProductCard}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
        <Stack.Screen
          name="BusSelect"
          component={SelectLayout}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#E86A33",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
