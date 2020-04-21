import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { colors } from "../styles";

import { useSelector, useDispatch } from "react-redux";

import api from "../services/api";

export default function Menu({ navigation }) {
  console.log("****************** RODEI PAGINA MENU ******************");
  const menu = useSelector(state => state.menu);
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  console.log("------------ ORDER ------------");
  console.log(order);

  const [category, setCategory] = useState([
    "novidades",
    "carne",
    "peixe",
    "vegano"
  ]);

  const [select, setSelect] = useState(category[0]);
  const [menuCategory, setMenuCategory] = useState([]);

  //Executa quando a página é criada
  useEffect(() => {
    getMenu();
  }, []);

  //Executa quando "select" ou "menu" são modificados
  useEffect(() => {
    if (menu.length <= 0) {
      console.log("Building Menu Page");
    } else {
      console.log("Setting Category Menu");
      setMenuCategory(menu.filter(p => p.category === select));
    }
  }, [menu, select]);

  async function getMenu() {
    try {
      const response = await api.global.get("recipes/");
      dispatch({ type: "ADD_MENU", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  }

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
        <Text style={styles.menuProductDescrib}>{item.description}</Text>
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
      <View style={styles.menu}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menuCategory}
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
    flex: 1,
    backgroundColor: colors.page
  },
  menu: {
    alignItems: "center",
    marginTop: 15
  },
  menuProductItem: {
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.itemBackground,
    borderColor: colors.border,
    borderWidth: 0.4,
    height: 150,
    width: 370
  },
  menuProductName: {
    color: colors.text,
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    left: 25,
    top: 15
  },
  menuProductPrice: {
    color: colors.text,
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    right: 30
  },
  menuProductDescrib: {
    position: "absolute",
    fontSize: 15,
    color: colors.textLight,
    left: 30,
    top: 50,
    width: 180,
    height: 75
  },

  categoryBar: {
    position: "absolute",
    borderColor: colors.border,
    backgroundColor: colors.page,
    borderTopWidth: 1,
    height: 65,
    left: 0,
    right: 0,
    bottom: 0
  },
  categoryText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold"
  },
  categoryItem: {
    backgroundColor: colors.endBarBackground,
    textAlign: "center",
    justifyContent: "center",
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: 160,
    marginHorizontal: 10,
    marginTop: 5
  }
});
