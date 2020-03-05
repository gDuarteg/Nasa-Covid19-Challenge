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

import api from "../services/api";
import menuu from "./mokado/menu";

export default function Menu({ route, navigation }) {
  const { token } = route.params;
  // const { CN } = route.params;
  const [category, setCategory] = useState([
    "novidades",
    "carne",
    "peixe",
    "vegano"
  ]);
  const [select, setSelect] = useState("novidades");
  const [menu, setMenu] = useState(menuu);
  const [menu2, setMenu2] = useState();
  const [menuCat, setMenuCat] = useState([]);
  // const [cartNum, setCartNum] = useState();

  //Executa quando a página é criada
  useEffect(() => {
    getMenu();
    createMenuCat();
  }, []);

  //Executa quando uma categoria de itens é selecionada
  useEffect(() => {
    createMenuCat();
  }, [select]);

  const getMenu = async () => {
    try {
      const response = await api.get("recipes/");
      console.log(response.data.data);
      setMenu2(response.data.data);
    } catch (erro) {
      console.log(erro);
    }
  };

  function createMenuCat() {
    var NewMenuCat = [];
    for (var i in menu.menuu) {
      if (menu.menuu[i].cat === select) {
        NewMenuCat.push(menu.menuu[i]);
      }
    }
    setMenuCat(NewMenuCat);
  }

  function menuItem(item) {
    return (
      <TouchableOpacity
        style={styles.menuProductItem}
        onPress={() => {
          navigation.navigate("Product", { product: item, token: token });
        }}
      >
        <Text style={styles.menuProductName}>{item.name}</Text>
        {/* <Text style={styles.menuProductPrice}>{`R$ ${item.preço}`}</Text>
        <Text style={styles.menuProductDescrib}>{item.desc}</Text> */}
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
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menu2}
          renderItem={({ item: rowData }) => {
            return <View>{menuItem(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index}
        />
      </View>

      <View style={styles.categoryBar}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item: rowData }) => {
            return <View>{catItem(rowData)}</View>;
          }}
          keyExtractor={(item, index) => index}
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
