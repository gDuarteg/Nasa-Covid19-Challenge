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

export default function Cart({ route, navigation }) {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([
    {
      nome: "Sopa de Morcego",
      ing: ["arroz", "carne", "salada"],
      qnt: [10, 2, 5],
      cat: "novidades",
      desc: "Pode conter Corona Virus",
      id: 101,
      preço: 15.0
    },
    {
      nome: "Prato de Herói",
      ing: ["arroz", "carne", "salada"],
      qnt: [10, 2, 5],
      cat: "novidades",
      desc:
        "prato feito com petalas de rosas suiças marinado no sangue do mais nobre guerreiro de Hyrule",
      id: 102,
      preço: 30
    },
    {
      nome: "Joelho de Cobra",
      ing: ["arroz", "carne", "salada"],
      qnt: [10, 2, 5],
      cat: "novidades",
      desc:
        "prato feito com petalas de rosas suiças marinado no sangue do mais nobre guerreiro de Hyrule",
      id: 103,
      preço: 60
    },
    {
      nome: "Asa de Macaco",
      ing: ["arroz", "carne", "salada"],
      qnt: [10, 2, 5],
      cat: "novidades",
      desc:
        "prato feito com petalas de rosas suiças marinado no sangue do mais nobre guerreiro de Hyrule",
      id: 104,
      preço: 120
    }
  ]);

  useEffect(() => {
    sumPrice();
  }, []);

  function sumPrice() {
    var respose = 0;
    for (var i in cart) {
      respose += cart[i].preço;
    }
    setTotal(respose);
  }
  function renderCart(item) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.cartName}>{item.nome}</Text>
        <Text style={styles.cartPrice}>{item.preço}</Text>
        <TouchableOpacity
          style={styles.itemTrash}
          onPress={() => {
            removeItem(item);
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

  function removeItem(item) {
    var array = cart;
    array.splice(array.indexOf(item), 1);
    console.log(array);
    setCart(array);
  }

  return (
    <View style={styles.page}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Pedido</Text>
      </View>

      <View>
        <FlatList
          data={cart}
          renderItem={({ item: rowData }) => {
            return <View>{renderCart(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index}
        />
      </View>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${total}`}</Text>
        <TouchableOpacity
          style={styles.payBox}
          onPress={() => {
            Alert.alert("Compra realizada com sucesso !!!");
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
