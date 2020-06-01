import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from "react-native";
import styles from "./styles";

import api from "../../../services/api";

export default function Sell({ navigation, route }) {
  item = route.params.item;
  n = route.params.n;
  const [qnt, setQnt] = useState(1);

  useEffect(() => {
    // getItems();
  }, []);

  async function postSell() {
    try {
      const response = await api.api.post("/producer/stock_needs/post", {
        "user": "andre",
        "food": item,
        "selling": qnt
      });
      console.log(response.data);
      Alert.alert(response.data.body);
      // se(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <Text style={styles.itemText}>{item}</Text>

        <TouchableOpacity
          style={styles.plusView}
          onPress={() => {
            setQnt(qnt + 1)
          }}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.qntText}>{qnt}</Text>

        <TouchableOpacity
          style={styles.minusView}
          onPress={() => {
            setQnt(qnt - 1)
          }}
        >
          <Text style={styles.minusText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.sellButton}
        onPress={() => {
          postSell();
        }}
      >
        <Text style={styles.sellText}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
}
