import React from "react";
import {
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  console.log("****************** RODEI PAGINA HOME ******************");
  // const user = useSelector(state => state.user);

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <View>
          <Text>Fazer lista de produtos </Text>
          {/* <TouchableOpacity
            style={styles.viewButtonMenu}
            onPress={() => {
              navigation.navigate("Menu");
            }}
          >
            <Text style={styles.buttonMenu}>Pedido Rápido</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
