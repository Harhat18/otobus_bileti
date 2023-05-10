import {
  StyleSheet,
  Text,
  View,
  Modal,
  Platform,
  DatePickerIOS,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import RNPickerSelect from "react-native-picker-select";

const cities = [
  { label: "Adana", value: "adana" },
  { label: "Adıyaman", value: "adiyaman" },
  { label: "Afyonkarahisar", value: "afyonkarahisar" },
  { label: "Ağrı", value: "agri" },
  { label: "Amasya", value: "amasya" },
  { label: "Ankara", value: "ankara" },
  { label: "Antalya", value: "antalya" },
  { label: "Artvin", value: "artvin" },
  { label: "Aydın", value: "aydin" },
  { label: "Balıkesir", value: "balikesir" },
  { label: "Bilecik", value: "bilecik" },
  { label: "Bingöl", value: "bingol" },
  { label: "Bitlis", value: "bitlis" },
  { label: "Bolu", value: "bolu" },
  { label: "Burdur", value: "burdur" },
  { label: "Bursa", value: "bursa" },
  { label: "Çanakkale", value: "canakkale" },
  { label: "Çankırı", value: "cankiri" },
  { label: "Çorum", value: "corum" },
  { label: "Denizli", value: "denizli" },
  { label: "Diyarbakır", value: "diyarbakir" },
  { label: "Edirne", value: "edirne" },
  { label: "Elazığ", value: "elazig" },
  { label: "Erzincan", value: "erzincan" },
  { label: "Erzurum", value: "erzurum" },
  { label: "Eskişehir", value: "eskisehir" },
  { label: "Gaziantep", value: "gaziantep" },
  { label: "Giresun", value: "giresun" },
  { label: "Gümüşhane", value: "gumushane" },
  { label: "Hakkari", value: "hakkari" },
  { label: "Hatay", value: "hatay" },
  { label: "Isparta", value: "isparta" },
  { label: "Mersin", value: "mersin" },
  { label: "İstanbul", value: "istanbul" },
  { label: "İzmir", value: "izmir" },
  { label: "Kars", value: "kars" },
  { label: "Kastamonu", value: "kastamonu" },
  { label: "Kayseri", value: "kayseri" },
  { label: "Kırklareli", value: "kirklareli" },
  { label: "Kırşehir", value: "kirsehir" },
  { label: "Kocaeli", value: "kocaeli" },
  { label: "Konya", value: "konya" },
  { label: "Kütahya", value: "kutahya" },
  { label: "Malatya", value: "malatya" },
  { label: "Manisa", value: "manisa" },
  { label: "Kahramanmaraş", value: "kahramanmaras" },
  { label: "Mardin", value: "mardin" },
  { label: "Muğla", value: "mugla" },
  { label: "Muş", value: "mus" },
  { label: "Nevşehir", value: "nevsehir" },
  { label: "Niğde", value: "nigde" },
  { label: "Ordu", value: "ordu" },
  { label: "Rize", value: "rize" },
  { label: "Sakarya", value: "sakarya" },
  { label: "Samsun", value: "samsun" },
  { label: "Siirt", value: "siirt" },
  { label: "Sinop", value: "sinop" },
  { label: "Sivas", value: "sivas" },
  { label: "Tekirdağ", value: "tekirdag" },
  { label: "Tokat", value: "tokat" },
  { label: "Trabzon", value: "trabzon" },
  { label: "Tunceli", value: "tunceli" },
  { label: "Şanlıurfa", value: "sanliurfa" },
  { label: "Uşak", value: "usak" },
  { label: "Van", value: "van" },
  { label: "Yalova", value: "yalova" },
  { label: "Yozgat", value: "yozgat" },
  { label: "Zonguldak", value: "zonguldak" },
  { label: "Aksaray", value: "aksaray" },
  { label: "Bayburt", value: "bayburt" },
  { label: "Karaman", value: "karaman" },
  { label: "Kırıkkale", value: "kirikkale" },
  { label: "Batman", value: "batman" },
  { label: "Şırnak", value: "sirnak" },
  { label: "Bartın", value: "bartin" },
  { label: "Ardahan", value: "ardahan" },
  { label: "Iğdır", value: "igdir" },
  { label: "Yalova", value: "yalova" },
  { label: "Karabük", value: "karabuk" },
  { label: "Kilis", value: "kilis" },
  { label: "Osmaniye", value: "osmaniye" },
  { label: "Düzce", value: "duzce" },
];

const HomeScreen = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCity2, setSelectedCity2] = useState("");
  const [selectedCityValue, setSelectedCityValue] = useState(null);
  const [selectedCityValue2, setSelectedCityValue2] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleCityChange = (value, index) => {
    setSelectedCity(value);
    setSelectedCityValue(cities[index - 1].value);
  };

  const handleCityChange2 = (value, index) => {
    setSelectedCity2(value);
    setSelectedCityValue2(cities[index - 1].value);
  };

  const showDatePicker = async () => {
    if (Platform.OS === "ios") {
      setModalVisible(true);
    } else if (Platform.OS === "android") {
      try {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: date,
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          const newDate = new Date(year, month, day);
          setDate(newDate);
        }
      } catch ({ code, message }) {
        console.warn("Cannot open date picker", message);
      }
    }
  };

  const handleDonePress = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 120,
          left: 40,
        }}
      >
        <Text
          style={{
            fontSize: 55,
            fontWeight: "bold",
            color: "white",
          }}
        >
          OTOBÜS BİLETİ
        </Text>
      </View>
      <View>
        <Text
          style={{
            position: "absolute",
            top: 200,
            left: 150,
            color: "white",
            fontSize: 30,
          }}
        >
          Nereden?
        </Text>
        <View
          style={{
            position: "absolute",
            top: 250,
            left: 110,
            backgroundColor: "#F0F0F0",
            width: 200,
            height: 40,
            borderRadius: 15,
          }}
        >
          <RNPickerSelect
            onValueChange={handleCityChange}
            placeholder={{ label: "İl Seçiniz...", value: null }}
            items={cities}
            value={selectedCity}
            doneText="Seç"
            style={{
              inputIOS: {
                color: "black", // yazı rengi
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 10,
              },
              placeholder: {
                color: "gray", // placeholder rengi
              },
            }}
          />
        </View>
        <Text
          style={{
            position: "absolute",
            top: 310,
            left: 150,
            color: "white",
            fontSize: 30,
          }}
        >
          Nereye?
        </Text>
        <View
          style={{
            position: "absolute",
            top: 360,
            left: 110,
            width: 200,
            height: 40,
            backgroundColor: "#F0F0F0",
            borderRadius: 15,
          }}
        >
          <RNPickerSelect
            onValueChange={handleCityChange2}
            placeholder={{ label: "İl Seçiniz...", value: null }}
            items={cities}
            value={selectedCity2}
            doneText="Seç"
            style={{
              inputIOS: {
                color: "black", // yazı rengi
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 10,
              },
              placeholder: {
                color: "gray", // placeholder rengi
              },
            }}
          />
        </View>
      </View>
      <Text
        style={{
          position: "absolute",
          top: 430,
          left: 140,
          color: "white",
          fontSize: 30,
        }}
      >
        Ne Zaman?
      </Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          value={date.toLocaleDateString()}
          onFocus={showDatePicker}
        />
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.picker}>
              <DatePickerIOS
                mode="date"
                date={date}
                onDateChange={handleDateChange}
              />
              <Button title="Done" onPress={handleDonePress} />
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 150,
          left: 90,
          overflow: "hidden",
          borderRadius: 25, // to ensure the border radius is applied correctly
        }}
        onPress={() =>
          navigation.navigate("Details", {
            selectedCity,
            selectedCity2,
            selectedCityValue,
            selectedCityValue2,
          })
        }
      >
        <Text
          style={{
            backgroundColor: "white",
            color: "blue",
            padding: 15,
            width: 250,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            // set the border radius on the Text component
          }}
        >
          Otobüs Bileti Bul
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  input: {
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "#F0F0F0",
    color: "gray",
    width: 200,
    height: 40,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  picker: {
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 490,
    left: 110,
  },
});
