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
      <View style={styles.titleBar}>
        <Text style={styles.title}>Pagamento</Text>
      </View>

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
        </View> */}
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Inserir Cupom de desconto</Text>
        </View>
        <View style={styles.itemViewSumary}>
          <Text style={styles.rowItem}> Sumário</Text>
          <Text style={styles.rowSubItem}>+ Produtos </Text>
          <Text style={styles.rowSubItem}>+ Imposto</Text>
          <Text style={styles.rowSubItem}>+ Gorjeta</Text>
          <Text style={styles.rowSubItem}>- Desconto</Text>
        </View>
      </ScrollView>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${cart.price}`}</Text>
        <TouchableOpacity
          style={styles.payBox}
          onPress={() => {
            // postCart();
            Alert.alert("Compra realizada com sucesso !!!");
            dispatch({ type: "CLEAN_CART" });
            navigation.navigate("TrackOrder");
          }}
        >
          <Text style={styles.pay}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 49,
    flex: 1,
    backgroundColor: "silver"
  },
  titleBar: {
    height: 60,
    backgroundColor: "steelblue",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  body: {
    margin: 15
  },
  rowItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
  rowSubItem: {
    fontSize: 16,
    marginLeft: 35
  },
  itemView: {
    backgroundColor: "white",
    marginVertical: 10,
    height: 80
  },
  itemViewSumary: {
    backgroundColor: "white",
    marginVertical: 10,
    height: 130
  },
  endBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: "gray",
    justifyContent: "center"
  },
  price: {
    position: "absolute",
    fontSize: 30,
    textAlign: "left",
    marginLeft: 20,
    fontWeight: "bold"
  },
  pay: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    margin: 5
  },
  payBox: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 8,
    alignSelf: "flex-end",
    right: 10
  }
});
