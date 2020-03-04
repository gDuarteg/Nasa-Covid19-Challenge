/* eslint-disable prettier/prettier */
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

export default function Home({ route, navigation }) {
  const { token } = route.params;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Bytes</Text>
        </View>

        <View style={styles.viewConfig}>
          <TouchableOpacity
            style={styles.buttonConfig}
            onPress={() => Alert.alert("Ir Para Config")}
          >
            <Image
              style={styles.imgConfig}
              source={require("./images/config.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonNav}
            onPress={() => Alert.alert("Abrir NavBar")}
          >
            <Image style={styles.imgNav} source={require("./images/nav.png")} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => {
              navigation.navigate("Menu", { token: token });
            }}
          >
            <Text style={styles.button}>Iniciar Pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 49,
    flex: 1,
    backgroundColor: "steelblue"
  },
  title: {
    position: "absolute",
    fontSize: 56,
    fontFamily: "Roboto",
    alignSelf: "center",
    fontWeight: "bold"
  },
  body: {
    flex: 1
  },
  button: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 30
  },
  viewButton: {
    backgroundColor: "black",
    width: 300,
    height: 130,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 300,
    marginBottom: 50
  },
  imgConfig: {
    height: 40,
    width: 40
  },
  buttonConfig: {
    position: "absolute",
    marginTop: 20
  },
  viewConfig: {
    alignItems: "flex-end",
    marginRight: 15
  },
  imgNav: {
    height: 40,
    width: 40
  },
  buttonNav: {
    alignItems: "flex-start",
    marginLeft: 15,
    width: 40,
    marginTop: 20
  }
});
