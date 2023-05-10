import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);

        // Save the user's email and password to AsyncStorage
        AsyncStorage.setItem("email", email);
        AsyncStorage.setItem("password", password);

        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Kullanıcı adı veya şifre hatalı");
      });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.text}>OTOBÜS BİLETİ</Text>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={25} color="black" />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.inputContainer2}>
        <Foundation name="key" size={25} color="black" />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.input2}
          placeholder="Şifre"
          placeholderTextColor="black"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 174,
          left: 100,
          overflow: "hidden",
          borderRadius: 25,
        }}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator
            style={{
              backgroundColor: "red",
              padding: 10,
              width: 200,
              textAlign: "center",
            }}
            size="large"
            color="#FFFFFF"
          />
        ) : (
          <Text
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: 15,
              width: 200,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Giriş Yap
          </Text>
        )}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          left: 100,
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Hesabınız yok mu?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginLeft: 10,
              color: "red",
              fontWeight: "bold",
            }}
          >
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  background: {
    backgroundColor: "blue",
    height: "40%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 55,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 140,
  },
  text2: {
    position: "absolute",
    right: 10,
    bottom: 20,
    fontSize: 25,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 350,
    left: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    width: 321,
    height: 50,
    marginLeft: 15,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 275,
    left: 20,
  },
  input2: {
    backgroundColor: "white",
    padding: 15,
    width: 321,
    height: 50,
    marginLeft: 15,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
});
