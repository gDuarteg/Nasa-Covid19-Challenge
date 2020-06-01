import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from "react-native";

import styles from "./styles";

import api from "../../../services/api";

export default function Mapa({ navigation }) {
  const [items, setItems] = useState([
    "INFORMACAO 1",
    "INFORMACAO 2",
    "INFORMACAO 3",
    "INFORMACAO 4"
  ]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const response = await api.api.post("/producer/map_areas", {
        user: "andre"
      });
      console.log(JSON.parse(response.data.body));
      setItems(JSON.parse(response.data.body));
    } catch (error) {
      console.log(error);
    }
  }

  function itemView(info) {
    return (
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => {
          navigation.navigate("details", { info: info });
        }}
      >
        <Text style={styles.itemText}>{info}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({ item: rowData, index }) => {
            return <View>{itemView(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
