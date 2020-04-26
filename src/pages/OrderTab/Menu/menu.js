import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import styles from './styles';

import { useSelector, useDispatch } from "react-redux";

import api from "../../../services/api";

export default function Menu({ navigation }) {
  console.log("****************** RODEI PAGINA MENU ******************");
  const menu = useSelector(state => state.menu);
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  // console.log("------------ Menu ------------");
  // console.log(menu);

  const [category, setCategory] = useState(0);

  const [select, setSelect] = useState(0);
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

      var listCategory = ["novidades"];
      for (var i = 0; i < response.data.data.length; i++) {
        if (listCategory.indexOf(response.data.data[i].category) === -1) {
          listCategory.push(response.data.data[i].category);
        }
      }
      setCategory(listCategory);
      setSelect(listCategory[0]);
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
      <View style={styles.body}>
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
        <View>
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
    </View>
  );
}
