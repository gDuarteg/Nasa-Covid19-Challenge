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
        {/* <View>
          <Text style={styles.title}>Bytes</Text>
        </View> */}
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
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 300,
    marginBottom: 50
  },
  buttonCommunity: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 30
  },
  viewButtonCommunity: {
    backgroundColor: "black",
    width: 300,
    height: 130,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center"
  }
});
