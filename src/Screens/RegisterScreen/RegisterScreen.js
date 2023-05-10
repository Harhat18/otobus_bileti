import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

const RegisterScreen = ({ navigation }) => {
  function showSuccessMessage() {
    showMessage({
      message: "Kayıt başarılı!",
      type: "success",
      icon: "success",
      duration: 1500,
    });
  }

  const [data, setData] = useState("");
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Geçerli bir email giriniz")
      .required("Email alanı zorunludur"),
    password: Yup.string()
      .required("Şifre alanı zorunludur")
      .min(6, "Şifreniz en az 6 karakter olmalıdır"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Şifreler uyuşmuyor")
      .required("Şifre tekrar alanı zorunludur"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setData(values);
          console.log(data);
          setTimeout(() => {
            navigation.navigate("Login", { data });
          }, 1500);
          Toast.show({
            type: "success",
            text1: "Kayıt Başarılı",
          });
        }}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (
          <>
            <View style={styles.background}>
              <Text style={styles.text}>OTOBÜS BİLETİ</Text>
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={27} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
              />
            </View>
            {errors.email && touched.email && (
              <Text style={styles.errorText1}>{errors.email}</Text>
            )}
            <View style={styles.inputContainer2}>
              <Foundation name="key" size={30} color="black" />
              <TextInput
                style={styles.input2}
                placeholder="Şifre"
                placeholderTextColor="black"
                onChangeText={handleChange("password")}
                secureTextEntry
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorText2}>{errors.password}</Text>
            )}
            <View style={styles.inputContainer3}>
              <Foundation name="key" size={30} color="black" />
              <TextInput
                style={styles.input3}
                placeholder="Şifre Tekrar"
                placeholderTextColor="black"
                onChangeText={handleChange("confirmPassword")}
                secureTextEntry
              />
            </View>
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText3}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 174,
                left: 100,
                overflow: "hidden",
                borderRadius: 25,
              }}
              onPress={handleSubmit}
            >
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
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Toast />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  background: {
    backgroundColor: "blue",
    height: "20%",
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
    right: 50,
    top: 70,
  },
  text2: {
    position: "absolute",
    right: 10,
    bottom: 20,
    fontSize: 15,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 400,
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
    fontSize: 12,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 320,
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
  inputContainer3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 240,
    left: 20,
  },
  input3: {
    backgroundColor: "white",
    padding: 15,
    width: 321,
    height: 50,
    marginLeft: 15,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  errorText1: {
    position: "absolute",
    top: 200,
    left: 18,
    color: "red",
  },
  errorText2: {
    position: "absolute",
    top: 220,
    left: 18,
    color: "red",
  },
  errorText3: {
    position: "absolute",
    top: 240,
    left: 18,
    color: "red",
  },
});
