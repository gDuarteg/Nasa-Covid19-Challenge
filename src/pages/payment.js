import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView
} from "react-native";

import { colors } from "../styles";

// import api from "../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Payment({ navigation }) {
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  console.log("------------ CART ------------");
  console.log(cart);
  console.log("------------ USER ------------");
  console.log(user);

  async function postCart() {
    console.log("enviando pedido ao beckend");
    const response = await api.post("payment/", {
      token: user.token,
      cart: cart
    });
    if (respose === "sucess") {
      Alert.alert("Compra realizada com sucesso !!!");
      navigation.navigate("TrackOrder");
    }
  }

  return (
    <View style={styles.page}>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Tempo de preparo 5 min</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>
            Cartao de Crédito finalizado em{" "}
            {user.cards[0].number.slice(user.cards[0].number.length - 4)}
          </Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Quantidade de Produtos: {cart.len}</Text>
        </View>
        {/* <View style={styles.itemView}>
          <Text style={styles.rowItem}>Dividir Conta</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Inserir Cupom de desconto</Text>
        </View> */}
        <View style={styles.itemViewSumary}>
          <Text style={styles.rowItem}> Sumário</Text>
          <Text style={styles.rowSubItem}>+ Produtos {cart.price}</Text>
          <Text style={styles.rowSubItem}>+ Imposto {0}</Text>
          <Text style={styles.rowSubItem}>- Desconto {0}</Text>
        </View>
      </ScrollView>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${cart.price}`}</Text>
        <TouchableOpacity
          style={styles.confirmBox}
          onPress={() => {
            // postCart();
            Alert.alert("Compra realizada com sucesso !!!");
            dispatch({ type: "CLEAN_CART" });
            navigation.navigate("TrackOrder");
          }}
        >
          <Text style={styles.confirm}>Confirmar</Text>
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
  body: {
    margin: 15
  },
  rowItem: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
  rowSubItem: {
    color: colors.textLight,
    fontSize: 16,
    marginLeft: 35
  },
  itemView: {
    backgroundColor: colors.itemBackground,
    marginVertical: 10,
    height: 80,
    borderWidth: 0.7,
    borderRadius: 8
  },
  itemViewSumary: {
    backgroundColor: colors.itemBackground,
    marginVertical: 10,
    height: 100,
    borderWidth: 0.7,
    borderRadius: 8
  },
  endBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: colors.endBarBackground,
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
  confirm: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    margin: 5
  },
  confirmBox: {
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 8,
    alignSelf: "flex-end",
    right: 10
  }
});
