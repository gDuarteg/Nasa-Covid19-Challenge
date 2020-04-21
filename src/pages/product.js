import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

import { colors } from "../styles";

import api from "../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Product({ navigation }) {
  console.log("****************** RODEI PAGINA PRODUCT ******************");
  const order = useSelector(state => state.order);
  const product = useSelector(state => state.product);

  const dispatch = useDispatch();
  console.log("---------------- PRODUCT --------------");
  useEffect(() => {
    getProductInfo();
  }, []);

  // GET MORE INFO ABOUT THE PRODUCT
  async function getProductInfo() {
    const respose = await api.global.get(`recipes/${product.name}`);
    dispatch({ type: "ADD_PRODUCT", payload: respose.data.data });
  }

  // Configuração de cada ingrediente do prato selecionado
  function configItem(item) {
    return (
      <View style={styles.itemLine}>
        <Text style={styles.itemIng}>{item.name}</Text>
        <TouchableOpacity
          style={styles.itemMinus}
          onPress={() => {
            dispatch({ type: "DEC_INGREDIENT", payload: item });
          }}
        >
          <Image
            style={styles.imgMinus}
            source={require("../assets/minus.png")}
          />
        </TouchableOpacity>
        <Text style={styles.itemQnt}>{item.weight}</Text>
        <TouchableOpacity
          style={styles.itemPlus}
          onPress={() => {
            dispatch({ type: "INC_INGREDIENT", payload: item });
          }}
        >
          <Image
            style={styles.imgPlus}
            source={require("../assets/plus.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <View style={styles.describeView}>
        <Text style={styles.describe}>{product.description}</Text>
      </View>

      <FlatList
        data={product.ingredients}
        renderItem={({ item: rowData, index }) => {
          return <View>{configItem(rowData)}</View>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.endBar}>
        <Text style={styles.price}>{`R$ ${product.price}`}</Text>
        <TouchableOpacity
          style={styles.addBox}
          onPress={() => {
            if (order.len <= 0) {
              dispatch({ type: "ADD_INIT_ORDER", payload: product });
              navigation.navigate("Menu");
            } else {
              dispatch({ type: "ADD_ORDER", payload: product });
              navigation.navigate("Menu");
            }
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
    flex: 1,
    backgroundColor: colors.page
  },
  describeView: {
    height: 150,
    backgroundColor: colors.itemBackground,
    margin: 10
  },
  describe: {
    color: colors.text,
    fontSize: 15,
    left: 10,
    marginRight: 10
  },
  itemLine: {
    margin: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border
  },
  itemIng: {
    color: colors.text,
    fontSize: 19,
    marginLeft: 10
  },
  itemQnt: {
    color: colors.text,
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
    backgroundColor: colors.endBarBackground,
    borderTopColor: colors.endBarBorder,
    borderTopWidth: 1,
    height: 60,
    justifyContent: "center"
  },
  price: {
    color: colors.text,
    position: "absolute",
    fontWeight: "bold",
    fontSize: 30,
    left: 20
  },
  add: {
    color: colors.buttonText,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5
  },
  addBox: {
    borderWidth: 1,
    backgroundColor: colors.buttonBackgrond,
    borderColor: colors.buttonBorderColor,
    borderRadius: 8,
    height: 45,
    width: 120,
    alignSelf: "flex-end",
    right: 10,
    justifyContent: "center"
  }
});
