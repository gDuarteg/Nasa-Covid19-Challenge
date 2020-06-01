import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList, Image } from "react-native";
import styles from "./styles";
import api from "../../../services/api";

import { useSelector } from "react-redux";

export default function Details({ navigation, route }) {
  const dado = route.params.info;
  console.log(dado);
  const [items, setItems] = useState([
    "ITEM 1",
    "ITEM 2",
    "ITEM 3",
    "ITEM 4"
  ]);
  const [res, setRes] = useState(initialState)
  // const user = useSelector(state => state.user);
  // console.log();

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const response = await api.api.post(`/producer/map_variables`, {
        "user": "andre",
        "area": dado
      });
      const resp = JSON.parse(response.data.body)
      console.log(resp);
      // var res = []
      // for (var i in resp) {
      //   resp.push(i)
      // };
      // console.log(res.length)
      setRes(JSON.parse(response.data.body));
    } catch (error) {
      console.log(error);
    }
  }

  function renderItem(info2) {
    const name = Object.keys(info2);
    return (
      <View
        style={styles.itemButton}
      // onPress={() => {
      //   navigation.navigate("profile-item-config", { info2: info2 });
      // }}
      >
        <Text style={styles.itemText}>{name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({ item: rowData, index }) => {
            return <View>{renderItem(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        /> */}

        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Area(m2): {res["Area(m2)"]}</Text>
        </View>
        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Cultivated(ha): {res["Cultivated(ha)"]}</Text>
        </View>
        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Harvested(t): {res["Harvested(t)"]}</Text>
        </View>
        <View
          style={styles.itemButton}
        >
          <Text style={styles.itemText}>Type: {res["type"]}</Text>
        </View>

      </View>
    </View>
  );
}
