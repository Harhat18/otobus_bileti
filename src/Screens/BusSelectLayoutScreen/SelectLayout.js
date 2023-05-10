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
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import CreditCardDisplay from "react-native-credit-card-display";

const SelectLayout = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    number: "",
    cvc: "",
    expiration: "",
    name: "",
    since: "",
  });
  const [selected, setSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleChange = (key, value) => {
    setCreditCardInfo({ ...creditCardInfo, [key]: value });
  };

  const handleBuyPress = () => {
    setIsModalVisible(true);
  };

  const handlePaymentSuccess = () => {
    setIsModalVisible(false);
    // Ödeme işlemi başarılı olduğunda yapılacak işlemler
  };

  return (
    <View>
      <View
        style={{
          height: "75%",
        }}
      >
        <SeatsLayout
          row={7}
          layout={{ columnOne: 2, columnTwo: 1 }}
          selectedSeats={[
            { seatNumber: 1, seatType: "booked" },
            { seatNumber: 11, seatType: "women" },
            { seatNumber: 17, seatType: "women" },
            { seatNumber: 43, seatType: "blocked" },
          ]}
          numberTextStyle={{ fontSize: 12 }}
          getBookedSeats={(seats) => {
            console.log("getBookedSeats :: ", seats);
            setSelected(seats);
            const price = seats.length * 200; // Calculate price based on number of seats
            setTotalPrice(price);
          }}
        />
      </View>
      <View>
        {selected.length > 0 && (
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Seçilen koltuklar: {selected.map((item) => item.seatNo).join(", ")}
          </Text>
        )}
        <Text
          style={{
            position: "absolute",
            left: 10,
            top: 50,
            fontSize: 25,
          }}
        >
          Toplam fiyat : {totalPrice} TL
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 120,
            left: 126,
            overflow: "hidden",
            borderRadius: 15,
          }}
          onPress={() => setIsModalVisible(true)}
        >
          <Text
            style={{
              fontSize: 25,
              backgroundColor: "#E86A33",
              color: "white",
              padding: 10,
            }}
          >
            Ödemeye Geç
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text style={styles.modalHeader}>Ödeme Bilgileri</Text>
            <CreditCardDisplay
              number={creditCardInfo.number}
              cvc={creditCardInfo.cvc}
              expiration={creditCardInfo.expiration}
              name={creditCardInfo.name}
              since={creditCardInfo.since}
            />

            <TextInput
              placeholder="Kart Numarası"
              placeholderTextColor="black"
              value={creditCardInfo.number}
              onChangeText={(value) => handleChange("number", value)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="CVC"
              placeholderTextColor="black"
              value={creditCardInfo.cvc}
              onChangeText={(value) => handleChange("cvc", value)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Ay/Yıl"
              placeholderTextColor="black"
              value={creditCardInfo.expiration}
              onChangeText={(value) => handleChange("expiration", value)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="İsim Soyisim"
              placeholderTextColor="black"
              value={creditCardInfo.name}
              onChangeText={(value) => handleChange("name", value)}
              style={styles.textInput}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                Alert.alert("Ödeme Başarılı!", "İyi Yolculuklar Dileriz. 👋", [
                  {
                    text: "Tamam",
                    onPress: () => {
                      setIsModalVisible(false);
                      navigation.navigate("Home");
                    },
                  },
                ]);
              }}
            >
              <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectLayout;

const styles = StyleSheet.create({
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
