import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

import styles from './styles';
import api from "../../../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Product({ navigation }) {
  console.log("****************** RODEI PAGINA PRODUCT ******************");
  const order = useSelector(state => state.order);
  const product = useSelector(state => state.product);

  const [modalVisible, setModalVisible] = useState(false);

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
            source={require("../../../assets/minus.png")}
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
            source={require("../../../assets/plus.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function modal() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Prato Adicionado ao pedido !!!
              </Text>

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Order");
                }}
              >
                <Text style={styles.textStyle}>Finalizar Pedido</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("Menu");
                }}
              >
                <Text style={styles.textStyle}>Continuar Comprando</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
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
        {modal()}
      </View>
      <View style={styles.endBar}>
        <Text style={styles.price}>{`R$ ${product.price}`}</Text>
        <TouchableOpacity
          style={styles.addBox}
          onPress={() => {
            if (order.len <= 0) {
              dispatch({ type: "ADD_INIT_ORDER", payload: product });
              setModalVisible(true);
              // navigation.navigate("Menu");
            } else {
              dispatch({ type: "ADD_ORDER", payload: product });
              setModalVisible(true);
              // navigation.navigate("Menu");
            }
          }}
        >
          <Text style={styles.add}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

