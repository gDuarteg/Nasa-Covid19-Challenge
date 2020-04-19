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
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Cart({ navigation }) {
  // const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();
  console.log("****************** RODEI PAGINA CART ******************");
  console.log("------------ CART ------------");
  console.log(cart);
  // console.log(cart.cart[0].price);

  // useEffect(() => {
  //   sumPrice();
  // }, [cart]);

  // function sumPrice() {
  //   var respose = 0;
  //   for (var i in cart.cart) {
  //     respose += cart.cart[i].price;
  //   }
  //   setTotal(respose);
  // }
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
          data={cart.cart}
          renderItem={({ item: rowData, index }) => {
            return <View>{renderCart(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${cart.price}`}</Text>
        <TouchableOpacity
          style={styles.payBox}
          onPress={() => {
            // Alert.alert("Compra realizada com sucesso !!!");
            navigation.navigate("Payment");
          }}
        >
          <Text style={styles.pay}>Continuar</Text>
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
  pay: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    margin: 5
  },
  payBox: {
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 8,
    alignSelf: "flex-end",
    right: 10
  }
});
