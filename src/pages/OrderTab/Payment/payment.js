import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";

import styles from './styles';

// import api from "../../../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function Payment({ navigation }) {
  const user = useSelector(state => state.user);
  const order = useSelector(state => state.order);

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  console.log("------------ ORDER ------------");
  console.log(order);
  console.log("------------ USER ------------");
  console.log(user);

  async function postOrder() {
    // const response = await api.global.post("payment/", {
    //   user: user.token,
    //   order: order
    // });
    const response = {
      data: {
        status: "success"
      }
    };
    if (response.data.status === "success") {
      setModalVisible(true);
      dispatch({ type: "CLEAN_CART" });
      navigation.navigate("TrackOrder");
    }
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
                Compra realizada com sucesso !!!
              </Text>

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Ok</Text>
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
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Tempo de preparo 5 min</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>
            Cartao de Crédito finalizado em{" "}
            {user.cards[0].number.slice(user.cards[0].number.length - 4)}
          </Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>
            Quantidade de Produtos: {order.len}
          </Text>
        </View>
        {/* <View style={styles.itemView}>
          <Text style={styles.rowItem}>Dividir Conta</Text>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.rowItem}>Inserir Cupom de desconto</Text>
        </View> */}
        <View style={styles.itemViewSumary}>
          <Text style={styles.rowItem}> Sumário</Text>
          <Text style={styles.rowSubItem}>+ Produtos {order.price}</Text>
          <Text style={styles.rowSubItem}>+ Imposto {0}</Text>
          <Text style={styles.rowSubItem}>- Desconto {0}</Text>
        </View>
        {modal()}
      </View>

      <View style={styles.endBar}>
        <Text style={styles.price}>{`Total: R$ ${order.price}`}</Text>
        <TouchableOpacity
          style={styles.buttonViewConfirm}
          onPress={() => {
            postOrder();
          }}
        >
          <Text style={styles.buttonTextConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
