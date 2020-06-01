import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import styles from "./styles";

import api from "../../../services/api";
// import { useSelector } from "react-redux";

// { "Arroz": 10 },
// { "Mandioca": 15 },
// { "Alface": 20 },
// { "Tomate": 30 }

export default function Home({ navigation }) {
  const [items, setItems] = useState([
    "Arroz",
    "Mandioca",
    "Tomate",
    "Alface"
  ]);

  useEffect(() => {
    getItems();
  }, []);
  // useEffect(() => {
  //   console.log("AAAAAAAAA" + Object.keys(items[]));
  // }, [items]);

  async function getItems() {
    try {
      const response = await api.api.post("/producer/stock_needs/get", {
        //
      });
      console.log(JSON.parse(response.data.body))
      setItems(JSON.parse(response.data.body));
    } catch (error) {
      console.log(error);
    }
  }

  function itemView(item) {
    const name = Object.keys(items);
    // const value = items.name;
    console.log(name);
    return (
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => {
          navigation.navigate("sell", { item: name });
        }}
      >
        <Text style={styles.itemText}>{name}</Text>
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


        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("sell", { item: "banana", n: items["banana"] });
          }}
        >
          <Text style={styles.itemText}>Banana {items["banana"]}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => {
            navigation.navigate("sell", { item: "tomato", n: items["tomato"] });
          }}
        >
          <Text style={styles.itemText}>Tomato {items["tomato"]}</Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}
