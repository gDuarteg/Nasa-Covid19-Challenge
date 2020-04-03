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

// import api from "../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ navigation }) {
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();

  console.log("------------ CART ------------");
  console.log(cart);

  useEffect(() => {
    sumPrice();
  }, [cart]);

  function sumPrice() {
    var respose = 0;
    for (var i in cart) {
      respose += cart[i].price;
    }
    setTotal(respose);
  }
  function renderCart(item) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartPrice}>{item.price}</Text>
        <TouchableOpacity
          style={styles.itemTrash}
          onPress={() => {
            dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
            sumPrice();
          }}
        >
          <Image
            style={styles.imgTrash}
            source={require("./images/trash.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Pedido</Text>
      </View>

      <View>
        <FlatList
          data={cart}
          renderItem={({ item: rowData, index }) => {
            return <View>{renderCart(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${total}`}</Text>
        <TouchableOpacity
          style={styles.payBox}
          onPress={() => {
            Alert.alert("Compra realizada com sucesso !!!");
            navigation.navigate("Home");
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
  cartLine: {
    flexDirection: "row",
    margin: 15,
    top: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "black"
  },
  cartName: {
    fontSize: 19,
    textAlign: "left"
  },
  cartPrice: {
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
