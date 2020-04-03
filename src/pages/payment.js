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
  return (
    <View style={styles.page}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Pagamento</Text>
      </View>

      <ScrollView style={styles.body}>
        <View>
          <Text style={styles.rowItem}>Tempo de preparo 5 min</Text>
        </View>
        <View>
          <Text style={styles.rowItem}>N de Produtos</Text>
        </View>
        <View>
          <Text style={styles.rowItem}>Inserir Cupom de desconto</Text>
        </View>
        <View>
          <Text style={styles.rowItem}>
            Cartao de Crédito finalizado em *0123
          </Text>
        </View>
        <View>
          <Text style={styles.rowItem}>Dividir Conta</Text>
        </View>
        <View>
          <Text>+ Produtos </Text>
          <Text>+ Imposto</Text>
          <Text>+ Gorjeta</Text>
          <Text>- Desconto</Text>
        </View>
      </ScrollView>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${total}`}</Text>
        <TouchableOpacity
          style={styles.payBox}
          onPress={() => {
            Alert.alert("Compra realizada com sucesso !!!");
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
    fontSize: 18
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
