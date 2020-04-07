import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import api from "../services/api";
import menuu from "./mokado/menu";
import { isConfigurationAvailable } from "expo/build/AR";

export default function Menu({ navigation }) {
  console.log("****************** RODEI PAGINA MENU ******************");

  const user = useSelector(state => state.user);
  const menu = useSelector(state => state.menu);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  console.log("------------ CART ------------");
  console.log(cart);
  // console.log(cart.length);

  const [category, setCategory] = useState([
    "novidades",
    "carne",
    "peixe",
    "vegano"
  ]);

  const [select, setSelect] = useState(category[0]);
  const [menuCat, setMenuCat] = useState([]);

  //Executa quando a página é criada
  useEffect(() => {
    getMenu();
  }, []);

  //Executa quando "select" ou "menu" são modificados
  useEffect(() => {
    if (menu.length <= 0) {
      console.log("Building Menu Page");
    } else {
      console.log("Setting Menu");
      setMenuCat(menu.menu.menuu.filter(p => p.cat === select));
    }
  }, [menu, select]);

  const getMenu = async () => {
    try {
      // const response = await api.get("recipes/");
      // dispatch({ type: "ADD_MENU", payload: response.data.data });

      dispatch({ type: "ADD_MENU", payload: menuu });
    } catch (erro) {
      console.log(erro);
    }
  };

  function menuItem(item) {
    return (
      <TouchableOpacity
        style={styles.menuProductItem}
        onPress={() => {
          dispatch({ type: "ADD_PRODUCT", payload: item });
          navigation.navigate("Product");
        }}
      >
        <Text style={styles.menuProductName}>{item.name}</Text>
        <Text style={styles.menuProductPrice}>{`R$ ${item.price}`}</Text>
        <Text style={styles.menuProductDescrib}>{item.desc}</Text>
      </TouchableOpacity>
    );
  }

  function catItem(catSelect) {
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => {
          setSelect(catSelect);
        }}
      >
        <Text style={styles.categoryText}>{catSelect}</Text>
      </TouchableOpacity>
    );
  }
  function renderCartLen() {
    if (cart.len > 0) {
      return (
        <View style={styles.cartLenView}>
          <Text style={styles.cartLen}>{cart.len}</Text>
        </View>
      );
    }
  }
  return (
    <View style={styles.page}>
      <View style={styles.navBar}>
        <Text style={styles.title}>Menu Bytes</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Image style={styles.imgCart} source={require("./images/cart.png")} />
          {renderCartLen()}
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuCat}
          renderItem={({ item: rowData, index }) => {
            return <View>{menuItem(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.categoryBar}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item: rowData, index }) => {
            return <View>{catItem(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
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
  navBar: {
    backgroundColor: "steelblue",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "black",
    position: "absolute",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  cartLen: {
    justifyContent: "center",
    textAlign: "center"
  },
  cartLenView: {
    position: "absolute",
    right: -5,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 20
  },
  imgCart: {
    height: 40,
    width: 40
  },
  cartButton: {
    position: "absolute",
    right: 20
  },

  menu: {
    position: "absolute",
    alignItems: "center",
    left: 10,
    right: 10,
    top: 80,
    bottom: 65
  },
  menuProductItem: {
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderColor: "black",
    borderWidth: 0.4,
    height: 150,
    width: 370
  },
  menuProductName: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    left: 25,
    top: 15
  },
  menuProductPrice: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    right: 30
  },
  menuProductDescrib: {
    position: "absolute",
    fontSize: 15,
    color: "gray",
    left: 30,
    top: 50,
    width: 180,
    height: 75
  },

  categoryBar: {
    position: "absolute",
    borderColor: "black",
    backgroundColor: "silver",
    borderTopWidth: 1,
    height: 65,
    left: 0,
    right: 0,
    bottom: 0
  },
  categoryText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  categoryItem: {
    backgroundColor: "gray",
    textAlign: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: 160,
    marginHorizontal: 10,
    marginTop: 5
  }
});
