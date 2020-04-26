import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import CountDown from 'react-native-countdown-component';

import styles from './styles';

// import api from "../../../services/api";
import { useSelector, useDispatch } from "react-redux";

export default function TrackOrder({ navigation }) {
  const order = useSelector(state => state.order);
  // const dispatch = useDispatch();
  console.log("------------ ORDER ------------");
  console.log(order);

  // async function getTrackerUpdates() {
  //   try {
  //     const response = await api.global.get("trackOrder/");
  //     dispatch({ type: "FINISH_TIME_ORDER", payload: response.data.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>Tempo para ficar pronto</Text>
          <CountDown
            size={30}
            until={10} // TIME IN SECONDS
            onFinish={() => Alert.alert('Prato finalizado !!!')}
            digitStyle={styles.CountDownDigitStyle}
            digitTxtStyle={styles.CountDownDigitTxtStyle}
            separatorStyle={styles.CountDownSeparatorStyle}
            timeToShow={[/*'H',*/ 'M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />
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
          style={styles.buttonViewConfirm}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonTextConfirm}>Recebi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
