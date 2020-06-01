import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import styles from "./styles";

import api from "../../../services/api";
// import { useSelector } from "react-redux";

export default function Supply({ navigation }) {
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
      const response = await api.api.post("/producer/stock", {
        "user": "andre"
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
      // onPress={() => {
      //   navigation.navigate("details", { info: info });
      // }}
      >
        <Text style={styles.itemText}>{info}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({ item: rowData, index }) => {
            return <View>{itemView(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        /> */}

        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Coconut: {items["coconut"]}</Text>
        </View>

        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Tomato: {items["tomato"]}</Text>
        </View>

      </View>
    </View>
  );
}
