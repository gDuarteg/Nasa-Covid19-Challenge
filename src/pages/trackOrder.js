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

import { colors } from "../styles";

// import api from "../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function trackOrder({ navigation }) {
  const cart = useSelector(state => state.cart);

  // const dispatch = useDispatch();

  console.log("------------ CART ------------");
  console.log(cart);

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>Tempo para ficar pronto</Text>
          <Text style={styles.time}>05:43</Text>
        </View>
        <ScrollView>
          <View style={styles.statusView}>
            <View>
              <Text style={styles.statusText}> Confirmado</Text>
              <View style={styles.status}></View>
            </View>
            <View>
              <Text style={styles.statusText}> Aguardando fila</Text>
              <View style={styles.status}></View>
            </View>
            <View>
              <Text style={styles.statusText}> Cozinhando</Text>
              <View style={styles.status}></View>
            </View>
            <View>
              <Text style={styles.statusText}> Finalizado</Text>
              <View style={styles.status}></View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.endBar}>
        <TouchableOpacity
          style={styles.confirmButtonView}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.confirmButton}>Recebi</Text>
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
  body: {
    margin: 15
  },
  timeView: {
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    marginVertical: 20,
    height: 120
  },
  timeText: {
    textAlign: "center",
    fontSize: 20
  },
  time: {
    textAlign: "center",
    fontSize: 50
  },
  statusView: {
    justifyContent: "center",
    // backgroundColor: "white",
    margin: 7
  },
  statusText: {
    marginLeft: 10,
    fontSize: 18
  },
  status: {
    position: "absolute",
    alignSelf: "flex-end",
    borderColor: colors.border,
    margin: 5,
    borderWidth: 2,
    width: 15,
    height: 15
  },

  endBar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: colors.endBarBackground,
    justifyContent: "center"
  },
  confirmButton: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
    marginHorizontal: 60
  },
  confirmButtonView: {
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 8,
    alignSelf: "center",
    right: 10
  }
});
