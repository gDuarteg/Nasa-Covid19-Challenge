import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from './styles';

// import api from "../../../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Order({ navigation }) {
  const order = useSelector(state => state.order);

  const dispatch = useDispatch();
  console.log("****************** RODEI PAGINA ORDER ******************");
  console.log("------------ ORDER ------------");
  console.log(order);

  function renderCart(item) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.itemTrash}
          onPress={() => {
            dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
          }}
        >
          <Image
            style={styles.imgTrash}
            source={require("../../../assets/trash.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <FlatList
          data={order.cart}
          renderItem={({ item: rowData, index }) => {
            return <View>{renderCart(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${order.price}`}</Text>
        <TouchableOpacity
          style={styles.buttonViewNext}
          onPress={() => {
            navigation.navigate("QRScanner");
          }}
        >
          <Text style={styles.buttonTextNext}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

