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

import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  console.log("****************** RODEI PAGINA HOME ******************");
  const user = useSelector(state => state.user);
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
              // navigation.navigate("Menu");
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
  buttonMenu: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 30
  },
  viewButtonMenu: {
    backgroundColor: "black",
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
