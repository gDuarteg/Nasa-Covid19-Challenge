import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";

import { colors } from "../styles";

import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  console.log("****************** RODEI PAGINA HOME ******************");
  const user = useSelector(state => state.user);

  // function isSingedIn() {
  //   // const response = await api.post("/auth/login", {
  //     //   email: email,
  //     //   password: password
  //     // });
  //   const response = "ok";
  //   if () {}
  // }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        <View>
          <TouchableOpacity
            style={styles.viewButtonMenu}
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <Text style={styles.buttonMenu}>Pedido Rápido</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.viewButtonCommunity}
            onPress={() => {
              Alert.alert("Comunidade");
              // navigation.navigate("Comunidade");
              navigation.navigate("QRScanner");
            }}
          >
            <Text style={styles.buttonCommunity}>Comunidade</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.page
  },
  body: {
    flex: 1
  },
  buttonMenu: {
    color: colors.buttonText,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 30
  },
  viewButtonMenu: {
    backgroundColor: colors.buttonBackgrond,
    width: 300,
    height: 130,
    borderColor: colors.buttonBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 300,
    marginBottom: 50
  },
  buttonCommunity: {
    color: colors.buttonText,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 30
  },
  viewButtonCommunity: {
    backgroundColor: colors.buttonBackgrond,
    borderColor: colors.buttonBorderColor,
    borderWidth: 1,
    width: 300,
    height: 130,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center"
  }
});
