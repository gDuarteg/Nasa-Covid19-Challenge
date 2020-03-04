/* eslint-disable no-trailing-spaces */
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

export default function Product({ route, navigation }) {
  const { token } = route.params;
  const { product } = route.params;
  const [dish, setDish] = useState([]);

  useEffect(() => {
    createDishArray();
  }, []);

  function createDishArray() {
    var dishArray = [];
    for (var i in product.ing) {
      dishArray.push({
        ing: product.ing[i],
        qnt: product.qnt[i]
      });
    }
    setDish(dishArray);
  }

  // Configuração de cada ingrediente do prato selecionado
  function configItem(item) {
    return (
      <View style={styles.itemLine}>
        <Text style={styles.itemIng}>{item.ing}</Text>
        <TouchableOpacity
          style={styles.itemMinus}
          onPress={() => {
            Alert.alert("Menos");
          }}
        >
          <Image
            style={styles.imgMinus}
            source={require("./images/minus.png")}
          />
        </TouchableOpacity>
        <Text style={styles.itemQnt}>{item.qnt}</Text>
        <TouchableOpacity
          style={styles.itemPlus}
          onPress={() => {
            Alert.alert(`Mais ${item.ing}`);
          }}
        >
          <Image style={styles.imgPlus} source={require("./images/plus.png")} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>{product.nome}</Text>
      </View>
      <View style={styles.describeView}>
        <Text style={styles.describe}>{product.desc}</Text>
      </View>

      <FlatList
        data={dish}
        renderItem={({ item: rowData }) => {
          return <View>{configItem(rowData)}</View>;
        }}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Valor: R$ ${product.preço}`}</Text>

        <TouchableOpacity
          style={styles.addBox}
          onPress={() => {
            Alert.alert("Item Adicionado ao carrinho");
            navigation.navigate("Menu", { token: token });
          }}
        >
          <Text style={styles.add}>Adicionar</Text>
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
    top: 0,
    right: 0,
    left: 0,
    height: 120,
    backgroundColor: "steelblue",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  },
  describeView: {
    height: 150,
    backgroundColor: "lightgray",
    margin: 10
  },
  describe: {
    fontSize: 15,
    left: 10,
    marginRight: 10
  },
  itemLine: {
    margin: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "black"
  },
  itemIng: {
    fontSize: 19,
    marginLeft: 10
  },
  itemQnt: {
    position: "absolute",
    right: 40,
    fontSize: 19,
    bottom: 5
  },
  itemPlus: {
    position: "absolute",
    right: 10
  },
  imgPlus: {
    height: 20,
    width: 20
  },
  itemMinus: {
    position: "absolute",
    right: 70
  },
  imgMinus: {
    width: 20,
    height: 20
  },
  endBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "gray",
    height: 60,
    justifyContent: "center"
  },
  price: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 30,
    left: 20
  },
  add: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    margin: 5
  },
  addBox: {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 8,
    alignSelf: "flex-end",
    right: 10
  }
});
