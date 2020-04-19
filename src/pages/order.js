import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import { colors } from "../styles";

// import api from "../services/api";
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
            // sumPrice();
          }}
        >
          <Image
            style={styles.imgTrash}
            source={require("../assets/trash.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View>
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

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.page
  },
  cartLine: {
    flexDirection: "row",
    margin: 15,
    top: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border
  },
  cartName: {
    color: colors.text,
    fontSize: 19,
    textAlign: "left"
  },
  cartPrice: {
    color: colors.text,
    position: "absolute",
    right: 50,
    fontSize: 19,
    bottom: 2
  },
  itemTrash: {
    position: "absolute",
    right: 10
  },
  imgTrash: {
    width: 20,
    height: 20
  },
  endBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: colors.endBarBackground,
    borderTopColor: colors.endBarBorder,
    borderTopWidth: 1,
    justifyContent: "center"
  },
  price: {
    color: colors.text,
    position: "absolute",
    fontSize: 30,
    textAlign: "left",
    marginLeft: 20,
    fontWeight: "bold"
  },
  buttonTextNext: {
    color: colors.buttonText,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5
  },
  buttonViewNext: {
    borderWidth: 1,
    borderColor: colors.buttonBorderColor,
    backgroundColor: colors.buttonBackgrond,
    height: 45,
    width: 120,
    borderRadius: 8,
    alignSelf: "flex-end",
    right: 10,
    justifyContent: "center"
  }
});
